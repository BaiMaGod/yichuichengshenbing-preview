var Wd=Object.defineProperty;var Xd=(s,e,t)=>e in s?Wd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Z=(s,e,t)=>Xd(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Ui=9,qd=[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3],Yd=[800,1800,2800,4e3,5500,7500,1e4,13e3];function So(s){return qd[Math.min(Ui,Math.max(1,Math.floor(s||1)))-1]}function vu(s){return s>=Ui?null:Yd[Math.max(0,Math.floor(s||1)-1)]}function jd(s,e){return Math.min(100,Math.max(0,s)/So(e)*100)}function Fl(s,e){return{min:e?55:70,max:s>=3?100:90}}function xu(s,e,t){const{min:n,max:i}=Fl(e,t);return s>=n&&s<=i}const Pi={iron:{name:"铁胚",blank:305,fuel:15,value:1,atk:1,unlock:1},bronze:{name:"青铜",blank:417,fuel:15,value:1.35,atk:1.06,unlock:2},cold:{name:"寒铁",blank:652,fuel:20,value:2.1,atk:1.12,unlock:3}},La={straight:["旧铁直剑","青锋剑","柳叶剑","飞燕剑","月牙剑","游龙剑","流云剑","鱼肠长剑","破风剑","逐星剑","白虹剑","霜华剑","斩月剑","惊鸿剑","紫电剑","寒光剑","青莲剑","风雷剑","苍雪剑","孤影剑","陨星剑","龙吟剑","日轮剑","夜魄剑","天罡剑","玄霄剑","流光剑","七曜剑","山河剑","天命剑"],great:["粗铁巨剑","阔刃大剑","狼牙巨剑","断岩剑","裂甲剑","怒涛剑","碎岳剑","破军剑","龙脊剑","战王剑","焚城剑","镇岳剑","熔岩剑","狂狮剑","撼地剑","斩龙剑","狱火剑","山崩剑","巨灵剑","泰坦剑","苍穹剑","灾厄剑","天罚剑","破晓剑","灭世剑","星陨巨刃","赤霄重剑","霸皇剑","不朽神锋","开天剑"],short:["旧铁短剑","匕首剑","燕尾短剑","蝶翼剑","灵蛇剑","双牙剑","夜鸦剑","流萤剑","月影剑","疾风剑","玄狐剑","隐星剑","血月剑","幽兰剑","鬼影剑","千刃剑","夜雨剑","碎光剑","幻影剑","夜魇剑","星屑剑","极影剑","影舞剑","天刺剑","瞬光剑","虚空剑","流星剑","无相剑","绝影剑","天隐剑"]},wc=["","曜纹·","星陨·","太古·"],Ec=[0,3,6,9,12,15,25,29,40,55,70,85],Kd=["开天剑","两仪神锋","太初圣刃","寰宇巨剑","永恒天刃"],Da=["初铸","铭锋","刻星","淬光","鎏纹","凝辉","承天","破界","御极","化曜","玄穹","圣印","万象","天冠","永恒"];function Jd(s,e){const t=To(Math.floor(Number.isFinite(e)?e:0),0,Pn),n=La[s],i=Math.floor(t/n.length),r=t%n.length,o=Ec.reduce((h,u,f)=>t>=u?f:h,0),a=Ec[o],c=t<40?0:t<55?1:t<70?2:t<85?3:4,l=t<30?n[r]:Kd[c]+"·"+Da[t-a];return{level:t,name:t<30?wc[Math.min(i,wc.length-1)]+l:l,artStage:o,stageStart:a,detail:t-a,ascension:c,silhouette:o,guardStyle:Math.min(5,Math.floor(t/3)),ornament:t,crest:Math.floor(t/12),span:1+Math.min(t,99)*.0027,runeCount:Math.min(t,12),rarity:Math.min(8,Math.floor(t/12))}}Object.keys(La).reduce((s,e)=>s+La[e].length,0);function ti(s,e,t=!1){const n=Jd(s,e),i=n.level;if(t)return{...n,theme:i<15?"legacy":i<25?"dragon":i<29?"meteor":"genesis"};if(i>=40)return{...n,theme:"genesis"};const r=["dragon","meteor","genesis","runic","tyrant","leviathan","tempest"],o=["斩龙剑","星陨巨刃","开天剑","铭咒双锋","龙齿裁决","深海弧刃","雷霆环刃"],a=Math.min(i,r.length-1),c=i-a,l=r[a],h=o[a]+(c===0?"":"·"+(c<Da.length?Da[c]:"精铸"+c));return{...n,name:h,theme:l,artStage:a,stageStart:a,detail:c,ascension:0,silhouette:a}}const Ac={none:{name:"无铭文",detail:"不附加属性"},flame:{name:"赤焰纹",detail:"剑刃浮现赤焰纹路"},armor_break:{name:"裂金纹",detail:"剑身浮现金色裂纹"},swift:{name:"迅风纹",detail:"剑锋展现轻盈流风"},guard:{name:"守锋纹",detail:"护手亮起守护纹章"},echo:{name:"回响纹",detail:"剑脊流转回响符文"},star:{name:"星芒纹",detail:"纯外观星辉效果"}};function _u(s){const e=["none"];if(s.anvilLevel<2)return e;for(const[t,n]of[["flame",2],["armor_break",4],["swift",6],["guard",10],["echo",15],["star",20]])s.totalMade>=n&&e.push(t);return e}function To(s,e,t){return Math.min(t,Math.max(e,s))}function os(s){let e=s>>>0;return e^=e<<13,e^=e>>>17,e^=e<<5,e>>>0}const Pn=99,Ii=10,Oo=4e3,Zd=.01,Cc=1.5,Qd=2;function yu(s,e=Date.now()){return s.phase==="forge"&&!s.superGod&&Ln(s,e)}function $d(s,e,t=Date.now()){return yu(s,t)&&e>=0&&e<Zd}function ef(s,e,t){const n=[[0,0],[3,1290],[5,2970],[10,4670],[20,6300],[30,7200]],i=To(e,0,Pn);let r=7200;for(let c=1;c<n.length;c++)if(i<=n[c][0]){const[l,h]=n[c-1],[u,f]=n[c];r=Math.round(h+(f-h)*(i-l)/(u-l));break}const o=1e4-r,a={success:Math.floor(o*.65),great:Math.floor(o*.1),unchanged:Math.floor(o*.15),damage:0,break:r};if(a.damage=1e4-a.success-a.great-a.unchanged-a.break,s==="safe"){const c=Math.min(400,a.break);a.break-=c,a.unchanged+=c}if(s==="bold"){const c=Math.min(400,a.success);a.success-=c,a.great+=c}if(t==="perfect"){const c=Math.min(400,a.damage);a.damage-=c,a.success+=c}if(t==="miss"){const c=Math.min(400,a.success);a.success-=c,a.damage+=c}return a}function Mu(s,e=1){const n=(s%1500+1500)%1500,i=Math.abs(n-750),r=e>=2?104:90;return i<=r?"perfect":i<=250?"normal":"miss"}function tf(s,e){let t=0;for(const n of["success","great","unchanged","damage","break"])if(t+=s[n],e<t)return n;return"break"}function Rc(s,e){return Math.round(To(.9+(s?.03:0)+e*.03,.9,1.13)*100)/100}function nf(s,e,t,n="none"){return 320*Pi[t].value*Math.pow(1.5,To(s,0,Pn))*(n==="none"?1:1.05)}function Ln(s,e=Date.now()){return s.frenzyUntil>e}function wo(s,e="none"){return s.currentValue*(e==="none"?1:1.05)}function sf(s=20261008){return{version:1,coins:300,scraps:0,formalCount:0,totalMade:0,totalBroken:0,hammerLevel:1,furnaceLevel:1,anvilLevel:1,showCaseLevel:1,caseIds:[],swords:[],session:null,ledger:[],seed:s>>>0||1,sound:!0,showLegacySwords:!1,ironBlanks:0,catTributes:0,relics:[],workshopDay:1,relicOffersDay:0,relicOffers:[],relicRerolls:0,relicWelcomeUsed:!1,merchantStockDay:0,merchantStock:[],merchantPurchased:[],supplies:{ward:0,chalk:0,star:0,clock:0},specialBlanks:0}}const Ia=8,ls=[{id:"guard",name:"九命护符",cost:2,detail:"正式锻造首次断剑改为受损"},{id:"ember",name:"余烬晶石",cost:1,detail:"好火候从 55% 起算；满级炉火 100% 恒温"},{id:"lucky",name:"幸运铜铃",cost:2,detail:"最多 3% 断剑概率转为成功"},{id:"salvage",name:"碎剑回收袋",cost:1,detail:"断剑回收 40% 胚料价为绑定残料"},{id:"rhythm",name:"匠心节拍",cost:2,detail:"普通存活锤击额外获得 1 格入神充能"},{id:"stellar",name:"星穹之眼",cost:3,detail:"超神每锤价值倍率额外 +10%"},{id:"coin",name:"招财铭牌",cost:2,detail:"出售金币 +5%"},{id:"steady",name:"稳固铁环",cost:2,detail:"最多 2% 受损概率转为不变"},{id:"master",name:"大师徽记",cost:3,detail:"最多 2% 成功概率转为大成功"}],Na=[{id:"blanks",name:"铁剑补给 ×2",cost:520,detail:"补充两把铁剑，可锻造或兑换遗物"},{id:"star_blank",name:"星纹巨剑胚",cost:850,detail:"下次正式铁制巨剑自动使用，初始价值 +25%"},{id:"ward",name:"猫爪护符",cost:390,detail:"主动启用后下一锤断剑改为受损"},{id:"chalk",name:"绯红粉笔",cost:330,detail:"主动启用后下一锤成功率最多 6% 转大成功"},{id:"star",name:"寒星碎片",cost:270,detail:"立刻增加 3 格入神充能，上限 9"},{id:"clock",name:"回溯发条",cost:560,detail:"撤销最近一锤，包括断剑，并恢复当时价值"}];function Pc(s,e,t=3){const n=[...s];let i=e>>>0||1;for(let r=n.length-1;r>0;r--){i=os(i);const o=i%(r+1);[n[r],n[o]]=[n[o],n[r]]}return n.slice(0,t)}function nr(s){return s.workshopDay>=3&&s.workshopDay%3===0}function so(s){return Math.ceil(720*Math.pow(1.35,s.catTributes)/10)*10}function bu(s,e){return s>=e*4?5:s>=e*2?4:3}function Su(s,e,t,n,i=Date.now()){const r=s.session;if(r!=null&&r.superGod)return{success:5e3,great:5e3,unchanged:0,damage:0,break:0};const o=ef(e,t,n);if(r!=null&&r.goodHeat){const a=Math.min(200,o.damage),c=Math.floor(a/2);o.damage-=a,o.success+=c,o.great+=a-c}if(s.relics.includes("lucky")){const a=Math.min(o.break,300);o.break-=a,o.success+=a}if(s.relics.includes("steady")){const a=Math.min(o.damage,200);o.damage-=a,o.unchanged+=a}if(s.relics.includes("master")){const a=Math.min(o.success,200);o.success-=a,o.great+=a}if(r!=null&&r.chalkNext){const a=Math.min(o.success,600);o.success-=a,o.great+=a}return r&&(Ln(r,i)||r.frenzyCharge>=Ii)&&(o.success+=o.break,o.break=0),o}class rf{constructor(e=()=>{},t){Z(this,"state");Z(this,"persist");var l,h;this.persist=e,this.state=(t==null?void 0:t.version)===1?JSON.parse(JSON.stringify(t)):sf(),this.state.showLegacySwords=this.state.showLegacySwords===!0;const n=Math.max(1,Math.floor(this.state.furnaceLevel||1)),i=n>Ui;if(this.state.furnaceLevel=Math.min(Ui,n),i&&Array.isArray(this.state.ledger)&&this.state.ledger.includes("upgrade:furnace:9")&&(this.state.coins+=16500,this.state.ledger=this.state.ledger.filter(u=>u!=="upgrade:furnace:9")),this.state.ironBlanks=Math.max(0,Math.floor(this.state.ironBlanks||0)),this.state.catTributes=Math.max(0,Math.floor(this.state.catTributes||0)),this.state.relics=this.state.relics||[],this.state.workshopDay=Math.max(1,Math.floor(this.state.workshopDay||1+this.state.swords.length+this.state.totalBroken)),this.state.relicWelcomeUsed=typeof this.state.relicWelcomeUsed=="boolean"?this.state.relicWelcomeUsed:this.state.relics.length>0||this.state.workshopDay>1,this.state.relicOffersDay=Math.max(0,Math.floor(this.state.relicOffersDay||0)),this.state.relicOffers=Array.isArray(this.state.relicOffers)?this.state.relicOffers:[],this.state.relicRerolls=Math.max(0,Math.floor(this.state.relicRerolls||0)),this.state.relicOffersDay>0){const u=this.state.relicOffers;this.state.relicOffers=Array.from({length:3},(f,d)=>ls.some(g=>g.id===u[d])&&!this.state.relics.includes(u[d])?u[d]:"")}this.state.merchantStockDay=Math.max(0,Math.floor(this.state.merchantStockDay||0)),this.state.merchantStock=Array.isArray(this.state.merchantStock)?this.state.merchantStock:[],this.state.merchantPurchased=Array.isArray(this.state.merchantPurchased)?this.state.merchantPurchased:[],this.state.specialBlanks=Math.max(0,Math.floor(this.state.specialBlanks||0));const r=this.state.supplies||{};this.state.supplies={ward:Math.max(0,Math.floor(r.ward||0)),chalk:Math.max(0,Math.floor(r.chalk||0)),star:Math.max(0,Math.floor(r.star||0)),clock:Math.max(0,Math.floor(r.clock||0))},this.ensureMarkets();const o=this.state;delete o.rep,delete o.completed;for(const u of[...this.state.swords,...(l=this.state.session)!=null&&l.sword?[this.state.session.sword]:[]]){const f=u;delete f.attack,delete f.intervalMs,delete f.trial,delete f.orderId}this.state.session&&delete this.state.session.orderId;const a=this.state.session,c=!!a&&((a.rulesVersion||0)<3||a.phase==="quench");a&&(a.superGod=a.superGod===!0,a.rulesVersion||(a.currentValue=((h=a.sword)==null?void 0:h.value)??Math.round(100*Pi[a.material].value*Math.pow(1.24,a.level)*Rc(a.goodHeat,a.perfect)),a.frenzyCharge=a.hits%Ii,a.frenzyUntil=0,a.rulesVersion=2),a.phase==="quench"&&(a.phase="forge"),(a.rulesVersion||0)<3&&a.phase==="forge"&&a.frenzyCharge>=Ii&&(a.frenzyCharge=0,a.frenzyUntil=Date.now()+Oo),a.rulesVersion=3),(c||i)&&this.save()}setShowLegacySwords(e){this.state.showLegacySwords=e,this.save()}save(){this.persist(JSON.parse(JSON.stringify(this.state)))}ensureMarkets(){const e=this.state;e.relicOffersDay===0&&(e.relicOffersDay=e.workshopDay,this.restockRelics()),e.merchantStockDay!==e.workshopDay&&(e.merchantStockDay=e.workshopDay,e.merchantPurchased=[],e.merchantStock=nr(e)?Pc(Na.map(t=>t.id),os(e.seed^e.workshopDay^10075084)):[])}advanceDay(){this.state.workshopDay++,this.ensureMarkets()}restockRelics(){const e=this.state;e.relicOffersDay=e.workshopDay,e.relicRerolls=0;const t=Pc(ls.filter(n=>!e.relics.includes(n.id)).map(n=>n.id),os(e.seed^e.catTributes^244548));e.relicOffers=Array.from({length:3},(n,i)=>t[i]||"")}salePrice(e){const t=Math.floor(e.value*.7);return this.state.relics.includes("coin")?Math.floor(t*1.05):t}once(e,t){return this.state.ledger.includes(e)?!1:(t(),this.state.ledger.push(e),this.save(),!0)}canAfford(e,t="great"){const n=Pi[e],i=e==="iron"&&(this.state.ironBlanks>0||t==="great"&&this.state.specialBlanks>0);return this.state.coins>=n.fuel+(i?0:Math.max(0,n.blank-this.state.scraps))}needsApprentice(){return this.state.formalCount>0&&!this.canAfford("iron")}start(e="iron",t="straight",n=!1){if(this.state.session)throw new Error("请先完成当前这把剑");if(n&&!this.needsApprentice())throw new Error("材料尚够，不能申请免费代工");if(n&&(e="iron",t="straight"),!n&&(Pi[e].unlock>this.state.furnaceLevel||!(this.state.formalCount===0||this.canAfford(e,t))))throw new Error("材料尚未解锁或金币不足");const i=Pi[e];let r=0,o=!1;if(!n){const u=this.state.formalCount===0;o=!u&&e==="iron"&&t==="great"&&this.state.specialBlanks>0,o&&this.state.specialBlanks--;const f=!u&&!o&&e==="iron"&&this.state.ironBlanks>0;f&&this.state.ironBlanks--;const d=u||f||o?0:Math.min(this.state.scraps,i.blank);this.state.scraps-=d,r=u?0:(f||o?0:i.blank-d)+i.fuel,this.state.coins-=r,this.state.formalCount++}const a=!n&&this.state.formalCount===1,c=os(this.state.seed);this.state.seed=c;const h={id:"forge_"+this.state.totalMade+"_"+this.state.totalBroken+"_"+this.state.formalCount+"_"+c,phase:"heat",blade:t,material:e,apprentice:n,tutorial:a,level:0,hits:0,safeUsed:0,perfect:0,goodHeat:!1,protectedUsed:!1,protection:!n&&(this.state.formalCount<=2||this.state.relics.includes("guard")),strikes:[],paid:r,seed:c,sword:null,currentValue:nf(0,1,e)*(o?1.25:1),frenzyCharge:0,frenzyUntil:0,superGod:!1,rulesVersion:3,specialBlank:o,wardNext:!1,chalkNext:!1};return this.state.session=h,this.save(),h}heat(e){const t=this.must("heat");t.goodHeat=xu(e,this.state.furnaceLevel,this.state.relics.includes("ember")),t.phase="forge",this.save()}must(e){const t=this.state.session;if(!t||t.phase!==e)throw new Error("当前操作阶段不正确");return t}strikeAt(e,t,n,i=Date.now()){return this.strike(e,Mu(t,this.state.hammerLevel),n,i)}strike(e,t,n,i=Date.now()){const r=this.state.session;if(!r)throw new Error("尚未开始锻造");const o=r.strikes.find(T=>T.id===n);if(o)return o;const a=this.must("forge");if(a.level>=Pn)throw new Error("已达 +99，请收剑");a.lastCheckpoint={seed:a.seed,level:a.level,hits:a.hits,safeUsed:a.safeUsed,perfect:a.perfect,protectedUsed:a.protectedUsed,currentValue:a.currentValue,frenzyCharge:a.frenzyCharge,frenzyUntil:a.frenzyUntil,superGod:a.superGod,wardNext:!!a.wardNext,chalkNext:!!a.chalkNext,strikesLength:a.strikes.length,totalBroken:this.state.totalBroken,scraps:this.state.scraps},a.frenzyCharge>=Ii&&!Ln(a,i)&&(a.frenzyUntil=i+Oo,a.frenzyCharge=0);const c=Ln(a,i),l=os(a.seed);a.seed=l;let h=!1;if(yu(a,i)){const T=os(a.seed);a.seed=T,h=$d(a,T/4294967296,i),h&&(a.superGod=!0,a.frenzyCharge=0,a.frenzyUntil=0)}const u=Su(this.state,e,a.level,t,i),f=Math.floor(l/4294967296*1e4),d=tf(u,f),g=!!a.wardNext,v=d==="break"&&(g||a.protection&&!a.protectedUsed);a.wardNext=!1,a.chalkNext=!1;const m=v?"damage":d,p=a.level,y=a.currentValue,x=a.superGod?Cc+(Qd-Cc)*l/4294967296+(this.state.relics.includes("stellar")?.1:0):m==="great"?2.5:m==="success"?1.5:m==="damage"&&a.level>0?1/1.5:m==="break"?0:1;a.superGod?(a.level=Math.min(Pn,a.level+(m==="great"?2:1)),a.currentValue*=x):m==="success"?(a.level++,a.currentValue*=1.5):m==="great"?(a.level=Math.min(Pn,a.level+2),a.currentValue*=2.5):m==="damage"&&a.level>0?(a.level--,a.currentValue/=1.5):m==="break"&&(a.currentValue=0),a.hits++,e==="safe"&&a.safeUsed++,t==="perfect"&&a.perfect++,v&&!g&&(a.protectedUsed=!0),!a.superGod&&!c&&m!=="break"&&(a.frenzyCharge+=this.state.relics.includes("rhythm")?2:1,a.frenzyCharge>=Ii&&(a.frenzyUntil=i+Oo,a.frenzyCharge=0));const _={id:n,style:e,timing:t,before:p,after:a.level,beforeValue:y,afterValue:a.currentValue,roll:f,shown:u,sampled:d,result:m,protected:v,frenzy:c,superGod:a.superGod,enteredSuperGod:h,valueMultiplier:x};return a.strikes.push(_),m==="break"&&(a.phase="broken",a.frenzyCharge=0,a.frenzyUntil=0,this.state.totalBroken++,this.state.relics.includes("salvage")&&!a.apprentice&&!a.tutorial&&(this.state.scraps+=Math.floor(Pi[a.material].blank*.4))),this.save(),_}cashout(e="none"){const t=this.must("forge");if(!_u(this.state).includes(e))throw new Error("该铭文尚未解锁或铁砧未升级");if(t.apprentice&&e!=="none")throw new Error("学徒代工不可安装铭文");const n=Rc(t.goodHeat,t.perfect),i=wo(t,e),r={id:"sword_"+t.id,material:t.material,blade:t.blade,name:(t.specialBlank?"星纹·":"")+ti(t.blade,t.level,this.state.showLegacySwords).name,level:t.level,quality:n,value:i,mark:e,superGod:t.superGod,disposal:"NEW"};return t.sword=r,t.phase="finished",t.frenzyUntil=0,this.state.totalMade++,this.save(),r}dispose(e){const t=this.must("finished"),n=t.sword;if(n.disposal!=="NEW")throw new Error("此剑已处置");if(t.apprentice&&e!=="DELIVERED")throw new Error("学徒代工不可出售或收藏");if(!t.apprentice&&e==="DELIVERED")throw new Error("普通神兵请出售、收藏或献给食铁兽");const i=n.id+":"+e;let r=0;return this.once(i,()=>{if(t.apprentice)t.hits>=2&&(r=60,this.state.coins+=r),n.disposal="DELIVERED";else{if(e==="SOLD")r=this.salePrice(n),this.state.coins+=r;else{if(this.state.caseIds.length>=this.caseCapacity())throw new Error("展柜已满");this.state.caseIds.push(n.id)}n.disposal=e}this.state.swords.push(JSON.parse(JSON.stringify(n))),this.state.session=null,this.advanceDay()})?r:0}tribute(){const e=this.must("finished"),t=e.sword;if(e.apprentice)throw new Error("代工剑属于工坊，不能拿去纳贡");if(t.value<so(this.state))throw new Error("宝剑价值不足，还差 "+(so(this.state)-t.value)+" 金");if(t.disposal!=="NEW")throw new Error("此剑已经上交");const n=bu(t.value,so(this.state));return this.once(t.id+":TRIBUTED",()=>{t.disposal="TRIBUTED",this.state.ironBlanks+=n,this.state.catTributes++,this.state.swords.push(JSON.parse(JSON.stringify(t))),this.state.session=null,this.advanceDay(),this.restockRelics()}),{blanks:n,value:t.value,id:t.id}}buyRelic(e){if(this.state.session)throw new Error("完成当前宝剑后才能交换遗物");const t=ls.find(i=>i.id===e);if(!t)throw new Error("未知遗物");if(!this.state.relicOffers.includes(e))throw new Error("这件遗物今天没有上架");if(this.state.relics.includes(e))throw new Error("已装备这件遗物");if(this.state.relics.length>=Ia)throw new Error("遗物架最多容纳八件，请先卸下一件");const n=this.state.workshopDay===1&&!this.state.relicWelcomeUsed;if(!n&&this.state.ironBlanks<t.cost)throw new Error("铁剑不足，请先向食铁兽纳贡");n?this.state.relicWelcomeUsed=!0:this.state.ironBlanks-=t.cost,this.state.relics.push(e),this.state.relicOffers=this.state.relicOffers.map(i=>i===e?"":i),this.save()}removeRelic(e){if(this.state.session)throw new Error("请先完成当前锻造");if(!this.state.relics.includes(e))throw new Error("遗物不在架上");this.state.relics=this.state.relics.filter(t=>t!==e),this.save()}refreshRelics(){throw new Error("遗物机仅在成功纳贡后刷新")}buyMerchant(e){const t=this.state;if(t.session)throw new Error("完成当前宝剑后再交易");if(!nr(t)||t.merchantStockDay!==t.workshopDay)throw new Error("神秘商人今天不在");const n=Na.find(i=>i.id===e);if(!n||!t.merchantStock.includes(e))throw new Error("商人今天没有这个商品");if(t.merchantPurchased.includes(e))throw new Error("今日该商品已售罄");if(t.coins<n.cost)throw new Error("金币不足");t.coins-=n.cost,t.merchantPurchased.push(e),e==="blanks"?t.ironBlanks+=2:e==="star_blank"?t.specialBlanks++:(e==="ward"||e==="chalk"||e==="star"||e==="clock")&&t.supplies[e]++,this.save()}useSupply(e){const t=this.must("forge");if(this.state.supplies[e]<=0)throw new Error("该道具库存不足");if(e==="ward"){if(t.wardNext)throw new Error("猫爪护符已经待命");t.wardNext=!0}if(e==="chalk"){if(t.chalkNext)throw new Error("绯红粉笔已经待命");t.chalkNext=!0}if(e==="star"){if(t.superGod||Ln(t)||t.frenzyCharge>=9)throw new Error("当前入神充能已满或正在入神");t.frenzyCharge=Math.min(9,t.frenzyCharge+3)}this.state.supplies[e]--,this.save()}rewindLastStrike(){const e=this.state.session,t=e==null?void 0:e.lastCheckpoint;if(!e||e.phase!=="forge"&&e.phase!=="broken"||!t||e.strikes.length<=t.strikesLength)throw new Error("没有可撤销的上一锤");if(this.state.supplies.clock<=0)throw new Error("回溯发条不足");this.state.supplies.clock--,e.seed=t.seed,e.phase="forge",e.level=t.level,e.hits=t.hits,e.safeUsed=t.safeUsed,e.perfect=t.perfect,e.protectedUsed=t.protectedUsed,e.currentValue=t.currentValue,e.frenzyCharge=t.frenzyCharge,e.frenzyUntil=t.frenzyUntil,e.superGod=t.superGod,e.wardNext=t.wardNext,e.chalkNext=t.chalkNext,e.strikes.length=t.strikesLength,e.lastCheckpoint=void 0,this.state.totalBroken=t.totalBroken,this.state.scraps=t.scraps,this.save()}sellCollected(e){const t=this.state.swords.find(r=>r.id===e);if(!t||t.disposal!=="COLLECTED"||!this.state.caseIds.includes(e))throw new Error("该剑不在展柜中");const n=e+":case-sale";let i=0;return this.once(n,()=>{i=this.salePrice(t),this.state.coins+=i,t.disposal="SOLD",this.state.caseIds=this.state.caseIds.filter(r=>r!==e)}),i}caseCapacity(){return this.state.showCaseLevel>=2?6:3}upgrade(e){if(this.state.session)throw new Error("请完成当前锻造后再升级设备");const t=this.state,n=e==="hammer"?500:e==="anvil"?1100:e==="case"?600:vu(t.furnaceLevel)??0;if(e==="hammer"&&t.hammerLevel>=2||e==="anvil"&&t.anvilLevel>=2||e==="case"&&t.showCaseLevel>=2||e==="furnace"&&t.furnaceLevel>=Ui)throw new Error("已经升到当前版本上限");if(t.coins<n)throw new Error("金币不足");const i=e==="hammer"?t.hammerLevel:e==="furnace"?t.furnaceLevel:e==="anvil"?t.anvilLevel:t.showCaseLevel;return this.once("upgrade:"+e+":"+i,()=>{t.coins-=n,e==="hammer"?t.hammerLevel++:e==="furnace"?t.furnaceLevel++:e==="anvil"?t.anvilLevel++:t.showCaseLevel++}),n}closeBroken(){this.must("broken"),this.state.session=null,this.advanceDay(),this.save()}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="180",of=0,Lc=1,af=2,Tu=1,wu=2,Jn=3,ni=0,Jt=1,vn=2,$n=0,cs=1,Ua=2,Dc=3,Ic=4,lf=5,Li=100,cf=101,hf=102,uf=103,df=104,ff=200,pf=201,mf=202,gf=203,Fa=204,Oa=205,vf=206,xf=207,_f=208,yf=209,Mf=210,bf=211,Sf=212,Tf=213,wf=214,Ba=0,za=1,ka=2,fs=3,Ha=4,Va=5,Ga=6,Wa=7,Bl=0,Ef=1,Af=2,mi=0,Eu=1,Au=2,Cu=3,zl=4,Ru=5,Pu=6,Lu=7,Nc="attached",Cf="detached",Du=300,ps=301,ms=302,Xa=303,qa=304,Eo=306,ii=1e3,pi=1001,po=1002,zt=1003,Iu=1004,qs=1005,Bt=1006,ro=1007,xn=1008,kn=1009,Nu=1010,Uu=1011,ir=1012,kl=1013,Oi=1014,An=1015,hn=1016,Hl=1017,Vl=1018,sr=1020,Fu=35902,Ou=35899,Bu=1021,zu=1022,_n=1023,rr=1026,or=1027,Gl=1028,Wl=1029,ku=1030,Xl=1031,ql=1033,oo=33776,ao=33777,lo=33778,co=33779,Ya=35840,ja=35841,Ka=35842,Ja=35843,Za=36196,Qa=37492,$a=37496,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,vl=36283,xl=36284,_l=36285,yl=36286,ar=2300,lr=2301,Bo=2302,Uc=2400,Fc=2401,Oc=2402,Rf=2500,Pf=0,Hu=1,Ml=2,Lf=3200,Df=3201,Yl=0,If=1,fi="",yt="srgb",en="srgb-linear",mo="linear",ct="srgb",Gi=7680,Bc=519,Nf=512,Uf=513,Ff=514,Vu=515,Of=516,Bf=517,zf=518,kf=519,bl=35044,zc="300 es",zn=2e3,go=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kc=1234567;const Ks=Math.PI/180,gs=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[s&255]+kt[s>>8&255]+kt[s>>16&255]+kt[s>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function jl(s,e){return(s%e+e)%e}function Hf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Vf(s,e,t){return s!==e?(t-s)/(e-s):0}function Js(s,e,t){return(1-t)*s+t*e}function Gf(s,e,t,n){return Js(s,e,1-Math.exp(-t*n))}function Wf(s,e=1){return e-Math.abs(jl(s,e*2)-e)}function Xf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function qf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Yf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function jf(s,e){return s+Math.random()*(e-s)}function Kf(s){return s*(.5-Math.random())}function Jf(s){s!==void 0&&(kc=s);let e=kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zf(s){return s*Ks}function Qf(s){return s*gs}function $f(s){return(s&s-1)===0&&s!==0}function ep(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function tp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function np(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wt={DEG2RAD:Ks,RAD2DEG:gs,generateUUID:yn,clamp:$e,euclideanModulo:jl,mapLinear:Hf,inverseLerp:Vf,lerp:Js,damp:Gf,pingpong:Wf,smoothstep:Xf,smootherstep:qf,randInt:Yf,randFloat:jf,randFloatSpread:Kf,seededRandom:Jf,degToRad:Zf,radToDeg:Qf,isPowerOfTwo:$f,ceilPowerOfTwo:ep,floorPowerOfTwo:tp,setQuaternionFromProperEuler:np,normalize:ht,denormalize:wn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class In{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),M=Math.atan2(T,p*y);m=Math.sin(m*M)/T,a=Math.sin(a*M)/T}const _=a*y;if(c=c*m+f*_,l=l*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new R,Hc=new In;class Ke{constructor(e,t,n,i,r,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],y=i[1],x=i[4],_=i[7],T=i[2],M=i[5],w=i[8];return r[0]=o*v+a*y+c*T,r[3]=o*m+a*x+c*M,r[6]=o*p+a*_+c*w,r[1]=l*v+h*y+u*T,r[4]=l*m+h*x+u*M,r[7]=l*p+h*_+u*w,r[2]=f*v+d*y+g*T,r[5]=f*m+d*x+g*M,r[8]=f*p+d*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new Ke;function Gu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ip(){const s=cr("canvas");return s.style.display="block",s}const Vc={};function hr(s){s in Vc||(Vc[s]=!0,console.warn(s))}function sp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Gc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rp(){const s={enabled:!0,workingColorSpace:en,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?mo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[en]:{primaries:e,whitePoint:n,transfer:mo,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),s}const st=rp();function ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wi;class op{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wi===void 0&&(Wi=cr("canvas")),Wi.width=e.width,Wi.height=e.height;const i=Wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ap=0;class Kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ho(i[o].image)):r.push(Ho(i[o]))}else r=Ho(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ho(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?op.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;const Vo=new R;class At extends ws{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=pi,i=pi,r=Bt,o=xn,a=_n,c=kn,l=At.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=yn(),this.name="",this.source=new Kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vo).x}get height(){return this.source.getSize(Vo).y}get depth(){return this.source.getSize(Vo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Du;At.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,_=(d+1)/2,T=(p+1)/2,M=(h+f)/4,w=(u+v)/4,A=(g+m)/4;return x>_&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=M/n,r=w/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=M/i,r=A/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=w/r,i=A/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cp extends ws{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new At(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Kl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zt extends cp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wu extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hp extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Sr.subVectors(this.max,Is),Xi.subVectors(e.a,Is),qi.subVectors(e.b,Is),Yi.subVectors(e.c,Is),oi.subVectors(qi,Xi),ai.subVectors(Yi,qi),Mi.subVectors(Xi,Yi);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Mi.z,Mi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Mi.z,0,-Mi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Mi.y,Mi.x,0];return!Go(t,Xi,qi,Yi,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,Xi,qi,Yi,Sr))?!1:(Tr.crossVectors(oi,ai),t=[Tr.x,Tr.y,Tr.z],Go(t,Xi,qi,Yi,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new R,new R,new R,new R,new R,new R,new R,new R],bn=new R,br=new Ft,Xi=new R,qi=new R,Yi=new R,oi=new R,ai=new R,Mi=new R,Is=new R,Sr=new R,Tr=new R,bi=new R;function Go(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){bi.fromArray(s,r);const a=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),c=e.dot(bi),l=t.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const up=new Ft,Ns=new R,Wo=new R;class Hn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):up.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Wo)),this.expandByPoint(Ns.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xn=new R,Xo=new R,wr=new R,li=new R,qo=new R,Er=new R,Yo=new R;class gr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xo.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Xo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wr),a=li.dot(this.direction),c=-li.dot(wr),l=li.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xo).addScaledVector(wr,f),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,r){qo.subVectors(t,e),Er.subVectors(n,e),Yo.crossVectors(qo,Er);let o=this.direction.dot(Yo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const c=a*this.direction.dot(Er.crossVectors(li,Er));if(c<0)return null;const l=a*this.direction.dot(qo.cross(li));if(l<0||c+l>o)return null;const h=-a*li.dot(Yo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,g,v,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,v,m)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,fp)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ci.crossVectors(n,ln),ci.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ci.crossVectors(n,ln)),ci.normalize(),Ar.crossVectors(ln,ci),i[0]=ci.x,i[4]=Ar.x,i[8]=ln.x,i[1]=ci.y,i[5]=Ar.y,i[9]=ln.y,i[2]=ci.z,i[6]=Ar.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],x=n[7],_=n[11],T=n[15],M=i[0],w=i[4],A=i[8],b=i[12],S=i[1],P=i[5],N=i[9],F=i[13],G=i[2],V=i[6],I=i[10],z=i[14],k=i[3],se=i[7],ae=i[11],K=i[15];return r[0]=o*M+a*S+c*G+l*k,r[4]=o*w+a*P+c*V+l*se,r[8]=o*A+a*N+c*I+l*ae,r[12]=o*b+a*F+c*z+l*K,r[1]=h*M+u*S+f*G+d*k,r[5]=h*w+u*P+f*V+d*se,r[9]=h*A+u*N+f*I+d*ae,r[13]=h*b+u*F+f*z+d*K,r[2]=g*M+v*S+m*G+p*k,r[6]=g*w+v*P+m*V+p*se,r[10]=g*A+v*N+m*I+p*ae,r[14]=g*b+v*F+m*z+p*K,r[3]=y*M+x*S+_*G+T*k,r[7]=y*w+x*P+_*V+T*se,r[11]=y*A+x*N+_*I+T*ae,r[15]=y*b+x*F+_*z+T*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*l-v*f*l+v*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,_=h*v*l-g*u*l+g*a*d-o*v*d-h*a*p+o*u*p,T=g*u*c-h*v*c-g*a*f+o*v*f+h*a*m-o*u*m,M=t*y+n*x+i*_+r*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=y*w,e[1]=(v*f*r-u*m*r-v*i*d+n*m*d+u*i*p-n*f*p)*w,e[2]=(a*m*r-v*c*r+v*i*l-n*m*l-a*i*p+n*c*p)*w,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*w,e[4]=x*w,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*w,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*w,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*w,e[8]=_*w,e[9]=(g*u*r-h*v*r-g*n*d+t*v*d+h*n*p-t*u*p)*w,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*w,e[12]=T*w,e[13]=(h*v*i-g*u*i+g*n*f-t*v*f-h*n*m+t*u*m)*w,e[14]=(g*a*i-o*v*i-g*n*c+t*v*c+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,v=o*h,m=o*u,p=a*u,y=c*l,x=c*h,_=c*u,T=n.x,M=n.y,w=n.z;return i[0]=(1-(v+p))*T,i[1]=(d+_)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(d-_)*M,i[5]=(1-(f+p))*M,i[6]=(m+y)*M,i[7]=0,i[8]=(g+x)*w,i[9]=(m-y)*w,i[10]=(1-(f+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ji.set(i[0],i[1],i[2]).length();const o=ji.set(i[4],i[5],i[6]).length(),a=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const l=1/r,h=1/o,u=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=zn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===go)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=zn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===zn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===go)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new R,Sn=new Xe,dp=new R(0,0,0),fp=new R(1,1,1),ci=new R,Ar=new R,ln=new R,Xc=new Xe,qc=new In;class un{constructor(e=0,t=0,n=0,i=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Jl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pp=0;const Yc=new R,Ki=new In,qn=new Xe,Cr=new R,Us=new R,mp=new R,gp=new In,jc=new R(1,0,0),Kc=new R(0,1,0),Jc=new R(0,0,1),Zc={type:"added"},vp={type:"removed"},Ji={type:"childadded",child:null},jo={type:"childremoved",child:null};class xt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new R,t=new un,n=new In,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ke}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(Kc,e)}rotateZ(e){return this.rotateOnAxis(Jc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(Kc,e)}translateZ(e){return this.translateOnAxis(Jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Us,Cr,this.up):qn.lookAt(Cr,Us,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(qn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new R(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new R,Yn=new R,Ko=new R,jn=new R,Zi=new R,Qi=new R,Qc=new R,Jo=new R,Zo=new R,Qo=new R,$o=new ot,ea=new ot,ta=new ot;class En{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),Yn.subVectors(n,t),Ko.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(Yn),c=Tn.dot(Ko),l=Yn.dot(Yn),h=Yn.dot(Ko),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return $o.setScalar(0),ea.setScalar(0),ta.setScalar(0),$o.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,n),ta.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector($o,r.x),o.addScaledVector(ea,r.y),o.addScaledVector(ta,r.z),o}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return En.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Zi.subVectors(i,n),Qi.subVectors(r,n),Jo.subVectors(e,n);const c=Zi.dot(Jo),l=Qi.dot(Jo);if(c<=0&&l<=0)return t.copy(n);Zo.subVectors(e,i);const h=Zi.dot(Zo),u=Qi.dot(Zo);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Zi,o);Qo.subVectors(e,r);const d=Zi.dot(Qo),g=Qi.dot(Qo);if(g>=0&&d<=g)return t.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Qi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Qc.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Qc,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(Zi,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function na(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=jl(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=na(o,r,e+1/3),this.g=na(o,r,e),this.b=na(o,r,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=Xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return st.workingToColorSpace(Ht.copy(this),e),Math.round($e(Ht.r*255,0,255))*65536+Math.round($e(Ht.g*255,0,255))*256+Math.round($e(Ht.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=yt){st.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Rr);const n=Js(hi.h,Rr.h,t),i=Js(hi.s,Rr.s,t),r=Js(hi.l,Rr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ue;Ue.NAMES=Xu;let xp=0;class Dn extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=cs,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rt extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new R,Pr=new re;let _p=0;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_p++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),e}}class qu extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yu extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yp=0;const pn=new Xe,ia=new xt,$i=new R,cn=new Ft,Fs=new Ft,Nt=new R;class _t extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gu(e)?Yu:qu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(cn.min,Fs.min),cn.expandByPoint(Nt),Nt.addVectors(cn.max,Fs.max),cn.expandByPoint(Nt)):(cn.expandByPoint(Fs.min),cn.expandByPoint(Fs.max))}cn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Nt.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(e,l),Nt.add($i)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new R,c[A]=new R;const l=new R,h=new R,u=new R,f=new re,d=new re,g=new re,v=new R,m=new R;function p(A,b,S){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[A].add(v),a[b].add(v),a[S].add(v),c[A].add(m),c[b].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,b=y.length;A<b;++A){const S=y[A],P=S.start,N=S.count;for(let F=P,G=P+N;F<G;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new R,_=new R,T=new R,M=new R;function w(A){T.fromBufferAttribute(i,A),M.copy(T);const b=a[A];x.copy(b),x.sub(T.multiplyScalar(T.dot(b))).normalize(),_.crossVectors(M,b);const P=_.dot(c[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,P)}for(let A=0,b=y.length;A<b;++A){const S=y[A],P=S.start,N=S.count;for(let F=P,G=P+N;F<G;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Pt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new Xe,Si=new gr,Lr=new Hn,eh=new R,Dr=new R,Ir=new R,Nr=new R,sa=new R,Ur=new R,th=new R,Fr=new R;class Oe extends xt{constructor(e=new _t,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ur.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(sa.fromBufferAttribute(u,e),o?Ur.addScaledVector(sa,h):Ur.addScaledVector(sa.sub(t),h))}t.add(Ur)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(Lr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Lr,eh)===null||Si.origin.distanceToSquared(eh)>(e.far-e.near)**2))&&($c.copy(r).invert(),Si.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,T=x;_<T;_+=3){const M=a.getX(_),w=a.getX(_+1),A=a.getX(_+2);i=Or(this,p,e,n,l,h,u,M,w,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);i=Or(this,o,e,n,l,h,u,y,x,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,T=x;_<T;_+=3){const M=_,w=_+1,A=_+2;i=Or(this,p,e,n,l,h,u,M,w,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=m,x=m+1,_=m+2;i=Or(this,o,e,n,l,h,u,y,x,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Mp(s,e,t,n,i,r,o,a){let c;if(e.side===Jt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===ni,a),c===null)return null;Fr.copy(a),Fr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Fr);return l<t.near||l>t.far?null:{distance:l,point:Fr.clone(),object:s}}function Or(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Dr),s.getVertexPosition(c,Ir),s.getVertexPosition(l,Nr);const h=Mp(s,e,t,n,Dr,Ir,Nr,th);if(h){const u=new R;En.getBarycoord(th,Dr,Ir,Nr,u),i&&(h.uv=En.getInterpolatedAttribute(i,a,c,l,u,new re)),r&&(h.uv1=En.getInterpolatedAttribute(r,a,c,l,u,new re)),o&&(h.normal=En.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};En.getNormal(Dr,Ir,Nr,f.normal),h.face=f,h.barycoord=u}return h}class rn extends _t{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(v,m,p,y,x,_,T,M,w,A,b){const S=_/w,P=T/A,N=_/2,F=T/2,G=M/2,V=w+1,I=A+1;let z=0,k=0;const se=new R;for(let ae=0;ae<I;ae++){const K=ae*P-F;for(let ie=0;ie<V;ie++){const _e=ie*S-N;se[v]=_e*y,se[m]=K*x,se[p]=G,l.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[p]=M>0?1:-1,h.push(se.x,se.y,se.z),u.push(ie/w),u.push(1-ae/A),z+=1}}for(let ae=0;ae<A;ae++)for(let K=0;K<w;K++){const ie=f+K+V*ae,_e=f+K+V*(ae+1),Re=f+(K+1)+V*(ae+1),ke=f+(K+1)+V*ae;c.push(ie,_e,ke),c.push(_e,Re,ke),k+=6}a.addGroup(d,k,b),d+=k,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(s){const e={};for(let t=0;t<s.length;t++){const n=vs(s[t]);for(const i in n)e[i]=n[i]}return e}function bp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ju(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const gi={clone:vs,merge:Kt};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ku extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new R,nh=new re,ih=new re;class Wt extends Ku{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class wp extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(es,ts,e,t);i.layers=this.layers,this.add(i);const r=new Wt(es,ts,e,t);r.layers=this.layers,this.add(r);const o=new Wt(es,ts,e,t);o.layers=this.layers,this.add(o);const a=new Wt(es,ts,e,t);a.layers=this.layers,this.add(a);const c=new Wt(es,ts,e,t);c.layers=this.layers,this.add(c);const l=new Wt(es,ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ju extends At{constructor(e=[],t=ps,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ju(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rn(5,5,5),r=new Ut({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:$n});r.uniforms.tEquirect.value=t;const o=new Oe(i,r),a=t.minFilter;return t.minFilter===xn&&(t.minFilter=Bt),new wp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class et extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new Zl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ql extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new R;class $l{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $l(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sh=new R,rh=new ot,oh=new ot,Rp=new R,ah=new Xe,Br=new R,oa=new Hn,lh=new Xe,aa=new gr;class Pp extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nc,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Br),this.boundingBox.expandByPoint(Br)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Br),this.boundingSphere.expandByPoint(Br)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),e.ray.intersectsSphere(oa)!==!1&&(lh.copy(i).invert(),aa.copy(e.ray).applyMatrix4(lh),!(this.boundingBox!==null&&aa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,aa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;rh.fromBufferAttribute(i.attributes.skinIndex,e),oh.fromBufferAttribute(i.attributes.skinWeight,e),sh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=oh.getComponent(r);if(o!==0){const a=rh.getComponent(r);ah.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Rp.copy(sh).applyMatrix4(ah),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zu extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bi extends At{constructor(e=null,t=1,n=1,i,r,o,a,c,l=zt,h=zt,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ch=new Xe,Lp=new Xe;class ec{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Lp;ch.multiplyMatrices(a,t[r]),ch.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ec(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Bi(t,e,e,_n,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zu),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Sl extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new Xe,hh=new Xe,zr=[],uh=new Ft,Dp=new Xe,Os=new Oe,Bs=new Hn;class Zs extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),uh.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(uh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Bs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ns),hh.multiplyMatrices(n,ns),Os.matrixWorld=hh,Os.raycast(e,zr);for(let o=0,a=zr.length;o<a;o++){const c=zr[o];c.instanceId=r,c.object=this,t.push(c)}zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bi(new Float32Array(i*this.count),i,this.count,Gl,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const la=new R,Ip=new R,Np=new Ke;class Ci{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=la.subVectors(n,t).cross(Ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(la),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Np.getNormalMatrix(e),i=this.coplanarPoint(la).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Hn,Up=new re(.5,.5),kr=new R;class tc{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,r=new Ci,o=new Ci){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],x=r[13],_=r[14],T=r[15];if(i[0].setComponents(l-o,d-h,p-g,T-y).normalize(),i[1].setComponents(l+o,d+h,p+g,T+y).normalize(),i[2].setComponents(l+a,d+u,p+v,T+x).normalize(),i[3].setComponents(l-a,d-u,p-v,T-x).normalize(),n)i[4].setComponents(c,f,m,_).normalize(),i[5].setComponents(l-c,d-f,p-m,T-_).normalize();else if(i[4].setComponents(l-c,d-f,p-m,T-_).normalize(),t===zn)i[5].setComponents(l+c,d+f,p+m,T+_).normalize();else if(t===go)i[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const t=Up.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(kr.x=i.normal.x>0?e.max.x:e.min.x,kr.y=i.normal.y>0?e.max.y:e.min.y,kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qu extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vo=new R,xo=new R,dh=new Xe,zs=new gr,Hr=new Hn,ca=new R,fh=new R;class nc extends xt{constructor(e=new _t,t=new Qu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)vo.fromBufferAttribute(t,i-1),xo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vo.distanceTo(xo);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;dh.copy(i).invert(),zs.copy(e.ray).applyMatrix4(dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=h.getX(v),y=h.getX(v+1),x=Vr(this,e,zs,c,p,y,v);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(d),p=Vr(this,e,zs,c,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=Vr(this,e,zs,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Vr(this,e,zs,c,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(vo.fromBufferAttribute(a,i),xo.fromBufferAttribute(a,r),t.distanceSqToSegment(vo,xo,ca,fh)>n)return;ca.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ca);if(!(l<e.near||l>e.far))return{distance:l,point:fh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const ph=new R,mh=new R;class Fp extends nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ph.fromBufferAttribute(t,i),mh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ph.distanceTo(mh);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Op extends nc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $u extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gh=new Xe,Tl=new gr,Gr=new Hn,Wr=new R;class Bp extends xt{constructor(e=new _t,t=new $u){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;gh.copy(i).invert(),Tl.copy(e.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);Wr.fromBufferAttribute(u,m),vh(Wr,m,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,v=d;g<v;g++)Wr.fromBufferAttribute(u,g),vh(Wr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vh(s,e,t,n,i,r,o){const a=Tl.distanceSqToPoint(s);if(a<t){const c=new R;Tl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class vi extends At{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ed extends At{constructor(e,t,n=Oi,i,r,o,a=zt,c=zt,l,h=rr,u=1){if(h!==rr&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class td extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nn extends _t{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function y(){const _=new R,T=new R;let M=0;const w=(t-e)/n;for(let A=0;A<=r;A++){const b=[],S=A/r,P=S*(t-e)+e;for(let N=0;N<=i;N++){const F=N/i,G=F*c+a,V=Math.sin(G),I=Math.cos(G);T.x=P*V,T.y=-S*n+m,T.z=P*I,u.push(T.x,T.y,T.z),_.set(V,w,I).normalize(),f.push(_.x,_.y,_.z),d.push(F,1-S),b.push(g++)}v.push(b)}for(let A=0;A<i;A++)for(let b=0;b<r;b++){const S=v[b][A],P=v[b+1][A],N=v[b+1][A+1],F=v[b][A+1];(e>0||b!==0)&&(h.push(S,P,F),M+=3),(t>0||b!==r-1)&&(h.push(P,N,F),M+=3)}l.addGroup(p,M,0),p+=M}function x(_){const T=g,M=new re,w=new R;let A=0;const b=_===!0?e:t,S=_===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const G=N/i*c+a,V=Math.cos(G),I=Math.sin(G);w.x=b*I,w.y=m*S,w.z=b*V,u.push(w.x,w.y,w.z),f.push(0,S,0),M.x=V*.5+.5,M.y=I*.5*S+.5,d.push(M.x,M.y),g++}for(let N=0;N<i;N++){const F=T+N,G=P+N;_===!0?h.push(G,G+1,F):h.push(G+1,G,F),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ao extends Nn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ao(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Es extends _t{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new R,_=new R,T=new R;for(let M=0;M<t.length;M+=3)d(t[M+0],x),d(t[M+1],_),d(t[M+2],T),c(x,_,T,y)}function c(y,x,_,T){const M=T+1,w=[];for(let A=0;A<=M;A++){w[A]=[];const b=y.clone().lerp(_,A/M),S=x.clone().lerp(_,A/M),P=M-A;for(let N=0;N<=P;N++)N===0&&A===M?w[A][N]=b:w[A][N]=b.clone().lerp(S,N/P)}for(let A=0;A<M;A++)for(let b=0;b<2*(M-A)-1;b++){const S=Math.floor(b/2);b%2===0?(f(w[A][S+1]),f(w[A+1][S]),f(w[A][S])):(f(w[A][S+1]),f(w[A+1][S+1]),f(w[A+1][S]))}}function l(y){const x=new R;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const y=new R;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const _=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;o.push(_,1-T)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],_=o[y+2],T=o[y+4],M=Math.max(x,_,T),w=Math.min(x,_,T);M>.9&&w<.1&&(x<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){const y=new R,x=new R,_=new R,T=new R,M=new re,w=new re,A=new re;for(let b=0,S=0;b<r.length;b+=9,S+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),M.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),T.copy(y).add(x).add(_).divideScalar(3);const P=m(T);v(M,S+0,y,P),v(w,S+2,x,P),v(A,S+4,_,P)}}function v(y,x,_,T){T<0&&y.x===1&&(o[x]=y.x-1),_.x===0&&_.z===0&&(o[x]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.vertices,e.indices,e.radius,e.details)}}class ic extends Es{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ic(e.radius,e.detail)}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new re:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,i=[],r=[],o=[],a=new R,c=new Xe;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sc extends Vn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zp extends sc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rc(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Xr=new R,ha=new rc,ua=new rc,da=new rc;class oc extends Vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Xr.subVectors(i[0],i[1]).add(i[0]),l=Xr);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Xr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ha.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),ua.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),da.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ua.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),da.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(ha.calc(c),ua.calc(c),da.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function kp(s,e){const t=1-s;return t*t*e}function Hp(s,e){return 2*(1-s)*s*e}function Vp(s,e){return s*s*e}function Qs(s,e,t,n){return kp(s,e)+Hp(s,t)+Vp(s,n)}function Gp(s,e){const t=1-s;return t*t*t*e}function Wp(s,e){const t=1-s;return 3*t*t*s*e}function Xp(s,e){return 3*(1-s)*s*s*e}function qp(s,e){return s*s*s*e}function $s(s,e,t,n,i){return Gp(s,e)+Wp(s,t)+Xp(s,n)+qp(s,i)}class nd extends Vn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(e,i.x,r.x,o.x,a.x),$s(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yp extends Vn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(e,i.x,r.x,o.x,a.x),$s(e,i.y,r.y,o.y,a.y),$s(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class id extends Vn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jp extends Vn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sd extends Vn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Qs(e,i.x,r.x,o.x),Qs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rd extends Vn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Qs(e,i.x,r.x,o.x),Qs(e,i.y,r.y,o.y),Qs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class od extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(xh(a,c.x,l.x,h.x,u.x),xh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var _o=Object.freeze({__proto__:null,ArcCurve:zp,CatmullRomCurve3:oc,CubicBezierCurve:nd,CubicBezierCurve3:Yp,EllipseCurve:sc,LineCurve:id,LineCurve3:jp,QuadraticBezierCurve:sd,QuadraticBezierCurve3:rd,SplineCurve:od});class Kp extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _o[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new _o[i.type]().fromJSON(i))}return this}}class ur extends Kp{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new id(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new sd(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new nd(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new od(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new sc(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cn extends ur{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ur().fromJSON(i))}return this}}function Jp(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=ad(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=tm(s,e,r,t)),s.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<i;f+=t){const d=s[f],g=s[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return dr(r,o,t,a,c,l,0),o}function ad(s,e,t,n,i){let r;if(i===dm(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=_h(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=_h(o/n|0,s[o],s[o+1],r);return r&&xs(r,r.next)&&(pr(r),r=r.next),r}function zi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(xs(t,t.next)||St(t.prev,t,t.next)===0)){if(pr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function dr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&om(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?Qp(s,n,i,r):Zp(s)){e.push(c.i,s.i,l.i),pr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=$p(zi(s),e),dr(s,e,t,n,i,r,2)):o===2&&em(s,e,t,n,i,r):dr(zi(s),e,t,n,i,r,1);break}}}function Zp(s){const e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(i,r,o),u=Math.min(a,c,l),f=Math.max(i,r,o),d=Math.max(a,c,l);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ys(i,a,r,c,o,l,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qp(s,e,t,n){const i=s.prev,r=s,o=s.next;if(St(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),v=Math.max(a,c,l),m=Math.max(h,u,f),p=wl(d,g,e,t,n),y=wl(v,m,e,t,n);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ys(a,h,c,u,l,f,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Ys(a,h,c,u,l,f,_.x,_.y)&&St(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ys(a,h,c,u,l,f,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Ys(a,h,c,u,l,f,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function $p(s,e){let t=s;do{const n=t.prev,i=t.next.next;!xs(n,i)&&cd(n,t,t.next,i)&&fr(n,i)&&fr(i,n)&&(e.push(n.i,t.i,i.i),pr(t),pr(t.next),t=s=i),t=t.next}while(t!==s);return zi(t)}function em(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cm(o,a)){let c=hd(o,a);o=zi(o,o.next),c=zi(c,c.next),dr(o,e,t,n,i,r,0),dr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function tm(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=ad(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(lm(l))}i.sort(nm);for(let r=0;r<i.length;r++)t=im(i[r],t);return t}function nm(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function im(s,e){const t=sm(s,e);if(!t)return e;const n=hd(t,s);return zi(n,n.next),zi(t,t.next)}function sm(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(xs(s,t))return t;do{if(xs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&ld(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);fr(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&rm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function rm(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function om(s,e,t,n){let i=s;do i.z===0&&(i.z=wl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,am(i)}function am(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function wl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function lm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ld(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Ys(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&ld(s,e,t,n,i,r,o,a)}function cm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!hm(s,e)&&(fr(s,e)&&fr(e,s)&&um(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||xs(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function xs(s,e){return s.x===e.x&&s.y===e.y}function cd(s,e,t,n){const i=Yr(St(s,e,t)),r=Yr(St(s,e,n)),o=Yr(St(t,n,s)),a=Yr(St(t,n,e));return!!(i!==r&&o!==a||i===0&&qr(s,t,e)||r===0&&qr(s,n,e)||o===0&&qr(t,s,n)||a===0&&qr(t,e,n))}function qr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Yr(s){return s>0?1:s<0?-1:0}function hm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&cd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function fr(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function um(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function hd(s,e){const t=El(s.i,s.x,s.y),n=El(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _h(s,e,t,n){const i=El(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function El(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dm(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class fm{static triangulate(e,t,n=2){return Jp(e,t,n)}}class Zn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Zn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];yh(e),Mh(n,e);let o=e.length;t.forEach(yh);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Mh(n,t[c]);const a=fm.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function yh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Mh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Rn extends _t{constructor(e=new Cn([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Qe(i,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:pm;let x,_=!1,T,M,w,A;p&&(x=p.getSpacedPoints(h),_=!0,f=!1,T=p.computeFrenetFrames(h,!1),M=new R,w=new R,A=new R),f||(m=0,d=0,g=0,v=0);const b=a.extractPoints(l);let S=b.shape;const P=b.holes;if(!Zn.isClockWise(S)){S=S.reverse();for(let le=0,te=P.length;le<te;le++){const ee=P[le];Zn.isClockWise(ee)&&(P[le]=ee.reverse())}}function F(le){const ee=10000000000000001e-36;let $=le[0];for(let me=1;me<=le.length;me++){const ce=me%le.length,ge=le[ce],Ye=ge.x-$.x,qe=ge.y-$.y,L=Ye*Ye+qe*qe,E=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs($.x),Math.abs($.y)),H=ee*E*E;if(L<=H){le.splice(ce,1),me--;continue}$=ge}}F(S),P.forEach(F);const G=P.length,V=S;for(let le=0;le<G;le++){const te=P[le];S=S.concat(te)}function I(le,te,ee){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(te,ee)}const z=S.length;function k(le,te,ee){let $,me,ce;const ge=le.x-te.x,Ye=le.y-te.y,qe=ee.x-le.x,L=ee.y-le.y,E=ge*ge+Ye*Ye,H=ge*L-Ye*qe;if(Math.abs(H)>Number.EPSILON){const Y=Math.sqrt(E),oe=Math.sqrt(qe*qe+L*L),J=te.x-Ye/Y,Ne=te.y+ge/Y,pe=ee.x-L/oe,Pe=ee.y+qe/oe,Le=((pe-J)*L-(Pe-Ne)*qe)/(ge*L-Ye*qe);$=J+ge*Le-le.x,me=Ne+Ye*Le-le.y;const he=$*$+me*me;if(he<=2)return new re($,me);ce=Math.sqrt(he/2)}else{let Y=!1;ge>Number.EPSILON?qe>Number.EPSILON&&(Y=!0):ge<-Number.EPSILON?qe<-Number.EPSILON&&(Y=!0):Math.sign(Ye)===Math.sign(L)&&(Y=!0),Y?($=-Ye,me=ge,ce=Math.sqrt(E)):($=ge,me=Ye,ce=Math.sqrt(E/2))}return new re($/ce,me/ce)}const se=[];for(let le=0,te=V.length,ee=te-1,$=le+1;le<te;le++,ee++,$++)ee===te&&(ee=0),$===te&&($=0),se[le]=k(V[le],V[ee],V[$]);const ae=[];let K,ie=se.concat();for(let le=0,te=G;le<te;le++){const ee=P[le];K=[];for(let $=0,me=ee.length,ce=me-1,ge=$+1;$<me;$++,ce++,ge++)ce===me&&(ce=0),ge===me&&(ge=0),K[$]=k(ee[$],ee[ce],ee[ge]);ae.push(K),ie=ie.concat(K)}let _e;if(m===0)_e=Zn.triangulateShape(V,P);else{const le=[],te=[];for(let ee=0;ee<m;ee++){const $=ee/m,me=d*Math.cos($*Math.PI/2),ce=g*Math.sin($*Math.PI/2)+v;for(let ge=0,Ye=V.length;ge<Ye;ge++){const qe=I(V[ge],se[ge],ce);we(qe.x,qe.y,-me),$===0&&le.push(qe)}for(let ge=0,Ye=G;ge<Ye;ge++){const qe=P[ge];K=ae[ge];const L=[];for(let E=0,H=qe.length;E<H;E++){const Y=I(qe[E],K[E],ce);we(Y.x,Y.y,-me),$===0&&L.push(Y)}$===0&&te.push(L)}}_e=Zn.triangulateShape(le,te)}const Re=_e.length,ke=g+v;for(let le=0;le<z;le++){const te=f?I(S[le],ie[le],ke):S[le];_?(w.copy(T.normals[0]).multiplyScalar(te.x),M.copy(T.binormals[0]).multiplyScalar(te.y),A.copy(x[0]).add(w).add(M),we(A.x,A.y,A.z)):we(te.x,te.y,0)}for(let le=1;le<=h;le++)for(let te=0;te<z;te++){const ee=f?I(S[te],ie[te],ke):S[te];_?(w.copy(T.normals[le]).multiplyScalar(ee.x),M.copy(T.binormals[le]).multiplyScalar(ee.y),A.copy(x[le]).add(w).add(M),we(A.x,A.y,A.z)):we(ee.x,ee.y,u/h*le)}for(let le=m-1;le>=0;le--){const te=le/m,ee=d*Math.cos(te*Math.PI/2),$=g*Math.sin(te*Math.PI/2)+v;for(let me=0,ce=V.length;me<ce;me++){const ge=I(V[me],se[me],$);we(ge.x,ge.y,u+ee)}for(let me=0,ce=P.length;me<ce;me++){const ge=P[me];K=ae[me];for(let Ye=0,qe=ge.length;Ye<qe;Ye++){const L=I(ge[Ye],K[Ye],$);_?we(L.x,L.y+x[h-1].y,x[h-1].x+ee):we(L.x,L.y,u+ee)}}}j(),Q();function j(){const le=i.length/3;if(f){let te=0,ee=z*te;for(let $=0;$<Re;$++){const me=_e[$];ye(me[2]+ee,me[1]+ee,me[0]+ee)}te=h+m*2,ee=z*te;for(let $=0;$<Re;$++){const me=_e[$];ye(me[0]+ee,me[1]+ee,me[2]+ee)}}else{for(let te=0;te<Re;te++){const ee=_e[te];ye(ee[2],ee[1],ee[0])}for(let te=0;te<Re;te++){const ee=_e[te];ye(ee[0]+z*h,ee[1]+z*h,ee[2]+z*h)}}n.addGroup(le,i.length/3-le,0)}function Q(){const le=i.length/3;let te=0;ve(V,te),te+=V.length;for(let ee=0,$=P.length;ee<$;ee++){const me=P[ee];ve(me,te),te+=me.length}n.addGroup(le,i.length/3-le,1)}function ve(le,te){let ee=le.length;for(;--ee>=0;){const $=ee;let me=ee-1;me<0&&(me=le.length-1);for(let ce=0,ge=h+m*2;ce<ge;ce++){const Ye=z*ce,qe=z*(ce+1),L=te+$+Ye,E=te+me+Ye,H=te+me+qe,Y=te+$+qe;nt(L,E,H,Y)}}}function we(le,te,ee){c.push(le),c.push(te),c.push(ee)}function ye(le,te,ee){pt(le),pt(te),pt(ee);const $=i.length/3,me=y.generateTopUV(n,i,$-3,$-2,$-1);D(me[0]),D(me[1]),D(me[2])}function nt(le,te,ee,$){pt(le),pt(te),pt($),pt(te),pt(ee),pt($);const me=i.length/3,ce=y.generateSideWallUV(n,i,me-6,me-3,me-2,me-1);D(ce[0]),D(ce[1]),D(ce[3]),D(ce[1]),D(ce[2]),D(ce[3])}function pt(le){i.push(c[le*3+0]),i.push(c[le*3+1]),i.push(c[le*3+2])}function D(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new _o[i.type]().fromJSON(i)),new Rn(n,e.options)}}const pm={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new re(r,o),new re(a,c),new re(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-u),new re(f,1-g),new re(v,1-p)]:[new re(a,1-c),new re(h,1-u),new re(d,1-g),new re(m,1-p)]}};function mm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ac extends Es{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ac(e.radius,e.detail)}}class si extends Es{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new si(e.radius,e.detail)}}class ki extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*f-o;for(let x=0;x<l;x++){const _=x*u-r;g.push(_,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const x=y+l*p,_=y+l*(p+1),T=y+1+l*(p+1),M=y+1+l*p;d.push(x,_,M),d.push(_,T,M)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class lc extends _t{constructor(e=new Cn([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Qe(i,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(o,2));function l(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;Zn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Zn.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=Zn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],x=y[0]+u,_=y[1]+u,T=y[2]+u;n.push(x,_,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return gm(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new lc(n,e.curveSegments)}}function gm(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class xi extends _t{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,f=new R,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){const M=T/t;u.x=-e*Math.cos(i+M*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+M*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(M+_,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=h[p][y+1],_=h[p][y],T=h[p+1][y],M=h[p+1][y+1];(p!==0||o>0)&&d.push(x,_,M),(p!==n-1||c<Math.PI)&&d.push(_,T,M)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cc extends Es{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cc(e.radius,e.detail)}}class sn extends _t{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const v=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const v=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Co extends _t{constructor(e=new rd(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new re;let h=new R;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(d,2));function v(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),p()}function m(x){h=e.getPointAt(x/t,h);const _=o.normals[x],T=o.binormals[x];for(let M=0;M<=i;M++){const w=M/i*Math.PI*2,A=Math.sin(w),b=-Math.cos(w);c.x=b*_.x+A*T.x,c.y=b*_.y+A*T.y,c.z=b*_.z+A*T.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let _=1;_<=i;_++){const T=(i+1)*(x-1)+(_-1),M=(i+1)*x+(_-1),w=(i+1)*x+_,A=(i+1)*(x-1)+_;g.push(T,M,A),g.push(M,w,A)}}function y(){for(let x=0;x<=t;x++)for(let _=0;_<=i;_++)l.x=x/t,l.y=_/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Co(new _o[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class vm extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vt extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xm extends Dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _m extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ym extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function jr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Mm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function bm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function ud(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class vr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sm extends vr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uc,endingEnd:Uc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fc:r=e,a=2*t-n;break;case Oc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fc:o=e,c=2*n-t;break;case Oc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*v+.5*g,_=d*m-d*v;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+y*o[l+T]+x*o[c+T]+_*o[u+T];return r}}class Tm extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class wm extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Un{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case lr:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return lr;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Mm(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Bo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[f+g]||v!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=lr;class As extends Un{constructor(e,t,n){super(e,t,n)}}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=ar;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class dd extends Un{constructor(e,t,n,i){super(e,t,n,i)}}dd.prototype.ValueTypeName="color";class _s extends Un{constructor(e,t,n,i){super(e,t,n,i)}}_s.prototype.ValueTypeName="number";class Em extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ys extends Un{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Em(this.times,this.values,this.getValueSize(),e)}}ys.prototype.ValueTypeName="quaternion";ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Un{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=ar;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Un{constructor(e,t,n,i){super(e,t,n,i)}}Ms.prototype.ValueTypeName="vector";class Am{constructor(e="",t=-1,n=[],i=Rf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Rm(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=bm(c);c=bh(c,1,h),l=bh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new _s(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,v){if(d.length!==0){const m=[],p=[];ud(d,m,p,g),m.length!==0&&v.push(new u(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)d[f[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){const x=f[g];m.push(x.time),p.push(x.morphTarget===v?1:0)}i.push(new _s(".morphTargetInfluence["+v+"]",m,p))}c=d.length*o}else{const d=".bones["+t[u].name+"]";n(Ms,d+".position",f,"pos",i),n(ys,d+".quaternion",f,"rot",i),n(Ms,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Cm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return Ms;case"color":return dd;case"quaternion":return ys;case"bool":case"boolean":return As;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Rm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cm(s.type);if(s.times===void 0){const t=[],n=[];ud(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Qn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Pm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Lm=new Pm;class Rs{constructor(e){this.manager=e!==void 0?e:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class Dm extends Error{constructor(e,t){super(e),this.response=t}}class fd extends Rs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Kn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let M=0,w=h.length;M<w;M++){const A=h[M];A.onProgress&&A.onProgress(T)}p.enqueue(_),y()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Dm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Qn.add(`file:${e}`,l);const h=Kn[e];delete Kn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Kn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Kn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const is=new WeakMap;class Im extends Rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=is.get(o);u===void 0&&(u=[],is.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=cr("img");function c(){h(),t&&t(this);const u=is.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}is.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),Qn.remove(`image:${e}`);const f=is.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Nm extends Rs{constructor(e){super(e)}load(e,t,n,i){const r=new At,o=new Im(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class xr extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Um extends xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const fa=new Xe,Sh=new R,Th=new R;class hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sh),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fm extends hc{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class pd extends xr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wh=new Xe,ks=new R,pa=new R;class Om extends hc{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(ks),pa.copy(n.position),pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pa),n.updateMatrixWorld(),i.makeTranslation(-ks.x,-ks.y,-ks.z),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,n.coordinateSystem,n.reversedDepth)}}class er extends xr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Om}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ro extends Ku{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bm extends hc{constructor(){super(new Ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class md extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Bm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ma=new WeakMap;class zm extends Rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(ma.has(o)===!0)i&&i(ma.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ma.set(c,l),Qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class km extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Hm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const uc="\\[\\]\\.:\\/",Vm=new RegExp("["+uc+"]","g"),dc="[^"+uc+"]",Gm="[^"+uc.replace("\\.","")+"]",Wm=/((?:WC+[\/:])*)/.source.replace("WC",dc),Xm=/(WCOD+)?/.source.replace("WCOD",Gm),qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),Ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),jm=new RegExp("^"+Wm+Xm+qm+Ym+"$"),Km=["material","materials","bones","map"];class Jm{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vm,"")}static parseTrackName(e){const t=jm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Km.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=Jm;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Eh=new Xe;class Kr{constructor(e,t,n=0,i=1/0){this.ray=new gr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Jl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(e,t=!0,n=[]){return Al(e,this,n,t),n.sort(Ah),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Al(e[i],this,n,t);return n.sort(Ah),n}}function Ah(s,e){return s.distance-e.distance}function Al(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Al(r[o],e,t,!0)}}function Ch(s,e,t,n){const i=Zm(n);switch(t){case Bu:return s*e;case Gl:return s*e/i.components*i.byteLength;case Wl:return s*e/i.components*i.byteLength;case ku:return s*e*2/i.components*i.byteLength;case Xl:return s*e*2/i.components*i.byteLength;case zu:return s*e*3/i.components*i.byteLength;case _n:return s*e*4/i.components*i.byteLength;case ql:return s*e*4/i.components*i.byteLength;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ja:case Ja:return Math.max(s,16)*Math.max(e,8)/4;case Ya:case Ka:return Math.max(s,8)*Math.max(e,8)/2;case Za:case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case pl:case ml:case gl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case vl:case xl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _l:case yl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zm(s){switch(s){case kn:case Nu:return{byteLength:1,components:1};case ir:case Uu:case hn:return{byteLength:2,components:1};case Hl:case Vl:return{byteLength:2,components:4};case Oi:case kl:case An:return{byteLength:4,components:1};case Fu:case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Qm(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
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
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
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
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
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
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d0=`#ifdef USE_IRIDESCENCE
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
#endif`,f0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b0=`#define PI 3.141592653589793
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
} // validated`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T0=`vec3 transformedNormal = objectNormal;
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
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,H0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
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
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
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
#endif`,Z0=`struct PhysicalMaterial {
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
}`,Q0=`
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lg=`#if defined( USE_POINTS_UV )
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
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
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
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Og=`float getShadowMask() {
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
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`#include <common>
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
}`,rv=`#if DEPTH_PACKING == 3200
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
}`,ov=`#define DISTANCE
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
}`,av=`#define DISTANCE
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`uniform float scale;
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
}`,uv=`uniform vec3 diffuse;
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
}`,dv=`#include <common>
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
}`,fv=`uniform vec3 diffuse;
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define LAMBERT
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
}`,gv=`#define MATCAP
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
}`,vv=`#define MATCAP
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
}`,xv=`#define NORMAL
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
}`,_v=`#define NORMAL
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
}`,yv=`#define PHONG
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
}`,Mv=`#define PHONG
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
}`,bv=`#define STANDARD
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
}`,Sv=`#define STANDARD
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
}`,Tv=`#define TOON
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
}`,wv=`#define TOON
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
}`,Ev=`uniform float size;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Cv=`#include <common>
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
}`,Rv=`uniform vec3 color;
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
}`,Pv=`uniform float rotation;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:$m,alphahash_pars_fragment:e0,alphamap_fragment:t0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:d0,bumpmap_pars_fragment:f0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:v0,color_fragment:x0,color_pars_fragment:_0,color_pars_vertex:y0,color_vertex:M0,common:b0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:T0,displacementmap_pars_vertex:w0,displacementmap_vertex:E0,emissivemap_fragment:A0,emissivemap_pars_fragment:C0,colorspace_fragment:R0,colorspace_pars_fragment:P0,envmap_fragment:L0,envmap_common_pars_fragment:D0,envmap_pars_fragment:I0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:X0,envmap_vertex:U0,fog_vertex:F0,fog_pars_vertex:O0,fog_fragment:B0,fog_pars_fragment:z0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:H0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:q0,lights_toon_pars_fragment:Y0,lights_phong_fragment:j0,lights_phong_pars_fragment:K0,lights_physical_fragment:J0,lights_physical_pars_fragment:Z0,lights_fragment_begin:Q0,lights_fragment_maps:$0,lights_fragment_end:eg,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:sg,map_fragment:rg,map_pars_fragment:og,map_particle_fragment:ag,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:hg,morphinstance_vertex:ug,morphcolor_vertex:dg,morphnormal_vertex:fg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:vg,normal_pars_fragment:xg,normal_pars_vertex:_g,normal_vertex:yg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Sg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:wg,opaque_fragment:Eg,packing:Ag,premultiplied_alpha_fragment:Cg,project_vertex:Rg,dithering_fragment:Pg,dithering_pars_fragment:Lg,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Ug,shadowmap_vertex:Fg,shadowmask_pars_fragment:Og,skinbase_vertex:Bg,skinning_pars_vertex:zg,skinning_vertex:kg,skinnormal_vertex:Hg,specularmap_fragment:Vg,specularmap_pars_fragment:Gg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:Yg,uv_pars_fragment:jg,uv_pars_vertex:Kg,uv_vertex:Jg,worldpos_vertex:Zg,background_vert:Qg,background_frag:$g,backgroundCube_vert:ev,backgroundCube_frag:tv,cube_vert:nv,cube_frag:iv,depth_vert:sv,depth_frag:rv,distanceRGBA_vert:ov,distanceRGBA_frag:av,equirect_vert:lv,equirect_frag:cv,linedashed_vert:hv,linedashed_frag:uv,meshbasic_vert:dv,meshbasic_frag:fv,meshlambert_vert:pv,meshlambert_frag:mv,meshmatcap_vert:gv,meshmatcap_frag:vv,meshnormal_vert:xv,meshnormal_frag:_v,meshphong_vert:yv,meshphong_frag:Mv,meshphysical_vert:bv,meshphysical_frag:Sv,meshtoon_vert:Tv,meshtoon_frag:wv,points_vert:Ev,points_frag:Av,shadow_vert:Cv,shadow_frag:Rv,sprite_vert:Pv,sprite_frag:Lv},Me={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Bn={basic:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Kt([Me.common,Me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Kt([Me.lights,Me.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Bn.physical={uniforms:Kt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Jr={r:0,b:0,g:0},wi=new un,Dv=new Xe;function Iv(s,e,t,n,i,r,o){const a=new Ue(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const T=g(x);T===null?p(a,c):T&&T.isColor&&(p(T,1),_=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,_){const T=g(_);T&&(T.isCubeTexture||T.mapping===Eo)?(h===void 0&&(h=new Oe(new rn(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:vs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),wi.copy(_.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(wi)),h.material.toneMapped=st.getTransfer(T.colorSpace)!==ct,(u!==T||f!==T.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Oe(new ki(2,2),new Ut({name:"BackgroundMaterial",uniforms:vs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=st.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(Jr,ju(s)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,_,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:m,dispose:y}}function Nv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,P,N,F,G){let V=!1;const I=u(F,N,P);r!==I&&(r=I,l(r.object)),V=d(S,F,N,G),V&&g(S,F,N,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(S,P,N,F),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,P,N){const F=N.wireframe===!0;let G=n[S.id];G===void 0&&(G={},n[S.id]=G);let V=G[P.id];V===void 0&&(V={},G[P.id]=V);let I=V[F];return I===void 0&&(I=f(c()),V[F]=I),I}function f(S){const P=[],N=[],F=[];for(let G=0;G<t;G++)P[G]=0,N[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,P,N,F){const G=r.attributes,V=P.attributes;let I=0;const z=N.getAttributes();for(const k in z)if(z[k].location>=0){const ae=G[k];let K=V[k];if(K===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),ae===void 0||ae.attribute!==K||K&&ae.data!==K.data)return!0;I++}return r.attributesNum!==I||r.index!==F}function g(S,P,N,F){const G={},V=P.attributes;let I=0;const z=N.getAttributes();for(const k in z)if(z[k].location>=0){let ae=V[k];ae===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));const K={};K.attribute=ae,ae&&ae.data&&(K.data=ae.data),G[k]=K,I++}r.attributes=G,r.attributesNum=I,r.index=F}function v(){const S=r.newAttributes;for(let P=0,N=S.length;P<N;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const N=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;N[S]=1,F[S]===0&&(s.enableVertexAttribArray(S),F[S]=1),G[S]!==P&&(s.vertexAttribDivisor(S,P),G[S]=P)}function y(){const S=r.newAttributes,P=r.enabledAttributes;for(let N=0,F=P.length;N<F;N++)P[N]!==S[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function x(S,P,N,F,G,V,I){I===!0?s.vertexAttribIPointer(S,P,N,G,V):s.vertexAttribPointer(S,P,N,F,G,V)}function _(S,P,N,F){v();const G=F.attributes,V=N.getAttributes(),I=P.defaultAttributeValues;for(const z in V){const k=V[z];if(k.location>=0){let se=G[z];if(se===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){const ae=se.normalized,K=se.itemSize,ie=e.get(se);if(ie===void 0)continue;const _e=ie.buffer,Re=ie.type,ke=ie.bytesPerElement,j=Re===s.INT||Re===s.UNSIGNED_INT||se.gpuType===kl;if(se.isInterleavedBufferAttribute){const Q=se.data,ve=Q.stride,we=se.offset;if(Q.isInstancedInterleavedBuffer){for(let ye=0;ye<k.locationSize;ye++)p(k.location+ye,Q.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<k.locationSize;ye++)m(k.location+ye);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let ye=0;ye<k.locationSize;ye++)x(k.location+ye,K/k.locationSize,Re,ae,ve*ke,(we+K/k.locationSize*ye)*ke,j)}else{if(se.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)p(k.location+Q,se.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Q=0;Q<k.locationSize;Q++)x(k.location+Q,K/k.locationSize,Re,ae,K*ke,K/k.locationSize*Q*ke,j)}}else if(I!==void 0){const ae=I[z];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(k.location,ae);break;case 3:s.vertexAttrib3fv(k.location,ae);break;case 4:s.vertexAttrib4fv(k.location,ae);break;default:s.vertexAttrib1fv(k.location,ae)}}}}y()}function T(){A();for(const S in n){const P=n[S];for(const N in P){const F=P[N];for(const G in F)h(F[G].object),delete F[G];delete P[N]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const N in P){const F=P[N];for(const G in F)h(F[G].object),delete F[G];delete P[N]}delete n[S.id]}function w(S){for(const P in n){const N=n[P];if(N[S.id]===void 0)continue;const F=N[S.id];for(const G in F)h(F[G].object),delete F[G];delete N[S.id]}}function A(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Uv(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Fv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==_n&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==kn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==An&&!A)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,M=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:T,maxSamples:M}}function Ov(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ci,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,x=y*4;let _=p.clippingState||null;c.value=_,_=h(g,f,x,d);for(let T=0;T!==x;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=d;x!==v;++x,_+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Bv(s){let e=new WeakMap;function t(o,a){return a===Xa?o.mapping=ps:a===qa&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xa||a===qa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ep(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const as=4,Rh=[.125,.215,.35,.446,.526,.582],Di=20,ga=new Ro,Ph=new Ue;let va=null,xa=0,_a=0,ya=!1;const Ri=(1+Math.sqrt(5))/2,ss=1/Ri,Lh=[new R(-Ri,ss,0),new R(Ri,ss,0),new R(-ss,0,Ri),new R(ss,0,Ri),new R(0,Ri,-ss),new R(0,Ri,ss),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],zv=new R;class yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=zv}=r;va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va,xa,_a),this._renderer.xr.enabled=ya,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:hn,format:_n,colorSpace:en,depthBuffer:!1},i=Dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kv(r)),this._blurMaterial=Hv(r,e,t)}return i}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,n,i,r){const c=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ph),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new Rt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),m=new Oe(new rn,v);let p=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,p=!0):(v.color.copy(Ph),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):_===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const T=this._cubeSize;Zr(i,_*T,x>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ps||e.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lh[(i-r-1)%Lh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Oe(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Di-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let y=0;for(let w=0;w<Di;++w){const A=w/v,b=Math.exp(-A*A/2);p.push(b),w===0?y+=b:w<m&&(y+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const _=this._sizeLods[i],T=3*_*(i>x-as?i-x+as:0),M=4*(this._cubeSize-_);Zr(t,T,M,3*_,2*_),c.setRenderTarget(t),c.render(u,ga)}}function kv(s){const e=[],t=[],n=[];let i=s;const r=s-as+1+Rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-as?c=Rh[o-s+as-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*d),x=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let M=0;M<d;M++){const w=M%3*2/3-1,A=M>2?0:-1,b=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];y.set(b,v*g*M),x.set(f,m*g*M);const S=[M,M,M,M,M,M];_.set(S,p*g*M)}const T=new _t;T.setAttribute("position",new Pt(y,v)),T.setAttribute("uv",new Pt(x,m)),T.setAttribute("faceIndex",new Pt(_,p)),e.push(T),i>as&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dh(s,e,t){const n=new Zt(s,e,t);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hv(s,e,t){const n=new Float32Array(Di),i=new R(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ih(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Nh(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function Vv(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xa||c===qa,h=c===ps||c===ms;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new yo(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new yo(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wv(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let x=0,_=y.length;x<_;x+=3){const T=y[x+0],M=y[x+1],w=y[x+2];f.push(T,M,M,w,w,T)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const T=x+0,M=x+1,w=x+2;f.push(T,M,M,w,w,T)}}else return;const m=new(Gu(f)?Yu:qu)(f,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Xv(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*v[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yv(s,e,t){const n=new WeakMap,i=new ot;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let T=a.attributes.position.count*_,M=1;T>e.maxTextureSize&&(M=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*M*4*u),A=new Wu(w,T,M,u);A.type=An,A.needsUpdate=!0;const b=_*4;for(let P=0;P<u;P++){const N=p[P],F=y[P],G=x[P],V=T*M*4*P;for(let I=0;I<N.count;I++){const z=I*b;g===!0&&(i.fromBufferAttribute(N,I),w[V+z+0]=i.x,w[V+z+1]=i.y,w[V+z+2]=i.z,w[V+z+3]=0),v===!0&&(i.fromBufferAttribute(F,I),w[V+z+4]=i.x,w[V+z+5]=i.y,w[V+z+6]=i.z,w[V+z+7]=0),m===!0&&(i.fromBufferAttribute(G,I),w[V+z+8]=i.x,w[V+z+9]=i.y,w[V+z+10]=i.z,w[V+z+11]=G.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new re(T,M)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function jv(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const vd=new At,Uh=new ed(1,1),xd=new Wu,_d=new hp,yd=new Ju,Fh=[],Oh=[],Bh=new Float32Array(16),zh=new Float32Array(9),kh=new Float32Array(4);function Ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Fh[i];if(r===void 0&&(r=new Float32Array(i),Fh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function It(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Po(s,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Kv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Jv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),It(t,e)}}function Zv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),It(t,e)}}function Qv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),It(t,e)}}function $v(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;kh.set(n),s.uniformMatrix2fv(this.addr,!1,kh),It(t,n)}}function ex(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;zh.set(n),s.uniformMatrix3fv(this.addr,!1,zh),It(t,n)}}function tx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;Bh.set(n),s.uniformMatrix4fv(this.addr,!1,Bh),It(t,n)}}function nx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),It(t,e)}}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),It(t,e)}}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),It(t,e)}}function ox(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),It(t,e)}}function lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),It(t,e)}}function cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),It(t,e)}}function hx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uh.compareFunction=Vu,r=Uh):r=vd,t.setTexture2D(e||r,i)}function ux(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_d,i)}function dx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yd,i)}function fx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xd,i)}function px(s){switch(s){case 5126:return Kv;case 35664:return Jv;case 35665:return Zv;case 35666:return Qv;case 35674:return $v;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}function mx(s,e){s.uniform1fv(this.addr,e)}function gx(s,e){const t=Ps(e,this.size,2);s.uniform2fv(this.addr,t)}function vx(s,e){const t=Ps(e,this.size,3);s.uniform3fv(this.addr,t)}function xx(s,e){const t=Ps(e,this.size,4);s.uniform4fv(this.addr,t)}function _x(s,e){const t=Ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yx(s,e){const t=Ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mx(s,e){const t=Ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bx(s,e){s.uniform1iv(this.addr,e)}function Sx(s,e){s.uniform2iv(this.addr,e)}function Tx(s,e){s.uniform3iv(this.addr,e)}function wx(s,e){s.uniform4iv(this.addr,e)}function Ex(s,e){s.uniform1uiv(this.addr,e)}function Ax(s,e){s.uniform2uiv(this.addr,e)}function Cx(s,e){s.uniform3uiv(this.addr,e)}function Rx(s,e){s.uniform4uiv(this.addr,e)}function Px(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||vd,r[o])}function Lx(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||_d,r[o])}function Dx(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||yd,r[o])}function Ix(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||xd,r[o])}function Nx(s){switch(s){case 5126:return mx;case 35664:return gx;case 35665:return vx;case 35666:return xx;case 35674:return _x;case 35675:return yx;case 35676:return Mx;case 5124:case 35670:return bx;case 35667:case 35671:return Sx;case 35668:case 35672:return Tx;case 35669:case 35673:return wx;case 5125:return Ex;case 36294:return Ax;case 36295:return Cx;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ix}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=px(t.type)}}class Fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nx(t.type)}}class Ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Hh(s,e){s.seq.push(e),s.map[e.id]=e}function Bx(s,e,t){const n=s.name,i=n.length;for(Ma.lastIndex=0;;){const r=Ma.exec(n),o=Ma.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Hh(t,l===void 0?new Ux(a,s,e):new Fx(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Ox(a),Hh(t,u)),t=u}}}class ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Bx(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Vh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const zx=37297;let kx=0;function Hx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Gh=new Ke;function Vx(s){st._getMatrix(Gh,st.workingColorSpace,s);const e=`mat3( ${Gh.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(s)){case mo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Wh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Hx(s.getShaderSource(e),a)}else return r}function Gx(s,e){const t=Vx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wx(s,e){let t;switch(e){case Eu:t="Linear";break;case Au:t="Reinhard";break;case Cu:t="Cineon";break;case zl:t="ACESFilmic";break;case Pu:t="AgX";break;case Lu:t="Neutral";break;case Ru:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new R;function Xx(){st.getLuminanceCoefficients(Qr);const s=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Yx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function js(s){return s!==""}function Xh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(s){return s.replace(Kx,Zx)}const Jx=new Map;function Zx(s,e){let t=Ze[e];if(t===void 0){const n=Jx.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cl(t)}const Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(s){return s.replace(Qx,$x)}function $x(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function t_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function i_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ef:e="ENVMAP_BLENDING_MIX";break;case Af:e="ENVMAP_BLENDING_ADD";break}return e}function s_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function r_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=e_(t),l=t_(t),h=n_(t),u=i_(t),f=s_(t),d=qx(t),g=Yx(r),v=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==mi?Wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Gx("linearToOutputTexel",t.outputColorSpace),Xx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=Cl(o),o=Xh(o,t),o=qh(o,t),a=Cl(a),a=Xh(a,t),a=qh(a,t),o=Yh(o),a=Yh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,_=y+p+a,T=Vh(i,i.VERTEX_SHADER,x),M=Vh(i,i.FRAGMENT_SHADER,_);i.attachShader(v,T),i.attachShader(v,M),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(v)||"",F=i.getShaderInfoLog(T)||"",G=i.getShaderInfoLog(M)||"",V=N.trim(),I=F.trim(),z=G.trim();let k=!0,se=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,T,M);else{const ae=Wh(i,T,"vertex"),K=Wh(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ae+`
`+K)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(I===""||z==="")&&(se=!1);se&&(P.diagnostics={runnable:k,programLog:V,vertexShader:{log:I,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(T),i.deleteShader(M),A=new ho(i,v),b=jx(i,v)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,zx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=M,this}let o_=0;class a_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new l_(e),t.set(e,n)),n}}class l_{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}}function c_(s,e,t,n,i,r,o){const a=new Jl,c=new a_,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,N,F){const G=N.fog,V=F.geometry,I=b.isMeshStandardMaterial?N.environment:null,z=(b.isMeshStandardMaterial?t:e).get(b.envMap||I),k=z&&z.mapping===Eo?z.image.height:null,se=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,K=ae!==void 0?ae.length:0;let ie=0;V.morphAttributes.position!==void 0&&(ie=1),V.morphAttributes.normal!==void 0&&(ie=2),V.morphAttributes.color!==void 0&&(ie=3);let _e,Re,ke,j;if(se){const at=Bn[se];_e=at.vertexShader,Re=at.fragmentShader}else _e=b.vertexShader,Re=b.fragmentShader,c.update(b),ke=c.getVertexShaderID(b),j=c.getFragmentShaderID(b);const Q=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,ye=F.isBatchedMesh===!0,nt=!!b.map,pt=!!b.matcap,D=!!z,le=!!b.aoMap,te=!!b.lightMap,ee=!!b.bumpMap,$=!!b.normalMap,me=!!b.displacementMap,ce=!!b.emissiveMap,ge=!!b.metalnessMap,Ye=!!b.roughnessMap,qe=b.anisotropy>0,L=b.clearcoat>0,E=b.dispersion>0,H=b.iridescence>0,Y=b.sheen>0,oe=b.transmission>0,J=qe&&!!b.anisotropyMap,Ne=L&&!!b.clearcoatMap,pe=L&&!!b.clearcoatNormalMap,Pe=L&&!!b.clearcoatRoughnessMap,Le=H&&!!b.iridescenceMap,he=H&&!!b.iridescenceThicknessMap,Te=Y&&!!b.sheenColorMap,Ge=Y&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,be=!!b.specularColorMap,Je=!!b.specularIntensityMap,U=oe&&!!b.transmissionMap,fe=oe&&!!b.thicknessMap,xe=!!b.gradientMap,Ae=!!b.alphaMap,ue=b.alphaTest>0,ne=!!b.alphaHash,De=!!b.extensions;let je=mi;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(je=s.toneMapping);const mt={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:_e,fragmentShader:Re,defines:b.defines,customVertexShaderID:ke,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ye,batchingColor:ye&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:en,alphaToCoverage:!!b.alphaToCoverage,map:nt,matcap:pt,envMap:D,envMapMode:D&&z.mapping,envMapCubeUVHeight:k,aoMap:le,lightMap:te,bumpMap:ee,normalMap:$,displacementMap:f&&me,emissiveMap:ce,normalMapObjectSpace:$&&b.normalMapType===If,normalMapTangentSpace:$&&b.normalMapType===Yl,metalnessMap:ge,roughnessMap:Ye,anisotropy:qe,anisotropyMap:J,clearcoat:L,clearcoatMap:Ne,clearcoatNormalMap:pe,clearcoatRoughnessMap:Pe,dispersion:E,iridescence:H,iridescenceMap:Le,iridescenceThicknessMap:he,sheen:Y,sheenColorMap:Te,sheenRoughnessMap:Ge,specularMap:Fe,specularColorMap:be,specularIntensityMap:Je,transmission:oe,transmissionMap:U,thicknessMap:fe,gradientMap:xe,opaque:b.transparent===!1&&b.blending===cs&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ue,alphaHash:ne,combine:b.combine,mapUv:nt&&v(b.map.channel),aoMapUv:le&&v(b.aoMap.channel),lightMapUv:te&&v(b.lightMap.channel),bumpMapUv:ee&&v(b.bumpMap.channel),normalMapUv:$&&v(b.normalMap.channel),displacementMapUv:me&&v(b.displacementMap.channel),emissiveMapUv:ce&&v(b.emissiveMap.channel),metalnessMapUv:ge&&v(b.metalnessMap.channel),roughnessMapUv:Ye&&v(b.roughnessMap.channel),anisotropyMapUv:J&&v(b.anisotropyMap.channel),clearcoatMapUv:Ne&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&v(b.sheenRoughnessMap.channel),specularMapUv:Fe&&v(b.specularMap.channel),specularColorMapUv:be&&v(b.specularColorMap.channel),specularIntensityMapUv:Je&&v(b.specularIntensityMap.channel),transmissionMapUv:U&&v(b.transmissionMap.channel),thicknessMapUv:fe&&v(b.thicknessMap.channel),alphaMapUv:Ae&&v(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($||qe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(nt||Ae),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:je,decodeVideoTexture:nt&&b.map.isVideoTexture===!0&&st.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:ce&&b.emissiveMap.isVideoTexture===!0&&st.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===Jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:De&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&b.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(S,b),x(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const S=g[b.type];let P;if(S){const N=Bn[S];P=gi.clone(N.uniforms)}else P=b.uniforms;return P}function T(b,S){let P;for(let N=0,F=h.length;N<F;N++){const G=h[N];if(G.cacheKey===S){P=G,++P.usedTimes;break}}return P===void 0&&(P=new r_(s,S,b,r),h.push(P)),P}function M(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function w(b){c.remove(b)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:M,releaseShaderCache:w,programs:h,dispose:A}}function h_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function u_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Kh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,v,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||u_),n.length>1&&n.sort(f||Kh),i.length>1&&i.sort(f||Kh)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function d_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Jh,s.set(n,[o])):i>=r.length?(o=new Jh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function f_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function p_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let m_=0;function g_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function v_(s){const e=new f_,t=p_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new Xe,o=new Xe;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,y=0,x=0,_=0,T=0,M=0,w=0;l.sort(g_);for(let b=0,S=l.length;b<S;b++){const P=l[b],N=P.color,F=P.intensity,G=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*F,u+=N.g*F,f+=N.b*F;else if(P.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(P.sh.coefficients[I],F);w++}else if(P.isDirectionalLight){const I=e.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,k=t.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=I,d++}else if(P.isSpotLight){const I=e.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(N).multiplyScalar(F),I.distance=G,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,n.spot[v]=I;const z=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,z.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[v]=z.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=V,_++}v++}else if(P.isRectAreaLight){const I=e.get(P);I.color.copy(N).multiplyScalar(F),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=I,m++}else if(P.isPointLight){const I=e.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),I.distance=P.distance,I.decay=P.decay,P.castShadow){const z=P.shadow,k=t.get(P);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,k.shadowCameraNear=z.camera.near,k.shadowCameraFar=z.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=I,g++}else if(P.isHemisphereLight){const I=e.get(P);I.skyColor.copy(P.color).multiplyScalar(F),I.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=I,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==x||A.numSpotShadows!==_||A.numSpotMaps!==T||A.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+T-M,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,A.directionalLength=d,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=x,A.numSpotShadows=_,A.numSpotMaps=T,A.numLightProbes=w,n.version=m_++)}function c(l,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Zh(s){const e=new v_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function x_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Zh(s),e.set(i,[a])):r>=o.length?(a=new Zh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`;function M_(s,e,t){let n=new tc;const i=new re,r=new re,o=new ot,a=new _m({depthPacking:Df}),c=new ym,l={},h=t.maxTextureSize,u={[ni]:Jt,[Jt]:ni,[vn]:vn},f=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:__,fragmentShader:y_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let p=this.type;this.render=function(M,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending($n),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==Jn&&this.type===Jn,G=p===Jn&&this.type!==Jn;for(let V=0,I=M.length;V<I;V++){const z=M[V],k=z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const se=k.getFrameExtents();if(i.multiply(se),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/se.x),i.x=r.x*se.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/se.y),i.y=r.y*se.y,k.mapSize.y=r.y)),k.map===null||F===!0||G===!0){const K=this.type!==Jn?{minFilter:zt,magFilter:zt}:{};k.map!==null&&k.map.dispose(),k.map=new Zt(i.x,i.y,K),k.map.texture.name=z.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const ae=k.getViewportCount();for(let K=0;K<ae;K++){const ie=k.getViewport(K);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),N.viewport(o),k.updateMatrices(z,K),n=k.getFrustum(),_(w,A,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===Jn&&y(k,A),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,S,P)};function y(M,w){const A=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Zt(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,A,f,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,A,d,v,null)}function x(M,w,A,b){let S=null;const P=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)S=P;else if(S=A.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=S.uuid,F=w.uuid;let G=l[N];G===void 0&&(G={},l[N]=G);let V=G[F];V===void 0&&(V=S.clone(),G[F]=V,w.addEventListener("dispose",T)),S=V}if(S.visible=w.visible,S.wireframe=w.wireframe,b===Jn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=s.properties.get(S);N.light=A}return S}function _(M,w,A,b,S){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Jn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const F=e.update(M),G=M.material;if(Array.isArray(G)){const V=F.groups;for(let I=0,z=V.length;I<z;I++){const k=V[I],se=G[k.materialIndex];if(se&&se.visible){const ae=x(M,se,b,S);M.onBeforeShadow(s,M,w,A,F,ae,k),s.renderBufferDirect(A,null,F,ae,M,k),M.onAfterShadow(s,M,w,A,F,ae,k)}}}else if(G.visible){const V=x(M,G,b,S);M.onBeforeShadow(s,M,w,A,F,V,null),s.renderBufferDirect(A,null,F,V,M,null),M.onAfterShadow(s,M,w,A,F,V,null)}}const N=M.children;for(let F=0,G=N.length;F<G;F++)_(N[F],w,A,b,S)}function T(M){M.target.removeEventListener("dispose",T);for(const A in l){const b=l[A],S=M.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const b_={[Ba]:za,[ka]:Ga,[Ha]:Wa,[fs]:Va,[za]:Ba,[Ga]:ka,[Wa]:Ha,[Va]:fs};function S_(s,e){function t(){let U=!1;const fe=new ot;let xe=null;const Ae=new ot(0,0,0,0);return{setMask:function(ue){xe!==ue&&!U&&(s.colorMask(ue,ue,ue,ue),xe=ue)},setLocked:function(ue){U=ue},setClear:function(ue,ne,De,je,mt){mt===!0&&(ue*=je,ne*=je,De*=je),fe.set(ue,ne,De,je),Ae.equals(fe)===!1&&(s.clearColor(ue,ne,De,je),Ae.copy(fe))},reset:function(){U=!1,xe=null,Ae.set(-1,0,0,0)}}}function n(){let U=!1,fe=!1,xe=null,Ae=null,ue=null;return{setReversed:function(ne){if(fe!==ne){const De=e.get("EXT_clip_control");ne?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),fe=ne;const je=ue;ue=null,this.setClear(je)}},getReversed:function(){return fe},setTest:function(ne){ne?Q(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(ne){xe!==ne&&!U&&(s.depthMask(ne),xe=ne)},setFunc:function(ne){if(fe&&(ne=b_[ne]),Ae!==ne){switch(ne){case Ba:s.depthFunc(s.NEVER);break;case za:s.depthFunc(s.ALWAYS);break;case ka:s.depthFunc(s.LESS);break;case fs:s.depthFunc(s.LEQUAL);break;case Ha:s.depthFunc(s.EQUAL);break;case Va:s.depthFunc(s.GEQUAL);break;case Ga:s.depthFunc(s.GREATER);break;case Wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=ne}},setLocked:function(ne){U=ne},setClear:function(ne){ue!==ne&&(fe&&(ne=1-ne),s.clearDepth(ne),ue=ne)},reset:function(){U=!1,xe=null,Ae=null,ue=null,fe=!1}}}function i(){let U=!1,fe=null,xe=null,Ae=null,ue=null,ne=null,De=null,je=null,mt=null;return{setTest:function(at){U||(at?Q(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(at){fe!==at&&!U&&(s.stencilMask(at),fe=at)},setFunc:function(at,Gn,Fn){(xe!==at||Ae!==Gn||ue!==Fn)&&(s.stencilFunc(at,Gn,Fn),xe=at,Ae=Gn,ue=Fn)},setOp:function(at,Gn,Fn){(ne!==at||De!==Gn||je!==Fn)&&(s.stencilOp(at,Gn,Fn),ne=at,De=Gn,je=Fn)},setLocked:function(at){U=at},setClear:function(at){mt!==at&&(s.clearStencil(at),mt=at)},reset:function(){U=!1,fe=null,xe=null,Ae=null,ue=null,ne=null,De=null,je=null,mt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,T=null,M=null,w=new Ue(0,0,0),A=0,b=!1,S=null,P=null,N=null,F=null,G=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(k)[1]),I=z>=1):k.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),I=z>=2);let se=null,ae={};const K=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),_e=new ot().fromArray(K),Re=new ot().fromArray(ie);function ke(U,fe,xe,Ae){const ue=new Uint8Array(4),ne=s.createTexture();s.bindTexture(U,ne),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<xe;De++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(fe,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,ue):s.texImage2D(fe+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ue);return ne}const j={};j[s.TEXTURE_2D]=ke(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(fs),ee(!1),$(Lc),Q(s.CULL_FACE),le($n);function Q(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function ve(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function we(U,fe){return u[U]!==fe?(s.bindFramebuffer(U,fe),u[U]=fe,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=fe),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=fe),!0):!1}function ye(U,fe){let xe=d,Ae=!1;if(U){xe=f.get(fe),xe===void 0&&(xe=[],f.set(fe,xe));const ue=U.textures;if(xe.length!==ue.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,De=ue.length;ne<De;ne++)xe[ne]=s.COLOR_ATTACHMENT0+ne;xe.length=ue.length,Ae=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(xe)}function nt(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const pt={[Li]:s.FUNC_ADD,[cf]:s.FUNC_SUBTRACT,[hf]:s.FUNC_REVERSE_SUBTRACT};pt[uf]=s.MIN,pt[df]=s.MAX;const D={[ff]:s.ZERO,[pf]:s.ONE,[mf]:s.SRC_COLOR,[Fa]:s.SRC_ALPHA,[Mf]:s.SRC_ALPHA_SATURATE,[_f]:s.DST_COLOR,[vf]:s.DST_ALPHA,[gf]:s.ONE_MINUS_SRC_COLOR,[Oa]:s.ONE_MINUS_SRC_ALPHA,[yf]:s.ONE_MINUS_DST_COLOR,[xf]:s.ONE_MINUS_DST_ALPHA,[bf]:s.CONSTANT_COLOR,[Sf]:s.ONE_MINUS_CONSTANT_COLOR,[Tf]:s.CONSTANT_ALPHA,[wf]:s.ONE_MINUS_CONSTANT_ALPHA};function le(U,fe,xe,Ae,ue,ne,De,je,mt,at){if(U===$n){v===!0&&(ve(s.BLEND),v=!1);return}if(v===!1&&(Q(s.BLEND),v=!0),U!==lf){if(U!==m||at!==b){if((p!==Li||_!==Li)&&(s.blendEquation(s.FUNC_ADD),p=Li,_=Li),at)switch(U){case cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ua:s.blendFunc(s.ONE,s.ONE);break;case Dc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ic:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ua:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,T=null,M=null,w.set(0,0,0),A=0,m=U,b=at}return}ue=ue||fe,ne=ne||xe,De=De||Ae,(fe!==p||ue!==_)&&(s.blendEquationSeparate(pt[fe],pt[ue]),p=fe,_=ue),(xe!==y||Ae!==x||ne!==T||De!==M)&&(s.blendFuncSeparate(D[xe],D[Ae],D[ne],D[De]),y=xe,x=Ae,T=ne,M=De),(je.equals(w)===!1||mt!==A)&&(s.blendColor(je.r,je.g,je.b,mt),w.copy(je),A=mt),m=U,b=!1}function te(U,fe){U.side===vn?ve(s.CULL_FACE):Q(s.CULL_FACE);let xe=U.side===Jt;fe&&(xe=!xe),ee(xe),U.blending===cs&&U.transparent===!1?le($n):le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ae=U.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){S!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),S=U)}function $(U){U!==of?(Q(s.CULL_FACE),U!==P&&(U===Lc?s.cullFace(s.BACK):U===af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),P=U}function me(U){U!==N&&(I&&s.lineWidth(U),N=U)}function ce(U,fe,xe){U?(Q(s.POLYGON_OFFSET_FILL),(F!==fe||G!==xe)&&(s.polygonOffset(fe,xe),F=fe,G=xe)):ve(s.POLYGON_OFFSET_FILL)}function ge(U){U?Q(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function Ye(U){U===void 0&&(U=s.TEXTURE0+V-1),se!==U&&(s.activeTexture(U),se=U)}function qe(U,fe,xe){xe===void 0&&(se===null?xe=s.TEXTURE0+V-1:xe=se);let Ae=ae[xe];Ae===void 0&&(Ae={type:void 0,texture:void 0},ae[xe]=Ae),(Ae.type!==U||Ae.texture!==fe)&&(se!==xe&&(s.activeTexture(xe),se=xe),s.bindTexture(U,fe||j[U]),Ae.type=U,Ae.texture=fe)}function L(){const U=ae[se];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(U){_e.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),_e.copy(U))}function Ge(U){Re.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Re.copy(U))}function Fe(U,fe){let xe=l.get(fe);xe===void 0&&(xe=new WeakMap,l.set(fe,xe));let Ae=xe.get(U);Ae===void 0&&(Ae=s.getUniformBlockIndex(fe,U.name),xe.set(U,Ae))}function be(U,fe){const Ae=l.get(fe).get(U);c.get(fe)!==Ae&&(s.uniformBlockBinding(fe,Ae,U.__bindingPointIndex),c.set(fe,Ae))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},se=null,ae={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,T=null,M=null,w=new Ue(0,0,0),A=0,b=!1,S=null,P=null,N=null,F=null,G=null,_e.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:ve,bindFramebuffer:we,drawBuffers:ye,useProgram:nt,setBlending:le,setMaterial:te,setFlipSided:ee,setCullFace:$,setLineWidth:me,setPolygonOffset:ce,setScissorTest:ge,activeTexture:Ye,bindTexture:qe,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:Le,texImage3D:he,updateUBOMapping:Fe,uniformBlockBinding:be,texStorage2D:pe,texStorage3D:Pe,texSubImage2D:Y,texSubImage3D:oe,compressedTexSubImage2D:J,compressedTexSubImage3D:Ne,scissor:Te,viewport:Ge,reset:Je}}function T_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return d?new OffscreenCanvas(L,E):cr("canvas")}function v(L,E,H){let Y=1;const oe=qe(L);if((oe.width>H||oe.height>H)&&(Y=H/Math.max(oe.width,oe.height)),Y<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const J=Math.floor(Y*oe.width),Ne=Math.floor(Y*oe.height);u===void 0&&(u=g(J,Ne));const pe=E?g(J,Ne):u;return pe.width=J,pe.height=Ne,pe.getContext("2d").drawImage(L,0,0,J,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+J+"x"+Ne+")."),pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,E,H,Y,oe=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=E;if(E===s.RED&&(H===s.FLOAT&&(J=s.R32F),H===s.HALF_FLOAT&&(J=s.R16F),H===s.UNSIGNED_BYTE&&(J=s.R8)),E===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.R8UI),H===s.UNSIGNED_SHORT&&(J=s.R16UI),H===s.UNSIGNED_INT&&(J=s.R32UI),H===s.BYTE&&(J=s.R8I),H===s.SHORT&&(J=s.R16I),H===s.INT&&(J=s.R32I)),E===s.RG&&(H===s.FLOAT&&(J=s.RG32F),H===s.HALF_FLOAT&&(J=s.RG16F),H===s.UNSIGNED_BYTE&&(J=s.RG8)),E===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RG8UI),H===s.UNSIGNED_SHORT&&(J=s.RG16UI),H===s.UNSIGNED_INT&&(J=s.RG32UI),H===s.BYTE&&(J=s.RG8I),H===s.SHORT&&(J=s.RG16I),H===s.INT&&(J=s.RG32I)),E===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGB8UI),H===s.UNSIGNED_SHORT&&(J=s.RGB16UI),H===s.UNSIGNED_INT&&(J=s.RGB32UI),H===s.BYTE&&(J=s.RGB8I),H===s.SHORT&&(J=s.RGB16I),H===s.INT&&(J=s.RGB32I)),E===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),H===s.UNSIGNED_INT&&(J=s.RGBA32UI),H===s.BYTE&&(J=s.RGBA8I),H===s.SHORT&&(J=s.RGBA16I),H===s.INT&&(J=s.RGBA32I)),E===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),E===s.RGBA){const Ne=oe?mo:st.getTransfer(Y);H===s.FLOAT&&(J=s.RGBA32F),H===s.HALF_FLOAT&&(J=s.RGBA16F),H===s.UNSIGNED_BYTE&&(J=Ne===ct?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(L,E){let H;return L?E===null||E===Oi||E===sr?H=s.DEPTH24_STENCIL8:E===An?H=s.DEPTH32F_STENCIL8:E===ir&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oi||E===sr?H=s.DEPTH_COMPONENT24:E===An?H=s.DEPTH_COMPONENT32F:E===ir&&(H=s.DEPTH_COMPONENT16),H}function T(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==zt&&L.minFilter!==Bt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function M(L){const E=L.target;E.removeEventListener("dispose",M),A(E),E.isVideoTexture&&h.delete(E)}function w(L){const E=L.target;E.removeEventListener("dispose",w),S(E)}function A(L){const E=n.get(L);if(E.__webglInit===void 0)return;const H=L.source,Y=f.get(H);if(Y){const oe=Y[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(L),Object.keys(Y).length===0&&f.delete(H)}n.remove(L)}function b(L){const E=n.get(L);s.deleteTexture(E.__webglTexture);const H=L.source,Y=f.get(H);delete Y[E.__cacheKey],o.memory.textures--}function S(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let oe=0;oe<E.__webglFramebuffer[Y].length;oe++)s.deleteFramebuffer(E.__webglFramebuffer[Y][oe]);else s.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)s.deleteFramebuffer(E.__webglFramebuffer[Y]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=L.textures;for(let Y=0,oe=H.length;Y<oe;Y++){const J=n.get(H[Y]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(H[Y])}n.remove(L)}let P=0;function N(){P=0}function F(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function G(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function V(L,E){const H=n.get(L);if(L.isVideoTexture&&ge(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){const Y=L.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,L,E);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+E)}function I(L,E){const H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){j(H,L,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+E)}function z(L,E){const H=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){j(H,L,E);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+E)}function k(L,E){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Q(H,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+E)}const se={[ii]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[po]:s.MIRRORED_REPEAT},ae={[zt]:s.NEAREST,[Iu]:s.NEAREST_MIPMAP_NEAREST,[qs]:s.NEAREST_MIPMAP_LINEAR,[Bt]:s.LINEAR,[ro]:s.LINEAR_MIPMAP_NEAREST,[xn]:s.LINEAR_MIPMAP_LINEAR},K={[Nf]:s.NEVER,[kf]:s.ALWAYS,[Uf]:s.LESS,[Vu]:s.LEQUAL,[Ff]:s.EQUAL,[zf]:s.GEQUAL,[Of]:s.GREATER,[Bf]:s.NOTEQUAL};function ie(L,E){if(E.type===An&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bt||E.magFilter===ro||E.magFilter===qs||E.magFilter===xn||E.minFilter===Bt||E.minFilter===ro||E.minFilter===qs||E.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,se[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,se[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,se[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ae[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ae[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,K[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zt||E.minFilter!==qs&&E.minFilter!==xn||E.type===An&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function _e(L,E){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",M));const Y=E.source;let oe=f.get(Y);oe===void 0&&(oe={},f.set(Y,oe));const J=G(E);if(J!==L.__cacheKey){oe[J]===void 0&&(oe[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[J].usedTimes++;const Ne=oe[L.__cacheKey];Ne!==void 0&&(oe[L.__cacheKey].usedTimes--,Ne.usedTimes===0&&b(E)),L.__cacheKey=J,L.__webglTexture=oe[J].texture}return H}function Re(L,E,H){return Math.floor(Math.floor(L/H)/E)}function ke(L,E,H,Y){const J=L.updateRanges;if(J.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,H,Y,E.data);else{J.sort((he,Te)=>he.start-Te.start);let Ne=0;for(let he=1;he<J.length;he++){const Te=J[Ne],Ge=J[he],Fe=Te.start+Te.count,be=Re(Ge.start,E.width,4),Je=Re(Te.start,E.width,4);Ge.start<=Fe+1&&be===Je&&Re(Ge.start+Ge.count-1,E.width,4)===be?Te.count=Math.max(Te.count,Ge.start+Ge.count-Te.start):(++Ne,J[Ne]=Ge)}J.length=Ne+1;const pe=s.getParameter(s.UNPACK_ROW_LENGTH),Pe=s.getParameter(s.UNPACK_SKIP_PIXELS),Le=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let he=0,Te=J.length;he<Te;he++){const Ge=J[he],Fe=Math.floor(Ge.start/4),be=Math.ceil(Ge.count/4),Je=Fe%E.width,U=Math.floor(Fe/E.width),fe=be,xe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,Je,U,fe,xe,H,Y,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,pe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function j(L,E,H){let Y=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=s.TEXTURE_3D);const oe=_e(L,E),J=E.source;t.bindTexture(Y,L.__webglTexture,s.TEXTURE0+H);const Ne=n.get(J);if(J.version!==Ne.__version||oe===!0){t.activeTexture(s.TEXTURE0+H);const pe=st.getPrimaries(st.workingColorSpace),Pe=E.colorSpace===fi?null:st.getPrimaries(E.colorSpace),Le=E.colorSpace===fi||pe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let he=v(E.image,!1,i.maxTextureSize);he=Ye(E,he);const Te=r.convert(E.format,E.colorSpace),Ge=r.convert(E.type);let Fe=x(E.internalFormat,Te,Ge,E.colorSpace,E.isVideoTexture);ie(Y,E);let be;const Je=E.mipmaps,U=E.isVideoTexture!==!0,fe=Ne.__version===void 0||oe===!0,xe=J.dataReady,Ae=T(E,he);if(E.isDepthTexture)Fe=_(E.format===or,E.type),fe&&(U?t.texStorage2D(s.TEXTURE_2D,1,Fe,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,Fe,he.width,he.height,0,Te,Ge,null));else if(E.isDataTexture)if(Je.length>0){U&&fe&&t.texStorage2D(s.TEXTURE_2D,Ae,Fe,Je[0].width,Je[0].height);for(let ue=0,ne=Je.length;ue<ne;ue++)be=Je[ue],U?xe&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,be.width,be.height,Te,Ge,be.data):t.texImage2D(s.TEXTURE_2D,ue,Fe,be.width,be.height,0,Te,Ge,be.data);E.generateMipmaps=!1}else U?(fe&&t.texStorage2D(s.TEXTURE_2D,Ae,Fe,he.width,he.height),xe&&ke(E,he,Te,Ge)):t.texImage2D(s.TEXTURE_2D,0,Fe,he.width,he.height,0,Te,Ge,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Fe,Je[0].width,Je[0].height,he.depth);for(let ue=0,ne=Je.length;ue<ne;ue++)if(be=Je[ue],E.format!==_n)if(Te!==null)if(U){if(xe)if(E.layerUpdates.size>0){const De=Ch(be.width,be.height,E.format,E.type);for(const je of E.layerUpdates){const mt=be.data.subarray(je*De/be.data.BYTES_PER_ELEMENT,(je+1)*De/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,je,be.width,be.height,1,Te,mt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,he.depth,Te,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,Fe,be.width,be.height,he.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,he.depth,Te,Ge,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,Fe,be.width,be.height,he.depth,0,Te,Ge,be.data)}else{U&&fe&&t.texStorage2D(s.TEXTURE_2D,Ae,Fe,Je[0].width,Je[0].height);for(let ue=0,ne=Je.length;ue<ne;ue++)be=Je[ue],E.format!==_n?Te!==null?U?xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?xe&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,be.width,be.height,Te,Ge,be.data):t.texImage2D(s.TEXTURE_2D,ue,Fe,be.width,be.height,0,Te,Ge,be.data)}else if(E.isDataArrayTexture)if(U){if(fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Fe,he.width,he.height,he.depth),xe)if(E.layerUpdates.size>0){const ue=Ch(he.width,he.height,E.format,E.type);for(const ne of E.layerUpdates){const De=he.data.subarray(ne*ue/he.data.BYTES_PER_ELEMENT,(ne+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ne,he.width,he.height,1,Te,Ge,De)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Te,Ge,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,he.width,he.height,he.depth,0,Te,Ge,he.data);else if(E.isData3DTexture)U?(fe&&t.texStorage3D(s.TEXTURE_3D,Ae,Fe,he.width,he.height,he.depth),xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Te,Ge,he.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,he.width,he.height,he.depth,0,Te,Ge,he.data);else if(E.isFramebufferTexture){if(fe)if(U)t.texStorage2D(s.TEXTURE_2D,Ae,Fe,he.width,he.height);else{let ue=he.width,ne=he.height;for(let De=0;De<Ae;De++)t.texImage2D(s.TEXTURE_2D,De,Fe,ue,ne,0,Te,Ge,null),ue>>=1,ne>>=1}}else if(Je.length>0){if(U&&fe){const ue=qe(Je[0]);t.texStorage2D(s.TEXTURE_2D,Ae,Fe,ue.width,ue.height)}for(let ue=0,ne=Je.length;ue<ne;ue++)be=Je[ue],U?xe&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Te,Ge,be):t.texImage2D(s.TEXTURE_2D,ue,Fe,Te,Ge,be);E.generateMipmaps=!1}else if(U){if(fe){const ue=qe(he);t.texStorage2D(s.TEXTURE_2D,Ae,Fe,ue.width,ue.height)}xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Ge,he)}else t.texImage2D(s.TEXTURE_2D,0,Fe,Te,Ge,he);m(E)&&p(Y),Ne.__version=J.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Q(L,E,H){if(E.image.length!==6)return;const Y=_e(L,E),oe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+H);const J=n.get(oe);if(oe.version!==J.__version||Y===!0){t.activeTexture(s.TEXTURE0+H);const Ne=st.getPrimaries(st.workingColorSpace),pe=E.colorSpace===fi?null:st.getPrimaries(E.colorSpace),Pe=E.colorSpace===fi||Ne===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let ne=0;ne<6;ne++)!Le&&!he?Te[ne]=v(E.image[ne],!0,i.maxCubemapSize):Te[ne]=he?E.image[ne].image:E.image[ne],Te[ne]=Ye(E,Te[ne]);const Ge=Te[0],Fe=r.convert(E.format,E.colorSpace),be=r.convert(E.type),Je=x(E.internalFormat,Fe,be,E.colorSpace),U=E.isVideoTexture!==!0,fe=J.__version===void 0||Y===!0,xe=oe.dataReady;let Ae=T(E,Ge);ie(s.TEXTURE_CUBE_MAP,E);let ue;if(Le){U&&fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,Je,Ge.width,Ge.height);for(let ne=0;ne<6;ne++){ue=Te[ne].mipmaps;for(let De=0;De<ue.length;De++){const je=ue[De];E.format!==_n?Fe!==null?U?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,je.width,je.height,Fe,je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,Je,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,je.width,je.height,Fe,be,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,Je,je.width,je.height,0,Fe,be,je.data)}}}else{if(ue=E.mipmaps,U&&fe){ue.length>0&&Ae++;const ne=qe(Te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,Je,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(he){U?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te[ne].width,Te[ne].height,Fe,be,Te[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Je,Te[ne].width,Te[ne].height,0,Fe,be,Te[ne].data);for(let De=0;De<ue.length;De++){const mt=ue[De].image[ne].image;U?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,mt.width,mt.height,Fe,be,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,Je,mt.width,mt.height,0,Fe,be,mt.data)}}else{U?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Fe,be,Te[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Je,Fe,be,Te[ne]);for(let De=0;De<ue.length;De++){const je=ue[De];U?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,Fe,be,je.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,Je,Fe,be,je.image[ne])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),J.__version=oe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ve(L,E,H,Y,oe,J){const Ne=r.convert(H.format,H.colorSpace),pe=r.convert(H.type),Pe=x(H.internalFormat,Ne,pe,H.colorSpace),Le=n.get(E),he=n.get(H);if(he.__renderTarget=E,!Le.__hasExternalTextures){const Te=Math.max(1,E.width>>J),Ge=Math.max(1,E.height>>J);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,J,Pe,Te,Ge,E.depth,0,Ne,pe,null):t.texImage2D(oe,J,Pe,Te,Ge,0,Ne,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ce(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,oe,he.__webglTexture,0,me(E)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,oe,he.__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(L,E,H){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const Y=E.depthTexture,oe=Y&&Y.isDepthTexture?Y.type:null,J=_(E.stencilBuffer,oe),Ne=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=me(E);ce(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,J,E.width,E.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,J,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,J,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,L)}else{const Y=E.textures;for(let oe=0;oe<Y.length;oe++){const J=Y[oe],Ne=r.convert(J.format,J.colorSpace),pe=r.convert(J.type),Pe=x(J.internalFormat,Ne,pe,J.colorSpace),Le=me(E);H&&ce(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Pe,E.width,E.height):ce(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,Pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const oe=Y.__webglTexture,J=me(E);if(E.depthTexture.format===rr)ce(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(E.depthTexture.format===or)ce(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function nt(L){const E=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const Y=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",oe)};Y.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=Y}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Y=L.texture.mipmaps;Y&&Y.length>0?ye(E.__webglFramebuffer[0],L):ye(E.__webglFramebuffer,L)}else if(H){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=s.createRenderbuffer(),we(E.__webglDepthbuffer[Y],L,!1);else{const oe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,J)}}else{const Y=L.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),we(E.__webglDepthbuffer,L,!1);else{const oe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,J)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(L,E,H){const Y=n.get(L);E!==void 0&&ve(Y.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&nt(L)}function D(L){const E=L.texture,H=n.get(L),Y=n.get(E);L.addEventListener("dispose",w);const oe=L.textures,J=L.isWebGLCubeRenderTarget===!0,Ne=oe.length>1;if(Ne||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=E.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)H.__webglFramebuffer[pe][Pe]=s.createFramebuffer()}else H.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)H.__webglFramebuffer[pe]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let pe=0,Pe=oe.length;pe<Pe;pe++){const Le=n.get(oe[pe]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&ce(L)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){const Pe=oe[pe];H.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);const Le=r.convert(Pe.format,Pe.colorSpace),he=r.convert(Pe.type),Te=x(Pe.internalFormat,Le,he,Pe.colorSpace,L.isXRRenderTarget===!0),Ge=me(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Te,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),we(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ie(s.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)ve(H.__webglFramebuffer[pe][Pe],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe);else ve(H.__webglFramebuffer[pe],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let pe=0,Pe=oe.length;pe<Pe;pe++){const Le=oe[pe],he=n.get(Le);let Te=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),ie(Te,Le),ve(H.__webglFramebuffer,L,Le,s.COLOR_ATTACHMENT0+pe,Te,0),m(Le)&&p(Te)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Y.__webglTexture),ie(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)ve(H.__webglFramebuffer[Pe],L,E,s.COLOR_ATTACHMENT0,pe,Pe);else ve(H.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,pe,0);m(E)&&p(pe),t.unbindTexture()}L.depthBuffer&&nt(L)}function le(L){const E=L.textures;for(let H=0,Y=E.length;H<Y;H++){const oe=E[H];if(m(oe)){const J=y(L),Ne=n.get(oe).__webglTexture;t.bindTexture(J,Ne),p(J),t.unbindTexture()}}}const te=[],ee=[];function $(L){if(L.samples>0){if(ce(L)===!1){const E=L.textures,H=L.width,Y=L.height;let oe=s.COLOR_BUFFER_BIT;const J=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=n.get(L),pe=E.length>1;if(pe)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Pe=L.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Le]);const he=n.get(E[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,H,Y,0,0,H,Y,oe,s.NEAREST),c===!0&&(te.length=0,ee.length=0,te.push(s.COLOR_ATTACHMENT0+Le),L.depthBuffer&&L.resolveDepthBuffer===!1&&(te.push(J),ee.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Le]);const he=n.get(E[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,he,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function me(L){return Math.min(i.maxSamples,L.samples)}function ce(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ge(L){const E=o.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function Ye(L,E){const H=L.colorSpace,Y=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==en&&H!==fi&&(st.getTransfer(H)===ct?(Y!==_n||oe!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=k,this.rebindTextures=pt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ce}function w_(s,e){function t(n,i=fi){let r;const o=st.getTransfer(i);if(n===kn)return s.UNSIGNED_BYTE;if(n===Hl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ou)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nu)return s.BYTE;if(n===Uu)return s.SHORT;if(n===ir)return s.UNSIGNED_SHORT;if(n===kl)return s.INT;if(n===Oi)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===hn)return s.HALF_FLOAT;if(n===Bu)return s.ALPHA;if(n===zu)return s.RGB;if(n===_n)return s.RGBA;if(n===rr)return s.DEPTH_COMPONENT;if(n===or)return s.DEPTH_STENCIL;if(n===Gl)return s.RED;if(n===Wl)return s.RED_INTEGER;if(n===ku)return s.RG;if(n===Xl)return s.RG_INTEGER;if(n===ql)return s.RGBA_INTEGER;if(n===oo||n===ao||n===lo||n===co)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===ja||n===Ka||n===Ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Qa||n===$a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Qa)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===xl||n===_l||n===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
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

}`;class C_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new td(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ut({vertexShader:E_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R_ extends ws{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new C_,p={},y=t.getContextAttributes();let x=null,_=null;const T=[],M=[],w=new re;let A=null;const b=new Wt;b.viewport=new ot;const S=new Wt;S.viewport=new ot;const P=[b,S],N=new km;let F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=T[j];return Q===void 0&&(Q=new ra,T[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=T[j];return Q===void 0&&(Q=new ra,T[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=T[j];return Q===void 0&&(Q=new ra,T[j]=Q),Q.getHandSpace()};function V(j){const Q=M.indexOf(j.inputSource);if(Q===-1)return;const ve=T[Q];ve!==void 0&&(ve.update(j.inputSource,j.frame,l||o),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function I(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",z);for(let j=0;j<T.length;j++){const Q=M[j];Q!==null&&(M[j]=null,T[j].disconnect(Q))}F=null,G=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(x),d=null,f=null,u=null,i=null,_=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",I),i.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,we=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=y.stencil?or:rr,we=y.stencil?sr:Oi);const nt={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(nt),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Zt(f.textureWidth,f.textureHeight,{format:_n,type:kn,depthTexture:new ed(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Zt(d.framebufferWidth,d.framebufferHeight,{format:_n,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(j){for(let Q=0;Q<j.removed.length;Q++){const ve=j.removed[Q],we=M.indexOf(ve);we>=0&&(M[we]=null,T[we].disconnect(ve))}for(let Q=0;Q<j.added.length;Q++){const ve=j.added[Q];let we=M.indexOf(ve);if(we===-1){for(let nt=0;nt<T.length;nt++)if(nt>=M.length){M.push(ve),we=nt;break}else if(M[nt]===null){M[nt]=ve,we=nt;break}if(we===-1)break}const ye=T[we];ye&&ye.connect(ve)}}const k=new R,se=new R;function ae(j,Q,ve){k.setFromMatrixPosition(Q.matrixWorld),se.setFromMatrixPosition(ve.matrixWorld);const we=k.distanceTo(se),ye=Q.projectionMatrix.elements,nt=ve.projectionMatrix.elements,pt=ye[14]/(ye[10]-1),D=ye[14]/(ye[10]+1),le=(ye[9]+1)/ye[5],te=(ye[9]-1)/ye[5],ee=(ye[8]-1)/ye[0],$=(nt[8]+1)/nt[0],me=pt*ee,ce=pt*$,ge=we/(-ee+$),Ye=ge*-ee;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ye),j.translateZ(ge),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const qe=pt+ge,L=D+ge,E=me-Ye,H=ce+(we-Ye),Y=le*D/L*qe,oe=te*D/L*qe;j.projectionMatrix.makePerspective(E,H,Y,oe,qe,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function K(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Q=j.near,ve=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),N.near=S.near=b.near=Q,N.far=S.far=b.far=ve,(F!==N.near||G!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,G=N.far),N.layers.mask=j.layers.mask|6,b.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;const we=j.parent,ye=N.cameras;K(N,we);for(let nt=0;nt<ye.length;nt++)K(ye[nt],we);ye.length===2?ae(N,b,S):N.projectionMatrix.copy(b.projectionMatrix),ie(j,N,we)};function ie(j,Q,ve){ve===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=gs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return p[j]};let _e=null;function Re(j,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let we=!1;ve.length!==N.cameras.length&&(N.cameras.length=0,we=!0);for(let D=0;D<ve.length;D++){const le=ve[D];let te=null;if(d!==null)te=d.getViewport(le);else{const $=u.getViewSubImage(f,le);te=$.viewport,D===0&&(e.setRenderTargetTextures(_,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(_))}let ee=P[D];ee===void 0&&(ee=new Wt,ee.layers.enable(D),ee.viewport=new ot,P[D]=ee),ee.matrix.fromArray(le.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(le.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(te.x,te.y,te.width,te.height),D===0&&(N.matrix.copy(ee.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),we===!0&&N.cameras.push(ee)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const D=u.getDepthInformation(ve[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<ve.length;D++){const le=ve[D].camera;if(le){let te=p[le];te||(te=new td,p[le]=te);const ee=u.getCameraImage(le);te.sourceTexture=ee}}}}for(let ve=0;ve<T.length;ve++){const we=M[ve],ye=T[ve];we!==null&&ye!==void 0&&ye.update(we,Q,l||o)}_e&&_e(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ke=new gd;ke.setAnimationLoop(Re),this.setAnimationLoop=function(j){_e=j},this.dispose=function(){}}}const Ei=new un,P_=new Xe;function L_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ju(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,Ei.copy(_),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(Ei)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function D_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function l(y,x){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(y,T);const M=e.render.frame;r[y.id]!==M&&(f(y),r[y.id]=M)}function h(y){const x=u();y.__bindingPointIndex=x;const _=s.createBuffer(),T=y.__size,M=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],_=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let M=0,w=_.length;M<w;M++){const A=Array.isArray(_[M])?_[M]:[_[M]];for(let b=0,S=A.length;b<S;b++){const P=A[b];if(d(P,M,b,T)===!0){const N=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let V=0;V<F.length;V++){const I=F[V],z=v(I);typeof I=="number"||typeof I=="boolean"?(P.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,N+G,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=0,P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=0,P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=0):(I.toArray(P.__data,G),G+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,_,T){const M=y.value,w=x+"_"+_;if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:T[w]=M.clone(),!0;{const A=T[w];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return T[w]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function g(y){const x=y.uniforms;let _=0;const T=16;for(let w=0,A=x.length;w<A;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,P=b.length;S<P;S++){const N=b[S],F=Array.isArray(N.value)?N.value:[N.value];for(let G=0,V=F.length;G<V;G++){const I=F[G],z=v(I),k=_%T,se=k%z.boundary,ae=k+se;_+=se,ae!==0&&T-ae<z.storage&&(_+=T-ae),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=z.storage}}}const M=_%T;return M>0&&(_+=T-M),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class I_{constructor(e={}){const{canvas:t=ip(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=yt;let M=0,w=0,A=null,b=-1,S=null;const P=new ot,N=new ot;let F=null;const G=new Ue(0);let V=0,I=t.width,z=t.height,k=1,se=null,ae=null;const K=new ot(0,0,I,z),ie=new ot(0,0,I,z);let _e=!1;const Re=new tc;let ke=!1,j=!1;const Q=new Xe,ve=new R,we=new ot,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function pt(){return A===null?k:1}let D=n;function le(C,O){return t.getContext(C,O)}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ol}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ue,!1),D===null){const O="webgl2";if(D=le(O,C),D===null)throw le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let te,ee,$,me,ce,ge,Ye,qe,L,E,H,Y,oe,J,Ne,pe,Pe,Le,he,Te,Ge,Fe,be,Je;function U(){te=new Gv(D),te.init(),Fe=new w_(D,te),ee=new Fv(D,te,e,Fe),$=new S_(D,te),ee.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),me=new qv(D),ce=new h_,ge=new T_(D,te,$,ce,ee,Fe,me),Ye=new Bv(_),qe=new Vv(_),L=new Qm(D),be=new Nv(D,L),E=new Wv(D,L,me,be),H=new jv(D,E,L,me),he=new Yv(D,ee,ge),pe=new Ov(ce),Y=new c_(_,Ye,qe,te,ee,be,pe),oe=new L_(_,ce),J=new d_,Ne=new x_(te),Le=new Iv(_,Ye,qe,$,H,d,c),Pe=new M_(_,H,ee),Je=new D_(D,me,ee,$),Te=new Uv(D,te,me),Ge=new Xv(D,te,me),me.programs=Y.programs,_.capabilities=ee,_.extensions=te,_.properties=ce,_.renderLists=J,_.shadowMap=Pe,_.state=$,_.info=me}U();const fe=new R_(_,D);this.xr=fe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(I,z,!1))},this.getSize=function(C){return C.set(I,z)},this.setSize=function(C,O,W=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,z=O,t.width=Math.floor(C*k),t.height=Math.floor(O*k),W===!0&&(t.style.width=C+"px",t.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(I*k,z*k).floor()},this.setDrawingBufferSize=function(C,O,W){I=C,z=O,k=W,t.width=Math.floor(C*W),t.height=Math.floor(O*W),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,O,W,q){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,O,W,q),$.viewport(P.copy(K).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,O,W,q){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,O,W,q),$.scissor(N.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(C){$.setScissorTest(_e=C)},this.setOpaqueSort=function(C){se=C},this.setTransparentSort=function(C){ae=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,O=!0,W=!0){let q=0;if(C){let B=!1;if(A!==null){const de=A.texture.format;B=de===ql||de===Xl||de===Wl}if(B){const de=A.texture.type,Se=de===kn||de===Oi||de===ir||de===sr||de===Hl||de===Vl,Ce=Le.getClearColor(),Ee=Le.getClearAlpha(),Ve=Ce.r,We=Ce.g,Be=Ce.b;Se?(g[0]=Ve,g[1]=We,g[2]=Be,g[3]=Ee,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Ve,v[1]=We,v[2]=Be,v[3]=Ee,D.clearBufferiv(D.COLOR,0,v))}else q|=D.COLOR_BUFFER_BIT}O&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Le.dispose(),J.dispose(),Ne.dispose(),ce.dispose(),Ye.dispose(),qe.dispose(),H.dispose(),be.dispose(),Je.dispose(),Y.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Fn),fe.removeEventListener("sessionend",_c),_i.stop()};function xe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=me.autoReset,O=Pe.enabled,W=Pe.autoUpdate,q=Pe.needsUpdate,B=Pe.type;U(),me.autoReset=C,Pe.enabled=O,Pe.autoUpdate=W,Pe.needsUpdate=q,Pe.type=B}function ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ne(C){const O=C.target;O.removeEventListener("dispose",ne),De(O)}function De(C){je(C),ce.remove(C)}function je(C){const O=ce.get(C).programs;O!==void 0&&(O.forEach(function(W){Y.releaseProgram(W)}),C.isShaderMaterial&&Y.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,W,q,B,de){O===null&&(O=ye);const Se=B.isMesh&&B.matrixWorld.determinant()<0,Ce=Bd(C,O,W,q,B);$.setMaterial(q,Se);let Ee=W.index,Ve=1;if(q.wireframe===!0){if(Ee=E.getWireframeAttribute(W),Ee===void 0)return;Ve=2}const We=W.drawRange,Be=W.attributes.position;let it=We.start*Ve,dt=(We.start+We.count)*Ve;de!==null&&(it=Math.max(it,de.start*Ve),dt=Math.min(dt,(de.start+de.count)*Ve)),Ee!==null?(it=Math.max(it,0),dt=Math.min(dt,Ee.count)):Be!=null&&(it=Math.max(it,0),dt=Math.min(dt,Be.count));const Tt=dt-it;if(Tt<0||Tt===1/0)return;be.setup(B,q,Ce,W,Ee);let gt,ft=Te;if(Ee!==null&&(gt=L.get(Ee),ft=Ge,ft.setIndex(gt)),B.isMesh)q.wireframe===!0?($.setLineWidth(q.wireframeLinewidth*pt()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(B.isLine){let He=q.linewidth;He===void 0&&(He=1),$.setLineWidth(He*pt()),B.isLineSegments?ft.setMode(D.LINES):B.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else B.isPoints?ft.setMode(D.POINTS):B.isSprite&&ft.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const He=B._multiDrawStarts,Mt=B._multiDrawCounts,rt=B._multiDrawCount,on=Ee?L.get(Ee).bytesPerElement:1,Vi=ce.get(q).currentProgram.getUniforms();for(let an=0;an<rt;an++)Vi.setValue(D,"_gl_DrawID",an),ft.render(He[an]/on,Mt[an])}else if(B.isInstancedMesh)ft.renderInstances(it,Tt,B.count);else if(W.isInstancedBufferGeometry){const He=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Mt=Math.min(W.instanceCount,He);ft.renderInstances(it,Tt,Mt)}else ft.render(it,Tt)};function mt(C,O,W){C.transparent===!0&&C.side===vn&&C.forceSinglePass===!1?(C.side=Jt,C.needsUpdate=!0,Mr(C,O,W),C.side=ni,C.needsUpdate=!0,Mr(C,O,W),C.side=vn):Mr(C,O,W)}this.compile=function(C,O,W=null){W===null&&(W=C),p=Ne.get(W),p.init(O),x.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),C!==W&&C.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const q=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Ce=de[Se];mt(Ce,W,B),q.add(Ce)}else mt(de,W,B),q.add(de)}),p=x.pop(),q},this.compileAsync=function(C,O,W=null){const q=this.compile(C,O,W);return new Promise(B=>{function de(){if(q.forEach(function(Se){ce.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){B(C);return}setTimeout(de,10)}te.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let at=null;function Gn(C){at&&at(C)}function Fn(){_i.stop()}function _c(){_i.start()}const _i=new gd;_i.setAnimationLoop(Gn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(C){at=C,fe.setAnimationLoop(C),C===null?_i.stop():_i.start()},fe.addEventListener("sessionstart",Fn),fe.addEventListener("sessionend",_c),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(O),O=fe.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,O,A),p=Ne.get(C,x.length),p.init(O),x.push(p),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Re.setFromProjectionMatrix(Q,zn,O.reversedDepth),j=this.localClippingEnabled,ke=pe.init(this.clippingPlanes,j),m=J.get(C,y.length),m.init(),y.push(m),fe.enabled===!0&&fe.isPresenting===!0){const de=_.xr.getDepthSensingMesh();de!==null&&Uo(de,O,-1/0,_.sortObjects)}Uo(C,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(se,ae),nt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,nt&&Le.addToRenderList(m,C),this.info.render.frame++,ke===!0&&pe.beginShadows();const W=p.state.shadowsArray;Pe.render(W,C,O),ke===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){const de=O.cameras;if(B.length>0)for(let Se=0,Ce=de.length;Se<Ce;Se++){const Ee=de[Se];Mc(q,B,C,Ee)}nt&&Le.render(C);for(let Se=0,Ce=de.length;Se<Ce;Se++){const Ee=de[Se];yc(m,C,Ee,Ee.viewport)}}else B.length>0&&Mc(q,B,C,O),nt&&Le.render(C),yc(m,C,O);A!==null&&w===0&&(ge.updateMultisampleRenderTarget(A),ge.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,O),be.resetDefaultState(),b=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],ke===!0&&pe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Uo(C,O,W,q){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Re.intersectsSprite(C)){q&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);const Se=H.update(C),Ce=C.material;Ce.visible&&m.push(C,Se,Ce,W,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Re.intersectsObject(C))){const Se=H.update(C),Ce=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),we.copy(Se.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(Q)),Array.isArray(Ce)){const Ee=Se.groups;for(let Ve=0,We=Ee.length;Ve<We;Ve++){const Be=Ee[Ve],it=Ce[Be.materialIndex];it&&it.visible&&m.push(C,Se,it,W,we.z,Be)}}else Ce.visible&&m.push(C,Se,Ce,W,we.z,null)}}const de=C.children;for(let Se=0,Ce=de.length;Se<Ce;Se++)Uo(de[Se],O,W,q)}function yc(C,O,W,q){const B=C.opaque,de=C.transmissive,Se=C.transparent;p.setupLightsView(W),ke===!0&&pe.setGlobalState(_.clippingPlanes,W),q&&$.viewport(P.copy(q)),B.length>0&&yr(B,O,W),de.length>0&&yr(de,O,W),Se.length>0&&yr(Se,O,W),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Mc(C,O,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Zt(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?hn:kn,minFilter:xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const de=p.state.transmissionRenderTarget[q.id],Se=q.viewport||P;de.setSize(Se.z*_.transmissionResolutionScale,Se.w*_.transmissionResolutionScale);const Ce=_.getRenderTarget(),Ee=_.getActiveCubeFace(),Ve=_.getActiveMipmapLevel();_.setRenderTarget(de),_.getClearColor(G),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),nt&&Le.render(W);const We=_.toneMapping;_.toneMapping=mi;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ke===!0&&pe.setGlobalState(_.clippingPlanes,q),yr(C,W,q),ge.updateMultisampleRenderTarget(de),ge.updateRenderTargetMipmap(de),te.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let dt=0,Tt=O.length;dt<Tt;dt++){const gt=O[dt],ft=gt.object,He=gt.geometry,Mt=gt.material,rt=gt.group;if(Mt.side===vn&&ft.layers.test(q.layers)){const on=Mt.side;Mt.side=Jt,Mt.needsUpdate=!0,bc(ft,W,q,He,Mt,rt),Mt.side=on,Mt.needsUpdate=!0,it=!0}}it===!0&&(ge.updateMultisampleRenderTarget(de),ge.updateRenderTargetMipmap(de))}_.setRenderTarget(Ce,Ee,Ve),_.setClearColor(G,V),Be!==void 0&&(q.viewport=Be),_.toneMapping=We}function yr(C,O,W){const q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,de=C.length;B<de;B++){const Se=C[B],Ce=Se.object,Ee=Se.geometry,Ve=Se.group;let We=Se.material;We.allowOverride===!0&&q!==null&&(We=q),Ce.layers.test(W.layers)&&bc(Ce,O,W,Ee,We,Ve)}}function bc(C,O,W,q,B,de){C.onBeforeRender(_,O,W,q,B,de),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(_,O,W,q,C,de),B.transparent===!0&&B.side===vn&&B.forceSinglePass===!1?(B.side=Jt,B.needsUpdate=!0,_.renderBufferDirect(W,O,q,B,C,de),B.side=ni,B.needsUpdate=!0,_.renderBufferDirect(W,O,q,B,C,de),B.side=vn):_.renderBufferDirect(W,O,q,B,C,de),C.onAfterRender(_,O,W,q,B,de)}function Mr(C,O,W){O.isScene!==!0&&(O=ye);const q=ce.get(C),B=p.state.lights,de=p.state.shadowsArray,Se=B.state.version,Ce=Y.getParameters(C,B.state,de,O,W),Ee=Y.getProgramCacheKey(Ce);let Ve=q.programs;q.environment=C.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(C.isMeshStandardMaterial?qe:Ye).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",ne),Ve=new Map,q.programs=Ve);let We=Ve.get(Ee);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Se)return Tc(C,Ce),We}else Ce.uniforms=Y.getUniforms(C),C.onBeforeCompile(Ce,_),We=Y.acquireProgram(Ce,Ee),Ve.set(Ee,We),q.uniforms=Ce.uniforms;const Be=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=pe.uniform),Tc(C,Ce),q.needsLights=kd(C),q.lightsStateVersion=Se,q.needsLights&&(Be.ambientLightColor.value=B.state.ambient,Be.lightProbe.value=B.state.probe,Be.directionalLights.value=B.state.directional,Be.directionalLightShadows.value=B.state.directionalShadow,Be.spotLights.value=B.state.spot,Be.spotLightShadows.value=B.state.spotShadow,Be.rectAreaLights.value=B.state.rectArea,Be.ltc_1.value=B.state.rectAreaLTC1,Be.ltc_2.value=B.state.rectAreaLTC2,Be.pointLights.value=B.state.point,Be.pointLightShadows.value=B.state.pointShadow,Be.hemisphereLights.value=B.state.hemi,Be.directionalShadowMap.value=B.state.directionalShadowMap,Be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Be.spotShadowMap.value=B.state.spotShadowMap,Be.spotLightMatrix.value=B.state.spotLightMatrix,Be.spotLightMap.value=B.state.spotLightMap,Be.pointShadowMap.value=B.state.pointShadowMap,Be.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function Sc(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=ho.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function Tc(C,O){const W=ce.get(C);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Bd(C,O,W,q,B){O.isScene!==!0&&(O=ye),ge.resetTextureUnits();const de=O.fog,Se=q.isMeshStandardMaterial?O.environment:null,Ce=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:en,Ee=(q.isMeshStandardMaterial?qe:Ye).get(q.envMap||Se),Ve=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,dt=!!W.morphAttributes.color;let Tt=mi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=_.toneMapping);const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=gt!==void 0?gt.length:0,He=ce.get(q),Mt=p.state.lights;if(ke===!0&&(j===!0||C!==S)){const Yt=C===S&&q.id===b;pe.setState(q,C,Yt)}let rt=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Mt.state.version||He.outputColorSpace!==Ce||B.isBatchedMesh&&He.batching===!1||!B.isBatchedMesh&&He.batching===!0||B.isBatchedMesh&&He.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&He.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&He.instancing===!1||!B.isInstancedMesh&&He.instancing===!0||B.isSkinnedMesh&&He.skinning===!1||!B.isSkinnedMesh&&He.skinning===!0||B.isInstancedMesh&&He.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&He.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&He.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&He.instancingMorph===!1&&B.morphTexture!==null||He.envMap!==Ee||q.fog===!0&&He.fog!==de||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==pe.numPlanes||He.numIntersection!==pe.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==We||He.morphTargets!==Be||He.morphNormals!==it||He.morphColors!==dt||He.toneMapping!==Tt||He.morphTargetsCount!==ft)&&(rt=!0):(rt=!0,He.__version=q.version);let on=He.currentProgram;rt===!0&&(on=Mr(q,O,B));let Vi=!1,an=!1,Ds=!1;const bt=on.getUniforms(),dn=He.uniforms;if($.useProgram(on.program)&&(Vi=!0,an=!0,Ds=!0),q.id!==b&&(b=q.id,an=!0),Vi||S!==C){$.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),bt.setValue(D,"projectionMatrix",C.projectionMatrix),bt.setValue(D,"viewMatrix",C.matrixWorldInverse);const tn=bt.map.cameraPosition;tn!==void 0&&tn.setValue(D,ve.setFromMatrixPosition(C.matrixWorld)),ee.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&bt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,an=!0,Ds=!0)}if(B.isSkinnedMesh){bt.setOptional(D,B,"bindMatrix"),bt.setOptional(D,B,"bindMatrixInverse");const Yt=B.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),bt.setValue(D,"boneTexture",Yt.boneTexture,ge))}B.isBatchedMesh&&(bt.setOptional(D,B,"batchingTexture"),bt.setValue(D,"batchingTexture",B._matricesTexture,ge),bt.setOptional(D,B,"batchingIdTexture"),bt.setValue(D,"batchingIdTexture",B._indirectTexture,ge),bt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&bt.setValue(D,"batchingColorTexture",B._colorsTexture,ge));const fn=W.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&he.update(B,W,on),(an||He.receiveShadow!==B.receiveShadow)&&(He.receiveShadow=B.receiveShadow,bt.setValue(D,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(dn.envMap.value=Ee,dn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(dn.envMapIntensity.value=O.environmentIntensity),an&&(bt.setValue(D,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&zd(dn,Ds),de&&q.fog===!0&&oe.refreshFogUniforms(dn,de),oe.refreshMaterialUniforms(dn,q,k,z,p.state.transmissionRenderTarget[C.id]),ho.upload(D,Sc(He),dn,ge)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ho.upload(D,Sc(He),dn,ge),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&bt.setValue(D,"center",B.center),bt.setValue(D,"modelViewMatrix",B.modelViewMatrix),bt.setValue(D,"normalMatrix",B.normalMatrix),bt.setValue(D,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Yt=q.uniformsGroups;for(let tn=0,Fo=Yt.length;tn<Fo;tn++){const yi=Yt[tn];Je.update(yi,on),Je.bind(yi,on)}}return on}function zd(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function kd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,O,W){const q=ce.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ce.get(C.texture).__webglTexture=O,ce.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,O){const W=ce.get(C);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Hd=D.createFramebuffer();this.setRenderTarget=function(C,O=0,W=0){A=C,M=O,w=W;let q=!0,B=null,de=!1,Se=!1;if(C){const Ee=ce.get(C);if(Ee.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Ee.__webglFramebuffer===void 0)ge.setupRenderTarget(C);else if(Ee.__hasExternalTextures)ge.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Be=C.depthTexture;if(Ee.__boundDepthTexture!==Be){if(Be!==null&&ce.has(Be)&&(C.width!==Be.image.width||C.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Se=!0);const We=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[O])?B=We[O][W]:B=We[O],de=!0):C.samples>0&&ge.useMultisampledRTT(C)===!1?B=ce.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?B=We[W]:B=We,P.copy(C.viewport),N.copy(C.scissor),F=C.scissorTest}else P.copy(K).multiplyScalar(k).floor(),N.copy(ie).multiplyScalar(k).floor(),F=_e;if(W!==0&&(B=Hd),$.bindFramebuffer(D.FRAMEBUFFER,B)&&q&&$.drawBuffers(C,B),$.viewport(P),$.scissor(N),$.setScissorTest(F),de){const Ee=ce.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,W)}else if(Se){const Ee=O;for(let Ve=0;Ve<C.textures.length;Ve++){const We=ce.get(C.textures[Ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ve,We.__webglTexture,W,Ee)}}else if(C!==null&&W!==0){const Ee=ce.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ee.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(C,O,W,q,B,de,Se,Ce=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){$.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Ve=C.textures[Ce],We=Ve.format,Be=Ve.type;if(!ee.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-q&&W>=0&&W<=C.height-B&&(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(O,W,q,B,Fe.convert(We),Fe.convert(Be),de))}finally{const Ve=A!==null?ce.get(A).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,O,W,q,B,de,Se,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(O>=0&&O<=C.width-q&&W>=0&&W<=C.height-B){$.bindFramebuffer(D.FRAMEBUFFER,Ee);const Ve=C.textures[Ce],We=Ve.format,Be=Ve.type;if(!ee.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,it),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(O,W,q,B,Fe.convert(We),Fe.convert(Be),0);const dt=A!==null?ce.get(A).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,dt);const Tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sp(D,Tt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,it),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(it),D.deleteSync(Tt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,O=null,W=0){const q=Math.pow(2,-W),B=Math.floor(C.image.width*q),de=Math.floor(C.image.height*q),Se=O!==null?O.x:0,Ce=O!==null?O.y:0;ge.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Se,Ce,B,de),$.unbindTexture()};const Vd=D.createFramebuffer(),Gd=D.createFramebuffer();this.copyTextureToTexture=function(C,O,W=null,q=null,B=0,de=null){de===null&&(B!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=B,B=0):de=0);let Se,Ce,Ee,Ve,We,Be,it,dt,Tt;const gt=C.isCompressedTexture?C.mipmaps[de]:C.image;if(W!==null)Se=W.max.x-W.min.x,Ce=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Ve=W.min.x,We=W.min.y,Be=W.isBox3?W.min.z:0;else{const fn=Math.pow(2,-B);Se=Math.floor(gt.width*fn),Ce=Math.floor(gt.height*fn),C.isDataArrayTexture?Ee=gt.depth:C.isData3DTexture?Ee=Math.floor(gt.depth*fn):Ee=1,Ve=0,We=0,Be=0}q!==null?(it=q.x,dt=q.y,Tt=q.z):(it=0,dt=0,Tt=0);const ft=Fe.convert(O.format),He=Fe.convert(O.type);let Mt;O.isData3DTexture?(ge.setTexture3D(O,0),Mt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ge.setTexture2DArray(O,0),Mt=D.TEXTURE_2D_ARRAY):(ge.setTexture2D(O,0),Mt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const rt=D.getParameter(D.UNPACK_ROW_LENGTH),on=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Vi=D.getParameter(D.UNPACK_SKIP_PIXELS),an=D.getParameter(D.UNPACK_SKIP_ROWS),Ds=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,We),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const bt=C.isDataArrayTexture||C.isData3DTexture,dn=O.isDataArrayTexture||O.isData3DTexture;if(C.isDepthTexture){const fn=ce.get(C),Yt=ce.get(O),tn=ce.get(fn.__renderTarget),Fo=ce.get(Yt.__renderTarget);$.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fo.__webglFramebuffer);for(let yi=0;yi<Ee;yi++)bt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ce.get(C).__webglTexture,B,Be+yi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ce.get(O).__webglTexture,de,Tt+yi)),D.blitFramebuffer(Ve,We,Se,Ce,it,dt,Se,Ce,D.DEPTH_BUFFER_BIT,D.NEAREST);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||C.isRenderTargetTexture||ce.has(C)){const fn=ce.get(C),Yt=ce.get(O);$.bindFramebuffer(D.READ_FRAMEBUFFER,Vd),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gd);for(let tn=0;tn<Ee;tn++)bt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fn.__webglTexture,B,Be+tn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fn.__webglTexture,B),dn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yt.__webglTexture,de,Tt+tn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yt.__webglTexture,de),B!==0?D.blitFramebuffer(Ve,We,Se,Ce,it,dt,Se,Ce,D.COLOR_BUFFER_BIT,D.NEAREST):dn?D.copyTexSubImage3D(Mt,de,it,dt,Tt+tn,Ve,We,Se,Ce):D.copyTexSubImage2D(Mt,de,it,dt,Ve,We,Se,Ce);$.bindFramebuffer(D.READ_FRAMEBUFFER,null),$.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else dn?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Mt,de,it,dt,Tt,Se,Ce,Ee,ft,He,gt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Mt,de,it,dt,Tt,Se,Ce,Ee,ft,gt.data):D.texSubImage3D(Mt,de,it,dt,Tt,Se,Ce,Ee,ft,He,gt):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,it,dt,Se,Ce,ft,He,gt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,it,dt,gt.width,gt.height,ft,gt.data):D.texSubImage2D(D.TEXTURE_2D,de,it,dt,Se,Ce,ft,He,gt);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,on),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vi),D.pixelStorei(D.UNPACK_SKIP_ROWS,an),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ds),de===0&&O.generateMipmaps&&D.generateMipmap(Mt),$.unbindTexture()},this.initRenderTarget=function(C){ce.get(C).__webglFramebuffer===void 0&&ge.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ge.setTextureCube(C,0):C.isData3DTexture?ge.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ge.setTexture2DArray(C,0):ge.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){M=0,w=0,A=null,$.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class N_ extends Ql{constructor(){super();const e=new rn;e.deleteAttribute("uv");const t=new vt({side:Jt}),n=new vt,i=new er(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Oe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Zs(e,n,6),a=new xt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new Oe(e,rs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Oe(e,rs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new Oe(e,rs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Oe(e,rs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new Oe(e,rs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new Oe(e,rs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function rs(s){return new xm({color:0,emissive:16777215,emissiveIntensity:s})}function U_(s){const e=new Ql;e.background=new Ue(2435115);const t=document.createElement("canvas");t.width=t.height=64;const n=t.getContext("2d"),i=n.createImageData(64,64);for(let l=0;l<64;l++)for(let h=0;h<64;h++){const u=(h-31.5)/31.5,f=(l-31.5)/31.5,d=125+130*Math.exp(-u*u*.9-f*f*1.7);i.data.set([d,d,d,255],(l*64+h)*4)}n.putImageData(i,0,0);const r=new vi(t);r.colorSpace=yt;const o=(l,h,u,f,d,g=!1)=>{const v=new Rt({color:new Ue(u).multiplyScalar(f),map:g?r:null,side:vn,toneMapped:!1}),m=new Oe(new ki(l,h),v);m.position.copy(d),m.lookAt(0,0,0),e.add(m)};o(6.4,3.2,15922943,3.4,new R(-.5,2.2,-3.8),!0),o(4.8,2.5,14937599,1.6,new R(1,4,1.8),!0),o(1.2,2.2,16757347,1.35,new R(-4.2,1.1,.8)),o(5.4,2.8,2826522,.85,new R(0,-2.2,1.5)),o(5.4,2,1513756,1,new R(.2,.2,4));for(const l of[-2.3,2.6])o(.24,4,1053720,1,new R(l,1.3,-3.7));const a=new yo(s),c=a.fromScene(e,.025,.1,20);return a.dispose(),r.dispose(),e.traverse(l=>{l instanceof Oe&&(l.geometry.dispose(),l.material.dispose())}),c}const Hs=new R;function mn(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Hs.copy(e),Hs[n]=0,Hs.normalize();const l=.5*o/(o+a),h=1-Hs.angleTo(s)/c;return Math.sign(Hs[t])===1?h*l:a/(o+a)+l+l*(1-h)}class pc extends rn{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new R,l=new R,h=new R(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,v=new R,m=.5/o;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/g)){case 0:v.set(1,0,0),d[y+0]=mn(v,l,"z","y",r,n),d[y+1]=1-mn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),d[y+0]=1-mn(v,l,"z","y",r,n),d[y+1]=1-mn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),d[y+0]=1-mn(v,l,"x","z",r,e),d[y+1]=mn(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),d[y+0]=1-mn(v,l,"x","z",r,e),d[y+1]=1-mn(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),d[y+0]=1-mn(v,l,"x","y",r,e),d[y+1]=1-mn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),d[y+0]=mn(v,l,"x","y",r,e),d[y+1]=1-mn(v,l,"y","x",r,t);break}}static fromJSON(e){return new pc(e.width,e.height,e.depth,e.segments,e.radius)}}const Vs=wt.clamp;function bs(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}class F_{constructor(e){Z(this,"cache",new Map);this.anisotropy=e}get(e,t=1){const n=`${e}:${t}`,i=this.cache.get(n);if(i)return i;const r=512,o=bs(t),a=document.createElement("canvas");a.width=a.height=r;const c=a.getContext("2d"),l=c.createImageData(r,r),h=new Uint8Array(r*r*4),u=new Uint8Array(r*r*4),f=Array.from({length:3},()=>({x:o(),y:o(),radius:.02+o()*.016})),d=Float32Array.from({length:289},()=>o()-.5);for(let x=0;x<r;x++)for(let _=0;_<r;_++){const T=_/r,M=x/r,w=o()-.5,A=(x*r+_)*4;let b=0,S=.5,P=100,N=100,F=100,G=.85;if(e==="oak"||e==="endgrain"){let z=M;for(const ae of f){const K=(T-ae.x)*.6,ie=M-ae.y;z+=Math.exp(-(K*K+ie*ie)/.01)*Math.sin(ie*30)*.028}const k=e==="endgrain"?Math.hypot((T-.47)*1.2,M-.53)*210:z*370+Math.sin(T*16)*1.5+Math.sin(T*47+M*20)*.5,se=Math.sin(k)*.035+Math.sin(k*3.8)*.012;b=se+Math.sin(M*29+t)*.024+w*.028;for(const ae of f){const K=Math.hypot((T-ae.x)*.52,M-ae.y);b-=Math.exp(-K*K/(ae.radius*ae.radius))*.3}P=83+b*130,N=53+b*105,F=32+b*75,S=.53+se*.65+w*.035,G=.83+Math.abs(se)*1.2}else if(e==="steel"||e==="iron"){const z=Math.sin(T*61+Math.sin(M*83)*3)*Math.sin(M*79+Math.cos(T*73)*4);b=w*.075+z*.012;const k=e==="steel"?148:46;P=k+b*95,N=k+5+b*105,F=k+8+b*110,S=.5+(e==="iron"?z*.045+w*.16:w*.025),G=e==="steel"?.52+w*.08:.83+z*.05}else if(e==="stone"){const z=T*16,k=M*16,se=Math.floor(z),ae=Math.floor(k),K=z-se,ie=k-ae,_e=K*K*(3-2*K),Re=ie*ie*(3-2*ie),ke=wt.lerp(d[ae*17+se],d[ae*17+se+1],_e),j=wt.lerp(d[(ae+1)*17+se],d[(ae+1)*17+se+1],_e);b=w*.1+wt.lerp(ke,j,Re)*.14,P=107+b*100,N=90+b*90,F=73+b*75,S=.5+b*.6,G=.93}else b=Math.sin(T*140)*Math.sin(M*180)*.026+w*.08,P=64+b*60,N=33+b*55,F=23+b*45,S=.5+b,G=.88;l.data.set([Vs(P,0,255),Vs(N,0,255),Vs(F,0,255),255],A);const V=Vs(S*255,0,255),I=Vs(G*255,0,255);h.set([V,V,V,255],A),u.set([I,I,I,255],A)}if(c.putImageData(l,0,0),e==="steel"||e==="iron")for(let x=0;x<(e==="steel"?150:45);x++){const _=o()*r,T=o()*r;c.strokeStyle=`rgba(${x%3?"225,227,218":"16,23,28"},${.03+o()*.13})`,c.lineWidth=.35+o()*.6,c.beginPath(),c.moveTo(_,T),c.lineTo(_+6+o()*80,T+(o()-.5)*15),c.stroke()}const g=new vi(a);g.colorSpace=yt;const v=new Bi(h,r,r),m=new Bi(u,r,r);for(const x of[g,v,m])x.wrapS=x.wrapT=ii,x.anisotropy=this.anisotropy,x.minFilter=xn,x.magFilter=Bt,x.generateMipmaps=!0,x.needsUpdate=!0;const p=e==="iron"||e==="steel",y=new vt({map:g,bumpMap:v,roughnessMap:m,metalness:p?e==="steel"?.9:.72:0,roughness:e==="steel"?.64:.98,bumpScale:e==="stone"?.025:e==="iron"?.007:e==="steel"?.003:.012,envMapIntensity:e==="steel"?1.35:e==="iron"?.7:1});return this.cache.set(n,y),y}}function Rl(s,e,t,n=.025){return new pc(s,e,t,1,Math.min(n,s/3,e/3,t/3))}function O_(){const s=[[0,.69,.44],[.04,.72,.45],[.12,.7,.43],[.18,.56,.35],[.25,.44,.29],[.34,.35,.25],[.43,.32,.24],[.51,.35,.255],[.6,.44,.3],[.67,.57,.35],[.73,.69,.37],[.8,.73,.38],[.85,.73,.38]],e=32,t=[],n=[],i=[];for(const[o,a,c]of s){const l=Math.min(.09,c*.35);for(let h=0;h<e;h++){const u=Math.floor(h/8),f=u*Math.PI/2+h%8/7*Math.PI/2,d=u===0||u===3?a-l:-a+l,g=u<2?c-l:-c+l;t.push(d+Math.cos(f)*l,o,g+Math.sin(f)*l),n.push(h/e,o)}}for(let o=0;o<s.length-1;o++)for(let a=0;a<e;a++){const c=o*e+a,l=o*e+(a+1)%e;i.push(c,c+e,l,l,c+e,l+e)}const r=new _t;return r.setAttribute("position",new Qe(t,3)),r.setAttribute("uv",new Qe(n,2)),r.setIndex(i),r.computeVertexNormals(),r}function B_(){const s=[[-.68,.76,.29,.16],[-.81,.765,.265,.15],[-.96,.78,.225,.125],[-1.14,.8,.175,.096],[-1.31,.825,.115,.065],[-1.48,.847,.055,.033],[-1.57,.86,.009,.009]],e=24,t=[],n=[],i=[];s.forEach(([o,a,c,l],h)=>{for(let u=0;u<e;u++){const f=u/e*Math.PI*2;t.push(o,a+Math.cos(f)*l,Math.sin(f)*c),n.push(h/6,u/e)}});for(let o=0;o<s.length-1;o++)for(let a=0;a<e;a++){const c=o*e+a,l=o*e+(a+1)%e;i.push(c,c+e,l,l,c+e,l+e)}const r=new _t;return r.setAttribute("position",new Qe(t,3)),r.setAttribute("uv",new Qe(n,2)),r.setIndex(i),r.computeVertexNormals(),r}function Qh(s=.075,e=.855){const t=new Cn;t.moveTo(-.72,-.34),t.lineTo(.89,-.34),t.quadraticCurveTo(.94,-.34,.94,-.29),t.lineTo(.94,.29),t.quadraticCurveTo(.94,.34,.89,.34),t.lineTo(-.72,.34),t.lineTo(-.72,-.34);const n=new ur;n.moveTo(.56,.11),n.lineTo(.56,.23),n.lineTo(.68,.23),n.lineTo(.68,.11),n.closePath(),t.holes.push(n);const i=new ur;i.absarc(.81,-.17,.035,0,Math.PI*2,!0),t.holes.push(i);const r=new Rn(t,{depth:s,bevelEnabled:!0,bevelThickness:.012,bevelSize:.015,bevelSegments:3,curveSegments:12,steps:1});r.rotateX(-Math.PI/2),r.translate(0,e,0);const o=r.getAttribute("position"),a=r.getAttribute("uv");for(const c of r.groups)if(c.materialIndex===0)for(let l=c.start;l<c.start+c.count;l++)a.setXY(l,(o.getX(l)+.735)/1.69,(o.getZ(l)+.355)/.71);return r}function z_(){const s=new Cn;s.moveTo(-.43,-.15),s.lineTo(-.38,.18),s.lineTo(-.3,.22),s.lineTo(.32,.2),s.lineTo(.41,.14),s.lineTo(.39,-.16),s.lineTo(.3,-.21),s.lineTo(-.34,-.21),s.closePath();const e=new Rn(s,{depth:.34,bevelEnabled:!0,bevelSize:.022,bevelThickness:.022,bevelSegments:3,steps:1});e.translate(0,0,-.17);const t=e.getAttribute("position"),n=e.getAttribute("uv");for(const i of e.groups)if(i.materialIndex===0)for(let r=i.start;r<i.start+i.count;r++)n.setXY(r,(t.getX(r)+.46)/.92,(t.getY(r)+.24)/.5);return e.computeVertexNormals(),e}const $h=new Map;let uo=null;function eu(s){uo=s}function tu(s){const e=$h.get(s);if(e)return e;const t=512,n=bs({steel:983,honed:431,brass:722,oxide:863,leather:411}[s]),i=document.createElement("canvas");i.width=i.height=t;const r=i.getContext("2d"),o=r.createImageData(t,t),a=new Float32Array(t*t),c=new Float32Array(t*t),l=Array.from({length:t},()=>n()-.5),h=s==="leather";for(let p=0;p<t;p++)for(let y=0;y<t;y++){const x=p*t+y,_=n()-.5,T=Math.sin(y*.023+p*.013)*Math.sin(p*.032-y*.007),M=l[p]*.7+l[(p+1)%t]*.3;a[x]=h?_*.38+Math.sin(y*.2+Math.sin(p*.035))*Math.sin(p*.17)*.18:M*(s==="honed"?.055:.15)*(1+Math.sin(y*.012+p*.014)*.15)+_*.014,c[x]=T*.055+M*.045}for(let p=0;p<(h?80:s==="honed"?95:290);p++){const y=Math.floor(n()*(t-45)),x=Math.floor(n()*t),_=12+Math.floor(n()*80),T=.07+n()*.08;for(let M=y;M<Math.min(t,y+_);M++){const w=Math.sin((M-y)/_*Math.PI),A=x*t+M;a[A]-=T*w,c[A]+=T*w}}const u=new Uint8Array(t*t*4),f=new Uint8Array(t*t*4);for(let p=0;p<t;p++)for(let y=0;y<t;y++){const x=p*t+y,_=x*4,T=n()-.5,M=h?176+T*25+a[x]*26:s==="oxide"?228+c[x]*14:249+T*2+c[x]*8;o.data.set([M,M,M,255],_);const w=a[p*t+(y+1)%t]-a[p*t+(y+t-1)%t],A=a[(p+1)%t*t+y]-a[(p+t-1)%t*t+y],b=-w*(h?2.2:1.3),S=-A*(h?2.2:1.3),P=Math.hypot(b,S,1);u.set([(b/P*.5+.5)*255,(S/P*.5+.5)*255,(.5/P+.5)*255,255],_);const N=wt.clamp((h?.91:s==="oxide"?.93:.86)+c[x]+T*.025,0,1)*255;f.set([N,N,N,255],_)}r.putImageData(o,0,0);const d=new vi(i);d.colorSpace=yt;const g=new Bi(u,t,t),v=new Bi(f,t,t);for(const p of[d,g,v])p.wrapS=p.wrapT=ii,p.minFilter=xn,p.magFilter=Bt,p.generateMipmaps=!0,p.anisotropy=4,p.needsUpdate=!0;const m={map:d,normal:g,rough:v};return $h.set(s,m),m}function Md(s){const e=(f,d,g="steel")=>{const v=tu(g);return new Mn({color:f,map:v.map,normalMap:v.normal,normalScale:new re(g==="steel"||g==="honed"?.018:.15,g==="steel"||g==="honed"?.018:.15),roughnessMap:v.rough,roughness:d,metalness:1,envMap:uo,envMapIntensity:g==="steel"||g==="honed"?1.65:1.25,anisotropy:g==="steel"||g==="honed"?.08:.22,anisotropyRotation:0})},t=e(s==="meteor"?12700112:s==="dragon"?13357268:13817303,.07),n=e(14278112,.038,"honed"),i=e(s==="meteor"?16049325:16702621,.12,"brass"),r=e(s==="genesis"?7634052:8884894,.13,"oxide");r.metalness=1,r.normalScale.set(.035,.035),r.anisotropy=.08;const o=tu("leather"),a=new vt({color:s==="meteor"?3157291:5849390,map:o.map,normalMap:o.normal,normalScale:new re(.65,.65),roughnessMap:o.rough,roughness:.89}),c=a.clone();c.color.multiplyScalar(.62);const l=s==="tyrant"?10354530:s==="runic"||s==="tempest"?9298943:s==="leviathan"?6934527:s==="dragon"?7710618:s==="meteor"?6790343:14134868,h=new Mn({color:l,metalness:0,roughness:.12,ior:1.65,clearcoat:.5,clearcoatRoughness:.12,envMap:uo,envMapIntensity:1,emissive:l,emissiveIntensity:.035}),u=new vt({color:l,metalness:.8,roughness:.32,envMap:uo,envMapIntensity:1,emissive:l,emissiveIntensity:.035});for(const[f,d,g]of[[t,1,.985],[n,.85,.7],[i,.2,.91],[r,.7,.99],[a,0,.98],[c,0,.98]])f.userData.forgeHeat=d,f.userData.cosmosCoverage=g;return{body:t,edge:n,trim:i,dark:r,grip:a,wrap:c,gem:h,inlay:u}}function mc(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new _t;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=nu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);const g=nu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function nu(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Pt(o,t,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const v=h.getComponent(f,g);a.setComponent(f+u,g,v)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function iu(s,e){if(e===Pf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ml||e===Hu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ml)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const su=wt.clamp;function Mo(s,e){const t=Float32Array.from({length:(e+1)**2},()=>s());return(n,i)=>{const r=n*e,o=i*e,a=Math.floor(r),c=Math.floor(o),l=r-a,h=o-c,u=l*l*(3-2*l),f=h*h*(3-2*h),d=e+1;return wt.lerp(wt.lerp(t[c*d+a],t[c*d+a+1],u),wt.lerp(t[(c+1)*d+a],t[(c+1)*d+a+1],u),f)}}function bd(s,e,t,n,i,r){const o=n.getContext("2d").getImageData(0,0,s,s).data,a=new Uint8Array(s*s*4);for(let u=0;u<s;u++)for(let f=0;f<s;f++){const d=(u*s+f)*4,g=(o[(u*s+Math.min(s-1,f+1))*4]-o[(u*s+Math.max(0,f-1))*4])/255*r,v=(o[(Math.min(s-1,u+1)*s+f)*4]-o[(Math.max(0,u-1)*s+f)*4])/255*r,m=Math.hypot(g,v,1);a.set([(1-g/m)*127.5,(1+v/m)*127.5,(1+1/m)*127.5,255],d)}const c=new vi(t);c.colorSpace=yt;const l=new Bi(a,s,s),h=new vi(i);for(const u of[c,l,h])u.wrapS=u.wrapT=ii,u.anisotropy=e,u.minFilter=xn,u.magFilter=Bt,u.generateMipmaps=!0,u.needsUpdate=!0;return{map:c,normalMap:l,roughnessMap:h}}function us(s){const e=document.createElement("canvas");return e.width=e.height=s,e}function ba(s,e,t){const n=s==="face"?1024:512,i=bs(t),r=us(n),o=us(n),a=us(n),c=[r,o,a].map(m=>m.getContext("2d")),l=c.map(m=>m.createImageData(n,n)),h=Mo(i,7),u=Mo(i,39),f=s==="casting";for(let m=0;m<n;m++)for(let p=0;p<n;p++){const y=p/n,x=m/n,_=(m*n+p)*4,T=h(y,x),M=u(y,x),w=i()-.5,A=Math.min(y,1-y,x,1-x),S=(s==="face"?Math.exp(-((y-.52)**2/.18+(x-.51)**2/.035)):0)*(.5+T*.5),P=su((T-.42)*2+(A<.055?.2:0)-S*.28,0,1),F=(f?33:s==="hammer"?66:83)+T*(f?15:14)+M*9+S*24+w*5;l[0].data.set([F+P*5,F+2-P*2,F+4-P*6,255],_);const G=126+(M-.5)*(f?23:9)+w*(f?16:5);l[1].data.set([G,G,G,255],_);const V=su((f?.83:.63)+P*.18-S*.29+(M-.5)*.13,.28,.96)*255;l[2].data.set([V,V,V,255],_)}c.forEach((m,p)=>m.putImageData(l[p],0,0));const[d,g,v]=c;for(let m=0;m<(f?180:100);m++){const p=i()*n,y=i()*n,x=(f?1.3:2)+i()*(f?4:10),_=d.createRadialGradient(p,y,0,p,y,x);_.addColorStop(0,"rgba(160,150,130,.04)"),_.addColorStop(.72,"rgba(20,18,15,.04)"),_.addColorStop(1,"rgba(20,18,15,0)"),d.fillStyle=_,d.fillRect(p-x,y-x,x*2,x*2),g.fillStyle="rgba(60,60,60,.09)",g.beginPath(),g.ellipse(p,y,x,x*.65,i()*Math.PI,0,Math.PI*2),g.fill()}for(let m=0;m<(s==="face"?390:95);m++){const p=i()*n,y=i()*n,x=8+i()*n*.15,_=(i()-.5)*n*.08,T=.6+i()*1.1;for(const[M,w]of[[d,"rgba(190,180,157,.20)"],[g,"rgba(45,45,45,.28)"],[v,"rgba(220,220,220,.22)"]])M.lineWidth=T,M.strokeStyle=w,M.beginPath(),M.moveTo(p,y),M.lineTo(p+x,y+_),M.stroke()}return new vt({...bd(n,e,r,o,a,f?4:7),metalness:f?.78:.94,roughness:f?1:s==="hammer"?.72:.88,normalScale:new re(.65,.65),envMapIntensity:f?.45:s==="hammer"?1.15:.95})}function k_(s,e){const n=bs(e),i=Mo(n,6),r=Mo(n,35),o=us(512),a=us(512),c=us(512),l=[o,a,c].map(f=>f.getContext("2d")),h=l.map(f=>f.createImageData(512,512)),u={u:.2+n()*.6,v:.2+n()*.6};for(let f=0;f<512;f++)for(let d=0;d<512;d++){const g=d/512,v=f/512,m=(f*512+d)*4,p=Math.hypot((g-u.u)*.46,v-u.v),y=i(g,v),_=(v+Math.exp(-p*p/.025)*Math.sin((v-u.v)*14)*.065)*255+Math.sin(g*9)*2.2+y*5,T=Math.sin(_)*.035+Math.sin(_*3.7+r(g,v)*2)*.018,M=Math.exp(-p*p/6e-4),w=n()-.5,A=T+(y-.5)*.13-M*.32,b=Math.min(v,1-v),S=Math.exp(-((g-.55)**2/.13+(v-.48)**2/.06))*.18,P=55+A*90-S*30-(b<.018?9:0);h[0].data.set([P,35+A*65-S*22,22+A*45-S*14,255],m);const N=128+T*120+w*6-M*12;h[1].data.set([N,N,N,255],m);const F=(.82+Math.abs(T)*1.5+M*.1)*255;h[2].data.set([F,F,F,255],m)}l.forEach((f,d)=>f.putImageData(h[d],0,0));for(let f=0;f<35;f++){const d=n()*512,g=n()*512;l[0].strokeStyle="rgba(18,11,7,.23)",l[0].lineWidth=.4+n()*.6,l[0].beginPath(),l[0].moveTo(d,g),l[0].lineTo(d+12+n()*90,g+(n()-.5)*3),l[0].stroke()}return new vt({...bd(512,s,o,a,c,4),roughness:1,metalness:0,normalScale:new re(.45,.45)})}function H_(s){const e=ba("face",s,618),t=ba("casting",s,122),n=ba("hammer",s,94),i=n.clone();return i.color.set(9144706),i.envMapIntensity=.65,{face:e,casting:t,hammer:n,edge:i,wood:Array.from({length:5},(r,o)=>k_(s,231+o*31))}}function Sd(s,e=.2,t=!1){const n=[],i=[],r=[],o=[-1,-(1-e),-.3,-.085,0,.085,.3,1-e,1],a=[],c=(h,u,f)=>{n.push(h,u,f),i.push(h/2.42,f/1.1+.5)};for(const h of s)for(const u of[1,-1])for(const f of o){const d=h.height??.095,g=h.center??0,v=f<0?h.left:h.right,m=Math.abs(f),p=1-e,y=m>=p?wt.lerp(Math.min(.0016,d*.08),d*.61,(1-m)/(1-p)):m>.3?wt.lerp(d*.61,d*.81,(p-m)/(p-.3)):m>.085?wt.lerp(d*.81,d*(t?.62:.75),(.3-m)/.215):wt.lerp(d*(t?.62:.75),d*(t?.6:1),(.085-m)/.085);c(h.x,u===1?y:-y*.38,g+f*v)}const l=o.length*2;for(let h=0;h<s.length-1;h++)for(const u of[0,1])for(let f=0;f<o.length-1;f++){const d=h*l+u*o.length+f,g=d+1,v=d+l,m=v+1,p=r.length;u===0?r.push(d,g,v,g,m,v):r.push(d,v,g,g,v,m),a.push({start:p,count:6,materialIndex:f===0||f===o.length-2?1:0,band:u*(o.length-1)+f})}for(let h=0;h<s.length-1;h++)for(const u of[0,o.length-1]){const f=h*l+u,d=f+l,g=f+o.length,v=d+o.length,m=r.length;u===0?r.push(f,d,g,d,v,g):r.push(f,g,d,d,g,v),a.push({start:m,count:6,materialIndex:1,band:2*(o.length-1)+(u===0?0:1)})}for(const h of[0,s.length-1])for(let u=0;u<o.length-1;u++){const f=h*l+u,d=f+1,g=f+o.length,v=g+1,m=r.length;h===0?r.push(f,g,d,d,g,v):r.push(f,d,g,d,v,g),a.push({start:m,count:6,materialIndex:0,band:2*o.length+(h===0?0:1)})}return Td(n,i,r,a)}function Td(s,e,t,n){const i=new _t,r=[],o=[],a=[],c=new Map;for(const l of[...new Set(n.map(h=>h.materialIndex))]){const h=a.length;for(const u of n)if(u.materialIndex===l)for(const f of t.slice(u.start,u.start+u.count)){const d=u.band+":"+f;let g=c.get(d);g===void 0&&(g=r.length/3,c.set(d,g),r.push(...s.slice(f*3,f*3+3)),o.push(...e.slice(f*2,f*2+2))),a.push(g)}i.addGroup(h,a.length-h,l)}return i.setAttribute("position",new Qe(r,3)),i.setAttribute("uv",new Qe(o,2)),i.setIndex(a),i.computeVertexNormals(),i.computeBoundingBox(),i}function wd(s,e=.055){const t=[],n=[],i=[],r=[],o=Math.sign(s[0][1]);s.forEach(([l,h],u)=>{const f=u===s.length-1,d=f?l-.1:l,g=f?0:h-o*e;for(const[v,m,p]of[[l,.0016,h],[d,f?.026:.104,g],[d,f?-.006:-.022,g]])t.push(v,m,p),i.push(v/2.42,p/1.1+.5)});for(let l=0;l<s.length-1;l++)for(let h=0;h<3;h++){const u=l*3+h,f=l*3+(h+1)%3,d=u+3,g=f+3,v=n.length;o<0?n.push(u,f,d,f,g,d):n.push(u,d,f,f,d,g),r.push({start:v,count:6,materialIndex:0,band:h})}const a=n.length,c=(s.length-1)*3;return o<0?n.push(0,2,1,c,c+1,c+2):n.push(0,1,2,c,c+2,c+1),r.push({start:a,count:3,materialIndex:0,band:3},{start:a+3,count:3,materialIndex:0,band:4}),Td(t,i,n,r)}function Ed(s,e=.055,t=.014){const n=new Cn;s.forEach(([r,o],a)=>a?n.lineTo(r,-o):n.moveTo(r,-o)),n.closePath();const i=new Rn(n,{depth:e,bevelEnabled:!0,bevelSize:t,bevelThickness:t*.6,bevelSegments:3,curveSegments:16});return i.rotateX(-Math.PI/2),i}function Pl(s,e,t=.085,n=.016){const i=new Cn;s.forEach(([o,a],c)=>c?i.lineTo(o,-a):i.moveTo(o,-a)),i.closePath();for(const o of e){const a=new ur;o.forEach(([c,l],h)=>h?a.lineTo(c,-l):a.moveTo(c,-l)),a.closePath(),i.holes.push(a)}const r=new Rn(i,{depth:t,bevelEnabled:!0,bevelSize:n,bevelThickness:n*.6,bevelSegments:3,curveSegments:16});return r.rotateX(-Math.PI/2),r}function gc(s,e=.009){const t=new oc(s.map(n=>new R(...n)));return new Co(t,Math.min(144,Math.max(12,s.length*7)),e,5,!1)}function V_(s,e=0){const t=new et,n=Md(s),i=new et;t.name="evolving-sword",t.userData.theme=s,n.body.color.set(s==="leviathan"?13358811:14081248),n.body.roughness=.065,n.body.envMapIntensity=.9,n.edge.color.set(15265521),n.edge.roughness=.032,n.edge.envMapIntensity=1.15,n.trim.envMapIntensity=.8,n.dark.color.set(1516330),n.grip.color.set(1646369),n.wrap.color.set(4209450);const r=s==="tyrant"?2686754:2341631;n.gem.color.set(r),n.gem.emissive.set(r),n.gem.emissiveIntensity=1.35,n.gem.roughness=.055,n.inlay.color.set(r),n.inlay.emissive.set(r),n.inlay.metalness=.2,n.inlay.roughness=.16,n.inlay.emissiveIntensity=1.7,n.inlay.userData.forgeHeat=0,n.gem.userData.forgeHeat=0;const o=n.inlay.clone();o.name="reference-aura",o.emissiveIntensity=1.9,o.transparent=!0,o.opacity=.78,o.depthWrite=!1;const a={rings:[],wisps:[],glow:o,intensity:o.emissiveIntensity};i.name="reference-magic",t.add(i);const c=(x,_,T=0,M=0,w=0,A="blade",b=t)=>{const S=new Oe(x,_);return S.position.set(T,M,w),S.name=A,S.castShadow=b!==i,S.receiveShadow=b!==i,b.add(S),S},l=(x,_,T=.02,M="blade-detail",w=.06,A=.012)=>c(Ed(x,w,A),_,0,T,0,M),h=(x,_=n.trim,T=.007,M="blade-inlay",w=t)=>c(gc(x,T),_,0,0,0,M,w),u=(x,_,T,M=.09)=>{const w=c(new si(M,0),n.gem,x,_,T,"blade-gem");return w.scale.y=.8,w},f=(x,_,T,M=n.trim,w=t)=>{const A=c(new sn(T,.014,6,64),M,x,.13,_,"blade-orbit",w);return A.rotation.x=Math.PI/2,A},d=x=>c(Sd(x,.22),[n.body,n.edge]),g=(x,_=.115,T=n.trim,M=.006)=>h(x.map(([w,A])=>[w,_,A]),T,M),v=x=>{for(const _ of[-1,1])l([[-.13,_*.06],[-.2,_*.19],[-.3,_*x],[-.08,_*(x-.04)],[.055,_*.23],[.07,_*.11]],n.body,-.04,"guard",.12,.015),g([[-.13,_*.1],[-.27,_*(x-.025)],[-.08,_*(x-.065)],[.025,_*.21]],.107)},m=(x,_,T=.11)=>{h([[x-T/2,.121,_],[x+T/2,.121,_]],n.inlay,.005,"blade-rune");for(const[M,w]of[[-.03,1],[.023,-1]])h([[x+M-.022,.122,_+w*.029],[x+M,.122,_],[x+M+.022,.122,_+w*.025]],n.inlay,.004,"blade-rune")};if(s==="runic"){const x=[[.06,-.19],[.38,-.38],[.73,-.34],[1.8,-.25],[2.42,0],[1.8,.25],[.73,.34],[.38,.38],[.06,.19]],_=[[.33,-.038],[.67,-.105],[1.76,-.09],[2.18,0],[1.76,.09],[.67,.105],[.33,.038]],T=x.map(([A,b])=>[b===0?A-.1:A,b-Math.sign(b)*.047]);c(Pl(T,[_],.085,.01),n.body,0,.018,0);for(const A of[-1,1]){const b=[[.06,A*.19],[.38,A*.38],[.73,A*.34],[1.8,A*.25],[2.42,0]];c(wd(b,.047),n.edge,0,.005,0,"blade-edge"),g(b.slice(0,-1),.112,n.trim,.004),h([[.36,.126,A*.17],[.73,.127,A*.22],[1.65,.12,A*.17]],n.inlay,.005);for(let S=0;S<6+Math.min(e,5);S++)m(.52+S*.15,A*(.225-S*.007),.09)}v(.51),u(-.01,.13,0,.095),u(.57,.155,0,.115),f(.54,0,.28,n.edge);const M=f(.54,0,.26,o,i);a.rings.push(M);const w=f(.54,0,.3,n.trim);w.rotation.z=.25}else if(s==="tyrant"){d([{x:0,left:.29,right:.29},{x:.16,left:.46,right:.46},{x:1.97,left:.46,right:.46},{x:2.2,left:.32,right:.32},{x:2.42,left:.001,right:.001,height:.004}]),l([[.21,-.125],[1.99,-.125],[2.18,0],[1.99,.125],[.21,.125]],n.dark,.087,"blade-fuller",.006,.003);for(const x of[-1,1]){h([[.18,.122,x*.34],[1.95,.122,x*.34],[2.25,.06,x*.12]],n.inlay,.009),g([[.15,x*.44],[1.97,x*.44],[2.38,0]],.038,n.trim,.005);for(let M=0;M<9;M++){const w=.28+M*.185;l([[w-.06,x*.13],[w-.075,x*.22],[w-.01,x*.28],[w+.065,x*.22],[w+.055,x*.13]],M%2?n.body:n.edge,.111,"blade-tooth",.055,.005),l([[w-.08,x*.455],[w+.07,x*.48],[w+.14,x*.64],[w+.13,x*.45]],n.edge,0,"blade-spine-tooth",.06,.006)}for(let M=0;M<2;M++){const w=.28+M*.2;l([[w-.12,x*.42],[w-.08,x*.82],[w+.25,x*.49],[w+.1,x*.43]],n.trim,.03,"blade-basal-spike",.045,.006)}const _=[];for(let M=0;M<=36;M++){const w=.06+M/36*2.32;_.push([w,.22,x*(.67+Math.sin(M/36*Math.PI*5)*.035)])}const T=h(_,o,.009,"blade-green-wisp",i);a.wisps.push(T)}l([[-.16,-.6],[-.1,-.6],[-.055,.6],[-.12,.6]],n.trim,-.03,"guard",.12,.012),u(.025,.2,0,.15)}else if(s==="leviathan"){const x=[];for(let _=0;_<=32;_++){const T=_/32,M=T*2.42,w=T<.83?.3+.28*Math.sin(T*Math.PI*.84):.001+.42*(1-T)/.17;x.push({x:M,left:Math.max(.001,w),right:Math.max(.001,w*.64),center:.13*Math.sin(T*Math.PI*.76),height:_===32?.004:.098})}d(x),l([[.1,-.19],[.54,-.16],[1.25,-.26],[1.9,-.33],[2.28,-.1],[1.91,-.4],[1.23,-.34],[.54,-.28],[.1,-.29]],n.dark,.086,"blade-spine",.009,.003);for(let _=0;_<4;_++){const T=.24+_*.41,M=-(.35+.04*_),w=[[T-.085,M],[T-.1,M-.09],[T-.05,M-.21],[T+.015,M-.27],[T+.008,M-.14],[T+.15,M+.035],[T+.05,M+.04]];l(w,n.edge,-.012,"blade-horn",.072,.009),g(w.slice(0,5),.064,n.trim,.004)}h([[.13,.13,-.15],[.5,.13,-.13],[1.05,.135,-.19],[1.62,.13,-.23],[2.15,.1,-.04]],n.inlay,.004);for(let _=0;_<5;_++){const T=.45+_*.28;h([[T,.137,-.16],[T+.045,.139,-.12],[T+.075,.137,-.14],[T+.1,.139,-.07]],o,.003,"blade-lightning",i)}l([[-.13,-.4],[-.05,-.37],[.08,-.22],[.08,.26],[-.035,.47],[-.16,.49],[-.07,.35],[-.05,.13]],n.edge,-.04,"guard",.09,.014),g([[-.12,-.36],[.03,-.2],[.03,.25],[-.09,.43]],.064),u(.035,.14,0,.075)}else{d([{x:.88,left:.13,right:.13},{x:1.03,left:.28,right:.28},{x:1.19,left:.21,right:.21},{x:1.91,left:.16,right:.16},{x:2.42,left:.001,right:.001,height:.004}]);const x=[],_=[];for(let w=0;w<8;w++){const A=w/8*Math.PI*2;x.push([.48+Math.cos(A)*.64,Math.sin(A)*.57]),_.unshift([.48+Math.cos(A)*.49,Math.sin(A)*.43])}c(Pl(x,[_],.11,.015),n.dark,0,-.005,0),g([...x,x[0]],.128,n.trim,.012),g([..._,_[0]],.126,n.edge,.008);const T=[];for(let w=0;w<=64;w++){const A=w/64*Math.PI*2;T.push([.48+Math.cos(A)*.435,.17,Math.sin(A)*.37])}const M=h(T,o,.006,"blade-electric-ring",i);a.rings.push(M),u(.48,.14,0,.15),h([[.48,.18,0],[.49,.18,-.045],[.53,.18,-.07],[.5,.18,-.1],[.55,.18,-.19],[.52,.18,-.23],[.58,.18,-.32]],o,.009,"blade-lightning",i),h([[.48,.18,0],[.41,.18,.06],[.46,.18,.12],[.35,.18,.18],[.39,.18,.25],[.3,.18,.32]],o,.007,"blade-lightning",i);for(const w of[-1,1]){l([[-.13,w*.12],[-.24,w*.32],[-.21,w*.46],[-.05,w*.43],[.03,w*.22]],n.trim,-.01,"guard",.095,.013),h([[1.15,.115,w*.105],[1.78,.105,w*.082],[2.19,.065,w*.03]],n.inlay,.005);for(let A=0;A<4+Math.min(e,7);A++)m(1.2+A*.085,w*.085,.055)}}const p=c(new Nn(.07,.078,.55,24),n.grip,-.41,.025,0,"grip");p.rotation.z=Math.PI/2;for(let x=0;x<11;x++){const _=c(new sn(.077,.006,5,20),n.trim,-.16-x*.05,.025,0,"grip-band");_.rotation.y=Math.PI/2}for(const x of[-.12,-.7]){const _=c(new Nn(.091,.091,.03,16),n.trim,x,.025,0,"grip-collar");_.rotation.z=Math.PI/2}c(new si(.117,0),n.edge,-.79,.025,0,"pommel").scale.set(1.2,.85,1),s!=="leviathan"&&u(-.79,.1,0,.058);for(let x=0;x<Math.min(e,12);x++){const _=.28+x*.13;l([[_-.022,-.02],[_,-.037],[_+.022,-.02],[_,0]],n.trim,.12,"blade-progression-seal",.009,.003)}for(const x of a.rings)x.userData.restY=x.position.y;return t.userData.materials=n,t.userData.referenceFx=a,G_(t),t}function G_(s){s.updateMatrixWorld(!0);const e=new Map;for(const t of s.children)if(t instanceof Oe&&!Array.isArray(t.material)&&!t.material.transparent){const n=e.get(t.material)||[];n.push(t),e.set(t.material,n)}for(const[t,n]of e){if(n.length<2)continue;const i=n.map(a=>(a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone()).applyMatrix4(a.matrix)),r=mc(i,!1);if(i.forEach(a=>a.dispose()),!r)continue;n.forEach(a=>{s.remove(a),a.geometry.dispose()});const o=new Oe(r,t);o.name="blade-metal",o.castShadow=!0,o.receiveShadow=!0,s.add(o)}}function W_(s,e,t,n=!1){const i=s.userData.referenceFx;if(!i)return;const r=n?0:e;i.glow.emissiveIntensity=i.intensity*(t?.55:1)*(.92+.08*Math.sin(r*3.1)),i.wisps.forEach((o,a)=>{o.position.z=Math.sin(r*1.4+a*Math.PI)*.016,o.position.y=Math.sin(r*1.7+a)*.013}),i.rings.forEach((o,a)=>{o.position.y=o.userData.restY+Math.sin(r*1.3+a)*.012})}function X_(s,e=0,t=0){if(s==="runic"||s==="tyrant"||s==="leviathan"||s==="tempest")return V_(s,e);const n=new et,i=Md(s);n.name="evolving-sword",n.userData.theme=s;const r=(v,m,p=0,y=0,x=0,_="fitting")=>{const T=new Oe(v,m);return T.position.set(p,y,x),T.castShadow=!0,T.receiveShadow=!0,T.name=_,n.add(T),T},o=(v,m,p=.03,y="fitting",x=.055,_=.014)=>r(Ed(v,x,_),m,0,p,0,y),a=(v,m=i.trim,p=.009,y="blade-inlay")=>r(gc(v,p),m,0,0,0,y),c=(v,m,p,y,x=i.gem)=>{const _=r(new si(y,1),x,v,m,p,"blade-jewel");return _.scale.set(1,.44,1),_},l=v=>r(Sd(v,.2,s!=="genesis"),[i.body,i.edge],0,0,0,"blade"),h=e;if(s==="dragon"){l([{x:0,left:.27,right:.28},{x:.13,left:.39,right:.37},{x:.31,left:.4,right:.34},{x:.55,left:.34,right:.31},{x:.77,left:.36,right:.31},{x:1,left:.29,right:.3},{x:1.22,left:.31,right:.29},{x:1.48,left:.27,right:.3},{x:1.74,left:.28,right:.31},{x:1.94,left:.26,right:.31},{x:2.15,left:.18,right:.24,center:.035},{x:2.42,left:6e-4,right:6e-4,center:.13,height:.004}]),o([[.09,-.09],[.48,-.052],[1.66,-.042],[2.06,.015],[1.64,.042],[.48,.052],[.09,.09]],i.dark,.058,"blade-fuller",.008,.003);for(const v of[-1,1])a([[.16,.086,v*.1],[.59,.082,v*.07],[1.48,.078,v*.056],[2.05,.065,.012]],i.trim,.005),o([[-.11,v*.06],[-.3,v*.17],[-.36,v*.31],[-.3,v*.51],[-.1,v*.63],[.07,v*.57],[-.04,v*.47],[-.11,v*.31],[.07,v*.13]],i.trim,-.014,"guard",.1,.022),o([[-.13,v*.16],[-.25,v*.29],[-.2,v*.46],[-.07,v*.47],[-.14,v*.32]],i.dark,.082,"guard-inset",.012,.006),a([[-.14,.119,v*.19],[-.28,.118,v*.31],[-.21,.12,v*.48],[-.08,.117,v*.52]],i.edge,.012,"guard-engraving");for(let v=0;v<4+Math.min(h,6);v++){const m=.32+v*.14;o([[m-.08,0],[m-.01,-.051],[m+.081,0],[m-.01,.051]],v%2?i.trim:i.edge,.068,"blade-scale",.008,.003)}c(.07,.157,0,.09),Sa(n,i,r,s,h)}else if(s==="meteor"){l([{x:0,left:.23,right:.23},{x:.17,left:.42,right:.42},{x:.43,left:.34,right:.34},{x:.57,left:.41,right:.41},{x:.71,left:.32,right:.32},{x:1.55,left:.26,right:.26},{x:1.97,left:.23,right:.23},{x:2.42,left:6e-4,right:6e-4,height:.004}]),o([[.3,-.073],[1.79,-.036],[2.2,0],[1.79,.036],[.3,.073]],i.dark,.058,"blade-fuller",.008,.003);for(const m of[-1,1])o([[.13,m*.25],[.39,m*.3],[.52,m*.34],[.59,m*.18],[.23,m*.13]],i.trim,.074,"blade-shoulder",.011,.006),a([[.39,.084,m*.089],[1.02,.08,m*.065],[1.77,.077,m*.043],[2.2,.036,0]],i.inlay,.005),o([[-.12,m*.11],[-.3,m*.3],[-.28,m*.49],[-.05,m*.64],[.15,m*.57],[.03,m*.43],[-.08,m*.44],[-.16,m*.32],[.02,m*.14]],i.edge,-.01,"guard",.1,.017),a([[-.11,.13,m*.16],[-.23,.13,m*.31],[-.2,.13,m*.46],[-.04,.13,m*.56],[.08,.13,m*.51]],i.trim,.019,"guard-orbit");const v=r(new sn(.149,.027,7,40),i.trim,.11,.133,0,"blade-core-setting");v.rotation.x=Math.PI/2,c(.11,.142,0,.14);for(let m=0;m<3+Math.min(h,5);m++){const p=.48+m*.19;o([[p-.04,0],[p,-.026],[p+.04,0],[p,.026]],i.inlay,.068,"blade-star-seal",.008,.003);for(const y of[-1,1])a([[p-.04,.082,y*.11],[p,.088,y*.14],[p+.04,.083,y*.11]],i.trim,.004)}Sa(n,i,r,s,h)}else{const m=[[[0,-.27],[.21,-.44],[.57,-.36],[1.72,-.33],[2.12,-.21]],[[0,-.28],[.18,-.44],[.42,-.4],[.75,-.28],[1.34,-.31],[1.7,-.43],[2.1,-.28]],[[0,-.24],[.2,-.4],[.38,-.33],[.57,-.43],[.73,-.34],[1.04,-.3],[1.22,-.39],[1.44,-.27],[1.74,-.28],[2.08,-.17]],[[0,-.32],[.23,-.46],[.51,-.3],[.76,-.33],[1.05,-.44],[1.43,-.36],[1.77,-.31],[2.1,-.25]],[[0,-.3],[.16,-.45],[.39,-.34],[.57,-.25],[.84,-.29],[1.18,-.44],[1.51,-.42],[1.75,-.32],[2.08,-.28]]][t],p=[...m,[2.42,0],...[...m].reverse().map(([M,w])=>[M,-w])],y=[[.43,-.1],[.73,-.115],[1.64,-.093],[1.99,0],[1.64,.093],[.73,.115],[.43,.1]],x=p.map(([M,w])=>[w===0?M-.12:M,w-Math.sign(w)*.052]);r(Pl(x,[y],.086,.01),i.body,0,.003,0,"blade");for(const M of[-1,1])r(wd([...m.map(([w,A])=>[w,-M*A]),[2.42,0]]),i.edge,0,0,0,"blade-cutting-edge"),a([[.3,.119,M*.235],[.67,.123,M*.202],[1.57,.124,M*.185],[1.99,.099,M*.095]],i.trim,.011),o([[-.13,M*.1],[-.24,M*.22],[-.31,M*.58],[-.13,M*.67],[.03,M*.6],[.08,M*.44],[-.03,M*.49],[-.08,M*.25],[.14,M*.13]],i.trim,-.02,"guard",.12,.023),o([[-.18,M*.34],[-.24,M*.54],[-.14,M*.59],[-.075,M*.54]],i.dark,.098,"guard-inset",.012,.006);o([[-.11,-.16],[.15,-.19],[.33,-.1],[.39,0],[.33,.1],[.15,.19],[-.11,.16]],i.dark,.087,"blade-core-mount",.044,.013);const _=r(new sn(.132,.021,8,40),i.trim,.14,.152,0,"blade-core-setting");_.rotation.x=Math.PI/2,c(.14,.161,0,.124);const T=[.55,1.1,1.65,.825,1.375,.6875,.9625,1.2375,1.5125,.6187,.7562,.8937,1.0312,1.1687,1.3062,1.4437,1.5812];for(let M=0;M<3+Math.min(h,14);M++){const w=T[M];o([[w-.025,-.145],[w+.025,-.145],[w+.034,.145],[w-.034,.145]],i.trim,.054,"blade-bridge",.025,.007);for(const A of[-1,1]){const b=r(new rn(.022,.006,.027),i.inlay,w,.113,A*.24,"blade-seal");b.rotation.y=Math.PI/4}}if(l([{x:1.72,left:.103,right:.103,height:.06},{x:2.11,left:.13,right:.13,height:.074},{x:2.42,left:6e-4,right:6e-4,height:.004}]),t>0)for(const M of[-1,1])o([[],[[-.2,.2],[-.39,.32],[-.42,.65],[-.32,.56],[-.26,.3]],[[-.13,.25],[-.29,.34],[-.2,.64],[-.04,.68],[-.11,.42]],[[-.17,.25],[-.35,.45],[-.2,.7],[-.09,.57],[.02,.68],[.06,.48]],[[-.12,.23],[-.29,.37],[-.24,.68],[-.11,.56],[.05,.63],[.13,.45]]][t].map(([A,b])=>[A,M*b]),t%2?i.edge:i.trim,.078,"guard-ascension",.04,.012);if(t>=2)for(const M of[-1,1])a([[.1,.155,M*.15],[.5,.134,M*.24],[1.06,.14,M*.26],[1.55,.14,M*.22]],i.inlay,.006);Sa(n,i,r,s,h)}const u=1+e*.0022;for(const v of n.children)v instanceof Oe&&(v.geometry.scale(1,1,u),v.position.z*=u);i.body.roughness=Math.max(.045,i.body.roughness-e*.001),i.trim.roughness=Math.max(.075,i.trim.roughness-e*.001),n.updateMatrixWorld(!0);const f=new R,d=new R,g=new Ke;for(const v of n.children)if(v instanceof Oe&&v.material!==i.grip&&v.material!==i.wrap){if(v.geometry.index){const x=v.geometry;v.geometry=x.toNonIndexed(),x.dispose()}const m=v.geometry.getAttribute("position"),p=v.geometry.getAttribute("normal"),y=new Float32Array(m.count*2);g.getNormalMatrix(v.matrix);for(let x=0;x<m.count;x+=3){d.set(0,0,0);for(let T=0;T<3;T++)d.add(f.fromBufferAttribute(p,x+T));d.applyMatrix3(g);const _=Math.abs(d.y)>=Math.max(Math.abs(d.x),Math.abs(d.z))?"y":Math.abs(d.x)>Math.abs(d.z)?"x":"z";for(let T=0;T<3;T++)f.fromBufferAttribute(m,x+T).applyMatrix4(v.matrix),y[(x+T)*2]=_==="x"?f.y/1.1:f.x/2.42,y[(x+T)*2+1]=(_==="z"?f.y:f.z)/1.1+.5}v.geometry.setAttribute("uv",new Pt(y,2))}return n.userData.materials=i,n.userData.ascension=t,q_(n),n}function q_(s){const e=new Map;s.updateMatrixWorld(!0);for(const t of s.children){if(!(t instanceof Oe)||Array.isArray(t.material)||t.material.transparent)continue;const n=t.material.id+":"+(t.name.startsWith("blade")?"blade":"fitting"),i=e.get(n)||[];i.push(t),e.set(n,i)}for(const t of e.values()){if(t.length<2)continue;const n=t.map(o=>(o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrix)),i=mc(n,!1);if(n.forEach(o=>o.dispose()),!i)continue;const r=new Oe(i,t[0].material);r.name=t[0].name.startsWith("blade")?"blade-details":"fittings",r.castShadow=!0,r.receiveShadow=!0,t.forEach(o=>{s.remove(o),o.geometry.dispose()}),s.add(r)}}function Sa(s,e,t,n,i){const r=t(new Nn(.077,.084,.54,24),e.grip,-.4,.026,0,"grip");r.rotation.z=Math.PI/2;const o=[];for(let l=0;l<=108;l++){const h=l/108*Math.PI*18;o.push([-.14-l/108*.53,.026+Math.cos(h)*.081,Math.sin(h)*.081])}t(gc(o,.006),e.wrap,0,0,0,"grip-wrap");for(const l of[-.12,-.68]){const h=t(new Nn(.095,.095,.045,24),e.trim,l,.026,0,"grip-collar");h.rotation.z=Math.PI/2}if(t(new xi(1,24,16),e.trim,-.79,.026,0,"pommel").scale.set(.129,.1,.117),t(new si(.065,1),e.gem,-.79,.123,0,"pommel-gem").scale.set(1,.31,1),n==="genesis"){const l=t(new sn(.117,.014,6,32),e.edge,-.79,.026,0,"pommel-crown");l.rotation.x=Math.PI/2}for(let l=0;l<Math.min(i,9);l++){const h=t(Rl(.012,.01,.11,.003),e.trim,-.19-l*.049,.1,0,"grip-stitch");h.rotation.y=-.22}}function Ll(s,e,t,n,i=!1){const r=ti(e,t,i),o=new et;if(r.theme!=="legacy"){const K=X_(r.theme,r.detail,r.ascension);return K.userData.swordName=r.name,K.userData.level=r.level,K.userData.form=r.silhouette,K}o.name="evolving-sword";const a=n==="bronze"?12491368:n==="cold"?11132133:12832727,c=r.crest>=5?15456176:r.crest>=2?13678459:11175504,l=new vt({color:c,metalness:.82,roughness:.31}),h=new vt({color:3423046,metalness:.76,roughness:.36}),u=new vt({color:a,metalness:.85,roughness:.27}),f=new vt({color:e==="great"?4598565:e==="short"?1583932:2636341,roughness:.8}),d=new vt({color:[4224906,3785883,6328298,10121439,15772752,15233152][r.crest%6],emissive:[863287,1203266,1847647,4203365,6898970,6299692][r.crest%6],emissiveIntensity:.35+.045*r.crest,metalness:.24,roughness:.2}),g=(K,ie,_e=0,Re=0,ke=0,j="fitting")=>{const Q=new Oe(K,ie);return Q.position.set(_e,Re,ke),Q.castShadow=!0,Q.receiveShadow=!0,Q.name=j,o.add(Q),Q},v=(K,ie,_e,Re,ke,j,Q,ve="fitting")=>g(new rn(Re,ke,j),Q,K,ie,_e,ve),m=(K,ie,_e,Re,ke,j,Q)=>{const ve=g(new xi(1,12,8),Q,K,ie,_e);return ve.scale.set(Re,ke,j),ve},p=2.42,x=(e==="great"?.37:e==="short"?.245:.29)*r.span,T=[[1,.99,1.03,1.03,.98,.91,.58],[1,1.17,1.14,.99,.92,.88,.57],[1,1.06,1.19,1.12,1,.93,.57],[1,1.24,1.1,1.04,1.14,.97,.62],[1,1.06,.94,1.17,1.13,1.01,.67],[1,1.15,1.04,1.22,1.07,1.04,.71]][Math.min(r.silhouette,5)],w=[0,.1,.25,.46,.66,.8,.92,1].map((K,ie)=>({x:p*K,w:ie===7?0:x*T[ie],centerY:.125+Math.min(r.level,40)*35e-5})),A=[],b=[],S=(K,ie,_e)=>{for(const Re of[K,ie,_e])A.push(Re[0],Re[1],Re[2]),b.push(Re[0]/p,Re[2]/(x*2)+.5)};for(let K=0;K<w.length-1;K++){const ie=w[K],_e=w[K+1],Re=ye=>[ye.x,0,-ye.w],ke=ye=>[ye.x,0,ye.w],j=ye=>[ye.x,ye.centerY,0];S(Re(ie),j(ie),Re(_e)),S(j(ie),j(_e),Re(_e)),S(j(ie),ke(ie),j(_e)),S(ke(ie),ke(_e),j(_e));const Q=ye=>[ye.x,-.035,-ye.w],ve=ye=>[ye.x,-.035,ye.w],we=ye=>[ye.x,-.057,0];S(Q(ie),Q(_e),we(ie)),S(we(ie),Q(_e),we(_e)),S(we(ie),we(_e),ve(ie)),S(ve(ie),we(_e),ve(_e)),S(Re(ie),Re(_e),Q(ie)),S(Q(ie),Re(_e),Q(_e)),S(ke(ie),ve(ie),ke(_e)),S(ve(ie),ve(_e),ke(_e))}const P=new _t;if(P.setAttribute("position",new Qe(A,3)),P.setAttribute("uv",new Qe(b,2)),P.computeVertexNormals(),g(P,s,0,0,0,"blade"),r.level>=4){const K=g(new rn(Math.min(1.25,.28+r.level*.026),.009,.018),h,.65,.131,0,"blade-detail");K.rotation.y=(r.silhouette-2.5)*.012}if(r.level>=8){const K=g(new rn(.3,.012,.025),l,1.38,.135,0,"blade-detail");K.rotation.y=Math.PI/12}const N=r.runeCount;for(let K=0;K<N;K++){const ie=.29+K*.142,_e=v(ie,.147,K%2?-.045:.045,.035,.012,.034,K%3===0?l:u,"blade-rune");_e.rotation.y=Math.PI/4}if(r.crest>0){const K=Math.min(r.crest,8);for(let ie=0;ie<K;ie++){const _e=.34+ie*.18,Re=g(new si(.029+ie%3*.006,0),d,_e,.159,0,"blade-crest");Re.scale.y=.42,Re.rotation.y=Math.PI/4}}const F=(e==="great"?.5:e==="short"?.34:.4)+Math.min(r.level,99)*.0023,G=r.guardStyle%3*.044,V=r.guardStyle>=3?.075:0,I=new Cn;I.moveTo(-.105,-F),I.lineTo(-.115-G,-F-V),I.quadraticCurveTo(-.19-G,-F*.85,-.085,-F*.66),I.lineTo(-.055,-.16),I.lineTo(.075,-.16),I.lineTo(.075,-F*.7),I.quadraticCurveTo(.17,-F*.87,.115+G,-F),I.lineTo(.075+G,-F*.53),I.lineTo(.09,-.12),I.lineTo(.09,.12),I.lineTo(.075+G,F*.53),I.lineTo(.115+G,F),I.quadraticCurveTo(.17,F*.87,.075,F*.7),I.lineTo(.075,.16),I.lineTo(-.055,.16),I.lineTo(-.085,F*.66),I.quadraticCurveTo(-.19-G,F*.85,-.115-G,F+V),I.lineTo(-.105,F),I.lineTo(-.105,-F);const z=new Rn(I,{depth:.105,bevelEnabled:!0,bevelSize:.014,bevelThickness:.014,bevelSegments:2,curveSegments:8});z.rotateX(-Math.PI/2),g(z,l,-.06,-.063,0,"guard");const k=v(-.095,.015,0,.13,.16,.25,h);if(k.rotation.y=r.guardStyle*.07,r.level>=3){for(const K of[-1,1])if(m(-.12,.058,K*F*.74,.048,.06,.043,r.level>=16?d:l),r.level>=15){const ie=g(new Ao(.052,.16,7),l,-.14,.041,K*(F+.06));ie.rotation.x=K*Math.PI/2}}if(r.level>=25)for(const K of[-1,1])g(new si(.061,0),d,-.024,.09,K*.2).scale.set(.63,.45,.76);const se=g(new Nn(.062,.071,.56,14),f,-.38,.02,0,"grip");se.rotation.z=Math.PI/2;for(let K=0;K<9;K++){const ie=g(new sn(.067,.007,4,14),K%3===0&&r.level>=7?l:h,-.16-K*.055,.02,0,"grip-band");ie.rotation.y=Math.PI/2}for(const K of[-.12,-.66]){const ie=g(new Nn(.076,.076,.028,16),l,K,.02,0);ie.rotation.z=Math.PI/2}const ae=m(-.73,.02,0,.11+r.crest*.003,.082,.091,l);if(r.level>=6&&(ae.rotation.x=Math.PI/8),m(-.746,.097,0,.048,.016,.048,d),r.level>=12&&(m(-.746,-.058,0,.039,.012,.039,d),v(-.38,.089,0,.12,.012,.025,l)),r.level>=35)for(const K of[-1,1])m(-.73,.023,K*.073,.029,.03,.014,d);return o.userData.swordName=r.name,o.userData.level=r.level,o.userData.form=r.silhouette,o}class Y_ extends Rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Q_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new dy(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=tr.extractUrlBase(e);o=tr.resolveURL(l,this.path)}else o=tr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new fd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ad){try{o[tt.KHR_BINARY_GLTF]=new fy(e)}catch(u){i&&i(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ey(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new J_;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new py(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new my;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new gy;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function j_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class K_{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],en);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new md(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new er(h),l.distance=u;break;case"spot":l=new pd(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),On(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class J_{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,n){const i=[];e.color=new Ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],en),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(i)}}class Z_{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Q_{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}}class $_{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ey{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ty{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],en)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ny{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class iy{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],en),Promise.all(r)}}class sy{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ry{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],en),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}}class oy{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ay{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ly{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class cy{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class hy{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class uy{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class dy{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==gn.TRIANGLES&&l.mode!==gn.TRIANGLE_STRIP&&l.mode!==gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const g of u){const v=new Xe,m=new R,p=new In,y=new R(1,1,1),x=new Zs(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,v.compose(m,p,y));for(const _ in c)if(_==="_COLOR_0"){const T=c[_];x.instanceColor=new Sl(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);xt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Ad="glTF",Gs=12,ru={JSON:1313821514,BIN:5130562};class fy{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Gs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ad)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Gs,r=new DataView(e,Gs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===ru.JSON){const l=new Uint8Array(e,Gs+o,a);this.content=n.decode(l)}else if(c===ru.BIN){const l=Gs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class py{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Dl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Dl[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=ds[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const g in d.attributes){const v=d.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}u(d)},a,l,en,f)})})}}class my{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gy{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class Cd extends vr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,v=g-l,m=-2*d+3*f,p=d-f,y=1-m,x=p-f+u;for(let _=0;_!==a;_++){const T=o[v+_+a],M=o[v+_+c]*h,w=o[g+_+a],A=o[g+_]*h;r[_]=y*T+x*M+m*w+p*A}return r}}const vy=new In;class xy extends Cd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return vy.fromArray(r).normalize().toArray(r),r}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ou={9728:zt,9729:Bt,9984:Iu,9985:ro,9986:qs,9987:xn},au={33071:pi,33648:po,10497:ii},Ta={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_y={CUBICSPLINE:void 0,LINEAR:lr,STEP:ar},wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new vt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),s.DefaultMaterial}function Ai(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function My(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function by(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sy(s){let e;const t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ea(t.attributes):e=s.indices+":"+Ea(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ea(s.targets[n]);return e}function Ea(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Il(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ty(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wy=new Xe;class Ey{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new j_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Nm(this.options.manager):this.textureLoader=new zm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ai(r,a,i),On(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(tr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ta[i.type],a=ds[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Pt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ta[i.type],l=ds[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(d&&d!==u){const p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(v=new l(a,p*d,i.count*d/h),x=new Cp(v,d/h),t.cache.add(y,x)),m=new $l(x,c,f%d/h,g)}else a===null?v=new l(i.count*c):v=new l(a,f,i.count*c),m=new Pt(v,c,g);if(i.sparse!==void 0){const p=Ta.SCALAR,y=ds[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,T=new y(o[1],x,i.sparse.count*p),M=new l(o[2],_,i.sparse.count*c);a!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,A=T.length;w<A;w++){const b=T[w];if(m.setX(b,M[w*c]),c>=2&&m.setY(b,M[w*c+1]),c>=3&&m.setZ(b,M[w*c+2]),c>=4&&m.setW(b,M[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=ou[f.magFilter]||Bt,h.minFilter=ou[f.minFilter]||xn,h.wrapS=au[f.wrapS]||ii,h.wrapT=au[f.wrapT]||ii,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==Bt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){const m=new At(v);m.needsUpdate=!0,f(m)}),t.load(tr.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),On(u,o),u.userData.mimeType=o.mimeType||Ty(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new $u,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Qu,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return vt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){const u=i[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],en),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,yt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=vn);const h=r.alphaMode||wa.OPAQUE;if(h===wa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===wa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Rt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rt){const u=r.emissiveFactor;a.emissive=new Ue().setRGB(u[0],u[1],u[2],en)}return r.emissiveTexture!==void 0&&o!==Rt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),On(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ai(i,u,r),u})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return lu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=Sy(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=lu(new _t,l,t),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?yy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const v=h[d],m=o[d];let p;const y=l[d];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Pp(v,y):new Oe(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?p.geometry=iu(p.geometry,Hu):m.mode===gn.TRIANGLE_FAN&&(p.geometry=iu(p.geometry,Ml));else if(m.mode===gn.LINES)p=new Fp(v,y);else if(m.mode===gn.LINE_STRIP)p=new nc(v,y);else if(m.mode===gn.LINE_LOOP)p=new Op(v,y);else if(m.mode===gn.POINTS)p=new Bp(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&by(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),On(p,r),m.extensions&&Ai(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ai(i,u[0],r),u[0];const f=new et;r.extensions&&Ai(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(wt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ro(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new Xe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ec(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],g=i.samplers[d.sampler],v=d.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let x=0,_=f.length;x<_;x++){const T=f[x],M=d[x],w=g[x],A=v[x],b=m[x];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const S=n._createAnimationTracks(T,M,w,A,b);if(S)for(let P=0;P<S.length;P++)p.push(S[P])}const y=new Am(r,void 0,p);return On(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,wy)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Zu:l.length>1?h=new et:l.length===1?h=l[0]:h=new xt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),On(h,r),r.extensions&&Ai(n,h,r),r.matrix!==void 0){const u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new et;n.name&&(r.name=i.createUniqueName(n.name)),On(r,n),n.extensions&&Ai(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Dn||f instanceof At)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];di[r.path]===di.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(di[r.path]){case di.weights:l=_s;break;case di.rotation:l=ys;break;case di.translation:case di.scale:l=Ms;break;default:switch(n.itemSize){case 1:l=_s;break;case 2:case 3:default:l=Ms;break}break}const h=i.interpolation!==void 0?_y[i.interpolation]:lr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+di[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Il(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ys?xy:Cd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ay(s,e,t){const n=e.attributes,i=new Ft;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){const h=Il(ds[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const v=Il(ds[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Hn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function lu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Dl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return st.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),On(s,e),Ay(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?My(s,e.targets,t):s})}const Cy=.15893516514606315,Ry=1.3838764196147357,Py=[-.03715723845811129,2.049750236274513,.23999999999999844],Ly=[-.14074762010433647,-.07776721228345984,.849954748841661],bo={pitch:Cy,targetY:Ry,headPivot:Py,mouth:Ly},$r={targetY:bo.targetY,pitch:bo.pitch,fov:18,phoneDepth:21};function Dy(){const s=new et,e=new et,t=new et,n=new et,i=new et,r=[new et,new et];s.add(e,n,i),e.add(t,...r),s.name="食铁兽·参考映射立体熊猫",s.visible=!1,s.userData.species="giant-panda",s.userData.style="polygon-sculpture",s.userData.limbStyle="reference-shaped-curled-hands-seated-feet",s.userData.reconstruction="reference-projected-closed-volumes",s.userData.triangles=0,e.position.fromArray(bo.headPivot);const o=new R().fromArray(bo.mouth),a=new Oe(new ac(.1,1),new vt({color:12632509,roughness:.75,flatShading:!0}));i.position.set(0,.3,-.65),i.add(a),a.castShadow=!0;const c=new Y_().loadAsync("./art/panda-reference-v6.glb").then(l=>{const h=(v,m)=>{const p=l.scene.getObjectByName(v);if(!p)throw new Error("Missing panda part: "+v);m.position.copy(p.position),m.quaternion.copy(p.quaternion),m.scale.copy(p.scale);for(const y of[...p.children])m.add(y)};h("panda_jaw",t),h("panda_eye_l",r[0]),h("panda_eye_r",r[1]),h("panda_head",e),h("panda_body",n);const u=v=>{const m=Math.max(0,1-Math.abs(v-o.x)/.53);return m*m*(3-2*m)};t.traverse(v=>{if(!(v instanceof Oe))return;const m=v.geometry.getAttribute("position"),p=Float32Array.from(m.array),y=new Xe;v.onBeforeRender=()=>{t.updateMatrix(),y.copy(t.matrix).invert();for(let x=0;x<m.count;x++){const _=new R(p[x*3],p[x*3+1],p[x*3+2]),T=_.clone().add(t.position),M=_.applyMatrix4(t.matrix),w=T.clone().lerp(M,u(T.x)).applyMatrix4(y);m.setXYZ(x,w.x,w.y,w.z)}m.needsUpdate=!0}});let f;if(t.traverse(v=>{!f&&v instanceof Oe&&v.material instanceof Rt&&v.material.map&&(f=v)}),f){const v=f.geometry.getAttribute("position"),m=f.geometry.getAttribute("uv"),p=[];for(let M=0;M<v.count;M++){const w=m.getX(M)*1122-.5,A=m.getY(M)*1402-.5;Math.abs(A-(555-.16*w))<9&&p.push(new R(v.getX(M),v.getY(M),v.getZ(M)))}p.sort((M,w)=>M.x-w.x);const y=new _t,x=new Pt(new Float32Array(p.length*6),3),_=[];for(let M=0;M<p.length-1;M++)_.push(M*2,M*2+1,M*2+2,M*2+1,M*2+3,M*2+2);y.setAttribute("position",x),y.setIndex(_);const T=new Oe(y,new Rt({color:527894,toneMapped:!1,fog:!1,side:vn}));T.frustumCulled=!1,e.add(T),T.onBeforeRender=()=>{t.updateMatrix(),p.forEach((M,w)=>{const A=M.clone().add(t.position),b=A.clone().lerp(M.clone().applyMatrix4(t.matrix),u(A.x));x.setXYZ(w*2,A.x,A.y,A.z),x.setXYZ(w*2+1,b.x,b.y,b.z)}),x.needsUpdate=!0}}const d=l.scene.getObjectByName("panda_reference");if(!d)throw new Error("Missing panda root");for(const v of[...d.children])["panda_head","panda_body"].includes(v.name)||s.add(v);s.traverse(v=>{var p;if(!(v instanceof Oe))return;v.castShadow=!0;const m=Array.isArray(v.material)?v.material:[v.material];for(const y of m)if(y instanceof Rt)y.toneMapped=!1,y.fog=!1,y.alphaToCoverage=!0,v.receiveShadow=!1;else if(y instanceof vt){v.geometry.computeVertexNormals();const x=v.geometry.getAttribute("position");if(v.geometry.index&&v.geometry.index.count<x.count*2){const _=v.geometry.getAttribute("normal"),T=new R;for(let M=0;M<x.count;M++)T.add(new R(x.getX(M),x.getY(M),x.getZ(M)));T.divideScalar(x.count);for(let M=0;M<x.count;M++){const w=new R(x.getX(M),x.getY(M),x.getZ(M)).sub(T).normalize();_.setXYZ(M,w.x,w.y,w.z)}}y.flatShading=!1,y.envMapIntensity=.35,y.needsUpdate=!0,v.receiveShadow=!0}s.userData.triangles+=(((p=v.geometry.index)==null?void 0:p.count)??v.geometry.getAttribute("position").count)/3}),s.updateWorldMatrix(!0,!0);const g=new Ft().setFromObject(s);s.userData.volumeDepth=g.max.z-g.min.z,s.visible=!0});return{root:s,head:e,jaw:t,belly:n,tail:i,eyes:r,mouth:o,ready:c}}class Iy{constructor(e){Z(this,"material");Z(this,"base",new Ue);Z(this,"hot",new Ue(16737562));Z(this,"glow",new Ue);Z(this,"level",0);Z(this,"uniforms",{forgeTime:{value:0},forgeFrenzy:{value:0},forgeCosmos:{value:0},forgeHeat:{value:0},forgeWorldToSword:{value:new Xe}});this.material=e.clone(),this.material.metalness=.78,this.material.roughness=.36,this.decorate(this.material),this.setLevel(0,"iron")}decorate(e){e.onBeforeCompile=t=>{Object.assign(t.uniforms,this.uniforms),t.uniforms.forgeHeatResponse={value:e.userData.forgeHeat??.25},t.uniforms.forgeCosmosCoverage={value:e.userData.cosmosCoverage??.985},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
// Bound reflected HDR energy under enchantment so polished metal cannot wash out the starfield.
float forgeEnergy=max(max(outgoingLight.r,outgoingLight.g),outgoingLight.b);
vec3 forgeControlledMetal=outgoingLight/(1.0+max(forgeEnergy-1.5,0.0)/1.5);
outgoingLight=mix(outgoingLight,forgeControlledMetal,forgeEnchanted);
outgoingLight = mix(outgoingLight,outgoingLight*0.12+forgeCosmic*1.20+vec3(0.08,0.14,0.26)*forgeRim,forgeCosmos*forgeCosmosCoverage);
#include <opaque_fragment>`)},e.customProgramCacheKey=()=>"whole-sword-pbr-rainbow-cosmos-v4",e.needsUpdate=!0}setLevel(e,t){this.level=e;const i=[[0,t==="bronze"?14199912:t==="cold"?11069166:12964054],[3,11652804],[6,10731213],[10,12694478],[14,14273702],[15,11652048],[25,9216953],[29,14474440],[99,15066843]];let r=i[0],o=i[i.length-1];for(let a=1;a<i.length;a++)if(e<=i[a][0]){r=i[a-1],o=i[a];break}this.base.set(r[1]).lerp(new Ue(o[1]),wt.clamp((e-r[0])/(o[0]-r[0]),0,1))}update(e,t,n,i=!1){this.uniforms.forgeTime.value=e,this.uniforms.forgeFrenzy.value=n?1:0,this.uniforms.forgeCosmos.value=i?1:0,this.uniforms.forgeHeat.value=t,this.material.color.copy(this.base).lerp(this.hot,t*.68),this.material.emissive.copy(this.base).multiplyScalar(0),this.material.emissive.add(this.glow.copy(this.hot).multiplyScalar(t*.85)),this.material.emissiveIntensity=1}setTransform(e){e.updateWorldMatrix(!0,!1),this.uniforms.forgeWorldToSword.value.copy(e.matrixWorld).invert()}get color(){return this.material.color.getHexString()}}const fo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Hi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ny=new Ro(-1,1,1,-1,0,1);class Uy extends _t{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const Fy=new Uy;class Lo{constructor(e){this._mesh=new Oe(Fy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ny)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rd extends Hi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gi.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Lo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class cu extends Hi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Oy extends Hi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hu{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rd(fo),this.copyPass.material.blending=$n,this.clock=new Hm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}cu!==void 0&&(o instanceof cu?n=!0:o instanceof Oy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class By extends Hi{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const zy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ss extends Hi{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,o,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Zt(r,o,{type:hn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Zt(r,o,{type:hn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=zy;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(fo.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader,blending:Ua,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ue,this._oldClearAlpha=1,this._basic=new Rt,this._fsQuad=new Lo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ss.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ss.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ss.BlurDirectionX=new re(1,0);Ss.BlurDirectionY=new re(0,1);const eo={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},to={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Aa={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class ky extends Hi{constructor(){super(),this._edgesRT=new Zt(1,1,{depthBuffer:!1,type:hn}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Zt(1,1,{depthBuffer:!1,type:hn}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new At,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=Bt,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new At,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=zt,this._searchTexture.minFilter=zt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=gi.clone(eo.uniforms),this._materialEdges=new Ut({defines:Object.assign({},eo.defines),uniforms:this._uniformsEdges,vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader}),this._uniformsWeights=gi.clone(to.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Ut({defines:Object.assign({},to.defines),uniforms:this._uniformsWeights,vertexShader:to.vertexShader,fragmentShader:to.fragmentShader}),this._uniformsBlend=gi.clone(Aa.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Ut({uniforms:this._uniformsBlend,vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader}),this._fsQuad=new Lo(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const no={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Hy extends Hi{constructor(){super(),this.uniforms=gi.clone(no.uniforms),this.material=new vm({name:no.name,uniforms:this.uniforms,vertexShader:no.vertexShader,fragmentShader:no.fragmentShader}),this._fsQuad=new Lo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Eu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ru&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vy{constructor(e,t,n){Z(this,"composer");Z(this,"bloomComposer");Z(this,"bloom");Z(this,"sceneTarget");Z(this,"black",new Rt({color:0}));Z(this,"samples");this.renderer=e;const i=e.getContext(),r=i.getInternalformatParameter(i.RENDERBUFFER,i.RGBA16F,i.SAMPLES);this.samples=Math.max(0,...Array.from(r).filter(a=>a<=4)),this.sceneTarget=new Zt(1,1,{type:hn,samples:this.samples}),this.sceneTarget.texture.name="SwordGlow.antialiased-scene",this.bloomComposer=new hu(e),this.bloomComposer.renderToScreen=!1,this.bloomComposer.addPass(new By(t,n)),this.bloom=new Ss(new re(256,256),.31,.22,1.3),this.bloomComposer.addPass(this.bloom),this.composer=new hu(e,new Zt(1,1,{type:hn,depthBuffer:!1}));const o=new Rd({uniforms:{baseTexture:{value:null},bloomTexture:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D baseTexture;uniform sampler2D bloomTexture;varying vec2 vUv;void main(){gl_FragColor=texture2D(baseTexture,vUv)+texture2D(bloomTexture,vUv);}"});o.uniforms.baseTexture.value=this.sceneTarget.texture,o.uniforms.bloomTexture.value=this.bloom.renderTargetsHorizontal[0].texture,this.composer.addPass(o),this.samples===0&&this.composer.addPass(new ky),this.composer.addPass(new Hy)}resize(e,t){const n=this.renderer.getPixelRatio();this.sceneTarget.setSize(Math.round(e*n),Math.round(t*n)),this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.bloomComposer.setPixelRatio(Math.min(n,1.5)),this.bloomComposer.setSize(e,t)}render(e,t,n,i,r,o=!0){if(this.renderer.info.reset(),!n||!r){this.renderer.render(e,t);return}const a=new Map,c=new Map,l=e.background,h=this.renderer.shadowMap.enabled,u=r.userData.materials;try{for(const d of e.children)d!==r&&(a.set(d,d.visible),d instanceof xr||(d.visible=!1));o||r.traverse(d=>{var g;d instanceof Oe&&d.material!==(u==null?void 0:u.inlay)&&d.material!==(u==null?void 0:u.gem)&&d.material!==((g=r.userData.referenceFx)==null?void 0:g.glow)&&(c.set(d,d.material),d.material=this.black)}),e.background=new Ue(0),this.renderer.shadowMap.enabled=!1,this.bloom.strength=i?.4:o?.31:.22,this.bloomComposer.render()}finally{a.forEach((d,g)=>g.visible=d),c.forEach((d,g)=>g.material=d),e.background=l,this.renderer.shadowMap.enabled=h}const f=this.renderer.getRenderTarget();try{this.renderer.setRenderTarget(this.sceneTarget),this.renderer.clear(),this.renderer.render(e,t)}finally{this.renderer.setRenderTarget(f)}this.composer.render()}dispose(){this.black.dispose(),this.sceneTarget.dispose();for(const e of[this.composer,this.bloomComposer]){for(const t of e.passes)t.dispose();e.dispose()}}}const uu=1024,du=448,Ws=["#ff967f","#efc06e","#b9e3a0","#b4d9ec","#edb8de"],fu=["破坏","损伤","维持","成功","大成功"],Ca=s=>s>=1e12?s.toExponential(2):Math.floor(s).toLocaleString("zh-CN");function Gy(s,e,t,n){const i=e.session,r=(i==null?void 0:i.phase)==="forge"||(i==null?void 0:i.phase)==="finished",o=!!i&&Ln(i),a=!!(i!=null&&i.superGod),c=o?Math.max(0,(i.frenzyUntil-Date.now())/1e3).toFixed(1):"";s.setTransform(s.canvas.width/uu,0,0,s.canvas.height/du,0,0),s.clearRect(0,0,uu,du);const l=s.createLinearGradient(0,0,1024,448);l.addColorStop(0,"#684729"),l.addColorStop(.45,"#57371f"),l.addColorStop(1,"#382215"),s.fillStyle=l,s.fillRect(0,0,1024,448);for(let d=0;d<85;d++){const g=d*197.31%1024;s.strokeStyle=d%3?"rgba(226,170,102,.035)":"rgba(26,13,6,.055)",s.lineWidth=1+d%4,s.beginPath(),s.moveTo(g,0),s.bezierCurveTo(g+9,130,g-12,280,g+4,448),s.stroke()}const h=s.createLinearGradient(0,0,0,448);h.addColorStop(0,"rgba(255,210,150,.06)"),h.addColorStop(.3,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(16,8,3,.22)"),s.fillStyle=h,s.fillRect(0,0,1024,448);const u=(d,g,v,m,p="#f6eada",y=!1,x=940)=>{s.shadowBlur=0,s.fillStyle=p,s.font=`${y?"600 ":""}${m}px "Noto Sans CJK SC","Microsoft YaHei",sans-serif`,s.fillText(d,g,v,x)},f=(d,g,v,m,p=3)=>{s.fillStyle=m,s.shadowColor=m,s.shadowBlur=9,s.fillRect(d,g,v,p),s.shadowBlur=0};if(s.textAlign="left",u(i?ti(i.blade,i.level,e.showLegacySwords).name:"锻造台",40,66,44,"#fff4e5",!0,775),s.textAlign="right",i&&u("+"+i.level,984,66,48,"#fff4e5",!0,160),s.textAlign="left",r){u("当前价值",40,142,26,"#ded1be"),s.textAlign="right",u(Ca(n.value)+" G",984,154,62,"#fff0cf",!1,740),s.textAlign="left";const d=i==null?void 0:i.strikes.at(-1),g=d?{break:0,damage:1,unchanged:2,success:3,great:4}[d.result]:3;let v="点台面落锤";if(d&&(v=d.superGod?"超神 +"+(d.after-d.before):fu[g]+(d.after===d.before?"":` ${d.after>d.before?"+":""}${d.after-d.before}`)),u(v,40,207,32,a?"#b9d9ff":d?Ws[g]:"#ded1be",!0,480),d){const y=d.afterValue-d.beforeValue;u(`${y>=0?"+":"−"}${Ca(Math.abs(y))} G  ·  ${d.valueMultiplier.toFixed(2).replace(/0$/,"")}倍`,40,246,26,"#f4e7d2",!1,500)}else u("随时收剑，保住价值",40,246,26,"#ded1be",!1,500);s.textAlign="right",u(a?"超神":o?`入神 ${c}s`:`入神蓄力 ${(i==null?void 0:i.frenzyCharge)||0}/10`,984,207,27,a?"#b9d9ff":o?"#ffd5a1":"#ded1be",!1,430),s.textAlign="left";for(let y=0;y<10;y++){const x=a||o||y<((i==null?void 0:i.frenzyCharge)||0);s.fillStyle=x?a?"#bddeff":"#ffe7b7":"#755336",s.shadowColor=a?"#719cff":"#ff9a43",s.shadowBlur=x?12:0,s.fillRect(568+y*42,232,27,12),s.shadowBlur=0}const m=[t.break,t.damage,t.unchanged,t.success,t.great];for(let y=0;y<5;y++){const x=40+y*192;f(x,280,172,Ws[y]),s.textAlign="center",u(fu[y],x+86,325,30,Ws[y],!0,180),u((m[y]/100).toFixed(1)+"%",x+86,369,36,Ws[y],!1,180)}s.textAlign="left";let p=40;for(let y=0;y<5;y++){const x=944*m[y]/1e4;x>0&&f(p,410,x,Ws[y],5),p+=x}}else{u(n.cue,40,155,40,"#fff0cf",!0,944);const{min:d,max:g}=Fl(e.furnaceLevel,e.relics.includes("ember"));u((i==null?void 0:i.phase)==="heat"?`炉火 ${Math.round(n.heat)}%`:"点炉子入炉 · 点铸剑台放剑",40,240,34,"#f3dcc0",!1,940),u((i==null?void 0:i.phase)==="heat"?`${d}%—${g}% 取剑最佳`:n.result||"准备好后，开始锻造",40,296,27,"#ded1be",!1,940),s.fillStyle="#785234",s.fillRect(40,374,944,6),(i==null?void 0:i.phase)==="heat"&&f(40,374,944*Math.min(100,Math.max(0,n.heat))/100,"#ffc176",6)}return[n.cue,n.result,Ca(n.value),a?"超神":o?"入神":"蓄力",c].join(" · ")}function pu(s){const e=new et,t=Math.max(0,ls.findIndex(o=>o.id===s));e.name="relic-"+s;const n=[14924386,16747587,15253852,12948848,8968393,11901930,15517804,9551563,13288942],i=new vt({color:n[t],metalness:.68,roughness:.23,emissive:n[t],emissiveIntensity:.12}),r=(o,a=0,c=0)=>{const l=new Oe(o,i);return l.position.set(a,c,.06),e.add(l),l};if(["guard","lucky","coin"].includes(s))r(new sn(.21,.045,10,32)),r(new xi(.08,16,12),0,-.12);else if(s==="rhythm")for(let o=0;o<3;o++)r(new rn(.07,.16+o*.11,.09),(o-1)*.13);else if(s==="steady")r(new rn(.3,.14,.12)),r(new Nn(.05,.11,.28,16),0,-.12);else if(s==="salvage")r(new xi(.24,20,16)).scale.set(1,.82,.55);else{const o=r(new si(.25,0));o.scale.y=1.3}return e}function Pd(s,e=512){const t=document.createElement("canvas");t.width=e,t.height=96;const n=t.getContext("2d");n.fillStyle="#2b2017",n.fillRect(0,0,e,96),n.strokeStyle="#9b7846",n.lineWidth=5,n.strokeRect(4,4,e-8,88),n.fillStyle="#ebd4ab",n.font='600 34px "Microsoft YaHei",sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(s,e/2,49,e-26);const i=new vi(t);return i.colorSpace=yt,new Oe(new ki(1,.1875),new Rt({map:i,toneMapped:!1}))}function Wy(s,e,t){e.caseIds.map(i=>e.swords.find(r=>r.id===i&&r.disposal==="COLLECTED")).filter(i=>!!i).forEach((i,r)=>{const o=Ll(t,i.blade,i.level,i.material,e.showLegacySwords);o.quaternion.setFromAxisAngle(new R(0,0,1),Math.PI/2).multiply(new In().setFromAxisAngle(new R(1,0,0),Math.PI/2)),o.scale.setScalar(.66),o.position.set((r%3-1)*1.4,Math.floor(r/3)*2.65+.75,.29),o.name="collected-"+i.id,s.add(o);const a=Pd((i.name||o.userData.swordName)+" · "+i.value.toLocaleString("zh-CN")+" 金");a.position.set((r%3-1)*1.4,Math.floor(r/3)*2.65+.13,.34),a.scale.set(1.28,1.28,1),s.add(a)})}function Ra(s){s.traverse(e=>{var t;if(e instanceof Oe){e.geometry.dispose();const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n)i instanceof Rt&&((t=i.map)==null||t.dispose()),i.dispose()}}),s.clear()}const Xs=wt.clamp;class Xy{constructor(e){Z(this,"renderer");Z(this,"scene",new Ql);Z(this,"camera",new Wt(46,1,.1,50));Z(this,"target",new R(0,1.45,-.3));Z(this,"view","forge");Z(this,"sword",new et);Z(this,"swordPlace","anvil");Z(this,"swordScale",1);Z(this,"bladeShapeKey","");Z(this,"heat",0);Z(this,"move",null);Z(this,"targets",{furnace:{box:new Ft(new R(-4.05,0,-2.35),new R(-2.25,4.5,-.9)),anchor:new R(-3.15,2.55,-.96)},anvil:{box:new Ft(new R(-1.65,.8,-.7),new R(1.65,1.65,.9)),anchor:new R(0,1.55,.25)},cat:{box:new Ft(new R(2.2,1,-2.1),new R(4.6,4.35,.2)),anchor:new R(3.4,2.95,-.5)},relics:{box:new Ft(new R(4.75,0,-2.4),new R(6.75,3.3,-1.4)),anchor:new R(5.75,2.6,-1.4)}});Z(this,"hammer",new et);Z(this,"cat",new et);Z(this,"head",new et);Z(this,"jaw",new et);Z(this,"belly");Z(this,"tail");Z(this,"catEyes",[]);Z(this,"catBlink",()=>{});Z(this,"catMouth",new R(0,-.115,.52));Z(this,"bladeMat",new vt({color:11914449,metalness:.82,roughness:.3}));Z(this,"bladeFinish");Z(this,"swordGlow");Z(this,"bladePhase","");Z(this,"bladeCoolingAt",-10);Z(this,"furnaceLight",new er(16740390,20,8,2));Z(this,"board");Z(this,"boardInfo",{cue:"把剑送入炉火",result:"",value:0,heat:0});Z(this,"boardFrame",new et);Z(this,"forgeBenchBounds",new Ft);Z(this,"forgeHammerBounds",new Ft);Z(this,"boardProb");Z(this,"boardWide",!1);Z(this,"boardLayout",{width:0,height:0,top:0,bottom:0});Z(this,"boardCanvas",document.createElement("canvas"));Z(this,"lastBoard","");Z(this,"submittedBoardHits",0);Z(this,"submittedBladeFinish","metal");Z(this,"state",null);Z(this,"merchantRoot",new et);Z(this,"relicSlots",[]);Z(this,"wallRelics",new et);Z(this,"collectionRoot",new et);Z(this,"collectionSwords",new et);Z(this,"displayKey","");Z(this,"boardHidden",!1);Z(this,"hitStart",-10);Z(this,"hitSpeed",1);Z(this,"hitResult","success");Z(this,"hitImpact",!1);Z(this,"onHitImpact",null);Z(this,"hitImpactAt",-10);Z(this,"hitContactRendered",!1);Z(this,"submittedHammerContact",!1);Z(this,"hammerRest",new R(1.25,1.65,-.38));Z(this,"hammerRaised",new R(1.25,1.85,-.38));Z(this,"hammerContact",new R(1.2,1.75,.11));Z(this,"hammerBottomOffset",0);Z(this,"contactShapeKey","");Z(this,"tributeStart",-10);Z(this,"tributeElapsed",0);Z(this,"tributeDone",null);Z(this,"tributeCount",3);Z(this,"rewards",[]);Z(this,"fx",[]);Z(this,"flames",[]);Z(this,"raf",0);Z(this,"prev",0);Z(this,"renderAt",0);Z(this,"gpuFrame",null);Z(this,"submittedTribute",0);Z(this,"submittedStation","forge");Z(this,"submittedCameraReady",!1);Z(this,"renderedTribute",0);Z(this,"paused",!1);Z(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)").matches);Z(this,"observer");Z(this,"scratch",new R);Z(this,"surfaces");Z(this,"forgeMaterials");Z(this,"roomKey");Z(this,"roomFill");Z(this,"roomAmbient");Z(this,"forgeKey");Z(this,"swordEnvironment");Z(this,"uprightOak");Z(this,"forgeSwordY",1.5);Z(this,"forgeProofPending",!0);Z(this,"fitCamera",new Wt(46,1,.1,50));Z(this,"lastForgeOffset",-1);Z(this,"pendingForgeProof",null);Z(this,"pendingCatProof",null);Z(this,"onVisibility",()=>{this.paused=document.hidden,this.paused||(this.prev=0,this.raf=requestAnimationFrame(this.tick))});Z(this,"stageAbort",new AbortController);Z(this,"tick",e=>{var w,A,b,S,P,N,F,G,V;if(this.paused)return;const t=e/1e3,n=this.prev?Math.min(.2,t-this.prev):.016;this.prev=t;const i=this.cameraPose();this.camera.fov=wt.lerp(this.camera.fov,i.fov,1-Math.exp(-n*5)),this.camera.setViewOffset(this.host.clientWidth,this.host.clientHeight,0,this.host.clientHeight*i.offset,this.host.clientWidth,this.host.clientHeight),this.camera.position.lerp(i.position,1-Math.exp(-n*5)),this.target.lerp(i.target,1-Math.exp(-n*5)),this.camera.lookAt(this.target),this.camera.updateMatrixWorld(!0),this.positionTargets();const r=!!this.move;if(this.move&&!this.tributeDone){const I=this.move,z=this.swordPose(I.to),k=Xs((t-I.start)/.7,0,1),se=k*k*(3-2*k);this.sword.position.lerpVectors(I.from,z.position,se),this.sword.position.y+=Math.sin(k*Math.PI)*.8,this.sword.quaternion.slerpQuaternions(I.rotation,z.rotation,se),this.sword.scale.lerpVectors(I.scale,z.scale,se),this.renderer.shadowMap.needsUpdate=!0,k>=1&&(this.swordPlace=I.to,this.move=null,this.applySwordPose(I.to),this.forgeProofPending=!0,I.done())}this.host.dataset.swordPosition=JSON.stringify(this.sword.position.toArray()),this.boardFrame.visible=!this.boardHidden&&this.view==="forge"&&((A=(w=this.state)==null?void 0:w.session)==null?void 0:A.phase)!=="finished"&&((S=(b=this.state)==null?void 0:b.session)==null?void 0:S.phase)!=="broken",this.boardFrame.quaternion.copy(this.camera.quaternion);const o=this.ledgerLayout();this.boardLayout=o,this.boardWide!==o.wide&&(this.boardWide=o.wide,this.lastBoard="",this.state&&this.drawBoard(this.state,this.boardProb)),this.boardFrame.position.set(0,3.55,-1.45),this.boardFrame.scale.setScalar(1),this.boardFrame.updateMatrixWorld(!0);const a=this.boardFrame.position.clone().project(this.camera);a.x=2*(o.left+o.width/2)/this.host.clientWidth-1,a.y=1-(o.top+o.bottom)/this.host.clientHeight,this.boardFrame.position.copy(a.unproject(this.camera)),this.boardFrame.updateMatrixWorld(!0);const c=this.boardFrame.localToWorld(new R(-2.525,0,0)).project(this.camera),h=(this.boardFrame.localToWorld(new R(2.525,0,0)).project(this.camera).x-c.x)*this.host.clientWidth/2,u=o.width/h;this.boardFrame.scale.set(u,u*(o.height/o.width)/(1.72/5.05),u),this.boardFrame.updateMatrixWorld(!0),this.positionWallRelics(),this.furnaceLight.intensity=20+Math.sin(t*11)*1.5+Math.sin(t*23)*1.2,this.flames.forEach((I,z)=>{I.scale.y=I.userData.height*(.9+Math.sin(t*7+z*4)*.12),I.rotation.y=t+z});const f=(t-this.hitStart)/this.hitSpeed,d=this.onHitImpact&&f>=.18?.18:this.hitImpact?.18+(t-this.hitImpactAt)/this.hitSpeed:f,g=this.hammerRest,v=this.hammerRaised,m=this.hammerContact;let p=-.3;if(this.hammer.position.copy(g),d>=0&&d<.08){const I=d/.08;p=wt.lerp(-.3,-.48,I),this.hammer.position.lerpVectors(g,v,I)}else if(d>=.08&&d<.18){const I=Math.pow((d-.08)/.1,2);p=wt.lerp(-.48,1.38,I),this.hammer.position.lerpVectors(v,m,I)}else if(d>=.18&&d<.22)p=1.38,this.hammer.position.copy(m);else if(d>=.22&&d<.55){const I=(d-.22)/.33,z=1-Math.pow(1-I,3);p=wt.lerp(1.38,-.3,z),this.hammer.position.lerpVectors(m,g,z)}this.hammer.rotation.z=p;const y=((P=this.state)==null?void 0:P.session)&&Ln(this.state.session),x=this.bladePhase==="heat"?this.heat/100:this.bladePhase==="forge"?this.heat/100*Math.exp(-Math.max(0,t-this.bladeCoolingAt)*.7):0,_=!!((F=(N=this.state)==null?void 0:N.session)!=null&&F.superGod);if(this.bladeFinish.setTransform(this.sword),this.bladeFinish.update(t,x,!!y,_),W_(this.sword,t,!!y||_,this.reduced),this.host.dataset.bladeFinish=_?"cosmos":y?"rainbow":"metal",this.host.dataset.hiltFinish=this.host.dataset.bladeFinish,this.host.dataset.bladeColor=this.bladeFinish.color,this.hitContactRendered&&!this.hitImpact&&this.onHitImpact){this.hitImpact=!0,this.hitImpactAt=t;const I=this.onHitImpact;this.onHitImpact=null,this.hitResult=I(),this.host.dataset.hammerStage="impact",this.host.dataset.hammerImpacts=String(Number(this.host.dataset.hammerImpacts||0)+1),this.hitResult==="break"&&this.spawnFragments(),this.spawnSparks(this.hitResult==="break"?36:this.hitResult==="damage"?12:this.hitResult==="great"?40:this.hitResult==="unchanged"?6:22,new R(.12,this.forgeSwordY+.05,.11))}if(d>=.18&&d<.36&&this.hitResult!=="break"&&this.swordPlace==="anvil"&&!this.move&&(this.sword.position.y=this.forgeSwordY+Math.sin((d-.18)/.18*Math.PI)*.025),d>=.18&&d<.32&&!this.reduced){const I=(d-.18)/.14;this.camera.position.y+=Math.sin(I*Math.PI*4)*.018*(1-I)}d>=.55&&this.host.dataset.hammerStage!=="idle"&&(this.host.dataset.hammerStage="idle"),(d<.6||this.tributeDone)&&(this.renderer.shadowMap.needsUpdate=!0),this.tributeDone||(this.cat.rotation.y=0,this.head.rotation.z=0,this.jaw.rotation.x=0,this.belly.scale.set(1,1,1));const T=t%6.7,M=this.tributeDone?1:T<.19?Math.max(.08,Math.abs(T-.095)/.095):1;if(this.catEyes.forEach(I=>I.scale.y=M),this.host.dataset.pandaEyeOpen=String(M),this.catBlink(M),this.tail.rotation.z=Math.sin(t*1.5)*(this.tributeDone?.1:.045),this.tributeDone){this.tributeElapsed+=n,this.tributeElapsed>=1.7&&this.renderedTribute<.55?this.tributeElapsed=1.69:this.tributeElapsed>=2.35&&this.renderedTribute<1.7?this.tributeElapsed=2.34:this.tributeElapsed>=3&&this.renderedTribute<2.3?this.tributeElapsed=2.99:this.tributeElapsed>=3.55&&this.renderedTribute<3?this.tributeElapsed=3.54:this.tributeElapsed>=4.1&&this.renderedTribute<3.5?this.tributeElapsed=4.09:this.tributeElapsed>=6.5&&this.renderedTribute<4.1&&(this.tributeElapsed=6.49);const I=this.tributeElapsed;if(I<1.7){this.cat.rotation.y=0,this.jaw.rotation.x=.28;const z=Xs((I-.55)/1.15,0,1),k=this.head.localToWorld(this.catMouth.clone());this.sword.visible=!0,this.sword.position.set(k.x,k.y,k.z+(1-z)*2.42*1.05),this.sword.rotation.set(0,Math.PI/2,0),this.sword.scale.set(1.05*(1-z*.96),1.05,1.05)}else if(I<3)this.stage("chewing","食铁兽张嘴吞下巨剑……咔嚓咔嚓"),this.sword.visible=!1,this.jaw.rotation.x=Math.abs(Math.sin(I*14))*.1,this.belly.scale.set(1,1,1+Math.sin((I-1.7)/1.3*Math.PI)*.28);else if(I<4.1)this.stage("turning","食铁兽转过身，准备送出铁剑……"),this.cat.rotation.y=-Xs((I-3)/1.1,0,1)*Math.PI*.8,this.jaw.rotation.x=0;else if(I<6.5){this.stage("ejecting","噗！食铁兽拉出 "+this.tributeCount+" 把铁剑，掉进接剑盘");const z=Math.min(this.tributeCount,Math.floor((I-4.1)/.32)+1);for(;this.rewards.length<z;){const k=this.makeSword();k.scale.setScalar(.35),this.scene.add(k),this.rewards.push(k),this.spawnSparks(7,new R(3.4,1.35,-.2))}this.rewards.forEach((k,se)=>{const ae=Xs((I-4.1-se*.32)/.65,0,1);k.position.set(3.4+(se-(this.tributeCount-1)/2)*.22*ae,1.53+Math.sin(ae*Math.PI)*.55-ae*.35,-.25+ae*.65),k.rotation.set(ae*.12,ae*.8+se*.5,ae*Math.PI*.04)})}else{this.stage("complete","纳贡完成 · 获得 "+this.tributeCount+" 把铁剑"),this.sword.visible=!1,this.cat.rotation.y=0,this.jaw.rotation.x=0,this.belly.scale.set(1,1,1);const z=this.tributeDone;this.tributeDone=null,this.stageAbort.abort(),this.stageAbort=new AbortController,z()}}for(let I=this.fx.length-1;I>=0;I--){const z=this.fx[I];z.life-=n,z.v.y-=n*8,z.mesh.position.addScaledVector(z.v,n),z.mesh.scale.setScalar(Math.max(.01,z.life)),z.life<=0&&(this.scene.remove(z.mesh),z.mesh.geometry.dispose(),z.mesh.material.dispose(),this.fx.splice(I,1))}if(e-this.renderAt>=1e3/30){const I=this.renderer.getContext();this.gpuFrame&&I.clientWaitSync(this.gpuFrame,0,0)!==I.TIMEOUT_EXPIRED&&(I.deleteSync(this.gpuFrame),this.gpuFrame=null,this.renderedTribute=this.submittedTribute,this.host.dataset.renderedStation=this.submittedStation,this.host.dataset.renderedCameraReady=String(this.submittedCameraReady),this.host.dataset.boardVisible=String(this.boardFrame.visible),this.host.dataset.boardRenderedHits=String(this.submittedBoardHits),this.host.dataset.bladeRenderedFinish=this.submittedBladeFinish,this.submittedHammerContact&&(this.hitContactRendered=!0),this.pendingForgeProof&&(this.host.dataset.forgeProof=this.pendingForgeProof,this.pendingForgeProof=null),this.pendingCatProof&&(this.host.dataset.catProof=this.pendingCatProof,this.pendingCatProof=null)),this.gpuFrame||(this.renderAt=e,this.swordGlow.render(this.scene,this.camera,!!y||_||!!this.sword.userData.referenceFx,_,this.sword,!!y||_),this.submittedStation=this.view,this.submittedCameraReady=this.camera.position.distanceTo(i.position)<.03&&Math.abs(this.camera.fov-i.fov)<.05,this.submittedTribute=this.tributeDone?this.tributeElapsed:0,this.submittedBoardHits=((V=(G=this.state)==null?void 0:G.session)==null?void 0:V.hits)||0,this.submittedBladeFinish=_?"cosmos":y?"rainbow":"metal",this.submittedHammerContact=!!this.onHitImpact&&f>=.18,this.gpuFrame=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0),I.flush(),this.host.dataset.renderCalls=String(this.renderer.info.render.calls),this.host.dataset.renderTriangles=String(this.renderer.info.render.triangles),this.view==="forge"&&this.forgeProofPending&&this.sword.visible&&this.swordPlace==="anvil"&&!r&&d>=.55&&this.camera.position.distanceTo(i.position)<.015&&Math.abs(this.camera.fov-i.fov)<.02&&this.recordForgeVisibility(),this.view==="cat"&&(this.tributeDone||this.camera.position.distanceTo(i.position)<.03)&&this.recordCatVisibility())}this.raf=requestAnimationFrame(this.tick)});this.host=e,this.renderer=new I_({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,3)),this.renderer.setClearColor(1512207),this.renderer.outputColorSpace=yt,this.renderer.info.autoReset=!1,this.renderer.toneMapping=zl,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wu,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.domElement.setAttribute("aria-label","3D锻造工坊：铁砧、熔炉、食铁兽、遗物机及神秘商人"),e.appendChild(this.renderer.domElement),this.surfaces=new F_(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.forgeMaterials=H_(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.bladeMat.dispose(),this.bladeFinish=new Iy(this.surfaces.get("steel")),this.bladeMat=this.bladeFinish.material,this.uprightOak=this.surfaces.get("oak",9).clone();for(const c of["map","bumpMap","roughnessMap"]){const l=this.uprightOak[c].clone();l.center.set(.5,.5),l.rotation=Math.PI/2,this.uprightOak[c]=l}const t=new N_,n=new yo(this.renderer);this.scene.environment=n.fromScene(t,.04).texture,this.scene.environmentIntensity=.72,t.dispose(),n.dispose(),this.swordEnvironment=U_(this.renderer),eu(this.swordEnvironment.texture),this.scene.fog=new Zl(1643535,.028),this.roomAmbient=new Um(12241884,3547932,.38),this.scene.add(this.roomAmbient);const i=this.roomKey=new md(16768956,1.45);i.position.set(-3,7,4),i.castShadow=!0,i.shadow.mapSize.set(1536,1536),Object.assign(i.shadow.camera,{left:-6,right:7,top:6,bottom:-4}),i.shadow.bias=-4e-4,i.shadow.normalBias=.018,this.scene.add(i);const r=this.roomFill=new er(11786479,4,12);r.position.set(4,4,3),this.scene.add(r);const o=this.forgeKey=new pd(16768951,38,9,.52,.68,2);o.position.set(-.7,5.1,2.35),o.target.position.set(.1,1.25,.1),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.bias=-3e-4,o.shadow.normalBias=.014,this.scene.add(o,o.target),this.furnaceLight.position.set(-3.15,1.45,-1.2),this.scene.add(this.furnaceLight),this.buildRoom(),this.buildForge(),this.buildCat(),this.buildRelics(),this.buildCollection(),this.scene.add(this.wallRelics),this.sword=Ll(this.bladeMat,"great",0,"iron"),this.enchantFittings(this.sword),this.bladeShapeKey="great:0:iron",this.scene.add(this.sword),this.swordGlow=new Vy(this.renderer,this.scene,this.camera),this.host.dataset.swordName=ti("great",0).name,this.host.dataset.swordShape=this.bladeShapeKey,this.batchStaticGeometry(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize();const a=this.cameraPose();this.target.copy(a.target),this.camera.position.copy(a.position),this.camera.fov=a.fov,this.camera.updateProjectionMatrix(),this.camera.lookAt(this.target),document.addEventListener("visibilitychange",this.onVisibility),this.raf=requestAnimationFrame(this.tick),e.dataset.ready="true",e.dataset.station="forge"}setBoardInfo(e,t,n,i){this.boardInfo={cue:e,result:t,value:n,heat:i}}setBoardHidden(e){this.boardHidden=e,this.host.dataset.boardHidden=String(e),this.forgeProofPending=!0}material(e,t=0,n=.85){return new vt({color:e,metalness:t,roughness:n})}mesh(e,t,n,i=0,r=0,o=0){const a=new Oe(e,t);return a.position.set(i,r,o),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}box(e,t,n,i,r,o=0,a=0,c=0){return this.mesh(Rl(e,t,n),i,r,o,a,c)}contact(e,t,n,i,r,o,a=.45){const c=document.createElement("canvas");c.width=c.height=128;const l=c.getContext("2d"),h=l.createRadialGradient(64,64,10,64,64,64);h.addColorStop(0,"rgba(8,5,3,.9)"),h.addColorStop(.55,"rgba(8,5,3,.45)"),h.addColorStop(1,"rgba(8,5,3,0)"),l.fillStyle=h,l.fillRect(0,0,128,128);const u=new Oe(new ki(r,o),new Rt({map:new vi(c),transparent:!0,opacity:a,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));u.rotation.x=-Math.PI/2,u.position.set(t,n,i),e.add(u)}sphere(e,t,n,i,r,o,a,c){const l=this.mesh(new xi(1,24,16),a,c,e,t,n);return l.scale.set(i,r,o),l}cylinder(e,t,n,i,r,o,a,c,l=16){return this.mesh(new Nn(e,t,n,l),i,r,o,a,c)}batchStaticGeometry(){this.scene.updateMatrixWorld(!0);const e=new Map;this.scene.traverse(t=>{if(!(t instanceof Oe)||t instanceof Zs||Array.isArray(t.material)||t.material.transparent)return;for(let r=t;r;r=r.parent)if(r===this.cat||r===this.hammer||r===this.sword||r===this.boardFrame||r===this.merchantRoot||r===this.wallRelics||r===this.collectionRoot||this.relicSlots.includes(r))return;const n=[t.material.id,t.castShadow,t.receiveShadow].join(":"),i=e.get(n)||[];i.push(t),e.set(n,i)});for(const t of e.values()){if(t.length<2)continue;const n=t.map(o=>{const a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();return a.applyMatrix4(o.matrixWorld),a}),i=mc(n,!1);if(n.forEach(o=>o.dispose()),!i)continue;const r=new Oe(i,t[0].material);r.castShadow=t[0].castShadow,r.receiveShadow=t[0].receiveShadow,t.forEach(o=>{o.removeFromParent(),o.geometry.dispose()}),i.computeBoundingSphere(),this.scene.add(r)}}buildRoom(){const e=this.surfaces.get("oak",9),t=this.surfaces.get("stone",14).clone();t.color.set(7827043),t.map=t.map.clone(),t.map.repeat.set(9,9),this.box(15,.15,12,t,this.scene,0,-.1,0);const n=this.material(2893087);this.box(15,12,.35,n,this.scene,0,5.8,-3.4);const i=this.surfaces.get("stone",7),r=new Zs(Rl(.94,.47,.31,.028),i,384);let o=0;const a=new Xe;for(let l=0;l<24;l++)for(let h=0;h<16;h++)a.makeTranslation(-7.4+h*.98+l%2*.47,.12+l*.5,-3.15),r.setMatrixAt(o,a),r.setColorAt(o,new Ue().setHSL(.078,.1,.53+Math.sin(o*12.3)*.07)),o++;r.receiveShadow=!0,this.scene.add(r);for(const l of[-6,-2.2,2.2,6])this.box(.23,6,.3,this.uprightOak,this.scene,l,2.9,-2.9),this.box(.3,.3,6,e,this.scene,l,5.5,-.7);this.box(14,.25,.35,e,this.scene,0,4.95,-2.85);const c=this.material(2564638);for(let l=0;l<11;l++)this.box(.016,.006,11,c,this.scene,-7+l*1.4,-.018,0);for(let l=0;l<9;l++)this.box(15,.006,.016,c,this.scene,0,-.018,-5+l*1.4)}makeBench(e,t,n,i,r=!1){const o=new et;o.position.set(n,0,i),this.scene.add(o);const a=r?this.forgeMaterials.wood[0]:this.surfaces.get("oak",2),c=r?this.forgeMaterials.casting:this.surfaces.get("iron"),l=this.material(r?7760215:9340788,.76,.48),h=e/2-.28,u=t/2-.22;for(let d=0;d<5;d++)this.box(e,.26,t/5-.013,r?this.forgeMaterials.wood[d]:this.surfaces.get("oak",2+d%2),o,0,.94,-t/2+t/5*(d+.5));const f=this.surfaces.get("endgrain");for(const d of[-1,1])this.box(.014,.238,t-.025,f,o,d*(e/2+.003),.94,0);for(const d of[-h,h])for(const g of[-u,u]){this.box(.31,.83,.31,this.uprightOak,o,d,.415,g),this.box(.33,.12,.33,c,o,d,.12,g),this.box(.34,.27,.035,c,o,d,.76,g+Math.sign(g)*.17);for(const v of[.68,.84])this.sphere(d,v,g+Math.sign(g)*.193,.025,.025,.015,l,o)}for(const d of[-u,u]){this.box(e-.38,.21,.16,a,o,0,.66,d),this.box(e-.5,.15,.17,a,o,0,.26,d);for(const g of[-1,1]){const v=this.box(.17,.7,.17,this.uprightOak,o,g*(h-.19),.48,d);v.rotation.z=g*-.55}}for(const d of[-h,h])this.box(.17,.15,t-.28,a,o,d,.26,0);for(const d of[-1,1]){this.box(e-.1,.095,.042,c,o,0,.865,d*(t/2+.021));for(let g=0;g<7;g++)this.sphere(-e/2+.19+g*(e-.38)/6,.865,d*(t/2+.048),.023,.023,.014,l,o)}return this.contact(o,0,-.016,0,e+.5,t+.65,.52),o}buildForge(){const e=this.forgeMaterials.wood[1],t=this.forgeMaterials.casting,n=this.forgeMaterials.face,i=this.material(2107952,.7,.57),r=this.material(10849108,.74,.4),o=this.makeBench(3.7,1.75,0,.2,!0);o.scale.y=.8,this.contact(o,0,1.073,-.1,2.4,1.43,.65);const a=new et;a.position.set(0,.91,.1),a.scale.set(1.1,.6,1.34),a.name="forged-anvil",this.scene.add(a),this.box(1.67,.056,1.1,i,a,0,-.03,0),this.mesh(O_(),t,a),this.mesh(B_(),this.forgeMaterials.edge,a),this.mesh(Qh(.14,.675),t,a).scale.set(1.16,1,1.09),this.mesh(Qh(.115,.815),[n,this.forgeMaterials.edge],a).scale.set(1.16,1,1.09);for(const A of[-.57,.57])for(const b of[-.36,.36])this.box(.38,.13,.26,t,a,A,.045,b),this.box(.11,.03,.16,this.forgeMaterials.edge,a,A,.12,b),this.cylinder(.038,.038,.027,this.forgeMaterials.hammer,a,A,.144,b,6);this.box(.115,.02,.115,i,a,.62*1.16,.76,-.17*1.09),this.cylinder(.033,.033,.02,i,a,.81*1.16,.76,.17*1.09,16);const h=new Cn;h.moveTo(-.11,.08),h.lineTo(-.08,.14),h.lineTo(-.02,.1),h.quadraticCurveTo(0,.12,.02,.1),h.lineTo(.08,.14),h.lineTo(.11,.08),h.quadraticCurveTo(.14,-.1,0,-.13),h.quadraticCurveTo(-.14,-.1,-.11,.08);const u=new Rn(h,{depth:.009,bevelEnabled:!0,bevelSize:.004,bevelThickness:.003,bevelSegments:2});this.mesh(u,this.material(7956554,.65,.62),a,0,.51,.262).scale.setScalar(.65);for(const A of[-.026,.026])this.sphere(A,.52,.275,.009,.006,.004,i,a);const d=new et;d.position.set(1.25,1.65,-.38),d.rotation.z=-.3,this.scene.add(d),this.hammer=d,this.cylinder(.062,.079,1.34,e,d,0,.28,0,24);const g=z_();this.mesh(g,[this.forgeMaterials.hammer,this.forgeMaterials.edge],d,0,1.1,0);const v=g.getAttribute("position");let m=1/0;for(let A=0;A<v.count;A++)m=Math.min(m,v.getX(A)*Math.sin(1.38)+(v.getY(A)+1.1)*Math.cos(1.38));this.hammerBottomOffset=m,this.hammerContact.y=this.forgeSwordY+.035-m;const p=this.box(.15,.026,.14,this.forgeMaterials.casting,d,0,1.331,0);p.rotation.y=.12,this.box(.035,.016,.105,this.forgeMaterials.edge,d,.018,1.349,0),this.cylinder(.078,.086,.52,this.surfaces.get("leather"),d,0,-.13,0,24);for(let A=0;A<9;A++){const b=this.mesh(new sn(.083,.011,6,24),this.surfaces.get("leather"),d,0,.1-A*.055,0);b.rotation.x=Math.PI/2}for(const A of[.16,-.41])this.cylinder(.088,.088,.045,r,d,0,A,0,24);d.updateMatrixWorld(!0),this.forgeHammerBounds.setFromObject(d),this.boardCanvas.width=1536,this.boardCanvas.height=768,this.board=new vi(this.boardCanvas),this.board.colorSpace=yt,this.board.anisotropy=4;const y=this.boardFrame;y.position.set(0,3.55,-1.45),this.scene.add(y);const x=(A,b,S)=>{const P=new Cn;P.moveTo(-A/2+S,-b/2);for(const[N,F]of[[A/2-S,-b/2],[A/2,-b/2+S],[A/2,b/2-S],[A/2-S,b/2],[-A/2+S,b/2],[-A/2,b/2-S],[-A/2,-b/2+S]])P.lineTo(N,F);return P.closePath(),P},_=new Rn(x(5,1.67,.09),{depth:.1,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:2,steps:1});_.translate(0,0,-.06),this.mesh(_,new vt({color:3678995,roughness:.85}),y);const T=new lc(x(4.94,1.61,.085)),M=T.getAttribute("uv"),w=T.getAttribute("position");for(let A=0;A<w.count;A++)M.setXY(A,(w.getX(A)+2.47)/4.94,(w.getY(A)+.805)/1.61);this.mesh(T,new Rt({map:this.board,toneMapped:!1}),y,0,0,.071);for(const A of[-2.44,2.44])for(const b of[-.75,.75])this.sphere(A,b,.082,.012,.012,.007,r,y);y.traverse(A=>{A instanceof Oe&&(A.material=A.material.clone(),A.material.depthTest=!1,A.material.depthWrite=!1,A.renderOrder=100,A.castShadow=!1,A.receiveShadow=!1)}),this.buildFurnace(),this.buildForgeProps(o),o.updateMatrixWorld(!0),o.traverse(A=>{if(A instanceof Oe){if((Array.isArray(A.material)?A.material:[A.material]).every(S=>S.transparent))return;A.geometry.computeBoundingBox(),this.forgeBenchBounds.union(A.geometry.boundingBox.clone().applyMatrix4(A.matrixWorld))}})}buildFurnace(){const e=this.surfaces.get("iron"),t=this.surfaces.get("stone",7),n=this.material(2169365),i=new vt({color:3612697,emissive:16731146,emissiveIntensity:1.7,roughness:1}),r=new et;r.position.set(-3.15,0,-1.72),this.scene.add(r),this.box(1.64,1.07,1.25,n,r,0,.55,0);for(let l=0;l<3;l++)for(let h=0;h<3;h++)this.box(.54,.34,.08,t,r,-.55+h*.55,.2+l*.35,.665);this.box(1.37,1.22,.3,n,r,0,1.69,-.39);for(const l of[-.74,.74])for(let h=0;h<4;h++)this.box(.29,.34,1.16,t,r,l,1.27+h*.35,0);for(let l=0;l<11;l++){const h=l/11*Math.PI+.025,u=(l+1)/11*Math.PI-.025,f=new Cn;f.moveTo(Math.cos(h)*.61,2.06+Math.sin(h)*.61),f.lineTo(Math.cos(h)*.92,2.06+Math.sin(h)*.92),f.absarc(0,2.06,.92,h,u,!1),f.lineTo(Math.cos(u)*.61,2.06+Math.sin(u)*.61),f.absarc(0,2.06,.61,u,h,!0),f.closePath();const d=new Rn(f,{depth:1.14,bevelEnabled:!0,bevelSize:.013,bevelThickness:.012,bevelSegments:2,curveSegments:5});d.translate(0,0,-.57),this.mesh(d,t,r)}this.box(1.79,.11,1.58,e,r,0,1.1,.1),this.box(.9,1.68,.6,t,r,0,3.46,-.3);for(const l of[2.98,3.42,3.86])this.box(.94,.07,.64,e,r,0,l,-.3);const o=bs(88);for(let l=0;l<14;l++){const h=this.mesh(new ic(.15+o()*.07,0),l%3?i:e,r,-.53+l%5*.255,1.23+Math.floor(l/5)*.08,0+o()*.3);h.scale.y=.7,h.rotation.set(o(),o(),o())}const a=this.cylinder(.62,.62,.01,new Rt({color:16737559}),r,0,1.17,.04,32);a.scale.z=.75;for(let l=0;l<7;l++){const h=this.sphere(-.46+l*.15,1.43+Math.sin(l)*.06,.05,.055,.22+o()*.1,.055,new Rt({color:l%2?16761691:16747045,transparent:!0,opacity:.8}),r);h.castShadow=!1,h.userData.height=h.scale.y,this.flames.push(h)}for(let l=0;l<6;l++)this.cylinder(.023,.023,.5,e,r,-.57+l*.23,1.39,.65,10);const c=this.cylinder(.034,.034,1.42,e,r,0,1.28,.675,12);c.rotation.z=Math.PI/2,this.contact(r,0,-.016,.05,2.3,1.9,.65)}buildForgeProps(e){this.surfaces.get("oak",2);const t=this.surfaces.get("iron"),n=this.surfaces.get("steel"),i=new et;e.add(i),i.position.set(-1.25,1.1,.1),i.rotation.y=-.38;for(const h of[-1,1]){const u=new oc([new R(h*.08,0,.37),new R(h*.045,.016,0),new R(h*.1,.022,-.2),new R(h*.13,.018,-.32)]);this.mesh(new Co(u,16,.018,6,!1),t,i)}this.cylinder(.029,.029,.02,n,i,0,.033,.03,12);const r=this.box(.065,.055,.35,n,e,1.43,1.1,.49);r.rotation.y=.5;const o=bs(12),a=this.material(2435370,.35,.85),c=new Zs(new cc(.022),a,22),l=new Xe;for(let h=0;h<22;h++)l.compose(new R((o()-.5)*2.3,1.08,o()*.72-.05),new In().setFromEuler(new un(o(),o(),o())),new R(1+o(),.23,1+o())),c.setMatrixAt(h,l);e.add(c)}makeSword(e=!1){const t=new et,n=e?this.bladeMat:this.surfaces.get("steel").clone(),i=this.material(12163683,.8,.3),r=this.surfaces.get("leather").clone(),o=new Float32Array([0,0,-.29,0,0,.29,0,.065,0,1.95,0,-.29,1.95,0,.29,1.95,.065,0,2.42,0,0]),a=new _t;a.setAttribute("position",new Pt(o,3)),a.setAttribute("uv",new Qe([0,0,0,1,0,.5,.81,0,.81,1,.81,.5,1,.5],2)),a.setIndex([0,2,3,2,5,3,2,1,5,1,4,5,3,5,6,5,4,6,0,3,1,1,3,4]);const c=a.toNonIndexed();c.computeVertexNormals(),a.dispose();const l=this.mesh(c,n,t);l.name="blade";const h=new Cn;h.moveTo(-.045,-.41),h.quadraticCurveTo(-.18,-.39,-.13,-.28),h.lineTo(-.1,-.08),h.lineTo(-.1,.08),h.lineTo(-.13,.28),h.quadraticCurveTo(-.18,.39,-.045,.41),h.lineTo(.035,.37),h.lineTo(.018,.08),h.lineTo(.018,-.08),h.lineTo(.035,-.37),h.closePath();const u=new Rn(h,{depth:.12,bevelEnabled:!0,bevelSize:.016,bevelThickness:.016,bevelSegments:3,curveSegments:10});u.rotateX(-Math.PI/2),this.mesh(u,i,t,-.06,-.02,0);const f=this.cylinder(.062,.062,.56,r,t,-.38,.04,0);f.rotation.z=Math.PI/2;for(let d=0;d<9;d++){const g=this.mesh(new sn(.064,.007,5,20),r,t,-.16-d*.054,.04,0);g.rotation.y=Math.PI/2}for(const d of[-.12,-.66]){const g=this.cylinder(.072,.072,.03,i,t,d,.04,0,24);g.rotation.z=Math.PI/2}return this.sphere(-.71,.04,0,.1,.085,.085,i,t),this.sphere(-.72,.108,0,.035,.017,.035,this.material(4352625,.4,.23),t),t}enchantFittings(e){const t=new Set;e.traverse(n=>{if(n instanceof Oe){const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)r instanceof vt&&r!==this.bladeMat&&!t.has(r)&&(t.add(r),this.bladeFinish.decorate(r))}})}evolveSword(e,t,n,i){var c,l;const r=e+":"+t+":"+n+":"+i;if(r===this.bladeShapeKey)return;const o=new Set;for(const h of[...this.sword.children])h.traverse(u=>{if(u instanceof Oe){u.geometry.dispose();const f=Array.isArray(u.material)?u.material:[u.material];for(const d of f)d!==this.bladeMat&&o.add(d)}}),this.sword.remove(h);o.forEach(h=>h.dispose());const a=Ll(this.bladeMat,e,t,n,i);this.enchantFittings(a);for(const h of[...a.children])this.sword.add(h);this.sword.userData=a.userData,this.bladeShapeKey=r,this.host.dataset.swordName=ti(e,t,i).name,this.host.dataset.swordShape=r,this.host.dataset.swordTheme=String(a.userData.theme||"forged"),this.host.dataset.swordSteelRoughness=String(((l=(c=a.userData.materials)==null?void 0:c.body)==null?void 0:l.roughness)??"legacy"),this.forgeProofPending=!0,this.renderer.shadowMap.needsUpdate=!0}buildCat(){const e=Dy();this.cat=e.root,this.head=e.head,this.jaw=e.jaw,this.belly=e.belly,this.tail=e.tail,this.catEyes=e.eyes,this.catMouth.copy(e.mouth),this.cat.position.set(3.4,1.05,-1.32),this.scene.add(this.cat),this.host.dataset.catAsset="loading",this.host.dataset.characterSpecies="giant-panda",this.host.dataset.characterModel="panda-reference-reconstruction-v6",this.host.dataset.characterStyle="polygon-sculpture",this.host.dataset.characterLimbs=String(e.root.userData.limbStyle),this.host.dataset.characterTriangles=String(e.root.userData.triangles),this.renderer.shadowMap.needsUpdate=!0,e.ready.then(()=>{this.host.dataset.catAsset="ready",this.host.dataset.characterTriangles=String(e.root.userData.triangles),this.host.dataset.characterVolumeDepth=String(e.root.userData.volumeDepth),this.renderer.shadowMap.needsUpdate=!0}).catch(n=>{this.host.dataset.catAsset="failed",this.host.dataset.catError=String(n),console.error(n)});const t=this.makeBench(2.55,1.8,3.4,-1.35);this.contact(t,0,1.075,0,1.85,1.5,.65),this.box(2.4,.12,.65,this.material(5858407,.7,.36),this.scene,3.4,1.12,.36)}buildRelics(){const e=new et;e.position.set(5.75,0,-2.02),this.scene.add(e);const t=this.surfaces.get("oak",9),n=this.material(12162390,.75,.32),i=this.material(1383714,.45,.51);this.box(2.05,3.25,.75,t,e,0,1.65,0),this.box(1.82,2.88,.11,i,e,0,1.71,.41),this.box(1.56,.28,.09,n,e,0,3.02,.49),this.box(1.3,.09,.11,this.material(9168333,.45,.2),e,0,2.99,.56);for(let f=0;f<3;f++){const d=2.6-f*.65;this.box(1.55,.075,.52,n,e,0,d-.25,.33);const g=new et;g.position.set(0,d,.56),e.add(g),this.relicSlots.push(g)}this.box(1.3,.14,.08,n,e,0,.66,.51),this.box(1.09,.07,.082,this.material(329997),e,0,.66,.56),this.box(1.05,.13,.56,n,e,0,.24,.59),this.box(.85,.035,.39,i,e,0,.34,.65);for(const f of[-.95,.95])this.box(.085,3.17,.11,n,e,f,1.65,.43);const r=this.mesh(new sn(.18,.038,8,20),n,e,1.14,1.21,.22);r.rotation.y=Math.PI/2,this.box(.06,.55,.06,n,e,1.14,1.08,.22);const o=new er(9687995,6,3.5);o.position.set(0,2.45,.95),e.add(o),this.contact(e,0,-.016,.15,2.65,1.5,.6);const a=this.merchantRoot;a.position.set(4.25,.09,-1.17),a.visible=!1,this.scene.add(a);const c=new vt({color:3164763,roughness:.8,transparent:!0,opacity:.88,emissive:792355,emissiveIntensity:.36}),l=this.material(3753547,.12,.79),h=new vt({color:11007454,emissive:5560250,emissiveIntensity:1.15,roughness:.22});this.mesh(new Ao(.47,1.45,14),c,a,0,.78,0),this.sphere(0,1.51,0,.31,.39,.3,l,a),this.sphere(0,1.63,-.065,.43,.4,.36,c,a);for(const f of[-.13,.13])this.sphere(f,1.52,.276,.055,.062,.035,h,a);this.cylinder(.37,.4,.1,n,a,0,.11,0);const u=this.cylinder(.035,.04,1.62,n,a,-.47,.83,.25);u.rotation.z=-.13,this.sphere(-.56,1.65,.25,.12,.12,.12,h,a)}buildCollection(){const e=this.collectionRoot;e.position.set(-5.2,.15,1.8),this.scene.add(e);const t=this.surfaces.get("oak",9),n=this.material(12162390,.75,.32);this.box(4.6,5.6,.16,t,e,0,2.65,0);for(const r of[-2.28,2.28])this.box(.1,5.64,.24,n,e,r,2.65,.08);for(const r of[.42,3.07,5.42])this.box(4.52,.1,.4,t,e,0,r,.16);for(let r=0;r<2;r++)for(let o=0;o<3;o++)for(const a of[-.21,.21]){const c=this.mesh(new sn(.08,.019,8,16,Math.PI),n,e,(o-1)*1.4+a,r*2.65+.95,.25);c.rotation.z=Math.PI}const i=Pd("收藏剑架");i.position.set(0,5.76,.16),i.scale.set(2.1,2.1,1),e.add(i),e.add(this.collectionSwords)}syncDisplays(e){const t=JSON.stringify([e.relicOffers,e.relics,e.caseIds,e.showLegacySwords]);t!==this.displayKey&&(this.displayKey=t,this.relicSlots.forEach((n,i)=>{Ra(n);const r=e.relicOffers[i];r&&n.add(pu(r))}),Ra(this.wallRelics),e.relics.length&&(this.box(4.5,.57,.08,this.surfaces.get("oak",9).clone(),this.wallRelics,0,0,0),e.relics.forEach((n,i)=>{const r=pu(n);r.scale.setScalar(.66),r.position.set((i-(e.relics.length-1)/2)*.51,-.025,.1),this.wallRelics.add(r),this.mesh(new sn(.04,.012,6,16),this.material(12162390,.7,.3),this.wallRelics,r.position.x,.2,.09)})),this.wallRelics.traverse(n=>{if(n instanceof Oe){const i=n.material;i.depthTest=!1,i.depthWrite=!1,n.renderOrder=90,n.castShadow=!1,n.receiveShadow=!1}}),Ra(this.collectionSwords),Wy(this.collectionSwords,e,this.bladeMat.clone()),this.host.dataset.wallRelics=JSON.stringify(e.relics),this.host.dataset.relicSlots=JSON.stringify(e.relicOffers),this.host.dataset.collectionIds=JSON.stringify(e.caseIds),this.renderer.shadowMap.needsUpdate=!0)}positionWallRelics(){var f,d,g,v,m;const e=this.wallRelics;if(e.visible=this.view==="forge"&&!!((f=this.state)!=null&&f.relics.length),!e.visible)return;const t=this.ledgerLayout(),n=this.host.clientWidth,i=this.host.clientHeight,r=this.boardHidden||((g=(d=this.state)==null?void 0:d.session)==null?void 0:g.phase)==="finished"||((m=(v=this.state)==null?void 0:v.session)==null?void 0:m.phase)==="broken"?148:t.bottom+8,o=Math.min(n-36,t.width),a=44;e.quaternion.copy(this.camera.quaternion),e.position.set(0,3.2,-1.9),e.scale.setScalar(1),e.updateMatrixWorld(!0);const c=e.position.clone().project(this.camera);c.x=0,c.y=1-2*(r+a/2)/i,e.position.copy(c.unproject(this.camera)),e.updateMatrixWorld(!0);const l=e.localToWorld(new R(-2.25,0,0)).project(this.camera),h=e.localToWorld(new R(2.25,0,0)).project(this.camera),u=o/((h.x-l.x)*n/2);e.scale.set(u,u*(a/o)/(.57/4.5),u),e.updateMatrixWorld(!0),this.host.dataset.wallRelicBounds=JSON.stringify({top:r,bottom:r+a,left:(n-o)/2,right:(n+o)/2})}resize(){var i;const e=this.host.clientWidth,t=this.host.clientHeight;if(!e||!t)return;const n=Math.max(1,Math.min(devicePixelRatio,3,Math.sqrt(3e6/(e*t))));this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),(i=this.swordGlow)==null||i.resize(e,t),this.host.dataset.renderPixelRatio=String(n),this.host.dataset.renderWidth=String(this.renderer.domElement.width),this.host.dataset.renderHeight=String(this.renderer.domElement.height),this.host.dataset.swordAntialias=this.swordGlow.samples?`MSAA${this.swordGlow.samples}`:"SMAA",this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.forgeProofPending=!0}ledgerLayout(){const e=this.host.clientWidth,t=this.host.clientHeight,n=t<520,i=e>=700,r=n?Math.min(e*.54,460):i?Math.min(e*.5,640):e-28,o=r*(448/1024),a=n?92:i?130:146;return{width:r,height:o,left:(e-r)/2,top:a,bottom:a+o,wide:i}}cameraPose(){var t,n,i,r,o,a,c,l,h,u,f;const e=this.camera.aspect<.8;if(this.view==="forge"){const d=(n=(t=this.state)==null?void 0:t.session)==null?void 0:n.phase;if(d!=="finished"&&d!=="broken"){const p=d==="forge",y=this.host.clientWidth,x=this.host.clientHeight,_=this.ledgerLayout(),T=new R(e&&!p?-1.05:0,2.1,.1),M=T.clone().add(new R(0,5.2,8.4)),w=42,A=this.fitCamera;A.aspect=this.camera.aspect,A.fov=w,A.clearViewOffset(),A.updateProjectionMatrix();const b=[],S=this.forgeBenchBounds;for(const ie of[S.min.x,S.max.x])for(const _e of[S.min.y,S.max.y])for(const Re of[S.min.z,S.max.z])b.push(new R(ie,_e,Re));const P=this.forgeHammerBounds;for(const ie of[P.min.x,P.max.x])for(const _e of[P.min.y,P.max.y])for(const Re of[P.min.z,P.max.z])b.push(new R(ie,_e,Re));if(e&&!p)for(const ie of[-4.08,-2.22])for(const _e of[0,4.3])b.push(new R(ie,_e,-1));const N=e?y*.93:Math.min(y*.52,680),F=(r=(i=this.host.closest(".game"))==null?void 0:i.querySelector(".control:not([hidden])"))==null?void 0:r.getBoundingClientRect(),G=this.host.getBoundingClientRect(),V=(a=(o=this.host.closest(".game"))==null?void 0:o.querySelector(".station-nav"))==null?void 0:a.getBoundingClientRect(),I=Math.min(p&&F?F.top-G.top-18:x-20,V?V.top-G.top-18:x-20),z=(this.boardHidden?146:_.bottom)+20+((c=this.state)!=null&&c.relics.length?58:0),k=Math.max(90,I-z);for(let ie=0;ie<4;ie++){A.position.copy(M),A.lookAt(T),A.updateMatrixWorld(!0);const _e=b.map(we=>we.clone().project(A)),Re=_e.map(we=>we.x),ke=_e.map(we=>we.y),j=(Math.max(...Re)-Math.min(...Re))*y/2,Q=(Math.max(...ke)-Math.min(...ke))*x/2,ve=Math.max(j/N,Q/k);if(Math.abs(ve-1)<.002)break;M.sub(T).multiplyScalar(ve).add(T)}A.position.copy(M),A.lookAt(T),A.updateMatrixWorld(!0);const se=Math.max(...b.slice(0,8).map(ie=>(1-ie.clone().project(A).y)*x/2)),ae=b.map(ie=>(1-ie.clone().project(A).y)*x/2),K=e&&!p?(Math.min(...ae)+Math.max(...ae)-z-I)/2/x:(se-I)/x;return Math.abs(K-this.lastForgeOffset)>5e-4&&(this.lastForgeOffset=K,this.forgeProofPending=!0),{position:M,target:T,offset:K,fov:w}}const g=new R(e?0:.35,e?6.4:5.6,e?9:6.4),v=new R(e?0:.35,2.05,-.3);let m=e?.2:.17;if(e){const p=(h=(l=this.host.closest(".game"))==null?void 0:l.querySelector(".control:not([hidden])"))==null?void 0:h.getBoundingClientRect(),y=this.host.getBoundingClientRect();if(p&&p.top>y.top+160){this.fitCamera.aspect=this.camera.aspect,this.fitCamera.updateProjectionMatrix(),this.fitCamera.position.copy(g),this.fitCamera.lookAt(v),this.fitCamera.updateMatrixWorld(!0);const x=new R(0,this.forgeSwordY-.03,.61).project(this.fitCamera);m=Math.max(m,((1-x.y)*y.height/2-(p.top-y.top-22))/y.height)}}return Math.abs(m-this.lastForgeOffset)>5e-4&&(this.lastForgeOffset=m,this.forgeProofPending=!0),{position:g,target:v,offset:m,fov:e?46:40}}if(this.view==="cat"){const d=$r.phoneDepth,g=new R(3.4,1.05+$r.targetY,-1.22),v=new R(3.4,g.y+(d-.1)*Math.tan($r.pitch),d-1.32);let m=e?.13:.1,p=e?$r.fov:15.5;if(e&&this.cat.visible){const y=this.host.getBoundingClientRect(),x=(f=(u=this.host.closest(".game"))==null?void 0:u.querySelector(".control:not([hidden])"))==null?void 0:f.getBoundingClientRect();if(x&&x.top>y.top+260){const _=x.top-y.top-22,T=96,M=_-T;this.fitCamera.aspect=this.camera.aspect,this.fitCamera.clearViewOffset();for(let w=0;w<3;w++){this.fitCamera.fov=p,this.fitCamera.position.copy(v),this.fitCamera.lookAt(g),this.fitCamera.updateProjectionMatrix(),this.fitCamera.updateMatrixWorld(!0);const A=this.projectCatBounds(this.fitCamera,y.width,y.height),b=A.top,S=A.bottom,P=S-b;if(P>M-4){p=wt.radToDeg(2*Math.atan(Math.tan(wt.degToRad(p/2))*P/(M-4)));continue}m=Xs(m,(S-_)/y.height,(b-T)/y.height);break}}}return{position:v,target:g,offset:m,fov:p}}return this.view==="collection"?{position:new R(-5.2,3.55,e?15.5:11.5),target:new R(-5.2,2.55,1.8),offset:.01,fov:40}:{position:new R(5.75,2.8,e?5.1:3.5),target:new R(5.75,1.95,-2),offset:.13,fov:46}}setStation(e){this.view=e,this.host.dataset.station=e,this.forgeProofPending=!0;const t=e==="forge";this.roomKey.intensity=t?1.45:2.7,this.roomFill.intensity=t?4:11,this.roomAmbient.intensity=t?.38:.65,this.forgeKey.intensity=t?38:0,this.scene.environmentIntensity=t?.72:1,this.renderer.shadowMap.needsUpdate=!0}projectCatBounds(e,t=this.host.clientWidth,n=this.host.clientHeight){this.cat.updateWorldMatrix(!0,!0);const i=new R;let r=1/0,o=-1/0,a=1/0,c=-1/0;const l=e.projectionMatrix.clone().multiply(e.matrixWorldInverse);return this.cat.traverse(h=>{if(!(h instanceof Oe)||!h.visible)return;let u=h.geometry.userData.pandaVisibilityPositions;if(!u){const d=h.geometry.getAttribute("position"),g=new Set,v=[];for(let m=0;m<d.count;m++){const p=d.getX(m),y=d.getY(m),x=d.getZ(m),_=p+":"+y+":"+x;g.has(_)||(g.add(_),v.push(p,y,x))}u=new Float32Array(v),h.geometry.userData.pandaVisibilityPositions=u}const f=l.clone().multiply(h.matrixWorld);for(let d=0;d<u.length;d+=3){i.fromArray(u,d).applyMatrix4(f);const g=(i.x+1)*t/2,v=(1-i.y)*n/2;r=Math.min(r,g),o=Math.max(o,g),a=Math.min(a,v),c=Math.max(c,v)}}),{left:r,right:o,top:a,bottom:c}}recordCatVisibility(){var r,o,a;const e=this.host.clientHeight,t=this.projectCatBounds(this.camera),n=this.head.localToWorld(this.catMouth.clone()),i=(o=(r=this.host.closest(".game"))==null?void 0:r.querySelector(".control:not([hidden])"))==null?void 0:o.getBoundingClientRect();this.pendingCatProof=JSON.stringify({phase:this.host.dataset.tribute||"idle",navTop:i?i.top-this.host.getBoundingClientRect().top:e,elapsed:this.tributeElapsed,jawAngle:this.jaw.rotation.x,bodyDepth:this.belly.scale.z,eyeOpen:((a=this.catEyes[0])==null?void 0:a.scale.y)??1,turn:this.cat.rotation.y,mouth:n.toArray(),bounds:t})}recordForgeVisibility(){var w,A,b,S;const e=this.host.clientWidth,t=this.host.clientHeight,n=(P,N,F)=>this.sword.localToWorld(new R(P,N,F)),i=P=>(P.project(this.camera),{x:(P.x+1)*e/2,y:(1-P.y)*t/2}),r=new Ft().setFromObject(this.sword),o=[];for(const P of[r.min.x,r.max.x])for(const N of[r.min.y,r.max.y])for(const F of[r.min.z,r.max.z])o.push(new R(P,N,F));const a=o.map(i),c=i(n(1,0,.29)),l=i(n(1,0,-.29));let h=0,u=0;const f=[],d=[];for(const P of[.45,1.2,1.85])for(const N of[-.13,.13]){let F=n(P,.065*(1-Math.abs(N)/.29),N);for(const[z,k]of[[0,0],[0,-.04],[0,.04],[.06,0],[-.06,0],[0,-.1],[0,.1],[.12,0],[-.12,0]]){const ae=new Kr(n(P+z,1,N+k),new R(0,-1,0),0,3).intersectObject(this.sword,!0).find(K=>K.object.name.startsWith("blade"));if(ae){F=ae.point.clone();break}}const G=F.clone().sub(this.camera.position);d.push(i(F.clone()));const V=new Kr(this.camera.position,G.clone().normalize(),0,G.length()+.025);V.camera=this.camera;const I=V.intersectObjects(this.scene.children,!0).find(z=>{var se;return z.object instanceof Oe?!(Array.isArray(z.object.material)?z.object.material[((se=z.face)==null?void 0:se.materialIndex)??0]:z.object.material).transparent:!1});f.push((I==null?void 0:I.object.name)||"none");for(let z=(I==null?void 0:I.object)||null;z;z=z.parent)if(z===this.sword){h++,I!=null&&I.object.name.startsWith("blade")&&u++;break}}const g=[n(-.23,.087,0),n(-.39,.087,0),n(-.56,.087,0),n(-.06,.064,-.32),n(-.06,.064,.32)].map(i),v=(((A=(w=this.host.closest(".game"))==null?void 0:w.querySelector(".control:not([hidden])"))==null?void 0:A.getBoundingClientRect().top)||this.host.clientHeight)-this.host.getBoundingClientRect().top,m=this.boardLayout.top,p=this.forgeBenchBounds,y=[];for(const P of[p.min.x,p.max.x])for(const N of[p.min.y,p.max.y])for(const F of[p.min.z,p.max.z])y.push(new R(P,N,F));const x=y.map(i),_={left:Math.min(...x.map(P=>P.x)),right:Math.max(...x.map(P=>P.x)),top:Math.min(...x.map(P=>P.y)),bottom:Math.max(...x.map(P=>P.y))},T=this.ledgerLayout(),M={left:T.left,right:T.left+T.width,top:m,bottom:this.boardLayout.bottom};this.pendingForgeProof=JSON.stringify({phase:((S=(b=this.state)==null?void 0:b.session)==null?void 0:S.phase)||"idle",navTop:v,boardVisible:this.boardFrame.visible,boardTop:m,ledger:M,benchBounds:_,bounds:{left:Math.min(...a.map(P=>P.x)),right:Math.max(...a.map(P=>P.x)),top:Math.min(...a.map(P=>P.y)),bottom:Math.max(...a.map(P=>P.y))},faceHeight:Math.abs(c.y-l.y),visibleSamples:h,bladeSamples:u,sampleSurfaces:f,totalSamples:6,samples:d,hiltSamples:g}),this.forgeProofPending=!1}sync(e,t){const n=!this.state;this.state=e,this.boardProb=t;const i=e.session;if(this.merchantRoot.visible=!1,this.syncDisplays(e),this.tributeDone)return;this.sword.visible=(i==null?void 0:i.phase)!=="broken";const r=(i==null?void 0:i.level)||0,o=(i==null?void 0:i.blade)||"great";this.swordScale=o==="short"?.72:o==="great"?1:.9,this.evolveSword(o,r,(i==null?void 0:i.material)||"iron",e.showLegacySwords),n&&(this.swordPlace=(i==null?void 0:i.phase)==="heat"?"furnace":"anvil"),this.move||this.applySwordPose(this.swordPlace),this.forgeProofPending=!0;const a=(i==null?void 0:i.phase)||"idle";a!==this.bladePhase&&(a==="forge"&&(this.bladeCoolingAt=performance.now()/1e3),this.bladePhase=a),this.bladeFinish.setLevel(r,(i==null?void 0:i.material)||"iron"),this.drawBoard(e,t)}swordPose(e){const t=this.swordScale*(e==="anvil"?1:.52);return{position:e==="furnace"?new R(-3.15,1.53,-.71):new R(-.805*t,this.forgeSwordY,.11),rotation:new In().setFromEuler(new un(0,e==="furnace"?Math.PI/2:e==="anvil"?-.09:0,0)),scale:new R(t,t,t)}}applySwordPose(e){const t=this.swordPose(e);if(this.sword.position.copy(t.position),this.sword.quaternion.copy(t.rotation),this.sword.scale.copy(t.scale),this.host.dataset.swordPlace=e,e==="anvil"&&this.contactShapeKey!==this.bladeShapeKey){this.sword.updateMatrixWorld(!0);const i=new Kr(new R(this.hammerContact.x,this.forgeSwordY+1,this.hammerContact.z),new R(0,-1,0),0,2).intersectObject(this.sword,!0).find(r=>r.object.name.startsWith("blade"));i&&(this.hammerContact.y=i.point.y+.003-this.hammerBottomOffset),this.contactShapeKey=this.bladeShapeKey}}transferTo(e,t){this.move={start:performance.now()/1e3,from:this.sword.position.clone(),rotation:this.sword.quaternion.clone(),scale:this.sword.scale.clone(),to:e,done:t},this.host.dataset.swordPlace="moving",this.renderer.shadowMap.needsUpdate=!0}setHeat(e){this.heat=e}pick(e,t){const n=this.host.getBoundingClientRect(),i=new Kr;if(i.setFromCamera(new re((e-n.left)/n.width*2-1,1-(t-n.top)/n.height*2),this.camera),this.view==="collection")return null;const r=this.view==="forge"?["furnace","anvil","cat","relics"]:this.view==="cat"?["cat"]:["relics"];let o=null,a=1/0;for(const c of r){const l=i.ray.intersectBox(this.targets[c].box,new R);if(l){const h=l.distanceTo(i.ray.origin);h<a&&(a=h,o=c)}}return o}positionTargets(){const e={};for(const[t,n]of Object.entries(this.targets)){const i=n.anchor.clone().project(this.camera),r=(i.x+1)*this.host.clientWidth/2,o=(1-i.y)*this.host.clientHeight/2;e[t]={x:r,y:o};const a=document.getElementById("target-"+t);a&&(a.style.left=r+"px",a.style.top=o+"px",a.dataset.inView=String(r>32&&r<this.host.clientWidth-32&&o>150&&o<this.host.clientHeight-160))}this.host.dataset.targets=JSON.stringify(e)}drawBoard(e,t){const n=e.session,i=this.boardInfo,r=!!(n!=null&&n.superGod),o=!!n&&Ln(n),a=o?Math.max(0,(n.frenzyUntil-Date.now())/1e3).toFixed(1):"",c=t||{success:6500,great:1e3,unchanged:1500,damage:1e3,break:0},l=[this.boardWide,e.showLegacySwords,n==null?void 0:n.level,n==null?void 0:n.hits,n==null?void 0:n.phase,i.value,n==null?void 0:n.frenzyCharge,r,a,i.cue,i.result,Math.round(i.heat),...Object.values(c)].join(",");l!==this.lastBoard&&(this.lastBoard=l,this.host.dataset.boardText=Gy(this.boardCanvas.getContext("2d"),e,c,i),this.host.dataset.boardStyle="reference-wood",this.board.needsUpdate=!0)}hostHammerBusy(){return this.host.dataset.hammerStage==="swing"||this.host.dataset.hammerStage==="impact"}strike(e,t=1){this.hitSpeed=t,this.hitStart=performance.now()/1e3,this.hitResult="success",this.hitImpact=!1,this.onHitImpact=e,this.hitImpactAt=-10,this.hitContactRendered=!1,this.host.dataset.hammerStage="swing"}spawnFragments(){if(!this.reduced)for(let e=0;e<9&&this.fx.length<50;e++){const t=this.mesh(new rn(.07+Math.random()*.1,.035,.13+Math.random()*.12),this.bladeMat.clone(),this.scene);t.position.set(-.65+Math.random()*1.5,this.forgeSwordY+.05,.1+(Math.random()-.5)*.3),t.rotation.set(Math.random()*2,Math.random()*3,Math.random()),this.fx.push({mesh:t,v:new R((Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*2),life:.8})}}spawnSparks(e,t){if(!this.reduced)for(let n=0;n<e&&this.fx.length<50;n++){const i=this.mesh(new xi(.025,4,3),new Rt({color:n%2?16761944:16773037}),this.scene);i.position.copy(t),this.fx.push({mesh:i,v:new R((Math.random()-.5)*4,1+Math.random()*3,(Math.random()-.5)*3),life:.5+Math.random()*.3})}}async tribute(e,t){if(this.tributeDone)throw new Error("食铁兽还在吃剑");return this.setStation("cat"),this.tributeCount=e,this.tributeStart=performance.now()/1e3,this.tributeElapsed=0,this.host.dataset.tribute="offering",this.submittedTribute=0,this.renderedTribute=0,t("食铁兽：把巨剑交出来，开饭！"),new Promise(n=>{this.tributeDone=n,this.host.addEventListener("tribute-stage",(i=>t(i.detail)),{signal:this.stageAbort.signal})})}stage(e,t){this.host.dataset.tribute!==e&&(this.host.dataset.tribute=e,this.host.dispatchEvent(new CustomEvent("tribute-stage",{detail:t})))}clearRewards(){for(const e of this.rewards)this.scene.remove(e),e.traverse(t=>{t instanceof Oe&&(t.geometry.dispose(),t.material.dispose())});this.rewards=[],this.host.dataset.tribute=""}destroy(){var e;cancelAnimationFrame(this.raf),this.gpuFrame&&this.renderer.getContext().deleteSync(this.gpuFrame),document.removeEventListener("visibilitychange",this.onVisibility),this.stageAbort.abort(),this.observer.disconnect(),this.scene.traverse(t=>{if(t instanceof Oe){t.geometry.dispose();const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n){for(const r of Object.values(i))r instanceof At&&r.dispose();i.dispose()}}}),(e=this.scene.environment)==null||e.dispose(),eu(null),this.swordEnvironment.dispose(),this.swordGlow.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}class qy{constructor(e,t){Z(this,"audio",null);Z(this,"master",null);Z(this,"buffers",[]);Z(this,"fallback",null);Z(this,"decoding",null);Z(this,"recordingsReady",!1);Z(this,"sources",new Set);Z(this,"played",0);Z(this,"encoded",Promise.all(["forge-anvil.mp3","forge-clink.mp3"].map(async e=>{try{const t=await fetch(new URL(`audio/${e}`,document.baseURI));return t.ok?await t.arrayBuffer():null}catch{return null}})));this.enabled=e,this.host=t,t.dataset.audioState="loading"}unlock(){if(this.enabled())try{this.audio||(this.audio=new AudioContext,this.master=this.audio.createGain(),this.master.gain.value=.72,this.master.connect(this.audio.destination)),this.audio.state==="suspended"&&this.audio.resume(),this.decoding||(this.decoding=this.encoded.then(async e=>{const t=await Promise.all(e.map(async n=>{try{if(n)return{buffer:await this.audio.decodeAudioData(n),recording:!0}}catch{}return{buffer:this.makeFallback(),recording:!1}}));this.buffers=t.map(n=>n.buffer),this.recordingsReady=t.every(n=>n.recording),this.host.dataset.audioState=this.recordingsReady?"ready":"fallback"}))}catch{this.host.dataset.audioState="unavailable"}}setMuted(e){if(this.master&&this.audio&&this.master.gain.setValueAtTime(e?0:.72,this.audio.currentTime),e)for(const t of this.sources)try{t.stop()}catch{}else this.unlock()}suspend(){var e;(e=this.audio)==null||e.suspend()}makeFallback(){if(this.fallback)return this.fallback;const e=this.audio.sampleRate,t=this.audio.createBuffer(1,Math.ceil(e*.5),e),n=t.getChannelData(0),i=[[773,.12,.11],[1197,.16,.18],[1913,.1,.13],[2851,.07,.085],[4133,.04,.055]];for(let r=0;r<n.length;r++){const o=r/e;let a=(Math.random()*2-1)*.24*Math.exp(-o/.008);for(const[c,l,h]of i)a+=Math.sin(o*c*Math.PI*2)*l*Math.exp(-o/h);n[r]=a*Math.min(1,o/4e-4)}return this.fallback=t}play(e,t,n,i=0){if(!this.enabled()||!this.audio||this.audio.state!=="running"||!this.master)return;const r=this.audio.createBufferSource(),o=this.audio.createGain();r.buffer=e,r.playbackRate.value=t,o.gain.value=n,r.connect(o).connect(this.master),this.sources.add(r),r.onended=()=>{r.disconnect(),o.disconnect(),this.sources.delete(r)},r.start(this.audio.currentTime+i)}impact(e,t,n){if(!this.enabled()||!this.audio)return;const i=(t==="bronze"?.94:t==="cold"?1.05:1)*(.975+Math.random()*.05);if(this.play(this.buffers[0]||this.makeFallback(),i,n==="bold"?1:n==="precise"?.86:.78),e==="damage"||e==="break"){const r=this.buffers[1]||this.makeFallback();this.play(r,i*1.12,e==="break"?.65:.3,.045),e==="break"&&(this.play(r,i*.87,.38,.105),this.play(r,i*1.28,.24,.185))}e==="great"&&this.play(this.buffers[1]||this.makeFallback(),i*1.3,.35,.075),this.audio.state==="running"&&(this.host.dataset.audioPlayed=String(++this.played),this.host.dataset.audioType=this.recordingsReady?"recording":"metal-fallback")}}const vc="yichuichengshenbing.v1";let Nl;try{Nl=JSON.parse(localStorage.getItem(vc)||"null")}catch{Nl=null}const Ie=new rf(s=>localStorage.setItem(vc,JSON.stringify(s)),Nl),X=s=>document.getElementById(s);let ze=null;try{ze=new Xy(X("scene3d"))}catch(s){X("scene-error").hidden=!1,console.error(s)}let lt="forge",Xt=!1,Pa=0,qt=!1,Et=!1;const xc="yichuichengshenbing.heat",mr=new qy(()=>Ie.state.sound,X("scene3d"));function ri(s){Xt||qt||Et||(lt=s,Ts=performance.now(),ze==null||ze.setStation(s==="merchant"?"forge":s),$t())}const Yy=["heat","forge","finished","broken"];let Do="precise",_r=performance.now(),Io=!1,Ts=0,Vt=0,nn="",mu=0,Gt=null;function Fi(s=440,e=.12){if(Ie.state.sound)try{const t=window.AudioContext;Gt=Gt||new t;const n=Gt.createOscillator(),i=Gt.createGain();n.type="triangle",n.frequency.setValueAtTime(s,Gt.currentTime),n.frequency.exponentialRampToValueAtTime(s*.6,Gt.currentTime+e),i.gain.setValueAtTime(.055,Gt.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,Gt.currentTime+e),n.connect(i).connect(Gt.destination),n.start(),n.stop(Gt.currentTime+e)}catch{}}function Lt(s){const e=X("toast");e.textContent=s,e.classList.add("show"),window.clearTimeout(mu),mu=window.setTimeout(()=>e.classList.remove("show"),2400)}function Qt(s){try{s(),$t()}catch(e){Lt(e instanceof Error?e.message:String(e))}}function Ot(s){return s>=1e12?s.toExponential(2):Math.floor(s).toLocaleString("zh-CN")}function Ls(){var s;return((s=Ie.state.session)==null?void 0:s.phase)||"choose"}function jy(s){for(const e of Yy)X(e).hidden=e!==s||lt!=="forge";X("cat-panel").hidden=lt!=="cat",X("relic-panel").hidden=lt!=="relics",X("merchant-panel").hidden=lt!=="merchant",X("collection-panel").hidden=lt!=="collection",document.querySelector(".station-nav").hidden=!1,document.querySelector(".game").dataset.moving=String(Et),Ld()}function Ld(){const s=Ls(),e=Ie.state.furnaceLevel,{min:t,max:n}=Fl(e,Ie.state.relics.includes("ember")),i={choose:["把剑送入炉火","点击熔炉，直接开始锻造"],heat:["剑正在炉中加热",`炉火 Lv${e} · ${So(e)/1e3} 秒满温 · ${t}%—${n}% 取剑最佳`],forge:["点台面，落锤锻造","继续锤可能涨价或损坏 · 随时收剑保住价值"],finished:["神兵已成","查看价值，出售继续、收藏或献给食铁兽"],broken:["剑胚断裂","这把剑的价值归零，可以再锻一把"]};s==="forge"&&Ie.state.session.level>=Pn&&(i.forge=["已经达到 +99","点击收剑，保住当前价值"]);const r=Et?["正在移剑","等待宝剑放稳后再操作"]:lt==="cat"?["点食铁兽，上交宝剑","价值达标的宝剑可以换取铁剑"]:lt==="relics"?["遗物机","三格遗物 · 成功纳贡后补货"]:lt==="collection"?["收藏剑架","收藏的宝剑陈列在这里"]:lt==="merchant"?["幽灵商人的货架","每三天来访 · 限时金币交易"]:i[s];X("cue-title").textContent=r[0],X("cue-detail").textContent=r[1];const o=lt==="cat"?["cat"]:lt==="relics"?["relics"]:lt==="collection"?[]:s==="choose"?["furnace"]:s==="heat"?["anvil"]:s==="forge"&&Ie.state.session.level<Pn?["anvil"]:[];for(const a of["furnace","anvil","cat","relics"]){const c=X("target-"+a);c.classList.toggle("available",o.includes(a)&&!Et&&!qt),c.hidden=lt!=="forge"&&a!==lt||a==="anvil"&&s==="forge"}X("target-anvil").innerHTML=s==="forge"?"":"铸剑台 <small>放剑</small>",X("target-furnace").innerHTML="熔炉 <small>"+(s==="heat"?"加热中":"入炉")+"</small>",X("scene3d").setAttribute("aria-label",r.join("，"))}function $t(){const s=Ie.state,e=s.session,t=Ls();jy(t),document.querySelector(".game").dataset.phase=t,Qy(),ze==null||ze.sync(s),X("iron-blanks").textContent=String(s.ironBlanks),X("day-label").textContent="工坊日 "+s.workshopDay,X("merchant-call").hidden=!nr(s),X("merchant-call").setAttribute("aria-label","幽灵商人 · 第 "+s.workshopDay+" 日，查看商品"),X("merchant-call").toggleAttribute("disabled",Xt||qt||Et),X("coin").textContent=Ot(s.coins),X("scrap").textContent=Ot(s.scraps),X("workshop-level").textContent="食铁兽的工坊 · 炉火 Lv"+s.furnaceLevel,X("sound").textContent=s.sound?"🔊":"🔇",X("show-legacy-swords").checked=s.showLegacySwords,X("show-legacy-swords").toggleAttribute("disabled",qt||Et||Xt),Ld(),document.querySelector(".game").dataset.striking=String(qt),X("cashout").toggleAttribute("disabled",qt||Et),X("nav-upgrades").textContent="升级锻锤 "+(s.hammerLevel>=2?"已满级":"500 金"),X("nav-upgrades").toggleAttribute("disabled",!!e||s.hammerLevel>=2||s.coins<500);const n=vu(s.furnaceLevel);if(X("nav-furnace").textContent=s.furnaceLevel>=Ui?"熔炉 Lv"+Ui+" · 已满级":"升级熔炉 Lv"+s.furnaceLevel+"→"+(s.furnaceLevel+1)+" · "+n+" 金",X("nav-furnace").toggleAttribute("disabled",!!e||n===null||s.coins<(n??0)),X("nav-anvil").textContent="升级铁砧 "+(s.anvilLevel>=2?"已满级":"1100 金"),X("nav-anvil").toggleAttribute("disabled",!!e||s.anvilLevel>=2||s.coins<1100),X("nav-collection").textContent="剑谱 "+s.swords.length+" · 展柜 "+s.caseIds.length+"/"+Ie.caseCapacity(),X("foot-hint").textContent=e?"当前 "+(e.apprentice?"学徒代工":"正式锻造")+" · 已锤 "+e.hits+" 次":"巨剑纳贡 · 铁剑再锻 · 遗物成长",!e)gu(0,"great"),lt==="forge"&&(X("cue-detail").textContent="默认大剑 · 铁胚 · 点击熔炉开始");else{if(gu(e.level,e.blade),t==="heat"&&(X("heating-order").textContent="炉中加热 · Lv"+s.furnaceLevel+" · "+So(s.furnaceLevel)/1e3+" 秒满温",X("heat-fill").style.width=Vt+"%",X("heat-text").textContent=Math.round(Vt)+"%"),t==="forge"){X("supply-actions").replaceChildren();for(const[a,c]of[["ward","猫爪护符"],["chalk","绯红粉笔"],["star","寒星碎片"],["clock","回溯发条"]]){const l=s.supplies[a];if(!l)continue;const h=document.createElement("button");h.className="secondary",h.textContent=c+" ×"+l,h.disabled=qt||Et||a==="ward"&&!!e.wardNext||a==="chalk"&&!!e.chalkNext||a==="clock"&&!e.lastCheckpoint,h.addEventListener("click",()=>Qt(()=>{a==="clock"?Ie.rewindLastStrike():Ie.useSupply(a),Lt(a==="clock"?"已恢复到上一锤之前":c+"已启用")})),X("supply-actions").append(h)}X("forge-level").textContent="+"+e.level,X("hit-count").textContent=String(e.hits);for(const a of["safe","precise","bold"])X(a).toggleAttribute("disabled",qt||Et),X(a).classList.toggle("active",a===Do);X("protection").textContent=e.protection?e.protectedUsed?"护符已消耗":"首次断剑会改为受损":"无护符保护",X("heat-tag").textContent=e.goodHeat?"好火候":"普通火候",X("value-now").textContent=Ot(wo(e,No()))+" 金",X("cashout").textContent=e.level>=Pn?"已满级 · 收剑":"收剑",X("result").textContent=nn;const i=X("mark"),r=i.value,o=_u(s).filter(a=>!e.apprentice||a==="none");i.innerHTML=o.map(a=>'<option value="'+a+'">'+Ac[a].name+" · "+Ac[a].detail+"</option>").join(""),i.value=r&&o.includes(r)?r:"none",X("mark-row").hidden=o.length<2}if(t==="finished"&&e.sword){const i=e.sword;X("finished-level").textContent="+"+i.level,document.querySelector("#finished .section-title small").textContent=(e.specialBlank?"星纹·":"")+ti(i.blade,i.level,Ie.state.showLegacySwords).name,X("finished-quality").textContent="Q "+i.quality.toFixed(2),X("finished-value").textContent=Ot(i.value),X("finished-sell").textContent=Ot(Ie.salePrice(i)),X("deliver").hidden=!e.apprentice,X("sell").hidden=e.apprentice,X("collect").hidden=e.apprentice,X("offer-cat").hidden=e.apprentice,X("collect").toggleAttribute("disabled",e.apprentice||s.caseIds.length>=Ie.caseCapacity()),X("sell").toggleAttribute("disabled",e.apprentice),e.apprentice&&(X("deliver").textContent=e.hits>=2?"完成代工 · 获得60金币":"结束练习")}t==="broken"&&(X("broken-rewind").hidden=!s.supplies.clock||!e.lastCheckpoint),t==="broken"&&(X("broken-scrap").textContent=e.apprentice?"学徒练习不损失材料":s.relics.includes("salvage")&&!e.tutorial?"已回收绑定残料 "+Math.floor(Pi[e.material].blank*.4):"当前剑价值归零 · 成长与遗物保留")}Od()}function gu(s,e){X("sword-level-tag").textContent=ti(e,s,Ie.state.showLegacySwords).name+" · 强化 +"+s}function No(){return X("mark").value||"none"}function Dd(s){return X("forge-options").open?Mu(s-_r,Ie.state.hammerLevel):"normal"}function Id(s){const e=Ie.state.session;if(ze==null||ze.setBoardInfo(X("cue-title").textContent||"",nn,e?wo(e,No()):0,Vt),(e==null?void 0:e.phase)==="forge"){const t=((s-_r)%1500+1500)%1500,n=.27+Math.abs(750-t)/750*.77;X("timing-ring").style.transform="translate(-50%,-50%) scale("+n.toFixed(3)+")";const i=Dd(s),r=Su(Ie.state,Do,e.level,i);ze==null||ze.sync(Ie.state,r),X("cashout").toggleAttribute("disabled",qt||Et||!!(ze!=null&&ze.hostHammerBusy())),X("timing-indicator").textContent=i==="perfect"?"✦ 完美":i==="normal"?"普通":"偏离",X("timing-indicator").className="timing "+i,X("probability").textContent="成功 "+(r.success/100).toFixed(1)+"% · 大成功 "+(r.great/100).toFixed(1)+"% · 不变 "+(r.unchanged/100).toFixed(1)+"% · 受损 "+(r.damage/100).toFixed(1)+"%",X("fracture-risk").textContent=e.level>=Pn?"封顶":(r.break/100).toFixed(1)+"%";const o=Ln(e),a=e.frenzyCharge>=Ii;X("frenzy-label").textContent=e.superGod?"超神 · 每锤价值 +50%～100%":o?"入神 "+((e.frenzyUntil-Date.now())/1e3).toFixed(1)+"秒 · 不会断剑":a?"入神已就绪 · 下一锤开启":"入神蓄力 "+e.frenzyCharge+"/10",X("frenzy-meter").classList.toggle("active",o||a);const c=X("frenzy-cells").children;for(let l=0;l<c.length;l++)c[l].classList.toggle("filled",o||l<e.frenzyCharge);X("scene3d").dataset.frenzy=e.superGod?"super-god":o?"active":a?"ready":"charging",X("ring-progress").style.width=Math.round(t/1500*100)+"%"}Io&&(e==null?void 0:e.phase)==="heat"&&!Et&&lt==="forge"&&!document.hidden&&(Vt=Math.min(100,Vt+jd(Math.max(0,s-Ts),Ie.state.furnaceLevel)),Ts=s,X("heat-fill").style.width=Vt+"%",X("heat-text").textContent=Math.round(Vt)+"%",ze==null||ze.sync(Ie.state),ze==null||ze.setHeat(Vt),X("scene3d").dataset.heat=Vt.toFixed(1),sessionStorage.setItem(xc,JSON.stringify({id:e.id,percent:Vt})),X("cue-title").textContent=xu(Vt,Ie.state.furnaceLevel,Ie.state.relics.includes("ember"))?"好火候！点铸剑台取剑":Vt>=100?"火候已过，仍可取剑":"剑正在炉中加热"),requestAnimationFrame(Id)}function Nd(){const s=Ie.state.session,e=performance.now();if((s==null?void 0:s.phase)!=="forge"||lt!=="forge"||e<Pa||qt||Et||Xt||!ze||document.hidden||s.level>=Pn||ze.hostHammerBusy())return;mr.unlock();const t=Dd(e),n=Do,i=s.id+":hit:"+s.hits,r=s.material,o=s.superGod||Ln(s)||s.frenzyCharge>=Ii?.65:1;qt=!0,Pa=e+550*o,$t(),ze.strike(()=>{let a="success";return qt=!1,Pa=performance.now()+370*o,Qt(()=>{const c=Ie.strike(n,t,i);a=c.result,mr.impact(a,r,n),a==="success"||a==="great"?nn=(a==="great"?"✦ 大成功！":"锻造成功")+" "+ti(s.blade,c.after,Ie.state.showLegacySwords).name+" · "+Ot(c.afterValue)+" 金":a==="unchanged"?nn="本锤无变化 · 价值 "+Ot(c.afterValue)+" 金":a==="damage"?nn=c.protected?"🛡️ 护符挡住断剑 · Lv"+c.after:"⚡ 锻造受损 Lv"+c.after:nn="💥 宝剑断裂",c.superGod?nn=(c.enteredSuperGod?"✦ 进入超神！":"✦ 超神锻造")+" · 价值 +"+Math.round((c.valueMultiplier-1)*100)+"% · "+Ot(c.afterValue)+" 金":Ln(s)&&!c.frenzy&&(nn="入神！4秒内不会断剑 · "+nn),_r=performance.now()}),a},o)}function Ud(s=!1){if(!(Ie.state.session||Et||!ze))try{ze.clearRewards(),Ie.start("iron","great",s),nn="",Vt=0,Et=!0,$t(),ze.transferTo("furnace",()=>{Et=!1,Io=!0,Ts=performance.now(),$t()})}catch(e){Lt(e instanceof Error?e.message:String(e))}}function Ky(){Ls()!=="heat"||Et||!ze||(Io=!1,Et=!0,$t(),ze.transferTo("anvil",()=>{Et=!1,Qt(()=>Ie.heat(Vt)),_r=performance.now(),sessionStorage.removeItem(xc)}))}function Jy(){Ls()!=="forge"||qt||Et||ze!=null&&ze.hostHammerBusy()||Qt(()=>{Ie.cashout(No()),nn=""})}function Zy(s){if(!s||Et||qt||Xt)return;if(s==="cat"){lt==="cat"?X("tribute").click():ri("cat");return}if(s==="relics"){ri("relics");return}if(lt!=="forge")return;const e=Ls();s==="furnace"&&(e==="choose"?Ud(Ie.needsApprentice()):Lt(e==="heat"?"剑已经在炉中加热，点铸剑台取出":"先把这把剑锻好，再入炉新剑")),s==="anvil"&&(e==="heat"?Ky():e==="forge"?Nd():e==="choose"&&Lt("先点熔炉，把剑胚加热"))}for(const s of["safe","precise","bold"])X(s).addEventListener("click",()=>{Do=s,$t()});const Ul=X("scene3d");Ul.addEventListener("pointerdown",s=>{if(s.button!==0||!s.isPrimary||Et||qt||Xt)return;mr.unlock();const e=(ze==null?void 0:ze.pick(s.clientX,s.clientY))||null;s.preventDefault(),Zy(e)});Ul.addEventListener("pointermove",s=>{Ul.style.cursor=ze!=null&&ze.pick(s.clientX,s.clientY)?"pointer":"default"});document.addEventListener("keydown",s=>{var e;if(s.code==="Escape"){X("forge-options").removeAttribute("open"),ri("forge");return}s.code!=="Space"||s.repeat||s.ctrlKey||s.metaKey||s.altKey||(e=s.target)!=null&&e.closest('button,select,input,textarea,a,[contenteditable="true"]')||Ls()==="forge"&&lt==="forge"&&(s.preventDefault(),Nd())});X("cashout").addEventListener("click",Jy);X("mark").addEventListener("change",$t);for(const[s,e]of[["deliver","DELIVERED"],["collect","COLLECTED"]])X(s).addEventListener("click",()=>Qt(()=>{const t=Ie.dispose(e);Lt(t>0?"获得金币 +"+Ot(t):"神兵已收入剑谱"),Fi(700,.25)}));X("sell").addEventListener("click",()=>{try{const s=Ie.dispose("SOLD");Lt("出售获得 "+Ot(s)+" 金 · 继续锻造"),Fi(700,.25),$t(),Ud(Ie.needsApprentice())}catch(s){Lt(s instanceof Error?s.message:String(s)),$t()}});X("broken-next").addEventListener("click",()=>Qt(()=>{Ie.closeBroken(),nn=""}));X("broken-rewind").addEventListener("click",()=>Qt(()=>{Ie.rewindLastStrike(),nn="发条回溯 · 宝剑已修复",Lt("宝剑已恢复到上一锤之前")}));X("nav-upgrades").addEventListener("click",()=>Qt(()=>{Ie.upgrade("hammer"),Lt("锻锤升到 Lv2，完美时机窗扩大")}));X("nav-furnace").addEventListener("click",()=>Qt(()=>{Ie.upgrade("furnace"),Lt("熔炉升级到 Lv"+Ie.state.furnaceLevel+" · "+So(Ie.state.furnaceLevel)/1e3+" 秒满温")}));X("nav-anvil").addEventListener("click",()=>Qt(()=>{Ie.upgrade("anvil"),Lt("铁砧升级，可安装已解锁铭文")}));X("nav-collection").addEventListener("click",()=>ri("collection"));X("show-legacy-swords").addEventListener("change",()=>Qt(()=>{Ie.setShowLegacySwords(X("show-legacy-swords").checked),nn="",Lt(Ie.state.showLegacySwords?"已恢复旧剑外观":"已隐藏旧剑外观 · 只展示独立剑型")}));X("sound").addEventListener("click",()=>{Ie.state.sound=!Ie.state.sound,mr.setMuted(!Ie.state.sound),localStorage.setItem(vc,JSON.stringify(Ie.state)),$t()});document.addEventListener("visibilitychange",()=>{document.hidden?(Gt==null||Gt.suspend(),mr.suspend()):(Gt==null||Gt.resume(),Ts=performance.now(),_r=performance.now())});function Qy(){const s=Ie.state,e=s.session,t=e==null?void 0:e.sword;for(const h of["forge","cat","relics","collection"]){const u=X("station-"+h);u.classList.toggle("active",lt===h),u.setAttribute("aria-pressed",String(lt===h)),u.toggleAttribute("disabled",Xt||qt||Et)}X("scene-name").textContent=lt==="forge"?"神兵锻造台":lt==="cat"?"食铁兽的纳贡台":lt==="relics"?"遗物机":lt==="collection"?"收藏剑架":"幽灵商人";const n=so(s),i=(t==null?void 0:t.value)??(e?wo(e,No()):0);X("cat-demand-label").textContent="宝剑价值 ≥ "+Ot(n)+" 金",document.querySelector(".cat-demand").hidden=lt==="collection"||lt==="relics"||lt==="merchant",X("cat-count").textContent="已纳贡 "+s.catTributes+" 次";const r=(e==null?void 0:e.phase)==="finished"&&!e.apprentice&&!!t&&i>=n;X("tribute").toggleAttribute("disabled",Xt||!r),X("offer-cat").toggleAttribute("disabled",Xt||!r),X("tribute").textContent=Xt?"食铁兽正在吃剑……":r?"上交宝剑 · 换取 "+bu(i,n)+" 把铁剑":"需要价值 "+Ot(n)+" 金的宝剑",X("cat-offer-info").textContent="本次要求 "+Ot(n)+" 金 · 当前 "+Ot(i)+" 金 · "+(i>=n?"价值已达标"+((e==null?void 0:e.phase)==="finished"?"，可以纳贡":"，收剑后可以纳贡"):"还差 "+Ot(n-i)+" 金"),X("relic-rack-count").textContent=s.relics.length+"/"+Ia+" · 第 "+s.workshopDay+" 日";const o=X("relic-list");o.replaceChildren();const a=s.workshopDay===1&&!s.relicWelcomeUsed;for(let h=0;h<3;h++){const u=s.relicOffers[h]||"";if(!u){const x=document.createElement("div");x.className="relic-row relic-empty",x.dataset.slot=String(h),x.textContent="空格 · 下次纳贡后补货",o.append(x);continue}const f=ls.find(x=>x.id===u);if(!f)continue;const d=document.createElement("div");d.className="relic-row",d.dataset.slot=String(h);const g=document.createElement("span");g.className="relic-icon "+f.id,g.textContent="◈";const v=document.createElement("div"),m=document.createElement("b"),p=document.createElement("small");m.textContent=f.name,p.textContent=f.detail,v.append(m,p);const y=document.createElement("button");y.className="secondary",y.textContent=a?"免费选取":f.cost+" 铁剑",y.disabled=!!e||s.relics.length>=Ia||!a&&s.ironBlanks<f.cost||Xt,y.addEventListener("click",()=>Qt(()=>{Ie.buyRelic(f.id),Lt("获得遗物 · "+f.name),Fi(820,.25)})),d.append(g,v,y),o.append(d)}const c=X("relic-equipped");if(c.replaceChildren(),!s.relics.length){const h=document.createElement("small");h.className="hint",h.textContent="遗物架尚为空",c.append(h)}for(const h of s.relics){const u=ls.find(p=>p.id===h);if(!u)continue;const f=document.createElement("div");f.className="relic-row";const d=document.createElement("div"),g=document.createElement("b"),v=document.createElement("small");g.textContent="✦ "+u.name,v.textContent=u.detail,d.append(g,v);const m=document.createElement("button");m.className="secondary",m.textContent="卸下",m.disabled=!!e,m.addEventListener("click",()=>{confirm("卸下 "+u.name+"？已花费的铁剑不返还。")&&Qt(()=>Ie.removeRelic(h))}),f.append(d,m),c.append(f)}$y(),X("merchant-note").textContent="工坊日 "+s.workshopDay+" · "+(nr(s)?"今日开摊，商品各限购一份":"商人暂时离开"),X("merchant-inventory").textContent="星纹剑胚 "+s.specialBlanks+" · 护符 "+s.supplies.ward+" · 粉笔 "+s.supplies.chalk+" · 星屑 "+s.supplies.star+" · 发条 "+s.supplies.clock;const l=X("merchant-list");l.replaceChildren();for(const h of s.merchantStock){const u=Na.find(y=>y.id===h);if(!u)continue;const f=document.createElement("div");f.className="relic-row";const d=document.createElement("div"),g=document.createElement("b"),v=document.createElement("small");g.textContent=u.name,v.textContent=u.detail,d.append(g,v);const m=document.createElement("button");m.className="secondary";const p=s.merchantPurchased.includes(h);m.textContent=p?"已售罄":u.cost+" 金",m.disabled=p||!!e||s.coins<u.cost||Xt||!nr(s),m.addEventListener("click",()=>Qt(()=>{Ie.buyMerchant(h),Lt("商人交付 · "+u.name),Fi(760,.24)})),f.append(d,m),l.append(f)}}for(const s of["forge","cat","relics","collection"])X("station-"+s).addEventListener("click",()=>ri(s));X("merchant-call").addEventListener("click",()=>ri("merchant"));X("merchant-back").addEventListener("click",()=>ri("forge"));X("offer-cat").addEventListener("click",()=>ri("cat"));X("cat-back").addEventListener("click",()=>{ze==null||ze.clearRewards(),X("cat-back").hidden=!0,X("tribute-reward").textContent="",X("cat-speech").textContent="「交出你的巨剑！本大爷饿了，开饭！」",ri("forge")});X("tribute").addEventListener("click",async()=>{if(!Xt){if(!ze){Lt("3D场景尚未就绪，请刷新后重试");return}try{Xt=!0;const s=Ie.tribute();$t();for(const e of["station-forge","station-cat","station-relics","station-collection"])X(e).toggleAttribute("disabled",!0);Fi(120,.3),await ze.tribute(s.blanks,e=>{X("cat-speech").textContent=e,e.startsWith("噗")&&Fi(90,.25)}),Xt=!1,X("tribute-reward").textContent="获得 "+s.blanks+" 把铁剑 · 遗物机已补货",X("cat-back").hidden=!1;for(const e of["station-forge","station-cat","station-relics","station-collection"])X(e).removeAttribute("disabled");$t(),Fi(740,.3)}catch(s){Xt=!1,Lt(s instanceof Error?s.message:String(s)),$t()}}});function $y(){const s=Ie.state.caseIds.map(t=>Ie.state.swords.find(n=>n.id===t&&n.disposal==="COLLECTED")).filter(t=>!!t);X("collection-count").textContent=s.length+"/"+Ie.caseCapacity();const e=X("collection-list");if(e.replaceChildren(),!s.length){const t=document.createElement("p");t.className="muted",t.textContent="剑架还空着。锻造后选择“收藏”，宝剑就会摆在这里。",e.append(t)}for(const[t,n]of s.entries()){const i=document.createElement("div");i.className="collection-row";const r=document.createElement("div"),o=document.createElement("b"),a=document.createElement("small");o.textContent=t+1+". "+(n.name||ti(n.blade,n.level,Ie.state.showLegacySwords).name),a.textContent="价值 "+Ot(n.value)+" 金 · 强化 +"+n.level,r.append(o,a);const c=document.createElement("button");c.className="secondary",c.textContent="出售 "+Ot(Ie.salePrice(n))+" 金",c.disabled=!!Ie.state.session,c.addEventListener("click",()=>{confirm("出售收藏的 "+o.textContent+"？")&&Qt(()=>{Ie.sellCollected(n.id),Lt("宝剑已出售，剑架位置腾空")})}),i.append(r,c),e.append(i)}}let Ni=localStorage.getItem("yichuichengshenbing.boardHidden")==="true";function Fd(){ze==null||ze.setBoardHidden(Ni),X("board-toggle").textContent=Ni?"▼":"▲",X("board-toggle").setAttribute("aria-expanded",String(!Ni)),X("board-toggle").setAttribute("aria-label",Ni?"显示信息面板":"隐藏信息面板")}X("board-toggle").addEventListener("click",()=>{Ni=!Ni,localStorage.setItem("yichuichengshenbing.boardHidden",String(Ni)),Fd()});Fd();function Od(){const s=document.querySelector(".control:not([hidden])");document.querySelector(".game").style.setProperty("--panel-height",((s==null?void 0:s.getBoundingClientRect().height)||0)+"px")}const e1=new ResizeObserver(Od);for(const s of document.querySelectorAll(".control"))e1.observe(s);window.addEventListener("pagehide",()=>ze==null?void 0:ze.destroy(),{once:!0});const io=Ie.state.session;if((io==null?void 0:io.phase)==="heat"){try{const s=JSON.parse(sessionStorage.getItem(xc)||"null");Vt=(s==null?void 0:s.id)===io.id?Math.min(100,Math.max(0,Number(s.percent)||0)):0}catch{}Io=!0,Ts=performance.now(),ze==null||ze.setHeat(Vt)}X("workshop-upgrades").append(X("nav-upgrades"),X("nav-furnace"),X("nav-anvil"),X("nav-collection"));$t();requestAnimationFrame(Id);
