import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {serveBuild} from './serve-build.mjs';
const out=process.env.QA_OUT||'qa-evidence/tribute-animation';await mkdir(out,{recursive:true});
const local=process.env.QA_URL?null:await serveBuild(),url=process.env.QA_URL||local.url;
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-dev-shm-usage']});
const key='yichuichengshenbing.v1',reports=[];
try{for(const [width,height] of process.env.QA_SIZE?[process.env.QA_SIZE.split('x').map(Number)]:[[390,844],[360,800],[1280,900]]){
 const page=await browser.newPage({viewport:{width,height}});page.setDefaultTimeout(60000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(k=>{const staged=sessionStorage.getItem('__forge_qa_staged_save');if(staged!==null){localStorage.setItem(k,staged);localStorage.removeItem(k+'.meta');sessionStorage.removeItem('__forge_qa_staged_save');}},key);
 await page.addInitScript(()=>{
  const actual=performance.now.bind(performance),raf=requestAnimationFrame.bind(window);let anchor=actual(),mapped=anchor,speed=1;
  const time=()=>mapped+(actual()-anchor)*speed;
  window.setAnimationSpeed=s=>{mapped=time();anchor=actual();speed=s;};
  performance.now=time;window.requestAnimationFrame=f=>raf(()=>f(time()));
 });
 await page.addInitScript(()=>localStorage.setItem('yichuichengshenbing.tutorial.v1',JSON.stringify({version:1,step:'done',skipped:true,replay:false,startTributes:0})));
 await page.goto(url);await page.waitForSelector('#scene3d[data-cat-asset="ready"]');await page.locator('#sound').click();
 const state=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);
 const sword={id:'animation-gift',blade:'great',material:'iron',level:10,value:10000,quality:1,mark:'none',disposal:'COLLECTED'};
 Object.assign(state,{session:null,tributeDays:1,workshopDay:2,catTributes:1,sound:false,swords:[sword],caseIds:[sword.id]});
 await page.evaluate(s=>sessionStorage.setItem('__forge_qa_staged_save',JSON.stringify(s)),state);await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]');
 await page.locator('#station-cat').click();await page.waitForFunction(()=>document.querySelector('#scene3d').dataset.renderedCameraReady==='true'&&document.querySelector('#scene3d').dataset.renderedStation==='cat');
 await page.screenshot({path:`${out}/${width}-idle.png`});
 await page.evaluate(()=>{window.stages=[];const host=document.querySelector('#scene3d');new MutationObserver(()=>{const p=JSON.parse(host.dataset.catProof||'{}');if(p.elapsed)window.stages.push(p);}).observe(host,{attributes:true,attributeFilter:['data-cat-proof']});window.setAnimationSpeed(.10);});
 await page.locator('#tribute').click();
 const snapshots=[];
 for(const [name,time] of [['headtop-sword',.30],['swallow',.65],['turning',1.55],['rear-stance',2.08],['ejecting',2.65]]){
  await page.waitForFunction(t=>JSON.parse(document.querySelector('#scene3d').dataset.catProof||'{}').elapsed>=t,time);
  const proof=await page.locator('#scene3d').evaluate(e=>JSON.parse(e.dataset.catProof));snapshots.push({name,...proof});
  await page.screenshot({path:`${out}/${width}-${name}.png`});console.log(width,name,proof.elapsed);
 }
 await page.waitForSelector('#cat-back:not([hidden])');await page.evaluate(()=>window.setAnimationSpeed(1));await page.waitForTimeout(350);
 const proof=await page.locator('#scene3d').evaluate(e=>JSON.parse(e.dataset.catProof));await page.screenshot({path:`${out}/${width}-complete.png`});
 const stages=await page.evaluate(()=>window.stages),firstShot=snapshots[0];
 // Screenshots can be much slower than the WebGL animation on shared CI GPUs:
 // verify the actual earlier submitted 3D frame, not a screenshot sampled a second later.
 const early=stages.filter(p=>p.elapsed>=.20&&p.elapsed<1&&p.phase==='offering');
 const first=early.find(p=>p.swordVisible&&p.swordUp[1]<-.99&&p.swordFace[2]>.99&&p.headPitch<-.60&&p.jawAngle>.15);
 assert.ok(first,'No correct early swallow frame was rendered: '+JSON.stringify({firstShotAt:firstShot.elapsed,earlyFrames:early.map(p=>({elapsed:p.elapsed,visible:p.swordVisible,up:p.swordUp,face:p.swordFace,pitch:p.headPitch,jaw:p.jawAngle}))}));
 console.log(width,'verified early GPU swallow pose at',first.elapsed,'first screenshot at',firstShot.elapsed);
 assert.ok(Math.abs(proof.turn+Math.PI)<.01);assert.equal(proof.stance,1);assert.ok(proof.backAnatomy.includes('white-rump-pointed-tail'));assert.equal(proof.rewardCount,5);
 assert.ok(stages.some(p=>p.phase==='turning'&&p.elapsed>=1&&p.elapsed<2));assert.ok(stages.some(p=>p.phase==='ejecting'&&p.elapsed>=2&&p.elapsed<3));
 const after=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);assert.equal(after.ironBlanks,5);assert.equal(after.catTributes,2);assert.deepEqual(after.caseIds,[]);assert.deepEqual(errors,[]);
 await page.locator('#cat-back').click();await page.locator('#station-cat').click();await page.waitForFunction(()=>Math.abs(JSON.parse(document.querySelector('#scene3d').dataset.catProof||'{}').turn)<.01);
 // A second run at normal speed checks the actual three-second completion.
 await page.evaluate(s=>sessionStorage.setItem('__forge_qa_staged_save',JSON.stringify(s)),state);await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]');
 await page.locator('#station-cat').click();await page.waitForFunction(()=>document.querySelector('#scene3d').dataset.renderedCameraReady==='true'&&document.querySelector('#scene3d').dataset.renderedStation==='cat');
 await page.evaluate(()=>{window.phaseTimes=[];const h=document.querySelector('#scene3d');new MutationObserver(ms=>{for(const m of ms)if(m.attributeName==='data-tribute')window.phaseTimes.push({phase:h.dataset.tribute,ms:performance.now()});}).observe(h,{attributes:true,attributeFilter:['data-tribute']});});
 await page.locator('#tribute').click();await page.waitForSelector('#cat-back:not([hidden])');const times=await page.evaluate(()=>window.phaseTimes);
 const start=times.find(p=>p.phase==='offering').ms,end=times.find(p=>p.phase==='complete').ms;
 assert.ok(end-start>=2950&&end-start<3700,JSON.stringify(times));
 reports.push({width,height,proof,snapshots,times,duration:end-start,errors});console.log(width,'normal speed',end-start);await page.close();
}await writeFile(`${out}/report.json`,JSON.stringify(reports,null,2));}finally{await browser.close();local?.server.close();}

