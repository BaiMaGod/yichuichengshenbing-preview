import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir,writeFile } from 'node:fs/promises';
const out=process.env.QA_OUT||'qa-evidence';await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const url=process.env.QA_URL||'http://127.0.0.1:4173';const results=[];
const sizes=process.env.QA_SIZE?[process.env.QA_SIZE.split('x').map(Number)]:[[390,844],[360,800],[1280,900]];
try{
for(const [width,height] of sizes){
 const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
 const errors=[],failed=[];page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>failed.push(r.url()+':'+r.failure()?.errorText));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 const state=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('yichuichengshenbing.v1')));
 const renders=[];
 const snap=async name=>{
  await writeFile(`${out}/last-frame.json`,JSON.stringify({name,errors,failed,renders,frame:await page.evaluate(()=>({...document.querySelector('#scene3d').dataset}))},null,2));
  await page.screenshot({path:`${out}/${width}-${name}.png`});
  const frame=await page.evaluate(()=>{const e=document.querySelector('#scene3d'),c=e.querySelector('canvas');return{calls:Number(e.dataset.renderCalls),triangles:Number(e.dataset.renderTriangles),pixels:c.width*c.height}});
  assert.ok(frame.calls>0,'a real 3D frame must have been rendered');assert.ok(frame.triangles>10000);assert.ok(frame.pixels<=752000);
  renders.push({name,...frame});
 };
 const checkLayout=async()=>{
  const layout=await page.evaluate(()=>{
   const panel=document.querySelector('.control:not([hidden])').getBoundingClientRect(),nav=document.querySelector('.station-nav').getBoundingClientRect();
   const clickable=[...document.querySelectorAll('.station-nav button')].every(b=>{const r=b.getBoundingClientRect();return document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.closest('button')===b});
   return{clickable,panel:{x:panel.x,y:panel.y,right:panel.right,bottom:panel.bottom},nav:{x:nav.x,y:nav.y,right:nav.right,bottom:nav.bottom},scroll:document.documentElement.scrollWidth,canvas:!!document.querySelector('#scene3d canvas'),ready:document.querySelector('#scene3d').dataset.ready};
  });
  assert.equal(layout.ready,'true');assert.equal(layout.canvas,true);assert.equal(layout.clickable,true,'all station buttons must receive clicks');assert.ok(layout.scroll<=width);assert.ok(layout.panel.x>=0&&layout.panel.right<=width);assert.ok(layout.panel.bottom<=height);
  if(width<800)assert.ok(layout.nav.bottom<=layout.panel.y,'station navigation must stay above the panel');
 };
 await page.goto(url);await page.waitForSelector('#scene3d[data-ready="true"]');await page.waitForTimeout(1400);
 assert.equal(await page.locator('#blade').inputValue(),'great');await checkLayout();await snap('forge');
 if(width>=800)await page.screenshot({path:`${out}/${width}-forge-detail.png`,clip:{x:Math.round(width*.27),y:Math.round(height*.25),width:Math.round(width*.43),height:Math.round(height*.56)}});
 await page.locator('#begin').click();assert.equal((await state()).session.phase,'heat');
 const heat=await page.locator('#heat-button').boundingBox();await page.mouse.move(heat.x+heat.width/2,heat.y+heat.height/2);await page.mouse.down();await page.waitForFunction(()=>parseInt(document.getElementById('heat-text').textContent,10)>=72,{},{timeout:30000});const releaseHeat=await page.locator('#heat-text').textContent();await page.mouse.up();
 assert.equal((await state()).session.phase,'forge');assert.equal((await state()).session.goodHeat,true,`${width}px release at ${releaseHeat}: ${(await state()).session.goodHeat}`);await checkLayout();await snap('forging');
 for(let i=0;i<2;i++){await page.locator('#strike').click();await page.waitForTimeout(650)}
 assert.equal((await state()).session.hits,2);assert.equal((await state()).session.level,2);
 await page.locator('#cashout').click();await page.locator('#quench-quick').click();await page.locator('#skip-trial').click();assert.equal((await state()).session.phase,'finished');await checkLayout();await snap('finished');
 await page.locator('#offer-cat').click();await page.waitForTimeout(1200);await checkLayout();await snap('cat');
 await page.locator('#tribute').click();await page.waitForSelector('#scene3d[data-tribute="chewing"]',{timeout:15000});await snap('swallow');
 await page.waitForSelector('#scene3d[data-tribute="ejecting"]',{timeout:15000});await snap('eject');
 await page.waitForSelector('#cat-back:not([hidden])',{timeout:15000});await snap('reward');
 const after=await state();assert.equal(after.ironBlanks,3);assert.equal(after.catTributes,1);assert.equal(after.session,null);assert.equal(after.swords[0].disposal,'TRIBUTED');assert.equal(after.coins,300);
 await page.reload();await page.waitForSelector('#scene3d[data-ready="true"]');assert.equal((await state()).ironBlanks,3);
 await page.locator('#station-relics').click();await page.waitForTimeout(1300);await checkLayout();await snap('relics');
 await page.locator('.relic-row').filter({hasText:'九命护符'}).locator('button').click();assert.equal((await state()).ironBlanks,1);assert.ok((await state()).relics.includes('guard'));
 await page.reload();await page.waitForSelector('#scene3d[data-ready="true"]');assert.equal((await state()).ironBlanks,1);
 await page.locator('#begin').click();const next=await state();assert.equal(next.session.paid,15);assert.equal(next.coins,285);assert.equal(next.ironBlanks,0);assert.equal(next.session.protection,true);
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);results.push({width,height,passed:true,errors,failed,renders,checks:['3D WebGL startup','layout','real heat input','two real hammer inputs','quench','giant sword tribute','swallow/eject/reward','persisted reward','relic purchase','iron sword consumption']});
 console.log(`${width}x${height}: full gameplay, reward persistence and inventory reuse passed`);await page.close();
}
await writeFile(`${out}/report.json`,JSON.stringify({passed:true,url,renderer:'Chromium WebGL / SwiftShader',results},null,2));
}catch(error){await writeFile(`${out}/report.json`,JSON.stringify({passed:false,error:String(error),results},null,2));throw error}finally{await browser.close()}
