import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const out = process.env.QA_OUT || 'qa-evidence/rack-metal';
await mkdir(out, { recursive: true });
const browser = await chromium.launch({headless:true,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const key = 'yichuichengshenbing.v5';
const report = [];
try {
 for (const [width,height] of [[390,844],[832,1828]]) {
  const page = await browser.newPage({viewport:{width,height},hasTouch:true});
  page.setDefaultTimeout(45000);
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(key=>{
   const staged=sessionStorage.getItem('__rack_visual_save');
   if(staged){localStorage.setItem(key,staged);localStorage.removeItem(key+'.meta');sessionStorage.removeItem('__rack_visual_save');}
   localStorage.setItem('yichuichengshenbing.tutorial.v4',JSON.stringify({version:1,step:'done',skipped:true,replay:false,startTributes:0}));
  },key);
  await page.goto(process.env.QA_URL || 'http://127.0.0.1:4173/yichuichengshenbing-preview/?debugQA=1&debugPerf=1');
  await page.waitForSelector('#scene3d[data-ready="true"]');
  const initial=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);
  const route={kind:'normal',vein:'dragonbone',final:'dragon_slayer'};
  const sword={id:'rack-metal-review',blade:'great',material:'iron',level:9,maxReachedLevel:9,route,value:16875,quality:1,disposal:'COLLECTED',superGod:false,frenzy:false};
  const fixture={...initial,session:null,swords:[sword],caseIds:[sword.id],sound:false};
  await page.evaluate(save=>sessionStorage.setItem('__rack_visual_save',JSON.stringify(save)),fixture);
  await page.reload();
  await page.waitForSelector('#scene3d[data-ready="true"]');
  await page.locator('#station-collection').click();
  await page.waitForFunction(()=>{
   const d=document.querySelector('#scene3d').dataset;
   return d.station==='collection'&&d.renderedStation==='collection'&&d.renderedCameraReady==='true'
    &&JSON.parse(d.collectionVisuals||'[]').length===1;
  },null,{timeout:60000});
  await page.waitForTimeout(500);
  const summary=JSON.parse(await page.locator('#scene3d').getAttribute('data-collection-visuals'))[0];
  assert.ok(Math.abs(summary.reflectionYaw-Math.PI/2)<.01,'Sword rack uses bright -Z reflection, not dark +Z panel');
  assert.ok(summary.metalness<.9,'Bright metal still receives diffuse showroom fill');
  assert.ok(summary.metalness>.65,'Blade stays primarily metallic');
  assert.ok(summary.meshes>=5,'Real complete sword model is displayed');
  const output=`${out}/rack-${width}x${height}.png`;
  const screenshot=await page.screenshot({path:output,timeout:120000});
  const points=await page.evaluate(()=>{
   const w=window.__workshop,entry=[...w.collectionDisplay.entries.values()][0],model=entry.model,camera=w.camera;
   const scene=document.querySelector('#scene3d').getBoundingClientRect(),result=[];
   model.updateWorldMatrix(true,true);
   for(const sx of [.45,.75,1.05,1.35,1.65,1.95])for(const sz of [-.12,-.06,0,.06,.12]){
    const v=model.localToWorld(model.position.clone().set(sx,.11,sz)).project(camera);
    result.push({x:Math.round(scene.x+(v.x+1)*scene.width/2),y:Math.round(scene.y+(1-v.y)*scene.height/2)});
   }
   return result.filter(p=>p.x>0&&p.x<scene.width&&p.y>0&&p.y<scene.height);
  });
  const measured=await page.evaluate(async({buffer,points})=>{
   const array=Uint8Array.from(atob(buffer),c=>c.charCodeAt(0));
   const image=await createImageBitmap(new Blob([array],{type:'image/png'}));
   const canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;
   const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0);image.close();
   return points.map(p=>{
    const c=ctx.getImageData(Math.min(canvas.width-1,p.x),Math.min(canvas.height-1,p.y),1,1).data;
    return Math.round(.2126*c[0]+.7152*c[1]+.0722*c[2]);
   });
  },{buffer:screenshot.toString('base64'),points});
  measured.sort((a,b)=>a-b);
  report.push({width,height,summary,luminanceSamples:measured,medianLuminance:measured[Math.floor(measured.length/2)],errors});
  assert.deepEqual(errors,[]);
  console.log('RACK_METAL_VISUAL',JSON.stringify(report.at(-1)));
  await page.close();
 }
 await writeFile(`${out}/report.json`,JSON.stringify(report,null,2));
} finally { await browser.close(); }
