import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
import {serveBuild} from './serve-build.mjs';
function freshState(seed=20261008){return {version:1,coins:300,scraps:0,formalCount:0,totalMade:0,totalBroken:0,hammerLevel:1,furnaceLevel:1,anvilLevel:1,showCaseLevel:1,caseIds:[],swords:[],session:null,ledger:[],seed:seed>>>0||1,sound:true,pendingSpecialRoute:null,swordCodex:[],ironBlanks:0,catTributes:0,relics:[],workshopDay:1,tributeDays:0,relicOffersDay:0,relicOffers:[],relicRerolls:0,relicWelcomeUsed:false,merchantStockDay:0,merchantStock:[],merchantPurchased:[],supplies:{ward:0,chalk:0,star:0,clock:0},specialBlanks:0}}
import assert from 'node:assert/strict';
const out=process.env.QA_OUT||'qa-tribute';await mkdir(out,{recursive:true});
const local=process.env.QA_URL?null:await serveBuild();const url=process.env.QA_URL||local.url;
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const reports=[],key='yichuichengshenbing.v5';
try{for(const [width,height] of (process.env.QA_SIZE?[process.env.QA_SIZE.split('x').map(Number)]:[[390,844],[360,800],[1280,900]])){
 const page=await browser.newPage({viewport:{width,height}});page.setDefaultTimeout(90000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const state=freshState();Object.assign(state,{tributeDays:2,workshopDay:3,catTributes:2,coins:10000,ironBlanks:20,sound:false,showCaseLevel:2,relics:['guard','rhythm','stellar'],relicWelcomeUsed:true,relicOffersDay:3,relicOffers:['lucky','ember','master']});
 for(let i=0;i<6;i++){const sword={id:'rack-'+i,blade:'great',material:'iron',level:3+i*3,maxReachedLevel:3+i*3,route:{kind:'normal',vein:'dragonbone',final:'dragon_slayer'},name:'宝剑 '+(i+1),value:1500*2**i,quality:1,mark:'none',disposal:'COLLECTED'};state.swords.push(sword);state.caseIds.push(sword.id);}
 await page.addInitScript(k=>{const staged=sessionStorage.getItem('__forge_qa_staged_save');if(staged!==null){localStorage.setItem(k,staged);localStorage.removeItem(k+'.meta');sessionStorage.removeItem('__forge_qa_staged_save');}},key);
 await page.addInitScript(({key,state})=>{if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(state));},{key,state});
 console.log('Opening',width,url);await page.addInitScript(()=>localStorage.setItem('yichuichengshenbing.tutorial.v4',JSON.stringify({version:1,step:'done',skipped:true,replay:false,startTributes:0})));
 await page.goto(url);console.log('Loaded document');await page.waitForSelector('#scene3d[data-cat-asset="ready"]');const scene=page.locator('#scene3d');
 const snap=async name=>{console.log('Snapshot',name);await page.waitForFunction(()=>{const d=document.querySelector('#scene3d').dataset;return d.station===d.renderedStation&&d.renderedCameraReady==='true';});await page.screenshot({path:`${out}/${width}-${name}.png`,timeout:120000});};
 assert.ok(await page.locator('#merchant-call').isVisible());await snap('forge');
 await page.locator('#station-collection').click();await snap('rack');assert.ok(await page.locator('#merchant-call').isHidden());
 const rack=JSON.parse(await scene.getAttribute('data-side-display-proof'));assert.ok(rack.left>=0&&rack.right<=width);assert.ok(rack.top>85&&rack.bottom<height-80);assert.equal(await page.getByText('收藏剑架',{exact:true}).isVisible(),false);
 await page.locator('#station-relics').click();await snap('relics');assert.equal(await scene.getAttribute('data-relic-shelf-count'),'3');assert.ok(await page.locator('#merchant-call').isHidden());const relic=JSON.parse(await scene.getAttribute('data-side-display-proof'));
 await page.locator('#station-cat').click();await snap('tribute-choice');assert.ok(await page.locator('#merchant-call').isHidden());assert.equal(await page.locator('#tribute-choice option').count(),6);
 if(width===390){
  await page.locator('#tribute-choice').selectOption('rack-1');await page.locator('#tribute').click();await page.waitForFunction(()=>document.querySelector('#scene3d').dataset.tribute==='complete');await snap('tribute-complete');
  const after=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);assert.equal(after.workshopDay,4);assert.ok(!after.caseIds.includes('rack-1'));assert.equal(after.caseIds.length,5);assert.equal(after.ironBlanks,24);
  after.caseIds=[];after.session=null;after.swords=[];await page.evaluate(s=>sessionStorage.setItem('__forge_qa_staged_save',JSON.stringify(s)),after);await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]');await page.locator('#station-cat').click();await snap('air-ready');
  await page.locator('#tribute').click();await page.waitForFunction(()=>Number(document.querySelector('#scene3d').dataset.whipHits)>=1);await page.screenshot({path:`${out}/${width}-whip.png`});await page.waitForFunction(()=>document.querySelector('#scene3d').dataset.tribute==='punished');
  assert.equal(await scene.getAttribute('data-whip-hits'),'3');let punished=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);assert.equal(punished.relics.length,2);assert.equal(punished.workshopDay,5);await snap('relic-seized');
  punished.relics=[];await page.evaluate(s=>sessionStorage.setItem('__forge_qa_staged_save',JSON.stringify(s)),punished);await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]');await page.locator('#station-cat').click();await page.locator('#tribute').click();await page.waitForFunction(()=>document.querySelector('#scene3d').dataset.tribute==='punished');
  const gold=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);assert.ok(gold.coins<punished.coins);assert.equal(gold.workshopDay,6);await snap('gold-penalty');
 }
 assert.deepEqual(errors,[]);reports.push({width,height,rack,relic});await page.close();console.log('Verified '+width+'x'+height);
}await writeFile(`${out}/report.json`,JSON.stringify(reports,null,2));}finally{await browser.close();local?.server.close();}
