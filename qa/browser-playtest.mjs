import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir,writeFile } from 'node:fs/promises';
const out=process.env.QA_OUT||'qa-evidence';await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const url=process.env.QA_URL||'http://127.0.0.1:4173';const results=[];
try{
for(const [width,height] of [[390,844],[360,800],[1280,900]]){
 const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
 const errors=[],failed=[];page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>failed.push(r.url()+':'+r.failure()?.errorText));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 const state=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('yichuichengshenbing.v1')));
 const snap=async name=>page.screenshot({path:`${out}/${width}-${name}.png`});
 const checkLayout=async()=>{
  const layout=await page.evaluate(()=>{
   const panel=document.querySelector('.control:not([hidden])').getBoundingClientRect(),nav=document.querySelector('.station-nav').getBoundingClientRect();
   return{panel:{x:panel.x,y:panel.y,right:panel.right,bottom:panel.bottom},nav:{x:nav.x,y:nav.y,right:nav.right,bottom:nav.bottom},scroll:document.documentElement.scrollWidth,canvas:!!document.querySelector('#scene3d canvas'),ready:document.querySelector('#scene3d').dataset.ready};
  });
  assert.equal(layout.ready,'true');assert.equal(layout.canvas,true);assert.ok(layout.scroll<=width);assert.ok(layout.panel.x>=0&&layout.panel.right<=width);assert.ok(layout.panel.bottom<=height);
  if(width<800)assert.ok(layout.nav.bottom<=layout.panel.y,'station navigation must stay above the panel');
 };
 await page.goto(url);await page.waitForSelector('#scene3d[data-ready="true"]');await page.waitForTimeout(1400);
 assert.equal(await page.locator('#blade').inputValue(),'great');await checkLayout();await snap('forge');
 await page.locator('#begin').click();assert.equal((await state()).session.phase,'heat');
 const heat=await page.locator('#heat-button').boundingBox();await page.mouse.move(heat.x+heat.width/2,heat.y+heat.height/2);await page.mouse.down();await page.waitForTimeout(1750);await page.mouse.up();
 assert.equal((await state()).session.phase,'forge');assert.equal((await state()).session.goodHeat,true);await checkLayout();await snap('forging');
 for(let i=0;i<2;i++){await page.locator('#strike').click();await page.waitForTimeout(650)}
 assert.equal((await state()).session.hits,2);assert.equal((await state()).session.level,2);
 await page.locator('#cashout').click();await page.locator('#quench-quick').click();await page.locator('#skip-trial').click();assert.equal((await state()).session.phase,'finished');await checkLayout();await snap('finished');
 await page.locator('#offer-cat').click();await page.waitForTimeout(1200);await checkLayout();await snap('cat');
 await page.locator('#tribute').click();await page.waitForTimeout(1000);await snap('swallow');
 await page.waitForTimeout(3600);await snap('eject');
 await page.waitForSelector('#cat-back:not([hidden])',{timeout:15000});await snap('reward');
 const after=await state();assert.equal(after.ironBlanks,3);assert.equal(after.catTributes,1);assert.equal(after.session,null);assert.equal(after.swords[0].disposal,'TRIBUTED');assert.equal(after.coins,300);
 await page.reload();await page.waitForSelector('#scene3d[data-ready="true"]');assert.equal((await state()).ironBlanks,3);
 await page.locator('#station-relics').click();await page.waitForTimeout(1300);await checkLayout();await snap('relics');
 await page.locator('.relic-row').filter({hasText:'九命护符'}).locator('button').click();assert.equal((await state()).ironBlanks,1);assert.ok((await state()).relics.includes('guard'));
 await page.reload();await page.waitForSelector('#scene3d[data-ready="true"]');assert.equal((await state()).ironBlanks,1);
 await page.locator('#begin').click();const next=await state();assert.equal(next.session.paid,15);assert.equal(next.coins,285);assert.equal(next.ironBlanks,0);assert.equal(next.session.protection,true);
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);results.push({width,height,passed:true,errors,failed,checks:['3D WebGL startup','layout','real heat input','two real hammer inputs','quench','giant sword tribute','swallow/eject/reward','persisted reward','relic purchase','iron sword consumption']});
 await page.close();
}
await writeFile(`${out}/report.json`,JSON.stringify({passed:true,url,renderer:'Chromium WebGL / SwiftShader',results},null,2));
}catch(error){await writeFile(`${out}/report.json`,JSON.stringify({passed:false,error:String(error),results},null,2));throw error}finally{await browser.close()}
