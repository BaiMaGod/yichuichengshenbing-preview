var Gh=Object.defineProperty;var Wh=(i,e,t)=>e in i?Gh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var se=(i,e,t)=>Wh(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Nn={iron:{name:"铁胚",blank:305,fuel:15,value:1,atk:1,unlock:1},bronze:{name:"青铜",blank:417,fuel:15,value:1.35,atk:1.06,unlock:2},cold:{name:"寒铁",blank:652,fuel:20,value:2.1,atk:1.12,unlock:3}},No={straight:["旧铁直剑","青锋剑","柳叶剑","飞燕剑","月牙剑","游龙剑","流云剑","鱼肠长剑","破风剑","逐星剑","白虹剑","霜华剑","斩月剑","惊鸿剑","紫电剑","寒光剑","青莲剑","风雷剑","苍雪剑","孤影剑","陨星剑","龙吟剑","日轮剑","夜魄剑","天罡剑","玄霄剑","流光剑","七曜剑","山河剑","天命剑"],great:["粗铁巨剑","阔刃大剑","狼牙巨剑","断岩剑","裂甲剑","怒涛剑","碎岳剑","破军剑","龙脊剑","战王剑","焚城剑","镇岳剑","熔岩剑","狂狮剑","撼地剑","斩龙剑","狱火剑","山崩剑","巨灵剑","泰坦剑","苍穹剑","灾厄剑","天罚剑","破晓剑","灭世剑","星陨巨刃","赤霄重剑","霸皇剑","不朽神锋","开天剑"],short:["旧铁短剑","匕首剑","燕尾短剑","蝶翼剑","灵蛇剑","双牙剑","夜鸦剑","流萤剑","月影剑","疾风剑","玄狐剑","隐星剑","血月剑","幽兰剑","鬼影剑","千刃剑","夜雨剑","碎光剑","幻影剑","夜魇剑","星屑剑","极影剑","影舞剑","天刺剑","瞬光剑","虚空剑","流星剑","无相剑","绝影剑","天隐剑"]},gl=["","曜纹·","星陨·","太古·"],vl=[0,3,6,9,12,15,25,29,40,55,70,85],Xh=["开天剑","两仪神锋","太初圣刃","寰宇巨剑","永恒天刃"],qh=["初铸","铭锋","刻星","淬光","鎏纹","凝辉","承天","破界","御极","化曜","玄穹","圣印","万象","天冠","永恒"];function fn(i,e){const t=Ir(Math.floor(Number.isFinite(e)?e:0),0,pn),n=No[i],s=Math.floor(t/n.length),r=t%n.length,o=vl.reduce((h,f,d)=>t>=f?d:h,0),a=vl[o],l=t<40?0:t<55?1:t<70?2:t<85?3:4,c=t<30?n[r]:Xh[l]+"·"+qh[t-a];return{level:t,name:t<30?gl[Math.min(s,gl.length-1)]+c:c,artStage:o,stageStart:a,detail:t-a,ascension:l,silhouette:o,guardStyle:Math.min(5,Math.floor(t/3)),ornament:t,crest:Math.floor(t/12),span:1+Math.min(t,99)*.0027,runeCount:Math.min(t,12),rarity:Math.min(8,Math.floor(t/12))}}Object.keys(No).reduce((i,e)=>i+No[e].length,0);const _l={none:{name:"无铭文",detail:"不附加属性"},flame:{name:"赤焰纹",detail:"剑刃浮现赤焰纹路"},armor_break:{name:"裂金纹",detail:"剑身浮现金色裂纹"},swift:{name:"迅风纹",detail:"剑锋展现轻盈流风"},guard:{name:"守锋纹",detail:"护手亮起守护纹章"},echo:{name:"回响纹",detail:"剑脊流转回响符文"},star:{name:"星芒纹",detail:"纯外观星辉效果"}};function Uc(i){const e=["none"];if(i.anvilLevel<2)return e;for(const[t,n]of[["flame",2],["armor_break",4],["swift",6],["guard",10],["echo",15],["star",20]])i.totalMade>=n&&e.push(t);return e}function Ir(i,e,t){return Math.min(t,Math.max(e,i))}function Vr(i){let e=i>>>0;return e^=e<<13,e^=e>>>17,e^=e<<5,e>>>0}const pn=99,ui=10,Gr=4e3,Yh=.01,xl=1.5,Jh=2;function Nc(i,e=Date.now()){return i.phase==="forge"&&!i.superGod&&kn(i,e)}function Kh(i,e,t=Date.now()){return Nc(i,t)&&e>=0&&e<Yh}function Zh(i,e,t){const n=[[0,0],[3,1290],[5,2970],[10,4670],[20,6300],[30,7200]],s=Ir(e,0,pn);let r=7200;for(let l=1;l<n.length;l++)if(s<=n[l][0]){const[c,h]=n[l-1],[f,d]=n[l];r=Math.round(h+(d-h)*(s-c)/(f-c));break}const o=1e4-r,a={success:Math.floor(o*.65),great:Math.floor(o*.1),unchanged:Math.floor(o*.15),damage:0,break:r};if(a.damage=1e4-a.success-a.great-a.unchanged-a.break,i==="safe"){const l=Math.min(400,a.break);a.break-=l,a.unchanged+=l}if(i==="bold"){const l=Math.min(400,a.success);a.success-=l,a.great+=l}if(t==="perfect"){const l=Math.min(400,a.damage);a.damage-=l,a.success+=l}if(t==="miss"){const l=Math.min(400,a.success);a.success-=l,a.damage+=l}return a}function Fc(i,e=1){const n=(i%1500+1500)%1500,s=Math.abs(n-750),r=e>=2?104:90;return s<=r?"perfect":s<=250?"normal":"miss"}function jh(i,e){let t=0;for(const n of["success","great","unchanged","damage","break"])if(t+=i[n],e<t)return n;return"break"}function Ml(i,e){return Math.round(Ir(.9+(i?.03:0)+e*.03,.9,1.13)*100)/100}function $h(i,e,t,n="none"){return 320*Nn[t].value*Math.pow(1.5,Ir(i,0,pn))*(n==="none"?1:1.05)}function kn(i,e=Date.now()){return i.frenzyUntil>e}function La(i,e="none"){return i.currentValue*(e==="none"?1:1.05)}function Qh(i=20261008){return{version:1,coins:300,scraps:0,formalCount:0,totalMade:0,totalBroken:0,hammerLevel:1,furnaceLevel:1,anvilLevel:1,showCaseLevel:1,caseIds:[],swords:[],session:null,ledger:[],seed:i>>>0||1,sound:!0,ironBlanks:0,catTributes:0,relics:[]}}function forgeFurnaceDurationMs(level){return [9000,8000,7000,6000,5000,4000,3000,2000,1000][Math.max(0,Math.min(8,Math.floor(level||1)-1))]}function forgeFurnaceUpgradeCost(level){return level>=9?null:[800,1800,2800,4000,5500,7500,10000,13000][Math.max(0,Math.floor(level||1)-1)]}const Oc=[{id:"guard",name:"九命护符",cost:2,detail:"每把正式锻造的首次断剑，改为受损"},{id:"ember",name:"余烬晶石",cost:1,detail:"好火候从 55% 起算；满级炉火 100% 恒温"},{id:"lucky",name:"幸运铜铃",cost:2,detail:"最多 3% 断剑概率转为成功"},{id:"salvage",name:"碎剑回收袋",cost:1,detail:"断剑时回收 40% 胚料成本，作为绑定残料"}];function xr(i){return Math.min(8,2+Math.floor(i.catTributes/2))}function Bc(i,e,t,n,s=Date.now()){const r=i.session;if(r!=null&&r.superGod)return{success:5e3,great:5e3,unchanged:0,damage:0,break:0};const o=Zh(e,t,n);if(r!=null&&r.goodHeat){const a=Math.min(200,o.damage),l=Math.floor(a/2);o.damage-=a,o.success+=l,o.great+=a-l}if(i.relics.includes("lucky")){const a=Math.min(o.break,300);o.break-=a,o.success+=a}return r&&(kn(r,s)||r.frenzyCharge>=ui)&&(o.success+=o.break,o.break=0),o}class eu{constructor(e=()=>{},t){se(this,"state");se(this,"persist");var o,a;this.persist=e,this.state=(t==null?void 0:t.version)===1?JSON.parse(JSON.stringify(t)):Qh(),this.state.ironBlanks=Math.max(0,Math.floor(this.state.ironBlanks||0)),this.state.catTributes=Math.max(0,Math.floor(this.state.catTributes||0)),this.state.relics=this.state.relics||[];const oldForgeLv=Math.max(1,Math.floor(this.state.furnaceLevel||1)),oldForgeWasHigh=oldForgeLv>9;this.state.furnaceLevel=Math.min(9,oldForgeLv);if(oldForgeWasHigh&&Array.isArray(this.state.ledger)&&this.state.ledger.includes("upgrade:furnace:9")){this.state.coins+=16500;this.state.ledger=this.state.ledger.filter(id=>id!=="upgrade:furnace:9")}const n=this.state;delete n.rep,delete n.completed;for(const l of[...this.state.swords,...(o=this.state.session)!=null&&o.sword?[this.state.session.sword]:[]]){const c=l;delete c.attack,delete c.intervalMs,delete c.trial,delete c.orderId}this.state.session&&delete this.state.session.orderId;const s=this.state.session,r=!!s&&((s.rulesVersion||0)<3||s.phase==="quench");s&&(s.superGod=s.superGod===!0,s.rulesVersion||(s.currentValue=((a=s.sword)==null?void 0:a.value)??Math.round(100*Nn[s.material].value*Math.pow(1.24,s.level)*Ml(s.goodHeat,s.perfect)),s.frenzyCharge=s.hits%ui,s.frenzyUntil=0,s.rulesVersion=2),s.phase==="quench"&&(s.phase="forge"),(s.rulesVersion||0)<3&&s.phase==="forge"&&s.frenzyCharge>=ui&&(s.frenzyCharge=0,s.frenzyUntil=Date.now()+Gr),s.rulesVersion=3),(r||oldForgeWasHigh)&&this.save()}save(){this.persist(JSON.parse(JSON.stringify(this.state)))}once(e,t){return this.state.ledger.includes(e)?!1:(t(),this.state.ledger.push(e),this.save(),!0)}canAfford(e){const t=Nn[e];return this.state.coins>=t.fuel+(e==="iron"&&this.state.ironBlanks>0?0:Math.max(0,t.blank-this.state.scraps))}needsApprentice(){return this.state.formalCount>0&&!this.canAfford("iron")}start(e="iron",t="straight",n=!1){if(this.state.session)throw new Error("请先完成当前这把剑");if(n&&!this.needsApprentice())throw new Error("材料尚够，不能申请免费代工");if(n&&(e="iron",t="straight"),!n&&(Nn[e].unlock>this.state.furnaceLevel||!(this.state.formalCount===0||this.canAfford(e))))throw new Error("材料尚未解锁或金币不足");const s=Nn[e];let r=0;if(!n){const h=this.state.formalCount===0,f=!h&&e==="iron"&&this.state.ironBlanks>0;f&&this.state.ironBlanks--;const d=h||f?0:Math.min(this.state.scraps,s.blank);this.state.scraps-=d,r=h?0:(f?0:s.blank-d)+s.fuel,this.state.coins-=r,this.state.formalCount++}const o=!n&&this.state.formalCount===1,a=Vr(this.state.seed);this.state.seed=a;const c={id:"forge_"+this.state.totalMade+"_"+this.state.totalBroken+"_"+this.state.formalCount+"_"+a,phase:"heat",blade:t,material:e,apprentice:n,tutorial:o,level:0,hits:0,safeUsed:0,perfect:0,goodHeat:!1,protectedUsed:!1,protection:!n&&(this.state.formalCount<=2||this.state.relics.includes("guard")),strikes:[],paid:r,seed:a,sword:null,currentValue:$h(0,1,e),frenzyCharge:0,frenzyUntil:0,superGod:!1,rulesVersion:3};return this.state.session=c,this.save(),c}heat(e){const t=this.must("heat");t.goodHeat=e>=(this.state.relics.includes("ember")?55:70)&&e<=(this.state.furnaceLevel>=3?100:90),t.phase="forge",this.save()}must(e){const t=this.state.session;if(!t||t.phase!==e)throw new Error("当前操作阶段不正确");return t}strikeAt(e,t,n,s=Date.now()){return this.strike(e,Fc(t,this.state.hammerLevel),n,s)}strike(e,t,n,s=Date.now()){const r=this.state.session;if(!r)throw new Error("尚未开始锻造");const o=r.strikes.find(x=>x.id===n);if(o)return o;const a=this.must("forge");if(a.level>=pn)throw new Error("已达 +99，请收剑");a.frenzyCharge>=ui&&!kn(a,s)&&(a.frenzyUntil=s+Gr,a.frenzyCharge=0);const l=kn(a,s),c=Vr(a.seed);a.seed=c;let h=!1;if(Nc(a,s)){const x=Vr(a.seed);a.seed=x,h=Kh(a,x/4294967296,s),h&&(a.superGod=!0,a.frenzyCharge=0,a.frenzyUntil=0)}const f=Bc(this.state,e,a.level,t,s),d=Math.floor(c/4294967296*1e4),u=jh(f,d),g=u==="break"&&a.protection&&!a.protectedUsed,v=g?"damage":u,m=a.level,p=a.currentValue,y=a.superGod?xl+(Jh-xl)*c/4294967296:v==="great"?2.5:v==="success"?1.5:v==="damage"&&a.level>0?1/1.5:v==="break"?0:1;a.superGod?(a.level=Math.min(pn,a.level+(v==="great"?2:1)),a.currentValue*=y):v==="success"?(a.level++,a.currentValue*=1.5):v==="great"?(a.level=Math.min(pn,a.level+2),a.currentValue*=2.5):v==="damage"&&a.level>0?(a.level--,a.currentValue/=1.5):v==="break"&&(a.currentValue=0),a.hits++,e==="safe"&&a.safeUsed++,t==="perfect"&&a.perfect++,g&&(a.protectedUsed=!0),!a.superGod&&!l&&v!=="break"&&(a.frenzyCharge++,a.frenzyCharge>=ui&&(a.frenzyUntil=s+Gr,a.frenzyCharge=0));const M={id:n,style:e,timing:t,before:m,after:a.level,beforeValue:p,afterValue:a.currentValue,roll:d,shown:f,sampled:u,result:v,protected:g,frenzy:l,superGod:a.superGod,enteredSuperGod:h,valueMultiplier:y};return a.strikes.push(M),v==="break"&&(a.phase="broken",a.frenzyCharge=0,a.frenzyUntil=0,this.state.totalBroken++,this.state.relics.includes("salvage")&&!a.apprentice&&!a.tutorial&&(this.state.scraps+=Math.floor(Nn[a.material].blank*.4))),this.save(),M}cashout(e="none"){const t=this.must("forge");if(!Uc(this.state).includes(e))throw new Error("该铭文尚未解锁或铁砧未升级");if(t.apprentice&&e!=="none")throw new Error("学徒代工不可安装铭文");const n=Ml(t.goodHeat,t.perfect),s=La(t,e),r={id:"sword_"+t.id,material:t.material,blade:t.blade,name:fn(t.blade,t.level).name,level:t.level,quality:n,value:s,mark:e,superGod:t.superGod,disposal:"NEW"};return t.sword=r,t.phase="finished",t.frenzyUntil=0,this.state.totalMade++,this.save(),r}dispose(e){const t=this.must("finished"),n=t.sword;if(n.disposal!=="NEW")throw new Error("此剑已处置");if(t.apprentice&&e!=="DELIVERED")throw new Error("学徒代工不可出售或收藏");if(!t.apprentice&&e==="DELIVERED")throw new Error("普通神兵请出售、收藏或献给猫咪");const s=n.id+":"+e;let r=0;return this.once(s,()=>{if(t.apprentice)t.hits>=2&&(r=60,this.state.coins+=r),n.disposal="DELIVERED";else{if(e==="SOLD")r=Math.floor(n.value*.7),this.state.coins+=r;else{if(this.state.caseIds.length>=this.caseCapacity())throw new Error("展柜已满");this.state.caseIds.push(n.id)}n.disposal=e}this.state.swords.push(JSON.parse(JSON.stringify(n))),this.state.session=null})?r:0}tribute(){const e=this.must("finished"),t=e.sword;if(e.apprentice)throw new Error("代工剑属于工坊，不能拿去纳贡");if(t.blade!=="great")throw new Error("邪恶猫咪只吃巨剑，请锻造大剑");if(t.level<xr(this.state))throw new Error("巨剑等级不足，猫咪还不满意");if(t.disposal!=="NEW")throw new Error("此剑已经上交");const n=3+Math.min(2,Math.floor(t.level/4));return this.once(t.id+":TRIBUTED",()=>{t.disposal="TRIBUTED",this.state.ironBlanks+=n,this.state.catTributes++,this.state.swords.push(JSON.parse(JSON.stringify(t))),this.state.session=null}),{blanks:n,value:t.value,id:t.id}}buyRelic(e){if(this.state.session)throw new Error("完成当前锻造后再交换遗物");const t=Oc.find(n=>n.id===e);if(!t)throw new Error("未知遗物");if(this.state.relics.includes(e))throw new Error("已经拥有这件遗物");if(this.state.ironBlanks<t.cost)throw new Error("铁剑不足，先向邪恶猫咪纳贡");this.once("relic:"+e,()=>{this.state.ironBlanks-=t.cost,this.state.relics.push(e)})}sellCollected(e){const t=this.state.swords.find(r=>r.id===e);if(!t||t.disposal!=="COLLECTED"||!this.state.caseIds.includes(e))throw new Error("该剑不在展柜中");const n=e+":case-sale";let s=0;return this.once(n,()=>{s=Math.floor(t.value*.7),this.state.coins+=s,t.disposal="SOLD",this.state.caseIds=this.state.caseIds.filter(r=>r!==e)}),s}caseCapacity(){return this.state.showCaseLevel>=2?6:3}upgrade(e){if(this.state.session)throw new Error("请完成当前锻造后再升级设备");const t=this.state,n=e==="hammer"?500:e==="anvil"?1100:e==="case"?600:forgeFurnaceUpgradeCost(t.furnaceLevel)??0;if(e==="hammer"&&t.hammerLevel>=2||e==="anvil"&&t.anvilLevel>=2||e==="case"&&t.showCaseLevel>=2||e==="furnace"&&t.furnaceLevel>=9)throw new Error("已经升到当前版本上限");if(t.coins<n)throw new Error("金币不足");const s=e==="hammer"?t.hammerLevel:e==="furnace"?t.furnaceLevel:e==="anvil"?t.anvilLevel:t.showCaseLevel;return this.once("upgrade:"+e+":"+s,()=>{t.coins-=n,e==="hammer"?t.hammerLevel++:e==="furnace"?t.furnaceLevel++:e==="anvil"?t.anvilLevel++:t.showCaseLevel++}),n}closeBroken(){this.must("broken"),this.state.session=null,this.save()}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="180",tu=0,yl=1,nu=2,zc=1,kc=2,Un=3,$n=0,Ht=1,Mn=2,On=0,Hi=1,Fo=2,Sl=3,bl=4,iu=5,ci=100,su=101,ru=102,ou=103,au=104,lu=200,cu=201,hu=202,uu=203,Oo=204,Bo=205,fu=206,du=207,pu=208,mu=209,gu=210,vu=211,_u=212,xu=213,Mu=214,zo=0,ko=1,Ho=2,Xi=3,Vo=4,Go=5,Wo=6,Xo=7,Ia=0,yu=1,Su=2,jn=0,Hc=1,Vc=2,Gc=3,Ua=4,Wc=5,Xc=6,qc=7,Yc=300,qi=301,Yi=302,qo=303,Yo=304,Ur=306,Ji=1e3,fi=1001,Jo=1002,jt=1003,bu=1004,qs=1005,Zt=1006,Wr=1007,Sn=1008,wn=1009,Jc=1010,Kc=1011,Rs=1012,Na=1013,mi=1014,bn=1015,Bn=1016,Fa=1017,Oa=1018,Ps=1020,Zc=35902,jc=35899,$c=1021,Qc=1022,dn=1023,Ls=1026,Ds=1027,Ba=1028,za=1029,eh=1030,ka=1031,Ha=1033,Mr=33776,yr=33777,Sr=33778,br=33779,Ko=35840,Zo=35841,jo=35842,$o=35843,Qo=36196,ea=37492,ta=37496,na=37808,ia=37809,sa=37810,ra=37811,oa=37812,aa=37813,la=37814,ca=37815,ha=37816,ua=37817,fa=37818,da=37819,pa=37820,ma=37821,ga=36492,va=36494,_a=36495,xa=36283,Ma=36284,ya=36285,Sa=36286,Eu=3200,wu=3201,Va=0,Tu=1,Fn="",Ct="srgb",Ki="srgb-linear",Rr="linear",rt="srgb",Si=7680,El=519,Au=512,Cu=513,Ru=514,th=515,Pu=516,Lu=517,Du=518,Iu=519,wl=35044,Tl="300 es",En=2e3,Pr=2001;class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const ws=Math.PI/180,Zi=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Ga(i,e){return(i%e+e)%e}function Uu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Nu(i,e,t){return i!==e?(t-i)/(e-i):0}function Ts(i,e,t){return(1-t)*i+t*e}function Fu(i,e,t,n){return Ts(i,e,1-Math.exp(-t*n))}function Ou(i,e=1){return e-Math.abs(Ga(i,e*2)-e)}function Bu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ku(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hu(i,e){return i+Math.random()*(e-i)}function Vu(i){return i*(.5-Math.random())}function Gu(i){i!==void 0&&(Al=i);let e=Al+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wu(i){return i*ws}function Xu(i){return i*Zi}function qu(i){return(i&i-1)===0&&i!==0}function Yu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ku(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),u=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xt={DEG2RAD:ws,RAD2DEG:Zi,generateUUID:Mi,clamp:je,euclideanModulo:Ga,mapLinear:Uu,inverseLerp:Nu,lerp:Ts,damp:Fu,pingpong:Ou,smoothstep:Bu,smootherstep:zu,randInt:ku,randFloat:Hu,randFloatSpread:Vu,seededRandom:Gu,degToRad:Wu,radToDeg:Xu,isPowerOfTwo:qu,ceilPowerOfTwo:Yu,floorPowerOfTwo:Ju,setQuaternionFromProperEuler:Ku,normalize:Ot,denormalize:zi};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const d=r[o+0],u=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==d||c!==u||h!==g){let m=1-a;const p=l*d+c*u+h*g+f*v,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,p*y);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const x=a*y;if(l=l*m+d*x,c=c*m+u*x,h=h*m+g*x,f=f*m+v*x,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*u-c*d,e[t+1]=l*g+h*d+c*f-a*u,e[t+2]=c*g+h*u+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new T,Cl=new gi;class qe{constructor(e,t,n,s,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],M=s[4],x=s[7],C=s[2],w=s[5],A=s[8];return r[0]=o*v+a*y+l*C,r[3]=o*m+a*M+l*w,r[6]=o*p+a*x+l*A,r[1]=c*v+h*y+f*C,r[4]=c*m+h*M+f*w,r[7]=c*p+h*x+f*A,r[2]=d*v+u*y+g*C,r[5]=d*m+u*M+g*w,r[8]=d*p+u*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,g=t*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=u*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qr.makeScale(e,t)),this}rotate(e){return this.premultiply(qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new qe;function nh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zu(){const i=Is("canvas");return i.style.display="block",i}const Rl={};function Us(i){i in Rl||(Rl[i]=!0,console.warn(i))}function ju(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Pl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $u(){const i={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ki]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}const tt=$u();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class Qu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Is("canvas")),bi.width=e.width,bi.height=e.height;const s=bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ef=0;class Wa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yr(s[o].image)):r.push(Yr(s[o]))}else r=Yr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tf=0;const Jr=new T;class Rt extends rs{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=fi,s=fi,r=Zt,o=Sn,a=dn,l=wn,c=Rt.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Mi(),this.name="",this.source=new Wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Yc;Rt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(u+1)/2,C=(p+1)/2,w=(h+d)/4,A=(f+v)/4,L=(g+m)/4;return M>x&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=A/n):x>C?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=L/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nf extends rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Rt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wa(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends nf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ih extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sf extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ut{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Js.subVectors(this.max,fs),Ei.subVectors(e.a,fs),wi.subVectors(e.b,fs),Ti.subVectors(e.c,fs),Gn.subVectors(wi,Ei),Wn.subVectors(Ti,wi),ti.subVectors(Ei,Ti);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-ti.z,ti.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,ti.z,0,-ti.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-ti.y,ti.x,0];return!Kr(t,Ei,wi,Ti,Js)||(t=[1,0,0,0,1,0,0,0,1],!Kr(t,Ei,wi,Ti,Js))?!1:(Ks.crossVectors(Gn,Wn),t=[Ks.x,Ks.y,Ks.z],Kr(t,Ei,wi,Ti,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new T,new T,new T,new T,new T,new T,new T,new T],ln=new T,Ys=new Ut,Ei=new T,wi=new T,Ti=new T,Gn=new T,Wn=new T,ti=new T,fs=new T,Js=new T,Ks=new T,ni=new T;function Kr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ni.fromArray(i,r);const a=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const rf=new Ut,ds=new T,Zr=new T;class Vs{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(Zr)),this.expandByPoint(ds.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new T,jr=new T,Zs=new T,Xn=new T,$r=new T,js=new T,Qr=new T;class sh{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){jr.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(jr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Zs),a=Xn.dot(this.direction),l=-Xn.dot(Zs),c=Xn.lengthSq(),h=Math.abs(1-o*o);let f,d,u,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const v=1/h;f*=v,d*=v,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(jr).addScaledVector(Zs,d),u}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,s,r){$r.subVectors(t,e),js.subVectors(n,e),Qr.crossVectors($r,js);let o=this.direction.dot(Qr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(js.crossVectors(Xn,js));if(l<0)return null;const c=a*this.direction.dot($r.cross(Xn));if(c<0||l+c>o)return null;const h=-a*Xn.dot(Qr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,o,a,l,c,h,f,d,u,g,v,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,d,u,g,v,m)}set(e,t,n,s,r,o,a,l,c,h,f,d,u,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*h,u=o*f,g=a*h,v=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,u=l*f,g=c*h,v=c*f;t[0]=d+v*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,u=l*f,g=c*h,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,u=o*f,g=a*h,v=a*f;t[0]=l*h,t[4]=g*c-u,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,u=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*f,t[8]=g*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,u=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=o*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(of,e,af)}lookAt(e,t,n){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),qn.crossVectors(n,Yt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),qn.crossVectors(n,Yt)),qn.normalize(),$s.crossVectors(Yt,qn),s[0]=qn.x,s[4]=$s.x,s[8]=Yt.x,s[1]=qn.y,s[5]=$s.y,s[9]=Yt.y,s[2]=qn.z,s[6]=$s.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],M=n[7],x=n[11],C=n[15],w=s[0],A=s[4],L=s[8],_=s[12],S=s[1],P=s[5],I=s[9],O=s[13],V=s[2],F=s[6],U=s[10],G=s[14],z=s[3],te=s[7],W=s[11],X=s[15];return r[0]=o*w+a*S+l*V+c*z,r[4]=o*A+a*P+l*F+c*te,r[8]=o*L+a*I+l*U+c*W,r[12]=o*_+a*O+l*G+c*X,r[1]=h*w+f*S+d*V+u*z,r[5]=h*A+f*P+d*F+u*te,r[9]=h*L+f*I+d*U+u*W,r[13]=h*_+f*O+d*G+u*X,r[2]=g*w+v*S+m*V+p*z,r[6]=g*A+v*P+m*F+p*te,r[10]=g*L+v*I+m*U+p*W,r[14]=g*_+v*O+m*G+p*X,r[3]=y*w+M*S+x*V+C*z,r[7]=y*A+M*P+x*F+C*te,r[11]=y*L+M*I+x*U+C*W,r[15]=y*_+M*O+x*G+C*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*f-s*c*f-r*a*d+n*c*d+s*a*u-n*l*u)+v*(+t*l*u-t*c*d+r*o*d-s*o*u+s*c*h-r*l*h)+m*(+t*c*f-t*a*u-r*o*f+n*o*u+r*a*h-n*c*h)+p*(-s*a*h-t*l*f+t*a*d+s*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=f*m*c-v*d*c+v*l*u-a*m*u-f*l*p+a*d*p,M=g*d*c-h*m*c-g*l*u+o*m*u+h*l*p-o*d*p,x=h*v*c-g*f*c+g*a*u-o*v*u-h*a*p+o*f*p,C=g*f*l-h*v*l-g*a*d+o*v*d+h*a*m-o*f*m,w=t*y+n*M+s*x+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(v*d*r-f*m*r-v*s*u+n*m*u+f*s*p-n*d*p)*A,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*A,e[3]=(f*l*r-a*d*r-f*s*c+n*d*c+a*s*u-n*l*u)*A,e[4]=M*A,e[5]=(h*m*r-g*d*r+g*s*u-t*m*u-h*s*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*A,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*u+t*l*u)*A,e[8]=x*A,e[9]=(g*f*r-h*v*r-g*n*u+t*v*u+h*n*p-t*f*p)*A,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*A,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*u-t*a*u)*A,e[12]=C*A,e[13]=(h*v*s-g*f*s+g*n*d-t*v*d-h*n*m+t*f*m)*A,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*A,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,g=r*f,v=o*h,m=o*f,p=a*f,y=l*c,M=l*h,x=l*f,C=n.x,w=n.y,A=n.z;return s[0]=(1-(v+p))*C,s[1]=(u+x)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(u-x)*w,s[5]=(1-(d+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+M)*A,s[9]=(m-y)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ai.set(s[0],s[1],s[2]).length();const o=Ai.set(s[4],s[5],s[6]).length(),a=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);const c=1/r,h=1/o,f=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=En,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===En)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Pr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=En,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===En)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Pr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new T,cn=new st,of=new T(0,0,0),af=new T(1,1,1),qn=new T,$s=new T,Yt=new T,Dl=new st,Il=new gi;class Qt{constructor(e=0,t=0,n=0,s=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Il.setFromEuler(this),this.setFromQuaternion(Il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class Xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lf=0;const Ul=new T,Ci=new gi,Ln=new st,Qs=new T,ps=new T,cf=new T,hf=new gi,Nl=new T(1,0,0),Fl=new T(0,1,0),Ol=new T(0,0,1),Bl={type:"added"},uf={type:"removed"},Ri={type:"childadded",child:null},eo={type:"childremoved",child:null};class St extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new T,t=new Qt,n=new gi,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new qe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Fl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Fl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ps,Qs,this.up):Ln.lookAt(Qs,ps,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uf),eo.child=e,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new T(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new T,Dn=new T,to=new T,In=new T,Pi=new T,Li=new T,zl=new T,no=new T,io=new T,so=new T,ro=new at,oo=new at,ao=new at;class un{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),Dn.subVectors(n,t),to.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Dn),l=hn.dot(to),c=Dn.dot(Dn),h=Dn.dot(to),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ro.setScalar(0),oo.setScalar(0),ao.setScalar(0),ro.fromBufferAttribute(e,t),oo.fromBufferAttribute(e,n),ao.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ro,r.x),o.addScaledVector(oo,r.y),o.addScaledVector(ao,r.z),o}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),Dn.subVectors(e,t),hn.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Pi.subVectors(s,n),Li.subVectors(r,n),no.subVectors(e,n);const l=Pi.dot(no),c=Li.dot(no);if(l<=0&&c<=0)return t.copy(n);io.subVectors(e,s);const h=Pi.dot(io),f=Li.dot(io);if(h>=0&&f<=h)return t.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Pi,o);so.subVectors(e,r);const u=Pi.dot(so),g=Li.dot(so);if(g>=0&&u<=g)return t.copy(r);const v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Li,a);const m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return zl.subVectors(r,s),a=(f-h)/(f-h+(u-g)),t.copy(s).addScaledVector(zl,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},er={h:0,s:0,l:0};function lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Ga(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=lo(o,r,e+1/3),this.g=lo(o,r,e),this.b=lo(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return tt.workingToColorSpace(Dt.copy(this),e),Math.round(je(Dt.r*255,0,255))*65536+Math.round(je(Dt.g*255,0,255))*256+Math.round(je(Dt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Ct){tt.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(er);const n=Ts(Yn.h,er.h,t),s=Ts(Yn.s,er.s,t),r=Ts(Yn.l,er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ve;Ve.NAMES=rh;let ff=0;class os extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Hi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zn extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new T,tr=new le;let df=0;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wl,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}}class oh extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ah extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pf=0;const nn=new st,co=new St,Di=new T,Jt=new Ut,ms=new Ut,At=new T;class dt extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?ah:oh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Jt.min,ms.min),Jt.expandByPoint(At),At.addVectors(Jt.max,ms.max),Jt.expandByPoint(At)):(Jt.expandByPoint(ms.min),Jt.expandByPoint(ms.max))}Jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)At.fromBufferAttribute(a,c),l&&(Di.fromBufferAttribute(e,c),At.add(Di)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new T,l[L]=new T;const c=new T,h=new T,f=new T,d=new le,u=new le,g=new le,v=new T,m=new T;function p(L,_,S){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,_),f.fromBufferAttribute(n,S),d.fromBufferAttribute(r,L),u.fromBufferAttribute(r,_),g.fromBufferAttribute(r,S),h.sub(c),f.sub(c),u.sub(d),g.sub(d);const P=1/(u.x*g.y-g.x*u.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(P),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(v),a[_].add(v),a[S].add(v),l[L].add(m),l[_].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,_=y.length;L<_;++L){const S=y[L],P=S.start,I=S.count;for(let O=P,V=P+I;O<V;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new T,x=new T,C=new T,w=new T;function A(L){C.fromBufferAttribute(s,L),w.copy(C);const _=a[L];M.copy(_),M.sub(C.multiplyScalar(C.dot(_))).normalize(),x.crossVectors(w,_);const P=x.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,P)}for(let L=0,_=y.length;L<_;++L){const S=y[L],P=S.start,I=S.count;for(let O=P,V=P+I;O<V;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,f=new T;if(e)for(let d=0,u=e.count;d<u;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let u=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?u=l[v]*a.data.stride+a.offset:u=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[u++]}return new Vt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kl=new st,ii=new sh,nr=new Vs,Hl=new T,ir=new T,sr=new T,rr=new T,ho=new T,or=new T,Vl=new T,ar=new T;class Ke extends St{constructor(e=new dt,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(ho.fromBufferAttribute(f,e),o?or.addScaledVector(ho,h):or.addScaledVector(ho.sub(t),h))}t.add(or)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(nr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(nr,Hl)===null||ii.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(kl.copy(r).invert(),ii.copy(e.ray).applyMatrix4(kl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let x=y,C=M;x<C;x+=3){const w=a.getX(x),A=a.getX(x+1),L=a.getX(x+2);s=lr(this,p,e,n,c,h,f,w,A,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=lr(this,o,e,n,c,h,f,y,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let x=y,C=M;x<C;x+=3){const w=x,A=x+1,L=x+2;s=lr(this,p,e,n,c,h,f,w,A,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const y=m,M=m+1,x=m+2;s=lr(this,o,e,n,c,h,f,y,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function mf(i,e,t,n,s,r,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===$n,a),l===null)return null;ar.copy(a),ar.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ar);return c<t.near||c>t.far?null:{distance:c,point:ar.clone(),object:i}}function lr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ir),i.getVertexPosition(l,sr),i.getVertexPosition(c,rr);const h=mf(i,e,t,n,ir,sr,rr,Vl);if(h){const f=new T;un.getBarycoord(Vl,ir,sr,rr,f),s&&(h.uv=un.getInterpolatedAttribute(s,a,l,c,f,new le)),r&&(h.uv1=un.getInterpolatedAttribute(r,a,l,c,f,new le)),o&&(h.normal=un.getInterpolatedAttribute(o,a,l,c,f,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new T,materialIndex:0};un.getNormal(ir,sr,rr,d.normal),h.face=d,h.barycoord=f}return h}class on extends dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,u=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(f,2));function g(v,m,p,y,M,x,C,w,A,L,_){const S=x/A,P=C/L,I=x/2,O=C/2,V=w/2,F=A+1,U=L+1;let G=0,z=0;const te=new T;for(let W=0;W<U;W++){const X=W*P-O;for(let ae=0;ae<F;ae++){const Ee=ae*S-I;te[v]=Ee*y,te[m]=X*M,te[p]=V,c.push(te.x,te.y,te.z),te[v]=0,te[m]=0,te[p]=w>0?1:-1,h.push(te.x,te.y,te.z),f.push(ae/A),f.push(1-W/L),G+=1}}for(let W=0;W<L;W++)for(let X=0;X<A;X++){const ae=d+X+F*W,Ee=d+X+F*(W+1),ke=d+(X+1)+F*(W+1),Fe=d+(X+1)+F*W;l.push(ae,Ee,Fe),l.push(Ee,ke,Fe),z+=6}a.addGroup(u,z,_),u+=z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=ji(i[t]);for(const s in n)e[s]=n[s]}return e}function gf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Ns={clone:ji,merge:Bt};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kt extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ch extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new T,Gl=new le,Wl=new le;class zt extends ch{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Gl,Wl),t.subVectors(Wl,Gl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Ui=1;class xf extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(Ii,Ui,e,t);s.layers=this.layers,this.add(s);const r=new zt(Ii,Ui,e,t);r.layers=this.layers,this.add(r);const o=new zt(Ii,Ui,e,t);o.layers=this.layers,this.add(o);const a=new zt(Ii,Ui,e,t);a.layers=this.layers,this.add(a);const l=new zt(Ii,Ui,e,t);l.layers=this.layers,this.add(l);const c=new zt(Ii,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hh extends Rt{constructor(e=[],t=qi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mf extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:On});r.uniforms.tEquirect.value=t;const o=new Ke(s,r),a=t.minFilter;return t.minFilter===Sn&&(t.minFilter=Zt),new xf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class ut extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yf={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new qa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uh extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $i extends Rt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,h=jt,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xl extends Vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ni=new st,ql=new st,cr=[],Yl=new Ut,Sf=new st,gs=new Ke,vs=new Vs;class Er extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Yl.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Yl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),vs.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),e.ray.intersectsSphere(vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ni),ql.multiplyMatrices(n,Ni),gs.matrixWorld=ql,gs.raycast(e,cr);for(let o=0,a=cr.length;o<a;o++){const l=cr[o];l.instanceId=r,l.object=this,t.push(l)}cr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(s*this.count),s,this.count,Ba,bn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fo=new T,bf=new T,Ef=new qe;class ai{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fo.subVectors(n,t).cross(bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ef.getNormalMatrix(e),s=this.coplanarPoint(fo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Vs,wf=new le(.5,.5),hr=new T;class Ya{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],M=r[13],x=r[14],C=r[15];if(s[0].setComponents(c-o,u-h,p-g,C-y).normalize(),s[1].setComponents(c+o,u+h,p+g,C+y).normalize(),s[2].setComponents(c+a,u+f,p+v,C+M).normalize(),s[3].setComponents(c-a,u-f,p-v,C-M).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,u-d,p-m,C-x).normalize();else if(s[4].setComponents(c-l,u-d,p-m,C-x).normalize(),t===En)s[5].setComponents(c+l,u+d,p+m,C+x).normalize();else if(t===Pr)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);const t=wf.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(hr.x=s.normal.x>0?e.max.x:e.min.x,hr.y=s.normal.y>0?e.max.y:e.min.y,hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vi extends Rt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fh extends Rt{constructor(e,t,n=mi,s,r,o,a=jt,l=jt,c,h=Ls,f=1){if(h!==Ls&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dh extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hn extends dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],d=[],u=[];let g=0;const v=[],m=n/2;let p=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ye(f,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(u,2));function y(){const x=new T,C=new T;let w=0;const A=(t-e)/n;for(let L=0;L<=r;L++){const _=[],S=L/r,P=S*(t-e)+e;for(let I=0;I<=s;I++){const O=I/s,V=O*l+a,F=Math.sin(V),U=Math.cos(V);C.x=P*F,C.y=-S*n+m,C.z=P*U,f.push(C.x,C.y,C.z),x.set(F,A,U).normalize(),d.push(x.x,x.y,x.z),u.push(O,1-S),_.push(g++)}v.push(_)}for(let L=0;L<s;L++)for(let _=0;_<r;_++){const S=v[_][L],P=v[_+1][L],I=v[_+1][L+1],O=v[_][L+1];(e>0||_!==0)&&(h.push(S,P,O),w+=3),(t>0||_!==r-1)&&(h.push(P,I,O),w+=3)}c.addGroup(p,w,0),p+=w}function M(x){const C=g,w=new le,A=new T;let L=0;const _=x===!0?e:t,S=x===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,m*S,0),d.push(0,S,0),u.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const V=I/s*l+a,F=Math.cos(V),U=Math.sin(V);A.x=_*U,A.y=m*S,A.z=_*F,f.push(A.x,A.y,A.z),d.push(0,S,0),w.x=F*.5+.5,w.y=U*.5*S+.5,u.push(w.x,w.y),g++}for(let I=0;I<s;I++){const O=C+I,V=P+I;x===!0?h.push(V,V+1,O):h.push(V+1,V,O),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ja extends Hn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ja(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class as extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new T,x=new T,C=new T;for(let w=0;w<t.length;w+=3)u(t[w+0],M),u(t[w+1],x),u(t[w+2],C),l(M,x,C,y)}function l(y,M,x,C){const w=C+1,A=[];for(let L=0;L<=w;L++){A[L]=[];const _=y.clone().lerp(x,L/w),S=M.clone().lerp(x,L/w),P=w-L;for(let I=0;I<=P;I++)I===0&&L===w?A[L][I]=_:A[L][I]=_.clone().lerp(S,I/P)}for(let L=0;L<w;L++)for(let _=0;_<2*(w-L)-1;_++){const S=Math.floor(_/2);_%2===0?(d(A[L][S+1]),d(A[L+1][S]),d(A[L][S])):(d(A[L][S+1]),d(A[L+1][S+1]),d(A[L+1][S]))}}function c(y){const M=new T;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const y=new T;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const x=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;o.push(x,1-C)}g(),f()}function f(){for(let y=0;y<o.length;y+=6){const M=o[y+0],x=o[y+2],C=o[y+4],w=Math.max(M,x,C),A=Math.min(M,x,C);w>.9&&A<.1&&(M<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function u(y,M){const x=y*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){const y=new T,M=new T,x=new T,C=new T,w=new le,A=new le,L=new le;for(let _=0,S=0;_<r.length;_+=9,S+=6){y.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),x.set(r[_+6],r[_+7],r[_+8]),w.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),C.copy(y).add(M).add(x).divideScalar(3);const P=m(C);v(w,S+0,y,P),v(A,S+2,M,P),v(L,S+4,x,P)}}function v(y,M,x,C){C<0&&y.x===1&&(o[M]=y.x-1),x.x===0&&x.z===0&&(o[M]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.vertices,e.indices,e.radius,e.details)}}class Ka extends as{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ka(e.radius,e.detail)}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new T,s=[],r=[],o=[],a=new T,l=new st;for(let u=0;u<=e;u++){const g=u/e;s[u]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(je(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(je(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Za extends Tn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tf extends Za{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ja(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const ur=new T,po=new ja,mo=new ja,go=new ja;class pi extends Tn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ur.subVectors(s[0],s[1]).add(s[0]),c=ur);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),po.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,v,m),mo.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,v,m),go.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(po.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),mo.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),go.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(po.calc(l),mo.calc(l),go.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jl(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Af(i,e){const t=1-i;return t*t*e}function Cf(i,e){return 2*(1-i)*i*e}function Rf(i,e){return i*i*e}function As(i,e,t,n){return Af(i,e)+Cf(i,t)+Rf(i,n)}function Pf(i,e){const t=1-i;return t*t*t*e}function Lf(i,e){const t=1-i;return 3*t*t*i*e}function Df(i,e){return 3*(1-i)*i*i*e}function If(i,e){return i*i*i*e}function Cs(i,e,t,n,s){return Pf(i,e)+Lf(i,t)+Df(i,n)+If(i,s)}class ph extends Tn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(e,s.x,r.x,o.x,a.x),Cs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uf extends Tn{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(e,s.x,r.x,o.x,a.x),Cs(e,s.y,r.y,o.y,a.y),Cs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mh extends Tn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nf extends Tn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gh extends Tn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(As(e,s.x,r.x,o.x),As(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vh extends Tn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(As(e,s.x,r.x,o.x),As(e,s.y,r.y,o.y),As(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _h extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Jl(a,l.x,c.x,h.x,f.x),Jl(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var Lr=Object.freeze({__proto__:null,ArcCurve:Tf,CatmullRomCurve3:pi,CubicBezierCurve:ph,CubicBezierCurve3:Uf,EllipseCurve:Za,LineCurve:mh,LineCurve3:Nf,QuadraticBezierCurve:gh,QuadraticBezierCurve3:vh,SplineCurve:_h});class Ff extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Lr[s.type]().fromJSON(s))}return this}}class Fs extends Ff{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new mh(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new gh(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new ph(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _h(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Za(e,t,n,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gn extends Fs{constructor(e){super(e),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Fs().fromJSON(s))}return this}}function Of(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=xh(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Vf(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let d=t;d<s;d+=t){const u=i[d],g=i[d+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Os(r,o,t,a,l,c,0),o}function xh(i,e,t,n,s){let r;if(s===Qf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Kl(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Kl(o/n|0,i[o],i[o+1],r);return r&&Qi(r,r.next)&&(zs(r),r=r.next),r}function _i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Qi(t,t.next)||gt(t.prev,t,t.next)===0)){if(zs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Os(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Yf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?zf(i,n,s,r):Bf(i)){e.push(l.i,i.i,c.i),zs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=kf(_i(i),e),Os(i,e,t,n,s,r,2)):o===2&&Hf(i,e,t,n,s,r):Os(_i(i),e,t,n,s,r,1);break}}}function Bf(i){const e=i.prev,t=i,n=i.next;if(gt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),u=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&bs(s,a,r,l,o,c,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zf(i,e,t,n){const s=i.prev,r=i,o=i.next;if(gt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,d=o.y,u=Math.min(a,l,c),g=Math.min(h,f,d),v=Math.max(a,l,c),m=Math.max(h,f,d),p=ba(u,g,e,t,n),y=ba(v,m,e,t,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=y;){if(M.x>=u&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&bs(a,h,l,f,c,d,M.x,M.y)&&gt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=u&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&bs(a,h,l,f,c,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=u&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&bs(a,h,l,f,c,d,M.x,M.y)&&gt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=u&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&bs(a,h,l,f,c,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function kf(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Qi(n,s)&&yh(n,t,t.next,s)&&Bs(n,s)&&Bs(s,n)&&(e.push(n.i,t.i,s.i),zs(t),zs(t.next),t=i=s),t=t.next}while(t!==i);return _i(t)}function Hf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zf(o,a)){let l=Sh(o,a);o=_i(o,o.next),l=_i(l,l.next),Os(o,e,t,n,s,r,0),Os(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Vf(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=xh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Kf(c))}s.sort(Gf);for(let r=0;r<s.length;r++)t=Wf(s[r],t);return t}function Gf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Wf(i,e){const t=Xf(i,e);if(!t)return e;const n=Sh(t,i);return _i(n,n.next),_i(t,t.next)}function Xf(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Qi(i,t))return t;do{if(Qi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Mh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);Bs(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&qf(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function qf(i,e){return gt(i.prev,i,e.prev)<0&&gt(e.next,i,i.next)<0}function Yf(i,e,t,n){let s=i;do s.z===0&&(s.z=ba(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Jf(s)}function Jf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ba(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Kf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function bs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Mh(i,e,t,n,s,r,o,a)}function Zf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jf(i,e)&&(Bs(i,e)&&Bs(e,i)&&$f(i,e)&&(gt(i.prev,i,e.prev)||gt(i,e.prev,e))||Qi(i,e)&&gt(i.prev,i,i.next)>0&&gt(e.prev,e,e.next)>0)}function gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qi(i,e){return i.x===e.x&&i.y===e.y}function yh(i,e,t,n){const s=dr(gt(i,e,t)),r=dr(gt(i,e,n)),o=dr(gt(t,n,i)),a=dr(gt(t,n,e));return!!(s!==r&&o!==a||s===0&&fr(i,t,e)||r===0&&fr(i,n,e)||o===0&&fr(t,i,n)||a===0&&fr(t,e,n))}function fr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function dr(i){return i>0?1:i<0?-1:0}function jf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Bs(i,e){return gt(i.prev,i,i.next)<0?gt(i,e,i.next)>=0&&gt(i,i.prev,e)>=0:gt(i,e,i.prev)<0||gt(i,i.next,e)<0}function $f(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sh(i,e){const t=Ea(i.i,i.x,i.y),n=Ea(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Kl(i,e,t,n){const s=Ea(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ea(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ed{static triangulate(e,t,n=2){return Of(e,t,n)}}class di{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return di.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Zl(e),jl(n,e);let o=e.length;t.forEach(Zl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,jl(n,t[l]);const a=ed.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Zl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function jl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class vn extends dt{constructor(e=new gn([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:td;let M,x=!1,C,w,A,L;p&&(M=p.getSpacedPoints(h),x=!0,d=!1,C=p.computeFrenetFrames(h,!1),w=new T,A=new T,L=new T),d||(m=0,u=0,g=0,v=0);const _=a.extractPoints(c);let S=_.shape;const P=_.holes;if(!di.isClockWise(S)){S=S.reverse();for(let oe=0,ne=P.length;oe<ne;oe++){const ee=P[oe];di.isClockWise(ee)&&(P[oe]=ee.reverse())}}function O(oe){const ee=10000000000000001e-36;let $=oe[0];for(let me=1;me<=oe.length;me++){const ce=me%oe.length,ge=oe[ce],We=ge.x-$.x,Ge=ge.y-$.y,R=We*We+Ge*Ge,b=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs($.x),Math.abs($.y)),H=ee*b*b;if(R<=H){oe.splice(ce,1),me--;continue}$=ge}}O(S),P.forEach(O);const V=P.length,F=S;for(let oe=0;oe<V;oe++){const ne=P[oe];S=S.concat(ne)}function U(oe,ne,ee){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ne,ee)}const G=S.length;function z(oe,ne,ee){let $,me,ce;const ge=oe.x-ne.x,We=oe.y-ne.y,Ge=ee.x-oe.x,R=ee.y-oe.y,b=ge*ge+We*We,H=ge*R-We*Ge;if(Math.abs(H)>Number.EPSILON){const K=Math.sqrt(b),re=Math.sqrt(Ge*Ge+R*R),Z=ne.x-We/K,De=ne.y+ge/K,pe=ee.x-R/re,Re=ee.y+Ge/re,Pe=((pe-Z)*R-(Re-De)*Ge)/(ge*R-We*Ge);$=Z+ge*Pe-oe.x,me=De+We*Pe-oe.y;const he=$*$+me*me;if(he<=2)return new le($,me);ce=Math.sqrt(he/2)}else{let K=!1;ge>Number.EPSILON?Ge>Number.EPSILON&&(K=!0):ge<-Number.EPSILON?Ge<-Number.EPSILON&&(K=!0):Math.sign(We)===Math.sign(R)&&(K=!0),K?($=-We,me=ge,ce=Math.sqrt(b)):($=ge,me=We,ce=Math.sqrt(b/2))}return new le($/ce,me/ce)}const te=[];for(let oe=0,ne=F.length,ee=ne-1,$=oe+1;oe<ne;oe++,ee++,$++)ee===ne&&(ee=0),$===ne&&($=0),te[oe]=z(F[oe],F[ee],F[$]);const W=[];let X,ae=te.concat();for(let oe=0,ne=V;oe<ne;oe++){const ee=P[oe];X=[];for(let $=0,me=ee.length,ce=me-1,ge=$+1;$<me;$++,ce++,ge++)ce===me&&(ce=0),ge===me&&(ge=0),X[$]=z(ee[$],ee[ce],ee[ge]);W.push(X),ae=ae.concat(X)}let Ee;if(m===0)Ee=di.triangulateShape(F,P);else{const oe=[],ne=[];for(let ee=0;ee<m;ee++){const $=ee/m,me=u*Math.cos($*Math.PI/2),ce=g*Math.sin($*Math.PI/2)+v;for(let ge=0,We=F.length;ge<We;ge++){const Ge=U(F[ge],te[ge],ce);ye(Ge.x,Ge.y,-me),$===0&&oe.push(Ge)}for(let ge=0,We=V;ge<We;ge++){const Ge=P[ge];X=W[ge];const R=[];for(let b=0,H=Ge.length;b<H;b++){const K=U(Ge[b],X[b],ce);ye(K.x,K.y,-me),$===0&&R.push(K)}$===0&&ne.push(R)}}Ee=di.triangulateShape(oe,ne)}const ke=Ee.length,Fe=g+v;for(let oe=0;oe<G;oe++){const ne=d?U(S[oe],ae[oe],Fe):S[oe];x?(A.copy(C.normals[0]).multiplyScalar(ne.x),w.copy(C.binormals[0]).multiplyScalar(ne.y),L.copy(M[0]).add(A).add(w),ye(L.x,L.y,L.z)):ye(ne.x,ne.y,0)}for(let oe=1;oe<=h;oe++)for(let ne=0;ne<G;ne++){const ee=d?U(S[ne],ae[ne],Fe):S[ne];x?(A.copy(C.normals[oe]).multiplyScalar(ee.x),w.copy(C.binormals[oe]).multiplyScalar(ee.y),L.copy(M[oe]).add(A).add(w),ye(L.x,L.y,L.z)):ye(ee.x,ee.y,f/h*oe)}for(let oe=m-1;oe>=0;oe--){const ne=oe/m,ee=u*Math.cos(ne*Math.PI/2),$=g*Math.sin(ne*Math.PI/2)+v;for(let me=0,ce=F.length;me<ce;me++){const ge=U(F[me],te[me],$);ye(ge.x,ge.y,f+ee)}for(let me=0,ce=P.length;me<ce;me++){const ge=P[me];X=W[me];for(let We=0,Ge=ge.length;We<Ge;We++){const R=U(ge[We],X[We],$);x?ye(R.x,R.y+M[h-1].y,M[h-1].x+ee):ye(R.x,R.y,f+ee)}}}J(),j();function J(){const oe=s.length/3;if(d){let ne=0,ee=G*ne;for(let $=0;$<ke;$++){const me=Ee[$];Ce(me[2]+ee,me[1]+ee,me[0]+ee)}ne=h+m*2,ee=G*ne;for(let $=0;$<ke;$++){const me=Ee[$];Ce(me[0]+ee,me[1]+ee,me[2]+ee)}}else{for(let ne=0;ne<ke;ne++){const ee=Ee[ne];Ce(ee[2],ee[1],ee[0])}for(let ne=0;ne<ke;ne++){const ee=Ee[ne];Ce(ee[0]+G*h,ee[1]+G*h,ee[2]+G*h)}}n.addGroup(oe,s.length/3-oe,0)}function j(){const oe=s.length/3;let ne=0;_e(F,ne),ne+=F.length;for(let ee=0,$=P.length;ee<$;ee++){const me=P[ee];_e(me,ne),ne+=me.length}n.addGroup(oe,s.length/3-oe,1)}function _e(oe,ne){let ee=oe.length;for(;--ee>=0;){const $=ee;let me=ee-1;me<0&&(me=oe.length-1);for(let ce=0,ge=h+m*2;ce<ge;ce++){const We=G*ce,Ge=G*(ce+1),R=ne+$+We,b=ne+me+We,H=ne+me+Ge,K=ne+$+Ge;Qe(R,b,H,K)}}}function ye(oe,ne,ee){l.push(oe),l.push(ne),l.push(ee)}function Ce(oe,ne,ee){ct(oe),ct(ne),ct(ee);const $=s.length/3,me=y.generateTopUV(n,s,$-3,$-2,$-1);D(me[0]),D(me[1]),D(me[2])}function Qe(oe,ne,ee,$){ct(oe),ct(ne),ct($),ct(ne),ct(ee),ct($);const me=s.length/3,ce=y.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);D(ce[0]),D(ce[1]),D(ce[3]),D(ce[1]),D(ce[2]),D(ce[3])}function ct(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function D(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return nd(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lr[s.type]().fromJSON(s)),new vn(n,e.options)}}const td={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],u=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-f),new le(d,1-g),new le(v,1-p)]:[new le(a,1-l),new le(h,1-f),new le(u,1-g),new le(m,1-p)]}};function nd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class $a extends as{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $a(e.radius,e.detail)}}class xi extends as{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xi(e.radius,e.detail)}}class es extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,d=t/l,u=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let M=0;M<c;M++){const x=M*f-r;g.push(x,-y,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,x=y+c*(p+1),C=y+1+c*(p+1),w=y+1+c*p;u.push(M,x,w),u.push(x,C,w)}this.setIndex(u),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vn extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new T,d=new T,u=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const w=C/t;f.x=-e*Math.cos(s+w*r)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(s+w*r)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(w+x,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const M=h[p][y+1],x=h[p][y],C=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&u.push(M,x,w),(p!==n-1||l<Math.PI)&&u.push(x,C,w)}this.setIndex(u),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qa extends as{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qa(e.radius,e.detail)}}class an extends dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new T,f=new T,d=new T;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){const v=g/s*r,m=u/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){const v=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,y=(s+1)*u+g;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nr extends dt{constructor(e=new vh(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new le;let h=new T;const f=[],d=[],u=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ye(f,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(u,2));function v(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),y(),p()}function m(M){h=e.getPointAt(M/t,h);const x=o.normals[M],C=o.binormals[M];for(let w=0;w<=s;w++){const A=w/s*Math.PI*2,L=Math.sin(A),_=-Math.cos(A);l.x=_*x.x+L*C.x,l.y=_*x.y+L*C.y,l.z=_*x.z+L*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let x=1;x<=s;x++){const C=(s+1)*(M-1)+(x-1),w=(s+1)*M+(x-1),A=(s+1)*M+x,L=(s+1)*(M-1)+x;g.push(C,w,L),g.push(w,A,L)}}function y(){for(let M=0;M<=t;M++)for(let x=0;x<=s;x++)c.x=M/t,c.y=x/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Nr(new Lr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class id extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vt extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ks extends vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sd extends os{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rd extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class od extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ad{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const u=c[f],g=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const ld=new ad;class el{constructor(e){this.manager=e!==void 0?e:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}el.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fi=new WeakMap;class cd extends el{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vo.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=Fi.get(o);f===void 0&&(f=[],Fi.set(o,f)),f.push({onLoad:t,onError:s})}return o}const a=Is("img");function l(){h(),t&&t(this);const f=Fi.get(this)||[];for(let d=0;d<f.length;d++){const u=f[d];u.onLoad&&u.onLoad(this)}Fi.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),vo.remove(`image:${e}`);const d=Fi.get(this)||[];for(let u=0;u<d.length;u++){const g=d[u];g.onError&&g.onError(f)}Fi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vo.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class hd extends el{constructor(e){super(e)}load(e,t,n,s){const r=new Rt,o=new cd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Fr extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ud extends Fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _o=new st,$l=new T,Ql=new T;class tl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$l.setFromMatrixPosition(e.matrixWorld),t.position.copy($l),Ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ql),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fd extends tl{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dd extends Fr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ec=new st,_s=new T,xo=new T;class pd extends tl{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),n.position.copy(_s),xo.copy(n.position),xo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xo),n.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec,n.coordinateSystem,n.reversedDepth)}}class wr extends Fr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nl extends ch{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class md extends tl{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gd extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new md}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vd extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _d{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const tc=new st;class Mo{constructor(e,t,n=0,s=1/0){this.ray=new sh(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tc),this}intersectObject(e,t=!0,n=[]){return wa(e,this,n,t),n.sort(nc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wa(e[s],this,n,t);return n.sort(nc),n}}function nc(i,e){return i.distance-e.distance}function wa(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)wa(r[o],e,t,!0)}}function ic(i,e,t,n){const s=xd(n);switch(t){case $c:return i*e;case Ba:return i*e/s.components*s.byteLength;case za:return i*e/s.components*s.byteLength;case eh:return i*e*2/s.components*s.byteLength;case ka:return i*e*2/s.components*s.byteLength;case Qc:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case Ha:return i*e*4/s.components*s.byteLength;case Mr:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:case $o:return Math.max(i,16)*Math.max(e,8)/4;case Ko:case jo:return Math.max(i,8)*Math.max(e,8)/2;case Qo:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ga:case va:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xa:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ya:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xd(i){switch(i){case wn:case Jc:return{byteLength:1,components:1};case Rs:case Kc:case Bn:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case mi:case Na:case bn:return{byteLength:4,components:1};case Zc:case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Md(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){const g=f[d],v=f[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){const v=f[u];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sd=`#ifdef USE_ALPHAHASH
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
#endif`,bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
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
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
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
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
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
#endif`,Nd=`#ifdef USE_BUMPMAP
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wd=`#define PI 3.141592653589793
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
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qd=`vec3 transformedNormal = objectNormal;
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
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
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
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
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
}`,Mp=`
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rm=`float getShadowMask() {
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
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Cm=`#define DISTANCE
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
}`,Rm=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,Hm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define STANDARD
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
}`,qm=`#define TOON
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
}`,Ym=`#define TOON
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
}`,Jm=`uniform float size;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:yd,alphahash_pars_fragment:Sd,alphamap_fragment:bd,alphamap_pars_fragment:Ed,alphatest_fragment:wd,alphatest_pars_fragment:Td,aomap_fragment:Ad,aomap_pars_fragment:Cd,batching_pars_vertex:Rd,batching_vertex:Pd,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Id,iridescence_fragment:Ud,bumpmap_pars_fragment:Nd,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:zd,color_fragment:kd,color_pars_fragment:Hd,color_pars_vertex:Vd,color_vertex:Gd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:qd,displacementmap_pars_vertex:Yd,displacementmap_vertex:Jd,emissivemap_fragment:Kd,emissivemap_pars_fragment:Zd,colorspace_fragment:jd,colorspace_pars_fragment:$d,envmap_fragment:Qd,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:dp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:op,fog_pars_fragment:ap,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:fp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:vp,lights_physical_fragment:_p,lights_physical_pars_fragment:xp,lights_fragment_begin:Mp,lights_fragment_maps:yp,lights_fragment_end:Sp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Tp,map_fragment:Ap,map_pars_fragment:Cp,map_particle_fragment:Rp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Ip,morphcolor_vertex:Up,morphnormal_vertex:Np,morphtarget_pars_vertex:Fp,morphtarget_vertex:Op,normal_fragment_begin:Bp,normal_fragment_maps:zp,normal_pars_fragment:kp,normal_pars_vertex:Hp,normal_vertex:Vp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Yp,opaque_fragment:Jp,packing:Kp,premultiplied_alpha_fragment:Zp,project_vertex:jp,dithering_fragment:$p,dithering_pars_fragment:Qp,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:sm,shadowmask_pars_fragment:rm,skinbase_vertex:om,skinning_pars_vertex:am,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:fm,tonemapping_pars_fragment:dm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:vm,uv_vertex:_m,worldpos_vertex:xm,background_vert:Mm,background_frag:ym,backgroundCube_vert:Sm,backgroundCube_frag:bm,cube_vert:Em,cube_frag:wm,depth_vert:Tm,depth_frag:Am,distanceRGBA_vert:Cm,distanceRGBA_frag:Rm,equirect_vert:Pm,equirect_frag:Lm,linedashed_vert:Dm,linedashed_frag:Im,meshbasic_vert:Um,meshbasic_frag:Nm,meshlambert_vert:Fm,meshlambert_frag:Om,meshmatcap_vert:Bm,meshmatcap_frag:zm,meshnormal_vert:km,meshnormal_frag:Hm,meshphong_vert:Vm,meshphong_frag:Gm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:qm,meshtoon_frag:Ym,points_vert:Jm,points_frag:Km,shadow_vert:Zm,shadow_frag:jm,sprite_vert:$m,sprite_frag:Qm},xe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},xn={basic:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Bt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Bt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Bt([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Bt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Bt([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Bt([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Bt([xe.common,xe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Bt([xe.lights,xe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};xn.physical={uniforms:Bt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const pr={r:0,b:0,g:0},ri=new Qt,e0=new st;function t0(i,e,t,n,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,h,f=null,d=0,u=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const C=g(M);C===null?p(a,l):C&&C.isColor&&(p(C,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const C=g(x);C&&(C.isCubeTexture||C.mapping===Ur)?(h===void 0&&(h=new Ke(new on(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:ji(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(x.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(e0.makeRotationFromEuler(ri)),h.material.toneMapped=tt.getTransfer(C.colorSpace)!==rt,(f!==C||d!==C.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=C,d=C.version,u=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ke(new es(2,2),new kt({name:"BackgroundMaterial",uniforms:ji(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=tt.getTransfer(C.colorSpace)!==rt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(pr,lh(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:m,dispose:y}}function n0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,P,I,O,V){let F=!1;const U=f(O,I,P);r!==U&&(r=U,c(r.object)),F=u(S,O,I,V),F&&g(S,O,I,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,x(S,P,I,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function f(S,P,I){const O=I.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let F=V[P.id];F===void 0&&(F={},V[P.id]=F);let U=F[O];return U===void 0&&(U=d(l()),F[O]=U),U}function d(S){const P=[],I=[],O=[];for(let V=0;V<t;V++)P[V]=0,I[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:O,object:S,attributes:{},index:null}}function u(S,P,I,O){const V=r.attributes,F=P.attributes;let U=0;const G=I.getAttributes();for(const z in G)if(G[z].location>=0){const W=V[z];let X=F[z];if(X===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),W===void 0||W.attribute!==X||X&&W.data!==X.data)return!0;U++}return r.attributesNum!==U||r.index!==O}function g(S,P,I,O){const V={},F=P.attributes;let U=0;const G=I.getAttributes();for(const z in G)if(G[z].location>=0){let W=F[z];W===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));const X={};X.attribute=W,W&&W.data&&(X.data=W.data),V[z]=X,U++}r.attributes=V,r.attributesNum=U,r.index=O}function v(){const S=r.newAttributes;for(let P=0,I=S.length;P<I;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const I=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;I[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),V[S]!==P&&(i.vertexAttribDivisor(S,P),V[S]=P)}function y(){const S=r.newAttributes,P=r.enabledAttributes;for(let I=0,O=P.length;I<O;I++)P[I]!==S[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function M(S,P,I,O,V,F,U){U===!0?i.vertexAttribIPointer(S,P,I,V,F):i.vertexAttribPointer(S,P,I,O,V,F)}function x(S,P,I,O){v();const V=O.attributes,F=I.getAttributes(),U=P.defaultAttributeValues;for(const G in F){const z=F[G];if(z.location>=0){let te=V[G];if(te===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const W=te.normalized,X=te.itemSize,ae=e.get(te);if(ae===void 0)continue;const Ee=ae.buffer,ke=ae.type,Fe=ae.bytesPerElement,J=ke===i.INT||ke===i.UNSIGNED_INT||te.gpuType===Na;if(te.isInterleavedBufferAttribute){const j=te.data,_e=j.stride,ye=te.offset;if(j.isInstancedInterleavedBuffer){for(let Ce=0;Ce<z.locationSize;Ce++)p(z.location+Ce,j.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ce=0;Ce<z.locationSize;Ce++)m(z.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let Ce=0;Ce<z.locationSize;Ce++)M(z.location+Ce,X/z.locationSize,ke,W,_e*Fe,(ye+X/z.locationSize*Ce)*Fe,J)}else{if(te.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)p(z.location+j,te.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let j=0;j<z.locationSize;j++)m(z.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let j=0;j<z.locationSize;j++)M(z.location+j,X/z.locationSize,ke,W,X*Fe,X/z.locationSize*j*Fe,J)}}else if(U!==void 0){const W=U[G];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(z.location,W);break;case 3:i.vertexAttrib3fv(z.location,W);break;case 4:i.vertexAttrib4fv(z.location,W);break;default:i.vertexAttrib1fv(z.location,W)}}}}y()}function C(){L();for(const S in n){const P=n[S];for(const I in P){const O=P[I];for(const V in O)h(O[V].object),delete O[V];delete P[I]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const I in P){const O=P[I];for(const V in O)h(O[V].object),delete O[V];delete P[I]}delete n[S.id]}function A(S){for(const P in n){const I=n[P];if(I[S.id]===void 0)continue;const O=I[S.id];for(const V in O)h(O[V].object),delete O[V];delete I[S.id]}}function L(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:_,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function i0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];t.update(u,n,1)}function l(c,h,f,d){if(f===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function s0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bn&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:w}}function r0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ai,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,M=y*4;let x=p.clippingState||null;l.value=x,x=h(g,d,M,u);for(let C=0;C!==M;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=u+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=u;M!==v;++M,x+=4)o.copy(f[M]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function o0(i){let e=new WeakMap;function t(o,a){return a===qo?o.mapping=qi:a===Yo&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qo||a===Yo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mf(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ki=4,sc=[.125,.215,.35,.446,.526,.582],hi=20,yo=new nl,rc=new Ve;let So=null,bo=0,Eo=0,wo=!1;const li=(1+Math.sqrt(5))/2,Oi=1/li,oc=[new T(-li,Oi,0),new T(li,Oi,0),new T(-Oi,0,li),new T(Oi,0,li),new T(0,li,-Oi),new T(0,li,Oi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],a0=new T;class Ta{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=a0}=r;So=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(So,bo,Eo),this._renderer.xr.enabled=wo,e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Bn,format:dn,colorSpace:Ki,depthBuffer:!1},s=ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(r)),this._blurMaterial=c0(r,e,t)}return s}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,s,r){const l=new zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(rc),f.toneMapping=jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const v=new Zn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new Ke(new on,v);let p=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,p=!0):(v.color.copy(rc),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const C=this._cubeSize;mr(s,x*C,M>2?C:0,C,C),f.setRenderTarget(s),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===qi||e.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;mr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=oc[(s-r-1)%oc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ke(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*hi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):hi;m>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const p=[];let y=0;for(let A=0;A<hi;++A){const L=A/v,_=Math.exp(-L*L/2);p.push(_),A===0?y+=_:A<m&&(y+=2*_)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[s],C=3*x*(s>M-ki?s-M+ki:0),w=4*(this._cubeSize-x);mr(t,C,w,3*x,2*x),l.setRenderTarget(t),l.render(f,yo)}}function l0(i){const e=[],t=[],n=[];let s=i;const r=i-ki+1+sc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ki?l=sc[o-i+ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*u),M=new Float32Array(m*g*u),x=new Float32Array(p*g*u);for(let w=0;w<u;w++){const A=w%3*2/3-1,L=w>2?0:-1,_=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];y.set(_,v*g*w),M.set(d,m*g*w);const S=[w,w,w,w,w,w];x.set(S,p*g*w)}const C=new dt;C.setAttribute("position",new Vt(y,v)),C.setAttribute("uv",new Vt(M,m)),C.setAttribute("faceIndex",new Vt(x,p)),e.push(C),s>ki&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ac(i,e,t){const n=new mn(i,e,t);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function c0(i,e,t){const n=new Float32Array(hi),s=new T(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:il(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function lc(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function cc(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function h0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qo||l===Yo,h=l===qi||l===Yi;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ta(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new Ta(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function u0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function f0(i,e,t,n){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const u in d)e.update(d[u],i.ARRAY_BUFFER)}function c(f){const d=[],u=f.index,g=f.attributes.position;let v=0;if(u!==null){const y=u.array;v=u.version;for(let M=0,x=y.length;M<x;M+=3){const C=y[M+0],w=y[M+1],A=y[M+2];d.push(C,w,w,A,A,C)}}else if(g!==void 0){const y=g.array;v=g.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const C=M+0,w=M+1,A=M+2;d.push(C,w,w,A,A,C)}}else return;const m=new(nh(d)?ah:oh)(d,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){const d=r.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function d0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,d*o,g),t.update(u,n,g))}function h(d,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,n,1)}function f(d,u,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y]*v[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function p0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m0(i,e,t){const n=new WeakMap,s=new at;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var u=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*w*4*f),L=new ih(A,C,w,f);L.type=bn,L.needsUpdate=!0;const _=x*4;for(let P=0;P<f;P++){const I=p[P],O=y[P],V=M[P],F=C*w*4*P;for(let U=0;U<I.count;U++){const G=U*_;g===!0&&(s.fromBufferAttribute(I,U),A[F+G+0]=s.x,A[F+G+1]=s.y,A[F+G+2]=s.z,A[F+G+3]=0),v===!0&&(s.fromBufferAttribute(O,U),A[F+G+4]=s.x,A[F+G+5]=s.y,A[F+G+6]=s.z,A[F+G+7]=0),m===!0&&(s.fromBufferAttribute(V,U),A[F+G+8]=s.x,A[F+G+9]=s.y,A[F+G+10]=s.z,A[F+G+11]=V.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new le(C,w)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function g0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Eh=new Rt,hc=new fh(1,1),wh=new ih,Th=new sf,Ah=new hh,uc=[],fc=[],dc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function ls(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=uc[s];if(r===void 0&&(r=new Float32Array(s),uc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Or(i,e){let t=fc[e];t===void 0&&(t=new Int32Array(e),fc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function v0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function y0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;mc.set(n),i.uniformMatrix2fv(this.addr,!1,mc),Tt(t,n)}}function S0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;pc.set(n),i.uniformMatrix3fv(this.addr,!1,pc),Tt(t,n)}}function b0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;dc.set(n),i.uniformMatrix4fv(this.addr,!1,dc),Tt(t,n)}}function E0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function w0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function C0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function D0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hc.compareFunction=th,r=hc):r=Eh,t.setTexture2D(e||r,s)}function I0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Th,s)}function U0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ah,s)}function N0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wh,s)}function F0(i){switch(i){case 5126:return v0;case 35664:return _0;case 35665:return x0;case 35666:return M0;case 35674:return y0;case 35675:return S0;case 35676:return b0;case 5124:case 35670:return E0;case 35667:case 35671:return w0;case 35668:case 35672:return T0;case 35669:case 35673:return A0;case 5125:return C0;case 36294:return R0;case 36295:return P0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}function O0(i,e){i.uniform1fv(this.addr,e)}function B0(i,e){const t=ls(e,this.size,2);i.uniform2fv(this.addr,t)}function z0(i,e){const t=ls(e,this.size,3);i.uniform3fv(this.addr,t)}function k0(i,e){const t=ls(e,this.size,4);i.uniform4fv(this.addr,t)}function H0(i,e){const t=ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V0(i,e){const t=ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function G0(i,e){const t=ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function W0(i,e){i.uniform1iv(this.addr,e)}function X0(i,e){i.uniform2iv(this.addr,e)}function q0(i,e){i.uniform3iv(this.addr,e)}function Y0(i,e){i.uniform4iv(this.addr,e)}function J0(i,e){i.uniform1uiv(this.addr,e)}function K0(i,e){i.uniform2uiv(this.addr,e)}function Z0(i,e){i.uniform3uiv(this.addr,e)}function j0(i,e){i.uniform4uiv(this.addr,e)}function $0(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Eh,r[o])}function Q0(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Th,r[o])}function eg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ah,r[o])}function tg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||wh,r[o])}function ng(i){switch(i){case 5126:return O0;case 35664:return B0;case 35665:return z0;case 35666:return k0;case 35674:return H0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return J0;case 36294:return K0;case 36295:return Z0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return tg}}class ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F0(t.type)}}class sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ng(t.type)}}class rg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const To=/(\w+)(\])?(\[|\.)?/g;function gc(i,e){i.seq.push(e),i.map[e.id]=e}function og(i,e,t){const n=i.name,s=n.length;for(To.lastIndex=0;;){const r=To.exec(n),o=To.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gc(t,c===void 0?new ig(a,i,e):new sg(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new rg(a),gc(t,f)),t=f}}}class Tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);og(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function vc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ag=37297;let lg=0;function cg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const _c=new qe;function hg(i){tt._getMatrix(_c,tt.workingColorSpace,i);const e=`mat3( ${_c.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Rr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cg(i.getShaderSource(e),a)}else return r}function ug(i,e){const t=hg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fg(i,e){let t;switch(e){case Hc:t="Linear";break;case Vc:t="Reinhard";break;case Gc:t="Cineon";break;case Ua:t="ACESFilmic";break;case Xc:t="AgX";break;case qc:t="Neutral";break;case Wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gr=new T;function dg(){tt.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),e=gr.y.toFixed(4),t=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function mg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Es(i){return i!==""}function Mc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(vg,xg)}const _g=new Map;function xg(i,e){let t=Ze[e];if(t===void 0){const n=_g.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Aa(t)}const Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(i){return i.replace(Mg,yg)}function yg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bc(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function bg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function wg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ia:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case Su:e="ENVMAP_BLENDING_ADD";break}return e}function Tg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ag(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Sg(t),c=bg(t),h=Eg(t),f=wg(t),d=Tg(t),u=pg(t),g=mg(r),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==jn?fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,ug("linearToOutputTexel",t.outputColorSpace),dg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),o=Aa(o),o=Mc(o,t),o=yc(o,t),a=Aa(a),a=Mc(a,t),a=yc(a,t),o=Sc(o),a=Sc(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,x=y+p+a,C=vc(s,s.VERTEX_SHADER,M),w=vc(s,s.FRAGMENT_SHADER,x);s.attachShader(v,C),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(C)||"",V=s.getShaderInfoLog(w)||"",F=I.trim(),U=O.trim(),G=V.trim();let z=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,w);else{const W=xc(s,C,"vertex"),X=xc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+W+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||G==="")&&(te=!1);te&&(P.diagnostics={runnable:z,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(C),s.deleteShader(w),L=new Tr(s,v),_=gg(s,v)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let _;this.getAttributes=function(){return _===void 0&&A(this),_};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,ag)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let Cg=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pg(e),t.set(e,n)),n}}class Pg{constructor(e){this.id=Cg++,this.code=e,this.usedTimes=0}}function Lg(i,e,t,n,s,r,o){const a=new Xa,l=new Rg,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,S,P,I,O){const V=I.fog,F=O.geometry,U=_.isMeshStandardMaterial?I.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||U),z=G&&G.mapping===Ur?G.image.height:null,te=g[_.type];_.precision!==null&&(u=s.getMaxPrecision(_.precision),u!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const W=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,X=W!==void 0?W.length:0;let ae=0;F.morphAttributes.position!==void 0&&(ae=1),F.morphAttributes.normal!==void 0&&(ae=2),F.morphAttributes.color!==void 0&&(ae=3);let Ee,ke,Fe,J;if(te){const it=xn[te];Ee=it.vertexShader,ke=it.fragmentShader}else Ee=_.vertexShader,ke=_.fragmentShader,l.update(_),Fe=l.getVertexShaderID(_),J=l.getFragmentShaderID(_);const j=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),ye=O.isInstancedMesh===!0,Ce=O.isBatchedMesh===!0,Qe=!!_.map,ct=!!_.matcap,D=!!G,oe=!!_.aoMap,ne=!!_.lightMap,ee=!!_.bumpMap,$=!!_.normalMap,me=!!_.displacementMap,ce=!!_.emissiveMap,ge=!!_.metalnessMap,We=!!_.roughnessMap,Ge=_.anisotropy>0,R=_.clearcoat>0,b=_.dispersion>0,H=_.iridescence>0,K=_.sheen>0,re=_.transmission>0,Z=Ge&&!!_.anisotropyMap,De=R&&!!_.clearcoatMap,pe=R&&!!_.clearcoatNormalMap,Re=R&&!!_.clearcoatRoughnessMap,Pe=H&&!!_.iridescenceMap,he=H&&!!_.iridescenceThicknessMap,be=K&&!!_.sheenColorMap,ze=K&&!!_.sheenRoughnessMap,Ie=!!_.specularMap,Me=!!_.specularColorMap,Je=!!_.specularIntensityMap,N=re&&!!_.transmissionMap,de=re&&!!_.thicknessMap,ve=!!_.gradientMap,Te=!!_.alphaMap,ue=_.alphaTest>0,ie=!!_.alphaHash,Le=!!_.extensions;let Xe=jn;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const ht={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Ee,fragmentShader:ke,defines:_.defines,customVertexShaderID:Fe,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ce,batchingColor:Ce&&O._colorsTexture!==null,instancing:ye,instancingColor:ye&&O.instanceColor!==null,instancingMorph:ye&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ki,alphaToCoverage:!!_.alphaToCoverage,map:Qe,matcap:ct,envMap:D,envMapMode:D&&G.mapping,envMapCubeUVHeight:z,aoMap:oe,lightMap:ne,bumpMap:ee,normalMap:$,displacementMap:d&&me,emissiveMap:ce,normalMapObjectSpace:$&&_.normalMapType===Tu,normalMapTangentSpace:$&&_.normalMapType===Va,metalnessMap:ge,roughnessMap:We,anisotropy:Ge,anisotropyMap:Z,clearcoat:R,clearcoatMap:De,clearcoatNormalMap:pe,clearcoatRoughnessMap:Re,dispersion:b,iridescence:H,iridescenceMap:Pe,iridescenceThicknessMap:he,sheen:K,sheenColorMap:be,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:Me,specularIntensityMap:Je,transmission:re,transmissionMap:N,thicknessMap:de,gradientMap:ve,opaque:_.transparent===!1&&_.blending===Hi&&_.alphaToCoverage===!1,alphaMap:Te,alphaTest:ue,alphaHash:ie,combine:_.combine,mapUv:Qe&&v(_.map.channel),aoMapUv:oe&&v(_.aoMap.channel),lightMapUv:ne&&v(_.lightMap.channel),bumpMapUv:ee&&v(_.bumpMap.channel),normalMapUv:$&&v(_.normalMap.channel),displacementMapUv:me&&v(_.displacementMap.channel),emissiveMapUv:ce&&v(_.emissiveMap.channel),metalnessMapUv:ge&&v(_.metalnessMap.channel),roughnessMapUv:We&&v(_.roughnessMap.channel),anisotropyMapUv:Z&&v(_.anisotropyMap.channel),clearcoatMapUv:De&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:ze&&v(_.sheenRoughnessMap.channel),specularMapUv:Ie&&v(_.specularMap.channel),specularColorMapUv:Me&&v(_.specularColorMap.channel),specularIntensityMapUv:Je&&v(_.specularIntensityMap.channel),transmissionMapUv:N&&v(_.transmissionMap.channel),thicknessMapUv:de&&v(_.thicknessMap.channel),alphaMapUv:Te&&v(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&($||Ge),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Qe||Te),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Qe&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:ce&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mn,flipSided:_.side===Ht,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Le&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&_.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(y(S,_),M(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function y(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),_.push(a.mask)}function x(_){const S=g[_.type];let P;if(S){const I=xn[S];P=Ns.clone(I.uniforms)}else P=_.uniforms;return P}function C(_,S){let P;for(let I=0,O=h.length;I<O;I++){const V=h[I];if(V.cacheKey===S){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Ag(i,S,_,r),h.push(P)),P}function w(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function A(_){l.remove(_)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:L}}function Dg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ec(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,u,g,v,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,d,u,g,v,m){const p=o(f,d,u,g,v,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function l(f,d,u,g,v,m){const p=o(f,d,u,g,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||Ig),n.length>1&&n.sort(d||Ec),s.length>1&&s.sort(d||Ec)}function h(){for(let f=e,d=i.length;f<d;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ug(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new wc,i.set(n,[o])):s>=r.length?(o=new wc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ng(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Ve};break;case"SpotLight":t={position:new T,direction:new T,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function Fg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Og=0;function Bg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zg(i){const e=new Ng,t=Fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new st,o=new st;function a(c){let h=0,f=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,y=0,M=0,x=0,C=0,w=0,A=0;c.sort(Bg);for(let _=0,S=c.length;_<S;_++){const P=c[_],I=P.color,O=P.intensity,V=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*O,f+=I.g*O,d+=I.b*O;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],O);A++}else if(P.isDirectionalLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,z=t.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[u]=z,n.directionalShadowMap[u]=F,n.directionalShadowMatrix[u]=P.shadow.matrix,y++}n.directional[u]=U,u++}else if(P.isSpotLight){const U=e.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(I).multiplyScalar(O),U.distance=V,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[v]=U;const G=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,G.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[v]=G.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=F,x++}v++}else if(P.isRectAreaLight){const U=e.get(P);U.color.copy(I).multiplyScalar(O),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=U,m++}else if(P.isPointLight){const U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const G=P.shadow,z=t.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=U,g++}else if(P.isHemisphereLight){const U=e.get(P);U.skyColor.copy(P.color).multiplyScalar(O),U.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==u||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==M||L.numSpotShadows!==x||L.numSpotMaps!==C||L.numLightProbes!==A)&&(n.directional.length=u,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.directionalLength=u,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=M,L.numSpotShadows=x,L.numSpotMaps=C,L.numLightProbes=A,n.version=Og++)}function l(c,h){let f=0,d=0,u=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isSpotLight){const x=n.spot[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Tc(i){const e=new zg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function kg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Tc(i),e.set(s,[a])):r>=o.length?(a=new Tc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
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
}`;function Gg(i,e,t){let n=new Ya;const s=new le,r=new le,o=new at,a=new rd({depthPacking:wu}),l=new od,c={},h=t.maxTextureSize,f={[$n]:Ht,[Ht]:$n,[Mn]:Mn},d=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Hg,fragmentShader:Vg}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let p=this.type;this.render=function(w,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const _=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(On),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==Un&&this.type===Un,V=p===Un&&this.type!==Un;for(let F=0,U=w.length;F<U;F++){const G=w[F],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const te=z.getFrameExtents();if(s.multiply(te),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,z.mapSize.y=r.y)),z.map===null||O===!0||V===!0){const X=this.type!==Un?{minFilter:jt,magFilter:jt}:{};z.map!==null&&z.map.dispose(),z.map=new mn(s.x,s.y,X),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const W=z.getViewportCount();for(let X=0;X<W;X++){const ae=z.getViewport(X);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),I.viewport(o),z.updateMatrices(G,X),n=z.getFrustum(),x(A,L,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Un&&y(z,L),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,S,P)};function y(w,A){const L=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,v,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,L,u,v,null)}function M(w,A,L,_){let S=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=S.uuid,O=A.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let F=V[O];F===void 0&&(F=S.clone(),V[O]=F,A.addEventListener("dispose",C)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,_===Un?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=i.properties.get(S);I.light=L}return S}function x(w,A,L,_,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Un)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const O=e.update(w),V=w.material;if(Array.isArray(V)){const F=O.groups;for(let U=0,G=F.length;U<G;U++){const z=F[U],te=V[z.materialIndex];if(te&&te.visible){const W=M(w,te,_,S);w.onBeforeShadow(i,w,A,L,O,W,z),i.renderBufferDirect(L,null,O,W,w,z),w.onAfterShadow(i,w,A,L,O,W,z)}}}else if(V.visible){const F=M(w,V,_,S);w.onBeforeShadow(i,w,A,L,O,F,null),i.renderBufferDirect(L,null,O,F,w,null),w.onAfterShadow(i,w,A,L,O,F,null)}}const I=w.children;for(let O=0,V=I.length;O<V;O++)x(I[O],A,L,_,S)}function C(w){w.target.removeEventListener("dispose",C);for(const L in c){const _=c[L],S=w.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const Wg={[zo]:ko,[Ho]:Wo,[Vo]:Xo,[Xi]:Go,[ko]:zo,[Wo]:Ho,[Xo]:Vo,[Go]:Xi};function Xg(i,e){function t(){let N=!1;const de=new at;let ve=null;const Te=new at(0,0,0,0);return{setMask:function(ue){ve!==ue&&!N&&(i.colorMask(ue,ue,ue,ue),ve=ue)},setLocked:function(ue){N=ue},setClear:function(ue,ie,Le,Xe,ht){ht===!0&&(ue*=Xe,ie*=Xe,Le*=Xe),de.set(ue,ie,Le,Xe),Te.equals(de)===!1&&(i.clearColor(ue,ie,Le,Xe),Te.copy(de))},reset:function(){N=!1,ve=null,Te.set(-1,0,0,0)}}}function n(){let N=!1,de=!1,ve=null,Te=null,ue=null;return{setReversed:function(ie){if(de!==ie){const Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),de=ie;const Xe=ue;ue=null,this.setClear(Xe)}},getReversed:function(){return de},setTest:function(ie){ie?j(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ie){ve!==ie&&!N&&(i.depthMask(ie),ve=ie)},setFunc:function(ie){if(de&&(ie=Wg[ie]),Te!==ie){switch(ie){case zo:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Ho:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ie}},setLocked:function(ie){N=ie},setClear:function(ie){ue!==ie&&(de&&(ie=1-ie),i.clearDepth(ie),ue=ie)},reset:function(){N=!1,ve=null,Te=null,ue=null,de=!1}}}function s(){let N=!1,de=null,ve=null,Te=null,ue=null,ie=null,Le=null,Xe=null,ht=null;return{setTest:function(it){N||(it?j(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(it){de!==it&&!N&&(i.stencilMask(it),de=it)},setFunc:function(it,Cn,_n){(ve!==it||Te!==Cn||ue!==_n)&&(i.stencilFunc(it,Cn,_n),ve=it,Te=Cn,ue=_n)},setOp:function(it,Cn,_n){(ie!==it||Le!==Cn||Xe!==_n)&&(i.stencilOp(it,Cn,_n),ie=it,Le=Cn,Xe=_n)},setLocked:function(it){N=it},setClear:function(it){ht!==it&&(i.clearStencil(it),ht=it)},reset:function(){N=!1,de=null,ve=null,Te=null,ue=null,ie=null,Le=null,Xe=null,ht=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,u=[],g=null,v=!1,m=null,p=null,y=null,M=null,x=null,C=null,w=null,A=new Ve(0,0,0),L=0,_=!1,S=null,P=null,I=null,O=null,V=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,G=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=G>=2);let te=null,W={};const X=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Ee=new at().fromArray(X),ke=new at().fromArray(ae);function Fe(N,de,ve,Te){const ue=new Uint8Array(4),ie=i.createTexture();i.bindTexture(N,ie),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<ve;Le++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(de+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ie}const J={};J[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Xi),ee(!1),$(yl),j(i.CULL_FACE),oe(On);function j(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function _e(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function ye(N,de){return f[N]!==de?(i.bindFramebuffer(N,de),f[N]=de,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=de),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ce(N,de){let ve=u,Te=!1;if(N){ve=d.get(de),ve===void 0&&(ve=[],d.set(de,ve));const ue=N.textures;if(ve.length!==ue.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Le=ue.length;ie<Le;ie++)ve[ie]=i.COLOR_ATTACHMENT0+ie;ve.length=ue.length,Te=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ve)}function Qe(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const ct={[ci]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};ct[ou]=i.MIN,ct[au]=i.MAX;const D={[lu]:i.ZERO,[cu]:i.ONE,[hu]:i.SRC_COLOR,[Oo]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[Bo]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[du]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[_u]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(N,de,ve,Te,ue,ie,Le,Xe,ht,it){if(N===On){v===!0&&(_e(i.BLEND),v=!1);return}if(v===!1&&(j(i.BLEND),v=!0),N!==iu){if(N!==m||it!==_){if((p!==ci||x!==ci)&&(i.blendEquation(i.FUNC_ADD),p=ci,x=ci),it)switch(N){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,M=null,C=null,w=null,A.set(0,0,0),L=0,m=N,_=it}return}ue=ue||de,ie=ie||ve,Le=Le||Te,(de!==p||ue!==x)&&(i.blendEquationSeparate(ct[de],ct[ue]),p=de,x=ue),(ve!==y||Te!==M||ie!==C||Le!==w)&&(i.blendFuncSeparate(D[ve],D[Te],D[ie],D[Le]),y=ve,M=Te,C=ie,w=Le),(Xe.equals(A)===!1||ht!==L)&&(i.blendColor(Xe.r,Xe.g,Xe.b,ht),A.copy(Xe),L=ht),m=N,_=!1}function ne(N,de){N.side===Mn?_e(i.CULL_FACE):j(i.CULL_FACE);let ve=N.side===Ht;de&&(ve=!ve),ee(ve),N.blending===Hi&&N.transparent===!1?oe(On):oe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Te=N.stencilWrite;a.setTest(Te),Te&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function $(N){N!==tu?(j(i.CULL_FACE),N!==P&&(N===yl?i.cullFace(i.BACK):N===nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),P=N}function me(N){N!==I&&(U&&i.lineWidth(N),I=N)}function ce(N,de,ve){N?(j(i.POLYGON_OFFSET_FILL),(O!==de||V!==ve)&&(i.polygonOffset(de,ve),O=de,V=ve)):_e(i.POLYGON_OFFSET_FILL)}function ge(N){N?j(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function We(N){N===void 0&&(N=i.TEXTURE0+F-1),te!==N&&(i.activeTexture(N),te=N)}function Ge(N,de,ve){ve===void 0&&(te===null?ve=i.TEXTURE0+F-1:ve=te);let Te=W[ve];Te===void 0&&(Te={type:void 0,texture:void 0},W[ve]=Te),(Te.type!==N||Te.texture!==de)&&(te!==ve&&(i.activeTexture(ve),te=ve),i.bindTexture(N,de||J[N]),Te.type=N,Te.texture=de)}function R(){const N=W[te];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){Ee.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ee.copy(N))}function ze(N){ke.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ke.copy(N))}function Ie(N,de){let ve=c.get(de);ve===void 0&&(ve=new WeakMap,c.set(de,ve));let Te=ve.get(N);Te===void 0&&(Te=i.getUniformBlockIndex(de,N.name),ve.set(N,Te))}function Me(N,de){const Te=c.get(de).get(N);l.get(de)!==Te&&(i.uniformBlockBinding(de,Te,N.__bindingPointIndex),l.set(de,Te))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,W={},f={},d=new WeakMap,u=[],g=null,v=!1,m=null,p=null,y=null,M=null,x=null,C=null,w=null,A=new Ve(0,0,0),L=0,_=!1,S=null,P=null,I=null,O=null,V=null,Ee.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:_e,bindFramebuffer:ye,drawBuffers:Ce,useProgram:Qe,setBlending:oe,setMaterial:ne,setFlipSided:ee,setCullFace:$,setLineWidth:me,setPolygonOffset:ce,setScissorTest:ge,activeTexture:We,bindTexture:Ge,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:H,texImage2D:Pe,texImage3D:he,updateUBOMapping:Ie,uniformBlockBinding:Me,texStorage2D:pe,texStorage3D:Re,texSubImage2D:K,texSubImage3D:re,compressedTexSubImage2D:Z,compressedTexSubImage3D:De,scissor:be,viewport:ze,reset:Je}}function qg(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap;let f;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return u?new OffscreenCanvas(R,b):Is("canvas")}function v(R,b,H){let K=1;const re=Ge(R);if((re.width>H||re.height>H)&&(K=H/Math.max(re.width,re.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(K*re.width),De=Math.floor(K*re.height);f===void 0&&(f=g(Z,De));const pe=b?g(Z,De):f;return pe.width=Z,pe.height=De,pe.getContext("2d").drawImage(R,0,0,Z,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Z+"x"+De+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,b,H,K,re=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),b===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),b===i.RGBA){const De=re?Rr:tt.getTransfer(K);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=De===rt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(R,b){let H;return R?b===null||b===mi||b===Ps?H=i.DEPTH24_STENCIL8:b===bn?H=i.DEPTH32F_STENCIL8:b===Rs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===mi||b===Ps?H=i.DEPTH_COMPONENT24:b===bn?H=i.DEPTH_COMPONENT32F:b===Rs&&(H=i.DEPTH_COMPONENT16),H}function C(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==Zt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){const b=R.target;b.removeEventListener("dispose",w),L(b),b.isVideoTexture&&h.delete(b)}function A(R){const b=R.target;b.removeEventListener("dispose",A),S(b)}function L(R){const b=n.get(R);if(b.__webglInit===void 0)return;const H=R.source,K=d.get(H);if(K){const re=K[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&_(R),Object.keys(K).length===0&&d.delete(H)}n.remove(R)}function _(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const H=R.source,K=d.get(H);delete K[b.__cacheKey],o.memory.textures--}function S(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let re=0;re<b.__webglFramebuffer[K].length;re++)i.deleteFramebuffer(b.__webglFramebuffer[K][re]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=R.textures;for(let K=0,re=H.length;K<re;K++){const Z=n.get(H[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(R)}let P=0;function I(){P=0}function O(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function V(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function F(R,b){const H=n.get(R);if(R.isVideoTexture&&ge(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,R,b);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function U(R,b){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){J(H,R,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function G(R,b){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){J(H,R,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function z(R,b){const H=n.get(R);if(R.version>0&&H.__version!==R.version){j(H,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const te={[Ji]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},W={[jt]:i.NEAREST,[bu]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},X={[Au]:i.NEVER,[Iu]:i.ALWAYS,[Cu]:i.LESS,[th]:i.LEQUAL,[Ru]:i.EQUAL,[Du]:i.GEQUAL,[Pu]:i.GREATER,[Lu]:i.NOTEQUAL};function ae(R,b){if(b.type===bn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Zt||b.magFilter===Wr||b.magFilter===qs||b.magFilter===Sn||b.minFilter===Zt||b.minFilter===Wr||b.minFilter===qs||b.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,te[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,te[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,te[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,W[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,W[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,X[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===jt||b.minFilter!==qs&&b.minFilter!==Sn||b.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ee(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));const K=b.source;let re=d.get(K);re===void 0&&(re={},d.set(K,re));const Z=V(b);if(Z!==R.__cacheKey){re[Z]===void 0&&(re[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),re[Z].usedTimes++;const De=re[R.__cacheKey];De!==void 0&&(re[R.__cacheKey].usedTimes--,De.usedTimes===0&&_(b)),R.__cacheKey=Z,R.__webglTexture=re[Z].texture}return H}function ke(R,b,H){return Math.floor(Math.floor(R/H)/b)}function Fe(R,b,H,K){const Z=R.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,K,b.data);else{Z.sort((he,be)=>he.start-be.start);let De=0;for(let he=1;he<Z.length;he++){const be=Z[De],ze=Z[he],Ie=be.start+be.count,Me=ke(ze.start,b.width,4),Je=ke(be.start,b.width,4);ze.start<=Ie+1&&Me===Je&&ke(ze.start+ze.count-1,b.width,4)===Me?be.count=Math.max(be.count,ze.start+ze.count-be.start):(++De,Z[De]=ze)}Z.length=De+1;const pe=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let he=0,be=Z.length;he<be;he++){const ze=Z[he],Ie=Math.floor(ze.start/4),Me=Math.ceil(ze.count/4),Je=Ie%b.width,N=Math.floor(Ie/b.width),de=Me,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Je,N,de,ve,H,K,b.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function J(R,b,H){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const re=Ee(R,b),Z=b.source;t.bindTexture(K,R.__webglTexture,i.TEXTURE0+H);const De=n.get(Z);if(Z.version!==De.__version||re===!0){t.activeTexture(i.TEXTURE0+H);const pe=tt.getPrimaries(tt.workingColorSpace),Re=b.colorSpace===Fn?null:tt.getPrimaries(b.colorSpace),Pe=b.colorSpace===Fn||pe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let he=v(b.image,!1,s.maxTextureSize);he=We(b,he);const be=r.convert(b.format,b.colorSpace),ze=r.convert(b.type);let Ie=M(b.internalFormat,be,ze,b.colorSpace,b.isVideoTexture);ae(K,b);let Me;const Je=b.mipmaps,N=b.isVideoTexture!==!0,de=De.__version===void 0||re===!0,ve=Z.dataReady,Te=C(b,he);if(b.isDepthTexture)Ie=x(b.format===Ds,b.type),de&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ie,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Ie,he.width,he.height,0,be,ze,null));else if(b.isDataTexture)if(Je.length>0){N&&de&&t.texStorage2D(i.TEXTURE_2D,Te,Ie,Je[0].width,Je[0].height);for(let ue=0,ie=Je.length;ue<ie;ue++)Me=Je[ue],N?ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,be,ze,Me.data):t.texImage2D(i.TEXTURE_2D,ue,Ie,Me.width,Me.height,0,be,ze,Me.data);b.generateMipmaps=!1}else N?(de&&t.texStorage2D(i.TEXTURE_2D,Te,Ie,he.width,he.height),ve&&Fe(b,he,be,ze)):t.texImage2D(i.TEXTURE_2D,0,Ie,he.width,he.height,0,be,ze,he.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ie,Je[0].width,Je[0].height,he.depth);for(let ue=0,ie=Je.length;ue<ie;ue++)if(Me=Je[ue],b.format!==dn)if(be!==null)if(N){if(ve)if(b.layerUpdates.size>0){const Le=ic(Me.width,Me.height,b.format,b.type);for(const Xe of b.layerUpdates){const ht=Me.data.subarray(Xe*Le/Me.data.BYTES_PER_ELEMENT,(Xe+1)*Le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Xe,Me.width,Me.height,1,be,ht)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,he.depth,be,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Ie,Me.width,Me.height,he.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Me.width,Me.height,he.depth,be,ze,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Ie,Me.width,Me.height,he.depth,0,be,ze,Me.data)}else{N&&de&&t.texStorage2D(i.TEXTURE_2D,Te,Ie,Je[0].width,Je[0].height);for(let ue=0,ie=Je.length;ue<ie;ue++)Me=Je[ue],b.format!==dn?be!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,be,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Ie,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me.width,Me.height,be,ze,Me.data):t.texImage2D(i.TEXTURE_2D,ue,Ie,Me.width,Me.height,0,be,ze,Me.data)}else if(b.isDataArrayTexture)if(N){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ie,he.width,he.height,he.depth),ve)if(b.layerUpdates.size>0){const ue=ic(he.width,he.height,b.format,b.type);for(const ie of b.layerUpdates){const Le=he.data.subarray(ie*ue/he.data.BYTES_PER_ELEMENT,(ie+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,he.width,he.height,1,be,ze,Le)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,be,ze,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,he.width,he.height,he.depth,0,be,ze,he.data);else if(b.isData3DTexture)N?(de&&t.texStorage3D(i.TEXTURE_3D,Te,Ie,he.width,he.height,he.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,be,ze,he.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,he.width,he.height,he.depth,0,be,ze,he.data);else if(b.isFramebufferTexture){if(de)if(N)t.texStorage2D(i.TEXTURE_2D,Te,Ie,he.width,he.height);else{let ue=he.width,ie=he.height;for(let Le=0;Le<Te;Le++)t.texImage2D(i.TEXTURE_2D,Le,Ie,ue,ie,0,be,ze,null),ue>>=1,ie>>=1}}else if(Je.length>0){if(N&&de){const ue=Ge(Je[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ie,ue.width,ue.height)}for(let ue=0,ie=Je.length;ue<ie;ue++)Me=Je[ue],N?ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,be,ze,Me):t.texImage2D(i.TEXTURE_2D,ue,Ie,be,ze,Me);b.generateMipmaps=!1}else if(N){if(de){const ue=Ge(he);t.texStorage2D(i.TEXTURE_2D,Te,Ie,ue.width,ue.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,ze,he)}else t.texImage2D(i.TEXTURE_2D,0,Ie,be,ze,he);m(b)&&p(K),De.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function j(R,b,H){if(b.image.length!==6)return;const K=Ee(R,b),re=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const Z=n.get(re);if(re.version!==Z.__version||K===!0){t.activeTexture(i.TEXTURE0+H);const De=tt.getPrimaries(tt.workingColorSpace),pe=b.colorSpace===Fn?null:tt.getPrimaries(b.colorSpace),Re=b.colorSpace===Fn||De===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,he=b.image[0]&&b.image[0].isDataTexture,be=[];for(let ie=0;ie<6;ie++)!Pe&&!he?be[ie]=v(b.image[ie],!0,s.maxCubemapSize):be[ie]=he?b.image[ie].image:b.image[ie],be[ie]=We(b,be[ie]);const ze=be[0],Ie=r.convert(b.format,b.colorSpace),Me=r.convert(b.type),Je=M(b.internalFormat,Ie,Me,b.colorSpace),N=b.isVideoTexture!==!0,de=Z.__version===void 0||K===!0,ve=re.dataReady;let Te=C(b,ze);ae(i.TEXTURE_CUBE_MAP,b);let ue;if(Pe){N&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Je,ze.width,ze.height);for(let ie=0;ie<6;ie++){ue=be[ie].mipmaps;for(let Le=0;Le<ue.length;Le++){const Xe=ue[Le];b.format!==dn?Ie!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Xe.width,Xe.height,Ie,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Je,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Xe.width,Xe.height,Ie,Me,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Je,Xe.width,Xe.height,0,Ie,Me,Xe.data)}}}else{if(ue=b.mipmaps,N&&de){ue.length>0&&Te++;const ie=Ge(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(he){N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be[ie].width,be[ie].height,Ie,Me,be[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Je,be[ie].width,be[ie].height,0,Ie,Me,be[ie].data);for(let Le=0;Le<ue.length;Le++){const ht=ue[Le].image[ie].image;N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,ht.width,ht.height,Ie,Me,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Je,ht.width,ht.height,0,Ie,Me,ht.data)}}else{N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,Me,be[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Je,Ie,Me,be[ie]);for(let Le=0;Le<ue.length;Le++){const Xe=ue[Le];N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Ie,Me,Xe.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Je,Ie,Me,Xe.image[ie])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),Z.__version=re.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function _e(R,b,H,K,re,Z){const De=r.convert(H.format,H.colorSpace),pe=r.convert(H.type),Re=M(H.internalFormat,De,pe,H.colorSpace),Pe=n.get(b),he=n.get(H);if(he.__renderTarget=b,!Pe.__hasExternalTextures){const be=Math.max(1,b.width>>Z),ze=Math.max(1,b.height>>Z);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,Z,Re,be,ze,b.depth,0,De,pe,null):t.texImage2D(re,Z,Re,be,ze,0,De,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ce(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,re,he.__webglTexture,0,me(b)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,re,he.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(R,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const K=b.depthTexture,re=K&&K.isDepthTexture?K.type:null,Z=x(b.stencilBuffer,re),De=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=me(b);ce(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,Z,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,R)}else{const K=b.textures;for(let re=0;re<K.length;re++){const Z=K[re],De=r.convert(Z.format,Z.colorSpace),pe=r.convert(Z.type),Re=M(Z.internalFormat,De,pe,Z.colorSpace),Pe=me(b);H&&ce(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Re,b.width,b.height):ce(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Re,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Re,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const re=K.__webglTexture,Z=me(b);if(b.depthTexture.format===Ls)ce(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(b.depthTexture.format===Ds)ce(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Qe(R){const b=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",re)};K.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const K=R.texture.mipmaps;K&&K.length>0?Ce(b.__webglFramebuffer[0],R):Ce(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),ye(b.__webglDepthbuffer[K],R,!1);else{const re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Z)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ye(b.__webglDepthbuffer,R,!1);else{const re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(R,b,H){const K=n.get(R);b!==void 0&&_e(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Qe(R)}function D(R){const b=R.texture,H=n.get(R),K=n.get(b);R.addEventListener("dispose",A);const re=R.textures,Z=R.isWebGLCubeRenderTarget===!0,De=re.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let Re=0;Re<b.mipmaps.length;Re++)H.__webglFramebuffer[pe][Re]=i.createFramebuffer()}else H.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)H.__webglFramebuffer[pe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(De)for(let pe=0,Re=re.length;pe<Re;pe++){const Pe=n.get(re[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ce(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const Re=re[pe];H.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);const Pe=r.convert(Re.format,Re.colorSpace),he=r.convert(Re.type),be=M(Re.internalFormat,Pe,he,Re.colorSpace,R.isXRRenderTarget===!0),ze=me(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,be,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ae(i.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)_e(H.__webglFramebuffer[pe][Re],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re);else _e(H.__webglFramebuffer[pe],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,Re=re.length;pe<Re;pe++){const Pe=re[pe],he=n.get(Pe);let be=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,he.__webglTexture),ae(be,Pe),_e(H.__webglFramebuffer,R,Pe,i.COLOR_ATTACHMENT0+pe,be,0),m(Pe)&&p(be)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,K.__webglTexture),ae(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)_e(H.__webglFramebuffer[Re],R,b,i.COLOR_ATTACHMENT0,pe,Re);else _e(H.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,pe,0);m(b)&&p(pe),t.unbindTexture()}R.depthBuffer&&Qe(R)}function oe(R){const b=R.textures;for(let H=0,K=b.length;H<K;H++){const re=b[H];if(m(re)){const Z=y(R),De=n.get(re).__webglTexture;t.bindTexture(Z,De),p(Z),t.unbindTexture()}}}const ne=[],ee=[];function $(R){if(R.samples>0){if(ce(R)===!1){const b=R.textures,H=R.width,K=R.height;let re=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(R),pe=b.length>1;if(pe)for(let Pe=0;Pe<b.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Re=R.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Pe=0;Pe<b.length;Pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);const he=n.get(b[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,re,i.NEAREST),l===!0&&(ne.length=0,ee.length=0,ne.push(i.COLOR_ATTACHMENT0+Pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ne.push(Z),ee.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Pe=0;Pe<b.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);const he=n.get(b[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function me(R){return Math.min(s.maxSamples,R.samples)}function ce(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function We(R,b){const H=R.colorSpace,K=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Ki&&H!==Fn&&(tt.getTransfer(H)===rt?(K!==dn||re!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=ct,this.setupRenderTarget=D,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ce}function Yg(i,e){function t(n,s=Fn){let r;const o=tt.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jc)return i.BYTE;if(n===Kc)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===Na)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===$c)return i.ALPHA;if(n===Qc)return i.RGB;if(n===dn)return i.RGBA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===za)return i.RED_INTEGER;if(n===eh)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Ha)return i.RGBA_INTEGER;if(n===Mr||n===yr||n===Sr||n===br)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===Zo||n===jo||n===$o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===ea||n===ta)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qo||n===ea)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===fa||n===da||n===pa||n===ma)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===na)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===aa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ua)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===va||n===_a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ga)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xa||n===Ma||n===ya||n===Sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kg=`
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

}`;class Zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new dh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kt({vertexShader:Jg,fragmentShader:Kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jg extends rs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Zg,p={},y=t.getContextAttributes();let M=null,x=null;const C=[],w=[],A=new le;let L=null;const _=new zt;_.viewport=new at;const S=new zt;S.viewport=new at;const P=[_,S],I=new vd;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let j=C[J];return j===void 0&&(j=new uo,C[J]=j),j.getTargetRaySpace()},this.getControllerGrip=function(J){let j=C[J];return j===void 0&&(j=new uo,C[J]=j),j.getGripSpace()},this.getHand=function(J){let j=C[J];return j===void 0&&(j=new uo,C[J]=j),j.getHandSpace()};function F(J){const j=w.indexOf(J.inputSource);if(j===-1)return;const _e=C[j];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||o),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",G);for(let J=0;J<C.length;J++){const j=w[J];j!==null&&(w[J]=null,C[J].disconnect(j))}O=null,V=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(M),u=null,d=null,f=null,s=null,x=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",U),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ye=null,Ce=null;y.depth&&(Ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?Ds:Ls,ye=y.stencil?Ps:mi);const Qe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new mn(d.textureWidth,d.textureHeight,{format:dn,type:wn,depthTexture:new fh(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new mn(u.framebufferWidth,u.framebufferHeight,{format:dn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Fe.setContext(s),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(J){for(let j=0;j<J.removed.length;j++){const _e=J.removed[j],ye=w.indexOf(_e);ye>=0&&(w[ye]=null,C[ye].disconnect(_e))}for(let j=0;j<J.added.length;j++){const _e=J.added[j];let ye=w.indexOf(_e);if(ye===-1){for(let Qe=0;Qe<C.length;Qe++)if(Qe>=w.length){w.push(_e),ye=Qe;break}else if(w[Qe]===null){w[Qe]=_e,ye=Qe;break}if(ye===-1)break}const Ce=C[ye];Ce&&Ce.connect(_e)}}const z=new T,te=new T;function W(J,j,_e){z.setFromMatrixPosition(j.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);const ye=z.distanceTo(te),Ce=j.projectionMatrix.elements,Qe=_e.projectionMatrix.elements,ct=Ce[14]/(Ce[10]-1),D=Ce[14]/(Ce[10]+1),oe=(Ce[9]+1)/Ce[5],ne=(Ce[9]-1)/Ce[5],ee=(Ce[8]-1)/Ce[0],$=(Qe[8]+1)/Qe[0],me=ct*ee,ce=ct*$,ge=ye/(-ee+$),We=ge*-ee;if(j.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(We),J.translateZ(ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ce[10]===-1)J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ge=ct+ge,R=D+ge,b=me-We,H=ce+(ye-We),K=oe*D/R*Ge,re=ne*D/R*Ge;J.projectionMatrix.makePerspective(b,H,K,re,Ge,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function X(J,j){j===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(j.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let j=J.near,_e=J.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),I.near=S.near=_.near=j,I.far=S.far=_.far=_e,(O!==I.near||V!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,V=I.far),I.layers.mask=J.layers.mask|6,_.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const ye=J.parent,Ce=I.cameras;X(I,ye);for(let Qe=0;Qe<Ce.length;Qe++)X(Ce[Qe],ye);Ce.length===2?W(I,_,S):I.projectionMatrix.copy(_.projectionMatrix),ae(J,I,ye)};function ae(J,j,_e){_e===null?J.matrix.copy(j.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(j.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Zi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(J){return p[J]};let Ee=null;function ke(J,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const _e=h.views;u!==null&&(e.setRenderTargetFramebuffer(x,u.framebuffer),e.setRenderTarget(x));let ye=!1;_e.length!==I.cameras.length&&(I.cameras.length=0,ye=!0);for(let D=0;D<_e.length;D++){const oe=_e[D];let ne=null;if(u!==null)ne=u.getViewport(oe);else{const $=f.getViewSubImage(d,oe);ne=$.viewport,D===0&&(e.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(x))}let ee=P[D];ee===void 0&&(ee=new zt,ee.layers.enable(D),ee.viewport=new at,P[D]=ee),ee.matrix.fromArray(oe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(oe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ne.x,ne.y,ne.width,ne.height),D===0&&(I.matrix.copy(ee.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ye===!0&&I.cameras.push(ee)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const D=f.getDepthInformation(_e[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Ce&&Ce.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let D=0;D<_e.length;D++){const oe=_e[D].camera;if(oe){let ne=p[oe];ne||(ne=new dh,p[oe]=ne);const ee=f.getCameraImage(oe);ne.sourceTexture=ee}}}}for(let _e=0;_e<C.length;_e++){const ye=w[_e],Ce=C[_e];ye!==null&&Ce!==void 0&&Ce.update(ye,j,c||o)}Ee&&Ee(J,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Fe=new bh;Fe.setAnimationLoop(ke),this.setAnimationLoop=function(J){Ee=J},this.dispose=function(){}}}const oi=new Qt,$g=new st;function Qg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,oi.copy(x),oi.x*=-1,oi.y*=-1,oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(oi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ev(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function c(y,M){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(y,C);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const M=f();y.__bindingPointIndex=M;const x=i.createBuffer(),C=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=s[y.id],x=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,A=x.length;w<A;w++){const L=Array.isArray(x[w])?x[w]:[x[w]];for(let _=0,S=L.length;_<S;_++){const P=L[_];if(u(P,w,_,C)===!0){const I=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let F=0;F<O.length;F++){const U=O[F],G=v(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,I+V,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,V),V+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,M,x,C){const w=y.value,A=M+"_"+x;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const L=C[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(y){const M=y.uniforms;let x=0;const C=16;for(let A=0,L=M.length;A<L;A++){const _=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,P=_.length;S<P;S++){const I=_[S],O=Array.isArray(I.value)?I.value:[I.value];for(let V=0,F=O.length;V<F;V++){const U=O[V],G=v(U),z=x%C,te=z%G.boundary,W=z+te;x+=te,W!==0&&C-W<G.storage&&(x+=C-W),I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=G.storage}}}const w=x%C;return w>0&&(x+=C-w),y.__size=x,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class tv{constructor(e={}){const{canvas:t=Zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let C=!1;this._outputColorSpace=Ct;let w=0,A=0,L=null,_=-1,S=null;const P=new at,I=new at;let O=null;const V=new Ve(0);let F=0,U=t.width,G=t.height,z=1,te=null,W=null;const X=new at(0,0,U,G),ae=new at(0,0,U,G);let Ee=!1;const ke=new Ya;let Fe=!1,J=!1;const j=new st,_e=new T,ye=new at,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function ct(){return L===null?z:1}let D=n;function oe(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ue,!1),D===null){const B="webgl2";if(D=oe(B,E),D===null)throw oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ne,ee,$,me,ce,ge,We,Ge,R,b,H,K,re,Z,De,pe,Re,Pe,he,be,ze,Ie,Me,Je;function N(){ne=new u0(D),ne.init(),Ie=new Yg(D,ne),ee=new s0(D,ne,e,Ie),$=new Xg(D,ne),ee.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),me=new p0(D),ce=new Dg,ge=new qg(D,ne,$,ce,ee,Ie,me),We=new o0(x),Ge=new h0(x),R=new Md(D),Me=new n0(D,R),b=new f0(D,R,me,Me),H=new g0(D,b,R,me),he=new m0(D,ee,ge),pe=new r0(ce),K=new Lg(x,We,Ge,ne,ee,Me,pe),re=new Qg(x,ce),Z=new Ug,De=new kg(ne),Pe=new t0(x,We,Ge,$,H,u,l),Re=new Gg(x,H,ee),Je=new ev(D,me,ee,$),be=new i0(D,ne,me),ze=new d0(D,ne,me),me.programs=K.programs,x.capabilities=ee,x.extensions=ne,x.properties=ce,x.renderLists=Z,x.shadowMap=Re,x.state=$,x.info=me}N();const de=new jg(x,D);this.xr=de,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(U,G,!1))},this.getSize=function(E){return E.set(U,G)},this.setSize=function(E,B,q=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,G=B,t.width=Math.floor(E*z),t.height=Math.floor(B*z),q===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(U*z,G*z).floor()},this.setDrawingBufferSize=function(E,B,q){U=E,G=B,z=q,t.width=Math.floor(E*q),t.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(X)},this.setViewport=function(E,B,q,Y){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,B,q,Y),$.viewport(P.copy(X).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,B,q,Y){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,B,q,Y),$.scissor(I.copy(ae).multiplyScalar(z).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(E){$.setScissorTest(Ee=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){W=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,q=!0){let Y=0;if(E){let k=!1;if(L!==null){const fe=L.texture.format;k=fe===Ha||fe===ka||fe===za}if(k){const fe=L.texture.type,Se=fe===wn||fe===mi||fe===Rs||fe===Ps||fe===Fa||fe===Oa,Ae=Pe.getClearColor(),we=Pe.getClearAlpha(),Be=Ae.r,He=Ae.g,Ue=Ae.b;Se?(g[0]=Be,g[1]=He,g[2]=Ue,g[3]=we,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Be,v[1]=He,v[2]=Ue,v[3]=we,D.clearBufferiv(D.COLOR,0,v))}else Y|=D.COLOR_BUFFER_BIT}B&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Pe.dispose(),Z.dispose(),De.dispose(),ce.dispose(),We.dispose(),Ge.dispose(),H.dispose(),Me.dispose(),Je.dispose(),K.dispose(),de.dispose(),de.removeEventListener("sessionstart",_n),de.removeEventListener("sessionend",hl),Qn.stop()};function ve(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=me.autoReset,B=Re.enabled,q=Re.autoUpdate,Y=Re.needsUpdate,k=Re.type;N(),me.autoReset=E,Re.enabled=B,Re.autoUpdate=q,Re.needsUpdate=Y,Re.type=k}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ie(E){const B=E.target;B.removeEventListener("dispose",ie),Le(B)}function Le(E){Xe(E),ce.remove(E)}function Xe(E){const B=ce.get(E).programs;B!==void 0&&(B.forEach(function(q){K.releaseProgram(q)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,Y,k,fe){B===null&&(B=Ce);const Se=k.isMesh&&k.matrixWorld.determinant()<0,Ae=Oh(E,B,q,Y,k);$.setMaterial(Y,Se);let we=q.index,Be=1;if(Y.wireframe===!0){if(we=b.getWireframeAttribute(q),we===void 0)return;Be=2}const He=q.drawRange,Ue=q.attributes.position;let et=He.start*Be,ot=(He.start+He.count)*Be;fe!==null&&(et=Math.max(et,fe.start*Be),ot=Math.min(ot,(fe.start+fe.count)*Be)),we!==null?(et=Math.max(et,0),ot=Math.min(ot,we.count)):Ue!=null&&(et=Math.max(et,0),ot=Math.min(ot,Ue.count));const _t=ot-et;if(_t<0||_t===1/0)return;Me.setup(k,Y,Ae,q,we);let ft,lt=be;if(we!==null&&(ft=R.get(we),lt=ze,lt.setIndex(ft)),k.isMesh)Y.wireframe===!0?($.setLineWidth(Y.wireframeLinewidth*ct()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(k.isLine){let Ne=Y.linewidth;Ne===void 0&&(Ne=1),$.setLineWidth(Ne*ct()),k.isLineSegments?lt.setMode(D.LINES):k.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else k.isPoints?lt.setMode(D.POINTS):k.isSprite&&lt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ne=k._multiDrawStarts,pt=k._multiDrawCounts,nt=k._multiDrawCount,Xt=we?R.get(we).bytesPerElement:1,yi=ce.get(Y).currentProgram.getUniforms();for(let qt=0;qt<nt;qt++)yi.setValue(D,"_gl_DrawID",qt),lt.render(Ne[qt]/Xt,pt[qt])}else if(k.isInstancedMesh)lt.renderInstances(et,_t,k.count);else if(q.isInstancedBufferGeometry){const Ne=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,pt=Math.min(q.instanceCount,Ne);lt.renderInstances(et,_t,pt)}else lt.render(et,_t)};function ht(E,B,q){E.transparent===!0&&E.side===Mn&&E.forceSinglePass===!1?(E.side=Ht,E.needsUpdate=!0,Xs(E,B,q),E.side=$n,E.needsUpdate=!0,Xs(E,B,q),E.side=Mn):Xs(E,B,q)}this.compile=function(E,B,q=null){q===null&&(q=E),p=De.get(q),p.init(B),M.push(p),q.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==q&&E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Y=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const fe=k.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const Ae=fe[Se];ht(Ae,q,k),Y.add(Ae)}else ht(fe,q,k),Y.add(fe)}),p=M.pop(),Y},this.compileAsync=function(E,B,q=null){const Y=this.compile(E,B,q);return new Promise(k=>{function fe(){if(Y.forEach(function(Se){ce.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){k(E);return}setTimeout(fe,10)}ne.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let it=null;function Cn(E){it&&it(E)}function _n(){Qn.stop()}function hl(){Qn.start()}const Qn=new bh;Qn.setAnimationLoop(Cn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(E){it=E,de.setAnimationLoop(E),E===null?Qn.stop():Qn.start()},de.addEventListener("sessionstart",_n),de.addEventListener("sessionend",hl),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(B),B=de.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,L),p=De.get(E,M.length),p.init(B),M.push(p),j.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ke.setFromProjectionMatrix(j,En,B.reversedDepth),J=this.localClippingEnabled,Fe=pe.init(this.clippingPlanes,J),m=Z.get(E,y.length),m.init(),y.push(m),de.enabled===!0&&de.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&kr(fe,B,-1/0,x.sortObjects)}kr(E,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,W),Qe=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Qe&&Pe.addToRenderList(m,E),this.info.render.frame++,Fe===!0&&pe.beginShadows();const q=p.state.shadowsArray;Re.render(q,E,B),Fe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const fe=B.cameras;if(k.length>0)for(let Se=0,Ae=fe.length;Se<Ae;Se++){const we=fe[Se];fl(Y,k,E,we)}Qe&&Pe.render(E);for(let Se=0,Ae=fe.length;Se<Ae;Se++){const we=fe[Se];ul(m,E,we,we.viewport)}}else k.length>0&&fl(Y,k,E,B),Qe&&Pe.render(E),ul(m,E,B);L!==null&&A===0&&(ge.updateMultisampleRenderTarget(L),ge.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(x,E,B),Me.resetDefaultState(),_=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],Fe===!0&&pe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function kr(E,B,q,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ke.intersectsSprite(E)){Y&&ye.setFromMatrixPosition(E.matrixWorld).applyMatrix4(j);const Se=H.update(E),Ae=E.material;Ae.visible&&m.push(E,Se,Ae,q,ye.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ke.intersectsObject(E))){const Se=H.update(E),Ae=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ye.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ye.copy(Se.boundingSphere.center)),ye.applyMatrix4(E.matrixWorld).applyMatrix4(j)),Array.isArray(Ae)){const we=Se.groups;for(let Be=0,He=we.length;Be<He;Be++){const Ue=we[Be],et=Ae[Ue.materialIndex];et&&et.visible&&m.push(E,Se,et,q,ye.z,Ue)}}else Ae.visible&&m.push(E,Se,Ae,q,ye.z,null)}}const fe=E.children;for(let Se=0,Ae=fe.length;Se<Ae;Se++)kr(fe[Se],B,q,Y)}function ul(E,B,q,Y){const k=E.opaque,fe=E.transmissive,Se=E.transparent;p.setupLightsView(q),Fe===!0&&pe.setGlobalState(x.clippingPlanes,q),Y&&$.viewport(P.copy(Y)),k.length>0&&Ws(k,B,q),fe.length>0&&Ws(fe,B,q),Se.length>0&&Ws(Se,B,q),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function fl(E,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new mn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Bn:wn,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const fe=p.state.transmissionRenderTarget[Y.id],Se=Y.viewport||P;fe.setSize(Se.z*x.transmissionResolutionScale,Se.w*x.transmissionResolutionScale);const Ae=x.getRenderTarget(),we=x.getActiveCubeFace(),Be=x.getActiveMipmapLevel();x.setRenderTarget(fe),x.getClearColor(V),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),Qe&&Pe.render(q);const He=x.toneMapping;x.toneMapping=jn;const Ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Fe===!0&&pe.setGlobalState(x.clippingPlanes,Y),Ws(E,q,Y),ge.updateMultisampleRenderTarget(fe),ge.updateRenderTargetMipmap(fe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ot=0,_t=B.length;ot<_t;ot++){const ft=B[ot],lt=ft.object,Ne=ft.geometry,pt=ft.material,nt=ft.group;if(pt.side===Mn&&lt.layers.test(Y.layers)){const Xt=pt.side;pt.side=Ht,pt.needsUpdate=!0,dl(lt,q,Y,Ne,pt,nt),pt.side=Xt,pt.needsUpdate=!0,et=!0}}et===!0&&(ge.updateMultisampleRenderTarget(fe),ge.updateRenderTargetMipmap(fe))}x.setRenderTarget(Ae,we,Be),x.setClearColor(V,F),Ue!==void 0&&(Y.viewport=Ue),x.toneMapping=He}function Ws(E,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let k=0,fe=E.length;k<fe;k++){const Se=E[k],Ae=Se.object,we=Se.geometry,Be=Se.group;let He=Se.material;He.allowOverride===!0&&Y!==null&&(He=Y),Ae.layers.test(q.layers)&&dl(Ae,B,q,we,He,Be)}}function dl(E,B,q,Y,k,fe){E.onBeforeRender(x,B,q,Y,k,fe),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,B,q,Y,E,fe),k.transparent===!0&&k.side===Mn&&k.forceSinglePass===!1?(k.side=Ht,k.needsUpdate=!0,x.renderBufferDirect(q,B,Y,k,E,fe),k.side=$n,k.needsUpdate=!0,x.renderBufferDirect(q,B,Y,k,E,fe),k.side=Mn):x.renderBufferDirect(q,B,Y,k,E,fe),E.onAfterRender(x,B,q,Y,k,fe)}function Xs(E,B,q){B.isScene!==!0&&(B=Ce);const Y=ce.get(E),k=p.state.lights,fe=p.state.shadowsArray,Se=k.state.version,Ae=K.getParameters(E,k.state,fe,B,q),we=K.getProgramCacheKey(Ae);let Be=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?Ge:We).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",ie),Be=new Map,Y.programs=Be);let He=Be.get(we);if(He!==void 0){if(Y.currentProgram===He&&Y.lightsStateVersion===Se)return ml(E,Ae),He}else Ae.uniforms=K.getUniforms(E),E.onBeforeCompile(Ae,x),He=K.acquireProgram(Ae,we),Be.set(we,He),Y.uniforms=Ae.uniforms;const Ue=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=pe.uniform),ml(E,Ae),Y.needsLights=zh(E),Y.lightsStateVersion=Se,Y.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=He,Y.uniformsList=null,He}function pl(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Tr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function ml(E,B){const q=ce.get(E);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Oh(E,B,q,Y,k){B.isScene!==!0&&(B=Ce),ge.resetTextureUnits();const fe=B.fog,Se=Y.isMeshStandardMaterial?B.environment:null,Ae=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ki,we=(Y.isMeshStandardMaterial?Ge:We).get(Y.envMap||Se),Be=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,He=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,ot=!!q.morphAttributes.color;let _t=jn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_t=x.toneMapping);const ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=ft!==void 0?ft.length:0,Ne=ce.get(Y),pt=p.state.lights;if(Fe===!0&&(J===!0||E!==S)){const Ft=E===S&&Y.id===_;pe.setState(Y,E,Ft)}let nt=!1;Y.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==pt.state.version||Ne.outputColorSpace!==Ae||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==we||Y.fog===!0&&Ne.fog!==fe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==pe.numPlanes||Ne.numIntersection!==pe.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==He||Ne.morphTargets!==Ue||Ne.morphNormals!==et||Ne.morphColors!==ot||Ne.toneMapping!==_t||Ne.morphTargetsCount!==lt)&&(nt=!0):(nt=!0,Ne.__version=Y.version);let Xt=Ne.currentProgram;nt===!0&&(Xt=Xs(Y,B,k));let yi=!1,qt=!1,us=!1;const mt=Xt.getUniforms(),en=Ne.uniforms;if($.useProgram(Xt.program)&&(yi=!0,qt=!0,us=!0),Y.id!==_&&(_=Y.id,qt=!0),yi||S!==E){$.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",E.projectionMatrix),mt.setValue(D,"viewMatrix",E.matrixWorldInverse);const Wt=mt.map.cameraPosition;Wt!==void 0&&Wt.setValue(D,_e.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,qt=!0,us=!0)}if(k.isSkinnedMesh){mt.setOptional(D,k,"bindMatrix"),mt.setOptional(D,k,"bindMatrixInverse");const Ft=k.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),mt.setValue(D,"boneTexture",Ft.boneTexture,ge))}k.isBatchedMesh&&(mt.setOptional(D,k,"batchingTexture"),mt.setValue(D,"batchingTexture",k._matricesTexture,ge),mt.setOptional(D,k,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",k._indirectTexture,ge),mt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",k._colorsTexture,ge));const tn=q.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&he.update(k,q,Xt),(qt||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,mt.setValue(D,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(en.envMap.value=we,en.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(en.envMapIntensity.value=B.environmentIntensity),qt&&(mt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&Bh(en,us),fe&&Y.fog===!0&&re.refreshFogUniforms(en,fe),re.refreshMaterialUniforms(en,Y,z,G,p.state.transmissionRenderTarget[E.id]),Tr.upload(D,pl(Ne),en,ge)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Tr.upload(D,pl(Ne),en,ge),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(D,"center",k.center),mt.setValue(D,"modelViewMatrix",k.modelViewMatrix),mt.setValue(D,"normalMatrix",k.normalMatrix),mt.setValue(D,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ft=Y.uniformsGroups;for(let Wt=0,Hr=Ft.length;Wt<Hr;Wt++){const ei=Ft[Wt];Je.update(ei,Xt),Je.bind(ei,Xt)}}return Xt}function Bh(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function zh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,B,q){const Y=ce.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ce.get(E.texture).__webglTexture=B,ce.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const q=ce.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const kh=D.createFramebuffer();this.setRenderTarget=function(E,B=0,q=0){L=E,w=B,A=q;let Y=!0,k=null,fe=!1,Se=!1;if(E){const we=ce.get(E);if(we.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(we.__webglFramebuffer===void 0)ge.setupRenderTarget(E);else if(we.__hasExternalTextures)ge.rebindTextures(E,ce.get(E.texture).__webglTexture,ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ue=E.depthTexture;if(we.__boundDepthTexture!==Ue){if(Ue!==null&&ce.has(Ue)&&(E.width!==Ue.image.width||E.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Se=!0);const He=ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[B])?k=He[B][q]:k=He[B],fe=!0):E.samples>0&&ge.useMultisampledRTT(E)===!1?k=ce.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[q]:k=He,P.copy(E.viewport),I.copy(E.scissor),O=E.scissorTest}else P.copy(X).multiplyScalar(z).floor(),I.copy(ae).multiplyScalar(z).floor(),O=Ee;if(q!==0&&(k=kh),$.bindFramebuffer(D.FRAMEBUFFER,k)&&Y&&$.drawBuffers(E,k),$.viewport(P),$.scissor(I),$.setScissorTest(O),fe){const we=ce.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,q)}else if(Se){const we=B;for(let Be=0;Be<E.textures.length;Be++){const He=ce.get(E.textures[Be]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Be,He.__webglTexture,q,we)}}else if(E!==null&&q!==0){const we=ce.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,q)}_=-1},this.readRenderTargetPixels=function(E,B,q,Y,k,fe,Se,Ae=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){$.bindFramebuffer(D.FRAMEBUFFER,we);try{const Be=E.textures[Ae],He=Be.format,Ue=Be.type;if(!ee.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&q>=0&&q<=E.height-k&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ae),D.readPixels(B,q,Y,k,Ie.convert(He),Ie.convert(Ue),fe))}finally{const Be=L!==null?ce.get(L).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,B,q,Y,k,fe,Se,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(B>=0&&B<=E.width-Y&&q>=0&&q<=E.height-k){$.bindFramebuffer(D.FRAMEBUFFER,we);const Be=E.textures[Ae],He=Be.format,Ue=Be.type;if(!ee.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ae),D.readPixels(B,q,Y,k,Ie.convert(He),Ie.convert(Ue),0);const ot=L!==null?ce.get(L).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,ot);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ju(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.deleteBuffer(et),D.deleteSync(_t),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,q=0){const Y=Math.pow(2,-q),k=Math.floor(E.image.width*Y),fe=Math.floor(E.image.height*Y),Se=B!==null?B.x:0,Ae=B!==null?B.y:0;ge.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Se,Ae,k,fe),$.unbindTexture()};const Hh=D.createFramebuffer(),Vh=D.createFramebuffer();this.copyTextureToTexture=function(E,B,q=null,Y=null,k=0,fe=null){fe===null&&(k!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=k,k=0):fe=0);let Se,Ae,we,Be,He,Ue,et,ot,_t;const ft=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(q!==null)Se=q.max.x-q.min.x,Ae=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,He=q.min.y,Ue=q.isBox3?q.min.z:0;else{const tn=Math.pow(2,-k);Se=Math.floor(ft.width*tn),Ae=Math.floor(ft.height*tn),E.isDataArrayTexture?we=ft.depth:E.isData3DTexture?we=Math.floor(ft.depth*tn):we=1,Be=0,He=0,Ue=0}Y!==null?(et=Y.x,ot=Y.y,_t=Y.z):(et=0,ot=0,_t=0);const lt=Ie.convert(B.format),Ne=Ie.convert(B.type);let pt;B.isData3DTexture?(ge.setTexture3D(B,0),pt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ge.setTexture2DArray(B,0),pt=D.TEXTURE_2D_ARRAY):(ge.setTexture2D(B,0),pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const nt=D.getParameter(D.UNPACK_ROW_LENGTH),Xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yi=D.getParameter(D.UNPACK_SKIP_PIXELS),qt=D.getParameter(D.UNPACK_SKIP_ROWS),us=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue);const mt=E.isDataArrayTexture||E.isData3DTexture,en=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const tn=ce.get(E),Ft=ce.get(B),Wt=ce.get(tn.__renderTarget),Hr=ce.get(Ft.__renderTarget);$.bindFramebuffer(D.READ_FRAMEBUFFER,Wt.__webglFramebuffer),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let ei=0;ei<we;ei++)mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ce.get(E).__webglTexture,k,Ue+ei),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ce.get(B).__webglTexture,fe,_t+ei)),D.blitFramebuffer(Be,He,Se,Ae,et,ot,Se,Ae,D.DEPTH_BUFFER_BIT,D.NEAREST);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||ce.has(E)){const tn=ce.get(E),Ft=ce.get(B);$.bindFramebuffer(D.READ_FRAMEBUFFER,Hh),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vh);for(let Wt=0;Wt<we;Wt++)mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,k,Ue+Wt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,k),en?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.__webglTexture,fe,_t+Wt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ft.__webglTexture,fe),k!==0?D.blitFramebuffer(Be,He,Se,Ae,et,ot,Se,Ae,D.COLOR_BUFFER_BIT,D.NEAREST):en?D.copyTexSubImage3D(pt,fe,et,ot,_t+Wt,Be,He,Se,Ae):D.copyTexSubImage2D(pt,fe,et,ot,Be,He,Se,Ae);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else en?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(pt,fe,et,ot,_t,Se,Ae,we,lt,Ne,ft.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(pt,fe,et,ot,_t,Se,Ae,we,lt,ft.data):D.texSubImage3D(pt,fe,et,ot,_t,Se,Ae,we,lt,Ne,ft):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,fe,et,ot,Se,Ae,lt,Ne,ft.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,fe,et,ot,ft.width,ft.height,lt,ft.data):D.texSubImage2D(D.TEXTURE_2D,fe,et,ot,Se,Ae,lt,Ne,ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,us),fe===0&&B.generateMipmaps&&D.generateMipmap(pt),$.unbindTexture()},this.initRenderTarget=function(E){ce.get(E).__webglFramebuffer===void 0&&ge.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ge.setTextureCube(E,0):E.isData3DTexture?ge.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ge.setTexture2DArray(E,0):ge.setTexture2D(E,0),$.unbindTexture()},this.resetState=function(){w=0,A=0,L=null,$.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class nv extends uh{constructor(){super();const e=new on;e.deleteAttribute("uv");const t=new vt({side:Ht}),n=new vt,s=new wr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Er(e,n,6),a=new St;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Ke(e,Bi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Ke(e,Bi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Ke(e,Bi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new Ke(e,Bi(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const d=new Ke(e,Bi(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const u=new Ke(e,Bi(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Bi(i){return new sd({color:0,emissive:16777215,emissiveIntensity:i})}function sl(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new dt;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in f.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(e){let u;if(t)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(t){let h=0;const f=[];for(let d=0;d<i.length;++d){const u=i[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(const h in r){const f=Ac(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){const u=[];for(let v=0;v<o[h].length;++v)u.push(o[h][v][d]);const g=Ac(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ac(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Vt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let d=0,u=h.count;d<u;d++)for(let g=0;g<t;g++){const v=h.getComponent(d,g);a.setComponent(d+f,g,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const xs=new T;function sn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;xs.copy(e),xs[n]=0,xs.normalize();const c=.5*o/(o+a),h=1-xs.angleTo(i)/l;return Math.sign(xs[t])===1?h*c:a/(o+a)+c+c*(1-h)}class rl extends on{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new T,c=new T,h=new T(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,g=f.length/6,v=new T,m=.5/o;for(let p=0,y=0;p<f.length;p+=3,y+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),u[y+0]=sn(v,c,"z","y",r,n),u[y+1]=1-sn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),u[y+0]=1-sn(v,c,"z","y",r,n),u[y+1]=1-sn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),u[y+0]=1-sn(v,c,"x","z",r,e),u[y+1]=sn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),u[y+0]=1-sn(v,c,"x","z",r,e),u[y+1]=1-sn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),u[y+0]=1-sn(v,c,"x","y",r,e),u[y+1]=1-sn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),u[y+0]=sn(v,c,"x","y",r,e),u[y+1]=1-sn(v,c,"y","x",r,t);break}}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.segments,e.radius)}}const Ms=xt.clamp;function ts(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}class iv{constructor(e){se(this,"cache",new Map);this.anisotropy=e}get(e,t=1){const n=`${e}:${t}`,s=this.cache.get(n);if(s)return s;const r=512,o=ts(t),a=document.createElement("canvas");a.width=a.height=r;const l=a.getContext("2d"),c=l.createImageData(r,r),h=new Uint8Array(r*r*4),f=new Uint8Array(r*r*4),d=Array.from({length:3},()=>({x:o(),y:o(),radius:.02+o()*.016})),u=Float32Array.from({length:289},()=>o()-.5);for(let M=0;M<r;M++)for(let x=0;x<r;x++){const C=x/r,w=M/r,A=o()-.5,L=(M*r+x)*4;let _=0,S=.5,P=100,I=100,O=100,V=.85;if(e==="oak"||e==="endgrain"){let G=w;for(const W of d){const X=(C-W.x)*.6,ae=w-W.y;G+=Math.exp(-(X*X+ae*ae)/.01)*Math.sin(ae*30)*.028}const z=e==="endgrain"?Math.hypot((C-.47)*1.2,w-.53)*210:G*370+Math.sin(C*16)*1.5+Math.sin(C*47+w*20)*.5,te=Math.sin(z)*.035+Math.sin(z*3.8)*.012;_=te+Math.sin(w*29+t)*.024+A*.028;for(const W of d){const X=Math.hypot((C-W.x)*.52,w-W.y);_-=Math.exp(-X*X/(W.radius*W.radius))*.3}P=83+_*130,I=53+_*105,O=32+_*75,S=.53+te*.65+A*.035,V=.83+Math.abs(te)*1.2}else if(e==="steel"||e==="iron"){const G=Math.sin(C*61+Math.sin(w*83)*3)*Math.sin(w*79+Math.cos(C*73)*4);_=A*.075+G*.012;const z=e==="steel"?148:46;P=z+_*95,I=z+5+_*105,O=z+8+_*110,S=.5+(e==="iron"?G*.045+A*.16:A*.025),V=e==="steel"?.52+A*.08:.83+G*.05}else if(e==="stone"){const G=C*16,z=w*16,te=Math.floor(G),W=Math.floor(z),X=G-te,ae=z-W,Ee=X*X*(3-2*X),ke=ae*ae*(3-2*ae),Fe=xt.lerp(u[W*17+te],u[W*17+te+1],Ee),J=xt.lerp(u[(W+1)*17+te],u[(W+1)*17+te+1],Ee);_=A*.1+xt.lerp(Fe,J,ke)*.14,P=107+_*100,I=90+_*90,O=73+_*75,S=.5+_*.6,V=.93}else _=Math.sin(C*140)*Math.sin(w*180)*.026+A*.08,P=64+_*60,I=33+_*55,O=23+_*45,S=.5+_,V=.88;c.data.set([Ms(P,0,255),Ms(I,0,255),Ms(O,0,255),255],L);const F=Ms(S*255,0,255),U=Ms(V*255,0,255);h.set([F,F,F,255],L),f.set([U,U,U,255],L)}if(l.putImageData(c,0,0),e==="steel"||e==="iron")for(let M=0;M<(e==="steel"?150:45);M++){const x=o()*r,C=o()*r;l.strokeStyle=`rgba(${M%3?"225,227,218":"16,23,28"},${.03+o()*.13})`,l.lineWidth=.35+o()*.6,l.beginPath(),l.moveTo(x,C),l.lineTo(x+6+o()*80,C+(o()-.5)*15),l.stroke()}const g=new vi(a);g.colorSpace=Ct;const v=new $i(h,r,r),m=new $i(f,r,r);for(const M of[g,v,m])M.wrapS=M.wrapT=Ji,M.anisotropy=this.anisotropy,M.minFilter=Sn,M.magFilter=Zt,M.generateMipmaps=!0,M.needsUpdate=!0;const p=e==="iron"||e==="steel",y=new vt({map:g,bumpMap:v,roughnessMap:m,metalness:p?e==="steel"?.9:.72:0,roughness:e==="steel"?.64:.98,bumpScale:e==="stone"?.025:e==="iron"?.007:e==="steel"?.003:.012,envMapIntensity:e==="steel"?1.35:e==="iron"?.7:1});return this.cache.set(n,y),y}}function Ca(i,e,t,n=.025){return new rl(i,e,t,1,Math.min(n,i/3,e/3,t/3))}function sv(){const i=[[0,.69,.44],[.04,.72,.45],[.12,.7,.43],[.18,.56,.35],[.25,.44,.29],[.34,.35,.25],[.43,.32,.24],[.51,.35,.255],[.6,.44,.3],[.67,.57,.35],[.73,.69,.37],[.8,.73,.38],[.85,.73,.38]],e=32,t=[],n=[],s=[];for(const[o,a,l]of i){const c=Math.min(.09,l*.35);for(let h=0;h<e;h++){const f=Math.floor(h/8),d=f*Math.PI/2+h%8/7*Math.PI/2,u=f===0||f===3?a-c:-a+c,g=f<2?l-c:-l+c;t.push(u+Math.cos(d)*c,o,g+Math.sin(d)*c),n.push(h/e,o)}}for(let o=0;o<i.length-1;o++)for(let a=0;a<e;a++){const l=o*e+a,c=o*e+(a+1)%e;s.push(l,l+e,c,c,l+e,c+e)}const r=new dt;return r.setAttribute("position",new Ye(t,3)),r.setAttribute("uv",new Ye(n,2)),r.setIndex(s),r.computeVertexNormals(),r}function rv(){const i=[[-.68,.76,.29,.16],[-.81,.765,.265,.15],[-.96,.78,.225,.125],[-1.14,.8,.175,.096],[-1.31,.825,.115,.065],[-1.48,.847,.055,.033],[-1.57,.86,.009,.009]],e=24,t=[],n=[],s=[];i.forEach(([o,a,l,c],h)=>{for(let f=0;f<e;f++){const d=f/e*Math.PI*2;t.push(o,a+Math.cos(d)*c,Math.sin(d)*l),n.push(h/6,f/e)}});for(let o=0;o<i.length-1;o++)for(let a=0;a<e;a++){const l=o*e+a,c=o*e+(a+1)%e;s.push(l,l+e,c,c,l+e,c+e)}const r=new dt;return r.setAttribute("position",new Ye(t,3)),r.setAttribute("uv",new Ye(n,2)),r.setIndex(s),r.computeVertexNormals(),r}function Cc(i=.075,e=.855){const t=new gn;t.moveTo(-.72,-.34),t.lineTo(.89,-.34),t.quadraticCurveTo(.94,-.34,.94,-.29),t.lineTo(.94,.29),t.quadraticCurveTo(.94,.34,.89,.34),t.lineTo(-.72,.34),t.lineTo(-.72,-.34);const n=new Fs;n.moveTo(.56,.11),n.lineTo(.56,.23),n.lineTo(.68,.23),n.lineTo(.68,.11),n.closePath(),t.holes.push(n);const s=new Fs;s.absarc(.81,-.17,.035,0,Math.PI*2,!0),t.holes.push(s);const r=new vn(t,{depth:i,bevelEnabled:!0,bevelThickness:.012,bevelSize:.015,bevelSegments:3,curveSegments:12,steps:1});r.rotateX(-Math.PI/2),r.translate(0,e,0);const o=r.getAttribute("position"),a=r.getAttribute("uv");for(const l of r.groups)if(l.materialIndex===0)for(let c=l.start;c<l.start+l.count;c++)a.setXY(c,(o.getX(c)+.735)/1.69,(o.getZ(c)+.355)/.71);return r}function ov(){const i=new gn;i.moveTo(-.43,-.15),i.lineTo(-.38,.18),i.lineTo(-.3,.22),i.lineTo(.32,.2),i.lineTo(.41,.14),i.lineTo(.39,-.16),i.lineTo(.3,-.21),i.lineTo(-.34,-.21),i.closePath();const e=new vn(i,{depth:.34,bevelEnabled:!0,bevelSize:.022,bevelThickness:.022,bevelSegments:3,steps:1});e.translate(0,0,-.17);const t=e.getAttribute("position"),n=e.getAttribute("uv");for(const s of e.groups)if(s.materialIndex===0)for(let r=s.start;r<s.start+s.count;r++)n.setXY(r,(t.getX(r)+.46)/.92,(t.getY(r)+.24)/.5);return e.computeVertexNormals(),e}const Rc=xt.clamp;function Dr(i,e){const t=Float32Array.from({length:(e+1)**2},()=>i());return(n,s)=>{const r=n*e,o=s*e,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,f=c*c*(3-2*c),d=h*h*(3-2*h),u=e+1;return xt.lerp(xt.lerp(t[l*u+a],t[l*u+a+1],f),xt.lerp(t[(l+1)*u+a],t[(l+1)*u+a+1],f),d)}}function Ch(i,e,t,n,s,r){const o=n.getContext("2d").getImageData(0,0,i,i).data,a=new Uint8Array(i*i*4);for(let f=0;f<i;f++)for(let d=0;d<i;d++){const u=(f*i+d)*4,g=(o[(f*i+Math.min(i-1,d+1))*4]-o[(f*i+Math.max(0,d-1))*4])/255*r,v=(o[(Math.min(i-1,f+1)*i+d)*4]-o[(Math.max(0,f-1)*i+d)*4])/255*r,m=Math.hypot(g,v,1);a.set([(1-g/m)*127.5,(1+v/m)*127.5,(1+1/m)*127.5,255],u)}const l=new vi(t);l.colorSpace=Ct;const c=new $i(a,i,i),h=new vi(s);for(const f of[l,c,h])f.wrapS=f.wrapT=Ji,f.anisotropy=e,f.minFilter=Sn,f.magFilter=Zt,f.generateMipmaps=!0,f.needsUpdate=!0;return{map:l,normalMap:c,roughnessMap:h}}function Gi(i){const e=document.createElement("canvas");return e.width=e.height=i,e}function Ao(i,e,t){const n=i==="face"?1024:512,s=ts(t),r=Gi(n),o=Gi(n),a=Gi(n),l=[r,o,a].map(m=>m.getContext("2d")),c=l.map(m=>m.createImageData(n,n)),h=Dr(s,7),f=Dr(s,39),d=i==="casting";for(let m=0;m<n;m++)for(let p=0;p<n;p++){const y=p/n,M=m/n,x=(m*n+p)*4,C=h(y,M),w=f(y,M),A=s()-.5,L=Math.min(y,1-y,M,1-M),S=(i==="face"?Math.exp(-((y-.52)**2/.18+(M-.51)**2/.035)):0)*(.5+C*.5),P=Rc((C-.42)*2+(L<.055?.2:0)-S*.28,0,1),O=(d?33:i==="hammer"?66:83)+C*(d?15:14)+w*9+S*24+A*5;c[0].data.set([O+P*5,O+2-P*2,O+4-P*6,255],x);const V=126+(w-.5)*(d?23:9)+A*(d?16:5);c[1].data.set([V,V,V,255],x);const F=Rc((d?.83:.63)+P*.18-S*.29+(w-.5)*.13,.28,.96)*255;c[2].data.set([F,F,F,255],x)}l.forEach((m,p)=>m.putImageData(c[p],0,0));const[u,g,v]=l;for(let m=0;m<(d?180:100);m++){const p=s()*n,y=s()*n,M=(d?1.3:2)+s()*(d?4:10),x=u.createRadialGradient(p,y,0,p,y,M);x.addColorStop(0,"rgba(160,150,130,.04)"),x.addColorStop(.72,"rgba(20,18,15,.04)"),x.addColorStop(1,"rgba(20,18,15,0)"),u.fillStyle=x,u.fillRect(p-M,y-M,M*2,M*2),g.fillStyle="rgba(60,60,60,.09)",g.beginPath(),g.ellipse(p,y,M,M*.65,s()*Math.PI,0,Math.PI*2),g.fill()}for(let m=0;m<(i==="face"?390:95);m++){const p=s()*n,y=s()*n,M=8+s()*n*.15,x=(s()-.5)*n*.08,C=.6+s()*1.1;for(const[w,A]of[[u,"rgba(190,180,157,.20)"],[g,"rgba(45,45,45,.28)"],[v,"rgba(220,220,220,.22)"]])w.lineWidth=C,w.strokeStyle=A,w.beginPath(),w.moveTo(p,y),w.lineTo(p+M,y+x),w.stroke()}return new vt({...Ch(n,e,r,o,a,d?4:7),metalness:d?.78:.94,roughness:d?1:i==="hammer"?.72:.88,normalScale:new le(.65,.65),envMapIntensity:d?.45:i==="hammer"?1.15:.95})}function av(i,e){const n=ts(e),s=Dr(n,6),r=Dr(n,35),o=Gi(512),a=Gi(512),l=Gi(512),c=[o,a,l].map(d=>d.getContext("2d")),h=c.map(d=>d.createImageData(512,512)),f={u:.2+n()*.6,v:.2+n()*.6};for(let d=0;d<512;d++)for(let u=0;u<512;u++){const g=u/512,v=d/512,m=(d*512+u)*4,p=Math.hypot((g-f.u)*.46,v-f.v),y=s(g,v),x=(v+Math.exp(-p*p/.025)*Math.sin((v-f.v)*14)*.065)*255+Math.sin(g*9)*2.2+y*5,C=Math.sin(x)*.035+Math.sin(x*3.7+r(g,v)*2)*.018,w=Math.exp(-p*p/6e-4),A=n()-.5,L=C+(y-.5)*.13-w*.32,_=Math.min(v,1-v),S=Math.exp(-((g-.55)**2/.13+(v-.48)**2/.06))*.18,P=55+L*90-S*30-(_<.018?9:0);h[0].data.set([P,35+L*65-S*22,22+L*45-S*14,255],m);const I=128+C*120+A*6-w*12;h[1].data.set([I,I,I,255],m);const O=(.82+Math.abs(C)*1.5+w*.1)*255;h[2].data.set([O,O,O,255],m)}c.forEach((d,u)=>d.putImageData(h[u],0,0));for(let d=0;d<35;d++){const u=n()*512,g=n()*512;c[0].strokeStyle="rgba(18,11,7,.23)",c[0].lineWidth=.4+n()*.6,c[0].beginPath(),c[0].moveTo(u,g),c[0].lineTo(u+12+n()*90,g+(n()-.5)*3),c[0].stroke()}return new vt({...Ch(512,i,o,a,l,4),roughness:1,metalness:0,normalScale:new le(.45,.45)})}function lv(i){const e=Ao("face",i,618),t=Ao("casting",i,122),n=Ao("hammer",i,94),s=n.clone();return s.color.set(9144706),s.envMapIntensity=.65,{face:e,casting:t,hammer:n,edge:s,wood:Array.from({length:5},(r,o)=>av(i,231+o*31))}}function cv(i,e=.16){const t=[],n=[],s=[],r=[-1,-.82,-.3,-.085,0,.085,.3,.82,1],o=[],a=(f,d,u)=>{t.push(f,d,u),n.push(f/2.42,u/1.1+.5)};for(const f of i)for(const d of[1,-1])for(const u of r){const g=f.height??.095,v=f.center??0,m=u<0?f.left:f.right,p=Math.abs(u),y=1-e,M=p>=y?xt.lerp(.009,g*.61,(1-p)/(1-y)):p>.3?xt.lerp(g*.61,g*.81,(y-p)/(y-.3)):p>.085?xt.lerp(g*.81,g*.75,(.3-p)/.215):xt.lerp(g*.75,g,(.085-p)/.085);a(f.x,d===1?M:-M*.38,v+u*m)}const l=r.length*2;for(let f=0;f<i.length-1;f++)for(const d of[0,1])for(let u=0;u<r.length-1;u++){const g=f*l+d*r.length+u,v=g+1,m=g+l,p=m+1,y=s.length;d===0?s.push(g,v,m,v,p,m):s.push(g,m,v,v,m,p),o.push({start:y,count:6,materialIndex:u===0||u===r.length-2?1:0})}for(let f=0;f<i.length-1;f++)for(const d of[0,r.length-1]){const u=f*l+d,g=u+l,v=u+r.length,m=g+r.length,p=s.length;d===0?s.push(u,g,v,g,m,v):s.push(u,v,g,g,v,m),o.push({start:p,count:6,materialIndex:1})}for(const f of[0,i.length-1])for(let d=0;d<r.length-1;d++){const u=f*l+d,g=u+1,v=u+r.length,m=v+1,p=s.length;f===0?s.push(u,v,g,g,v,m):s.push(u,g,v,g,m,v),o.push({start:p,count:6,materialIndex:0})}const c=[],h=new dt;for(const f of[0,1]){const d=c.length;for(const u of o)u.materialIndex===f&&c.push(...s.slice(u.start,u.start+u.count));h.addGroup(d,c.length-d,f)}return h.setAttribute("position",new Ye(t,3)),h.setAttribute("uv",new Ye(n,2)),h.setIndex(c),h.computeVertexNormals(),h.computeBoundingBox(),h}function hv(i,e=.055,t=.014){const n=new gn;i.forEach(([r,o],a)=>a?n.lineTo(r,-o):n.moveTo(r,-o)),n.closePath();const s=new vn(n,{depth:e,bevelEnabled:!0,bevelSize:t,bevelThickness:t*.6,bevelSegments:3,curveSegments:16});return s.rotateX(-Math.PI/2),s}function uv(i,e,t=.085,n=.016){const s=new gn;i.forEach(([o,a],l)=>l?s.lineTo(o,-a):s.moveTo(o,-a)),s.closePath();for(const o of e){const a=new Fs;o.forEach(([l,c],h)=>h?a.lineTo(l,-c):a.moveTo(l,-c)),a.closePath(),s.holes.push(a)}const r=new vn(s,{depth:t,bevelEnabled:!0,bevelSize:n,bevelThickness:n*.6,bevelSegments:3,curveSegments:16});return r.rotateX(-Math.PI/2),r}function Rh(i,e=.009){const t=new pi(i.map(n=>new T(...n)));return new Nr(t,Math.min(144,Math.max(12,i.length*7)),e,5,!1)}const Co=new Map;function Ro(i){if(Co.has(i))return Co.get(i);const e=512,t=ts(i==="steel"?983:i==="gold"?722:411),n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d"),r=s.createImageData(e,e),o=new Uint8Array(e*e*4),a=new Uint8Array(e*e*4);for(let d=0;d<e;d++)for(let u=0;u<e;u++){const g=(d*e+u)*4,v=t()-.5,m=Math.sin(d*.87+Math.sin(u*.034)*.7)*.5+Math.sin(d*2.91)*.2,p=i==="leather",M=(p?105:i==="gold"?229:224)+(p?v*30+m*3:v*5+m*2);r.data.set([M,M,M,255],g),o.set([128+v*(p?9:1.1),128+m*(p?7:2.7),255,255],g);const x=p?220+v*18:195+m*12+v*5;a.set([x,x,x,255],g)}s.putImageData(r,0,0);const l=new vi(n);l.colorSpace=Ct;const c=new $i(o,e,e),h=new $i(a,e,e);for(const d of[l,c,h])d.wrapS=d.wrapT=Ji,d.minFilter=Sn,d.magFilter=Zt,d.generateMipmaps=!0,d.anisotropy=4,d.needsUpdate=!0;const f={map:l,normal:c,rough:h};return Co.set(i,f),f}function fv(i){const e=Ro("steel"),t=Ro("gold"),n=Ro("leather"),s=(u,g,v=e)=>new ks({color:u,map:v.map,normalMap:v.normal,normalScale:new le(.22,.22),roughnessMap:v.rough,roughness:g,metalness:1,envMapIntensity:1.45,anisotropy:.38,anisotropyRotation:0}),r=s(i==="dragon"?9218996:i==="meteor"?5465977:13817804,.3),o=s(15856878,.16),a=s(i==="meteor"?12694155:12952421,.29,t),l=s(i==="genesis"?3819336:2504254,.43),c=new vt({color:i==="dragon"?3482139:i==="meteor"?1449516:2891803,map:n.map,normalMap:n.normal,roughnessMap:n.rough,roughness:.88}),h=i==="dragon"?7710618:i==="meteor"?6790343:14134868,f=new ks({color:h,metalness:.2,roughness:.15,clearcoat:.85,clearcoatRoughness:.1,envMapIntensity:1.7,emissive:h,emissiveIntensity:.12}),d=new vt({color:h,metalness:.65,roughness:.27,emissive:h,emissiveIntensity:.13});return r.userData.forgeHeat=1,o.userData.forgeHeat=.85,a.userData.forgeHeat=.2,l.userData.forgeHeat=.7,c.userData.forgeHeat=0,r.userData.cosmosCoverage=.985,o.userData.cosmosCoverage=.7,a.userData.cosmosCoverage=.91,l.userData.cosmosCoverage=.99,c.userData.cosmosCoverage=.98,{body:r,edge:o,trim:a,dark:l,grip:c,gem:f,inlay:d}}function dv(i,e=0,t=0){const n=new ut,s=fv(i);n.name="evolving-sword",n.userData.theme=i;const r=(d,u,g=0,v=0,m=0,p="fitting")=>{const y=new Ke(d,u);return y.position.set(g,v,m),y.castShadow=!0,y.receiveShadow=!0,y.name=p,n.add(y),y},o=(d,u,g=.03,v="fitting",m=.055,p=.014)=>r(hv(d,m,p),u,0,g,0,v),a=(d,u=s.trim,g=.009,v="blade-inlay")=>r(Rh(d,g),u,0,0,0,v),l=(d,u,g,v,m=s.gem)=>{const p=r(new xi(v,1),m,d,u,g,"blade-jewel");return p.scale.set(1,.44,1),p},c=d=>r(cv(d),[s.body,s.edge],0,0,0,"blade"),h=e;if(i==="dragon"){c([{x:0,left:.27,right:.28},{x:.13,left:.39,right:.37},{x:.31,left:.4,right:.34},{x:.55,left:.34,right:.31},{x:.77,left:.36,right:.31},{x:1,left:.29,right:.3},{x:1.22,left:.31,right:.29},{x:1.48,left:.27,right:.3},{x:1.74,left:.28,right:.31},{x:1.94,left:.26,right:.31},{x:2.15,left:.18,right:.24,center:.035},{x:2.42,left:.003,right:.003,center:.13,height:.015}]),o([[.09,-.09],[.48,-.052],[1.66,-.042],[2.06,.015],[1.64,.042],[.48,.052],[.09,.09]],s.dark,.085,"blade-fuller",.013,.006);for(const d of[-1,1])a([[.16,.105,d*.1],[.59,.108,d*.07],[1.48,.105,d*.056],[2.05,.07,.012]],s.trim,.009),o([[-.11,d*.06],[-.3,d*.17],[-.36,d*.31],[-.3,d*.51],[-.1,d*.63],[.07,d*.57],[-.04,d*.47],[-.11,d*.31],[.07,d*.13]],s.trim,-.014,"guard",.1,.022),o([[-.13,d*.16],[-.25,d*.29],[-.2,d*.46],[-.07,d*.47],[-.14,d*.32]],s.dark,.082,"guard-inset",.012,.006),a([[-.14,.119,d*.19],[-.28,.118,d*.31],[-.21,.12,d*.48],[-.08,.117,d*.52]],s.edge,.012,"guard-engraving");for(let d=0;d<4+Math.min(h,6);d++){const u=.32+d*.14;o([[u-.08,0],[u-.01,-.051],[u+.081,0],[u-.01,.051]],d%2?s.trim:s.edge,.1,"blade-scale",.009,.004)}l(.07,.157,0,.09),Po(n,s,r,i,h)}else if(i==="meteor"){c([{x:0,left:.23,right:.23},{x:.17,left:.42,right:.42},{x:.43,left:.34,right:.34},{x:.57,left:.41,right:.41},{x:.71,left:.32,right:.32},{x:1.55,left:.26,right:.26},{x:1.97,left:.23,right:.23},{x:2.42,left:.003,right:.003,height:.018}]),o([[.3,-.073],[1.79,-.036],[2.2,0],[1.79,.036],[.3,.073]],s.dark,.087,"blade-fuller",.014,.008);for(const u of[-1,1])o([[.13,u*.25],[.39,u*.3],[.52,u*.34],[.59,u*.18],[.23,u*.13]],s.trim,.074,"blade-shoulder",.011,.006),a([[.39,.108,u*.089],[1.02,.103,u*.065],[1.77,.096,u*.043],[2.2,.042,0]],s.inlay,.008),o([[-.12,u*.11],[-.3,u*.3],[-.28,u*.49],[-.05,u*.64],[.15,u*.57],[.03,u*.43],[-.08,u*.44],[-.16,u*.32],[.02,u*.14]],s.edge,-.01,"guard",.1,.017),a([[-.11,.13,u*.16],[-.23,.13,u*.31],[-.2,.13,u*.46],[-.04,.13,u*.56],[.08,.13,u*.51]],s.trim,.019,"guard-orbit");const d=r(new an(.149,.027,7,40),s.trim,.11,.133,0,"blade-core-setting");d.rotation.x=Math.PI/2,l(.11,.142,0,.14);for(let u=0;u<3+Math.min(h,5);u++){const g=.48+u*.19;o([[g-.04,0],[g,-.026],[g+.04,0],[g,.026]],s.inlay,.105,"blade-star-seal",.008,.003);for(const v of[-1,1])a([[g-.04,.102,v*.11],[g,.112,v*.14],[g+.04,.103,v*.11]],s.trim,.004)}Po(n,s,r,i,h)}else{const u=[[[0,-.27],[.21,-.44],[.57,-.36],[1.72,-.33],[2.12,-.21]],[[0,-.28],[.18,-.44],[.42,-.4],[.75,-.28],[1.34,-.31],[1.7,-.43],[2.1,-.28]],[[0,-.24],[.2,-.4],[.38,-.33],[.57,-.43],[.73,-.34],[1.04,-.3],[1.22,-.39],[1.44,-.27],[1.74,-.28],[2.08,-.17]],[[0,-.32],[.23,-.46],[.51,-.3],[.76,-.33],[1.05,-.44],[1.43,-.36],[1.77,-.31],[2.1,-.25]],[[0,-.3],[.16,-.45],[.39,-.34],[.57,-.25],[.84,-.29],[1.18,-.44],[1.51,-.42],[1.75,-.32],[2.08,-.28]]][t],g=[...u,[2.42,0],...[...u].reverse().map(([y,M])=>[y,-M])];r(uv(g,[[[.43,-.1],[.73,-.115],[1.64,-.093],[1.99,0],[1.64,.093],[.73,.115],[.43,.1]]],.086,.025),s.body,0,.003,0,"blade");for(const y of[-1,1])o([[.1,y*.287],[.22,y*.445],[.59,y*.372],[1.73,y*.341],[2.14,y*.223],[2.42,0],[2.13,y*.179],[1.69,y*.292],[.61,y*.319],[.22,y*.386]],s.edge,.071,"blade-cutting-edge",.012,.006),a([[.3,.119,y*.235],[.67,.123,y*.202],[1.57,.124,y*.185],[1.99,.099,y*.095]],s.trim,.011),o([[-.13,y*.1],[-.24,y*.22],[-.31,y*.58],[-.13,y*.67],[.03,y*.6],[.08,y*.44],[-.03,y*.49],[-.08,y*.25],[.14,y*.13]],s.trim,-.02,"guard",.12,.023),o([[-.18,y*.34],[-.24,y*.54],[-.14,y*.59],[-.075,y*.54]],s.dark,.098,"guard-inset",.012,.006);o([[-.11,-.16],[.15,-.19],[.33,-.1],[.39,0],[.33,.1],[.15,.19],[-.11,.16]],s.dark,.087,"blade-core-mount",.044,.013);const m=r(new an(.132,.021,8,40),s.trim,.14,.152,0,"blade-core-setting");m.rotation.x=Math.PI/2,l(.14,.161,0,.124);const p=[.55,1.1,1.65,.825,1.375,.6875,.9625,1.2375,1.5125,.6187,.7562,.8937,1.0312,1.1687,1.3062,1.4437,1.5812];for(let y=0;y<3+Math.min(h,14);y++){const M=p[y];o([[M-.025,-.145],[M+.025,-.145],[M+.034,.145],[M-.034,.145]],s.trim,.054,"blade-bridge",.025,.007);for(const x of[-1,1]){const C=r(new on(.022,.006,.027),s.inlay,M,.113,x*.24,"blade-seal");C.rotation.y=Math.PI/4}}if(c([{x:1.72,left:.103,right:.103,height:.06},{x:2.11,left:.13,right:.13,height:.074},{x:2.42,left:.003,right:.003,height:.014}]),t>0)for(const y of[-1,1])o([[],[[-.2,.2],[-.39,.32],[-.42,.65],[-.32,.56],[-.26,.3]],[[-.13,.25],[-.29,.34],[-.2,.64],[-.04,.68],[-.11,.42]],[[-.17,.25],[-.35,.45],[-.2,.7],[-.09,.57],[.02,.68],[.06,.48]],[[-.12,.23],[-.29,.37],[-.24,.68],[-.11,.56],[.05,.63],[.13,.45]]][t].map(([x,C])=>[x,y*C]),t%2?s.edge:s.trim,.078,"guard-ascension",.04,.012);if(t>=2)for(const y of[-1,1])a([[.1,.155,y*.15],[.5,.134,y*.24],[1.06,.14,y*.26],[1.55,.14,y*.22]],s.inlay,.006);Po(n,s,r,i,h)}const f=1+e*.0022;for(const d of n.children)d instanceof Ke&&(d.geometry.scale(1,1,f),d.position.z*=f);return s.body.roughness=Math.max(.21,.3-e*.004),s.trim.roughness=Math.max(.23,.29-e*.003),n.userData.materials=s,n.userData.ascension=t,pv(n),n}function pv(i){const e=new Map;i.updateMatrixWorld(!0);for(const t of i.children){if(!(t instanceof Ke)||Array.isArray(t.material)||t.material.transparent)continue;const n=t.material.id+":"+(t.name.startsWith("blade")?"blade":"fitting"),s=e.get(n)||[];s.push(t),e.set(n,s)}for(const t of e.values()){if(t.length<2)continue;const n=t.map(o=>(o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrix)),s=sl(n,!1);if(n.forEach(o=>o.dispose()),!s)continue;const r=new Ke(s,t[0].material);r.name=t[0].name.startsWith("blade")?"blade-details":"fittings",r.castShadow=!0,r.receiveShadow=!0,t.forEach(o=>{i.remove(o),o.geometry.dispose()}),i.add(r)}}function Po(i,e,t,n,s){const r=t(new Hn(.077,.084,.54,24),e.grip,-.4,.026,0,"grip");r.rotation.z=Math.PI/2;const o=[];for(let c=0;c<=108;c++){const h=c/108*Math.PI*18;o.push([-.14-c/108*.53,.026+Math.cos(h)*.081,Math.sin(h)*.081])}t(Rh(o,.006),e.dark,0,0,0,"grip-wrap");for(const c of[-.12,-.68]){const h=t(new Hn(.095,.095,.045,24),e.trim,c,.026,0,"grip-collar");h.rotation.z=Math.PI/2}if(t(new Vn(1,24,16),e.trim,-.79,.026,0,"pommel").scale.set(.129,.1,.117),t(new xi(.065,1),e.gem,-.79,.123,0,"pommel-gem").scale.set(1,.31,1),n==="genesis"){const c=t(new an(.117,.014,6,32),e.edge,-.79,.026,0,"pommel-crown");c.rotation.x=Math.PI/2}for(let c=0;c<Math.min(s,9);c++){const h=t(Ca(.012,.01,.11,.003),e.trim,-.19-c*.049,.1,0,"grip-stitch");h.rotation.y=-.22}}function Pc(i,e,t,n){const s=fn(e,t),r=new ut;if(t>=15){const W=t>=29?"genesis":t>=25?"meteor":"dragon",ae=dv(W,W==="genesis"?s.detail:t-(W==="dragon"?15:W==="meteor"?25:29),s.ascension);return ae.userData.swordName=s.name,ae.userData.level=s.level,ae.userData.form=s.silhouette,ae}r.name="evolving-sword";const o=n==="bronze"?12491368:n==="cold"?11132133:12832727,a=s.crest>=5?15456176:s.crest>=2?13678459:11175504,l=new vt({color:a,metalness:.82,roughness:.31}),c=new vt({color:3423046,metalness:.76,roughness:.36}),h=new vt({color:o,metalness:.85,roughness:.27}),f=new vt({color:e==="great"?4598565:e==="short"?1583932:2636341,roughness:.8}),d=new vt({color:[4224906,3785883,6328298,10121439,15772752,15233152][s.crest%6],emissive:[863287,1203266,1847647,4203365,6898970,6299692][s.crest%6],emissiveIntensity:.35+.045*s.crest,metalness:.24,roughness:.2}),u=(W,X,ae=0,Ee=0,ke=0,Fe="fitting")=>{const J=new Ke(W,X);return J.position.set(ae,Ee,ke),J.castShadow=!0,J.receiveShadow=!0,J.name=Fe,r.add(J),J},g=(W,X,ae,Ee,ke,Fe,J,j="fitting")=>u(new on(Ee,ke,Fe),J,W,X,ae,j),v=(W,X,ae,Ee,ke,Fe,J)=>{const j=u(new Vn(1,12,8),J,W,X,ae);return j.scale.set(Ee,ke,Fe),j},m=2.42,y=(e==="great"?.37:e==="short"?.245:.29)*s.span,x=[[1,.99,1.03,1.03,.98,.91,.58],[1,1.17,1.14,.99,.92,.88,.57],[1,1.06,1.19,1.12,1,.93,.57],[1,1.24,1.1,1.04,1.14,.97,.62],[1,1.06,.94,1.17,1.13,1.01,.67],[1,1.15,1.04,1.22,1.07,1.04,.71]][Math.min(s.silhouette,5)],w=[0,.1,.25,.46,.66,.8,.92,1].map((W,X)=>({x:m*W,w:X===7?0:y*x[X],centerY:.125+Math.min(s.level,40)*35e-5})),A=[],L=[],_=(W,X,ae)=>{for(const Ee of[W,X,ae])A.push(Ee[0],Ee[1],Ee[2]),L.push(Ee[0]/m,Ee[2]/(y*2)+.5)};for(let W=0;W<w.length-1;W++){const X=w[W],ae=w[W+1],Ee=ye=>[ye.x,0,-ye.w],ke=ye=>[ye.x,0,ye.w],Fe=ye=>[ye.x,ye.centerY,0];_(Ee(X),Fe(X),Ee(ae)),_(Fe(X),Fe(ae),Ee(ae)),_(Fe(X),ke(X),Fe(ae)),_(ke(X),ke(ae),Fe(ae));const J=ye=>[ye.x,-.035,-ye.w],j=ye=>[ye.x,-.035,ye.w],_e=ye=>[ye.x,-.057,0];_(J(X),J(ae),_e(X)),_(_e(X),J(ae),_e(ae)),_(_e(X),_e(ae),j(X)),_(j(X),_e(ae),j(ae)),_(Ee(X),Ee(ae),J(X)),_(J(X),Ee(ae),J(ae)),_(ke(X),j(X),ke(ae)),_(j(X),j(ae),ke(ae))}const S=new dt;if(S.setAttribute("position",new Ye(A,3)),S.setAttribute("uv",new Ye(L,2)),S.computeVertexNormals(),u(S,i,0,0,0,"blade"),s.level>=4){const W=u(new on(Math.min(1.25,.28+s.level*.026),.009,.018),c,.65,.131,0,"blade-detail");W.rotation.y=(s.silhouette-2.5)*.012}if(s.level>=8){const W=u(new on(.3,.012,.025),l,1.38,.135,0,"blade-detail");W.rotation.y=Math.PI/12}const P=s.runeCount;for(let W=0;W<P;W++){const X=.29+W*.142,ae=g(X,.147,W%2?-.045:.045,.035,.012,.034,W%3===0?l:h,"blade-rune");ae.rotation.y=Math.PI/4}if(s.crest>0){const W=Math.min(s.crest,8);for(let X=0;X<W;X++){const ae=.34+X*.18,Ee=u(new xi(.029+X%3*.006,0),d,ae,.159,0,"blade-crest");Ee.scale.y=.42,Ee.rotation.y=Math.PI/4}}const I=(e==="great"?.5:e==="short"?.34:.4)+Math.min(s.level,99)*.0023,O=s.guardStyle%3*.044,V=s.guardStyle>=3?.075:0,F=new gn;F.moveTo(-.105,-I),F.lineTo(-.115-O,-I-V),F.quadraticCurveTo(-.19-O,-I*.85,-.085,-I*.66),F.lineTo(-.055,-.16),F.lineTo(.075,-.16),F.lineTo(.075,-I*.7),F.quadraticCurveTo(.17,-I*.87,.115+O,-I),F.lineTo(.075+O,-I*.53),F.lineTo(.09,-.12),F.lineTo(.09,.12),F.lineTo(.075+O,I*.53),F.lineTo(.115+O,I),F.quadraticCurveTo(.17,I*.87,.075,I*.7),F.lineTo(.075,.16),F.lineTo(-.055,.16),F.lineTo(-.085,I*.66),F.quadraticCurveTo(-.19-O,I*.85,-.115-O,I+V),F.lineTo(-.105,I),F.lineTo(-.105,-I);const U=new vn(F,{depth:.105,bevelEnabled:!0,bevelSize:.014,bevelThickness:.014,bevelSegments:2,curveSegments:8});U.rotateX(-Math.PI/2),u(U,l,-.06,-.063,0,"guard");const G=g(-.095,.015,0,.13,.16,.25,c);if(G.rotation.y=s.guardStyle*.07,s.level>=3){for(const W of[-1,1])if(v(-.12,.058,W*I*.74,.048,.06,.043,s.level>=16?d:l),s.level>=15){const X=u(new Ja(.052,.16,7),l,-.14,.041,W*(I+.06));X.rotation.x=W*Math.PI/2}}if(s.level>=25)for(const W of[-1,1])u(new xi(.061,0),d,-.024,.09,W*.2).scale.set(.63,.45,.76);const z=u(new Hn(.062,.071,.56,14),f,-.38,.02,0,"grip");z.rotation.z=Math.PI/2;for(let W=0;W<9;W++){const X=u(new an(.067,.007,4,14),W%3===0&&s.level>=7?l:c,-.16-W*.055,.02,0,"grip-band");X.rotation.y=Math.PI/2}for(const W of[-.12,-.66]){const X=u(new Hn(.076,.076,.028,16),l,W,.02,0);X.rotation.z=Math.PI/2}const te=v(-.73,.02,0,.11+s.crest*.003,.082,.091,l);if(s.level>=6&&(te.rotation.x=Math.PI/8),v(-.746,.097,0,.048,.016,.048,d),s.level>=12&&(v(-.746,-.058,0,.039,.012,.039,d),g(-.38,.089,0,.12,.012,.025,l)),s.level>=35)for(const W of[-1,1])v(-.73,.023,W*.073,.029,.03,.014,d);return r.userData.swordName=s.name,r.userData.level=s.level,r.userData.form=s.silhouette,r}function mv(){const i={value:1};let e,t;const n=new Promise((o,a)=>{e=o,t=a}),s=new hd().load(new URL("art/cat-turnaround-v2.webp",document.baseURI).href,()=>e(),void 0,t);return s.colorSpace=Ct,s.anisotropy=4,{atlas:s,ready:n,material:(o=0,a=!1)=>{const l=new ks({map:s,color:9998989,roughness:a?.98:.92,specularIntensity:.3,sheen:.15,sheenColor:7831949,sheenRoughness:.94,side:Mn});return o===5&&(l.color.set(11973034),l.roughness=.17,l.clearcoat=1,l.clearcoatRoughness=.06,l.sheen=0,l.specularIntensity=1),o===3&&(l.roughness=.65,l.sheen=0),l.userData.catCoat=!0,l.onBeforeCompile=c=>{c.uniforms.catBlink=i,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 coatPosition;
attribute vec3 coatNormal;
varying vec3 vCoatPosition;
varying vec3 vCoatNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCoatPosition=coatPosition;vCoatNormal=coatNormal;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
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
`)},l.customProgramCacheKey=()=>`cat-coat-v2-${o}-${a}`,l},blink:i}}function gv(i){i.updateWorldMatrix(!0,!0);const e=i.matrixWorld.clone().invert();i.traverse(t=>{if(!(t instanceof Ke)||Array.isArray(t.material)||!t.material.userData.catCoat)return;const n=t.geometry,s=n.getAttribute("position"),r=n.getAttribute("normal"),o=e.clone().multiply(t.matrixWorld),a=new qe().getNormalMatrix(o),l=new Float32Array(s.count*3),c=new Float32Array(s.count*3);for(let h=0;h<s.count;h++){const f=new T().fromBufferAttribute(s,h).applyMatrix4(o),d=new T().fromBufferAttribute(r,h).applyMatrix3(a).normalize();l.set(f.toArray(),h*3),c.set(d.toArray(),h*3)}n.setAttribute("coatPosition",new Vt(l,3)),n.setAttribute("coatNormal",new Vt(c,3))})}function vv(){const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d");e.fillStyle="black",e.fillRect(0,0,128,128);for(let n=0;n<7;n++){const s=12+n*16;e.strokeStyle=`rgba(255,255,255,${.58+n%3*.15})`,e.lineWidth=1.8,e.beginPath(),e.moveTo(s,126),e.bezierCurveTo(s+3,90,s-8,54,s+(n%2?5:-5),10+n%3*10),e.stroke()}const t=new vi(i);return t.colorSpace=Fn,t}function ys(i,e,t,n,s,r=!1){i.updateWorldMatrix(!0,!0);const o=i.matrixWorld.clone().invert(),a=[];let l=0;for(const m of e){const p=m.geometry,y=p.getAttribute("position"),M=p.getIndex(),x=o.clone().multiply(m.matrixWorld),C=M?M.count:y.count;for(let w=0;w<C;w+=3){const A=[0,1,2].map(S=>new T().fromBufferAttribute(y,M?M.getX(w+S):w+S).applyMatrix4(x)),L=A[1].clone().sub(A[0]).cross(A[2].clone().sub(A[0])),_=L.length()/2;_<1e-8||(l+=_,a.push({a:A[0],b:A[1],c:A[2],n:L.normalize(),area:l}))}}const c=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),h=[],f=[],d=[],u=[];for(let m=0;m<t;m++){const p=c()*l;let y=0,M=a.length-1;for(;y<M;){const F=y+M>>1;a[F].area<p?y=F+1:M=F}const x=a[y];if(!x)continue;let C=c(),w=c();C+w>1&&(C=1-C,w=1-w);const A=x.a.clone().multiplyScalar(1-C-w).addScaledVector(x.b,C).addScaledVector(x.c,w),L=x.n;if(r&&A.z>.18&&Math.abs(A.x)<.39&&A.y>-.3&&A.y<.19)continue;const _=new T(r?Math.sign(A.x)*.35:0,-1,.06).addScaledVector(L,L.y).normalize(),S=L.clone().multiplyScalar(.55).addScaledVector(_,.65).normalize(),P=new T().crossVectors(L,_).normalize();P.lengthSq()<.01&&P.set(1,0,0);const I=(r?.03:.033)*(.7+c()*.9),O=I*(.22+c()*.12),V=h.length/3;for(let F=0;F<3;F++)for(const U of[-1,1]){const G=F/2,z=A.clone().addScaledVector(S,G*I).addScaledVector(L,G*G*I*.18).addScaledVector(P,U*O*(1-G*.35));h.push(z.x,z.y,z.z),f.push(L.x,L.y,L.z),d.push((U+1)/2,G)}u.push(V,V+1,V+2,V+1,V+3,V+2,V+2,V+3,V+4,V+3,V+5,V+4)}const g=new dt;g.setAttribute("position",new Ye(h,3)),g.setAttribute("normal",new Ye(f,3)),g.setAttribute("uv",new Ye(d,2)),g.setIndex(u);const v=new Ke(g,n);return v.castShadow=!1,v.receiveShadow=!1,i.add(v),v}function bt(i,e,t,n=0,s=0,r=0){const o=new Ke(i,e);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,t.add(o),o}function Kn(i,e,t,n,s,r,o,a){const l=bt(new Vn(1,32,24),e,i,t,n,s);return l.scale.set(r,o,a),l}function Lo(i){const e=new Vn(1,48,32),t=e.getAttribute("position");for(let n=0;n<t.count;n++){const s=i(t.getX(n),t.getY(n),t.getZ(n));t.setXYZ(n,s.x,s.y,s.z)}return e.computeVertexNormals(),e}const Ph=i=>.565*(1+.13*Math.exp(-(((i+.25)/.34)**2))-.12*Math.max(i,0));function _v(i,e){const t=(e-.08)/.365;return .355*Math.sqrt(Math.max(0,1-t*t-(i/Ph(t))**2))+.02*Math.max(0,1-t*t)}function Do(i,e,t,n){const s=di.isClockWise(i)?[...i].reverse():i,r=[],o=[],a=10,l=s.length;for(let h=0;h<=a;h++){const f=h/a;for(const d of s){const u=xt.lerp(e.x,d.x,f),g=xt.lerp(e.y,d.y,f);r.push(u,g,t(u,g,f))}}for(let h=0;h<a;h++)for(let f=0;f<l;f++){const d=h*l+f,u=h*l+(f+1)%l,g=d+l,v=u+l;o.push(d,g,u,u,g,v)}const c=new dt;return c.setAttribute("position",new Ye(r,3)),c.setIndex(o),c.computeVertexNormals(),c}function Ar(i,e,t=36,n=10){const s=i.computeFrenetFrames(t,!1),r=[],o=[];for(let l=0;l<=t;l++){const c=i.getPointAt(l/t),h=e(l/t);for(let f=0;f<=n;f++){const d=f/n*Math.PI*2,u=c.clone().addScaledVector(s.normals[l],Math.cos(d)*h).addScaledVector(s.binormals[l],Math.sin(d)*h);r.push(u.x,u.y,u.z)}}for(let l=0;l<t;l++)for(let c=0;c<n;c++){const h=l*(n+1)+c,f=h+n+1;o.push(h,h+1,f,h+1,f+1,f)}const a=new dt;return a.setAttribute("position",new Ye(r,3)),a.setIndex(o),a.computeVertexNormals(),a}function Io(i,e,t,n){const s=new pi(t.map(r=>new T(...r)));return bt(Ar(s,r=>n*Math.sin(Math.PI*(.08+.84*r)),24,7),e,i)}function Lc(i,e=[]){i.updateWorldMatrix(!0,!0);const t=i.matrixWorld.clone().invert(),n=new Map;i.traverse(s=>{if(!(s instanceof Ke)||Array.isArray(s.material))return;for(let o=s;o&&o!==i;o=o.parent)if(e.includes(o))return;const r=n.get(s.material)||[];r.push(s),n.set(s.material,r)});for(const[s,r]of n){if(r.length<2)continue;const o=r.map(l=>{const c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();return c.applyMatrix4(t.clone().multiply(l.matrixWorld)),c.getAttribute("uv")||c.setAttribute("uv",new Ye(new Float32Array(c.getAttribute("position").count*2),2)),c}),a=sl(o,!1);o.forEach(l=>l.dispose()),a&&(r.forEach(l=>{l.removeFromParent(),l.geometry.dispose()}),bt(a,s,i))}}function xv(){const i=new ut,e=new ut,t=new ut,n=new ut,s=[],r=mv(),o=r.material(),a=r.material(1),l=r.material(2),c=r.material(4),h=new vt({color:525831,roughness:1}),f=new vt({color:14929843,roughness:.55}),d=new ks({color:12222774,metalness:.84,roughness:.32,clearcoat:.14}),u=new vt({color:11377536,roughness:.95}),g=bt(Lo((_,S,P)=>new T(_*.46*(1-.19*S),S*.59,P*.36)),o,i,0,.69,-.065);for(const _ of[-1,1]){Kn(i,o,_*.34,.37,-.1,.275,.36,.31),Kn(i,o,_*.43,.102,.115,.185,.105,.2);const S=new pi([new T(_*.28,1.01,.25),new T(_*.255,.74,.3),new T(_*.225,.43,.345),new T(_*.22,.18,.38)]);bt(Ar(S,I=>.11+.022*Math.sin(Math.PI*I),32,24),o,i);const P=bt(Lo((I,O,V)=>new T(I*.176,O*.109,V*.2+(V>0?.01*Math.cos(I*10):0))),o,i,_*.22,.11,.405);P.rotation.y=-_*.06;for(const I of[-.056,.054])Io(i,h,[[_*.22+I,.077,.59],[_*.22+I,.128,.594],[_*.22+I,.179,.555]],.0027)}e.position.set(.08,1.61,.025),i.add(e),bt(Lo((_,S,P)=>{let I=P*.355+(P>0?.02*(1-S*S):0);return P>0&&(I-=.27*xt.smoothstep(-S,.2,.65)*(1-xt.smoothstep(Math.abs(_),.48,.78))),new T(_*Ph(S),S*.365+.08,I)}),a,e);for(const _ of[-1,1]){const S=new gn;S.moveTo(-.185,0),S.bezierCurveTo(-.205,.15,-.13,.3,_*.14-.045,.465),S.quadraticCurveTo(_*.14,.505,_*.14+.04,.455),S.bezierCurveTo(.21,.27,.205,.08,.17,0),S.quadraticCurveTo(0,-.035,-.185,0);const P=S.getPoints(16),I=new le(0,.17),O=new ut;O.position.set(_*.37,.22,-.035),e.add(O);const V=Do(P,I,(te,W,X)=>.058-.073*(1-X*X)-.075*W),F=Do(P,I,(te,W,X)=>.005-.086*(1-X*X)-.075*W);F.setIndex(Array.from(F.getIndex().array).reverse()),F.computeVertexNormals(),bt(V,a,O),bt(F,a,O);const U=[],G=[];P.forEach((te,W)=>{U.push(te.x,te.y,.058-.075*te.y,te.x,te.y,.005-.075*te.y);const X=W*2,ae=(W+1)%P.length*2;G.push(X,ae,X+1,ae,ae+1,X+1)});const z=new dt;z.setAttribute("position",new Ye(U,3)),z.setIndex(G),z.computeVertexNormals(),bt(z,a,O)}for(const[_,S]of[[-.228,.13],[.191,.122]]){const P=new ut;P.position.set(_,S,0),e.add(P),s.push(P);const I=Math.sign(_),O=Array.from({length:48},(V,F)=>{const U=F/48*Math.PI*2;return new le(Math.cos(U)*.13,Math.sin(U)*(Math.sin(U)>0?.031:.068)+I*Math.cos(U)*.13*.13)});bt(Do(O,new le,(V,F,U)=>_v(_+V,S+F)+.003+.014*(1-U*U)),r.material(5),P)}for(const _ of[-1,1])Kn(e,a,_*.1,-.081,.395,.143,.095,.113);Kn(e,h,0,-.166,.338,.254,.125,.094);const v=new gn;v.moveTo(-.053,.02),v.quadraticCurveTo(-.071,-.009,-.013,-.044),v.quadraticCurveTo(0,-.054,.013,-.044),v.quadraticCurveTo(.071,-.009,.053,.02),v.quadraticCurveTo(0,.035,-.053,.02),bt(new vn(v,{depth:.025,bevelEnabled:!0,bevelSize:.009,bevelThickness:.009,bevelSegments:4,curveSegments:12}),new ks({color:10179905,roughness:.5,clearcoat:.15}),e,0,.01,.536);for(const _ of[-.027,.027])Kn(e,h,_,.001,.565,.008,.006,.003);t.position.set(0,-.115,.315),e.add(t),Kn(t,l,0,-.09,.093,.253,.107,.117),Kn(t,new vt({color:8736078,roughness:.85}),0,-.033,.121,.096,.016,.057);const m=new pi([new T(.107,-.088,.481),new T(.111,-.126,.488),new T(.094,-.164,.482)]);bt(Ar(m,_=>.018*(1-_)**.8+5e-4,16,12),f,e);for(const _ of[-1,1])for(let S=0;S<3;S++)Io(e,u,[[_*.16,-.07-S*.026,.503],[_*.39,-.047-S*.042,.453],[_*.72,-.017-S*.073,.34]],.0023);const p=bt(new Hn(.292,.31,.118,48,1,!0),r.material(3),i,.018,1.256,.004);p.scale.z=.79,p.rotation.z=-.045;for(const _ of[1.204,1.309]){const S=bt(new an(.303,.006,5,48),new vt({color:5776670,roughness:.91}),i,.018,_,.003);S.rotation.x=Math.PI/2,S.scale.y=.79}const y=bt(new an(.026,.008,8,24),d,i,.025,1.212,.341);y.rotation.x=.1;const M=bt(new Vn(.101,40,28),d,i,.025,1.097,.427);M.scale.y=1.035;const x=bt(new an(.098,.006,6,40),d,i,.025,1.112,.427);x.rotation.x=Math.PI/2,Kn(i,h,.025,1.092,.527,.017,.021,.003),Io(i,h,[[.025,1.089,.529],[.025,1.064,.527],[.025,1.031,.505]],.004),n.position.set(.4,.15,-.245),i.add(n);const C=new pi([new T(0,0,0),new T(.4,.13,-.1),new T(.535,.53,-.09),new T(.39,.87,-.04),new T(.165,.94,.02)]);bt(Ar(C,_=>(.118+.047*Math.sin(Math.PI*_))*Math.sqrt(Math.min(1,(1-_)*12)),48,16),c,n),Lc(e,[t,...s]),Lc(i,[e,t,g,n,...s]);const w=vv(),A=_=>{const S=r.material(_,!0);return S.alphaMap=w,S.alphaTest=.23,S},L=(_,S)=>{const P=[];return _.children.forEach(I=>{I instanceof Ke&&I.material===S&&P.push(I)}),P};return ys(e,L(e,a),1700,A(1),3917,!0),ys(t,L(t,l),250,A(2),2871),ys(g,[g],700,A(0),8729),ys(i,L(i,o),1200,A(0),5021),ys(n,L(n,c),500,A(4),8143),gv(i),i.traverse(_=>{_ instanceof Ke&&(_.receiveShadow=!1)}),{root:i,head:e,jaw:t,belly:g,tail:n,eyes:s,ready:r.ready,blink:_=>{r.blink.value=_},mouth:new T(0,-.115,.52),asset:r.atlas}}class Mv{constructor(e){se(this,"material");se(this,"base",new Ve);se(this,"hot",new Ve(16737562));se(this,"glow",new Ve);se(this,"level",0);se(this,"uniforms",{forgeTime:{value:0},forgeFrenzy:{value:0},forgeCosmos:{value:0},forgeHeat:{value:0},forgeWorldToSword:{value:new st}});this.material=e.clone(),this.material.metalness=.78,this.material.roughness=.36,this.decorate(this.material),this.setLevel(0,"iron")}decorate(e){e.onBeforeCompile=t=>{Object.assign(t.uniforms,this.uniforms),t.uniforms.forgeHeatResponse={value:e.userData.forgeHeat??.25},t.uniforms.forgeCosmosCoverage={value:e.userData.cosmosCoverage??.985},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vForgeUv;
varying vec3 vForgePosition;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vForgeUv = uv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vForgePosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vForgeUv;
varying vec3 vForgePosition;
uniform float forgeTime;
uniform float forgeFrenzy;
uniform float forgeCosmos;
uniform float forgeHeat;
uniform float forgeHeatResponse;
uniform float forgeCosmosCoverage;
uniform mat4 forgeWorldToSword;
vec3 forgeSpectrum(float hue) {
 return clamp(abs(fract(hue + vec3(0.0, 0.666667, 0.333333)) * 6.0 - 3.0) - 1.0, 0.0, 1.0);
}
float forgeHash(vec2 p) {return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float forgeNoise(vec2 p) {
 vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
 return mix(mix(forgeHash(i),forgeHash(i+vec2(1.0,0.0)),f.x),mix(forgeHash(i+vec2(0.0,1.0)),forgeHash(i+1.0),f.x),f.y);
}
vec3 forgeStarfield(vec2 p) {
 vec2 drift=p+vec2(-forgeTime*0.095,forgeTime*0.045);
 float cloud=forgeNoise(drift*2.1)+0.5*forgeNoise(drift*4.7);
 float ribbon=exp(-pow((p.y*0.7+sin(p.x*2.4+forgeTime*0.1)*0.32)*2.4,2.0));
 vec3 color=vec3(0.012,0.02,0.09)+mix(vec3(0.17,0.025,0.42),vec3(0.025,0.20,0.36),cloud/1.5)*ribbon*cloud;
 for(int layer=0;layer<3;layer++){
  float scale=6.0+float(layer)*5.0;
  vec2 field=(p+vec2(-forgeTime*(0.08+float(layer)*0.024),forgeTime*0.026))*scale;
  vec2 cell=floor(field),local=fract(field);
  float id=forgeHash(cell+float(layer)*31.0);
  vec2 center=vec2(0.18)+0.64*vec2(id,forgeHash(cell+17.0));
  float radius=mix(0.035,0.07,id),distanceToStar=length(local-center);
  float star=(1.0-smoothstep(radius,radius+max(fwidth(distanceToStar),0.025),distanceToStar))*step(0.87,id);
  float twinkle=0.68+0.32*sin(forgeTime*(1.7+id*2.0)+id*37.0);
  color+=mix(vec3(0.38,0.70,1.0),vec3(1.0,0.90,0.73),id)*star*twinkle*2.0;
 }
 return color;
}`).replace("#include <color_fragment>",`#include <color_fragment>
vec3 forgeLocal = (forgeWorldToSword * vec4(vForgePosition,1.0)).xyz;
vec2 forgeCoord = forgeLocal.xz;
vec3 forgeRainbow = forgeSpectrum(forgeCoord.x * 0.50 + forgeCoord.y * 0.52 - forgeTime * 0.48);
float forgeSweep = pow(0.5 + 0.5 * sin((forgeCoord.x * 1.2 - forgeTime * 0.72) * 6.283185 + forgeCoord.y * 1.8), 14.0);
float forgeRidge = pow(max(0.0, 1.0 - abs(vForgeUv.y - 0.5) * 2.0), 9.0);
vec3 forgeCosmic = forgeStarfield(forgeCoord);
vec3 forgeLight = mix(forgeRainbow * (0.38 + forgeRidge * 0.24) + vec3(0.22) * forgeSweep, forgeCosmic * 1.10, forgeCosmos);
float forgeEnchanted = max(forgeFrenzy,forgeCosmos);
// Retain the PBR surface, bevel contrast and material distinctions beneath the enchantment.
diffuseColor.rgb = mix(diffuseColor.rgb, mix(forgeRainbow * 0.68 + vec3(0.015),vec3(0.003,0.006,0.015)+forgeCosmic*0.10,forgeCosmos), forgeEnchanted*mix(0.92,forgeCosmosCoverage,forgeCosmos));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float forgeRim=pow(1.0-abs(dot(normal,normalize(vViewPosition))),3.0);
totalEmissiveRadiance += vec3(1.0,0.12,0.012)*forgeHeat*forgeHeatResponse*0.7;
totalEmissiveRadiance = mix(totalEmissiveRadiance, forgeLight + mix(forgeRainbow,vec3(0.15,0.35,0.85),forgeCosmos)*forgeRim*0.26, forgeEnchanted);`).replace("#include <opaque_fragment>",`// Cosmic enamel has depth beneath the original metal highlights.
outgoingLight = mix(outgoingLight,outgoingLight*0.22+forgeCosmic*1.20+vec3(0.10,0.20,0.38)*forgeRim,forgeCosmos*forgeCosmosCoverage);
#include <opaque_fragment>`)},e.customProgramCacheKey=()=>"whole-sword-pbr-rainbow-cosmos-v3",e.needsUpdate=!0}setLevel(e,t){this.level=e;const s=[[0,t==="bronze"?14199912:t==="cold"?11069166:12964054],[3,11652804],[6,10731213],[10,12694478],[14,14273702],[15,11652048],[25,9216953],[29,14474440],[99,15066843]];let r=s[0],o=s[s.length-1];for(let a=1;a<s.length;a++)if(e<=s[a][0]){r=s[a-1],o=s[a];break}this.base.set(r[1]).lerp(new Ve(o[1]),xt.clamp((e-r[0])/(o[0]-r[0]),0,1))}update(e,t,n,s=!1){this.uniforms.forgeTime.value=e,this.uniforms.forgeFrenzy.value=n?1:0,this.uniforms.forgeCosmos.value=s?1:0,this.uniforms.forgeHeat.value=t,this.material.color.copy(this.base).lerp(this.hot,t*.68),this.material.emissive.copy(this.base).multiplyScalar(0),this.material.emissive.add(this.glow.copy(this.hot).multiplyScalar(t*.85)),this.material.emissiveIntensity=1}setTransform(e){e.updateWorldMatrix(!0,!1),this.uniforms.forgeWorldToSword.value.copy(e.matrixWorld).invert()}get color(){return this.material.color.getHexString()}}const Cr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class cs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yv=new nl(-1,1,1,-1,0,1);class Sv extends dt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}}const bv=new Sv;class ol{constructor(e){this._mesh=new Ke(bv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ev extends cs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ns.clone(e.uniforms),this.material=new kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ol(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Dc extends cs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class wv extends cs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Tv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ev(Cr),this.copyPass.material.blending=On,this.clock=new _d}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Dc!==void 0&&(o instanceof Dc?n=!0:o instanceof wv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Av extends cs{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Cv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ns extends cs{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,o,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new mn(r,o,{type:Bn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new mn(r,o,{type:Bn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=Cv;this.highPassUniforms=Ns.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ns.clone(Cr.uniforms),this.blendMaterial=new kt({uniforms:this.copyUniforms,vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader,blending:Fo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new Zn,this._fsQuad=new ol(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ns.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ns.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ns.BlurDirectionX=new le(1,0);ns.BlurDirectionY=new le(0,1);const vr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Rv extends cs{constructor(){super(),this.uniforms=Ns.clone(vr.uniforms),this.material=new id({name:vr.name,uniforms:this.uniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader}),this._fsQuad=new ol(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ua?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Pv{constructor(e,t,n){se(this,"composer");se(this,"bloom");this.renderer=e,this.composer=new Tv(e),this.composer.addPass(new Av(t,n)),this.bloom=new ns(new le(256,256),.35,.34,1.3),this.composer.addPass(this.bloom),this.composer.addPass(new Rv)}resize(e,t){this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t)}render(e,t,n,s){this.renderer.info.reset(),n?(this.bloom.strength=s?.4:.31,this.composer.render()):this.renderer.render(e,t)}dispose(){this.bloom.dispose();for(const e of this.composer.passes)e!==this.bloom&&e.dispose();this.composer.dispose()}}const Ss=xt.clamp;class Lv{constructor(e){se(this,"renderer");se(this,"scene",new uh);se(this,"camera",new zt(46,1,.1,50));se(this,"target",new T(0,1.45,-.3));se(this,"view","forge");se(this,"sword",new ut);se(this,"swordPlace","anvil");se(this,"swordScale",1);se(this,"bladeShapeKey","");se(this,"heat",0);se(this,"move",null);se(this,"targets",{furnace:{box:new Ut(new T(-4.05,0,-2.35),new T(-2.25,4.5,-.9)),anchor:new T(-3.15,2.55,-.96)},anvil:{box:new Ut(new T(-1.65,.8,-.7),new T(1.65,1.65,.9)),anchor:new T(0,1.55,.25)},cat:{box:new Ut(new T(2.2,1,-2.1),new T(4.6,3.3,.2)),anchor:new T(3.4,2.7,-.5)},relics:{box:new Ut(new T(4.75,0,-2.4),new T(6.75,3.3,-1.4)),anchor:new T(5.75,2.6,-1.4)}});se(this,"hammer",new ut);se(this,"cat",new ut);se(this,"head",new ut);se(this,"jaw",new ut);se(this,"belly");se(this,"tail");se(this,"catEyes",[]);se(this,"catBlink",()=>{});se(this,"catMouth",new T(0,-.115,.52));se(this,"bladeMat",new vt({color:11914449,metalness:.82,roughness:.3}));se(this,"bladeFinish");se(this,"swordGlow");se(this,"bladePhase","");se(this,"bladeCoolingAt",-10);se(this,"furnaceLight",new wr(16740390,20,8,2));se(this,"board");se(this,"boardInfo",{cue:"把剑送入炉火",result:"",value:0,heat:0});se(this,"boardFrame",new ut);se(this,"forgeBenchBounds",new Ut);se(this,"forgeHammerBounds",new Ut);se(this,"boardProb");se(this,"boardWide",!1);se(this,"boardLayout",{width:0,height:0,top:0,bottom:0});se(this,"boardCanvas",document.createElement("canvas"));se(this,"lastBoard","");se(this,"submittedBoardHits",0);se(this,"submittedBladeFinish","metal");se(this,"state",null);se(this,"hitStart",-10);se(this,"hitSpeed",1);se(this,"hitResult","success");se(this,"hitImpact",!1);se(this,"onHitImpact",null);se(this,"hitImpactAt",-10);se(this,"hitContactRendered",!1);se(this,"submittedHammerContact",!1);se(this,"hammerRest",new T(1.25,1.65,-.38));se(this,"hammerRaised",new T(1.25,1.85,-.38));se(this,"hammerContact",new T(1.2,1.75,.11));se(this,"hammerBottomOffset",0);se(this,"contactShapeKey","");se(this,"tributeStart",-10);se(this,"tributeElapsed",0);se(this,"tributeDone",null);se(this,"tributeCount",3);se(this,"rewards",[]);se(this,"fx",[]);se(this,"flames",[]);se(this,"raf",0);se(this,"prev",0);se(this,"renderAt",0);se(this,"gpuFrame",null);se(this,"submittedTribute",0);se(this,"renderedTribute",0);se(this,"paused",!1);se(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)").matches);se(this,"observer");se(this,"scratch",new T);se(this,"surfaces");se(this,"forgeMaterials");se(this,"roomKey");se(this,"roomFill");se(this,"roomAmbient");se(this,"forgeKey");se(this,"uprightOak");se(this,"forgeSwordY",1.5);se(this,"forgeProofPending",!0);se(this,"fitCamera",new zt(46,1,.1,50));se(this,"lastForgeOffset",-1);se(this,"pendingForgeProof",null);se(this,"pendingCatProof",null);se(this,"onVisibility",()=>{this.paused=document.hidden,this.paused||(this.prev=0,this.raf=requestAnimationFrame(this.tick))});se(this,"stageAbort",new AbortController);se(this,"tick",e=>{var A,L,_,S,P,I,O,V,F;if(this.paused)return;const t=e/1e3,n=this.prev?Math.min(.2,t-this.prev):.016;this.prev=t;const s=this.cameraPose();this.camera.fov=xt.lerp(this.camera.fov,s.fov,1-Math.exp(-n*5)),this.camera.setViewOffset(this.host.clientWidth,this.host.clientHeight,0,this.host.clientHeight*s.offset,this.host.clientWidth,this.host.clientHeight),this.camera.position.lerp(s.position,1-Math.exp(-n*5)),this.target.lerp(s.target,1-Math.exp(-n*5)),this.camera.lookAt(this.target),this.camera.updateMatrixWorld(!0),this.positionTargets();const r=!!this.move;if(this.move&&!this.tributeDone){const U=this.move,G=this.swordPose(U.to),z=Ss((t-U.start)/.7,0,1),te=z*z*(3-2*z);this.sword.position.lerpVectors(U.from,G.position,te),this.sword.position.y+=Math.sin(z*Math.PI)*.8,this.sword.quaternion.slerpQuaternions(U.rotation,G.rotation,te),this.sword.scale.lerpVectors(U.scale,G.scale,te),this.renderer.shadowMap.needsUpdate=!0,z>=1&&(this.swordPlace=U.to,this.move=null,this.applySwordPose(U.to),this.forgeProofPending=!0,U.done())}this.host.dataset.swordPosition=JSON.stringify(this.sword.position.toArray()),this.boardFrame.visible=this.view==="forge"&&((L=(A=this.state)==null?void 0:A.session)==null?void 0:L.phase)!=="finished"&&((S=(_=this.state)==null?void 0:_.session)==null?void 0:S.phase)!=="broken",this.boardFrame.quaternion.copy(this.camera.quaternion);const o=this.ledgerLayout();this.boardLayout=o,this.boardWide!==o.wide&&(this.boardWide=o.wide,this.lastBoard="",this.state&&this.drawBoard(this.state,this.boardProb)),this.boardFrame.position.set(0,3.55,-1.45),this.boardFrame.scale.setScalar(1),this.boardFrame.updateMatrixWorld(!0);const a=this.boardFrame.position.clone().project(this.camera);a.x=2*(o.left+o.width/2)/this.host.clientWidth-1,a.y=1-(o.top+o.bottom)/this.host.clientHeight,this.boardFrame.position.copy(a.unproject(this.camera)),this.boardFrame.updateMatrixWorld(!0);const l=this.boardFrame.localToWorld(new T(-2.525,0,0)).project(this.camera),h=(this.boardFrame.localToWorld(new T(2.525,0,0)).project(this.camera).x-l.x)*this.host.clientWidth/2,f=o.width/h;this.boardFrame.scale.set(f,f*(o.height/o.width)/(1.72/5.05),f),this.boardFrame.updateMatrixWorld(!0),this.furnaceLight.intensity=20+Math.sin(t*11)*1.5+Math.sin(t*23)*1.2,this.flames.forEach((U,G)=>{U.scale.y=U.userData.height*(.9+Math.sin(t*7+G*4)*.12),U.rotation.y=t+G});const d=(t-this.hitStart)/this.hitSpeed,u=this.onHitImpact&&d>=.18?.18:this.hitImpact?.18+(t-this.hitImpactAt)/this.hitSpeed:d,g=this.hammerRest,v=this.hammerRaised,m=this.hammerContact;let p=-.3;if(this.hammer.position.copy(g),u>=0&&u<.08){const U=u/.08;p=xt.lerp(-.3,-.48,U),this.hammer.position.lerpVectors(g,v,U)}else if(u>=.08&&u<.18){const U=Math.pow((u-.08)/.1,2);p=xt.lerp(-.48,1.38,U),this.hammer.position.lerpVectors(v,m,U)}else if(u>=.18&&u<.22)p=1.38,this.hammer.position.copy(m);else if(u>=.22&&u<.55){const U=(u-.22)/.33,G=1-Math.pow(1-U,3);p=xt.lerp(1.38,-.3,G),this.hammer.position.lerpVectors(m,g,G)}this.hammer.rotation.z=p;const y=((P=this.state)==null?void 0:P.session)&&kn(this.state.session),M=this.bladePhase==="heat"?this.heat/100:this.bladePhase==="forge"?this.heat/100*Math.exp(-Math.max(0,t-this.bladeCoolingAt)*.7):0,x=!!((O=(I=this.state)==null?void 0:I.session)!=null&&O.superGod);if(this.bladeFinish.setTransform(this.sword),this.bladeFinish.update(t,M,!!y,x),this.host.dataset.bladeFinish=x?"cosmos":y?"rainbow":"metal",this.host.dataset.hiltFinish=this.host.dataset.bladeFinish,this.host.dataset.bladeColor=this.bladeFinish.color,this.hitContactRendered&&!this.hitImpact&&this.onHitImpact){this.hitImpact=!0,this.hitImpactAt=t;const U=this.onHitImpact;this.onHitImpact=null,this.hitResult=U(),this.host.dataset.hammerStage="impact",this.host.dataset.hammerImpacts=String(Number(this.host.dataset.hammerImpacts||0)+1),this.hitResult==="break"&&this.spawnFragments(),this.spawnSparks(this.hitResult==="break"?36:this.hitResult==="damage"?12:this.hitResult==="great"?40:this.hitResult==="unchanged"?6:22,new T(.12,this.forgeSwordY+.05,.11))}if(u>=.18&&u<.36&&this.hitResult!=="break"&&this.swordPlace==="anvil"&&!this.move&&(this.sword.position.y=this.forgeSwordY+Math.sin((u-.18)/.18*Math.PI)*.025),u>=.18&&u<.32&&!this.reduced){const U=(u-.18)/.14;this.camera.position.y+=Math.sin(U*Math.PI*4)*.018*(1-U)}u>=.55&&this.host.dataset.hammerStage!=="idle"&&(this.host.dataset.hammerStage="idle"),(u<.6||this.tributeDone)&&(this.renderer.shadowMap.needsUpdate=!0),this.tributeDone||(this.cat.rotation.y=Math.sin(t*.35)*.06,this.head.rotation.z=Math.sin(t*.8)*.02,this.jaw.rotation.x=0,this.belly.scale.set(1,1+Math.sin(t*2)*.012,1));const C=t%6.7,w=this.tributeDone?1:C<.19?Math.max(.08,Math.abs(C-.095)/.095):1;if(this.catEyes.forEach(U=>U.scale.y=w),this.catBlink(w),this.tail.rotation.z=Math.sin(t*1.5)*(this.tributeDone?.1:.045),this.tributeDone){this.tributeElapsed+=n,this.tributeElapsed>=1.7&&this.renderedTribute<.55?this.tributeElapsed=1.69:this.tributeElapsed>=3&&this.renderedTribute<1.7?this.tributeElapsed=2.99:this.tributeElapsed>=4.1&&this.renderedTribute<3?this.tributeElapsed=4.09:this.tributeElapsed>=6.5&&this.renderedTribute<4.1&&(this.tributeElapsed=6.49);const U=this.tributeElapsed;if(U<1.7){this.cat.rotation.y=0,this.jaw.rotation.x=.75;const G=Ss((U-.55)/1.15,0,1),z=this.head.localToWorld(this.catMouth.clone());this.sword.visible=!0,this.sword.position.set(z.x,z.y,z.z+(1-G)*2.42*1.05),this.sword.rotation.set(0,Math.PI/2,0),this.sword.scale.set(1.05*(1-G*.96),1.05,1.05)}else if(U<3)this.stage("chewing","猫咪张嘴吞下巨剑……咔嚓咔嚓"),this.sword.visible=!1,this.jaw.rotation.x=Math.abs(Math.sin(U*14))*.45,this.belly.scale.set(1,1,1+Math.sin((U-1.7)/1.3*Math.PI)*.28);else if(U<4.1)this.stage("turning","猫咪转过身，尾巴翘了起来……"),this.cat.rotation.y=-Ss((U-3)/1.1,0,1)*Math.PI*.8,this.jaw.rotation.x=0;else if(U<6.5){this.stage("ejecting","噗！猫咪拉出 "+this.tributeCount+" 把铁剑，掉进接剑盘");const G=Math.min(this.tributeCount,Math.floor((U-4.1)/.32)+1);for(;this.rewards.length<G;){const z=this.makeSword();z.scale.setScalar(.35),this.scene.add(z),this.rewards.push(z),this.spawnSparks(7,new T(3.4,1.35,-.2))}this.rewards.forEach((z,te)=>{const W=Ss((U-4.1-te*.32)/.65,0,1);z.position.set(3.4+(te-(this.tributeCount-1)/2)*.22*W,1.53+Math.sin(W*Math.PI)*.55-W*.35,-.25+W*.65),z.rotation.set(W*.12,W*.8+te*.5,W*Math.PI*.04)})}else{this.stage("complete","纳贡完成 · 获得 "+this.tributeCount+" 把铁剑"),this.sword.visible=!1,this.cat.rotation.y=0,this.jaw.rotation.x=0,this.belly.scale.set(1,1,1);const G=this.tributeDone;this.tributeDone=null,this.stageAbort.abort(),this.stageAbort=new AbortController,G()}}for(let U=this.fx.length-1;U>=0;U--){const G=this.fx[U];G.life-=n,G.v.y-=n*8,G.mesh.position.addScaledVector(G.v,n),G.mesh.scale.setScalar(Math.max(.01,G.life)),G.life<=0&&(this.scene.remove(G.mesh),G.mesh.geometry.dispose(),G.mesh.material.dispose(),this.fx.splice(U,1))}if(e-this.renderAt>=1e3/30){const U=this.renderer.getContext();this.gpuFrame&&U.clientWaitSync(this.gpuFrame,0,0)!==U.TIMEOUT_EXPIRED&&(U.deleteSync(this.gpuFrame),this.gpuFrame=null,this.renderedTribute=this.submittedTribute,this.host.dataset.boardRenderedHits=String(this.submittedBoardHits),this.host.dataset.bladeRenderedFinish=this.submittedBladeFinish,this.submittedHammerContact&&(this.hitContactRendered=!0),this.pendingForgeProof&&(this.host.dataset.forgeProof=this.pendingForgeProof,this.pendingForgeProof=null),this.pendingCatProof&&(this.host.dataset.catProof=this.pendingCatProof,this.pendingCatProof=null)),this.gpuFrame||(this.renderAt=e,this.swordGlow.render(this.scene,this.camera,!!y||x,x),this.submittedTribute=this.tributeDone?this.tributeElapsed:0,this.submittedBoardHits=((F=(V=this.state)==null?void 0:V.session)==null?void 0:F.hits)||0,this.submittedBladeFinish=x?"cosmos":y?"rainbow":"metal",this.submittedHammerContact=!!this.onHitImpact&&d>=.18,this.gpuFrame=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0),U.flush(),this.host.dataset.renderCalls=String(this.renderer.info.render.calls),this.host.dataset.renderTriangles=String(this.renderer.info.render.triangles),this.view==="forge"&&this.forgeProofPending&&this.sword.visible&&this.swordPlace==="anvil"&&!r&&u>=.55&&this.camera.position.distanceTo(s.position)<.015&&Math.abs(this.camera.fov-s.fov)<.02&&this.recordForgeVisibility(),this.view==="cat"&&this.camera.position.distanceTo(s.position)<.03&&this.recordCatVisibility())}this.raf=requestAnimationFrame(this.tick)});this.host=e,this.renderer=new tv({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(1512207),this.renderer.outputColorSpace=Ct,this.renderer.info.autoReset=!1,this.renderer.toneMapping=Ua,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kc,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.domElement.setAttribute("aria-label","3D锻造工坊：铁砧、熔炉、邪恶猫咪与遗物柜"),e.appendChild(this.renderer.domElement),this.surfaces=new iv(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.forgeMaterials=lv(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.bladeMat.dispose(),this.bladeFinish=new Mv(this.surfaces.get("steel")),this.bladeMat=this.bladeFinish.material,this.uprightOak=this.surfaces.get("oak",9).clone();for(const l of["map","bumpMap","roughnessMap"]){const c=this.uprightOak[l].clone();c.center.set(.5,.5),c.rotation=Math.PI/2,this.uprightOak[l]=c}const t=new nv,n=new Ta(this.renderer);this.scene.environment=n.fromScene(t,.04).texture,this.scene.environmentIntensity=.72,t.dispose(),n.dispose(),this.scene.fog=new qa(1643535,.028),this.roomAmbient=new ud(12241884,3547932,.38),this.scene.add(this.roomAmbient);const s=this.roomKey=new gd(16768956,1.45);s.position.set(-3,7,4),s.castShadow=!0,s.shadow.mapSize.set(1536,1536),Object.assign(s.shadow.camera,{left:-6,right:7,top:6,bottom:-4}),s.shadow.bias=-4e-4,s.shadow.normalBias=.018,this.scene.add(s);const r=this.roomFill=new wr(11786479,4,12);r.position.set(4,4,3),this.scene.add(r);const o=this.forgeKey=new dd(16768951,38,9,.52,.68,2);o.position.set(-.7,5.1,2.35),o.target.position.set(.1,1.25,.1),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.bias=-3e-4,o.shadow.normalBias=.014,this.scene.add(o,o.target),this.furnaceLight.position.set(-3.15,1.45,-1.2),this.scene.add(this.furnaceLight),this.buildRoom(),this.buildForge(),this.buildCat(),this.buildRelics(),this.sword=Pc(this.bladeMat,"great",0,"iron"),this.enchantFittings(this.sword),this.bladeShapeKey="great:0:iron",this.scene.add(this.sword),this.swordGlow=new Pv(this.renderer,this.scene,this.camera),this.host.dataset.swordName=fn("great",0).name,this.host.dataset.swordShape=this.bladeShapeKey,this.batchStaticGeometry(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize();const a=this.cameraPose();this.target.copy(a.target),this.camera.position.copy(a.position),this.camera.fov=a.fov,this.camera.updateProjectionMatrix(),this.camera.lookAt(this.target),document.addEventListener("visibilitychange",this.onVisibility),this.raf=requestAnimationFrame(this.tick),e.dataset.ready="true"}setBoardInfo(e,t,n,s){this.boardInfo={cue:e,result:t,value:n,heat:s}}material(e,t=0,n=.85){return new vt({color:e,metalness:t,roughness:n})}mesh(e,t,n,s=0,r=0,o=0){const a=new Ke(e,t);return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}box(e,t,n,s,r,o=0,a=0,l=0){return this.mesh(Ca(e,t,n),s,r,o,a,l)}contact(e,t,n,s,r,o,a=.45){const l=document.createElement("canvas");l.width=l.height=128;const c=l.getContext("2d"),h=c.createRadialGradient(64,64,10,64,64,64);h.addColorStop(0,"rgba(8,5,3,.9)"),h.addColorStop(.55,"rgba(8,5,3,.45)"),h.addColorStop(1,"rgba(8,5,3,0)"),c.fillStyle=h,c.fillRect(0,0,128,128);const f=new Ke(new es(r,o),new Zn({map:new vi(l),transparent:!0,opacity:a,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));f.rotation.x=-Math.PI/2,f.position.set(t,n,s),e.add(f)}sphere(e,t,n,s,r,o,a,l){const c=this.mesh(new Vn(1,24,16),a,l,e,t,n);return c.scale.set(s,r,o),c}cylinder(e,t,n,s,r,o,a,l,c=16){return this.mesh(new Hn(e,t,n,c),s,r,o,a,l)}batchStaticGeometry(){this.scene.updateMatrixWorld(!0);const e=new Map;this.scene.traverse(t=>{if(!(t instanceof Ke)||t instanceof Er||Array.isArray(t.material)||t.material.transparent)return;for(let r=t;r;r=r.parent)if(r===this.cat||r===this.hammer||r===this.sword||r===this.boardFrame)return;const n=[t.material.id,t.castShadow,t.receiveShadow].join(":"),s=e.get(n)||[];s.push(t),e.set(n,s)});for(const t of e.values()){if(t.length<2)continue;const n=t.map(o=>{const a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();return a.applyMatrix4(o.matrixWorld),a}),s=sl(n,!1);if(n.forEach(o=>o.dispose()),!s)continue;const r=new Ke(s,t[0].material);r.castShadow=t[0].castShadow,r.receiveShadow=t[0].receiveShadow,t.forEach(o=>{o.removeFromParent(),o.geometry.dispose()}),s.computeBoundingSphere(),this.scene.add(r)}}buildRoom(){const e=this.surfaces.get("oak",9),t=this.surfaces.get("stone",14).clone();t.color.set(7827043),t.map=t.map.clone(),t.map.repeat.set(9,9),this.box(15,.15,12,t,this.scene,0,-.1,0);const n=this.material(2893087);this.box(15,12,.35,n,this.scene,0,5.8,-3.4);const s=this.surfaces.get("stone",7),r=new Er(Ca(.94,.47,.31,.028),s,384);let o=0;const a=new st;for(let h=0;h<24;h++)for(let f=0;f<16;f++)a.makeTranslation(-7.4+f*.98+h%2*.47,.12+h*.5,-3.15),r.setMatrixAt(o,a),r.setColorAt(o,new Ve().setHSL(.078,.1,.53+Math.sin(o*12.3)*.07)),o++;r.receiveShadow=!0,this.scene.add(r);for(const h of[-6,-2.2,2.2,6])this.box(.23,6,.3,this.uprightOak,this.scene,h,2.9,-2.9),this.box(.3,.3,6,e,this.scene,h,5.5,-.7);this.box(14,.25,.35,e,this.scene,0,4.95,-2.85);const l=this.material(2564638);for(let h=0;h<11;h++)this.box(.016,.006,11,l,this.scene,-7+h*1.4,-.018,0);for(let h=0;h<9;h++)this.box(15,.006,.016,l,this.scene,0,-.018,-5+h*1.4);const c=new ut;c.position.set(-4.5,1.65,-2.9),this.scene.add(c),this.box(1.2,.11,.12,e,c,0,.65,0),this.box(1.2,.11,.12,e,c,0,-.5,0);for(let h=0;h<3;h++){const f=this.makeSword();f.scale.setScalar(.4),f.rotation.z=Math.PI/2,f.position.set(-.4+h*.4,0,.14),c.add(f)}}makeBench(e,t,n,s,r=!1){const o=new ut;o.position.set(n,0,s),this.scene.add(o);const a=r?this.forgeMaterials.wood[0]:this.surfaces.get("oak",2),l=r?this.forgeMaterials.casting:this.surfaces.get("iron"),c=this.material(r?7760215:9340788,.76,.48),h=e/2-.28,f=t/2-.22;for(let u=0;u<5;u++)this.box(e,.26,t/5-.013,r?this.forgeMaterials.wood[u]:this.surfaces.get("oak",2+u%2),o,0,.94,-t/2+t/5*(u+.5));const d=this.surfaces.get("endgrain");for(const u of[-1,1])this.box(.014,.238,t-.025,d,o,u*(e/2+.003),.94,0);for(const u of[-h,h])for(const g of[-f,f]){this.box(.31,.83,.31,this.uprightOak,o,u,.415,g),this.box(.33,.12,.33,l,o,u,.12,g),this.box(.34,.27,.035,l,o,u,.76,g+Math.sign(g)*.17);for(const v of[.68,.84])this.sphere(u,v,g+Math.sign(g)*.193,.025,.025,.015,c,o)}for(const u of[-f,f]){this.box(e-.38,.21,.16,a,o,0,.66,u),this.box(e-.5,.15,.17,a,o,0,.26,u);for(const g of[-1,1]){const v=this.box(.17,.7,.17,this.uprightOak,o,g*(h-.19),.48,u);v.rotation.z=g*-.55}}for(const u of[-h,h])this.box(.17,.15,t-.28,a,o,u,.26,0);for(const u of[-1,1]){this.box(e-.1,.095,.042,l,o,0,.865,u*(t/2+.021));for(let g=0;g<7;g++)this.sphere(-e/2+.19+g*(e-.38)/6,.865,u*(t/2+.048),.023,.023,.014,c,o)}return this.contact(o,0,-.016,0,e+.5,t+.65,.52),o}buildForge(){const e=this.forgeMaterials.wood[1],t=this.forgeMaterials.casting,n=this.forgeMaterials.face,s=this.material(2107952,.7,.57),r=this.material(10849108,.74,.4),o=this.makeBench(3.7,1.75,0,.2,!0);o.scale.y=.8,this.contact(o,0,1.073,-.1,2.4,1.43,.65);const a=new ut;a.position.set(0,.91,.1),a.scale.set(1.1,.6,1.34),a.name="forged-anvil",this.scene.add(a),this.box(1.67,.056,1.1,s,a,0,-.03,0),this.mesh(sv(),t,a),this.mesh(rv(),this.forgeMaterials.edge,a),this.mesh(Cc(.14,.675),t,a).scale.set(1.16,1,1.09),this.mesh(Cc(.115,.815),[n,this.forgeMaterials.edge],a).scale.set(1.16,1,1.09);for(const M of[-.57,.57])for(const x of[-.36,.36])this.box(.38,.13,.26,t,a,M,.045,x),this.box(.11,.03,.16,this.forgeMaterials.edge,a,M,.12,x),this.cylinder(.038,.038,.027,this.forgeMaterials.hammer,a,M,.144,x,6);this.box(.115,.02,.115,s,a,.62*1.16,.76,-.17*1.09),this.cylinder(.033,.033,.02,s,a,.81*1.16,.76,.17*1.09,16);const h=new gn;h.moveTo(-.11,.08),h.lineTo(-.08,.14),h.lineTo(-.02,.1),h.quadraticCurveTo(0,.12,.02,.1),h.lineTo(.08,.14),h.lineTo(.11,.08),h.quadraticCurveTo(.14,-.1,0,-.13),h.quadraticCurveTo(-.14,-.1,-.11,.08);const f=new vn(h,{depth:.009,bevelEnabled:!0,bevelSize:.004,bevelThickness:.003,bevelSegments:2});this.mesh(f,this.material(7956554,.65,.62),a,0,.51,.262).scale.setScalar(.65);for(const M of[-.026,.026])this.sphere(M,.52,.275,.009,.006,.004,s,a);const u=new ut;u.position.set(1.25,1.65,-.38),u.rotation.z=-.3,this.scene.add(u),this.hammer=u,this.cylinder(.062,.079,1.34,e,u,0,.28,0,24);const g=ov();this.mesh(g,[this.forgeMaterials.hammer,this.forgeMaterials.edge],u,0,1.1,0);const v=g.getAttribute("position");let m=1/0;for(let M=0;M<v.count;M++)m=Math.min(m,v.getX(M)*Math.sin(1.38)+(v.getY(M)+1.1)*Math.cos(1.38));this.hammerBottomOffset=m,this.hammerContact.y=this.forgeSwordY+.035-m;const p=this.box(.15,.026,.14,this.forgeMaterials.casting,u,0,1.331,0);p.rotation.y=.12,this.box(.035,.016,.105,this.forgeMaterials.edge,u,.018,1.349,0),this.cylinder(.078,.086,.52,this.surfaces.get("leather"),u,0,-.13,0,24);for(let M=0;M<9;M++){const x=this.mesh(new an(.083,.011,6,24),this.surfaces.get("leather"),u,0,.1-M*.055,0);x.rotation.x=Math.PI/2}for(const M of[.16,-.41])this.cylinder(.088,.088,.045,r,u,0,M,0,24);u.updateMatrixWorld(!0),this.forgeHammerBounds.setFromObject(u),this.boardCanvas.width=1536,this.boardCanvas.height=768,this.board=new vi(this.boardCanvas),this.board.colorSpace=Ct,this.board.anisotropy=4;const y=this.boardFrame;y.position.set(0,3.55,-1.45),this.scene.add(y),this.box(5.05,1.72,.12,e,y),this.mesh(new es(4.9,1.59),new Zn({map:this.board}),y,0,0,.071);for(const M of[-2.47,2.47])this.box(.065,1.65,.07,s,y,M,0,.095);for(const M of[-.825,.825])this.box(5,.065,.07,s,y,0,M,.095);for(const M of[-2.46,2.46])for(const x of[-.82,.82])this.sphere(M,x,.14,.024,.024,.014,r,y);y.traverse(M=>{M instanceof Ke&&(M.material=M.material.clone(),M.material.depthTest=!1,M.material.depthWrite=!1,M.renderOrder=100,M.castShadow=!1,M.receiveShadow=!1)}),this.buildFurnace(),this.buildForgeProps(o),o.updateMatrixWorld(!0),o.traverse(M=>{if(M instanceof Ke){if((Array.isArray(M.material)?M.material:[M.material]).every(C=>C.transparent))return;M.geometry.computeBoundingBox(),this.forgeBenchBounds.union(M.geometry.boundingBox.clone().applyMatrix4(M.matrixWorld))}})}buildFurnace(){const e=this.surfaces.get("iron"),t=this.surfaces.get("stone",7),n=this.material(2169365),s=new vt({color:3612697,emissive:16731146,emissiveIntensity:1.7,roughness:1}),r=new ut;r.position.set(-3.15,0,-1.72),this.scene.add(r),this.box(1.64,1.07,1.25,n,r,0,.55,0);for(let c=0;c<3;c++)for(let h=0;h<3;h++)this.box(.54,.34,.08,t,r,-.55+h*.55,.2+c*.35,.665);this.box(1.37,1.22,.3,n,r,0,1.69,-.39);for(const c of[-.74,.74])for(let h=0;h<4;h++)this.box(.29,.34,1.16,t,r,c,1.27+h*.35,0);for(let c=0;c<11;c++){const h=c/11*Math.PI+.025,f=(c+1)/11*Math.PI-.025,d=new gn;d.moveTo(Math.cos(h)*.61,2.06+Math.sin(h)*.61),d.lineTo(Math.cos(h)*.92,2.06+Math.sin(h)*.92),d.absarc(0,2.06,.92,h,f,!1),d.lineTo(Math.cos(f)*.61,2.06+Math.sin(f)*.61),d.absarc(0,2.06,.61,f,h,!0),d.closePath();const u=new vn(d,{depth:1.14,bevelEnabled:!0,bevelSize:.013,bevelThickness:.012,bevelSegments:2,curveSegments:5});u.translate(0,0,-.57),this.mesh(u,t,r)}this.box(1.79,.11,1.58,e,r,0,1.1,.1),this.box(.9,1.68,.6,t,r,0,3.46,-.3);for(const c of[2.98,3.42,3.86])this.box(.94,.07,.64,e,r,0,c,-.3);const o=ts(88);for(let c=0;c<14;c++){const h=this.mesh(new Ka(.15+o()*.07,0),c%3?s:e,r,-.53+c%5*.255,1.23+Math.floor(c/5)*.08,0+o()*.3);h.scale.y=.7,h.rotation.set(o(),o(),o())}const a=this.cylinder(.62,.62,.01,new Zn({color:16737559}),r,0,1.17,.04,32);a.scale.z=.75;for(let c=0;c<7;c++){const h=this.sphere(-.46+c*.15,1.43+Math.sin(c)*.06,.05,.055,.22+o()*.1,.055,new Zn({color:c%2?16761691:16747045,transparent:!0,opacity:.8}),r);h.castShadow=!1,h.userData.height=h.scale.y,this.flames.push(h)}for(let c=0;c<6;c++)this.cylinder(.023,.023,.5,e,r,-.57+c*.23,1.39,.65,10);const l=this.cylinder(.034,.034,1.42,e,r,0,1.28,.675,12);l.rotation.z=Math.PI/2,this.contact(r,0,-.016,.05,2.3,1.9,.65)}buildForgeProps(e){this.surfaces.get("oak",2);const t=this.surfaces.get("iron"),n=this.surfaces.get("steel"),s=new ut;e.add(s),s.position.set(-1.25,1.1,.1),s.rotation.y=-.38;for(const h of[-1,1]){const f=new pi([new T(h*.08,0,.37),new T(h*.045,.016,0),new T(h*.1,.022,-.2),new T(h*.13,.018,-.32)]);this.mesh(new Nr(f,16,.018,6,!1),t,s)}this.cylinder(.029,.029,.02,n,s,0,.033,.03,12);const r=this.box(.065,.055,.35,n,e,1.43,1.1,.49);r.rotation.y=.5;const o=ts(12),a=this.material(2435370,.35,.85),l=new Er(new Qa(.022),a,22),c=new st;for(let h=0;h<22;h++)c.compose(new T((o()-.5)*2.3,1.08,o()*.72-.05),new gi().setFromEuler(new Qt(o(),o(),o())),new T(1+o(),.23,1+o())),l.setMatrixAt(h,c);e.add(l)}makeSword(e=!1){const t=new ut,n=e?this.bladeMat:this.surfaces.get("steel").clone(),s=this.material(12163683,.8,.3),r=this.surfaces.get("leather").clone(),o=new Float32Array([0,0,-.29,0,0,.29,0,.065,0,1.95,0,-.29,1.95,0,.29,1.95,.065,0,2.42,0,0]),a=new dt;a.setAttribute("position",new Vt(o,3)),a.setAttribute("uv",new Ye([0,0,0,1,0,.5,.81,0,.81,1,.81,.5,1,.5],2)),a.setIndex([0,2,3,2,5,3,2,1,5,1,4,5,3,5,6,5,4,6,0,3,1,1,3,4]);const l=a.toNonIndexed();l.computeVertexNormals(),a.dispose();const c=this.mesh(l,n,t);c.name="blade";const h=new gn;h.moveTo(-.045,-.41),h.quadraticCurveTo(-.18,-.39,-.13,-.28),h.lineTo(-.1,-.08),h.lineTo(-.1,.08),h.lineTo(-.13,.28),h.quadraticCurveTo(-.18,.39,-.045,.41),h.lineTo(.035,.37),h.lineTo(.018,.08),h.lineTo(.018,-.08),h.lineTo(.035,-.37),h.closePath();const f=new vn(h,{depth:.12,bevelEnabled:!0,bevelSize:.016,bevelThickness:.016,bevelSegments:3,curveSegments:10});f.rotateX(-Math.PI/2),this.mesh(f,s,t,-.06,-.02,0);const d=this.cylinder(.062,.062,.56,r,t,-.38,.04,0);d.rotation.z=Math.PI/2;for(let u=0;u<9;u++){const g=this.mesh(new an(.064,.007,5,20),r,t,-.16-u*.054,.04,0);g.rotation.y=Math.PI/2}for(const u of[-.12,-.66]){const g=this.cylinder(.072,.072,.03,s,t,u,.04,0,24);g.rotation.z=Math.PI/2}return this.sphere(-.71,.04,0,.1,.085,.085,s,t),this.sphere(-.72,.108,0,.035,.017,.035,this.material(4352625,.4,.23),t),t}enchantFittings(e){const t=new Set;e.traverse(n=>{if(n instanceof Ke){const s=Array.isArray(n.material)?n.material:[n.material];for(const r of s)r instanceof vt&&r!==this.bladeMat&&!t.has(r)&&(t.add(r),this.bladeFinish.decorate(r))}})}evolveSword(e,t,n){const s=e+":"+t+":"+n;if(s===this.bladeShapeKey)return;const r=new Set;for(const a of[...this.sword.children])a.traverse(l=>{if(l instanceof Ke){l.geometry.dispose();const c=Array.isArray(l.material)?l.material:[l.material];for(const h of c)h!==this.bladeMat&&r.add(h)}}),this.sword.remove(a);r.forEach(a=>a.dispose());const o=Pc(this.bladeMat,e,t,n);this.enchantFittings(o);for(const a of[...o.children])this.sword.add(a);this.sword.userData=o.userData,this.bladeShapeKey=s,this.host.dataset.swordName=fn(e,t).name,this.host.dataset.swordShape=s,this.host.dataset.swordTheme=String(o.userData.theme||"forged"),this.forgeProofPending=!0,this.renderer.shadowMap.needsUpdate=!0}buildCat(){const e=xv();this.cat=e.root,this.head=e.head,this.jaw=e.jaw,this.belly=e.belly,this.tail=e.tail,this.catEyes=e.eyes,this.catBlink=e.blink,this.catMouth.copy(e.mouth),this.cat.position.set(3.4,1.05,-1.32),this.scene.add(this.cat),this.host.dataset.catAsset="loading",e.ready.then(()=>{this.host.dataset.catAsset="ready",this.host.dataset.catAtlasSize=`${e.asset.image.width}x${e.asset.image.height}`,this.renderer.shadowMap.needsUpdate=!0}).catch(()=>{this.host.dataset.catAsset="failed"});const t=this.makeBench(2.55,1.8,3.4,-1.35);this.contact(t,0,1.075,0,1.85,1.5,.65),this.box(2.4,.12,.65,this.material(5858407,.7,.36),this.scene,3.4,1.12,.36)}buildRelics(){const e=new ut;e.position.set(5.75,0,-2.02),this.scene.add(e);const t=this.surfaces.get("oak",9),n=this.material(10058059,.65,.4);this.box(2,3.3,.65,t,e,0,1.65,0),this.box(1.8,2.6,.05,this.material(1321514),e,0,1.85,.36),this.contact(e,0,-.016,.15,2.65,1.5,.6);for(let r=0;r<3;r++){const o=1.1+r*.72;this.box(1.9,.08,.85,n,e,0,o-.2,.1);const a=r===0?new an(.2,.055,10,24):r===1?new xi(.23):new $a(.23,0);this.mesh(a,new vt({color:[15185234,8837320,10191065][r],metalness:.6,roughness:.25,emissive:[7557900,1195825,3416658][r],emissiveIntensity:.35}),e,0,o,.53)}for(const r of[-.93,.93])this.box(.065,3.2,.07,n,e,r,1.7,.4);const s=new wr(11917241,7,4);s.position.set(0,3,.8),e.add(s)}resize(){var n;const e=this.host.clientWidth,t=this.host.clientHeight;!e||!t||(this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5,Math.sqrt(145e4/(e*t)))),this.renderer.setSize(e,t,!1),(n=this.swordGlow)==null||n.resize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.forgeProofPending=!0)}ledgerLayout(){var h,f,d,u;const e=this.host.clientWidth,t=this.host.clientHeight,n=t<520,s=e>=700,r=((f=(h=this.state)==null?void 0:h.session)==null?void 0:f.phase)==="forge",o=r||((u=(d=this.state)==null?void 0:d.session)==null?void 0:u.phase)==="finished",a=n?Math.min(e*.54,460):s?Math.min(e*.55,720):e-28,l=o?a*(s?.24:.49):a*(s?.14:.32),c=n?92:s?130:146;return{width:a,height:l,left:(e-a)/2,top:c,bottom:c+l,wide:s}}cameraPose(){var t,n,s,r,o,a,l,c,h,f;const e=this.camera.aspect<.8;if(this.view==="forge"){const d=(n=(t=this.state)==null?void 0:t.session)==null?void 0:n.phase;if(d!=="finished"&&d!=="broken"){const m=d==="forge",p=this.host.clientWidth,y=this.host.clientHeight,M=this.ledgerLayout(),x=new T(e&&!m?-1.05:0,2.1,.1),C=x.clone().add(new T(0,5.2,8.4)),w=42,A=this.fitCamera;A.aspect=this.camera.aspect,A.fov=w,A.clearViewOffset(),A.updateProjectionMatrix();const L=[],_=this.forgeBenchBounds;for(const X of[_.min.x,_.max.x])for(const ae of[_.min.y,_.max.y])for(const Ee of[_.min.z,_.max.z])L.push(new T(X,ae,Ee));const S=this.forgeHammerBounds;for(const X of[S.min.x,S.max.x])for(const ae of[S.min.y,S.max.y])for(const Ee of[S.min.z,S.max.z])L.push(new T(X,ae,Ee));if(e&&!m)for(const X of[-4.08,-2.22])for(const ae of[0,4.3])L.push(new T(X,ae,-1));const P=e?p*.93:Math.min(p*.52,680),I=(r=(s=this.host.closest(".game"))==null?void 0:s.querySelector(".control:not([hidden])"))==null?void 0:r.getBoundingClientRect(),O=this.host.getBoundingClientRect(),V=(a=(o=this.host.closest(".game"))==null?void 0:o.querySelector(".station-nav"))==null?void 0:a.getBoundingClientRect(),F=Math.min(m&&I?I.top-O.top-18:y-20,V?V.top-O.top-18:y-20),U=M.bottom+20,G=Math.max(90,F-U);for(let X=0;X<4;X++){A.position.copy(C),A.lookAt(x),A.updateMatrixWorld(!0);const ae=L.map(_e=>_e.clone().project(A)),Ee=ae.map(_e=>_e.x),ke=ae.map(_e=>_e.y),Fe=(Math.max(...Ee)-Math.min(...Ee))*p/2,J=(Math.max(...ke)-Math.min(...ke))*y/2,j=Math.max(Fe/P,J/G);if(Math.abs(j-1)<.002)break;C.sub(x).multiplyScalar(j).add(x)}A.position.copy(C),A.lookAt(x),A.updateMatrixWorld(!0);const z=Math.max(...L.slice(0,8).map(X=>(1-X.clone().project(A).y)*y/2)),te=L.map(X=>(1-X.clone().project(A).y)*y/2),W=e&&!m?(Math.min(...te)+Math.max(...te)-U-F)/2/y:(z-F)/y;return Math.abs(W-this.lastForgeOffset)>5e-4&&(this.lastForgeOffset=W,this.forgeProofPending=!0),{position:C,target:x,offset:W,fov:w}}const u=new T(e?0:.35,e?6.4:5.6,e?9:6.4),g=new T(e?0:.35,2.05,-.3);let v=e?.2:.17;if(e){const m=(c=(l=this.host.closest(".game"))==null?void 0:l.querySelector(".control:not([hidden])"))==null?void 0:c.getBoundingClientRect(),p=this.host.getBoundingClientRect();if(m&&m.top>p.top+160){this.fitCamera.aspect=this.camera.aspect,this.fitCamera.updateProjectionMatrix(),this.fitCamera.position.copy(u),this.fitCamera.lookAt(g),this.fitCamera.updateMatrixWorld(!0);const y=new T(0,this.forgeSwordY-.03,.61).project(this.fitCamera);v=Math.max(v,((1-y.y)*p.height/2-(m.top-p.top-22))/p.height)}}return Math.abs(v-this.lastForgeOffset)>5e-4&&(this.lastForgeOffset=v,this.forgeProofPending=!0),{position:u,target:g,offset:v,fov:e?46:40}}if(this.view==="cat"){const d=new T(3.4,2.95,e?6.35:5.2),u=new T(3.4,1.86,-1.3);let g=e?.13:.085;if(e){const v=this.host.getBoundingClientRect(),m=(f=(h=this.host.closest(".game"))==null?void 0:h.querySelector(".control:not([hidden])"))==null?void 0:f.getBoundingClientRect();if(m&&m.top>v.top+260){const p=new Ut().setFromObject(this.cat),y=m.top-v.top-22,M=96,x=y-M;this.fitCamera.aspect=this.camera.aspect,this.fitCamera.fov=46,this.fitCamera.clearViewOffset();for(let C=0;C<3;C++){this.fitCamera.position.copy(d),this.fitCamera.lookAt(u),this.fitCamera.updateProjectionMatrix(),this.fitCamera.updateMatrixWorld(!0);const w=[];for(const S of[p.min.x,p.max.x])for(const P of[p.min.y,p.max.y])for(const I of[p.min.z,p.max.z]){const O=new T(S,P,I).project(this.fitCamera);w.push((1-O.y)*v.height/2)}const A=Math.min(...w),L=Math.max(...w),_=L-A;if(_>x-4){d.z=u.z+(d.z-u.z)*_/(x-4);continue}g=Ss(g,(L-y)/v.height,(A-M)/v.height);break}}}return{position:d,target:u,offset:g,fov:46}}return{position:new T(5.75,2.8,e?5.1:3.5),target:new T(5.75,1.95,-2),offset:.13,fov:46}}setStation(e){this.view=e,this.host.dataset.station=e,this.forgeProofPending=!0;const t=e==="forge";this.roomKey.intensity=t?1.45:2.7,this.roomFill.intensity=t?4:11,this.roomAmbient.intensity=t?.38:.65,this.forgeKey.intensity=t?38:0,this.scene.environmentIntensity=t?.72:1,this.renderer.shadowMap.needsUpdate=!0}recordCatVisibility(){var a,l;const e=new Ut().setFromObject(this.cat),t=[];for(const c of[e.min.x,e.max.x])for(const h of[e.min.y,e.max.y])for(const f of[e.min.z,e.max.z])t.push(new T(c,h,f).project(this.camera));const n=this.host.clientWidth,s=this.host.clientHeight,r=this.head.localToWorld(this.catMouth.clone()),o=(l=(a=this.host.closest(".game"))==null?void 0:a.querySelector(".control:not([hidden])"))==null?void 0:l.getBoundingClientRect();this.pendingCatProof=JSON.stringify({phase:this.tributeDone?this.host.dataset.tribute:"idle",navTop:o?o.top-this.host.getBoundingClientRect().top:s,elapsed:this.tributeElapsed,jawAngle:this.jaw.rotation.x,bodyDepth:this.belly.scale.z,turn:this.cat.rotation.y,mouth:r.toArray(),bounds:{left:Math.min(...t.map(c=>(c.x+1)*n/2)),right:Math.max(...t.map(c=>(c.x+1)*n/2)),top:Math.min(...t.map(c=>(1-c.y)*s/2)),bottom:Math.max(...t.map(c=>(1-c.y)*s/2))}})}recordForgeVisibility(){var C,w,A,L;const e=this.host.clientWidth,t=this.host.clientHeight,n=(_,S,P)=>this.sword.localToWorld(new T(_,S,P)),s=_=>(_.project(this.camera),{x:(_.x+1)*e/2,y:(1-_.y)*t/2}),r=new Ut().setFromObject(this.sword),o=[];for(const _ of[r.min.x,r.max.x])for(const S of[r.min.y,r.max.y])for(const P of[r.min.z,r.max.z])o.push(new T(_,S,P));const a=o.map(s),l=s(n(1,0,.29)),c=s(n(1,0,-.29));let h=0;const f=[];for(const _ of[.45,1.2,1.85])for(const S of[-.13,.13]){const P=n(_,.065*(1-Math.abs(S)/.29),S),I=P.clone().sub(this.camera.position);f.push(s(P.clone()));const O=new Mo(this.camera.position,I.clone().normalize(),0,I.length()+.025);O.camera=this.camera;const V=O.intersectObjects(this.scene.children,!0).find(F=>{var G;return F.object instanceof Ke?!(Array.isArray(F.object.material)?F.object.material[((G=F.face)==null?void 0:G.materialIndex)??0]:F.object.material).transparent:!1});(V==null?void 0:V.object.parent)===this.sword&&V.object.name.startsWith("blade")&&h++}const d=[n(-.23,.087,0),n(-.39,.087,0),n(-.56,.087,0),n(-.06,.064,-.32),n(-.06,.064,.32)].map(s),u=(((w=(C=this.host.closest(".game"))==null?void 0:C.querySelector(".control:not([hidden])"))==null?void 0:w.getBoundingClientRect().top)||this.host.clientHeight)-this.host.getBoundingClientRect().top,g=this.boardLayout.top,v=this.forgeBenchBounds,m=[];for(const _ of[v.min.x,v.max.x])for(const S of[v.min.y,v.max.y])for(const P of[v.min.z,v.max.z])m.push(new T(_,S,P));const p=m.map(s),y={left:Math.min(...p.map(_=>_.x)),right:Math.max(...p.map(_=>_.x)),top:Math.min(...p.map(_=>_.y)),bottom:Math.max(...p.map(_=>_.y))},M=this.ledgerLayout(),x={left:M.left,right:M.left+M.width,top:g,bottom:this.boardLayout.bottom};this.pendingForgeProof=JSON.stringify({phase:((L=(A=this.state)==null?void 0:A.session)==null?void 0:L.phase)||"idle",navTop:u,boardVisible:this.boardFrame.visible,boardTop:g,ledger:x,benchBounds:y,bounds:{left:Math.min(...a.map(_=>_.x)),right:Math.max(...a.map(_=>_.x)),top:Math.min(...a.map(_=>_.y)),bottom:Math.max(...a.map(_=>_.y))},faceHeight:Math.abs(l.y-c.y),visibleSamples:h,totalSamples:6,samples:f,hiltSamples:d}),this.forgeProofPending=!1}sync(e,t){const n=!this.state;this.state=e,this.boardProb=t;const s=e.session;if(this.tributeDone)return;this.sword.visible=(s==null?void 0:s.phase)!=="broken";const r=(s==null?void 0:s.level)||0,o=(s==null?void 0:s.blade)||"great";this.swordScale=o==="short"?.72:o==="great"?1:.9,this.evolveSword(o,r,(s==null?void 0:s.material)||"iron"),n&&(this.swordPlace=(s==null?void 0:s.phase)==="heat"?"furnace":"anvil"),this.move||this.applySwordPose(this.swordPlace),this.forgeProofPending=!0;const a=(s==null?void 0:s.phase)||"idle";a!==this.bladePhase&&(a==="forge"&&(this.bladeCoolingAt=performance.now()/1e3),this.bladePhase=a),this.bladeFinish.setLevel(r,(s==null?void 0:s.material)||"iron"),this.drawBoard(e,t)}swordPose(e){const t=this.swordScale*(e==="anvil"?1:.52);return{position:e==="furnace"?new T(-3.15,1.53,-.71):new T(-.805*t,this.forgeSwordY,.11),rotation:new gi().setFromEuler(new Qt(0,e==="furnace"?Math.PI/2:e==="anvil"?-.09:0,0)),scale:new T(t,t,t)}}applySwordPose(e){const t=this.swordPose(e);if(this.sword.position.copy(t.position),this.sword.quaternion.copy(t.rotation),this.sword.scale.copy(t.scale),this.host.dataset.swordPlace=e,e==="anvil"&&this.contactShapeKey!==this.bladeShapeKey){this.sword.updateMatrixWorld(!0);const s=new Mo(new T(this.hammerContact.x,this.forgeSwordY+1,this.hammerContact.z),new T(0,-1,0),0,2).intersectObject(this.sword,!0).find(r=>r.object.name.startsWith("blade"));s&&(this.hammerContact.y=s.point.y+.003-this.hammerBottomOffset),this.contactShapeKey=this.bladeShapeKey}}transferTo(e,t){this.move={start:performance.now()/1e3,from:this.sword.position.clone(),rotation:this.sword.quaternion.clone(),scale:this.sword.scale.clone(),to:e,done:t},this.host.dataset.swordPlace="moving",this.renderer.shadowMap.needsUpdate=!0}setHeat(e){this.heat=e}pick(e,t){const n=this.host.getBoundingClientRect(),s=new Mo;s.setFromCamera(new le((e-n.left)/n.width*2-1,1-(t-n.top)/n.height*2),this.camera);const r=this.view==="forge"?["furnace","anvil","cat","relics"]:this.view==="cat"?["cat"]:["relics"];let o=null,a=1/0;for(const l of r){const c=s.ray.intersectBox(this.targets[l].box,new T);if(c){const h=c.distanceTo(s.ray.origin);h<a&&(a=h,o=l)}}return o}positionTargets(){const e={};for(const[t,n]of Object.entries(this.targets)){const s=n.anchor.clone().project(this.camera),r=(s.x+1)*this.host.clientWidth/2,o=(1-s.y)*this.host.clientHeight/2;e[t]={x:r,y:o};const a=document.getElementById("target-"+t);a&&(a.style.left=r+"px",a.style.top=o+"px",a.dataset.inView=String(r>32&&r<this.host.clientWidth-32&&o>150&&o<this.host.clientHeight-160))}this.host.dataset.targets=JSON.stringify(e)}drawBoard(e,t){const n=e.session,s=this.boardInfo,r=!!(n!=null&&n.superGod),o=!!n&&kn(n),a=o?Math.max(0,(n.frenzyUntil-Date.now())/1e3).toFixed(1):"",l=t||{success:6500,great:1e3,unchanged:1500,damage:1e3,break:0},c=[this.boardWide,n==null?void 0:n.level,n==null?void 0:n.hits,n==null?void 0:n.phase,s.value,n==null?void 0:n.frenzyCharge,r,a,s.cue,s.result,Math.round(s.heat),...Object.values(l)].join(",");if(c===this.lastBoard)return;this.lastBoard=c;const h=this.boardWide,f=(n==null?void 0:n.phase)==="forge"||(n==null?void 0:n.phase)==="finished",d=h?f?256:150:f?512:342,u=this.boardCanvas.getContext("2d");u.setTransform(1.5,0,0,768/d,0,0);const g=u.createLinearGradient(0,0,1024,d);g.addColorStop(0,r?"#262b55":o?"#49331e":"#342a22"),g.addColorStop(1,"#211d19"),u.fillStyle=g,u.fillRect(0,0,1024,d),u.strokeStyle=o?"#edb75a":"#7c6748",u.lineWidth=3,u.strokeRect(12,12,1e3,d-24),u.textAlign="left";const v=(p,y,M,x,C="#e9d0a4",w=!1,A)=>{u.fillStyle=C,u.font=(w?"bold ":"")+x+"px sans-serif",u.fillText(p,y,M,A??(u.textAlign==="right"?928:976-y))},m=s.value>=1e12?s.value.toExponential(2):Math.floor(s.value).toLocaleString("zh-CN");if(f){h?(v(fn((n==null?void 0:n.blade)||"great",(n==null?void 0:n.level)||0).name+" · "+m+" 金",36,57,35,"#ffe0a0",!0,560),u.textAlign="right",v("+"+((n==null?void 0:n.level)||0)+" · "+((n==null?void 0:n.hits)||0)+" 锤 · 断裂 "+(l.break/100).toFixed(1)+"%",988,57,27,o?"#ffcf7f":"#e8a490",!1,365),u.textAlign="left"):(v(fn((n==null?void 0:n.blade)||"great",(n==null?void 0:n.level)||0).name,36,61,42,"#e9d0a4",!0),u.textAlign="right",v("+"+((n==null?void 0:n.level)||0)+" · 已锤 "+((n==null?void 0:n.hits)||0)+" 次",988,61,37),u.textAlign="left",v("当前价值",36,119,33,"#c4b297"),v(m+" 金",36,182,58,"#ffe0a0",!0,625),u.textAlign="right",v("下一锤断裂",988,119,33,"#c4b297"),v((l.break/100).toFixed(1)+"%",988,182,51,o?"#ffcf7f":"#e8a490",!0),u.textAlign="left");const p=["#b4d8c7","#ffe0a0","#c4b7a4","#e8bf77","#dc9b8a"],y=["成功","大成功","不变","受损","断剑"],M=[l.success,l.great,l.unchanged,l.damage,l.break];for(let x=0;x<5;x++){const C=36+x*194;h?v(y[x]+" "+(M[x]/100).toFixed(1)+"%",C,108,26,p[x],!0,184):(v(y[x],C,246,34,p[x]),v((M[x]/100).toFixed(1)+"%",C,294,41,p[x],!0))}v(r?"✦ 超神 · 每锤涨价 50%～100%":o?"入神 "+a+"秒 · 每锤 1% 超神":"入神蓄力 "+((n==null?void 0:n.frenzyCharge)||0)+"/10 · 十锤即入神",36,h?155:357,h?29:37,r?"#b7dbff":o?"#ffcf7f":"#c7b598",!0);for(let x=0;x<10;x++)u.fillStyle=r?"#93baff":o||x<((n==null?void 0:n.frenzyCharge)||0)?"#ffcb7b":"#554b3d",u.fillRect(36+x*96,h?172:378,80,h?7:11);v(s.result||"点台面落锤 · 随时收剑保住价值",36,h?223:462,h?29:36,"#efcd94",!0)}else v(s.cue,36,h?64:112,h?42:54,"#ffe0a0",!0),v((n==null?void 0:n.phase)==="heat"?"炉火 "+Math.round(s.heat)+"% · "+(e.relics.includes("ember")?55:70)+"%—"+(e.furnaceLevel>=3?100:90)+"% 取剑最佳":"点炉子入炉 · 点铸剑台放剑",36,h?112:228,h?29:43),(n==null?void 0:n.phase)==="heat"&&(u.fillStyle="#554b3d",u.fillRect(36,h?128:286,952,h?7:18),u.fillStyle="#e3b674",u.fillRect(36,h?128:286,952*s.heat/100,h?7:18));this.host.dataset.boardText=[s.cue,s.result,m,r?"超神":o?"入神":"蓄力",a].join(" · "),this.board.needsUpdate=!0}hostHammerBusy(){return this.host.dataset.hammerStage==="swing"||this.host.dataset.hammerStage==="impact"}strike(e,t=1){this.hitSpeed=t,this.hitStart=performance.now()/1e3,this.hitResult="success",this.hitImpact=!1,this.onHitImpact=e,this.hitImpactAt=-10,this.hitContactRendered=!1,this.host.dataset.hammerStage="swing"}spawnFragments(){if(!this.reduced)for(let e=0;e<9&&this.fx.length<50;e++){const t=this.mesh(new on(.07+Math.random()*.1,.035,.13+Math.random()*.12),this.bladeMat.clone(),this.scene);t.position.set(-.65+Math.random()*1.5,this.forgeSwordY+.05,.1+(Math.random()-.5)*.3),t.rotation.set(Math.random()*2,Math.random()*3,Math.random()),this.fx.push({mesh:t,v:new T((Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*2),life:.8})}}spawnSparks(e,t){if(!this.reduced)for(let n=0;n<e&&this.fx.length<50;n++){const s=this.mesh(new Vn(.025,4,3),new Zn({color:n%2?16761944:16773037}),this.scene);s.position.copy(t),this.fx.push({mesh:s,v:new T((Math.random()-.5)*4,1+Math.random()*3,(Math.random()-.5)*3),life:.5+Math.random()*.3})}}async tribute(e,t){if(this.tributeDone)throw new Error("猫咪还在吃剑");return this.setStation("cat"),this.tributeCount=e,this.tributeStart=performance.now()/1e3,this.tributeElapsed=0,this.host.dataset.tribute="offering",this.submittedTribute=0,this.renderedTribute=0,t("邪恶猫咪：把巨剑交出来，喵！"),new Promise(n=>{this.tributeDone=n,this.host.addEventListener("tribute-stage",(s=>t(s.detail)),{signal:this.stageAbort.signal})})}stage(e,t){this.host.dataset.tribute!==e&&(this.host.dataset.tribute=e,this.host.dispatchEvent(new CustomEvent("tribute-stage",{detail:t})))}clearRewards(){for(const e of this.rewards)this.scene.remove(e),e.traverse(t=>{t instanceof Ke&&(t.geometry.dispose(),t.material.dispose())});this.rewards=[],this.host.dataset.tribute=""}destroy(){var e;cancelAnimationFrame(this.raf),this.gpuFrame&&this.renderer.getContext().deleteSync(this.gpuFrame),document.removeEventListener("visibilitychange",this.onVisibility),this.stageAbort.abort(),this.observer.disconnect(),this.scene.traverse(t=>{if(t instanceof Ke){t.geometry.dispose();const n=Array.isArray(t.material)?t.material:[t.material];for(const s of n){for(const r of Object.values(s))r instanceof Rt&&r.dispose();s.dispose()}}}),(e=this.scene.environment)==null||e.dispose(),this.swordGlow.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}class Dv{constructor(e,t){se(this,"audio",null);se(this,"master",null);se(this,"buffers",[]);se(this,"fallback",null);se(this,"decoding",null);se(this,"recordingsReady",!1);se(this,"sources",new Set);se(this,"played",0);se(this,"encoded",Promise.all(["forge-anvil.mp3","forge-clink.mp3"].map(async e=>{try{const t=await fetch(new URL(`audio/${e}`,document.baseURI));return t.ok?await t.arrayBuffer():null}catch{return null}})));this.enabled=e,this.host=t,t.dataset.audioState="loading"}unlock(){if(this.enabled())try{this.audio||(this.audio=new AudioContext,this.master=this.audio.createGain(),this.master.gain.value=.72,this.master.connect(this.audio.destination)),this.audio.state==="suspended"&&this.audio.resume(),this.decoding||(this.decoding=this.encoded.then(async e=>{const t=await Promise.all(e.map(async n=>{try{if(n)return{buffer:await this.audio.decodeAudioData(n),recording:!0}}catch{}return{buffer:this.makeFallback(),recording:!1}}));this.buffers=t.map(n=>n.buffer),this.recordingsReady=t.every(n=>n.recording),this.host.dataset.audioState=this.recordingsReady?"ready":"fallback"}))}catch{this.host.dataset.audioState="unavailable"}}setMuted(e){if(this.master&&this.audio&&this.master.gain.setValueAtTime(e?0:.72,this.audio.currentTime),e)for(const t of this.sources)try{t.stop()}catch{}else this.unlock()}suspend(){var e;(e=this.audio)==null||e.suspend()}makeFallback(){if(this.fallback)return this.fallback;const e=this.audio.sampleRate,t=this.audio.createBuffer(1,Math.ceil(e*.5),e),n=t.getChannelData(0),s=[[773,.12,.11],[1197,.16,.18],[1913,.1,.13],[2851,.07,.085],[4133,.04,.055]];for(let r=0;r<n.length;r++){const o=r/e;let a=(Math.random()*2-1)*.24*Math.exp(-o/.008);for(const[l,c,h]of s)a+=Math.sin(o*l*Math.PI*2)*c*Math.exp(-o/h);n[r]=a*Math.min(1,o/4e-4)}return this.fallback=t}play(e,t,n,s=0){if(!this.enabled()||!this.audio||this.audio.state!=="running"||!this.master)return;const r=this.audio.createBufferSource(),o=this.audio.createGain();r.buffer=e,r.playbackRate.value=t,o.gain.value=n,r.connect(o).connect(this.master),this.sources.add(r),r.onended=()=>{r.disconnect(),o.disconnect(),this.sources.delete(r)},r.start(this.audio.currentTime+s)}impact(e,t,n){if(!this.enabled()||!this.audio)return;const s=(t==="bronze"?.94:t==="cold"?1.05:1)*(.975+Math.random()*.05);if(this.play(this.buffers[0]||this.makeFallback(),s,n==="bold"?1:n==="precise"?.86:.78),e==="damage"||e==="break"){const r=this.buffers[1]||this.makeFallback();this.play(r,s*1.12,e==="break"?.65:.3,.045),e==="break"&&(this.play(r,s*.87,.38,.105),this.play(r,s*1.28,.24,.185))}e==="great"&&this.play(this.buffers[1]||this.makeFallback(),s*1.3,.35,.075),this.audio.state==="running"&&(this.host.dataset.audioPlayed=String(++this.played),this.host.dataset.audioType=this.recordingsReady?"recording":"metal-fallback")}}const al="yichuichengshenbing.v1";let Ra;try{Ra=JSON.parse(localStorage.getItem(al)||"null")}catch{Ra=null}const $e=new eu(i=>localStorage.setItem(al,JSON.stringify(i)),Ra),Q=i=>document.getElementById(i);let Oe=null;try{Oe=new Lv(Q("scene3d"))}catch(i){Q("scene-error").hidden=!1,console.error(i)}let yt="forge",Kt=!1,Uo=0,$t=!1,Et=!1;const ll="yichuichengshenbing.heat",Hs=new Dv(()=>$e.state.sound,Q("scene3d"));function is(i){Kt||$t||Et||(yt=i,ss=performance.now(),Oe==null||Oe.setStation(i),Gt())}const Iv=["heat","forge","finished","broken"];let Br="precise",Gs=performance.now(),zr=!1,ss=0,Pt=0,rn="",Ic=0,It=null;function Wi(i=440,e=.12){if($e.state.sound)try{const t=window.AudioContext;It=It||new t;const n=It.createOscillator(),s=It.createGain();n.type="triangle",n.frequency.setValueAtTime(i,It.currentTime),n.frequency.exponentialRampToValueAtTime(i*.6,It.currentTime+e),s.gain.setValueAtTime(.055,It.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,It.currentTime+e),n.connect(s).connect(It.destination),n.start(),n.stop(It.currentTime+e)}catch{}}function Nt(i){const e=Q("toast");e.textContent=i,e.classList.add("show"),window.clearTimeout(Ic),Ic=window.setTimeout(()=>e.classList.remove("show"),2400)}function An(i){try{i(),Gt()}catch(e){Nt(e instanceof Error?e.message:String(e))}}function yn(i){return i>=1e12?i.toExponential(2):Math.floor(i).toLocaleString("zh-CN")}function hs(){var i;return((i=$e.state.session)==null?void 0:i.phase)||"choose"}function Uv(i){for(const e of Iv)Q(e).hidden=e!==i||yt!=="forge";Q("cat-panel").hidden=yt!=="cat",Q("relic-panel").hidden=yt!=="relics",document.querySelector(".station-nav").hidden=!1,document.querySelector(".game").dataset.moving=String(Et),Lh()}function Lh(){const i=hs(),e={choose:["把剑送入炉火","点击熔炉，直接开始锻造"],heat:["剑正在炉中加热","炉火 Lv"+$e.state.furnaceLevel+" · "+(forgeFurnaceDurationMs($e.state.furnaceLevel)/1000)+" 秒满温 · "+($e.state.relics.includes("ember")?55:70)+"%—"+($e.state.furnaceLevel>=3?100:90)+"% 取剑最佳"],forge:["点台面，落锤锻造","继续锤可能涨价或损坏 · 随时收剑保住价值"],finished:["神兵已成","查看价值，出售继续、收藏或献给猫咪"],broken:["剑胚断裂","这把剑的价值归零，可以再锻一把"]};i==="forge"&&$e.state.session.level>=pn&&(e.forge=["已经达到 +99","点击收剑，保住当前价值"]);const t=Et?["正在移剑","等待宝剑放稳后再操作"]:yt==="cat"?["点猫咪，上交巨剑","符合要求的巨剑可以换取铁剑"]:yt==="relics"?["交换工坊遗物","选择需要的永久效果"]:e[i];Q("cue-title").textContent=t[0],Q("cue-detail").textContent=t[1];const n=yt==="cat"?["cat"]:yt==="relics"?["relics"]:i==="choose"?["furnace"]:i==="heat"?["anvil"]:i==="forge"&&$e.state.session.level<pn?["anvil"]:[];for(const s of["furnace","anvil","cat","relics"]){const r=Q("target-"+s);r.classList.toggle("available",n.includes(s)&&!Et&&!$t),r.hidden=yt!=="forge"&&s!==yt||s==="anvil"&&i==="forge"}Q("target-anvil").innerHTML=i==="forge"?"":"铸剑台 <small>放剑</small>",Q("target-furnace").innerHTML="熔炉 <small>"+(i==="heat"?"加热中":"入炉")+"</small>",Q("scene3d").setAttribute("aria-label",t.join("，"))}function Gt(){const i=$e.state,e=i.session,t=hs();if(Uv(t),document.querySelector(".game").dataset.phase=t,zv(),Oe==null||Oe.sync(i),Q("iron-blanks").textContent=String(i.ironBlanks),Q("coin").textContent=yn(i.coins),Q("scrap").textContent=yn(i.scraps),Q("workshop-level").textContent="猫咪的工坊 · 炉火 Lv"+i.furnaceLevel,Q("sound").textContent=i.sound?"🔊":"🔇",Lh(),document.querySelector(".game").dataset.striking=String($t),Q("cashout").toggleAttribute("disabled",$t||Et),Q("nav-upgrades").textContent="升级锻锤 "+(i.hammerLevel>=2?"已满级":"500 金"),Q("nav-upgrades").toggleAttribute("disabled",!!e||i.hammerLevel>=2||i.coins<500),Q("nav-furnace").textContent=i.furnaceLevel>=9?"熔炉 Lv9 · 已满级":"升级熔炉 Lv"+i.furnaceLevel+"→"+(i.furnaceLevel+1)+" · "+forgeFurnaceUpgradeCost(i.furnaceLevel)+" 金",Q("nav-furnace").toggleAttribute("disabled",!!e||i.furnaceLevel>=9||i.coins<(forgeFurnaceUpgradeCost(i.furnaceLevel)??0)),Q("nav-anvil").textContent="升级铁砧 "+(i.anvilLevel>=2?"已满级":"1100 金"),Q("nav-anvil").toggleAttribute("disabled",!!e||i.anvilLevel>=2||i.coins<1100),Q("nav-collection").textContent="剑谱 "+i.swords.length+" · 展柜 "+i.caseIds.length+"/"+$e.caseCapacity(),Q("foot-hint").textContent=e?"当前 "+(e.apprentice?"学徒代工":"正式锻造")+" · 已锤 "+e.hits+" 次":"巨剑纳贡 · 铁剑再锻 · 遗物成长",!e)yt==="forge"&&(Q("cue-detail").textContent="默认大剑 · 铁胚 · 点击熔炉开始");else{if(Nv(e.level,e.blade),t==="heat"&&(Q("heating-order").textContent="炉中加热 · Lv"+$e.state.furnaceLevel+" · "+(forgeFurnaceDurationMs($e.state.furnaceLevel)/1000)+" 秒满温",Q("heat-fill").style.width=Pt+"%",Q("heat-text").textContent=Math.round(Pt)+"%"),t==="forge"){Q("forge-level").textContent="+"+e.level,Q("hit-count").textContent=String(e.hits);for(const o of["safe","precise","bold"])Q(o).toggleAttribute("disabled",$t||Et),Q(o).classList.toggle("active",o===Br);Q("protection").textContent=e.protection?e.protectedUsed?"护符已消耗":"首次断剑会改为受损":"无护符保护",Q("heat-tag").textContent=e.goodHeat?"好火候":"普通火候",Q("value-now").textContent=yn(La(e,cl()))+" 金",Q("cashout").textContent=e.level>=pn?"已满级 · 收剑":"收剑",Q("result").textContent=rn;const n=Q("mark"),s=n.value,r=Uc(i).filter(o=>!e.apprentice||o==="none");n.innerHTML=r.map(o=>'<option value="'+o+'">'+_l[o].name+" · "+_l[o].detail+"</option>").join(""),n.value=s&&r.includes(s)?s:"none",Q("mark-row").hidden=r.length<2}if(t==="finished"&&e.sword){const n=e.sword;Q("finished-level").textContent="Lv"+n.level,document.querySelector("#finished .section-title small").textContent=n.name||fn(n.blade,n.level).name,Q("finished-quality").textContent="Q "+n.quality.toFixed(2),Q("finished-value").textContent=yn(n.value),Q("finished-sell").textContent=yn(Math.floor(n.value*.7)),Q("deliver").hidden=!e.apprentice,Q("sell").hidden=e.apprentice,Q("collect").hidden=e.apprentice,Q("offer-cat").hidden=e.apprentice,Q("collect").toggleAttribute("disabled",e.apprentice||i.caseIds.length>=$e.caseCapacity()),Q("sell").toggleAttribute("disabled",e.apprentice),e.apprentice&&(Q("deliver").textContent=e.hits>=2?"完成代工 · 获得60金币":"结束练习")}t==="broken"&&(Q("broken-scrap").textContent=e.apprentice?"学徒练习不损失材料":i.relics.includes("salvage")&&!e.tutorial?"已回收绑定残料 "+Math.floor(Nn[e.material].blank*.4):"当前剑价值归零 · 成长与遗物保留")}Fh()}function Nv(i,e){Q("sword-level-tag").textContent=fn(e,i).name+" · Lv"+i}function cl(){return Q("mark").value||"none"}function Dh(i){return Q("forge-options").open?Fc(i-Gs,$e.state.hammerLevel):"normal"}function Ih(i){const e=$e.state.session;if(Oe==null||Oe.setBoardInfo(Q("cue-title").textContent||"",rn,e?La(e,cl()):0,Pt),(e==null?void 0:e.phase)==="forge"){const t=((i-Gs)%1500+1500)%1500,n=.27+Math.abs(750-t)/750*.77;Q("timing-ring").style.transform="translate(-50%,-50%) scale("+n.toFixed(3)+")";const s=Dh(i),r=Bc($e.state,Br,e.level,s);Oe==null||Oe.sync($e.state,r),Q("cashout").toggleAttribute("disabled",$t||Et||!!(Oe!=null&&Oe.hostHammerBusy())),Q("timing-indicator").textContent=s==="perfect"?"✦ 完美":s==="normal"?"普通":"偏离",Q("timing-indicator").className="timing "+s,Q("probability").textContent="成功 "+(r.success/100).toFixed(1)+"% · 大成功 "+(r.great/100).toFixed(1)+"% · 不变 "+(r.unchanged/100).toFixed(1)+"% · 受损 "+(r.damage/100).toFixed(1)+"%",Q("fracture-risk").textContent=e.level>=pn?"封顶":(r.break/100).toFixed(1)+"%";const o=kn(e),a=e.frenzyCharge>=ui;Q("frenzy-label").textContent=e.superGod?"超神 · 每锤价值 +50%～100%":o?"入神 "+((e.frenzyUntil-Date.now())/1e3).toFixed(1)+"秒 · 不会断剑":a?"入神已就绪 · 下一锤开启":"入神蓄力 "+e.frenzyCharge+"/10",Q("frenzy-meter").classList.toggle("active",o||a);const l=Q("frenzy-cells").children;for(let c=0;c<l.length;c++)l[c].classList.toggle("filled",o||c<e.frenzyCharge);Q("scene3d").dataset.frenzy=e.superGod?"super-god":o?"active":a?"ready":"charging",Q("ring-progress").style.width=Math.round(t/1500*100)+"%"}zr&&(e==null?void 0:e.phase)==="heat"&&!Et&&yt==="forge"&&!document.hidden&&(Pt=Math.min(100,Pt+Math.max(0,i-ss)/(forgeFurnaceDurationMs($e.state.furnaceLevel)/100)),ss=i,Q("heat-fill").style.width=Pt+"%",Q("heat-text").textContent=Math.round(Pt)+"%",Oe==null||Oe.sync($e.state),Oe==null||Oe.setHeat(Pt),Q("scene3d").dataset.heat=Pt.toFixed(1),sessionStorage.setItem(ll,JSON.stringify({id:e.id,percent:Pt})),Q("cue-title").textContent=Pt>=($e.state.relics.includes("ember")?55:70)&&Pt<=($e.state.furnaceLevel>=3?100:90)?"好火候！点铸剑台取剑":Pt>=100?"火候已过，仍可取剑":"剑正在炉中加热"),requestAnimationFrame(Ih)}function Uh(){const i=$e.state.session,e=performance.now();if((i==null?void 0:i.phase)!=="forge"||yt!=="forge"||e<Uo||$t||Et||Kt||!Oe||document.hidden||i.level>=pn||Oe.hostHammerBusy())return;Hs.unlock();const t=Dh(e),n=Br,s=i.id+":hit:"+i.hits,r=i.material,o=i.superGod||kn(i)||i.frenzyCharge>=ui?.65:1;$t=!0,Uo=e+550*o,Gt(),Oe.strike(()=>{let a="success";return $t=!1,Uo=performance.now()+370*o,An(()=>{const l=$e.strike(n,t,s);a=l.result,Hs.impact(a,r,n),a==="success"||a==="great"?rn=(a==="great"?"✦ 大成功！":"锻造成功")+" "+fn(i.blade,l.after).name+" · "+yn(l.afterValue)+" 金":a==="unchanged"?rn="本锤无变化 · 价值 "+yn(l.afterValue)+" 金":a==="damage"?rn=l.protected?"🛡️ 护符挡住断剑 · Lv"+l.after:"⚡ 锻造受损 Lv"+l.after:rn="💥 宝剑断裂",l.superGod?rn=(l.enteredSuperGod?"✦ 进入超神！":"✦ 超神锻造")+" · 价值 +"+Math.round((l.valueMultiplier-1)*100)+"% · "+yn(l.afterValue)+" 金":kn(i)&&!l.frenzy&&(rn="入神！4秒内不会断剑 · "+rn),Gs=performance.now()}),a},o)}function Nh(i=!1){if(!($e.state.session||Et||!Oe))try{Oe.clearRewards(),$e.start("iron","great",i),rn="",Pt=0,Et=!0,Gt(),Oe.transferTo("furnace",()=>{Et=!1,zr=!0,ss=performance.now(),Gt()})}catch(e){Nt(e instanceof Error?e.message:String(e))}}function Fv(){hs()!=="heat"||Et||!Oe||(zr=!1,Et=!0,Gt(),Oe.transferTo("anvil",()=>{Et=!1,An(()=>$e.heat(Pt)),Gs=performance.now(),sessionStorage.removeItem(ll)}))}function Ov(){hs()!=="forge"||$t||Et||Oe!=null&&Oe.hostHammerBusy()||An(()=>{$e.cashout(cl()),rn=""})}function Bv(i){if(!i||Et||$t||Kt)return;if(i==="cat"){yt==="cat"?Q("tribute").click():is("cat");return}if(i==="relics"){is("relics");return}if(yt!=="forge")return;const e=hs();i==="furnace"&&(e==="choose"?Nh($e.needsApprentice()):Nt(e==="heat"?"剑已经在炉中加热，点铸剑台取出":"先把这把剑锻好，再入炉新剑")),i==="anvil"&&(e==="heat"?Fv():e==="forge"?Uh():e==="choose"&&Nt("先点熔炉，把剑胚加热"))}for(const i of["safe","precise","bold"])Q(i).addEventListener("click",()=>{Br=i,Gt()});const Pa=Q("scene3d");Pa.addEventListener("pointerdown",i=>{if(i.button!==0||!i.isPrimary||Et||$t||Kt)return;Hs.unlock();const e=(Oe==null?void 0:Oe.pick(i.clientX,i.clientY))||null;i.preventDefault(),Bv(e)});Pa.addEventListener("pointermove",i=>{Pa.style.cursor=Oe!=null&&Oe.pick(i.clientX,i.clientY)?"pointer":"default"});document.addEventListener("keydown",i=>{var e;if(i.code==="Escape"){Q("forge-options").removeAttribute("open"),is("forge");return}i.code!=="Space"||i.repeat||i.ctrlKey||i.metaKey||i.altKey||(e=i.target)!=null&&e.closest('button,select,input,textarea,a,[contenteditable="true"]')||hs()==="forge"&&yt==="forge"&&(i.preventDefault(),Uh())});Q("cashout").addEventListener("click",Ov);Q("mark").addEventListener("change",Gt);for(const[i,e]of[["deliver","DELIVERED"],["collect","COLLECTED"]])Q(i).addEventListener("click",()=>An(()=>{const t=$e.dispose(e);Nt(t>0?"获得金币 +"+yn(t):"神兵已收入剑谱"),Wi(700,.25)}));Q("sell").addEventListener("click",()=>{try{const i=$e.dispose("SOLD");Nt("出售获得 "+yn(i)+" 金 · 继续锻造"),Wi(700,.25),Gt(),Nh($e.needsApprentice())}catch(i){Nt(i instanceof Error?i.message:String(i)),Gt()}});Q("broken-next").addEventListener("click",()=>An(()=>{$e.closeBroken(),rn=""}));Q("nav-upgrades").addEventListener("click",()=>An(()=>{$e.upgrade("hammer"),Nt("锻锤升到 Lv2，完美时机窗扩大")}));Q("nav-furnace").addEventListener("click",()=>An(()=>{$e.upgrade("furnace"),Nt("熔炉升级至 Lv"+$e.state.furnaceLevel+" · "+forgeFurnaceDurationMs($e.state.furnaceLevel)/1000+" 秒满温")}));Q("nav-anvil").addEventListener("click",()=>An(()=>{$e.upgrade("anvil"),Nt("铁砧升级，可安装已解锁铭文")}));Q("nav-collection").addEventListener("click",()=>{const i=$e.state.swords.filter(t=>t.disposal==="COLLECTED"),e=$e.state.swords.slice(-8).map(t=>(t.name||fn(t.blade,t.level).name)+" Lv"+t.level+" "+Nn[t.material].name+" · "+t.value+"金 · "+t.disposal).join(`
`);if(i.length){const t=i.map((s,r)=>r+1+". "+(s.name||fn(s.blade,s.level).name)+" Lv"+s.level+" "+Nn[s.material].name+"（售价 "+Math.floor(s.value*.7)+" 金）").join(`
`),n=prompt(`剑谱：最近八把
`+(e||"暂无记录")+`

展柜中的剑（输入序号出售，取消则关闭）：
`+t);if(n!==null&&n.trim()!==""){const s=Number(n)-1;if(!Number.isInteger(s)||s<0||s>=i.length){Nt("请输入正确的展柜序号");return}An(()=>{const r=$e.sellCollected(i[s].id);Nt("收藏神兵售出 +"+r+" 金")})}}else alert(`神兵剑谱 · 最近八把
`+(e||"尚无成剑记录"))});Q("sound").addEventListener("click",()=>{$e.state.sound=!$e.state.sound,Hs.setMuted(!$e.state.sound),localStorage.setItem(al,JSON.stringify($e.state)),Gt()});document.addEventListener("visibilitychange",()=>{document.hidden?(It==null||It.suspend(),Hs.suspend()):(It==null||It.resume(),ss=performance.now(),Gs=performance.now())});function zv(){const i=$e.state,e=i.session,t=e==null?void 0:e.sword;for(const r of["forge","cat","relics"]){const o=Q("station-"+r);o.classList.toggle("active",yt===r),o.setAttribute("aria-pressed",String(yt===r)),o.toggleAttribute("disabled",Kt||$t||Et)}Q("scene-name").textContent=yt==="forge"?"神兵锻造台":yt==="cat"?"邪恶猫咪的纳贡台":"遗物柜",Q("cat-demand-label").textContent="巨剑 Lv"+xr(i)+"+",Q("cat-count").textContent="已纳贡 "+i.catTributes+" 次";const n=(e==null?void 0:e.phase)==="finished"&&!e.apprentice&&(t==null?void 0:t.blade)==="great"&&t.level>=xr(i);Q("tribute").toggleAttribute("disabled",Kt||!n),Q("offer-cat").toggleAttribute("disabled",Kt||!n),Q("tribute").textContent=Kt?"猫咪正在吃剑……":n?"上交巨剑 · 换取 "+(3+Math.min(2,Math.floor(t.level/4)))+" 把铁剑":"需要一把 Lv"+xr(i)+"+ 的巨剑",Q("cat-offer-info").textContent=n?"Lv"+t.level+" 巨剑已就绪，猫咪正在盯着你的剑。":t&&t.blade!=="great"?"猫咪只吃巨剑，下一把锻造默认大剑。":"锻造大剑，达到要求后收剑，再把巨剑交给猫咪。";const s=Q("relic-list");s.replaceChildren();for(const r of Oc){const o=document.createElement("div");o.className="relic-row";const a=document.createElement("span");a.className="relic-icon "+r.id,a.textContent=r.id==="guard"?"◈":r.id==="ember"?"◆":"♧";const l=document.createElement("div"),c=document.createElement("b"),h=document.createElement("small");c.textContent=r.name,h.textContent=r.detail,l.append(c,h);const f=document.createElement("button");f.className="secondary",f.textContent=i.relics.includes(r.id)?"已拥有":r.cost+" 铁剑",f.disabled=!!e||i.relics.includes(r.id)||i.ironBlanks<r.cost||Kt,f.addEventListener("click",()=>An(()=>{$e.buyRelic(r.id),Nt("获得 "+r.name),Wi(820,.25)})),o.append(a,l,f),s.append(o)}}for(const i of["forge","cat","relics"])Q("station-"+i).addEventListener("click",()=>is(i));Q("offer-cat").addEventListener("click",()=>is("cat"));Q("cat-back").addEventListener("click",()=>{Oe==null||Oe.clearRewards(),Q("cat-back").hidden=!0,Q("tribute-reward").textContent="",Q("cat-speech").textContent="「交出你的巨剑！本大爷饿了，喵。」",is("forge")});Q("tribute").addEventListener("click",async()=>{if(!Kt){if(!Oe){Nt("3D场景尚未就绪，请刷新后重试");return}try{Kt=!0;const i=$e.tribute();Gt();for(const e of["station-forge","station-cat","station-relics"])Q(e).toggleAttribute("disabled",!0);Wi(120,.3),await Oe.tribute(i.blanks,e=>{Q("cat-speech").textContent=e,e.startsWith("噗")&&Wi(90,.25)}),Kt=!1,Q("tribute-reward").textContent="获得 "+i.blanks+" 把铁剑 · 已收入剑架",Q("cat-back").hidden=!1;for(const e of["station-forge","station-cat","station-relics"])Q(e).removeAttribute("disabled");Gt(),Wi(740,.3)}catch(i){Kt=!1,Nt(i instanceof Error?i.message:String(i)),Gt()}}});function Fh(){const i=document.querySelector(".control:not([hidden])");document.querySelector(".game").style.setProperty("--panel-height",((i==null?void 0:i.getBoundingClientRect().height)||0)+"px")}const kv=new ResizeObserver(Fh);for(const i of document.querySelectorAll(".control"))kv.observe(i);window.addEventListener("pagehide",()=>Oe==null?void 0:Oe.destroy(),{once:!0});const _r=$e.state.session;if((_r==null?void 0:_r.phase)==="heat"){try{const i=JSON.parse(sessionStorage.getItem(ll)||"null");Pt=(i==null?void 0:i.id)===_r.id?Math.min(100,Math.max(0,Number(i.percent)||0)):0}catch{}zr=!0,ss=performance.now(),Oe==null||Oe.setHeat(Pt)}Q("workshop-upgrades").append(Q("nav-upgrades"),Q("nav-furnace"),Q("nav-anvil"),Q("nav-collection"));Gt();requestAnimationFrame(Ih);
