/* 一锤成神兵 V1.1 — deterministic rules, independent from rendering. */

















export const MATERIALS={
 iron:{name:'铁胚',blank:65,fuel:15,value:1,atk:1,unlock:1},
 bronze:{name:'青铜',blank:90,fuel:15,value:1.35,atk:1.06,unlock:2},
 cold:{name:'寒铁',blank:165,fuel:20,value:2.1,atk:1.12,unlock:3}
};
export const BLADES={
 straight:{name:'直剑',interval:950},great:{name:'大剑',interval:1350},short:{name:'短剑',interval:700}
};
export const MARKS={
 none:{name:'无铭文',detail:'不附加属性'},
 flame:{name:'赤焰纹',detail:'命中灼烧2秒，0.5秒一跳'},
 armor_break:{name:'破甲纹',detail:'对护甲伤害 ×1.20'},
 swift:{name:'迅风纹',detail:'攻击间隔 ×0.92'},
 guard:{name:'守锋纹',detail:'专属甲盾评价徽章'},
 echo:{name:'回响纹',detail:'每第5次基础命中追加30%攻击'},
 star:{name:'星芒纹',detail:'纯外观星辉效果'}
};
export function unlockedMarks(s) {
 const marks=['none'];
 if(s.anvilLevel<2)return marks;
 if(s.completed.includes('C05'))marks.push('flame');
 if(s.completed.includes('C04'))marks.push('armor_break');
 if(s.completed.includes('C09'))marks.push('swift');
 if(s.completed.length>=10)marks.push('guard');
 if(s.completed.length>=15)marks.push('echo');
 if(s.completed.length>=25)marks.push('star');
 return marks;
}
export const ORDERS=[
 {id:'C01',title:'新兵的第一把剑',detail:'等级达到 Lv2',bonus:40,rep:10,condition:'lv2'},
 {id:'C02',title:'镇上的木工',detail:'直剑达到 Lv3',bonus:55,rep:12,condition:'straight3'},
 {id:'C03',title:'轻快刺客',detail:'短剑 · 魔偶伤害≥450 · 击断木桩',bonus:100,rep:18,condition:'assassin'},
 {id:'C04',title:'铁门破坏者',detail:'大剑 · 甲盾 8秒内破甲',bonus:100,rep:18,condition:'shield8'},
 {id:'C05',title:'精致礼剑',detail:'品质 Q≥1.05',bonus:80,rep:15,condition:'q105'},
 {id:'C06',title:'佣兵的利刃',detail:'等级达到 Lv5',bonus:125,rep:20,condition:'lv5'},
 {id:'C07',title:'山道守卫',detail:'直剑 · 甲盾盾体击碎',bonus:140,rep:22,condition:'shield_destroy'},
 {id:'C08',title:'三击断木',detail:'木桩不超过3次基础攻击击断',bonus:160,rep:24,condition:'wood_3'},
 {id:'C09',title:'三连快剑',detail:'短剑 · 追击≥2次 · 魔偶伤害≥650',bonus:185,rep:28,condition:'short_combo'},
 {id:'C10',title:'铁甲冠军',detail:'大剑 · 甲盾专属评级至少A',bonus:215,rep:32,condition:'shield_a'},
 {id:'C11',title:'冷光之剑',detail:'寒铁 · Lv≥6',bonus:250,rep:38,condition:'cold6'},
 {id:'C12',title:'城主收藏品',detail:'Lv≥8 · 品质Q≥1.08',bonus:350,rep:45,condition:'city_legend'}
];
export function clamp(n,a,b) {return Math.min(b,Math.max(a,n))}
export function roundHalfUp(n){return Math.floor(n+0.5000000001)}
export function nextSeed(n) {let x=n>>>0;x^=x<<13;x^=x>>>17;x^=x<<5;return x>>>0}
export function probabilities(style,level,timing) {
 if(style==='safe')return {success:10000,damage:0,break:0};
 const b=style==='precise'?{success:7500,damage:2000,break:500}:{success:5000,damage:3000,break:2000};
 const risk=level>=10?400:level>=5?200:0;
 b.success-=risk;b.break+=risk;
 if(timing==='perfect'){const move=Math.min(400,b.break);b.break-=move;b.success+=move;const extra=400-move;b.damage-=extra;b.success+=extra}
 else if(timing==='miss'){b.success-=400;b.break+=400}
 if(b.success+b.damage+b.break!==10000)throw new Error('invalid probability total');
 return b;
}
export function classifyTiming(elapsedMs,hammerLevel=1) {
 const period=1500,offset=((elapsedMs%period)+period)%period;
 const diff=Math.abs(offset-750);
 const perfect=hammerLevel>=2?104:90;
 return diff<=perfect?'perfect':diff<=250?'normal':'miss';
}
export function sampledOutcome(p,roll) {
 if(roll<p.success)return 'success';
 return roll<p.success+p.damage?'damage':'break';
}
export function quality(goodHeat,perfect,quench) {
 return Math.round(clamp(0.9+(goodHeat?0.03:0)+perfect*0.03+(quench?0.02:0),0.9,1.13)*100)/100;
}
export function value(level,q,material,mark='none') {
 return roundHalfUp(100*MATERIALS[material].value*Math.pow(1.24,clamp(level,0,12))*q*(mark==='none'?1:1.05));
}
export function attack(level,q,material) {
 return Math.floor((16+6*clamp(level,0,12))*MATERIALS[material].atk*q);
}
export function intervalMs(blade,mark='none') {
 return Math.max(550,Math.round(BLADES[blade].interval*(mark==='swift'?0.92:1)));
}
function grade(s) {return s>=90?'S':s>=70?'A':s>=40?'B':'C'}
function simulateTarget(atk,interval,blade,mark,target) {
 let hp=target==='wood'?200:target==='shield'?150:900;
 let armor=target==='shield'?180:0;
 let hits=0,damage=0,followups=0,killMs=null,armorBreakMs=null;
 let burnExpire=-1,nextBurn=-1;
 const hurt=(amount,isBurn=false,time=0)=>{
   if(hp<=0)return;
   if(armor>0){if(isBurn)return;const coeff=(blade==='great'?1.3:1)*(mark==='armor_break'?1.2:1);const armorHit=Math.floor(amount*coeff);armor-=armorHit;if(armor<=0){armor=0;armorBreakMs=time}return}
   const dealt=Math.min(hp,amount);hp-=dealt;damage+=dealt;if(hp<=0)killMs=time;
 };
 // Fixed 1ms independent ordering: base -> followup -> echo -> burn.
 for(let t=1;t<=10000 && hp>0;t++){
   if(t%interval===0){
     hits++;hurt(atk,false,t);
     if(blade==='short' && hits%4===0 && hp>0){followups++;hurt(Math.floor(atk*0.4),false,t)}
     if(mark==='echo' && hits%5===0 && hp>0){followups++;hurt(Math.floor(atk*0.3),false,t)}
     if(mark==='flame'){burnExpire=t+2000;nextBurn=t+500}
   }
   if(mark==='flame' && nextBurn===t && t<=burnExpire && hp>0){
     hurt(Math.max(1,Math.floor(atk*0.06)),true,t);
     nextBurn+=500;
   }
 }
 return {hits,damage,killed:hp<=0,killMs,armorBreakMs,followups};
}
export function simulateTrial(level,q,material,blade,mark='none'){
 const atk=attack(level,q,material),intv=intervalMs(blade,mark);
 const wood=simulateTarget(atk,intv,blade,mark,'wood');
 const shield=simulateTarget(atk,intv,blade,mark,'shield');
 const dummy=simulateTarget(atk,intv,blade,mark,'dummy');
 const score=(wood.killed?25:0)+(shield.armorBreakMs!==null?25:0)+(shield.killed?20:0)+(dummy.damage>=200?20:0)+(dummy.damage>=400?10:0);
 const shieldScore=(shield.armorBreakMs!==null?40:0)+(shield.killed?30:0)+(shield.armorBreakMs!==null&&shield.armorBreakMs<=5000?30:0);
 return {wood,shield,dummy,score,grade:grade(score),shieldScore,shieldGrade:grade(shieldScore)};
}
export function orderSatisfied(orderId,s){
 if(!orderId)return false;
 switch(orderId){
 case 'C01':return s.level>=2;
 case 'C02':return s.blade==='straight' && s.level>=3;
 case 'C03':return s.blade==='short' && s.trial.dummy.damage>=450 && s.trial.wood.killed;
 case 'C04':return s.blade==='great' && s.trial.shield.armorBreakMs!==null && s.trial.shield.armorBreakMs<=8000;
 case 'C05':return s.quality>=1.05;
 case 'C06':return s.level>=5;
 case 'C07':return s.blade==='straight' && s.trial.shield.killed;
 case 'C08':return s.trial.wood.killed && s.trial.wood.hits<=3;
 case 'C09':return s.blade==='short' && s.trial.dummy.followups>=2 && s.trial.dummy.damage>=650;
 case 'C10':return s.blade==='great' && s.trial.shieldScore>=70;
 case 'C11':return s.material==='cold' && s.level>=6;
 case 'C12':return s.level>=8 && s.quality>=1.08;
 default:return false;
 }
}
export function availableOrders(s){
 // Three cards maximum, always with a safe repeatable path (C01/C02).
 const basic=ORDERS[s.completed.includes('C01')?1:0];
 const n=s.completed.length;
 const eligible=ORDERS.filter(o=>o.id!==basic.id && (o.id==='C01'?false:
  o.id==='C11'?s.furnaceLevel>=3 && n>=6:
  o.id==='C12'?n>=8:
  o.id==='C10'?n>=6:
  o.id==='C09'?n>=5:
  o.id==='C08'?n>=4:
  o.id==='C07'?n>=3:
  o.id==='C06'?n>=2:
  o.id==='C05'?n>=1:
  o.id==='C03'||o.id==='C04'?n>=1:true));
 // Prefer unseen objectives; rotate visible cards after each finished sword.
 const unseen=eligible.filter(o=>!s.completed.includes(o.id));
 const pool=unseen.length>=2?unseen:eligible;
 const picks=[];
 for(let i=0;i<pool.length && picks.length<2;i++){
   const order=pool[(s.totalMade+i)%pool.length];
   if(order && !picks.some(x=>x.id===order.id))picks.push(order);
 }
 return [basic,...picks];
}
export function freshState(seed=20261008){return {version:1,coins:300,scraps:0,rep:0,formalCount:0,totalMade:0,totalBroken:0,hammerLevel:1,furnaceLevel:1,anvilLevel:1,showCaseLevel:1,completed:[],caseIds:[],swords:[],session:null,ledger:[],seed:seed>>>0||1,sound:true}}
export class Game {
 state; persist;
 constructor(persist=()=>{},restored){this.persist=persist;this.state=restored?.version===1?restored:freshState()}
 save() {this.persist(JSON.parse(JSON.stringify(this.state)))}
 once(key,job) {if(this.state.ledger.includes(key))return false;job();this.state.ledger.push(key);this.save();return true}
 canAfford(m){
 const mat=MATERIALS[m];return this.state.coins>=mat.fuel+Math.max(0,mat.blank-this.state.scraps);
 }
 needsApprentice(){return this.state.formalCount>0 && !this.canAfford('iron')}
 start(material='iron',blade='straight',orderId='C01',apprentice=false) {
 if(this.state.session)throw new Error('请先完成当前这把剑');
 if(apprentice&&!this.needsApprentice())throw new Error('材料尚够，不能申请免费代工');
 if(apprentice){material='iron';blade='straight'}
 if(!apprentice && (MATERIALS[material].unlock>this.state.furnaceLevel||!(this.state.formalCount===0||this.canAfford(material))))throw new Error('材料尚未解锁或金币不足');
 if(orderId&&!availableOrders(this.state).some(o=>o.id===orderId))throw new Error('订单尚未解锁或本轮未开放');
 const mat=MATERIALS[material];let paid=0;
 if(!apprentice){
   const tutorial=this.state.formalCount===0;
   const offset=tutorial?0:Math.min(this.state.scraps,mat.blank);
   this.state.scraps-=offset;paid=tutorial?0:mat.blank-offset+mat.fuel;this.state.coins-=paid;this.state.formalCount++;
 }
 const tutorial=!apprentice&&this.state.formalCount===1;
 const seed=nextSeed(this.state.seed);this.state.seed=seed;
 const id='forge_'+this.state.totalMade+'_'+this.state.totalBroken+'_'+this.state.formalCount+'_'+seed;
 const session={id,phase:'heat',orderId:apprentice?null:orderId,blade,material,apprentice,tutorial,level:0,hits:0,safeUsed:0,perfect:0,goodHeat:false,protectedUsed:false,protection:!apprentice&&this.state.formalCount<=2,strikes:[],paid,seed,sword:null,quenchGood:false};
 this.state.session=session;this.save();return session;
 }
 heat(temperature){const s=this.must('heat');s.goodHeat=temperature>=70&&temperature<=90;s.phase='forge';this.save()}
 must(phase){const s=this.state.session;if(!s||s.phase!==phase)throw new Error('当前操作阶段不正确');return s}
 strikeAt(style,elapsedMs,actionId) {
   return this.strike(style,classifyTiming(elapsedMs,this.state.hammerLevel),actionId);
 }
 strike(style,timing,actionId) {
 const ss=this.state.session;if(!ss)throw new Error('尚未开始锻造');
 const existing=ss.strikes.find(x=>x.id===actionId);if(existing)return existing;
 const s=this.must('forge');if(s.hits>=6||(style==='safe'&&s.safeUsed>=3))throw new Error('锻击次数已用尽');
 const p=probabilities(style,s.level,timing),rollSeed=nextSeed(s.seed);
 s.seed=rollSeed;const roll=Math.floor(rollSeed/4294967296*10000);
 const sampled=sampledOutcome(p,roll),protectedBreak=sampled==='break'&&s.protection&&!s.protectedUsed;
 const result=protectedBreak?'damage':sampled;
 const delta=result==='success'?(style==='safe'?1:style==='precise'?2:4):result==='damage'?(protectedBreak?-1:style==='precise'?-1:-2):0;
 const before=s.level;s.level=clamp(s.level+delta,0,12);s.hits++;
 if(style==='safe')s.safeUsed++;
 if(timing==='perfect')s.perfect++;
 if(protectedBreak)s.protectedUsed=true;
 const entry={id:actionId,style,timing,before,after:s.level,roll,shown:p,sampled,result,protected:protectedBreak};
 s.strikes.push(entry);
 if(result==='break'){
   s.phase='broken';this.state.totalBroken++;
   if(!s.apprentice&&!s.tutorial)this.state.scraps+=Math.floor(MATERIALS[s.material].blank*0.4);
 }else if(s.hits>=6)s.phase='quench';
 this.save();return entry;
 }
 cashout(){const s=this.must('forge');s.phase='quench';this.save()}
 quench(good,mark='none') {
 const s=this.must('quench');
 if(!unlockedMarks(this.state).includes(mark))throw new Error('该铭文尚未解锁或铁砧未升级');
 if(s.apprentice && mark!=='none')throw new Error('学徒代工不可安装铭文');
 s.quenchGood=good;
 const q=quality(s.goodHeat,s.perfect,good),v=value(s.level,q,s.material,mark);
 const sword={id:'sword_'+s.id,material:s.material,blade:s.blade,level:s.level,quality:q,value:v,attack:attack(s.level,q,s.material),intervalMs:intervalMs(s.blade,mark),mark,quenchGood:good,orderId:s.orderId,disposal:'NEW',trial:simulateTrial(s.level,q,s.material,s.blade,mark)};
 s.sword=sword;s.phase='finished';this.state.totalMade++;this.save();return sword;
 }
 dispose(kind) {
 const s=this.must('finished'),sword=s.sword;if(sword.disposal!=='NEW')throw new Error('此剑已处置');
 if(s.apprentice&&kind!=='DELIVERED')throw new Error('学徒代工不可出售或收藏');
 const tx=sword.id+':'+kind;let amount=0;
 const applied=this.once(tx,()=>{
   if(s.apprentice){
     if(s.hits>=2){amount=60;this.state.coins+=amount}
     sword.disposal='DELIVERED';
   }else{
     if(kind==='DELIVERED'){
       if(!orderSatisfied(s.orderId,sword))throw new Error('委托尚未达标');
       const o=ORDERS.find(o=>o.id===s.orderId);
       amount=Math.floor(sword.value*1.2)+o.bonus;this.state.coins+=amount;
       this.state.rep+=this.state.completed.includes(o.id)?Math.floor(o.rep/3):o.rep;
       if(!this.state.completed.includes(o.id))this.state.completed.push(o.id);
     }else if(kind==='SOLD'){amount=Math.floor(sword.value*0.7);this.state.coins+=amount}
     else{
       if(this.state.caseIds.length>=this.caseCapacity())throw new Error('展柜已满');
       this.state.caseIds.push(sword.id);
     }
     sword.disposal=kind;
   }
   // One atomic snapshot: payout, ledger key, history record and clearing session.
   // Do not persist an already-paid unfinished session between these changes.
   this.state.swords.push(JSON.parse(JSON.stringify(sword)));
   this.state.session=null;
 });
 if(!applied)return 0;
 return amount;
 }
 sellCollected(swordId) {
   const sword=this.state.swords.find(x=>x.id===swordId);
   if(!sword||sword.disposal!=='COLLECTED'||!this.state.caseIds.includes(swordId))throw new Error('该剑不在展柜中');
   const tx=swordId+':case-sale';let amount=0;
   this.once(tx,()=>{amount=Math.floor(sword.value*0.7);this.state.coins+=amount;
     sword.disposal='SOLD';this.state.caseIds=this.state.caseIds.filter(id=>id!==swordId);
   });return amount;
 }
 caseCapacity() {return this.state.showCaseLevel>=2?6:3}
 upgrade(type) {
 if(this.state.session)throw new Error('请完成当前锻造后再升级设备');
 const s=this.state;const cost=type==='hammer'?500:type==='anvil'?1100:type==='case'?600:s.furnaceLevel===1?800:1800;
 if(type==='hammer'&&s.hammerLevel>=2||type==='anvil'&&s.anvilLevel>=2||type==='case'&&s.showCaseLevel>=2||type==='furnace'&&s.furnaceLevel>=3)throw new Error('已经升到当前版本上限');
 if(s.coins<cost)throw new Error('金币不足');
 const level=type==='hammer'?s.hammerLevel:type==='furnace'?s.furnaceLevel:type==='anvil'?s.anvilLevel:s.showCaseLevel;
 this.once('upgrade:'+type+':'+level,()=>{s.coins-=cost;if(type==='hammer')s.hammerLevel++;else if(type==='furnace')s.furnaceLevel++;else if(type==='anvil')s.anvilLevel++;else s.showCaseLevel++});
 return cost;
 }
 closeBroken(){this.must('broken');this.state.session=null;this.save()}
}
