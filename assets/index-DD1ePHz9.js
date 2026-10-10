var mh=Object.defineProperty;var gh=(i,t,e)=>t in i?mh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Et=(i,t,e)=>gh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const we={iron:{name:"铁胚",blank:65,fuel:15,value:1,atk:1,unlock:1},bronze:{name:"青铜",blank:90,fuel:15,value:1.35,atk:1.06,unlock:2},cold:{name:"寒铁",blank:165,fuel:20,value:2.1,atk:1.12,unlock:3}},fc={straight:{name:"直剑",interval:950},great:{name:"大剑",interval:1350},short:{name:"短剑",interval:700}},Za={none:{name:"无铭文",detail:"不附加属性"},flame:{name:"赤焰纹",detail:"命中灼烧2秒，0.5秒一跳"},armor_break:{name:"破甲纹",detail:"对护甲伤害 ×1.20"},swift:{name:"迅风纹",detail:"攻击间隔 ×0.92"},guard:{name:"守锋纹",detail:"专属甲盾评价徽章"},echo:{name:"回响纹",detail:"每第5次基础命中追加30%攻击"},star:{name:"星芒纹",detail:"纯外观星辉效果"}};function dc(i){const t=["none"];return i.anvilLevel<2||(i.completed.includes("C05")&&t.push("flame"),i.completed.includes("C04")&&t.push("armor_break"),i.completed.includes("C09")&&t.push("swift"),i.completed.length>=10&&t.push("guard"),i.completed.length>=15&&t.push("echo"),i.completed.length>=25&&t.push("star")),t}const ps=[{id:"C01",title:"新兵的第一把剑",detail:"等级达到 Lv2",bonus:40,rep:10,condition:"lv2"},{id:"C02",title:"镇上的木工",detail:"直剑达到 Lv3",bonus:55,rep:12,condition:"straight3"},{id:"C03",title:"轻快刺客",detail:"短剑 · 魔偶伤害≥450 · 击断木桩",bonus:100,rep:18,condition:"assassin"},{id:"C04",title:"铁门破坏者",detail:"大剑 · 甲盾 8秒内破甲",bonus:100,rep:18,condition:"shield8"},{id:"C05",title:"精致礼剑",detail:"品质 Q≥1.05",bonus:80,rep:15,condition:"q105"},{id:"C06",title:"佣兵的利刃",detail:"等级达到 Lv5",bonus:125,rep:20,condition:"lv5"},{id:"C07",title:"山道守卫",detail:"直剑 · 甲盾盾体击碎",bonus:140,rep:22,condition:"shield_destroy"},{id:"C08",title:"三击断木",detail:"木桩不超过3次基础攻击击断",bonus:160,rep:24,condition:"wood_3"},{id:"C09",title:"三连快剑",detail:"短剑 · 追击≥2次 · 魔偶伤害≥650",bonus:185,rep:28,condition:"short_combo"},{id:"C10",title:"铁甲冠军",detail:"大剑 · 甲盾专属评级至少A",bonus:215,rep:32,condition:"shield_a"},{id:"C11",title:"冷光之剑",detail:"寒铁 · Lv≥6",bonus:250,rep:38,condition:"cold6"},{id:"C12",title:"城主收藏品",detail:"Lv≥8 · 品质Q≥1.08",bonus:350,rep:45,condition:"city_legend"}];function yr(i,t,e){return Math.min(e,Math.max(t,i))}function _h(i){return Math.floor(i+.5000000001)}function Ka(i){let t=i>>>0;return t^=t<<13,t^=t>>>17,t^=t<<5,t>>>0}function vh(i,t,e){if(i==="safe")return{success:1e4,damage:0,break:0};const n=i==="precise"?{success:7500,damage:2e3,break:500}:{success:5e3,damage:3e3,break:2e3},s=t>=10?400:t>=5?200:0;if(n.success-=s,n.break+=s,e==="perfect"){const r=Math.min(400,n.break);n.break-=r,n.success+=r;const o=400-r;n.damage-=o,n.success+=o}else e==="miss"&&(n.success-=400,n.break+=400);if(n.success+n.damage+n.break!==1e4)throw new Error("invalid probability total");return n}function ma(i,t=1){const n=(i%1500+1500)%1500,s=Math.abs(n-750),r=t>=2?104:90;return s<=r?"perfect":s<=250?"normal":"miss"}function xh(i,t){return t<i.success?"success":t<i.success+i.damage?"damage":"break"}function Mh(i,t,e){return Math.round(yr(.9+(i?.03:0)+t*.03+(e?.02:0),.9,1.13)*100)/100}function Sh(i,t,e,n="none"){return _h(100*we[e].value*Math.pow(1.24,yr(i,0,12))*t*(n==="none"?1:1.05))}function pc(i,t,e){return Math.floor((16+6*yr(i,0,12))*we[e].atk*t)}function mc(i,t="none"){return Math.max(550,Math.round(fc[i].interval*(t==="swift"?.92:1)))}function $a(i){return i>=90?"S":i>=70?"A":i>=40?"B":"C"}function Pr(i,t,e,n,s){let r=s==="wood"?200:s==="shield"?150:900,o=s==="shield"?180:0,a=0,c=0,l=0,h=null,u=null,d=-1,f=-1;const g=(_,m=!1,p=0)=>{if(r<=0)return;if(o>0){if(m)return;const y=(e==="great"?1.3:1)*(n==="armor_break"?1.2:1),v=Math.floor(_*y);o-=v,o<=0&&(o=0,u=p);return}const E=Math.min(r,_);r-=E,c+=E,r<=0&&(h=p)};for(let _=1;_<=1e4&&r>0;_++)_%t===0&&(a++,g(i,!1,_),e==="short"&&a%4===0&&r>0&&(l++,g(Math.floor(i*.4),!1,_)),n==="echo"&&a%5===0&&r>0&&(l++,g(Math.floor(i*.3),!1,_)),n==="flame"&&(d=_+2e3,f=_+500)),n==="flame"&&f===_&&_<=d&&r>0&&(g(Math.max(1,Math.floor(i*.06)),!0,_),f+=500);return{hits:a,damage:c,killed:r<=0,killMs:h,armorBreakMs:u,followups:l}}function yh(i,t,e,n,s="none"){const r=pc(i,t,e),o=mc(n,s),a=Pr(r,o,n,s,"wood"),c=Pr(r,o,n,s,"shield"),l=Pr(r,o,n,s,"dummy"),h=(a.killed?25:0)+(c.armorBreakMs!==null?25:0)+(c.killed?20:0)+(l.damage>=200?20:0)+(l.damage>=400?10:0),u=(c.armorBreakMs!==null?40:0)+(c.killed?30:0)+(c.armorBreakMs!==null&&c.armorBreakMs<=5e3?30:0);return{wood:a,shield:c,dummy:l,score:h,grade:$a(h),shieldScore:u,shieldGrade:$a(u)}}function vo(i,t){if(!i)return!1;switch(i){case"C01":return t.level>=2;case"C02":return t.blade==="straight"&&t.level>=3;case"C03":return t.blade==="short"&&t.trial.dummy.damage>=450&&t.trial.wood.killed;case"C04":return t.blade==="great"&&t.trial.shield.armorBreakMs!==null&&t.trial.shield.armorBreakMs<=8e3;case"C05":return t.quality>=1.05;case"C06":return t.level>=5;case"C07":return t.blade==="straight"&&t.trial.shield.killed;case"C08":return t.trial.wood.killed&&t.trial.wood.hits<=3;case"C09":return t.blade==="short"&&t.trial.dummy.followups>=2&&t.trial.dummy.damage>=650;case"C10":return t.blade==="great"&&t.trial.shieldScore>=70;case"C11":return t.material==="cold"&&t.level>=6;case"C12":return t.level>=8&&t.quality>=1.08;default:return!1}}function dr(i){const t=ps[i.completed.includes("C01")?1:0],e=i.completed.length,n=ps.filter(a=>a.id!==t.id&&(a.id==="C01"?!1:a.id==="C11"?i.furnaceLevel>=3&&e>=6:a.id==="C12"?e>=8:a.id==="C10"?e>=6:a.id==="C09"?e>=5:a.id==="C08"?e>=4:a.id==="C07"?e>=3:a.id==="C06"?e>=2:a.id==="C05"||a.id==="C03"||a.id==="C04"?e>=1:!0)),s=n.filter(a=>!i.completed.includes(a.id)),r=s.length>=2?s:n,o=[];for(let a=0;a<r.length&&o.length<2;a++){const c=r[(i.totalMade+a)%r.length];c&&!o.some(l=>l.id===c.id)&&o.push(c)}return[t,...o]}function Eh(i=20261008){return{version:1,coins:300,scraps:0,rep:0,formalCount:0,totalMade:0,totalBroken:0,hammerLevel:1,furnaceLevel:1,anvilLevel:1,showCaseLevel:1,completed:[],caseIds:[],swords:[],session:null,ledger:[],seed:i>>>0||1,sound:!0,ironBlanks:0,catTributes:0,relics:[]}}const gc=[{id:"guard",name:"九命护符",cost:2,detail:"每把正式锻造的首次断剑，改为受损"},{id:"ember",name:"余烬晶石",cost:1,detail:"好火候范围扩大到 55%–90%"},{id:"lucky",name:"幸运铜铃",cost:2,detail:"精锻与豪锻：最多 3% 断剑概率转为成功"}];function ir(i){return Math.min(8,2+Math.floor(i.catTributes/2))}function _c(i,t,e,n){const s=vh(t,e,n);if(i.relics.includes("lucky")){const r=Math.min(s.break,300);s.break-=r,s.success+=r}return s}class bh{constructor(t=()=>{},e){Et(this,"state");Et(this,"persist");this.persist=t,this.state=(e==null?void 0:e.version)===1?{...e,ironBlanks:Math.max(0,Math.floor(e.ironBlanks||0)),catTributes:Math.max(0,Math.floor(e.catTributes||0)),relics:e.relics||[]}:Eh()}save(){this.persist(JSON.parse(JSON.stringify(this.state)))}once(t,e){return this.state.ledger.includes(t)?!1:(e(),this.state.ledger.push(t),this.save(),!0)}canAfford(t){const e=we[t];return this.state.coins>=e.fuel+(t==="iron"&&this.state.ironBlanks>0?0:Math.max(0,e.blank-this.state.scraps))}needsApprentice(){return this.state.formalCount>0&&!this.canAfford("iron")}start(t="iron",e="straight",n=void 0,s=!1){var u;if(this.state.session)throw new Error("请先完成当前这把剑");if(n===void 0&&(n=((u=dr(this.state)[0])==null?void 0:u.id)||null),s&&!this.needsApprentice())throw new Error("材料尚够，不能申请免费代工");if(s&&(t="iron",e="straight"),!s&&(we[t].unlock>this.state.furnaceLevel||!(this.state.formalCount===0||this.canAfford(t))))throw new Error("材料尚未解锁或金币不足");if(n&&!dr(this.state).some(d=>d.id===n))throw new Error("订单尚未解锁或本轮未开放");const r=we[t];let o=0;if(!s){const d=this.state.formalCount===0,f=!d&&t==="iron"&&this.state.ironBlanks>0;f&&this.state.ironBlanks--;const g=d||f?0:Math.min(this.state.scraps,r.blank);this.state.scraps-=g,o=d?0:(f?0:r.blank-g)+r.fuel,this.state.coins-=o,this.state.formalCount++}const a=!s&&this.state.formalCount===1,c=Ka(this.state.seed);this.state.seed=c;const h={id:"forge_"+this.state.totalMade+"_"+this.state.totalBroken+"_"+this.state.formalCount+"_"+c,phase:"heat",orderId:s?null:n,blade:e,material:t,apprentice:s,tutorial:a,level:0,hits:0,safeUsed:0,perfect:0,goodHeat:!1,protectedUsed:!1,protection:!s&&(this.state.formalCount<=2||this.state.relics.includes("guard")),strikes:[],paid:o,seed:c,sword:null,quenchGood:!1};return this.state.session=h,this.save(),h}heat(t){const e=this.must("heat");e.goodHeat=t>=(this.state.relics.includes("ember")?55:70)&&t<=90,e.phase="forge",this.save()}must(t){const e=this.state.session;if(!e||e.phase!==t)throw new Error("当前操作阶段不正确");return e}strikeAt(t,e,n){return this.strike(t,ma(e,this.state.hammerLevel),n)}strike(t,e,n){const s=this.state.session;if(!s)throw new Error("尚未开始锻造");const r=s.strikes.find(m=>m.id===n);if(r)return r;const o=this.must("forge");if(o.hits>=6||t==="safe"&&o.safeUsed>=3)throw new Error("锻击次数已用尽");const a=_c(this.state,t,o.level,e),c=Ka(o.seed);o.seed=c;const l=Math.floor(c/4294967296*1e4),h=xh(a,l),u=h==="break"&&o.protection&&!o.protectedUsed,d=u?"damage":h,f=d==="success"?t==="safe"?1:t==="precise"?2:4:d==="damage"?u||t==="precise"?-1:-2:0,g=o.level;o.level=yr(o.level+f,0,12),o.hits++,t==="safe"&&o.safeUsed++,e==="perfect"&&o.perfect++,u&&(o.protectedUsed=!0);const _={id:n,style:t,timing:e,before:g,after:o.level,roll:l,shown:a,sampled:h,result:d,protected:u};return o.strikes.push(_),d==="break"?(o.phase="broken",this.state.totalBroken++,!o.apprentice&&!o.tutorial&&(this.state.scraps+=Math.floor(we[o.material].blank*.4))):o.hits>=6&&(o.phase="quench"),this.save(),_}cashout(){const t=this.must("forge");t.phase="quench",this.save()}quench(t,e="none"){const n=this.must("quench");if(!dc(this.state).includes(e))throw new Error("该铭文尚未解锁或铁砧未升级");if(n.apprentice&&e!=="none")throw new Error("学徒代工不可安装铭文");n.quenchGood=t;const s=Mh(n.goodHeat,n.perfect,t),r=Sh(n.level,s,n.material,e),o={id:"sword_"+n.id,material:n.material,blade:n.blade,level:n.level,quality:s,value:r,attack:pc(n.level,s,n.material),intervalMs:mc(n.blade,e),mark:e,quenchGood:t,orderId:n.orderId,disposal:"NEW",trial:yh(n.level,s,n.material,n.blade,e)};return n.sword=o,n.phase="finished",this.state.totalMade++,this.save(),o}dispose(t){const e=this.must("finished"),n=e.sword;if(n.disposal!=="NEW")throw new Error("此剑已处置");if(e.apprentice&&t!=="DELIVERED")throw new Error("学徒代工不可出售或收藏");const s=n.id+":"+t;let r=0;return this.once(s,()=>{if(e.apprentice)e.hits>=2&&(r=60,this.state.coins+=r),n.disposal="DELIVERED";else{if(t==="DELIVERED"){if(!vo(e.orderId,n))throw new Error("委托尚未达标");const a=ps.find(c=>c.id===e.orderId);r=Math.floor(n.value*1.2)+a.bonus,this.state.coins+=r,this.state.rep+=this.state.completed.includes(a.id)?Math.floor(a.rep/3):a.rep,this.state.completed.includes(a.id)||this.state.completed.push(a.id)}else if(t==="SOLD")r=Math.floor(n.value*.7),this.state.coins+=r;else{if(this.state.caseIds.length>=this.caseCapacity())throw new Error("展柜已满");this.state.caseIds.push(n.id)}n.disposal=t}this.state.swords.push(JSON.parse(JSON.stringify(n))),this.state.session=null})?r:0}tribute(){const t=this.must("finished"),e=t.sword;if(t.apprentice)throw new Error("代工剑属于工坊，不能拿去纳贡");if(e.blade!=="great")throw new Error("邪恶猫咪只吃巨剑，请锻造大剑");if(e.level<ir(this.state))throw new Error("巨剑等级不足，猫咪还不满意");if(e.disposal!=="NEW")throw new Error("此剑已经上交");const n=3+Math.min(2,Math.floor(e.level/4));return this.once(e.id+":TRIBUTED",()=>{e.disposal="TRIBUTED",this.state.ironBlanks+=n,this.state.catTributes++,this.state.rep+=5,this.state.swords.push(JSON.parse(JSON.stringify(e))),this.state.session=null}),{blanks:n,value:e.value,id:e.id}}buyRelic(t){if(this.state.session)throw new Error("完成当前锻造后再交换遗物");const e=gc.find(n=>n.id===t);if(!e)throw new Error("未知遗物");if(this.state.relics.includes(t))throw new Error("已经拥有这件遗物");if(this.state.ironBlanks<e.cost)throw new Error("铁剑不足，先向邪恶猫咪纳贡");this.once("relic:"+t,()=>{this.state.ironBlanks-=e.cost,this.state.relics.push(t)})}sellCollected(t){const e=this.state.swords.find(r=>r.id===t);if(!e||e.disposal!=="COLLECTED"||!this.state.caseIds.includes(t))throw new Error("该剑不在展柜中");const n=t+":case-sale";let s=0;return this.once(n,()=>{s=Math.floor(e.value*.7),this.state.coins+=s,e.disposal="SOLD",this.state.caseIds=this.state.caseIds.filter(r=>r!==t)}),s}caseCapacity(){return this.state.showCaseLevel>=2?6:3}upgrade(t){if(this.state.session)throw new Error("请完成当前锻造后再升级设备");const e=this.state,n=t==="hammer"?500:t==="anvil"?1100:t==="case"?600:e.furnaceLevel===1?800:1800;if(t==="hammer"&&e.hammerLevel>=2||t==="anvil"&&e.anvilLevel>=2||t==="case"&&e.showCaseLevel>=2||t==="furnace"&&e.furnaceLevel>=3)throw new Error("已经升到当前版本上限");if(e.coins<n)throw new Error("金币不足");const s=t==="hammer"?e.hammerLevel:t==="furnace"?e.furnaceLevel:t==="anvil"?e.anvilLevel:e.showCaseLevel;return this.once("upgrade:"+t+":"+s,()=>{e.coins-=n,t==="hammer"?e.hammerLevel++:t==="furnace"?e.furnaceLevel++:t==="anvil"?e.anvilLevel++:e.showCaseLevel++}),n}closeBroken(){this.must("broken"),this.state.session=null,this.save()}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="180",Th=0,ja=1,wh=2,vc=1,xc=2,Mn=3,kn=0,Ne=1,ln=2,Nn=0,Li=1,Qa=2,tl=3,el=4,Ah=5,jn=100,Ch=101,Rh=102,Ph=103,Lh=104,Dh=200,Ih=201,Uh=202,Nh=203,xo=204,Mo=205,Fh=206,Oh=207,Bh=208,zh=209,kh=210,Hh=211,Vh=212,Gh=213,Wh=214,So=0,yo=1,Eo=2,Fi=3,bo=4,To=5,wo=6,Ao=7,_a=0,Xh=1,qh=2,Fn=0,Yh=1,Jh=2,Zh=3,Mc=4,Kh=5,$h=6,jh=7,Sc=300,Oi=301,Bi=302,Co=303,Ro=304,Er=306,ms=1e3,ei=1001,Po=1002,We=1003,Qh=1004,Ls=1005,Ze=1006,Lr=1007,En=1008,fn=1009,yc=1010,Ec=1011,gs=1012,va=1013,ri=1014,cn=1015,ws=1016,xa=1017,Ma=1018,_s=1020,bc=35902,Tc=35899,wc=1021,Ac=1022,sn=1023,vs=1026,xs=1027,Sa=1028,ya=1029,Cc=1030,Ea=1031,ba=1033,sr=33776,rr=33777,or=33778,ar=33779,Lo=35840,Do=35841,Io=35842,Uo=35843,No=36196,Fo=37492,Oo=37496,Bo=37808,zo=37809,ko=37810,Ho=37811,Vo=37812,Go=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,Jo=37818,Zo=37819,Ko=37820,$o=37821,jo=36492,Qo=36494,ta=36495,ea=36283,na=36284,ia=36285,sa=36286,tu=3200,eu=3201,Ta=0,nu=1,Sn="",Te="srgb",zi="srgb-linear",pr="linear",re="srgb",fi=7680,nl=519,iu=512,su=513,ru=514,Rc=515,ou=516,au=517,lu=518,cu=519,il=35044,sl="300 es",hn=2e3,mr=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const hs=Math.PI/180,ki=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function wa(i,t){return(i%t+t)%t}function hu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function uu(i,t,e){return i!==t?(e-i)/(t-i):0}function us(i,t,e){return(1-e)*i+e*t}function fu(i,t,e,n){return us(i,t,1-Math.exp(-e*n))}function du(i,t=1){return t-Math.abs(wa(i,t*2)-t)}function pu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _u(i,t){return i+Math.random()*(t-i)}function vu(i){return i*(.5-Math.random())}function xu(i){i!==void 0&&(rl=i);let t=rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mu(i){return i*hs}function Su(i){return i*ki}function yu(i){return(i&i-1)===0&&i!==0}function Eu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Be={DEG2RAD:hs,RAD2DEG:ki,generateUUID:ci,clamp:Xt,euclideanModulo:wa,mapLinear:hu,inverseLerp:uu,lerp:us,damp:fu,pingpong:du,smoothstep:pu,smootherstep:mu,randInt:gu,randFloat:_u,randFloatSpread:vu,seededRandom:xu,degToRad:Mu,radToDeg:Su,isPowerOfTwo:yu,ceilPowerOfTwo:Eu,floorPowerOfTwo:bu,setQuaternionFromProperEuler:Tu,normalize:De,denormalize:Ri};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,p*E);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const v=a*E;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new R,ol=new Yi;class Ht{constructor(t,e,n,s,r,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],y=s[4],v=s[7],A=s[2],w=s[5],C=s[8];return r[0]=o*_+a*E+c*A,r[3]=o*m+a*y+c*w,r[6]=o*p+a*v+c*C,r[1]=l*_+h*E+u*A,r[4]=l*m+h*y+u*w,r[7]=l*p+h*v+u*C,r[2]=d*_+f*E+g*A,r[5]=d*m+f*y+g*w,r[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ir.makeScale(t,e)),this}rotate(t){return this.premultiply(Ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new Ht;function Pc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wu(){const i=Ms("canvas");return i.style.display="block",i}const al={};function Ss(i){i in al||(al[i]=!0,console.warn(i))}function Au(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ll=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cu(){const i={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sn?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zi]:{primaries:t,whitePoint:n,transfer:pr,toXYZ:ll,fromXYZ:cl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:re,toXYZ:ll,fromXYZ:cl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}const Qt=Cu();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class Ru{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{di===void 0&&(di=Ms("canvas")),di.width=t.width,di.height=t.height;const s=di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Tn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pu=0;class Aa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ur(s[o].image)):r.push(Ur(s[o]))}else r=Ur(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ru.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lu=0;const Nr=new R;class be extends qi{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=ei,s=ei,r=Ze,o=En,a=sn,c=fn,l=be.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=ci(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nr).x}get height(){return this.source.getSize(Nr).y}get depth(){return this.source.getSize(Nr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Sc;be.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(f+1)/2,A=(p+1)/2,w=(h+d)/4,C=(u+_)/4,L=(g+m)/4;return y>v&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=C/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=L/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Du extends qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new be(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Aa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Du{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lc extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iu extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Is.subVectors(this.max,ji),pi.subVectors(t.a,ji),mi.subVectors(t.b,ji),gi.subVectors(t.c,ji),An.subVectors(mi,pi),Cn.subVectors(gi,mi),Wn.subVectors(pi,gi);let e=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-Wn.z,Wn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,Wn.z,0,-Wn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-Wn.y,Wn.x,0];return!Fr(e,pi,mi,gi,Is)||(e=[1,0,0,0,1,0,0,0,1],!Fr(e,pi,mi,gi,Is))?!1:(Us.crossVectors(An,Cn),e=[Us.x,Us.y,Us.z],Fr(e,pi,mi,gi,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const mn=[new R,new R,new R,new R,new R,new R,new R,new R],je=new R,Ds=new wn,pi=new R,mi=new R,gi=new R,An=new R,Cn=new R,Wn=new R,ji=new R,Is=new R,Us=new R,Xn=new R;function Fr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xn.fromArray(i,r);const a=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),c=t.dot(Xn),l=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Uu=new wn,Qi=new R,Or=new R;class As{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Uu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Or)),this.expandByPoint(Qi.copy(t.center).sub(Or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const gn=new R,Br=new R,Ns=new R,Rn=new R,zr=new R,Fs=new R,kr=new R;class Dc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Br.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(Br);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ns),a=Rn.dot(this.direction),c=-Rn.dot(Ns),l=Rn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Br).addScaledVector(Ns,d),f}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,s,r){zr.subVectors(e,t),Fs.subVectors(n,t),kr.crossVectors(zr,Fs);let o=this.direction.dot(kr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,t);const c=a*this.direction.dot(Fs.crossVectors(Rn,Fs));if(c<0)return null;const l=a*this.direction.dot(zr.cross(Rn));if(l<0||c+l>o)return null;const h=-a*Rn.dot(kr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),o=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nu,t,Fu)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Pn.crossVectors(n,Ve),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Pn.crossVectors(n,Ve)),Pn.normalize(),Os.crossVectors(Ve,Pn),s[0]=Pn.x,s[4]=Os.x,s[8]=Ve.x,s[1]=Pn.y,s[5]=Os.y,s[9]=Ve.y,s[2]=Pn.z,s[6]=Os.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],y=n[7],v=n[11],A=n[15],w=s[0],C=s[4],L=s[8],x=s[12],M=s[1],P=s[5],I=s[9],B=s[13],H=s[2],z=s[6],G=s[10],Y=s[14],k=s[3],it=s[7],rt=s[11],ft=s[15];return r[0]=o*w+a*M+c*H+l*k,r[4]=o*C+a*P+c*z+l*it,r[8]=o*L+a*I+c*G+l*rt,r[12]=o*x+a*B+c*Y+l*ft,r[1]=h*w+u*M+d*H+f*k,r[5]=h*C+u*P+d*z+f*it,r[9]=h*L+u*I+d*G+f*rt,r[13]=h*x+u*B+d*Y+f*ft,r[2]=g*w+_*M+m*H+p*k,r[6]=g*C+_*P+m*z+p*it,r[10]=g*L+_*I+m*G+p*rt,r[14]=g*x+_*B+m*Y+p*ft,r[3]=E*w+y*M+v*H+A*k,r[7]=E*C+y*P+v*z+A*it,r[11]=E*L+y*I+v*G+A*rt,r[15]=E*x+y*B+v*Y+A*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,w=e*E+n*y+s*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=E*C,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*C,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*C,t[4]=y*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*C,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*C,t[8]=v*C,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=A*C,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,E=c*l,y=c*h,v=c*u,A=n.x,w=n.y,C=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+v)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+y)*C,s[9]=(m-E)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const o=_i.set(s[4],s[5],s[6]).length(),a=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const l=1/r,h=1/o,u=1/a;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=hn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===hn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===mr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=hn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===hn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===mr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new R,Qe=new ie,Nu=new R(0,0,0),Fu=new R(1,1,1),Pn=new R,Os=new R,Ve=new R,hl=new ie,ul=new Yi;class $e{constructor(t=0,e=0,n=0,s=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ul.setFromEuler(this),this.setFromQuaternion(ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class Ca{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ou=0;const fl=new R,vi=new Yi,_n=new ie,Bs=new R,ts=new R,Bu=new R,zu=new Yi,dl=new R(1,0,0),pl=new R(0,1,0),ml=new R(0,0,1),gl={type:"added"},ku={type:"removed"},xi={type:"childadded",child:null},Hr={type:"childremoved",child:null};class xe extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new R,e=new $e,n=new Yi,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ht}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(dl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ts,Bs,this.up):_n.lookAt(Bs,ts,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(_n),this.quaternion.premultiply(vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gl),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ku),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gl),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Bu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new R(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new R,vn=new R,Vr=new R,xn=new R,Mi=new R,Si=new R,_l=new R,Gr=new R,Wr=new R,Xr=new R,qr=new oe,Yr=new oe,Jr=new oe;class nn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),vn.subVectors(n,e),Vr.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(vn),c=tn.dot(Vr),l=vn.dot(vn),h=vn.dot(Vr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return qr.setScalar(0),Yr.setScalar(0),Jr.setScalar(0),qr.fromBufferAttribute(t,e),Yr.fromBufferAttribute(t,n),Jr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qr,r.x),o.addScaledVector(Yr,r.y),o.addScaledVector(Jr,r.z),o}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),vn.subVectors(t,e),tn.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),tn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Mi.subVectors(s,n),Si.subVectors(r,n),Gr.subVectors(t,n);const c=Mi.dot(Gr),l=Si.dot(Gr);if(c<=0&&l<=0)return e.copy(n);Wr.subVectors(t,s);const h=Mi.dot(Wr),u=Si.dot(Wr);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Mi,o);Xr.subVectors(t,r);const f=Mi.dot(Xr),g=Si.dot(Xr);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Si,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return _l.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(_l,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Mi,o).addScaledVector(Si,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=wa(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zr(o,r,t+1/3),this.g=Zr(o,r,t),this.b=Zr(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=Ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Qt.workingToColorSpace(Ce.copy(this),t),Math.round(Xt(Ce.r*255,0,255))*65536+Math.round(Xt(Ce.g*255,0,255))*256+Math.round(Xt(Ce.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Te){Qt.workingToColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(zs);const n=us(Ln.h,zs.h,e),s=us(Ln.s,zs.s,e),r=us(Ln.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new qt;qt.NAMES=Ic;let Hu=0;class Ji extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Li,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=Mo,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qn extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new R,ks=new ht;let Vu=0;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=il,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==il&&(t.usage=this.usage),t}}class Uc extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nc extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gu=0;const Ye=new ie,Kr=new xe,yi=new R,Ge=new wn,es=new wn,Ee=new R;class _e extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pc(t)?Nc:Uc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];es.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Ge.min,es.min),Ge.expandByPoint(Ee),Ee.addVectors(Ge.max,es.max),Ge.expandByPoint(Ee)):(Ge.expandByPoint(es.min),Ge.expandByPoint(es.max))}Ge.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ee.fromBufferAttribute(a,l),c&&(yi.fromBufferAttribute(t,l),Ee.add(yi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new R,c[L]=new R;const l=new R,h=new R,u=new R,d=new ht,f=new ht,g=new ht,_=new R,m=new R;function p(L,x,M){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(_),a[x].add(_),a[M].add(_),c[L].add(m),c[x].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,x=E.length;L<x;++L){const M=E[L],P=M.start,I=M.count;for(let B=P,H=P+I;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new R,v=new R,A=new R,w=new R;function C(L){A.fromBufferAttribute(s,L),w.copy(A);const x=a[L];y.copy(x),y.sub(A.multiplyScalar(A.dot(x))).normalize(),v.crossVectors(w,x);const P=v.dot(c[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,x=E.length;L<x;++L){const M=E[L],P=M.start,I=M.count;for(let B=P,H=P+I;B<H;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new ie,qn=new Dc,Hs=new As,xl=new R,Vs=new R,Gs=new R,Ws=new R,$r=new R,Xs=new R,Ml=new R,qs=new R;class te extends xe{constructor(t=new _e,e=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Xs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&($r.fromBufferAttribute(u,t),o?Xs.addScaledVector($r,h):Xs.addScaledVector($r.sub(e),h))}e.add(Xs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Hs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Hs,xl)===null||qn.origin.distanceToSquared(xl)>(t.far-t.near)**2))&&(vl.copy(r).invert(),qn.copy(t.ray).applyMatrix4(vl),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,A=y;v<A;v+=3){const w=a.getX(v),C=a.getX(v+1),L=a.getX(v+2);s=Ys(this,p,t,n,l,h,u,w,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Ys(this,o,t,n,l,h,u,E,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,A=y;v<A;v+=3){const w=v,C=v+1,L=v+2;s=Ys(this,p,t,n,l,h,u,w,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,y=m+1,v=m+2;s=Ys(this,o,t,n,l,h,u,E,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Wu(i,t,e,n,s,r,o,a){let c;if(t.side===Ne?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===kn,a),c===null)return null;qs.copy(a),qs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(qs);return l<e.near||l>e.far?null:{distance:l,point:qs.clone(),object:i}}function Ys(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Vs),i.getVertexPosition(c,Gs),i.getVertexPosition(l,Ws);const h=Wu(i,t,e,n,Vs,Gs,Ws,Ml);if(h){const u=new R;nn.getBarycoord(Ml,Vs,Gs,Ws,u),s&&(h.uv=nn.getInterpolatedAttribute(s,a,c,l,u,new ht)),r&&(h.uv1=nn.getInterpolatedAttribute(r,a,c,l,u,new ht)),o&&(h.normal=nn.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};nn.getNormal(Vs,Gs,Ws,d.normal),h.face=d,h.barycoord=u}return h}class hi extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(_,m,p,E,y,v,A,w,C,L,x){const M=v/C,P=A/L,I=v/2,B=A/2,H=w/2,z=C+1,G=L+1;let Y=0,k=0;const it=new R;for(let rt=0;rt<G;rt++){const ft=rt*P-B;for(let Dt=0;Dt<z;Dt++){const Yt=Dt*M-I;it[_]=Yt*E,it[m]=ft*y,it[p]=H,l.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=w>0?1:-1,h.push(it.x,it.y,it.z),u.push(Dt/C),u.push(1-rt/L),Y+=1}}for(let rt=0;rt<L;rt++)for(let ft=0;ft<C;ft++){const Dt=d+ft+z*rt,Yt=d+ft+z*(rt+1),ee=d+(ft+1)+z*(rt+1),$t=d+(ft+1)+z*rt;c.push(Dt,Yt,$t),c.push(Yt,ee,$t),k+=6}a.addGroup(f,k,x),f+=k,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const s in n)t[s]=n[s]}return t}function Xu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const qu={clone:Hi,merge:Ie};var Yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Xu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Oc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new R,Sl=new ht,yl=new ht;class Ue extends Oc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,Sl,yl),e.subVectors(yl,Sl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,bi=1;class Zu extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ue(Ei,bi,t,e);s.layers=this.layers,this.add(s);const r=new Ue(Ei,bi,t,e);r.layers=this.layers,this.add(r);const o=new Ue(Ei,bi,t,e);o.layers=this.layers,this.add(o);const a=new Ue(Ei,bi,t,e);a.layers=this.layers,this.add(a);const c=new Ue(Ei,bi,t,e);c.layers=this.layers,this.add(c);const l=new Ue(Ei,bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bc extends be{constructor(t=[],e=Oi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ku extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hi(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Nn});r.uniforms.tEquirect.value=e;const o=new te(s,r),a=e.minFilter;return e.minFilter===En&&(e.minFilter=Ze),new Zu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ue extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $u={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($u)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ra{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new Ra(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zc extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gr extends be{constructor(t=null,e=1,n=1,s,r,o,a,c,l=We,h=We,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ti=new ie,bl=new ie,Js=[],Tl=new wn,ju=new ie,ns=new te,is=new As;class lr extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ju)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),Tl.copy(t.boundingBox).applyMatrix4(Ti),this.boundingBox.union(Tl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),is.copy(t.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),t.ray.intersectsSphere(is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ti),bl.multiplyMatrices(n,Ti),ns.matrixWorld=bl,ns.raycast(t,Js);for(let o=0,a=Js.length;o<a;o++){const c=Js[o];c.instanceId=r,c.object=this,e.push(c)}Js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gr(new Float32Array(s*this.count),s,this.count,Sa,cn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qr=new R,Qu=new R,tf=new Ht;class Kn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Qr.subVectors(n,e).cross(Qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tf.getNormalMatrix(t),s=this.coplanarPoint(Qr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new As,ef=new ht(.5,.5),Zs=new R;class Pa{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],E=r[12],y=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-o,f-h,p-g,A-E).normalize(),s[1].setComponents(l+o,f+h,p+g,A+E).normalize(),s[2].setComponents(l+a,f+u,p+_,A+y).normalize(),s[3].setComponents(l-a,f-u,p-_,A-y).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,A-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,A-v).normalize(),e===hn)s[5].setComponents(l+c,f+d,p+m,A+v).normalize();else if(e===mr)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){Yn.center.set(0,0,0);const e=ef.distanceTo(t.center);return Yn.radius=.7071067811865476+e,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vi extends be{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kc extends be{constructor(t,e,n=ri,s,r,o,a=We,c=We,l,h=vs,u=1){if(h!==vs&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Aa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Hc extends be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class br extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function E(){const v=new R,A=new R;let w=0;const C=(e-t)/n;for(let L=0;L<=r;L++){const x=[],M=L/r,P=M*(e-t)+t;for(let I=0;I<=s;I++){const B=I/s,H=B*c+a,z=Math.sin(H),G=Math.cos(H);A.x=P*z,A.y=-M*n+m,A.z=P*G,u.push(A.x,A.y,A.z),v.set(z,C,G).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-M),x.push(g++)}_.push(x)}for(let L=0;L<s;L++)for(let x=0;x<r;x++){const M=_[x][L],P=_[x+1][L],I=_[x+1][L+1],B=_[x][L+1];(t>0||x!==0)&&(h.push(M,P,B),w+=3),(e>0||x!==r-1)&&(h.push(P,I,B),w+=3)}l.addGroup(p,w,0),p+=w}function y(v){const A=g,w=new ht,C=new R;let L=0;const x=v===!0?t:e,M=v===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const H=I/s*c+a,z=Math.cos(H),G=Math.sin(H);C.x=x*G,C.y=m*M,C.z=x*z,u.push(C.x,C.y,C.z),d.push(0,M,0),w.x=z*.5+.5,w.y=G*.5*M+.5,f.push(w.x,w.y),g++}for(let I=0;I<s;I++){const B=A+I,H=P+I;v===!0?h.push(H,H+1,B):h.push(H+1,H,B),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zi extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new R,v=new R,A=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],v),f(e[w+2],A),c(y,v,A,E)}function c(E,y,v,A){const w=A+1,C=[];for(let L=0;L<=w;L++){C[L]=[];const x=E.clone().lerp(v,L/w),M=y.clone().lerp(v,L/w),P=w-L;for(let I=0;I<=P;I++)I===0&&L===w?C[L][I]=x:C[L][I]=x.clone().lerp(M,I/P)}for(let L=0;L<w;L++)for(let x=0;x<2*(w-L)-1;x++){const M=Math.floor(x/2);x%2===0?(d(C[L][M+1]),d(C[L+1][M]),d(C[L][M])):(d(C[L][M+1]),d(C[L+1][M+1]),d(C[L+1][M]))}}function l(E){const y=new R;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(E),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const E=new R;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];const v=m(E)/2/Math.PI+.5,A=p(E)/Math.PI+.5;o.push(v,1-A)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const y=o[E+0],v=o[E+2],A=o[E+4],w=Math.max(y,v,A),C=Math.min(y,v,A);w>.9&&C<.1&&(y<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function f(E,y){const v=E*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const E=new R,y=new R,v=new R,A=new R,w=new ht,C=new ht,L=new ht;for(let x=0,M=0;x<r.length;x+=9,M+=6){E.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),w.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),A.copy(E).add(y).add(v).divideScalar(3);const P=m(A);_(w,M+0,E,P),_(C,M+2,y,P),_(L,M+4,v,P)}}function _(E,y,v,A){A<0&&E.x===1&&(o[y]=E.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.vertices,t.indices,t.radius,t.details)}}class La extends Zi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,s=[],r=[],o=[],a=new R,c=new ie;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Xt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Da extends dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class nf extends Da{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ia(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ks=new R,to=new Ia,eo=new Ia,no=new Ia;class ii extends dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ks.subVectors(s[0],s[1]).add(s[0]),l=Ks);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ks.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),to.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),eo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),no.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(to.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),eo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),no.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(to.calc(c),eo.calc(c),no.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function sf(i,t){const e=1-i;return e*e*t}function rf(i,t){return 2*(1-i)*i*t}function of(i,t){return i*i*t}function fs(i,t,e,n){return sf(i,t)+rf(i,e)+of(i,n)}function af(i,t){const e=1-i;return e*e*e*t}function lf(i,t){const e=1-i;return 3*e*e*i*t}function cf(i,t){return 3*(1-i)*i*i*t}function hf(i,t){return i*i*i*t}function ds(i,t,e,n,s){return af(i,t)+lf(i,e)+cf(i,n)+hf(i,s)}class Vc extends dn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ds(t,s.x,r.x,o.x,a.x),ds(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uf extends dn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ds(t,s.x,r.x,o.x,a.x),ds(t,s.y,r.y,o.y,a.y),ds(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gc extends dn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ff extends dn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wc extends dn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fs(t,s.x,r.x,o.x),fs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xc extends dn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fs(t,s.x,r.x,o.x),fs(t,s.y,r.y,o.y),fs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qc extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(wl(a,c.x,l.x,h.x,u.x),wl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var _r=Object.freeze({__proto__:null,ArcCurve:nf,CatmullRomCurve3:ii,CubicBezierCurve:Vc,CubicBezierCurve3:uf,EllipseCurve:Da,LineCurve:Gc,LineCurve3:ff,QuadraticBezierCurve:Wc,QuadraticBezierCurve3:Xc,SplineCurve:qc});class df extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _r[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new _r[s.type]().fromJSON(s))}return this}}class vr extends df{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Gc(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Wc(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Vc(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new qc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Da(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class On extends vr{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new vr().fromJSON(s))}return this}}function pf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Yc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=xf(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return ys(r,o,e,a,c,l,0),o}function Yc(i,t,e,n,s){let r;if(s===Pf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Al(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Al(o/n|0,i[o],i[o+1],r);return r&&Gi(r,r.next)&&(bs(r),r=r.next),r}function ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Gi(e,e.next)||me(e.prev,e,e.next)===0)){if(bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ys(i,t,e,n,s,r,o){if(!i)return;!o&&r&&bf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?gf(i,n,s,r):mf(i)){t.push(c.i,i.i,l.i),bs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=_f(ai(i),t),ys(i,t,e,n,s,r,2)):o===2&&vf(i,t,e,n,s,r):ys(ai(i),t,e,n,s,r,1);break}}}function mf(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ls(s,a,r,c,o,l,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(me(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),_=Math.max(a,c,l),m=Math.max(h,u,d),p=ra(f,g,t,e,n),E=ra(_,m,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=E;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ls(a,h,c,u,l,d,y.x,y.y)&&me(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ls(a,h,c,u,l,d,v.x,v.y)&&me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ls(a,h,c,u,l,d,y.x,y.y)&&me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ls(a,h,c,u,l,d,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _f(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Gi(n,s)&&Zc(n,e,e.next,s)&&Es(n,s)&&Es(s,n)&&(t.push(n.i,e.i,s.i),bs(e),bs(e.next),e=i=s),e=e.next}while(e!==i);return ai(e)}function vf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Af(o,a)){let c=Kc(o,a);o=ai(o,o.next),c=ai(c,c.next),ys(o,t,e,n,s,r,0),ys(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function xf(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Yc(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(wf(l))}s.sort(Mf);for(let r=0;r<s.length;r++)e=Sf(s[r],e);return e}function Mf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Sf(i,t){const e=yf(i,t);if(!e)return t;const n=Kc(e,i);return ai(n,n.next),ai(e,e.next)}function yf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Gi(i,e))return e;do{if(Gi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Jc(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Es(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Ef(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Ef(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function bf(i,t,e,n){let s=i;do s.z===0&&(s.z=ra(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tf(s)}function Tf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ra(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Jc(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ls(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Jc(i,t,e,n,s,r,o,a)}function Af(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Cf(i,t)&&(Es(i,t)&&Es(t,i)&&Rf(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Gi(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Gi(i,t){return i.x===t.x&&i.y===t.y}function Zc(i,t,e,n){const s=js(me(i,t,e)),r=js(me(i,t,n)),o=js(me(e,n,i)),a=js(me(e,n,t));return!!(s!==r&&o!==a||s===0&&$s(i,e,t)||r===0&&$s(i,n,t)||o===0&&$s(e,i,n)||a===0&&$s(e,t,n))}function $s(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function js(i){return i>0?1:i<0?-1:0}function Cf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Es(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function Rf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kc(i,t){const e=oa(i.i,i.x,i.y),n=oa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Al(i,t,e,n){const s=oa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oa(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Lf{static triangulate(t,e,n=2){return pf(t,e,n)}}class ni{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ni.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Cl(t),Rl(n,t);let o=t.length;e.forEach(Cl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Rl(n,e[c]);const a=Lf.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Cl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Bn extends _e{constructor(t=new On([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Df;let y,v=!1,A,w,C,L;p&&(y=p.getSpacedPoints(h),v=!0,d=!1,A=p.computeFrenetFrames(h,!1),w=new R,C=new R,L=new R),d||(m=0,f=0,g=0,_=0);const x=a.extractPoints(l);let M=x.shape;const P=x.holes;if(!ni.isClockWise(M)){M=M.reverse();for(let et=0,j=P.length;et<j;et++){const $=P[et];ni.isClockWise($)&&(P[et]=$.reverse())}}function B(et){const $=10000000000000001e-36;let K=et[0];for(let dt=1;dt<=et.length;dt++){const st=dt%et.length,pt=et[st],zt=pt.x-K.x,Bt=pt.y-K.y,T=zt*zt+Bt*Bt,S=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(K.x),Math.abs(K.y)),O=$*S*S;if(T<=O){et.splice(st,1),dt--;continue}K=pt}}B(M),P.forEach(B);const H=P.length,z=M;for(let et=0;et<H;et++){const j=P[et];M=M.concat(j)}function G(et,j,$){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(j,$)}const Y=M.length;function k(et,j,$){let K,dt,st;const pt=et.x-j.x,zt=et.y-j.y,Bt=$.x-et.x,T=$.y-et.y,S=pt*pt+zt*zt,O=pt*T-zt*Bt;if(Math.abs(O)>Number.EPSILON){const X=Math.sqrt(S),tt=Math.sqrt(Bt*Bt+T*T),J=j.x-zt/X,Rt=j.y+pt/X,ut=$.x-T/tt,wt=$.y+Bt/tt,At=((ut-J)*T-(wt-Rt)*Bt)/(pt*T-zt*Bt);K=J+pt*At-et.x,dt=Rt+zt*At-et.y;const ot=K*K+dt*dt;if(ot<=2)return new ht(K,dt);st=Math.sqrt(ot/2)}else{let X=!1;pt>Number.EPSILON?Bt>Number.EPSILON&&(X=!0):pt<-Number.EPSILON?Bt<-Number.EPSILON&&(X=!0):Math.sign(zt)===Math.sign(T)&&(X=!0),X?(K=-zt,dt=pt,st=Math.sqrt(S)):(K=pt,dt=zt,st=Math.sqrt(S/2))}return new ht(K/st,dt/st)}const it=[];for(let et=0,j=z.length,$=j-1,K=et+1;et<j;et++,$++,K++)$===j&&($=0),K===j&&(K=0),it[et]=k(z[et],z[$],z[K]);const rt=[];let ft,Dt=it.concat();for(let et=0,j=H;et<j;et++){const $=P[et];ft=[];for(let K=0,dt=$.length,st=dt-1,pt=K+1;K<dt;K++,st++,pt++)st===dt&&(st=0),pt===dt&&(pt=0),ft[K]=k($[K],$[st],$[pt]);rt.push(ft),Dt=Dt.concat(ft)}let Yt;if(m===0)Yt=ni.triangulateShape(z,P);else{const et=[],j=[];for(let $=0;$<m;$++){const K=$/m,dt=f*Math.cos(K*Math.PI/2),st=g*Math.sin(K*Math.PI/2)+_;for(let pt=0,zt=z.length;pt<zt;pt++){const Bt=G(z[pt],it[pt],st);Lt(Bt.x,Bt.y,-dt),K===0&&et.push(Bt)}for(let pt=0,zt=H;pt<zt;pt++){const Bt=P[pt];ft=rt[pt];const T=[];for(let S=0,O=Bt.length;S<O;S++){const X=G(Bt[S],ft[S],st);Lt(X.x,X.y,-dt),K===0&&T.push(X)}K===0&&j.push(T)}}Yt=ni.triangulateShape(et,j)}const ee=Yt.length,$t=g+_;for(let et=0;et<Y;et++){const j=d?G(M[et],Dt[et],$t):M[et];v?(C.copy(A.normals[0]).multiplyScalar(j.x),w.copy(A.binormals[0]).multiplyScalar(j.y),L.copy(y[0]).add(C).add(w),Lt(L.x,L.y,L.z)):Lt(j.x,j.y,0)}for(let et=1;et<=h;et++)for(let j=0;j<Y;j++){const $=d?G(M[j],Dt[j],$t):M[j];v?(C.copy(A.normals[et]).multiplyScalar($.x),w.copy(A.binormals[et]).multiplyScalar($.y),L.copy(y[et]).add(C).add(w),Lt(L.x,L.y,L.z)):Lt($.x,$.y,u/h*et)}for(let et=m-1;et>=0;et--){const j=et/m,$=f*Math.cos(j*Math.PI/2),K=g*Math.sin(j*Math.PI/2)+_;for(let dt=0,st=z.length;dt<st;dt++){const pt=G(z[dt],it[dt],K);Lt(pt.x,pt.y,u+$)}for(let dt=0,st=P.length;dt<st;dt++){const pt=P[dt];ft=rt[dt];for(let zt=0,Bt=pt.length;zt<Bt;zt++){const T=G(pt[zt],ft[zt],K);v?Lt(T.x,T.y+y[h-1].y,y[h-1].x+$):Lt(T.x,T.y,u+$)}}}Z(),nt();function Z(){const et=s.length/3;if(d){let j=0,$=Y*j;for(let K=0;K<ee;K++){const dt=Yt[K];Tt(dt[2]+$,dt[1]+$,dt[0]+$)}j=h+m*2,$=Y*j;for(let K=0;K<ee;K++){const dt=Yt[K];Tt(dt[0]+$,dt[1]+$,dt[2]+$)}}else{for(let j=0;j<ee;j++){const $=Yt[j];Tt($[2],$[1],$[0])}for(let j=0;j<ee;j++){const $=Yt[j];Tt($[0]+Y*h,$[1]+Y*h,$[2]+Y*h)}}n.addGroup(et,s.length/3-et,0)}function nt(){const et=s.length/3;let j=0;St(z,j),j+=z.length;for(let $=0,K=P.length;$<K;$++){const dt=P[$];St(dt,j),j+=dt.length}n.addGroup(et,s.length/3-et,1)}function St(et,j){let $=et.length;for(;--$>=0;){const K=$;let dt=$-1;dt<0&&(dt=et.length-1);for(let st=0,pt=h+m*2;st<pt;st++){const zt=Y*st,Bt=Y*(st+1),T=j+K+zt,S=j+dt+zt,O=j+dt+Bt,X=j+K+Bt;Jt(T,S,O,X)}}}function Lt(et,j,$){c.push(et),c.push(j),c.push($)}function Tt(et,j,$){le(et),le(j),le($);const K=s.length/3,dt=E.generateTopUV(n,s,K-3,K-2,K-1);D(dt[0]),D(dt[1]),D(dt[2])}function Jt(et,j,$,K){le(et),le(j),le(K),le(j),le($),le(K);const dt=s.length/3,st=E.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);D(st[0]),D(st[1]),D(st[3]),D(st[1]),D(st[2]),D(st[3])}function le(et){s.push(c[et*3+0]),s.push(c[et*3+1]),s.push(c[et*3+2])}function D(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return If(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _r[s.type]().fromJSON(s)),new Bn(n,t.options)}}const Df={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-u),new ht(d,1-g),new ht(_,1-p)]:[new ht(a,1-c),new ht(h,1-u),new ht(f,1-g),new ht(m,1-p)]}};function If(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ua extends Zi{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ua(t.radius,t.detail)}}class Na extends Zi{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Na(t.radius,t.detail)}}class Wi extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*d-o;for(let y=0;y<l;y++){const v=y*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const y=E+l*p,v=E+l*(p+1),A=E+1+l*(p+1),w=E+1+l*p;f.push(y,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.widthSegments,t.heightSegments)}}class li extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],y=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const w=A/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-y),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const y=h[p][E+1],v=h[p][E],A=h[p+1][E],w=h[p+1][E+1];(p!==0||o>0)&&f.push(y,v,w),(p!==n-1||c<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fa extends Zi{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fa(t.radius,t.detail)}}class bn extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xr extends _e{constructor(t=new Xc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new ht;let h=new R;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),E(),p()}function m(y){h=t.getPointAt(y/e,h);const v=o.normals[y],A=o.binormals[y];for(let w=0;w<=s;w++){const C=w/s*Math.PI*2,L=Math.sin(C),x=-Math.cos(C);c.x=x*v.x+L*A.x,c.y=x*v.y+L*A.y,c.z=x*v.z+L*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){const A=(s+1)*(y-1)+(v-1),w=(s+1)*y+(v-1),C=(s+1)*y+v,L=(s+1)*(y-1)+v;g.push(A,w,L),g.push(w,C,L)}}function E(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)l.x=y/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new xr(new _r[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Pe extends Ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class aa extends Pe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Uf extends Ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nf extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ff extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const io={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Of{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Bf=new Of;class Oa{constructor(t){this.manager=t!==void 0?t:Bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi=new WeakMap;class zf extends Oa{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=io.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=wi.get(o);u===void 0&&(u=[],wi.set(o,u)),u.push({onLoad:e,onError:s})}return o}const a=Ms("img");function c(){h(),e&&e(this);const u=wi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}wi.delete(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),io.remove(`image:${t}`);const d=wi.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}wi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),io.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class kf extends Oa{constructor(t){super(t)}load(t,e,n,s){const r=new be,o=new zf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Tr extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hf extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const so=new ie,Pl=new R,Ll=new R;class Ba{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pl),Ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ll),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vf extends Ba{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=ki*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Gf extends Tr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Dl=new ie,ss=new R,ro=new R;class Wf extends Ba{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(ss),ro.copy(n.position),ro.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ro),n.updateMatrixWorld(),s.makeTranslation(-ss.x,-ss.y,-ss.z),Dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl,n.coordinateSystem,n.reversedDepth)}}class cr extends Tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $c extends Oc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xf extends Ba{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qf extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Xf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yf extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Il=new ie;class Jf{constructor(t,e,n=0,s=1/0){this.ray=new Dc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Il.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Il),this}intersectObject(t,e=!0,n=[]){return la(t,this,n,e),n.sort(Ul),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)la(t[s],this,n,e);return n.sort(Ul),n}}function Ul(i,t){return i.distance-t.distance}function la(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)la(r[o],t,e,!0)}}function Nl(i,t,e,n){const s=Zf(n);switch(e){case wc:return i*t;case Sa:return i*t/s.components*s.byteLength;case ya:return i*t/s.components*s.byteLength;case Cc:return i*t*2/s.components*s.byteLength;case Ea:return i*t*2/s.components*s.byteLength;case Ac:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case ba:return i*t*4/s.components*s.byteLength;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case or:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Lo:case Io:return Math.max(i,8)*Math.max(t,8)/2;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jo:case Qo:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ea:case na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ia:case sa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zf(i){switch(i){case fn:case yc:return{byteLength:1,components:1};case gs:case Ec:case ws:return{byteLength:2,components:1};case xa:case Ma:return{byteLength:2,components:4};case ri:case va:case cn:return{byteLength:4,components:1};case bc:case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kf(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Md=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:$f,alphahash_pars_fragment:jf,alphamap_fragment:Qf,alphamap_pars_fragment:td,alphatest_fragment:ed,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:sd,batching_pars_vertex:rd,batching_vertex:od,begin_vertex:ad,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:hd,bumpmap_pars_fragment:ud,clipping_planes_fragment:fd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:_d,color_pars_vertex:vd,color_vertex:xd,common:Md,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:yd,displacementmap_pars_vertex:Ed,displacementmap_vertex:bd,emissivemap_fragment:Td,emissivemap_pars_fragment:wd,colorspace_fragment:Ad,colorspace_pars_fragment:Cd,envmap_fragment:Rd,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Ld,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Gd,envmap_vertex:Id,fog_vertex:Ud,fog_pars_vertex:Nd,fog_fragment:Fd,fog_pars_fragment:Od,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:zd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Vd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Zd,lights_fragment_begin:Kd,lights_fragment_maps:$d,lights_fragment_end:jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:op,metalnessmap_fragment:ap,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:fp,morphtarget_vertex:dp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Ep,opaque_fragment:bp,packing:Tp,premultiplied_alpha_fragment:wp,project_vertex:Ap,dithering_fragment:Cp,dithering_pars_fragment:Rp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Up,shadowmask_pars_fragment:Np,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:kp,specularmap_pars_fragment:Hp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Gp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:qp,uv_pars_vertex:Yp,uv_vertex:Jp,worldpos_vertex:Zp,background_vert:Kp,background_frag:$p,backgroundCube_vert:jp,backgroundCube_frag:Qp,cube_vert:tm,cube_frag:em,depth_vert:nm,depth_frag:im,distanceRGBA_vert:sm,distanceRGBA_frag:rm,equirect_vert:om,equirect_frag:am,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:hm,meshbasic_frag:um,meshlambert_vert:fm,meshlambert_frag:dm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:xm,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:ym,meshtoon_frag:Em,points_vert:bm,points_frag:Tm,shadow_vert:wm,shadow_frag:Am,sprite_vert:Cm,sprite_frag:Rm},gt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},an={basic:{uniforms:Ie([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ie([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ie([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ie([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ie([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ie([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ie([gt.points,gt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ie([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ie([gt.common,gt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ie([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ie([gt.sprite,gt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ie([gt.common,gt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ie([gt.lights,gt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};an.physical={uniforms:Ie([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Qs={r:0,b:0,g:0},Jn=new $e,Pm=new ie;function Lm(i,t,e,n,s,r,o){const a=new qt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const A=g(y);A===null?p(a,c):A&&A.isColor&&(p(A,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Er)?(h===void 0&&(h=new te(new hi(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Hi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Jn.copy(v.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Jn)),h.material.toneMapped=Qt.getTransfer(A.colorSpace)!==re,(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new te(new Wi(2,2),new Hn({name:"BackgroundMaterial",uniforms:Hi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(A.colorSpace)!==re,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Qs,Fc(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,v,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m,dispose:E}}function Dm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,P,I,B,H){let z=!1;const G=u(B,I,P);r!==G&&(r=G,l(r.object)),z=f(M,B,I,H),z&&g(M,B,I,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(M,P,I,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,I){const B=I.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let z=H[P.id];z===void 0&&(z={},H[P.id]=z);let G=z[B];return G===void 0&&(G=d(c()),z[B]=G),G}function d(M){const P=[],I=[],B=[];for(let H=0;H<e;H++)P[H]=0,I[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,P,I,B){const H=r.attributes,z=P.attributes;let G=0;const Y=I.getAttributes();for(const k in Y)if(Y[k].location>=0){const rt=H[k];let ft=z[k];if(ft===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),rt===void 0||rt.attribute!==ft||ft&&rt.data!==ft.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(M,P,I,B){const H={},z=P.attributes;let G=0;const Y=I.getAttributes();for(const k in Y)if(Y[k].location>=0){let rt=z[k];rt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));const ft={};ft.attribute=rt,rt&&rt.data&&(ft.data=rt.data),H[k]=ft,G++}r.attributes=H,r.attributesNum=G,r.index=B}function _(){const M=r.newAttributes;for(let P=0,I=M.length;P<I;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const I=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;I[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),H[M]!==P&&(i.vertexAttribDivisor(M,P),H[M]=P)}function E(){const M=r.newAttributes,P=r.enabledAttributes;for(let I=0,B=P.length;I<B;I++)P[I]!==M[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function y(M,P,I,B,H,z,G){G===!0?i.vertexAttribIPointer(M,P,I,H,z):i.vertexAttribPointer(M,P,I,B,H,z)}function v(M,P,I,B){_();const H=B.attributes,z=I.getAttributes(),G=P.defaultAttributeValues;for(const Y in z){const k=z[Y];if(k.location>=0){let it=H[Y];if(it===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const rt=it.normalized,ft=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;const Yt=Dt.buffer,ee=Dt.type,$t=Dt.bytesPerElement,Z=ee===i.INT||ee===i.UNSIGNED_INT||it.gpuType===va;if(it.isInterleavedBufferAttribute){const nt=it.data,St=nt.stride,Lt=it.offset;if(nt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<k.locationSize;Tt++)p(k.location+Tt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Tt=0;Tt<k.locationSize;Tt++)m(k.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Tt=0;Tt<k.locationSize;Tt++)y(k.location+Tt,ft/k.locationSize,ee,rt,St*$t,(Lt+ft/k.locationSize*Tt)*$t,Z)}else{if(it.isInstancedBufferAttribute){for(let nt=0;nt<k.locationSize;nt++)p(k.location+nt,it.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let nt=0;nt<k.locationSize;nt++)m(k.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let nt=0;nt<k.locationSize;nt++)y(k.location+nt,ft/k.locationSize,ee,rt,ft*$t,ft/k.locationSize*nt*$t,Z)}}else if(G!==void 0){const rt=G[Y];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(k.location,rt);break;case 3:i.vertexAttrib3fv(k.location,rt);break;case 4:i.vertexAttrib4fv(k.location,rt);break;default:i.vertexAttrib1fv(k.location,rt)}}}}E()}function A(){L();for(const M in n){const P=n[M];for(const I in P){const B=P[I];for(const H in B)h(B[H].object),delete B[H];delete P[I]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const I in P){const B=P[I];for(const H in B)h(B[H].object),delete B[H];delete P[I]}delete n[M.id]}function C(M){for(const P in n){const I=n[P];if(I[M.id]===void 0)continue;const B=I[M.id];for(const H in B)h(B[H].object),delete B[H];delete I[M.id]}}function L(){x(),o=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Im(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Um(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==cn&&!L)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function Nm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Kn,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,y=E*4;let v=p.clippingState||null;c.value=v,v=h(g,d,y,f);for(let A=0;A!==y;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Fm(i){let t=new WeakMap;function e(o,a){return a===Co?o.mapping=Oi:a===Ro&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===Ro)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ku(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Pi=4,Fl=[.125,.215,.35,.446,.526,.582],ti=20,oo=new $c,Ol=new qt;let ao=null,lo=0,co=0,ho=!1;const $n=(1+Math.sqrt(5))/2,Ai=1/$n,Bl=[new R(-$n,Ai,0),new R($n,Ai,0),new R(-Ai,0,$n),new R(Ai,0,$n),new R(0,$n,-Ai),new R(0,$n,Ai),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Om=new R;class ca{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Om}=r;ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,lo,co),this._renderer.xr.enabled=ho,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:ws,format:sn,colorSpace:zi,depthBuffer:!1},s=zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bm(r)),this._blurMaterial=zm(r,t,e)}return s}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,s,r){const c=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ol),u.toneMapping=Fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Qn({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),m=new te(new hi,_);let p=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,p=!0):(_.color.copy(Ol),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const A=this._cubeSize;tr(s,v*A,y>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;tr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bl[(s-r-1)%Bl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new te(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ti-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const p=[];let E=0;for(let C=0;C<ti;++C){const L=C/_,x=Math.exp(-L*L/2);p.push(x),C===0?E+=x:C<m&&(E+=2*x)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],A=3*v*(s>y-Pi?s-y+Pi:0),w=4*(this._cubeSize-v);tr(e,A,w,3*v,2*v),c.setRenderTarget(e),c.render(u,oo)}}function Bm(i){const t=[],e=[],n=[];let s=i;const r=i-Pi+1+Fl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Pi?c=Fl[o-i+Pi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,L=w>2?0:-1,x=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];E.set(x,_*g*w),y.set(d,m*g*w);const M=[w,w,w,w,w,w];v.set(M,p*g*w)}const A=new _e;A.setAttribute("position",new Fe(E,_)),A.setAttribute("uv",new Fe(y,m)),A.setAttribute("faceIndex",new Fe(v,p)),t.push(A),s>Pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zl(i,t,e){const n=new oi(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zm(i,t,e){const n=new Float32Array(ti),s=new R(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function kl(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Hl(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function km(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Co||c===Ro,h=c===Oi||c===Bi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ca(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ca(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let y=0,v=E.length;y<v;y+=3){const A=E[y+0],w=E[y+1],C=E[y+2];d.push(A,w,w,C,C,A)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,v=E.length/3-1;y<v;y+=3){const A=y+0,w=y+1,C=y+2;d.push(A,w,w,C,C,A)}}else return;const m=new(Pc(d)?Nc:Uc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Gm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xm(i,t,e){const n=new WeakMap,s=new oe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*w*4*u),L=new Lc(C,A,w,u);L.type=cn,L.needsUpdate=!0;const x=v*4;for(let P=0;P<u;P++){const I=p[P],B=E[P],H=y[P],z=A*w*4*P;for(let G=0;G<I.count;G++){const Y=G*x;g===!0&&(s.fromBufferAttribute(I,G),C[z+Y+0]=s.x,C[z+Y+1]=s.y,C[z+Y+2]=s.z,C[z+Y+3]=0),_===!0&&(s.fromBufferAttribute(B,G),C[z+Y+4]=s.x,C[z+Y+5]=s.y,C[z+Y+6]=s.z,C[z+Y+7]=0),m===!0&&(s.fromBufferAttribute(H,G),C[z+Y+8]=s.x,C[z+Y+9]=s.y,C[z+Y+10]=s.z,C[z+Y+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new ht(A,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Qc=new be,Vl=new kc(1,1),th=new Lc,eh=new Iu,nh=new Bc,Gl=[],Wl=[],Xl=new Float32Array(16),ql=new Float32Array(9),Yl=new Float32Array(4);function Ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gl[s];if(r===void 0&&(r=new Float32Array(s),Gl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wr(i,t){let e=Wl[t];e===void 0&&(e=new Int32Array(t),Wl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function $m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;Yl.set(n),i.uniformMatrix2fv(this.addr,!1,Yl),ye(e,n)}}function jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),ye(e,n)}}function Qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;Xl.set(n),i.uniformMatrix4fv(this.addr,!1,Xl),ye(e,n)}}function t0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function s0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function l0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vl.compareFunction=Rc,r=Vl):r=Qc,e.setTexture2D(t||r,s)}function c0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eh,s)}function h0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nh,s)}function u0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||th,s)}function f0(i){switch(i){case 5126:return Ym;case 35664:return Jm;case 35665:return Zm;case 35666:return Km;case 35674:return $m;case 35675:return jm;case 35676:return Qm;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return o0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}function d0(i,t){i.uniform1fv(this.addr,t)}function p0(i,t){const e=Ki(t,this.size,2);i.uniform2fv(this.addr,e)}function m0(i,t){const e=Ki(t,this.size,3);i.uniform3fv(this.addr,e)}function g0(i,t){const e=Ki(t,this.size,4);i.uniform4fv(this.addr,e)}function _0(i,t){const e=Ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v0(i,t){const e=Ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function x0(i,t){const e=Ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M0(i,t){i.uniform1iv(this.addr,t)}function S0(i,t){i.uniform2iv(this.addr,t)}function y0(i,t){i.uniform3iv(this.addr,t)}function E0(i,t){i.uniform4iv(this.addr,t)}function b0(i,t){i.uniform1uiv(this.addr,t)}function T0(i,t){i.uniform2uiv(this.addr,t)}function w0(i,t){i.uniform3uiv(this.addr,t)}function A0(i,t){i.uniform4uiv(this.addr,t)}function C0(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Qc,r[o])}function R0(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||eh,r[o])}function P0(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nh,r[o])}function L0(i,t,e){const n=this.cache,s=t.length,r=wr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||th,r[o])}function D0(i){switch(i){case 5126:return d0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return M0;case 35667:case 35671:return S0;case 35668:case 35672:return y0;case 35669:case 35673:return E0;case 5125:return b0;case 36294:return T0;case 36295:return w0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}class I0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f0(e.type)}}class U0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D0(e.type)}}class N0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Jl(i,t){i.seq.push(t),i.map[t.id]=t}function F0(i,t,e){const n=i.name,s=n.length;for(uo.lastIndex=0;;){const r=uo.exec(n),o=uo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Jl(e,l===void 0?new I0(a,i,t):new U0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new N0(a),Jl(e,u)),e=u}}}class hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);F0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Zl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const O0=37297;let B0=0;function z0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Kl=new Ht;function k0(i){Qt._getMatrix(Kl,Qt.workingColorSpace,i);const t=`mat3( ${Kl.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case pr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $l(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+z0(i.getShaderSource(t),a)}else return r}function H0(i,t){const e=k0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function V0(i,t){let e;switch(t){case Yh:e="Linear";break;case Jh:e="Reinhard";break;case Zh:e="Cineon";break;case Mc:e="ACESFilmic";break;case $h:e="AgX";break;case jh:e="Neutral";break;case Kh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new R;function G0(){Qt.getLuminanceCoefficients(er);const i=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function X0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function q0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cs(i){return i!==""}function jl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ql(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(i){return i.replace(Y0,Z0)}const J0=new Map;function Z0(i,t){let e=Gt[t];if(e===void 0){const n=J0.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ha(e)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(i){return i.replace(K0,$0)}function $0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ec(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function j0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Q0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function eg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _a:t="ENVMAP_BLENDING_MULTIPLY";break;case Xh:t="ENVMAP_BLENDING_MIX";break;case qh:t="ENVMAP_BLENDING_ADD";break}return t}function ng(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ig(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=j0(e),l=Q0(e),h=tg(e),u=eg(e),d=ng(e),f=W0(e),g=X0(r),_=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),p.length>0&&(p+=`
`)):(m=[ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),p=[ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?V0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,H0("linearToOutputTexel",e.outputColorSpace),G0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),o=ha(o),o=jl(o,e),o=Ql(o,e),a=ha(a),a=jl(a,e),a=Ql(a,e),o=tc(o),a=tc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+m+o,v=E+p+a,A=Zl(s,s.VERTEX_SHADER,y),w=Zl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(A)||"",H=s.getShaderInfoLog(w)||"",z=I.trim(),G=B.trim(),Y=H.trim();let k=!0,it=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,w);else{const rt=$l(s,A,"vertex"),ft=$l(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+rt+`
`+ft)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||Y==="")&&(it=!1);it&&(P.diagnostics={runnable:k,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(A),s.deleteShader(w),L=new hr(s,_),x=q0(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,O0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let sg=0;class rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new og(t),e.set(t,n)),n}}class og{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}}function ag(i,t,e,n,s,r,o){const a=new Ca,c=new rg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,I,B){const H=I.fog,z=B.geometry,G=x.isMeshStandardMaterial?I.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),k=Y&&Y.mapping===Er?Y.image.height:null,it=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ft=rt!==void 0?rt.length:0;let Dt=0;z.morphAttributes.position!==void 0&&(Dt=1),z.morphAttributes.normal!==void 0&&(Dt=2),z.morphAttributes.color!==void 0&&(Dt=3);let Yt,ee,$t,Z;if(it){const ne=an[it];Yt=ne.vertexShader,ee=ne.fragmentShader}else Yt=x.vertexShader,ee=x.fragmentShader,c.update(x),$t=c.getVertexShaderID(x),Z=c.getFragmentShaderID(x);const nt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Lt=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,Jt=!!x.map,le=!!x.matcap,D=!!Y,et=!!x.aoMap,j=!!x.lightMap,$=!!x.bumpMap,K=!!x.normalMap,dt=!!x.displacementMap,st=!!x.emissiveMap,pt=!!x.metalnessMap,zt=!!x.roughnessMap,Bt=x.anisotropy>0,T=x.clearcoat>0,S=x.dispersion>0,O=x.iridescence>0,X=x.sheen>0,tt=x.transmission>0,J=Bt&&!!x.anisotropyMap,Rt=T&&!!x.clearcoatMap,ut=T&&!!x.clearcoatNormalMap,wt=T&&!!x.clearcoatRoughnessMap,At=O&&!!x.iridescenceMap,ot=O&&!!x.iridescenceThicknessMap,xt=X&&!!x.sheenColorMap,Ft=X&&!!x.sheenRoughnessMap,Pt=!!x.specularMap,_t=!!x.specularColorMap,Vt=!!x.specularIntensityMap,U=tt&&!!x.transmissionMap,ct=tt&&!!x.thicknessMap,mt=!!x.gradientMap,yt=!!x.alphaMap,at=x.alphaTest>0,Q=!!x.alphaHash,Ct=!!x.extensions;let kt=Fn;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(kt=i.toneMapping);const ce={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Yt,fragmentShader:ee,defines:x.defines,customVertexShaderID:$t,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&B._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&B.instanceColor!==null,instancingMorph:Lt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:zi,alphaToCoverage:!!x.alphaToCoverage,map:Jt,matcap:le,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:k,aoMap:et,lightMap:j,bumpMap:$,normalMap:K,displacementMap:d&&dt,emissiveMap:st,normalMapObjectSpace:K&&x.normalMapType===nu,normalMapTangentSpace:K&&x.normalMapType===Ta,metalnessMap:pt,roughnessMap:zt,anisotropy:Bt,anisotropyMap:J,clearcoat:T,clearcoatMap:Rt,clearcoatNormalMap:ut,clearcoatRoughnessMap:wt,dispersion:S,iridescence:O,iridescenceMap:At,iridescenceThicknessMap:ot,sheen:X,sheenColorMap:xt,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:_t,specularIntensityMap:Vt,transmission:tt,transmissionMap:U,thicknessMap:ct,gradientMap:mt,opaque:x.transparent===!1&&x.blending===Li&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:at,alphaHash:Q,combine:x.combine,mapUv:Jt&&_(x.map.channel),aoMapUv:et&&_(x.aoMap.channel),lightMapUv:j&&_(x.lightMap.channel),bumpMapUv:$&&_(x.bumpMap.channel),normalMapUv:K&&_(x.normalMap.channel),displacementMapUv:dt&&_(x.displacementMap.channel),emissiveMapUv:st&&_(x.emissiveMap.channel),metalnessMapUv:pt&&_(x.metalnessMap.channel),roughnessMapUv:zt&&_(x.roughnessMap.channel),anisotropyMapUv:J&&_(x.anisotropyMap.channel),clearcoatMapUv:Rt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(x.sheenRoughnessMap.channel),specularMapUv:Pt&&_(x.specularMap.channel),specularColorMapUv:_t&&_(x.specularColorMap.channel),specularIntensityMapUv:Vt&&_(x.specularIntensityMap.channel),transmissionMapUv:U&&_(x.transmissionMap.channel),thicknessMapUv:ct&&_(x.thicknessMap.channel),alphaMapUv:yt&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(K||Bt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Jt||yt),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:St,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Jt&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:st&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===Ne,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ct&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&x.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function p(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(E(M,x),y(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function E(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const M=g[x.type];let P;if(M){const I=an[M];P=qu.clone(I.uniforms)}else P=x.uniforms;return P}function A(x,M){let P;for(let I=0,B=h.length;I<B;I++){const H=h[I];if(H.cacheKey===M){P=H,++P.usedTimes;break}}return P===void 0&&(P=new ig(i,M,x,r),h.push(P)),P}function w(x){if(--x.usedTimes===0){const M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function C(x){c.remove(x)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:L}}function lg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ic(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||cg),n.length>1&&n.sort(d||nc),s.length>1&&s.sort(d||nc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function hg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ic,i.set(n,[o])):s>=r.length?(o=new ic,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ug(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new qt};break;case"SpotLight":e={position:new R,direction:new R,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function fg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dg=0;function pg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mg(i){const t=new ug,e=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new ie,o=new ie;function a(l){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,y=0,v=0,A=0,w=0,C=0;l.sort(pg);for(let x=0,M=l.length;x<M;x++){const P=l[x],I=P.color,B=P.intensity,H=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*B,u+=I.g*B,d+=I.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],B);C++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,k=e.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,E++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(I).multiplyScalar(B),G.distance=H,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const Y=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=z,v++}_++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(I).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Y=P.shadow,k=e.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==A||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=A,L.numLightProbes=C,n.version=dg++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function sc(i){const t=new mg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function gg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new sc(i),t.set(s,[a])):r>=o.length?(a=new sc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xg(i,t,e){let n=new Pa;const s=new ht,r=new ht,o=new oe,a=new Nf({depthPacking:eu}),c=new Ff,l={},h=e.maxTextureSize,u={[kn]:Ne,[Ne]:kn,[ln]:ln},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:_g,fragmentShader:vg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let p=this.type;this.render=function(w,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Nn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==Mn&&this.type===Mn,H=p===Mn&&this.type!==Mn;for(let z=0,G=w.length;z<G;z++){const Y=w[z],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const it=k.getFrameExtents();if(s.multiply(it),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,k.mapSize.y=r.y)),k.map===null||B===!0||H===!0){const ft=this.type!==Mn?{minFilter:We,magFilter:We}:{};k.map!==null&&k.map.dispose(),k.map=new oi(s.x,s.y,ft),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const rt=k.getViewportCount();for(let ft=0;ft<rt;ft++){const Dt=k.getViewport(ft);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),I.viewport(o),k.updateMatrices(Y,ft),n=k.getFrustum(),v(C,L,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Mn&&E(k,L),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,M,P)};function E(w,C){const L=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new oi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,L,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,L,f,_,null)}function y(w,C,L,x){let M=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=M.uuid,B=C.uuid;let H=l[I];H===void 0&&(H={},l[I]=H);let z=H[B];z===void 0&&(z=M.clone(),H[B]=z,C.addEventListener("dispose",A)),M=z}if(M.visible=C.visible,M.wireframe=C.wireframe,x===Mn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=L}return M}function v(w,C,L,x,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Mn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const B=t.update(w),H=w.material;if(Array.isArray(H)){const z=B.groups;for(let G=0,Y=z.length;G<Y;G++){const k=z[G],it=H[k.materialIndex];if(it&&it.visible){const rt=y(w,it,x,M);w.onBeforeShadow(i,w,C,L,B,rt,k),i.renderBufferDirect(L,null,B,rt,w,k),w.onAfterShadow(i,w,C,L,B,rt,k)}}}else if(H.visible){const z=y(w,H,x,M);w.onBeforeShadow(i,w,C,L,B,z,null),i.renderBufferDirect(L,null,B,z,w,null),w.onAfterShadow(i,w,C,L,B,z,null)}}const I=w.children;for(let B=0,H=I.length;B<H;B++)v(I[B],C,L,x,M)}function A(w){w.target.removeEventListener("dispose",A);for(const L in l){const x=l[L],M=w.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const Mg={[So]:yo,[Eo]:wo,[bo]:Ao,[Fi]:To,[yo]:So,[wo]:Eo,[Ao]:bo,[To]:Fi};function Sg(i,t){function e(){let U=!1;const ct=new oe;let mt=null;const yt=new oe(0,0,0,0);return{setMask:function(at){mt!==at&&!U&&(i.colorMask(at,at,at,at),mt=at)},setLocked:function(at){U=at},setClear:function(at,Q,Ct,kt,ce){ce===!0&&(at*=kt,Q*=kt,Ct*=kt),ct.set(at,Q,Ct,kt),yt.equals(ct)===!1&&(i.clearColor(at,Q,Ct,kt),yt.copy(ct))},reset:function(){U=!1,mt=null,yt.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,mt=null,yt=null,at=null;return{setReversed:function(Q){if(ct!==Q){const Ct=t.get("EXT_clip_control");Q?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ct=Q;const kt=at;at=null,this.setClear(kt)}},getReversed:function(){return ct},setTest:function(Q){Q?nt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Q){mt!==Q&&!U&&(i.depthMask(Q),mt=Q)},setFunc:function(Q){if(ct&&(Q=Mg[Q]),yt!==Q){switch(Q){case So:i.depthFunc(i.NEVER);break;case yo:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case wo:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Q}},setLocked:function(Q){U=Q},setClear:function(Q){at!==Q&&(ct&&(Q=1-Q),i.clearDepth(Q),at=Q)},reset:function(){U=!1,mt=null,yt=null,at=null,ct=!1}}}function s(){let U=!1,ct=null,mt=null,yt=null,at=null,Q=null,Ct=null,kt=null,ce=null;return{setTest:function(ne){U||(ne?nt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ne){ct!==ne&&!U&&(i.stencilMask(ne),ct=ne)},setFunc:function(ne,pn,on){(mt!==ne||yt!==pn||at!==on)&&(i.stencilFunc(ne,pn,on),mt=ne,yt=pn,at=on)},setOp:function(ne,pn,on){(Q!==ne||Ct!==pn||kt!==on)&&(i.stencilOp(ne,pn,on),Q=ne,Ct=pn,kt=on)},setLocked:function(ne){U=ne},setClear:function(ne){ce!==ne&&(i.clearStencil(ne),ce=ne)},reset:function(){U=!1,ct=null,mt=null,yt=null,at=null,Q=null,Ct=null,kt=null,ce=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,y=null,v=null,A=null,w=null,C=new qt(0,0,0),L=0,x=!1,M=null,P=null,I=null,B=null,H=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=Y>=2);let it=null,rt={};const ft=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Yt=new oe().fromArray(ft),ee=new oe().fromArray(Dt);function $t(U,ct,mt,yt){const at=new Uint8Array(4),Q=i.createTexture();i.bindTexture(U,Q),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<mt;Ct++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(ct+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Q}const Z={};Z[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(Fi),$(!1),K(ja),nt(i.CULL_FACE),et(Nn);function nt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function St(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Lt(U,ct){return u[U]!==ct?(i.bindFramebuffer(U,ct),u[U]=ct,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Tt(U,ct){let mt=f,yt=!1;if(U){mt=d.get(ct),mt===void 0&&(mt=[],d.set(ct,mt));const at=U.textures;if(mt.length!==at.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ct=at.length;Q<Ct;Q++)mt[Q]=i.COLOR_ATTACHMENT0+Q;mt.length=at.length,yt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,yt=!0);yt&&i.drawBuffers(mt)}function Jt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const le={[jn]:i.FUNC_ADD,[Ch]:i.FUNC_SUBTRACT,[Rh]:i.FUNC_REVERSE_SUBTRACT};le[Ph]=i.MIN,le[Lh]=i.MAX;const D={[Dh]:i.ZERO,[Ih]:i.ONE,[Uh]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[kh]:i.SRC_ALPHA_SATURATE,[Bh]:i.DST_COLOR,[Fh]:i.DST_ALPHA,[Nh]:i.ONE_MINUS_SRC_COLOR,[Mo]:i.ONE_MINUS_SRC_ALPHA,[zh]:i.ONE_MINUS_DST_COLOR,[Oh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[Gh]:i.CONSTANT_ALPHA,[Wh]:i.ONE_MINUS_CONSTANT_ALPHA};function et(U,ct,mt,yt,at,Q,Ct,kt,ce,ne){if(U===Nn){_===!0&&(St(i.BLEND),_=!1);return}if(_===!1&&(nt(i.BLEND),_=!0),U!==Ah){if(U!==m||ne!==x){if((p!==jn||v!==jn)&&(i.blendEquation(i.FUNC_ADD),p=jn,v=jn),ne)switch(U){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,y=null,A=null,w=null,C.set(0,0,0),L=0,m=U,x=ne}return}at=at||ct,Q=Q||mt,Ct=Ct||yt,(ct!==p||at!==v)&&(i.blendEquationSeparate(le[ct],le[at]),p=ct,v=at),(mt!==E||yt!==y||Q!==A||Ct!==w)&&(i.blendFuncSeparate(D[mt],D[yt],D[Q],D[Ct]),E=mt,y=yt,A=Q,w=Ct),(kt.equals(C)===!1||ce!==L)&&(i.blendColor(kt.r,kt.g,kt.b,ce),C.copy(kt),L=ce),m=U,x=!1}function j(U,ct){U.side===ln?St(i.CULL_FACE):nt(i.CULL_FACE);let mt=U.side===Ne;ct&&(mt=!mt),$(mt),U.blending===Li&&U.transparent===!1?et(Nn):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const yt=U.stencilWrite;a.setTest(yt),yt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),st(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function K(U){U!==Th?(nt(i.CULL_FACE),U!==P&&(U===ja?i.cullFace(i.BACK):U===wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),P=U}function dt(U){U!==I&&(G&&i.lineWidth(U),I=U)}function st(U,ct,mt){U?(nt(i.POLYGON_OFFSET_FILL),(B!==ct||H!==mt)&&(i.polygonOffset(ct,mt),B=ct,H=mt)):St(i.POLYGON_OFFSET_FILL)}function pt(U){U?nt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function zt(U){U===void 0&&(U=i.TEXTURE0+z-1),it!==U&&(i.activeTexture(U),it=U)}function Bt(U,ct,mt){mt===void 0&&(it===null?mt=i.TEXTURE0+z-1:mt=it);let yt=rt[mt];yt===void 0&&(yt={type:void 0,texture:void 0},rt[mt]=yt),(yt.type!==U||yt.texture!==ct)&&(it!==mt&&(i.activeTexture(mt),it=mt),i.bindTexture(U,ct||Z[U]),yt.type=U,yt.texture=ct)}function T(){const U=rt[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(U){Yt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Yt.copy(U))}function Ft(U){ee.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Pt(U,ct){let mt=l.get(ct);mt===void 0&&(mt=new WeakMap,l.set(ct,mt));let yt=mt.get(U);yt===void 0&&(yt=i.getUniformBlockIndex(ct,U.name),mt.set(U,yt))}function _t(U,ct){const yt=l.get(ct).get(U);c.get(ct)!==yt&&(i.uniformBlockBinding(ct,yt,U.__bindingPointIndex),c.set(ct,yt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,rt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,y=null,v=null,A=null,w=null,C=new qt(0,0,0),L=0,x=!1,M=null,P=null,I=null,B=null,H=null,Yt.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:St,bindFramebuffer:Lt,drawBuffers:Tt,useProgram:Jt,setBlending:et,setMaterial:j,setFlipSided:$,setCullFace:K,setLineWidth:dt,setPolygonOffset:st,setScissorTest:pt,activeTexture:zt,bindTexture:Bt,unbindTexture:T,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:At,texImage3D:ot,updateUBOMapping:Pt,uniformBlockBinding:_t,texStorage2D:ut,texStorage3D:wt,texSubImage2D:X,texSubImage3D:tt,compressedTexSubImage2D:J,compressedTexSubImage3D:Rt,scissor:xt,viewport:Ft,reset:Vt}}function yg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return f?new OffscreenCanvas(T,S):Ms("canvas")}function _(T,S,O){let X=1;const tt=Bt(T);if((tt.width>O||tt.height>O)&&(X=O/Math.max(tt.width,tt.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(X*tt.width),Rt=Math.floor(X*tt.height);u===void 0&&(u=g(J,Rt));const ut=S?g(J,Rt):u;return ut.width=J,ut.height=Rt,ut.getContext("2d").drawImage(T,0,0,J,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+Rt+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,S,O,X,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=S;if(S===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),S===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),S===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),S===i.RGBA){const Rt=tt?pr:Qt.getTransfer(X);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=Rt===re?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(T,S){let O;return T?S===null||S===ri||S===_s?O=i.DEPTH24_STENCIL8:S===cn?O=i.DEPTH32F_STENCIL8:S===gs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ri||S===_s?O=i.DEPTH_COMPONENT24:S===cn?O=i.DEPTH_COMPONENT32F:S===gs&&(O=i.DEPTH_COMPONENT16),O}function A(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==We&&T.minFilter!==Ze?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function w(T){const S=T.target;S.removeEventListener("dispose",w),L(S),S.isVideoTexture&&h.delete(S)}function C(T){const S=T.target;S.removeEventListener("dispose",C),M(S)}function L(T){const S=n.get(T);if(S.__webglInit===void 0)return;const O=T.source,X=d.get(O);if(X){const tt=X[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&x(T),Object.keys(X).length===0&&d.delete(O)}n.remove(T)}function x(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const O=T.source,X=d.get(O);delete X[S.__cacheKey],o.memory.textures--}function M(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let tt=0;tt<S.__webglFramebuffer[X].length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[X][tt]);else i.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)i.deleteFramebuffer(S.__webglFramebuffer[X]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=T.textures;for(let X=0,tt=O.length;X<tt;X++){const J=n.get(O[X]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(O[X])}n.remove(T)}let P=0;function I(){P=0}function B(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function H(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function z(T,S){const O=n.get(T);if(T.isVideoTexture&&pt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,T,S);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function G(T,S){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Z(O,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function Y(T,S){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Z(O,T,S);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function k(T,S){const O=n.get(T);if(T.version>0&&O.__version!==T.version){nt(O,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}const it={[ms]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},rt={[We]:i.NEAREST,[Qh]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Lr]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},ft={[iu]:i.NEVER,[cu]:i.ALWAYS,[su]:i.LESS,[Rc]:i.LEQUAL,[ru]:i.EQUAL,[lu]:i.GEQUAL,[ou]:i.GREATER,[au]:i.NOTEQUAL};function Dt(T,S){if(S.type===cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ze||S.magFilter===Lr||S.magFilter===Ls||S.magFilter===En||S.minFilter===Ze||S.minFilter===Lr||S.minFilter===Ls||S.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,it[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,it[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,it[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,rt[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===We||S.minFilter!==Ls&&S.minFilter!==En||S.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Yt(T,S){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));const X=S.source;let tt=d.get(X);tt===void 0&&(tt={},d.set(X,tt));const J=H(S);if(J!==T.__cacheKey){tt[J]===void 0&&(tt[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[J].usedTimes++;const Rt=tt[T.__cacheKey];Rt!==void 0&&(tt[T.__cacheKey].usedTimes--,Rt.usedTimes===0&&x(S)),T.__cacheKey=J,T.__webglTexture=tt[J].texture}return O}function ee(T,S,O){return Math.floor(Math.floor(T/O)/S)}function $t(T,S,O,X){const J=T.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,O,X,S.data);else{J.sort((ot,xt)=>ot.start-xt.start);let Rt=0;for(let ot=1;ot<J.length;ot++){const xt=J[Rt],Ft=J[ot],Pt=xt.start+xt.count,_t=ee(Ft.start,S.width,4),Vt=ee(xt.start,S.width,4);Ft.start<=Pt+1&&_t===Vt&&ee(Ft.start+Ft.count-1,S.width,4)===_t?xt.count=Math.max(xt.count,Ft.start+Ft.count-xt.start):(++Rt,J[Rt]=Ft)}J.length=Rt+1;const ut=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ot=0,xt=J.length;ot<xt;ot++){const Ft=J[ot],Pt=Math.floor(Ft.start/4),_t=Math.ceil(Ft.count/4),Vt=Pt%S.width,U=Math.floor(Pt/S.width),ct=_t,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Vt,U,ct,mt,O,X,S.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function Z(T,S,O){let X=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=i.TEXTURE_3D);const tt=Yt(T,S),J=S.source;e.bindTexture(X,T.__webglTexture,i.TEXTURE0+O);const Rt=n.get(J);if(J.version!==Rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);const ut=Qt.getPrimaries(Qt.workingColorSpace),wt=S.colorSpace===Sn?null:Qt.getPrimaries(S.colorSpace),At=S.colorSpace===Sn||ut===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ot=_(S.image,!1,s.maxTextureSize);ot=zt(S,ot);const xt=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type);let Pt=y(S.internalFormat,xt,Ft,S.colorSpace,S.isVideoTexture);Dt(X,S);let _t;const Vt=S.mipmaps,U=S.isVideoTexture!==!0,ct=Rt.__version===void 0||tt===!0,mt=J.dataReady,yt=A(S,ot);if(S.isDepthTexture)Pt=v(S.format===xs,S.type),ct&&(U?e.texStorage2D(i.TEXTURE_2D,1,Pt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ot.width,ot.height,0,xt,Ft,null));else if(S.isDataTexture)if(Vt.length>0){U&&ct&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,Vt[0].width,Vt[0].height);for(let at=0,Q=Vt.length;at<Q;at++)_t=Vt[at],U?mt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,xt,Ft,_t.data):e.texImage2D(i.TEXTURE_2D,at,Pt,_t.width,_t.height,0,xt,Ft,_t.data);S.generateMipmaps=!1}else U?(ct&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,ot.width,ot.height),mt&&$t(S,ot,xt,Ft)):e.texImage2D(i.TEXTURE_2D,0,Pt,ot.width,ot.height,0,xt,Ft,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Pt,Vt[0].width,Vt[0].height,ot.depth);for(let at=0,Q=Vt.length;at<Q;at++)if(_t=Vt[at],S.format!==sn)if(xt!==null)if(U){if(mt)if(S.layerUpdates.size>0){const Ct=Nl(_t.width,_t.height,S.format,S.type);for(const kt of S.layerUpdates){const ce=_t.data.subarray(kt*Ct/_t.data.BYTES_PER_ELEMENT,(kt+1)*Ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,kt,_t.width,_t.height,1,xt,ce)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,ot.depth,xt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Pt,_t.width,_t.height,ot.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,ot.depth,xt,Ft,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Pt,_t.width,_t.height,ot.depth,0,xt,Ft,_t.data)}else{U&&ct&&e.texStorage2D(i.TEXTURE_2D,yt,Pt,Vt[0].width,Vt[0].height);for(let at=0,Q=Vt.length;at<Q;at++)_t=Vt[at],S.format!==sn?xt!==null?U?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?mt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,xt,Ft,_t.data):e.texImage2D(i.TEXTURE_2D,at,Pt,_t.width,_t.height,0,xt,Ft,_t.data)}else if(S.isDataArrayTexture)if(U){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Pt,ot.width,ot.height,ot.depth),mt)if(S.layerUpdates.size>0){const at=Nl(ot.width,ot.height,S.format,S.type);for(const Q of S.layerUpdates){const Ct=ot.data.subarray(Q*at/ot.data.BYTES_PER_ELEMENT,(Q+1)*at/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,xt,Ft,Ct)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,xt,Ft,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ot.width,ot.height,ot.depth,0,xt,Ft,ot.data);else if(S.isData3DTexture)U?(ct&&e.texStorage3D(i.TEXTURE_3D,yt,Pt,ot.width,ot.height,ot.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,xt,Ft,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ot.width,ot.height,ot.depth,0,xt,Ft,ot.data);else if(S.isFramebufferTexture){if(ct)if(U)e.texStorage2D(i.TEXTURE_2D,yt,Pt,ot.width,ot.height);else{let at=ot.width,Q=ot.height;for(let Ct=0;Ct<yt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Pt,at,Q,0,xt,Ft,null),at>>=1,Q>>=1}}else if(Vt.length>0){if(U&&ct){const at=Bt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Pt,at.width,at.height)}for(let at=0,Q=Vt.length;at<Q;at++)_t=Vt[at],U?mt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt,Ft,_t):e.texImage2D(i.TEXTURE_2D,at,Pt,xt,Ft,_t);S.generateMipmaps=!1}else if(U){if(ct){const at=Bt(ot);e.texStorage2D(i.TEXTURE_2D,yt,Pt,at.width,at.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ft,ot)}else e.texImage2D(i.TEXTURE_2D,0,Pt,xt,Ft,ot);m(S)&&p(X),Rt.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function nt(T,S,O){if(S.image.length!==6)return;const X=Yt(T,S),tt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const J=n.get(tt);if(tt.version!==J.__version||X===!0){e.activeTexture(i.TEXTURE0+O);const Rt=Qt.getPrimaries(Qt.workingColorSpace),ut=S.colorSpace===Sn?null:Qt.getPrimaries(S.colorSpace),wt=S.colorSpace===Sn||Rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const At=S.isCompressedTexture||S.image[0].isCompressedTexture,ot=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!At&&!ot?xt[Q]=_(S.image[Q],!0,s.maxCubemapSize):xt[Q]=ot?S.image[Q].image:S.image[Q],xt[Q]=zt(S,xt[Q]);const Ft=xt[0],Pt=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Vt=y(S.internalFormat,Pt,_t,S.colorSpace),U=S.isVideoTexture!==!0,ct=J.__version===void 0||X===!0,mt=tt.dataReady;let yt=A(S,Ft);Dt(i.TEXTURE_CUBE_MAP,S);let at;if(At){U&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Vt,Ft.width,Ft.height);for(let Q=0;Q<6;Q++){at=xt[Q].mipmaps;for(let Ct=0;Ct<at.length;Ct++){const kt=at[Ct];S.format!==sn?Pt!==null?U?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,0,0,kt.width,kt.height,Pt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,Vt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,0,0,kt.width,kt.height,Pt,_t,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,Vt,kt.width,kt.height,0,Pt,_t,kt.data)}}}else{if(at=S.mipmaps,U&&ct){at.length>0&&yt++;const Q=Bt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Vt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){U?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Pt,_t,xt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,xt[Q].width,xt[Q].height,0,Pt,_t,xt[Q].data);for(let Ct=0;Ct<at.length;Ct++){const ce=at[Ct].image[Q].image;U?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,0,0,ce.width,ce.height,Pt,_t,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,Vt,ce.width,ce.height,0,Pt,_t,ce.data)}}else{U?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt,_t,xt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,Pt,_t,xt[Q]);for(let Ct=0;Ct<at.length;Ct++){const kt=at[Ct];U?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,0,0,Pt,_t,kt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,Vt,Pt,_t,kt.image[Q])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),J.__version=tt.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function St(T,S,O,X,tt,J){const Rt=r.convert(O.format,O.colorSpace),ut=r.convert(O.type),wt=y(O.internalFormat,Rt,ut,O.colorSpace),At=n.get(S),ot=n.get(O);if(ot.__renderTarget=S,!At.__hasExternalTextures){const xt=Math.max(1,S.width>>J),Ft=Math.max(1,S.height>>J);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,wt,xt,Ft,S.depth,0,Rt,ut,null):e.texImage2D(tt,J,wt,xt,Ft,0,Rt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),st(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,tt,ot.__webglTexture,0,dt(S)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,tt,ot.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(T,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){const X=S.depthTexture,tt=X&&X.isDepthTexture?X.type:null,J=v(S.stencilBuffer,tt),Rt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=dt(S);st(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,J,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,T)}else{const X=S.textures;for(let tt=0;tt<X.length;tt++){const J=X[tt],Rt=r.convert(J.format,J.colorSpace),ut=r.convert(J.type),wt=y(J.internalFormat,Rt,ut,J.colorSpace),At=dt(S);O&&st(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,wt,S.width,S.height):st(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,wt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,wt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const tt=X.__webglTexture,J=dt(S);if(S.depthTexture.format===vs)st(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(S.depthTexture.format===xs)st(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Jt(T){const S=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",tt)};X.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=X}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=T.texture.mipmaps;X&&X.length>0?Tt(S.__webglFramebuffer[0],T):Tt(S.__webglFramebuffer,T)}else if(O){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=i.createRenderbuffer(),Lt(S.__webglDepthbuffer[X],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Lt(S.__webglDepthbuffer,T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(T,S,O){const X=n.get(T);S!==void 0&&St(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Jt(T)}function D(T){const S=T.texture,O=n.get(T),X=n.get(S);T.addEventListener("dispose",C);const tt=T.textures,J=T.isWebGLCubeRenderTarget===!0,Rt=tt.length>1;if(Rt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=S.version,o.memory.textures++),J){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let wt=0;wt<S.mipmaps.length;wt++)O.__webglFramebuffer[ut][wt]=i.createFramebuffer()}else O.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)O.__webglFramebuffer[ut]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ut=0,wt=tt.length;ut<wt;ut++){const At=n.get(tt[ut]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&st(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){const wt=tt[ut];O.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ut]);const At=r.convert(wt.format,wt.colorSpace),ot=r.convert(wt.type),xt=y(wt.internalFormat,At,ot,wt.colorSpace,T.isXRRenderTarget===!0),Ft=dt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,O.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)St(O.__webglFramebuffer[ut][wt],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt);else St(O.__webglFramebuffer[ut],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ut=0,wt=tt.length;ut<wt;ut++){const At=tt[ut],ot=n.get(At);let xt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,ot.__webglTexture),Dt(xt,At),St(O.__webglFramebuffer,T,At,i.COLOR_ATTACHMENT0+ut,xt,0),m(At)&&p(xt)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,X.__webglTexture),Dt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)St(O.__webglFramebuffer[wt],T,S,i.COLOR_ATTACHMENT0,ut,wt);else St(O.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}T.depthBuffer&&Jt(T)}function et(T){const S=T.textures;for(let O=0,X=S.length;O<X;O++){const tt=S[O];if(m(tt)){const J=E(T),Rt=n.get(tt).__webglTexture;e.bindTexture(J,Rt),p(J),e.unbindTexture()}}}const j=[],$=[];function K(T){if(T.samples>0){if(st(T)===!1){const S=T.textures,O=T.width,X=T.height;let tt=i.COLOR_BUFFER_BIT;const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(T),ut=S.length>1;if(ut)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const wt=T.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[At]);const ot=n.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,tt,i.NEAREST),c===!0&&(j.length=0,$.length=0,j.push(i.COLOR_ATTACHMENT0+At),T.depthBuffer&&T.resolveDepthBuffer===!1&&(j.push(J),$.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[At]);const ot=n.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function dt(T){return Math.min(s.maxSamples,T.samples)}function st(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pt(T){const S=o.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function zt(T,S){const O=T.colorSpace,X=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==zi&&O!==Sn&&(Qt.getTransfer(O)===re?(X!==sn||tt!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=le,this.setupRenderTarget=D,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=st}function Eg(i,t){function e(n,s=Sn){let r;const o=Qt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yc)return i.BYTE;if(n===Ec)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===ws)return i.HALF_FLOAT;if(n===wc)return i.ALPHA;if(n===Ac)return i.RGB;if(n===sn)return i.RGBA;if(n===vs)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Sa)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===Cc)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===sr||n===rr||n===or||n===ar)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Do||n===Io||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===zo||n===ko||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Jo||n===Zo||n===Ko||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===Qo||n===ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jo)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ea||n===na||n===ia||n===sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Hc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:bg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ag extends qi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new wg,p={},E=e.getContextAttributes();let y=null,v=null;const A=[],w=[],C=new ht;let L=null;const x=new Ue;x.viewport=new oe;const M=new Ue;M.viewport=new oe;const P=[x,M],I=new Yf;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=A[Z];return nt===void 0&&(nt=new jr,A[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=A[Z];return nt===void 0&&(nt=new jr,A[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=A[Z];return nt===void 0&&(nt=new jr,A[Z]=nt),nt.getHandSpace()};function z(Z){const nt=w.indexOf(Z.inputSource);if(nt===-1)return;const St=A[nt];St!==void 0&&(St.update(Z.inputSource,Z.frame,l||o),St.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<A.length;Z++){const nt=w[Z];nt!==null&&(w[Z]=null,A[Z].disconnect(nt))}B=null,H=null,m.reset();for(const Z in p)delete p[Z];t.setRenderTarget(y),f=null,d=null,u=null,s=null,v=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),E.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Lt=null,Tt=null;E.depth&&(Tt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=E.stencil?xs:vs,Lt=E.stencil?_s:ri);const Jt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Jt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new oi(d.textureWidth,d.textureHeight,{format:sn,type:fn,depthTexture:new kc(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const St={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new oi(f.framebufferWidth,f.framebufferHeight,{format:sn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Z){for(let nt=0;nt<Z.removed.length;nt++){const St=Z.removed[nt],Lt=w.indexOf(St);Lt>=0&&(w[Lt]=null,A[Lt].disconnect(St))}for(let nt=0;nt<Z.added.length;nt++){const St=Z.added[nt];let Lt=w.indexOf(St);if(Lt===-1){for(let Jt=0;Jt<A.length;Jt++)if(Jt>=w.length){w.push(St),Lt=Jt;break}else if(w[Jt]===null){w[Jt]=St,Lt=Jt;break}if(Lt===-1)break}const Tt=A[Lt];Tt&&Tt.connect(St)}}const k=new R,it=new R;function rt(Z,nt,St){k.setFromMatrixPosition(nt.matrixWorld),it.setFromMatrixPosition(St.matrixWorld);const Lt=k.distanceTo(it),Tt=nt.projectionMatrix.elements,Jt=St.projectionMatrix.elements,le=Tt[14]/(Tt[10]-1),D=Tt[14]/(Tt[10]+1),et=(Tt[9]+1)/Tt[5],j=(Tt[9]-1)/Tt[5],$=(Tt[8]-1)/Tt[0],K=(Jt[8]+1)/Jt[0],dt=le*$,st=le*K,pt=Lt/(-$+K),zt=pt*-$;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(zt),Z.translateZ(pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Tt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Bt=le+pt,T=D+pt,S=dt-zt,O=st+(Lt-zt),X=et*D/T*Bt,tt=j*D/T*Bt;Z.projectionMatrix.makePerspective(S,O,X,tt,Bt,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ft(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let nt=Z.near,St=Z.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(St=m.depthFar)),I.near=M.near=x.near=nt,I.far=M.far=x.far=St,(B!==I.near||H!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,H=I.far),I.layers.mask=Z.layers.mask|6,x.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Lt=Z.parent,Tt=I.cameras;ft(I,Lt);for(let Jt=0;Jt<Tt.length;Jt++)ft(Tt[Jt],Lt);Tt.length===2?rt(I,x,M):I.projectionMatrix.copy(x.projectionMatrix),Dt(Z,I,Lt)};function Dt(Z,nt,St){St===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(St.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ki*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return p[Z]};let Yt=null;function ee(Z,nt){if(h=nt.getViewerPose(l||o),g=nt,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Lt=!1;St.length!==I.cameras.length&&(I.cameras.length=0,Lt=!0);for(let D=0;D<St.length;D++){const et=St[D];let j=null;if(f!==null)j=f.getViewport(et);else{const K=u.getViewSubImage(d,et);j=K.viewport,D===0&&(t.setRenderTargetTextures(v,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(v))}let $=P[D];$===void 0&&($=new Ue,$.layers.enable(D),$.viewport=new oe,P[D]=$),$.matrix.fromArray(et.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(et.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(j.x,j.y,j.width,j.height),D===0&&(I.matrix.copy($.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Lt===!0&&I.cameras.push($)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const D=u.getDepthInformation(St[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<St.length;D++){const et=St[D].camera;if(et){let j=p[et];j||(j=new Hc,p[et]=j);const $=u.getCameraImage(et);j.sourceTexture=$}}}}for(let St=0;St<A.length;St++){const Lt=w[St],Tt=A[St];Lt!==null&&Tt!==void 0&&Tt.update(Lt,nt,l||o)}Yt&&Yt(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const $t=new jc;$t.setAnimationLoop(ee),this.setAnimationLoop=function(Z){Yt=Z},this.dispose=function(){}}}const Zn=new $e,Cg=new ie;function Rg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ne&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ne&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),y=E.envMap,v=E.envMapRotation;y&&(m.envMap.value=y,Zn.copy(v),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(Zn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const v=y.program;n.uniformBlockBinding(E,v)}function l(E,y){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(E,A);const w=t.render.frame;r[E.id]!==w&&(d(E),r[E.id]=w)}function h(E){const y=u();E.__bindingPointIndex=y;const v=i.createBuffer(),A=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],v=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,C=v.length;w<C;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,M=L.length;x<M;x++){const P=L[x];if(f(P,w,x,A)===!0){const I=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let z=0;z<B.length;z++){const G=B[z],Y=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,I+H,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,y,v,A){const w=E.value,C=y+"_"+v;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const L=A[C];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[C]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(E){const y=E.uniforms;let v=0;const A=16;for(let C=0,L=y.length;C<L;C++){const x=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,P=x.length;M<P;M++){const I=x[M],B=Array.isArray(I.value)?I.value:[I.value];for(let H=0,z=B.length;H<z;H++){const G=B[H],Y=_(G),k=v%A,it=k%Y.boundary,rt=k+it;v+=it,rt!==0&&A-rt<Y.storage&&(v+=A-rt),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=Y.storage}}}const w=v%A;return w>0&&(v+=A-w),E.__size=v,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Lg{constructor(t={}){const{canvas:e=wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=Te;let w=0,C=0,L=null,x=-1,M=null;const P=new oe,I=new oe;let B=null;const H=new qt(0);let z=0,G=e.width,Y=e.height,k=1,it=null,rt=null;const ft=new oe(0,0,G,Y),Dt=new oe(0,0,G,Y);let Yt=!1;const ee=new Pa;let $t=!1,Z=!1;const nt=new ie,St=new R,Lt=new oe,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function le(){return L===null?k:1}let D=n;function et(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",at,!1),D===null){const N="webgl2";if(D=et(N,b),D===null)throw et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let j,$,K,dt,st,pt,zt,Bt,T,S,O,X,tt,J,Rt,ut,wt,At,ot,xt,Ft,Pt,_t,Vt;function U(){j=new Hm(D),j.init(),Pt=new Eg(D,j),$=new Um(D,j,t,Pt),K=new Sg(D,j),$.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),dt=new Wm(D),st=new lg,pt=new yg(D,j,K,st,$,Pt,dt),zt=new Fm(v),Bt=new km(v),T=new Kf(D),_t=new Dm(D,T),S=new Vm(D,T,dt,_t),O=new qm(D,S,T,dt),ot=new Xm(D,$,pt),ut=new Nm(st),X=new ag(v,zt,Bt,j,$,_t,ut),tt=new Rg(v,st),J=new hg,Rt=new gg(j),At=new Lm(v,zt,Bt,K,O,f,c),wt=new xg(v,O,$),Vt=new Pg(D,dt,$,K),xt=new Im(D,j,dt),Ft=new Gm(D,j,dt),dt.programs=X.programs,v.capabilities=$,v.extensions=j,v.properties=st,v.renderLists=J,v.shadowMap=wt,v.state=K,v.info=dt}U();const ct=new Ag(v,D);this.xr=ct,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=j.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=j.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(G,Y,!1))},this.getSize=function(b){return b.set(G,Y)},this.setSize=function(b,N,V=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,Y=N,e.width=Math.floor(b*k),e.height=Math.floor(N*k),V===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(G*k,Y*k).floor()},this.setDrawingBufferSize=function(b,N,V){G=b,Y=N,k=V,e.width=Math.floor(b*V),e.height=Math.floor(N*V),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ft)},this.setViewport=function(b,N,V,W){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,N,V,W),K.viewport(P.copy(ft).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Dt)},this.setScissor=function(b,N,V,W){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,N,V,W),K.scissor(I.copy(Dt).multiplyScalar(k).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(b){K.setScissorTest(Yt=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,V=!0){let W=0;if(b){let F=!1;if(L!==null){const lt=L.texture.format;F=lt===ba||lt===Ea||lt===ya}if(F){const lt=L.texture.type,vt=lt===fn||lt===ri||lt===gs||lt===_s||lt===xa||lt===Ma,bt=At.getClearColor(),Mt=At.getClearAlpha(),Nt=bt.r,Ot=bt.g,It=bt.b;vt?(g[0]=Nt,g[1]=Ot,g[2]=It,g[3]=Mt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Nt,_[1]=Ot,_[2]=It,_[3]=Mt,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}N&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),At.dispose(),J.dispose(),Rt.dispose(),st.dispose(),zt.dispose(),Bt.dispose(),O.dispose(),_t.dispose(),Vt.dispose(),X.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",on),ct.removeEventListener("sessionend",Ga),Vn.stop()};function mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=dt.autoReset,N=wt.enabled,V=wt.autoUpdate,W=wt.needsUpdate,F=wt.type;U(),dt.autoReset=b,wt.enabled=N,wt.autoUpdate=V,wt.needsUpdate=W,wt.type=F}function at(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Q(b){const N=b.target;N.removeEventListener("dispose",Q),Ct(N)}function Ct(b){kt(b),st.remove(b)}function kt(b){const N=st.get(b).programs;N!==void 0&&(N.forEach(function(V){X.releaseProgram(V)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,V,W,F,lt){N===null&&(N=Tt);const vt=F.isMesh&&F.matrixWorld.determinant()<0,bt=ch(b,N,V,W,F);K.setMaterial(W,vt);let Mt=V.index,Nt=1;if(W.wireframe===!0){if(Mt=S.getWireframeAttribute(V),Mt===void 0)return;Nt=2}const Ot=V.drawRange,It=V.attributes.position;let Zt=Ot.start*Nt,se=(Ot.start+Ot.count)*Nt;lt!==null&&(Zt=Math.max(Zt,lt.start*Nt),se=Math.min(se,(lt.start+lt.count)*Nt)),Mt!==null?(Zt=Math.max(Zt,0),se=Math.min(se,Mt.count)):It!=null&&(Zt=Math.max(Zt,0),se=Math.min(se,It.count));const ge=se-Zt;if(ge<0||ge===1/0)return;_t.setup(F,W,bt,V,Mt);let he,ae=xt;if(Mt!==null&&(he=T.get(Mt),ae=Ft,ae.setIndex(he)),F.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*le()),ae.setMode(D.LINES)):ae.setMode(D.TRIANGLES);else if(F.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),K.setLineWidth(Ut*le()),F.isLineSegments?ae.setMode(D.LINES):F.isLineLoop?ae.setMode(D.LINE_LOOP):ae.setMode(D.LINE_STRIP)}else F.isPoints?ae.setMode(D.POINTS):F.isSprite&&ae.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ae.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ut=F._multiDrawStarts,de=F._multiDrawCounts,jt=F._multiDrawCount,ke=Mt?T.get(Mt).bytesPerElement:1,ui=st.get(W).currentProgram.getUniforms();for(let He=0;He<jt;He++)ui.setValue(D,"_gl_DrawID",He),ae.render(Ut[He]/ke,de[He])}else if(F.isInstancedMesh)ae.renderInstances(Zt,ge,F.count);else if(V.isInstancedBufferGeometry){const Ut=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,de=Math.min(V.instanceCount,Ut);ae.renderInstances(Zt,ge,de)}else ae.render(Zt,ge)};function ce(b,N,V){b.transparent===!0&&b.side===ln&&b.forceSinglePass===!1?(b.side=Ne,b.needsUpdate=!0,Ps(b,N,V),b.side=kn,b.needsUpdate=!0,Ps(b,N,V),b.side=ln):Ps(b,N,V)}this.compile=function(b,N,V=null){V===null&&(V=b),p=Rt.get(V),p.init(N),y.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==V&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const lt=F.material;if(lt)if(Array.isArray(lt))for(let vt=0;vt<lt.length;vt++){const bt=lt[vt];ce(bt,V,F),W.add(bt)}else ce(lt,V,F),W.add(lt)}),p=y.pop(),W},this.compileAsync=function(b,N,V=null){const W=this.compile(b,N,V);return new Promise(F=>{function lt(){if(W.forEach(function(vt){st.get(vt).currentProgram.isReady()&&W.delete(vt)}),W.size===0){F(b);return}setTimeout(lt,10)}j.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ne=null;function pn(b){ne&&ne(b)}function on(){Vn.stop()}function Ga(){Vn.start()}const Vn=new jc;Vn.setAnimationLoop(pn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(b){ne=b,ct.setAnimationLoop(b),b===null?Vn.stop():Vn.start()},ct.addEventListener("sessionstart",on),ct.addEventListener("sessionend",Ga),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(N),N=ct.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,L),p=Rt.get(b,y.length),p.init(N),y.push(p),nt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ee.setFromProjectionMatrix(nt,hn,N.reversedDepth),Z=this.localClippingEnabled,$t=ut.init(this.clippingPlanes,Z),m=J.get(b,E.length),m.init(),E.push(m),ct.enabled===!0&&ct.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&Cr(lt,N,-1/0,v.sortObjects)}Cr(b,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,rt),Jt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Jt&&At.addToRenderList(m,b),this.info.render.frame++,$t===!0&&ut.beginShadows();const V=p.state.shadowsArray;wt.render(V,b,N),$t===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const lt=N.cameras;if(F.length>0)for(let vt=0,bt=lt.length;vt<bt;vt++){const Mt=lt[vt];Xa(W,F,b,Mt)}Jt&&At.render(b);for(let vt=0,bt=lt.length;vt<bt;vt++){const Mt=lt[vt];Wa(m,b,Mt,Mt.viewport)}}else F.length>0&&Xa(W,F,b,N),Jt&&At.render(b),Wa(m,b,N);L!==null&&C===0&&(pt.updateMultisampleRenderTarget(L),pt.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(v,b,N),_t.resetDefaultState(),x=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],$t===!0&&ut.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Cr(b,N,V,W){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){W&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);const vt=O.update(b),bt=b.material;bt.visible&&m.push(b,vt,bt,V,Lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ee.intersectsObject(b))){const vt=O.update(b),bt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Lt.copy(vt.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(bt)){const Mt=vt.groups;for(let Nt=0,Ot=Mt.length;Nt<Ot;Nt++){const It=Mt[Nt],Zt=bt[It.materialIndex];Zt&&Zt.visible&&m.push(b,vt,Zt,V,Lt.z,It)}}else bt.visible&&m.push(b,vt,bt,V,Lt.z,null)}}const lt=b.children;for(let vt=0,bt=lt.length;vt<bt;vt++)Cr(lt[vt],N,V,W)}function Wa(b,N,V,W){const F=b.opaque,lt=b.transmissive,vt=b.transparent;p.setupLightsView(V),$t===!0&&ut.setGlobalState(v.clippingPlanes,V),W&&K.viewport(P.copy(W)),F.length>0&&Rs(F,N,V),lt.length>0&&Rs(lt,N,V),vt.length>0&&Rs(vt,N,V),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Xa(b,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new oi(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?ws:fn,minFilter:En,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const lt=p.state.transmissionRenderTarget[W.id],vt=W.viewport||P;lt.setSize(vt.z*v.transmissionResolutionScale,vt.w*v.transmissionResolutionScale);const bt=v.getRenderTarget(),Mt=v.getActiveCubeFace(),Nt=v.getActiveMipmapLevel();v.setRenderTarget(lt),v.getClearColor(H),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),Jt&&At.render(V);const Ot=v.toneMapping;v.toneMapping=Fn;const It=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$t===!0&&ut.setGlobalState(v.clippingPlanes,W),Rs(b,V,W),pt.updateMultisampleRenderTarget(lt),pt.updateRenderTargetMipmap(lt),j.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let se=0,ge=N.length;se<ge;se++){const he=N[se],ae=he.object,Ut=he.geometry,de=he.material,jt=he.group;if(de.side===ln&&ae.layers.test(W.layers)){const ke=de.side;de.side=Ne,de.needsUpdate=!0,qa(ae,V,W,Ut,de,jt),de.side=ke,de.needsUpdate=!0,Zt=!0}}Zt===!0&&(pt.updateMultisampleRenderTarget(lt),pt.updateRenderTargetMipmap(lt))}v.setRenderTarget(bt,Mt,Nt),v.setClearColor(H,z),It!==void 0&&(W.viewport=It),v.toneMapping=Ot}function Rs(b,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,lt=b.length;F<lt;F++){const vt=b[F],bt=vt.object,Mt=vt.geometry,Nt=vt.group;let Ot=vt.material;Ot.allowOverride===!0&&W!==null&&(Ot=W),bt.layers.test(V.layers)&&qa(bt,N,V,Mt,Ot,Nt)}}function qa(b,N,V,W,F,lt){b.onBeforeRender(v,N,V,W,F,lt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,N,V,W,b,lt),F.transparent===!0&&F.side===ln&&F.forceSinglePass===!1?(F.side=Ne,F.needsUpdate=!0,v.renderBufferDirect(V,N,W,F,b,lt),F.side=kn,F.needsUpdate=!0,v.renderBufferDirect(V,N,W,F,b,lt),F.side=ln):v.renderBufferDirect(V,N,W,F,b,lt),b.onAfterRender(v,N,V,W,F,lt)}function Ps(b,N,V){N.isScene!==!0&&(N=Tt);const W=st.get(b),F=p.state.lights,lt=p.state.shadowsArray,vt=F.state.version,bt=X.getParameters(b,F.state,lt,N,V),Mt=X.getProgramCacheKey(bt);let Nt=W.programs;W.environment=b.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(b.isMeshStandardMaterial?Bt:zt).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",Q),Nt=new Map,W.programs=Nt);let Ot=Nt.get(Mt);if(Ot!==void 0){if(W.currentProgram===Ot&&W.lightsStateVersion===vt)return Ja(b,bt),Ot}else bt.uniforms=X.getUniforms(b),b.onBeforeCompile(bt,v),Ot=X.acquireProgram(bt,Mt),Nt.set(Mt,Ot),W.uniforms=bt.uniforms;const It=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=ut.uniform),Ja(b,bt),W.needsLights=uh(b),W.lightsStateVersion=vt,W.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ot,W.uniformsList=null,Ot}function Ya(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=hr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Ja(b,N){const V=st.get(b);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function ch(b,N,V,W,F){N.isScene!==!0&&(N=Tt),pt.resetTextureUnits();const lt=N.fog,vt=W.isMeshStandardMaterial?N.environment:null,bt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:zi,Mt=(W.isMeshStandardMaterial?Bt:zt).get(W.envMap||vt),Nt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ot=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!V.morphAttributes.position,Zt=!!V.morphAttributes.normal,se=!!V.morphAttributes.color;let ge=Fn;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ge=v.toneMapping);const he=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=he!==void 0?he.length:0,Ut=st.get(W),de=p.state.lights;if($t===!0&&(Z===!0||b!==M)){const Le=b===M&&W.id===x;ut.setState(W,b,Le)}let jt=!1;W.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==de.state.version||Ut.outputColorSpace!==bt||F.isBatchedMesh&&Ut.batching===!1||!F.isBatchedMesh&&Ut.batching===!0||F.isBatchedMesh&&Ut.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ut.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ut.instancing===!1||!F.isInstancedMesh&&Ut.instancing===!0||F.isSkinnedMesh&&Ut.skinning===!1||!F.isSkinnedMesh&&Ut.skinning===!0||F.isInstancedMesh&&Ut.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ut.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ut.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ut.instancingMorph===!1&&F.morphTexture!==null||Ut.envMap!==Mt||W.fog===!0&&Ut.fog!==lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ut.numPlanes||Ut.numIntersection!==ut.numIntersection)||Ut.vertexAlphas!==Nt||Ut.vertexTangents!==Ot||Ut.morphTargets!==It||Ut.morphNormals!==Zt||Ut.morphColors!==se||Ut.toneMapping!==ge||Ut.morphTargetsCount!==ae)&&(jt=!0):(jt=!0,Ut.__version=W.version);let ke=Ut.currentProgram;jt===!0&&(ke=Ps(W,N,F));let ui=!1,He=!1,$i=!1;const pe=ke.getUniforms(),Xe=Ut.uniforms;if(K.useProgram(ke.program)&&(ui=!0,He=!0,$i=!0),W.id!==x&&(x=W.id,He=!0),ui||M!==b){K.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pe.setValue(D,"projectionMatrix",b.projectionMatrix),pe.setValue(D,"viewMatrix",b.matrixWorldInverse);const Oe=pe.map.cameraPosition;Oe!==void 0&&Oe.setValue(D,St.setFromMatrixPosition(b.matrixWorld)),$.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pe.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,He=!0,$i=!0)}if(F.isSkinnedMesh){pe.setOptional(D,F,"bindMatrix"),pe.setOptional(D,F,"bindMatrixInverse");const Le=F.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),pe.setValue(D,"boneTexture",Le.boneTexture,pt))}F.isBatchedMesh&&(pe.setOptional(D,F,"batchingTexture"),pe.setValue(D,"batchingTexture",F._matricesTexture,pt),pe.setOptional(D,F,"batchingIdTexture"),pe.setValue(D,"batchingIdTexture",F._indirectTexture,pt),pe.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(D,"batchingColorTexture",F._colorsTexture,pt));const qe=V.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&ot.update(F,V,ke),(He||Ut.receiveShadow!==F.receiveShadow)&&(Ut.receiveShadow=F.receiveShadow,pe.setValue(D,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Xe.envMap.value=Mt,Xe.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Xe.envMapIntensity.value=N.environmentIntensity),He&&(pe.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&hh(Xe,$i),lt&&W.fog===!0&&tt.refreshFogUniforms(Xe,lt),tt.refreshMaterialUniforms(Xe,W,k,Y,p.state.transmissionRenderTarget[b.id]),hr.upload(D,Ya(Ut),Xe,pt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(hr.upload(D,Ya(Ut),Xe,pt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pe.setValue(D,"center",F.center),pe.setValue(D,"modelViewMatrix",F.modelViewMatrix),pe.setValue(D,"normalMatrix",F.normalMatrix),pe.setValue(D,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Le=W.uniformsGroups;for(let Oe=0,Rr=Le.length;Oe<Rr;Oe++){const Gn=Le[Oe];Vt.update(Gn,ke),Vt.bind(Gn,ke)}}return ke}function hh(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function uh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,N,V){const W=st.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),st.get(b.texture).__webglTexture=N,st.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const V=st.get(b);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const fh=D.createFramebuffer();this.setRenderTarget=function(b,N=0,V=0){L=b,w=N,C=V;let W=!0,F=null,lt=!1,vt=!1;if(b){const Mt=st.get(b);if(Mt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Mt.__webglFramebuffer===void 0)pt.setupRenderTarget(b);else if(Mt.__hasExternalTextures)pt.rebindTextures(b,st.get(b.texture).__webglTexture,st.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const It=b.depthTexture;if(Mt.__boundDepthTexture!==It){if(It!==null&&st.has(It)&&(b.width!==It.image.width||b.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(b)}}const Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(vt=!0);const Ot=st.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[N])?F=Ot[N][V]:F=Ot[N],lt=!0):b.samples>0&&pt.useMultisampledRTT(b)===!1?F=st.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?F=Ot[V]:F=Ot,P.copy(b.viewport),I.copy(b.scissor),B=b.scissorTest}else P.copy(ft).multiplyScalar(k).floor(),I.copy(Dt).multiplyScalar(k).floor(),B=Yt;if(V!==0&&(F=fh),K.bindFramebuffer(D.FRAMEBUFFER,F)&&W&&K.drawBuffers(b,F),K.viewport(P),K.scissor(I),K.setScissorTest(B),lt){const Mt=st.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,V)}else if(vt){const Mt=N;for(let Nt=0;Nt<b.textures.length;Nt++){const Ot=st.get(b.textures[Nt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Nt,Ot.__webglTexture,V,Mt)}}else if(b!==null&&V!==0){const Mt=st.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,V)}x=-1},this.readRenderTargetPixels=function(b,N,V,W,F,lt,vt,bt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(Mt=Mt[vt]),Mt){K.bindFramebuffer(D.FRAMEBUFFER,Mt);try{const Nt=b.textures[bt],Ot=Nt.format,It=Nt.type;if(!$.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-W&&V>=0&&V<=b.height-F&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt),D.readPixels(N,V,W,F,Pt.convert(Ot),Pt.convert(It),lt))}finally{const Nt=L!==null?st.get(L).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,N,V,W,F,lt,vt,bt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(Mt=Mt[vt]),Mt)if(N>=0&&N<=b.width-W&&V>=0&&V<=b.height-F){K.bindFramebuffer(D.FRAMEBUFFER,Mt);const Nt=b.textures[bt],Ot=Nt.format,It=Nt.type;if(!$.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Zt),D.bufferData(D.PIXEL_PACK_BUFFER,lt.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt),D.readPixels(N,V,W,F,Pt.convert(Ot),Pt.convert(It),0);const se=L!==null?st.get(L).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,se);const ge=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Au(D,ge,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Zt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,lt),D.deleteBuffer(Zt),D.deleteSync(ge),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,V=0){const W=Math.pow(2,-V),F=Math.floor(b.image.width*W),lt=Math.floor(b.image.height*W),vt=N!==null?N.x:0,bt=N!==null?N.y:0;pt.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,vt,bt,F,lt),K.unbindTexture()};const dh=D.createFramebuffer(),ph=D.createFramebuffer();this.copyTextureToTexture=function(b,N,V=null,W=null,F=0,lt=null){lt===null&&(F!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=F,F=0):lt=0);let vt,bt,Mt,Nt,Ot,It,Zt,se,ge;const he=b.isCompressedTexture?b.mipmaps[lt]:b.image;if(V!==null)vt=V.max.x-V.min.x,bt=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,Nt=V.min.x,Ot=V.min.y,It=V.isBox3?V.min.z:0;else{const qe=Math.pow(2,-F);vt=Math.floor(he.width*qe),bt=Math.floor(he.height*qe),b.isDataArrayTexture?Mt=he.depth:b.isData3DTexture?Mt=Math.floor(he.depth*qe):Mt=1,Nt=0,Ot=0,It=0}W!==null?(Zt=W.x,se=W.y,ge=W.z):(Zt=0,se=0,ge=0);const ae=Pt.convert(N.format),Ut=Pt.convert(N.type);let de;N.isData3DTexture?(pt.setTexture3D(N,0),de=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(pt.setTexture2DArray(N,0),de=D.TEXTURE_2D_ARRAY):(pt.setTexture2D(N,0),de=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const jt=D.getParameter(D.UNPACK_ROW_LENGTH),ke=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ui=D.getParameter(D.UNPACK_SKIP_PIXELS),He=D.getParameter(D.UNPACK_SKIP_ROWS),$i=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,he.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,It);const pe=b.isDataArrayTexture||b.isData3DTexture,Xe=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const qe=st.get(b),Le=st.get(N),Oe=st.get(qe.__renderTarget),Rr=st.get(Le.__renderTarget);K.bindFramebuffer(D.READ_FRAMEBUFFER,Oe.__webglFramebuffer),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Gn=0;Gn<Mt;Gn++)pe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(b).__webglTexture,F,It+Gn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.get(N).__webglTexture,lt,ge+Gn)),D.blitFramebuffer(Nt,Ot,vt,bt,Zt,se,vt,bt,D.DEPTH_BUFFER_BIT,D.NEAREST);K.bindFramebuffer(D.READ_FRAMEBUFFER,null),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||st.has(b)){const qe=st.get(b),Le=st.get(N);K.bindFramebuffer(D.READ_FRAMEBUFFER,dh),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,ph);for(let Oe=0;Oe<Mt;Oe++)pe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,F,It+Oe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qe.__webglTexture,F),Xe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.__webglTexture,lt,ge+Oe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Le.__webglTexture,lt),F!==0?D.blitFramebuffer(Nt,Ot,vt,bt,Zt,se,vt,bt,D.COLOR_BUFFER_BIT,D.NEAREST):Xe?D.copyTexSubImage3D(de,lt,Zt,se,ge+Oe,Nt,Ot,vt,bt):D.copyTexSubImage2D(de,lt,Zt,se,Nt,Ot,vt,bt);K.bindFramebuffer(D.READ_FRAMEBUFFER,null),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Xe?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(de,lt,Zt,se,ge,vt,bt,Mt,ae,Ut,he.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(de,lt,Zt,se,ge,vt,bt,Mt,ae,he.data):D.texSubImage3D(de,lt,Zt,se,ge,vt,bt,Mt,ae,Ut,he):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,lt,Zt,se,vt,bt,ae,Ut,he.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,lt,Zt,se,he.width,he.height,ae,he.data):D.texSubImage2D(D.TEXTURE_2D,lt,Zt,se,vt,bt,ae,Ut,he);D.pixelStorei(D.UNPACK_ROW_LENGTH,jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ke),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ui),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$i),lt===0&&N.generateMipmaps&&D.generateMipmap(de),K.unbindTexture()},this.initRenderTarget=function(b){st.get(b).__webglFramebuffer===void 0&&pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pt.setTextureCube(b,0):b.isData3DTexture?pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pt.setTexture2DArray(b,0):pt.setTexture2D(b,0),K.unbindTexture()},this.resetState=function(){w=0,C=0,L=null,K.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Dg extends zc{constructor(){super();const t=new hi;t.deleteAttribute("uv");const e=new Pe({side:Ne}),n=new Pe,s=new cr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new te(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new lr(t,n,6),a=new xe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new te(t,Ci(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new te(t,Ci(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new te(t,Ci(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new te(t,Ci(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new te(t,Ci(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new te(t,Ci(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ci(i){return new Uf({color:0,emissive:16777215,emissiveIntensity:i})}function ih(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new _e;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=rc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=rc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function rc(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Fe(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const rs=new R;function Je(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;rs.copy(t),rs[n]=0,rs.normalize();const l=.5*o/(o+a),h=1-rs.angleTo(i)/c;return Math.sign(rs[e])===1?h*l:a/(o+a)+l+l*(1-h)}class ka extends hi{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new R,l=new R,h=new R(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,_=new R,m=.5/o;for(let p=0,E=0;p<u.length;p+=3,E+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[E+0]=Je(_,l,"z","y",r,n),f[E+1]=1-Je(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),f[E+0]=1-Je(_,l,"z","y",r,n),f[E+1]=1-Je(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),f[E+0]=1-Je(_,l,"x","z",r,t),f[E+1]=Je(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[E+0]=1-Je(_,l,"x","z",r,t),f[E+1]=1-Je(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[E+0]=1-Je(_,l,"x","y",r,t),f[E+1]=1-Je(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),f[E+0]=Je(_,l,"x","y",r,t),f[E+1]=1-Je(_,l,"y","x",r,e);break}}static fromJSON(t){return new ka(t.width,t.height,t.depth,t.segments,t.radius)}}const os=Be.clamp;function Ts(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}class Ig{constructor(t){Et(this,"cache",new Map);this.anisotropy=t}get(t,e=1){const n=`${t}:${e}`,s=this.cache.get(n);if(s)return s;const r=512,o=Ts(e),a=document.createElement("canvas");a.width=a.height=r;const c=a.getContext("2d"),l=c.createImageData(r,r),h=new Uint8Array(r*r*4),u=new Uint8Array(r*r*4),d=Array.from({length:3},()=>({x:o(),y:o(),radius:.02+o()*.016})),f=Float32Array.from({length:289},()=>o()-.5);for(let y=0;y<r;y++)for(let v=0;v<r;v++){const A=v/r,w=y/r,C=o()-.5,L=(y*r+v)*4;let x=0,M=.5,P=100,I=100,B=100,H=.85;if(t==="oak"||t==="endgrain"){let Y=w;for(const rt of d){const ft=(A-rt.x)*.6,Dt=w-rt.y;Y+=Math.exp(-(ft*ft+Dt*Dt)/.01)*Math.sin(Dt*30)*.028}const k=t==="endgrain"?Math.hypot((A-.47)*1.2,w-.53)*210:Y*370+Math.sin(A*16)*1.5+Math.sin(A*47+w*20)*.5,it=Math.sin(k)*.035+Math.sin(k*3.8)*.012;x=it+Math.sin(w*29+e)*.024+C*.028;for(const rt of d){const ft=Math.hypot((A-rt.x)*.52,w-rt.y);x-=Math.exp(-ft*ft/(rt.radius*rt.radius))*.3}P=83+x*130,I=53+x*105,B=32+x*75,M=.53+it*.65+C*.035,H=.83+Math.abs(it)*1.2}else if(t==="steel"||t==="iron"){const Y=Math.sin(A*61+Math.sin(w*83)*3)*Math.sin(w*79+Math.cos(A*73)*4);x=C*.075+Y*.012;const k=t==="steel"?148:46;P=k+x*95,I=k+5+x*105,B=k+8+x*110,M=.5+(t==="iron"?Y*.045+C*.16:C*.025),H=t==="steel"?.52+C*.08:.83+Y*.05}else if(t==="stone"){const Y=A*16,k=w*16,it=Math.floor(Y),rt=Math.floor(k),ft=Y-it,Dt=k-rt,Yt=ft*ft*(3-2*ft),ee=Dt*Dt*(3-2*Dt),$t=Be.lerp(f[rt*17+it],f[rt*17+it+1],Yt),Z=Be.lerp(f[(rt+1)*17+it],f[(rt+1)*17+it+1],Yt);x=C*.1+Be.lerp($t,Z,ee)*.14,P=107+x*100,I=90+x*90,B=73+x*75,M=.5+x*.6,H=.93}else x=Math.sin(A*140)*Math.sin(w*180)*.026+C*.08,P=64+x*60,I=33+x*55,B=23+x*45,M=.5+x,H=.88;l.data.set([os(P,0,255),os(I,0,255),os(B,0,255),255],L);const z=os(M*255,0,255),G=os(H*255,0,255);h.set([z,z,z,255],L),u.set([G,G,G,255],L)}if(c.putImageData(l,0,0),t==="steel"||t==="iron")for(let y=0;y<(t==="steel"?150:45);y++){const v=o()*r,A=o()*r;c.strokeStyle=`rgba(${y%3?"225,227,218":"16,23,28"},${.03+o()*.13})`,c.lineWidth=.35+o()*.6,c.beginPath(),c.moveTo(v,A),c.lineTo(v+6+o()*80,A+(o()-.5)*15),c.stroke()}const g=new Vi(a);g.colorSpace=Te;const _=new gr(h,r,r),m=new gr(u,r,r);for(const y of[g,_,m])y.wrapS=y.wrapT=ms,y.anisotropy=this.anisotropy,y.minFilter=En,y.magFilter=Ze,y.generateMipmaps=!0,y.needsUpdate=!0;const p=t==="iron"||t==="steel",E=new Pe({map:g,bumpMap:_,roughnessMap:m,metalness:p?t==="steel"?.9:.72:0,roughness:t==="steel"?.64:.98,bumpScale:t==="stone"?.025:t==="iron"?.007:t==="steel"?.003:.012,envMapIntensity:t==="steel"?1.35:t==="iron"?.7:1});return this.cache.set(n,E),E}}function oc(i,t,e,n=.025){return new ka(i,t,e,1,Math.min(n,i/3,t/3,e/3))}function Ug(){const i=[[0,.69,.44],[.04,.72,.45],[.12,.7,.43],[.18,.56,.35],[.25,.44,.29],[.34,.35,.25],[.43,.32,.24],[.51,.35,.255],[.6,.44,.3],[.67,.57,.35],[.73,.69,.37],[.8,.73,.38],[.85,.73,.38]],t=32,e=[],n=[],s=[];for(const[o,a,c]of i){const l=Math.min(.09,c*.35);for(let h=0;h<t;h++){const u=Math.floor(h/8),d=u*Math.PI/2+h%8/7*Math.PI/2,f=u===0||u===3?a-l:-a+l,g=u<2?c-l:-c+l;e.push(f+Math.cos(d)*l,o,g+Math.sin(d)*l),n.push(h/t,o)}}for(let o=0;o<i.length-1;o++)for(let a=0;a<t;a++){const c=o*t+a,l=o*t+(a+1)%t;s.push(c,c+t,l,l,c+t,l+t)}const r=new _e;return r.setAttribute("position",new Kt(e,3)),r.setAttribute("uv",new Kt(n,2)),r.setIndex(s),r.computeVertexNormals(),r}function Ng(){const i=[[-.68,.76,.29,.16],[-.81,.765,.265,.15],[-.96,.78,.225,.125],[-1.14,.8,.175,.096],[-1.31,.825,.115,.065],[-1.48,.847,.055,.033],[-1.57,.86,.009,.009]],t=24,e=[],n=[],s=[];i.forEach(([o,a,c,l],h)=>{for(let u=0;u<t;u++){const d=u/t*Math.PI*2;e.push(o,a+Math.cos(d)*l,Math.sin(d)*c),n.push(h/6,u/t)}});for(let o=0;o<i.length-1;o++)for(let a=0;a<t;a++){const c=o*t+a,l=o*t+(a+1)%t;s.push(c,c+t,l,l,c+t,l+t)}const r=new _e;return r.setAttribute("position",new Kt(e,3)),r.setAttribute("uv",new Kt(n,2)),r.setIndex(s),r.computeVertexNormals(),r}function ac(i=.075,t=.855){const e=new On;e.moveTo(-.72,-.34),e.lineTo(.89,-.34),e.quadraticCurveTo(.94,-.34,.94,-.29),e.lineTo(.94,.29),e.quadraticCurveTo(.94,.34,.89,.34),e.lineTo(-.72,.34),e.lineTo(-.72,-.34);const n=new vr;n.moveTo(.56,.11),n.lineTo(.56,.23),n.lineTo(.68,.23),n.lineTo(.68,.11),n.closePath(),e.holes.push(n);const s=new vr;s.absarc(.81,-.17,.035,0,Math.PI*2,!0),e.holes.push(s);const r=new Bn(e,{depth:i,bevelEnabled:!0,bevelThickness:.012,bevelSize:.015,bevelSegments:3,curveSegments:12,steps:1});r.rotateX(-Math.PI/2),r.translate(0,t,0);const o=r.getAttribute("position"),a=r.getAttribute("uv");for(const c of r.groups)if(c.materialIndex===0)for(let l=c.start;l<c.start+c.count;l++)a.setXY(l,(o.getX(l)+.735)/1.69,(o.getZ(l)+.355)/.71);return r}function Fg(){const i=new On;i.moveTo(-.43,-.15),i.lineTo(-.38,.18),i.lineTo(-.3,.22),i.lineTo(.32,.2),i.lineTo(.41,.14),i.lineTo(.39,-.16),i.lineTo(.3,-.21),i.lineTo(-.34,-.21),i.closePath();const t=new Bn(i,{depth:.34,bevelEnabled:!0,bevelSize:.022,bevelThickness:.022,bevelSegments:3,steps:1});t.translate(0,0,-.17);const e=t.getAttribute("position"),n=t.getAttribute("uv");for(const s of t.groups)if(s.materialIndex===0)for(let r=s.start;r<s.start+s.count;r++)n.setXY(r,(e.getX(r)+.46)/.92,(e.getY(r)+.24)/.5);return t.computeVertexNormals(),t}const lc=Be.clamp;function Mr(i,t){const e=Float32Array.from({length:(t+1)**2},()=>i());return(n,s)=>{const r=n*t,o=s*t,a=Math.floor(r),c=Math.floor(o),l=r-a,h=o-c,u=l*l*(3-2*l),d=h*h*(3-2*h),f=t+1;return Be.lerp(Be.lerp(e[c*f+a],e[c*f+a+1],u),Be.lerp(e[(c+1)*f+a],e[(c+1)*f+a+1],u),d)}}function sh(i,t,e,n,s,r){const o=n.getContext("2d").getImageData(0,0,i,i).data,a=new Uint8Array(i*i*4);for(let u=0;u<i;u++)for(let d=0;d<i;d++){const f=(u*i+d)*4,g=(o[(u*i+Math.min(i-1,d+1))*4]-o[(u*i+Math.max(0,d-1))*4])/255*r,_=(o[(Math.min(i-1,u+1)*i+d)*4]-o[(Math.max(0,u-1)*i+d)*4])/255*r,m=Math.hypot(g,_,1);a.set([(1-g/m)*127.5,(1+_/m)*127.5,(1+1/m)*127.5,255],f)}const c=new Vi(e);c.colorSpace=Te;const l=new gr(a,i,i),h=new Vi(s);for(const u of[c,l,h])u.wrapS=u.wrapT=ms,u.anisotropy=t,u.minFilter=En,u.magFilter=Ze,u.generateMipmaps=!0,u.needsUpdate=!0;return{map:c,normalMap:l,roughnessMap:h}}function Ii(i){const t=document.createElement("canvas");return t.width=t.height=i,t}function fo(i,t,e){const n=i==="face"?1024:512,s=Ts(e),r=Ii(n),o=Ii(n),a=Ii(n),c=[r,o,a].map(m=>m.getContext("2d")),l=c.map(m=>m.createImageData(n,n)),h=Mr(s,7),u=Mr(s,39),d=i==="casting";for(let m=0;m<n;m++)for(let p=0;p<n;p++){const E=p/n,y=m/n,v=(m*n+p)*4,A=h(E,y),w=u(E,y),C=s()-.5,L=Math.min(E,1-E,y,1-y),M=(i==="face"?Math.exp(-((E-.52)**2/.18+(y-.51)**2/.035)):0)*(.5+A*.5),P=lc((A-.42)*2+(L<.055?.2:0)-M*.28,0,1),B=(d?33:i==="hammer"?66:83)+A*(d?15:14)+w*9+M*24+C*5;l[0].data.set([B+P*5,B+2-P*2,B+4-P*6,255],v);const H=126+(w-.5)*(d?23:9)+C*(d?16:5);l[1].data.set([H,H,H,255],v);const z=lc((d?.83:.63)+P*.18-M*.29+(w-.5)*.13,.28,.96)*255;l[2].data.set([z,z,z,255],v)}c.forEach((m,p)=>m.putImageData(l[p],0,0));const[f,g,_]=c;for(let m=0;m<(d?180:100);m++){const p=s()*n,E=s()*n,y=(d?1.3:2)+s()*(d?4:10),v=f.createRadialGradient(p,E,0,p,E,y);v.addColorStop(0,"rgba(160,150,130,.04)"),v.addColorStop(.72,"rgba(20,18,15,.04)"),v.addColorStop(1,"rgba(20,18,15,0)"),f.fillStyle=v,f.fillRect(p-y,E-y,y*2,y*2),g.fillStyle="rgba(60,60,60,.09)",g.beginPath(),g.ellipse(p,E,y,y*.65,s()*Math.PI,0,Math.PI*2),g.fill()}for(let m=0;m<(i==="face"?390:95);m++){const p=s()*n,E=s()*n,y=8+s()*n*.15,v=(s()-.5)*n*.08,A=.6+s()*1.1;for(const[w,C]of[[f,"rgba(190,180,157,.20)"],[g,"rgba(45,45,45,.28)"],[_,"rgba(220,220,220,.22)"]])w.lineWidth=A,w.strokeStyle=C,w.beginPath(),w.moveTo(p,E),w.lineTo(p+y,E+v),w.stroke()}return new Pe({...sh(n,t,r,o,a,d?4:7),metalness:d?.78:.94,roughness:d?1:i==="hammer"?.72:.88,normalScale:new ht(.65,.65),envMapIntensity:d?.45:i==="hammer"?1.15:.95})}function Og(i,t){const n=Ts(t),s=Mr(n,6),r=Mr(n,35),o=Ii(512),a=Ii(512),c=Ii(512),l=[o,a,c].map(d=>d.getContext("2d")),h=l.map(d=>d.createImageData(512,512)),u={u:.2+n()*.6,v:.2+n()*.6};for(let d=0;d<512;d++)for(let f=0;f<512;f++){const g=f/512,_=d/512,m=(d*512+f)*4,p=Math.hypot((g-u.u)*.46,_-u.v),E=s(g,_),v=(_+Math.exp(-p*p/.025)*Math.sin((_-u.v)*14)*.065)*255+Math.sin(g*9)*2.2+E*5,A=Math.sin(v)*.035+Math.sin(v*3.7+r(g,_)*2)*.018,w=Math.exp(-p*p/6e-4),C=n()-.5,L=A+(E-.5)*.13-w*.32,x=Math.min(_,1-_),M=Math.exp(-((g-.55)**2/.13+(_-.48)**2/.06))*.18,P=55+L*90-M*30-(x<.018?9:0);h[0].data.set([P,35+L*65-M*22,22+L*45-M*14,255],m);const I=128+A*120+C*6-w*12;h[1].data.set([I,I,I,255],m);const B=(.82+Math.abs(A)*1.5+w*.1)*255;h[2].data.set([B,B,B,255],m)}l.forEach((d,f)=>d.putImageData(h[f],0,0));for(let d=0;d<35;d++){const f=n()*512,g=n()*512;l[0].strokeStyle="rgba(18,11,7,.23)",l[0].lineWidth=.4+n()*.6,l[0].beginPath(),l[0].moveTo(f,g),l[0].lineTo(f+12+n()*90,g+(n()-.5)*3),l[0].stroke()}return new Pe({...sh(512,i,o,a,c,4),roughness:1,metalness:0,normalScale:new ht(.45,.45)})}function Bg(i){const t=fo("face",i,618),e=fo("casting",i,122),n=fo("hammer",i,94),s=n.clone();return s.color.set(9144706),s.envMapIntensity=.65,{face:t,casting:e,hammer:n,edge:s,wood:Array.from({length:5},(r,o)=>Og(i,231+o*31))}}function zg(){const i={value:1};let t,e;const n=new Promise((o,a)=>{t=o,e=a}),s=new kf().load(new URL("art/cat-turnaround-v2.webp",document.baseURI).href,()=>t(),void 0,e);return s.colorSpace=Te,s.anisotropy=4,{atlas:s,ready:n,material:(o=0,a=!1)=>{const c=new aa({map:s,color:9998989,roughness:a?.98:.92,specularIntensity:.3,sheen:.15,sheenColor:7831949,sheenRoughness:.94,side:ln});return o===5&&(c.color.set(11973034),c.roughness=.17,c.clearcoat=1,c.clearcoatRoughness=.06,c.sheen=0,c.specularIntensity=1),o===3&&(c.roughness=.65,c.sheen=0),c.userData.catCoat=!0,c.onBeforeCompile=l=>{l.uniforms.catBlink=i,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 coatPosition;
attribute vec3 coatNormal;
varying vec3 vCoatPosition;
varying vec3 vCoatNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCoatPosition=coatPosition;vCoatNormal=coatNormal;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
uniform float catBlink;
varying vec3 vCoatPosition;
varying vec3 vCoatNormal;
`).replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
vec4 coatSample(vec2 pixel){return texture2D(map,vec2(pixel.x/1774.0,1.0-pixel.y/887.0));}
vec4 coatFilled(vec2 pixel){vec4 c=coatSample(pixel);return mix(coatSample(vec2(165.0,600.0)),c,smoothstep(.1,.8,c.a));}
`).replace("#include <map_fragment>",`
vec3 cn=normalize(vCoatNormal);
vec3 weights=pow(abs(cn),vec3(7.0));
vec2 fp=vec2(277.0+vCoatPosition.x*365.0,853.0-vCoatPosition.y*365.0);
vec2 sp=vec2(845.0-vCoatPosition.z*360.0,841.0-vCoatPosition.y*360.0);
vec2 bp=vec2(1553.0-vCoatPosition.x*358.0,841.0-vCoatPosition.y*358.0);
vec4 fc=coatFilled(fp);
${o===1||o===5?`
bool eyeL=fp.x>176.0&&fp.x<273.0&&fp.y>183.0&&fp.y<250.0;
bool eyeR=fp.x>335.0&&fp.x<426.0&&fp.y>188.0&&fp.y<253.0;
if(eyeL||eyeR){float ey=eyeL?217.0:222.0;float openBand=catBlink*34.0;float cover=smoothstep(openBand-3.0,openBand+3.0,abs(fp.y-ey));fc=mix(fc,coatFilled(vec2(fp.x,fp.y-72.0)),cover*(1.0-step(.99,catBlink)));}
`:""}
${o===0?`
// Remove the painted bell from the coat underneath the separate 3D bell.
if(fp.x>244.0&&fp.x<334.0&&fp.y>407.0&&fp.y<480.0)fc=coatFilled(vec2(fp.x,fp.y+94.0));
`:""}
vec4 bc=coatFilled(bp),sc=coatFilled(sp);
float frontWeight=cn.z>=0.0?weights.z+weights.y*.7:0.0;
float backWeight=cn.z<0.0?weights.z+weights.y*.7:0.0;
${o===5?"frontWeight=1.0;backWeight=0.0;weights.x=0.0;":""}
diffuseColor.rgb*=(fc.rgb*frontWeight+bc.rgb*backWeight+sc.rgb*weights.x)/max(.001,frontWeight+backWeight+weights.x);
`)},c.customProgramCacheKey=()=>`cat-coat-v2-${o}-${a}`,c},blink:i}}function kg(i){i.updateWorldMatrix(!0,!0);const t=i.matrixWorld.clone().invert();i.traverse(e=>{if(!(e instanceof te)||Array.isArray(e.material)||!e.material.userData.catCoat)return;const n=e.geometry,s=n.getAttribute("position"),r=n.getAttribute("normal"),o=t.clone().multiply(e.matrixWorld),a=new Ht().getNormalMatrix(o),c=new Float32Array(s.count*3),l=new Float32Array(s.count*3);for(let h=0;h<s.count;h++){const u=new R().fromBufferAttribute(s,h).applyMatrix4(o),d=new R().fromBufferAttribute(r,h).applyMatrix3(a).normalize();c.set(u.toArray(),h*3),l.set(d.toArray(),h*3)}n.setAttribute("coatPosition",new Fe(c,3)),n.setAttribute("coatNormal",new Fe(l,3))})}function Hg(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");t.fillStyle="black",t.fillRect(0,0,128,128);for(let n=0;n<7;n++){const s=12+n*16;t.strokeStyle=`rgba(255,255,255,${.58+n%3*.15})`,t.lineWidth=1.8,t.beginPath(),t.moveTo(s,126),t.bezierCurveTo(s+3,90,s-8,54,s+(n%2?5:-5),10+n%3*10),t.stroke()}const e=new Vi(i);return e.colorSpace=Sn,e}function as(i,t,e,n,s,r=!1){i.updateWorldMatrix(!0,!0);const o=i.matrixWorld.clone().invert(),a=[];let c=0;for(const m of t){const p=m.geometry,E=p.getAttribute("position"),y=p.getIndex(),v=o.clone().multiply(m.matrixWorld),A=y?y.count:E.count;for(let w=0;w<A;w+=3){const C=[0,1,2].map(M=>new R().fromBufferAttribute(E,y?y.getX(w+M):w+M).applyMatrix4(v)),L=C[1].clone().sub(C[0]).cross(C[2].clone().sub(C[0])),x=L.length()/2;x<1e-8||(c+=x,a.push({a:C[0],b:C[1],c:C[2],n:L.normalize(),area:c}))}}const l=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),h=[],u=[],d=[],f=[];for(let m=0;m<e;m++){const p=l()*c;let E=0,y=a.length-1;for(;E<y;){const z=E+y>>1;a[z].area<p?E=z+1:y=z}const v=a[E];if(!v)continue;let A=l(),w=l();A+w>1&&(A=1-A,w=1-w);const C=v.a.clone().multiplyScalar(1-A-w).addScaledVector(v.b,A).addScaledVector(v.c,w),L=v.n;if(r&&C.z>.18&&Math.abs(C.x)<.39&&C.y>-.3&&C.y<.19)continue;const x=new R(r?Math.sign(C.x)*.35:0,-1,.06).addScaledVector(L,L.y).normalize(),M=L.clone().multiplyScalar(.55).addScaledVector(x,.65).normalize(),P=new R().crossVectors(L,x).normalize();P.lengthSq()<.01&&P.set(1,0,0);const I=(r?.03:.033)*(.7+l()*.9),B=I*(.22+l()*.12),H=h.length/3;for(let z=0;z<3;z++)for(const G of[-1,1]){const Y=z/2,k=C.clone().addScaledVector(M,Y*I).addScaledVector(L,Y*Y*I*.18).addScaledVector(P,G*B*(1-Y*.35));h.push(k.x,k.y,k.z),u.push(L.x,L.y,L.z),d.push((G+1)/2,Y)}f.push(H,H+1,H+2,H+1,H+3,H+2,H+2,H+3,H+4,H+3,H+5,H+4)}const g=new _e;g.setAttribute("position",new Kt(h,3)),g.setAttribute("normal",new Kt(u,3)),g.setAttribute("uv",new Kt(d,2)),g.setIndex(f);const _=new te(g,n);return _.castShadow=!1,_.receiveShadow=!1,i.add(_),_}function Me(i,t,e,n=0,s=0,r=0){const o=new te(i,t);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,e.add(o),o}function In(i,t,e,n,s,r,o,a){const c=Me(new li(1,32,24),t,i,e,n,s);return c.scale.set(r,o,a),c}function po(i){const t=new li(1,48,32),e=t.getAttribute("position");for(let n=0;n<e.count;n++){const s=i(e.getX(n),e.getY(n),e.getZ(n));e.setXYZ(n,s.x,s.y,s.z)}return t.computeVertexNormals(),t}const rh=i=>.565*(1+.13*Math.exp(-(((i+.25)/.34)**2))-.12*Math.max(i,0));function Vg(i,t){const e=(t-.08)/.365;return .355*Math.sqrt(Math.max(0,1-e*e-(i/rh(e))**2))+.02*Math.max(0,1-e*e)}function mo(i,t,e,n){const s=ni.isClockWise(i)?[...i].reverse():i,r=[],o=[],a=10,c=s.length;for(let h=0;h<=a;h++){const u=h/a;for(const d of s){const f=Be.lerp(t.x,d.x,u),g=Be.lerp(t.y,d.y,u);r.push(f,g,e(f,g,u))}}for(let h=0;h<a;h++)for(let u=0;u<c;u++){const d=h*c+u,f=h*c+(u+1)%c,g=d+c,_=f+c;o.push(d,g,f,f,g,_)}const l=new _e;return l.setAttribute("position",new Kt(r,3)),l.setIndex(o),l.computeVertexNormals(),l}function ur(i,t,e=36,n=10){const s=i.computeFrenetFrames(e,!1),r=[],o=[];for(let c=0;c<=e;c++){const l=i.getPointAt(c/e),h=t(c/e);for(let u=0;u<=n;u++){const d=u/n*Math.PI*2,f=l.clone().addScaledVector(s.normals[c],Math.cos(d)*h).addScaledVector(s.binormals[c],Math.sin(d)*h);r.push(f.x,f.y,f.z)}}for(let c=0;c<e;c++)for(let l=0;l<n;l++){const h=c*(n+1)+l,u=h+n+1;o.push(h,h+1,u,h+1,u+1,u)}const a=new _e;return a.setAttribute("position",new Kt(r,3)),a.setIndex(o),a.computeVertexNormals(),a}function go(i,t,e,n){const s=new ii(e.map(r=>new R(...r)));return Me(ur(s,r=>n*Math.sin(Math.PI*(.08+.84*r)),24,7),t,i)}function cc(i,t=[]){i.updateWorldMatrix(!0,!0);const e=i.matrixWorld.clone().invert(),n=new Map;i.traverse(s=>{if(!(s instanceof te)||Array.isArray(s.material))return;for(let o=s;o&&o!==i;o=o.parent)if(t.includes(o))return;const r=n.get(s.material)||[];r.push(s),n.set(s.material,r)});for(const[s,r]of n){if(r.length<2)continue;const o=r.map(c=>{const l=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();return l.applyMatrix4(e.clone().multiply(c.matrixWorld)),l.getAttribute("uv")||l.setAttribute("uv",new Kt(new Float32Array(l.getAttribute("position").count*2),2)),l}),a=ih(o,!1);o.forEach(c=>c.dispose()),a&&(r.forEach(c=>{c.removeFromParent(),c.geometry.dispose()}),Me(a,s,i))}}function Gg(){const i=new ue,t=new ue,e=new ue,n=new ue,s=[],r=zg(),o=r.material(),a=r.material(1),c=r.material(2),l=r.material(4),h=new Pe({color:525831,roughness:1}),u=new Pe({color:14929843,roughness:.55}),d=new aa({color:12222774,metalness:.84,roughness:.32,clearcoat:.14}),f=new Pe({color:11377536,roughness:.95}),g=Me(po((x,M,P)=>new R(x*.46*(1-.19*M),M*.59,P*.36)),o,i,0,.69,-.065);for(const x of[-1,1]){In(i,o,x*.34,.37,-.1,.275,.36,.31),In(i,o,x*.43,.102,.115,.185,.105,.2);const M=new ii([new R(x*.28,1.01,.25),new R(x*.255,.74,.3),new R(x*.225,.43,.345),new R(x*.22,.18,.38)]);Me(ur(M,I=>.11+.022*Math.sin(Math.PI*I),32,24),o,i);const P=Me(po((I,B,H)=>new R(I*.176,B*.109,H*.2+(H>0?.01*Math.cos(I*10):0))),o,i,x*.22,.11,.405);P.rotation.y=-x*.06;for(const I of[-.056,.054])go(i,h,[[x*.22+I,.077,.59],[x*.22+I,.128,.594],[x*.22+I,.179,.555]],.0027)}t.position.set(.08,1.61,.025),i.add(t),Me(po((x,M,P)=>{let I=P*.355+(P>0?.02*(1-M*M):0);return P>0&&(I-=.27*Be.smoothstep(-M,.2,.65)*(1-Be.smoothstep(Math.abs(x),.48,.78))),new R(x*rh(M),M*.365+.08,I)}),a,t);for(const x of[-1,1]){const M=new On;M.moveTo(-.185,0),M.bezierCurveTo(-.205,.15,-.13,.3,x*.14-.045,.465),M.quadraticCurveTo(x*.14,.505,x*.14+.04,.455),M.bezierCurveTo(.21,.27,.205,.08,.17,0),M.quadraticCurveTo(0,-.035,-.185,0);const P=M.getPoints(16),I=new ht(0,.17),B=new ue;B.position.set(x*.37,.22,-.035),t.add(B);const H=mo(P,I,(it,rt,ft)=>.058-.073*(1-ft*ft)-.075*rt),z=mo(P,I,(it,rt,ft)=>.005-.086*(1-ft*ft)-.075*rt);z.setIndex(Array.from(z.getIndex().array).reverse()),z.computeVertexNormals(),Me(H,a,B),Me(z,a,B);const G=[],Y=[];P.forEach((it,rt)=>{G.push(it.x,it.y,.058-.075*it.y,it.x,it.y,.005-.075*it.y);const ft=rt*2,Dt=(rt+1)%P.length*2;Y.push(ft,Dt,ft+1,Dt,Dt+1,ft+1)});const k=new _e;k.setAttribute("position",new Kt(G,3)),k.setIndex(Y),k.computeVertexNormals(),Me(k,a,B)}for(const[x,M]of[[-.228,.13],[.191,.122]]){const P=new ue;P.position.set(x,M,0),t.add(P),s.push(P);const I=Math.sign(x),B=Array.from({length:48},(H,z)=>{const G=z/48*Math.PI*2;return new ht(Math.cos(G)*.13,Math.sin(G)*(Math.sin(G)>0?.031:.068)+I*Math.cos(G)*.13*.13)});Me(mo(B,new ht,(H,z,G)=>Vg(x+H,M+z)+.003+.014*(1-G*G)),r.material(5),P)}for(const x of[-1,1])In(t,a,x*.1,-.081,.395,.143,.095,.113);In(t,h,0,-.166,.338,.254,.125,.094);const _=new On;_.moveTo(-.053,.02),_.quadraticCurveTo(-.071,-.009,-.013,-.044),_.quadraticCurveTo(0,-.054,.013,-.044),_.quadraticCurveTo(.071,-.009,.053,.02),_.quadraticCurveTo(0,.035,-.053,.02),Me(new Bn(_,{depth:.025,bevelEnabled:!0,bevelSize:.009,bevelThickness:.009,bevelSegments:4,curveSegments:12}),new aa({color:10179905,roughness:.5,clearcoat:.15}),t,0,.01,.536);for(const x of[-.027,.027])In(t,h,x,.001,.565,.008,.006,.003);e.position.set(0,-.115,.315),t.add(e),In(e,c,0,-.09,.093,.253,.107,.117),In(e,new Pe({color:8736078,roughness:.85}),0,-.033,.121,.096,.016,.057);const m=new ii([new R(.107,-.088,.481),new R(.111,-.126,.488),new R(.094,-.164,.482)]);Me(ur(m,x=>.018*(1-x)**.8+5e-4,16,12),u,t);for(const x of[-1,1])for(let M=0;M<3;M++)go(t,f,[[x*.16,-.07-M*.026,.503],[x*.39,-.047-M*.042,.453],[x*.72,-.017-M*.073,.34]],.0023);const p=Me(new br(.292,.31,.118,48,1,!0),r.material(3),i,.018,1.256,.004);p.scale.z=.79,p.rotation.z=-.045;for(const x of[1.204,1.309]){const M=Me(new bn(.303,.006,5,48),new Pe({color:5776670,roughness:.91}),i,.018,x,.003);M.rotation.x=Math.PI/2,M.scale.y=.79}const E=Me(new bn(.026,.008,8,24),d,i,.025,1.212,.341);E.rotation.x=.1;const y=Me(new li(.101,40,28),d,i,.025,1.097,.427);y.scale.y=1.035;const v=Me(new bn(.098,.006,6,40),d,i,.025,1.112,.427);v.rotation.x=Math.PI/2,In(i,h,.025,1.092,.527,.017,.021,.003),go(i,h,[[.025,1.089,.529],[.025,1.064,.527],[.025,1.031,.505]],.004),n.position.set(.4,.15,-.245),i.add(n);const A=new ii([new R(0,0,0),new R(.4,.13,-.1),new R(.535,.53,-.09),new R(.39,.87,-.04),new R(.165,.94,.02)]);Me(ur(A,x=>(.118+.047*Math.sin(Math.PI*x))*Math.sqrt(Math.min(1,(1-x)*12)),48,16),l,n),cc(t,[e,...s]),cc(i,[t,e,g,n,...s]);const w=Hg(),C=x=>{const M=r.material(x,!0);return M.alphaMap=w,M.alphaTest=.23,M},L=(x,M)=>{const P=[];return x.children.forEach(I=>{I instanceof te&&I.material===M&&P.push(I)}),P};return as(t,L(t,a),1700,C(1),3917,!0),as(e,L(e,c),250,C(2),2871),as(g,[g],700,C(0),8729),as(i,L(i,o),1200,C(0),5021),as(n,L(n,l),500,C(4),8143),kg(i),i.traverse(x=>{x instanceof te&&(x.receiveShadow=!1)}),{root:i,head:t,jaw:e,belly:g,tail:n,eyes:s,ready:r.ready,blink:x=>{r.blink.value=x},mouth:new R(0,-.115,.52),asset:r.atlas}}const nr=Be.clamp;class Wg{constructor(t){Et(this,"renderer");Et(this,"scene",new zc);Et(this,"camera",new Ue(46,1,.1,50));Et(this,"target",new R(0,1.45,-.3));Et(this,"view","forge");Et(this,"sword",new ue);Et(this,"hammer",new ue);Et(this,"cat",new ue);Et(this,"head",new ue);Et(this,"jaw",new ue);Et(this,"belly");Et(this,"tail");Et(this,"catEyes",[]);Et(this,"catBlink",()=>{});Et(this,"catMouth",new R(0,-.115,.52));Et(this,"bladeMat",new Pe({color:11914449,metalness:.82,roughness:.3}));Et(this,"furnaceLight",new cr(16740390,20,8,2));Et(this,"board");Et(this,"boardFrame",new ue);Et(this,"boardCanvas",document.createElement("canvas"));Et(this,"lastBoard","");Et(this,"state",null);Et(this,"hitStart",-10);Et(this,"hitResult","success");Et(this,"hitImpact",!1);Et(this,"tributeStart",-10);Et(this,"tributeElapsed",0);Et(this,"tributeDone",null);Et(this,"tributeCount",3);Et(this,"rewards",[]);Et(this,"fx",[]);Et(this,"flames",[]);Et(this,"raf",0);Et(this,"prev",0);Et(this,"renderAt",0);Et(this,"gpuFrame",null);Et(this,"submittedTribute",0);Et(this,"renderedTribute",0);Et(this,"paused",!1);Et(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)").matches);Et(this,"observer");Et(this,"scratch",new R);Et(this,"surfaces");Et(this,"forgeMaterials");Et(this,"roomKey");Et(this,"roomFill");Et(this,"roomAmbient");Et(this,"forgeKey");Et(this,"uprightOak");Et(this,"forgeSwordY",1.5);Et(this,"forgeProofPending",!0);Et(this,"fitCamera",new Ue(46,1,.1,50));Et(this,"lastForgeOffset",-1);Et(this,"pendingForgeProof",null);Et(this,"pendingCatProof",null);Et(this,"onVisibility",()=>{this.paused=document.hidden,this.paused||(this.prev=0,this.raf=requestAnimationFrame(this.tick))});Et(this,"stageAbort",new AbortController);Et(this,"tick",t=>{var d,f,g,_;if(this.paused)return;const e=t/1e3,n=this.prev?Math.min(.2,e-this.prev):.016;this.prev=e;const s=this.cameraPose();this.camera.fov=Be.lerp(this.camera.fov,s.fov,1-Math.exp(-n*5)),this.camera.setViewOffset(this.host.clientWidth,this.host.clientHeight,0,this.host.clientHeight*s.offset,this.host.clientWidth,this.host.clientHeight),this.camera.position.lerp(s.position,1-Math.exp(-n*5)),this.target.lerp(s.target,1-Math.exp(-n*5)),this.camera.lookAt(this.target);const r=new R(0,2.855,-2.77).project(this.camera),a=!(this.view==="forge"&&this.camera.aspect<.8&&(((f=(d=this.state)==null?void 0:d.session)==null?void 0:f.phase)==="forge"||((_=(g=this.state)==null?void 0:g.session)==null?void 0:_.phase)==="finished"))||(1-r.y)*this.host.clientHeight/2>=90;this.boardFrame.visible!==a&&(this.boardFrame.visible=a,this.forgeProofPending=!0,this.renderer.shadowMap.needsUpdate=!0),this.furnaceLight.intensity=20+Math.sin(e*11)*1.5+Math.sin(e*23)*1.2,this.flames.forEach((m,p)=>{m.scale.y=m.userData.height*(.9+Math.sin(e*7+p*4)*.12),m.rotation.y=e+p});const c=e-this.hitStart,l=c>=0&&c<.55?Math.sin(c/.55*Math.PI):0;this.hammer.rotation.z=-.3+l*1.65,this.hammer.position.set(1.25-l*.13,1.65,-.38+l*.6),c>=.24&&c<.55&&!this.hitImpact&&(this.hitImpact=!0,this.spawnSparks(22,new R(.05,this.forgeSwordY+.06,.2))),c<.2&&this.hitResult!=="break"&&(this.sword.position.y=this.forgeSwordY+Math.sin(c/.2*Math.PI)*.035),(c<.6||this.tributeDone)&&(this.renderer.shadowMap.needsUpdate=!0),this.tributeDone||(this.cat.rotation.y=Math.sin(e*.35)*.06,this.head.rotation.z=Math.sin(e*.8)*.02,this.jaw.rotation.x=0,this.belly.scale.set(1,1+Math.sin(e*2)*.012,1));const h=e%6.7,u=this.tributeDone?1:h<.19?Math.max(.08,Math.abs(h-.095)/.095):1;if(this.catEyes.forEach(m=>m.scale.y=u),this.catBlink(u),this.tail.rotation.z=Math.sin(e*1.5)*(this.tributeDone?.1:.045),this.tributeDone){this.tributeElapsed+=n,this.tributeElapsed>=1.7&&this.renderedTribute<.55?this.tributeElapsed=1.69:this.tributeElapsed>=3&&this.renderedTribute<1.7?this.tributeElapsed=2.99:this.tributeElapsed>=4.1&&this.renderedTribute<3?this.tributeElapsed=4.09:this.tributeElapsed>=6.5&&this.renderedTribute<4.1&&(this.tributeElapsed=6.49);const m=this.tributeElapsed;if(m<1.7){this.cat.rotation.y=0,this.jaw.rotation.x=.75;const p=nr((m-.55)/1.15,0,1),E=this.head.localToWorld(this.catMouth.clone());this.sword.visible=!0,this.sword.position.set(E.x,E.y,E.z+(1-p)*2.42*1.05),this.sword.rotation.set(0,Math.PI/2,0),this.sword.scale.set(1.05*(1-p*.96),1.05,1.05)}else if(m<3)this.stage("chewing","猫咪张嘴吞下巨剑……咔嚓咔嚓"),this.sword.visible=!1,this.jaw.rotation.x=Math.abs(Math.sin(m*14))*.45,this.belly.scale.set(1,1,1+Math.sin((m-1.7)/1.3*Math.PI)*.28);else if(m<4.1)this.stage("turning","猫咪转过身，尾巴翘了起来……"),this.cat.rotation.y=-nr((m-3)/1.1,0,1)*Math.PI*.8,this.jaw.rotation.x=0;else if(m<6.5){this.stage("ejecting","噗！猫咪拉出 "+this.tributeCount+" 把铁剑，掉进接剑盘");const p=Math.min(this.tributeCount,Math.floor((m-4.1)/.32)+1);for(;this.rewards.length<p;){const E=this.makeSword();E.scale.setScalar(.35),this.scene.add(E),this.rewards.push(E),this.spawnSparks(7,new R(3.4,1.35,-.2))}this.rewards.forEach((E,y)=>{const v=nr((m-4.1-y*.32)/.65,0,1);E.position.set(3.4+(y-(this.tributeCount-1)/2)*.22*v,1.53+Math.sin(v*Math.PI)*.55-v*.35,-.25+v*.65),E.rotation.set(v*.12,v*.8+y*.5,v*Math.PI*.04)})}else{this.stage("complete","纳贡完成 · 获得 "+this.tributeCount+" 把铁剑"),this.sword.visible=!1,this.cat.rotation.y=0,this.jaw.rotation.x=0,this.belly.scale.set(1,1,1);const p=this.tributeDone;this.tributeDone=null,this.stageAbort.abort(),this.stageAbort=new AbortController,p()}}for(let m=this.fx.length-1;m>=0;m--){const p=this.fx[m];p.life-=n,p.v.y-=n*8,p.mesh.position.addScaledVector(p.v,n),p.mesh.scale.setScalar(Math.max(.01,p.life)),p.life<=0&&(this.scene.remove(p.mesh),p.mesh.geometry.dispose(),p.mesh.material.dispose(),this.fx.splice(m,1))}if(t-this.renderAt>=1e3/30){const m=this.renderer.getContext();this.gpuFrame&&m.clientWaitSync(this.gpuFrame,0,0)!==m.TIMEOUT_EXPIRED&&(m.deleteSync(this.gpuFrame),this.gpuFrame=null,this.renderedTribute=this.submittedTribute,this.pendingForgeProof&&(this.host.dataset.forgeProof=this.pendingForgeProof,this.pendingForgeProof=null),this.pendingCatProof&&(this.host.dataset.catProof=this.pendingCatProof,this.pendingCatProof=null)),this.gpuFrame||(this.renderAt=t,this.renderer.render(this.scene,this.camera),this.submittedTribute=this.tributeDone?this.tributeElapsed:0,this.gpuFrame=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0),m.flush(),this.host.dataset.renderCalls=String(this.renderer.info.render.calls),this.host.dataset.renderTriangles=String(this.renderer.info.render.triangles),this.view==="forge"&&this.forgeProofPending&&this.sword.visible&&c>=.55&&this.camera.position.distanceTo(s.position)<.015&&Math.abs(this.camera.fov-s.fov)<.02&&this.recordForgeVisibility(),this.view==="cat"&&this.camera.position.distanceTo(s.position)<.03&&this.recordCatVisibility())}this.raf=requestAnimationFrame(this.tick)});this.host=t,this.renderer=new Lg({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(1512207),this.renderer.outputColorSpace=Te,this.renderer.toneMapping=Mc,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xc,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.domElement.setAttribute("aria-label","3D锻造工坊：铁砧、熔炉、邪恶猫咪与遗物柜"),t.appendChild(this.renderer.domElement),this.surfaces=new Ig(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.forgeMaterials=Bg(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.bladeMat.dispose(),this.bladeMat=this.surfaces.get("steel").clone(),this.uprightOak=this.surfaces.get("oak",9).clone();for(const c of["map","bumpMap","roughnessMap"]){const l=this.uprightOak[c].clone();l.center.set(.5,.5),l.rotation=Math.PI/2,this.uprightOak[c]=l}const e=new Dg,n=new ca(this.renderer);this.scene.environment=n.fromScene(e,.04).texture,this.scene.environmentIntensity=.72,e.dispose(),n.dispose(),this.scene.fog=new Ra(1643535,.028),this.roomAmbient=new Hf(12241884,3547932,.38),this.scene.add(this.roomAmbient);const s=this.roomKey=new qf(16768956,1.45);s.position.set(-3,7,4),s.castShadow=!0,s.shadow.mapSize.set(1536,1536),Object.assign(s.shadow.camera,{left:-6,right:7,top:6,bottom:-4}),s.shadow.bias=-4e-4,s.shadow.normalBias=.018,this.scene.add(s);const r=this.roomFill=new cr(11786479,4,12);r.position.set(4,4,3),this.scene.add(r);const o=this.forgeKey=new Gf(16768951,38,9,.52,.68,2);o.position.set(-.7,5.1,2.35),o.target.position.set(.1,1.25,.1),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.bias=-3e-4,o.shadow.normalBias=.014,this.scene.add(o,o.target),this.furnaceLight.position.set(-3.15,1.45,-1.2),this.scene.add(this.furnaceLight),this.buildRoom(),this.buildForge(),this.buildCat(),this.buildRelics(),this.sword=this.makeSword(),this.scene.add(this.sword),this.batchStaticGeometry(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.resize();const a=this.cameraPose();this.target.copy(a.target),this.camera.position.copy(a.position),this.camera.fov=a.fov,this.camera.updateProjectionMatrix(),this.camera.lookAt(this.target),document.addEventListener("visibilitychange",this.onVisibility),this.raf=requestAnimationFrame(this.tick),t.dataset.ready="true"}material(t,e=0,n=.85){return new Pe({color:t,metalness:e,roughness:n})}mesh(t,e,n,s=0,r=0,o=0){const a=new te(t,e);return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}box(t,e,n,s,r,o=0,a=0,c=0){return this.mesh(oc(t,e,n),s,r,o,a,c)}contact(t,e,n,s,r,o,a=.45){const c=document.createElement("canvas");c.width=c.height=128;const l=c.getContext("2d"),h=l.createRadialGradient(64,64,10,64,64,64);h.addColorStop(0,"rgba(8,5,3,.9)"),h.addColorStop(.55,"rgba(8,5,3,.45)"),h.addColorStop(1,"rgba(8,5,3,0)"),l.fillStyle=h,l.fillRect(0,0,128,128);const u=new te(new Wi(r,o),new Qn({map:new Vi(c),transparent:!0,opacity:a,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));u.rotation.x=-Math.PI/2,u.position.set(e,n,s),t.add(u)}sphere(t,e,n,s,r,o,a,c){const l=this.mesh(new li(1,24,16),a,c,t,e,n);return l.scale.set(s,r,o),l}cylinder(t,e,n,s,r,o,a,c,l=16){return this.mesh(new br(t,e,n,l),s,r,o,a,c)}batchStaticGeometry(){this.scene.updateMatrixWorld(!0);const t=new Map;this.scene.traverse(e=>{if(!(e instanceof te)||e instanceof lr||Array.isArray(e.material)||e.material.transparent)return;for(let r=e;r;r=r.parent)if(r===this.cat||r===this.hammer||r===this.sword||r===this.boardFrame)return;const n=[e.material.id,e.castShadow,e.receiveShadow].join(":"),s=t.get(n)||[];s.push(e),t.set(n,s)});for(const e of t.values()){if(e.length<2)continue;const n=e.map(o=>{const a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();return a.applyMatrix4(o.matrixWorld),a}),s=ih(n,!1);if(n.forEach(o=>o.dispose()),!s)continue;const r=new te(s,e[0].material);r.castShadow=e[0].castShadow,r.receiveShadow=e[0].receiveShadow,e.forEach(o=>{o.removeFromParent(),o.geometry.dispose()}),s.computeBoundingSphere(),this.scene.add(r)}}buildRoom(){const t=this.surfaces.get("oak",9),e=this.surfaces.get("stone",14).clone();e.color.set(7827043),e.map=e.map.clone(),e.map.repeat.set(9,9),this.box(15,.15,12,e,this.scene,0,-.1,0);const n=this.material(2893087);this.box(15,6,.35,n,this.scene,0,2.8,-3.4);const s=this.surfaces.get("stone",7),r=new lr(oc(.94,.47,.31,.028),s,192);let o=0;const a=new ie;for(let h=0;h<12;h++)for(let u=0;u<16;u++)a.makeTranslation(-7.4+u*.98+h%2*.47,.12+h*.5,-3.15),r.setMatrixAt(o,a),r.setColorAt(o,new qt().setHSL(.078,.1,.53+Math.sin(o*12.3)*.07)),o++;r.receiveShadow=!0,this.scene.add(r);for(const h of[-6,-2.2,2.2,6])this.box(.23,6,.3,this.uprightOak,this.scene,h,2.9,-2.9),this.box(.3,.3,6,t,this.scene,h,5.5,-.7);this.box(14,.25,.35,t,this.scene,0,4.95,-2.85);const c=this.material(2564638);for(let h=0;h<11;h++)this.box(.016,.006,11,c,this.scene,-7+h*1.4,-.018,0);for(let h=0;h<9;h++)this.box(15,.006,.016,c,this.scene,0,-.018,-5+h*1.4);const l=new ue;l.position.set(-4.5,1.65,-2.9),this.scene.add(l),this.box(1.2,.11,.12,t,l,0,.65,0),this.box(1.2,.11,.12,t,l,0,-.5,0);for(let h=0;h<3;h++){const u=this.makeSword();u.scale.setScalar(.4),u.rotation.z=Math.PI/2,u.position.set(-.4+h*.4,0,.14),l.add(u)}}makeBench(t,e,n,s,r=!1){const o=new ue;o.position.set(n,0,s),this.scene.add(o);const a=r?this.forgeMaterials.wood[0]:this.surfaces.get("oak",2),c=r?this.forgeMaterials.casting:this.surfaces.get("iron"),l=this.material(r?7760215:9340788,.76,.48),h=t/2-.28,u=e/2-.22;for(let f=0;f<5;f++)this.box(t,.26,e/5-.013,r?this.forgeMaterials.wood[f]:this.surfaces.get("oak",2+f%2),o,0,.94,-e/2+e/5*(f+.5));const d=this.surfaces.get("endgrain");for(const f of[-1,1])this.box(.014,.238,e-.025,d,o,f*(t/2+.003),.94,0);for(const f of[-h,h])for(const g of[-u,u]){this.box(.31,.83,.31,this.uprightOak,o,f,.415,g),this.box(.33,.12,.33,c,o,f,.12,g),this.box(.34,.27,.035,c,o,f,.76,g+Math.sign(g)*.17);for(const _ of[.68,.84])this.sphere(f,_,g+Math.sign(g)*.193,.025,.025,.015,l,o)}for(const f of[-u,u]){this.box(t-.38,.21,.16,a,o,0,.66,f),this.box(t-.5,.15,.17,a,o,0,.26,f);for(const g of[-1,1]){const _=this.box(.17,.7,.17,this.uprightOak,o,g*(h-.19),.48,f);_.rotation.z=g*-.55}}for(const f of[-h,h])this.box(.17,.15,e-.28,a,o,f,.26,0);for(const f of[-1,1]){this.box(t-.1,.095,.042,c,o,0,.865,f*(e/2+.021));for(let g=0;g<7;g++)this.sphere(-t/2+.19+g*(t-.38)/6,.865,f*(e/2+.048),.023,.023,.014,l,o)}return this.contact(o,0,-.016,0,t+.5,e+.65,.52),o}buildForge(){const t=this.forgeMaterials.wood[1],e=this.forgeMaterials.casting,n=this.forgeMaterials.face,s=this.material(2107952,.7,.57),r=this.material(10849108,.74,.4),o=this.makeBench(3.7,1.75,0,.2,!0);o.scale.y=.8,this.contact(o,0,1.073,-.1,2.4,1.43,.65);const a=new ue;a.position.set(0,.91,.1),a.scale.set(1.1,.6,1.34),a.name="forged-anvil",this.scene.add(a),this.box(1.67,.056,1.1,s,a,0,-.03,0),this.mesh(Ug(),e,a),this.mesh(Ng(),this.forgeMaterials.edge,a),this.mesh(ac(.14,.675),e,a).scale.set(1.16,1,1.09),this.mesh(ac(.115,.815),[n,this.forgeMaterials.edge],a).scale.set(1.16,1,1.09);for(const m of[-.57,.57])for(const p of[-.36,.36])this.box(.38,.13,.26,e,a,m,.045,p),this.box(.11,.03,.16,this.forgeMaterials.edge,a,m,.12,p),this.cylinder(.038,.038,.027,this.forgeMaterials.hammer,a,m,.144,p,6);this.box(.115,.02,.115,s,a,.62*1.16,.76,-.17*1.09),this.cylinder(.033,.033,.02,s,a,.81*1.16,.76,.17*1.09,16);const h=new On;h.moveTo(-.11,.08),h.lineTo(-.08,.14),h.lineTo(-.02,.1),h.quadraticCurveTo(0,.12,.02,.1),h.lineTo(.08,.14),h.lineTo(.11,.08),h.quadraticCurveTo(.14,-.1,0,-.13),h.quadraticCurveTo(-.14,-.1,-.11,.08);const u=new Bn(h,{depth:.009,bevelEnabled:!0,bevelSize:.004,bevelThickness:.003,bevelSegments:2});this.mesh(u,this.material(7956554,.65,.62),a,0,.51,.262).scale.setScalar(.65);for(const m of[-.026,.026])this.sphere(m,.52,.275,.009,.006,.004,s,a);const f=new ue;f.position.set(1.25,1.65,-.38),f.rotation.z=-.3,this.scene.add(f),this.hammer=f,this.cylinder(.062,.079,1.34,t,f,0,.28,0,24),this.mesh(Fg(),[this.forgeMaterials.hammer,this.forgeMaterials.edge],f,0,1.1,0);const g=this.box(.15,.026,.14,this.forgeMaterials.casting,f,0,1.331,0);g.rotation.y=.12,this.box(.035,.016,.105,this.forgeMaterials.edge,f,.018,1.349,0),this.cylinder(.078,.086,.52,this.surfaces.get("leather"),f,0,-.13,0,24);for(let m=0;m<9;m++){const p=this.mesh(new bn(.083,.011,6,24),this.surfaces.get("leather"),f,0,.1-m*.055,0);p.rotation.x=Math.PI/2}for(const m of[.16,-.41])this.cylinder(.088,.088,.045,r,f,0,m,0,24);this.boardCanvas.width=1536,this.boardCanvas.height=768,this.board=new Vi(this.boardCanvas),this.board.colorSpace=Te,this.board.anisotropy=4;const _=this.boardFrame;_.position.set(0,2.1,-2.91),this.scene.add(_),this.box(2.93,1.51,.12,t,_),this.mesh(new Wi(2.78,1.38),new Qn({map:this.board}),_,0,0,.071);for(const m of[-1.41,1.41])this.box(.065,1.4,.07,s,_,m,0,.095);for(const m of[-.7,.7])this.box(2.87,.065,.07,s,_,0,m,.095);for(const m of[-1.4,1.4])for(const p of[-.69,.69])this.sphere(m,p,.14,.024,.024,.014,r,_);this.buildFurnace(),this.buildForgeProps(o)}buildFurnace(){const t=this.surfaces.get("iron"),e=this.surfaces.get("stone",7),n=this.material(2169365),s=new Pe({color:3612697,emissive:16731146,emissiveIntensity:1.7,roughness:1}),r=new ue;r.position.set(-3.15,0,-1.72),this.scene.add(r),this.box(1.64,1.07,1.25,n,r,0,.55,0);for(let l=0;l<3;l++)for(let h=0;h<3;h++)this.box(.54,.34,.08,e,r,-.55+h*.55,.2+l*.35,.665);this.box(1.37,1.22,.3,n,r,0,1.69,-.39);for(const l of[-.74,.74])for(let h=0;h<4;h++)this.box(.29,.34,1.16,e,r,l,1.27+h*.35,0);for(let l=0;l<11;l++){const h=l/11*Math.PI+.025,u=(l+1)/11*Math.PI-.025,d=new On;d.moveTo(Math.cos(h)*.61,2.06+Math.sin(h)*.61),d.lineTo(Math.cos(h)*.92,2.06+Math.sin(h)*.92),d.absarc(0,2.06,.92,h,u,!1),d.lineTo(Math.cos(u)*.61,2.06+Math.sin(u)*.61),d.absarc(0,2.06,.61,u,h,!0),d.closePath();const f=new Bn(d,{depth:1.14,bevelEnabled:!0,bevelSize:.013,bevelThickness:.012,bevelSegments:2,curveSegments:5});f.translate(0,0,-.57),this.mesh(f,e,r)}this.box(1.79,.11,1.58,t,r,0,1.1,.1),this.box(.9,1.68,.6,e,r,0,3.46,-.3);for(const l of[2.98,3.42,3.86])this.box(.94,.07,.64,t,r,0,l,-.3);const o=Ts(88);for(let l=0;l<14;l++){const h=this.mesh(new La(.15+o()*.07,0),l%3?s:t,r,-.53+l%5*.255,1.23+Math.floor(l/5)*.08,0+o()*.3);h.scale.y=.7,h.rotation.set(o(),o(),o())}const a=this.cylinder(.62,.62,.01,new Qn({color:16737559}),r,0,1.17,.04,32);a.scale.z=.75;for(let l=0;l<7;l++){const h=this.sphere(-.46+l*.15,1.43+Math.sin(l)*.06,.05,.055,.22+o()*.1,.055,new Qn({color:l%2?16761691:16747045,transparent:!0,opacity:.8}),r);h.castShadow=!1,h.userData.height=h.scale.y,this.flames.push(h)}for(let l=0;l<6;l++)this.cylinder(.023,.023,.5,t,r,-.57+l*.23,1.39,.65,10);const c=this.cylinder(.034,.034,1.42,t,r,0,1.28,.675,12);c.rotation.z=Math.PI/2,this.contact(r,0,-.016,.05,2.3,1.9,.65)}buildForgeProps(t){const e=this.surfaces.get("oak",2),n=this.surfaces.get("iron"),s=this.surfaces.get("steel"),r=new ue;r.position.set(-2.1,0,1.13),this.scene.add(r);for(let f=0;f<18;f++){const g=f/18*Math.PI*2,_=this.box(.145,.67,.075,e,r,Math.sin(g)*.435,.35,Math.cos(g)*.435);_.rotation.y=g,_.rotation.z=.035*Math.sin(g)}for(const f of[.12,.55,.68]){const g=this.mesh(new bn(.448,.023,6,40),n,r,0,f,0);g.rotation.x=Math.PI/2}this.cylinder(.414,.414,.016,new Pe({color:2641493,metalness:.25,roughness:.17}),r,0,.59,0,40);for(const f of[-1,1])this.sphere(f*.452,.58,0,.033,.034,.034,s,r);const o=new ii([new R(-.45,.58,0),new R(-.42,.89,0),new R(0,1.06,0),new R(.42,.89,0),new R(.45,.58,0)]);this.mesh(new xr(o,24,.014,6,!1),n,r),this.contact(r,0,-.016,0,1.15,1.15,.65);const a=new ue;t.add(a),a.position.set(-1.25,1.1,.1),a.rotation.y=-.38;for(const f of[-1,1]){const g=new ii([new R(f*.08,0,.37),new R(f*.045,.016,0),new R(f*.1,.022,-.2),new R(f*.13,.018,-.32)]);this.mesh(new xr(g,16,.018,6,!1),n,a)}this.cylinder(.029,.029,.02,s,a,0,.033,.03,12);const c=this.box(.065,.055,.35,s,t,1.43,1.1,.49);c.rotation.y=.5;const l=Ts(12),h=this.material(2435370,.35,.85),u=new lr(new Fa(.022),h,22),d=new ie;for(let f=0;f<22;f++)d.compose(new R((l()-.5)*2.3,1.08,l()*.72-.05),new Yi().setFromEuler(new $e(l(),l(),l())),new R(1+l(),.23,1+l())),u.setMatrixAt(f,d);t.add(u)}makeSword(t=!1){const e=new ue,n=t?this.bladeMat:this.surfaces.get("steel").clone(),s=this.material(12163683,.8,.3),r=this.surfaces.get("leather").clone(),o=new Float32Array([0,0,-.29,0,0,.29,0,.065,0,1.95,0,-.29,1.95,0,.29,1.95,.065,0,2.42,0,0]),a=new _e;a.setAttribute("position",new Fe(o,3)),a.setAttribute("uv",new Kt([0,0,0,1,0,.5,.81,0,.81,1,.81,.5,1,.5],2)),a.setIndex([0,2,3,2,5,3,2,1,5,1,4,5,3,5,6,5,4,6,0,3,1,1,3,4]);const c=a.toNonIndexed();c.computeVertexNormals(),a.dispose();const l=this.mesh(c,n,e);l.name="blade";const h=new On;h.moveTo(-.045,-.41),h.quadraticCurveTo(-.18,-.39,-.13,-.28),h.lineTo(-.1,-.08),h.lineTo(-.1,.08),h.lineTo(-.13,.28),h.quadraticCurveTo(-.18,.39,-.045,.41),h.lineTo(.035,.37),h.lineTo(.018,.08),h.lineTo(.018,-.08),h.lineTo(.035,-.37),h.closePath();const u=new Bn(h,{depth:.12,bevelEnabled:!0,bevelSize:.016,bevelThickness:.016,bevelSegments:3,curveSegments:10});u.rotateX(-Math.PI/2),this.mesh(u,s,e,-.06,-.02,0);const d=this.cylinder(.062,.062,.56,r,e,-.38,.04,0);d.rotation.z=Math.PI/2;for(let f=0;f<9;f++){const g=this.mesh(new bn(.064,.007,5,20),r,e,-.16-f*.054,.04,0);g.rotation.y=Math.PI/2}for(const f of[-.12,-.66]){const g=this.cylinder(.072,.072,.03,s,e,f,.04,0,24);g.rotation.z=Math.PI/2}return this.sphere(-.71,.04,0,.1,.085,.085,s,e),this.sphere(-.72,.108,0,.035,.017,.035,this.material(4352625,.4,.23),e),e}buildCat(){const t=Gg();this.cat=t.root,this.head=t.head,this.jaw=t.jaw,this.belly=t.belly,this.tail=t.tail,this.catEyes=t.eyes,this.catBlink=t.blink,this.catMouth.copy(t.mouth),this.cat.position.set(3.4,1.05,-1.32),this.scene.add(this.cat),this.host.dataset.catAsset="loading",t.ready.then(()=>{this.host.dataset.catAsset="ready",this.host.dataset.catAtlasSize=`${t.asset.image.width}x${t.asset.image.height}`,this.renderer.shadowMap.needsUpdate=!0}).catch(()=>{this.host.dataset.catAsset="failed"});const e=this.makeBench(2.55,1.8,3.4,-1.35);this.contact(e,0,1.075,0,1.85,1.5,.65),this.box(2.4,.12,.65,this.material(5858407,.7,.36),this.scene,3.4,1.12,.36)}buildRelics(){const t=new ue;t.position.set(5.75,0,-2.02),this.scene.add(t);const e=this.surfaces.get("oak",9),n=this.material(10058059,.65,.4);this.box(2,3.3,.65,e,t,0,1.65,0),this.box(1.8,2.6,.05,this.material(1321514),t,0,1.85,.36),this.contact(t,0,-.016,.15,2.65,1.5,.6);for(let r=0;r<3;r++){const o=1.1+r*.72;this.box(1.9,.08,.85,n,t,0,o-.2,.1);const a=r===0?new bn(.2,.055,10,24):r===1?new Na(.23):new Ua(.23,0);this.mesh(a,new Pe({color:[15185234,8837320,10191065][r],metalness:.6,roughness:.25,emissive:[7557900,1195825,3416658][r],emissiveIntensity:.35}),t,0,o,.53)}for(const r of[-.93,.93])this.box(.065,3.2,.07,n,t,r,1.7,.4);const s=new cr(11917241,7,4);s.position.set(0,3,.8),t.add(s)}resize(){const t=this.host.clientWidth,e=this.host.clientHeight;!t||!e||(this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5,Math.sqrt(75e4/(t*e)))),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.forgeProofPending=!0)}cameraPose(){var e,n,s,r;const t=this.camera.aspect<.8;if(this.view==="forge"){const o=new R(t?0:.35,t?6.4:5.6,t?9:6.4),a=new R(t?0:.35,2.05,-.3);let c=t?.2:.17;if(t){const l=(n=(e=this.host.closest(".game"))==null?void 0:e.querySelector(".station-nav"))==null?void 0:n.getBoundingClientRect(),h=this.host.getBoundingClientRect();if(l&&l.top>h.top+160){this.fitCamera.aspect=this.camera.aspect,this.fitCamera.updateProjectionMatrix(),this.fitCamera.position.copy(o),this.fitCamera.lookAt(a),this.fitCamera.updateMatrixWorld(!0);const u=new R(0,this.forgeSwordY-.03,.61).project(this.fitCamera);c=Math.max(c,((1-u.y)*h.height/2-(l.top-h.top-22))/h.height)}}return Math.abs(c-this.lastForgeOffset)>5e-4&&(this.lastForgeOffset=c,this.forgeProofPending=!0),{position:o,target:a,offset:c,fov:t?46:40}}if(this.view==="cat"){const o=new R(3.4,2.95,t?6.35:5.2),a=new R(3.4,1.86,-1.3);let c=t?.13:.085;if(t){const l=this.host.getBoundingClientRect(),h=(r=(s=this.host.closest(".game"))==null?void 0:s.querySelector(".station-nav"))==null?void 0:r.getBoundingClientRect();if(h&&h.top>l.top+260){const u=new wn().setFromObject(this.cat),d=h.top-l.top-22,f=96,g=d-f;this.fitCamera.aspect=this.camera.aspect,this.fitCamera.fov=46,this.fitCamera.clearViewOffset();for(let _=0;_<3;_++){this.fitCamera.position.copy(o),this.fitCamera.lookAt(a),this.fitCamera.updateProjectionMatrix(),this.fitCamera.updateMatrixWorld(!0);const m=[];for(const v of[u.min.x,u.max.x])for(const A of[u.min.y,u.max.y])for(const w of[u.min.z,u.max.z]){const C=new R(v,A,w).project(this.fitCamera);m.push((1-C.y)*l.height/2)}const p=Math.min(...m),E=Math.max(...m),y=E-p;if(y>g-4){o.z=a.z+(o.z-a.z)*y/(g-4);continue}c=nr(c,(E-d)/l.height,(p-f)/l.height);break}}}return{position:o,target:a,offset:c,fov:46}}return{position:new R(5.75,2.8,t?5.1:3.5),target:new R(5.75,1.95,-2),offset:.13,fov:46}}setStation(t){this.view=t,this.host.dataset.station=t,this.forgeProofPending=!0;const e=t==="forge";this.roomKey.intensity=e?1.45:2.7,this.roomFill.intensity=e?4:11,this.roomAmbient.intensity=e?.38:.65,this.forgeKey.intensity=e?38:0,this.scene.environmentIntensity=e?.72:1,this.renderer.shadowMap.needsUpdate=!0}recordCatVisibility(){var a,c;const t=new wn().setFromObject(this.cat),e=[];for(const l of[t.min.x,t.max.x])for(const h of[t.min.y,t.max.y])for(const u of[t.min.z,t.max.z])e.push(new R(l,h,u).project(this.camera));const n=this.host.clientWidth,s=this.host.clientHeight,r=this.head.localToWorld(this.catMouth.clone()),o=(c=(a=this.host.closest(".game"))==null?void 0:a.querySelector(".station-nav"))==null?void 0:c.getBoundingClientRect();this.pendingCatProof=JSON.stringify({phase:this.tributeDone?this.host.dataset.tribute:"idle",navTop:o?o.top-this.host.getBoundingClientRect().top:s,elapsed:this.tributeElapsed,jawAngle:this.jaw.rotation.x,bodyDepth:this.belly.scale.z,turn:this.cat.rotation.y,mouth:r.toArray(),bounds:{left:Math.min(...e.map(l=>(l.x+1)*n/2)),right:Math.max(...e.map(l=>(l.x+1)*n/2)),top:Math.min(...e.map(l=>(1-l.y)*s/2)),bottom:Math.max(...e.map(l=>(1-l.y)*s/2))}})}recordForgeVisibility(){var u,d,f,g;const t=this.host.clientWidth,e=this.host.clientHeight,n=(_,m,p)=>this.sword.localToWorld(new R(_,m,p)),s=_=>(_.project(this.camera),{x:(_.x+1)*t/2,y:(1-_.y)*e/2}),r=[n(-.82,.04,0),n(0,0,-.43),n(0,0,.43),n(1.95,0,-.29),n(1.95,0,.29),n(2.42,0,0)].map(s),o=s(n(1,0,.29)),a=s(n(1,0,-.29));let c=0;for(const _ of[.45,1.2,1.85])for(const m of[-.13,.13]){const p=n(_,.065*(1-Math.abs(m)/.29),m),E=p.clone().sub(this.camera.position),v=new Jf(this.camera.position,E.clone().normalize(),0,E.length()+.025).intersectObjects(this.scene.children,!0).find(A=>{var C;return A.object instanceof te?!(Array.isArray(A.object.material)?A.object.material[((C=A.face)==null?void 0:C.materialIndex)??0]:A.object.material).transparent:!1});(v==null?void 0:v.object.parent)===this.sword&&v.object.name==="blade"&&c++}const l=(((d=(u=this.host.closest(".game"))==null?void 0:u.querySelector(".station-nav"))==null?void 0:d.getBoundingClientRect().top)||0)-this.host.getBoundingClientRect().top,h=s(new R(0,2.855,-2.77)).y;this.pendingForgeProof=JSON.stringify({phase:((g=(f=this.state)==null?void 0:f.session)==null?void 0:g.phase)||"idle",navTop:l,boardVisible:this.boardFrame.visible,boardTop:h,bounds:{left:Math.min(...r.map(_=>_.x)),right:Math.max(...r.map(_=>_.x)),top:Math.min(...r.map(_=>_.y)),bottom:Math.max(...r.map(_=>_.y))},faceHeight:Math.abs(o.y-a.y),visibleSamples:c,totalSamples:6}),this.forgeProofPending=!1}sync(t,e){this.state=t;const n=t.session;if(this.tributeDone)return;this.sword.visible=(n==null?void 0:n.phase)!=="broken";const s=(n==null?void 0:n.level)||0,r=(n==null?void 0:n.blade)||"great",o=r==="short"?.72:r==="great"?1:.9;this.sword.scale.setScalar(o),this.sword.position.set(-.805*o,this.forgeSwordY,.11),this.sword.rotation.set(0,-.09,0),this.forgeProofPending=!0,this.sword.traverse(a=>{a instanceof te&&a.name==="blade"&&(a.material=this.bladeMat)}),this.bladeMat.color.set((n==null?void 0:n.material)==="bronze"?14004595:(n==null?void 0:n.material)==="cold"?10411499:12371913),this.bladeMat.emissive.set((n==null?void 0:n.phase)==="heat"?16015894:s>=8?2711664:0),this.bladeMat.emissiveIntensity=(n==null?void 0:n.phase)==="heat"?.55:s>=8?.3:0,this.drawBoard(t,e)}drawBoard(t,e){const n=t.session,s=e||{success:1e4,damage:0,break:0},r=[n==null?void 0:n.level,n==null?void 0:n.hits,n==null?void 0:n.phase,s.success,s.damage,s.break].join(",");if(r===this.lastBoard)return;this.lastBoard=r;const o=this.boardCanvas.getContext("2d");o.setTransform(1.5,0,0,1.5,0,0);const a=o.createLinearGradient(0,0,1024,512);a.addColorStop(0,"#342a22"),a.addColorStop(1,"#211d19"),o.fillStyle=a,o.fillRect(0,0,1024,512),o.strokeStyle="#7c6748",o.lineWidth=2,o.strokeRect(18,18,988,476),o.strokeStyle="#504530",o.lineWidth=1,o.strokeRect(26,26,972,460),o.fillStyle="#e9d0a4",o.font="bold 52px sans-serif",o.fillText("神兵锻造台",52,86),o.textAlign="right",o.font="bold 72px sans-serif",o.fillStyle="#f3dfb3",o.fillText("+"+((n==null?void 0:n.level)||0),968,96),o.textAlign="left",o.fillStyle="#b0a08c",o.font="27px sans-serif",o.fillText("邪恶猫咪的铸剑工坊",52,145);const c=["#9ed3bf","#e8bf77","#dc8774"],l=["成功","受损","断剑"],h=[s.success,s.damage,s.break];for(let u=0;u<3;u++){const d=52+u*315;o.fillStyle=c[u],o.fillRect(d,195,278,4),o.font="bold 33px sans-serif",o.fillText(l[u],d,249),o.font="bold 57px sans-serif",o.fillText((h[u]/100).toFixed(0)+"%",d,318)}for(let u=0;u<6;u++)o.fillStyle=u<((n==null?void 0:n.hits)||0)?"#ffcb7b":"#554b3d",o.fillRect(54+u*73,374,50,26);o.fillStyle="#c7b598",o.font="26px sans-serif",o.fillText(((n==null?void 0:n.hits)||0)+" / 6 次锻击",530,398),o.font="24px sans-serif",o.fillText((n==null?void 0:n.phase)==="forge"?"看准时机，落锤锻造":"铁剑入炉 · 神兵出砧",54,461),this.board.needsUpdate=!0}strike(t){this.hitStart=performance.now()/1e3,this.hitResult=t,this.hitImpact=!1}spawnSparks(t,e){if(!this.reduced)for(let n=0;n<t&&this.fx.length<50;n++){const s=this.mesh(new li(.025,4,3),new Qn({color:n%2?16761944:16773037}),this.scene);s.position.copy(e),this.fx.push({mesh:s,v:new R((Math.random()-.5)*4,1+Math.random()*3,(Math.random()-.5)*3),life:.5+Math.random()*.3})}}async tribute(t,e){if(this.tributeDone)throw new Error("猫咪还在吃剑");return this.setStation("cat"),this.tributeCount=t,this.tributeStart=performance.now()/1e3,this.tributeElapsed=0,this.host.dataset.tribute="offering",this.submittedTribute=0,this.renderedTribute=0,e("邪恶猫咪：把巨剑交出来，喵！"),new Promise(n=>{this.tributeDone=n,this.host.addEventListener("tribute-stage",(s=>e(s.detail)),{signal:this.stageAbort.signal})})}stage(t,e){this.host.dataset.tribute!==t&&(this.host.dataset.tribute=t,this.host.dispatchEvent(new CustomEvent("tribute-stage",{detail:e})))}clearRewards(){for(const t of this.rewards)this.scene.remove(t),t.traverse(e=>{e instanceof te&&(e.geometry.dispose(),e.material.dispose())});this.rewards=[],this.host.dataset.tribute=""}destroy(){var t;cancelAnimationFrame(this.raf),this.gpuFrame&&this.renderer.getContext().deleteSync(this.gpuFrame),document.removeEventListener("visibilitychange",this.onVisibility),this.stageAbort.abort(),this.observer.disconnect(),this.scene.traverse(e=>{if(e instanceof te){e.geometry.dispose();const n=Array.isArray(e.material)?e.material:[e.material];for(const s of n){for(const r of Object.values(s))r instanceof be&&r.dispose();s.dispose()}}}),(t=this.scene.environment)==null||t.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const Ha="yichuichengshenbing.v1";let ua;try{ua=JSON.parse(localStorage.getItem(Ha)||"null")}catch{ua=null}const Wt=new bh(i=>localStorage.setItem(Ha,JSON.stringify(i)),ua),q=i=>document.getElementById(i);let fe=null;try{fe=new Wg(q("scene3d"))}catch(i){q("scene-error").hidden=!1,console.error(i)}let si="forge",un=!1,fa=0;function Va(i){un||(si=i,fe==null||fe.setStation(i),zn())}const Xg=["choose","heat","forge","quench","finished","broken"];let Un="safe",Ui=performance.now(),Xi=!1,da=0,yn=0,fr=null,Cs=0,Sr=!1,Ni="",hc=0,Re=null;function Ke(i=440,t=.12){if(Wt.state.sound)try{const e=window.AudioContext;Re=Re||new e;const n=Re.createOscillator(),s=Re.createGain();n.type="triangle",n.frequency.setValueAtTime(i,Re.currentTime),n.frequency.exponentialRampToValueAtTime(i*.6,Re.currentTime+t),s.gain.setValueAtTime(.055,Re.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,Re.currentTime+t),n.connect(s).connect(Re.destination),n.start(),n.stop(Re.currentTime+t)}catch{}}function rn(i){const t=q("toast");t.textContent=i,t.classList.add("show"),window.clearTimeout(hc),hc=window.setTimeout(()=>t.classList.remove("show"),2400)}function ze(i){try{i(),zn()}catch(t){rn(t instanceof Error?t.message:String(t))}}function en(i){return i.toLocaleString("zh-CN")}function qg(){var i;return((i=Wt.state.session)==null?void 0:i.phase)||"choose"}function Yg(i){for(const t of Xg)q(t).hidden=t!==i||si!=="forge";q("cat-panel").hidden=si!=="cat",q("relic-panel").hidden=si!=="relics"}function Jg(){const i=q("material"),t=i.value;i.innerHTML=Object.entries(we).filter(([,e])=>e.unlock<=Wt.state.furnaceLevel).map(([e,n])=>'<option value="'+e+'">'+n.name+" · "+(n.blank+n.fuel)+" 金</option>").join(""),t&&i.querySelector('option[value="'+t+'"]')&&(i.value=t)}function Zg(){var s;Jg();const i=q("blade"),t=i.value;i.innerHTML=Object.entries(fc).map(([r,o])=>'<option value="'+r+'">'+o.name+" · "+(o.interval/1e3).toFixed(2)+"秒/击</option>").join(""),t?i.value=t:i.value="great";const e=q("order"),n=e.value;e.innerHTML='<option value="">自由锻造 · 无委托奖金</option>'+dr(Wt.state).map(r=>'<option value="'+r.id+'">'+r.id+" "+r.title+" · "+r.detail+"</option>").join(""),n&&e.querySelector('option[value="'+n+'"]')?e.value=n:e.value=((s=dr(Wt.state)[0])==null?void 0:s.id)||""}function Ar(){Cs=performance.now(),Sr=!1,q("trial-result").classList.remove("unveiled"),q("trial-arena").classList.remove("done")}function zn(){var n,s;const i=Wt.state,t=i.session,e=qg();if(Yg(e),document.querySelector(".game").dataset.phase=e,$g(),fe==null||fe.sync(i),q("iron-blanks").textContent=String(i.ironBlanks),q("coin").textContent=en(i.coins),q("scrap").textContent=en(i.scraps),q("rep").textContent=en(i.rep),q("made").textContent=en(i.totalMade),q("workshop-level").textContent="猫咪的工坊 · 炉火 Lv"+i.furnaceLevel,q("sound").textContent=i.sound?"🔊":"🔇",q("nav-upgrades").textContent="升级锻锤 "+(i.hammerLevel>=2?"已满级":"500 金"),q("nav-upgrades").toggleAttribute("disabled",!!t||i.hammerLevel>=2||i.coins<500),q("nav-furnace").textContent="升级熔炉 "+(i.furnaceLevel>=3?"已满级":i.furnaceLevel===1?"800 金":"1800 金"),q("nav-furnace").toggleAttribute("disabled",!!t||i.furnaceLevel>=3||i.coins<(i.furnaceLevel===1?800:1800)),q("nav-anvil").textContent="升级铁砧 "+(i.anvilLevel>=2?"已满级":"1100 金"),q("nav-anvil").toggleAttribute("disabled",!!t||i.anvilLevel>=2||i.coins<1100),q("nav-collection").textContent="剑谱 "+i.swords.length+" · 展柜 "+i.caseIds.length+"/"+Wt.caseCapacity(),q("foot-hint").textContent=t?"当前 "+(t.apprentice?"学徒代工":"正式锻造")+" · 已锤 "+t.hits+"/6":"巨剑纳贡 · 铁剑再锻 · 遗物成长",!t){Zg();const r=Wt.needsApprentice();q("apprentice").hidden=!r;const o=we[q("material").value]||we.iron;q("cost-label").textContent=i.formalCount===0?"首次教学免费 · 胚料与燃料由工坊提供":i.ironBlanks>0&&o===we.iron?"使用库存铁剑 · 只需 "+o.fuel+" 金燃料":"胚料 "+o.blank+" + 燃料 "+o.fuel+" · 残料可抵胚料",q("begin").toggleAttribute("disabled",i.formalCount>0&&r),uc(0),pa();return}if(uc(t.level,t.material),e==="heat"&&(q("heating-order").textContent=t.orderId&&((n=ps.find(r=>r.id===t.orderId))==null?void 0:n.title)||"自由锻造",q("heat-fill").style.width=yn+"%",q("heat-text").textContent=Math.round(yn)+"%"),e==="forge"){q("forge-level").textContent="Lv"+t.level,q("hit-count").textContent=t.hits+"/6",q("safe-count").textContent=3-t.safeUsed+" / 3",q("safe").toggleAttribute("disabled",t.safeUsed>=3),q("protection").textContent=t.protection?t.protectedUsed?"护符已消耗":"🛡️ 本把首次断剑会改为受损":"无护符保护",q("heat-tag").textContent=t.goodHeat?"🔥 好火候 · 品质+0.03":"普通火候",q("forge-quality").textContent="Q "+(.9+(t.goodHeat?.03:0)+t.perfect*.03).toFixed(2),q("value-now").textContent="参考价值 "+en(Math.round(100*we[t.material].value*Math.pow(1.24,t.level)*(.9+(t.goodHeat?.03:0)+t.perfect*.03)))+" 金",Un==="safe"&&t.safeUsed>=3&&(Un="precise");for(const o of["safe","precise","bold"])q(o).classList.toggle("active",o===Un);q("style-label").textContent=Un==="safe"?"稳锻 · 必定提升1级":Un==="precise"?"精锻 · 成功+2 / 受损-1":"豪锻 · 成功+4 / 受损-2",q("result").textContent=Ni;const r=e==="forge"?"点击击打，在光圈对齐中心时获得完美判定":"";q("forge-tip").textContent=r}if(e==="quench"){q("quench-level").textContent="Lv"+t.level,q("quench-alert").textContent="把剑往下拖，停在蓝色目标带可精准淬火（品质+0.02）";const r=q("mark"),o=r.value,a=dc(i).filter(c=>!t.apprentice||c==="none");r.innerHTML=a.map(c=>'<option value="'+c+'">'+Za[c].name+" · "+Za[c].detail+"</option>").join(""),r.value=o&&a.includes(o)?o:"none"}if(e==="finished"&&t.sword){const r=t.sword;q("finished-level").textContent="Lv"+r.level,q("finished-quality").textContent="Q "+r.quality.toFixed(2),q("finished-attack").textContent=en(r.attack),q("finished-value").textContent=en(r.value),q("finished-sell").textContent=en(Math.floor(r.value*.7)),q("finished-order").textContent=vo(t.orderId,r)?en(Math.floor(r.value*1.2)+(((s=ps.find(o=>o.id===t.orderId))==null?void 0:s.bonus)||0)):"未达标",q("deliver").toggleAttribute("disabled",!vo(t.orderId,r)&&!t.apprentice),q("collect").toggleAttribute("disabled",t.apprentice||i.caseIds.length>=Wt.caseCapacity()),q("sell").toggleAttribute("disabled",t.apprentice),t.apprentice?q("deliver").textContent=t.hits>=2?"代工交付 · 固定60金币":"练习完成 · 0金币":q("deliver").textContent="交付委托",q("trial-result").innerHTML="木桩："+(r.trial.wood.killed?"已斩断":"未击断")+" · "+(r.trial.wood.killMs!==null?(r.trial.wood.killMs/1e3).toFixed(2)+"s":"—")+"<br>甲盾："+(r.trial.shield.armorBreakMs!==null?"已破甲":"未破甲")+" · "+r.trial.shieldGrade+"级<br>魔偶："+en(r.trial.dummy.damage)+" 伤害<br>试剑总评："+r.trial.grade+"（"+r.trial.score+"/100）",Cs||Ar()}e==="broken"&&(q("broken-scrap").textContent=t.apprentice?"学徒练习不损失材料":"已回收绑定残料 "+Math.floor(we[t.material].blank*.4)),pa()}function uc(i,t){q("sword-level-tag").textContent="剑胚 · Lv"+i}function oh(i){const t=Wt.state.session;if((t==null?void 0:t.phase)==="forge"){const e=((i-Ui)%1500+1500)%1500,n=.27+Math.abs(750-e)/750*.77;q("timing-ring").style.transform="translate(-50%,-50%) scale("+n.toFixed(3)+")";const s=ma(i-Ui,Wt.state.hammerLevel),r=_c(Wt.state,Un,t.level,s);fe==null||fe.sync(Wt.state,r),q("timing-indicator").textContent=s==="perfect"?"✦ 完美":s==="normal"?"普通":"偏离",q("timing-indicator").className="timing "+s,q("probability").textContent="成功 "+(r.success/100).toFixed(0)+"% · 受损 "+(r.damage/100).toFixed(0)+"% · 断剑 "+(r.break/100).toFixed(0)+"%",q("strike").toggleAttribute("disabled",t.hits>=6||i<fa),q("ring-progress").style.width=Math.round(e/1500*100)+"%"}if(Xi&&(t==null?void 0:t.phase)==="heat"&&(yn=Math.min(100,yn+Math.min(50,Math.max(0,i-da))/22),da=i,q("heat-fill").style.width=yn+"%",q("heat-text").textContent=Math.round(yn)+"%",yn>=100&&(Xi=!1,ze(()=>Wt.heat(100)))),(t==null?void 0:t.phase)==="finished"&&!Sr){const e=i-Cs,n=Math.min(1,e/8500);q("trial-progress").style.width=Math.round(n*100)+"%";const s=Math.min(2,Math.floor(n*3)),r=Math.min(1,n*3-s),o=["🪵","🛡️","👹"],a=["木桩 · 斩断测试","甲盾 · 破甲测试","训练魔偶 · 伤害测试"];q("trial-target").textContent=o[s],q("trial-stage-label").textContent=a[s]+" · 独立10秒",q("trial-arena").setAttribute("data-phase",String(s)),q("trial-hp").style.width=Math.round(r*100)+"%",n>=1&&(Sr=!0,q("trial-result").classList.add("unveiled"),q("trial-arena").classList.add("done"))}requestAnimationFrame(oh)}function Kg(){const i=Wt.state.session;if((i==null?void 0:i.phase)!=="forge"||performance.now()<fa||un)return;ma(performance.now()-Ui,Wt.state.hammerLevel);const t=i.id+":hit:"+i.hits;ze(()=>{const e=Wt.strikeAt(Un,performance.now()-Ui,t);fa=performance.now()+550,fe==null||fe.strike(e.result),e.result==="success"?(Ni="✦ 锻造成功 Lv"+e.after,Ke(540+e.after*36,.22),void 0):e.result==="damage"?(Ni=e.protected?"🛡️ 护符挡住断剑 · Lv"+e.after:"⚡ 锻造受损 Lv"+e.after,Ke(215,.28),void 0):(Ni="💥 宝剑断裂",Ke(145,.4),void 0),Ui=performance.now()})}function ah(i=!1){ze(()=>{const t=q("order").value||null;fe==null||fe.clearRewards(),Wt.start(q("material").value,q("blade").value,t,i),Ni="",yn=0,Cs=0,Ke(300)})}q("begin").addEventListener("click",()=>ah(!1));q("apprentice").addEventListener("click",()=>ah(!0));for(const i of["safe","precise","bold"])q(i).addEventListener("click",()=>{Un=i,zn()});q("strike").addEventListener("pointerdown",i=>{i.preventDefault(),Kg()});q("cashout").addEventListener("click",()=>ze(()=>{Wt.cashout(),Ke(660)}));q("heat-button").addEventListener("pointerdown",i=>{i.preventDefault(),Xi=!0,da=performance.now(),i.currentTarget.setPointerCapture(i.pointerId)});function lh(){Xi&&(Xi=!1,ze(()=>{Wt.heat(yn),Ke(440,.25)}))}q("heat-button").addEventListener("pointerup",lh);q("heat-button").addEventListener("pointercancel",lh);q("quench-area").addEventListener("pointerdown",i=>{fr=i.clientY,q("quench-area").setPointerCapture(i.pointerId)});q("quench-area").addEventListener("pointerup",i=>{if(fr===null)return;const t=i.clientY-fr;if(fr=null,t<70){rn("请把宝剑往下拖动至少 70px");return}const e=q("quench-area").getBoundingClientRect(),n=(i.clientY-e.top)/e.height,s=n>=.68&&n<=.87;ze(()=>{Wt.quench(s,q("mark").value||"none"),Ke(s?840:510,.3),Ar()})});q("quench-quick").addEventListener("click",()=>ze(()=>{Wt.quench(!1,q("mark").value||"none"),Ar()}));q("skip-trial").addEventListener("click",()=>{Sr=!0,q("trial-progress").style.width="100%",q("trial-result").classList.add("unveiled"),q("trial-arena").classList.add("done"),q("trial-stage-label").textContent="三靶试剑完成",q("trial-hp").style.width="100%"});for(const[i,t]of[["sell","SOLD"],["deliver","DELIVERED"],["collect","COLLECTED"]])q(i).addEventListener("click",()=>ze(()=>{const e=Wt.dispose(t);rn(e>0?"获得金币 +"+en(e):"神兵已收入剑谱"),Cs=0,Ke(700,.25)}));q("broken-next").addEventListener("click",()=>ze(()=>{Wt.closeBroken(),Ni=""}));q("nav-upgrades").addEventListener("click",()=>ze(()=>{Wt.upgrade("hammer"),rn("锻锤升到 Lv2，完美时机窗扩大")}));q("nav-furnace").addEventListener("click",()=>ze(()=>{Wt.upgrade("furnace"),rn("熔炉升级，解锁新材料")}));q("nav-anvil").addEventListener("click",()=>ze(()=>{Wt.upgrade("anvil"),rn("铁砧升级，可安装已解锁铭文")}));q("nav-collection").addEventListener("click",()=>{const i=Wt.state.swords.filter(e=>e.disposal==="COLLECTED"),t=Wt.state.swords.slice(-8).map(e=>"Lv"+e.level+" "+we[e.material].name+" · "+e.value+"金 · "+e.disposal).join(`
`);if(i.length){const e=i.map((s,r)=>r+1+". Lv"+s.level+" "+we[s.material].name+"（售价 "+Math.floor(s.value*.7)+" 金）").join(`
`),n=prompt(`剑谱：最近八把
`+(t||"暂无记录")+`

展柜中的剑（输入序号出售，取消则关闭）：
`+e);if(n!==null&&n.trim()!==""){const s=Number(n)-1;if(!Number.isInteger(s)||s<0||s>=i.length){rn("请输入正确的展柜序号");return}ze(()=>{const r=Wt.sellCollected(i[s].id);rn("收藏神兵售出 +"+r+" 金")})}}else alert(`神兵剑谱 · 最近八把
`+(t||"尚无成剑记录"))});q("sound").addEventListener("click",()=>{Wt.state.sound=!Wt.state.sound,localStorage.setItem(Ha,JSON.stringify(Wt.state)),zn()});document.addEventListener("visibilitychange",()=>{document.hidden?(Xi=!1,Re==null||Re.suspend()):(Re==null||Re.resume(),Ui=performance.now())});for(const i of["material","blade","order"])q(i).addEventListener("change",()=>{if(!Wt.state.session){const t=we[q("material").value]||we.iron;q("cost-label").textContent=Wt.state.formalCount===0?"首次教学免费 · 胚料与燃料由工坊提供":Wt.state.ironBlanks>0&&t===we.iron?"使用库存铁剑 · 只需 "+t.fuel+" 金燃料":"胚料 "+t.blank+" + 燃料 "+t.fuel+" · 残料可抵胚料"}});function $g(){const i=Wt.state,t=i.session,e=t==null?void 0:t.sword;for(const r of["forge","cat","relics"])q("station-"+r).classList.toggle("active",si===r);q("scene-name").textContent=si==="forge"?"神兵锻造台":si==="cat"?"邪恶猫咪的纳贡台":"遗物交换柜",q("cat-demand-label").textContent="巨剑 Lv"+ir(i)+"+",q("cat-count").textContent="已纳贡 "+i.catTributes+" 次";const n=(t==null?void 0:t.phase)==="finished"&&!t.apprentice&&(e==null?void 0:e.blade)==="great"&&e.level>=ir(i);q("tribute").toggleAttribute("disabled",un||!n),q("offer-cat").toggleAttribute("disabled",un||!n),q("tribute").textContent=un?"猫咪正在吃剑……":n?"上交巨剑 · 换取 "+(3+Math.min(2,Math.floor(e.level/4)))+" 把铁剑":"需要一把 Lv"+ir(i)+"+ 的巨剑",q("cat-offer-info").textContent=n?"Lv"+e.level+" 巨剑已就绪，猫咪正在盯着你的剑。":e&&e.blade!=="great"?"猫咪只吃巨剑，下次选「大剑」进行锻造。":"选择「大剑」，达到要求后淬火，再把巨剑交给猫咪。";const s=q("relic-list");s.replaceChildren();for(const r of gc){const o=document.createElement("div");o.className="relic-row";const a=document.createElement("span");a.className="relic-icon "+r.id,a.textContent=r.id==="guard"?"◈":r.id==="ember"?"◆":"♧";const c=document.createElement("div"),l=document.createElement("b"),h=document.createElement("small");l.textContent=r.name,h.textContent=r.detail,c.append(l,h);const u=document.createElement("button");u.className="secondary",u.textContent=i.relics.includes(r.id)?"已拥有":r.cost+" 铁剑",u.disabled=!!t||i.relics.includes(r.id)||i.ironBlanks<r.cost||un,u.addEventListener("click",()=>ze(()=>{Wt.buyRelic(r.id),rn("获得 "+r.name),Ke(820,.25)})),o.append(a,c,u),s.append(o)}}for(const i of["forge","cat","relics"])q("station-"+i).addEventListener("click",()=>Va(i));q("offer-cat").addEventListener("click",()=>Va("cat"));q("cat-back").addEventListener("click",()=>{fe==null||fe.clearRewards(),q("cat-back").hidden=!0,q("tribute-reward").textContent="",q("cat-speech").textContent="「交出你的巨剑！本大爷饿了，喵。」",Va("forge")});q("tribute").addEventListener("click",async()=>{if(!un){if(!fe){rn("3D场景尚未就绪，请刷新后重试");return}try{un=!0;const i=Wt.tribute();zn();for(const t of["station-forge","station-cat","station-relics"])q(t).toggleAttribute("disabled",!0);Ke(120,.3),await fe.tribute(i.blanks,t=>{q("cat-speech").textContent=t,t.startsWith("噗")&&Ke(90,.25)}),un=!1,q("tribute-reward").textContent="获得 "+i.blanks+" 把铁剑 · 已收入剑架",q("cat-back").hidden=!1;for(const t of["station-forge","station-cat","station-relics"])q(t).removeAttribute("disabled");zn(),Ke(740,.3)}catch(i){un=!1,rn(i instanceof Error?i.message:String(i)),zn()}}});function pa(){const i=document.querySelector(".control:not([hidden])");i&&document.querySelector(".game").style.setProperty("--panel-height",i.getBoundingClientRect().height+"px")}const jg=new ResizeObserver(pa);for(const i of document.querySelectorAll(".control"))jg.observe(i);window.addEventListener("pagehide",()=>fe==null?void 0:fe.destroy(),{once:!0});const _o=Wt.state.session;(_o==null?void 0:_o.phase)==="finished"&&Ar();zn();requestAnimationFrame(oh);
