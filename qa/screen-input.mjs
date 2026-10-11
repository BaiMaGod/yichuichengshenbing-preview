import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
const out=process.env.QA_OUT||'qa-input-evidence';await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const reports=[];
try{
 for(const [width,height] of (process.env.QA_SIZE?[process.env.QA_SIZE.split('x').map(Number)]:[[1280,900],[390,844],[360,800]])){
  const page=await browser.newPage({viewport:{width,height},hasTouch:width<800});
  if(process.env.QA_FONT){
   const font=(await readFile(process.env.QA_FONT)).toString('base64');
   await page.addInitScript(data=>{
    const face=new FontFace('Noto Sans SC',Uint8Array.from(atob(data),c=>c.charCodeAt(0)));document.fonts.add(face);void face.load();
    const prop=Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,'font');
    Object.defineProperty(CanvasRenderingContext2D.prototype,'font',{...prop,set(value){prop.set.call(this,value.replace('sans-serif','"Noto Sans SC", sans-serif'))}});
   },font);
  }
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{
   window.__audioProbes=[];
   const connect=AudioNode.prototype.connect;
   AudioNode.prototype.connect=function(destination,...args){
    if(destination instanceof AudioDestinationNode){const analyser=this.context.createAnalyser();analyser.fftSize=2048;connect.call(this,analyser);window.__audioProbes.push(analyser);}
    return connect.call(this,destination,...args);
   };
   window.__audioPeak=()=>Math.max(0,...window.__audioProbes.map(a=>{const x=new Float32Array(a.fftSize);a.getFloatTimeDomainData(x);return Math.max(...x.map(Math.abs))}));
  });
  const state=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('yichuichengshenbing.v1')));
  const hits=async()=>Number((await state()).session.hits);
  const inputPoint=(name='anvil')=>page.locator('#scene3d').evaluate((host,name)=>{const r=host.getBoundingClientRect(),p=JSON.parse(host.dataset.targets)[name];return{x:r.x+p.x,y:r.y+p.y}},name);
  const tap=async p=>width<800?page.touchscreen.tap(p.x,p.y):page.mouse.click(p.x,p.y);
  await page.goto(process.env.QA_URL||'http://127.0.0.1:4173');await page.waitForSelector('#scene3d[data-cat-asset="ready"]');
  await page.waitForTimeout(1300);await tap(await inputPoint('furnace'));
  await page.waitForSelector('#scene3d[data-sword-place="furnace"]');
  await page.waitForFunction(()=>Number(document.querySelector('#scene3d').dataset.heat)>=74);await tap(await inputPoint());
  await page.waitForFunction(()=>document.querySelector('.game').dataset.phase==='forge');
  assert.equal((await state()).session.phase,'forge');
  await page.waitForFunction(()=>{const p=document.querySelector('#scene3d').dataset.forgeProof;return p&&JSON.parse(p).phase==='forge'});
  await page.waitForSelector('#scene3d[data-audio-state="ready"]');
  const baseline=await state(),point=await inputPoint();
  await tap({x:width-16,y:height-215});assert.equal(await hits(),0,'empty floor must not strike');
  await page.locator('#precise').click();await page.locator('#safe').click();assert.equal(await hits(),0,'style buttons must not strike');
  await page.locator('.logo-area').click();assert.equal(await hits(),0,'header must not strike');
  await page.locator('#menu-toggle').click();await page.locator('#station-cat').click();await tap({x:width/2,y:180});assert.equal(await hits(),0,'cat station must not strike');
  await page.locator('#menu-toggle').click();await page.locator('#station-forge').click();await page.waitForTimeout(1500);
  await page.mouse.click(point.x,point.y,{clickCount:3,delay:15});
  await page.waitForFunction(()=>JSON.parse(localStorage.getItem('yichuichengshenbing.v1')).session.hits===1);
  assert.equal(await hits(),1,'rapid repeated inputs must produce only one strike');
  const audioPeak=await page.evaluate(()=>window.__audioPeak());assert.ok(audioPeak>.005,`recorded impact must produce an actual audio signal, peak=${audioPeak}`);
  await page.screenshot({path:`${out}/${width}-impact.png`});
  await page.waitForTimeout(650);assert.equal(await hits(),1,'holding/click sequences must not auto-repeat');
  await page.locator('#sound').click();const beforeAudio=await page.locator('#scene3d').getAttribute('data-audio-played');
  await tap(point);await page.waitForFunction(()=>JSON.parse(localStorage.getItem('yichuichengshenbing.v1')).session.hits===2);await page.waitForTimeout(650);
  assert.equal(await page.locator('#scene3d').getAttribute('data-audio-played'),beforeAudio,'muted strike must not start audio');
  assert.ok(await page.evaluate(()=>window.__audioPeak())<.0001,'muted output must be silent');
  await page.locator('#sound').click();assert.equal(await hits(),2,'sound switch must not strike');
  await page.locator('#scene3d').focus();await page.keyboard.press('Space');
  await page.waitForFunction(()=>JSON.parse(localStorage.getItem('yichuichengshenbing.v1')).session.hits===3);await page.waitForTimeout(650);
  assert.equal(await page.locator('#scene3d').getAttribute('data-audio-played'),'2','unmuting restores audible strikes');
  await page.reload();await page.waitForSelector('#scene3d[data-ready="true"]');assert.equal(await hits(),3,'hit progress must persist');
  // Choose deterministic successful seeds for the sixth-hit boundary scenario.
  for(let i=3;i<6;i++){
   await page.evaluate(()=>{const s=JSON.parse(localStorage.getItem('yichuichengshenbing.v1'));s.session.seed=1;localStorage.setItem('yichuichengshenbing.v1',JSON.stringify(s))});
   await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]');
   await page.waitForFunction(()=>{const p=document.querySelector('#scene3d').dataset.forgeProof;return p&&JSON.parse(p).phase==='forge'});
   await tap(await inputPoint());await page.waitForFunction(n=>JSON.parse(localStorage.getItem('yichuichengshenbing.v1')).session.hits===n,i+1);await page.waitForTimeout(650);
  }
  assert.equal((await state()).session.phase,'quench','sixth strike must transition to quenching');
  await tap({x:width/2,y:180});assert.equal(await hits(),6,'screen input after quench must not add a seventh strike');
  const water=await inputPoint('water');await page.mouse.move(water.x,water.y);await page.mouse.down();await page.waitForTimeout(750);await page.mouse.up();await page.waitForFunction(()=>document.querySelector('.game').dataset.phase==='finished');assert.equal(await hits(),6,'quenching must not add another hit');assert.equal((await state()).session.quenchGood,true,'hold within the target window must produce precise quenching');
  // Force one unprotected fracture to verify its delayed contact and sound path.
  const broken=structuredClone(baseline);broken.session.protection=false;broken.session.seed=15872;
  await page.evaluate(s=>localStorage.setItem('yichuichengshenbing.v1',JSON.stringify(s)),broken);await page.reload();await page.waitForSelector('#scene3d[data-cat-asset="ready"]');
  await page.waitForFunction(()=>{const p=document.querySelector('#scene3d').dataset.forgeProof;return p&&JSON.parse(p).phase==='forge'});await page.locator('#bold').click();await tap(await inputPoint());
  await page.waitForFunction(()=>JSON.parse(localStorage.getItem('yichuichengshenbing.v1')).session.hits===1);
  const fractureOutcome=(await state()).session.strikes[0].result;
  assert.equal(fractureOutcome,'break','unprotected high roll must fracture the blade');
  assert.equal(await page.locator('#scene3d').getAttribute('data-hammer-impacts'),'1','fracture occurs at a real hammer contact');
  assert.deepEqual(errors,[]);
  reports.push({width,height,passed:true,audioPeak,fractureOutcome,checks:['scene mouse/touch input','one strike per rapid click sequence','controls and other stations excluded','recorded audio signal','mute/unmute','Space key','reload progress','six-hit boundary']});
  console.log(`${width}x${height}: direct input, audio signal, mute and six-hit boundary passed`);await page.close();
 }
 await writeFile(`${out}/screen-input-report.json`,JSON.stringify({passed:true,reports},null,2));
}finally{await browser.close()}
