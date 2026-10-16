(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const cd=9,hd=[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3],ud=[800,1800,2800,4e3,5500,7500,1e4,13e3];function ur(i){return hd[Math.min(cd,Math.max(1,Math.floor(i||1)))-1]}function dd(i,e){return Math.min(100,Math.max(0,i)/ur(e)*100)}function yl(i,e){return{min:e?55:70,max:i>=3?100:90}}function Wh(i,e,t){const{min:n,max:s}=yl(e,t);return i>=n&&i<=s}const si={iron:{name:"铁胚",blank:305,fuel:15,value:1,atk:1,unlock:1},bronze:{name:"青铜",blank:417,fuel:15,value:1.35,atk:1.06,unlock:2},cold:{name:"寒铁",blank:652,fuel:20,value:2.1,atk:1.12,unlock:3}},ba={straight:["旧铁直剑","青锋剑","柳叶剑","飞燕剑","月牙剑","游龙剑","流云剑","鱼肠长剑","破风剑","逐星剑","白虹剑","霜华剑","斩月剑","惊鸿剑","紫电剑","寒光剑","青莲剑","风雷剑","苍雪剑","孤影剑","陨星剑","龙吟剑","日轮剑","夜魄剑","天罡剑","玄霄剑","流光剑","七曜剑","山河剑","天命剑"],great:["粗铁巨剑","阔刃大剑","狼牙巨剑","断岩剑","裂甲剑","怒涛剑","碎岳剑","破军剑","龙脊剑","战王剑","焚城剑","镇岳剑","熔岩剑","狂狮剑","撼地剑","斩龙剑","狱火剑","山崩剑","巨灵剑","泰坦剑","苍穹剑","灾厄剑","天罚剑","破晓剑","灭世剑","星陨巨刃","赤霄重剑","霸皇剑","不朽神锋","开天剑"],short:["旧铁短剑","匕首剑","燕尾短剑","蝶翼剑","灵蛇剑","双牙剑","夜鸦剑","流萤剑","月影剑","疾风剑","玄狐剑","隐星剑","血月剑","幽兰剑","鬼影剑","千刃剑","夜雨剑","碎光剑","幻影剑","夜魇剑","星屑剑","极影剑","影舞剑","天刺剑","瞬光剑","虚空剑","流星剑","无相剑","绝影剑","天隐剑"]},cc=["","曜纹·","星陨·","太古·"],hc=[0,3,6,9,12,15,25,29,40,55,70,85],fd=["开天剑","两仪神锋","太初圣刃","寰宇巨剑","永恒天刃"],wa=["初铸","铭锋","刻星","淬光","鎏纹","凝辉","承天","破界","御极","化曜","玄穹","圣印","万象","天冠","永恒"];function pd(i,e){const t=vo(Math.floor(Number.isFinite(e)?e:0),0,bn),n=ba[i],s=Math.floor(t/n.length),r=t%n.length,o=hc.reduce((h,d,f)=>t>=d?f:h,0),a=hc[o],l=t<40?0:t<55?1:t<70?2:t<85?3:4,c=t<30?n[r]:fd[l]+"·"+wa[t-a];return{level:t,name:t<30?cc[Math.min(s,cc.length-1)]+c:c,artStage:o,stageStart:a,detail:t-a,ascension:l,silhouette:o,guardStyle:Math.min(5,Math.floor(t/3)),ornament:t,crest:Math.floor(t/12),span:1+Math.min(t,99)*.0027,runeCount:Math.min(t,12),rarity:Math.min(8,Math.floor(t/12))}}Object.keys(ba).reduce((i,e)=>i+ba[e].length,0);function Sn(i,e,t=!1){const n=pd(i,e),s=n.level;if(t)return{...n,theme:s<15?"legacy":s<25?"dragon":s<29?"meteor":"genesis"};if(s>=40)return{...n,theme:"genesis"};const r=["dragon","meteor","genesis","runic","tyrant","leviathan","tempest"],o=["斩龙剑","星陨巨刃","开天剑","铭咒双锋","龙齿裁决","深海弧刃","雷霆环刃"],a=Math.min(s,r.length-1),l=s-a,c=r[a],h=o[a]+(l===0?"":"·"+(l<wa.length?wa[l]:"精铸"+l));return{...n,name:h,theme:c,artStage:a,stageStart:a,detail:l,ascension:0,silhouette:a}}const uc={none:{name:"无铭文",detail:"不附加属性"},flame:{name:"赤焰纹",detail:"剑刃浮现赤焰纹路"},armor_break:{name:"裂金纹",detail:"剑身浮现金色裂纹"},swift:{name:"迅风纹",detail:"剑锋展现轻盈流风"},guard:{name:"守锋纹",detail:"护手亮起守护纹章"},echo:{name:"回响纹",detail:"剑脊流转回响符文"},star:{name:"星芒纹",detail:"纯外观星辉效果"}};function Xh(i){const e=["none"];if(i.anvilLevel<2)return e;for(const[t,n]of[["flame",2],["armor_break",4],["swift",6],["guard",10],["echo",15],["star",20]])i.totalMade>=n&&e.push(t);return e}function vo(i,e,t){return Math.min(t,Math.max(e,i))}function bi(i){let e=i>>>0;return e^=e<<13,e^=e>>>17,e^=e<<5,e>>>0}const bn=99,Ai=10,Ro=4e3,md=.01,dc=1.5,gd=2;function qh(i,e=Date.now()){return i.phase==="forge"&&!i.superGod&&wn(i,e)}function vd(i,e,t=Date.now()){return qh(i,t)&&e>=0&&e<md}function xd(i,e,t){const n=[[0,0],[3,1290],[5,2970],[10,4670],[20,6300],[30,7200]],s=vo(e,0,bn);let r=7200;for(let l=1;l<n.length;l++)if(s<=n[l][0]){const[c,h]=n[l-1],[d,f]=n[l];r=Math.round(h+(f-h)*(s-c)/(d-c));break}const o=1e4-r,a={success:Math.floor(o*.65),great:Math.floor(o*.1),unchanged:Math.floor(o*.15),damage:0,break:r};if(a.damage=1e4-a.success-a.great-a.unchanged-a.break,i==="safe"){const l=Math.min(400,a.break);a.break-=l,a.unchanged+=l}if(i==="bold"){const l=Math.min(400,a.success);a.success-=l,a.great+=l}if(t==="perfect"){const l=Math.min(400,a.damage);a.damage-=l,a.success+=l}if(t==="miss"){const l=Math.min(400,a.success);a.success-=l,a.damage+=l}return a}function Yh(i,e=1){const n=(i%1500+1500)%1500,s=Math.abs(n-750),r=e>=2?104:90;return s<=r?"perfect":s<=250?"normal":"miss"}function Md(i,e){let t=0;for(const n of["success","great","unchanged","damage","break"])if(t+=i[n],e<t)return n;return"break"}function fc(i,e){return Math.round(vo(.9+(i?.03:0)+e*.03,.9,1.13)*100)/100}function _d(i,e,t,n="none"){return 320*si[t].value*Math.pow(1.5,vo(i,0,bn))*(n==="none"?1:1.05)}function wn(i,e=Date.now()){return i.frenzyUntil>e}function $s(i,e="none"){return i.currentValue*(e==="none"?1:1.05)}function yd(i=20261008){return{version:1,coins:300,scraps:0,formalCount:0,totalMade:0,totalBroken:0,hammerLevel:1,furnaceLevel:1,anvilLevel:1,showCaseLevel:1,caseIds:[],swords:[],session:null,ledger:[],seed:i>>>0||1,sound:!0,showLegacySwords:!1,ironBlanks:0,catTributes:0,relics:[],workshopDay:1,tributeDays:0,relicOffersDay:0,relicOffers:[],relicRerolls:0,relicWelcomeUsed:!1,merchantStockDay:0,merchantStock:[],merchantPurchased:[],supplies:{ward:0,chalk:0,star:0,clock:0},specialBlanks:0}}const ao=8,nn=[{id:"guard",name:"九命护符",cost:2,detail:"正式锻造首次断剑改为受损"},{id:"ember",name:"炉心火石",cost:1,detail:"每阶提升炉火 1 级，最高 Lv9；好火候从 55% 起算"},{id:"lucky",name:"幸运铜铃",cost:2,detail:"最多 3% 断剑概率转为成功"},{id:"salvage",name:"碎剑回收袋",cost:1,detail:"断剑回收 40% 胚料价为绑定残料"},{id:"rhythm",name:"匠心节拍",cost:2,detail:"普通存活锤击额外获得 1 格入神充能"},{id:"stellar",name:"星穹之眼",cost:3,detail:"超神每锤价值倍率额外 +10%"},{id:"coin",name:"招财铭牌",cost:2,detail:"出售金币 +5%"},{id:"steady",name:"稳固铁环",cost:2,detail:"最多 2% 受损概率转为不变"},{id:"master",name:"大师徽记",cost:3,detail:"最多 2% 成功概率转为大成功"},{id:"hammer",name:"精锻锤芯",cost:2,detail:"铁锤 Lv2；扩大完美落锤窗口"},{id:"anvil",name:"镇砧铁印",cost:2,detail:"砧座 Lv2；解锁剑柄铭刻"},{id:"case",name:"藏剑匣",cost:2,detail:"剑架容量 3 → 6 把"}],Ea=[{id:"blanks",name:"铁剑补给 ×2",cost:520,detail:"补充两把铁剑，可锻造或兑换遗物"},{id:"star_blank",name:"星纹巨剑胚",cost:850,detail:"下次正式铁制巨剑自动使用，初始价值 +25%"},{id:"ward",name:"猫爪护符",cost:390,detail:"主动启用后下一锤断剑改为受损"},{id:"chalk",name:"绯红粉笔",cost:330,detail:"主动启用后下一锤成功率最多 6% 转大成功"},{id:"star",name:"寒星碎片",cost:270,detail:"立刻增加 3 格入神充能，上限 9"},{id:"clock",name:"回溯发条",cost:560,detail:"撤销最近一锤，包括断剑，并恢复当时价值"}];function pc(i,e,t=3){const n=[...i];let s=e>>>0||1;for(let r=n.length-1;r>0;r--){s=bi(s);const o=s%(r+1);[n[r],n[o]]=[n[o],n[r]]}return n.slice(0,t)}function is(i){return i.workshopDay>=3&&i.workshopDay%3===0&&i.merchantDepartedDay!==i.workshopDay}function Vn(i,e){return i.relics.includes(e)?Math.min(e==="ember"?8:1,Math.max(1,i.relicRanks?.[e]||1)):0}function Po(i,e){return!i.relics.includes(e)||e==="ember"&&Vn(i,e)<8}function lo(i,e){return(nn.find(t=>t.id===e)?.cost||0)+(e==="ember"?Vn(i,e):0)}function Sd(i,e){const t=nn.find(n=>n.id===e);return t?e==="ember"?"炉火 Lv"+i.furnaceLevel+" → Lv"+Math.min(9,i.furnaceLevel+1)+"；"+ur(Math.min(9,i.furnaceLevel+1))/1e3+" 秒满热；好火候 55% 起":t.detail:""}function Hs(i){return Math.ceil(720*Math.pow(1.35,i.catTributes)/10)*10}function jh(i,e){return i>=e*4?5:i>=e*2?4:3}function Kh(i,e,t,n,s=Date.now()){const r=i.session;if(r?.tutorial&&r.hits<2)return{success:1e4,great:0,unchanged:0,damage:0,break:0};if(r?.superGod)return{success:5e3,great:5e3,unchanged:0,damage:0,break:0};const o=xd(e,t,n);if(r?.goodHeat){const a=Math.min(200,o.damage),l=Math.floor(a/2);o.damage-=a,o.success+=l,o.great+=a-l}if(i.relics.includes("lucky")){const a=Math.min(o.break,300);o.break-=a,o.success+=a}if(i.relics.includes("steady")){const a=Math.min(o.damage,200);o.damage-=a,o.unchanged+=a}if(i.relics.includes("master")){const a=Math.min(o.success,200);o.success-=a,o.great+=a}if(r?.chalkNext){const a=Math.min(o.success,600);o.success-=a,o.great+=a}return r&&(wn(r,s)||r.frenzyCharge>=Ai)&&(o.success+=o.break,o.break=0),o}class bd{state;persist;constructor(e=()=>{},t){this.persist=e,this.state=t?.version===1?JSON.parse(JSON.stringify(t)):yd(),this.state.showLegacySwords=this.state.showLegacySwords===!0,this.state.relics=this.state.relics||[],this.state.relicRanks=this.state.relicRanks||{};const n=this.state.facilityRelicsVersion!==1;if(n){for(const l of new Set(this.state.ledger||[])){const c=/^upgrade:(hammer|furnace|anvil|case):(\d+)$/.exec(l);if(!c)continue;const h=Number(c[2]),d=c[1],f=d==="furnace"?h===9?16500:ud[h-1]||0:h===1?d==="hammer"?500:d==="anvil"?1100:600:0;this.state.coins+=f}this.state.facilityRelicsVersion=1}if(this.syncFacilityRelics(),this.state.ironBlanks=Math.max(0,Math.floor(this.state.ironBlanks||0)),this.state.catTributes=Math.max(0,Math.floor(this.state.catTributes||0)),this.state.relics=this.state.relics||[],this.state.tributeDays=Math.max(this.state.catTributes,Math.floor(this.state.tributeDays??this.state.catTributes)),this.state.workshopDay=this.state.tributeDays+1,this.state.relicWelcomeUsed=typeof this.state.relicWelcomeUsed=="boolean"?this.state.relicWelcomeUsed:this.state.relics.length>0||this.state.workshopDay>1,this.state.relicOffersDay=Math.max(0,Math.floor(this.state.relicOffersDay||0)),this.state.relicOffers=Array.isArray(this.state.relicOffers)?this.state.relicOffers:[],this.state.relicRerolls=Math.max(0,Math.floor(this.state.relicRerolls||0)),this.state.relicOffersDay>0){const l=this.state.relicOffers;this.state.relicOffers=Array.from({length:3},(c,h)=>nn.some(d=>d.id===l[h])&&Po(this.state,l[h])?l[h]:"")}this.state.merchantStockDay=Math.max(0,Math.floor(this.state.merchantStockDay||0)),this.state.merchantStock=Array.isArray(this.state.merchantStock)?this.state.merchantStock:[],this.state.merchantPurchased=Array.isArray(this.state.merchantPurchased)?this.state.merchantPurchased:[],this.state.specialBlanks=Math.max(0,Math.floor(this.state.specialBlanks||0));const s=this.state.supplies||{};this.state.supplies={ward:Math.max(0,Math.floor(s.ward||0)),chalk:Math.max(0,Math.floor(s.chalk||0)),star:Math.max(0,Math.floor(s.star||0)),clock:Math.max(0,Math.floor(s.clock||0))},this.ensureMarkets();const r=this.state;delete r.rep,delete r.completed;for(const l of[...this.state.swords,...this.state.session?.sword?[this.state.session.sword]:[]]){const c=l;delete c.attack,delete c.intervalMs,delete c.trial,delete c.orderId}this.state.session&&delete this.state.session.orderId;const o=this.state.session,a=!!o&&((o.rulesVersion||0)<3||o.phase==="quench");o&&(o.superGod=o.superGod===!0,o.rulesVersion||(o.currentValue=o.sword?.value??Math.round(100*si[o.material].value*Math.pow(1.24,o.level)*fc(o.goodHeat,o.perfect)),o.frenzyCharge=o.hits%Ai,o.frenzyUntil=0,o.rulesVersion=2),o.phase==="quench"&&(o.phase="forge"),(o.rulesVersion||0)<3&&o.phase==="forge"&&o.frenzyCharge>=Ai&&(o.frenzyCharge=0,o.frenzyUntil=Date.now()+Ro),o.rulesVersion=3),(a||n)&&this.save()}setShowLegacySwords(e){this.state.showLegacySwords=e,this.save()}syncFacilityRelics(){const e=this.state;e.furnaceLevel=1+Vn(e,"ember"),e.hammerLevel=1+Vn(e,"hammer"),e.anvilLevel=1+Vn(e,"anvil"),e.showCaseLevel=1+Vn(e,"case")}save(){this.persist(JSON.parse(JSON.stringify(this.state)))}ensureMarkets(){const e=this.state;e.relicOffersDay===0&&(e.relicOffersDay=e.workshopDay,this.restockRelics()),e.merchantStockDay!==e.workshopDay&&(e.merchantStockDay=e.workshopDay,e.merchantPurchased=[],e.merchantStock=is(e)?pc(Ea.map(t=>t.id),bi(e.seed^e.workshopDay^10075084)):[])}advanceDay(){this.state.tributeDays=(this.state.tributeDays??this.state.catTributes)+1,this.state.workshopDay=this.state.tributeDays+1,this.ensureMarkets()}restockRelics(){const e=this.state;e.relicOffersDay=e.workshopDay,e.relicRerolls=0;const t=pc(nn.filter(n=>Po(e,n.id)).map(n=>n.id),bi(e.seed^e.catTributes^244548));e.relicOffers=Array.from({length:3},(n,s)=>t[s]||"")}salePrice(e){const t=Math.floor(e.value*.7);return this.state.relics.includes("coin")?Math.floor(t*1.05):t}once(e,t){return this.state.ledger.includes(e)?!1:(t(),this.state.ledger.push(e),this.save(),!0)}canAfford(e,t="great"){const n=si[e],s=e==="iron"&&(this.state.ironBlanks>0||t==="great"&&this.state.specialBlanks>0);return this.state.coins>=n.fuel+(s?0:Math.max(0,n.blank-this.state.scraps))}needsApprentice(){return this.state.formalCount>0&&!this.canAfford("iron")}start(e="iron",t="straight",n=!1){if(this.state.session)throw new Error("请先完成当前这把剑");if(n&&!this.needsApprentice())throw new Error("材料尚够，不能申请免费代工");if(n&&(e="iron",t="straight"),!n&&(si[e].unlock>this.state.furnaceLevel||!(this.state.formalCount===0||this.canAfford(e,t))))throw new Error("材料尚未解锁或金币不足");const s=si[e];let r=0,o=!1;if(!n){const d=this.state.formalCount===0;o=!d&&e==="iron"&&t==="great"&&this.state.specialBlanks>0,o&&this.state.specialBlanks--;const f=!d&&!o&&e==="iron"&&this.state.ironBlanks>0;f&&this.state.ironBlanks--;const u=d||f||o?0:Math.min(this.state.scraps,s.blank);this.state.scraps-=u,r=d?0:(f||o?0:s.blank-u)+s.fuel,this.state.coins-=r,this.state.formalCount++}const a=!n&&this.state.formalCount===1,l=bi(this.state.seed);this.state.seed=l;const h={id:"forge_"+this.state.totalMade+"_"+this.state.totalBroken+"_"+this.state.formalCount+"_"+l,phase:"heat",blade:t,material:e,apprentice:n,tutorial:a,level:0,hits:0,safeUsed:0,perfect:0,goodHeat:!1,protectedUsed:!1,protection:!n&&(this.state.formalCount<=2||this.state.relics.includes("guard")),strikes:[],paid:r,seed:l,sword:null,currentValue:_d(0,1,e)*(o?1.25:1),frenzyCharge:0,frenzyUntil:0,superGod:!1,rulesVersion:3,specialBlank:o,wardNext:!1,chalkNext:!1};return is(this.state)&&(this.state.merchantDepartedDay=this.state.workshopDay),this.state.session=h,this.save(),h}heat(e){const t=this.must("heat");t.goodHeat=Wh(e,this.state.furnaceLevel,this.state.relics.includes("ember")),t.phase="forge",this.save()}must(e){const t=this.state.session;if(!t||t.phase!==e)throw new Error("当前操作阶段不正确");return t}strikeAt(e,t,n,s=Date.now()){return this.strike(e,Yh(t,this.state.hammerLevel),n,s)}strike(e,t,n,s=Date.now()){const r=this.state.session;if(!r)throw new Error("尚未开始锻造");const o=r.strikes.find(S=>S.id===n);if(o)return o;const a=this.must("forge");if(a.level>=bn)throw new Error("已达 +99，请收剑");a.lastCheckpoint={seed:a.seed,level:a.level,hits:a.hits,safeUsed:a.safeUsed,perfect:a.perfect,protectedUsed:a.protectedUsed,currentValue:a.currentValue,frenzyCharge:a.frenzyCharge,frenzyUntil:a.frenzyUntil,superGod:a.superGod,wardNext:!!a.wardNext,chalkNext:!!a.chalkNext,strikesLength:a.strikes.length,totalBroken:this.state.totalBroken,scraps:this.state.scraps},a.frenzyCharge>=Ai&&!wn(a,s)&&(a.frenzyUntil=s+Ro,a.frenzyCharge=0);const l=wn(a,s),c=bi(a.seed);a.seed=c;let h=!1;if(qh(a,s)){const S=bi(a.seed);a.seed=S,h=vd(a,S/4294967296,s),h&&(a.superGod=!0,a.frenzyCharge=0,a.frenzyUntil=0)}const d=Kh(this.state,e,a.level,t,s),f=Math.floor(c/4294967296*1e4),u=Md(d,f),g=!!a.wardNext,x=u==="break"&&(g||a.protection&&!a.protectedUsed);a.wardNext=!1,a.chalkNext=!1;const m=x?"damage":u,p=a.level,y=a.currentValue,M=a.superGod?dc+(gd-dc)*c/4294967296+(this.state.relics.includes("stellar")?.1:0):m==="great"?2.5:m==="success"?1.5:m==="damage"&&a.level>0?1/1.5:m==="break"?0:1;a.superGod?(a.level=Math.min(bn,a.level+(m==="great"?2:1)),a.currentValue*=M):m==="success"?(a.level++,a.currentValue*=1.5):m==="great"?(a.level=Math.min(bn,a.level+2),a.currentValue*=2.5):m==="damage"&&a.level>0?(a.level--,a.currentValue/=1.5):m==="break"&&(a.currentValue=0),a.hits++,e==="safe"&&a.safeUsed++,t==="perfect"&&a.perfect++,x&&!g&&(a.protectedUsed=!0),!a.superGod&&!l&&m!=="break"&&(a.frenzyCharge+=this.state.relics.includes("rhythm")?2:1,a.frenzyCharge>=Ai&&(a.frenzyUntil=s+Ro,a.frenzyCharge=0));const v={id:n,style:e,timing:t,before:p,after:a.level,beforeValue:y,afterValue:a.currentValue,roll:f,shown:d,sampled:u,result:m,protected:x,frenzy:l,superGod:a.superGod,enteredSuperGod:h,valueMultiplier:M};return a.strikes.push(v),m==="break"&&(a.phase="broken",a.frenzyCharge=0,a.frenzyUntil=0,this.state.totalBroken++,this.state.relics.includes("salvage")&&!a.apprentice&&!a.tutorial&&(this.state.scraps+=Math.floor(si[a.material].blank*.4))),this.save(),v}cashout(e="none"){const t=this.must("forge");if(!Xh(this.state).includes(e))throw new Error("该铭文尚未解锁或铁砧未升级");if(t.apprentice&&e!=="none")throw new Error("学徒代工不可安装铭文");const n=fc(t.goodHeat,t.perfect),s=$s(t,e),r={id:"sword_"+t.id,material:t.material,blade:t.blade,name:(t.specialBlank?"星纹·":"")+Sn(t.blade,t.level,this.state.showLegacySwords).name,level:t.level,quality:n,value:s,mark:e,superGod:t.superGod,disposal:"NEW"};return t.sword=r,t.phase="finished",t.frenzyUntil=0,this.state.totalMade++,this.save(),r}dispose(e){const t=this.must("finished"),n=t.sword;if(n.disposal!=="NEW")throw new Error("此剑已处置");if(t.apprentice&&e!=="DELIVERED")throw new Error("学徒代工不可出售或收藏");if(!t.apprentice&&e==="DELIVERED")throw new Error("普通神兵请出售、收藏或献给食铁兽");const s=n.id+":"+e;let r=0;return this.once(s,()=>{if(t.apprentice)t.hits>=2&&(r=60,this.state.coins+=r),n.disposal="DELIVERED";else{if(e==="SOLD")r=this.salePrice(n),this.state.coins+=r;else{if(this.state.caseIds.length>=this.caseCapacity())throw new Error("展柜已满");this.state.caseIds.push(n.id)}n.disposal=e}this.state.swords.push(JSON.parse(JSON.stringify(n))),this.state.session=null})?r:0}tributeCandidates(){const e=this.state.session;return[...e?.phase==="finished"&&!e.apprentice&&e.sword?.disposal==="NEW"?[e.sword]:[],...this.state.caseIds.map(n=>this.state.swords.find(s=>s.id===n&&s.disposal==="COLLECTED")).filter(n=>!!n)]}tribute(e){const t=this.state.session;if(!e&&t?.apprentice)throw new Error("代工剑属于工坊，不能拿去纳贡");const n=this.tributeCandidates().find(r=>r.id===(e??t?.sword?.id));if(!n)throw new Error("请先选择可纳贡的宝剑");if(n.value<Hs(this.state))throw new Error("宝剑价值不足，还差 "+(Hs(this.state)-n.value)+" 金");const s=jh(n.value,Hs(this.state));return this.once(n.id+":TRIBUTED",()=>{const r=t?.sword?.id===n.id;n.disposal="TRIBUTED",this.state.caseIds=this.state.caseIds.filter(o=>o!==n.id),this.state.ironBlanks+=s,this.state.catTributes++,r&&(this.state.swords.push(JSON.parse(JSON.stringify(n))),this.state.session=null),this.advanceDay(),this.restockRelics()}),{blanks:s,value:n.value,id:n.id}}tributeAir(){if(this.tributeCandidates().some(o=>o.value>=Hs(this.state)))throw new Error("有达标宝剑，请选择宝剑纳贡");const e=this.state.relics.length?nn.filter(o=>this.state.relics.includes(o.id)):nn;this.state.seed=bi(this.state.seed);const t=e[this.state.seed%e.length],n=t.cost*si.iron.blank,s=this.state.relics.length?t.id:null,r=s?0:Math.min(Math.max(0,this.state.coins),n);return this.once("air-tribute:"+this.state.workshopDay,()=>{s?(this.state.relics=this.state.relics.filter(o=>o!==s),delete this.state.relicRanks[s],this.syncFacilityRelics()):this.state.coins-=r,this.advanceDay(),this.restockRelics()}),{relicId:s,coinsLost:r,equivalent:n}}buyRelic(e){if(this.state.session)throw new Error("完成当前宝剑后才能交换遗物");if(!nn.find(o=>o.id===e))throw new Error("未知遗物");if(!this.state.relicOffers.includes(e))throw new Error("这件遗物今天没有上架");if(!Po(this.state,e))throw new Error("遗物已达到最高阶");if(!this.state.relics.includes(e)&&this.state.relics.length>=ao)throw new Error("遗物架最多容纳八件，请先卸下一件");const n=!this.state.relicWelcomeUsed,s=lo(this.state,e);if(!n&&this.state.ironBlanks<s)throw new Error("铁剑不足，请先向食铁兽纳贡");n?this.state.relicWelcomeUsed=!0:this.state.ironBlanks-=s;const r=Vn(this.state,e)+1;this.state.relics.includes(e)||this.state.relics.push(e),this.state.relicRanks[e]=r,this.syncFacilityRelics(),this.state.relicOffers=this.state.relicOffers.map(o=>o===e?"":o),this.save()}removeRelic(e){if(this.state.session)throw new Error("请先完成当前锻造");if(!this.state.relics.includes(e))throw new Error("遗物不在架上");this.state.relics=this.state.relics.filter(t=>t!==e),delete this.state.relicRanks[e],this.syncFacilityRelics(),this.save()}refreshRelics(){throw new Error("遗物机仅在成功纳贡后刷新")}buyMerchant(e){const t=this.state;if(t.session)throw new Error("完成当前宝剑后再交易");if(!is(t)||t.merchantStockDay!==t.workshopDay)throw new Error("神秘商人今天不在");const n=Ea.find(s=>s.id===e);if(!n||!t.merchantStock.includes(e))throw new Error("商人今天没有这个商品");if(t.merchantPurchased.includes(e))throw new Error("今日该商品已售罄");if(t.coins<n.cost)throw new Error("金币不足");t.coins-=n.cost,t.merchantPurchased.push(e),e==="blanks"?t.ironBlanks+=2:e==="star_blank"?t.specialBlanks++:(e==="ward"||e==="chalk"||e==="star"||e==="clock")&&t.supplies[e]++,this.save()}useSupply(e){const t=this.must("forge");if(this.state.supplies[e]<=0)throw new Error("该道具库存不足");if(e==="ward"){if(t.wardNext)throw new Error("猫爪护符已经待命");t.wardNext=!0}if(e==="chalk"){if(t.chalkNext)throw new Error("绯红粉笔已经待命");t.chalkNext=!0}if(e==="star"){if(t.superGod||wn(t)||t.frenzyCharge>=9)throw new Error("当前入神充能已满或正在入神");t.frenzyCharge=Math.min(9,t.frenzyCharge+3)}this.state.supplies[e]--,this.save()}rewindLastStrike(){const e=this.state.session,t=e?.lastCheckpoint;if(!e||e.phase!=="forge"&&e.phase!=="broken"||!t||e.strikes.length<=t.strikesLength)throw new Error("没有可撤销的上一锤");if(this.state.supplies.clock<=0)throw new Error("回溯发条不足");this.state.supplies.clock--,e.seed=t.seed,e.phase="forge",e.level=t.level,e.hits=t.hits,e.safeUsed=t.safeUsed,e.perfect=t.perfect,e.protectedUsed=t.protectedUsed,e.currentValue=t.currentValue,e.frenzyCharge=t.frenzyCharge,e.frenzyUntil=t.frenzyUntil,e.superGod=t.superGod,e.wardNext=t.wardNext,e.chalkNext=t.chalkNext,e.strikes.length=t.strikesLength,e.lastCheckpoint=void 0,this.state.totalBroken=t.totalBroken,this.state.scraps=t.scraps,this.save()}sellCollected(e){const t=this.state.swords.find(r=>r.id===e);if(!t||t.disposal!=="COLLECTED"||!this.state.caseIds.includes(e))throw new Error("该剑不在展柜中");const n=e+":case-sale";let s=0;return this.once(n,()=>{s=this.salePrice(t),this.state.coins+=s,t.disposal="SOLD",this.state.caseIds=this.state.caseIds.filter(r=>r!==e)}),s}caseCapacity(){return this.state.showCaseLevel>=2?6:3}upgrade(e){throw new Error("设施只能通过兑换遗物提升")}closeBroken(){this.must("broken"),this.state.session=null,this.save()}}const Jr=new URLSearchParams(location.search).get("debugPerf")==="1",xr=new URLSearchParams(location.search).get("debugQA")==="1";class wd{since=0;frames=0;cpu=[];last=0;intervals=[];history=[];frame(e,t,n,s){if(!Jr||(this.since||(this.since=e),this.last&&this.intervals.push(e-this.last),this.last=e,this.cpu.push(t),this.frames++,e-this.since<1e3))return;const r=this.intervals.slice().sort((a,l)=>a-l),o={fps:this.frames*1e3/(e-this.since),targetFps:s,cpuMeanMs:this.cpu.reduce((a,l)=>a+l,0)/this.cpu.length,frameP95Ms:r[Math.floor(r.length*.95)]||0,calls:n.info.render.calls,triangles:n.info.render.triangles,geometries:n.info.memory.geometries,textures:n.info.memory.textures};this.history.push(o),this.history.length>120&&this.history.shift(),document.getElementById("scene3d").dataset.performance=JSON.stringify(o),this.since=e,this.frames=0,this.cpu=[],this.intervals=[]}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="180",Ed=0,mc=1,Td=2,Jh=1,Zh=2,Hn=3,ui=0,Xt=1,Cn=2,Yn=0,ss=1,Ta=2,gc=3,vc=4,Ad=5,Ei=100,Cd=101,Rd=102,Pd=103,Ld=104,Dd=200,Id=201,Ud=202,Nd=203,Aa=204,Ca=205,Fd=206,Od=207,Bd=208,zd=209,kd=210,Hd=211,Gd=212,Vd=213,Wd=214,Ra=0,Pa=1,La=2,as=3,Da=4,Ia=5,Ua=6,Na=7,bl=0,Xd=1,qd=2,ci=0,Qh=1,$h=2,eu=3,wl=4,tu=5,nu=6,iu=7,su=300,ls=301,cs=302,Fa=303,Oa=304,xo=306,hs=1e3,Ci=1001,Ba=1002,qt=1003,Yd=1004,Mr=1005,Kt=1006,Lo=1007,Rn=1008,Dn=1009,ru=1010,ou=1011,er=1012,El=1013,Pi=1014,Pn=1015,rn=1016,Tl=1017,Al=1018,tr=1020,au=35902,lu=35899,cu=1021,hu=1022,yn=1023,nr=1026,ir=1027,Cl=1028,Rl=1029,uu=1030,Pl=1031,Ll=1033,Zr=33776,Qr=33777,$r=33778,eo=33779,za=35840,ka=35841,Ha=35842,Ga=35843,Va=36196,Wa=37492,Xa=37496,qa=37808,Ya=37809,ja=37810,Ka=37811,Ja=37812,Za=37813,Qa=37814,$a=37815,el=37816,tl=37817,nl=37818,il=37819,sl=37820,rl=37821,ol=36492,al=36494,ll=36495,cl=36283,hl=36284,ul=36285,dl=36286,jd=3200,Kd=3201,Dl=0,Jd=1,oi="",It="srgb",us="srgb-linear",co="linear",lt="srgb",Oi=7680,xc=519,Zd=512,Qd=513,$d=514,du=515,ef=516,tf=517,nf=518,sf=519,Mc=35044,_c="300 es",Ln=2e3,ho=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yc=1234567;const Ws=Math.PI/180,ds=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Il(i,e){return(i%e+e)%e}function rf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function of(i,e,t){return i!==e?(t-i)/(e-i):0}function Xs(i,e,t){return(1-t)*i+t*e}function af(i,e,t,n){return Xs(i,e,1-Math.exp(-t*n))}function lf(i,e=1){return e-Math.abs(Il(i,e*2)-e)}function cf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function df(i,e){return i+Math.random()*(e-i)}function ff(i){return i*(.5-Math.random())}function pf(i){i!==void 0&&(yc=i);let e=yc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mf(i){return i*Ws}function gf(i){return i*ds}function vf(i){return(i&i-1)===0&&i!==0}function xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _f(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),u=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const St={DEG2RAD:Ws,RAD2DEG:ds,generateUUID:Ui,clamp:$e,euclideanModulo:Il,mapLinear:rf,inverseLerp:of,lerp:Xs,damp:af,pingpong:lf,smoothstep:cf,smootherstep:hf,randInt:uf,randFloat:df,randFloatSpread:ff,seededRandom:pf,degToRad:mf,radToDeg:gf,isPowerOfTwo:vf,ceilPowerOfTwo:xf,floorPowerOfTwo:Mf,setQuaternionFromProperEuler:_f,normalize:Ht,denormalize:$i};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class di{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],u=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=u,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==u||h!==g){let m=1-a;const p=l*f+c*u+h*g+d*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const S=Math.sqrt(M),E=Math.atan2(S,p*y);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const v=a*y;if(l=l*m+f*v,c=c*m+u*v,h=h*m+g*v,d=d*m+x*v,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*u-c*f,e[t+1]=l*g+h*f+c*d-a*u,e[t+2]=c*g+h*u+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new R,Sc=new di;class Je{constructor(e,t,n,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],M=s[4],v=s[7],S=s[2],E=s[5],w=s[8];return r[0]=o*x+a*y+l*S,r[3]=o*m+a*M+l*E,r[6]=o*p+a*v+l*w,r[1]=c*x+h*y+d*S,r[4]=c*m+h*M+d*E,r[7]=c*p+h*v+d*w,r[2]=f*x+u*y+g*S,r[5]=f*m+u*M+g*E,r[8]=f*p+u*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=t*d+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Je;function fu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yf(){const i=uo("canvas");return i.style.display="block",i}const bc={};function sr(i){i in bc||(bc[i]=!0,console.warn(i))}function Sf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const wc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bf(){const i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:e,whitePoint:n,transfer:co,toXYZ:wc,fromXYZ:Ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:wc,fromXYZ:Ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}const st=bf();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class wf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=uo("canvas")),Bi.width=e.width,Bi.height=e.height;const s=Bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ef=0;class Ul{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uo(s[o].image)):r.push(Uo(s[o]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tf=0;const No=new R;class Rt extends Ss{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Ci,s=Ci,r=Kt,o=Rn,a=yn,l=Dn,c=Rt.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Ui(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=su;Rt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(u+1)/2,S=(p+1)/2,E=(h+f)/4,w=(d+x)/4,A=(g+m)/4;return M>v&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=w/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=A/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=A/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Af extends Ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Rt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ul(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yt extends Af{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pu extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cf extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),yr.subVectors(this.max,Rs),zi.subVectors(e.a,Rs),ki.subVectors(e.b,Rs),Hi.subVectors(e.c,Rs),Qn.subVectors(ki,zi),$n.subVectors(Hi,ki),vi.subVectors(zi,Hi);let t=[0,-Qn.z,Qn.y,0,-$n.z,$n.y,0,-vi.z,vi.y,Qn.z,0,-Qn.x,$n.z,0,-$n.x,vi.z,0,-vi.x,-Qn.y,Qn.x,0,-$n.y,$n.x,0,-vi.y,vi.x,0];return!Fo(t,zi,ki,Hi,yr)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,zi,ki,Hi,yr))?!1:(Sr.crossVectors(Qn,$n),t=[Sr.x,Sr.y,Sr.z],Fo(t,zi,ki,Hi,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new R,new R,new R,new R,new R,new R,new R,new R],gn=new R,_r=new Ct,zi=new R,ki=new R,Hi=new R,Qn=new R,$n=new R,vi=new R,Rs=new R,yr=new R,Sr=new R,xi=new R;function Fo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Rf=new Ct,Ps=new R,Oo=new R;class dr{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(Oo)),this.expandByPoint(Ps.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const On=new R,Bo=new R,br=new R,ei=new R,zo=new R,wr=new R,ko=new R;class Nl{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bo.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Bo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(br),a=ei.dot(this.direction),l=-ei.dot(br),c=ei.lengthSq(),h=Math.abs(1-o*o);let d,f,u,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Bo).addScaledVector(br,f),u}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){zo.subVectors(t,e),wr.subVectors(n,e),ko.crossVectors(zo,wr);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const l=a*this.direction.dot(wr.crossVectors(ei,wr));if(l<0)return null;const c=a*this.direction.dot(zo.cross(ei));if(c<0||l+c>o)return null;const h=-a*ei.dot(ko);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,s,r,o,a,l,c,h,d,f,u,g,x,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,u,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,d,f,u,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,u=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,u=l*d,g=c*h,x=c*d;t[0]=f+x*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,u=l*d,g=c*h,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,u=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=g*c-u,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,u=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*d,t[8]=g*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,u=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=u*d-g,t[2]=g*d-u,t[6]=a*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Lf)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ti.crossVectors(n,$t),ti.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ti.crossVectors(n,$t)),ti.normalize(),Er.crossVectors($t,ti),s[0]=ti.x,s[4]=Er.x,s[8]=$t.x,s[1]=ti.y,s[5]=Er.y,s[9]=$t.y,s[2]=ti.z,s[6]=Er.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],M=n[7],v=n[11],S=n[15],E=s[0],w=s[4],A=s[8],_=s[12],b=s[1],P=s[5],I=s[9],F=s[13],N=s[2],V=s[6],W=s[10],X=s[14],G=s[3],ae=s[7],ue=s[11],Me=s[15];return r[0]=o*E+a*b+l*N+c*G,r[4]=o*w+a*P+l*V+c*ae,r[8]=o*A+a*I+l*W+c*ue,r[12]=o*_+a*F+l*X+c*Me,r[1]=h*E+d*b+f*N+u*G,r[5]=h*w+d*P+f*V+u*ae,r[9]=h*A+d*I+f*W+u*ue,r[13]=h*_+d*F+f*X+u*Me,r[2]=g*E+x*b+m*N+p*G,r[6]=g*w+x*P+m*V+p*ae,r[10]=g*A+x*I+m*W+p*ue,r[14]=g*_+x*F+m*X+p*Me,r[3]=y*E+M*b+v*N+S*G,r[7]=y*w+M*P+v*V+S*ae,r[11]=y*A+M*I+v*W+S*ue,r[15]=y*_+M*F+v*X+S*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*u-n*l*u)+x*(+t*l*u-t*c*f+r*o*f-s*o*u+s*c*h-r*l*h)+m*(+t*c*d-t*a*u-r*o*d+n*o*u+r*a*h-n*c*h)+p*(-s*a*h-t*l*d+t*a*f+s*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=d*m*c-x*f*c+x*l*u-a*m*u-d*l*p+a*f*p,M=g*f*c-h*m*c-g*l*u+o*m*u+h*l*p-o*f*p,v=h*x*c-g*d*c+g*a*u-o*x*u-h*a*p+o*d*p,S=g*d*l-h*x*l-g*a*f+o*x*f+h*a*m-o*d*m,E=t*y+n*M+s*v+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=y*w,e[1]=(x*f*r-d*m*r-x*s*u+n*m*u+d*s*p-n*f*p)*w,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*w,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*u-n*l*u)*w,e[4]=M*w,e[5]=(h*m*r-g*f*r+g*s*u-t*m*u-h*s*p+t*f*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*u+t*l*u)*w,e[8]=v*w,e[9]=(g*d*r-h*x*r-g*n*u+t*x*u+h*n*p-t*d*p)*w,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*u-t*a*u)*w,e[12]=S*w,e[13]=(h*x*s-g*d*s+g*n*f-t*x*f-h*n*m+t*d*m)*w,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*w,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,g=r*d,x=o*h,m=o*d,p=a*d,y=l*c,M=l*h,v=l*d,S=n.x,E=n.y,w=n.z;return s[0]=(1-(x+p))*S,s[1]=(u+v)*S,s[2]=(g-M)*S,s[3]=0,s[4]=(u-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+M)*w,s[9]=(m-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const o=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const c=1/r,h=1/o,d=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ln,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Ln)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ho)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ln,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),u=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Ln)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===ho)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new R,vn=new rt,Pf=new R(0,0,0),Lf=new R(1,1,1),ti=new R,Er=new R,$t=new R,Tc=new rt,Ac=new di;class on{constructor(e=0,t=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Df=0;const Cc=new R,Vi=new di,Bn=new rt,Tr=new R,Ls=new R,If=new R,Uf=new di,Rc=new R(1,0,0),Pc=new R(0,1,0),Lc=new R(0,0,1),Dc={type:"added"},Nf={type:"removed"},Wi={type:"childadded",child:null},Ho={type:"childremoved",child:null};class At extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new R,t=new on,n=new di,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Je}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ls,Tr,this.up):Bn.lookAt(Tr,Ls,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nf),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new R(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new R,zn=new R,Go=new R,kn=new R,Xi=new R,qi=new R,Ic=new R,Vo=new R,Wo=new R,Xo=new R,qo=new ut,Yo=new ut,jo=new ut;class _n{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xn.subVectors(s,t),zn.subVectors(n,t),Go.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(zn),l=xn.dot(Go),c=zn.dot(zn),h=zn.dot(Go),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return qo.setScalar(0),Yo.setScalar(0),jo.setScalar(0),qo.fromBufferAttribute(e,t),Yo.fromBufferAttribute(e,n),jo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qo,r.x),o.addScaledVector(Yo,r.y),o.addScaledVector(jo,r.z),o}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),zn.subVectors(e,t),xn.cross(zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Xi.subVectors(s,n),qi.subVectors(r,n),Vo.subVectors(e,n);const l=Xi.dot(Vo),c=qi.dot(Vo);if(l<=0&&c<=0)return t.copy(n);Wo.subVectors(e,s);const h=Xi.dot(Wo),d=qi.dot(Wo);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Xi,o);Xo.subVectors(e,r);const u=Xi.dot(Xo),g=qi.dot(Xo);if(g>=0&&u<=g)return t.copy(r);const x=u*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qi,a);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return Ic.subVectors(r,s),a=(d-h)/(d-h+(u-g)),t.copy(s).addScaledVector(Ic,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Ko(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Il(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ko(o,r,e+1/3),this.g=Ko(o,r,e),this.b=Ko(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=mu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return st.workingToColorSpace(zt.copy(this),e),Math.round($e(zt.r*255,0,255))*65536+Math.round($e(zt.g*255,0,255))*256+Math.round($e(zt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=It){st.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Ar);const n=Xs(ni.h,Ar.h,t),s=Xs(ni.s,Ar.s,t),r=Xs(ni.l,Ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ge;Ge.NAMES=mu;let Ff=0;class bs extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ss,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ca,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tn extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new R,Cr=new ie;let Of=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}}class gu extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vu extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class je extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bf=0;const cn=new rt,Jo=new At,Yi=new R,en=new Ct,Ds=new Ct,Dt=new R;class mt extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fu(e)?vu:gu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(en.min,Ds.min),en.expandByPoint(Dt),Dt.addVectors(en.max,Ds.max),en.expandByPoint(Dt)):(en.expandByPoint(Ds.min),en.expandByPoint(Ds.max))}en.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),Dt.add(Yi)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new R,l[A]=new R;const c=new R,h=new R,d=new R,f=new ie,u=new ie,g=new ie,x=new R,m=new R;function p(A,_,b){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,_),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,A),u.fromBufferAttribute(r,_),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),u.sub(f),g.sub(f);const P=1/(u.x*g.y-g.x*u.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(P),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(P),a[A].add(x),a[_].add(x),a[b].add(x),l[A].add(m),l[_].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,_=y.length;A<_;++A){const b=y[A],P=b.start,I=b.count;for(let F=P,N=P+I;F<N;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new R,v=new R,S=new R,E=new R;function w(A){S.fromBufferAttribute(s,A),E.copy(S);const _=a[A];M.copy(_),M.sub(S.multiplyScalar(S.dot(_))).normalize(),v.crossVectors(E,_);const P=v.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,P)}for(let A=0,_=y.length;A<_;++A){const b=y[A],P=b.start,I=b.count;for(let F=P,N=P+I;F<N;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let f=0,u=e.count;f<u;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new Jt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new rt,Mi=new Nl,Rr=new dr,Nc=new R,Pr=new R,Lr=new R,Dr=new R,Zo=new R,Ir=new R,Fc=new R,Ur=new R;class Oe extends At{constructor(e=new mt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Zo.fromBufferAttribute(d,e),o?Ir.addScaledVector(Zo,h):Ir.addScaledVector(Zo.sub(t),h))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(Rr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Rr,Nc)===null||Mi.origin.distanceToSquared(Nc)>(e.far-e.near)**2))&&(Uc.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,S=M;v<S;v+=3){const E=a.getX(v),w=a.getX(v+1),A=a.getX(v+2);s=Nr(this,p,e,n,c,h,d,E,w,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Nr(this,o,e,n,c,h,d,y,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,u.start),M=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,S=M;v<S;v+=3){const E=v,w=v+1,A=v+2;s=Nr(this,p,e,n,c,h,d,E,w,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){const y=m,M=m+1,v=m+2;s=Nr(this,o,e,n,c,h,d,y,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function zf(i,e,t,n,s,r,o,a){let l;if(e.side===Xt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ui,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ur);return c<t.near||c>t.far?null:{distance:c,point:Ur.clone(),object:i}}function Nr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Dr);const h=zf(i,e,t,n,Pr,Lr,Dr,Fc);if(h){const d=new R;_n.getBarycoord(Fc,Pr,Lr,Dr,d),s&&(h.uv=_n.getInterpolatedAttribute(s,a,l,c,d,new ie)),r&&(h.uv1=_n.getInterpolatedAttribute(r,a,l,c,d,new ie)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};_n.getNormal(Pr,Lr,Dr,f.normal),h.face=f,h.barycoord=d}return h}class pn extends mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2));function g(x,m,p,y,M,v,S,E,w,A,_){const b=v/w,P=S/A,I=v/2,F=S/2,N=E/2,V=w+1,W=A+1;let X=0,G=0;const ae=new R;for(let ue=0;ue<W;ue++){const Me=ue*P-F;for(let ce=0;ce<V;ce++){const _e=ce*b-I;ae[x]=_e*y,ae[m]=Me*M,ae[p]=N,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[m]=0,ae[p]=E>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(ce/w),d.push(1-ue/A),X+=1}}for(let ue=0;ue<A;ue++)for(let Me=0;Me<w;Me++){const ce=f+Me+V*ue,_e=f+Me+V*(ue+1),Ce=f+(Me+1)+V*(ue+1),Be=f+(Me+1)+V*ue;l.push(ce,_e,Be),l.push(_e,Ce,Be),G+=6}a.addGroup(u,G,_),u+=G,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=fs(i[t]);for(const s in n)e[s]=n[s]}return e}function kf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const hi={clone:fs,merge:Gt};var Hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new R,Oc=new ie,Bc=new ie;class Wt extends Mu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Bc),t.subVectors(Bc,Oc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Ki=1;class Vf extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(ji,Ki,e,t);s.layers=this.layers,this.add(s);const r=new Wt(ji,Ki,e,t);r.layers=this.layers,this.add(r);const o=new Wt(ji,Ki,e,t);o.layers=this.layers,this.add(o);const a=new Wt(ji,Ki,e,t);a.layers=this.layers,this.add(a);const l=new Wt(ji,Ki,e,t);l.layers=this.layers,this.add(l);const c=new Wt(ji,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _u extends Rt{constructor(e=[],t=ls,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wf extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _u(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Yn});r.uniforms.tEquirect.value=t;const o=new Oe(s,r),a=t.minFilter;return t.minFilter===Rn&&(t.minFilter=Kt),new Vf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class tt extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xf={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ol{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Ol(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bl extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ps extends Rt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,h=qt,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new rt,kc=new rt,Fr=[],Hc=new Ct,qf=new rt,Is=new Oe,Us=new dr;class to extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Hc.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(Hc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Us.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),e.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),kc.multiplyMatrices(n,Ji),Is.matrixWorld=kc,Is.raycast(e,Fr);for(let o=0,a=Fr.length;o<a;o++){const l=Fr[o];l.instanceId=r,l.object=this,t.push(l)}Fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ps(new Float32Array(s*this.count),s,this.count,Cl,Pn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $o=new R,Yf=new R,jf=new Je;class ri{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$o.subVectors(n,t).cross(Yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jf.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new dr,Kf=new ie(.5,.5),Or=new R;class zl{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],M=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,u-h,p-g,S-y).normalize(),s[1].setComponents(c+o,u+h,p+g,S+y).normalize(),s[2].setComponents(c+a,u+d,p+x,S+M).normalize(),s[3].setComponents(c-a,u-d,p-x,S-M).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,u-f,p-m,S-v).normalize();else if(s[4].setComponents(c-l,u-f,p-m,S-v).normalize(),t===Ln)s[5].setComponents(c+l,u+f,p+m,S+v).normalize();else if(t===ho)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=Kf.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Or.x=s.normal.x>0?e.max.x:e.min.x,Or.y=s.normal.y>0?e.max.y:e.min.y,Or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Li extends Rt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yu extends Rt{constructor(e,t,n=Pi,s,r,o,a=qt,l=qt,c,h=nr,d=1){if(h!==nr&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ul(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Su extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class En extends mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let g=0;const x=[],m=n/2;let p=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(u,2));function y(){const v=new R,S=new R;let E=0;const w=(t-e)/n;for(let A=0;A<=r;A++){const _=[],b=A/r,P=b*(t-e)+e;for(let I=0;I<=s;I++){const F=I/s,N=F*l+a,V=Math.sin(N),W=Math.cos(N);S.x=P*V,S.y=-b*n+m,S.z=P*W,d.push(S.x,S.y,S.z),v.set(V,w,W).normalize(),f.push(v.x,v.y,v.z),u.push(F,1-b),_.push(g++)}x.push(_)}for(let A=0;A<s;A++)for(let _=0;_<r;_++){const b=x[_][A],P=x[_+1][A],I=x[_+1][A+1],F=x[_][A+1];(e>0||_!==0)&&(h.push(b,P,F),E+=3),(t>0||_!==r-1)&&(h.push(P,I,F),E+=3)}c.addGroup(p,E,0),p+=E}function M(v){const S=g,E=new ie,w=new R;let A=0;const _=v===!0?e:t,b=v===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*b,0),f.push(0,b,0),u.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const N=I/s*l+a,V=Math.cos(N),W=Math.sin(N);w.x=_*W,w.y=m*b,w.z=_*V,d.push(w.x,w.y,w.z),f.push(0,b,0),E.x=V*.5+.5,E.y=W*.5*b+.5,u.push(E.x,E.y),g++}for(let I=0;I<s;I++){const F=S+I,N=P+I;v===!0?h.push(N,N+1,F):h.push(N+1,N,F),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mo extends En{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Mo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ws extends mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new R,v=new R,S=new R;for(let E=0;E<t.length;E+=3)u(t[E+0],M),u(t[E+1],v),u(t[E+2],S),l(M,v,S,y)}function l(y,M,v,S){const E=S+1,w=[];for(let A=0;A<=E;A++){w[A]=[];const _=y.clone().lerp(v,A/E),b=M.clone().lerp(v,A/E),P=E-A;for(let I=0;I<=P;I++)I===0&&A===E?w[A][I]=_:w[A][I]=_.clone().lerp(b,I/P)}for(let A=0;A<E;A++)for(let _=0;_<2*(E-A)-1;_++){const b=Math.floor(_/2);_%2===0?(f(w[A][b+1]),f(w[A+1][b]),f(w[A][b])):(f(w[A][b+1]),f(w[A+1][b+1]),f(w[A+1][b]))}}function c(y){const M=new R;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const y=new R;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const v=m(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;o.push(v,1-S)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const M=o[y+0],v=o[y+2],S=o[y+4],E=Math.max(M,v,S),w=Math.min(M,v,S);E>.9&&w<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,M){const v=y*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){const y=new R,M=new R,v=new R,S=new R,E=new ie,w=new ie,A=new ie;for(let _=0,b=0;_<r.length;_+=9,b+=6){y.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),v.set(r[_+6],r[_+7],r[_+8]),E.set(o[b+0],o[b+1]),w.set(o[b+2],o[b+3]),A.set(o[b+4],o[b+5]),S.copy(y).add(M).add(v).divideScalar(3);const P=m(S);x(E,b+0,y,P),x(w,b+2,M,P),x(A,b+4,v,P)}}function x(y,M,v,S){S<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.vertices,e.indices,e.radius,e.details)}}class kl extends ws{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kl(e.radius,e.detail)}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ie:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,s=[],r=[],o=[],a=new R,l=new rt;for(let u=0;u<=e;u++){const g=u/e;s[u]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos($e(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hl extends Un{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jf extends Hl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gl(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Br=new R,ea=new Gl,ta=new Gl,na=new Gl;class rr extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Br.subVectors(s[0],s[1]).add(s[0]),c=Br);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Br.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ea.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,x,m),ta.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,x,m),na.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ta.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),na.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(ea.calc(l),ta.calc(l),na.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Zf(i,e){const t=1-i;return t*t*e}function Qf(i,e){return 2*(1-i)*i*e}function $f(i,e){return i*i*e}function qs(i,e,t,n){return Zf(i,e)+Qf(i,t)+$f(i,n)}function ep(i,e){const t=1-i;return t*t*t*e}function tp(i,e){const t=1-i;return 3*t*t*i*e}function np(i,e){return 3*(1-i)*i*i*e}function ip(i,e){return i*i*i*e}function Ys(i,e,t,n,s){return ep(i,e)+tp(i,t)+np(i,n)+ip(i,s)}class bu extends Un{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(e,s.x,r.x,o.x,a.x),Ys(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sp extends Un{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(e,s.x,r.x,o.x,a.x),Ys(e,s.y,r.y,o.y,a.y),Ys(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wu extends Un{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rp extends Un{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eu extends Un{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(qs(e,s.x,r.x,o.x),qs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tu extends Un{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(qs(e,s.x,r.x,o.x),qs(e,s.y,r.y,o.y),qs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Au extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Gc(a,l.x,c.x,h.x,d.x),Gc(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ie().fromArray(s))}return this}}var fo=Object.freeze({__proto__:null,ArcCurve:Jf,CatmullRomCurve3:rr,CubicBezierCurve:bu,CubicBezierCurve3:sp,EllipseCurve:Hl,LineCurve:wu,LineCurve3:rp,QuadraticBezierCurve:Eu,QuadraticBezierCurve3:Tu,SplineCurve:Au});class op extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new fo[s.type]().fromJSON(s))}return this}}class or extends op{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new wu(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Eu(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new bu(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Au(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Hl(e,t,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class dn extends or{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new or().fromJSON(s))}return this}}function ap(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Cu(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=dp(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let f=t;f<s;f+=t){const u=i[f],g=i[f+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return ar(r,o,t,a,l,c,0),o}function Cu(i,e,t,n,s){let r;if(s===bp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Vc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Vc(o/n|0,i[o],i[o+1],r);return r&&ms(r,r.next)&&(cr(r),r=r.next),r}function Di(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ms(t,t.next)||Mt(t.prev,t,t.next)===0)){if(cr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ar(i,e,t,n,s,r,o){if(!i)return;!o&&r&&vp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?cp(i,n,s,r):lp(i)){e.push(l.i,i.i,c.i),cr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=hp(Di(i),e),ar(i,e,t,n,s,r,2)):o===2&&up(i,e,t,n,s,r):ar(Di(i),e,t,n,s,r,1);break}}}function lp(i){const e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=u&&Gs(s,a,r,l,o,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cp(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Mt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,l,c),g=Math.min(h,d,f),x=Math.max(a,l,c),m=Math.max(h,d,f),p=fl(u,g,e,t,n),y=fl(x,m,e,t,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=y;){if(M.x>=u&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Gs(a,h,l,d,c,f,M.x,M.y)&&Mt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=u&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Gs(a,h,l,d,c,f,v.x,v.y)&&Mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=u&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Gs(a,h,l,d,c,f,M.x,M.y)&&Mt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=u&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Gs(a,h,l,d,c,f,v.x,v.y)&&Mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hp(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ms(n,s)&&Pu(n,t,t.next,s)&&lr(n,s)&&lr(s,n)&&(e.push(n.i,t.i,s.i),cr(t),cr(t.next),t=i=s),t=t.next}while(t!==i);return Di(t)}function up(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_p(o,a)){let l=Lu(o,a);o=Di(o,o.next),l=Di(l,l.next),ar(o,e,t,n,s,r,0),ar(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function dp(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Cu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Mp(c))}s.sort(fp);for(let r=0;r<s.length;r++)t=pp(s[r],t);return t}function fp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function pp(i,e){const t=mp(i,e);if(!t)return e;const n=Lu(t,i);return Di(n,n.next),Di(t,t.next)}function mp(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(ms(i,t))return t;do{if(ms(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ru(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);lr(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&gp(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function gp(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function vp(i,e,t,n){let s=i;do s.z===0&&(s.z=fl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xp(s)}function xp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function fl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Mp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ru(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Gs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ru(i,e,t,n,s,r,o,a)}function _p(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yp(i,e)&&(lr(i,e)&&lr(e,i)&&Sp(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||ms(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ms(i,e){return i.x===e.x&&i.y===e.y}function Pu(i,e,t,n){const s=kr(Mt(i,e,t)),r=kr(Mt(i,e,n)),o=kr(Mt(t,n,i)),a=kr(Mt(t,n,e));return!!(s!==r&&o!==a||s===0&&zr(i,t,e)||r===0&&zr(i,n,e)||o===0&&zr(t,i,n)||a===0&&zr(t,e,n))}function zr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function kr(i){return i>0?1:i<0?-1:0}function yp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function lr(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function Sp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Lu(i,e){const t=pl(i.i,i.x,i.y),n=pl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vc(i,e,t,n){const s=pl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class wp{static triangulate(e,t,n=2){return ap(e,t,n)}}class Wn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Wn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Wc(e),Xc(n,e);let o=e.length;t.forEach(Wc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Xc(n,t[l]);const a=wp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Wc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Xc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class fn extends mt{constructor(e=new dn([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ep;let M,v=!1,S,E,w,A;p&&(M=p.getSpacedPoints(h),v=!0,f=!1,S=p.computeFrenetFrames(h,!1),E=new R,w=new R,A=new R),f||(m=0,u=0,g=0,x=0);const _=a.extractPoints(c);let b=_.shape;const P=_.holes;if(!Wn.isClockWise(b)){b=b.reverse();for(let $=0,Z=P.length;$<Z;$++){const ee=P[$];Wn.isClockWise(ee)&&(P[$]=ee.reverse())}}function F($){const ee=10000000000000001e-36;let te=$[0];for(let me=1;me<=$.length;me++){const he=me%$.length,ve=$[he],ze=ve.x-te.x,Ie=ve.y-te.y,L=ze*ze+Ie*Ie,T=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(te.x),Math.abs(te.y)),B=ee*T*T;if(L<=B){$.splice(he,1),me--;continue}te=ve}}F(b),P.forEach(F);const N=P.length,V=b;for(let $=0;$<N;$++){const Z=P[$];b=b.concat(Z)}function W($,Z,ee){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(Z,ee)}const X=b.length;function G($,Z,ee){let te,me,he;const ve=$.x-Z.x,ze=$.y-Z.y,Ie=ee.x-$.x,L=ee.y-$.y,T=ve*ve+ze*ze,B=ve*L-ze*Ie;if(Math.abs(B)>Number.EPSILON){const Y=Math.sqrt(T),se=Math.sqrt(Ie*Ie+L*L),K=Z.x-ze/Y,De=Z.y+ve/Y,ge=ee.x-L/se,Pe=ee.y+Ie/se,Ne=((ge-K)*L-(Pe-De)*Ie)/(ve*L-ze*Ie);te=K+ve*Ne-$.x,me=De+ze*Ne-$.y;const de=te*te+me*me;if(de<=2)return new ie(te,me);he=Math.sqrt(de/2)}else{let Y=!1;ve>Number.EPSILON?Ie>Number.EPSILON&&(Y=!0):ve<-Number.EPSILON?Ie<-Number.EPSILON&&(Y=!0):Math.sign(ze)===Math.sign(L)&&(Y=!0),Y?(te=-ze,me=ve,he=Math.sqrt(T)):(te=ve,me=ze,he=Math.sqrt(T/2))}return new ie(te/he,me/he)}const ae=[];for(let $=0,Z=V.length,ee=Z-1,te=$+1;$<Z;$++,ee++,te++)ee===Z&&(ee=0),te===Z&&(te=0),ae[$]=G(V[$],V[ee],V[te]);const ue=[];let Me,ce=ae.concat();for(let $=0,Z=N;$<Z;$++){const ee=P[$];Me=[];for(let te=0,me=ee.length,he=me-1,ve=te+1;te<me;te++,he++,ve++)he===me&&(he=0),ve===me&&(ve=0),Me[te]=G(ee[te],ee[he],ee[ve]);ue.push(Me),ce=ce.concat(Me)}let _e;if(m===0)_e=Wn.triangulateShape(V,P);else{const $=[],Z=[];for(let ee=0;ee<m;ee++){const te=ee/m,me=u*Math.cos(te*Math.PI/2),he=g*Math.sin(te*Math.PI/2)+x;for(let ve=0,ze=V.length;ve<ze;ve++){const Ie=W(V[ve],ae[ve],he);oe(Ie.x,Ie.y,-me),te===0&&$.push(Ie)}for(let ve=0,ze=N;ve<ze;ve++){const Ie=P[ve];Me=ue[ve];const L=[];for(let T=0,B=Ie.length;T<B;T++){const Y=W(Ie[T],Me[T],he);oe(Y.x,Y.y,-me),te===0&&L.push(Y)}te===0&&Z.push(L)}}_e=Wn.triangulateShape($,Z)}const Ce=_e.length,Be=g+x;for(let $=0;$<X;$++){const Z=f?W(b[$],ce[$],Be):b[$];v?(w.copy(S.normals[0]).multiplyScalar(Z.x),E.copy(S.binormals[0]).multiplyScalar(Z.y),A.copy(M[0]).add(w).add(E),oe(A.x,A.y,A.z)):oe(Z.x,Z.y,0)}for(let $=1;$<=h;$++)for(let Z=0;Z<X;Z++){const ee=f?W(b[Z],ce[Z],Be):b[Z];v?(w.copy(S.normals[$]).multiplyScalar(ee.x),E.copy(S.binormals[$]).multiplyScalar(ee.y),A.copy(M[$]).add(w).add(E),oe(A.x,A.y,A.z)):oe(ee.x,ee.y,d/h*$)}for(let $=m-1;$>=0;$--){const Z=$/m,ee=u*Math.cos(Z*Math.PI/2),te=g*Math.sin(Z*Math.PI/2)+x;for(let me=0,he=V.length;me<he;me++){const ve=W(V[me],ae[me],te);oe(ve.x,ve.y,d+ee)}for(let me=0,he=P.length;me<he;me++){const ve=P[me];Me=ue[me];for(let ze=0,Ie=ve.length;ze<Ie;ze++){const L=W(ve[ze],Me[ze],te);v?oe(L.x,L.y+M[h-1].y,M[h-1].x+ee):oe(L.x,L.y,d+ee)}}}J(),ne();function J(){const $=s.length/3;if(f){let Z=0,ee=X*Z;for(let te=0;te<Ce;te++){const me=_e[te];Q(me[2]+ee,me[1]+ee,me[0]+ee)}Z=h+m*2,ee=X*Z;for(let te=0;te<Ce;te++){const me=_e[te];Q(me[0]+ee,me[1]+ee,me[2]+ee)}}else{for(let Z=0;Z<Ce;Z++){const ee=_e[Z];Q(ee[2],ee[1],ee[0])}for(let Z=0;Z<Ce;Z++){const ee=_e[Z];Q(ee[0]+X*h,ee[1]+X*h,ee[2]+X*h)}}n.addGroup($,s.length/3-$,0)}function ne(){const $=s.length/3;let Z=0;z(V,Z),Z+=V.length;for(let ee=0,te=P.length;ee<te;ee++){const me=P[ee];z(me,Z),Z+=me.length}n.addGroup($,s.length/3-$,1)}function z($,Z){let ee=$.length;for(;--ee>=0;){const te=ee;let me=ee-1;me<0&&(me=$.length-1);for(let he=0,ve=h+m*2;he<ve;he++){const ze=X*he,Ie=X*(he+1),L=Z+te+ze,T=Z+me+ze,B=Z+me+Ie,Y=Z+te+Ie;le(L,T,B,Y)}}}function oe($,Z,ee){l.push($),l.push(Z),l.push(ee)}function Q($,Z,ee){Ee($),Ee(Z),Ee(ee);const te=s.length/3,me=y.generateTopUV(n,s,te-3,te-2,te-1);D(me[0]),D(me[1]),D(me[2])}function le($,Z,ee,te){Ee($),Ee(Z),Ee(te),Ee(Z),Ee(ee),Ee(te);const me=s.length/3,he=y.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);D(he[0]),D(he[1]),D(he[3]),D(he[1]),D(he[2]),D(he[3])}function Ee($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function D($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new fo[s.type]().fromJSON(s)),new fn(n,e.options)}}const Ep={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ie(r,o),new ie(a,l),new ie(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[s*3],u=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ie(o,1-l),new ie(c,1-d),new ie(f,1-g),new ie(x,1-p)]:[new ie(a,1-l),new ie(h,1-d),new ie(u,1-g),new ie(m,1-p)]}};function Tp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class js extends ws{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new js(e.radius,e.detail)}}class Vl extends mt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=$e(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,d=new R,f=new ie,u=new R,g=new R,x=new R;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,u.x=p*1,u.y=-m,u.z=p*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(g)}for(let y=0;y<=t;y++){const M=n+y*h*s,v=Math.sin(M),S=Math.cos(M);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*v,d.y=e[E].y,d.z=e[E].x*S,o.push(d.x,d.y,d.z),f.x=y/t,f.y=E/(e.length-1),a.push(f.x,f.y);const w=l[3*E+0]*v,A=l[3*E+1],_=l[3*E+0]*S;c.push(w,A,_)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){const v=M+y*e.length,S=v,E=v+e.length,w=v+e.length+1,A=v+1;r.push(S,E,A),r.push(w,A,E)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.points,e.segments,e.phiStart,e.phiLength)}}class In extends ws{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new In(e.radius,e.detail)}}class Es extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,u=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const y=p*f-o;for(let M=0;M<c;M++){const v=M*d-r;g.push(v,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,v=y+c*(p+1),S=y+1+c*(p+1),E=y+1+c*p;u.push(M,v,E),u.push(v,S,E)}this.setIndex(u),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wl extends mt{constructor(e=new dn([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function c(h){const d=s.length/3,f=h.extractPoints(t);let u=f.shape;const g=f.holes;Wn.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Wn.isClockWise(y)===!0&&(g[m]=y.reverse())}const x=Wn.triangulateShape(u,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];u=u.concat(y)}for(let m=0,p=u.length;m<p;m++){const y=u[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){const y=x[m],M=y[0]+d,v=y[1]+d,S=y[2]+d;n.push(M,v,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ap(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Wl(n,e.curveSegments)}}function Ap(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Jn extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new R,f=new R,u=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){const E=S/t;d.x=-e*Math.cos(s+E*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+E*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(E+v,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const M=h[p][y+1],v=h[p][y],S=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&u.push(M,v,E),(p!==n-1||l<Math.PI)&&u.push(v,S,E)}this.setIndex(u),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xl extends ws{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xl(e.radius,e.detail)}}class sn extends mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new R,d=new R,f=new R;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){const x=g/s*r,m=u/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){const x=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,y=(s+1)*u+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gs extends mt{constructor(e=new Tu(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new ie;let h=new R;const d=[],f=[],u=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(u,2));function x(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),y(),p()}function m(M){h=e.getPointAt(M/t,h);const v=o.normals[M],S=o.binormals[M];for(let E=0;E<=s;E++){const w=E/s*Math.PI*2,A=Math.sin(w),_=-Math.cos(w);l.x=_*v.x+A*S.x,l.y=_*v.y+A*S.y,l.z=_*v.z+A*S.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){const S=(s+1)*(M-1)+(v-1),E=(s+1)*M+(v-1),w=(s+1)*M+v,A=(s+1)*(M-1)+v;g.push(S,E,A),g.push(E,w,A)}}function y(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)c.x=M/t,c.y=v/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gs(new fo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Cp extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ht extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ri extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Rp extends bs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pp extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lp extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fr extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Dp extends fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ia=new rt,qc=new R,Yc=new R;class ql{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(qc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ip extends ql{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Up extends fr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ip}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jc=new rt,Ns=new R,sa=new R;class Np extends ql{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ns),sa.copy(n.position),sa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sa),n.updateMatrixWorld(),s.makeTranslation(-Ns.x,-Ns.y,-Ns.z),jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc,n.coordinateSystem,n.reversedDepth)}}class no extends fr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yl extends Mu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fp extends ql{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Op extends fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Fp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bp extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Kc=new rt;class Fs{constructor(e,t,n=0,s=1/0){this.ray=new Nl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kc),this}intersectObject(e,t=!0,n=[]){return ml(e,this,n,t),n.sort(Jc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ml(e[s],this,n,t);return n.sort(Jc),n}}function Jc(i,e){return i.distance-e.distance}function ml(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ml(r[o],e,t,!0)}}function Zc(i,e,t,n){const s=kp(n);switch(t){case cu:return i*e;case Cl:return i*e/s.components*s.byteLength;case Rl:return i*e/s.components*s.byteLength;case uu:return i*e*2/s.components*s.byteLength;case Pl:return i*e*2/s.components*s.byteLength;case hu:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case Ll:return i*e*4/s.components*s.byteLength;case Zr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:case Ga:return Math.max(i,16)*Math.max(e,8)/4;case za:case Ha:return Math.max(i,8)*Math.max(e,8)/2;case Va:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ol:case al:case ll:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cl:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ul:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kp(i){switch(i){case Dn:case ru:return{byteLength:1,components:1};case er:case ou:case rn:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case Pi:case El:case Pn:return{byteLength:4,components:1};case au:case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Du(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hp(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],x=d[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const x=d[u];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
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
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
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
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
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
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,u0=`#define PI 3.141592653589793
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
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f0=`vec3 transformedNormal = objectNormal;
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
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
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
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,k0=`struct PhysicalMaterial {
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
}`,H0=`
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
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
}`,jm=`#if DEPTH_PACKING == 3200
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
}`,Km=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,dg=`#define STANDARD
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
}`,fg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,_g=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Gp,alphahash_pars_fragment:Vp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:jp,aomap_pars_fragment:Kp,batching_pars_vertex:Jp,batching_vertex:Zp,begin_vertex:Qp,beginnormal_vertex:$p,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:o0,color_fragment:a0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:h0,common:u0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:f0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:v0,colorspace_fragment:x0,colorspace_pars_fragment:M0,envmap_fragment:_0,envmap_common_pars_fragment:y0,envmap_pars_fragment:S0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:U0,envmap_vertex:w0,fog_vertex:E0,fog_pars_vertex:T0,fog_fragment:A0,fog_pars_fragment:C0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:P0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:D0,lights_pars_begin:I0,lights_toon_fragment:N0,lights_toon_pars_fragment:F0,lights_phong_fragment:O0,lights_phong_pars_fragment:B0,lights_physical_fragment:z0,lights_physical_pars_fragment:k0,lights_fragment_begin:H0,lights_fragment_maps:G0,lights_fragment_end:V0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:j0,map_pars_fragment:K0,map_particle_fragment:J0,map_particle_pars_fragment:Z0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:$0,morphinstance_vertex:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:vm,project_vertex:xm,dithering_fragment:Mm,dithering_pars_fragment:_m,roughnessmap_fragment:ym,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:wm,shadowmap_vertex:Em,shadowmask_pars_fragment:Tm,skinbase_vertex:Am,skinning_pars_vertex:Cm,skinning_vertex:Rm,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Im,tonemapping_pars_fragment:Um,transmission_fragment:Nm,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:km,background_vert:Hm,background_frag:Gm,backgroundCube_vert:Vm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:jm,distanceRGBA_vert:Km,distanceRGBA_frag:Jm,equirect_vert:Zm,equirect_frag:Qm,linedashed_vert:$m,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:dg,meshtoon_vert:fg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:vg,shadow_frag:xg,sprite_vert:Mg,sprite_frag:_g},be={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},An={basic:{uniforms:Gt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Gt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Gt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Gt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Gt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Gt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Gt([be.points,be.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Gt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Gt([be.common,be.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Gt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Gt([be.sprite,be.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Gt([be.common,be.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Gt([be.lights,be.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};An.physical={uniforms:Gt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Hr={r:0,b:0,g:0},yi=new on,yg=new rt;function Sg(i,e,t,n,s,r,o){const a=new Ge(0);let l=r===!0?0:1,c,h,d=null,f=0,u=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function x(M){let v=!1;const S=g(M);S===null?p(a,l):S&&S.isColor&&(p(S,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===xo)?(h===void 0&&(h=new Oe(new pn(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:fs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(v.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(yi)),h.material.toneMapped=st.getTransfer(S.colorSpace)!==lt,(d!==S||f!==S.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,u=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Oe(new Es(2,2),new Ft({name:"BackgroundMaterial",uniforms:fs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(Hr,xu(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:m,dispose:y}}function bg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(b,P,I,F,N){let V=!1;const W=d(F,I,P);r!==W&&(r=W,c(r.object)),V=u(b,F,I,N),V&&g(b,F,I,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(b,P,I,F),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,P,I){const F=I.wireframe===!0;let N=n[b.id];N===void 0&&(N={},n[b.id]=N);let V=N[P.id];V===void 0&&(V={},N[P.id]=V);let W=V[F];return W===void 0&&(W=f(l()),V[F]=W),W}function f(b){const P=[],I=[],F=[];for(let N=0;N<t;N++)P[N]=0,I[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:F,object:b,attributes:{},index:null}}function u(b,P,I,F){const N=r.attributes,V=P.attributes;let W=0;const X=I.getAttributes();for(const G in X)if(X[G].location>=0){const ue=N[G];let Me=V[G];if(Me===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),ue===void 0||ue.attribute!==Me||Me&&ue.data!==Me.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(b,P,I,F){const N={},V=P.attributes;let W=0;const X=I.getAttributes();for(const G in X)if(X[G].location>=0){let ue=V[G];ue===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor));const Me={};Me.attribute=ue,ue&&ue.data&&(Me.data=ue.data),N[G]=Me,W++}r.attributes=N,r.attributesNum=W,r.index=F}function x(){const b=r.newAttributes;for(let P=0,I=b.length;P<I;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const I=r.newAttributes,F=r.enabledAttributes,N=r.attributeDivisors;I[b]=1,F[b]===0&&(i.enableVertexAttribArray(b),F[b]=1),N[b]!==P&&(i.vertexAttribDivisor(b,P),N[b]=P)}function y(){const b=r.newAttributes,P=r.enabledAttributes;for(let I=0,F=P.length;I<F;I++)P[I]!==b[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function M(b,P,I,F,N,V,W){W===!0?i.vertexAttribIPointer(b,P,I,N,V):i.vertexAttribPointer(b,P,I,F,N,V)}function v(b,P,I,F){x();const N=F.attributes,V=I.getAttributes(),W=P.defaultAttributeValues;for(const X in V){const G=V[X];if(G.location>=0){let ae=N[X];if(ae===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ae!==void 0){const ue=ae.normalized,Me=ae.itemSize,ce=e.get(ae);if(ce===void 0)continue;const _e=ce.buffer,Ce=ce.type,Be=ce.bytesPerElement,J=Ce===i.INT||Ce===i.UNSIGNED_INT||ae.gpuType===El;if(ae.isInterleavedBufferAttribute){const ne=ae.data,z=ne.stride,oe=ae.offset;if(ne.isInstancedInterleavedBuffer){for(let Q=0;Q<G.locationSize;Q++)p(G.location+Q,ne.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Q=0;Q<G.locationSize;Q++)M(G.location+Q,Me/G.locationSize,Ce,ue,z*Be,(oe+Me/G.locationSize*Q)*Be,J)}else{if(ae.isInstancedBufferAttribute){for(let ne=0;ne<G.locationSize;ne++)p(G.location+ne,ae.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<G.locationSize;ne++)m(G.location+ne);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ne=0;ne<G.locationSize;ne++)M(G.location+ne,Me/G.locationSize,Ce,ue,Me*Be,Me/G.locationSize*ne*Be,J)}}else if(W!==void 0){const ue=W[X];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(G.location,ue);break;case 3:i.vertexAttrib3fv(G.location,ue);break;case 4:i.vertexAttrib4fv(G.location,ue);break;default:i.vertexAttrib1fv(G.location,ue)}}}}y()}function S(){A();for(const b in n){const P=n[b];for(const I in P){const F=P[I];for(const N in F)h(F[N].object),delete F[N];delete P[I]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const I in P){const F=P[I];for(const N in F)h(F[N].object),delete F[N];delete P[I]}delete n[b.id]}function w(b){for(const P in n){const I=n[P];if(I[b.id]===void 0)continue;const F=I[b.id];for(const N in F)h(F[N].object),delete F[N];delete I[b.id]}}function A(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:_,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function wg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];t.update(u,n,1)}function l(c,h,d,f){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Eg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==yn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pn&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:S,maxSamples:E}}function Tg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ri,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,M=y*4;let v=p.clippingState||null;l.value=v,v=h(g,f,M,u);for(let S=0;S!==M;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=u+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=u;M!==x;++M,v+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ag(i){let e=new WeakMap;function t(o,a){return a===Fa?o.mapping=ls:a===Oa&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===Oa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wf(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const es=4,Qc=[.125,.215,.35,.446,.526,.582],Ti=20,ra=new Yl,$c=new Ge;let oa=null,aa=0,la=0,ca=!1;const wi=(1+Math.sqrt(5))/2,Zi=1/wi,eh=[new R(-wi,Zi,0),new R(wi,Zi,0),new R(-Zi,0,wi),new R(Zi,0,wi),new R(0,wi,-Zi),new R(0,wi,Zi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Cg=new R;class po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Cg}=r;oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:rn,format:yn,colorSpace:us,depthBuffer:!1},s=th(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Pg(r,e,t)}return s}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,n,s,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor($c),d.toneMapping=ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const x=new tn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new Oe(new pn,x);let p=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,p=!0):(x.color.copy($c),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const S=this._cubeSize;Gr(s,v*S,M>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ls||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eh[(s-r-1)%eh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Oe(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ti-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let y=0;for(let w=0;w<Ti;++w){const A=w/x,_=Math.exp(-A*A/2);p.push(_),w===0?y+=_:w<m&&(y+=2*_)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const v=this._sizeLods[s],S=3*v*(s>M-es?s-M+es:0),E=4*(this._cubeSize-v);Gr(t,S,E,3*v,2*v),l.setRenderTarget(t),l.render(d,ra)}}function Rg(i){const e=[],t=[],n=[];let s=i;const r=i-es+1+Qc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-es?l=Qc[o-i+es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*u),M=new Float32Array(m*g*u),v=new Float32Array(p*g*u);for(let E=0;E<u;E++){const w=E%3*2/3-1,A=E>2?0:-1,_=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];y.set(_,x*g*E),M.set(f,m*g*E);const b=[E,E,E,E,E,E];v.set(b,p*g*E)}const S=new mt;S.setAttribute("position",new Jt(y,x)),S.setAttribute("uv",new Jt(M,m)),S.setAttribute("faceIndex",new Jt(v,p)),e.push(S),s>es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function th(i,e,t){const n=new Yt(i,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pg(i,e,t){const n=new Float32Array(Ti),s=new R(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function nh(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ih(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}function Lg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fa||l===Oa,h=l===ls||l===cs;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new po(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new po(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Dg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ig(i,e,t,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const u=r.get(f);u&&(e.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const u in f)e.update(f[u],i.ARRAY_BUFFER)}function c(d){const f=[],u=d.index,g=d.attributes.position;let x=0;if(u!==null){const y=u.array;x=u.version;for(let M=0,v=y.length;M<v;M+=3){const S=y[M+0],E=y[M+1],w=y[M+2];f.push(S,E,E,w,w,S)}}else if(g!==void 0){const y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const S=M+0,E=M+1,w=M+2;f.push(S,E,E,w,w,S)}}else return;const m=new(fu(f)?vu:gu)(f,1);m.version=x;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ug(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),t.update(u,n,1)}function c(f,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,f*o,g),t.update(u,n,g))}function h(f,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,n,1)}function d(f,u,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,u[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ng(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Fg(i,e,t){const n=new WeakMap,s=new ut;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let _=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;u===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*S*4*d),w=new pu(E,v,S,d);w.type=Pn,w.needsUpdate=!0;const A=M*4;for(let b=0;b<d;b++){const P=m[b],I=p[b],F=y[b],N=v*S*4*b;for(let V=0;V<P.count;V++){const W=V*A;u===!0&&(s.fromBufferAttribute(P,V),E[N+W+0]=s.x,E[N+W+1]=s.y,E[N+W+2]=s.z,E[N+W+3]=0),g===!0&&(s.fromBufferAttribute(I,V),E[N+W+4]=s.x,E[N+W+5]=s.y,E[N+W+6]=s.z,E[N+W+7]=0),x===!0&&(s.fromBufferAttribute(F,V),E[N+W+8]=s.x,E[N+W+9]=s.y,E[N+W+10]=s.z,E[N+W+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:w,size:new ie(v,S)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Og(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Iu=new Rt,sh=new yu(1,1),Uu=new pu,Nu=new Cf,Fu=new _u,rh=[],oh=[],ah=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function Ts(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=rh[s];if(r===void 0&&(r=new Float32Array(s),rh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _o(i,e){let t=oh[e];t===void 0&&(t=new Int32Array(e),oh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),Lt(t,n)}}function Vg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),Lt(t,n)}}function Wg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;ah.set(n),i.uniformMatrix4fv(this.addr,!1,ah),Lt(t,n)}}function Xg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Kg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function $g(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sh.compareFunction=du,r=sh):r=Iu,t.setTexture2D(e||r,s)}function ev(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nu,s)}function tv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fu,s)}function nv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uu,s)}function iv(i){switch(i){case 5126:return Bg;case 35664:return zg;case 35665:return kg;case 35666:return Hg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return jg;case 5125:return Kg;case 36294:return Jg;case 36295:return Zg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function sv(i,e){i.uniform1fv(this.addr,e)}function rv(i,e){const t=Ts(e,this.size,2);i.uniform2fv(this.addr,t)}function ov(i,e){const t=Ts(e,this.size,3);i.uniform3fv(this.addr,t)}function av(i,e){const t=Ts(e,this.size,4);i.uniform4fv(this.addr,t)}function lv(i,e){const t=Ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cv(i,e){const t=Ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hv(i,e){const t=Ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function uv(i,e){i.uniform1iv(this.addr,e)}function dv(i,e){i.uniform2iv(this.addr,e)}function fv(i,e){i.uniform3iv(this.addr,e)}function pv(i,e){i.uniform4iv(this.addr,e)}function mv(i,e){i.uniform1uiv(this.addr,e)}function gv(i,e){i.uniform2uiv(this.addr,e)}function vv(i,e){i.uniform3uiv(this.addr,e)}function xv(i,e){i.uniform4uiv(this.addr,e)}function Mv(i,e,t){const n=this.cache,s=e.length,r=_o(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Iu,r[o])}function _v(i,e,t){const n=this.cache,s=e.length,r=_o(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Nu,r[o])}function yv(i,e,t){const n=this.cache,s=e.length,r=_o(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fu,r[o])}function Sv(i,e,t){const n=this.cache,s=e.length,r=_o(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uu,r[o])}function bv(i){switch(i){case 5126:return sv;case 35664:return rv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return hv;case 5124:case 35670:return uv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return vv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Sv}}class wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iv(t.type)}}class Ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bv(t.type)}}class Tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function hh(i,e){i.seq.push(e),i.map[e.id]=e}function Av(i,e,t){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),o=ha.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hh(t,c===void 0?new wv(a,i,e):new Ev(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Tv(a),hh(t,d)),t=d}}}class io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Av(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function uh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cv=37297;let Rv=0;function Pv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const dh=new Je;function Lv(i){st._getMatrix(dh,st.workingColorSpace,i);const e=`mat3( ${dh.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case co:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Pv(i.getShaderSource(e),a)}else return r}function Dv(i,e){const t=Lv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Iv(i,e){let t;switch(e){case Qh:t="Linear";break;case $h:t="Reinhard";break;case eu:t="Cineon";break;case wl:t="ACESFilmic";break;case nu:t="AgX";break;case iu:t="Neutral";break;case tu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vr=new R;function Uv(){st.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),e=Vr.y.toFixed(4),t=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function Fv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ov(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Vs(i){return i!==""}function ph(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(Bv,kv)}const zv=new Map;function kv(i,e){let t=Qe[e];if(t===void 0){const n=zv.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const Hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(i){return i.replace(Hv,Gv)}function Gv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Vv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function qv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bl:e="ENVMAP_BLENDING_MULTIPLY";break;case Xd:e="ENVMAP_BLENDING_MIX";break;case qd:e="ENVMAP_BLENDING_ADD";break}return e}function Yv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Vv(t),c=Wv(t),h=Xv(t),d=qv(t),f=Yv(t),u=Nv(t),g=Fv(r),x=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vs).join(`
`),p.length>0&&(p+=`
`)):(m=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),p=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ci?Iv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),Uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=gl(o),o=ph(o,t),o=mh(o,t),a=gl(a),a=ph(a,t),a=mh(a,t),o=gh(o),a=gh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,v=y+p+a,S=uh(s,s.VERTEX_SHADER,M),E=uh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(E)||"",V=I.trim(),W=F.trim(),X=N.trim();let G=!0,ae=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,E);else{const ue=fh(s,S,"vertex"),Me=fh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ue+`
`+Me)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||X==="")&&(ae=!1);ae&&(P.diagnostics={runnable:G,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(S),s.deleteShader(E),A=new io(s,x),_=Ov(s,x)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Cv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=E,this}let Kv=0;class Jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zv(e),t.set(e,n)),n}}class Zv{constructor(e){this.id=Kv++,this.code=e,this.usedTimes=0}}function Qv(i,e,t,n,s,r,o){const a=new Fl,l=new Jv,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,b,P,I,F){const N=I.fog,V=F.geometry,W=_.isMeshStandardMaterial?I.environment:null,X=(_.isMeshStandardMaterial?t:e).get(_.envMap||W),G=X&&X.mapping===xo?X.image.height:null,ae=g[_.type];_.precision!==null&&(u=s.getMaxPrecision(_.precision),u!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Me=ue!==void 0?ue.length:0;let ce=0;V.morphAttributes.position!==void 0&&(ce=1),V.morphAttributes.normal!==void 0&&(ce=2),V.morphAttributes.color!==void 0&&(ce=3);let _e,Ce,Be,J;if(ae){const at=An[ae];_e=at.vertexShader,Ce=at.fragmentShader}else _e=_.vertexShader,Ce=_.fragmentShader,l.update(_),Be=l.getVertexShaderID(_),J=l.getFragmentShaderID(_);const ne=i.getRenderTarget(),z=i.state.buffers.depth.getReversed(),oe=F.isInstancedMesh===!0,Q=F.isBatchedMesh===!0,le=!!_.map,Ee=!!_.matcap,D=!!X,$=!!_.aoMap,Z=!!_.lightMap,ee=!!_.bumpMap,te=!!_.normalMap,me=!!_.displacementMap,he=!!_.emissiveMap,ve=!!_.metalnessMap,ze=!!_.roughnessMap,Ie=_.anisotropy>0,L=_.clearcoat>0,T=_.dispersion>0,B=_.iridescence>0,Y=_.sheen>0,se=_.transmission>0,K=Ie&&!!_.anisotropyMap,De=L&&!!_.clearcoatMap,ge=L&&!!_.clearcoatNormalMap,Pe=L&&!!_.clearcoatRoughnessMap,Ne=B&&!!_.iridescenceMap,de=B&&!!_.iridescenceThicknessMap,Ae=Y&&!!_.sheenColorMap,Xe=Y&&!!_.sheenRoughnessMap,ke=!!_.specularMap,we=!!_.specularColorMap,Ze=!!_.specularIntensityMap,U=se&&!!_.transmissionMap,xe=se&&!!_.thicknessMap,ye=!!_.gradientMap,Le=!!_.alphaMap,fe=_.alphaTest>0,re=!!_.alphaHash,Fe=!!_.extensions;let Ke=ci;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ke=i.toneMapping);const ft={shaderID:ae,shaderType:_.type,shaderName:_.name,vertexShader:_e,fragmentShader:Ce,defines:_.defines,customVertexShaderID:Be,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Q,batchingColor:Q&&F._colorsTexture!==null,instancing:oe,instancingColor:oe&&F.instanceColor!==null,instancingMorph:oe&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:us,alphaToCoverage:!!_.alphaToCoverage,map:le,matcap:Ee,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:G,aoMap:$,lightMap:Z,bumpMap:ee,normalMap:te,displacementMap:f&&me,emissiveMap:he,normalMapObjectSpace:te&&_.normalMapType===Jd,normalMapTangentSpace:te&&_.normalMapType===Dl,metalnessMap:ve,roughnessMap:ze,anisotropy:Ie,anisotropyMap:K,clearcoat:L,clearcoatMap:De,clearcoatNormalMap:ge,clearcoatRoughnessMap:Pe,dispersion:T,iridescence:B,iridescenceMap:Ne,iridescenceThicknessMap:de,sheen:Y,sheenColorMap:Ae,sheenRoughnessMap:Xe,specularMap:ke,specularColorMap:we,specularIntensityMap:Ze,transmission:se,transmissionMap:U,thicknessMap:xe,gradientMap:ye,opaque:_.transparent===!1&&_.blending===ss&&_.alphaToCoverage===!1,alphaMap:Le,alphaTest:fe,alphaHash:re,combine:_.combine,mapUv:le&&x(_.map.channel),aoMapUv:$&&x(_.aoMap.channel),lightMapUv:Z&&x(_.lightMap.channel),bumpMapUv:ee&&x(_.bumpMap.channel),normalMapUv:te&&x(_.normalMap.channel),displacementMapUv:me&&x(_.displacementMap.channel),emissiveMapUv:he&&x(_.emissiveMap.channel),metalnessMapUv:ve&&x(_.metalnessMap.channel),roughnessMapUv:ze&&x(_.roughnessMap.channel),anisotropyMapUv:K&&x(_.anisotropyMap.channel),clearcoatMapUv:De&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ge&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(_.sheenRoughnessMap.channel),specularMapUv:ke&&x(_.specularMap.channel),specularColorMapUv:we&&x(_.specularColorMap.channel),specularIntensityMapUv:Ze&&x(_.specularIntensityMap.channel),transmissionMapUv:U&&x(_.transmissionMap.channel),thicknessMapUv:xe&&x(_.thicknessMap.channel),alphaMapUv:Le&&x(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(te||Ie),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(le||Le),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:z,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:le&&_.map.isVideoTexture===!0&&st.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:he&&_.emissiveMap.isVideoTexture===!0&&st.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Fe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&_.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function p(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(y(b,_),M(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function y(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),_.push(a.mask)}function v(_){const b=g[_.type];let P;if(b){const I=An[b];P=hi.clone(I.uniforms)}else P=_.uniforms;return P}function S(_,b){let P;for(let I=0,F=h.length;I<F;I++){const N=h[I];if(N.cacheKey===b){P=N,++P.usedTimes;break}}return P===void 0&&(P=new jv(i,b,_,r),h.push(P)),P}function E(_){if(--_.usedTimes===0){const b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function w(_){l.remove(_)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:A}}function $v(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ex(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,u,g,x,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function a(d,f,u,g,x,m){const p=o(d,f,u,g,x,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function l(d,f,u,g,x,m){const p=o(d,f,u,g,x,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||ex),n.length>1&&n.sort(f||xh),s.length>1&&s.sort(f||xh)}function h(){for(let d=e,f=i.length;d<f;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function tx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Mh,i.set(n,[o])):s>=r.length?(o=new Mh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function nx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ge};break;case"SpotLight":t={position:new R,direction:new R,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sx=0;function rx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ox(i){const e=new nx,t=ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new rt,o=new rt;function a(c){let h=0,d=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let u=0,g=0,x=0,m=0,p=0,y=0,M=0,v=0,S=0,E=0,w=0;c.sort(rx);for(let _=0,b=c.length;_<b;_++){const P=c[_],I=P.color,F=P.intensity,N=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*F,d+=I.g*F,f+=I.b*F;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],F);w++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,G=t.get(P);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=V,n.directionalShadowMatrix[u]=P.shadow.matrix,y++}n.directional[u]=W,u++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(I).multiplyScalar(F),W.distance=N,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[x]=W;const X=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,X.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=X.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=V,v++}x++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(I).multiplyScalar(F),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const X=P.shadow,G=t.get(P);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(F),W.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==u||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==v||A.numSpotMaps!==S||A.numLightProbes!==w)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,A.directionalLength=u,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=v,A.numSpotMaps=S,A.numLightProbes=w,n.version=sx++)}function l(c,h){let d=0,f=0,u=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function _h(i){const e=new ox(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ax(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new _h(i),e.set(s,[a])):r>=o.length?(a=new _h(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cx=`uniform sampler2D shadow_pass;
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
}`;function hx(i,e,t){let n=new zl;const s=new ie,r=new ie,o=new ut,a=new Pp({depthPacking:Kd}),l=new Lp,c={},h=t.maxTextureSize,d={[ui]:Xt,[Xt]:ui,[Cn]:Cn},f=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:lx,fragmentShader:cx}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new mt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let p=this.type;this.render=function(E,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const _=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Yn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==Hn&&this.type===Hn,N=p===Hn&&this.type!==Hn;for(let V=0,W=E.length;V<W;V++){const X=E[V],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ae=G.getFrameExtents();if(s.multiply(ae),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,G.mapSize.y=r.y)),G.map===null||F===!0||N===!0){const Me=this.type!==Hn?{minFilter:qt,magFilter:qt}:{};G.map!==null&&G.map.dispose(),G.map=new Yt(s.x,s.y,Me),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ue=G.getViewportCount();for(let Me=0;Me<ue;Me++){const ce=G.getViewport(Me);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),I.viewport(o),G.updateMatrices(X,Me),n=G.getFrustum(),v(w,A,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Hn&&y(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,b,P)};function y(E,w){const A=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yt(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,A,f,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,A,u,x,null)}function M(E,w,A,_){let b=null;const P=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=A.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=b.uuid,F=w.uuid;let N=c[I];N===void 0&&(N={},c[I]=N);let V=N[F];V===void 0&&(V=b.clone(),N[F]=V,w.addEventListener("dispose",S)),b=V}if(b.visible=w.visible,b.wireframe=w.wireframe,_===Hn?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=i.properties.get(b);I.light=A}return b}function v(E,w,A,_,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Hn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const F=e.update(E),N=E.material;if(Array.isArray(N)){const V=F.groups;for(let W=0,X=V.length;W<X;W++){const G=V[W],ae=N[G.materialIndex];if(ae&&ae.visible){const ue=M(E,ae,_,b);E.onBeforeShadow(i,E,w,A,F,ue,G),i.renderBufferDirect(A,null,F,ue,E,G),E.onAfterShadow(i,E,w,A,F,ue,G)}}}else if(N.visible){const V=M(E,N,_,b);E.onBeforeShadow(i,E,w,A,F,V,null),i.renderBufferDirect(A,null,F,V,E,null),E.onAfterShadow(i,E,w,A,F,V,null)}}const I=E.children;for(let F=0,N=I.length;F<N;F++)v(I[F],w,A,_,b)}function S(E){E.target.removeEventListener("dispose",S);for(const A in c){const _=c[A],b=E.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}const ux={[Ra]:Pa,[La]:Ua,[Da]:Na,[as]:Ia,[Pa]:Ra,[Ua]:La,[Na]:Da,[Ia]:as};function dx(i,e){function t(){let U=!1;const xe=new ut;let ye=null;const Le=new ut(0,0,0,0);return{setMask:function(fe){ye!==fe&&!U&&(i.colorMask(fe,fe,fe,fe),ye=fe)},setLocked:function(fe){U=fe},setClear:function(fe,re,Fe,Ke,ft){ft===!0&&(fe*=Ke,re*=Ke,Fe*=Ke),xe.set(fe,re,Fe,Ke),Le.equals(xe)===!1&&(i.clearColor(fe,re,Fe,Ke),Le.copy(xe))},reset:function(){U=!1,ye=null,Le.set(-1,0,0,0)}}}function n(){let U=!1,xe=!1,ye=null,Le=null,fe=null;return{setReversed:function(re){if(xe!==re){const Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=re;const Ke=fe;fe=null,this.setClear(Ke)}},getReversed:function(){return xe},setTest:function(re){re?ne(i.DEPTH_TEST):z(i.DEPTH_TEST)},setMask:function(re){ye!==re&&!U&&(i.depthMask(re),ye=re)},setFunc:function(re){if(xe&&(re=ux[re]),Le!==re){switch(re){case Ra:i.depthFunc(i.NEVER);break;case Pa:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Da:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Ua:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=re}},setLocked:function(re){U=re},setClear:function(re){fe!==re&&(xe&&(re=1-re),i.clearDepth(re),fe=re)},reset:function(){U=!1,ye=null,Le=null,fe=null,xe=!1}}}function s(){let U=!1,xe=null,ye=null,Le=null,fe=null,re=null,Fe=null,Ke=null,ft=null;return{setTest:function(at){U||(at?ne(i.STENCIL_TEST):z(i.STENCIL_TEST))},setMask:function(at){xe!==at&&!U&&(i.stencilMask(at),xe=at)},setFunc:function(at,Nn,Tn){(ye!==at||Le!==Nn||fe!==Tn)&&(i.stencilFunc(at,Nn,Tn),ye=at,Le=Nn,fe=Tn)},setOp:function(at,Nn,Tn){(re!==at||Fe!==Nn||Ke!==Tn)&&(i.stencilOp(at,Nn,Tn),re=at,Fe=Nn,Ke=Tn)},setLocked:function(at){U=at},setClear:function(at){ft!==at&&(i.clearStencil(at),ft=at)},reset:function(){U=!1,xe=null,ye=null,Le=null,fe=null,re=null,Fe=null,Ke=null,ft=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,u=[],g=null,x=!1,m=null,p=null,y=null,M=null,v=null,S=null,E=null,w=new Ge(0,0,0),A=0,_=!1,b=null,P=null,I=null,F=null,N=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=X>=2);let ae=null,ue={};const Me=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),_e=new ut().fromArray(Me),Ce=new ut().fromArray(ce);function Be(U,xe,ye,Le){const fe=new Uint8Array(4),re=i.createTexture();i.bindTexture(U,re),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ye;Fe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(xe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return re}const J={};J[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(as),ee(!1),te(mc),ne(i.CULL_FACE),$(Yn);function ne(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function z(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function oe(U,xe){return d[U]!==xe?(i.bindFramebuffer(U,xe),d[U]=xe,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xe),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Q(U,xe){let ye=u,Le=!1;if(U){ye=f.get(xe),ye===void 0&&(ye=[],f.set(xe,ye));const fe=U.textures;if(ye.length!==fe.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Fe=fe.length;re<Fe;re++)ye[re]=i.COLOR_ATTACHMENT0+re;ye.length=fe.length,Le=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Le=!0);Le&&i.drawBuffers(ye)}function le(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Ee={[Ei]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Rd]:i.FUNC_REVERSE_SUBTRACT};Ee[Pd]=i.MIN,Ee[Ld]=i.MAX;const D={[Dd]:i.ZERO,[Id]:i.ONE,[Ud]:i.SRC_COLOR,[Aa]:i.SRC_ALPHA,[kd]:i.SRC_ALPHA_SATURATE,[Bd]:i.DST_COLOR,[Fd]:i.DST_ALPHA,[Nd]:i.ONE_MINUS_SRC_COLOR,[Ca]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Gd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function $(U,xe,ye,Le,fe,re,Fe,Ke,ft,at){if(U===Yn){x===!0&&(z(i.BLEND),x=!1);return}if(x===!1&&(ne(i.BLEND),x=!0),U!==Ad){if(U!==m||at!==_){if((p!==Ei||v!==Ei)&&(i.blendEquation(i.FUNC_ADD),p=Ei,v=Ei),at)switch(U){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,S=null,E=null,w.set(0,0,0),A=0,m=U,_=at}return}fe=fe||xe,re=re||ye,Fe=Fe||Le,(xe!==p||fe!==v)&&(i.blendEquationSeparate(Ee[xe],Ee[fe]),p=xe,v=fe),(ye!==y||Le!==M||re!==S||Fe!==E)&&(i.blendFuncSeparate(D[ye],D[Le],D[re],D[Fe]),y=ye,M=Le,S=re,E=Fe),(Ke.equals(w)===!1||ft!==A)&&(i.blendColor(Ke.r,Ke.g,Ke.b,ft),w.copy(Ke),A=ft),m=U,_=!1}function Z(U,xe){U.side===Cn?z(i.CULL_FACE):ne(i.CULL_FACE);let ye=U.side===Xt;xe&&(ye=!ye),ee(ye),U.blending===ss&&U.transparent===!1?$(Yn):$(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Le=U.stencilWrite;a.setTest(Le),Le&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),he(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):z(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function te(U){U!==Ed?(ne(i.CULL_FACE),U!==P&&(U===mc?i.cullFace(i.BACK):U===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):z(i.CULL_FACE),P=U}function me(U){U!==I&&(W&&i.lineWidth(U),I=U)}function he(U,xe,ye){U?(ne(i.POLYGON_OFFSET_FILL),(F!==xe||N!==ye)&&(i.polygonOffset(xe,ye),F=xe,N=ye)):z(i.POLYGON_OFFSET_FILL)}function ve(U){U?ne(i.SCISSOR_TEST):z(i.SCISSOR_TEST)}function ze(U){U===void 0&&(U=i.TEXTURE0+V-1),ae!==U&&(i.activeTexture(U),ae=U)}function Ie(U,xe,ye){ye===void 0&&(ae===null?ye=i.TEXTURE0+V-1:ye=ae);let Le=ue[ye];Le===void 0&&(Le={type:void 0,texture:void 0},ue[ye]=Le),(Le.type!==U||Le.texture!==xe)&&(ae!==ye&&(i.activeTexture(ye),ae=ye),i.bindTexture(U,xe||J[U]),Le.type=U,Le.texture=xe)}function L(){const U=ue[ae];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(U){_e.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),_e.copy(U))}function Xe(U){Ce.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ce.copy(U))}function ke(U,xe){let ye=c.get(xe);ye===void 0&&(ye=new WeakMap,c.set(xe,ye));let Le=ye.get(U);Le===void 0&&(Le=i.getUniformBlockIndex(xe,U.name),ye.set(U,Le))}function we(U,xe){const Le=c.get(xe).get(U);l.get(xe)!==Le&&(i.uniformBlockBinding(xe,Le,U.__bindingPointIndex),l.set(xe,Le))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,ue={},d={},f=new WeakMap,u=[],g=null,x=!1,m=null,p=null,y=null,M=null,v=null,S=null,E=null,w=new Ge(0,0,0),A=0,_=!1,b=null,P=null,I=null,F=null,N=null,_e.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:z,bindFramebuffer:oe,drawBuffers:Q,useProgram:le,setBlending:$,setMaterial:Z,setFlipSided:ee,setCullFace:te,setLineWidth:me,setPolygonOffset:he,setScissorTest:ve,activeTexture:ze,bindTexture:Ie,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:B,texImage2D:Ne,texImage3D:de,updateUBOMapping:ke,uniformBlockBinding:we,texStorage2D:ge,texStorage3D:Pe,texSubImage2D:Y,texSubImage3D:se,compressedTexSubImage2D:K,compressedTexSubImage3D:De,scissor:Ae,viewport:Xe,reset:Ze}}function fx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return u?new OffscreenCanvas(L,T):uo("canvas")}function x(L,T,B){let Y=1;const se=Ie(L);if((se.width>B||se.height>B)&&(Y=B/Math.max(se.width,se.height)),Y<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const K=Math.floor(Y*se.width),De=Math.floor(Y*se.height);d===void 0&&(d=g(K,De));const ge=T?g(K,De):d;return ge.width=K,ge.height=De,ge.getContext("2d").drawImage(L,0,0,K,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+K+"x"+De+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,T,B,Y,se=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=T;if(T===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),T===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),T===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),T===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),T===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),T===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),T===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),T===i.RGBA){const De=se?co:st.getTransfer(Y);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=De===lt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(L,T){let B;return L?T===null||T===Pi||T===tr?B=i.DEPTH24_STENCIL8:T===Pn?B=i.DEPTH32F_STENCIL8:T===er&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pi||T===tr?B=i.DEPTH_COMPONENT24:T===Pn?B=i.DEPTH_COMPONENT32F:T===er&&(B=i.DEPTH_COMPONENT16),B}function S(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==qt&&L.minFilter!==Kt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function E(L){const T=L.target;T.removeEventListener("dispose",E),A(T),T.isVideoTexture&&h.delete(T)}function w(L){const T=L.target;T.removeEventListener("dispose",w),b(T)}function A(L){const T=n.get(L);if(T.__webglInit===void 0)return;const B=L.source,Y=f.get(B);if(Y){const se=Y[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&_(L),Object.keys(Y).length===0&&f.delete(B)}n.remove(L)}function _(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const B=L.source,Y=f.get(B);delete Y[T.__cacheKey],o.memory.textures--}function b(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let se=0;se<T.__webglFramebuffer[Y].length;se++)i.deleteFramebuffer(T.__webglFramebuffer[Y][se]);else i.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)i.deleteFramebuffer(T.__webglFramebuffer[Y]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const B=L.textures;for(let Y=0,se=B.length;Y<se;Y++){const K=n.get(B[Y]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(L)}let P=0;function I(){P=0}function F(){const L=P;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function N(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function V(L,T){const B=n.get(L);if(L.isVideoTexture&&ve(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&B.__version!==L.version){const Y=L.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,L,T);return}}else L.isExternalTexture&&(B.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+T)}function W(L,T){const B=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){J(B,L,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+T)}function X(L,T){const B=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){J(B,L,T);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+T)}function G(L,T){const B=n.get(L);if(L.version>0&&B.__version!==L.version){ne(B,L,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+T)}const ae={[hs]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},ue={[qt]:i.NEAREST,[Yd]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},Me={[Zd]:i.NEVER,[sf]:i.ALWAYS,[Qd]:i.LESS,[du]:i.LEQUAL,[$d]:i.EQUAL,[nf]:i.GEQUAL,[ef]:i.GREATER,[tf]:i.NOTEQUAL};function ce(L,T){if(T.type===Pn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Kt||T.magFilter===Lo||T.magFilter===Mr||T.magFilter===Rn||T.minFilter===Kt||T.minFilter===Lo||T.minFilter===Mr||T.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ae[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ae[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ae[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ue[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qt||T.minFilter!==Mr&&T.minFilter!==Rn||T.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function _e(L,T){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",E));const Y=T.source;let se=f.get(Y);se===void 0&&(se={},f.set(Y,se));const K=N(T);if(K!==L.__cacheKey){se[K]===void 0&&(se[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),se[K].usedTimes++;const De=se[L.__cacheKey];De!==void 0&&(se[L.__cacheKey].usedTimes--,De.usedTimes===0&&_(T)),L.__cacheKey=K,L.__webglTexture=se[K].texture}return B}function Ce(L,T,B){return Math.floor(Math.floor(L/B)/T)}function Be(L,T,B,Y){const K=L.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,B,Y,T.data);else{K.sort((de,Ae)=>de.start-Ae.start);let De=0;for(let de=1;de<K.length;de++){const Ae=K[De],Xe=K[de],ke=Ae.start+Ae.count,we=Ce(Xe.start,T.width,4),Ze=Ce(Ae.start,T.width,4);Xe.start<=ke+1&&we===Ze&&Ce(Xe.start+Xe.count-1,T.width,4)===we?Ae.count=Math.max(Ae.count,Xe.start+Xe.count-Ae.start):(++De,K[De]=Xe)}K.length=De+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let de=0,Ae=K.length;de<Ae;de++){const Xe=K[de],ke=Math.floor(Xe.start/4),we=Math.ceil(Xe.count/4),Ze=ke%T.width,U=Math.floor(ke/T.width),xe=we,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ze,U,xe,ye,B,Y,T.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function J(L,T,B){let Y=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=i.TEXTURE_3D);const se=_e(L,T),K=T.source;t.bindTexture(Y,L.__webglTexture,i.TEXTURE0+B);const De=n.get(K);if(K.version!==De.__version||se===!0){t.activeTexture(i.TEXTURE0+B);const ge=st.getPrimaries(st.workingColorSpace),Pe=T.colorSpace===oi?null:st.getPrimaries(T.colorSpace),Ne=T.colorSpace===oi||ge===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let de=x(T.image,!1,s.maxTextureSize);de=ze(T,de);const Ae=r.convert(T.format,T.colorSpace),Xe=r.convert(T.type);let ke=M(T.internalFormat,Ae,Xe,T.colorSpace,T.isVideoTexture);ce(Y,T);let we;const Ze=T.mipmaps,U=T.isVideoTexture!==!0,xe=De.__version===void 0||se===!0,ye=K.dataReady,Le=S(T,de);if(T.isDepthTexture)ke=v(T.format===ir,T.type),xe&&(U?t.texStorage2D(i.TEXTURE_2D,1,ke,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,ke,de.width,de.height,0,Ae,Xe,null));else if(T.isDataTexture)if(Ze.length>0){U&&xe&&t.texStorage2D(i.TEXTURE_2D,Le,ke,Ze[0].width,Ze[0].height);for(let fe=0,re=Ze.length;fe<re;fe++)we=Ze[fe],U?ye&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,we.width,we.height,Ae,Xe,we.data):t.texImage2D(i.TEXTURE_2D,fe,ke,we.width,we.height,0,Ae,Xe,we.data);T.generateMipmaps=!1}else U?(xe&&t.texStorage2D(i.TEXTURE_2D,Le,ke,de.width,de.height),ye&&Be(T,de,Ae,Xe)):t.texImage2D(i.TEXTURE_2D,0,ke,de.width,de.height,0,Ae,Xe,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){U&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,ke,Ze[0].width,Ze[0].height,de.depth);for(let fe=0,re=Ze.length;fe<re;fe++)if(we=Ze[fe],T.format!==yn)if(Ae!==null)if(U){if(ye)if(T.layerUpdates.size>0){const Fe=Zc(we.width,we.height,T.format,T.type);for(const Ke of T.layerUpdates){const ft=we.data.subarray(Ke*Fe/we.data.BYTES_PER_ELEMENT,(Ke+1)*Fe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Ke,we.width,we.height,1,Ae,ft)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,we.width,we.height,de.depth,Ae,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,ke,we.width,we.height,de.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,we.width,we.height,de.depth,Ae,Xe,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,ke,we.width,we.height,de.depth,0,Ae,Xe,we.data)}else{U&&xe&&t.texStorage2D(i.TEXTURE_2D,Le,ke,Ze[0].width,Ze[0].height);for(let fe=0,re=Ze.length;fe<re;fe++)we=Ze[fe],T.format!==yn?Ae!==null?U?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ye&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,we.width,we.height,Ae,Xe,we.data):t.texImage2D(i.TEXTURE_2D,fe,ke,we.width,we.height,0,Ae,Xe,we.data)}else if(T.isDataArrayTexture)if(U){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,ke,de.width,de.height,de.depth),ye)if(T.layerUpdates.size>0){const fe=Zc(de.width,de.height,T.format,T.type);for(const re of T.layerUpdates){const Fe=de.data.subarray(re*fe/de.data.BYTES_PER_ELEMENT,(re+1)*fe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,de.width,de.height,1,Ae,Xe,Fe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ae,Xe,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,de.width,de.height,de.depth,0,Ae,Xe,de.data);else if(T.isData3DTexture)U?(xe&&t.texStorage3D(i.TEXTURE_3D,Le,ke,de.width,de.height,de.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ae,Xe,de.data)):t.texImage3D(i.TEXTURE_3D,0,ke,de.width,de.height,de.depth,0,Ae,Xe,de.data);else if(T.isFramebufferTexture){if(xe)if(U)t.texStorage2D(i.TEXTURE_2D,Le,ke,de.width,de.height);else{let fe=de.width,re=de.height;for(let Fe=0;Fe<Le;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,ke,fe,re,0,Ae,Xe,null),fe>>=1,re>>=1}}else if(Ze.length>0){if(U&&xe){const fe=Ie(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Le,ke,fe.width,fe.height)}for(let fe=0,re=Ze.length;fe<re;fe++)we=Ze[fe],U?ye&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ae,Xe,we):t.texImage2D(i.TEXTURE_2D,fe,ke,Ae,Xe,we);T.generateMipmaps=!1}else if(U){if(xe){const fe=Ie(de);t.texStorage2D(i.TEXTURE_2D,Le,ke,fe.width,fe.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Xe,de)}else t.texImage2D(i.TEXTURE_2D,0,ke,Ae,Xe,de);m(T)&&p(Y),De.__version=K.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ne(L,T,B){if(T.image.length!==6)return;const Y=_e(L,T),se=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+B);const K=n.get(se);if(se.version!==K.__version||Y===!0){t.activeTexture(i.TEXTURE0+B);const De=st.getPrimaries(st.workingColorSpace),ge=T.colorSpace===oi?null:st.getPrimaries(T.colorSpace),Pe=T.colorSpace===oi||De===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,de=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let re=0;re<6;re++)!Ne&&!de?Ae[re]=x(T.image[re],!0,s.maxCubemapSize):Ae[re]=de?T.image[re].image:T.image[re],Ae[re]=ze(T,Ae[re]);const Xe=Ae[0],ke=r.convert(T.format,T.colorSpace),we=r.convert(T.type),Ze=M(T.internalFormat,ke,we,T.colorSpace),U=T.isVideoTexture!==!0,xe=K.__version===void 0||Y===!0,ye=se.dataReady;let Le=S(T,Xe);ce(i.TEXTURE_CUBE_MAP,T);let fe;if(Ne){U&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ze,Xe.width,Xe.height);for(let re=0;re<6;re++){fe=Ae[re].mipmaps;for(let Fe=0;Fe<fe.length;Fe++){const Ke=fe[Fe];T.format!==yn?ke!==null?U?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Ke.width,Ke.height,ke,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,Ze,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Ke.width,Ke.height,ke,we,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,Ze,Ke.width,Ke.height,0,ke,we,Ke.data)}}}else{if(fe=T.mipmaps,U&&xe){fe.length>0&&Le++;const re=Ie(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ze,re.width,re.height)}for(let re=0;re<6;re++)if(de){U?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae[re].width,Ae[re].height,ke,we,Ae[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ze,Ae[re].width,Ae[re].height,0,ke,we,Ae[re].data);for(let Fe=0;Fe<fe.length;Fe++){const ft=fe[Fe].image[re].image;U?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,ft.width,ft.height,ke,we,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,Ze,ft.width,ft.height,0,ke,we,ft.data)}}else{U?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ke,we,Ae[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ze,ke,we,Ae[re]);for(let Fe=0;Fe<fe.length;Fe++){const Ke=fe[Fe];U?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,ke,we,Ke.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,Ze,ke,we,Ke.image[re])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),K.__version=se.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function z(L,T,B,Y,se,K){const De=r.convert(B.format,B.colorSpace),ge=r.convert(B.type),Pe=M(B.internalFormat,De,ge,B.colorSpace),Ne=n.get(T),de=n.get(B);if(de.__renderTarget=T,!Ne.__hasExternalTextures){const Ae=Math.max(1,T.width>>K),Xe=Math.max(1,T.height>>K);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,K,Pe,Ae,Xe,T.depth,0,De,ge,null):t.texImage2D(se,K,Pe,Ae,Xe,0,De,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),he(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,se,de.__webglTexture,0,me(T)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,se,de.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(L,T,B){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const Y=T.depthTexture,se=Y&&Y.isDepthTexture?Y.type:null,K=v(T.stencilBuffer,se),De=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=me(T);he(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,K,T.width,T.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,K,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,K,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,L)}else{const Y=T.textures;for(let se=0;se<Y.length;se++){const K=Y[se],De=r.convert(K.format,K.colorSpace),ge=r.convert(K.type),Pe=M(K.internalFormat,De,ge,K.colorSpace),Ne=me(T);B&&he(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Pe,T.width,T.height):he(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Pe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(T.depthTexture);Y.__renderTarget=T,(!Y.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);const se=Y.__webglTexture,K=me(T);if(T.depthTexture.format===nr)he(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(T.depthTexture.format===ir)he(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function le(L){const T=n.get(L),B=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const Y=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",se)};Y.addEventListener("dispose",se),T.__depthDisposeCallback=se}T.__boundDepthTexture=Y}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=L.texture.mipmaps;Y&&Y.length>0?Q(T.__webglFramebuffer[0],L):Q(T.__webglFramebuffer,L)}else if(B){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=i.createRenderbuffer(),oe(T.__webglDepthbuffer[Y],L,!1);else{const se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,K)}}else{const Y=L.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),oe(T.__webglDepthbuffer,L,!1);else{const se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(L,T,B){const Y=n.get(L);T!==void 0&&z(Y.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&le(L)}function D(L){const T=L.texture,B=n.get(L),Y=n.get(T);L.addEventListener("dispose",w);const se=L.textures,K=L.isWebGLCubeRenderTarget===!0,De=se.length>1;if(De||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=T.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)B.__webglFramebuffer[ge][Pe]=i.createFramebuffer()}else B.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)B.__webglFramebuffer[ge]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(De)for(let ge=0,Pe=se.length;ge<Pe;ge++){const Ne=n.get(se[ge]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&he(L)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ge=0;ge<se.length;ge++){const Pe=se[ge];B.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ge]);const Ne=r.convert(Pe.format,Pe.colorSpace),de=r.convert(Pe.type),Ae=M(Pe.internalFormat,Ne,de,Pe.colorSpace,L.isXRRenderTarget===!0),Xe=me(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ae,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,B.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(B.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ce(i.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)z(B.__webglFramebuffer[ge][Pe],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe);else z(B.__webglFramebuffer[ge],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ge=0,Pe=se.length;ge<Pe;ge++){const Ne=se[ge],de=n.get(Ne);let Ae=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,de.__webglTexture),ce(Ae,Ne),z(B.__webglFramebuffer,L,Ne,i.COLOR_ATTACHMENT0+ge,Ae,0),m(Ne)&&p(Ae)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Y.__webglTexture),ce(ge,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)z(B.__webglFramebuffer[Pe],L,T,i.COLOR_ATTACHMENT0,ge,Pe);else z(B.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,ge,0);m(T)&&p(ge),t.unbindTexture()}L.depthBuffer&&le(L)}function $(L){const T=L.textures;for(let B=0,Y=T.length;B<Y;B++){const se=T[B];if(m(se)){const K=y(L),De=n.get(se).__webglTexture;t.bindTexture(K,De),p(K),t.unbindTexture()}}}const Z=[],ee=[];function te(L){if(L.samples>0){if(he(L)===!1){const T=L.textures,B=L.width,Y=L.height;let se=i.COLOR_BUFFER_BIT;const K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(L),ge=T.length>1;if(ge)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Pe=L.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);const de=n.get(T[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,se,i.NEAREST),l===!0&&(Z.length=0,ee.length=0,Z.push(i.COLOR_ATTACHMENT0+Ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Z.push(K),ee.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);const de=n.get(T[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function me(L){return Math.min(s.maxSamples,L.samples)}function he(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ve(L){const T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function ze(L,T){const B=L.colorSpace,Y=L.format,se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==us&&B!==oi&&(st.getTransfer(B)===lt?(Y!==yn||se!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=z,this.useMultisampledRTT=he}function px(i,e){function t(n,s=oi){let r;const o=st.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ru)return i.BYTE;if(n===ou)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===El)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===yn)return i.RGBA;if(n===nr)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===Cl)return i.RED;if(n===Rl)return i.RED_INTEGER;if(n===uu)return i.RG;if(n===Pl)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===Zr||n===Qr||n===$r||n===eo)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Ha||n===Ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Wa)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qa||n===Ya||n===ja||n===Ka||n===Ja||n===Za||n===Qa||n===$a||n===el||n===tl||n===nl||n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===il)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===al||n===ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ol)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===hl||n===ul||n===dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gx=`
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

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Su(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ft({vertexShader:mx,fragmentShader:gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xx extends Ss{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null;const x=typeof XRWebGLBinding<"u",m=new vx,p={},y=t.getContextAttributes();let M=null,v=null;const S=[],E=[],w=new ie;let A=null;const _=new Wt;_.viewport=new ut;const b=new Wt;b.viewport=new ut;const P=[_,b],I=new Bp;let F=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=S[J];return ne===void 0&&(ne=new Qo,S[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=S[J];return ne===void 0&&(ne=new Qo,S[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=S[J];return ne===void 0&&(ne=new Qo,S[J]=ne),ne.getHandSpace()};function V(J){const ne=E.indexOf(J.inputSource);if(ne===-1)return;const z=S[ne];z!==void 0&&(z.update(J.inputSource,J.frame,c||o),z.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let J=0;J<S.length;J++){const ne=E[J];ne!==null&&(E[J]=null,S[J].disconnect(ne))}F=null,N=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(M),u=null,f=null,d=null,s=null,v=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let z=null,oe=null,Q=null;y.depth&&(Q=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=y.stencil?ir:nr,oe=y.stencil?tr:Pi);const le={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Yt(f.textureWidth,f.textureHeight,{format:yn,type:Dn,depthTexture:new yu(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const z={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,z),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Yt(u.framebufferWidth,u.framebufferHeight,{format:yn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(J){for(let ne=0;ne<J.removed.length;ne++){const z=J.removed[ne],oe=E.indexOf(z);oe>=0&&(E[oe]=null,S[oe].disconnect(z))}for(let ne=0;ne<J.added.length;ne++){const z=J.added[ne];let oe=E.indexOf(z);if(oe===-1){for(let le=0;le<S.length;le++)if(le>=E.length){E.push(z),oe=le;break}else if(E[le]===null){E[le]=z,oe=le;break}if(oe===-1)break}const Q=S[oe];Q&&Q.connect(z)}}const G=new R,ae=new R;function ue(J,ne,z){G.setFromMatrixPosition(ne.matrixWorld),ae.setFromMatrixPosition(z.matrixWorld);const oe=G.distanceTo(ae),Q=ne.projectionMatrix.elements,le=z.projectionMatrix.elements,Ee=Q[14]/(Q[10]-1),D=Q[14]/(Q[10]+1),$=(Q[9]+1)/Q[5],Z=(Q[9]-1)/Q[5],ee=(Q[8]-1)/Q[0],te=(le[8]+1)/le[0],me=Ee*ee,he=Ee*te,ve=oe/(-ee+te),ze=ve*-ee;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ze),J.translateZ(ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Q[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ie=Ee+ve,L=D+ve,T=me-ze,B=he+(oe-ze),Y=$*D/L*Ie,se=Z*D/L*Ie;J.projectionMatrix.makePerspective(T,B,Y,se,Ie,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Me(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ne=J.near,z=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(z=m.depthFar)),I.near=b.near=_.near=ne,I.far=b.far=_.far=z,(F!==I.near||N!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,N=I.far),I.layers.mask=J.layers.mask|6,_.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const oe=J.parent,Q=I.cameras;Me(I,oe);for(let le=0;le<Q.length;le++)Me(Q[le],oe);Q.length===2?ue(I,_,b):I.projectionMatrix.copy(_.projectionMatrix),ce(J,I,oe)};function ce(J,ne,z){z===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(z.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ds*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(J){return p[J]};let _e=null;function Ce(J,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){const z=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let oe=!1;z.length!==I.cameras.length&&(I.cameras.length=0,oe=!0);for(let D=0;D<z.length;D++){const $=z[D];let Z=null;if(u!==null)Z=u.getViewport($);else{const te=d.getViewSubImage(f,$);Z=te.viewport,D===0&&(e.setRenderTargetTextures(v,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(v))}let ee=P[D];ee===void 0&&(ee=new Wt,ee.layers.enable(D),ee.viewport=new ut,P[D]=ee),ee.matrix.fromArray($.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray($.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Z.x,Z.y,Z.width,Z.height),D===0&&(I.matrix.copy(ee.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),oe===!0&&I.cameras.push(ee)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const D=d.getDepthInformation(z[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Q&&Q.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let D=0;D<z.length;D++){const $=z[D].camera;if($){let Z=p[$];Z||(Z=new Su,p[$]=Z);const ee=d.getCameraImage($);Z.sourceTexture=ee}}}}for(let z=0;z<S.length;z++){const oe=E[z],Q=S[z];oe!==null&&Q!==void 0&&Q.update(oe,ne,c||o)}_e&&_e(J,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Be=new Du;Be.setAnimationLoop(Ce),this.setAnimationLoop=function(J){_e=J},this.dispose=function(){}}}const Si=new on,Mx=new rt;function _x(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,Si.copy(v),Si.x*=-1,Si.y*=-1,Si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(Si)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const v=M.program;n.uniformBlockBinding(y,v)}function c(y,M){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const S=M.program;n.updateUBOMapping(y,S);const E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){const M=d();y.__bindingPointIndex=M;const v=i.createBuffer(),S=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=s[y.id],v=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,w=v.length;E<w;E++){const A=Array.isArray(v[E])?v[E]:[v[E]];for(let _=0,b=A.length;_<b;_++){const P=A[_];if(u(P,E,_,S)===!0){const I=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let V=0;V<F.length;V++){const W=F[V],X=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,I+N,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,M,v,S){const E=y.value,w=M+"_"+v;if(S[w]===void 0)return typeof E=="number"||typeof E=="boolean"?S[w]=E:S[w]=E.clone(),!0;{const A=S[w];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return S[w]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(y){const M=y.uniforms;let v=0;const S=16;for(let w=0,A=M.length;w<A;w++){const _=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,P=_.length;b<P;b++){const I=_[b],F=Array.isArray(I.value)?I.value:[I.value];for(let N=0,V=F.length;N<V;N++){const W=F[N],X=x(W),G=v%S,ae=G%X.boundary,ue=G+ae;v+=ae,ue!==0&&S-ue<X.storage&&(v+=S-ue),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=X.storage}}}const E=v%S;return E>0&&(v+=S-E),y.__size=v,y.__cache={},this}function x(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Sx{constructor(e={}){const{canvas:t=yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=It;let E=0,w=0,A=null,_=-1,b=null;const P=new ut,I=new ut;let F=null;const N=new Ge(0);let V=0,W=t.width,X=t.height,G=1,ae=null,ue=null;const Me=new ut(0,0,W,X),ce=new ut(0,0,W,X);let _e=!1;const Ce=new zl;let Be=!1,J=!1;const ne=new rt,z=new R,oe=new ut,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Ee(){return A===null?G:1}let D=n;function $(C,O){return t.getContext(C,O)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sl}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){const O="webgl2";if(D=$(O,C),D===null)throw $(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Z,ee,te,me,he,ve,ze,Ie,L,T,B,Y,se,K,De,ge,Pe,Ne,de,Ae,Xe,ke,we,Ze;function U(){Z=new Dg(D),Z.init(),ke=new px(D,Z),ee=new Eg(D,Z,e,ke),te=new dx(D,Z),ee.reversedDepthBuffer&&f&&te.buffers.depth.setReversed(!0),me=new Ng(D),he=new $v,ve=new fx(D,Z,te,he,ee,ke,me),ze=new Ag(v),Ie=new Lg(v),L=new Hp(D),we=new bg(D,L),T=new Ig(D,L,me,we),B=new Og(D,T,L,me),de=new Fg(D,ee,ve),ge=new Tg(he),Y=new Qv(v,ze,Ie,Z,ee,we,ge),se=new _x(v,he),K=new tx,De=new ax(Z),Ne=new Sg(v,ze,Ie,te,B,u,l),Pe=new hx(v,B,ee),Ze=new yx(D,me,ee,te),Ae=new wg(D,Z,me),Xe=new Ug(D,Z,me),me.programs=Y.programs,v.capabilities=ee,v.extensions=Z,v.properties=he,v.renderLists=K,v.shadowMap=Pe,v.state=te,v.info=me}U();const xe=new xx(v,D);this.xr=xe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(W,X,!1))},this.getSize=function(C){return C.set(W,X)},this.setSize=function(C,O,q=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,X=O,t.width=Math.floor(C*G),t.height=Math.floor(O*G),q===!0&&(t.style.width=C+"px",t.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(W*G,X*G).floor()},this.setDrawingBufferSize=function(C,O,q){W=C,X=O,G=q,t.width=Math.floor(C*q),t.height=Math.floor(O*q),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(Me)},this.setViewport=function(C,O,q,j){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,O,q,j),te.viewport(P.copy(Me).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(ce)},this.setScissor=function(C,O,q,j){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,O,q,j),te.scissor(I.copy(ce).multiplyScalar(G).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(C){te.setScissorTest(_e=C)},this.setOpaqueSort=function(C){ae=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(C=!0,O=!0,q=!0){let j=0;if(C){let k=!1;if(A!==null){const pe=A.texture.format;k=pe===Ll||pe===Pl||pe===Rl}if(k){const pe=A.texture.type,Te=pe===Dn||pe===Pi||pe===er||pe===tr||pe===Tl||pe===Al,Ue=Ne.getClearColor(),Re=Ne.getClearAlpha(),We=Ue.r,Ye=Ue.g,He=Ue.b;Te?(g[0]=We,g[1]=Ye,g[2]=He,g[3]=Re,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=We,x[1]=Ye,x[2]=He,x[3]=Re,D.clearBufferiv(D.COLOR,0,x))}else j|=D.COLOR_BUFFER_BIT}O&&(j|=D.DEPTH_BUFFER_BIT),q&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ne.dispose(),K.dispose(),De.dispose(),he.dispose(),ze.dispose(),Ie.dispose(),B.dispose(),we.dispose(),Ze.dispose(),Y.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Tn),xe.removeEventListener("sessionend",ic),mi.stop()};function ye(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=me.autoReset,O=Pe.enabled,q=Pe.autoUpdate,j=Pe.needsUpdate,k=Pe.type;U(),me.autoReset=C,Pe.enabled=O,Pe.autoUpdate=q,Pe.needsUpdate=j,Pe.type=k}function fe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function re(C){const O=C.target;O.removeEventListener("dispose",re),Fe(O)}function Fe(C){Ke(C),he.remove(C)}function Ke(C){const O=he.get(C).programs;O!==void 0&&(O.forEach(function(q){Y.releaseProgram(q)}),C.isShaderMaterial&&Y.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,q,j,k,pe){O===null&&(O=Q);const Te=k.isMesh&&k.matrixWorld.determinant()<0,Ue=id(C,O,q,j,k);te.setMaterial(j,Te);let Re=q.index,We=1;if(j.wireframe===!0){if(Re=T.getWireframeAttribute(q),Re===void 0)return;We=2}const Ye=q.drawRange,He=q.attributes.position;let nt=Ye.start*We,ct=(Ye.start+Ye.count)*We;pe!==null&&(nt=Math.max(nt,pe.start*We),ct=Math.min(ct,(pe.start+pe.count)*We)),Re!==null?(nt=Math.max(nt,0),ct=Math.min(ct,Re.count)):He!=null&&(nt=Math.max(nt,0),ct=Math.min(ct,He.count));const yt=ct-nt;if(yt<0||yt===1/0)return;we.setup(k,j,Ue,q,Re);let pt,dt=Ae;if(Re!==null&&(pt=L.get(Re),dt=Xe,dt.setIndex(pt)),k.isMesh)j.wireframe===!0?(te.setLineWidth(j.wireframeLinewidth*Ee()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(k.isLine){let Ve=j.linewidth;Ve===void 0&&(Ve=1),te.setLineWidth(Ve*Ee()),k.isLineSegments?dt.setMode(D.LINES):k.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else k.isPoints?dt.setMode(D.POINTS):k.isSprite&&dt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ve=k._multiDrawStarts,vt=k._multiDrawCounts,ot=k._multiDrawCount,Zt=Re?L.get(Re).bytesPerElement:1,Fi=he.get(j).currentProgram.getUniforms();for(let Qt=0;Qt<ot;Qt++)Fi.setValue(D,"_gl_DrawID",Qt),dt.render(Ve[Qt]/Zt,vt[Qt])}else if(k.isInstancedMesh)dt.renderInstances(nt,yt,k.count);else if(q.isInstancedBufferGeometry){const Ve=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,vt=Math.min(q.instanceCount,Ve);dt.renderInstances(nt,yt,vt)}else dt.render(nt,yt)};function ft(C,O,q){C.transparent===!0&&C.side===Cn&&C.forceSinglePass===!1?(C.side=Xt,C.needsUpdate=!0,vr(C,O,q),C.side=ui,C.needsUpdate=!0,vr(C,O,q),C.side=Cn):vr(C,O,q)}this.compile=function(C,O,q=null){q===null&&(q=C),p=De.get(q),p.init(O),M.push(p),q.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),C!==q&&C.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const j=new Set;return C.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pe=k.material;if(pe)if(Array.isArray(pe))for(let Te=0;Te<pe.length;Te++){const Ue=pe[Te];ft(Ue,q,k),j.add(Ue)}else ft(pe,q,k),j.add(pe)}),p=M.pop(),j},this.compileAsync=function(C,O,q=null){const j=this.compile(C,O,q);return new Promise(k=>{function pe(){if(j.forEach(function(Te){he.get(Te).currentProgram.isReady()&&j.delete(Te)}),j.size===0){k(C);return}setTimeout(pe,10)}Z.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let at=null;function Nn(C){at&&at(C)}function Tn(){mi.stop()}function ic(){mi.start()}const mi=new Du;mi.setAnimationLoop(Nn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(C){at=C,xe.setAnimationLoop(C),C===null?mi.stop():mi.start()},xe.addEventListener("sessionstart",Tn),xe.addEventListener("sessionend",ic),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(O),O=xe.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,O,A),p=De.get(C,M.length),p.init(O),M.push(p),ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ce.setFromProjectionMatrix(ne,Ln,O.reversedDepth),J=this.localClippingEnabled,Be=ge.init(this.clippingPlanes,J),m=K.get(C,y.length),m.init(),y.push(m),xe.enabled===!0&&xe.isPresenting===!0){const pe=v.xr.getDepthSensingMesh();pe!==null&&Ao(pe,O,-1/0,v.sortObjects)}Ao(C,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ae,ue),le=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,le&&Ne.addToRenderList(m,C),this.info.render.frame++,Be===!0&&ge.beginShadows();const q=p.state.shadowsArray;Pe.render(q,C,O),Be===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){const pe=O.cameras;if(k.length>0)for(let Te=0,Ue=pe.length;Te<Ue;Te++){const Re=pe[Te];rc(j,k,C,Re)}le&&Ne.render(C);for(let Te=0,Ue=pe.length;Te<Ue;Te++){const Re=pe[Te];sc(m,C,Re,Re.viewport)}}else k.length>0&&rc(j,k,C,O),le&&Ne.render(C),sc(m,C,O);A!==null&&w===0&&(ve.updateMultisampleRenderTarget(A),ve.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(v,C,O),we.resetDefaultState(),_=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],Be===!0&&ge.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ao(C,O,q,j){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ce.intersectsSprite(C)){j&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ne);const Te=B.update(C),Ue=C.material;Ue.visible&&m.push(C,Te,Ue,q,oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ce.intersectsObject(C))){const Te=B.update(C),Ue=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),oe.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),oe.copy(Te.boundingSphere.center)),oe.applyMatrix4(C.matrixWorld).applyMatrix4(ne)),Array.isArray(Ue)){const Re=Te.groups;for(let We=0,Ye=Re.length;We<Ye;We++){const He=Re[We],nt=Ue[He.materialIndex];nt&&nt.visible&&m.push(C,Te,nt,q,oe.z,He)}}else Ue.visible&&m.push(C,Te,Ue,q,oe.z,null)}}const pe=C.children;for(let Te=0,Ue=pe.length;Te<Ue;Te++)Ao(pe[Te],O,q,j)}function sc(C,O,q,j){const k=C.opaque,pe=C.transmissive,Te=C.transparent;p.setupLightsView(q),Be===!0&&ge.setGlobalState(v.clippingPlanes,q),j&&te.viewport(P.copy(j)),k.length>0&&gr(k,O,q),pe.length>0&&gr(pe,O,q),Te.length>0&&gr(Te,O,q),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function rc(C,O,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Yt(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?rn:Dn,minFilter:Rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const pe=p.state.transmissionRenderTarget[j.id],Te=j.viewport||P;pe.setSize(Te.z*v.transmissionResolutionScale,Te.w*v.transmissionResolutionScale);const Ue=v.getRenderTarget(),Re=v.getActiveCubeFace(),We=v.getActiveMipmapLevel();v.setRenderTarget(pe),v.getClearColor(N),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),le&&Ne.render(q);const Ye=v.toneMapping;v.toneMapping=ci;const He=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Be===!0&&ge.setGlobalState(v.clippingPlanes,j),gr(C,q,j),ve.updateMultisampleRenderTarget(pe),ve.updateRenderTargetMipmap(pe),Z.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ct=0,yt=O.length;ct<yt;ct++){const pt=O[ct],dt=pt.object,Ve=pt.geometry,vt=pt.material,ot=pt.group;if(vt.side===Cn&&dt.layers.test(j.layers)){const Zt=vt.side;vt.side=Xt,vt.needsUpdate=!0,oc(dt,q,j,Ve,vt,ot),vt.side=Zt,vt.needsUpdate=!0,nt=!0}}nt===!0&&(ve.updateMultisampleRenderTarget(pe),ve.updateRenderTargetMipmap(pe))}v.setRenderTarget(Ue,Re,We),v.setClearColor(N,V),He!==void 0&&(j.viewport=He),v.toneMapping=Ye}function gr(C,O,q){const j=O.isScene===!0?O.overrideMaterial:null;for(let k=0,pe=C.length;k<pe;k++){const Te=C[k],Ue=Te.object,Re=Te.geometry,We=Te.group;let Ye=Te.material;Ye.allowOverride===!0&&j!==null&&(Ye=j),Ue.layers.test(q.layers)&&oc(Ue,O,q,Re,Ye,We)}}function oc(C,O,q,j,k,pe){C.onBeforeRender(v,O,q,j,k,pe),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(v,O,q,j,C,pe),k.transparent===!0&&k.side===Cn&&k.forceSinglePass===!1?(k.side=Xt,k.needsUpdate=!0,v.renderBufferDirect(q,O,j,k,C,pe),k.side=ui,k.needsUpdate=!0,v.renderBufferDirect(q,O,j,k,C,pe),k.side=Cn):v.renderBufferDirect(q,O,j,k,C,pe),C.onAfterRender(v,O,q,j,k,pe)}function vr(C,O,q){O.isScene!==!0&&(O=Q);const j=he.get(C),k=p.state.lights,pe=p.state.shadowsArray,Te=k.state.version,Ue=Y.getParameters(C,k.state,pe,O,q),Re=Y.getProgramCacheKey(Ue);let We=j.programs;j.environment=C.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(C.isMeshStandardMaterial?Ie:ze).get(C.envMap||j.environment),j.envMapRotation=j.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",re),We=new Map,j.programs=We);let Ye=We.get(Re);if(Ye!==void 0){if(j.currentProgram===Ye&&j.lightsStateVersion===Te)return lc(C,Ue),Ye}else Ue.uniforms=Y.getUniforms(C),C.onBeforeCompile(Ue,v),Ye=Y.acquireProgram(Ue,Re),We.set(Re,Ye),j.uniforms=Ue.uniforms;const He=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=ge.uniform),lc(C,Ue),j.needsLights=rd(C),j.lightsStateVersion=Te,j.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Ye,j.uniformsList=null,Ye}function ac(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=io.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function lc(C,O){const q=he.get(C);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function id(C,O,q,j,k){O.isScene!==!0&&(O=Q),ve.resetTextureUnits();const pe=O.fog,Te=j.isMeshStandardMaterial?O.environment:null,Ue=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:us,Re=(j.isMeshStandardMaterial?Ie:ze).get(j.envMap||Te),We=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,ct=!!q.morphAttributes.color;let yt=ci;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=v.toneMapping);const pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=pt!==void 0?pt.length:0,Ve=he.get(j),vt=p.state.lights;if(Be===!0&&(J===!0||C!==b)){const kt=C===b&&j.id===_;ge.setState(j,C,kt)}let ot=!1;j.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==vt.state.version||Ve.outputColorSpace!==Ue||k.isBatchedMesh&&Ve.batching===!1||!k.isBatchedMesh&&Ve.batching===!0||k.isBatchedMesh&&Ve.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ve.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ve.instancing===!1||!k.isInstancedMesh&&Ve.instancing===!0||k.isSkinnedMesh&&Ve.skinning===!1||!k.isSkinnedMesh&&Ve.skinning===!0||k.isInstancedMesh&&Ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ve.instancingMorph===!1&&k.morphTexture!==null||Ve.envMap!==Re||j.fog===!0&&Ve.fog!==pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ge.numPlanes||Ve.numIntersection!==ge.numIntersection)||Ve.vertexAlphas!==We||Ve.vertexTangents!==Ye||Ve.morphTargets!==He||Ve.morphNormals!==nt||Ve.morphColors!==ct||Ve.toneMapping!==yt||Ve.morphTargetsCount!==dt)&&(ot=!0):(ot=!0,Ve.__version=j.version);let Zt=Ve.currentProgram;ot===!0&&(Zt=vr(j,O,k));let Fi=!1,Qt=!1,Cs=!1;const xt=Zt.getUniforms(),an=Ve.uniforms;if(te.useProgram(Zt.program)&&(Fi=!0,Qt=!0,Cs=!0),j.id!==_&&(_=j.id,Qt=!0),Fi||b!==C){te.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",C.projectionMatrix),xt.setValue(D,"viewMatrix",C.matrixWorldInverse);const jt=xt.map.cameraPosition;jt!==void 0&&jt.setValue(D,z.setFromMatrixPosition(C.matrixWorld)),ee.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Qt=!0,Cs=!0)}if(k.isSkinnedMesh){xt.setOptional(D,k,"bindMatrix"),xt.setOptional(D,k,"bindMatrixInverse");const kt=k.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),xt.setValue(D,"boneTexture",kt.boneTexture,ve))}k.isBatchedMesh&&(xt.setOptional(D,k,"batchingTexture"),xt.setValue(D,"batchingTexture",k._matricesTexture,ve),xt.setOptional(D,k,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",k._indirectTexture,ve),xt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",k._colorsTexture,ve));const ln=q.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&de.update(k,q,Zt),(Qt||Ve.receiveShadow!==k.receiveShadow)&&(Ve.receiveShadow=k.receiveShadow,xt.setValue(D,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(an.envMap.value=Re,an.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(an.envMapIntensity.value=O.environmentIntensity),Qt&&(xt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&sd(an,Cs),pe&&j.fog===!0&&se.refreshFogUniforms(an,pe),se.refreshMaterialUniforms(an,j,G,X,p.state.transmissionRenderTarget[C.id]),io.upload(D,ac(Ve),an,ve)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(io.upload(D,ac(Ve),an,ve),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xt.setValue(D,"center",k.center),xt.setValue(D,"modelViewMatrix",k.modelViewMatrix),xt.setValue(D,"normalMatrix",k.normalMatrix),xt.setValue(D,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const kt=j.uniformsGroups;for(let jt=0,Co=kt.length;jt<Co;jt++){const gi=kt[jt];Ze.update(gi,Zt),Ze.bind(gi,Zt)}}return Zt}function sd(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function rd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,O,q){const j=he.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),he.get(C.texture).__webglTexture=O,he.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,O){const q=he.get(C);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const od=D.createFramebuffer();this.setRenderTarget=function(C,O=0,q=0){A=C,E=O,w=q;let j=!0,k=null,pe=!1,Te=!1;if(C){const Re=he.get(C);if(Re.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Re.__webglFramebuffer===void 0)ve.setupRenderTarget(C);else if(Re.__hasExternalTextures)ve.rebindTextures(C,he.get(C.texture).__webglTexture,he.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const He=C.depthTexture;if(Re.__boundDepthTexture!==He){if(He!==null&&he.has(He)&&(C.width!==He.image.width||C.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(C)}}const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Te=!0);const Ye=he.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[O])?k=Ye[O][q]:k=Ye[O],pe=!0):C.samples>0&&ve.useMultisampledRTT(C)===!1?k=he.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?k=Ye[q]:k=Ye,P.copy(C.viewport),I.copy(C.scissor),F=C.scissorTest}else P.copy(Me).multiplyScalar(G).floor(),I.copy(ce).multiplyScalar(G).floor(),F=_e;if(q!==0&&(k=od),te.bindFramebuffer(D.FRAMEBUFFER,k)&&j&&te.drawBuffers(C,k),te.viewport(P),te.scissor(I),te.setScissorTest(F),pe){const Re=he.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,q)}else if(Te){const Re=O;for(let We=0;We<C.textures.length;We++){const Ye=he.get(C.textures[We]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+We,Ye.__webglTexture,q,Re)}}else if(C!==null&&q!==0){const Re=he.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Re.__webglTexture,q)}_=-1},this.readRenderTargetPixels=function(C,O,q,j,k,pe,Te,Ue=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){te.bindFramebuffer(D.FRAMEBUFFER,Re);try{const We=C.textures[Ue],Ye=We.format,He=We.type;if(!ee.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-j&&q>=0&&q<=C.height-k&&(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ue),D.readPixels(O,q,j,k,ke.convert(Ye),ke.convert(He),pe))}finally{const We=A!==null?he.get(A).__webglFramebuffer:null;te.bindFramebuffer(D.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,O,q,j,k,pe,Te,Ue=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(O>=0&&O<=C.width-j&&q>=0&&q<=C.height-k){te.bindFramebuffer(D.FRAMEBUFFER,Re);const We=C.textures[Ue],Ye=We.format,He=We.type;if(!ee.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,nt),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ue),D.readPixels(O,q,j,k,ke.convert(Ye),ke.convert(He),0);const ct=A!==null?he.get(A).__webglFramebuffer:null;te.bindFramebuffer(D.FRAMEBUFFER,ct);const yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sf(D,yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(nt),D.deleteSync(yt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,O=null,q=0){const j=Math.pow(2,-q),k=Math.floor(C.image.width*j),pe=Math.floor(C.image.height*j),Te=O!==null?O.x:0,Ue=O!==null?O.y:0;ve.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Te,Ue,k,pe),te.unbindTexture()};const ad=D.createFramebuffer(),ld=D.createFramebuffer();this.copyTextureToTexture=function(C,O,q=null,j=null,k=0,pe=null){pe===null&&(k!==0?(sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=k,k=0):pe=0);let Te,Ue,Re,We,Ye,He,nt,ct,yt;const pt=C.isCompressedTexture?C.mipmaps[pe]:C.image;if(q!==null)Te=q.max.x-q.min.x,Ue=q.max.y-q.min.y,Re=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,Ye=q.min.y,He=q.isBox3?q.min.z:0;else{const ln=Math.pow(2,-k);Te=Math.floor(pt.width*ln),Ue=Math.floor(pt.height*ln),C.isDataArrayTexture?Re=pt.depth:C.isData3DTexture?Re=Math.floor(pt.depth*ln):Re=1,We=0,Ye=0,He=0}j!==null?(nt=j.x,ct=j.y,yt=j.z):(nt=0,ct=0,yt=0);const dt=ke.convert(O.format),Ve=ke.convert(O.type);let vt;O.isData3DTexture?(ve.setTexture3D(O,0),vt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ve.setTexture2DArray(O,0),vt=D.TEXTURE_2D_ARRAY):(ve.setTexture2D(O,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const ot=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fi=D.getParameter(D.UNPACK_SKIP_PIXELS),Qt=D.getParameter(D.UNPACK_SKIP_ROWS),Cs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const xt=C.isDataArrayTexture||C.isData3DTexture,an=O.isDataArrayTexture||O.isData3DTexture;if(C.isDepthTexture){const ln=he.get(C),kt=he.get(O),jt=he.get(ln.__renderTarget),Co=he.get(kt.__renderTarget);te.bindFramebuffer(D.READ_FRAMEBUFFER,jt.__webglFramebuffer),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,Co.__webglFramebuffer);for(let gi=0;gi<Re;gi++)xt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,he.get(C).__webglTexture,k,He+gi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,he.get(O).__webglTexture,pe,yt+gi)),D.blitFramebuffer(We,Ye,Te,Ue,nt,ct,Te,Ue,D.DEPTH_BUFFER_BIT,D.NEAREST);te.bindFramebuffer(D.READ_FRAMEBUFFER,null),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||C.isRenderTargetTexture||he.has(C)){const ln=he.get(C),kt=he.get(O);te.bindFramebuffer(D.READ_FRAMEBUFFER,ad),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,ld);for(let jt=0;jt<Re;jt++)xt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,k,He+jt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,k),an?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kt.__webglTexture,pe,yt+jt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kt.__webglTexture,pe),k!==0?D.blitFramebuffer(We,Ye,Te,Ue,nt,ct,Te,Ue,D.COLOR_BUFFER_BIT,D.NEAREST):an?D.copyTexSubImage3D(vt,pe,nt,ct,yt+jt,We,Ye,Te,Ue):D.copyTexSubImage2D(vt,pe,nt,ct,We,Ye,Te,Ue);te.bindFramebuffer(D.READ_FRAMEBUFFER,null),te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else an?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(vt,pe,nt,ct,yt,Te,Ue,Re,dt,Ve,pt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,pe,nt,ct,yt,Te,Ue,Re,dt,pt.data):D.texSubImage3D(vt,pe,nt,ct,yt,Te,Ue,Re,dt,Ve,pt):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,nt,ct,Te,Ue,dt,Ve,pt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,nt,ct,pt.width,pt.height,dt,pt.data):D.texSubImage2D(D.TEXTURE_2D,pe,nt,ct,Te,Ue,dt,Ve,pt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Cs),pe===0&&O.generateMipmaps&&D.generateMipmap(vt),te.unbindTexture()},this.initRenderTarget=function(C){he.get(C).__webglFramebuffer===void 0&&ve.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ve.setTextureCube(C,0):C.isData3DTexture?ve.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ve.setTexture2DArray(C,0):ve.setTexture2D(C,0),te.unbindTexture()},this.resetState=function(){E=0,w=0,A=null,te.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const Os=new R;function hn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Os.copy(e),Os[n]=0,Os.normalize();const c=.5*o/(o+a),h=1-Os.angleTo(i)/l;return Math.sign(Os[t])===1?h*c:a/(o+a)+c+c*(1-h)}class Kl extends pn{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new R,c=new R,h=new R(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,g=d.length/6,x=new R,m=.5/o;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),u[y+0]=hn(x,c,"z","y",r,n),u[y+1]=1-hn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),u[y+0]=1-hn(x,c,"z","y",r,n),u[y+1]=1-hn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),u[y+0]=1-hn(x,c,"x","z",r,e),u[y+1]=hn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),u[y+0]=1-hn(x,c,"x","z",r,e),u[y+1]=1-hn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),u[y+0]=1-hn(x,c,"x","y",r,e),u[y+1]=1-hn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),u[y+0]=hn(x,c,"x","y",r,e),u[y+1]=1-hn(x,c,"y","x",r,t);break}}static fromJSON(e){return new Kl(e.width,e.height,e.depth,e.segments,e.radius)}}const Bs=St.clamp;function vs(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}class bx{constructor(e){this.anisotropy=e}cache=new Map;get(e,t=1){const n=`${e}:${t}`,s=this.cache.get(n);if(s)return s;const r=512,o=vs(t),a=document.createElement("canvas");a.width=a.height=r;const l=a.getContext("2d"),c=l.createImageData(r,r),h=new Uint8Array(r*r*4),d=new Uint8Array(r*r*4),f=Array.from({length:3},()=>({x:o(),y:o(),radius:.02+o()*.016})),u=Float32Array.from({length:289},()=>o()-.5);for(let M=0;M<r;M++)for(let v=0;v<r;v++){const S=v/r,E=M/r,w=o()-.5,A=(M*r+v)*4;let _=0,b=.5,P=100,I=100,F=100,N=.85;if(e==="oak"||e==="endgrain"){let X=E;for(const ue of f){const Me=(S-ue.x)*.6,ce=E-ue.y;X+=Math.exp(-(Me*Me+ce*ce)/.01)*Math.sin(ce*30)*.028}const G=e==="endgrain"?Math.hypot((S-.47)*1.2,E-.53)*210:X*370+Math.sin(S*16)*1.5+Math.sin(S*47+E*20)*.5,ae=Math.sin(G)*.035+Math.sin(G*3.8)*.012;_=ae+Math.sin(E*29+t)*.024+w*.028;for(const ue of f){const Me=Math.hypot((S-ue.x)*.52,E-ue.y);_-=Math.exp(-Me*Me/(ue.radius*ue.radius))*.3}P=83+_*130,I=53+_*105,F=32+_*75,b=.53+ae*.65+w*.035,N=.83+Math.abs(ae)*1.2}else if(e==="steel"||e==="iron"){const X=Math.sin(S*61+Math.sin(E*83)*3)*Math.sin(E*79+Math.cos(S*73)*4);_=w*.075+X*.012;const G=e==="steel"?148:46;P=G+_*95,I=G+5+_*105,F=G+8+_*110,b=.5+(e==="iron"?X*.045+w*.16:w*.025),N=e==="steel"?.52+w*.08:.83+X*.05}else if(e==="stone"){const X=S*16,G=E*16,ae=Math.floor(X),ue=Math.floor(G),Me=X-ae,ce=G-ue,_e=Me*Me*(3-2*Me),Ce=ce*ce*(3-2*ce),Be=St.lerp(u[ue*17+ae],u[ue*17+ae+1],_e),J=St.lerp(u[(ue+1)*17+ae],u[(ue+1)*17+ae+1],_e);_=w*.1+St.lerp(Be,J,Ce)*.14,P=107+_*100,I=90+_*90,F=73+_*75,b=.5+_*.6,N=.93}else _=Math.sin(S*140)*Math.sin(E*180)*.026+w*.08,P=64+_*60,I=33+_*55,F=23+_*45,b=.5+_,N=.88;c.data.set([Bs(P,0,255),Bs(I,0,255),Bs(F,0,255),255],A);const V=Bs(b*255,0,255),W=Bs(N*255,0,255);h.set([V,V,V,255],A),d.set([W,W,W,255],A)}if(l.putImageData(c,0,0),e==="steel"||e==="iron")for(let M=0;M<(e==="steel"?150:45);M++){const v=o()*r,S=o()*r;l.strokeStyle=`rgba(${M%3?"225,227,218":"16,23,28"},${.03+o()*.13})`,l.lineWidth=.35+o()*.6,l.beginPath(),l.moveTo(v,S),l.lineTo(v+6+o()*80,S+(o()-.5)*15),l.stroke()}const g=new Li(a);g.colorSpace=It;const x=new ps(h,r,r),m=new ps(d,r,r);for(const M of[g,x,m])M.wrapS=M.wrapT=hs,M.anisotropy=this.anisotropy,M.minFilter=Rn,M.magFilter=Kt,M.generateMipmaps=!0,M.needsUpdate=!0;const p=e==="iron"||e==="steel",y=new ht({map:g,bumpMap:x,roughnessMap:m,metalness:p?e==="steel"?.9:.72:0,roughness:e==="steel"?.64:.98,bumpScale:e==="stone"?.025:e==="iron"?.007:e==="steel"?.003:.012,envMapIntensity:e==="steel"?1.35:e==="iron"?.7:1});return this.cache.set(n,y),y}}function Ks(i,e,t,n=.025){return new Kl(i,e,t,1,Math.min(n,i/3,e/3,t/3))}function wx(){const i=[[0,.69,.44],[.04,.72,.45],[.12,.7,.43],[.18,.56,.35],[.25,.44,.29],[.34,.35,.25],[.43,.32,.24],[.51,.35,.255],[.6,.44,.3],[.67,.57,.35],[.73,.69,.37],[.8,.73,.38],[.85,.73,.38]],e=32,t=[],n=[],s=[];for(const[o,a,l]of i){const c=Math.min(.09,l*.35);for(let h=0;h<e;h++){const d=Math.floor(h/8),f=d*Math.PI/2+h%8/7*Math.PI/2,u=d===0||d===3?a-c:-a+c,g=d<2?l-c:-l+c;t.push(u+Math.cos(f)*c,o,g+Math.sin(f)*c),n.push(h/e,o)}}for(let o=0;o<i.length-1;o++)for(let a=0;a<e;a++){const l=o*e+a,c=o*e+(a+1)%e;s.push(l,l+e,c,c,l+e,c+e)}const r=new mt;return r.setAttribute("position",new je(t,3)),r.setAttribute("uv",new je(n,2)),r.setIndex(s),r.computeVertexNormals(),r}function Ex(){const i=[[-.68,.76,.29,.16],[-.81,.765,.265,.15],[-.96,.78,.225,.125],[-1.14,.8,.175,.096],[-1.31,.825,.115,.065],[-1.48,.847,.055,.033],[-1.57,.86,.009,.009]],e=24,t=[],n=[],s=[];i.forEach(([o,a,l,c],h)=>{for(let d=0;d<e;d++){const f=d/e*Math.PI*2;t.push(o,a+Math.cos(f)*c,Math.sin(f)*l),n.push(h/6,d/e)}});for(let o=0;o<i.length-1;o++)for(let a=0;a<e;a++){const l=o*e+a,c=o*e+(a+1)%e;s.push(l,l+e,c,c,l+e,c+e)}const r=new mt;return r.setAttribute("position",new je(t,3)),r.setAttribute("uv",new je(n,2)),r.setIndex(s),r.computeVertexNormals(),r}function yh(i=.075,e=.855){const t=new dn;t.moveTo(-.79,-.34),t.lineTo(.79,-.34),t.quadraticCurveTo(.84,-.34,.84,-.29),t.lineTo(.84,.29),t.quadraticCurveTo(.84,.34,.79,.34),t.lineTo(-.79,.34),t.quadraticCurveTo(-.84,.34,-.84,.29),t.lineTo(-.84,-.29),t.quadraticCurveTo(-.84,-.34,-.79,-.34);const n=new or;n.moveTo(.56,.11),n.lineTo(.56,.23),n.lineTo(.68,.23),n.lineTo(.68,.11),n.closePath(),t.holes.push(n);const s=new or;s.absarc(.72,-.17,.035,0,Math.PI*2,!0),t.holes.push(s);const r=new fn(t,{depth:i,bevelEnabled:!0,bevelThickness:.012,bevelSize:.015,bevelSegments:3,curveSegments:12,steps:1});r.rotateX(-Math.PI/2),r.translate(0,e,0);const o=r.getAttribute("position"),a=r.getAttribute("uv");for(const l of r.groups)if(l.materialIndex===0)for(let c=l.start;c<l.start+l.count;c++)a.setXY(c,(o.getX(c)+.735)/1.69,(o.getZ(c)+.355)/.71);return r}function Tx(){const i=new dn;i.moveTo(-.43,-.15),i.lineTo(-.38,.18),i.lineTo(-.3,.22),i.lineTo(.32,.2),i.lineTo(.41,.14),i.lineTo(.39,-.16),i.lineTo(.3,-.21),i.lineTo(-.34,-.21),i.closePath();const e=new fn(i,{depth:.34,bevelEnabled:!0,bevelSize:.022,bevelThickness:.022,bevelSegments:3,steps:1});e.translate(0,0,-.17);const t=e.getAttribute("position"),n=e.getAttribute("uv");for(const s of e.groups)if(s.materialIndex===0)for(let r=s.start;r<s.start+s.count;r++)n.setXY(r,(t.getX(r)+.46)/.92,(t.getY(r)+.24)/.5);return e.computeVertexNormals(),e}const Sh=new Map;let so=null;function bh(i){so=i}function wh(i){const e=Sh.get(i);if(e)return e;const t=512,n=vs({steel:983,honed:431,brass:722,oxide:863,leather:411}[i]),s=document.createElement("canvas");s.width=s.height=t;const r=s.getContext("2d"),o=r.createImageData(t,t),a=new Float32Array(t*t),l=new Float32Array(t*t),c=Array.from({length:t},()=>n()-.5),h=i==="leather";for(let p=0;p<t;p++)for(let y=0;y<t;y++){const M=p*t+y,v=n()-.5,S=Math.sin(y*.023+p*.013)*Math.sin(p*.032-y*.007),E=c[p]*.7+c[(p+1)%t]*.3;a[M]=h?v*.38+Math.sin(y*.2+Math.sin(p*.035))*Math.sin(p*.17)*.18:E*(i==="honed"?.055:.15)*(1+Math.sin(y*.012+p*.014)*.15)+v*.014,l[M]=S*.055+E*.045}for(let p=0;p<(h?80:i==="honed"?95:290);p++){const y=Math.floor(n()*(t-45)),M=Math.floor(n()*t),v=12+Math.floor(n()*80),S=.07+n()*.08;for(let E=y;E<Math.min(t,y+v);E++){const w=Math.sin((E-y)/v*Math.PI),A=M*t+E;a[A]-=S*w,l[A]+=S*w}}const d=new Uint8Array(t*t*4),f=new Uint8Array(t*t*4);for(let p=0;p<t;p++)for(let y=0;y<t;y++){const M=p*t+y,v=M*4,S=n()-.5,E=h?176+S*25+a[M]*26:i==="oxide"?228+l[M]*14:249+S*2+l[M]*8;o.data.set([E,E,E,255],v);const w=a[p*t+(y+1)%t]-a[p*t+(y+t-1)%t],A=a[(p+1)%t*t+y]-a[(p+t-1)%t*t+y],_=-w*(h?2.2:1.3),b=-A*(h?2.2:1.3),P=Math.hypot(_,b,1);d.set([(_/P*.5+.5)*255,(b/P*.5+.5)*255,(.5/P+.5)*255,255],v);const I=St.clamp((h?.91:i==="oxide"?.93:.86)+l[M]+S*.025,0,1)*255;f.set([I,I,I,255],v)}r.putImageData(o,0,0);const u=new Li(s);u.colorSpace=It;const g=new ps(d,t,t),x=new ps(f,t,t);for(const p of[u,g,x])p.wrapS=p.wrapT=hs,p.minFilter=Rn,p.magFilter=Kt,p.generateMipmaps=!0,p.anisotropy=4,p.needsUpdate=!0;const m={map:u,normal:g,rough:x};return Sh.set(i,m),m}function Jl(i){const e=(f,u,g="steel")=>{const x=wh(g);return new Ri({color:f,map:x.map,normalMap:x.normal,normalScale:new ie(g==="steel"||g==="honed"?.018:.15,g==="steel"||g==="honed"?.018:.15),roughnessMap:x.rough,roughness:u,metalness:1,envMap:so,envMapIntensity:g==="steel"||g==="honed"?1.65:1.25,anisotropy:g==="steel"||g==="honed"?.08:.22,anisotropyRotation:0})},t=e(i==="meteor"?12700112:i==="dragon"?13357268:13817303,.07),n=e(14278112,.038,"honed"),s=e(i==="meteor"?16049325:16702621,.12,"brass"),r=e(i==="genesis"?7634052:8884894,.13,"oxide");r.metalness=1,r.normalScale.set(.035,.035),r.anisotropy=.08;const o=wh("leather"),a=new ht({color:i==="meteor"?3157291:5849390,map:o.map,normalMap:o.normal,normalScale:new ie(.65,.65),roughnessMap:o.rough,roughness:.89}),l=a.clone();l.color.multiplyScalar(.62);const c=i==="tyrant"?10354530:i==="runic"||i==="tempest"?9298943:i==="leviathan"?6934527:i==="dragon"?7710618:i==="meteor"?6790343:14134868,h=new Ri({color:c,metalness:0,roughness:.12,ior:1.65,clearcoat:.5,clearcoatRoughness:.12,envMap:so,envMapIntensity:1,emissive:c,emissiveIntensity:.035}),d=new ht({color:c,metalness:.8,roughness:.32,envMap:so,envMapIntensity:1,emissive:c,emissiveIntensity:.035});for(const[f,u,g]of[[t,1,.985],[n,.85,.7],[s,.2,.91],[r,.7,.99],[a,0,.98],[l,0,.98]])f.userData.forgeHeat=u,f.userData.cosmosCoverage=g;return{body:t,edge:n,trim:s,dark:r,grip:a,wrap:l,gem:h,inlay:d}}class Ax extends Bl{constructor(){super();const e=new pn;e.deleteAttribute("uv");const t=new ht({side:Xt}),n=new ht,s=new no(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Oe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new to(e,n,6),a=new At;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Oe(e,Qi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Oe(e,Qi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Oe(e,Qi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const d=new Oe(e,Qi(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const f=new Oe(e,Qi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const u=new Oe(e,Qi(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Qi(i){return new Rp({color:0,emissive:16777215,emissiveIntensity:i})}function Cx(i){const e=new Bl;e.background=new Ge(2435115);const t=document.createElement("canvas");t.width=t.height=64;const n=t.getContext("2d"),s=n.createImageData(64,64);for(let c=0;c<64;c++)for(let h=0;h<64;h++){const d=(h-31.5)/31.5,f=(c-31.5)/31.5,u=125+130*Math.exp(-d*d*.9-f*f*1.7);s.data.set([u,u,u,255],(c*64+h)*4)}n.putImageData(s,0,0);const r=new Li(t);r.colorSpace=It;const o=(c,h,d,f,u,g=!1)=>{const x=new tn({color:new Ge(d).multiplyScalar(f),map:g?r:null,side:Cn,toneMapped:!1}),m=new Oe(new Es(c,h),x);m.position.copy(u),m.lookAt(0,0,0),e.add(m)};o(6.4,3.2,15922943,3.4,new R(-.5,2.2,-3.8),!0),o(4.8,2.5,14937599,1.6,new R(1,4,1.8),!0),o(1.2,2.2,16757347,1.35,new R(-4.2,1.1,.8)),o(5.4,2.8,2826522,.85,new R(0,-2.2,1.5)),o(5.4,2,1513756,1,new R(.2,.2,4));for(const c of[-2.3,2.6])o(.24,4,1053720,1,new R(c,1.3,-3.7));const a=new po(i),l=a.fromScene(e,.025,.1,20);return a.dispose(),r.dispose(),e.traverse(c=>{c instanceof Oe&&(c.geometry.dispose(),c.material.dispose())}),l}function yo(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new mt;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(t){let h=0;const d=[];for(let f=0;f<i.length;++f){const u=i[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Eh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);const g=Eh(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Eh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Jt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<t;g++){const x=h.getComponent(f,g);a.setComponent(f+d,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const Th=St.clamp;function mo(i,e){const t=Float32Array.from({length:(e+1)**2},()=>i());return(n,s)=>{const r=n*e,o=s*e,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=c*c*(3-2*c),f=h*h*(3-2*h),u=e+1;return St.lerp(St.lerp(t[l*u+a],t[l*u+a+1],d),St.lerp(t[(l+1)*u+a],t[(l+1)*u+a+1],d),f)}}function Ou(i,e,t,n,s,r){const o=n.getContext("2d").getImageData(0,0,i,i).data,a=new Uint8Array(i*i*4);for(let d=0;d<i;d++)for(let f=0;f<i;f++){const u=(d*i+f)*4,g=(o[(d*i+Math.min(i-1,f+1))*4]-o[(d*i+Math.max(0,f-1))*4])/255*r,x=(o[(Math.min(i-1,d+1)*i+f)*4]-o[(Math.max(0,d-1)*i+f)*4])/255*r,m=Math.hypot(g,x,1);a.set([(1-g/m)*127.5,(1+x/m)*127.5,(1+1/m)*127.5,255],u)}const l=new Li(t);l.colorSpace=It;const c=new ps(a,i,i),h=new Li(s);for(const d of[l,c,h])d.wrapS=d.wrapT=hs,d.anisotropy=e,d.minFilter=Rn,d.magFilter=Kt,d.generateMipmaps=!0,d.needsUpdate=!0;return{map:l,normalMap:c,roughnessMap:h}}function os(i){const e=document.createElement("canvas");return e.width=e.height=i,e}function ua(i,e,t){const n=i==="face"?1024:512,s=vs(t),r=os(n),o=os(n),a=os(n),l=[r,o,a].map(m=>m.getContext("2d")),c=l.map(m=>m.createImageData(n,n)),h=mo(s,7),d=mo(s,39),f=i==="casting";for(let m=0;m<n;m++)for(let p=0;p<n;p++){const y=p/n,M=m/n,v=(m*n+p)*4,S=h(y,M),E=d(y,M),w=s()-.5,A=Math.min(y,1-y,M,1-M),b=(i==="face"?Math.exp(-((y-.52)**2/.18+(M-.51)**2/.035)):0)*(.5+S*.5),P=Th((S-.42)*2+(A<.055?.2:0)-b*.28,0,1),F=(f?33:i==="hammer"?66:83)+S*(f?15:14)+E*9+b*24+w*5;c[0].data.set([F+P*5,F+2-P*2,F+4-P*6,255],v);const N=126+(E-.5)*(f?23:9)+w*(f?16:5);c[1].data.set([N,N,N,255],v);const V=Th((f?.83:.63)+P*.18-b*.29+(E-.5)*.13,.28,.96)*255;c[2].data.set([V,V,V,255],v)}l.forEach((m,p)=>m.putImageData(c[p],0,0));const[u,g,x]=l;for(let m=0;m<(f?180:100);m++){const p=s()*n,y=s()*n,M=(f?1.3:2)+s()*(f?4:10),v=u.createRadialGradient(p,y,0,p,y,M);v.addColorStop(0,"rgba(160,150,130,.04)"),v.addColorStop(.72,"rgba(20,18,15,.04)"),v.addColorStop(1,"rgba(20,18,15,0)"),u.fillStyle=v,u.fillRect(p-M,y-M,M*2,M*2),g.fillStyle="rgba(60,60,60,.09)",g.beginPath(),g.ellipse(p,y,M,M*.65,s()*Math.PI,0,Math.PI*2),g.fill()}for(let m=0;m<(i==="face"?390:95);m++){const p=s()*n,y=s()*n,M=8+s()*n*.15,v=(s()-.5)*n*.08,S=.6+s()*1.1;for(const[E,w]of[[u,"rgba(190,180,157,.20)"],[g,"rgba(45,45,45,.28)"],[x,"rgba(220,220,220,.22)"]])E.lineWidth=S,E.strokeStyle=w,E.beginPath(),E.moveTo(p,y),E.lineTo(p+M,y+v),E.stroke()}return new ht({...Ou(n,e,r,o,a,f?4:7),metalness:f?.78:.94,roughness:f?1:i==="hammer"?.72:.88,normalScale:new ie(.65,.65),envMapIntensity:f?.45:i==="hammer"?1.15:.95})}function Rx(i,e){const n=vs(e),s=mo(n,6),r=mo(n,35),o=os(512),a=os(512),l=os(512),c=[o,a,l].map(f=>f.getContext("2d")),h=c.map(f=>f.createImageData(512,512)),d={u:.2+n()*.6,v:.2+n()*.6};for(let f=0;f<512;f++)for(let u=0;u<512;u++){const g=u/512,x=f/512,m=(f*512+u)*4,p=Math.hypot((g-d.u)*.46,x-d.v),y=s(g,x),v=(x+Math.exp(-p*p/.025)*Math.sin((x-d.v)*14)*.065)*255+Math.sin(g*9)*2.2+y*5,S=Math.sin(v)*.035+Math.sin(v*3.7+r(g,x)*2)*.018,E=Math.exp(-p*p/6e-4),w=n()-.5,A=S+(y-.5)*.13-E*.32,_=Math.min(x,1-x),b=Math.exp(-((g-.55)**2/.13+(x-.48)**2/.06))*.18,P=55+A*90-b*30-(_<.018?9:0);h[0].data.set([P,35+A*65-b*22,22+A*45-b*14,255],m);const I=128+S*120+w*6-E*12;h[1].data.set([I,I,I,255],m);const F=(.82+Math.abs(S)*1.5+E*.1)*255;h[2].data.set([F,F,F,255],m)}c.forEach((f,u)=>f.putImageData(h[u],0,0));for(let f=0;f<35;f++){const u=n()*512,g=n()*512;c[0].strokeStyle="rgba(18,11,7,.23)",c[0].lineWidth=.4+n()*.6,c[0].beginPath(),c[0].moveTo(u,g),c[0].lineTo(u+12+n()*90,g+(n()-.5)*3),c[0].stroke()}return new ht({...Ou(512,i,o,a,l,4),roughness:1,metalness:0,normalScale:new ie(.45,.45)})}function Px(i){const e=ua("face",i,618),t=ua("casting",i,122),n=ua("hammer",i,94),s=n.clone();return s.color.set(9144706),s.envMapIntensity=.65,{face:e,casting:t,hammer:n,edge:s,wood:Array.from({length:5},(r,o)=>Rx(i,231+o*31))}}function Bu(i,e=.2,t=!1){const n=[],s=[],r=[],o=[-1,-(1-e),-.3,-.085,0,.085,.3,1-e,1],a=[],l=(h,d,f)=>{n.push(h,d,f),s.push(h/2.42,f/1.1+.5)};for(const h of i)for(const d of[1,-1])for(const f of o){const u=h.height??.095,g=h.center??0,x=f<0?h.left:h.right,m=Math.abs(f),p=1-e,y=m>=p?St.lerp(Math.min(.0016,u*.08),u*.61,(1-m)/(1-p)):m>.3?St.lerp(u*.61,u*.81,(p-m)/(p-.3)):m>.085?St.lerp(u*.81,u*(t?.62:.75),(.3-m)/.215):St.lerp(u*(t?.62:.75),u*(t?.6:1),(.085-m)/.085);l(h.x,d===1?y:-y*.38,g+f*x)}const c=o.length*2;for(let h=0;h<i.length-1;h++)for(const d of[0,1])for(let f=0;f<o.length-1;f++){const u=h*c+d*o.length+f,g=u+1,x=u+c,m=x+1,p=r.length;d===0?r.push(u,g,x,g,m,x):r.push(u,x,g,g,x,m),a.push({start:p,count:6,materialIndex:f===0||f===o.length-2?1:0,band:d*(o.length-1)+f})}for(let h=0;h<i.length-1;h++)for(const d of[0,o.length-1]){const f=h*c+d,u=f+c,g=f+o.length,x=u+o.length,m=r.length;d===0?r.push(f,u,g,u,x,g):r.push(f,g,u,u,g,x),a.push({start:m,count:6,materialIndex:1,band:2*(o.length-1)+(d===0?0:1)})}for(const h of[0,i.length-1])for(let d=0;d<o.length-1;d++){const f=h*c+d,u=f+1,g=f+o.length,x=g+1,m=r.length;h===0?r.push(f,g,u,u,g,x):r.push(f,u,g,u,x,g),a.push({start:m,count:6,materialIndex:0,band:2*o.length+(h===0?0:1)})}return zu(n,s,r,a)}function zu(i,e,t,n){const s=new mt,r=[],o=[],a=[],l=new Map;for(const c of[...new Set(n.map(h=>h.materialIndex))]){const h=a.length;for(const d of n)if(d.materialIndex===c)for(const f of t.slice(d.start,d.start+d.count)){const u=d.band+":"+f;let g=l.get(u);g===void 0&&(g=r.length/3,l.set(u,g),r.push(...i.slice(f*3,f*3+3)),o.push(...e.slice(f*2,f*2+2))),a.push(g)}s.addGroup(h,a.length-h,c)}return s.setAttribute("position",new je(r,3)),s.setAttribute("uv",new je(o,2)),s.setIndex(a),s.computeVertexNormals(),s.computeBoundingBox(),s}function ku(i,e=.055){const t=[],n=[],s=[],r=[],o=Math.sign(i[0][1]);i.forEach(([c,h],d)=>{const f=d===i.length-1,u=f?c-.1:c,g=f?0:h-o*e;for(const[x,m,p]of[[c,.0016,h],[u,f?.026:.104,g],[u,f?-.006:-.022,g]])t.push(x,m,p),s.push(x/2.42,p/1.1+.5)});for(let c=0;c<i.length-1;c++)for(let h=0;h<3;h++){const d=c*3+h,f=c*3+(h+1)%3,u=d+3,g=f+3,x=n.length;o<0?n.push(d,f,u,f,g,u):n.push(d,u,f,f,u,g),r.push({start:x,count:6,materialIndex:0,band:h})}const a=n.length,l=(i.length-1)*3;return o<0?n.push(0,2,1,l,l+1,l+2):n.push(0,1,2,l,l+2,l+1),r.push({start:a,count:3,materialIndex:0,band:3},{start:a+3,count:3,materialIndex:0,band:4}),zu(t,s,n,r)}function Hu(i,e=.055,t=.014){const n=new dn;i.forEach(([r,o],a)=>a?n.lineTo(r,-o):n.moveTo(r,-o)),n.closePath();const s=new fn(n,{depth:e,bevelEnabled:!0,bevelSize:t,bevelThickness:t*.6,bevelSegments:3,curveSegments:16});return s.rotateX(-Math.PI/2),s}function vl(i,e,t=.085,n=.016){const s=new dn;i.forEach(([o,a],l)=>l?s.lineTo(o,-a):s.moveTo(o,-a)),s.closePath();for(const o of e){const a=new or;o.forEach(([l,c],h)=>h?a.lineTo(l,-c):a.moveTo(l,-c)),a.closePath(),s.holes.push(a)}const r=new fn(s,{depth:t,bevelEnabled:!0,bevelSize:n,bevelThickness:n*.6,bevelSegments:3,curveSegments:16});return r.rotateX(-Math.PI/2),r}function Zl(i,e=.009){const t=new rr(i.map(n=>new R(...n)));return new gs(t,Math.min(144,Math.max(12,i.length*7)),e,5,!1)}function Lx(i,e=0,t){const n=new tt,s=t||Jl(i),r=new tt;n.name="evolving-sword",n.userData.theme=i,s.body.color.set(i==="leviathan"?13358811:14081248),s.body.roughness=.065,s.body.envMapIntensity=.9,s.edge.color.set(15265521),s.edge.roughness=.032,s.edge.envMapIntensity=1.15,s.trim.envMapIntensity=.8,s.dark.color.set(1516330),s.grip.color.set(1646369),s.wrap.color.set(4209450);const o=i==="tyrant"?2686754:2341631;s.gem.color.set(o),s.gem.emissive.set(o),s.gem.emissiveIntensity=1.35,s.gem.roughness=.055,s.inlay.color.set(o),s.inlay.emissive.set(o),s.inlay.metalness=.2,s.inlay.roughness=.16,s.inlay.emissiveIntensity=1.7,s.inlay.userData.forgeHeat=0,s.gem.userData.forgeHeat=0;const a=s.inlay.clone();a.name="reference-aura",a.emissiveIntensity=1.9,a.transparent=!0,a.opacity=.78,a.depthWrite=!1;const l={rings:[],wisps:[],glow:a,intensity:a.emissiveIntensity};r.name="reference-magic",n.add(r);const c=(v,S,E=0,w=0,A=0,_="blade",b=n)=>{const P=new Oe(v,S);return P.position.set(E,w,A),P.name=_,P.castShadow=b!==r,P.receiveShadow=b!==r,b.add(P),P},h=(v,S,E=.02,w="blade-detail",A=.06,_=.012)=>c(Hu(v,A,_),S,0,E,0,w),d=(v,S=s.trim,E=.007,w="blade-inlay",A=n)=>c(Zl(v,E),S,0,0,0,w,A),f=(v,S,E,w=.09)=>{const A=c(new In(w,0),s.gem,v,S,E,"blade-gem");return A.scale.y=.8,A},u=(v,S,E,w=s.trim,A=n)=>{const _=c(new sn(E,.014,6,64),w,v,.13,S,"blade-orbit",A);return _.rotation.x=Math.PI/2,_},g=v=>c(Bu(v,.22),[s.body,s.edge]),x=(v,S=.115,E=s.trim,w=.006)=>d(v.map(([A,_])=>[A,S,_]),E,w),m=v=>{for(const S of[-1,1])h([[-.13,S*.06],[-.2,S*.19],[-.3,S*v],[-.08,S*(v-.04)],[.055,S*.23],[.07,S*.11]],s.body,-.04,"guard",.12,.015),x([[-.13,S*.1],[-.27,S*(v-.025)],[-.08,S*(v-.065)],[.025,S*.21]],.107)},p=(v,S,E=.11)=>{d([[v-E/2,.121,S],[v+E/2,.121,S]],s.inlay,.005,"blade-rune");for(const[w,A]of[[-.03,1],[.023,-1]])d([[v+w-.022,.122,S+A*.029],[v+w,.122,S],[v+w+.022,.122,S+A*.025]],s.inlay,.004,"blade-rune")};if(i==="runic"){const v=[[.06,-.19],[.38,-.38],[.73,-.34],[1.8,-.25],[2.42,0],[1.8,.25],[.73,.34],[.38,.38],[.06,.19]],S=[[.33,-.038],[.67,-.105],[1.76,-.09],[2.18,0],[1.76,.09],[.67,.105],[.33,.038]],E=v.map(([_,b])=>[b===0?_-.1:_,b-Math.sign(b)*.047]);c(vl(E,[S],.085,.01),s.body,0,.018,0);for(const _ of[-1,1]){const b=[[.06,_*.19],[.38,_*.38],[.73,_*.34],[1.8,_*.25],[2.42,0]];c(ku(b,.047),s.edge,0,.005,0,"blade-edge"),x(b.slice(0,-1),.112,s.trim,.004),d([[.36,.126,_*.17],[.73,.127,_*.22],[1.65,.12,_*.17]],s.inlay,.005);for(let P=0;P<6+Math.min(e,5);P++)p(.52+P*.15,_*(.225-P*.007),.09)}m(.51),f(-.01,.13,0,.095),f(.57,.155,0,.115),u(.54,0,.28,s.edge);const w=u(.54,0,.26,a,r);l.rings.push(w);const A=u(.54,0,.3,s.trim);A.rotation.z=.25}else if(i==="tyrant"){g([{x:0,left:.29,right:.29},{x:.16,left:.46,right:.46},{x:1.97,left:.46,right:.46},{x:2.2,left:.32,right:.32},{x:2.42,left:.001,right:.001,height:.004}]),h([[.21,-.125],[1.99,-.125],[2.18,0],[1.99,.125],[.21,.125]],s.dark,.087,"blade-fuller",.006,.003);for(const v of[-1,1]){d([[.18,.122,v*.34],[1.95,.122,v*.34],[2.25,.06,v*.12]],s.inlay,.009),x([[.15,v*.44],[1.97,v*.44],[2.38,0]],.038,s.trim,.005);for(let w=0;w<9;w++){const A=.28+w*.185;h([[A-.06,v*.13],[A-.075,v*.22],[A-.01,v*.28],[A+.065,v*.22],[A+.055,v*.13]],w%2?s.body:s.edge,.111,"blade-tooth",.055,.005),h([[A-.08,v*.455],[A+.07,v*.48],[A+.14,v*.64],[A+.13,v*.45]],s.edge,0,"blade-spine-tooth",.06,.006)}for(let w=0;w<2;w++){const A=.28+w*.2;h([[A-.12,v*.42],[A-.08,v*.82],[A+.25,v*.49],[A+.1,v*.43]],s.trim,.03,"blade-basal-spike",.045,.006)}const S=[];for(let w=0;w<=36;w++){const A=.06+w/36*2.32;S.push([A,.22,v*(.67+Math.sin(w/36*Math.PI*5)*.035)])}const E=d(S,a,.009,"blade-green-wisp",r);l.wisps.push(E)}h([[-.16,-.6],[-.1,-.6],[-.055,.6],[-.12,.6]],s.trim,-.03,"guard",.12,.012),f(.025,.2,0,.15)}else if(i==="leviathan"){const v=[];for(let S=0;S<=32;S++){const E=S/32,w=E*2.42,A=E<.83?.3+.28*Math.sin(E*Math.PI*.84):.001+.42*(1-E)/.17;v.push({x:w,left:Math.max(.001,A),right:Math.max(.001,A*.64),center:.13*Math.sin(E*Math.PI*.76),height:S===32?.004:.098})}g(v),h([[.1,-.19],[.54,-.16],[1.25,-.26],[1.9,-.33],[2.28,-.1],[1.91,-.4],[1.23,-.34],[.54,-.28],[.1,-.29]],s.dark,.086,"blade-spine",.009,.003);for(let S=0;S<4;S++){const E=.24+S*.41,w=-(.35+.04*S),A=[[E-.085,w],[E-.1,w-.09],[E-.05,w-.21],[E+.015,w-.27],[E+.008,w-.14],[E+.15,w+.035],[E+.05,w+.04]];h(A,s.edge,-.012,"blade-horn",.072,.009),x(A.slice(0,5),.064,s.trim,.004)}d([[.13,.13,-.15],[.5,.13,-.13],[1.05,.135,-.19],[1.62,.13,-.23],[2.15,.1,-.04]],s.inlay,.004);for(let S=0;S<5;S++){const E=.45+S*.28;d([[E,.137,-.16],[E+.045,.139,-.12],[E+.075,.137,-.14],[E+.1,.139,-.07]],a,.003,"blade-lightning",r)}h([[-.13,-.4],[-.05,-.37],[.08,-.22],[.08,.26],[-.035,.47],[-.16,.49],[-.07,.35],[-.05,.13]],s.edge,-.04,"guard",.09,.014),x([[-.12,-.36],[.03,-.2],[.03,.25],[-.09,.43]],.064),f(.035,.14,0,.075)}else{g([{x:.88,left:.13,right:.13},{x:1.03,left:.28,right:.28},{x:1.19,left:.21,right:.21},{x:1.91,left:.16,right:.16},{x:2.42,left:.001,right:.001,height:.004}]);const v=[],S=[];for(let A=0;A<8;A++){const _=A/8*Math.PI*2;v.push([.48+Math.cos(_)*.64,Math.sin(_)*.57]),S.unshift([.48+Math.cos(_)*.49,Math.sin(_)*.43])}c(vl(v,[S],.11,.015),s.dark,0,-.005,0),x([...v,v[0]],.128,s.trim,.012),x([...S,S[0]],.126,s.edge,.008);const E=[];for(let A=0;A<=64;A++){const _=A/64*Math.PI*2;E.push([.48+Math.cos(_)*.435,.17,Math.sin(_)*.37])}const w=d(E,a,.006,"blade-electric-ring",r);l.rings.push(w),f(.48,.14,0,.15),d([[.48,.18,0],[.49,.18,-.045],[.53,.18,-.07],[.5,.18,-.1],[.55,.18,-.19],[.52,.18,-.23],[.58,.18,-.32]],a,.009,"blade-lightning",r),d([[.48,.18,0],[.41,.18,.06],[.46,.18,.12],[.35,.18,.18],[.39,.18,.25],[.3,.18,.32]],a,.007,"blade-lightning",r);for(const A of[-1,1]){h([[-.13,A*.12],[-.24,A*.32],[-.21,A*.46],[-.05,A*.43],[.03,A*.22]],s.trim,-.01,"guard",.095,.013),d([[1.15,.115,A*.105],[1.78,.105,A*.082],[2.19,.065,A*.03]],s.inlay,.005);for(let _=0;_<4+Math.min(e,7);_++)p(1.2+_*.085,A*.085,.055)}}const y=c(new En(.07,.078,.55,24),s.grip,-.41,.025,0,"grip");y.rotation.z=Math.PI/2;for(let v=0;v<11;v++){const S=c(new sn(.077,.006,5,20),s.trim,-.16-v*.05,.025,0,"grip-band");S.rotation.y=Math.PI/2}for(const v of[-.12,-.7]){const S=c(new En(.091,.091,.03,16),s.trim,v,.025,0,"grip-collar");S.rotation.z=Math.PI/2}c(new In(.117,0),s.edge,-.79,.025,0,"pommel").scale.set(1.2,.85,1),i!=="leviathan"&&f(-.79,.1,0,.058);for(let v=0;v<Math.min(e,12);v++){const S=.28+v*.13;h([[S-.022,-.02],[S,-.037],[S+.022,-.02],[S,0]],s.trim,.12,"blade-progression-seal",.009,.003)}for(const v of l.rings)v.userData.restY=v.position.y;return n.userData.materials=s,n.userData.referenceFx=l,Dx(n),n}function Dx(i){i.updateMatrixWorld(!0);const e=new Map;for(const t of i.children)if(t instanceof Oe&&!Array.isArray(t.material)&&!t.material.transparent){const n=e.get(t.material)||[];n.push(t),e.set(t.material,n)}for(const[t,n]of e){if(n.length<2)continue;const s=n.map(a=>(a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone()).applyMatrix4(a.matrix)),r=yo(s,!1);if(s.forEach(a=>a.dispose()),!r)continue;n.forEach(a=>{i.remove(a),a.geometry.dispose()});const o=new Oe(r,t);o.name="blade-metal",o.castShadow=!0,o.receiveShadow=!0,i.add(o)}}function Ix(i,e,t,n=!1){const s=i.userData.referenceFx;if(!s)return;const r=n?0:e;s.glow.emissiveIntensity=s.intensity*(t?.55:1)*(.92+.08*Math.sin(r*3.1)),s.wisps.forEach((o,a)=>{o.position.z=Math.sin(r*1.4+a*Math.PI)*.016,o.position.y=Math.sin(r*1.7+a)*.013}),s.rings.forEach((o,a)=>{o.position.y=o.userData.restY+Math.sin(r*1.3+a)*.012})}function Ux(i,e=0,t=0,n){if(i==="runic"||i==="tyrant"||i==="leviathan"||i==="tempest")return Lx(i,e,n);const s=new tt,r=n||Jl(i);s.name="evolving-sword",s.userData.theme=i;const o=(m,p,y=0,M=0,v=0,S="fitting")=>{const E=new Oe(m,p);return E.position.set(y,M,v),E.castShadow=!0,E.receiveShadow=!0,E.name=S,s.add(E),E},a=(m,p,y=.03,M="fitting",v=.055,S=.014)=>o(Hu(m,v,S),p,0,y,0,M),l=(m,p=r.trim,y=.009,M="blade-inlay")=>o(Zl(m,y),p,0,0,0,M),c=(m,p,y,M,v=r.gem)=>{const S=o(new In(M,1),v,m,p,y,"blade-jewel");return S.scale.set(1,.44,1),S},h=m=>o(Bu(m,.2,i!=="genesis"),[r.body,r.edge],0,0,0,"blade"),d=e;if(i==="dragon"){h([{x:0,left:.27,right:.28},{x:.13,left:.39,right:.37},{x:.31,left:.4,right:.34},{x:.55,left:.34,right:.31},{x:.77,left:.36,right:.31},{x:1,left:.29,right:.3},{x:1.22,left:.31,right:.29},{x:1.48,left:.27,right:.3},{x:1.74,left:.28,right:.31},{x:1.94,left:.26,right:.31},{x:2.15,left:.18,right:.24,center:.035},{x:2.42,left:6e-4,right:6e-4,center:.13,height:.004}]),a([[.09,-.09],[.48,-.052],[1.66,-.042],[2.06,.015],[1.64,.042],[.48,.052],[.09,.09]],r.dark,.058,"blade-fuller",.008,.003);for(const m of[-1,1])l([[.16,.086,m*.1],[.59,.082,m*.07],[1.48,.078,m*.056],[2.05,.065,.012]],r.trim,.005),a([[-.11,m*.06],[-.3,m*.17],[-.36,m*.31],[-.3,m*.51],[-.1,m*.63],[.07,m*.57],[-.04,m*.47],[-.11,m*.31],[.07,m*.13]],r.trim,-.014,"guard",.1,.022),a([[-.13,m*.16],[-.25,m*.29],[-.2,m*.46],[-.07,m*.47],[-.14,m*.32]],r.dark,.082,"guard-inset",.012,.006),l([[-.14,.119,m*.19],[-.28,.118,m*.31],[-.21,.12,m*.48],[-.08,.117,m*.52]],r.edge,.012,"guard-engraving");for(let m=0;m<4+Math.min(d,6);m++){const p=.32+m*.14;a([[p-.08,0],[p-.01,-.051],[p+.081,0],[p-.01,.051]],m%2?r.trim:r.edge,.068,"blade-scale",.008,.003)}c(.07,.157,0,.09),da(s,r,o,i,d)}else if(i==="meteor"){h([{x:0,left:.23,right:.23},{x:.17,left:.42,right:.42},{x:.43,left:.34,right:.34},{x:.57,left:.41,right:.41},{x:.71,left:.32,right:.32},{x:1.55,left:.26,right:.26},{x:1.97,left:.23,right:.23},{x:2.42,left:6e-4,right:6e-4,height:.004}]),a([[.3,-.073],[1.79,-.036],[2.2,0],[1.79,.036],[.3,.073]],r.dark,.058,"blade-fuller",.008,.003);for(const p of[-1,1])a([[.13,p*.25],[.39,p*.3],[.52,p*.34],[.59,p*.18],[.23,p*.13]],r.trim,.074,"blade-shoulder",.011,.006),l([[.39,.084,p*.089],[1.02,.08,p*.065],[1.77,.077,p*.043],[2.2,.036,0]],r.inlay,.005),a([[-.12,p*.11],[-.3,p*.3],[-.28,p*.49],[-.05,p*.64],[.15,p*.57],[.03,p*.43],[-.08,p*.44],[-.16,p*.32],[.02,p*.14]],r.edge,-.01,"guard",.1,.017),l([[-.11,.13,p*.16],[-.23,.13,p*.31],[-.2,.13,p*.46],[-.04,.13,p*.56],[.08,.13,p*.51]],r.trim,.019,"guard-orbit");const m=o(new sn(.149,.027,7,40),r.trim,.11,.133,0,"blade-core-setting");m.rotation.x=Math.PI/2,c(.11,.142,0,.14);for(let p=0;p<3+Math.min(d,5);p++){const y=.48+p*.19;a([[y-.04,0],[y,-.026],[y+.04,0],[y,.026]],r.inlay,.068,"blade-star-seal",.008,.003);for(const M of[-1,1])l([[y-.04,.082,M*.11],[y,.088,M*.14],[y+.04,.083,M*.11]],r.trim,.004)}da(s,r,o,i,d)}else{const p=[[[0,-.27],[.21,-.44],[.57,-.36],[1.72,-.33],[2.12,-.21]],[[0,-.28],[.18,-.44],[.42,-.4],[.75,-.28],[1.34,-.31],[1.7,-.43],[2.1,-.28]],[[0,-.24],[.2,-.4],[.38,-.33],[.57,-.43],[.73,-.34],[1.04,-.3],[1.22,-.39],[1.44,-.27],[1.74,-.28],[2.08,-.17]],[[0,-.32],[.23,-.46],[.51,-.3],[.76,-.33],[1.05,-.44],[1.43,-.36],[1.77,-.31],[2.1,-.25]],[[0,-.3],[.16,-.45],[.39,-.34],[.57,-.25],[.84,-.29],[1.18,-.44],[1.51,-.42],[1.75,-.32],[2.08,-.28]]][t],y=[...p,[2.42,0],...[...p].reverse().map(([w,A])=>[w,-A])],M=[[.43,-.1],[.73,-.115],[1.64,-.093],[1.99,0],[1.64,.093],[.73,.115],[.43,.1]],v=y.map(([w,A])=>[A===0?w-.12:w,A-Math.sign(A)*.052]);o(vl(v,[M],.086,.01),r.body,0,.003,0,"blade");for(const w of[-1,1])o(ku([...p.map(([A,_])=>[A,-w*_]),[2.42,0]]),r.edge,0,0,0,"blade-cutting-edge"),l([[.3,.119,w*.235],[.67,.123,w*.202],[1.57,.124,w*.185],[1.99,.099,w*.095]],r.trim,.011),a([[-.13,w*.1],[-.24,w*.22],[-.31,w*.58],[-.13,w*.67],[.03,w*.6],[.08,w*.44],[-.03,w*.49],[-.08,w*.25],[.14,w*.13]],r.trim,-.02,"guard",.12,.023),a([[-.18,w*.34],[-.24,w*.54],[-.14,w*.59],[-.075,w*.54]],r.dark,.098,"guard-inset",.012,.006);a([[-.11,-.16],[.15,-.19],[.33,-.1],[.39,0],[.33,.1],[.15,.19],[-.11,.16]],r.dark,.087,"blade-core-mount",.044,.013);const S=o(new sn(.132,.021,8,40),r.trim,.14,.152,0,"blade-core-setting");S.rotation.x=Math.PI/2,c(.14,.161,0,.124);const E=[.55,1.1,1.65,.825,1.375,.6875,.9625,1.2375,1.5125,.6187,.7562,.8937,1.0312,1.1687,1.3062,1.4437,1.5812];for(let w=0;w<3+Math.min(d,14);w++){const A=E[w];a([[A-.025,-.145],[A+.025,-.145],[A+.034,.145],[A-.034,.145]],r.trim,.054,"blade-bridge",.025,.007);for(const _ of[-1,1]){const b=o(new pn(.022,.006,.027),r.inlay,A,.113,_*.24,"blade-seal");b.rotation.y=Math.PI/4}}if(h([{x:1.72,left:.103,right:.103,height:.06},{x:2.11,left:.13,right:.13,height:.074},{x:2.42,left:6e-4,right:6e-4,height:.004}]),t>0)for(const w of[-1,1])a([[],[[-.2,.2],[-.39,.32],[-.42,.65],[-.32,.56],[-.26,.3]],[[-.13,.25],[-.29,.34],[-.2,.64],[-.04,.68],[-.11,.42]],[[-.17,.25],[-.35,.45],[-.2,.7],[-.09,.57],[.02,.68],[.06,.48]],[[-.12,.23],[-.29,.37],[-.24,.68],[-.11,.56],[.05,.63],[.13,.45]]][t].map(([_,b])=>[_,w*b]),t%2?r.edge:r.trim,.078,"guard-ascension",.04,.012);if(t>=2)for(const w of[-1,1])l([[.1,.155,w*.15],[.5,.134,w*.24],[1.06,.14,w*.26],[1.55,.14,w*.22]],r.inlay,.006);da(s,r,o,i,d)}const f=1+e*.0022;for(const m of s.children)m instanceof Oe&&(m.geometry.scale(1,1,f),m.position.z*=f);r.body.roughness=Math.max(.045,r.body.roughness-e*.001),r.trim.roughness=Math.max(.075,r.trim.roughness-e*.001),s.updateMatrixWorld(!0);const u=new R,g=new R,x=new Je;for(const m of s.children)if(m instanceof Oe&&m.material!==r.grip&&m.material!==r.wrap){if(m.geometry.index){const v=m.geometry;m.geometry=v.toNonIndexed(),v.dispose()}const p=m.geometry.getAttribute("position"),y=m.geometry.getAttribute("normal"),M=new Float32Array(p.count*2);x.getNormalMatrix(m.matrix);for(let v=0;v<p.count;v+=3){g.set(0,0,0);for(let E=0;E<3;E++)g.add(u.fromBufferAttribute(y,v+E));g.applyMatrix3(x);const S=Math.abs(g.y)>=Math.max(Math.abs(g.x),Math.abs(g.z))?"y":Math.abs(g.x)>Math.abs(g.z)?"x":"z";for(let E=0;E<3;E++)u.fromBufferAttribute(p,v+E).applyMatrix4(m.matrix),M[(v+E)*2]=S==="x"?u.y/1.1:u.x/2.42,M[(v+E)*2+1]=(S==="z"?u.y:u.z)/1.1+.5}m.geometry.setAttribute("uv",new Jt(M,2))}return s.userData.materials=r,s.userData.ascension=t,Nx(s),s}function Nx(i){const e=new Map;i.updateMatrixWorld(!0);for(const t of i.children){if(!(t instanceof Oe)||Array.isArray(t.material)||t.material.transparent)continue;const n=t.material.id+":"+(t.name.startsWith("blade")?"blade":"fitting"),s=e.get(n)||[];s.push(t),e.set(n,s)}for(const t of e.values()){if(t.length<2)continue;const n=t.map(o=>(o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrix)),s=yo(n,!1);if(n.forEach(o=>o.dispose()),!s)continue;const r=new Oe(s,t[0].material);r.name=t[0].name.startsWith("blade")?"blade-details":"fittings",r.castShadow=!0,r.receiveShadow=!0,t.forEach(o=>{i.remove(o),o.geometry.dispose()}),i.add(r)}}function da(i,e,t,n,s){const r=t(new En(.077,.084,.54,24),e.grip,-.4,.026,0,"grip");r.rotation.z=Math.PI/2;const o=[];for(let c=0;c<=108;c++){const h=c/108*Math.PI*18;o.push([-.14-c/108*.53,.026+Math.cos(h)*.081,Math.sin(h)*.081])}t(Zl(o,.006),e.wrap,0,0,0,"grip-wrap");for(const c of[-.12,-.68]){const h=t(new En(.095,.095,.045,24),e.trim,c,.026,0,"grip-collar");h.rotation.z=Math.PI/2}if(t(new Jn(1,24,16),e.trim,-.79,.026,0,"pommel").scale.set(.129,.1,.117),t(new In(.065,1),e.gem,-.79,.123,0,"pommel-gem").scale.set(1,.31,1),n==="genesis"){const c=t(new sn(.117,.014,6,32),e.edge,-.79,.026,0,"pommel-crown");c.rotation.x=Math.PI/2}for(let c=0;c<Math.min(s,9);c++){const h=t(Ks(.012,.01,.11,.003),e.trim,-.19-c*.049,.1,0,"grip-stitch");h.rotation.y=-.22}}function xl(i,e,t,n,s=!1,r){const o=Sn(e,t,s),a=new tt;if(o.theme!=="legacy"){const ce=Ux(o.theme,o.detail,o.ascension,r);return ce.userData.swordName=o.name,ce.userData.level=o.level,ce.userData.form=o.silhouette,ce}a.name="evolving-sword";const l=n==="bronze"?12491368:n==="cold"?11132133:12832727,c=o.crest>=5?15456176:o.crest>=2?13678459:11175504,h=new ht({color:c,metalness:.82,roughness:.31}),d=new ht({color:3423046,metalness:.76,roughness:.36}),f=new ht({color:l,metalness:.85,roughness:.27}),u=new ht({color:e==="great"?4598565:e==="short"?1583932:2636341,roughness:.8}),g=new ht({color:[4224906,3785883,6328298,10121439,15772752,15233152][o.crest%6],emissive:[863287,1203266,1847647,4203365,6898970,6299692][o.crest%6],emissiveIntensity:.35+.045*o.crest,metalness:.24,roughness:.2}),x=(ce,_e,Ce=0,Be=0,J=0,ne="fitting")=>{const z=new Oe(ce,_e);return z.position.set(Ce,Be,J),z.castShadow=!0,z.receiveShadow=!0,z.name=ne,a.add(z),z},m=(ce,_e,Ce,Be,J,ne,z,oe="fitting")=>x(new pn(Be,J,ne),z,ce,_e,Ce,oe),p=(ce,_e,Ce,Be,J,ne,z)=>{const oe=x(new Jn(1,12,8),z,ce,_e,Ce);return oe.scale.set(Be,J,ne),oe},y=2.42,v=(e==="great"?.37:e==="short"?.245:.29)*o.span,E=[[1,.99,1.03,1.03,.98,.91,.58],[1,1.17,1.14,.99,.92,.88,.57],[1,1.06,1.19,1.12,1,.93,.57],[1,1.24,1.1,1.04,1.14,.97,.62],[1,1.06,.94,1.17,1.13,1.01,.67],[1,1.15,1.04,1.22,1.07,1.04,.71]][Math.min(o.silhouette,5)],A=[0,.1,.25,.46,.66,.8,.92,1].map((ce,_e)=>({x:y*ce,w:_e===7?0:v*E[_e],centerY:.125+Math.min(o.level,40)*35e-5})),_=[],b=[],P=(ce,_e,Ce)=>{for(const Be of[ce,_e,Ce])_.push(Be[0],Be[1],Be[2]),b.push(Be[0]/y,Be[2]/(v*2)+.5)};for(let ce=0;ce<A.length-1;ce++){const _e=A[ce],Ce=A[ce+1],Be=le=>[le.x,0,-le.w],J=le=>[le.x,0,le.w],ne=le=>[le.x,le.centerY,0];P(Be(_e),ne(_e),Be(Ce)),P(ne(_e),ne(Ce),Be(Ce)),P(ne(_e),J(_e),ne(Ce)),P(J(_e),J(Ce),ne(Ce));const z=le=>[le.x,-.035,-le.w],oe=le=>[le.x,-.035,le.w],Q=le=>[le.x,-.057,0];P(z(_e),z(Ce),Q(_e)),P(Q(_e),z(Ce),Q(Ce)),P(Q(_e),Q(Ce),oe(_e)),P(oe(_e),Q(Ce),oe(Ce)),P(Be(_e),Be(Ce),z(_e)),P(z(_e),Be(Ce),z(Ce)),P(J(_e),oe(_e),J(Ce)),P(oe(_e),oe(Ce),J(Ce))}const I=new mt;if(I.setAttribute("position",new je(_,3)),I.setAttribute("uv",new je(b,2)),I.computeVertexNormals(),x(I,i,0,0,0,"blade"),o.level>=4){const ce=x(new pn(Math.min(1.25,.28+o.level*.026),.009,.018),d,.65,.131,0,"blade-detail");ce.rotation.y=(o.silhouette-2.5)*.012}if(o.level>=8){const ce=x(new pn(.3,.012,.025),h,1.38,.135,0,"blade-detail");ce.rotation.y=Math.PI/12}const F=o.runeCount;for(let ce=0;ce<F;ce++){const _e=.29+ce*.142,Ce=m(_e,.147,ce%2?-.045:.045,.035,.012,.034,ce%3===0?h:f,"blade-rune");Ce.rotation.y=Math.PI/4}if(o.crest>0){const ce=Math.min(o.crest,8);for(let _e=0;_e<ce;_e++){const Ce=.34+_e*.18,Be=x(new In(.029+_e%3*.006,0),g,Ce,.159,0,"blade-crest");Be.scale.y=.42,Be.rotation.y=Math.PI/4}}const N=(e==="great"?.5:e==="short"?.34:.4)+Math.min(o.level,99)*.0023,V=o.guardStyle%3*.044,W=o.guardStyle>=3?.075:0,X=new dn;X.moveTo(-.105,-N),X.lineTo(-.115-V,-N-W),X.quadraticCurveTo(-.19-V,-N*.85,-.085,-N*.66),X.lineTo(-.055,-.16),X.lineTo(.075,-.16),X.lineTo(.075,-N*.7),X.quadraticCurveTo(.17,-N*.87,.115+V,-N),X.lineTo(.075+V,-N*.53),X.lineTo(.09,-.12),X.lineTo(.09,.12),X.lineTo(.075+V,N*.53),X.lineTo(.115+V,N),X.quadraticCurveTo(.17,N*.87,.075,N*.7),X.lineTo(.075,.16),X.lineTo(-.055,.16),X.lineTo(-.085,N*.66),X.quadraticCurveTo(-.19-V,N*.85,-.115-V,N+W),X.lineTo(-.105,N),X.lineTo(-.105,-N);const G=new fn(X,{depth:.105,bevelEnabled:!0,bevelSize:.014,bevelThickness:.014,bevelSegments:2,curveSegments:8});G.rotateX(-Math.PI/2),x(G,h,-.06,-.063,0,"guard");const ae=m(-.095,.015,0,.13,.16,.25,d);if(ae.rotation.y=o.guardStyle*.07,o.level>=3){for(const ce of[-1,1])if(p(-.12,.058,ce*N*.74,.048,.06,.043,o.level>=16?g:h),o.level>=15){const _e=x(new Mo(.052,.16,7),h,-.14,.041,ce*(N+.06));_e.rotation.x=ce*Math.PI/2}}if(o.level>=25)for(const ce of[-1,1])x(new In(.061,0),g,-.024,.09,ce*.2).scale.set(.63,.45,.76);const ue=x(new En(.062,.071,.56,14),u,-.38,.02,0,"grip");ue.rotation.z=Math.PI/2;for(let ce=0;ce<9;ce++){const _e=x(new sn(.067,.007,4,14),ce%3===0&&o.level>=7?h:d,-.16-ce*.055,.02,0,"grip-band");_e.rotation.y=Math.PI/2}for(const ce of[-.12,-.66]){const _e=x(new En(.076,.076,.028,16),h,ce,.02,0);_e.rotation.z=Math.PI/2}const Me=p(-.73,.02,0,.11+o.crest*.003,.082,.091,h);if(o.level>=6&&(Me.rotation.x=Math.PI/8),p(-.746,.097,0,.048,.016,.048,g),o.level>=12&&(p(-.746,-.058,0,.039,.012,.039,g),m(-.38,.089,0,.12,.012,.025,h)),o.level>=35)for(const ce of[-1,1])p(-.73,.023,ce*.073,.029,.03,.014,g);return a.userData.swordName=o.name,a.userData.level=o.level,a.userData.form=o.silhouette,a}const Wr={targetY:1.42,pitch:.159,fov:18,phoneDepth:21};function Fx(){const i=new tt,e=new tt,t=new tt,n=new tt,s=new tt,r=new tt;i.name="食铁兽·全视角立体雕塑",i.add(e,s,r),e.add(t),t.add(n),t.rotation.z=.23;const o=new Ge(16184817),a=new Ge(2370615),l=new ht({vertexColors:!0,roughness:.84,metalness:0,flatShading:!0,envMapIntensity:.12,toneMapped:!1}),c=new ht({color:527637,roughness:.24,metalness:.04,envMapIntensity:.65}),h=z=>new R(z[0],z[1],z[2]),d=(z,oe,Q=.2)=>{const le=z.getAttribute("position"),Ee=[];for(let D=0;D<le.count;D+=3){const $=(le.getX(D)+le.getX(D+1)+le.getX(D+2))/3,Z=(le.getY(D)+le.getY(D+1)+le.getY(D+2))/3,ee=(le.getZ(D)+le.getZ(D+1)+le.getZ(D+2))/3,te=(typeof oe=="function"?oe($,Z,ee):oe)?a:o,me=1-Q*(.5+.5*Math.sin(D*1.618+2.3));for(let he=0;he<3;he++)Ee.push(te.r*me,te.g*me,te.b*me)}return z.setAttribute("color",new je(Ee,3)),z.computeVertexNormals(),z},f=(z,oe,Q,le,Ee=!1,D=2)=>{const $=new js(1,D);$.rotateY(.19),$.rotateZ(.11);const Z=new Oe(d($,Ee),l);return Z.name=z,Z.position.copy(h(Q)),Z.scale.copy(h(le)),oe.add(Z),Z},u=new js(1,3);u.rotateY(.17),u.rotateZ(.09);const g=u.getAttribute("position"),x=[],m=[],p=(z,oe)=>{const Q=[];for(let le=0;le<z.length;le++){const Ee=z[le],D=z[(le+1)%z.length],$=oe?Ee.d>=0:Ee.d<=0,Z=oe?D.d>=0:D.d<=0;if($&&Q.push(Ee),$!==Z){const ee=Ee.d/(Ee.d-D.d);Q.push({v:Ee.v.clone().lerp(D.v,ee),d:0})}}return Q};for(let z=0;z<g.count;z+=3){const oe=[];for(let Q=0;Q<3;Q++){const le=g.getX(z+Q),Ee=g.getY(z+Q),D=g.getZ(z+Q),$=new R(le*.84*(1+.13*Math.max(0,Ee)),Ee*.86,D*.64);oe.push({v:$,d:$.y-(.3+.16*Math.max(0,-D)-.23*Math.abs(le))})}for(const Q of[!1,!0]){const le=p(oe,Q),Ee=(Q?a:o).clone().multiplyScalar(.82+.18*(.5+.5*Math.sin(z*1.618)));for(let D=1;D<le.length-1;D++)for(const $ of[0,D,D+1])x.push(...le[$].v.toArray()),m.push(Ee.r,Ee.g,Ee.b)}}u.dispose();const y=new mt;y.setAttribute("position",new je(x,3)),y.setAttribute("color",new je(m,3)),y.computeVertexNormals();const M=new Oe(y,l);M.name="连续白腹白背与黑肩带",s.add(M);const v=new js(1,3);v.rotateY(.14),v.rotateZ(.09);const S=v.getAttribute("position");for(let z=0;z<S.count;z++){const oe=S.getX(z),Q=S.getY(z),le=S.getZ(z),Ee=1+.07*Math.max(0,-Q);S.setXYZ(z,oe*.76*Ee,Q*.7,le*.61+(le>0?.18*Math.exp(-oe*oe/.22-(Q+.25)**2/.22):0))}const E=new Oe(d(v,!1,.2),l);E.name="完整圆头与饱满脸颊",t.add(E);for(const z of[-1,1]){const oe=f("立体圆耳"+z,t,[z*.57,.57,-.075],[.245,.27,.17],!0,1);oe.rotation.z=-z*.13}const w=[];for(const z of[-1,1]){const oe=[[-.11,.22],[.07,.24],[.18,.12],[.21,-.08],[.15,-.29],[.035,-.3],[-.09,-.14],[-.15,.05]],Q=z*.32,le=.16,Ee=oe.map(([ve,ze])=>[Q+z*ve,le+ze]),D=[],$=z===1?-1:1;for(let ve=0;ve<S.count;ve+=3){let ze=[0,1,2].map(Ie=>new R().fromBufferAttribute(S,ve+Ie));if(!ze.every(Ie=>Ie.z<0)){for(let Ie=0;Ie<Ee.length&&ze.length;Ie++){const L=Ee[Ie],T=Ee[(Ie+1)%Ee.length],B=se=>$*((T[0]-L[0])*(se.y-L[1])-(T[1]-L[1])*(se.x-L[0])),Y=[];for(let se=0;se<ze.length;se++){const K=ze[se],De=ze[(se+1)%ze.length],ge=B(K),Pe=B(De);ge>=0&&Y.push(K),ge>=0!=Pe>=0&&Y.push(K.clone().lerp(De,ge/(ge-Pe)))}ze=Y}for(let Ie=1;Ie<ze.length-1;Ie++)for(const L of[0,Ie,Ie+1])D.push(ze[L].x,ze[L].y,ze[L].z+.004)}}const Z=new mt;Z.setAttribute("position",new je(D,3)),d(Z,!0,.16);const ee=new Oe(Z,l);ee.name="贴合头部的泪滴眼斑"+z,t.add(ee);const te=(ve,ze)=>{const Ie=new Nl(new R(ve,ze,2),new R(0,0,-1)),L=new R;let T=0;for(let B=0;B<S.count;B+=3){const Y=new R().fromBufferAttribute(S,B),se=new R().fromBufferAttribute(S,B+1),K=new R().fromBufferAttribute(S,B+2);Ie.intersectTriangle(Y,se,K,!1,L)&&(T=Math.max(T,L.z))}return T},me=new tt;me.position.set(Q-z*.025,le+.055,te(Q-z*.025,le+.055)+.025),t.add(me),w.push(me);const he=new Oe(new Jn(.072,16,12),c);he.scale.set(1,1.07,.7),he.name="黑亮眼珠"+z,me.add(he)}const A=f("宽黑鼻",t,[0,-.115,.825],[.2,.1,.08],!0,1);A.rotation.z=-.03,n.position.set(0,-.285,.36);const _=[],b=[],P=v.getAttribute("color");for(let z=0;z<S.count;z+=3){const oe=(S.getX(z)+S.getX(z+1)+S.getX(z+2))/3,Q=(S.getY(z)+S.getY(z+1)+S.getY(z+2))/3,le=(S.getZ(z)+S.getZ(z+1)+S.getZ(z+2))/3;if(!(Math.abs(oe)>.34||Q>-.27||Q<-.52||le<.43))for(let Ee=0;Ee<3;Ee++)_.push(S.getX(z+Ee),S.getY(z+Ee)+.285,S.getZ(z+Ee)-.356),b.push(P.getX(z+Ee),P.getY(z+Ee),P.getZ(z+Ee))}const I=new mt;I.setAttribute("position",new je(_,3)),I.setAttribute("color",new je(b,3)),I.computeVertexNormals();const F=new Oe(I,l);F.name="连续下巴",n.add(F);const N=new Oe(new Jn(1,20,12),new tn({color:527121}));N.position.set(0,-.285,.755),N.scale.set(.24,.012,.025),t.add(N);const V=new rr([h([-.25,-.255,.667]),h([-.13,-.295,.706]),h([0,-.305,.717]),h([.13,-.295,.706]),h([.25,-.255,.667])]),W=new Oe(new gs(V,12,.006,4,!1),new ht({color:6776672,roughness:1}));t.add(W);const X=[-1,1].map(z=>{const oe=f("上臂"+z,i,[0,0,0],[.26,1,.27],!0,2),Q=f("前臂"+z,i,[0,0,0],[.23,1,.24],!0,2),le=new tt;le.name="弯指熊掌"+z,i.add(le),f("掌背"+z,le,[0,0,0],[.245,.22,.19],!0,2);for(let D=0;D<4;D++){const $=(D-1.5)*.092,Z=-.045-Math.sin((D+.5)/4*Math.PI)*.035,ee=f("弯曲手指"+z+"-"+D,le,[$,Z,.16],[.064,.145-D*.006,.081],!0,1);ee.rotation.z=-z*.2}const Ee=f("拇指"+z,le,[-z*.19,.075,.13],[.086,.125,.1],!0,1);return Ee.rotation.z=z*.55,{side:z,upper:oe,forearm:Q,hand:le}}),G=[-1,1].map(z=>({side:z,thigh:f("后腿"+z,i,[0,0,0],[.35,1,.36],!0,2),foot:f("厚实后脚"+z,i,[0,0,0],[.33,.29,.37],!0,2)})),ae=new Oe(d(new In(1,0),!1,.025),l);ae.name="白色短尖尾",ae.scale.set(.16,.235,.135),ae.rotation.x=-.2,r.add(ae);const ue=(z,oe,Q)=>{z.position.copy(oe).add(Q).multiplyScalar(.5),z.quaternion.setFromUnitVectors(new R(0,1,0),Q.clone().sub(oe).normalize()),z.scale.y=oe.distanceTo(Q)*.5+.12};let Me=0,ce=NaN,_e=NaN;const Ce=(z,oe=0)=>{if(z===ce&&oe===_e)return;ce=z,_e=oe,Me=St.clamp(z,0,1);const Q=Me;e.position.set(0,2.12-.07*Q,.02+.48*Q),e.rotation.x=-.88*oe+.08*Q,t.rotation.z=.3*(1-Q)*(1-oe),s.position.set(0,.86+.36*Q,-.065-.17*Q),s.rotation.x=.58*Q,r.position.set(0,-.48,-.57).applyEuler(s.rotation).add(s.position),r.rotation.x=.2*Q;for(const le of X){const Ee=le.side,D=h([Ee*.61,1.47-.02*Q,.015+.3*Q]),$=h([Ee*(.88-.32*Q),1.23-.38*Q,.16+.38*Q]),Z=h([Ee*(.92-.48*Q),1.4-1.15*Q,.46+.35*Q]);ue(le.upper,D,$),ue(le.forearm,$,Z),le.hand.position.copy(Z),le.hand.rotation.set(-.15-1.1*Q,0,Ee*.48*(1-Q))}for(const le of G){const Ee=le.side,D=h([Ee*.62,.78+.2*Q,-.06-.43*Q]),$=h([Ee*.72,.27,-.01-.51*Q]);ue(le.thigh,D,$),le.foot.position.set(Ee*.73,.28,.43-.97*Q),le.foot.rotation.x=-.08*(1-Q)}n.position.y=-.285-.11*oe,N.scale.y=.012+.13*oe,N.visible=oe>.01,W.visible=oe<.03,i.userData.quadruped=Q,i.userData.lookUp=oe},Be=h([0,-.285,.77]),J=()=>i.localToWorld(r.position.clone().add(new R(0,-.09,-.1)));Object.assign(i.userData,{species:"giant-panda",style:"polygon-sculpture",limbStyle:"articulated-curled-fingers-and-solid-feet",reconstruction:"closed-sculpted-anatomy-v7",backAnatomy:"white-skull-black-shoulder-band-white-rump-pointed-tail",triangles:0}),i.traverse(z=>{z instanceof Oe&&(z.castShadow=!0,z.receiveShadow=!0,i.userData.triangles+=(z.geometry.index?.count??z.geometry.getAttribute("position").count)/3)}),Ce(0),i.updateWorldMatrix(!0,!0);const ne=new Ct().setFromObject(i);return i.scale.setScalar(3/(ne.max.y-ne.min.y)),i.userData.volumeDepth=(ne.max.z-ne.min.z)*i.scale.z,{root:i,head:e,jaw:n,belly:s,tail:r,eyes:w,mouth:Be,ready:Promise.resolve(),pose:Ce,outlet:J}}function Ox(i){const e=Math.max(0,i),t=n=>(n=Math.max(0,Math.min(1,n)),n*n*(3-2*n));return{phase:e<1?"offering":e<2?"turning":e<3?"ejecting":"complete",swallow:t((e-.3)/.7),lookUp:e<1?t(e/.16):1-t((e-1)/.3),turn:t(e-1),stance:t((e-1.12)/.88),eject:Math.max(0,Math.min(1,e-2))}}class Bx{material;base=new Ge;hot=new Ge(16737562);glow=new Ge;decorated=new WeakSet;level=0;levelKey="";uniforms={forgeTime:{value:0},forgeFrenzy:{value:0},forgeCosmos:{value:0},forgeHeat:{value:0},forgeWorldToSword:{value:new rt}};constructor(e){this.material=e.clone(),this.material.metalness=.78,this.material.roughness=.36,this.decorate(this.material),this.setLevel(0,"iron")}decorate(e){this.decorated.has(e)||(this.decorated.add(e),e.onBeforeCompile=t=>{Object.assign(t.uniforms,this.uniforms),t.uniforms.forgeHeatResponse={value:e.userData.forgeHeat??.25},t.uniforms.forgeCosmosCoverage={value:e.userData.cosmosCoverage??.985},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
vec3 forgeRainbow = vec3(0.0);
if (forgeFrenzy > 0.5 || forgeCosmos > 0.5) forgeRainbow = forgeSpectrum(forgeCoord.x * 0.50 + forgeCoord.y * 0.52 - forgeTime * 0.48);
float forgeSweep = pow(0.5 + 0.5 * sin((forgeCoord.x * 1.2 - forgeTime * 0.72) * 6.283185 + forgeCoord.y * 1.8), 14.0);
float forgeRidge = pow(max(0.0, 1.0 - abs(vForgeUv.y - 0.5) * 2.0), 9.0);
vec3 forgeCosmic = vec3(0.0);
if (forgeCosmos > 0.5) forgeCosmic = forgeStarfield(forgeCoord);
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
#include <opaque_fragment>`)},e.customProgramCacheKey=()=>"whole-sword-pbr-rainbow-cosmos-v5",e.needsUpdate=!0)}setLevel(e,t){const n=e+":"+t;if(n===this.levelKey)return;this.levelKey=n,this.level=e;const r=[[0,t==="bronze"?14199912:t==="cold"?11069166:12964054],[3,11652804],[6,10731213],[10,12694478],[14,14273702],[15,11652048],[25,9216953],[29,14474440],[99,15066843]];let o=r[0],a=r[r.length-1];for(let l=1;l<r.length;l++)if(e<=r[l][0]){o=r[l-1],a=r[l];break}this.base.set(o[1]).lerp(new Ge(a[1]),St.clamp((e-o[0])/(a[0]-o[0]),0,1))}update(e,t,n,s=!1){this.uniforms.forgeTime.value=e,this.uniforms.forgeFrenzy.value=n?1:0,this.uniforms.forgeCosmos.value=s?1:0,this.uniforms.forgeHeat.value=t,this.material.color.copy(this.base).lerp(this.hot,t*.68),this.material.emissive.copy(this.base).multiplyScalar(0),this.material.emissive.add(this.glow.copy(this.hot).multiplyScalar(t*.85)),this.material.emissiveIntensity=1}setTransform(e){e.updateWorldMatrix(!0,!1),this.uniforms.forgeWorldToSword.value.copy(e.matrixWorld).invert()}get color(){return this.material.color.getHexString()}}const ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ni{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zx=new Yl(-1,1,1,-1,0,1);class kx extends mt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}}const Hx=new kx;class So{constructor(e){this._mesh=new Oe(Hx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Gu extends Ni{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hi.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new So(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ah extends Ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Gx extends Ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ch{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gu(ro),this.copyPass.material.blending=Yn,this.clock=new zp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ah!==void 0&&(o instanceof Ah?n=!0:o instanceof Gx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vx extends Ni{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ge}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Wx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class xs extends Ni{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Yt(r,o,{type:rn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Yt(r,o,{type:rn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Wx;this.highPassUniforms=hi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hi.clone(ro.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,blending:Ta,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ge,this._oldClearAlpha=1,this._basic=new tn,this._fsQuad=new So(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}xs.BlurDirectionX=new ie(1,0);xs.BlurDirectionY=new ie(0,1);const Xr={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

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

		}`},qr={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

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

		}`},fa={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ie(1/1024,1/512)}},vertexShader:`

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

		}`};class Xx extends Ni{constructor(){super(),this._edgesRT=new Yt(1,1,{depthBuffer:!1,type:rn}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Yt(1,1,{depthBuffer:!1,type:rn}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Rt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=Kt,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Rt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=qt,this._searchTexture.minFilter=qt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=hi.clone(Xr.uniforms),this._materialEdges=new Ft({defines:Object.assign({},Xr.defines),uniforms:this._uniformsEdges,vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader}),this._uniformsWeights=hi.clone(qr.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Ft({defines:Object.assign({},qr.defines),uniforms:this._uniformsWeights,vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader}),this._uniformsBlend=hi.clone(fa.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Ft({uniforms:this._uniformsBlend,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader}),this._fsQuad=new So(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const Yr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class qx extends Ni{constructor(){super(),this.uniforms=hi.clone(Yr.uniforms),this.material=new Cp({name:Yr.name,uniforms:this.uniforms,vertexShader:Yr.vertexShader,fragmentShader:Yr.fragmentShader}),this._fsQuad=new So(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===iu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===tu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Yx{constructor(e,t,n){this.renderer=e;const s=e.getContext(),r=s.getInternalformatParameter(s.RENDERBUFFER,s.RGBA16F,s.SAMPLES);this.samples=Math.max(0,...Array.from(r).filter(a=>a<=4)),this.sceneTarget=new Yt(1,1,{type:rn,samples:this.samples}),this.sceneTarget.texture.name="SwordGlow.antialiased-scene",this.bloomComposer=new Ch(e),this.bloomComposer.renderToScreen=!1,this.bloomComposer.addPass(new Vx(t,n)),this.bloom=new xs(new ie(256,256),.31,.22,1.3),this.bloomComposer.addPass(this.bloom),this.composer=new Ch(e,new Yt(1,1,{type:rn,depthBuffer:!1}));const o=new Gu({uniforms:{baseTexture:{value:null},bloomTexture:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D baseTexture;uniform sampler2D bloomTexture;varying vec2 vUv;void main(){gl_FragColor=texture2D(baseTexture,vUv)+texture2D(bloomTexture,vUv);}"});o.uniforms.baseTexture.value=this.sceneTarget.texture,o.uniforms.bloomTexture.value=this.bloom.renderTargetsHorizontal[0].texture,this.composer.addPass(o),this.samples===0&&this.composer.addPass(new Xx),this.composer.addPass(new qx)}composer;bloomComposer;bloom;sceneTarget;black=new tn({color:0});samples;resize(e,t){const n=this.renderer.getPixelRatio();this.sceneTarget.setSize(Math.round(e*n),Math.round(t*n)),this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.bloomComposer.setPixelRatio(1);const s=Math.min(1,512/Math.max(e,t));this.bloomComposer.setSize(Math.round(e*s),Math.round(t*s))}render(e,t,n,s,r,o=!0){if(this.renderer.info.reset(),!n||!r){this.renderer.render(e,t);return}const a=new Map,l=new Map,c=e.background,h=this.renderer.shadowMap.enabled,d=r.userData.materials;try{for(const u of e.children)u!==r&&(a.set(u,u.visible),u instanceof fr||(u.visible=!1));o||r.traverse(u=>{u instanceof Oe&&u.material!==d?.inlay&&u.material!==d?.gem&&u.material!==r.userData.referenceFx?.glow&&(l.set(u,u.material),u.material=this.black)}),e.background=new Ge(0),this.renderer.shadowMap.enabled=!1,this.bloom.strength=s?.4:o?.31:.22,this.bloomComposer.render()}finally{a.forEach((u,g)=>g.visible=u),l.forEach((u,g)=>g.material=u),e.background=c,this.renderer.shadowMap.enabled=h}const f=this.renderer.getRenderTarget();try{this.renderer.setRenderTarget(this.sceneTarget),this.renderer.clear(),this.renderer.render(e,t)}finally{this.renderer.setRenderTarget(f)}this.composer.render()}dispose(){this.black.dispose(),this.sceneTarget.dispose();for(const e of[this.composer,this.bloomComposer]){for(const t of e.passes)t.dispose();e.dispose()}}}const pa=1024,ma=448,zs=["#ff967f","#efc06e","#b9e3a0","#b4d9ec","#edb8de"],Rh=["破坏","损伤","维持","成功","大成功"],ga=i=>i>=1e12?i.toExponential(2):Math.floor(i).toLocaleString("zh-CN"),Ph=new WeakMap;function jx(i,e,t,n){const s=e.session,r=s?.phase==="forge"||s?.phase==="finished",o=!!s&&wn(s),a=!!s?.superGod,l=o?Math.max(0,(s.frenzyUntil-Date.now())/1e3).toFixed(1):"";i.setTransform(i.canvas.width/pa,0,0,i.canvas.height/ma,0,0),i.clearRect(0,0,pa,ma);let c=Ph.get(i.canvas);if(!c||c.width!==i.canvas.width||c.height!==i.canvas.height){c=document.createElement("canvas"),c.width=i.canvas.width,c.height=i.canvas.height;const f=i;i=c.getContext("2d"),i.setTransform(c.width/pa,0,0,c.height/ma,0,0);const u=i.createLinearGradient(0,0,1024,380);u.addColorStop(0,"#302721"),u.addColorStop(.16,"#493b30"),u.addColorStop(.27,"#6e5c4b"),u.addColorStop(.34,"#514236"),u.addColorStop(.53,"#302721"),u.addColorStop(.76,"#403329"),u.addColorStop(.9,"#514337"),u.addColorStop(1,"#29221e"),i.fillStyle=u,i.fillRect(0,0,1024,448);for(let x=0;x<340;x++){const m=x*31.73%448,p=x*197.31%1024;i.strokeStyle=x%3?"rgba(236,226,211,.045)":"rgba(12,9,7,.12)",i.lineWidth=.55,i.beginPath(),i.moveTo(p,m),i.lineTo(Math.min(1024,p+140+x%160),m),i.stroke()}const g=i.createLinearGradient(0,0,0,448);g.addColorStop(0,"rgba(249,234,213,.13)"),g.addColorStop(.2,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(13,8,5,.26)"),i.fillStyle=g,i.fillRect(0,0,1024,448),i.lineWidth=2,i.strokeStyle="rgba(227,204,174,.58)",i.beginPath(),i.moveTo(5,425),i.lineTo(5,23),i.lineTo(23,5),i.lineTo(1001,5),i.stroke(),i.strokeStyle="rgba(12,8,6,.85)",i.lineWidth=4,i.beginPath(),i.moveTo(1019,23),i.lineTo(1019,425),i.lineTo(1001,443),i.lineTo(23,443),i.stroke(),Ph.set(f.canvas,c),i=f}i.save(),i.setTransform(1,0,0,1,0,0),i.drawImage(c,0,0),i.restore();const h=(f,u,g,x,m="#f6eada",p=!1,y=940)=>{i.shadowBlur=0,i.fillStyle=m,i.font=`${p?"600 ":""}${x}px "Noto Sans CJK SC","Microsoft YaHei",sans-serif`,i.fillText(f,u,g,y)},d=(f,u,g,x,m=3)=>{i.fillStyle=x,i.shadowColor=x,i.shadowBlur=9,i.fillRect(f,u,g,m),i.shadowBlur=0};if(i.textAlign="left",h(s?Sn(s.blade,s.level,e.showLegacySwords).name:"锻造台",40,66,44,"#fff4e5",!0,775),i.textAlign="right",s&&h("+"+s.level,984,66,48,"#fff4e5",!0,160),i.textAlign="left",r){h("当前价值",40,142,26,"#ded1be"),i.textAlign="right",h(ga(n.value)+" G",984,154,62,"#fff0cf",!1,740),i.textAlign="left";const f=s?.strikes.at(-1),u=f?{break:0,damage:1,unchanged:2,success:3,great:4}[f.result]:3;let g="点台面落锤";if(f&&(g=f.superGod?"超神 +"+(f.after-f.before):Rh[u]+(f.after===f.before?"":` ${f.after>f.before?"+":""}${f.after-f.before}`)),h(g,40,207,32,a?"#b9d9ff":f?zs[u]:"#ded1be",!0,480),f){const p=f.afterValue-f.beforeValue;h(`${p>=0?"+":"−"}${ga(Math.abs(p))} G  ·  ${f.valueMultiplier.toFixed(2).replace(/0$/,"")}倍`,40,246,26,"#f4e7d2",!1,500)}else h("随时收剑，保住价值",40,246,26,"#ded1be",!1,500);i.textAlign="right",h(a?"超神":o?`入神 ${l}s`:`入神蓄力 ${s?.frenzyCharge||0}/10`,984,207,27,a?"#b9d9ff":o?"#ffd5a1":"#ded1be",!1,430),i.textAlign="left";for(let p=0;p<10;p++){const y=a||o||p<(s?.frenzyCharge||0);i.fillStyle=y?a?"#bddeff":"#ffe7b7":"#55483b",i.shadowColor=a?"#719cff":"#ff9a43",i.shadowBlur=y?12:0,i.fillRect(568+p*42,232,27,12),i.shadowBlur=0}const x=[t.break,t.damage,t.unchanged,t.success,t.great];for(let p=0;p<5;p++){const y=40+p*192;d(y,280,172,zs[p]),i.textAlign="center",h(Rh[p],y+86,325,30,zs[p],!0,180),h((x[p]/100).toFixed(1)+"%",y+86,369,36,zs[p],!1,180)}i.textAlign="left";let m=40;for(let p=0;p<5;p++){const y=944*x[p]/1e4;y>0&&d(m,410,y,zs[p],5),m+=y}}else{h(n.cue,40,155,40,"#fff0cf",!0,944);const{min:f,max:u}=yl(e.furnaceLevel,e.relics.includes("ember"));h(s?.phase==="heat"?`炉火 ${Math.round(n.heat)}%`:"点炉子入炉 · 点铸剑台放剑",40,240,34,"#f3dcc0",!1,940),h(s?.phase==="heat"?`${f}%—${u}% 取剑最佳`:n.result||"准备好后，开始锻造",40,296,27,"#ded1be",!1,940),i.fillStyle="#785234",i.fillRect(40,374,944,6),s?.phase==="heat"&&d(40,374,944*Math.min(100,Math.max(0,n.heat))/100,"#ffc176",6)}return[n.cue,n.result,ga(n.value),a?"超神":o?"入神":"蓄力",l].join(" · ")}function Kx(i){const e=new tt;e.name="relic-"+i;const t=new Ri({color:14268533,metalness:.86,roughness:.25,clearcoat:.35}),n=new ht({color:15982508,metalness:.82,roughness:.19}),s=new ht({color:5268856,metalness:.85,roughness:.25}),r=new ht({color:2504256,metalness:.68,roughness:.35}),o=new ht({color:6636600,roughness:.72}),a=new Ri({color:5486500,metalness:.25,roughness:.19,clearcoat:1}),l=new Ri({color:10192348,metalness:.35,roughness:.16,clearcoat:1}),c=new Ri({color:16754510,emissive:16738341,emissiveIntensity:.32,metalness:.25,roughness:.18,clearcoat:1}),h=(M,v,S=0,E=0,w=0,A=e)=>{const _=new Oe(M,v);return _.position.set(S,E,w),_.castShadow=!0,_.receiveShadow=!0,A.add(_),_},d=(M,v,S,E,w=0,A=0,_=0,b=e)=>h(Ks(M,v,S,Math.min(M,v,S)*.18),E,w,A,_,b),f=(M,v,S,E=0,w=0,A=0)=>h(new sn(M,v,10,40),S,E,w,A),u=(M,v,S=0,E=0,w=0)=>h(new Jn(M,24,16),v,S,E,w),g=(M,v,S=0,E=0,w=.1)=>{const A=h(new In(M,0),v,S,E,w);return A.scale.z=.6,A},x=(M,v,S,E=0,w=0,A=0)=>{const _=h(new En(M,M,v,48),S,E,w,A);return _.rotation.x=Math.PI/2,_},m=(M,v,S,E)=>{const w=new dn;for(let A=0;A<v*2;A++){const _=A*Math.PI/v+Math.PI/2,b=A%2?M*.45:M;A?w.lineTo(Math.cos(_)*b,Math.sin(_)*b):w.moveTo(Math.cos(_)*b,Math.sin(_)*b)}return w.closePath(),h(new fn(w,{depth:.026,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2}),S,0,0,E)};if(i==="hammer"){const M=new tt;e.add(M),M.rotation.z=-.28,d(.07,.5,.075,o,0,-.08,0,M);for(let v=0;v<6;v++)d(.087,.019,.09,t,0,-.28+v*.047,0,M);d(.52,.21,.22,s,0,.19,0,M);for(const v of[-.245,.245])d(.06,.24,.25,n,v,.19,0,M);d(.13,.24,.24,t,0,.19,0,M),d(.072,.085,.02,a,0,.19,.135,M)}else if(i==="anvil"){d(.53,.09,.28,r,0,-.25),d(.44,.06,.25,t,0,-.19),d(.19,.32,.2,s,0,-.015),d(.54,.11,.28,s,0,.17),d(.58,.045,.3,n,0,.24);for(const M of[-.22,.22])d(.09,.11,.25,s,M,-.19),u(.018,t,M,-.23,.15);g(.072,a,0,-.015,.12)}else if(i==="ember"){const M=g(.29,c,0,.05,0);M.scale.set(.8,1.3,.7),M.rotation.y=.3,f(.17,.027,t,0,-.13,.04).rotation.x=1.05,d(.39,.065,.28,r,0,-.29),d(.33,.035,.24,t,0,-.245);for(const v of[-.14,.14]){const S=d(.035,.22,.04,t,v,-.14,.08);S.rotation.z=-v*2}}else if(i==="guard"){f(.235,.032,t,0,.03),f(.195,.012,n,0,.03,.025),u(.15,a,0,.025,.055).scale.set(1,.86,.5);for(const v of[-.105,.105]){const S=g(.071,t,v,.15,.04);S.rotation.z=v*2,u(.018,r,v*.55,.05,.14)}g(.075,l,0,-.235,.015),f(.044,.012,t,0,.32),u(.023,n,0,-.08,.13)}else if(i==="lucky"){const M=[new ie(.15,-.19),new ie(.18,-.15),new ie(.13,-.05),new ie(.12,.12),new ie(.07,.21),new ie(0,.23)];h(new Vl(M,48),t),f(.17,.02,n,0,-.17).rotation.x=Math.PI/2,u(.043,s,0,-.24),f(.065,.02,t,0,.29),d(.014,.1,.012,r,0,-.13,.155);for(const v of[-.065,.065])g(.032,a,v,.02,.12)}else if(i==="stellar")u(.21,l).scale.set(1.08,.8,.62),f(.24,.025,t).scale.y=.78,f(.28,.009,n).rotation.z=.42,u(.095,a,0,0,.145).scale.set(.8,1,.45),d(.027,.12,.02,r,0,0,.195),u(.022,n,.04,.045,.2),m(.34,8,t,-.08);else if(i==="rhythm"){d(.42,.055,.22,r,0,-.26),d(.34,.025,.2,n,0,-.22);for(const v of[-.15,.15]){const S=d(.037,.44,.07,t,v,-.015);S.rotation.z=v*.55}const M=d(.028,.42,.05,s,0,.025,.06);M.rotation.z=-.25,g(.09,a,.035,.19,.07),f(.045,.014,n,0,-.17,.08),d(.31,.04,.08,t,0,.23),u(.025,n,0,-.17,.11)}else if(i==="coin"||i==="master"){x(.25,.07,t),f(.23,.017,n,0,0,.045),x(.2,.025,r,0,0,.05),i==="master"?(m(.185,6,t,.07),g(.074,l,0,0,.12)):(d(.12,.22,.035,t,0,0,.09),d(.21,.035,.035,t,0,0,.105),g(.055,a,0,0,.135));for(let M=0;M<16;M++){const v=M*Math.PI/8;u(.009,n,Math.cos(v)*.218,Math.sin(v)*.218,.062)}if(i==="master")for(const M of[-.09,.09]){const v=d(.1,.2,.035,o,M,-.28,-.02);v.rotation.z=M*2}}else if(i==="steady"){f(.22,.064,s),f(.25,.014,n,0,0,.045),f(.18,.013,t,0,0,.06);for(let M=0;M<6;M++){const v=M*Math.PI/3;g(.038,a,Math.cos(v)*.22,Math.sin(v)*.22,.07)}d(.13,.1,.13,t,0,.22,.02),g(.06,l,0,.24,.1)}else if(i==="salvage"){u(.235,o,0,-.055).scale.set(1,1.05,.65),d(.26,.08,.2,o,0,.16),f(.105,.02,t,0,.17,.04).rotation.x=Math.PI/2;for(const S of[-.13,.13]){const E=d(.025,.33,.027,t,S,-.05,.14);E.rotation.z=S*.4}d(.19,.15,.028,r,0,-.03,.158),g(.06,a,0,-.03,.19);const v=d(.06,.19,.04,n,.05,.25);v.rotation.z=-.4}else if(i==="case"){d(.43,.5,.19,o),d(.37,.43,.025,r,0,0,.108);for(const M of[-.21,.21])d(.035,.52,.22,t,M,0);for(const M of[-.24,.24])d(.43,.038,.22,t,0,M);for(const M of[-.105,0,.105])d(.023,.29,.025,n,M,.01,.13),d(.07,.025,.04,t,M,-.13,.145),d(.025,.08,.04,o,M,-.18,.13);g(.05,a,0,.22,.14)}e.rotation.y=-.16,e.rotation.x=.07,e.userData.art="sculpted-metal-gem-v1",e.updateMatrixWorld(!0);const p=e.matrixWorld.clone().invert(),y=new Map;e.traverse(M=>{if(M instanceof Oe){const v=M.material,S=y.get(v)||[];S.push(M),y.set(v,S)}});for(const[M,v]of y){if(v.length<2)continue;const S=v.map(A=>{const _=A.geometry.index?A.geometry.toNonIndexed():A.geometry.clone();return _.applyMatrix4(p.clone().multiply(A.matrixWorld)),_}),E=yo(S,!1);if(S.forEach(A=>A.dispose()),!E)continue;for(const A of v)A.removeFromParent(),A.geometry.dispose();const w=new Oe(E,M);w.castShadow=!0,w.receiveShadow=!0,e.add(w)}for(const M of[t,n,s,r,o,a,l,c])y.has(M)||M.dispose();return e}function Lh(i){return Kx(i)}function Jx(i,e,t){e.caseIds.map(s=>e.swords.find(r=>r.id===s&&r.disposal==="COLLECTED")).filter(s=>!!s).forEach((s,r)=>{const o=xl(t,s.blade,s.level,s.material,e.showLegacySwords);o.quaternion.setFromAxisAngle(new R(0,0,1),Math.PI/2).multiply(new di().setFromAxisAngle(new R(1,0,0),Math.PI/2)),o.scale.setScalar(.8),o.position.set((r%3-1)*1.3,Math.floor(r/3)*3.4+.85,.29),o.name="collected-"+s.id,i.add(o),o.userData.collectionId=s.id})}function va(i){i.traverse(e=>{if(e instanceof Oe){e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n instanceof tn&&n.map?.dispose(),n.dispose()}}),i.clear()}const Dh=St.clamp;class Zx{constructor(e){this.host=e,this.renderer=new Sx({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.localClippingEnabled=!0,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setClearColor(1512207),this.renderer.outputColorSpace=It,this.renderer.info.autoReset=!1,this.renderer.toneMapping=wl,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zh,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.domElement.setAttribute("aria-label","3D锻造工坊：铁砧、熔炉、食铁兽、遗物机及神秘商人"),e.appendChild(this.renderer.domElement),this.surfaces=new bx(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.forgeMaterials=Px(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.bladeMat.dispose(),this.bladeFinish=new Bx(this.surfaces.get("steel")),this.bladeMat=this.bladeFinish.material,this.uprightOak=this.surfaces.get("oak",9).clone();for(const l of["map","bumpMap","roughnessMap"]){const c=this.uprightOak[l].clone();c.center.set(.5,.5),c.rotation=Math.PI/2,this.uprightOak[l]=c}const t=new Ax,n=new po(this.renderer);this.scene.environment=n.fromScene(t,.04).texture,this.scene.environmentIntensity=.72,t.dispose(),n.dispose(),this.swordEnvironment=Cx(this.renderer),bh(this.swordEnvironment.texture),this.scene.fog=new Ol(1643535,.028),this.roomAmbient=new Dp(12241884,3547932,.38),this.scene.add(this.roomAmbient);const s=this.roomKey=new Op(16768956,1.45);s.position.set(-3,7,4),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-7,right:7,top:6,bottom:-4}),s.shadow.bias=-4e-4,s.shadow.normalBias=.018,this.scene.add(s);const r=this.roomFill=new no(11786479,4,12);r.position.set(4,4,3),this.scene.add(r);const o=this.forgeKey=new Up(16768951,38,9,.52,.68,2);o.position.set(-.7,5.1,2.35),o.target.position.set(.1,1.25,.1),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.bias=-3e-4,o.shadow.normalBias=.014,this.scene.add(o,o.target),this.furnaceLight.position.set(-3.15,1.45,-1.2),this.scene.add(this.furnaceLight),this.buildRoom(),this.buildForge(),this.buildCat(),this.buildRelics(),this.buildCollection(),this.scene.add(this.wallRelics),this.sword=xl(this.bladeMat,"great",0,"iron"),this.enchantFittings(this.sword),this.bladeShapeKey="great:0:iron",this.scene.add(this.sword),this.swordGlow=new Yx(this.renderer,this.scene,this.camera),this.host.dataset.swordName=Sn("great",0).name,this.host.dataset.swordShape=this.bladeShapeKey,this.batchStaticGeometry(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize();const a=this.cameraPose();this.target.copy(a.target),this.camera.position.copy(a.position),this.camera.fov=a.fov,this.camera.updateProjectionMatrix(),this.camera.lookAt(this.target),this.raf=requestAnimationFrame(this.tick),Jr&&(window.__workshop=this),e.dataset.ready="true",e.dataset.station="forge",e.dataset.glContext="ready",this.renderer.domElement.addEventListener("webglcontextlost",()=>{e.dataset.glContext="lost"})}renderer;scene=new Bl;camera=new Wt(46,1,.1,50);target=new R(0,1.45,-.3);view="forge";sword=new tt;swordPlace="anvil";swordScale=1;bladeShapeKey="";heat=0;move=null;targets={furnace:{box:new Ct(new R(-4.05,0,-2.35),new R(-2.25,4.5,-.9)),anchor:new R(-3.15,2.55,-.96)},anvil:{box:new Ct(new R(-1.65,.8,-.7),new R(1.65,1.65,.9)),anchor:new R(0,1.55,.25)},cat:{box:new Ct(new R(2.85,1,-2.1),new R(5.25,4.35,.2)),anchor:new R(4.05,2.95,-.5)},relics:{box:new Ct(new R(4.75,0,-2.4),new R(6.75,3.3,-1.4)),anchor:new R(5.75,2.6,-1.4)}};hammer=new tt;cat=new tt;head=new tt;jaw=new tt;belly;tail;catEyes=[];catBlink=()=>{};catPose=()=>{};catOutlet=()=>new R;holdRear=!1;swallowPlane=new ri(new R(0,1,0),1e3);tributeReflections=new Map;catMouth=new R(0,-.115,.52);bladeMat=new ht({color:11914449,metalness:.82,roughness:.3});bladeFinish;swordGlow;bladePhase="";bladeCoolingAt=-10;furnaceLight=new no(16740390,20,8,2);board;boardInfo={cue:"把剑送入炉火",result:"",value:0,heat:0};setBoardInfo(e,t,n,s){this.boardInfo={cue:e,result:t,value:n,heat:s},this.state&&this.drawBoard(this.state,this.boardProb)}boardFrame=new tt;forgeBenchBounds=new Ct;forgeHammerBounds=new Ct;boardProb;boardWide=!1;boardLayout={width:0,height:0,top:0,bottom:0};boardCanvas=document.createElement("canvas");lastBoard="";boardPaintAt=-1/0;boardSessionKey="";submittedBoardHits=0;submittedBladeFinish="metal";state=null;merchantRoot=new tt;whip=new tt;punishment=null;relicSlots=[];relicCabinet=new tt;wallRelics=new tt;collectionRoot=new tt;collectionSwords=new tt;displayKey="";metrics=new wd;targetFps=60;drawCost=0;fastFrames=0;targetsAt=-1/0;targetsPose=new rt;targetsVersion="";swordCache=new Map;materialPool=new Map;sharedMaterials=new Set;warmup;sparkPool=[];sparkGeometry=new Jn(.025,4,3);sparkMaterials=[new tn({color:16773037}),new tn({color:16761944})];sideProofKey="";boardHidden=!1;setBoardHidden(e){this.boardHidden=e,this.host.dataset.boardHidden=String(e),this.forgeProofPending=!0}hitStart=-10;hitSpeed=1;hitResult="success";hitImpact=!1;onHitImpact=null;hitImpactAt=-10;hammerRest=new R(1.25,1.65,-.38);hammerRaised=new R(1.25,1.85,-.38);hammerContact=new R(1.2,1.75,.11);hammerBottomOffset=0;contactShapeKey="";tributeStart=-10;tributeElapsed=0;tributeDone=null;tributeCount=3;rewards=[];fx=[];flames=[];raf=0;prev=0;renderAt=0;poseAt=-1/0;poseCache=null;gpuFrame=null;submittedTribute=0;submittedStation="forge";submittedCameraReady=!1;destroyed=!1;completedFrames=0;renderedTribute=0;paused=!1;reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;observer;scratch=new R;surfaces;forgeMaterials;roomKey;roomFill;roomAmbient;forgeKey;swordEnvironment;uprightOak;forgeSwordY=1.5;forgeProofPending=!0;forgeProofState="";fitCamera=new Wt(46,1,.1,50);lastForgeOffset=-1;pendingForgeProof=null;pendingCatProof=null;pausedAt=0;clockOffset=0;clockNow(){return(this.paused?this.pausedAt:performance.now())/1e3-this.clockOffset}setPaused(e){this.destroyed||e===this.paused||(e?(this.pausedAt=performance.now(),this.paused=!0,cancelAnimationFrame(this.raf),this.raf=0):(this.clockOffset+=(performance.now()-this.pausedAt)/1e3,this.paused=!1,this.prev=0,this.raf=requestAnimationFrame(this.tick)))}material(e,t=0,n=.85){return new ht({color:e,metalness:t,roughness:n})}mesh(e,t,n,s=0,r=0,o=0){const a=new Oe(e,t);return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}box(e,t,n,s,r,o=0,a=0,l=0){return this.mesh(Ks(e,t,n),s,r,o,a,l)}contact(e,t,n,s,r,o,a=.45){const l=document.createElement("canvas");l.width=l.height=128;const c=l.getContext("2d"),h=c.createRadialGradient(64,64,10,64,64,64);h.addColorStop(0,"rgba(8,5,3,.9)"),h.addColorStop(.55,"rgba(8,5,3,.45)"),h.addColorStop(1,"rgba(8,5,3,0)"),c.fillStyle=h,c.fillRect(0,0,128,128);const d=new Oe(new Es(r,o),new tn({map:new Li(l),transparent:!0,opacity:a,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));d.rotation.x=-Math.PI/2,d.position.set(t,n,s),e.add(d)}sphere(e,t,n,s,r,o,a,l){const c=this.mesh(new Jn(1,24,16),a,l,e,t,n);return c.scale.set(s,r,o),c}cylinder(e,t,n,s,r,o,a,l,c=16){return this.mesh(new En(e,t,n,c),s,r,o,a,l)}batchStaticGeometry(){this.scene.updateMatrixWorld(!0);const e=new Map;this.scene.traverse(t=>{if(!(t instanceof Oe)||t instanceof to||Array.isArray(t.material)||t.material.transparent)return;for(let r=t;r;r=r.parent)if(r===this.cat||r===this.hammer||r===this.sword||r===this.boardFrame||r===this.merchantRoot||r===this.wallRelics||r===this.collectionRoot||r===this.relicCabinet||this.relicSlots.includes(r))return;const n=[t.material.id,t.castShadow,t.receiveShadow].join(":"),s=e.get(n)||[];s.push(t),e.set(n,s)});for(const t of e.values()){if(t.length<2)continue;const n=t.map(o=>{const a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();return a.applyMatrix4(o.matrixWorld),a}),s=yo(n,!1);if(n.forEach(o=>o.dispose()),!s)continue;const r=new Oe(s,t[0].material);r.castShadow=t[0].castShadow,r.receiveShadow=t[0].receiveShadow,t.forEach(o=>{o.removeFromParent(),o.geometry.dispose()}),s.computeBoundingSphere(),this.scene.add(r)}}buildRoom(){const e=this.surfaces.get("stone",14).clone();e.color.set(7827043),e.map=e.map.clone(),e.map.repeat.set(9,9),this.box(16,.15,32,e,this.scene,0,-.1,8);const t=this.material(2893087);this.box(15,12,.35,t,this.scene,0,5.8,-3.4);const n=this.surfaces.get("stone",7),s=Ks(.94,.47,.31,.028),r=new rt,o=(l,c,h)=>{for(let d=0;d<l;d+=4)for(let f=0;f<c;f+=4){const u=Math.min(l,d+4),g=Math.min(c,f+4),x=new to(s,n,(u-d)*(g-f));let m=0;for(let p=d;p<u;p++)for(let y=f;y<g;y++)h?(r.makeRotationY(Math.PI/2),r.setPosition(h*7.4,.12+p*.5,-3.1+y*.98+p%2*.35)):r.makeTranslation(-7.4+y*.98+p%2*.47,.12+p*.5,-3.15),x.setMatrixAt(m,r),x.setColorAt(m,new Ge().setHSL(.078,.1,.53+Math.sin((p*c+y)*12.3)*.07)),m++;x.receiveShadow=!0,x.computeBoundingSphere(),this.scene.add(x)}};o(24,16,0);for(const l of[-1,1])this.box(.35,18,30,t,this.scene,l*7.65,8.8,10),o(36,31,l);this.host.dataset.roomLayout="left-rack/front-forge/right-relics";const a=this.material(2564638);for(let l=0;l<11;l++)this.box(.016,.006,11,a,this.scene,-7+l*1.4,-.018,0);for(let l=0;l<9;l++)this.box(15,.006,.016,a,this.scene,0,-.018,-5+l*1.4)}makeBench(e,t,n,s,r=!1){const o=new tt;o.position.set(n,0,s),this.scene.add(o);const a=r?this.forgeMaterials.wood[0]:this.surfaces.get("oak",2),l=r?this.forgeMaterials.casting:this.surfaces.get("iron"),c=this.material(r?7760215:9340788,.76,.48),h=e/2-.28,d=t/2-.22;for(let u=0;u<5;u++)this.box(e,.26,t/5-.013,r?this.forgeMaterials.wood[u]:this.surfaces.get("oak",2+u%2),o,0,.94,-t/2+t/5*(u+.5));const f=this.surfaces.get("endgrain");for(const u of[-1,1])this.box(.014,.238,t-.025,f,o,u*(e/2+.003),.94,0);for(const u of[-h,h])for(const g of[-d,d]){this.box(.31,.83,.31,this.uprightOak,o,u,.415,g),this.box(.33,.12,.33,l,o,u,.12,g),this.box(.34,.27,.035,l,o,u,.76,g+Math.sign(g)*.17);for(const x of[.68,.84])this.sphere(u,x,g+Math.sign(g)*.193,.025,.025,.015,c,o)}for(const u of[-d,d]){this.box(e-.38,.21,.16,a,o,0,.66,u),this.box(e-.5,.15,.17,a,o,0,.26,u);for(const g of[-1,1]){const x=this.box(.17,.7,.17,this.uprightOak,o,g*(h-.19),.48,u);x.rotation.z=g*-.55}}for(const u of[-h,h])this.box(.17,.15,t-.28,a,o,u,.26,0);for(const u of[-1,1]){this.box(e-.1,.095,.042,l,o,0,.865,u*(t/2+.021));for(let g=0;g<7;g++)this.sphere(-e/2+.19+g*(e-.38)/6,.865,u*(t/2+.048),.023,.023,.014,c,o)}return this.contact(o,0,-.016,0,e+.5,t+.65,.52),o}buildForge(){const e=this.forgeMaterials.wood[1],t=this.forgeMaterials.casting,n=this.forgeMaterials.face,s=this.material(2107952,.7,.57),r=this.material(10849108,.74,.4),o=new tt;o.position.set(.15,0,.1),o.scale.set(1.55,1.6,2),o.name="forged-anvil",this.scene.add(o),this.box(1.67,.056,1.1,s,o,0,-.03,0),this.mesh(wx(),t,o);for(const w of[-1,1]){const A=Ex(),_=A.getAttribute("position");for(let P=0;P<_.count;P++)_.setX(P,-.68+(_.getX(P)+.68)*.6);A.computeVertexNormals();const b=this.mesh(A,this.forgeMaterials.edge,o);w===1&&(b.rotation.y=Math.PI)}this.mesh(yh(.14,.675),t,o).scale.set(1.16,1,1.09),this.mesh(yh(.115,.815),[n,this.forgeMaterials.edge],o).scale.set(1.16,1,1.09);for(const w of[-.57,.57])for(const A of[-.36,.36])this.box(.38,.13,.26,t,o,w,.045,A),this.box(.11,.03,.16,this.forgeMaterials.edge,o,w,.12,A),this.cylinder(.038,.038,.027,this.forgeMaterials.hammer,o,w,.144,A,6);this.box(.115,.02,.115,s,o,.62*1.16,.76,-.17*1.09),this.cylinder(.033,.033,.02,s,o,.72*1.16,.76,.17*1.09,16);const c=new dn;c.moveTo(-.11,.08),c.lineTo(-.08,.14),c.lineTo(-.02,.1),c.quadraticCurveTo(0,.12,.02,.1),c.lineTo(.08,.14),c.lineTo(.11,.08),c.quadraticCurveTo(.14,-.1,0,-.13),c.quadraticCurveTo(-.14,-.1,-.11,.08);const h=new fn(c,{depth:.009,bevelEnabled:!0,bevelSize:.004,bevelThickness:.003,bevelSegments:2});this.mesh(h,this.material(7956554,.65,.62),o,0,.51,.262).scale.setScalar(.65);for(const w of[-.026,.026])this.sphere(w,.52,.275,.009,.006,.004,s,o);const f=new tt;f.position.set(1.25,1.65,-.38),f.rotation.z=-.3,this.scene.add(f),this.hammer=f,this.cylinder(.062,.079,1.34,e,f,0,.28,0,24);const u=Tx();this.mesh(u,[this.forgeMaterials.hammer,this.forgeMaterials.edge],f,0,1.1,0);const g=u.getAttribute("position");let x=1/0;for(let w=0;w<g.count;w++)x=Math.min(x,g.getX(w)*Math.sin(1.38)+(g.getY(w)+1.1)*Math.cos(1.38));this.hammerBottomOffset=x,this.hammerContact.y=this.forgeSwordY+.035-x;const m=this.box(.15,.026,.14,this.forgeMaterials.casting,f,0,1.331,0);m.rotation.y=.12,this.box(.035,.016,.105,this.forgeMaterials.edge,f,.018,1.349,0),this.cylinder(.078,.086,.52,this.surfaces.get("leather"),f,0,-.13,0,24);for(let w=0;w<9;w++){const A=this.mesh(new sn(.083,.011,6,24),this.surfaces.get("leather"),f,0,.1-w*.055,0);A.rotation.x=Math.PI/2}for(const w of[.16,-.41])this.cylinder(.088,.088,.045,r,f,0,w,0,24);f.updateMatrixWorld(!0),this.forgeHammerBounds.setFromObject(f),this.boardCanvas.width=1536,this.boardCanvas.height=768,this.board=new Li(this.boardCanvas),this.board.colorSpace=It,this.board.anisotropy=4;const p=this.boardFrame;p.position.set(0,3.55,-1.45),this.scene.add(p);const y=(w,A,_)=>{const b=new dn;b.moveTo(-w/2+_,-A/2);for(const[P,I]of[[w/2-_,-A/2],[w/2,-A/2+_],[w/2,A/2-_],[w/2-_,A/2],[-w/2+_,A/2],[-w/2,A/2-_],[-w/2,-A/2+_]])b.lineTo(P,I);return b.closePath(),b},M=new fn(y(5,1.67,.09),{depth:.1,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:2,steps:1});M.translate(0,0,-.06),this.mesh(M,new Ri({color:5455923,metalness:.92,roughness:.27,clearcoat:.3,clearcoatRoughness:.22}),p);const v=new Wl(y(4.94,1.61,.085)),S=v.getAttribute("uv"),E=v.getAttribute("position");for(let w=0;w<E.count;w++)S.setXY(w,(E.getX(w)+2.47)/4.94,(E.getY(w)+.805)/1.61);this.mesh(v,new tn({map:this.board,toneMapped:!1}),p,0,0,.071);for(const w of[-2.44,2.44])for(const A of[-.75,.75])this.sphere(w,A,.082,.012,.012,.007,r,p);p.traverse(w=>{w instanceof Oe&&(w.material=w.material.clone(),w.material.depthTest=!1,w.material.depthWrite=!1,w.renderOrder=100,w.castShadow=!1,w.receiveShadow=!1)}),this.contact(this.scene,.1,-.016,.1,4,2.3,.65),this.buildFurnace(),o.updateMatrixWorld(!0),this.forgeBenchBounds.setFromObject(o),this.targets.anvil.box.copy(this.forgeBenchBounds),this.targets.anvil.box.max.y=this.forgeSwordY+.25,this.host.dataset.anvilSupport="cast-iron",this.host.dataset.anvilSilhouette="symmetric-double-horn",this.host.dataset.anvilCenter=JSON.stringify(o.position.toArray());for(const w of[this.hammerRest,this.hammerRaised,this.hammerContact])w.x-=.4;f.position.copy(this.hammerRest),f.updateMatrixWorld(!0),this.forgeHammerBounds.setFromObject(f)}buildFurnace(){const e=this.surfaces.get("iron"),t=this.surfaces.get("stone",7),n=this.material(2169365),s=new ht({color:3612697,emissive:16731146,emissiveIntensity:1.7,roughness:1}),r=new tt;r.position.set(-3.15,0,-1.72),this.scene.add(r),this.box(1.64,1.07,1.25,n,r,0,.55,0);for(let c=0;c<3;c++)for(let h=0;h<3;h++)this.box(.54,.34,.08,t,r,-.55+h*.55,.2+c*.35,.665);this.box(1.37,1.22,.3,n,r,0,1.69,-.39);for(const c of[-.74,.74])for(let h=0;h<4;h++)this.box(.29,.34,1.16,t,r,c,1.27+h*.35,0);for(let c=0;c<11;c++){const h=c/11*Math.PI+.025,d=(c+1)/11*Math.PI-.025,f=new dn;f.moveTo(Math.cos(h)*.61,2.06+Math.sin(h)*.61),f.lineTo(Math.cos(h)*.92,2.06+Math.sin(h)*.92),f.absarc(0,2.06,.92,h,d,!1),f.lineTo(Math.cos(d)*.61,2.06+Math.sin(d)*.61),f.absarc(0,2.06,.61,d,h,!0),f.closePath();const u=new fn(f,{depth:1.14,bevelEnabled:!0,bevelSize:.013,bevelThickness:.012,bevelSegments:2,curveSegments:5});u.translate(0,0,-.57),this.mesh(u,t,r)}this.box(1.79,.11,1.58,e,r,0,1.1,.1),this.box(.9,1.68,.6,t,r,0,3.46,-.3);for(const c of[2.98,3.42,3.86])this.box(.94,.07,.64,e,r,0,c,-.3);const o=vs(88);for(let c=0;c<14;c++){const h=this.mesh(new kl(.15+o()*.07,0),c%3?s:e,r,-.53+c%5*.255,1.23+Math.floor(c/5)*.08,0+o()*.3);h.scale.y=.7,h.rotation.set(o(),o(),o())}const a=this.cylinder(.62,.62,.01,new tn({color:16737559}),r,0,1.17,.04,32);a.scale.z=.75;for(let c=0;c<7;c++){const h=this.sphere(-.46+c*.15,1.43+Math.sin(c)*.06,.05,.055,.22+o()*.1,.055,new tn({color:c%2?16761691:16747045,transparent:!0,opacity:.8}),r);h.castShadow=!1,h.userData.height=h.scale.y,this.flames.push(h)}for(let c=0;c<6;c++)this.cylinder(.023,.023,.5,e,r,-.57+c*.23,1.39,.65,10);const l=this.cylinder(.034,.034,1.42,e,r,0,1.28,.675,12);l.rotation.z=Math.PI/2,this.contact(r,0,-.016,.05,2.3,1.9,.65)}buildForgeProps(e){this.surfaces.get("oak",2);const t=this.surfaces.get("iron"),n=this.surfaces.get("steel"),s=new tt;e.add(s),s.position.set(-1.25,1.1,.1),s.rotation.y=-.38;for(const h of[-1,1]){const d=new rr([new R(h*.08,0,.37),new R(h*.045,.016,0),new R(h*.1,.022,-.2),new R(h*.13,.018,-.32)]);this.mesh(new gs(d,16,.018,6,!1),t,s)}this.cylinder(.029,.029,.02,n,s,0,.033,.03,12);const r=this.box(.065,.055,.35,n,e,1.43,1.1,.49);r.rotation.y=.5;const o=vs(12),a=this.material(2435370,.35,.85),l=new to(new Xl(.022),a,22),c=new rt;for(let h=0;h<22;h++)c.compose(new R((o()-.5)*2.3,1.08,o()*.72-.05),new di().setFromEuler(new on(o(),o(),o())),new R(1+o(),.23,1+o())),l.setMatrixAt(h,c);e.add(l)}makeSword(e=!1){const t=new tt,n=e?this.bladeMat:this.surfaces.get("steel").clone(),s=this.material(12163683,.8,.3),r=this.surfaces.get("leather").clone(),o=new Float32Array([0,0,-.29,0,0,.29,0,.065,0,1.95,0,-.29,1.95,0,.29,1.95,.065,0,2.42,0,0]),a=new mt;a.setAttribute("position",new Jt(o,3)),a.setAttribute("uv",new je([0,0,0,1,0,.5,.81,0,.81,1,.81,.5,1,.5],2)),a.setIndex([0,2,3,2,5,3,2,1,5,1,4,5,3,5,6,5,4,6,0,3,1,1,3,4]);const l=a.toNonIndexed();l.computeVertexNormals(),a.dispose();const c=this.mesh(l,n,t);c.name="blade";const h=new dn;h.moveTo(-.045,-.41),h.quadraticCurveTo(-.18,-.39,-.13,-.28),h.lineTo(-.1,-.08),h.lineTo(-.1,.08),h.lineTo(-.13,.28),h.quadraticCurveTo(-.18,.39,-.045,.41),h.lineTo(.035,.37),h.lineTo(.018,.08),h.lineTo(.018,-.08),h.lineTo(.035,-.37),h.closePath();const d=new fn(h,{depth:.12,bevelEnabled:!0,bevelSize:.016,bevelThickness:.016,bevelSegments:3,curveSegments:10});d.rotateX(-Math.PI/2),this.mesh(d,s,t,-.06,-.02,0);const f=this.cylinder(.062,.062,.56,r,t,-.38,.04,0);f.rotation.z=Math.PI/2;for(let u=0;u<9;u++){const g=this.mesh(new sn(.064,.007,5,20),r,t,-.16-u*.054,.04,0);g.rotation.y=Math.PI/2}for(const u of[-.12,-.66]){const g=this.cylinder(.072,.072,.03,s,t,u,.04,0,24);g.rotation.z=Math.PI/2}return this.sphere(-.71,.04,0,.1,.085,.085,s,t),this.sphere(-.72,.108,0,.035,.017,.035,this.material(4352625,.4,.23),t),t}enchantFittings(e){const t=new Set;e.traverse(n=>{if(n instanceof Oe){const s=Array.isArray(n.material)?n.material:[n.material];for(const r of s)r instanceof ht&&r!==this.bladeMat&&!t.has(r)&&(t.add(r),this.bladeFinish.decorate(r))}})}releaseSword(e){const t=new Set;e.traverse(n=>{if(n instanceof Oe){n.geometry.dispose();for(const s of Array.isArray(n.material)?n.material:[n.material])s!==this.bladeMat&&!this.sharedMaterials.has(s)&&t.add(s)}}),t.forEach(n=>n.dispose())}cachedSword(e,t,n,s){const r=[e,t,n,s].join(":");let o=this.swordCache.get(r);if(o)return this.swordCache.delete(r),this.swordCache.set(r,o),o;const a=Sn(e,t,s).theme;let l;if(a!=="legacy"&&(l=this.materialPool.get(a),!l)){l=Jl(a),this.materialPool.set(a,l);for(const c of Object.values(l))this.sharedMaterials.add(c),this.bladeFinish.decorate(c),c.clippingPlanes=[this.swallowPlane]}return o=xl(this.bladeMat,e,t,n,s,l),this.enchantFittings(o),o.traverse(c=>{if(c instanceof Oe)for(const h of Array.isArray(c.material)?c.material:[c.material])h.clippingPlanes=[this.swallowPlane]}),this.swordCache.set(r,o),this.pruneSwordCache(),o}pruneSwordCache(){for(;this.swordCache.size>6;){const e=[...this.swordCache].find(([t])=>t!==this.bladeShapeKey);if(!e)break;this.swordCache.delete(e[0]),this.releaseSword(e[1])}}queueSwordWarmup(e,t,n,s){this.warmup!==void 0&&cancelIdleCallback(this.warmup),!(!("requestIdleCallback"in window)||t>=99)&&(this.warmup=requestIdleCallback(r=>{this.warmup=void 0,!(this.destroyed||this.view!=="forge"||this.move||this.tributeDone||this.hostHammerBusy()||r.timeRemaining()<8)&&this.cachedSword(e,Math.min(99,t+1),n,s)}))}evolveSword(e,t,n,s){const r=e+":"+t+":"+n+":"+s;if(r===this.bladeShapeKey)return;const o=this.swordCache.get(this.bladeShapeKey);if(o)for(const l of[...this.sword.children])o.add(l);else this.releaseSword(this.sword),this.sword.clear();const a=this.cachedSword(e,t,n,s);for(const l of[...a.children])this.sword.add(l);this.sword.userData=a.userData,this.bladeShapeKey=r,this.host.dataset.swordName=Sn(e,t,s).name,this.host.dataset.swordShape=r,this.host.dataset.swordTheme=String(a.userData.theme||"forged"),this.host.dataset.swordSteelRoughness=String(a.userData.materials?.body?.roughness??"legacy"),this.forgeProofPending=!0,this.renderer.shadowMap.needsUpdate=!0,this.pruneSwordCache(),this.queueSwordWarmup(e,t,n,s)}buildCat(){const e=Fx();this.cat=e.root,this.head=e.head,this.jaw=e.jaw,this.belly=e.belly,this.tail=e.tail,this.catEyes=e.eyes,this.catMouth.copy(e.mouth),this.catPose=e.pose,this.catOutlet=e.outlet,this.cat.position.set(4.05,1.05,-1.32),this.scene.add(this.cat),this.host.dataset.catAsset="loading",this.host.dataset.characterSpecies="giant-panda",this.host.dataset.characterModel=String(e.root.userData.reconstruction),this.host.dataset.characterStyle="polygon-sculpture",this.host.dataset.characterLimbs=String(e.root.userData.limbStyle),this.host.dataset.characterTriangles=String(e.root.userData.triangles),this.renderer.shadowMap.needsUpdate=!0,e.ready.then(()=>{this.host.dataset.catAsset="ready",this.host.dataset.characterTriangles=String(e.root.userData.triangles),this.host.dataset.characterVolumeDepth=String(e.root.userData.volumeDepth),this.renderer.shadowMap.needsUpdate=!0}).catch(s=>{this.host.dataset.catAsset="failed",this.host.dataset.catError=String(s),console.error(s)}),this.whip.position.set(.91,1.38,.51),this.whip.visible=!1,this.cat.add(this.whip),this.cylinder(.045,.05,.48,this.material(5320738,.1,.8),this.whip,0,.2,0);const t=new rr([new R(0,.44,0),new R(.32,.9,.04),new R(.83,.93,.22),new R(1.12,.34,.63),new R(.62,-.44,1.5)]);this.mesh(new gs(t,32,.023,6,!1),this.material(3744535,0,.8),this.whip);const n=this.makeBench(2.55,1.8,4.05,-1.35);this.contact(n,0,1.075,0,1.85,1.5,.65),this.box(2.4,.12,.65,this.material(5858407,.7,.36),this.scene,4.05,1.12,.36)}buildRelics(){const e=this.relicCabinet;e.position.set(6.95,0,2.35),e.rotation.y=-Math.PI/2,this.scene.add(e);const t=this.surfaces.get("oak",9),n=this.material(12162390,.82,.26),s=this.material(1846320,.58,.37),r=this.material(3491916,.72,.29),o=this.material(14861707,.84,.23),a=new ht({color:11592661,emissive:8902844,emissiveIntensity:.65,roughness:.3}),l=(x,m,p,y,M,v,S)=>this.mesh(Ks(x,m,p,Math.min(.055,x*.15,m*.15,p*.15)),y,e,M,v,S);l(3.65,5.65,.63,s,0,2.88,0),l(3.32,5.2,.12,r,0,2.9,.35);for(const x of[.15,5.67])l(3.94,.15,.94,s,0,x,.08),l(3.82,.055,.92,n,0,x+.095,.08),l(3.6,.09,.78,t,0,x+.17,.08);for(const x of[-1.76,1.76]){l(.18,5.27,.58,s,x,2.95,.37),l(.045,5.2,.035,n,x,2.95,.68);for(const m of[.46,5.42])l(.27,.18,.64,n,x,m,.36),this.sphere(x,m,.7,.027,.027,.014,o,e);for(let m=0;m<3;m++)l(.022,4.64,.025,r,x+(m-1)*.045,2.96,.69)}l(3.14,.025,.04,a,0,5.42,.54);for(let x=0;x<3;x++){const m=.43+x*1.66,p=m+.78;l(3.28,.12,.76,s,0,m,.4),l(3.26,.035,.77,n,0,m+.068,.4),l(3,.018,.025,a,0,m+.105,.75),l(3.18,1.45,.025,this.material(1517355,.28,.48),0,p+.02,.43);const y=this.cylinder(.43,.48,.08,r,e,-.96,m+.15,.6,40);y.scale.z=.6;const M=this.cylinder(.44,.44,.023,n,e,-.96,m+.2,.6,40);M.scale.z=.61;const v=new tt;v.position.set(-.96,p,.65),v.scale.setScalar(1.72),e.add(v),this.relicSlots.push(v);for(const S of[-1.49,1.49]){const E=l(.1,.28,.1,n,S,m-.08,.41);E.rotation.z=S<0?-.5:.5}}for(const x of[-1.55,1.55])l(.27,.22,.58,s,x,.02,.12);const c=new no(12182745,8,6);c.position.set(-.6,3.7,1.8),e.add(c),this.contact(e,0,-.08,.15,4.3,1.5,.6),this.host.dataset.relicArt="sculpted-metal-gem-v1",e.scale.y=1.12,this.host.dataset.relicShelfCount="3",e.updateMatrixWorld(!0),this.targets.relics.box.setFromObject(e),this.targets.relics.anchor.copy(e.localToWorld(new R(0,2.6,.65))),this.host.dataset.relicYaw=String(-90);const h=this.merchantRoot;h.position.set(4.25,.09,-1.17),h.visible=!1,this.scene.add(h);const d=new ht({color:3164763,roughness:.8,transparent:!0,opacity:.88,emissive:792355,emissiveIntensity:.36}),f=this.material(3753547,.12,.79),u=new ht({color:11007454,emissive:5560250,emissiveIntensity:1.15,roughness:.22});this.mesh(new Mo(.47,1.45,14),d,h,0,.78,0),this.sphere(0,1.51,0,.31,.39,.3,f,h),this.sphere(0,1.63,-.065,.43,.4,.36,d,h);for(const x of[-.13,.13])this.sphere(x,1.52,.276,.055,.062,.035,u,h);this.cylinder(.37,.4,.1,n,h,0,.11,0);const g=this.cylinder(.035,.04,1.62,n,h,-.47,.83,.25);g.rotation.z=-.13,this.sphere(-.56,1.65,.25,.12,.12,.12,u,h)}buildCollection(){const e=this.collectionRoot;e.position.set(-7,.15,2.4),e.rotation.y=Math.PI/2,this.scene.add(e),this.host.dataset.collectionYaw=String(90);const t=this.surfaces.get("oak",9),n=this.material(12162390,.75,.32);this.box(4.25,7.4,.16,t,e,0,3.55,0);for(const s of[-2.1,2.1])this.box(.1,7.44,.24,n,e,s,3.55,.08);for(const s of[.42,3.82,7.22])this.box(4.17,.1,.4,t,e,0,s,.16);for(let s=0;s<2;s++)for(let r=0;r<3;r++)for(const o of[-.21,.21]){const a=this.mesh(new sn(.08,.019,8,16,Math.PI),n,e,(r-1)*1.3+o,s*3.4+.95,.25);a.rotation.z=Math.PI}e.scale.set(1.2,1.2,1),e.add(this.collectionSwords)}syncDisplays(e){const t=JSON.stringify([e.relicOffers,e.relics,e.relicRanks,e.caseIds,e.showLegacySwords]);if(t!==this.displayKey){this.displayKey=t,this.relicSlots.forEach((n,s)=>{va(n);const r=e.relicOffers[s];r&&n.add(Lh(r))}),va(this.wallRelics),this.box(4.5,.57,.08,this.surfaces.get("iron").clone(),this.wallRelics,0,0,0),e.relics.forEach((n,s)=>{const r=Lh(n);r.scale.setScalar(.66),r.position.set((s-(e.relics.length-1)/2)*.51,-.025,.1),this.wallRelics.add(r),this.mesh(new sn(.04,.012,6,16),this.material(12162390,.7,.3),this.wallRelics,r.position.x,.2,.09)});for(const n of[-2.05,2.05]){this.box(.1,.76,.14,this.material(3226176,.8,.3),this.wallRelics,n,-.07,0);for(const s of[-.32,.22])this.sphere(n,s,.09,.045,.045,.025,this.material(12162390,.7,.3),this.wallRelics)}va(this.collectionSwords),Jx(this.collectionSwords,e,this.bladeMat.clone()),this.host.dataset.wallRelics=JSON.stringify(e.relics),this.host.dataset.relicSlots=JSON.stringify(e.relicOffers),this.host.dataset.collectionIds=JSON.stringify(e.caseIds),this.renderer.shadowMap.needsUpdate=!0}}positionWallRelics(){const e=this.wallRelics;e.visible=!0,e.position.set(0,3.05,-2.88),e.rotation.set(0,0,0),e.scale.setScalar(1),e.updateMatrixWorld(!0),this.host.dataset.wallRelicMount="world-wall",this.host.dataset.wallRelicWorld=JSON.stringify({position:e.position.toArray(),quaternion:e.quaternion.toArray(),scale:e.scale.toArray(),depthTest:!0})}resize(){const e=this.host.clientWidth,t=this.host.clientHeight;if(!e||!t)return;const n=Math.max(1,Math.min(devicePixelRatio,2,Math.sqrt(2e6/(e*t))));this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.swordGlow?.resize(e,t),this.host.dataset.renderPixelRatio=String(n),this.host.dataset.renderWidth=String(this.renderer.domElement.width),this.host.dataset.renderHeight=String(this.renderer.domElement.height),this.host.dataset.swordAntialias=this.swordGlow.samples?`MSAA${this.swordGlow.samples}`:"SMAA",this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.forgeProofPending=!0}ledgerLayout(){const e=this.host.clientWidth,t=this.host.clientHeight,n=t<520,s=e>=700,r=n?Math.min(e*.54,460):s?Math.min(e*.5,640):e-28,o=r*(448/1024),a=n?92:s?130:146;return{width:r,height:o,left:(e-r)/2,top:a,bottom:a+o,wide:s}}cameraPose(){const e=this.camera.aspect<.8;if(this.view==="forge"){const t=this.state?.session?.phase;if(t!=="finished"&&t!=="broken"){const o=t==="forge",a=this.host.clientWidth,l=this.host.clientHeight,c=this.ledgerLayout(),h=new R(e&&!o?-1.05:0,2.1,.1),d=h.clone().add(new R(0,5.2,8.4)),f=42,u=this.fitCamera;u.aspect=this.camera.aspect,u.fov=f,u.clearViewOffset(),u.updateProjectionMatrix();const g=[],x=this.forgeBenchBounds;for(const P of[x.min.x,x.max.x])for(const I of[x.min.y,x.max.y])for(const F of[x.min.z,x.max.z])g.push(new R(P,I,F));const m=this.forgeHammerBounds;for(const P of[m.min.x,m.max.x])for(const I of[m.min.y,m.max.y])for(const F of[m.min.z,m.max.z])g.push(new R(P,I,F));if(e&&!o)for(const P of[-4.08,-2.22])for(const I of[0,4.3])g.push(new R(P,I,-1));const p=e?a*.93:Math.min(a*.52,680),y=this.host.closest(".game")?.querySelector(".control:not([hidden])")?.getBoundingClientRect(),M=this.host.getBoundingClientRect(),v=this.host.closest(".game")?.querySelector(".station-nav")?.getBoundingClientRect(),S=Math.min(o&&y?y.top-M.top-18:l-20,v?v.top-M.top-18:l-20),E=(this.boardHidden?146:c.bottom)+20,w=Math.max(90,S-E);for(let P=0;P<4;P++){u.position.copy(d),u.lookAt(h),u.updateMatrixWorld(!0);const I=g.map(G=>G.clone().project(u)),F=I.map(G=>G.x),N=I.map(G=>G.y),V=Math.max(...F.map(Math.abs))*a,W=(Math.max(...N)-Math.min(...N))*l/2,X=Math.max(V/p,W/w);if(Math.abs(X-1)<.002)break;d.sub(h).multiplyScalar(X).add(h)}u.position.copy(d),u.lookAt(h),u.updateMatrixWorld(!0);const A=Math.max(...g.slice(0,8).map(P=>(1-P.clone().project(u).y)*l/2)),_=g.map(P=>(1-P.clone().project(u).y)*l/2),b=e&&!o?(Math.min(..._)+Math.max(..._)-E-S)/2/l:(A-S)/l;return Math.abs(b-this.lastForgeOffset)>5e-4&&(this.lastForgeOffset=b,this.forgeProofPending=!0),{position:d,target:h,offset:b,fov:f}}const n=new R(e?0:.35,e?6.4:5.6,e?9:6.4),s=new R(e?0:.35,2.05,-.3);let r=e?.2:.17;if(e){const o=this.host.closest(".game")?.querySelector(".control:not([hidden])")?.getBoundingClientRect(),a=this.host.getBoundingClientRect();if(o&&o.top>a.top+160){this.fitCamera.aspect=this.camera.aspect,this.fitCamera.updateProjectionMatrix(),this.fitCamera.position.copy(n),this.fitCamera.lookAt(s),this.fitCamera.updateMatrixWorld(!0);const l=new R(0,this.forgeSwordY-.03,.61).project(this.fitCamera);r=Math.max(r,((1-l.y)*a.height/2-(o.top-a.top-22))/a.height)}}return Math.abs(r-this.lastForgeOffset)>5e-4&&(this.lastForgeOffset=r,this.forgeProofPending=!0),{position:n,target:s,offset:r,fov:e?46:40}}if(this.view==="cat"){const t=Wr.phoneDepth,n=new R(4.05,1.05+Wr.targetY,-1.22),s=new R(4.05,n.y+(t-.1)*Math.tan(Wr.pitch),t-1.32);let r=e?.13:.1,o=e?Wr.fov:15.5;return this.punishment&&(n.x+=.35,s.x+=.35,o*=1.35),{position:s,target:n,offset:r,fov:o}}return this.sideCameraPose()}sideCameraPose(){const e=this.view==="collection",t=e?this.collectionRoot:this.relicCabinet;t.updateMatrixWorld(!0);const n=e?new Ct().setFromObject(t):new Ct(new R(-1.98,-.09,-.5),new R(1.98,5.96,.85)).applyMatrix4(t.matrixWorld),s=n.getCenter(new R),r=this.host.clientWidth,o=this.host.clientHeight,a=this.host.getBoundingClientRect(),l=this.host.closest(".game")?.querySelector(".topbar")?.getBoundingClientRect(),c=this.host.closest(".game")?.querySelector(".station-nav")?.getBoundingClientRect(),h=Math.max(92,(l?.bottom??76)-a.top+8),d=Math.min(o-76,(c?.top??o)-a.top-(e?12:58)),f=Math.max(150,d-h),u=r*.96;let g=this.camera.aspect<.8?55:40;const x=Math.tan(St.degToRad(g/2)),m=n.getSize(new R),p=Math.max(m.y/(2*x)*o/f,m.z/(2*x*this.camera.aspect)*r/u)+m.x/2,y=Math.min(12.5,p);return y<p&&(g=St.radToDeg(2*Math.atan(x*(p-m.x/2)/(y-m.x/2)))),{position:s.clone().add(new R(e?y:-y,0,0)),target:s,offset:(o-h-d)/(2*o),fov:g}}setStation(e){e!=="cat"&&this.holdRear&&(this.holdRear=!1,this.catPose(0),this.cat.rotation.y=0),this.view=e,this.host.dataset.station=e,this.forgeProofPending=!0,this.poseAt=-1/0;const t=e==="forge";this.roomKey.intensity=t?1.45:2.7,this.roomFill.intensity=t?4:11,this.roomAmbient.intensity=t?.38:.65,this.forgeKey.intensity=t?38:0,this.scene.environmentIntensity=t?.72:1,this.renderer.shadowMap.needsUpdate=!0}projectCatBounds(e,t=this.host.clientWidth,n=this.host.clientHeight){this.cat.updateWorldMatrix(!0,!0);const s=new R;let r=1/0,o=-1/0,a=1/0,l=-1/0;const c=e.projectionMatrix.clone().multiply(e.matrixWorldInverse);return this.cat.traverse(h=>{if(!(h instanceof Oe)||!h.visible)return;let d=h.geometry.userData.pandaVisibilityPositions;if(!d){const u=h.geometry.getAttribute("position"),g=new Set,x=[];for(let m=0;m<u.count;m++){const p=u.getX(m),y=u.getY(m),M=u.getZ(m),v=p+":"+y+":"+M;g.has(v)||(g.add(v),x.push(p,y,M))}d=new Float32Array(x),h.geometry.userData.pandaVisibilityPositions=d}const f=c.clone().multiply(h.matrixWorld);for(let u=0;u<d.length;u+=3){s.fromArray(d,u).applyMatrix4(f);const g=(s.x+1)*t/2,x=(1-s.y)*n/2;r=Math.min(r,g),o=Math.max(o,g),a=Math.min(a,x),l=Math.max(l,x)}}),{left:r,right:o,top:a,bottom:l}}recordCatVisibility(){const e=this.host.clientHeight,t=this.projectCatBounds(this.camera),n=this.head.localToWorld(this.catMouth.clone()),s=this.host.closest(".game")?.querySelector(".control:not([hidden])")?.getBoundingClientRect(),r=new R(1,0,0).applyQuaternion(this.sword.quaternion),o=new R(0,1,0).applyQuaternion(this.sword.quaternion);this.pendingCatProof=JSON.stringify({phase:this.host.dataset.tribute||"idle",navTop:s?s.top-this.host.getBoundingClientRect().top:e,elapsed:this.tributeElapsed,jawAngle:this.jaw.rotation.x,headPitch:this.head.rotation.x,stance:this.cat.userData.quadruped||0,backAnatomy:this.cat.userData.backAnatomy,tail:this.tail.getWorldPosition(new R).toArray(),outlet:this.catOutlet().toArray(),rewardCount:this.rewards.length,swordPosition:this.sword.position.toArray(),swordVisible:this.sword.visible,swordUp:r.toArray(),swordFace:o.toArray(),bodyDepth:this.belly.scale.z,eyeOpen:this.catEyes[0]?.scale.y??1,turn:this.cat.rotation.y,mouth:n.toArray(),bounds:t})}recordForgeVisibility(){const e=this.host.clientWidth,t=this.host.clientHeight,n=(w,A,_)=>this.sword.localToWorld(new R(w,A,_)),s=w=>(w.project(this.camera),{x:(w.x+1)*e/2,y:(1-w.y)*t/2}),r=new Ct().setFromObject(this.sword),o=[];for(const w of[r.min.x,r.max.x])for(const A of[r.min.y,r.max.y])for(const _ of[r.min.z,r.max.z])o.push(new R(w,A,_));const a=o.map(s),l=s(n(1,0,.29)),c=s(n(1,0,-.29));let h=0,d=0;const f=[],u=[];for(const w of[.45,1.2,1.85])for(const A of[-.13,.13]){let _=n(w,.065*(1-Math.abs(A)/.29),A);for(const[F,N]of[[0,0],[0,-.04],[0,.04],[.06,0],[-.06,0],[0,-.1],[0,.1],[.12,0],[-.12,0]]){const W=new Fs(n(w+F,1,A+N),new R(0,-1,0),0,3).intersectObject(this.sword,!0).find(X=>X.object.name.startsWith("blade"));if(W){_=W.point.clone();break}}const b=_.clone().sub(this.camera.position);u.push(s(_.clone()));const P=new Fs(this.camera.position,b.clone().normalize(),0,b.length()+.025);P.camera=this.camera;const I=P.intersectObjects(this.scene.children,!0).find(F=>F.object instanceof Oe?!(Array.isArray(F.object.material)?F.object.material[F.face?.materialIndex??0]:F.object.material).transparent:!1);f.push(I?.object.name||"none");for(let F=I?.object||null;F;F=F.parent)if(F===this.sword){h++,I?.object.name.startsWith("blade")&&d++;break}}const g=[n(-.23,.087,0),n(-.39,.087,0),n(-.56,.087,0),n(-.06,.064,-.32),n(-.06,.064,.32)].map(s),x=(this.host.closest(".game")?.querySelector(".control:not([hidden])")?.getBoundingClientRect().top||this.host.clientHeight)-this.host.getBoundingClientRect().top,m=this.boardLayout.top,p=this.forgeBenchBounds,y=[];for(const w of[p.min.x,p.max.x])for(const A of[p.min.y,p.max.y])for(const _ of[p.min.z,p.max.z])y.push(new R(w,A,_));const M=y.map(s),v={left:Math.min(...M.map(w=>w.x)),right:Math.max(...M.map(w=>w.x)),top:Math.min(...M.map(w=>w.y)),bottom:Math.max(...M.map(w=>w.y))},S=this.ledgerLayout(),E={left:S.left,right:S.left+S.width,top:m,bottom:this.boardLayout.bottom};this.pendingForgeProof=JSON.stringify({phase:this.state?.session?.phase||"idle",navTop:x,boardVisible:this.boardFrame.visible,boardTop:m,ledger:E,benchBounds:v,bounds:{left:Math.min(...a.map(w=>w.x)),right:Math.max(...a.map(w=>w.x)),top:Math.min(...a.map(w=>w.y)),bottom:Math.max(...a.map(w=>w.y))},faceHeight:Math.abs(l.y-c.y),visibleSamples:h,bladeSamples:d,sampleSurfaces:f,totalSamples:6,samples:u,hiltSamples:g}),this.forgeProofPending=!1}sync(e,t){const n=!this.state;this.state=e,this.boardProb=t;const s=e.session;if(this.merchantRoot.visible=!1,this.syncDisplays(e),this.tributeDone)return;this.sword.visible=s?.phase!=="broken";const r=s?.level||0,o=s?.blade||"great";this.swordScale=o==="short"?.72:o==="great"?1:.9,this.evolveSword(o,r,s?.material||"iron",e.showLegacySwords),n&&(this.swordPlace=s?.phase==="heat"?"furnace":"anvil"),this.move||this.applySwordPose(this.swordPlace);const a=[s?.id,s?.phase,s?.level,s?.hits,s?.superGod,e.showLegacySwords,this.displayKey].join(":");a!==this.forgeProofState&&(this.forgeProofState=a,this.forgeProofPending=!0);const l=s?.phase||"idle";l!==this.bladePhase&&(l==="forge"&&(this.bladeCoolingAt=this.clockNow()),this.bladePhase=l),this.bladeFinish.setLevel(r,s?.material||"iron"),this.drawBoard(e,t)}swordPose(e){const t=this.swordScale*(e==="anvil"?1:.52);return{position:e==="furnace"?new R(-3.15,1.53,-.71):new R(-.805*t-.4,this.forgeSwordY,.11),rotation:new di().setFromEuler(new on(0,e==="furnace"?Math.PI/2:e==="anvil"?-.09:0,0)),scale:new R(t,t,t)}}applySwordPose(e){const t=this.swordPose(e);if(this.sword.position.copy(t.position),this.sword.quaternion.copy(t.rotation),this.sword.scale.copy(t.scale),this.host.dataset.swordPlace=e,e==="anvil"&&this.contactShapeKey!==this.bladeShapeKey){this.sword.updateMatrixWorld(!0);const s=new Fs(new R(this.hammerContact.x,this.forgeSwordY+1,this.hammerContact.z),new R(0,-1,0),0,2).intersectObject(this.sword,!0).find(r=>r.object.name.startsWith("blade"));s&&(this.hammerContact.y=s.point.y+.003-this.hammerBottomOffset),this.contactShapeKey=this.bladeShapeKey}}transferTo(e,t){this.move={start:this.clockNow(),from:this.sword.position.clone(),rotation:this.sword.quaternion.clone(),scale:this.sword.scale.clone(),to:e,done:t},this.host.dataset.swordPlace="moving",this.renderer.shadowMap.needsUpdate=!0}setHeat(e){this.heat=e}pick(e,t){const n=this.host.getBoundingClientRect(),s=new Fs;if(s.setFromCamera(new ie((e-n.left)/n.width*2-1,1-(t-n.top)/n.height*2),this.camera),this.view==="collection")return null;const r=this.view==="forge"?["furnace","anvil","cat","relics"]:this.view==="cat"?["cat"]:["relics"];let o=null,a=1/0;for(const l of r){const c=s.ray.intersectBox(this.targets[l].box,new R);if(c){const h=c.distanceTo(s.ray.origin);h<a&&(a=h,o=l)}}return o}pickRelic(e,t){if(this.view!=="relics"||!this.state)return null;const n=this.host.getBoundingClientRect(),s=new Fs;s.setFromCamera(new ie((e-n.left)/n.width*2-1,1-(t-n.top)/n.height*2),this.camera);for(let r=0;r<this.relicSlots.length;r++){const o=this.relicSlots[r];o.updateWorldMatrix(!0,!0);const a=new Ct(new R(-.55,-.27,-.18),new R(.55,.28,.3)).applyMatrix4(o.matrixWorld);if(this.state.relicOffers[r]&&s.ray.intersectsBox(a))return this.state.relicOffers[r]}return null}positionTargets(){const e=performance.now();if(e-this.targetsAt<33)return;const t=[this.view,this.displayKey,this.boardHidden,this.host.clientWidth,this.host.clientHeight,this.camera.fov.toFixed(3),this.camera.view?.offsetY.toFixed(2)].join(":");if(!this.camera.matrixWorld.elements.some((l,c)=>Math.abs(l-this.targetsPose.elements[c])>1e-5)&&t===this.targetsVersion)return;this.targetsAt=e,this.targetsVersion=t,this.targetsPose.copy(this.camera.matrixWorld);const s={};for(const[l,c]of Object.entries(this.targets)){const h=c.anchor.clone().project(this.camera),d=(h.x+1)*this.host.clientWidth/2,f=(1-h.y)*this.host.clientHeight/2;s[l]={x:d,y:f};const u=document.getElementById("target-"+l);if(u){u.style.left=d+"px",u.style.top=(l==="furnace"?f-28:f)+"px";const g=104,x=32,m=this.ledgerLayout(),p=l==="furnace"?f-28:f,y=l==="furnace"&&!this.boardHidden&&d+g/2>m.left&&d-g/2<m.left+m.width&&p>m.top&&p-x<m.bottom;u.dataset.inView=String(!y&&d>g/2+6&&d<this.host.clientWidth-g/2-6&&f>120&&f<this.host.clientHeight-110)}}this.host.dataset.targets=JSON.stringify(s);const r=document.getElementById("relic-list");r&&(r.hidden=this.view!=="relics"),this.view==="relics"&&(this.host.dataset.relicPoints=JSON.stringify(this.relicSlots.map(l=>{const c=l.getWorldPosition(new R).project(this.camera);return{x:(c.x+1)*this.host.clientWidth/2,y:(1-c.y)*this.host.clientHeight/2}})),this.relicSlots.forEach((l,c)=>{const h=r?.children[c];if(!h)return;const d=(m,p)=>{const y=this.relicCabinet.localToWorld(new R(m,l.position.y+p,.72)).project(this.camera);return{x:(y.x+1)*this.host.clientWidth/2,y:(1-y.y)*this.host.clientHeight/2,z:y.z}},f=d(-.26,.69),u=d(1.48,-.69),g=Math.abs(u.x-f.x),x=Math.abs(u.y-f.y);h.style.left=Math.min(f.x,u.x)+"px",h.style.top=Math.min(f.y,u.y)+"px",h.style.width=g+"px",h.style.height=x+"px",h.style.fontSize=Math.max(9,Math.min(14,g/12))+"px",h.hidden=f.z<-1||f.z>1||g<24||this.camera.position.x>this.relicCabinet.position.x-1}));const o=document.getElementById("wall-relic-trigger");if(o&&(o.hidden=this.view!=="forge",!o.hidden)){const l=new Ct().setFromObject(this.wallRelics),c=l.getCenter(new R).project(this.camera),h=l.min.clone().project(this.camera),d=l.max.clone().project(this.camera),f=Math.abs(h.x-d.x)*this.host.clientWidth/2,u=Math.abs(h.y-d.y)*this.host.clientHeight/2;o.style.left=(c.x+1)*this.host.clientWidth/2-f/2+"px",o.style.top=(1-c.y)*this.host.clientHeight/2-u/2+"px",o.style.width=f+"px",o.style.height=Math.max(24,u)+"px";const g=(1-c.y)*this.host.clientHeight/2;o.hidden=g<100||g>this.host.clientHeight-100,this.host.dataset.wallRelicPoint=JSON.stringify({x:(c.x+1)*this.host.clientWidth/2,y:g})}const a=document.getElementById("collection-list");a&&(a.hidden=this.view!=="collection"),this.view==="collection"&&a&&(this.state?.caseIds.map(c=>this.state.swords.find(h=>h.id===c&&h.disposal==="COLLECTED")).filter(Boolean)||[]).forEach((c,h)=>{const d=a.querySelector('[data-sword-id="'+c.id+'"]');if(!d)return;const f=(M,v)=>this.collectionRoot.localToWorld(new R(M,v,.48)).project(this.camera),u=(h%3-1)*1.3,g=Math.floor(h/3)*3.4,x=f(u-.61,g+3.59),m=f(u+.61,g+2.94),p=Math.abs(m.x-x.x)*this.host.clientWidth/2,y=Math.abs(m.y-x.y)*this.host.clientHeight/2;d.style.left=(Math.min(x.x,m.x)+1)*this.host.clientWidth/2+"px",d.style.top=(1-Math.max(x.y,m.y))*this.host.clientHeight/2+"px",d.style.width=p+"px",d.style.minHeight=y+"px",d.style.fontSize=Math.max(9,Math.min(14,p/9))+"px",d.hidden=x.z<-1||x.z>1||p<20||this.camera.position.x<this.collectionRoot.position.x+1})}drawBoard(e,t){if(this.view!=="forge")return;const n=[e.session?.id,e.session?.phase,e.session?.hits].join(":"),s=performance.now();if(n===this.boardSessionKey&&s-this.boardPaintAt<100)return;const r=e.session,o=this.boardInfo,a=!!r?.superGod,l=!!r&&wn(r),c=l?Math.max(0,(r.frenzyUntil-Date.now())/1e3).toFixed(1):"",h=t||{success:6500,great:1e3,unchanged:1500,damage:1e3,break:0},d=[this.boardWide,e.showLegacySwords,r?.level,r?.hits,r?.phase,o.value,r?.frenzyCharge,a,c,o.cue,o.result,Math.round(o.heat),...Object.values(h)].join(",");d!==this.lastBoard&&(this.lastBoard=d,this.boardSessionKey=n,this.boardPaintAt=s,this.host.dataset.boardText=jx(this.boardCanvas.getContext("2d"),e,h,o),this.host.dataset.boardStyle="brushed-metal",this.host.dataset.boardFinish="dark-brown-metal",this.host.dataset.boardValue=String(o.value),this.board.needsUpdate=!0)}hostHammerBusy(){return this.host.dataset.hammerStage==="swing"||this.host.dataset.hammerStage==="impact"}strike(e,t=1){this.hitSpeed=t,this.hitStart=this.clockNow(),this.hitResult="success",this.hitImpact=!1,this.onHitImpact=e,this.hitImpactAt=-10,this.renderer.shadowMap.needsUpdate=!0,this.host.dataset.hammerStage="swing"}spawnFragments(){if(!this.reduced)for(let e=0;e<9&&this.fx.length<50;e++){const t=this.mesh(new pn(.07+Math.random()*.1,.035,.13+Math.random()*.12),this.bladeMat.clone(),this.scene);t.position.set(-.65+Math.random()*1.5,this.forgeSwordY+.05,.1+(Math.random()-.5)*.3),t.rotation.set(Math.random()*2,Math.random()*3,Math.random()),this.fx.push({mesh:t,v:new R((Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*2),life:.8})}}spawnSparks(e,t){if(!this.reduced)for(let n=0;n<e&&this.fx.length<50;n++){const s=this.sparkPool.pop()||new Oe(this.sparkGeometry,this.sparkMaterials[n%2]);s.userData.pooledSpark=!0,s.castShadow=!1,s.receiveShadow=!1,s.scale.setScalar(1),this.scene.add(s),s.position.copy(t),this.fx.push({mesh:s,v:new R((Math.random()-.5)*4,1+Math.random()*3,(Math.random()-.5)*3),life:.5+Math.random()*.3})}}showTributeSword(e){this.evolveSword(e.blade,e.level,e.material,this.state?.showLegacySwords??!1)}async punish(e){if(this.punishment||this.tributeDone)throw new Error("食铁兽正在忙");return this.clearRewards(),this.setStation("cat"),this.sword.visible=!1,this.whip.visible=!0,this.host.dataset.tribute="punishing",this.host.dataset.whipHits="0",new Promise(t=>{this.punishment={start:this.clockNow(),done:t,onHit:e,hits:0}})}async tribute(e,t){if(this.tributeDone)throw new Error("食铁兽还在吃剑");return this.clearRewards(),this.setStation("cat"),this.tributeCount=e,this.holdRear=!1,this.catPose(0),this.sword.traverse(n=>{if(n instanceof Oe)for(const s of Array.isArray(n.material)?n.material:[n.material])s instanceof ht&&!this.tributeReflections.has(s)&&(this.tributeReflections.set(s,s.envMapRotation.clone()),s.envMapRotation.y+=Math.PI)}),await this.renderer.compileAsync(this.scene,this.camera),this.renderer.shadowMap.needsUpdate=!1,this.tributeStart=this.clockNow(),this.tributeElapsed=0,this.host.dataset.tribute="offering",this.submittedTribute=0,this.renderedTribute=0,t("食铁兽仰头张嘴，吞下头顶的宝剑……"),new Promise(n=>{this.tributeDone=n,this.host.addEventListener("tribute-stage",(s=>t(s.detail)),{signal:this.stageAbort.signal})})}stageAbort=new AbortController;stage(e,t){this.host.dataset.tribute!==e&&(this.host.dataset.tribute=e,this.host.dispatchEvent(new CustomEvent("tribute-stage",{detail:t})))}tick=e=>{if(this.raf=0,this.paused||this.destroyed)return;const t=Jr?performance.now():0,n=e/1e3-this.clockOffset,s=this.prev?Math.min(.2,n-this.prev):.016;this.prev=n,(!this.poseCache||e-this.poseAt>=200)&&(this.poseCache=this.cameraPose(),this.poseAt=e);const r=this.poseCache;this.camera.fov=St.lerp(this.camera.fov,r.fov,1-Math.exp(-s*5)),this.camera.setViewOffset(this.host.clientWidth,this.host.clientHeight,0,this.host.clientHeight*r.offset,this.host.clientWidth,this.host.clientHeight),this.camera.position.lerp(r.position,1-Math.exp(-s*5)),this.target.lerp(r.target,1-Math.exp(-s*5)),this.camera.lookAt(this.target),this.camera.updateMatrixWorld(!0),this.positionTargets();const o=!!this.move;if(this.move&&!this.tributeDone){const _=this.move,b=this.swordPose(_.to),P=Dh((n-_.start)/.7,0,1),I=P*P*(3-2*P);this.sword.position.lerpVectors(_.from,b.position,I),this.sword.position.y+=Math.sin(P*Math.PI)*.8,this.sword.quaternion.slerpQuaternions(_.rotation,b.rotation,I),this.sword.scale.lerpVectors(_.scale,b.scale,I),this.renderer.shadowMap.needsUpdate=!0,P>=1&&(this.swordPlace=_.to,this.move=null,this.applySwordPose(_.to),this.forgeProofPending=!0,_.done())}xr&&(this.host.dataset.swordPosition=JSON.stringify(this.sword.position.toArray())),this.boardFrame.visible=!this.boardHidden&&this.view==="forge"&&this.state?.session?.phase!=="finished"&&this.state?.session?.phase!=="broken",this.boardFrame.quaternion.copy(this.camera.quaternion);const a=this.ledgerLayout();this.boardLayout=a,this.boardWide!==a.wide&&(this.boardWide=a.wide,this.lastBoard="",this.state&&this.drawBoard(this.state,this.boardProb)),this.boardFrame.position.set(0,3.55,-1.45),this.boardFrame.scale.setScalar(1),this.boardFrame.updateMatrixWorld(!0);const l=this.boardFrame.position.clone().project(this.camera);l.x=2*(a.left+a.width/2)/this.host.clientWidth-1,l.y=1-(a.top+a.bottom)/this.host.clientHeight,this.boardFrame.position.copy(l.unproject(this.camera)),this.boardFrame.updateMatrixWorld(!0);const c=this.boardFrame.localToWorld(new R(-2.525,0,0)).project(this.camera),d=(this.boardFrame.localToWorld(new R(2.525,0,0)).project(this.camera).x-c.x)*this.host.clientWidth/2,f=a.width/d;this.boardFrame.scale.set(f,f*(a.height/a.width)/(1.72/5.05),f),this.boardFrame.updateMatrixWorld(!0),this.view==="forge"&&this.wallRelics.position.y!==3.05&&this.positionWallRelics(),this.furnaceLight.intensity=20+Math.sin(n*11)*1.5+Math.sin(n*23)*1.2,this.flames.forEach((_,b)=>{_.scale.y=_.userData.height*(.9+Math.sin(n*7+b*4)*.12),_.rotation.y=n+b});const u=(n-this.hitStart)/this.hitSpeed,g=this.onHitImpact&&u>=.18?.18:this.hitImpact?.18+(n-this.hitImpactAt)/this.hitSpeed:u,x=this.hammerRest,m=this.hammerRaised,p=this.hammerContact;let y=-.3;if(this.hammer.position.copy(x),g>=0&&g<.08){const _=g/.08;y=St.lerp(-.3,-.48,_),this.hammer.position.lerpVectors(x,m,_)}else if(g>=.08&&g<.18){const _=Math.pow((g-.08)/.1,2);y=St.lerp(-.48,1.38,_),this.hammer.position.lerpVectors(m,p,_)}else if(g>=.18&&g<.22)y=1.38,this.hammer.position.copy(p);else if(g>=.22&&g<.55){const _=(g-.22)/.33,b=1-Math.pow(1-_,3);y=St.lerp(1.38,-.3,b),this.hammer.position.lerpVectors(p,x,b)}this.hammer.rotation.z=y;const M=this.state?.session&&wn(this.state.session),v=this.bladePhase==="heat"?this.heat/100:this.bladePhase==="forge"?this.heat/100*Math.exp(-Math.max(0,n-this.bladeCoolingAt)*.7):0,S=!!this.state?.session?.superGod;if(this.bladeFinish.setTransform(this.sword),this.bladeFinish.update(n,v,!!M,S),Ix(this.sword,n,!!M||S,this.reduced),this.host.dataset.bladeFinish=S?"cosmos":M?"rainbow":"metal",this.host.dataset.hiltFinish=this.host.dataset.bladeFinish,this.host.dataset.bladeColor=this.bladeFinish.color,u>=.18&&!this.hitImpact&&this.onHitImpact){this.hitImpact=!0,this.hitImpactAt=n;const _=this.onHitImpact;this.onHitImpact=null,this.hitResult=_(),this.host.dataset.hammerStage="impact",this.host.dataset.hammerImpacts=String(Number(this.host.dataset.hammerImpacts||0)+1),this.renderer.shadowMap.needsUpdate=!0,this.hitResult==="break"&&this.spawnFragments(),this.spawnSparks(this.hitResult==="break"?36:this.hitResult==="damage"?12:this.hitResult==="great"?40:this.hitResult==="unchanged"?6:22,new R(.12,this.forgeSwordY+.05,.11))}if(g>=.18&&g<.36&&this.hitResult!=="break"&&this.swordPlace==="anvil"&&!this.move&&(this.sword.position.y=this.forgeSwordY+Math.sin((g-.18)/.18*Math.PI)*.025),g>=.18&&g<.32&&!this.reduced){const _=(g-.18)/.14;this.camera.position.y+=Math.sin(_*Math.PI*4)*.018*(1-_)}if(g>=.55&&this.host.dataset.hammerStage!=="idle"){this.host.dataset.hammerStage="idle",this.renderer.shadowMap.needsUpdate=!0;const _=this.state?.session;_?.phase==="forge"&&this.queueSwordWarmup(_.blade,_.level,_.material,this.state.showLegacySwords)}!this.tributeDone&&!this.punishment&&(this.holdRear||(this.cat.rotation.y=0,this.catPose(0)),this.head.rotation.z=0,this.jaw.rotation.x=0,this.belly.scale.set(1,1,1));const E=n%6.7,w=this.tributeDone?1:E<.19?Math.max(.08,Math.abs(E-.095)/.095):1;if(this.catEyes.forEach(_=>_.scale.y=w),this.host.dataset.pandaEyeOpen=String(w),this.catBlink(w),this.tail.rotation.z=Math.sin(n*1.5)*(this.tributeDone?.1:.045),this.punishment){const _=this.punishment,b=n-_.start,P=Math.max(0,b-.6)/.72;this.whip.rotation.x=-.6+Math.sin(Math.min(3,P)*Math.PI*2)*1.1,this.whip.rotation.z=.25+Math.sin(Math.min(3,P)*Math.PI*2)*.65,this.head.rotation.z=Math.sin(b*9)*.045,this.renderer.shadowMap.needsUpdate=!0;const I=Math.min(3,Math.max(0,Math.floor((b-.9)/.72)+1));I>_.hits&&(_.hits=I,this.host.dataset.whipHits=String(I),_.onHit(I),this.host.dispatchEvent(new CustomEvent("whip-impact"))),b>3.2&&(this.whip.visible=!1,this.head.rotation.z=0,this.punishment=null,this.host.dataset.tribute="punished",_.done())}if(this.tributeDone){const _=this.tributeElapsed=n-this.tributeStart,b=Ox(_);if(this.cat.rotation.y=-b.turn*Math.PI,this.catPose(b.stance,b.lookUp),this.jaw.rotation.x=_<1?.18*Math.sin(Math.min(1,_/.12)*Math.PI/2):0,_<1){const P=this.head.localToWorld(this.catMouth.clone()),I=.56;this.swallowPlane.constant=-P.y,this.sword.visible=!0,this.sword.quaternion.setFromRotationMatrix(new rt().makeBasis(new R(0,-1,0),new R(0,0,1),new R(-1,0,0))),this.sword.scale.setScalar(I),this.sword.position.copy(P).add(new R(0,(2.42*I+.1)*(1-b.swallow)-.78*I*b.swallow,.06))}else if(this.sword.visible=!1,_<2)this.stage("turning","食铁兽转身，四只脚站稳……");else{this.stage("ejecting","噗！食铁兽拉出 "+this.tributeCount+" 把铁剑，掉进接剑盘");const P=.65/Math.max(1,this.tributeCount-1),I=Math.min(this.tributeCount,Math.floor((_-2)/P)+1),F=this.catOutlet();for(;this.rewards.length<I;){const N=this.makeSword();N.scale.setScalar(.27),this.scene.add(N),this.rewards.push(N)}this.rewards.forEach((N,V)=>{const W=Dh((_-2-V*P)/.35,0,1),X=W*W*(3-2*W);N.position.copy(F).add(new R((V-(this.tributeCount-1)/2)*.24*X,-.1*X+Math.sin(W*Math.PI)*.08,.08+.4*X));const G=new R((V-(this.tributeCount-1)/2)*.13,-.5,.86).normalize(),ae=new R(0,0,1).addScaledVector(G,-G.z).normalize(),ue=new R().crossVectors(G,ae);N.quaternion.setFromRotationMatrix(new rt().makeBasis(G,ae,ue)),N.scale.set(.27*Math.min(1,.03+W*4),.27,.27)})}if(_>=3){this.stage("complete","纳贡完成 · 获得 "+this.tributeCount+" 把铁剑"),this.sword.visible=!1,this.holdRear=!0,this.cat.rotation.y=-Math.PI,this.catPose(1),this.jaw.rotation.x=0,this.belly.scale.set(1,1,1),this.swallowPlane.constant=1e3,this.renderer.shadowMap.needsUpdate=!0;for(const[I,F]of this.tributeReflections)I.envMapRotation.copy(F);this.tributeReflections.clear();const P=this.tributeDone;this.tributeDone=null,this.stageAbort.abort(),this.stageAbort=new AbortController,P()}}for(let _=this.fx.length-1;_>=0;_--){const b=this.fx[_];b.life-=s,b.v.y-=s*8,b.mesh.position.addScaledVector(b.v,s),b.mesh.scale.setScalar(Math.max(.01,b.life)),b.life<=0&&(this.scene.remove(b.mesh),b.mesh.userData.pooledSpark?this.sparkPool.push(b.mesh):(b.mesh.geometry.dispose(),b.mesh.material.dispose()),this.fx.splice(_,1))}const A=1e3/this.targetFps;if(e-this.renderAt>=A-.5){const _=this.renderer.getContext();if(this.gpuFrame&&_.clientWaitSync(this.gpuFrame,0,0)!==_.TIMEOUT_EXPIRED&&(_.deleteSync(this.gpuFrame),this.gpuFrame=null,this.host.dataset.gpuCompletedFrames=String(++this.completedFrames),this.renderedTribute=this.submittedTribute,this.host.dataset.renderedStation=this.submittedStation,this.host.dataset.renderedCameraReady=String(this.submittedCameraReady),this.host.dataset.boardVisible=String(this.boardFrame.visible),this.host.dataset.boardRenderedHits=String(this.submittedBoardHits),this.host.dataset.bladeRenderedFinish=this.submittedBladeFinish,this.pendingForgeProof&&(this.host.dataset.forgeProof=this.pendingForgeProof,this.pendingForgeProof=null),this.pendingCatProof&&(this.host.dataset.catProof=this.pendingCatProof,this.pendingCatProof=null)),!this.gpuFrame){const b=performance.now();this.renderAt=e-(e-this.renderAt)%A,this.swordGlow.render(this.scene,this.camera,this.sword.visible&&(this.view==="forge"||!!this.tributeDone)&&(!!M||S||!!this.sword.userData.referenceFx),S,this.sword,!!M||S),this.submittedStation=this.view,this.submittedCameraReady=this.camera.position.distanceTo(r.position)<.03&&Math.abs(this.camera.fov-r.fov)<.05,this.submittedTribute=this.tributeDone?this.tributeElapsed:0,this.submittedBoardHits=this.state?.session?.hits||0,this.submittedBladeFinish=S?"cosmos":M?"rainbow":"metal";const P=performance.now()-b;if(this.drawCost=this.drawCost*.9+P*.1,this.drawCost>22?(this.targetFps=30,this.fastFrames=0):this.drawCost<10&&++this.fastFrames>120&&(this.targetFps=60),this.metrics.frame(e,Jr?performance.now()-t:0,this.renderer,this.targetFps),this.gpuFrame=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0),_.flush(),this.host.dataset.renderCalls=String(this.renderer.info.render.calls),this.host.dataset.renderTriangles=String(this.renderer.info.render.triangles),xr&&this.view==="forge"&&this.forgeProofPending&&this.sword.visible&&this.swordPlace==="anvil"&&!o&&g>=.55&&this.camera.position.distanceTo(r.position)<.015&&Math.abs(this.camera.fov-r.fov)<.02&&this.recordForgeVisibility(),xr&&this.view==="cat"&&(this.tributeDone||this.camera.position.distanceTo(r.position)<.03)&&this.recordCatVisibility(),xr&&(this.view==="collection"||this.view==="relics")&&this.submittedCameraReady){const I=[this.view,this.displayKey,this.host.clientWidth,this.host.clientHeight].join(":");if(I!==this.sideProofKey){this.sideProofKey=I;const F=this.view==="collection"?this.collectionRoot:this.relicCabinet,N=new R;let V=1/0,W=-1/0,X=1/0,G=-1/0;F.updateMatrixWorld(!0),F.traverse(ae=>{if(!(ae instanceof Oe))return;for(let Me=ae;Me;Me=Me.parent)if(!Me.visible)return;const ue=ae.geometry.getAttribute("position");for(let Me=0;Me<ue.count;Me++){N.fromBufferAttribute(ue,Me).applyMatrix4(ae.matrixWorld).project(this.camera);const ce=(N.x+1)*this.host.clientWidth/2,_e=(1-N.y)*this.host.clientHeight/2;V=Math.min(V,ce),W=Math.max(W,ce),X=Math.min(X,_e),G=Math.max(G,_e)}}),this.host.dataset.sideDisplayProof=JSON.stringify({station:this.view,yaw:F.rotation.y*180/Math.PI,left:V,right:W,top:X,bottom:G})}}}}this.raf=requestAnimationFrame(this.tick)};clearRewards(){for(const e of this.rewards)this.scene.remove(e),e.traverse(t=>{t instanceof Oe&&(t.geometry.dispose(),t.material.dispose())});this.rewards=[],this.holdRear=!1,this.cat.rotation.y=0,this.catPose(0),this.host.dataset.tribute=""}destroy(){if(!this.destroyed){this.destroyed=!0,this.warmup!==void 0&&cancelIdleCallback(this.warmup);for(const e of this.swordCache.values())this.releaseSword(e);this.swordCache.clear();for(const e of this.sharedMaterials)e.dispose();this.sharedMaterials.clear(),this.sparkGeometry.dispose(),this.sparkMaterials.forEach(e=>e.dispose()),this.sparkPool=[],cancelAnimationFrame(this.raf),this.gpuFrame&&this.renderer.getContext().deleteSync(this.gpuFrame),this.stageAbort.abort(),this.observer.disconnect(),this.scene.traverse(e=>{if(e instanceof Oe){e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t){for(const s of Object.values(n))s instanceof Rt&&s.dispose();n.dispose()}}}),this.scene.environment?.dispose(),bh(null),this.swordEnvironment.dispose(),this.swordGlow.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove()}}}class Qx{constructor(e,t){this.enabled=e,this.host=t,t.dataset.audioState="loading"}audio=null;master=null;buffers=[];fallback=null;decoding=null;recordingsReady=!1;sources=new Set;played=0;encoded=Promise.all(["forge-anvil.mp3","forge-clink.mp3"].map(async e=>{try{const t=await fetch(new URL(`audio/${e}`,document.baseURI));return t.ok?await t.arrayBuffer():null}catch{return null}}));unlock(){if(this.enabled())try{this.audio||(this.audio=new AudioContext,this.master=this.audio.createGain(),this.master.gain.value=.72,this.master.connect(this.audio.destination)),this.audio.state==="suspended"&&this.audio.resume(),this.decoding||(this.decoding=this.encoded.then(async e=>{const t=await Promise.all(e.map(async n=>{try{if(n)return{buffer:await this.audio.decodeAudioData(n),recording:!0}}catch{}return{buffer:this.makeFallback(),recording:!1}}));this.buffers=t.map(n=>n.buffer),this.recordingsReady=t.every(n=>n.recording),this.host.dataset.audioState=this.recordingsReady?"ready":"fallback"}))}catch{this.host.dataset.audioState="unavailable"}}setMuted(e){if(this.master&&this.audio&&this.master.gain.setValueAtTime(e?0:.72,this.audio.currentTime),e)for(const t of this.sources)try{t.stop()}catch{}else this.unlock()}suspend(){this.audio?.suspend().catch(()=>{})}resume(){this.enabled()&&this.audio?.state==="suspended"&&this.audio.resume().catch(()=>{})}makeFallback(){if(this.fallback)return this.fallback;const e=this.audio.sampleRate,t=this.audio.createBuffer(1,Math.ceil(e*.5),e),n=t.getChannelData(0),s=[[773,.12,.11],[1197,.16,.18],[1913,.1,.13],[2851,.07,.085],[4133,.04,.055]];for(let r=0;r<n.length;r++){const o=r/e;let a=(Math.random()*2-1)*.24*Math.exp(-o/.008);for(const[l,c,h]of s)a+=Math.sin(o*l*Math.PI*2)*c*Math.exp(-o/h);n[r]=a*Math.min(1,o/4e-4)}return this.fallback=t}play(e,t,n,s=0){if(!this.enabled()||!this.audio||this.audio.state!=="running"||!this.master)return;const r=this.audio.createBufferSource(),o=this.audio.createGain();r.buffer=e,r.playbackRate.value=t,o.gain.value=n,r.connect(o).connect(this.master),this.sources.add(r),r.onended=()=>{r.disconnect(),o.disconnect(),this.sources.delete(r)},r.start(this.audio.currentTime+s)}impact(e,t,n){if(!this.enabled()||!this.audio)return;const s=(t==="bronze"?.94:t==="cold"?1.05:1)*(.975+Math.random()*.05);if(this.play(this.buffers[0]||this.makeFallback(),s,n==="bold"?1:n==="precise"?.86:.78),e==="damage"||e==="break"){const r=this.buffers[1]||this.makeFallback();this.play(r,s*1.12,e==="break"?.65:.3,.045),e==="break"&&(this.play(r,s*.87,.38,.105),this.play(r,s*1.28,.24,.185))}e==="great"&&this.play(this.buffers[1]||this.makeFallback(),s*1.3,.35,.075),this.audio.state==="running"&&(this.host.dataset.audioPlayed=String(++this.played),this.host.dataset.audioType=this.recordingsReady?"recording":"metal-fallback")}}const Vu="yichuichengshenbing.tutorial.v1",Js=["furnace","heat","hammer","cashout","tribute","relic"];function $x(i,e){if(i&&typeof i=="object"){const n=i;if(n.version===1&&(n.step==="done"||Js.includes(n.step)))return{version:1,step:n.step,skipped:n.skipped===!0,replay:n.replay===!0,startTributes:Number.isFinite(n.startTributes)?Math.max(0,n.startTributes):e.catTributes}}return{version:1,step:e.formalCount>0||e.totalMade>0||e.catTributes>0||e.swords.length>0||e.relics.length>0?"done":"furnace",skipped:!1,replay:!1,startTributes:e.catTributes}}function e1(i){return{version:1,step:"furnace",skipped:!1,replay:!0,startTributes:i.catTributes}}function Ql(i,e=!1){return{...i,step:"done",skipped:e}}function t1(i,e){if(i.step==="done")return i;const t=e.session;let n=i.step;for(let s=0;s<6;s++){let r=n;if(n==="furnace"&&t?r="heat":n==="heat"&&t&&t.phase!=="heat"?r="hammer":n==="hammer"&&t&&(t.phase==="finished"||t.phase==="forge"&&t.hits>=2&&t.level>=2&&t.currentValue>=720)?r="cashout":n==="cashout"&&t?.phase==="finished"?r="tribute":n==="tribute"&&e.catTributes>i.startTributes?r="relic":n==="relic"&&!i.replay&&e.relicWelcomeUsed&&(r="done"),r===n)break;n=r}return n===i.step?i:{...i,step:n}}const n1="browser",i1="0.3.0";function Wu(){return{getItem:i=>globalThis.localStorage.getItem(i),setItem:(i,e)=>globalThis.localStorage.setItem(i,e),removeItem:i=>globalThis.localStorage.removeItem(i)}}function s1(i=Wu()){return{kind:"browser",storage:i,capabilities:{cloudSave:!1,vibration:!1,hostLifecycle:!1},subscribeLifecycle:()=>()=>{},vibrate:()=>{}}}async function r1(i){const e=Wu();return s1(e)}const Xn="yichuichengshenbing.v1",Ih=Xn+".meta",Uh=Xn+".cloud-base",Nh=Xn+".cloud-attempt",xa=6e4,ts=i=>JSON.parse(JSON.stringify(i));let o1=0;const Mn=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0,Ma=i=>Array.isArray(i)&&i.every(e=>typeof e=="string"),Gn=i=>!!i&&typeof i=="object"&&!Array.isArray(i);function Xu(i){if(!Gn(i)||i.version!==1)return!1;for(const t of["coins","scraps","formalCount","totalMade","totalBroken","seed","hammerLevel","furnaceLevel","anvilLevel","showCaseLevel"])if(!Mn(i[t]))return!1;if(!Ma(i.ledger)||!Ma(i.caseIds)||!Array.isArray(i.swords))return!1;const e=t=>Gn(t)&&typeof t.id=="string"&&["iron","bronze","cold"].includes(String(t.material))&&["straight","great","short"].includes(String(t.blade))&&Mn(t.level)&&t.level<=99&&Mn(t.value)&&Mn(t.quality)&&typeof t.mark=="string"&&["NEW","SOLD","DELIVERED","COLLECTED","TRIBUTED"].includes(String(t.disposal));if(!i.swords.every(e)||i.relics!==void 0&&!Ma(i.relics)||i.relicRanks!==void 0&&(!Gn(i.relicRanks)||!Object.values(i.relicRanks).every(Mn))||i.sound!==void 0&&typeof i.sound!="boolean")return!1;if(i.session!==null){const t=i.session;if(!Gn(t)||typeof t.id!="string"||!["heat","forge","finished","broken","quench"].includes(String(t.phase))||!["iron","bronze","cold"].includes(String(t.material))||!["straight","great","short"].includes(String(t.blade)))return!1;for(const n of["level","hits","safeUsed","perfect","paid","seed"])if(!Mn(t[n]))return!1;if(t.level>99||!Array.isArray(t.strikes)||!t.strikes.every(Gn))return!1;for(const n of["currentValue","frenzyCharge","frenzyUntil"])if(t[n]!==void 0&&!Mn(t[n]))return!1;if(t.sword!==null&&!e(t.sword)||t.phase==="finished"&&t.sword===null)return!1;if(t.lastCheckpoint!==void 0){if(!Gn(t.lastCheckpoint))return!1;for(const n of["seed","level","hits","safeUsed","perfect","currentValue","frenzyCharge","frenzyUntil","strikesLength","totalBroken","scraps"])if(!Mn(t.lastCheckpoint[n]))return!1}}return!0}function a1(i){return!Gn(i)||i.heat!==void 0&&(!Gn(i.heat)||typeof i.heat.sessionId!="string"||!Mn(i.heat.percent)||i.heat.percent>100)?!1:["frenzyRemainingMs","checkpointFrenzyRemainingMs"].every(e=>i[e]===void 0||Mn(i[e]))}function _a(i){if(i.length>10*1024*1024)throw new Error("Save file too large");const e=JSON.parse(i);if(!Gn(e)||e.format!==1||typeof e.id!="string"||!e.id||!Mn(e.savedAt)||!Xu(e.state)||!a1(e.runtime))throw new Error("Invalid save format");return e}function ya(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return(e>>>0).toString(16)}function l1(i,e=Date.now()){const t=ts(i.state),n=ts(i.runtime);return t.session&&(n.frenzyRemainingMs!==void 0&&(t.session.frenzyUntil=n.frenzyRemainingMs>0?e+Math.min(4e3,n.frenzyRemainingMs):0),t.session.lastCheckpoint&&n.checkpointFrenzyRemainingMs!==void 0&&(t.session.lastCheckpoint.frenzyUntil=n.checkpointFrenzyRemainingMs>0?e+Math.min(4e3,n.checkpointFrenzyRemainingMs):0)),{state:t,runtime:n}}class c1{status="local";localAvailable=!0;requiresReload=!1;storage;cloud;now;makeId;schedule;cancel;timer;current=null;base=null;uploadAt=0;writesAllowed=!1;busy=!1;disposed=!1;listeners=new Set;constructor(e,t,n={}){this.storage=e,this.cloud=t,this.now=n.now||Date.now,this.makeId=n.id||(()=>typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${this.now().toString(36)}-${(o1++).toString(36)}-${Math.random().toString(36).slice(2)}`),this.schedule=n.schedule||((r,o)=>setTimeout(r,o)),this.cancel=n.cancel||(r=>clearTimeout(r)),this.base=this.read(Uh)||null;const s=Number(this.read(Nh)||0);this.uploadAt=Number.isFinite(s)?s:0}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}emit(e){this.status=e;for(const t of this.listeners)t()}read(e){try{return this.storage.getItem(e)}catch{return this.localAvailable=!1,null}}write(e,t){try{return this.storage.setItem(e,t),!0}catch{return this.localAvailable=!1,!1}}setBase(e){this.base=e,this.write(Uh,e||"")}writeLocal(e){const t=JSON.stringify(e.state),n=this.write(Xn,t),{state:s,...r}=e,o=this.write(Ih,JSON.stringify({...r,stateHash:ya(t)}));this.localAvailable=n&&o}readLocal(){const e=this.read(Xn);if(!e)return null;try{const t=JSON.parse(e);if(!Xu(t))throw new Error("Invalid local save");const n=this.read(Ih);if(n)try{const s=JSON.parse(n);if(s.stateHash===ya(e))return _a(JSON.stringify({...s,state:t}))}catch{}return{format:1,id:`legacy-${ya(e)}`,savedAt:0,state:t,runtime:{}}}catch{return this.write(Xn+".invalid-backup",e),null}}backup(e,t){this.write(Xn+".backup."+e,JSON.stringify(t))}async load(e){return this.current=this.readLocal(),this.cloud&&await this.reconcile(e),this.current?l1(this.current,this.now()):null}async reconcile(e){if(!this.cloud)return"keep";this.writesAllowed=!1,this.emit("syncing");try{const t=await this.cloud.read(),n=t===null?null:_a(t),s=this.current;if(!n)return this.setBase(null),this.writesAllowed=!0,this.emit(s?"pending":"local"),"keep";if(!s)return this.current=n,this.setBase(n.id),this.writeLocal(n),this.writesAllowed=!0,this.emit("synced"),"reload";if(n.id===s.id)return this.setBase(n.id),this.writesAllowed=!0,this.emit("synced"),"keep";if(n.id===this.base)return this.writesAllowed=!0,this.emit("pending"),"keep";if(s.id===this.base||JSON.stringify(n.state)===JSON.stringify(s.state))return this.backup("local",s),this.current=n,this.setBase(n.id),this.writeLocal(n),this.writesAllowed=!0,this.emit("synced"),"reload";this.backup("local",s),this.backup("cloud",n),this.emit("conflict");const r=await e(ts(s),ts(n));return r==="defer"?(this.emit("conflict"),"keep"):(this.setBase(n.id),this.writesAllowed=!0,r==="cloud"?(this.current=n,this.writeLocal(n),this.emit("synced"),"reload"):(this.emit("pending"),"keep"))}catch{return this.writesAllowed=!1,this.emit("unavailable"),"keep"}}save(e,t){if(this.requiresReload)return;const n=this.now(),s=e.session,r={};t&&s?.phase==="heat"&&t.sessionId===s.id&&(r.heat={...t}),s&&(r.frenzyRemainingMs=Math.max(0,Math.min(4e3,(s.frenzyUntil||0)-n)),s.lastCheckpoint&&(r.checkpointFrenzyRemainingMs=Math.max(0,Math.min(4e3,s.lastCheckpoint.frenzyUntil-n)))),this.current={format:1,id:this.makeId(),savedAt:n,state:ts(e),runtime:r},this.writeLocal(this.current),this.cloud?this.writesAllowed?(this.emit("pending"),this.queue()):this.emit(this.status==="conflict"?"conflict":"unavailable"):this.emit("local")}queue(){if(this.disposed||this.timer!==void 0||this.busy||!this.writesAllowed||!this.cloud||!this.current||this.current.id===this.base)return;const e=Math.max(0,xa-(this.now()-this.uploadAt));this.timer=this.schedule(()=>{this.timer=void 0,this.flush()},e)}async flush(){if(!(this.disposed||this.busy||!this.cloud||!this.writesAllowed||!this.current||this.current.id===this.base)){if(this.uploadAt&&this.now()-this.uploadAt<xa){this.queue();return}this.busy=!0,this.emit("syncing");try{const e=await this.cloud.read(),t=e===null?null:_a(e);if(t?.id===this.current.id){this.setBase(t.id),this.emit("synced");return}if((t?.id||null)!==this.base){t&&this.backup("cloud",t),this.writesAllowed=!1,this.emit("conflict");return}const n=ts(this.current);this.uploadAt=this.now(),this.write(Nh,String(this.uploadAt)),await this.cloud.write(JSON.stringify(n)),this.setBase(n.id),this.emit(this.current.id===n.id?"synced":"pending")}catch{this.writesAllowed=!1,this.emit("unavailable")}finally{this.busy=!1,this.queue()}}}async syncNow(e){if(this.busy||!this.cloud)return{reload:!1,waitMs:0};this.timer!==void 0&&(this.cancel(this.timer),this.timer=void 0),this.busy=!0;let t;try{t=await this.reconcile(e)}finally{this.busy=!1}if(t==="reload")return this.requiresReload=!0,{reload:!0,waitMs:0};const n=this.current?.id!==this.base?Math.max(0,xa-(this.now()-this.uploadAt)):0;return this.writesAllowed&&(n?this.queue():await this.flush()),{reload:!1,waitMs:n}}dispose(){this.disposed=!0,this.timer!==void 0&&this.cancel(this.timer),this.listeners.clear()}}function h1(i,e,t){const n=document.createElement("button");n.id="save-open",n.className="save-open",n.textContent="存档",n.setAttribute("aria-label","打开存档与震动设置"),document.querySelector(".topbar").append(n);const s=document.createElement("dialog");s.id="save-settings",s.className="save-dialog",s.setAttribute("aria-labelledby","save-title"),s.innerHTML='<h2 id="save-title">存档与设置</h2><p id="save-status" role="status"></p><p class="save-note" id="save-note"></p><label id="vibration-row" class="save-switch"><span>锤击震动</span><input id="vibration-enabled" type="checkbox"></label><div class="save-actions"><button class="secondary" id="save-close">返回游戏</button><button class="primary" id="save-sync">同步存档</button></div>',document.body.append(s);const r=s.querySelector("#save-status"),o=s.querySelector("#save-note"),a=s.querySelector("#save-sync"),l=s.querySelector("#save-close"),c=s.querySelector("#vibration-enabled");let h=!0;try{h=i.storage.getItem(Xn+".vibration")!=="false"}catch{}c.checked=h,s.querySelector("#vibration-row").hidden=!i.capabilities.vibration,c.addEventListener("change",()=>{h=c.checked;try{i.storage.setItem(Xn+".vibration",String(h))}catch{}h&&i.vibrate("light")});function d(){const g={local:"进度保存在本机",pending:"本地已保存，等待云同步",syncing:"正在同步存档…",synced:"进度已同步到云端",unavailable:"云端暂不可用，继续保留本地进度",conflict:"检测到另一份进度，请选择要继续的存档"};r.textContent=e.localAvailable?g[e.status]:"本机存储不可用，请勿关闭游戏；恢复存储后重试",n.dataset.status=e.status,a.hidden=!i.capabilities.cloudSave,o.textContent=i.capabilities.cloudSave?"云同步有间隔限制，等待期间会继续保存到本机。":"当前使用本地存档。清除站点数据会移除本机进度。"}const f=e.subscribe(d);d(),n.addEventListener("click",()=>{t.set("save-settings",!0),d(),s.showModal()}),l.addEventListener("click",()=>s.close()),s.addEventListener("close",()=>t.set("save-settings",!1));const u=(g,x)=>new Promise(m=>{const p=document.createElement("dialog");p.id="save-conflict",p.className="save-dialog",p.setAttribute("aria-labelledby","save-conflict-title");const y=document.createElement("h2");y.id="save-conflict-title",y.textContent="选择继续的进度";const M=document.createElement("p");M.className="save-note",M.textContent="本机与云端进度不同。两份进度均已留存副本，金币和物品不会叠加。",p.append(y,M);const v=b=>{const P=b.state;return`${b.savedAt?new Date(b.savedAt).toLocaleString("zh-CN"):"原有本地存档"}
纳贡日 ${(P.tributeDays??P.catTributes??0)+1} · 金币 ${Math.floor(P.coins).toLocaleString("zh-CN")}
收藏 ${P.caseIds.length} 把 · 遗物 ${P.relics?.length||0} 件`},S=document.createElement("div");S.className="save-versions";for(const[b,P]of[["本机进度",g],["云端进度",x]]){const I=document.createElement("article"),F=document.createElement("b"),N=document.createElement("p");F.textContent=b,N.textContent=v(P),I.append(F,N),S.append(I)}p.append(S);let E=!1;const w=b=>{E||(E=!0,p.close(),p.remove(),t.set("save-conflict",!1),m(b))},A=document.createElement("div");A.className="save-actions";for(const[b,P]of[["继续本机","local"],["继续云端","cloud"]]){const I=document.createElement("button");I.className=P==="cloud"?"primary":"secondary",I.textContent=b,I.addEventListener("click",()=>w(P)),A.append(I)}const _=document.createElement("button");_.className="save-later",_.textContent="稍后选择，先玩本机进度",_.addEventListener("click",()=>w("defer")),p.append(A,_),p.addEventListener("cancel",b=>{b.preventDefault(),w("defer")}),document.body.append(p),t.set("save-conflict",!0),p.showModal()});return a.addEventListener("click",async()=>{a.disabled=!0,l.disabled=!0;const g=x=>x.preventDefault();s.addEventListener("cancel",g);try{const x=await e.syncNow(u);if(x.reload){location.reload();return}d(),x.waitMs&&(o.textContent=`本地进度已保存，约 ${Math.ceil(x.waitMs/1e3)} 秒后同步。`)}finally{a.disabled=!1,l.disabled=!1,s.removeEventListener("cancel",g)}}),{resolveConflict:u,get vibrationEnabled(){return h},dispose(){f(),n.remove(),s.remove()}}}class u1{reasons=new Set;listeners=new Set;get paused(){return this.reasons.size>0}set(e,t){const n=this.paused;if(t?this.reasons.add(e):this.reasons.delete(e),n!==this.paused)for(const s of this.listeners)s(this.paused)}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}}const fi=document.querySelector(".game");fi.inert=!0;const pr=document.createElement("div");pr.id="platform-loading";pr.role="status";pr.textContent="正在读取存档…";document.body.append(pr);const wt=new u1,pi=await r1(),bo=new c1(pi.storage,pi.cloud),qu=h1(pi,bo,wt),Zs=await bo.load(qu.resolveConflict);let Tt=Zs?.runtime.heat?.sessionId===Zs?.state.session?.id&&Zs?.runtime.heat?.percent||0;function Ms(i){bo.save(i,i.session?.phase==="heat"?{sessionId:i.session.id,percent:Tt}:void 0)}const Se=new bd(Ms,Zs?.state);fi.dataset.channel=n1;fi.dataset.platform=pi.kind;fi.dataset.version=i1;let Fh=-1/0,Yu=null;try{Yu=JSON.parse(localStorage.getItem(Vu)||"null")}catch{}let qe=$x(Yu,Se.state);function Ii(){try{localStorage.setItem(Vu,JSON.stringify(qe))}catch{}}function wo(){return qe.step!=="done"}function Kn(){return wo()&&!qe.replay}Ii();const H=i=>document.getElementById(i);let it=null;try{it=new Zx(H("scene3d"))}catch(i){H("scene-error").hidden=!1,console.error(i)}let et="forge",Ut=!1,ns="",oo=0,Ot=!1,_t=!1;const ju="yichuichengshenbing.heat",_s=new Qx(()=>Se.state.sound,H("scene3d"));function Zn(i){if(!(wt.paused||Ut||Ot||_t||Qs)){if(Kn()){const e=qe.step==="tribute"?"cat":qe.step==="relic"?"relics":"forge";if(i!=="forge"&&i!==e){bt("请先按新手引导完成操作，或者点击跳过引导");return}}et=i,ys=performance.now(),it?.setStation(i==="merchant"?"forge":i),gt()}}const d1=["heat","forge","finished","broken"];let Eo="precise",mr=performance.now(),To=!1,ys=0,qn=0,Oh=0,Bh=-1,Vt="",zh=0,un=null,$l="",Sa=!1,ks=null,Qs=!1;const Ml=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function f1(){const i=H("merchant-call"),e=is(Se.state),t=e!==Sa;if(e&&!Sa&&et!=="forge"&&et!=="merchant"){i.hidden=!0;return}t&&(Sa=e,ks?.cancel(),e?(i.hidden=!1,i.dataset.presence="entering",ks=i.animate([{transform:"translate(-180px,24px)",opacity:0},{transform:"translate(0,0)",opacity:1}],{duration:Ml?1:950,easing:"cubic-bezier(.16,1,.3,1)"}),ks.finished.then(()=>{i.dataset.presence="present"}).catch(()=>{})):(i.dataset.presence="leaving",i.disabled=!0,ks=i.animate([{transform:"translate(0,0)",opacity:1},{transform:"translate(-180px,-28px)",opacity:0}],{duration:Ml?1:800,easing:"ease-in"}),ks.finished.then(()=>{i.hidden=!0,i.dataset.presence="absent"}).catch(()=>{}))),i.setAttribute("aria-label","幽灵商人 · 纳贡日 "+Se.state.workshopDay+"，查看商品"),i.toggleAttribute("disabled",!e||Ut||Ot||_t||Qs)}async function ec(){if(et!=="merchant"||Qs)return;Qs=!0;const i=H("merchant-panel"),e=H("merchant-call"),t=i.getBoundingClientRect(),n=e.getBoundingClientRect();i.setAttribute("inert","");const s=i.animate([{transform:"translate(-50%,-50%) scale(1)",opacity:1},{transform:"translate(calc(-50% + "+(n.x+n.width/2-t.x-t.width/2)+"px),calc(-50% + "+(n.y+n.height/2-t.y-t.height/2)+"px)) scale(.04)",opacity:0}],{duration:Ml?1:460,easing:"cubic-bezier(.4,0,.7,1)",fill:"forwards"});try{await s.finished}catch{}et="forge",Qs=!1,i.removeAttribute("inert"),s.cancel(),gt(),e.focus({preventScroll:!0})}function Ku(i){const e=nn.find(s=>s.id===i);if(!e||!Se.state.relicOffers.includes(i))return;$l=i;const t=Se.state,n=t.workshopDay===1&&!t.relicWelcomeUsed;H("relic-detail-name").textContent="确认购买「"+e.name+"」？",H("relic-detail-cost").textContent=t.session?"收剑并处理当前宝剑后可兑换":t.relics.length>=ao&&!t.relics.includes(i)?"墙上遗物已满，请先卸下一件":n?"首件遗物免费领取，不消耗铁剑":"购买将消耗 "+lo(t,i)+" 把铁剑 · 当前持有 "+t.ironBlanks+" 把",H("relic-exchange").toggleAttribute("disabled",!!t.session||t.relics.length>=ao&&!t.relics.includes(i)||!n&&t.ironBlanks<lo(t,i)||Ut),H("relic-detail").showModal(),nc()}function tc(){$l="",H("relic-detail").close(),nc()}function p1(){const i=H("owned-relic-list");i.replaceChildren();for(const e of Se.state.relics){const t=nn.find(o=>o.id===e);if(!t)continue;const n=document.createElement("article"),s=document.createElement("b"),r=document.createElement("p");s.textContent=t.name+(e==="ember"?" · "+Vn(Se.state,e)+"阶":""),r.textContent=e==="ember"?"炉火 Lv"+Se.state.furnaceLevel+"；"+ur(Se.state.furnaceLevel)/1e3+" 秒满热；好火候从 55% 起算":t.detail,n.append(s,r),i.append(n)}i.children.length||(i.textContent="暂未获得遗物，可前往遗物机兑换。"),H("owned-relics").showModal()}H("wall-relic-trigger").addEventListener("click",p1);H("owned-relic-close").addEventListener("click",()=>H("owned-relics").close());function ai(i=440,e=.12){if(!(!Se.state.sound||wt.paused))try{const t=window.AudioContext;un=un||new t;const n=un.createOscillator(),s=un.createGain();n.type="triangle",n.frequency.setValueAtTime(i,un.currentTime),n.frequency.exponentialRampToValueAtTime(i*.6,un.currentTime+e),s.gain.setValueAtTime(.055,un.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,un.currentTime+e),n.connect(s).connect(un.destination),n.start(),n.stop(un.currentTime+e)}catch{}}function bt(i){const e=H("toast");e.textContent=i,e.classList.add("show"),window.clearTimeout(zh),zh=window.setTimeout(()=>e.classList.remove("show"),2400)}function mn(i){if(!wt.paused)try{i(),gt()}catch(e){bt(e instanceof Error?e.message:String(e))}}function Nt(i){return i>=1e12?i.toExponential(2):Math.floor(i).toLocaleString("zh-CN")}function As(){return Se.state.session?.phase||"choose"}function m1(i){for(const e of d1)H(e).hidden=e!==i||et!=="forge";H("cat-panel").hidden=et!=="cat",H("relic-panel").hidden=et!=="relics",H("merchant-panel").hidden=et!=="merchant",document.querySelector(".station-nav").hidden=!1,document.querySelector(".game").dataset.moving=String(_t),Ju()}function Ju(){const i=As(),e=Se.state.furnaceLevel,{min:t,max:n}=yl(e,Se.state.relics.includes("ember")),s={choose:["把剑送入炉火","点击熔炉，直接开始锻造"],heat:["剑正在炉中加热",`炉火 Lv${e} · ${ur(e)/1e3} 秒满温 · ${t}%—${n}% 取剑最佳`],forge:["点台面，落锤锻造","继续锤可能涨价或损坏 · 随时收剑保住价值"],finished:["神兵已成","查看价值，出售继续、收藏或献给食铁兽"],broken:["剑胚断裂","这把剑的价值归零，可以再锻一把"]};i==="forge"&&Se.state.session.level>=bn&&(s.forge=["已经达到 +99","点击收剑，保住当前价值"]);const r=_t?["正在移剑","等待宝剑放稳后再操作"]:et==="cat"?["点食铁兽，上交宝剑","价值达标的宝剑可以换取铁剑"]:et==="relics"?["遗物机","三格遗物 · 成功纳贡后补货"]:et==="collection"?["","收藏的宝剑陈列在这里"]:et==="merchant"?["幽灵商人的货架","每三天来访 · 限时金币交易"]:s[i];H("cue-title").textContent=r[0],H("cue-detail").textContent=r[1];const o=et==="cat"?["cat"]:et==="relics"?["relics"]:et==="collection"?[]:i==="choose"?["furnace"]:i==="heat"?["anvil"]:i==="forge"&&Se.state.session.level<bn?["anvil"]:[];for(const a of["furnace","anvil","cat","relics"]){const l=H("target-"+a);l.classList.toggle("available",o.includes(a)&&!_t&&!Ot),l.hidden=et!=="forge"&&a!==et||a==="anvil"&&i==="forge"}H("target-anvil").innerHTML=i==="forge"?"":"铸剑台 <small>放剑</small>",H("target-furnace").innerHTML="炉火 Lv"+Se.state.furnaceLevel+" <small>"+(i==="heat"?"加热中":i==="choose"?"入炉":"")+"</small>",H("scene3d").setAttribute("aria-label",r.join("，"))}function gt(){const i=t1(qe,Se.state);i!==qe&&(qe=i,Ii());const e=Se.state,t=e.session,n=As();if(m1(n),document.querySelector(".game").dataset.phase=n,M1(),it?.setBoardInfo(H("cue-title").textContent||"",Vt,t?$s(t,hr()):0,Tt),it?.sync(e),H("iron-blanks").textContent=String(e.ironBlanks),H("day-label").textContent="纳贡日 "+e.workshopDay,f1(),H("coin").textContent=Nt(e.coins),H("scrap").textContent=Nt(e.scraps),H("sound").textContent=e.sound?"🔊":"🔇",H("show-legacy-swords").checked=e.showLegacySwords,H("show-legacy-swords").toggleAttribute("disabled",Ot||_t||Ut),Ju(),document.querySelector(".game").dataset.striking=String(Ot),H("cashout").toggleAttribute("disabled",Ot||_t||Kn()&&qe.step==="hammer"),H("nav-collection").textContent="剑谱 "+e.swords.length+" · 展柜 "+e.caseIds.length+"/"+Se.caseCapacity(),H("foot-hint").textContent=t?"当前 "+(t.apprentice?"学徒代工":"正式锻造")+" · 已锤 "+t.hits+" 次":"巨剑纳贡 · 铁剑再锻 · 遗物成长",!t)kh(0,"great"),et==="forge"&&(H("cue-detail").textContent="默认大剑 · 铁胚 · 点击熔炉开始");else{if(kh(t.level,t.blade),n==="heat"&&(H("heating-order").textContent="炉中加热 · Lv"+e.furnaceLevel+" · "+ur(e.furnaceLevel)/1e3+" 秒满温",H("heat-fill").style.width=Tt+"%",H("heat-text").textContent=Math.round(Tt)+"%"),n==="forge"){H("supply-actions").replaceChildren();for(const[a,l]of[["ward","猫爪护符"],["chalk","绯红粉笔"],["star","寒星碎片"],["clock","回溯发条"]]){const c=e.supplies[a];if(!c)continue;const h=document.createElement("button");h.className="secondary",h.textContent=l+" ×"+c,h.disabled=Ot||_t||a==="ward"&&!!t.wardNext||a==="chalk"&&!!t.chalkNext||a==="clock"&&!t.lastCheckpoint,h.addEventListener("click",()=>mn(()=>{a==="clock"?Se.rewindLastStrike():Se.useSupply(a),bt(a==="clock"?"已恢复到上一锤之前":l+"已启用")})),H("supply-actions").append(h)}H("forge-level").textContent="+"+t.level,H("hit-count").textContent=String(t.hits);for(const a of["safe","precise","bold"])H(a).toggleAttribute("disabled",Ot||_t),H(a).classList.toggle("active",a===Eo);H("protection").textContent=t.protection?t.protectedUsed?"护符已消耗":"首次断剑会改为受损":"无护符保护",H("heat-tag").textContent=t.goodHeat?"好火候":"普通火候",H("value-now").textContent=Nt($s(t,hr()))+" 金",H("cashout").textContent=t.level>=bn?"已满级 · 收剑":"收剑",H("result").textContent=Vt;const s=H("mark"),r=s.value,o=Xh(e).filter(a=>!t.apprentice||a==="none");s.innerHTML=o.map(a=>'<option value="'+a+'">'+uc[a].name+" · "+uc[a].detail+"</option>").join(""),s.value=r&&o.includes(r)?r:"none",H("mark-row").hidden=o.length<2}if(n==="finished"&&t.sword){const s=t.sword;H("finished-level").textContent="+"+s.level,document.querySelector("#finished .section-title small").textContent=(t.specialBlank?"星纹·":"")+Sn(s.blade,s.level,Se.state.showLegacySwords).name,H("finished-quality").textContent="Q "+s.quality.toFixed(2),H("finished-value").textContent=Nt(s.value),H("finished-sell").textContent=Nt(Se.salePrice(s)),H("deliver").hidden=!t.apprentice,H("sell").hidden=t.apprentice,H("collect").hidden=t.apprentice,H("offer-cat").hidden=t.apprentice,H("collect").toggleAttribute("disabled",t.apprentice||e.caseIds.length>=Se.caseCapacity()||Kn()&&qe.step==="tribute"),H("sell").toggleAttribute("disabled",t.apprentice||Kn()&&qe.step==="tribute"),H("sell").toggleAttribute("disabled",t.apprentice),t.apprentice&&(H("deliver").textContent=t.hits>=2?"完成代工 · 获得60金币":"结束练习")}n==="broken"&&(H("broken-rewind").hidden=!e.supplies.clock||!t.lastCheckpoint),n==="broken"&&(H("broken-scrap").textContent=t.apprentice?"学徒练习不损失材料":e.relics.includes("salvage")&&!t.tutorial?"已回收绑定残料 "+Math.floor(si[t.material].blank*.4):"当前剑价值归零 · 成长与遗物保留")}nd(),nc()}function kh(i,e){H("sword-level-tag").textContent=Sn(e,i,Se.state.showLegacySwords).name+" · 强化 +"+i}function hr(){return H("mark").value||"none"}function Zu(i){return H("forge-options").open?Yh(i-mr,Se.state.hammerLevel):"normal"}function go(i){if(qn=0,wt.paused)return;if(i-Fh<50){qn=requestAnimationFrame(go);return}Fh=i;const e=Se.state.session;if(it?.setBoardInfo(H("cue-title").textContent||"",Vt,e?$s(e,hr()):0,Tt),e?.phase==="forge"&&et==="forge"){const t=((i-mr)%1500+1500)%1500,n=.27+Math.abs(750-t)/750*.77;H("forge-options").open&&(H("timing-ring").style.transform="translate(-50%,-50%) scale("+n.toFixed(3)+")");const s=Zu(i),r=Kh(Se.state,Eo,e.level,s);it?.sync(Se.state,r),H("cashout").toggleAttribute("disabled",Ot||_t||!!it?.hostHammerBusy()||Kn()&&qe.step==="hammer"),H("timing-indicator").textContent=s==="perfect"?"✦ 完美":s==="normal"?"普通":"偏离",H("timing-indicator").className="timing "+s,H("probability").textContent="成功 "+(r.success/100).toFixed(1)+"% · 大成功 "+(r.great/100).toFixed(1)+"% · 不变 "+(r.unchanged/100).toFixed(1)+"% · 受损 "+(r.damage/100).toFixed(1)+"%",H("fracture-risk").textContent=e.level>=bn?"封顶":(r.break/100).toFixed(1)+"%";const o=wn(e),a=e.frenzyCharge>=Ai;H("frenzy-label").textContent=e.superGod?"超神 · 每锤价值 +50%～100%":o?"入神 "+((e.frenzyUntil-Date.now())/1e3).toFixed(1)+"秒 · 不会断剑":a?"入神已就绪 · 下一锤开启":"入神蓄力 "+e.frenzyCharge+"/10",H("frenzy-meter").classList.toggle("active",o||a);const l=H("frenzy-cells").children;for(let c=0;c<l.length;c++)l[c].classList.toggle("filled",o||c<e.frenzyCharge);H("scene3d").dataset.frenzy=e.superGod?"super-god":o?"active":a?"ready":"charging",H("ring-progress").style.width=Math.round(t/1500*100)+"%"}To&&e?.phase==="heat"&&!_t&&et==="forge"&&!document.hidden&&(Tt=Math.min(100,Tt+dd(Math.max(0,i-ys),Se.state.furnaceLevel)),ys=i,H("heat-fill").style.width=Tt+"%",H("heat-text").textContent=Math.round(Tt)+"%",it?.sync(Se.state),it?.setHeat(Tt),H("scene3d").dataset.heat=Tt.toFixed(1),(i-Oh>=1e3||Tt>=100&&Bh<100)&&(Ms(Se.state),Oh=i,Bh=Tt),H("cue-title").textContent=Wh(Tt,Se.state.furnaceLevel,Se.state.relics.includes("ember"))?"好火候！点铸剑台取剑":Tt>=100?"火候已过，仍可取剑":"剑正在炉中加热"),ed(i),qn=requestAnimationFrame(go)}function Qu(){if(Kn()&&qe.step==="cashout"){bt("宝剑已达纳贡标准，请点击收剑");return}const i=Se.state.session,e=performance.now();if(wt.paused||i?.phase!=="forge"||et!=="forge"||e<oo||Ot||_t||Ut||!it||document.hidden||i.level>=bn||it.hostHammerBusy())return;_s.unlock();const t=Zu(e),n=Eo,s=i.id+":hit:"+i.hits,r=i.material,o=i.superGod||wn(i)||i.frenzyCharge>=Ai?.65:1;Ot=!0,oo=e+550*o,gt(),it.strike(()=>{let a="success";return Ot=!1,oo=performance.now()+370*o,mn(()=>{const l=Se.strike(n,t,s);a=l.result,qu.vibrationEnabled&&pi.vibrate(a==="break"||a==="great"?"heavy":a==="damage"?"medium":"light"),_s.impact(a,r,n),a==="success"||a==="great"?Vt=(a==="great"?"✦ 大成功！":"锻造成功")+" "+Sn(i.blade,l.after,Se.state.showLegacySwords).name+" · "+Nt(l.afterValue)+" 金":a==="unchanged"?Vt="本锤无变化 · 价值 "+Nt(l.afterValue)+" 金":a==="damage"?Vt=l.protected?"🛡️ 护符挡住断剑 · Lv"+l.after:"⚡ 锻造受损 Lv"+l.after:Vt="💥 宝剑断裂",l.superGod?Vt=(l.enteredSuperGod?"✦ 进入超神！":"✦ 超神锻造")+" · 价值 +"+Math.round((l.valueMultiplier-1)*100)+"% · "+Nt(l.afterValue)+" 金":wn(i)&&!l.frenzy&&(Vt="入神！4秒内不会断剑 · "+Vt),mr=performance.now()}),a},o)}function $u(i=!1){if(!(wt.paused||Se.state.session||_t||!it))try{it.clearRewards(),Tt=0,Se.start("iron","great",i),Vt="",Tt=0,_t=!0,gt(),it.transferTo("furnace",()=>{_t=!1,To=!0,ys=performance.now(),gt()})}catch(e){bt(e instanceof Error?e.message:String(e))}}function g1(){wt.paused||As()!=="heat"||_t||!it||(To=!1,_t=!0,gt(),it.transferTo("anvil",()=>{_t=!1,mn(()=>Se.heat(Tt)),mr=performance.now();try{sessionStorage.removeItem(ju)}catch{}}))}function v1(){if(Kn()&&qe.step==="hammer"){bt("先锤剑两次，达到首次纳贡要求");return}wt.paused||As()!=="forge"||Ot||_t||it?.hostHammerBusy()||mn(()=>{Se.cashout(hr()),Vt=""})}function x1(i){if(!i||_t||Ot||Ut)return;if(i==="cat"){et==="cat"?H("tribute").click():Zn("cat");return}if(i==="relics"){Zn("relics");return}if(et!=="forge")return;const e=As();i==="furnace"&&(e==="choose"?$u(Se.needsApprentice()):bt(e==="heat"?"剑已经在炉中加热，点铸剑台取出":"先把这把剑锻好，再入炉新剑")),i==="anvil"&&(e==="heat"?g1():e==="forge"?Qu():e==="choose"&&bt("先点熔炉，把剑胚加热"))}for(const i of["safe","precise","bold"])H(i).addEventListener("click",()=>{Eo=i,gt()});const _l=H("scene3d");_l.addEventListener("pointerdown",i=>{if(i.button!==0||!i.isPrimary||_t||Ot||Ut)return;_s.unlock();const e=it?.pickRelic(i.clientX,i.clientY);if(e){i.preventDefault(),Ku(e);return}const t=it?.pick(i.clientX,i.clientY)||null;i.preventDefault(),x1(t)});_l.addEventListener("pointermove",i=>{_l.style.cursor=it?.pick(i.clientX,i.clientY)?"pointer":"default"});document.addEventListener("keydown",i=>{if(!wt.paused&&!H("owned-relics").open){if(H("relic-detail").open){i.code==="Escape"&&(i.preventDefault(),tc());return}if(i.code==="Escape"&&et==="merchant"){i.preventDefault(),ec();return}if(i.code==="Escape"){H("forge-options").removeAttribute("open"),Zn("forge");return}i.code!=="Space"||i.repeat||i.ctrlKey||i.metaKey||i.altKey||i.target?.closest('button,select,input,textarea,a,[contenteditable="true"]')||As()==="forge"&&et==="forge"&&(i.preventDefault(),Qu())}});H("cashout").addEventListener("click",v1);H("mark").addEventListener("change",gt);for(const[i,e]of[["deliver","DELIVERED"],["collect","COLLECTED"]])H(i).addEventListener("click",()=>mn(()=>{const t=Se.dispose(e);bt(t>0?"获得金币 +"+Nt(t):"神兵已收入剑谱"),ai(700,.25)}));H("sell").addEventListener("click",()=>{if(Kn()&&qe.step==="tribute"){bt("第一把达标宝剑请先献给食铁兽");return}try{const i=Se.dispose("SOLD");bt("出售获得 "+Nt(i)+" 金 · 继续锻造"),ai(700,.25),gt(),$u(Se.needsApprentice())}catch(i){bt(i instanceof Error?i.message:String(i)),gt()}});H("broken-next").addEventListener("click",()=>mn(()=>{Se.closeBroken(),Vt=""}));H("broken-rewind").addEventListener("click",()=>mn(()=>{Se.rewindLastStrike(),Vt="发条回溯 · 宝剑已修复",bt("宝剑已恢复到上一锤之前")}));H("nav-collection").addEventListener("click",()=>Zn("collection"));H("show-legacy-swords").addEventListener("change",()=>mn(()=>{Se.setShowLegacySwords(H("show-legacy-swords").checked),Vt="",bt(Se.state.showLegacySwords?"已恢复旧剑外观":"已隐藏旧剑外观 · 只展示独立剑型")}));H("sound").addEventListener("click",()=>{Se.state.sound=!Se.state.sound,_s.setMuted(!Se.state.sound),Ms(Se.state),gt()});function M1(){const i=Se.state,e=i.session,t=e?.sword;for(const u of["forge","cat","relics","collection"]){const g=H("station-"+u);g.classList.toggle("active",et===u),g.setAttribute("aria-pressed",String(et===u));const x=qe.step==="tribute"?"cat":qe.step==="relic"?"relics":"forge";g.toggleAttribute("disabled",Ut||Ot||_t||Kn()&&u!=="forge"&&u!==x)}H("scene-name").textContent=et==="forge"?"神兵锻造台":et==="cat"?"食铁兽的纳贡台":et==="relics"?"遗物机":et==="collection"?"":"幽灵商人";const n=Hs(i);t?.value??(e&&$s(e,hr())),H("cat-demand-label").textContent="纳贡宝剑价值 ≥ "+Nt(n)+" 金",H("cat-count").textContent="已纳贡 "+i.catTributes+" 次";const s=Se.tributeCandidates(),r=s.filter(u=>u.value>=n);r.some(u=>u.id===ns)||(ns=r[0]?.id??"air");const o=H("tribute-choice");o.replaceChildren();for(const u of s){const g=document.createElement("option");g.value=u.id,g.disabled=u.value<n,g.textContent=(i.caseIds.includes(u.id)?"剑架 · ":"当前 · ")+(u.name||Sn(u.blade,u.level,i.showLegacySwords).name)+" · "+Nt(u.value)+" 金"+(g.disabled?"（未达标）":""),o.append(g)}if(!r.length){const u=document.createElement("option");u.value="air",u.textContent="上贡空气",o.append(u)}o.value=ns,o.disabled=Ut;const a=r.find(u=>u.id===ns),l=!!a;H("tribute").toggleAttribute("disabled",Ut),H("offer-cat").toggleAttribute("disabled",Ut||!l),H("tribute").textContent=Ut?"食铁兽正在处理纳贡……":a?"上交宝剑 · 换取 "+jh(a.value,n)+" 把铁剑":"上贡空气 · 接受惩罚",H("cat-offer-info").textContent=a?"本次要求 "+Nt(n)+" 金 · 已选 "+Nt(a.value)+" 金":"没有达标宝剑。上贡空气会被抽打三下，并随机失去一件遗物；没有遗物则扣除等价金币（余额不足扣至 0）。",H("relic-rack-count").textContent=i.relics.length+"/"+ao+" · 第 "+i.workshopDay+" 日";const c=H("relic-list");c.replaceChildren();const h=i.workshopDay===1&&!i.relicWelcomeUsed;for(let u=0;u<3;u++){const g=i.relicOffers[u]||"";if(!g){const S=document.createElement("div");S.className="relic-row relic-empty",S.dataset.slot=String(u),S.textContent="售罄 · 纳贡后补货",c.append(S);continue}const x=nn.find(S=>S.id===g);if(!x)continue;const m=document.createElement("div");m.className="relic-row",m.dataset.slot=String(u);const p=document.createElement("div"),y=document.createElement("b"),M=document.createElement("small");y.textContent=x.name+(Vn(i,g)>0&&g==="ember"?" · 升阶":""),M.textContent=Sd(i,g),p.append(y,M);const v=document.createElement("button");v.className="secondary",v.textContent=h?"免费领取":lo(i,g)+" 铁剑 · 购买",v.setAttribute("aria-label","购买"+x.name),v.addEventListener("click",()=>Ku(x.id)),m.append(p,v),m.setAttribute("role","group"),m.setAttribute("aria-label",x.name),c.append(m)}const d=H("relic-equipped");if(d.replaceChildren(),!i.relics.length){const u=document.createElement("small");u.className="hint",u.textContent="遗物架尚为空",d.append(u)}for(const u of i.relics){const g=nn.find(M=>M.id===u);if(!g)continue;const x=document.createElement("div");x.className="relic-row";const m=document.createElement("div"),p=document.createElement("b");p.textContent="✦ "+g.name,m.append(p);const y=document.createElement("button");y.className="secondary",y.textContent="卸下",y.disabled=!!e,y.addEventListener("click",()=>{confirm("卸下 "+g.name+"？已花费的铁剑不返还。")&&mn(()=>Se.removeRelic(u))}),x.append(m,y),d.append(x)}_1(),H("merchant-note").textContent="纳贡日 "+i.workshopDay+" · "+(is(i)?"今日开摊，商品各限购一份":"商人暂时离开"),H("merchant-inventory").textContent="星纹剑胚 "+i.specialBlanks+" · 护符 "+i.supplies.ward+" · 粉笔 "+i.supplies.chalk+" · 星屑 "+i.supplies.star+" · 发条 "+i.supplies.clock;const f=H("merchant-list");f.replaceChildren();for(const u of i.merchantStock){const g=Ea.find(S=>S.id===u);if(!g)continue;const x=document.createElement("div");x.className="relic-row";const m=document.createElement("div"),p=document.createElement("b"),y=document.createElement("small");p.textContent=g.name,y.textContent=g.detail,m.append(p,y);const M=document.createElement("button");M.className="secondary";const v=i.merchantPurchased.includes(u);M.textContent=v?"已售罄":g.cost+" 金",M.disabled=v||!!e||i.coins<g.cost||Ut||!is(i),M.addEventListener("click",()=>mn(()=>{Se.buyMerchant(u),bt("商人交付 · "+g.name),ai(760,.24)})),x.append(m,M),f.append(x)}}H("relic-look-again").addEventListener("click",tc);H("relic-exchange").addEventListener("click",()=>{const i=$l;i&&mn(()=>{Se.buyRelic(i),tc(),bt("获得遗物 · "+nn.find(e=>e.id===i).name),ai(820,.25)})});for(const i of["forge","cat","relics","collection"])H("station-"+i).addEventListener("click",()=>Zn(i));H("merchant-call").addEventListener("click",()=>Zn("merchant"));H("merchant-back").addEventListener("click",()=>void ec());document.querySelector("#merchant-panel .station-drawer-title").addEventListener("click",i=>{i.preventDefault(),ec()});H("offer-cat").addEventListener("click",()=>Zn("cat"));H("cat-back").addEventListener("click",()=>{it?.clearRewards(),H("cat-back").hidden=!0,H("tribute-reward").textContent="",H("cat-speech").textContent="「交出你的巨剑！本大爷饿了，开饭！」",Zn("forge")});H("scene3d").addEventListener("whip-impact",()=>{const i=document.querySelector(".game");i.classList.remove("whip-impact"),i.offsetWidth,i.classList.add("whip-impact"),window.setTimeout(()=>i.classList.remove("whip-impact"),340)});H("tribute-choice").addEventListener("change",()=>{ns=H("tribute-choice").value,gt()});H("tribute").addEventListener("click",async()=>{if(!Ut){if(!it){bt("3D场景尚未就绪，请刷新后重试");return}try{const i=Se.tributeCandidates().find(e=>e.id===ns);if(Ut=!0,it.clearRewards(),i){const e={...i},t=Se.tribute(i.id);gt(),it.showTributeSword(e),ai(120,.3),await it.tribute(t.blanks,n=>{H("cat-speech").textContent=n,n.startsWith("噗")&&ai(90,.25)}),H("tribute-reward").textContent="获得 "+t.blanks+" 把铁剑 · 遗物机已补货",ai(740,.3)}else{const e=Se.tributeAir();gt(),H("cat-speech").textContent="「竟敢拿空气糊弄本大爷！吃我三鞭！」",await it.punish(n=>{H("cat-speech").textContent="啪！第 "+n+" 鞭",ai(110,.12)});const t=nn.find(n=>n.id===e.relicId)?.name;H("cat-speech").textContent="「下次记得带上达标的宝剑！」",H("tribute-reward").textContent=t?"食铁兽拿走了「"+t+"」":"被扣除 "+Nt(e.coinsLost)+" 金（等价遗物 "+Nt(e.equivalent)+" 金）"}Ut=!1,H("cat-back").hidden=!1,gt()}catch(i){Ut=!1,bt(i instanceof Error?i.message:String(i)),gt()}}});function _1(){const i=Se.state.caseIds.map(t=>Se.state.swords.find(n=>n.id===t&&n.disposal==="COLLECTED")).filter(t=>!!t),e=H("collection-list");if(e.replaceChildren(),!i.length){const t=document.createElement("p");t.className="muted",t.textContent="剑架还空着。锻造后选择“收藏”，宝剑就会摆在这里。",e.append(t)}for(const[t,n]of i.entries()){const s=document.createElement("div");s.className="collection-row",s.dataset.swordId=n.id;const r=document.createElement("div"),o=document.createElement("b"),a=document.createElement("small");o.textContent=n.name||Sn(n.blade,n.level,Se.state.showLegacySwords).name,a.textContent=Nt(n.value)+" 金 · +"+n.level,r.append(o,a);const l=document.createElement("button");l.className="secondary",l.textContent="出售",l.setAttribute("aria-label","出售"+o.textContent+"，获得"+Nt(Se.salePrice(n))+"金"),l.disabled=!!Se.state.session,l.addEventListener("click",()=>{confirm("出售收藏的 "+o.textContent+"？")&&mn(()=>{Se.sellCollected(n.id),bt("宝剑已出售，剑架位置腾空")})}),s.append(r,l),e.append(s)}}const y1={furnace:{title:"开始第一把宝剑",detail:"点击火炉，把免费剑胚送入炉中。"},heat:{title:"掌握火候",detail:"观察温度，进入理想范围后点铸剑台取剑。"},hammer:{title:"锤出更值钱的宝剑",detail:"点击铸剑台，连续锤两次。首次教学剑保证成功。"},cashout:{title:"保住你的成果",detail:"剑已达纳贡标准！点击“收剑”，继续锤可能有风险。"},tribute:{title:"献给食铁兽",detail:"点击“纳贡”，上交达标宝剑，获得铁剑。"},relic:{title:"领取第一件遗物",detail:"点击“遗物”，免费选择一件，增强锻造能力。"}};let Hh=0;function nc(){const i=H("tutorial-layer"),e=_t||Ot||Ut||!it||H("relic-detail").open||H("owned-relics").open;if(i.hidden=!wo()||e,document.querySelector(".game").dataset.tutorial=qe.step,i.hidden)return;const t=y1[qe.step];H("tutorial-title").textContent=t.title;let n=t.detail;qe.step==="tribute"&&et==="cat"&&(n="选择达标宝剑，点击“上交宝剑”，观看食铁兽吞剑。"),qe.step==="relic"&&et==="relics"&&(n=qe.replay&&Se.state.relicWelcomeUsed?"点击遗物并确认购买；旧存档不重复赠送免费遗物。":"点击任意在售遗物，选“确认购买”即可免费获得一件。"),qe.replay&&qe.step==="furnace"&&(n="复习模式不会重发免费剑胚；点击火炉按正常消耗锻造。"),H("tutorial-detail").textContent=n,H("tutorial-progress").textContent="新手引导 "+(Js.indexOf(qe.step)+1)+"/6"+(qe.replay?" · 复习":""),H("tutorial-finish").hidden=!qe.replay,H("tutorial-next").hidden=!qe.replay,H("tutorial-next").textContent=qe.step==="relic"?"完成复习":"下一步 ›",ed(performance.now(),!0)}function ed(i,e=!1){if(!e&&i-Hh<120||(Hh=i,H("tutorial-layer").hidden||!wo()))return;const n=H("scene3d"),r=document.querySelector(".game").getBoundingClientRect(),o=n.getBoundingClientRect(),a=H("tutorial-focus"),l=H("tutorial-tip");let c=null;const h=qe.step==="furnace"?"furnace":qe.step==="heat"||qe.step==="hammer"?"anvil":null;if(h)try{const p=JSON.parse(n.dataset.targets||"{}")[h];p&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&(c={x:o.left-r.left+p.x,y:o.top-r.top+p.y,size:h==="furnace"?94:112})}catch{}if(!c){const p=qe.step==="cashout"?"cashout":qe.step==="tribute"?et==="cat"?"tribute":"station-cat":qe.step==="relic"?et==="relics"?"relic-list":"station-relics":"station-forge";let y=H(p);p==="relic-list"&&(y=document.querySelector("#relic-list .relic-row button")||H("relic-list"));const M=y.getBoundingClientRect();c={x:M.left+M.width/2-r.left,y:M.top+M.height/2-r.top,size:Math.max(66,Math.min(124,Math.max(M.height,Math.min(M.width,100))+22))}}const{x:d,y:f,size:u}=c;a.style.left=Math.min(r.width-24,Math.max(24,d))+"px",a.style.top=Math.min(r.height-24,Math.max(24,f))+"px",a.style.width=u+"px",a.style.height=u+"px";const g=Math.max(110,(H("scene-cue").getBoundingClientRect().top-r.top>0,100)),x=l.offsetHeight||115;let m=f>r.height*.5?f-x-94:f+75;f>r.height*.5&&m<g&&(m=f+75),m=Math.max(g,Math.min(r.height-x-20,m)),l.style.top=m+"px"}H("tutorial-skip").addEventListener("click",()=>{qe=Ql(qe,!0),Ii(),gt()});H("tutorial-finish").addEventListener("click",()=>{qe=Ql(qe),Ii(),gt()});H("tutorial-next").addEventListener("click",()=>{if(!qe.replay||!wo())return;const i=Js.indexOf(qe.step);if(i>=Js.length-1){qe=Ql(qe),Ii(),Zn("forge"),gt();return}qe={...qe,step:Js[i+1]},Ii();const e=qe.step==="tribute"?"cat":qe.step==="relic"?"relics":"forge";et=e,it?.setStation(e),gt()});H("tutorial-help").addEventListener("click",()=>{if(Se.state.session){bt("请先完成当前宝剑，再重新体验新手引导");return}qe=e1(Se.state),Ii(),et="forge",it?.setStation("forge"),gt()});let li=!1;try{li=pi.storage.getItem("yichuichengshenbing.boardHidden")==="true"}catch{}function td(){it?.setBoardHidden(li),H("board-toggle").textContent=li?"▼":"▲",H("board-toggle").setAttribute("aria-expanded",String(!li)),H("board-toggle").setAttribute("aria-label",li?"显示信息面板":"隐藏信息面板")}H("board-toggle").addEventListener("click",()=>{li=!li;try{pi.storage.setItem("yichuichengshenbing.boardHidden",String(li))}catch{}td()});td();function nd(){const i=document.querySelector(".control:not([hidden])");document.querySelector(".game").style.setProperty("--panel-height",(i?.getBoundingClientRect().height||0)+"px")}const S1=new ResizeObserver(nd);for(const i of document.querySelectorAll(".control"))S1.observe(i);const Gh=Se.state.session;if(Gh?.phase==="heat"){if(!Zs?.runtime.heat)try{const i=JSON.parse(sessionStorage.getItem(ju)||"null");Tt=i?.id===Gh.id?Math.min(100,Math.max(0,Number(i.percent)||0)):0}catch{}To=!0,ys=performance.now(),it?.setHeat(Tt)}H("workshop-upgrades").append(H("nav-collection"));let Vh=0,jr=0,Kr=[];wt.subscribe(i=>{if(fi.inert=i,fi.dataset.paused=String(i),i){Vh=performance.now(),jr=Date.now(),Ms(Se.state),cancelAnimationFrame(qn),qn=0,it?.setPaused(!0),un?.suspend().catch(()=>{}),_s.suspend(),Kr=document.getAnimations().filter(e=>e.playState==="running");for(const e of Kr)e.pause()}else{const e=performance.now()-Vh,t=Math.max(0,Date.now()-jr),n=Se.state.session;ys+=e,mr+=e,oo+=e,n&&(n.frenzyUntil>jr&&(n.frenzyUntil+=t),n.lastCheckpoint&&n.lastCheckpoint.frenzyUntil>jr&&(n.lastCheckpoint.frenzyUntil+=t));for(const s of Kr)s.playState==="paused"&&s.play();Kr=[],it?.setPaused(!1),Se.state.sound&&(un?.resume().catch(()=>{}),_s.resume()),Ms(Se.state),gt(),qn||(qn=requestAnimationFrame(go))}});const b1=pi.subscribeLifecycle(()=>wt.set("host",!0),()=>wt.set("host",!1));document.addEventListener("visibilitychange",()=>wt.set("document",document.hidden));window.addEventListener("pagehide",i=>{wt.set("page",!0),i.persisted||(bo.dispose(),b1(),it?.destroy())});window.addEventListener("pageshow",i=>{i.persisted&&(wt.set("page",!1),wt.set("document",document.hidden))});Ms(Se.state);gt();pr.remove();fi.inert=wt.paused;fi.dataset.paused=String(wt.paused);wt.set("document",document.hidden);!wt.paused&&!qn&&(qn=requestAnimationFrame(go));
