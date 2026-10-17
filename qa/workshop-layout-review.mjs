import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const out=process.env.QA_OUT||'qa-evidence';await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const sizes=process.env.QA_SIZE?[process.env.QA_SIZE.split('x').map(Number)]:[[390,844],[360,800],[1280,900]],key='yichuichengshenbing.v4',reports=[];
try{for(const [width,height] of sizes){
 const page=await browser.newPage({viewport:{width,height},hasTouch:width<800});page.setDefaultTimeout(45000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(k=>{const staged=sessionStorage.getItem('__forge_qa_staged_save');if(staged!==null){localStorage.setItem(k,staged);localStorage.removeItem(k+'.meta');sessionStorage.removeItem('__forge_qa_staged_save');}},key);
 await page.addInitScript(()=>localStorage.setItem('yichuichengshenbing.tutorial.v4',JSON.stringify({version:1,step:'done',skipped:true,replay:false,startTributes:0})));
 await page.goto(process.env.QA_URL||'http://127.0.0.1:4173');await page.waitForSelector('#scene3d[data-cat-asset="ready"]');
 await page.locator('#sound').click();
 const fixture=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);
 fixture.session=null;fixture.workshopDay=3;fixture.tributeDays=2;fixture.catTributes=2;fixture.ironBlanks=20;fixture.coins=10000;fixture.sound=false;fixture.showCaseLevel=2;fixture.relics=['guard','rhythm','stellar'];fixture.relicWelcomeUsed=true;fixture.relicOffersDay=3;fixture.relicOffers=['lucky','emberLocket','steady'];fixture.caseIds=[];fixture.swords=[];
 for(let i=0;i<6;i++){const sword={id:'rack-'+i,blade:'great',material:'iron',level:3+i*3,name:'收藏剑 '+(i+1),value:720*2**i,quality:1,mark:'none',disposal:'COLLECTED',superGod:false};fixture.swords.push(sword);fixture.caseIds.push(sword.id);}
 await page.evaluate(s=>sessionStorage.setItem('__forge_qa_staged_save',JSON.stringify(s)),fixture);await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]');
 const snap=async name=>{
  await page.waitForFunction(()=>{
   const d=document.querySelector('#scene3d').dataset;
   if(d.station!==d.renderedStation||d.renderedCameraReady!=='true')return false;
   // Camera readiness and asynchronously computed WebGL side bounds are separate events.
   if(d.station==='collection'||d.station==='relics'){
    try{const proof=JSON.parse(d.sideDisplayProof||'null');
     return proof?.station===d.station&&[proof.left,proof.top,proof.right,proof.bottom].every(Number.isFinite);
    }catch{return false;}
   }
   return true;
  });
  await page.screenshot({path:`${out}/${width}-layout-${name}.png`,timeout:120000});
 };
 await snap('front-metal');assert.equal(await page.locator('#scene3d').getAttribute('data-board-style'),'brushed-metal');assert.equal(await page.locator('#scene3d').getAttribute('data-anvil-support'),'cast-iron');
 assert.ok(await page.locator('#merchant-call img').evaluate(e=>e.complete&&e.naturalWidth>100));await page.locator('#merchant-call').click();assert.ok(await page.locator('#merchant-panel').isVisible());await snap('ghost-merchant');await page.locator('#merchant-back').click();await page.waitForFunction(()=>document.querySelector('#merchant-panel').hidden===true&&document.querySelector('#scene3d').dataset.station==='forge');
 await page.locator('#station-collection').click();await snap('left-rack');const collection=JSON.parse(await page.locator('#scene3d').getAttribute('data-side-display-proof'));assert.equal(collection.station,'collection');assert.equal(collection.yaw,90);assert.equal(JSON.parse(await page.locator('#scene3d').getAttribute('data-collection-ids')).length,6);assert.ok(collection.left>=0&&collection.right<=width,'left rack fits screen');assert.ok(collection.top>=75&&collection.bottom<height-80,'left rack clears header and bottom navigation');
 await page.locator('#station-relics').click();await snap('right-machine');assert.equal(await page.locator('#scene3d').getAttribute('data-relic-yaw'),'-90');
 // Click the actual world slot. Inspecting and cancelling must preserve both inventory and stock.
 const point=await page.locator('#scene3d').evaluate(e=>{const p=JSON.parse(e.dataset.relicPoints)[0],r=e.getBoundingClientRect();return{x:r.x+p.x,y:r.y+p.y};});
 await page.mouse.click(point.x,point.y);assert.ok(await page.locator('#relic-detail').isVisible());assert.equal(await page.locator('#relic-detail-effect').count(),0,'Relic descriptions belong beside the machine, not inside the confirmation dialog');assert.ok((await page.locator('#relic-list .relic-row small').first().textContent()).length>4);assert.ok((await page.locator('#relic-detail-cost').textContent()).length>0);assert.deepEqual(await page.locator('.relic-detail-actions button:visible').allTextContents(),['再看看','确认购买']);await snap('relic-detail');await page.locator('#relic-look-again').click();
 const before=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);assert.deepEqual(before.relicOffers,fixture.relicOffers);assert.equal(before.ironBlanks,20);
 await page.locator('#relic-list button').first().click();await page.locator('#relic-exchange').click();const after=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);assert.equal(after.relicOffers[0],'');assert.ok(after.ironBlanks<20);assert.ok(after.relics.includes('lucky'));assert.equal(await page.locator('#relic-list .relic-empty').count(),1);await snap('sold-slot');
 await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]');await page.locator('#station-relics').click();assert.equal(await page.locator('#relic-list .relic-empty').count(),1);
 assert.deepEqual(errors,[]);reports.push({width,height,collection,modalCancelPreservesStock:true,purchasePersists:true,generatedGhostLoaded:true});console.log(`${width}: perpendicular walls, metal anvil, ghost and relic dialog verified`);await page.close();
}await writeFile(`${out}/workshop-layout-report.json`,JSON.stringify(reports,null,2));}finally{await browser.close();}
