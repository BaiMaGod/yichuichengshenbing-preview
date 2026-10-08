import { Game, MATERIALS, BLADES, ORDERS, availableOrders, probabilities, classifyTiming, orderSatisfied } from './core.js';
const KEY='yichuichengshenbing.v1';
let saved;
try { saved=JSON.parse(localStorage.getItem(KEY)||'null') }catch { saved=null }
const game=new Game(s=>localStorage.setItem(KEY,JSON.stringify(s)),saved);
const $=(id)=>document.getElementById(id);
const panelIds=['choose','heat','forge','quench','finished','broken'];
let selection='safe';
let ringStart=performance.now();
let heating=false,heatStart=0,heatPercent=0;
let quenchStartY=null;
let trialStart=0,trialSkipped=false;
let lastResult='',overlayTimer=0;
let audio=null;
const effects=['✦','✧','✶','✹','✷'];
function sfx(freq=440,duration=0.12){
 if(!game.state.sound)return;
 try {const A=window.AudioContext;audio=audio||new A();const osc=audio.createOscillator(),gain=audio.createGain();osc.type='triangle';osc.frequency.setValueAtTime(freq,audio.currentTime);osc.frequency.exponentialRampToValueAtTime(freq*0.6,audio.currentTime+duration);gain.gain.setValueAtTime(0.055,audio.currentTime);gain.gain.exponentialRampToValueAtTime(0.0001,audio.currentTime+duration);osc.connect(gain).connect(audio.destination);osc.start();osc.stop(audio.currentTime+duration)}catch{}
}
function toast(message){
 const t=$('toast');t.textContent=message;t.classList.add('show');
 window.clearTimeout(overlayTimer);overlayTimer=window.setTimeout(()=>t.classList.remove('show'),2400);
}
function action(fn){try{fn();render()}catch(e){toast(e instanceof Error?e.message:String(e))}}
function fmt(n){return n.toLocaleString('zh-CN')}
function phase(){return game.state.session?.phase||'choose'}
function setPane(id){for(const k of panelIds)$(k).hidden=k!==id}
function materialOptions(){
 const s=$('material');const old=s.value;
 s.innerHTML=Object.entries(MATERIALS).filter(([,m])=>m.unlock<=game.state.furnaceLevel).map(([id,m])=>'<option value="'+id+'">'+m.name+' · '+(m.blank+m.fuel)+' 金</option>').join('');
 if(old&&s.querySelector('option[value="'+old+'"]'))s.value=old;
}
function initChoose(){
 materialOptions();
 const b=$('blade');const keep=b.value;
 b.innerHTML=Object.entries(BLADES).map(([id,x])=>'<option value="'+id+'">'+x.name+' · '+(x.interval/1000).toFixed(2)+'秒/击</option>').join('');
 if(keep)b.value=keep;
 const order=$('order'),prev=order.value;
 order.innerHTML='<option value="">自由锻造 · 无委托奖金</option>'+availableOrders(game.state).map(o=>'<option value="'+o.id+'">'+o.id+' '+o.title+' · '+o.detail+'</option>').join('');
 if(prev&&order.querySelector('option[value="'+prev+'"]'))order.value=prev;
 else if(game.state.totalMade===0)order.value='C01';
}
function enterTrial(){trialStart=performance.now();trialSkipped=false;$('trial-result').classList.remove('unveiled')}
function render(){
 const state=game.state,s=state.session,p=phase();
 setPane(p);
 $('coin').textContent=fmt(state.coins);$('scrap').textContent=fmt(state.scraps);
 $('rep').textContent=fmt(state.rep);$('made').textContent=fmt(state.totalMade);
 $('workshop-level').textContent='铁匠工坊 · 炉火 Lv'+state.furnaceLevel;
 $('sound').textContent=state.sound?'🔊':'🔇';
 $('nav-upgrades').textContent='升级锻锤 '+(state.hammerLevel>=2?'已满级':'500 金');
 $('nav-upgrades').toggleAttribute('disabled',state.hammerLevel>=2||state.coins<500);
 $('nav-furnace').textContent='升级熔炉 '+(state.furnaceLevel>=3?'已满级':state.furnaceLevel===1?'800 金':'1800 金');
 $('nav-furnace').toggleAttribute('disabled',state.furnaceLevel>=3||state.coins<(state.furnaceLevel===1?800:1800));
 $('nav-collection').textContent='剑谱 '+state.swords.length+' · 展柜 '+state.caseIds.length+'/'+game.caseCapacity();
 $('foot-hint').textContent=s?'当前 '+(s.apprentice?'学徒代工':'正式锻造')+' · 已锤 '+s.hits+'/6':'先接委托，再锻出你的神兵';
 if(!s){initChoose();const apprentice=game.needsApprentice();$('apprentice').hidden=!apprentice;
  const m=MATERIALS[$('material').value]||MATERIALS.iron;
  $('cost-label').textContent='胚料 '+m.blank+' + 燃料 '+m.fuel+' · 绑定残料可抵胚料';
  $('begin').toggleAttribute('disabled',apprentice);
  updateSword(0, 'iron');return;
 }
 updateSword(s.level,s.material);
 if(p==='heat'){
   $('heating-order').textContent=s.orderId?ORDERS.find(o=>o.id===s.orderId)?.title||'自由锻造':'自由锻造';
   $('heat-fill').style.width=heatPercent+'%';$('heat-text').textContent=Math.round(heatPercent)+'%';
 }
 if(p==='forge'){
   $('forge-level').textContent='Lv'+s.level;
   $('hit-count').textContent=s.hits+'/6';
   $('safe-count').textContent=(3-s.safeUsed)+' / 3';
   $('safe').toggleAttribute('disabled',s.safeUsed>=3);
   $('protection').textContent=s.protection?(s.protectedUsed?'护符已消耗':'🛡️ 本把首次断剑会改为受损'):'无护符保护';
   $('heat-tag').textContent=s.goodHeat?'🔥 好火候 · 品质+0.03':'普通火候';
   $('forge-quality').textContent='Q '+(0.9+(s.goodHeat?0.03:0)+s.perfect*0.03).toFixed(2);
   $('value-now').textContent='参考价值 '+fmt(Math.round(100*MATERIALS[s.material].value*Math.pow(1.24,s.level)*(0.9+(s.goodHeat?0.03:0)+s.perfect*0.03)))+' 金';
   if(selection==='safe'&&s.safeUsed>=3)selection='precise';
   for(const k of ['safe','precise','bold'])$(k).classList.toggle('active',k===selection);
   $('style-label').textContent=selection==='safe'?'稳锻 · 必定提升1级':selection==='precise'?'精锻 · 成功+2 / 受损-1':'豪锻 · 成功+4 / 受损-2';
   $('result').textContent=lastResult;
   const text=(p==='forge')?'点击击打，在光圈对齐中心时获得完美判定':'';
   $('forge-tip').textContent=text;
 }
 if(p==='quench'){$('quench-level').textContent='Lv'+s.level;$('quench-alert').textContent='把剑往下拖，停在蓝色目标带可精准淬火（品质+0.02）'}
 if(p==='finished' && s.sword){
   const sword=s.sword;
   $('finished-level').textContent='Lv'+sword.level;
   $('finished-quality').textContent='Q '+sword.quality.toFixed(2);
   $('finished-attack').textContent=fmt(sword.attack);
   $('finished-value').textContent=fmt(sword.value);
   $('finished-sell').textContent=fmt(Math.floor(sword.value*.7));
   $('finished-order').textContent=orderSatisfied(s.orderId,sword)?fmt(Math.floor(sword.value*1.2)+(ORDERS.find(o=>o.id===s.orderId)?.bonus||0)):'未达标';
   $('deliver').toggleAttribute('disabled',!orderSatisfied(s.orderId,sword)&&!s.apprentice);
   $('collect').toggleAttribute('disabled',s.apprentice||state.caseIds.length>=game.caseCapacity());
   $('sell').toggleAttribute('disabled',s.apprentice);
   if(s.apprentice){$('deliver').textContent=s.hits>=2?'代工交付 · 固定60金币':'练习完成 · 0金币'}else $('deliver').textContent='交付委托';
   $('trial-result').innerHTML='木桩：'+(sword.trial.wood.killed?'已斩断':'未击断')+' · '+(sword.trial.wood.killMs!==null?(sword.trial.wood.killMs/1000).toFixed(2)+'s':'—')+
      '<br>甲盾：'+(sword.trial.shield.armorBreakMs!==null?'已破甲':'未破甲')+' · '+sword.trial.shieldGrade+'级'+
      '<br>魔偶：'+fmt(sword.trial.dummy.damage)+' 伤害'+
      '<br>试剑总评：'+sword.trial.grade+'（'+sword.trial.score+'/100）';
   if(!trialStart)enterTrial();
 }
 if(p==='broken')$('broken-scrap').textContent=s.apprentice?'学徒练习不损失材料':'已回收绑定残料 '+Math.floor(MATERIALS[s.material].blank*.4);
}
function updateSword(level,material){
 const blade=$('blade-art');blade.setAttribute('data-tier',String(level>=11?5:level>=8?4:level>=5?3:level>=3?2:1));
 blade.setAttribute('data-mat',material);
 $('sword-level-tag').textContent='剑胚 · Lv'+level;
}
function ringLoop(now){
 const s=game.state.session;
 if(s?.phase==='forge'){
   const offset=((now-ringStart)%1500+1500)%1500;
   const diff=Math.abs(offset-750),scale=0.27+Math.abs(750-offset)/750*.77;
   $('timing-ring').style.transform='translate(-50%,-50%) scale('+scale.toFixed(3)+')';
   const timing=classifyTiming(now-ringStart,game.state.hammerLevel);
   const p=probabilities(selection,s.level,timing);
   $('timing-indicator').textContent=timing==='perfect'?'✦ 完美':timing==='normal'?'普通':'偏离';
   $('timing-indicator').className='timing '+timing;
   $('probability').textContent='成功 '+(p.success/100).toFixed(0)+'% · 受损 '+(p.damage/100).toFixed(0)+'% · 断剑 '+(p.break/100).toFixed(0)+'%';
   $('strike').toggleAttribute('disabled',s.hits>=6);
   $('ring-progress').style.width=Math.round((offset/1500)*100)+'%';
 }
 if(heating&&s?.phase==='heat'){
   heatPercent=Math.min(100,(now-heatStart)/22);$('heat-fill').style.width=heatPercent+'%';$('heat-text').textContent=Math.round(heatPercent)+'%';
   if(heatPercent>=100){heating=false;action(()=>game.heat(100))}
 }
 if(s?.phase==='finished'&&!trialSkipped){
   const elapsed=now-trialStart;
   const progress=Math.min(1,elapsed/8500);
   $('trial-progress').style.width=Math.round(progress*100)+'%';
   if(progress>=1){trialSkipped=true;$('trial-result').classList.add('unveiled')}
 }
 requestAnimationFrame(ringLoop);
}
function hit(){
 const s=game.state.session;if(s?.phase!=='forge')return;
 const t=classifyTiming(performance.now()-ringStart,game.state.hammerLevel);
 const id=s.id+':hit:'+s.hits;
 action(()=>{
   const result=game.strike(selection,t,id);
   if(result.result==='success'){lastResult='✦ 锻造成功 Lv'+result.after;sfx(540+result.after*36,0.22);spark(22)}
   else if(result.result==='damage'){lastResult=result.protected?'🛡️ 护符挡住断剑 · Lv'+result.after:'⚡ 锻造受损 Lv'+result.after;sfx(215,0.28);spark(10)}
   else{lastResult='💥 宝剑断裂';sfx(145,0.4);spark(36)}
   ringStart=performance.now();
 });
}
function spark(count){const holder=$('fx');for(let i=0;i<count;i++){const d=document.createElement('i'),angle=Math.random()*Math.PI*2,dist=45+Math.random()*100;d.className='spark';d.style.setProperty('--x',Math.cos(angle)*dist+'px');d.style.setProperty('--y',Math.sin(angle)*dist+'px');d.style.left=(45+Math.random()*10)+'%';d.style.top=(45+Math.random()*10)+'%';d.style.animationDelay=Math.round(Math.random()*140)+'ms';holder.appendChild(d);setTimeout(()=>d.remove(),800)}}
function begin(apprentice=false){action(()=>{const order=$('order').value||null;game.start($('material').value,$('blade').value,order,apprentice);lastResult='';heatPercent=0;trialStart=0;sfx(300)})}
$('begin').addEventListener('click',()=>begin(false));
$('apprentice').addEventListener('click',()=>begin(true));
for(const k of ['safe','precise','bold'])$(k).addEventListener('click',()=>{selection=k;render()});
$('strike').addEventListener('pointerdown',e=>{e.preventDefault();hit()});
$('cashout').addEventListener('click',()=>action(()=>{game.cashout();sfx(660)}));
$('heat-button').addEventListener('pointerdown',e=>{e.preventDefault();heating=true;heatStart=performance.now();(e.currentTarget).setPointerCapture(e.pointerId)});
function endHeat(){if(!heating)return;heating=false;action(()=>{game.heat(heatPercent);sfx(440,0.25)})}
$('heat-button').addEventListener('pointerup',endHeat);
$('heat-button').addEventListener('pointercancel',endHeat);
$('quench-area').addEventListener('pointerdown',e=>{quenchStartY=e.clientY;$( 'quench-area' ).setPointerCapture(e.pointerId)});
$('quench-area').addEventListener('pointerup',e=>{
 if(quenchStartY===null)return;
 const dy=e.clientY-quenchStartY;quenchStartY=null;
 if(dy<70){toast('请把宝剑往下拖动至少 70px');return}
 const rect=$('quench-area').getBoundingClientRect(),fraction=(e.clientY-rect.top)/rect.height;
 const good=fraction>=0.68&&fraction<=0.87;
 action(()=>{game.quench(good);sfx(good?840:510,0.3);spark(26);enterTrial()});
});
$('quench-quick').addEventListener('click',()=>action(()=>{game.quench(false);enterTrial()}));
$('skip-trial').addEventListener('click',()=>{trialSkipped=true;$('trial-progress').style.width='100%';$('trial-result').classList.add('unveiled')});
for(const [button,kind] of [['sell','SOLD'],['deliver','DELIVERED'],['collect','COLLECTED']])
 $(button).addEventListener('click',()=>action(()=>{const amount=game.dispose(kind);toast(amount>0?'获得金币 +'+fmt(amount):'神兵已收入剑谱');trialStart=0;sfx(700,0.25)}));
$('broken-next').addEventListener('click',()=>action(()=>{game.closeBroken();lastResult=''}));
$('nav-upgrades').addEventListener('click',()=>action(()=>{game.upgrade('hammer');toast('锻锤升到 Lv2，完美时机窗扩大')}));
$('nav-furnace').addEventListener('click',()=>action(()=>{game.upgrade('furnace');toast('熔炉升级，解锁新材料')}));
$('nav-collection').addEventListener('click',()=>{const l=game.state.swords.slice(-6).map(s=>'Lv'+s.level+' '+MATERIALS[s.material].name+' · '+s.value+'金 · '+s.disposal).join('\n');alert('神兵剑谱 · 最近六把\n'+(l||'尚无成剑记录'))});
$('sound').addEventListener('click',()=>{game.state.sound=!game.state.sound;localStorage.setItem(KEY,JSON.stringify(game.state));render()});
document.addEventListener('visibilitychange',()=>{if(document.hidden){heating=false;audio?.suspend()}else{audio?.resume();ringStart=performance.now()}});
const s=game.state.session;if(s?.phase==='finished')enterTrial();
render();requestAnimationFrame(ringLoop);
