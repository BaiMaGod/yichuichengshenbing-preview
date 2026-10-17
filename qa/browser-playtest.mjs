import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
const out=process.env.QA_OUT||'qa-evidence';await mkdir(out,{recursive:true});
const args=['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader'];
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args});
const reports=[],sizes=process.env.QA_SIZE?[process.env.QA_SIZE.split('x').map(Number)]:[[390,844],[360,800],[1280,900]];
// Only visual fixtures receive this longer deadline; real four-second expiry is tested first.
const VISUAL_FRENZY_MS=10*60*1000;
const SCREENSHOT_TIMEOUT=120000;
const key='yichuichengshenbing.v5',url=process.env.QA_URL||'http://127.0.0.1:4173';
function next(n){n^=n<<13;n^=n>>>17;n^=n<<5;return n>>>0;}
function seedForRange(low,high){for(let n=1;n<1000000;n++){const r=next(n)/2**32;if(r>=low&&r<high)return n;}throw Error('no fixture seed');}
function successfulChain(){for(let n=1;n<1000000;n++){let x=n,valid=true;for(let i=0;i<7;i++){x=next(x);if(x/2**32>=.3){valid=false;break;}}if(valid)return n;}throw Error('no chain seed');}
async function assertEnchantedFrame(page,expected){
 const frame=await page.evaluate(key=>{const d=document.querySelector('#scene3d').dataset,s=JSON.parse(localStorage.getItem(key)).session;return {rendered:d.bladeRenderedFinish,hilt:d.hiltFinish,frenzy:d.frenzy,remainingMs:s.frenzyUntil-Date.now(),superGod:s.superGod};},key);
 assert.equal(frame.rendered,expected,'Rendered finish changed during pixel sampling: '+JSON.stringify(frame));
 assert.equal(frame.hilt,expected,'Hilt finish changed during pixel sampling: '+JSON.stringify(frame));
 if(expected==='rainbow'){assert.equal(frame.frenzy,'active');assert.ok(frame.remainingMs>0,'Visual fixture expired before sampling finished');}
 else assert.equal(frame.superGod,true);
}
async function bladePixels(page,proof,path){
 if(proof.expectedFinish){
  await assertEnchantedFrame(page,proof.expectedFinish);
  const previous=await page.locator('#scene3d').evaluate(e=>Number(e.dataset.gpuCompletedFrames||0));
  await page.waitForFunction(n=>Number(document.querySelector('#scene3d').dataset.gpuCompletedFrames)>n,previous);
  await assertEnchantedFrame(page,proof.expectedFinish);
 }
 const b=proof.bounds,clip={x:Math.floor(b.left),y:Math.floor(b.top),width:Math.ceil(b.right)-Math.floor(b.left),height:Math.ceil(b.bottom)-Math.floor(b.top)};
 const bytes=(await page.screenshot(path?{path,timeout:SCREENSHOT_TIMEOUT}:{clip,timeout:SCREENSHOT_TIMEOUT})).toString('base64');if(path){clip.x=0;clip.y=0;}
 const colors=await page.evaluate(async({bytes,points,clip})=>{
  const image=await createImageBitmap(new Blob([Uint8Array.from(atob(bytes),c=>c.charCodeAt(0))],{type:'image/png'})),canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0);image.close();
  return points.map(p=>{const rgb=ctx.getImageData(Math.round(p.x-clip.x)-1,Math.round(p.y-clip.y)-1,3,3).data,sums=[0,0,0];for(let i=0;i<rgb.length;i+=4)for(let c=0;c<3;c++)sums[c]+=rgb[i+c];return sums.map(n=>n/9);});
 },{bytes,points:proof.samples,clip});
 if(proof.expectedFinish)await assertEnchantedFrame(page,proof.expectedFinish);
 return colors;
}
function hueBins(colors){return new Set(colors.flatMap(([r,g,b])=>{const max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min;if(d<30||max<70)return[];let h=max===r?(g-b)/d+(g<b?6:0):max===g?(b-r)/d+2:(r-g)/d+4;return[Math.floor(h)%6];}));}
let active,activeConsoleMessages=[];
try{
for(const [width,height] of sizes){
 const page=active=await browser.newPage({viewport:{width,height},hasTouch:width<800});page.setDefaultTimeout(45000);
 const errors=[],failed=[],consoleMessages=[];activeConsoleMessages=consoleMessages;page.on('console',m=>{if(m.type()==='warning'||m.type()==='error')consoleMessages.push(m.text());});page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>failed.push(r.url()));
 await page.addInitScript(k=>{const staged=sessionStorage.getItem('__forge_qa_staged_save');if(staged!==null){localStorage.setItem(k,staged);localStorage.removeItem(k+'.meta');sessionStorage.removeItem('__forge_qa_staged_save');}},key);
 if(process.env.QA_FONT){const font=(await readFile(process.env.QA_FONT)).toString('base64');await page.addInitScript(data=>{const face=new FontFace('Forge QA CJK',Uint8Array.from(atob(data),c=>c.charCodeAt(0)));document.fonts.add(face);void face.load();const prop=Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,'font');Object.defineProperty(CanvasRenderingContext2D.prototype,'font',{...prop,set(v){prop.set.call(this,v.replace('sans-serif','"Forge QA CJK",sans-serif'));}});document.addEventListener('DOMContentLoaded',()=>{const css=document.createElement('style');css.textContent='body,button,select{font-family:"Forge QA CJK",sans-serif!important}';document.head.append(css);});},font);}
 await page.addInitScript(()=>{window.__audioProbes=[];const connect=AudioNode.prototype.connect;AudioNode.prototype.connect=function(dest,...rest){if(dest instanceof AudioDestinationNode){const a=this.context.createAnalyser();a.fftSize=2048;connect.call(this,a);window.__audioProbes.push(a);}return connect.call(this,dest,...rest);};window.__peak=()=>Math.max(0,...window.__audioProbes.map(a=>{const values=new Float32Array(a.fftSize);a.getFloatTimeDomainData(values);return Math.max(...values.map(Math.abs));}));});
 const state=()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);
 const point=name=>page.locator('#scene3d').evaluate((host,name)=>{const p=JSON.parse(host.dataset.targets)[name],r=host.getBoundingClientRect();return{x:r.x+p.x,y:r.y+p.y};},name);
 const tap=async name=>{const p=await point(name);assert.ok(p.x>0&&p.x<width&&p.y>90&&p.y<height-170,`${name} visible: ${JSON.stringify(p)}`);if(width<800)await page.touchscreen.tap(p.x,p.y);else await page.mouse.click(p.x,p.y);};
 const ready=async()=>{await page.waitForSelector('#scene3d[data-cat-asset="ready"]');await page.waitForFunction(()=>Number(document.querySelector('#scene3d').dataset.renderCalls)>0);await page.waitForFunction(()=>!!document.querySelector('#scene3d').dataset.forgeProof);await page.waitForTimeout(500);};
 const fixture=async s=>{await page.evaluate(save=>sessionStorage.setItem('__forge_qa_staged_save',JSON.stringify(save)),s);await page.reload();await ready();};
 const idle=()=>page.waitForFunction(()=>document.querySelector('#scene3d').dataset.hammerStage==='idle');
 const hit=async()=>{const count=(await state()).session.hits;await tap('anvil');await page.waitForFunction(({k,n})=>JSON.parse(localStorage.getItem(k)).session.hits===n,{k:key,n:count+1});await idle();};
 const snap=async name=>{const s=(await state())?.session;if(s?.phase==='forge')await page.waitForFunction(n=>Number(document.querySelector('#scene3d').dataset.boardRenderedHits)===n,s.hits);await page.waitForTimeout(250);await page.screenshot({path:`${out}/${width}-${name}.png`,timeout:SCREENSHOT_TIMEOUT});};
 await page.addInitScript(()=>localStorage.setItem('yichuichengshenbing.tutorial.v4',JSON.stringify({version:1,step:'done',skipped:true,replay:false,startTributes:0})));
 await page.goto(url);await ready();assert.equal(await page.locator('#menu-toggle').count(),0);assert.deepEqual(await page.locator('.station-nav button').allTextContents(),['剑架','锻剑','纳贡','遗物']);const navBounds=await page.locator('.station-nav').boundingBox();assert.ok(navBounds.y>height-90&&navBounds.y+navBounds.height<=height,'four destinations stay at bottom');assert.equal(await page.locator('#target-water').count(),0);assert.equal(await page.locator('#quench').count(),0);
 console.log(`${width}: loaded workshop`);await snap('workshop');await tap('furnace');await page.waitForSelector('#scene3d[data-sword-place="furnace"]');await page.waitForFunction(()=>Number(document.querySelector('#scene3d').dataset.heat)>=74);await tap('anvil');await page.waitForFunction(()=>document.querySelector('.game').dataset.phase==='forge');await page.waitForTimeout(800);
 console.log(`${width}: heating and placement complete`);const baseline=await state();baseline.session.tutorial=false;assert.equal(baseline.session.hits,0);assert.equal(baseline.session.goodHeat,true);assert.equal(await page.locator('#forge-options').getAttribute('open'),null);
 assert.equal(await page.locator('#target-anvil').isVisible(),false,'no label covers the sword during forging');assert.equal(await page.locator('#target-anvil').textContent(),'');
 await page.locator('#station-cat').click();assert.equal((await state()).session.hits,0);await page.locator('#station-forge').click();await page.waitForTimeout(900);
 await page.locator('#sound').click();await page.locator('#sound').click();assert.equal((await state()).session.hits,0);
 const test=structuredClone(baseline);test.session.seed=successfulChain();await fixture(test);
 // A stalled GPU fence must never block hit settlement or leave the information board at zero.
 await page.evaluate(()=>{const original=WebGL2RenderingContext.prototype.clientWaitSync;window.__restoreFence=()=>{WebGL2RenderingContext.prototype.clientWaitSync=original;};WebGL2RenderingContext.prototype.clientWaitSync=function(){return this.TIMEOUT_EXPIRED;};});
 const stuckBefore=(await state()).session.currentValue;await hit();
 assert.equal((await state()).session.currentValue,stuckBefore*1.5);assert.equal(Number(await page.locator('#scene3d').getAttribute('data-board-value')),stuckBefore*1.5);
 assert.ok((await page.locator('#value-now').textContent()).includes(Math.floor(stuckBefore*1.5).toLocaleString('zh-CN')));
 await page.evaluate(()=>window.__restoreFence());await fixture(test);
 await page.waitForFunction(()=>{const p=document.querySelector('#scene3d').dataset.forgeProof;return p&&JSON.parse(p).phase==='forge';});const baseBladeColors=await bladePixels(page,JSON.parse(await page.locator('#scene3d').getAttribute('data-forge-proof')));
 // Mouse events and real touch both hit the world object. Empty areas and UI do not.
 // An absolute corner coordinate may fall inside the anvil hitbox at different camera aspect ratios.
 // Use the scene's real pointer raycast (cursor) to select a non-interactive canvas point.
 const sceneRect=await page.locator('#scene3d').boundingBox();let emptyPoint=null;
 const candidates=[[.02,.1],[.98,.1],[.02,.35],[.98,.35],[.02,.65],[.98,.65],[.1,.12],[.9,.12],[.1,.45],[.9,.45],[.1,.85],[.9,.85],[.5,.10],[.5,.90]];
 for(const [fx,fy] of candidates){
  const x=sceneRect.x+sceneRect.width*fx,y=sceneRect.y+sceneRect.height*fy;
  await page.mouse.move(x,y);
  const unused=await page.evaluate(({x,y})=>{const scene=document.querySelector('#scene3d'),el=document.elementFromPoint(x,y);return scene.contains(el)&&scene.style.cursor==='default';},{x,y});
  if(unused){emptyPoint={x,y};break;}
 }
 assert.ok(emptyPoint,'No available empty canvas point after raycast verification');
 await page.mouse.click(emptyPoint.x,emptyPoint.y);
 assert.equal((await state()).session.hits,0,'Raycast-confirmed empty canvas point must not forge a hit');
 assert.equal(await page.locator('#scene3d').getAttribute('data-station'),'forge','empty floor does not switch station');
 const p=await point('anvil');await page.mouse.click(p.x,p.y,{clickCount:3,delay:10});await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).session.hits===1,key);await idle();assert.equal((await state()).session.hits,1);
 await page.waitForSelector('#scene3d[data-audio-state="ready"]');await page.locator('#sound').click();const audioBefore=await page.locator('#scene3d').getAttribute('data-audio-played');await hit();assert.equal(await page.locator('#scene3d').getAttribute('data-audio-played'),audioBefore);assert.ok(await page.evaluate(()=>window.__peak())<.0001);
 await page.locator('#sound').click();await hit();assert.ok(Number(await page.locator('#scene3d').getAttribute('data-audio-played'))>Number(audioBefore||0));
 for(let i=3;i<7;i++)await hit();const seven=await state();assert.equal(seven.session.phase,'forge');assert.equal(seven.session.hits,7);assert.equal(seven.session.level,7);assert.equal(seven.session.currentValue,320*1.5**7);console.log(`${width}: seven strikes complete`);await snap('seven-hits');
 await page.waitForFunction(()=>!!document.querySelector('#scene3d').dataset.forgeProof);const proof=JSON.parse(await page.locator('#scene3d').getAttribute('data-forge-proof'));assert.equal(proof.visibleSamples,proof.totalSamples-(proof.sampleSurfaces||[]).filter(name=>name==='none').length);assert.ok(proof.visibleSamples>=5,'at least five actual blade surfaces are visible; open geometry is not treated as occlusion');assert.ok(proof.faceHeight>=20);assert.ok(proof.bounds.left>=0&&proof.bounds.right<=width);assert.ok(proof.bounds.bottom<proof.navTop);
 assert.ok(proof.benchBounds.left>=0&&proof.benchBounds.right<=width,'complete bench fits screen');assert.ok(proof.ledger.bottom<=proof.benchBounds.top-10,'sign stays above the bench');assert.ok(proof.ledger.bottom<proof.bounds.top,'sign stays above the blade');assert.ok(proof.benchBounds.bottom<proof.navTop,'bench clears action row');assert.ok(proof.ledger.left>=0&&proof.ledger.right<=width,'sign fits screen');assert.ok(proof.ledger.top<height*.3,'sign remains in upper screen');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollHeight>innerHeight),false,'page fits viewport height');
 const upgradedBladeColors=await bladePixels(page,proof);assert.ok(baseBladeColors.some((rgb,i)=>rgb.reduce((n,c,j)=>n+Math.abs(c-upgradedBladeColors[i][j]),0)>60),'upgraded blade visibly changes color');
 await page.locator('#forge-options summary').click({position:{x:12,y:12}});const options=await page.locator('#forge-options').boundingBox();assert.ok(options.y+options.height<proof.bounds.top&&options.y+options.height<proof.benchBounds.top,'expanded choices stay above blade and bench');await page.locator('#forge-options summary').click({position:{x:12,y:12}});assert.equal((await state()).session.hits,7);
 await page.reload();await ready();assert.equal((await state()).session.hits,7);assert.equal((await state()).session.currentValue,seven.session.currentValue);
 const charged=structuredClone(seven);charged.session.hits=9;charged.session.frenzyCharge=9;charged.session.seed=seedForRange(.95,.99);await fixture(charged);assert.ok(parseFloat(await page.locator('#fracture-risk').textContent())>0);charged.session.seed=seedForRange(.85,.86);await fixture(charged);await hit();const frenzy=await state();assert.equal(frenzy.session.hits,10);assert.equal(frenzy.session.frenzyCharge,0);assert.ok(frenzy.session.frenzyUntil>Date.now());assert.notEqual(frenzy.session.strikes.at(-1).result,'break');
 await page.waitForSelector('#scene3d[data-blade-rendered-finish="rainbow"]');
 // Check the real four-second expiry separately from slower GPU screenshot sampling.
 await page.waitForFunction(()=>document.querySelector('#scene3d').dataset.frenzy==='charging');await page.waitForSelector('#scene3d[data-blade-rendered-finish="metal"]');assert.ok(parseFloat(await page.locator('#fracture-risk').textContent())>0);
 const rainbowFixture=structuredClone(frenzy);rainbowFixture.session.frenzyUntil=Date.now()+VISUAL_FRENZY_MS;await fixture(rainbowFixture);
 await page.waitForSelector('#scene3d[data-blade-rendered-finish="rainbow"]');const frenzyProof=JSON.parse(await page.locator('#scene3d').getAttribute('data-forge-proof'));frenzyProof.expectedFinish='rainbow';const colorsA=await bladePixels(page,frenzyProof,`${out}/${width}-frenzy.png`);await page.waitForTimeout(420);const colorsB=await bladePixels(page,frenzyProof);assert.ok(hueBins(colorsA).size>=3||hueBins(colorsB).size>=3,'rainbow has multiple colors on the actual blade');assert.ok(colorsA.some((rgb,i)=>rgb.reduce((n,c,j)=>n+Math.abs(c-colorsB[i][j]),0)>45),'rainbow flows between rendered frames');
 const hiltA=await bladePixels(page,{...frenzyProof,samples:frenzyProof.hiltSamples});await page.waitForTimeout(700);const hiltB=await bladePixels(page,{...frenzyProof,samples:frenzyProof.hiltSamples});assert.ok(hiltA.some((rgb,i)=>rgb.reduce((n,c,j)=>n+Math.abs(c-hiltB[i][j]),0)>30),'rainbow flows on actual hilt and guard');
 // Value outcomes use actual scene contacts with deterministic isolated RNG fixtures.
 // Trigger the one-percent promotion through a physical contact, then verify actual rendered stars.
 const cosmic=structuredClone(seven);cosmic.session.frenzyUntil=Date.now()+VISUAL_FRENZY_MS;cosmic.session.superGod=false;
 for(let n=1;n<1000000;n++)if(next(next(n))/2**32<.01){cosmic.session.seed=n;break;}
 await fixture(cosmic);await hit();const god=await state();assert.equal(god.session.superGod,true);assert.equal(god.session.strikes.at(-1).enteredSuperGod,true);assert.ok(god.session.currentValue>=cosmic.session.currentValue*1.5);
 await page.waitForSelector('#scene3d[data-blade-rendered-finish="cosmos"]');await snap('super-god');
 const godProof=JSON.parse(await page.locator('#scene3d').getAttribute('data-forge-proof'));godProof.expectedFinish='cosmos';
 const starA=await bladePixels(page,{...godProof,samples:[...godProof.samples,...godProof.hiltSamples]});await page.waitForTimeout(1000);const starB=await bladePixels(page,{...godProof,samples:[...godProof.samples,...godProof.hiltSamples]});assert.ok(starA.some((rgb,i)=>rgb.reduce((n,c,j)=>n+Math.abs(c-starB[i][j]),0)>12),'cosmic surface flows on rendered sword');
 await page.reload();await ready();assert.equal((await state()).session.superGod,true);const beforeGod=await state();await hit();assert.ok((await state()).session.currentValue>=beforeGod.session.currentValue*1.5);
 await page.locator('#station-relics').click();assert.equal(await page.locator('#relic-panel').isVisible(),true);assert.equal(await page.locator('#nav-upgrades,#nav-furnace,#nav-anvil').count(),0);await snap('cabinet');await page.locator('#station-forge').click();
 console.log(`${width}: frenzy and super-god verified`);const outcomes=[];for(const [result,roll] of [['great',.70],['unchanged',.85],['damage',.99],['break',.97]]){
  const f=structuredClone(baseline);f.session.goodHeat=false;f.session.protection=false;f.session.level=result==='break'?5:0;f.session.seed=seedForRange(roll,roll+.005);await fixture(f);await hit();const after=await state();assert.equal(after.session.strikes.at(-1).result,result);outcomes.push(result);if(result==='great')assert.equal(after.session.currentValue,800);if(result==='unchanged'||result==='damage')assert.equal(after.session.currentValue,320);if(result==='break'){assert.equal(after.session.phase,'broken');assert.equal(after.session.currentValue,0);}await snap(result);
 }
 console.log(`${width}: five outcomes verified`);await fixture(seven);const shown=await page.locator('#value-now').textContent();await page.locator('#cashout').click();await page.waitForFunction(()=>document.querySelector('.game').dataset.phase==='finished');const complete=await state();assert.equal(complete.session.sword.value,seven.session.currentValue);assert.ok(shown.includes(Math.floor(complete.session.sword.value).toLocaleString('zh-CN')));assert.equal(complete.session.hits,7);await tap('anvil');assert.equal((await state()).session.hits,7);await snap('collected');
 await page.locator('#offer-cat').click();await page.waitForTimeout(1200);await tap('cat');await page.waitForSelector('#cat-back:not([hidden])',{timeout:30000});const paid=await state();assert.equal(paid.session,null);assert.ok(paid.ironBlanks>=3);assert.equal(paid.catTributes,1);await snap('cat-reward');
 // The current merchant upgrade rules are covered by the core tests.
 // Verify the maximum-level one-second heat behavior through the real UI.
 const furnaceFixture=structuredClone(paid);furnaceFixture.coins=100000;furnaceFixture.ironBlanks=100;furnaceFixture.furnaceLevel=9;furnaceFixture.relicWelcomeUsed=true;
 await fixture(furnaceFixture);assert.equal((await state()).furnaceLevel,9);
 await tap('furnace');await page.waitForSelector('#scene3d[data-sword-place="furnace"]');
 assert.ok((await page.locator('#heating-order').textContent()).includes('1 秒满温'));
 await page.waitForFunction(()=>Number(document.querySelector('#scene3d').dataset.heat)>=100,null,{timeout:5500});
 await tap('anvil');await page.waitForFunction(()=>document.querySelector('.game').dataset.phase==='forge');
 assert.equal((await state()).session.goodHeat,true);
 await snap('furnace-lv9');console.log(`${width}: Lv9 furnace timing and full heat verified`);
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);assert.equal(overflow,false);
 reports.push({width,height,passed:true,outcomes,sevenHitsRemainForge:true,frenzyExpires:true,flowingRainbow:true,flowingHilt:true,superGodPromoted:true,flowingCosmos:true,permanentBottomNavigation:true,levelColors:true,noSwordLabel:true,swordVisible:true,recordedAudio:true,mute:true,catReward:paid.ironBlanks});console.log(`${width}x${height}: continuous forging, five results, rainbow frenzy, cashout and tribute passed`);await page.close();active=null;
}
await writeFile(`${out}/continuous-forging-report.json`,JSON.stringify({passed:true,reports},null,2));
}catch(e){
 console.error('Original browser QA failure:',e);
 const diagnostic={error:String(e),stack:e?.stack,consoleMessages:activeConsoleMessages.slice(-30)};
 if(active){
  const details=await Promise.race([
   active.evaluate(k=>({frame:{...document.querySelector('#scene3d').dataset},state:JSON.parse(localStorage.getItem(k))}),key).catch(error=>({captureError:String(error)})),
   new Promise(resolve=>{const timer=setTimeout(()=>resolve({captureError:'Page diagnostics timed out'}),10000);timer.unref();})
  ]);
  Object.assign(diagnostic,details);await writeFile(`${out}/failure.json`,JSON.stringify(diagnostic,null,2));
  try{await active.screenshot({path:`${out}/failure.png`,timeout:15000});}catch(error){console.error('Failure screenshot unavailable:',String(error));}
 }else await writeFile(`${out}/failure.json`,JSON.stringify(diagnostic,null,2));
 throw e;
}finally{await browser.close();}
