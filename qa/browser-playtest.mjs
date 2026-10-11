import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir,writeFile,readFile } from 'node:fs/promises';
const out=process.env.QA_OUT||'qa-evidence';await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const url=process.env.QA_URL||'http://127.0.0.1:4173';const results=[];
const sizes=process.env.QA_SIZE?[process.env.QA_SIZE.split('x').map(Number)]:[[390,844],[360,800],[1280,900]];
let activePage;
try{
for(const [width,height] of sizes){
 const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1,hasTouch:width<800});activePage=page;
 if(process.env.QA_FONT)await installFont(page);
 const errors=[],failed=[];page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>failed.push(r.url()+':'+r.failure()?.errorText));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 const state=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('yichuichengshenbing.v1')));
 const renders=[];
 const visibility=[];
 const catPoses=[];
 const snap=async name=>{
  await writeFile(`${out}/last-frame.json`,JSON.stringify({name,errors,failed,renders,frame:await page.evaluate(()=>({...document.querySelector('#scene3d').dataset}))},null,2));
  await page.screenshot({path:`${out}/${width}-${name}.png`});
  const frame=await page.evaluate(()=>{const e=document.querySelector('#scene3d'),c=e.querySelector('canvas');return{calls:Number(e.dataset.renderCalls),triangles:Number(e.dataset.renderTriangles),pixels:c.width*c.height}});
  assert.ok(frame.calls>0,'a real 3D frame must have been rendered');assert.ok(frame.triangles>10000);assert.ok(frame.pixels<=752000);
  renders.push({name,...frame});
 };
 const scenePoint=async name=>page.locator('#scene3d').evaluate((host,name)=>{const r=host.getBoundingClientRect(),p=JSON.parse(host.dataset.targets)[name];return{x:r.x+p.x,y:r.y+p.y}},name);
 const tapScene=async name=>{const p=await scenePoint(name);assert.ok(p.x>0&&p.x<width&&p.y>90&&p.y<height-160,`${name} must be visible and clear of controls`);if(width<800)await page.touchscreen.tap(p.x,p.y);else await page.mouse.click(p.x,p.y);};
 const openStation=async name=>{await page.locator('#menu-toggle').click();await page.locator('#station-'+name).click();};
 const checkLayout=async()=>{
  const layout=await page.evaluate(()=>{
   const p=document.querySelector('.control:not([hidden])'),r=p?.getBoundingClientRect();
   const buttons=[...document.querySelectorAll('button')].filter(b=>b.getBoundingClientRect().width&& !b.disabled);
   return{clickable:buttons.every(b=>{const r=b.getBoundingClientRect();if(r.y<0||r.bottom>innerHeight)return true;return document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.closest('button')===b}),panel:r?{x:r.x,y:r.y,right:r.right,bottom:r.bottom}:null,scroll:document.documentElement.scrollWidth,ready:document.querySelector('#scene3d').dataset.ready};
  });
  assert.equal(layout.ready,'true');assert.equal(layout.clickable,true,'visible choices must receive clicks');assert.ok(layout.scroll<=width);
  if(layout.panel){assert.ok(layout.panel.x>=0&&layout.panel.right<=width);assert.ok(layout.panel.bottom<=height);}
 };
 const checkSword=async()=>{
  await page.waitForFunction(()=>{
   const host=document.querySelector('#scene3d'),raw=host.dataset.forgeProof;if(!raw)return false;
   const proof=JSON.parse(raw),phase=JSON.parse(localStorage.getItem('yichuichengshenbing.v1'))?.session?.phase||'idle',navTop=(document.querySelector('.control:not([hidden])')?.getBoundingClientRect().top||host.clientHeight)-host.getBoundingClientRect().top;
   return proof.phase===phase&&Math.abs(proof.navTop-navTop)<2;
  });
  const proof=await page.evaluate(()=>{
   const host=document.querySelector('#scene3d'),r=host.getBoundingClientRect(),panel=document.querySelector('.control:not([hidden])')?.getBoundingClientRect()||{x:0,y:innerHeight},nav=panel;
   return{...JSON.parse(host.dataset.forgeProof),host:{x:r.x,y:r.y,width:r.width,height:r.height},panel:{x:panel.x,y:panel.y},nav:{y:nav.y}};
  });
  await writeFile(`${out}/sword-proof-${visibility.length}.json`,JSON.stringify(proof,null,2));
  assert.equal(proof.visibleSamples,proof.totalSamples,'all six broad-face rays must reach the blade without anvil occlusion');
  assert.ok(proof.faceHeight>=(proof.phase==='forge'?20:14),'blade must show a readable broad face, rather than an edge');
  if(width<800&&proof.boardVisible)assert.ok(proof.boardTop>=90,'world-space board must stay below the fixed phone header');
  assert.ok(proof.bounds.left>=10&&proof.bounds.right<=proof.host.width-10,'pommel and sword tip must fit inside the viewport');
  if(width<800)assert.ok(proof.bounds.bottom+proof.host.y<Math.min(proof.panel.y,proof.nav.y)-8,'sword face must stay clear of phone controls');
  else assert.ok(proof.bounds.right+proof.host.x<proof.panel.x-8||proof.bounds.bottom+proof.host.y<proof.panel.y-8,'sword must stay clear of desktop controls');
  visibility.push(proof);
 };
 const checkCat=async phase=>{
  await page.waitForFunction(expected=>{const host=document.querySelector('#scene3d'),raw=host.dataset.catProof;if(!raw)return false;const p=JSON.parse(raw),navTop=(document.querySelector('.control:not([hidden])')?.getBoundingClientRect().top||host.clientHeight)-host.getBoundingClientRect().top;return p.phase===expected&&Math.abs(p.navTop-navTop)<2},phase,{timeout:20000});
  const proof=await page.evaluate(()=>{const host=document.querySelector('#scene3d'),r=host.getBoundingClientRect(),nav=document.querySelector('.control:not([hidden])')?.getBoundingClientRect()||{top:innerHeight};return{...JSON.parse(host.dataset.catProof),host:{x:r.x,y:r.y,width:r.width,height:r.height},navTop:nav.top-r.top}});
  catPoses.push(proof);await writeFile(`${out}/cat-poses.json`,JSON.stringify(catPoses,null,2));
  if(phase==='idle'){
   assert.ok(proof.bounds.left>=8&&proof.bounds.right<=width-8,'whole cat, ears and whiskers must fit');
   assert.ok(proof.bounds.top>=90,'ears must stay below the fixed title');
   assert.ok(proof.bounds.bottom<proof.navTop-12,'paws must stay above station controls');
  }
  if(phase==='offering')assert.ok(proof.jawAngle>.6,'lower jaw must visibly open downward');
  if(phase==='ejecting')assert.ok(Math.abs(proof.turn)>2,'cat must turn around before dropping the reward');
 };
 await page.goto(url);await page.waitForSelector('#scene3d[data-ready="true"]');await page.waitForSelector('#scene3d[data-cat-asset="ready"]',{timeout:30000});assert.equal(await page.locator('#scene3d').getAttribute('data-cat-atlas-size'),'1774x887');await page.waitForTimeout(1400);
 assert.equal(await page.locator('#blade').inputValue(),'great');await checkLayout();await checkSword();await snap('forge');
 if(width>=800)await page.screenshot({path:`${out}/${width}-forge-detail.png`,clip:{x:Math.round(width*.19),y:Math.round(height*.22),width:Math.round(width*.49),height:Math.round(height*.55)}});
 assert.equal(await page.locator('#choose').isVisible(),false,'recipe stays closed until requested');
 assert.equal(await page.locator('#heat-button').count(),0,'heat uses the furnace, not a hold button');
 await page.locator('#recipe-toggle').click();await page.locator('#recipe-close').click();
 await tapScene('furnace');assert.equal((await state()).session.phase,'heat');
 await page.waitForSelector('#scene3d[data-sword-place="furnace"]');
 const inFurnace=JSON.parse(await page.locator('#scene3d').getAttribute('data-sword-position'));assert.ok(inFurnace[0]<-3&&inFurnace[2]<-.5,'sword physically enters the furnace');
 await snap('heating');
 if(width===390){await page.waitForFunction(()=>Number(document.querySelector('#scene3d').dataset.heat)>=25);const before=Number(await page.locator('#scene3d').getAttribute('data-heat'));await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]');assert.ok(Number(await page.locator('#scene3d').getAttribute('data-heat'))>=before-1,'heat persists across reload');}
 await page.waitForFunction(()=>Number(document.querySelector('#scene3d').dataset.heat)>=74);
 await tapScene('anvil');await page.waitForFunction(()=>document.querySelector('.game').dataset.phase==='forge');
 assert.equal((await state()).session.goodHeat,true);assert.equal((await state()).session.hits,0,'placing a sword must not also strike');
 await checkLayout();await checkSword();await snap('forging');
 assert.equal(await page.locator('#strike').count(),0,'forging must not require an on-screen strike button');
 const tapPoint=await scenePoint('anvil');
 for(let i=0;i<2;i++){
  if(width<800)await page.touchscreen.tap(tapPoint.x,tapPoint.y);else await page.mouse.click(tapPoint.x,tapPoint.y);
  await page.waitForFunction(n=>JSON.parse(localStorage.getItem('yichuichengshenbing.v1')).session.hits===n,i+1);
  await page.waitForTimeout(600);
 }
 assert.equal(await page.locator('#scene3d').getAttribute('data-audio-state'),'ready','actual recordings must load and decode');
 assert.equal(await page.locator('#scene3d').getAttribute('data-audio-type'),'recording');
 assert.equal(await page.locator('#scene3d').getAttribute('data-audio-played'),'2');
 assert.equal(await page.locator('#scene3d').getAttribute('data-hammer-impacts'),'2','one contact per screen input');
 assert.equal((await state()).session.hits,2);assert.equal((await state()).session.level,2);
 await tapScene('water');await page.waitForFunction(()=>document.querySelector('.game').dataset.phase==='finished');await page.locator('#skip-trial').click();assert.equal((await state()).session.phase,'finished');await checkLayout();await checkSword();await snap('finished');
 if(width>=800)await tapScene('cat');else await openStation('cat');await page.waitForTimeout(1200);await checkLayout();await checkCat('idle');await snap('cat');
 if(width>=800){const b=catPoses[0].bounds;await page.screenshot({path:`${out}/${width}-cat-detail.png`,clip:{x:Math.max(0,Math.floor(b.left-10)),y:Math.max(0,Math.floor(b.top-10)),width:Math.ceil(b.right-b.left+20),height:Math.ceil(b.bottom-b.top+20)}});}
 await tapScene('cat');await checkCat('offering');await snap('offering');
 await page.waitForSelector('#scene3d[data-tribute="chewing"]',{timeout:20000});await checkCat('chewing');await snap('swallow');
 await page.waitForSelector('#scene3d[data-tribute="ejecting"]',{timeout:20000});await checkCat('ejecting');await snap('eject');
 await page.waitForSelector('#cat-back:not([hidden])',{timeout:15000});await checkCat('idle');await snap('reward');
 const after=await state();assert.equal(after.ironBlanks,3);assert.equal(after.catTributes,1);assert.equal(after.session,null);assert.equal(after.swords[0].disposal,'TRIBUTED');assert.equal(after.coins,300);
 await page.reload();await page.waitForSelector('#scene3d[data-ready="true"]');assert.equal((await state()).ironBlanks,3);
 await openStation('relics');await page.waitForTimeout(1300);await checkLayout();await snap('relics');
 await page.locator('.relic-row').filter({hasText:'九命护符'}).locator('button').click();assert.equal((await state()).ironBlanks,1);assert.ok((await state()).relics.includes('guard'));
 await page.reload();await page.waitForSelector('#scene3d[data-ready="true"]');assert.equal((await state()).ironBlanks,1);
 await page.waitForTimeout(1300);await tapScene('furnace');const next=await state();assert.equal(next.session.paid,15);assert.equal(next.coins,285);assert.equal(next.ironBlanks,0);assert.equal(next.session.protection,true);
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);results.push({width,height,passed:true,errors,failed,renders,visibility,catPoses,checks:['3D WebGL startup','broad blade face and full sword framing','six blade surface occlusion rays','whole cat and ear framing','completed GPU mouth opening and turn poses','layout','physical furnace/anvil/water targets','persisted in-furnace heat','sword transfer animation','two physical anvil inputs','quench without action buttons','giant sword tribute','swallow/eject/reward','persisted reward','relic purchase','iron sword consumption']});
 console.log(`${width}x${height}: full gameplay, reward persistence and inventory reuse passed`);await page.close();
}
await writeFile(`${out}/report.json`,JSON.stringify({passed:true,url,renderer:'Chromium WebGL / SwiftShader',results},null,2));
}catch(error){if(activePage&&!activePage.isClosed())await writeFile(`${out}/failure-state.json`,JSON.stringify(await activePage.evaluate(()=>({frame:{...document.querySelector('#scene3d').dataset},game:{...document.querySelector('.game').dataset},state:JSON.parse(localStorage.getItem('yichuichengshenbing.v1'))})),null,2));if(activePage&&!activePage.isClosed())await activePage.screenshot({path:`${out}/failure.png`});await writeFile(`${out}/report.json`,JSON.stringify({passed:false,error:String(error),results},null,2));throw error}finally{await browser.close()}

async function installFont(page){
 const font=(await readFile(process.env.QA_FONT)).toString('base64');
 await page.addInitScript(data=>{
  const face=new FontFace('Noto Sans SC',Uint8Array.from(atob(data),c=>c.charCodeAt(0)));document.fonts.add(face);void face.load();
  const prop=Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,'font');
  Object.defineProperty(CanvasRenderingContext2D.prototype,'font',{...prop,set(value){prop.set.call(this,value.replace('sans-serif','"Noto Sans SC", sans-serif'))}});
 },font);
}

