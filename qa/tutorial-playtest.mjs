
import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const out=process.env.QA_OUT||'qa-evidence';
await mkdir(out,{recursive:true});
const args=['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader'];
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args});
const size=(process.env.QA_SIZE||'390x844').split('x').map(Number);
const url=process.env.QA_URL||'http://127.0.0.1:4173';
const key='yichuichengshenbing.v5',tutorialKey='yichuichengshenbing.tutorial.v4';
const results=[];
async function play(page){
 const root=page.locator('#scene3d');
 const state=()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);
 const step=()=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)).step,tutorialKey);
 const click3d=async name=>{
  const p=await root.evaluate((e,name)=>{const point=JSON.parse(e.dataset.targets||'{}')[name],rect=e.getBoundingClientRect();return {x:rect.x+point.x,y:rect.y+point.y}},name);
  assert.ok(Number.isFinite(p.x)&&Number.isFinite(p.y),name+' point');
  if(size[0]<800)await page.touchscreen.tap(p.x,p.y);
  else await page.mouse.click(p.x,p.y);
 };
 const hit=async count=>{
  await click3d('anvil');
  await page.waitForFunction(({key,count})=>JSON.parse(localStorage.getItem(key))?.session?.hits===count,{key,count},{timeout:25000});
  await page.waitForFunction(()=>document.querySelector('#scene3d').dataset.hammerStage==='idle',{timeout:25000});
 };
 const errors=[];page.on('pageerror',err=>errors.push(err.message));
 await page.goto(url);await page.waitForSelector('#scene3d[data-cat-asset="ready"]',{timeout:60000});
 await page.waitForFunction(()=>{try{return !!JSON.parse(document.querySelector('#scene3d').dataset.targets).furnace}catch{return false}},{timeout:60000});
 assert.equal(await step(),'furnace');assert.ok(await page.locator('#tutorial-tip').isVisible());
 await click3d('furnace');
 await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).session?.phase==='heat',key);
 await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).step==='heat',tutorialKey);
 await page.screenshot({path:`${out}/${size.join('x')}-tutorial-heat.png`,timeout:60000});
 await page.waitForFunction(()=>Number(document.querySelector('#scene3d').dataset.heat)>=73,{timeout:30000});
 await click3d('anvil');
 await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).session?.phase==='forge',key,{timeout:30000});
 await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).step==='hammer',tutorialKey);
 assert.equal(await page.locator('#cashout').isDisabled(),true);
 await hit(1);await hit(2);
 assert.equal(await step(),'hammer','two guaranteed strikes only reach 720 G; opening goal is 1800 G');
 assert.equal((await state()).session.currentValue,720);
 // Reproduce a legitimate, deterministic sequence in QA after the tutorial's
 // two guaranteed hits. pagehide's game save runs first; override the next seed
 // afterwards so that a restored game plays the normal probability table.
 await page.evaluate(k=>{
  window.addEventListener('pagehide',()=>{
   const saved=JSON.parse(localStorage.getItem(k));
   saved.session.seed=2;
   localStorage.setItem(k,JSON.stringify(saved));
   localStorage.removeItem(k+'.meta');
  },{once:true});
 },key);
 await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]',{timeout:60000});
 assert.equal(await step(),'hammer');
 await hit(3);await hit(4);await hit(5);
 assert.equal(await step(),'cashout');
 assert.equal((await state()).session.currentValue,2430);
 await page.locator('#cashout').click();
 await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).step==='collection',tutorialKey);
 await page.locator('#collect').click();
 await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).caseIds.length===1,key);
 assert.equal(await step(),'collection','collection teaches the rack before tribute');
 await page.locator('#station-collection').click();
 await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).step==='tribute',tutorialKey);
 await page.locator('#station-cat').click();
 await page.waitForFunction(()=>document.querySelector('#scene3d').dataset.station==='cat');
 await page.locator('#tribute').click();
 await page.waitForSelector('#cat-back:not([hidden])',{timeout:30000});
 assert.equal((await state()).catTributes,1);
 assert.equal(await step(),'relic');
 await page.locator('#station-relics').click();
 await page.waitForFunction(()=>document.querySelector('#scene3d').dataset.station==='relics');
 await page.locator('#relic-list button').first().click();
 await page.locator('#relic-exchange').click();
 await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).step==='settings',tutorialKey);
 await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).relicWelcomeUsed===true,key);
 const completed=await state();
 assert.equal(completed.relicWelcomeUsed,true);assert.equal(completed.relics.length,1);assert.ok(completed.ironBlanks>=3);
 await page.locator('#settings-open').click();
 await page.waitForFunction(k=>JSON.parse(localStorage.getItem(k)).step==='done',tutorialKey);
 await page.locator('#settings-guide').click();
 await page.waitForFunction(()=>document.querySelector('#guide-dialog').open);
 await page.locator('#guide-close').click();
 await page.locator('#settings-close').click();
 await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]');
 assert.equal(await page.locator('#tutorial-layer').isHidden(),true);
 assert.deepEqual(errors,[]);results.push({viewport:size.join('x'),firstSwordValue:2430,tributeDay:completed.workshopDay,relics:completed.relics.length,refreshRestored:true});
}
try{
 const page=await browser.newPage({viewport:{width:size[0],height:size[1]},hasTouch:size[0]<800});page.setDefaultTimeout(30000);
 await play(page);await page.close();
 const context=await browser.newContext({viewport:{width:size[0],height:size[1]},hasTouch:size[0]<800});
 const skip=await context.newPage();skip.setDefaultTimeout(30000);
 await skip.goto(url);await skip.waitForSelector('#tutorial-skip:visible',{timeout:60000});
 await skip.locator('#tutorial-skip').click();
 assert.equal(await skip.evaluate(k=>JSON.parse(localStorage.getItem(k)).step,tutorialKey),'done');
 await skip.reload();assert.ok(await skip.locator('#tutorial-layer').isHidden());
 results.push({skipSurvivesReload:true});
 await context.close();
 await writeFile(`${out}/${size.join('x')}-tutorial-report.json`,JSON.stringify(results,null,2));
 console.log('V4.8 eight-step tutorial passed',size.join('x'));
}finally{await browser.close();}
