import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
const out=process.env.QA_OUT||'qa-evidence';await mkdir(out,{recursive:true});
const args=['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader'];
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args});
const reports=[],sizes=process.env.QA_SIZE?[process.env.QA_SIZE.split('x').map(Number)]:[[390,844],[360,800],[1280,900]];
const key='yichuichengshenbing.v1',url=process.env.QA_URL||'http://127.0.0.1:4173';
function next(n){n^=n<<13;n^=n>>>17;n^=n<<5;return n>>>0;}
function seedForRange(low,high){for(let n=1;n<1000000;n++){const r=next(n)/2**32;if(r>=low&&r<high)return n;}throw Error('no fixture seed');}
function successfulChain(){for(let n=1;n<1000000;n++){let x=n,valid=true;for(let i=0;i<7;i++){x=next(x);if(x/2**32>=.3){valid=false;break;}}if(valid)return n;}throw Error('no chain seed');}
let active;
try{
for(const [width,height] of sizes){
 const page=active=await browser.newPage({viewport:{width,height},hasTouch:width<800});page.setDefaultTimeout(45000);
 const errors=[],failed=[];page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>failed.push(r.url()));
 if(process.env.QA_FONT){const font=(await readFile(process.env.QA_FONT)).toString('base64');await page.addInitScript(data=>{const face=new FontFace('Forge QA CJK',Uint8Array.from(atob(data),c=>c.charCodeAt(0)));document.fonts.add(face);void face.load();const prop=Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,'font');Object.defineProperty(CanvasRenderingContext2D.prototype,'font',{...prop,set(v){prop.set.call(this,v.replace('sans-serif','"Forge QA CJK",sans-serif'));}});document.addEventListener('DOMContentLoaded',()=>{const css=document.createElement('style');css.textContent='body,button,select{font-family:"Forge QA CJK",sans-serif!important}';document.head.append(css);});},font);}
 await page.addInitScript(()=>{window.__audioProbes=[];const connect=AudioNode.prototype.connect;AudioNode.prototype.connect=function(dest,...rest){if(dest instanceof AudioDestinationNode){const a=this.context.createAnalyser();a.fftSize=2048;connect.call(this,a);window.__audioProbes.push(a);}return connect.call(this,dest,...rest);};window.__peak=()=>Math.max(0,...window.__audioProbes.map(a=>{const values=new Float32Array(a.fftSize);a.getFloatTimeDomainData(values);return Math.max(...values.map(Math.abs));}));});
 const state=()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);
 const point=name=>page.locator('#scene3d').evaluate((host,name)=>{const p=JSON.parse(host.dataset.targets)[name],r=host.getBoundingClientRect();return{x:r.x+p.x,y:r.y+p.y};},name);
 const tap=async name=>{const p=await point(name);assert.ok(p.x>0&&p.x<width&&p.y>90&&p.y<height-170,`${name} visible: ${JSON.stringify(p)}`);if(width<800)await page.touchscreen.tap(p.x,p.y);else await page.mouse.click(p.x,p.y);};
 const ready=async()=>{await page.waitForSelector('#scene3d[data-cat-asset="ready"]');await page.waitForFunction(()=>Number(document.querySelector('#scene3d').dataset.renderCalls)>0);await page.waitForTimeout(500);};
 const fixture=async s=>{await page.evaluate(({k,s})=>localStorage.setItem(k,JSON.stringify(s)),{k:key,s});await page.reload();await ready();};
 const idle=()=>page.waitForFunction(()=>document.querySelector('#scene3d').dataset.hammerStage==='idle');
 const hit=async()=>{const count=(await state()).session.hits;await tap('anvil');await page.waitForFunction(({k,n})=>JSON.parse(localStorage.getItem(k)).session.hits===n,{k:key,n:count+1});await idle();};
 const snap=async name=>{await page.waitForTimeout(250);await page.screenshot({path:`${out}/${width}-${name}.png`});};
 await page.goto(url);await ready();assert.equal(await page.locator('#target-water').count(),0);assert.equal(await page.locator('#quench').count(),0);
 console.log(`${width}: loaded workshop`);await snap('workshop');await tap('furnace');await page.waitForSelector('#scene3d[data-sword-place="furnace"]');await page.waitForFunction(()=>Number(document.querySelector('#scene3d').dataset.heat)>=74);await tap('anvil');await page.waitForFunction(()=>document.querySelector('.game').dataset.phase==='forge');await page.waitForTimeout(800);
 console.log(`${width}: heating and placement complete`);const baseline=await state();assert.equal(baseline.session.hits,0);assert.equal(baseline.session.goodHeat,true);assert.equal(await page.locator('#forge-options').getAttribute('open'),null);
 await page.locator('#menu-toggle').click();await page.locator('#station-cat').click();assert.equal((await state()).session.hits,0);await page.locator('#menu-toggle').click();await page.locator('#station-forge').click();await page.waitForTimeout(900);
 await page.locator('#sound').click();await page.locator('#sound').click();assert.equal((await state()).session.hits,0);
 const test=structuredClone(baseline);test.session.seed=successfulChain();await fixture(test);
 // Mouse events and real touch both hit the world object. Empty areas and UI do not.
 await page.mouse.click(width-8,height-210);assert.equal((await state()).session.hits,0);
 const p=await point('anvil');await page.mouse.click(p.x,p.y,{clickCount:3,delay:10});await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).session.hits===1,key);await idle();assert.equal((await state()).session.hits,1);
 await page.waitForSelector('#scene3d[data-audio-state="ready"]');await page.locator('#sound').click();const audioBefore=await page.locator('#scene3d').getAttribute('data-audio-played');await hit();assert.equal(await page.locator('#scene3d').getAttribute('data-audio-played'),audioBefore);assert.ok(await page.evaluate(()=>window.__peak())<.0001);
 await page.locator('#sound').click();await hit();assert.ok(Number(await page.locator('#scene3d').getAttribute('data-audio-played'))>Number(audioBefore||0));
 for(let i=3;i<7;i++)await hit();const seven=await state();assert.equal(seven.session.phase,'forge');assert.equal(seven.session.hits,7);assert.equal(seven.session.level,7);assert.equal(seven.session.currentValue,320*1.5**7);console.log(`${width}: seven strikes complete`);await snap('seven-hits');
 const proof=JSON.parse(await page.locator('#scene3d').getAttribute('data-forge-proof'));assert.equal(proof.visibleSamples,proof.totalSamples);assert.ok(proof.faceHeight>=20);assert.ok(proof.bounds.left>=0&&proof.bounds.right<=width);assert.ok(proof.bounds.bottom<proof.navTop);
 await page.reload();await ready();assert.equal((await state()).session.hits,7);assert.equal((await state()).session.currentValue,seven.session.currentValue);
 const charged=structuredClone(seven);charged.session.hits=10;charged.session.frenzyCharge=10;charged.session.seed=seedForRange(.95,.99);await fixture(charged);assert.equal(await page.locator('#fracture-risk').textContent(),'0.0%');await hit();const frenzy=await state();assert.equal(frenzy.session.hits,11);assert.equal(frenzy.session.frenzyCharge,0);assert.ok(frenzy.session.frenzyUntil>Date.now());assert.notEqual(frenzy.session.strikes.at(-1).result,'break');await snap('frenzy');await page.waitForFunction(()=>document.querySelector('#scene3d').dataset.frenzy==='charging');assert.ok(parseFloat(await page.locator('#fracture-risk').textContent())>0);
 // Value outcomes use actual scene contacts with deterministic isolated RNG fixtures.
 console.log(`${width}: frenzy verified`);const outcomes=[];for(const [result,roll] of [['great',.70],['unchanged',.85],['damage',.99],['break',.97]]){
  const f=structuredClone(baseline);f.session.goodHeat=false;f.session.protection=false;f.session.level=result==='break'?5:0;f.session.seed=seedForRange(roll,roll+.005);await fixture(f);await hit();const after=await state();assert.equal(after.session.strikes.at(-1).result,result);outcomes.push(result);if(result==='great')assert.equal(after.session.currentValue,800);if(result==='unchanged'||result==='damage')assert.equal(after.session.currentValue,320);if(result==='break'){assert.equal(after.session.phase,'broken');assert.equal(after.session.currentValue,0);}await snap(result);
 }
 console.log(`${width}: five outcomes verified`);await fixture(seven);const shown=await page.locator('#value-now').textContent();await page.locator('#cashout').click();await page.waitForFunction(()=>document.querySelector('.game').dataset.phase==='finished');const complete=await state();assert.equal(complete.session.sword.value,seven.session.currentValue);assert.ok(shown.includes(Math.floor(complete.session.sword.value).toLocaleString('zh-CN')));assert.equal(complete.session.hits,7);await tap('anvil');assert.equal((await state()).session.hits,7);await snap('collected');
 await page.locator('#offer-cat').click();await page.waitForTimeout(1200);await tap('cat');await page.waitForSelector('#cat-back:not([hidden])',{timeout:30000});const paid=await state();assert.equal(paid.session,null);assert.ok(paid.ironBlanks>=3);assert.equal(paid.catTributes,1);await snap('cat-reward');
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);assert.equal(overflow,false);
 reports.push({width,height,passed:true,outcomes,sevenHitsRemainForge:true,frenzyExpires:true,swordVisible:true,recordedAudio:true,mute:true,catReward:paid.ironBlanks});console.log(`${width}x${height}: continuous forging, five results, frenzy, cashout and tribute passed`);await page.close();active=null;
}
await writeFile(`${out}/continuous-forging-report.json`,JSON.stringify({passed:true,reports},null,2));
}catch(e){if(active){await active.screenshot({path:`${out}/failure.png`});await writeFile(`${out}/failure.json`,JSON.stringify({error:String(e),frame:await active.locator('#scene3d').evaluate(e=>({...e.dataset})),state:await active.evaluate(k=>JSON.parse(localStorage.getItem(k)),key)},null,2));}throw e;}finally{await browser.close();}
