(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const du=9,fu=[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3],pu=[800,1800,2800,4e3,5500,7500,1e4,13e3];function cr(i){return fu[Math.min(du,Math.max(1,Math.floor(i||1)))-1]}function mu(i,e){return Math.min(100,Math.max(0,i)/cr(e)*100)}function y0(i,e){return{min:e?55:70,max:i>=3?100:90}}function qc(i,e,t){const{min:n,max:s}=y0(e,t);return i>=n&&i<=s}const ii={iron:{name:"铁胚",blank:305,fuel:15,value:1,atk:1,unlock:1},bronze:{name:"青铜",blank:417,fuel:15,value:1.35,atk:1.06,unlock:2},cold:{name:"寒铁",blank:652,fuel:20,value:2.1,atk:1.12,unlock:3}},ba={straight:["旧铁直剑","青锋剑","柳叶剑","飞燕剑","月牙剑","游龙剑","流云剑","鱼肠长剑","破风剑","逐星剑","白虹剑","霜华剑","斩月剑","惊鸿剑","紫电剑","寒光剑","青莲剑","风雷剑","苍雪剑","孤影剑","陨星剑","龙吟剑","日轮剑","夜魄剑","天罡剑","玄霄剑","流光剑","七曜剑","山河剑","天命剑"],great:["粗铁巨剑","阔刃大剑","狼牙巨剑","断岩剑","裂甲剑","怒涛剑","碎岳剑","破军剑","龙脊剑","战王剑","焚城剑","镇岳剑","熔岩剑","狂狮剑","撼地剑","斩龙剑","狱火剑","山崩剑","巨灵剑","泰坦剑","苍穹剑","灾厄剑","天罚剑","破晓剑","灭世剑","星陨巨刃","赤霄重剑","霸皇剑","不朽神锋","开天剑"],short:["旧铁短剑","匕首剑","燕尾短剑","蝶翼剑","灵蛇剑","双牙剑","夜鸦剑","流萤剑","月影剑","疾风剑","玄狐剑","隐星剑","血月剑","幽兰剑","鬼影剑","千刃剑","夜雨剑","碎光剑","幻影剑","夜魇剑","星屑剑","极影剑","影舞剑","天刺剑","瞬光剑","虚空剑","流星剑","无相剑","绝影剑","天隐剑"]},cl=["","曜纹·","星陨·","太古·"],hl=[0,3,6,9,12,15,25,29,40,55,70,85],gu=["开天剑","两仪神锋","太初圣刃","寰宇巨剑","永恒天刃"],wa=["初铸","铭锋","刻星","淬光","鎏纹","凝辉","承天","破界","御极","化曜","玄穹","圣印","万象","天冠","永恒"];function vu(i,e){const t=vo(Math.floor(Number.isFinite(e)?e:0),0,bn),n=ba[i],s=Math.floor(t/n.length),r=t%n.length,o=hl.reduce((h,d,f)=>t>=d?f:h,0),a=hl[o],l=t<40?0:t<55?1:t<70?2:t<85?3:4,c=t<30?n[r]:gu[l]+"·"+wa[t-a];return{level:t,name:t<30?cl[Math.min(s,cl.length-1)]+c:c,artStage:o,stageStart:a,detail:t-a,ascension:l,silhouette:o,guardStyle:Math.min(5,Math.floor(t/3)),ornament:t,crest:Math.floor(t/12),span:1+Math.min(t,99)*.0027,runeCount:Math.min(t,12),rarity:Math.min(8,Math.floor(t/12))}}Object.keys(ba).reduce((i,e)=>i+ba[e].length,0);function Sn(i,e,t=!1){const n=vu(i,e),s=n.level;if(t)return{...n,theme:s<15?"legacy":s<25?"dragon":s<29?"meteor":"genesis"};if(s>=40)return{...n,theme:"genesis"};const r=["dragon","meteor","genesis","runic","tyrant","leviathan","tempest"],o=["斩龙剑","星陨巨刃","开天剑","铭咒双锋","龙齿裁决","深海弧刃","雷霆环刃"],a=Math.min(s,r.length-1),l=s-a,c=r[a],h=o[a]+(l===0?"":"·"+(l<wa.length?wa[l]:"精铸"+l));return{...n,name:h,theme:c,artStage:a,stageStart:a,detail:l,ascension:0,silhouette:a}}const ul={none:{name:"无铭文",detail:"不附加属性"},flame:{name:"赤焰纹",detail:"剑刃浮现赤焰纹路"},armor_break:{name:"裂金纹",detail:"剑身浮现金色裂纹"},swift:{name:"迅风纹",detail:"剑锋展现轻盈流风"},guard:{name:"守锋纹",detail:"护手亮起守护纹章"},echo:{name:"回响纹",detail:"剑脊流转回响符文"},star:{name:"星芒纹",detail:"纯外观星辉效果"}};function Yc(i){const e=["none"];if(i.anvilLevel<2)return e;for(const[t,n]of[["flame",2],["armor_break",4],["swift",6],["guard",10],["echo",15],["star",20]])i.totalMade>=n&&e.push(t);return e}function vo(i,e,t){return Math.min(t,Math.max(e,i))}function wi(i){let e=i>>>0;return e^=e<<13,e^=e>>>17,e^=e<<5,e>>>0}const bn=99,Ci=10,Ro=4e3,xu=.01,dl=1.5,_u=2;function jc(i,e=Date.now()){return i.phase==="forge"&&!i.superGod&&wn(i,e)}function Mu(i,e,t=Date.now()){return jc(i,t)&&e>=0&&e<xu}function yu(i,e,t){const n=[[0,0],[3,1290],[5,2970],[10,4670],[20,6300],[30,7200]],s=vo(e,0,bn);let r=7200;for(let l=1;l<n.length;l++)if(s<=n[l][0]){const[c,h]=n[l-1],[d,f]=n[l];r=Math.round(h+(f-h)*(s-c)/(d-c));break}const o=1e4-r,a={success:Math.floor(o*.65),great:Math.floor(o*.1),unchanged:Math.floor(o*.15),damage:0,break:r};if(a.damage=1e4-a.success-a.great-a.unchanged-a.break,i==="safe"){const l=Math.min(400,a.break);a.break-=l,a.unchanged+=l}if(i==="bold"){const l=Math.min(400,a.success);a.success-=l,a.great+=l}if(t==="perfect"){const l=Math.min(400,a.damage);a.damage-=l,a.success+=l}if(t==="miss"){const l=Math.min(400,a.success);a.success-=l,a.damage+=l}return a}function Kc(i,e=1){const n=(i%1500+1500)%1500,s=Math.abs(n-750),r=e>=2?104:90;return s<=r?"perfect":s<=250?"normal":"miss"}function Su(i,e){let t=0;for(const n of["success","great","unchanged","damage","break"])if(t+=i[n],e<t)return n;return"break"}function fl(i,e){return Math.round(vo(.9+(i?.03:0)+e*.03,.9,1.13)*100)/100}function bu(i,e,t,n="none"){return 320*ii[t].value*Math.pow(1.5,vo(i,0,bn))*(n==="none"?1:1.05)}function wn(i,e=Date.now()){return i.frenzyUntil>e}function Zs(i,e="none"){return i.currentValue*(e==="none"?1:1.05)}function wu(i=20261008){return{version:1,coins:300,scraps:0,formalCount:0,totalMade:0,totalBroken:0,hammerLevel:1,furnaceLevel:1,anvilLevel:1,showCaseLevel:1,caseIds:[],swords:[],session:null,ledger:[],seed:i>>>0||1,sound:!0,showLegacySwords:!1,ironBlanks:0,catTributes:0,relics:[],workshopDay:1,tributeDays:0,relicOffersDay:0,relicOffers:[],relicRerolls:0,relicWelcomeUsed:!1,merchantStockDay:0,merchantStock:[],merchantPurchased:[],supplies:{ward:0,chalk:0,star:0,clock:0},specialBlanks:0}}const ro=8,nn=[{id:"guard",name:"九命护符",cost:2,detail:"正式锻造首次断剑改为受损"},{id:"ember",name:"炉心火石",cost:1,detail:"每阶提升炉火 1 级，最高 Lv9；好火候从 55% 起算"},{id:"lucky",name:"幸运铜铃",cost:2,detail:"最多 3% 断剑概率转为成功"},{id:"salvage",name:"碎剑回收袋",cost:1,detail:"断剑回收 40% 胚料价为绑定残料"},{id:"rhythm",name:"匠心节拍",cost:2,detail:"普通存活锤击额外获得 1 格入神充能"},{id:"stellar",name:"星穹之眼",cost:3,detail:"超神每锤价值倍率额外 +10%"},{id:"coin",name:"招财铭牌",cost:2,detail:"出售金币 +5%"},{id:"steady",name:"稳固铁环",cost:2,detail:"最多 2% 受损概率转为不变"},{id:"master",name:"大师徽记",cost:3,detail:"最多 2% 成功概率转为大成功"},{id:"hammer",name:"精锻锤芯",cost:2,detail:"铁锤 Lv2；扩大完美落锤窗口"},{id:"anvil",name:"镇砧铁印",cost:2,detail:"砧座 Lv2；解锁剑柄铭刻"},{id:"case",name:"藏剑匣",cost:2,detail:"剑架容量 3 → 6 把"}],Ea=[{id:"blanks",name:"铁剑补给 ×2",cost:520,detail:"补充两把铁剑，可锻造或兑换遗物"},{id:"star_blank",name:"星纹巨剑胚",cost:850,detail:"下次正式铁制巨剑自动使用，初始价值 +25%"},{id:"ward",name:"猫爪护符",cost:390,detail:"主动启用后下一锤断剑改为受损"},{id:"chalk",name:"绯红粉笔",cost:330,detail:"主动启用后下一锤成功率最多 6% 转大成功"},{id:"star",name:"寒星碎片",cost:270,detail:"立刻增加 3 格入神充能，上限 9"},{id:"clock",name:"回溯发条",cost:560,detail:"撤销最近一锤，包括断剑，并恢复当时价值"}];function pl(i,e,t=3){const n=[...i];let s=e>>>0||1;for(let r=n.length-1;r>0;r--){s=wi(s);const o=s%(r+1);[n[r],n[o]]=[n[o],n[r]]}return n.slice(0,t)}function is(i){return i.workshopDay>=3&&i.workshopDay%3===0&&i.merchantDepartedDay!==i.workshopDay}function Wn(i,e){return i.relics.includes(e)?Math.min(e==="ember"?8:1,Math.max(1,i.relicRanks?.[e]||1)):0}function Po(i,e){return!i.relics.includes(e)||e==="ember"&&Wn(i,e)<8}function oo(i,e){return(nn.find(t=>t.id===e)?.cost||0)+(e==="ember"?Wn(i,e):0)}function Eu(i,e){const t=nn.find(n=>n.id===e);return t?e==="ember"?"炉火 Lv"+i.furnaceLevel+" → Lv"+Math.min(9,i.furnaceLevel+1)+"；"+cr(Math.min(9,i.furnaceLevel+1))/1e3+" 秒满热；好火候 55% 起":t.detail:""}function ks(i){return Math.ceil(720*Math.pow(1.35,i.catTributes)/10)*10}function Jc(i,e){return i>=e*4?5:i>=e*2?4:3}function Zc(i,e,t,n,s=Date.now()){const r=i.session;if(r?.tutorial&&r.hits<2)return{success:1e4,great:0,unchanged:0,damage:0,break:0};if(r?.superGod)return{success:5e3,great:5e3,unchanged:0,damage:0,break:0};const o=yu(e,t,n);if(r?.goodHeat){const a=Math.min(200,o.damage),l=Math.floor(a/2);o.damage-=a,o.success+=l,o.great+=a-l}if(i.relics.includes("lucky")){const a=Math.min(o.break,300);o.break-=a,o.success+=a}if(i.relics.includes("steady")){const a=Math.min(o.damage,200);o.damage-=a,o.unchanged+=a}if(i.relics.includes("master")){const a=Math.min(o.success,200);o.success-=a,o.great+=a}if(r?.chalkNext){const a=Math.min(o.success,600);o.success-=a,o.great+=a}return r&&(wn(r,s)||r.frenzyCharge>=Ci)&&(o.success+=o.break,o.break=0),o}class Tu{state;persist;constructor(e=()=>{},t){this.persist=e,this.state=t?.version===1?JSON.parse(JSON.stringify(t)):wu(),this.state.showLegacySwords=this.state.showLegacySwords===!0,this.state.relics=this.state.relics||[],this.state.relicRanks=this.state.relicRanks||{};const n=this.state.facilityRelicsVersion!==1;if(n){for(const l of new Set(this.state.ledger||[])){const c=/^upgrade:(hammer|furnace|anvil|case):(\d+)$/.exec(l);if(!c)continue;const h=Number(c[2]),d=c[1],f=d==="furnace"?h===9?16500:pu[h-1]||0:h===1?d==="hammer"?500:d==="anvil"?1100:600:0;this.state.coins+=f}this.state.facilityRelicsVersion=1}if(this.syncFacilityRelics(),this.state.ironBlanks=Math.max(0,Math.floor(this.state.ironBlanks||0)),this.state.catTributes=Math.max(0,Math.floor(this.state.catTributes||0)),this.state.relics=this.state.relics||[],this.state.tributeDays=Math.max(this.state.catTributes,Math.floor(this.state.tributeDays??this.state.catTributes)),this.state.workshopDay=this.state.tributeDays+1,this.state.relicWelcomeUsed=typeof this.state.relicWelcomeUsed=="boolean"?this.state.relicWelcomeUsed:this.state.relics.length>0||this.state.workshopDay>1,this.state.relicOffersDay=Math.max(0,Math.floor(this.state.relicOffersDay||0)),this.state.relicOffers=Array.isArray(this.state.relicOffers)?this.state.relicOffers:[],this.state.relicRerolls=Math.max(0,Math.floor(this.state.relicRerolls||0)),this.state.relicOffersDay>0){const l=this.state.relicOffers;this.state.relicOffers=Array.from({length:3},(c,h)=>nn.some(d=>d.id===l[h])&&Po(this.state,l[h])?l[h]:"")}this.state.merchantStockDay=Math.max(0,Math.floor(this.state.merchantStockDay||0)),this.state.merchantStock=Array.isArray(this.state.merchantStock)?this.state.merchantStock:[],this.state.merchantPurchased=Array.isArray(this.state.merchantPurchased)?this.state.merchantPurchased:[],this.state.specialBlanks=Math.max(0,Math.floor(this.state.specialBlanks||0));const s=this.state.supplies||{};this.state.supplies={ward:Math.max(0,Math.floor(s.ward||0)),chalk:Math.max(0,Math.floor(s.chalk||0)),star:Math.max(0,Math.floor(s.star||0)),clock:Math.max(0,Math.floor(s.clock||0))},this.ensureMarkets();const r=this.state;delete r.rep,delete r.completed;for(const l of[...this.state.swords,...this.state.session?.sword?[this.state.session.sword]:[]]){const c=l;delete c.attack,delete c.intervalMs,delete c.trial,delete c.orderId}this.state.session&&delete this.state.session.orderId;const o=this.state.session,a=!!o&&((o.rulesVersion||0)<3||o.phase==="quench");o&&(o.superGod=o.superGod===!0,o.rulesVersion||(o.currentValue=o.sword?.value??Math.round(100*ii[o.material].value*Math.pow(1.24,o.level)*fl(o.goodHeat,o.perfect)),o.frenzyCharge=o.hits%Ci,o.frenzyUntil=0,o.rulesVersion=2),o.phase==="quench"&&(o.phase="forge"),(o.rulesVersion||0)<3&&o.phase==="forge"&&o.frenzyCharge>=Ci&&(o.frenzyCharge=0,o.frenzyUntil=Date.now()+Ro),o.rulesVersion=3),(a||n)&&this.save()}setShowLegacySwords(e){this.state.showLegacySwords=e,this.save()}syncFacilityRelics(){const e=this.state;e.furnaceLevel=1+Wn(e,"ember"),e.hammerLevel=1+Wn(e,"hammer"),e.anvilLevel=1+Wn(e,"anvil"),e.showCaseLevel=1+Wn(e,"case")}save(){this.persist(JSON.parse(JSON.stringify(this.state)))}ensureMarkets(){const e=this.state;e.relicOffersDay===0&&(e.relicOffersDay=e.workshopDay,this.restockRelics()),e.merchantStockDay!==e.workshopDay&&(e.merchantStockDay=e.workshopDay,e.merchantPurchased=[],e.merchantStock=is(e)?pl(Ea.map(t=>t.id),wi(e.seed^e.workshopDay^10075084)):[])}advanceDay(){this.state.tributeDays=(this.state.tributeDays??this.state.catTributes)+1,this.state.workshopDay=this.state.tributeDays+1,this.ensureMarkets()}restockRelics(){const e=this.state;e.relicOffersDay=e.workshopDay,e.relicRerolls=0;const t=pl(nn.filter(n=>Po(e,n.id)).map(n=>n.id),wi(e.seed^e.catTributes^244548));e.relicOffers=Array.from({length:3},(n,s)=>t[s]||"")}salePrice(e){const t=Math.floor(e.value*.7);return this.state.relics.includes("coin")?Math.floor(t*1.05):t}once(e,t){return this.state.ledger.includes(e)?!1:(t(),this.state.ledger.push(e),this.save(),!0)}canAfford(e,t="great"){const n=ii[e],s=e==="iron"&&(this.state.ironBlanks>0||t==="great"&&this.state.specialBlanks>0);return this.state.coins>=n.fuel+(s?0:Math.max(0,n.blank-this.state.scraps))}needsApprentice(){return this.state.formalCount>0&&!this.canAfford("iron")}start(e="iron",t="straight",n=!1){if(this.state.session)throw new Error("请先完成当前这把剑");if(n&&!this.needsApprentice())throw new Error("材料尚够，不能申请免费代工");if(n&&(e="iron",t="straight"),!n&&(ii[e].unlock>this.state.furnaceLevel||!(this.state.formalCount===0||this.canAfford(e,t))))throw new Error("材料尚未解锁或金币不足");const s=ii[e];let r=0,o=!1;if(!n){const d=this.state.formalCount===0;o=!d&&e==="iron"&&t==="great"&&this.state.specialBlanks>0,o&&this.state.specialBlanks--;const f=!d&&!o&&e==="iron"&&this.state.ironBlanks>0;f&&this.state.ironBlanks--;const u=d||f||o?0:Math.min(this.state.scraps,s.blank);this.state.scraps-=u,r=d?0:(f||o?0:s.blank-u)+s.fuel,this.state.coins-=r,this.state.formalCount++}const a=!n&&this.state.formalCount===1,l=wi(this.state.seed);this.state.seed=l;const h={id:"forge_"+this.state.totalMade+"_"+this.state.totalBroken+"_"+this.state.formalCount+"_"+l,phase:"heat",blade:t,material:e,apprentice:n,tutorial:a,level:0,hits:0,safeUsed:0,perfect:0,goodHeat:!1,protectedUsed:!1,protection:!n&&(this.state.formalCount<=2||this.state.relics.includes("guard")),strikes:[],paid:r,seed:l,sword:null,currentValue:bu(0,1,e)*(o?1.25:1),frenzyCharge:0,frenzyUntil:0,superGod:!1,rulesVersion:3,specialBlank:o,wardNext:!1,chalkNext:!1};return is(this.state)&&(this.state.merchantDepartedDay=this.state.workshopDay),this.state.session=h,this.save(),h}heat(e){const t=this.must("heat");t.goodHeat=qc(e,this.state.furnaceLevel,this.state.relics.includes("ember")),t.phase="forge",this.save()}must(e){const t=this.state.session;if(!t||t.phase!==e)throw new Error("当前操作阶段不正确");return t}strikeAt(e,t,n,s=Date.now()){return this.strike(e,Kc(t,this.state.hammerLevel),n,s)}strike(e,t,n,s=Date.now()){const r=this.state.session;if(!r)throw new Error("尚未开始锻造");const o=r.strikes.find(w=>w.id===n);if(o)return o;const a=this.must("forge");if(a.level>=bn)throw new Error("已达 +99，请收剑");a.lastCheckpoint={seed:a.seed,level:a.level,hits:a.hits,safeUsed:a.safeUsed,perfect:a.perfect,protectedUsed:a.protectedUsed,currentValue:a.currentValue,frenzyCharge:a.frenzyCharge,frenzyUntil:a.frenzyUntil,superGod:a.superGod,wardNext:!!a.wardNext,chalkNext:!!a.chalkNext,strikesLength:a.strikes.length,totalBroken:this.state.totalBroken,scraps:this.state.scraps},a.frenzyCharge>=Ci&&!wn(a,s)&&(a.frenzyUntil=s+Ro,a.frenzyCharge=0);const l=wn(a,s),c=wi(a.seed);a.seed=c;let h=!1;if(jc(a,s)){const w=wi(a.seed);a.seed=w,h=Mu(a,w/4294967296,s),h&&(a.superGod=!0,a.frenzyCharge=0,a.frenzyUntil=0)}const d=Zc(this.state,e,a.level,t,s),f=Math.floor(c/4294967296*1e4),u=Su(d,f),g=!!a.wardNext,x=u==="break"&&(g||a.protection&&!a.protectedUsed);a.wardNext=!1,a.chalkNext=!1;const m=x?"damage":u,p=a.level,y=a.currentValue,_=a.superGod?dl+(_u-dl)*c/4294967296+(this.state.relics.includes("stellar")?.1:0):m==="great"?2.5:m==="success"?1.5:m==="damage"&&a.level>0?1/1.5:m==="break"?0:1;a.superGod?(a.level=Math.min(bn,a.level+(m==="great"?2:1)),a.currentValue*=_):m==="success"?(a.level++,a.currentValue*=1.5):m==="great"?(a.level=Math.min(bn,a.level+2),a.currentValue*=2.5):m==="damage"&&a.level>0?(a.level--,a.currentValue/=1.5):m==="break"&&(a.currentValue=0),a.hits++,e==="safe"&&a.safeUsed++,t==="perfect"&&a.perfect++,x&&!g&&(a.protectedUsed=!0),!a.superGod&&!l&&m!=="break"&&(a.frenzyCharge+=this.state.relics.includes("rhythm")?2:1,a.frenzyCharge>=Ci&&(a.frenzyUntil=s+Ro,a.frenzyCharge=0));const v={id:n,style:e,timing:t,before:p,after:a.level,beforeValue:y,afterValue:a.currentValue,roll:f,shown:d,sampled:u,result:m,protected:x,frenzy:l,superGod:a.superGod,enteredSuperGod:h,valueMultiplier:_};return a.strikes.push(v),m==="break"&&(a.phase="broken",a.frenzyCharge=0,a.frenzyUntil=0,this.state.totalBroken++,this.state.relics.includes("salvage")&&!a.apprentice&&!a.tutorial&&(this.state.scraps+=Math.floor(ii[a.material].blank*.4))),this.save(),v}cashout(e="none"){const t=this.must("forge");if(!Yc(this.state).includes(e))throw new Error("该铭文尚未解锁或铁砧未升级");if(t.apprentice&&e!=="none")throw new Error("学徒代工不可安装铭文");const n=fl(t.goodHeat,t.perfect),s=Zs(t,e),r={id:"sword_"+t.id,material:t.material,blade:t.blade,name:(t.specialBlank?"星纹·":"")+Sn(t.blade,t.level,this.state.showLegacySwords).name,level:t.level,quality:n,value:s,mark:e,superGod:t.superGod,disposal:"NEW"};return t.sword=r,t.phase="finished",t.frenzyUntil=0,this.state.totalMade++,this.save(),r}dispose(e){const t=this.must("finished"),n=t.sword;if(n.disposal!=="NEW")throw new Error("此剑已处置");if(t.apprentice&&e!=="DELIVERED")throw new Error("学徒代工不可出售或收藏");if(!t.apprentice&&e==="DELIVERED")throw new Error("普通神兵请出售、收藏或献给食铁兽");const s=n.id+":"+e;let r=0;return this.once(s,()=>{if(t.apprentice)t.hits>=2&&(r=60,this.state.coins+=r),n.disposal="DELIVERED";else{if(e==="SOLD")r=this.salePrice(n),this.state.coins+=r;else{if(this.state.caseIds.length>=this.caseCapacity())throw new Error("展柜已满");this.state.caseIds.push(n.id)}n.disposal=e}this.state.swords.push(JSON.parse(JSON.stringify(n))),this.state.session=null})?r:0}tributeCandidates(){const e=this.state.session;return[...e?.phase==="finished"&&!e.apprentice&&e.sword?.disposal==="NEW"?[e.sword]:[],...this.state.caseIds.map(n=>this.state.swords.find(s=>s.id===n&&s.disposal==="COLLECTED")).filter(n=>!!n)]}tribute(e){const t=this.state.session;if(!e&&t?.apprentice)throw new Error("代工剑属于工坊，不能拿去纳贡");const n=this.tributeCandidates().find(r=>r.id===(e??t?.sword?.id));if(!n)throw new Error("请先选择可纳贡的宝剑");if(n.value<ks(this.state))throw new Error("宝剑价值不足，还差 "+(ks(this.state)-n.value)+" 金");const s=Jc(n.value,ks(this.state));return this.once(n.id+":TRIBUTED",()=>{const r=t?.sword?.id===n.id;n.disposal="TRIBUTED",this.state.caseIds=this.state.caseIds.filter(o=>o!==n.id),this.state.ironBlanks+=s,this.state.catTributes++,r&&(this.state.swords.push(JSON.parse(JSON.stringify(n))),this.state.session=null),this.advanceDay(),this.restockRelics()}),{blanks:s,value:n.value,id:n.id}}tributeAir(){if(this.tributeCandidates().some(o=>o.value>=ks(this.state)))throw new Error("有达标宝剑，请选择宝剑纳贡");const e=this.state.relics.length?nn.filter(o=>this.state.relics.includes(o.id)):nn;this.state.seed=wi(this.state.seed);const t=e[this.state.seed%e.length],n=t.cost*ii.iron.blank,s=this.state.relics.length?t.id:null,r=s?0:Math.min(Math.max(0,this.state.coins),n);return this.once("air-tribute:"+this.state.workshopDay,()=>{s?(this.state.relics=this.state.relics.filter(o=>o!==s),delete this.state.relicRanks[s],this.syncFacilityRelics()):this.state.coins-=r,this.advanceDay(),this.restockRelics()}),{relicId:s,coinsLost:r,equivalent:n}}buyRelic(e){if(this.state.session)throw new Error("完成当前宝剑后才能交换遗物");if(!nn.find(o=>o.id===e))throw new Error("未知遗物");if(!this.state.relicOffers.includes(e))throw new Error("这件遗物今天没有上架");if(!Po(this.state,e))throw new Error("遗物已达到最高阶");if(!this.state.relics.includes(e)&&this.state.relics.length>=ro)throw new Error("遗物架最多容纳八件，请先卸下一件");const n=!this.state.relicWelcomeUsed,s=oo(this.state,e);if(!n&&this.state.ironBlanks<s)throw new Error("铁剑不足，请先向食铁兽纳贡");n?this.state.relicWelcomeUsed=!0:this.state.ironBlanks-=s;const r=Wn(this.state,e)+1;this.state.relics.includes(e)||this.state.relics.push(e),this.state.relicRanks[e]=r,this.syncFacilityRelics(),this.state.relicOffers=this.state.relicOffers.map(o=>o===e?"":o),this.save()}removeRelic(e){if(this.state.session)throw new Error("请先完成当前锻造");if(!this.state.relics.includes(e))throw new Error("遗物不在架上");this.state.relics=this.state.relics.filter(t=>t!==e),delete this.state.relicRanks[e],this.syncFacilityRelics(),this.save()}refreshRelics(){throw new Error("遗物机仅在成功纳贡后刷新")}buyMerchant(e){const t=this.state;if(t.session)throw new Error("完成当前宝剑后再交易");if(!is(t)||t.merchantStockDay!==t.workshopDay)throw new Error("神秘商人今天不在");const n=Ea.find(s=>s.id===e);if(!n||!t.merchantStock.includes(e))throw new Error("商人今天没有这个商品");if(t.merchantPurchased.includes(e))throw new Error("今日该商品已售罄");if(t.coins<n.cost)throw new Error("金币不足");t.coins-=n.cost,t.merchantPurchased.push(e),e==="blanks"?t.ironBlanks+=2:e==="star_blank"?t.specialBlanks++:(e==="ward"||e==="chalk"||e==="star"||e==="clock")&&t.supplies[e]++,this.save()}useSupply(e){const t=this.must("forge");if(this.state.supplies[e]<=0)throw new Error("该道具库存不足");if(e==="ward"){if(t.wardNext)throw new Error("猫爪护符已经待命");t.wardNext=!0}if(e==="chalk"){if(t.chalkNext)throw new Error("绯红粉笔已经待命");t.chalkNext=!0}if(e==="star"){if(t.superGod||wn(t)||t.frenzyCharge>=9)throw new Error("当前入神充能已满或正在入神");t.frenzyCharge=Math.min(9,t.frenzyCharge+3)}this.state.supplies[e]--,this.save()}rewindLastStrike(){const e=this.state.session,t=e?.lastCheckpoint;if(!e||e.phase!=="forge"&&e.phase!=="broken"||!t||e.strikes.length<=t.strikesLength)throw new Error("没有可撤销的上一锤");if(this.state.supplies.clock<=0)throw new Error("回溯发条不足");this.state.supplies.clock--,e.seed=t.seed,e.phase="forge",e.level=t.level,e.hits=t.hits,e.safeUsed=t.safeUsed,e.perfect=t.perfect,e.protectedUsed=t.protectedUsed,e.currentValue=t.currentValue,e.frenzyCharge=t.frenzyCharge,e.frenzyUntil=t.frenzyUntil,e.superGod=t.superGod,e.wardNext=t.wardNext,e.chalkNext=t.chalkNext,e.strikes.length=t.strikesLength,e.lastCheckpoint=void 0,this.state.totalBroken=t.totalBroken,this.state.scraps=t.scraps,this.save()}sellCollected(e){const t=this.state.swords.find(r=>r.id===e);if(!t||t.disposal!=="COLLECTED"||!this.state.caseIds.includes(e))throw new Error("该剑不在展柜中");const n=e+":case-sale";let s=0;return this.once(n,()=>{s=this.salePrice(t),this.state.coins+=s,t.disposal="SOLD",this.state.caseIds=this.state.caseIds.filter(r=>r!==e)}),s}caseCapacity(){return this.state.showCaseLevel>=2?6:3}upgrade(e){throw new Error("设施只能通过兑换遗物提升")}closeBroken(){this.must("broken"),this.state.session=null,this.save()}}const jr=new URLSearchParams(location.search).get("debugPerf")==="1",gr=new URLSearchParams(location.search).get("debugQA")==="1";class Au{since=0;frames=0;cpu=[];last=0;intervals=[];history=[];frame(e,t,n,s){if(!jr||(this.since||(this.since=e),this.last&&this.intervals.push(e-this.last),this.last=e,this.cpu.push(t),this.frames++,e-this.since<1e3))return;const r=this.intervals.slice().sort((a,l)=>a-l),o={fps:this.frames*1e3/(e-this.since),targetFps:s,cpuMeanMs:this.cpu.reduce((a,l)=>a+l,0)/this.cpu.length,frameP95Ms:r[Math.floor(r.length*.95)]||0,calls:n.info.render.calls,triangles:n.info.render.triangles,geometries:n.info.memory.geometries,textures:n.info.memory.textures};this.history.push(o),this.history.length>120&&this.history.shift(),document.getElementById("scene3d").dataset.performance=JSON.stringify(o),this.since=e,this.frames=0,this.cpu=[],this.intervals=[]}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const S0="180",Cu=0,ml=1,Ru=2,Qc=1,$c=2,Gn=3,di=0,Xt=1,Cn=2,Yn=0,ss=1,Ta=2,gl=3,vl=4,Pu=5,Ti=100,Lu=101,Du=102,Iu=103,Uu=104,Nu=200,Fu=201,Ou=202,Bu=203,Aa=204,Ca=205,zu=206,ku=207,Hu=208,Gu=209,Vu=210,Wu=211,Xu=212,qu=213,Yu=214,Ra=0,Pa=1,La=2,as=3,Da=4,Ia=5,Ua=6,Na=7,b0=0,ju=1,Ku=2,hi=0,eh=1,th=2,nh=3,w0=4,ih=5,sh=6,rh=7,oh=300,ls=301,cs=302,Fa=303,Oa=304,xo=306,hs=1e3,Ri=1001,Ba=1002,qt=1003,Ju=1004,vr=1005,Jt=1006,Lo=1007,Rn=1008,In=1009,ah=1010,lh=1011,Qs=1012,E0=1013,Pi=1014,Pn=1015,rn=1016,T0=1017,A0=1018,$s=1020,ch=35902,hh=35899,uh=1021,dh=1022,yn=1023,er=1026,tr=1027,C0=1028,R0=1029,fh=1030,P0=1031,L0=1033,Kr=33776,Jr=33777,Zr=33778,Qr=33779,za=35840,ka=35841,Ha=35842,Ga=35843,Va=36196,Wa=37492,Xa=37496,qa=37808,Ya=37809,ja=37810,Ka=37811,Ja=37812,Za=37813,Qa=37814,$a=37815,e0=37816,t0=37817,n0=37818,i0=37819,s0=37820,r0=37821,o0=36492,a0=36494,l0=36495,c0=36283,h0=36284,u0=36285,d0=36286,Zu=3200,Qu=3201,D0=0,$u=1,ri="",Ut="srgb",us="srgb-linear",ao="linear",ct="srgb",Oi=7680,xl=519,ed=512,td=513,nd=514,ph=515,id=516,sd=517,rd=518,od=519,_l=35044,Ml="300 es",Ln=2e3,lo=2001;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yl=1234567;const Vs=Math.PI/180,ds=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function I0(i,e){return(i%e+e)%e}function ad(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ld(i,e,t){return i!==e?(t-i)/(e-i):0}function Ws(i,e,t){return(1-t)*i+t*e}function cd(i,e,t,n){return Ws(i,e,1-Math.exp(-t*n))}function hd(i,e=1){return e-Math.abs(I0(i,e*2)-e)}function ud(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function dd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pd(i,e){return i+Math.random()*(e-i)}function md(i){return i*(.5-Math.random())}function gd(i){i!==void 0&&(yl=i);let e=yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vd(i){return i*Vs}function xd(i){return i*ds}function _d(i){return(i&i-1)===0&&i!==0}function Md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sd(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),u=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const at={DEG2RAD:Vs,RAD2DEG:ds,generateUUID:Ui,clamp:Qe,euclideanModulo:I0,mapLinear:ad,inverseLerp:ld,lerp:Ws,damp:cd,pingpong:hd,smoothstep:ud,smootherstep:dd,randInt:fd,randFloat:pd,randFloatSpread:md,seededRandom:gd,degToRad:vd,radToDeg:xd,isPowerOfTwo:_d,ceilPowerOfTwo:Md,floorPowerOfTwo:yd,setQuaternionFromProperEuler:Sd,normalize:Ht,denormalize:$i};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],u=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=u,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==u||h!==g){let m=1-a;const p=l*f+c*u+h*g+d*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const w=Math.sqrt(_),E=Math.atan2(w,p*y);m=Math.sin(m*E)/w,a=Math.sin(a*E)/w}const v=a*y;if(l=l*m+f*v,c=c*m+u*v,h=h*m+g*v,d=d*m+x*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*u-c*f,e[t+1]=l*g+h*f+c*d-a*u,e[t+2]=c*g+h*u+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new P,Sl=new fi;class Ke{constructor(e,t,n,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],v=s[7],w=s[2],E=s[5],b=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*m+a*_+l*E,r[6]=o*p+a*v+l*b,r[1]=c*x+h*y+d*w,r[4]=c*m+h*_+d*E,r[7]=c*p+h*v+d*b,r[2]=f*x+u*y+g*w,r[5]=f*m+u*_+g*E,r[8]=f*p+u*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=t*d+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Ke;function mh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bd(){const i=co("canvas");return i.style.display="block",i}const bl={};function nr(i){i in bl||(bl[i]=!0,console.warn(i))}function wd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const wl=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ed(){const i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:e,whitePoint:n,transfer:ao,toXYZ:wl,fromXYZ:El,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:wl,fromXYZ:El,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}const it=Ed();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class Td{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=co("canvas")),Bi.width=e.width,Bi.height=e.height;const s=Bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ad=0;class U0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uo(s[o].image)):r.push(Uo(s[o]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cd=0;const No=new P;class Pt extends ys{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Ri,s=Ri,r=Jt,o=Rn,a=yn,l=In,c=Pt.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ui(),this.name="",this.source=new U0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=oh;Pt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(u+1)/2,w=(p+1)/2,E=(h+f)/4,b=(d+x)/4,A=(g+m)/4;return _>v&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=b/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=A/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=b/r,s=A/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends ys{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Pt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new U0(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yt extends Rd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gh extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pd extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),_r.subVectors(this.max,Cs),zi.subVectors(e.a,Cs),ki.subVectors(e.b,Cs),Hi.subVectors(e.c,Cs),Zn.subVectors(ki,zi),Qn.subVectors(Hi,ki),xi.subVectors(zi,Hi);let t=[0,-Zn.z,Zn.y,0,-Qn.z,Qn.y,0,-xi.z,xi.y,Zn.z,0,-Zn.x,Qn.z,0,-Qn.x,xi.z,0,-xi.x,-Zn.y,Zn.x,0,-Qn.y,Qn.x,0,-xi.y,xi.x,0];return!Fo(t,zi,ki,Hi,_r)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,zi,ki,Hi,_r))?!1:(Mr.crossVectors(Zn,Qn),t=[Mr.x,Mr.y,Mr.z],Fo(t,zi,ki,Hi,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new P,new P,new P,new P,new P,new P,new P,new P],gn=new P,xr=new Ct,zi=new P,ki=new P,Hi=new P,Zn=new P,Qn=new P,xi=new P,Cs=new P,_r=new P,Mr=new P,_i=new P;function Fo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);const a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ld=new Ct,Rs=new P,Oo=new P;class hr{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ld.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Oo)),this.expandByPoint(Rs.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bn=new P,Bo=new P,yr=new P,$n=new P,zo=new P,Sr=new P,ko=new P;class N0{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bo.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Bo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(yr),a=$n.dot(this.direction),l=-$n.dot(yr),c=$n.lengthSq(),h=Math.abs(1-o*o);let d,f,u,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Bo).addScaledVector(yr,f),u}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,r){zo.subVectors(t,e),Sr.subVectors(n,e),ko.crossVectors(zo,Sr);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const l=a*this.direction.dot(Sr.crossVectors($n,Sr));if(l<0)return null;const c=a*this.direction.dot(zo.cross($n));if(c<0||l+c>o)return null;const h=-a*$n.dot(ko);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,o,a,l,c,h,d,f,u,g,x,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,u,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,d,f,u,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,u=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,u=l*d,g=c*h,x=c*d;t[0]=f+x*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,u=l*d,g=c*h,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,u=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=g*c-u,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,u=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*d,t[8]=g*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,u=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=o*h,t[9]=u*d-g,t[2]=g*d-u,t[6]=a*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dd,e,Id)}lookAt(e,t,n){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ei.crossVectors(n,en),ei.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ei.crossVectors(n,en)),ei.normalize(),br.crossVectors(en,ei),s[0]=ei.x,s[4]=br.x,s[8]=en.x,s[1]=ei.y,s[5]=br.y,s[9]=en.y,s[2]=ei.z,s[6]=br.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],w=n[15],E=s[0],b=s[4],A=s[8],M=s[12],S=s[1],L=s[5],I=s[9],O=s[13],B=s[2],q=s[6],j=s[10],J=s[14],W=s[3],le=s[7],ce=s[11],ge=s[15];return r[0]=o*E+a*S+l*B+c*W,r[4]=o*b+a*L+l*q+c*le,r[8]=o*A+a*I+l*j+c*ce,r[12]=o*M+a*O+l*J+c*ge,r[1]=h*E+d*S+f*B+u*W,r[5]=h*b+d*L+f*q+u*le,r[9]=h*A+d*I+f*j+u*ce,r[13]=h*M+d*O+f*J+u*ge,r[2]=g*E+x*S+m*B+p*W,r[6]=g*b+x*L+m*q+p*le,r[10]=g*A+x*I+m*j+p*ce,r[14]=g*M+x*O+m*J+p*ge,r[3]=y*E+_*S+v*B+w*W,r[7]=y*b+_*L+v*q+w*le,r[11]=y*A+_*I+v*j+w*ce,r[15]=y*M+_*O+v*J+w*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*u-n*l*u)+x*(+t*l*u-t*c*f+r*o*f-s*o*u+s*c*h-r*l*h)+m*(+t*c*d-t*a*u-r*o*d+n*o*u+r*a*h-n*c*h)+p*(-s*a*h-t*l*d+t*a*f+s*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=d*m*c-x*f*c+x*l*u-a*m*u-d*l*p+a*f*p,_=g*f*c-h*m*c-g*l*u+o*m*u+h*l*p-o*f*p,v=h*x*c-g*d*c+g*a*u-o*x*u-h*a*p+o*d*p,w=g*d*l-h*x*l-g*a*f+o*x*f+h*a*m-o*d*m,E=t*y+n*_+s*v+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=y*b,e[1]=(x*f*r-d*m*r-x*s*u+n*m*u+d*s*p-n*f*p)*b,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*b,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*u-n*l*u)*b,e[4]=_*b,e[5]=(h*m*r-g*f*r+g*s*u-t*m*u-h*s*p+t*f*p)*b,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*b,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*u+t*l*u)*b,e[8]=v*b,e[9]=(g*d*r-h*x*r-g*n*u+t*x*u+h*n*p-t*d*p)*b,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*b,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*u-t*a*u)*b,e[12]=w*b,e[13]=(h*x*s-g*d*s+g*n*f-t*x*f-h*n*m+t*d*m)*b,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*b,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,g=r*d,x=o*h,m=o*d,p=a*d,y=l*c,_=l*h,v=l*d,w=n.x,E=n.y,b=n.z;return s[0]=(1-(x+p))*w,s[1]=(u+v)*w,s[2]=(g-_)*w,s[3]=0,s[4]=(u-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+_)*b,s[9]=(m-y)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const o=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const c=1/r,h=1/o,d=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ln,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Ln)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===lo)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ln,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),u=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Ln)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===lo)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new P,vn=new st,Dd=new P(0,0,0),Id=new P(1,1,1),ei=new P,br=new P,en=new P,Tl=new st,Al=new fi;class on{constructor(e=0,t=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class F0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ud=0;const Cl=new P,Vi=new fi,zn=new st,wr=new P,Ps=new P,Nd=new P,Fd=new fi,Rl=new P(1,0,0),Pl=new P(0,1,0),Ll=new P(0,0,1),Dl={type:"added"},Od={type:"removed"},Wi={type:"childadded",child:null},Ho={type:"childremoved",child:null};class At extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new P,t=new on,n=new fi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Ke}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Ll,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ps,wr,this.up):zn.lookAt(wr,Ps,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(zn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dl),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Od),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dl),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Fd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new P(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new P,kn=new P,Go=new P,Hn=new P,Xi=new P,qi=new P,Il=new P,Vo=new P,Wo=new P,Xo=new P,qo=new ut,Yo=new ut,jo=new ut;class Mn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xn.subVectors(s,t),kn.subVectors(n,t),Go.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(kn),l=xn.dot(Go),c=kn.dot(kn),h=kn.dot(Go),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return qo.setScalar(0),Yo.setScalar(0),jo.setScalar(0),qo.fromBufferAttribute(e,t),Yo.fromBufferAttribute(e,n),jo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qo,r.x),o.addScaledVector(Yo,r.y),o.addScaledVector(jo,r.z),o}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),kn.subVectors(e,t),xn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Xi.subVectors(s,n),qi.subVectors(r,n),Vo.subVectors(e,n);const l=Xi.dot(Vo),c=qi.dot(Vo);if(l<=0&&c<=0)return t.copy(n);Wo.subVectors(e,s);const h=Xi.dot(Wo),d=qi.dot(Wo);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Xi,o);Xo.subVectors(e,r);const u=Xi.dot(Xo),g=qi.dot(Xo);if(g>=0&&u<=g)return t.copy(r);const x=u*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qi,a);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return Il.subVectors(r,s),a=(d-h)/(d-h+(u-g)),t.copy(s).addScaledVector(Il,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Ko(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=I0(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ko(o,r,e+1/3),this.g=Ko(o,r,e),this.b=Ko(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return it.workingToColorSpace(zt.copy(this),e),Math.round(Qe(zt.r*255,0,255))*65536+Math.round(Qe(zt.g*255,0,255))*256+Math.round(Qe(zt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ut){it.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Er);const n=Ws(ti.h,Er.h,t),s=Ws(ti.s,Er.s,t),r=Ws(ti.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new He;He.NAMES=vh;let Bd=0;class Ss extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ss,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ca,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kt extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new P,Tr=new se;let zd=0;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_l&&(e.usage=this.usage),e}}class xh extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _h extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kd=0;const cn=new st,Jo=new At,Yi=new P,tn=new Ct,Ls=new Ct,It=new P;class yt extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mh(e)?_h:xh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(tn.min,Ls.min),tn.expandByPoint(It),It.addVectors(tn.max,Ls.max),tn.expandByPoint(It)):(tn.expandByPoint(Ls.min),tn.expandByPoint(Ls.max))}tn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),It.add(Yi)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new P,l[A]=new P;const c=new P,h=new P,d=new P,f=new se,u=new se,g=new se,x=new P,m=new P;function p(A,M,S){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),f.fromBufferAttribute(r,A),u.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(c),d.sub(c),u.sub(f),g.sub(f);const L=1/(u.x*g.y-g.x*u.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(L),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(L),a[A].add(x),a[M].add(x),a[S].add(x),l[A].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,M=y.length;A<M;++A){const S=y[A],L=S.start,I=S.count;for(let O=L,B=L+I;O<B;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const _=new P,v=new P,w=new P,E=new P;function b(A){w.fromBufferAttribute(s,A),E.copy(w);const M=a[A];_.copy(M),_.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(E,M);const L=v.dot(l[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,L)}for(let A=0,M=y.length;A<M;++A){const S=y[A],L=S.start,I=S.count;for(let O=L,B=L+I;O<B;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let f=0,u=e.count;f<u;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new Zt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new st,Mi=new N0,Ar=new hr,Nl=new P,Cr=new P,Rr=new P,Pr=new P,Zo=new P,Lr=new P,Fl=new P,Dr=new P;class Be extends At{constructor(e=new yt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Zo.fromBufferAttribute(d,e),o?Lr.addScaledVector(Zo,h):Lr.addScaledVector(Zo.sub(t),h))}t.add(Lr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(Ar.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ar,Nl)===null||Mi.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Ul.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,u.start),_=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,w=_;v<w;v+=3){const E=a.getX(v),b=a.getX(v+1),A=a.getX(v+2);s=Ir(this,p,e,n,c,h,d,E,b,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){const y=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=Ir(this,o,e,n,c,h,d,y,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,u.start),_=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,w=_;v<w;v+=3){const E=v,b=v+1,A=v+2;s=Ir(this,p,e,n,c,h,d,E,b,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){const y=m,_=m+1,v=m+2;s=Ir(this,o,e,n,c,h,d,y,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Hd(i,e,t,n,s,r,o,a){let l;if(e.side===Xt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===di,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:i}}function Ir(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Cr),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Pr);const h=Hd(i,e,t,n,Cr,Rr,Pr,Fl);if(h){const d=new P;Mn.getBarycoord(Fl,Cr,Rr,Pr,d),s&&(h.uv=Mn.getInterpolatedAttribute(s,a,l,c,d,new se)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,a,l,c,d,new se)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};Mn.getNormal(Cr,Rr,Pr,f.normal),h.face=f,h.barycoord=d}return h}class pn extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function g(x,m,p,y,_,v,w,E,b,A,M){const S=v/b,L=w/A,I=v/2,O=w/2,B=E/2,q=b+1,j=A+1;let J=0,W=0;const le=new P;for(let ce=0;ce<j;ce++){const ge=ce*L-O;for(let oe=0;oe<q;oe++){const fe=oe*S-I;le[x]=fe*y,le[m]=ge*_,le[p]=B,c.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[p]=E>0?1:-1,h.push(le.x,le.y,le.z),d.push(oe/b),d.push(1-ce/A),J+=1}}for(let ce=0;ce<A;ce++)for(let ge=0;ge<b;ge++){const oe=f+ge+q*ce,fe=f+ge+q*(ce+1),Ae=f+(ge+1)+q*(ce+1),Pe=f+(ge+1)+q*ce;l.push(oe,fe,Pe),l.push(fe,Ae,Pe),W+=6}a.addGroup(u,W,M),u+=W,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=fs(i[t]);for(const s in n)e[s]=n[s]}return e}function Gd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ui={clone:fs,merge:Gt};var Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Gd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yh extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new P,Ol=new se,Bl=new se;class Wt extends yh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Ol,Bl),t.subVectors(Bl,Ol)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Ki=1;class Xd extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(ji,Ki,e,t);s.layers=this.layers,this.add(s);const r=new Wt(ji,Ki,e,t);r.layers=this.layers,this.add(r);const o=new Wt(ji,Ki,e,t);o.layers=this.layers,this.add(o);const a=new Wt(ji,Ki,e,t);a.layers=this.layers,this.add(a);const l=new Wt(ji,Ki,e,t);l.layers=this.layers,this.add(l);const c=new Wt(ji,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sh extends Pt{constructor(e=[],t=ls,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qd extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Yn});r.uniforms.tEquirect.value=t;const o=new Be(s,r),a=t.minFilter;return t.minFilter===Rn&&(t.minFilter=Jt),new Xd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class et extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yd={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class O0{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new O0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class B0 extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ps extends Pt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,h=qt,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl extends Zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new st,kl=new st,Ur=[],Hl=new Ct,jd=new st,Ds=new Be,Is=new hr;class $r extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Hl.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(Hl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Is.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),e.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),kl.multiplyMatrices(n,Ji),Ds.matrixWorld=kl,Ds.raycast(e,Ur);for(let o=0,a=Ur.length;o<a;o++){const l=Ur[o];l.instanceId=r,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ps(new Float32Array(s*this.count),s,this.count,C0,Pn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $o=new P,Kd=new P,Jd=new Ke;class si{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$o.subVectors(n,t).cross(Kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jd.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new hr,Zd=new se(.5,.5),Nr=new P;class z0{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,o=new si){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],_=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,u-h,p-g,w-y).normalize(),s[1].setComponents(c+o,u+h,p+g,w+y).normalize(),s[2].setComponents(c+a,u+d,p+x,w+_).normalize(),s[3].setComponents(c-a,u-d,p-x,w-_).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,u-f,p-m,w-v).normalize();else if(s[4].setComponents(c-l,u-f,p-m,w-v).normalize(),t===Ln)s[5].setComponents(c+l,u+f,p+m,w+v).normalize();else if(t===lo)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=Zd.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Nr.x=s.normal.x>0?e.max.x:e.min.x,Nr.y=s.normal.y>0?e.max.y:e.min.y,Nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Li extends Pt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bh extends Pt{constructor(e,t,n=Pi,s,r,o,a=qt,l=qt,c,h=er,d=1){if(h!==er&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new U0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wh extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class En extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let g=0;const x=[],m=n/2;let p=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(u,2));function y(){const v=new P,w=new P;let E=0;const b=(t-e)/n;for(let A=0;A<=r;A++){const M=[],S=A/r,L=S*(t-e)+e;for(let I=0;I<=s;I++){const O=I/s,B=O*l+a,q=Math.sin(B),j=Math.cos(B);w.x=L*q,w.y=-S*n+m,w.z=L*j,d.push(w.x,w.y,w.z),v.set(q,b,j).normalize(),f.push(v.x,v.y,v.z),u.push(O,1-S),M.push(g++)}x.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){const S=x[M][A],L=x[M+1][A],I=x[M+1][A+1],O=x[M][A+1];(e>0||M!==0)&&(h.push(S,L,O),E+=3),(t>0||M!==r-1)&&(h.push(L,I,O),E+=3)}c.addGroup(p,E,0),p+=E}function _(v){const w=g,E=new se,b=new P;let A=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*S,0),f.push(0,S,0),u.push(.5,.5),g++;const L=g;for(let I=0;I<=s;I++){const B=I/s*l+a,q=Math.cos(B),j=Math.sin(B);b.x=M*j,b.y=m*S,b.z=M*q,d.push(b.x,b.y,b.z),f.push(0,S,0),E.x=q*.5+.5,E.y=j*.5*S+.5,u.push(E.x,E.y),g++}for(let I=0;I<s;I++){const O=w+I,B=L+I;v===!0?h.push(B,B+1,O):h.push(B+1,B,O),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends En{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _o(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bs extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new P,v=new P,w=new P;for(let E=0;E<t.length;E+=3)u(t[E+0],_),u(t[E+1],v),u(t[E+2],w),l(_,v,w,y)}function l(y,_,v,w){const E=w+1,b=[];for(let A=0;A<=E;A++){b[A]=[];const M=y.clone().lerp(v,A/E),S=_.clone().lerp(v,A/E),L=E-A;for(let I=0;I<=L;I++)I===0&&A===E?b[A][I]=M:b[A][I]=M.clone().lerp(S,I/L)}for(let A=0;A<E;A++)for(let M=0;M<2*(E-A)-1;M++){const S=Math.floor(M/2);M%2===0?(f(b[A][S+1]),f(b[A+1][S]),f(b[A][S])):(f(b[A][S+1]),f(b[A+1][S+1]),f(b[A+1][S]))}}function c(y){const _=new P;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(y),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const y=new P;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const v=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(v,1-w)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const _=o[y+0],v=o[y+2],w=o[y+4],E=Math.max(_,v,w),b=Math.min(_,v,w);E>.9&&b<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function u(y,_){const v=y*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function g(){const y=new P,_=new P,v=new P,w=new P,E=new se,b=new se,A=new se;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),E.set(o[S+0],o[S+1]),b.set(o[S+2],o[S+3]),A.set(o[S+4],o[S+5]),w.copy(y).add(_).add(v).divideScalar(3);const L=m(w);x(E,S+0,y,L),x(b,S+2,_,L),x(A,S+4,v,L)}}function x(y,_,v,w){w<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.vertices,e.indices,e.radius,e.details)}}class k0 extends bs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new k0(e.radius,e.detail)}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new se:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],o=[],a=new P,l=new st;for(let u=0;u<=e;u++){const g=u/e;s[u]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qe(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Qe(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class H0 extends Nn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qd extends H0{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function G0(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Fr=new P,ea=new G0,ta=new G0,na=new G0;class ho extends Nn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fr.subVectors(s[0],s[1]).add(s[0]),c=Fr);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ea.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,x,m),ta.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,x,m),na.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ta.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),na.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(ea.calc(l),ta.calc(l),na.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gl(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function $d(i,e){const t=1-i;return t*t*e}function e1(i,e){return 2*(1-i)*i*e}function t1(i,e){return i*i*e}function Xs(i,e,t,n){return $d(i,e)+e1(i,t)+t1(i,n)}function n1(i,e){const t=1-i;return t*t*t*e}function i1(i,e){const t=1-i;return 3*t*t*i*e}function s1(i,e){return 3*(1-i)*i*i*e}function r1(i,e){return i*i*i*e}function qs(i,e,t,n,s){return n1(i,e)+i1(i,t)+s1(i,n)+r1(i,s)}class Eh extends Nn{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(e,s.x,r.x,o.x,a.x),qs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class o1 extends Nn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(e,s.x,r.x,o.x,a.x),qs(e,s.y,r.y,o.y,a.y),qs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Th extends Nn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a1 extends Nn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ah extends Nn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Xs(e,s.x,r.x,o.x),Xs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ch extends Nn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Xs(e,s.x,r.x,o.x),Xs(e,s.y,r.y,o.y),Xs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rh extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Gl(a,l.x,c.x,h.x,d.x),Gl(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this}}var uo=Object.freeze({__proto__:null,ArcCurve:Qd,CatmullRomCurve3:ho,CubicBezierCurve:Eh,CubicBezierCurve3:o1,EllipseCurve:H0,LineCurve:Th,LineCurve3:a1,QuadraticBezierCurve:Ah,QuadraticBezierCurve3:Ch,SplineCurve:Rh});class l1 extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new uo[s.type]().fromJSON(s))}return this}}class ir extends l1{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Th(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ah(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Eh(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Rh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new H0(e,t,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class dn extends ir{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new ir().fromJSON(s))}return this}}function c1(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Ph(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=p1(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let f=t;f<s;f+=t){const u=i[f],g=i[f+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return sr(r,o,t,a,l,c,0),o}function Ph(i,e,t,n,s){let r;if(s===E1(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Vl(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Vl(o/n|0,i[o],i[o+1],r);return r&&ms(r,r.next)&&(or(r),r=r.next),r}function Di(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ms(t,t.next)||_t(t.prev,t,t.next)===0)){if(or(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&_1(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?u1(i,n,s,r):h1(i)){e.push(l.i,i.i,c.i),or(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=d1(Di(i),e),sr(i,e,t,n,s,r,2)):o===2&&f1(i,e,t,n,s,r):sr(Di(i),e,t,n,s,r,1);break}}}function h1(i){const e=i.prev,t=i,n=i.next;if(_t(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=u&&Hs(s,a,r,l,o,c,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function u1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(_t(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,l,c),g=Math.min(h,d,f),x=Math.max(a,l,c),m=Math.max(h,d,f),p=f0(u,g,e,t,n),y=f0(x,m,e,t,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=u&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Hs(a,h,l,d,c,f,_.x,_.y)&&_t(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=u&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Hs(a,h,l,d,c,f,v.x,v.y)&&_t(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=u&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Hs(a,h,l,d,c,f,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=u&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Hs(a,h,l,d,c,f,v.x,v.y)&&_t(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function d1(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ms(n,s)&&Dh(n,t,t.next,s)&&rr(n,s)&&rr(s,n)&&(e.push(n.i,t.i,s.i),or(t),or(t.next),t=i=s),t=t.next}while(t!==i);return Di(t)}function f1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&S1(o,a)){let l=Ih(o,a);o=Di(o,o.next),l=Di(l,l.next),sr(o,e,t,n,s,r,0),sr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function p1(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Ph(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(y1(c))}s.sort(m1);for(let r=0;r<s.length;r++)t=g1(s[r],t);return t}function m1(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function g1(i,e){const t=v1(i,e);if(!t)return e;const n=Ih(t,i);return Di(n,n.next),Di(t,t.next)}function v1(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(ms(i,t))return t;do{if(ms(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Lh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);rr(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&x1(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function x1(i,e){return _t(i.prev,i,e.prev)<0&&_t(e.next,i,i.next)<0}function _1(i,e,t,n){let s=i;do s.z===0&&(s.z=f0(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,M1(s)}function M1(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function f0(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function y1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Lh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Hs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Lh(i,e,t,n,s,r,o,a)}function S1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!b1(i,e)&&(rr(i,e)&&rr(e,i)&&w1(i,e)&&(_t(i.prev,i,e.prev)||_t(i,e.prev,e))||ms(i,e)&&_t(i.prev,i,i.next)>0&&_t(e.prev,e,e.next)>0)}function _t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ms(i,e){return i.x===e.x&&i.y===e.y}function Dh(i,e,t,n){const s=Br(_t(i,e,t)),r=Br(_t(i,e,n)),o=Br(_t(t,n,i)),a=Br(_t(t,n,e));return!!(s!==r&&o!==a||s===0&&Or(i,t,e)||r===0&&Or(i,n,e)||o===0&&Or(t,i,n)||a===0&&Or(t,e,n))}function Or(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Br(i){return i>0?1:i<0?-1:0}function b1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function rr(i,e){return _t(i.prev,i,i.next)<0?_t(i,e,i.next)>=0&&_t(i,i.prev,e)>=0:_t(i,e,i.prev)<0||_t(i,i.next,e)<0}function w1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ih(i,e){const t=p0(i.i,i.x,i.y),n=p0(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vl(i,e,t,n){const s=p0(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function p0(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class T1{static triangulate(e,t,n=2){return c1(e,t,n)}}class Xn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Xn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Wl(e),Xl(n,e);let o=e.length;t.forEach(Wl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Xl(n,t[l]);const a=T1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Wl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Xl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class fn extends yt{constructor(e=new dn([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:A1;let _,v=!1,w,E,b,A;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,w=p.computeFrenetFrames(h,!1),E=new P,b=new P,A=new P),f||(m=0,u=0,g=0,x=0);const M=a.extractPoints(c);let S=M.shape;const L=M.holes;if(!Xn.isClockWise(S)){S=S.reverse();for(let V=0,K=L.length;V<K;V++){const N=L[V];Xn.isClockWise(N)&&(L[V]=N.reverse())}}function O(V){const N=10000000000000001e-36;let F=V[0];for(let Y=1;Y<=V.length;Y++){const X=Y%V.length,ie=V[X],Le=ie.x-F.x,Te=ie.y-F.y,D=Le*Le+Te*Te,T=Math.max(Math.abs(ie.x),Math.abs(ie.y),Math.abs(F.x),Math.abs(F.y)),G=N*T*T;if(D<=G){V.splice(X,1),Y--;continue}F=ie}}O(S),L.forEach(O);const B=L.length,q=S;for(let V=0;V<B;V++){const K=L[V];S=S.concat(K)}function j(V,K,N){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(K,N)}const J=S.length;function W(V,K,N){let F,Y,X;const ie=V.x-K.x,Le=V.y-K.y,Te=N.x-V.x,D=N.y-V.y,T=ie*ie+Le*Le,G=ie*D-Le*Te;if(Math.abs(G)>Number.EPSILON){const $=Math.sqrt(T),ae=Math.sqrt(Te*Te+D*D),ee=K.x-Le/$,De=K.y+ie/$,me=N.x-D/ae,Ce=N.y+Te/ae,Ie=((me-ee)*D-(Ce-De)*Te)/(ie*D-Le*Te);F=ee+ie*Ie-V.x,Y=De+Le*Ie-V.y;const he=F*F+Y*Y;if(he<=2)return new se(F,Y);X=Math.sqrt(he/2)}else{let $=!1;ie>Number.EPSILON?Te>Number.EPSILON&&($=!0):ie<-Number.EPSILON?Te<-Number.EPSILON&&($=!0):Math.sign(Le)===Math.sign(D)&&($=!0),$?(F=-Le,Y=ie,X=Math.sqrt(T)):(F=ie,Y=Le,X=Math.sqrt(T/2))}return new se(F/X,Y/X)}const le=[];for(let V=0,K=q.length,N=K-1,F=V+1;V<K;V++,N++,F++)N===K&&(N=0),F===K&&(F=0),le[V]=W(q[V],q[N],q[F]);const ce=[];let ge,oe=le.concat();for(let V=0,K=B;V<K;V++){const N=L[V];ge=[];for(let F=0,Y=N.length,X=Y-1,ie=F+1;F<Y;F++,X++,ie++)X===Y&&(X=0),ie===Y&&(ie=0),ge[F]=W(N[F],N[X],N[ie]);ce.push(ge),oe=oe.concat(ge)}let fe;if(m===0)fe=Xn.triangulateShape(q,L);else{const V=[],K=[];for(let N=0;N<m;N++){const F=N/m,Y=u*Math.cos(F*Math.PI/2),X=g*Math.sin(F*Math.PI/2)+x;for(let ie=0,Le=q.length;ie<Le;ie++){const Te=j(q[ie],le[ie],X);we(Te.x,Te.y,-Y),F===0&&V.push(Te)}for(let ie=0,Le=B;ie<Le;ie++){const Te=L[ie];ge=ce[ie];const D=[];for(let T=0,G=Te.length;T<G;T++){const $=j(Te[T],ge[T],X);we($.x,$.y,-Y),F===0&&D.push($)}F===0&&K.push(D)}}fe=Xn.triangulateShape(V,K)}const Ae=fe.length,Pe=g+x;for(let V=0;V<J;V++){const K=f?j(S[V],oe[V],Pe):S[V];v?(b.copy(w.normals[0]).multiplyScalar(K.x),E.copy(w.binormals[0]).multiplyScalar(K.y),A.copy(_[0]).add(b).add(E),we(A.x,A.y,A.z)):we(K.x,K.y,0)}for(let V=1;V<=h;V++)for(let K=0;K<J;K++){const N=f?j(S[K],oe[K],Pe):S[K];v?(b.copy(w.normals[V]).multiplyScalar(N.x),E.copy(w.binormals[V]).multiplyScalar(N.y),A.copy(_[V]).add(b).add(E),we(A.x,A.y,A.z)):we(N.x,N.y,d/h*V)}for(let V=m-1;V>=0;V--){const K=V/m,N=u*Math.cos(K*Math.PI/2),F=g*Math.sin(K*Math.PI/2)+x;for(let Y=0,X=q.length;Y<X;Y++){const ie=j(q[Y],le[Y],F);we(ie.x,ie.y,d+N)}for(let Y=0,X=L.length;Y<X;Y++){const ie=L[Y];ge=ce[Y];for(let Le=0,Te=ie.length;Le<Te;Le++){const D=j(ie[Le],ge[Le],F);v?we(D.x,D.y+_[h-1].y,_[h-1].x+N):we(D.x,D.y,d+N)}}}te(),ne();function te(){const V=s.length/3;if(f){let K=0,N=J*K;for(let F=0;F<Ae;F++){const Y=fe[F];Ee(Y[2]+N,Y[1]+N,Y[0]+N)}K=h+m*2,N=J*K;for(let F=0;F<Ae;F++){const Y=fe[F];Ee(Y[0]+N,Y[1]+N,Y[2]+N)}}else{for(let K=0;K<Ae;K++){const N=fe[K];Ee(N[2],N[1],N[0])}for(let K=0;K<Ae;K++){const N=fe[K];Ee(N[0]+J*h,N[1]+J*h,N[2]+J*h)}}n.addGroup(V,s.length/3-V,0)}function ne(){const V=s.length/3;let K=0;ve(q,K),K+=q.length;for(let N=0,F=L.length;N<F;N++){const Y=L[N];ve(Y,K),K+=Y.length}n.addGroup(V,s.length/3-V,1)}function ve(V,K){let N=V.length;for(;--N>=0;){const F=N;let Y=N-1;Y<0&&(Y=V.length-1);for(let X=0,ie=h+m*2;X<ie;X++){const Le=J*X,Te=J*(X+1),D=K+F+Le,T=K+Y+Le,G=K+Y+Te,$=K+F+Te;ze(D,T,G,$)}}}function we(V,K,N){l.push(V),l.push(K),l.push(N)}function Ee(V,K,N){ot(V),ot(K),ot(N);const F=s.length/3,Y=y.generateTopUV(n,s,F-3,F-2,F-1);R(Y[0]),R(Y[1]),R(Y[2])}function ze(V,K,N,F){ot(V),ot(K),ot(F),ot(K),ot(N),ot(F);const Y=s.length/3,X=y.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);R(X[0]),R(X[1]),R(X[3]),R(X[1]),R(X[2]),R(X[3])}function ot(V){s.push(l[V*3+0]),s.push(l[V*3+1]),s.push(l[V*3+2])}function R(V){r.push(V.x),r.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return C1(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new uo[s.type]().fromJSON(s)),new fn(n,e.options)}}const A1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,o),new se(a,l),new se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[s*3],u=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-d),new se(f,1-g),new se(x,1-p)]:[new se(a,1-l),new se(h,1-d),new se(u,1-g),new se(m,1-p)]}};function C1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fo extends bs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fo(e.radius,e.detail)}}class V0 extends yt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,d=new P,f=new se,u=new P,g=new P,x=new P;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,u.x=p*1,u.y=-m,u.z=p*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(g)}for(let y=0;y<=t;y++){const _=n+y*h*s,v=Math.sin(_),w=Math.cos(_);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*v,d.y=e[E].y,d.z=e[E].x*w,o.push(d.x,d.y,d.z),f.x=y/t,f.y=E/(e.length-1),a.push(f.x,f.y);const b=l[3*E+0]*v,A=l[3*E+1],M=l[3*E+0]*w;c.push(b,A,M)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const v=_+y*e.length,w=v,E=v+e.length,b=v+e.length+1,A=v+1;r.push(w,E,A),r.push(b,A,E)}this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("uv",new Ye(a,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new V0(e.points,e.segments,e.phiStart,e.phiLength)}}class Un extends bs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Un(e.radius,e.detail)}}class ws extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,u=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const y=p*f-o;for(let _=0;_<c;_++){const v=_*d-r;g.push(v,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const _=y+c*p,v=y+c*(p+1),w=y+1+c*(p+1),E=y+1+c*p;u.push(_,v,E),u.push(v,w,E)}this.setIndex(u),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}class W0 extends yt{constructor(e=new dn([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(o,2));function c(h){const d=s.length/3,f=h.extractPoints(t);let u=f.shape;const g=f.holes;Xn.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Xn.isClockWise(y)===!0&&(g[m]=y.reverse())}const x=Xn.triangulateShape(u,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];u=u.concat(y)}for(let m=0,p=u.length;m<p;m++){const y=u[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){const y=x[m],_=y[0]+d,v=y[1]+d,w=y[2]+d;n.push(_,v,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return R1(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new W0(n,e.curveSegments)}}function R1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Dn extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new P,f=new P,u=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const E=w/t;d.x=-e*Math.cos(s+E*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(E+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],v=h[p][y],w=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&u.push(_,v,E),(p!==n-1||l<Math.PI)&&u.push(v,w,E)}this.setIndex(u),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class X0 extends bs{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new X0(e.radius,e.detail)}}class sn extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new P,d=new P,f=new P;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){const x=g/s*r,m=u/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){const x=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,y=(s+1)*u+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ar extends yt{constructor(e=new Ch(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new se;let h=new P;const d=[],f=[],u=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(u,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),y(),p()}function m(_){h=e.getPointAt(_/t,h);const v=o.normals[_],w=o.binormals[_];for(let E=0;E<=s;E++){const b=E/s*Math.PI*2,A=Math.sin(b),M=-Math.cos(b);l.x=M*v.x+A*w.x,l.y=M*v.y+A*w.y,l.z=M*v.z+A*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=s;v++){const w=(s+1)*(_-1)+(v-1),E=(s+1)*_+(v-1),b=(s+1)*_+v,A=(s+1)*(_-1)+v;g.push(w,E,A),g.push(E,b,A)}}function y(){for(let _=0;_<=t;_++)for(let v=0;v<=s;v++)c.x=_/t,c.y=v/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ar(new uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class P1 extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pt extends Ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D0,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oi extends pt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class L1 extends Ss{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D0,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class D1 extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I1 extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ur extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class U1 extends ur{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ia=new st,ql=new P,Yl=new P;class q0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new z0,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(ql),Yl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yl),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N1 extends q0{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class F1 extends ur{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new N1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jl=new st,Us=new P,sa=new P;class O1 extends q0{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Us.setFromMatrixPosition(e.matrixWorld),n.position.copy(Us),sa.copy(n.position),sa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sa),n.updateMatrixWorld(),s.makeTranslation(-Us.x,-Us.y,-Us.z),jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl,n.coordinateSystem,n.reversedDepth)}}class eo extends ur{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Y0 extends yh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class B1 extends q0{constructor(){super(new Y0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z1 extends ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new B1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class k1 extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class H1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Kl=new st;class Ns{constructor(e,t,n=0,s=1/0){this.ray=new N0(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new F0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kl),this}intersectObject(e,t=!0,n=[]){return m0(e,this,n,t),n.sort(Jl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)m0(e[s],this,n,t);return n.sort(Jl),n}}function Jl(i,e){return i.distance-e.distance}function m0(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)m0(r[o],e,t,!0)}}function Zl(i,e,t,n){const s=G1(n);switch(t){case uh:return i*e;case C0:return i*e/s.components*s.byteLength;case R0:return i*e/s.components*s.byteLength;case fh:return i*e*2/s.components*s.byteLength;case P0:return i*e*2/s.components*s.byteLength;case dh:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case L0:return i*e*4/s.components*s.byteLength;case Kr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:case Ga:return Math.max(i,16)*Math.max(e,8)/4;case za:case Ha:return Math.max(i,8)*Math.max(e,8)/2;case Va:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case e0:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case t0:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case n0:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case i0:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case s0:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case r0:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case o0:case a0:case l0:return Math.ceil(i/4)*Math.ceil(e/4)*16;case c0:case h0:return Math.ceil(i/4)*Math.ceil(e/4)*8;case u0:case d0:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G1(i){switch(i){case In:case ah:return{byteLength:1,components:1};case Qs:case lh:case rn:return{byteLength:2,components:1};case T0:case A0:return{byteLength:2,components:4};case Pi:case E0:case Pn:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:S0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=S0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function V1(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],x=d[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const x=d[u];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var W1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X1=`#ifdef USE_ALPHAHASH
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
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J1=`#ifdef USE_AOMAP
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
#endif`,Z1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q1=`#ifdef USE_BATCHING
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
#endif`,$1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pf=`#define PI 3.141592653589793
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gf=`vec3 transformedNormal = objectNormal;
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
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Vf=`struct PhysicalMaterial {
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
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
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`uniform float scale;
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
}`,i2=`uniform vec3 diffuse;
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
}`,s2=`#include <common>
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
}`,r2=`uniform vec3 diffuse;
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
}`,o2=`#define LAMBERT
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
}`,a2=`#define LAMBERT
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
}`,l2=`#define MATCAP
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
}`,c2=`#define MATCAP
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
}`,h2=`#define NORMAL
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
}`,u2=`#define NORMAL
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
}`,d2=`#define PHONG
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
}`,f2=`#define PHONG
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
}`,p2=`#define STANDARD
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
}`,m2=`#define STANDARD
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
}`,g2=`#define TOON
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
}`,v2=`#define TOON
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
}`,x2=`uniform float size;
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
}`,_2=`uniform vec3 diffuse;
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
}`,M2=`#include <common>
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
}`,y2=`uniform vec3 color;
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
}`,S2=`uniform float rotation;
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
}`,b2=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:W1,alphahash_pars_fragment:X1,alphamap_fragment:q1,alphamap_pars_fragment:Y1,alphatest_fragment:j1,alphatest_pars_fragment:K1,aomap_fragment:J1,aomap_pars_fragment:Z1,batching_pars_vertex:Q1,batching_vertex:$1,begin_vertex:ef,beginnormal_vertex:tf,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:of,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:uf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:vf,displacementmap_vertex:xf,emissivemap_fragment:_f,emissivemap_pars_fragment:Mf,colorspace_fragment:yf,colorspace_pars_fragment:Sf,envmap_fragment:bf,envmap_common_pars_fragment:wf,envmap_pars_fragment:Ef,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Of,envmap_vertex:Af,fog_vertex:Cf,fog_pars_vertex:Rf,fog_fragment:Pf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:If,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Nf,lights_pars_begin:Ff,lights_toon_fragment:Bf,lights_toon_pars_fragment:zf,lights_phong_fragment:kf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:Jf,map_fragment:Zf,map_pars_fragment:Qf,map_particle_fragment:$f,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:vp,opaque_fragment:xp,packing:_p,premultiplied_alpha_fragment:Mp,project_vertex:yp,dithering_fragment:Sp,dithering_pars_fragment:bp,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Cp,shadowmask_pars_fragment:Rp,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Dp,skinnormal_vertex:Ip,specularmap_fragment:Up,specularmap_pars_fragment:Np,tonemapping_fragment:Fp,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:zp,uv_pars_fragment:kp,uv_pars_vertex:Hp,uv_vertex:Gp,worldpos_vertex:Vp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:jp,cube_frag:Kp,depth_vert:Jp,depth_frag:Zp,distanceRGBA_vert:Qp,distanceRGBA_frag:$p,equirect_vert:e2,equirect_frag:t2,linedashed_vert:n2,linedashed_frag:i2,meshbasic_vert:s2,meshbasic_frag:r2,meshlambert_vert:o2,meshlambert_frag:a2,meshmatcap_vert:l2,meshmatcap_frag:c2,meshnormal_vert:h2,meshnormal_frag:u2,meshphong_vert:d2,meshphong_frag:f2,meshphysical_vert:p2,meshphysical_frag:m2,meshtoon_vert:g2,meshtoon_frag:v2,points_vert:x2,points_frag:_2,shadow_vert:M2,shadow_frag:y2,sprite_vert:S2,sprite_frag:b2},Me={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},An={basic:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new He(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Gt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Gt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new He(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Gt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Gt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Gt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Gt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Gt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Gt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Gt([Me.common,Me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Gt([Me.lights,Me.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};An.physical={uniforms:Gt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const zr={r:0,b:0,g:0},Si=new on,w2=new st;function E2(i,e,t,n,s,r,o){const a=new He(0);let l=r===!0?0:1,c,h,d=null,f=0,u=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1;const w=g(_);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===xo)?(h===void 0&&(h=new Be(new pn(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:fs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(v.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w2.makeRotationFromEuler(Si)),h.material.toneMapped=it.getTransfer(w.colorSpace)!==ct,(d!==w||f!==w.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,u=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Be(new ws(2,2),new Ft({name:"BackgroundMaterial",uniforms:fs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=it.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(zr,Mh(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m,dispose:y}}function T2(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,L,I,O,B){let q=!1;const j=d(O,I,L);r!==j&&(r=j,c(r.object)),q=u(S,O,I,B),q&&g(S,O,I,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(S,L,I,O),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function d(S,L,I){const O=I.wireframe===!0;let B=n[S.id];B===void 0&&(B={},n[S.id]=B);let q=B[L.id];q===void 0&&(q={},B[L.id]=q);let j=q[O];return j===void 0&&(j=f(l()),q[O]=j),j}function f(S){const L=[],I=[],O=[];for(let B=0;B<t;B++)L[B]=0,I[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:O,object:S,attributes:{},index:null}}function u(S,L,I,O){const B=r.attributes,q=L.attributes;let j=0;const J=I.getAttributes();for(const W in J)if(J[W].location>=0){const ce=B[W];let ge=q[W];if(ge===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ce===void 0||ce.attribute!==ge||ge&&ce.data!==ge.data)return!0;j++}return r.attributesNum!==j||r.index!==O}function g(S,L,I,O){const B={},q=L.attributes;let j=0;const J=I.getAttributes();for(const W in J)if(J[W].location>=0){let ce=q[W];ce===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));const ge={};ge.attribute=ce,ce&&ce.data&&(ge.data=ce.data),B[W]=ge,j++}r.attributes=B,r.attributesNum=j,r.index=O}function x(){const S=r.newAttributes;for(let L=0,I=S.length;L<I;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const I=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;I[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),B[S]!==L&&(i.vertexAttribDivisor(S,L),B[S]=L)}function y(){const S=r.newAttributes,L=r.enabledAttributes;for(let I=0,O=L.length;I<O;I++)L[I]!==S[I]&&(i.disableVertexAttribArray(I),L[I]=0)}function _(S,L,I,O,B,q,j){j===!0?i.vertexAttribIPointer(S,L,I,B,q):i.vertexAttribPointer(S,L,I,O,B,q)}function v(S,L,I,O){x();const B=O.attributes,q=I.getAttributes(),j=L.defaultAttributeValues;for(const J in q){const W=q[J];if(W.location>=0){let le=B[J];if(le===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const ce=le.normalized,ge=le.itemSize,oe=e.get(le);if(oe===void 0)continue;const fe=oe.buffer,Ae=oe.type,Pe=oe.bytesPerElement,te=Ae===i.INT||Ae===i.UNSIGNED_INT||le.gpuType===E0;if(le.isInterleavedBufferAttribute){const ne=le.data,ve=ne.stride,we=le.offset;if(ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<W.locationSize;Ee++)p(W.location+Ee,ne.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)m(W.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Ee=0;Ee<W.locationSize;Ee++)_(W.location+Ee,ge/W.locationSize,Ae,ce,ve*Pe,(we+ge/W.locationSize*Ee)*Pe,te)}else{if(le.isInstancedBufferAttribute){for(let ne=0;ne<W.locationSize;ne++)p(W.location+ne,le.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ne=0;ne<W.locationSize;ne++)m(W.location+ne);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let ne=0;ne<W.locationSize;ne++)_(W.location+ne,ge/W.locationSize,Ae,ce,ge*Pe,ge/W.locationSize*ne*Pe,te)}}else if(j!==void 0){const ce=j[J];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(W.location,ce);break;case 3:i.vertexAttrib3fv(W.location,ce);break;case 4:i.vertexAttrib4fv(W.location,ce);break;default:i.vertexAttrib1fv(W.location,ce)}}}}y()}function w(){A();for(const S in n){const L=n[S];for(const I in L){const O=L[I];for(const B in O)h(O[B].object),delete O[B];delete L[I]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const I in L){const O=L[I];for(const B in O)h(O[B].object),delete O[B];delete L[I]}delete n[S.id]}function b(S){for(const L in n){const I=n[L];if(I[S.id]===void 0)continue;const O=I[S.id];for(const B in O)h(O[B].object),delete O[B];delete I[S.id]}}function A(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function A2(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];t.update(u,n,1)}function l(c,h,d,f){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function C2(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==yn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==In&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Pn&&!A)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,maxSamples:E}}function R2(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new si,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,_=y*4;let v=p.clippingState||null;l.value=v,v=h(g,f,_,u);for(let w=0;w!==_;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=u+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=u;_!==x;++_,v+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function P2(i){let e=new WeakMap;function t(o,a){return a===Fa?o.mapping=ls:a===Oa&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===Oa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qd(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const es=4,Ql=[.125,.215,.35,.446,.526,.582],Ai=20,ra=new Y0,$l=new He;let oa=null,aa=0,la=0,ca=!1;const Ei=(1+Math.sqrt(5))/2,Zi=1/Ei,ec=[new P(-Ei,Zi,0),new P(Ei,Zi,0),new P(-Zi,0,Ei),new P(Zi,0,Ei),new P(0,Ei,-Zi),new P(0,Ei,Zi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],L2=new P;class po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=L2}=r;oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:rn,format:yn,colorSpace:us,depthBuffer:!1},s=tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D2(r)),this._blurMaterial=I2(r,e,t)}return s}_compileMaterial(e){const t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,n,s,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor($l),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const x=new Kt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new Be(new pn,x);let p=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,p=!0):(x.color.copy($l),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const w=this._cubeSize;kr(s,v*w,_>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ls||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ec[(s-r-1)%ec.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Be(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ai-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let y=0;for(let b=0;b<Ai;++b){const A=b/x,M=Math.exp(-A*A/2);p.push(M),b===0?y+=M:b<m&&(y+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const v=this._sizeLods[s],w=3*v*(s>_-es?s-_+es:0),E=4*(this._cubeSize-v);kr(t,w,E,3*v,2*v),l.setRenderTarget(t),l.render(d,ra)}}function D2(i){const e=[],t=[],n=[];let s=i;const r=i-es+1+Ql.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-es?l=Ql[o-i+es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*u),_=new Float32Array(m*g*u),v=new Float32Array(p*g*u);for(let E=0;E<u;E++){const b=E%3*2/3-1,A=E>2?0:-1,M=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];y.set(M,x*g*E),_.set(f,m*g*E);const S=[E,E,E,E,E,E];v.set(S,p*g*E)}const w=new yt;w.setAttribute("position",new Zt(y,x)),w.setAttribute("uv",new Zt(_,m)),w.setAttribute("faceIndex",new Zt(v,p)),e.push(w),s>es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tc(i,e,t){const n=new Yt(i,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function I2(i,e,t){const n=new Float32Array(Ai),s=new P(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:j0(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function nc(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:j0(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ic(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:j0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function j0(){return`

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
	`}function U2(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fa||l===Oa,h=l===ls||l===cs;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new po(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new po(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function N2(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F2(i,e,t,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const u=r.get(f);u&&(e.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const u in f)e.update(f[u],i.ARRAY_BUFFER)}function c(d){const f=[],u=d.index,g=d.attributes.position;let x=0;if(u!==null){const y=u.array;x=u.version;for(let _=0,v=y.length;_<v;_+=3){const w=y[_+0],E=y[_+1],b=y[_+2];f.push(w,E,E,b,b,w)}}else if(g!==void 0){const y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){const w=_+0,E=_+1,b=_+2;f.push(w,E,E,b,b,w)}}else return;const m=new(mh(f)?_h:xh)(f,1);m.version=x;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function O2(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),t.update(u,n,1)}function c(f,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,f*o,g),t.update(u,n,g))}function h(f,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,n,1)}function d(f,u,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,u[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function B2(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function z2(i,e,t){const n=new WeakMap,s=new ut;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;u===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*w*4*d),b=new gh(E,v,w,d);b.type=Pn,b.needsUpdate=!0;const A=_*4;for(let S=0;S<d;S++){const L=m[S],I=p[S],O=y[S],B=v*w*4*S;for(let q=0;q<L.count;q++){const j=q*A;u===!0&&(s.fromBufferAttribute(L,q),E[B+j+0]=s.x,E[B+j+1]=s.y,E[B+j+2]=s.z,E[B+j+3]=0),g===!0&&(s.fromBufferAttribute(I,q),E[B+j+4]=s.x,E[B+j+5]=s.y,E[B+j+6]=s.z,E[B+j+7]=0),x===!0&&(s.fromBufferAttribute(O,q),E[B+j+8]=s.x,E[B+j+9]=s.y,E[B+j+10]=s.z,E[B+j+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:b,size:new se(v,w)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function k2(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Nh=new Pt,sc=new bh(1,1),Fh=new gh,Oh=new Pd,Bh=new Sh,rc=[],oc=[],ac=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function Es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=rc[s];if(r===void 0&&(r=new Float32Array(s),rc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mo(i,e){let t=oc[e];t===void 0&&(t=new Int32Array(e),oc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function H2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function G2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function V2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function W2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function X2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;cc.set(n),i.uniformMatrix2fv(this.addr,!1,cc),Dt(t,n)}}function q2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;lc.set(n),i.uniformMatrix3fv(this.addr,!1,lc),Dt(t,n)}}function Y2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;ac.set(n),i.uniformMatrix4fv(this.addr,!1,ac),Dt(t,n)}}function j2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function K2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function J2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Z2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Q2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function nm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=ph,r=sc):r=Nh,t.setTexture2D(e||r,s)}function im(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Oh,s)}function sm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bh,s)}function rm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fh,s)}function om(i){switch(i){case 5126:return H2;case 35664:return G2;case 35665:return V2;case 35666:return W2;case 35674:return X2;case 35675:return q2;case 35676:return Y2;case 5124:case 35670:return j2;case 35667:case 35671:return K2;case 35668:case 35672:return J2;case 35669:case 35673:return Z2;case 5125:return Q2;case 36294:return $2;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}function am(i,e){i.uniform1fv(this.addr,e)}function lm(i,e){const t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function cm(i,e){const t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function hm(i,e){const t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function um(i,e){const t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dm(i,e){const t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fm(i,e){const t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pm(i,e){i.uniform1iv(this.addr,e)}function mm(i,e){i.uniform2iv(this.addr,e)}function gm(i,e){i.uniform3iv(this.addr,e)}function vm(i,e){i.uniform4iv(this.addr,e)}function xm(i,e){i.uniform1uiv(this.addr,e)}function _m(i,e){i.uniform2uiv(this.addr,e)}function Mm(i,e){i.uniform3uiv(this.addr,e)}function ym(i,e){i.uniform4uiv(this.addr,e)}function Sm(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Nh,r[o])}function bm(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Oh,r[o])}function wm(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bh,r[o])}function Em(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fh,r[o])}function Tm(i){switch(i){case 5126:return am;case 35664:return lm;case 35665:return cm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return _m;case 36295:return Mm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Em}}class Am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=om(t.type)}}class Cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tm(t.type)}}class Rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function hc(i,e){i.seq.push(e),i.map[e.id]=e}function Pm(i,e,t){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),o=ha.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hc(t,c===void 0?new Am(a,i,e):new Cm(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Rm(a),hc(t,d)),t=d}}}class to{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Pm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function uc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lm=37297;let Dm=0;function Im(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const dc=new Ke;function Um(i){it._getMatrix(dc,it.workingColorSpace,i);const e=`mat3( ${dc.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case ao:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Im(i.getShaderSource(e),a)}else return r}function Nm(i,e){const t=Um(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fm(i,e){let t;switch(e){case eh:t="Linear";break;case th:t="Reinhard";break;case nh:t="Cineon";break;case w0:t="ACESFilmic";break;case sh:t="AgX";break;case rh:t="Neutral";break;case ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new P;function Om(){it.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function zm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function km(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Gs(i){return i!==""}function pc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function g0(i){return i.replace(Hm,Vm)}const Gm=new Map;function Vm(i,e){let t=Ze[e];if(t===void 0){const n=Gm.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return g0(t)}const Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(i){return i.replace(Wm,Xm)}function Xm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function qm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ym(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Km(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case b0:e="ENVMAP_BLENDING_MULTIPLY";break;case ju:e="ENVMAP_BLENDING_MIX";break;case Ku:e="ENVMAP_BLENDING_ADD";break}return e}function Jm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zm(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qm(t),c=Ym(t),h=jm(t),d=Km(t),f=Jm(t),u=Bm(t),g=zm(r),x=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==hi?Fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Nm("linearToOutputTexel",t.outputColorSpace),Om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=g0(o),o=pc(o,t),o=mc(o,t),a=g0(a),a=pc(a,t),a=mc(a,t),o=gc(o),a=gc(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+m+o,v=y+p+a,w=uc(s,s.VERTEX_SHADER,_),E=uc(s,s.FRAGMENT_SHADER,v);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(L){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(w)||"",B=s.getShaderInfoLog(E)||"",q=I.trim(),j=O.trim(),J=B.trim();let W=!0,le=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,E);else{const ce=fc(s,w,"vertex"),ge=fc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+ce+`
`+ge)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(j===""||J==="")&&(le=!1);le&&(L.diagnostics={runnable:W,programLog:q,vertexShader:{log:j,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(w),s.deleteShader(E),A=new to(s,x),M=km(s,x)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Lm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}let Qm=0;class $m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new e3(e),t.set(e,n)),n}}class e3{constructor(e){this.id=Qm++,this.code=e,this.usedTimes=0}}function t3(i,e,t,n,s,r,o){const a=new F0,l=new $m,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,I,O){const B=I.fog,q=O.geometry,j=M.isMeshStandardMaterial?I.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),W=J&&J.mapping===xo?J.image.height:null,le=g[M.type];M.precision!==null&&(u=s.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=ce!==void 0?ce.length:0;let oe=0;q.morphAttributes.position!==void 0&&(oe=1),q.morphAttributes.normal!==void 0&&(oe=2),q.morphAttributes.color!==void 0&&(oe=3);let fe,Ae,Pe,te;if(le){const lt=An[le];fe=lt.vertexShader,Ae=lt.fragmentShader}else fe=M.vertexShader,Ae=M.fragmentShader,l.update(M),Pe=l.getVertexShaderID(M),te=l.getFragmentShaderID(M);const ne=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),we=O.isInstancedMesh===!0,Ee=O.isBatchedMesh===!0,ze=!!M.map,ot=!!M.matcap,R=!!J,V=!!M.aoMap,K=!!M.lightMap,N=!!M.bumpMap,F=!!M.normalMap,Y=!!M.displacementMap,X=!!M.emissiveMap,ie=!!M.metalnessMap,Le=!!M.roughnessMap,Te=M.anisotropy>0,D=M.clearcoat>0,T=M.dispersion>0,G=M.iridescence>0,$=M.sheen>0,ae=M.transmission>0,ee=Te&&!!M.anisotropyMap,De=D&&!!M.clearcoatMap,me=D&&!!M.clearcoatNormalMap,Ce=D&&!!M.clearcoatRoughnessMap,Ie=G&&!!M.iridescenceMap,he=G&&!!M.iridescenceThicknessMap,be=$&&!!M.sheenColorMap,We=$&&!!M.sheenRoughnessMap,Oe=!!M.specularMap,ye=!!M.specularColorMap,Je=!!M.specularIntensityMap,U=ae&&!!M.transmissionMap,pe=ae&&!!M.thicknessMap,xe=!!M.gradientMap,Ue=!!M.alphaMap,ue=M.alphaTest>0,re=!!M.alphaHash,Fe=!!M.extensions;let je=hi;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(je=i.toneMapping);const ft={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:fe,fragmentShader:Ae,defines:M.defines,customVertexShaderID:Pe,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Ee,batchingColor:Ee&&O._colorsTexture!==null,instancing:we,instancingColor:we&&O.instanceColor!==null,instancingMorph:we&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:us,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:ot,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:W,aoMap:V,lightMap:K,bumpMap:N,normalMap:F,displacementMap:f&&Y,emissiveMap:X,normalMapObjectSpace:F&&M.normalMapType===$u,normalMapTangentSpace:F&&M.normalMapType===D0,metalnessMap:ie,roughnessMap:Le,anisotropy:Te,anisotropyMap:ee,clearcoat:D,clearcoatMap:De,clearcoatNormalMap:me,clearcoatRoughnessMap:Ce,dispersion:T,iridescence:G,iridescenceMap:Ie,iridescenceThicknessMap:he,sheen:$,sheenColorMap:be,sheenRoughnessMap:We,specularMap:Oe,specularColorMap:ye,specularIntensityMap:Je,transmission:ae,transmissionMap:U,thicknessMap:pe,gradientMap:xe,opaque:M.transparent===!1&&M.blending===ss&&M.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ue,alphaHash:re,combine:M.combine,mapUv:ze&&x(M.map.channel),aoMapUv:V&&x(M.aoMap.channel),lightMapUv:K&&x(M.lightMap.channel),bumpMapUv:N&&x(M.bumpMap.channel),normalMapUv:F&&x(M.normalMap.channel),displacementMapUv:Y&&x(M.displacementMap.channel),emissiveMapUv:X&&x(M.emissiveMap.channel),metalnessMapUv:ie&&x(M.metalnessMap.channel),roughnessMapUv:Le&&x(M.roughnessMap.channel),anisotropyMapUv:ee&&x(M.anisotropyMap.channel),clearcoatMapUv:De&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&x(M.sheenRoughnessMap.channel),specularMapUv:Oe&&x(M.specularMap.channel),specularColorMapUv:ye&&x(M.specularColorMap.channel),specularIntensityMapUv:Je&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:pe&&x(M.thicknessMap.channel),alphaMapUv:Ue&&x(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(F||Te),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(ze||Ue),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:X&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Cn,flipSided:M.side===Xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(S,M),_(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=g[M.type];let L;if(S){const I=An[S];L=ui.clone(I.uniforms)}else L=M.uniforms;return L}function w(M,S){let L;for(let I=0,O=h.length;I<O;I++){const B=h[I];if(B.cacheKey===S){L=B,++L.usedTimes;break}}return L===void 0&&(L=new Zm(i,S,M,r),h.push(L)),L}function E(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function b(M){l.remove(M)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:A}}function n3(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function i3(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _c(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,u,g,x,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function a(d,f,u,g,x,m){const p=o(d,f,u,g,x,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function l(d,f,u,g,x,m){const p=o(d,f,u,g,x,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||i3),n.length>1&&n.sort(f||xc),s.length>1&&s.sort(f||xc)}function h(){for(let d=e,f=i.length;d<f;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function s3(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new _c,i.set(n,[o])):s>=r.length?(o=new _c,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function r3(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new He};break;case"SpotLight":t={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function o3(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let a3=0;function l3(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c3(i){const e=new r3,t=o3(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new st,o=new st;function a(c){let h=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,g=0,x=0,m=0,p=0,y=0,_=0,v=0,w=0,E=0,b=0;c.sort(l3);for(let M=0,S=c.length;M<S;M++){const L=c[M],I=L.color,O=L.intensity,B=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=I.r*O,d+=I.g*O,f+=I.b*O;else if(L.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],O);b++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,W=t.get(L);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[u]=W,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=L.shadow.matrix,y++}n.directional[u]=j,u++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(I).multiplyScalar(O),j.distance=B,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[x]=j;const J=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,J.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[x]=J.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=q,v++}x++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(I).multiplyScalar(O),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const J=L.shadow,W=t.get(L);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,_++}n.point[g]=j,g++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(O),j.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==u||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==_||A.numSpotShadows!==v||A.numSpotMaps!==w||A.numLightProbes!==b)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,A.directionalLength=u,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=_,A.numSpotShadows=v,A.numSpotMaps=w,A.numLightProbes=b,n.version=a3++)}function l(c,h){let d=0,f=0,u=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(_.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Mc(i){const e=new c3(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function h3(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Mc(i),e.set(s,[a])):r>=o.length?(a=new Mc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const u3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d3=`uniform sampler2D shadow_pass;
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
}`;function f3(i,e,t){let n=new z0;const s=new se,r=new se,o=new ut,a=new D1({depthPacking:Qu}),l=new I1,c={},h=t.maxTextureSize,d={[di]:Xt,[Xt]:di,[Cn]:Cn},f=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:u3,fragmentShader:d3}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new yt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Be(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let p=this.type;this.render=function(E,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Yn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==Gn&&this.type===Gn,B=p===Gn&&this.type!==Gn;for(let q=0,j=E.length;q<j;q++){const J=E[q],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const le=W.getFrameExtents();if(s.multiply(le),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,W.mapSize.y=r.y)),W.map===null||O===!0||B===!0){const ge=this.type!==Gn?{minFilter:qt,magFilter:qt}:{};W.map!==null&&W.map.dispose(),W.map=new Yt(s.x,s.y,ge),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ce=W.getViewportCount();for(let ge=0;ge<ce;ge++){const oe=W.getViewport(ge);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),I.viewport(o),W.updateMatrices(J,ge),n=W.getFrustum(),v(b,A,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Gn&&y(W,A),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,L)};function y(E,b){const A=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yt(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,A,f,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,A,u,x,null)}function _(E,b,A,M){let S=null;const L=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)S=L;else if(S=A.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=S.uuid,O=b.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let q=B[O];q===void 0&&(q=S.clone(),B[O]=q,b.addEventListener("dispose",w)),S=q}if(S.visible=b.visible,S.wireframe=b.wireframe,M===Gn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=i.properties.get(S);I.light=A}return S}function v(E,b,A,M,S){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Gn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const O=e.update(E),B=E.material;if(Array.isArray(B)){const q=O.groups;for(let j=0,J=q.length;j<J;j++){const W=q[j],le=B[W.materialIndex];if(le&&le.visible){const ce=_(E,le,M,S);E.onBeforeShadow(i,E,b,A,O,ce,W),i.renderBufferDirect(A,null,O,ce,E,W),E.onAfterShadow(i,E,b,A,O,ce,W)}}}else if(B.visible){const q=_(E,B,M,S);E.onBeforeShadow(i,E,b,A,O,q,null),i.renderBufferDirect(A,null,O,q,E,null),E.onAfterShadow(i,E,b,A,O,q,null)}}const I=E.children;for(let O=0,B=I.length;O<B;O++)v(I[O],b,A,M,S)}function w(E){E.target.removeEventListener("dispose",w);for(const A in c){const M=c[A],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const p3={[Ra]:Pa,[La]:Ua,[Da]:Na,[as]:Ia,[Pa]:Ra,[Ua]:La,[Na]:Da,[Ia]:as};function m3(i,e){function t(){let U=!1;const pe=new ut;let xe=null;const Ue=new ut(0,0,0,0);return{setMask:function(ue){xe!==ue&&!U&&(i.colorMask(ue,ue,ue,ue),xe=ue)},setLocked:function(ue){U=ue},setClear:function(ue,re,Fe,je,ft){ft===!0&&(ue*=je,re*=je,Fe*=je),pe.set(ue,re,Fe,je),Ue.equals(pe)===!1&&(i.clearColor(ue,re,Fe,je),Ue.copy(pe))},reset:function(){U=!1,xe=null,Ue.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,xe=null,Ue=null,ue=null;return{setReversed:function(re){if(pe!==re){const Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),pe=re;const je=ue;ue=null,this.setClear(je)}},getReversed:function(){return pe},setTest:function(re){re?ne(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(re){xe!==re&&!U&&(i.depthMask(re),xe=re)},setFunc:function(re){if(pe&&(re=p3[re]),Ue!==re){switch(re){case Ra:i.depthFunc(i.NEVER);break;case Pa:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Da:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Ua:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=re}},setLocked:function(re){U=re},setClear:function(re){ue!==re&&(pe&&(re=1-re),i.clearDepth(re),ue=re)},reset:function(){U=!1,xe=null,Ue=null,ue=null,pe=!1}}}function s(){let U=!1,pe=null,xe=null,Ue=null,ue=null,re=null,Fe=null,je=null,ft=null;return{setTest:function(lt){U||(lt?ne(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(lt){pe!==lt&&!U&&(i.stencilMask(lt),pe=lt)},setFunc:function(lt,Fn,Tn){(xe!==lt||Ue!==Fn||ue!==Tn)&&(i.stencilFunc(lt,Fn,Tn),xe=lt,Ue=Fn,ue=Tn)},setOp:function(lt,Fn,Tn){(re!==lt||Fe!==Fn||je!==Tn)&&(i.stencilOp(lt,Fn,Tn),re=lt,Fe=Fn,je=Tn)},setLocked:function(lt){U=lt},setClear:function(lt){ft!==lt&&(i.clearStencil(lt),ft=lt)},reset:function(){U=!1,pe=null,xe=null,Ue=null,ue=null,re=null,Fe=null,je=null,ft=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,u=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,w=null,E=null,b=new He(0,0,0),A=0,M=!1,S=null,L=null,I=null,O=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=J>=2);let le=null,ce={};const ge=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),fe=new ut().fromArray(ge),Ae=new ut().fromArray(oe);function Pe(U,pe,xe,Ue){const ue=new Uint8Array(4),re=i.createTexture();i.bindTexture(U,re),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<xe;Fe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(pe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return re}const te={};te[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(as),N(!1),F(ml),ne(i.CULL_FACE),V(Yn);function ne(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ve(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function we(U,pe){return d[U]!==pe?(i.bindFramebuffer(U,pe),d[U]=pe,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ee(U,pe){let xe=u,Ue=!1;if(U){xe=f.get(pe),xe===void 0&&(xe=[],f.set(pe,xe));const ue=U.textures;if(xe.length!==ue.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Fe=ue.length;re<Fe;re++)xe[re]=i.COLOR_ATTACHMENT0+re;xe.length=ue.length,Ue=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(xe)}function ze(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const ot={[Ti]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};ot[Iu]=i.MIN,ot[Uu]=i.MAX;const R={[Nu]:i.ZERO,[Fu]:i.ONE,[Ou]:i.SRC_COLOR,[Aa]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[Hu]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[Ca]:i.ONE_MINUS_SRC_ALPHA,[Gu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function V(U,pe,xe,Ue,ue,re,Fe,je,ft,lt){if(U===Yn){x===!0&&(ve(i.BLEND),x=!1);return}if(x===!1&&(ne(i.BLEND),x=!0),U!==Pu){if(U!==m||lt!==M){if((p!==Ti||v!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,v=Ti),lt)switch(U){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,_=null,w=null,E=null,b.set(0,0,0),A=0,m=U,M=lt}return}ue=ue||pe,re=re||xe,Fe=Fe||Ue,(pe!==p||ue!==v)&&(i.blendEquationSeparate(ot[pe],ot[ue]),p=pe,v=ue),(xe!==y||Ue!==_||re!==w||Fe!==E)&&(i.blendFuncSeparate(R[xe],R[Ue],R[re],R[Fe]),y=xe,_=Ue,w=re,E=Fe),(je.equals(b)===!1||ft!==A)&&(i.blendColor(je.r,je.g,je.b,ft),b.copy(je),A=ft),m=U,M=!1}function K(U,pe){U.side===Cn?ve(i.CULL_FACE):ne(i.CULL_FACE);let xe=U.side===Xt;pe&&(xe=!xe),N(xe),U.blending===ss&&U.transparent===!1?V(Yn):V(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ue=U.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),X(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function N(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function F(U){U!==Cu?(ne(i.CULL_FACE),U!==L&&(U===ml?i.cullFace(i.BACK):U===Ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),L=U}function Y(U){U!==I&&(j&&i.lineWidth(U),I=U)}function X(U,pe,xe){U?(ne(i.POLYGON_OFFSET_FILL),(O!==pe||B!==xe)&&(i.polygonOffset(pe,xe),O=pe,B=xe)):ve(i.POLYGON_OFFSET_FILL)}function ie(U){U?ne(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function Le(U){U===void 0&&(U=i.TEXTURE0+q-1),le!==U&&(i.activeTexture(U),le=U)}function Te(U,pe,xe){xe===void 0&&(le===null?xe=i.TEXTURE0+q-1:xe=le);let Ue=ce[xe];Ue===void 0&&(Ue={type:void 0,texture:void 0},ce[xe]=Ue),(Ue.type!==U||Ue.texture!==pe)&&(le!==xe&&(i.activeTexture(xe),le=xe),i.bindTexture(U,pe||te[U]),Ue.type=U,Ue.texture=pe)}function D(){const U=ce[le];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){fe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),fe.copy(U))}function We(U){Ae.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ae.copy(U))}function Oe(U,pe){let xe=c.get(pe);xe===void 0&&(xe=new WeakMap,c.set(pe,xe));let Ue=xe.get(U);Ue===void 0&&(Ue=i.getUniformBlockIndex(pe,U.name),xe.set(U,Ue))}function ye(U,pe){const Ue=c.get(pe).get(U);l.get(pe)!==Ue&&(i.uniformBlockBinding(pe,Ue,U.__bindingPointIndex),l.set(pe,Ue))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,ce={},d={},f=new WeakMap,u=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,w=null,E=null,b=new He(0,0,0),A=0,M=!1,S=null,L=null,I=null,O=null,B=null,fe.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:ve,bindFramebuffer:we,drawBuffers:Ee,useProgram:ze,setBlending:V,setMaterial:K,setFlipSided:N,setCullFace:F,setLineWidth:Y,setPolygonOffset:X,setScissorTest:ie,activeTexture:Le,bindTexture:Te,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:Ie,texImage3D:he,updateUBOMapping:Oe,uniformBlockBinding:ye,texStorage2D:me,texStorage3D:Ce,texSubImage2D:$,texSubImage3D:ae,compressedTexSubImage2D:ee,compressedTexSubImage3D:De,scissor:be,viewport:We,reset:Je}}function g3(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return u?new OffscreenCanvas(D,T):co("canvas")}function x(D,T,G){let $=1;const ae=Te(D);if((ae.width>G||ae.height>G)&&($=G/Math.max(ae.width,ae.height)),$<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ee=Math.floor($*ae.width),De=Math.floor($*ae.height);d===void 0&&(d=g(ee,De));const me=T?g(ee,De):d;return me.width=ee,me.height=De,me.getContext("2d").drawImage(D,0,0,ee,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ee+"x"+De+")."),me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(D,T,G,$,ae=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ee=T;if(T===i.RED&&(G===i.FLOAT&&(ee=i.R32F),G===i.HALF_FLOAT&&(ee=i.R16F),G===i.UNSIGNED_BYTE&&(ee=i.R8)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.R8UI),G===i.UNSIGNED_SHORT&&(ee=i.R16UI),G===i.UNSIGNED_INT&&(ee=i.R32UI),G===i.BYTE&&(ee=i.R8I),G===i.SHORT&&(ee=i.R16I),G===i.INT&&(ee=i.R32I)),T===i.RG&&(G===i.FLOAT&&(ee=i.RG32F),G===i.HALF_FLOAT&&(ee=i.RG16F),G===i.UNSIGNED_BYTE&&(ee=i.RG8)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.RG8UI),G===i.UNSIGNED_SHORT&&(ee=i.RG16UI),G===i.UNSIGNED_INT&&(ee=i.RG32UI),G===i.BYTE&&(ee=i.RG8I),G===i.SHORT&&(ee=i.RG16I),G===i.INT&&(ee=i.RG32I)),T===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),G===i.UNSIGNED_INT&&(ee=i.RGB32UI),G===i.BYTE&&(ee=i.RGB8I),G===i.SHORT&&(ee=i.RGB16I),G===i.INT&&(ee=i.RGB32I)),T===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),G===i.UNSIGNED_INT&&(ee=i.RGBA32UI),G===i.BYTE&&(ee=i.RGBA8I),G===i.SHORT&&(ee=i.RGBA16I),G===i.INT&&(ee=i.RGBA32I)),T===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),T===i.RGBA){const De=ae?ao:it.getTransfer($);G===i.FLOAT&&(ee=i.RGBA32F),G===i.HALF_FLOAT&&(ee=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ee=De===ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(D,T){let G;return D?T===null||T===Pi||T===$s?G=i.DEPTH24_STENCIL8:T===Pn?G=i.DEPTH32F_STENCIL8:T===Qs&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pi||T===$s?G=i.DEPTH_COMPONENT24:T===Pn?G=i.DEPTH_COMPONENT32F:T===Qs&&(G=i.DEPTH_COMPONENT16),G}function w(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==qt&&D.minFilter!==Jt?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function E(D){const T=D.target;T.removeEventListener("dispose",E),A(T),T.isVideoTexture&&h.delete(T)}function b(D){const T=D.target;T.removeEventListener("dispose",b),S(T)}function A(D){const T=n.get(D);if(T.__webglInit===void 0)return;const G=D.source,$=f.get(G);if($){const ae=$[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&M(D),Object.keys($).length===0&&f.delete(G)}n.remove(D)}function M(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const G=D.source,$=f.get(G);delete $[T.__cacheKey],o.memory.textures--}function S(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let ae=0;ae<T.__webglFramebuffer[$].length;ae++)i.deleteFramebuffer(T.__webglFramebuffer[$][ae]);else i.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)i.deleteFramebuffer(T.__webglFramebuffer[$]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=D.textures;for(let $=0,ae=G.length;$<ae;$++){const ee=n.get(G[$]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(G[$])}n.remove(D)}let L=0;function I(){L=0}function O(){const D=L;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),L+=1,D}function B(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function q(D,T){const G=n.get(D);if(D.isVideoTexture&&ie(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const $=D.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(G,D,T);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function j(D,T){const G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){te(G,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function J(D,T){const G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){te(G,D,T);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function W(D,T){const G=n.get(D);if(D.version>0&&G.__version!==D.version){ne(G,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}const le={[hs]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},ce={[qt]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},ge={[ed]:i.NEVER,[od]:i.ALWAYS,[td]:i.LESS,[ph]:i.LEQUAL,[nd]:i.EQUAL,[rd]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function oe(D,T){if(T.type===Pn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Jt||T.magFilter===Lo||T.magFilter===vr||T.magFilter===Rn||T.minFilter===Jt||T.minFilter===Lo||T.minFilter===vr||T.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,le[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,le[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,le[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ce[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ce[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qt||T.minFilter!==vr&&T.minFilter!==Rn||T.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function fe(D,T){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",E));const $=T.source;let ae=f.get($);ae===void 0&&(ae={},f.set($,ae));const ee=B(T);if(ee!==D.__cacheKey){ae[ee]===void 0&&(ae[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ae[ee].usedTimes++;const De=ae[D.__cacheKey];De!==void 0&&(ae[D.__cacheKey].usedTimes--,De.usedTimes===0&&M(T)),D.__cacheKey=ee,D.__webglTexture=ae[ee].texture}return G}function Ae(D,T,G){return Math.floor(Math.floor(D/G)/T)}function Pe(D,T,G,$){const ee=D.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,G,$,T.data);else{ee.sort((he,be)=>he.start-be.start);let De=0;for(let he=1;he<ee.length;he++){const be=ee[De],We=ee[he],Oe=be.start+be.count,ye=Ae(We.start,T.width,4),Je=Ae(be.start,T.width,4);We.start<=Oe+1&&ye===Je&&Ae(We.start+We.count-1,T.width,4)===ye?be.count=Math.max(be.count,We.start+We.count-be.start):(++De,ee[De]=We)}ee.length=De+1;const me=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let he=0,be=ee.length;he<be;he++){const We=ee[he],Oe=Math.floor(We.start/4),ye=Math.ceil(We.count/4),Je=Oe%T.width,U=Math.floor(Oe/T.width),pe=ye,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Je,U,pe,xe,G,$,T.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function te(D,T,G){let $=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=i.TEXTURE_3D);const ae=fe(D,T),ee=T.source;t.bindTexture($,D.__webglTexture,i.TEXTURE0+G);const De=n.get(ee);if(ee.version!==De.__version||ae===!0){t.activeTexture(i.TEXTURE0+G);const me=it.getPrimaries(it.workingColorSpace),Ce=T.colorSpace===ri?null:it.getPrimaries(T.colorSpace),Ie=T.colorSpace===ri||me===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let he=x(T.image,!1,s.maxTextureSize);he=Le(T,he);const be=r.convert(T.format,T.colorSpace),We=r.convert(T.type);let Oe=_(T.internalFormat,be,We,T.colorSpace,T.isVideoTexture);oe($,T);let ye;const Je=T.mipmaps,U=T.isVideoTexture!==!0,pe=De.__version===void 0||ae===!0,xe=ee.dataReady,Ue=w(T,he);if(T.isDepthTexture)Oe=v(T.format===tr,T.type),pe&&(U?t.texStorage2D(i.TEXTURE_2D,1,Oe,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Oe,he.width,he.height,0,be,We,null));else if(T.isDataTexture)if(Je.length>0){U&&pe&&t.texStorage2D(i.TEXTURE_2D,Ue,Oe,Je[0].width,Je[0].height);for(let ue=0,re=Je.length;ue<re;ue++)ye=Je[ue],U?xe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ye.width,ye.height,be,We,ye.data):t.texImage2D(i.TEXTURE_2D,ue,Oe,ye.width,ye.height,0,be,We,ye.data);T.generateMipmaps=!1}else U?(pe&&t.texStorage2D(i.TEXTURE_2D,Ue,Oe,he.width,he.height),xe&&Pe(T,he,be,We)):t.texImage2D(i.TEXTURE_2D,0,Oe,he.width,he.height,0,be,We,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){U&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Oe,Je[0].width,Je[0].height,he.depth);for(let ue=0,re=Je.length;ue<re;ue++)if(ye=Je[ue],T.format!==yn)if(be!==null)if(U){if(xe)if(T.layerUpdates.size>0){const Fe=Zl(ye.width,ye.height,T.format,T.type);for(const je of T.layerUpdates){const ft=ye.data.subarray(je*Fe/ye.data.BYTES_PER_ELEMENT,(je+1)*Fe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,je,ye.width,ye.height,1,be,ft)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,he.depth,be,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Oe,ye.width,ye.height,he.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,he.depth,be,We,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Oe,ye.width,ye.height,he.depth,0,be,We,ye.data)}else{U&&pe&&t.texStorage2D(i.TEXTURE_2D,Ue,Oe,Je[0].width,Je[0].height);for(let ue=0,re=Je.length;ue<re;ue++)ye=Je[ue],T.format!==yn?be!==null?U?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Oe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?xe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ye.width,ye.height,be,We,ye.data):t.texImage2D(i.TEXTURE_2D,ue,Oe,ye.width,ye.height,0,be,We,ye.data)}else if(T.isDataArrayTexture)if(U){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Oe,he.width,he.height,he.depth),xe)if(T.layerUpdates.size>0){const ue=Zl(he.width,he.height,T.format,T.type);for(const re of T.layerUpdates){const Fe=he.data.subarray(re*ue/he.data.BYTES_PER_ELEMENT,(re+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,he.width,he.height,1,be,We,Fe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,be,We,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,he.width,he.height,he.depth,0,be,We,he.data);else if(T.isData3DTexture)U?(pe&&t.texStorage3D(i.TEXTURE_3D,Ue,Oe,he.width,he.height,he.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,be,We,he.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,he.width,he.height,he.depth,0,be,We,he.data);else if(T.isFramebufferTexture){if(pe)if(U)t.texStorage2D(i.TEXTURE_2D,Ue,Oe,he.width,he.height);else{let ue=he.width,re=he.height;for(let Fe=0;Fe<Ue;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Oe,ue,re,0,be,We,null),ue>>=1,re>>=1}}else if(Je.length>0){if(U&&pe){const ue=Te(Je[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Oe,ue.width,ue.height)}for(let ue=0,re=Je.length;ue<re;ue++)ye=Je[ue],U?xe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,be,We,ye):t.texImage2D(i.TEXTURE_2D,ue,Oe,be,We,ye);T.generateMipmaps=!1}else if(U){if(pe){const ue=Te(he);t.texStorage2D(i.TEXTURE_2D,Ue,Oe,ue.width,ue.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,We,he)}else t.texImage2D(i.TEXTURE_2D,0,Oe,be,We,he);m(T)&&p($),De.__version=ee.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ne(D,T,G){if(T.image.length!==6)return;const $=fe(D,T),ae=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+G);const ee=n.get(ae);if(ae.version!==ee.__version||$===!0){t.activeTexture(i.TEXTURE0+G);const De=it.getPrimaries(it.workingColorSpace),me=T.colorSpace===ri?null:it.getPrimaries(T.colorSpace),Ce=T.colorSpace===ri||De===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ie=T.isCompressedTexture||T.image[0].isCompressedTexture,he=T.image[0]&&T.image[0].isDataTexture,be=[];for(let re=0;re<6;re++)!Ie&&!he?be[re]=x(T.image[re],!0,s.maxCubemapSize):be[re]=he?T.image[re].image:T.image[re],be[re]=Le(T,be[re]);const We=be[0],Oe=r.convert(T.format,T.colorSpace),ye=r.convert(T.type),Je=_(T.internalFormat,Oe,ye,T.colorSpace),U=T.isVideoTexture!==!0,pe=ee.__version===void 0||$===!0,xe=ae.dataReady;let Ue=w(T,We);oe(i.TEXTURE_CUBE_MAP,T);let ue;if(Ie){U&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,Je,We.width,We.height);for(let re=0;re<6;re++){ue=be[re].mipmaps;for(let Fe=0;Fe<ue.length;Fe++){const je=ue[Fe];T.format!==yn?Oe!==null?U?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,je.width,je.height,Oe,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,Je,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,je.width,je.height,Oe,ye,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,Je,je.width,je.height,0,Oe,ye,je.data)}}}else{if(ue=T.mipmaps,U&&pe){ue.length>0&&Ue++;const re=Te(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,Je,re.width,re.height)}for(let re=0;re<6;re++)if(he){U?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,be[re].width,be[re].height,Oe,ye,be[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,be[re].width,be[re].height,0,Oe,ye,be[re].data);for(let Fe=0;Fe<ue.length;Fe++){const ft=ue[Fe].image[re].image;U?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,ft.width,ft.height,Oe,ye,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,Je,ft.width,ft.height,0,Oe,ye,ft.data)}}else{U?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe,ye,be[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,Oe,ye,be[re]);for(let Fe=0;Fe<ue.length;Fe++){const je=ue[Fe];U?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,Oe,ye,je.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,Je,Oe,ye,je.image[re])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),ee.__version=ae.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ve(D,T,G,$,ae,ee){const De=r.convert(G.format,G.colorSpace),me=r.convert(G.type),Ce=_(G.internalFormat,De,me,G.colorSpace),Ie=n.get(T),he=n.get(G);if(he.__renderTarget=T,!Ie.__hasExternalTextures){const be=Math.max(1,T.width>>ee),We=Math.max(1,T.height>>ee);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ee,Ce,be,We,T.depth,0,De,me,null):t.texImage2D(ae,ee,Ce,be,We,0,De,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),X(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ae,he.__webglTexture,0,Y(T)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ae,he.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(D,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const $=T.depthTexture,ae=$&&$.isDepthTexture?$.type:null,ee=v(T.stencilBuffer,ae),De=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=Y(T);X(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,ee,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ee,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,D)}else{const $=T.textures;for(let ae=0;ae<$.length;ae++){const ee=$[ae],De=r.convert(ee.format,ee.colorSpace),me=r.convert(ee.type),Ce=_(ee.internalFormat,De,me,ee.colorSpace),Ie=Y(T);G&&X(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Ce,T.width,T.height):X(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(T.depthTexture);$.__renderTarget=T,(!$.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q(T.depthTexture,0);const ae=$.__webglTexture,ee=Y(T);if(T.depthTexture.format===er)X(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(T.depthTexture.format===tr)X(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function ze(D){const T=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const $=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){const ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",ae)};$.addEventListener("dispose",ae),T.__depthDisposeCallback=ae}T.__boundDepthTexture=$}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const $=D.texture.mipmaps;$&&$.length>0?Ee(T.__webglFramebuffer[0],D):Ee(T.__webglFramebuffer,D)}else if(G){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=i.createRenderbuffer(),we(T.__webglDepthbuffer[$],D,!1);else{const ae=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=T.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ee)}}else{const $=D.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),we(T.__webglDepthbuffer,D,!1);else{const ae=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(D,T,G){const $=n.get(D);T!==void 0&&ve($.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ze(D)}function R(D){const T=D.texture,G=n.get(D),$=n.get(T);D.addEventListener("dispose",b);const ae=D.textures,ee=D.isWebGLCubeRenderTarget===!0,De=ae.length>1;if(De||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=T.version,o.memory.textures++),ee){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)G.__webglFramebuffer[me][Ce]=i.createFramebuffer()}else G.__webglFramebuffer[me]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<T.mipmaps.length;me++)G.__webglFramebuffer[me]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(De)for(let me=0,Ce=ae.length;me<Ce;me++){const Ie=n.get(ae[me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&X(D)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<ae.length;me++){const Ce=ae[me];G.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const Ie=r.convert(Ce.format,Ce.colorSpace),he=r.convert(Ce.type),be=_(Ce.internalFormat,Ie,he,Ce.colorSpace,D.isXRRenderTarget===!0),We=Y(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,be,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,G.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),we(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),oe(i.TEXTURE_CUBE_MAP,T);for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ce=0;Ce<T.mipmaps.length;Ce++)ve(G.__webglFramebuffer[me][Ce],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce);else ve(G.__webglFramebuffer[me],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let me=0,Ce=ae.length;me<Ce;me++){const Ie=ae[me],he=n.get(Ie);let be=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,he.__webglTexture),oe(be,Ie),ve(G.__webglFramebuffer,D,Ie,i.COLOR_ATTACHMENT0+me,be,0),m(Ie)&&p(be)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,$.__webglTexture),oe(me,T),T.mipmaps&&T.mipmaps.length>0)for(let Ce=0;Ce<T.mipmaps.length;Ce++)ve(G.__webglFramebuffer[Ce],D,T,i.COLOR_ATTACHMENT0,me,Ce);else ve(G.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,me,0);m(T)&&p(me),t.unbindTexture()}D.depthBuffer&&ze(D)}function V(D){const T=D.textures;for(let G=0,$=T.length;G<$;G++){const ae=T[G];if(m(ae)){const ee=y(D),De=n.get(ae).__webglTexture;t.bindTexture(ee,De),p(ee),t.unbindTexture()}}}const K=[],N=[];function F(D){if(D.samples>0){if(X(D)===!1){const T=D.textures,G=D.width,$=D.height;let ae=i.COLOR_BUFFER_BIT;const ee=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(D),me=T.length>1;if(me)for(let Ie=0;Ie<T.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Ce=D.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ie=0;Ie<T.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ie]);const he=n.get(T[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,G,$,0,0,G,$,ae,i.NEAREST),l===!0&&(K.length=0,N.length=0,K.push(i.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(K.push(ee),N.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Ie=0;Ie<T.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ie]);const he=n.get(T[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Y(D){return Math.min(s.maxSamples,D.samples)}function X(D){const T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ie(D){const T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function Le(D,T){const G=D.colorSpace,$=D.format,ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==us&&G!==ri&&(it.getTransfer(G)===ct?($!==yn||ae!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function Te(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=ot,this.setupRenderTarget=R,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=X}function v3(i,e){function t(n,s=ri){let r;const o=it.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===T0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===A0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ah)return i.BYTE;if(n===lh)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===E0)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===dh)return i.RGB;if(n===yn)return i.RGBA;if(n===er)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===C0)return i.RED;if(n===R0)return i.RED_INTEGER;if(n===fh)return i.RG;if(n===P0)return i.RG_INTEGER;if(n===L0)return i.RGBA_INTEGER;if(n===Kr||n===Jr||n===Zr||n===Qr)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Ha||n===Ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Wa)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qa||n===Ya||n===ja||n===Ka||n===Ja||n===Za||n===Qa||n===$a||n===e0||n===t0||n===n0||n===i0||n===s0||n===r0)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===e0)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===t0)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===n0)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===i0)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===s0)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===r0)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===o0||n===a0||n===l0)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===o0)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===a0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===l0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===c0||n===h0||n===u0||n===d0)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===c0)return r.COMPRESSED_RED_RGTC1_EXT;if(n===h0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===u0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===d0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const x3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_3=`
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

}`;class M3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ft({vertexShader:x3,fragmentShader:_3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y3 extends ys{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null;const x=typeof XRWebGLBinding<"u",m=new M3,p={},y=t.getContextAttributes();let _=null,v=null;const w=[],E=[],b=new se;let A=null;const M=new Wt;M.viewport=new ut;const S=new Wt;S.viewport=new ut;const L=[M,S],I=new k1;let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ne=w[te];return ne===void 0&&(ne=new Qo,w[te]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(te){let ne=w[te];return ne===void 0&&(ne=new Qo,w[te]=ne),ne.getGripSpace()},this.getHand=function(te){let ne=w[te];return ne===void 0&&(ne=new Qo,w[te]=ne),ne.getHandSpace()};function q(te){const ne=E.indexOf(te.inputSource);if(ne===-1)return;const ve=w[ne];ve!==void 0&&(ve.update(te.inputSource,te.frame,c||o),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function j(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",J);for(let te=0;te<w.length;te++){const ne=E[te];ne!==null&&(E[te]=null,w[te].disconnect(ne))}O=null,B=null,m.reset();for(const te in p)delete p[te];e.setRenderTarget(_),u=null,f=null,d=null,s=null,v=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,we=null,Ee=null;y.depth&&(Ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=y.stencil?tr:er,we=y.stencil?$s:Pi);const ze={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Yt(f.textureWidth,f.textureHeight,{format:yn,type:In,depthTexture:new bh(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Yt(u.framebufferWidth,u.framebufferHeight,{format:yn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(te){for(let ne=0;ne<te.removed.length;ne++){const ve=te.removed[ne],we=E.indexOf(ve);we>=0&&(E[we]=null,w[we].disconnect(ve))}for(let ne=0;ne<te.added.length;ne++){const ve=te.added[ne];let we=E.indexOf(ve);if(we===-1){for(let ze=0;ze<w.length;ze++)if(ze>=E.length){E.push(ve),we=ze;break}else if(E[ze]===null){E[ze]=ve,we=ze;break}if(we===-1)break}const Ee=w[we];Ee&&Ee.connect(ve)}}const W=new P,le=new P;function ce(te,ne,ve){W.setFromMatrixPosition(ne.matrixWorld),le.setFromMatrixPosition(ve.matrixWorld);const we=W.distanceTo(le),Ee=ne.projectionMatrix.elements,ze=ve.projectionMatrix.elements,ot=Ee[14]/(Ee[10]-1),R=Ee[14]/(Ee[10]+1),V=(Ee[9]+1)/Ee[5],K=(Ee[9]-1)/Ee[5],N=(Ee[8]-1)/Ee[0],F=(ze[8]+1)/ze[0],Y=ot*N,X=ot*F,ie=we/(-N+F),Le=ie*-N;if(ne.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Le),te.translateZ(ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ee[10]===-1)te.projectionMatrix.copy(ne.projectionMatrix),te.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Te=ot+ie,D=R+ie,T=Y-Le,G=X+(we-Le),$=V*R/D*Te,ae=K*R/D*Te;te.projectionMatrix.makePerspective(T,G,$,ae,Te,D),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ge(te,ne){ne===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ne.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ne=te.near,ve=te.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),I.near=S.near=M.near=ne,I.far=S.far=M.far=ve,(O!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,B=I.far),I.layers.mask=te.layers.mask|6,M.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const we=te.parent,Ee=I.cameras;ge(I,we);for(let ze=0;ze<Ee.length;ze++)ge(Ee[ze],we);Ee.length===2?ce(I,M,S):I.projectionMatrix.copy(M.projectionMatrix),oe(te,I,we)};function oe(te,ne,ve){ve===null?te.matrix.copy(ne.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(ne.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ne.projectionMatrix),te.projectionMatrixInverse.copy(ne.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ds*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(te){return p[te]};let fe=null;function Ae(te,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){const ve=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let we=!1;ve.length!==I.cameras.length&&(I.cameras.length=0,we=!0);for(let R=0;R<ve.length;R++){const V=ve[R];let K=null;if(u!==null)K=u.getViewport(V);else{const F=d.getViewSubImage(f,V);K=F.viewport,R===0&&(e.setRenderTargetTextures(v,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(v))}let N=L[R];N===void 0&&(N=new Wt,N.layers.enable(R),N.viewport=new ut,L[R]=N),N.matrix.fromArray(V.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(V.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(K.x,K.y,K.width,K.height),R===0&&(I.matrix.copy(N.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),we===!0&&I.cameras.push(N)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const R=d.getDepthInformation(ve[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let R=0;R<ve.length;R++){const V=ve[R].camera;if(V){let K=p[V];K||(K=new wh,p[V]=K);const N=d.getCameraImage(V);K.sourceTexture=N}}}}for(let ve=0;ve<w.length;ve++){const we=E[ve],Ee=w[ve];we!==null&&Ee!==void 0&&Ee.update(we,ne,c||o)}fe&&fe(te,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Pe=new Uh;Pe.setAnimationLoop(Ae),this.setAnimationLoop=function(te){fe=te},this.dispose=function(){}}}const bi=new on,S3=new st;function b3(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,v=y.envMapRotation;_&&(m.envMap.value=_,bi.copy(v),bi.x*=-1,bi.y*=-1,bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(S3.makeRotationFromEuler(bi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w3(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const w=_.program;n.updateUBOMapping(y,w);const E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){const _=d();y.__bindingPointIndex=_;const v=i.createBuffer(),w=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=s[y.id],v=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,b=v.length;E<b;E++){const A=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,S=A.length;M<S;M++){const L=A[M];if(u(L,E,M,w)===!0){const I=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let q=0;q<O.length;q++){const j=O[q],J=x(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,I+B,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,B),B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,_,v,w){const E=y.value,b=_+"_"+v;if(w[b]===void 0)return typeof E=="number"||typeof E=="boolean"?w[b]=E:w[b]=E.clone(),!0;{const A=w[b];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return w[b]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(y){const _=y.uniforms;let v=0;const w=16;for(let b=0,A=_.length;b<A;b++){const M=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,L=M.length;S<L;S++){const I=M[S],O=Array.isArray(I.value)?I.value:[I.value];for(let B=0,q=O.length;B<q;B++){const j=O[B],J=x(j),W=v%w,le=W%J.boundary,ce=W+le;v+=le,ce!==0&&w-ce<J.storage&&(v+=w-ce),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=J.storage}}}const E=v%w;return E>0&&(v+=w-E),y.__size=v,y.__cache={},this}function x(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class E3{constructor(e={}){const{canvas:t=bd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=Ut;let E=0,b=0,A=null,M=-1,S=null;const L=new ut,I=new ut;let O=null;const B=new He(0);let q=0,j=t.width,J=t.height,W=1,le=null,ce=null;const ge=new ut(0,0,j,J),oe=new ut(0,0,j,J);let fe=!1;const Ae=new z0;let Pe=!1,te=!1;const ne=new st,ve=new P,we=new ut,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ot(){return A===null?W:1}let R=n;function V(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${S0}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ue,!1),R===null){const k="webgl2";if(R=V(k,C),R===null)throw V(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let K,N,F,Y,X,ie,Le,Te,D,T,G,$,ae,ee,De,me,Ce,Ie,he,be,We,Oe,ye,Je;function U(){K=new N2(R),K.init(),Oe=new v3(R,K),N=new C2(R,K,e,Oe),F=new m3(R,K),N.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),Y=new B2(R),X=new n3,ie=new g3(R,K,F,X,N,Oe,Y),Le=new P2(v),Te=new U2(v),D=new V1(R),ye=new T2(R,D),T=new F2(R,D,Y,ye),G=new k2(R,T,D,Y),he=new z2(R,N,ie),me=new R2(X),$=new t3(v,Le,Te,K,N,ye,me),ae=new b3(v,X),ee=new s3,De=new h3(K),Ie=new E2(v,Le,Te,F,G,u,l),Ce=new f3(v,G,N),Je=new w3(R,Y,N,F),be=new A2(R,K,Y),We=new O2(R,K,Y),Y.programs=$.programs,v.capabilities=N,v.extensions=K,v.properties=X,v.renderLists=ee,v.shadowMap=Ce,v.state=F,v.info=Y}U();const pe=new y3(v,R);this.xr=pe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const C=K.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=K.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(j,J,!1))},this.getSize=function(C){return C.set(j,J)},this.setSize=function(C,k,Z=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,J=k,t.width=Math.floor(C*W),t.height=Math.floor(k*W),Z===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(j*W,J*W).floor()},this.setDrawingBufferSize=function(C,k,Z){j=C,J=k,W=Z,t.width=Math.floor(C*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ge)},this.setViewport=function(C,k,Z,Q){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,k,Z,Q),F.viewport(L.copy(ge).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,k,Z,Q){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,k,Z,Q),F.scissor(I.copy(oe).multiplyScalar(W).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(C){F.setScissorTest(fe=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,Z=!0){let Q=0;if(C){let H=!1;if(A!==null){const de=A.texture.format;H=de===L0||de===P0||de===R0}if(H){const de=A.texture.type,Se=de===In||de===Pi||de===Qs||de===$s||de===T0||de===A0,Ne=Ie.getClearColor(),Re=Ie.getClearAlpha(),Ve=Ne.r,qe=Ne.g,ke=Ne.b;Se?(g[0]=Ve,g[1]=qe,g[2]=ke,g[3]=Re,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Ve,x[1]=qe,x[2]=ke,x[3]=Re,R.clearBufferiv(R.COLOR,0,x))}else Q|=R.COLOR_BUFFER_BIT}k&&(Q|=R.DEPTH_BUFFER_BIT),Z&&(Q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ie.dispose(),ee.dispose(),De.dispose(),X.dispose(),Le.dispose(),Te.dispose(),G.dispose(),ye.dispose(),Je.dispose(),$.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Tn),pe.removeEventListener("sessionend",il),gi.stop()};function xe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=Y.autoReset,k=Ce.enabled,Z=Ce.autoUpdate,Q=Ce.needsUpdate,H=Ce.type;U(),Y.autoReset=C,Ce.enabled=k,Ce.autoUpdate=Z,Ce.needsUpdate=Q,Ce.type=H}function ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function re(C){const k=C.target;k.removeEventListener("dispose",re),Fe(k)}function Fe(C){je(C),X.remove(C)}function je(C){const k=X.get(C).programs;k!==void 0&&(k.forEach(function(Z){$.releaseProgram(Z)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Z,Q,H,de){k===null&&(k=Ee);const Se=H.isMesh&&H.matrixWorld.determinant()<0,Ne=ou(C,k,Z,Q,H);F.setMaterial(Q,Se);let Re=Z.index,Ve=1;if(Q.wireframe===!0){if(Re=T.getWireframeAttribute(Z),Re===void 0)return;Ve=2}const qe=Z.drawRange,ke=Z.attributes.position;let tt=qe.start*Ve,ht=(qe.start+qe.count)*Ve;de!==null&&(tt=Math.max(tt,de.start*Ve),ht=Math.min(ht,(de.start+de.count)*Ve)),Re!==null?(tt=Math.max(tt,0),ht=Math.min(ht,Re.count)):ke!=null&&(tt=Math.max(tt,0),ht=Math.min(ht,ke.count));const St=ht-tt;if(St<0||St===1/0)return;ye.setup(H,Q,Ne,Z,Re);let mt,dt=be;if(Re!==null&&(mt=D.get(Re),dt=We,dt.setIndex(mt)),H.isMesh)Q.wireframe===!0?(F.setLineWidth(Q.wireframeLinewidth*ot()),dt.setMode(R.LINES)):dt.setMode(R.TRIANGLES);else if(H.isLine){let Ge=Q.linewidth;Ge===void 0&&(Ge=1),F.setLineWidth(Ge*ot()),H.isLineSegments?dt.setMode(R.LINES):H.isLineLoop?dt.setMode(R.LINE_LOOP):dt.setMode(R.LINE_STRIP)}else H.isPoints?dt.setMode(R.POINTS):H.isSprite&&dt.setMode(R.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))dt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ge=H._multiDrawStarts,vt=H._multiDrawCounts,rt=H._multiDrawCount,Qt=Re?D.get(Re).bytesPerElement:1,Fi=X.get(Q).currentProgram.getUniforms();for(let $t=0;$t<rt;$t++)Fi.setValue(R,"_gl_DrawID",$t),dt.render(Ge[$t]/Qt,vt[$t])}else if(H.isInstancedMesh)dt.renderInstances(tt,St,H.count);else if(Z.isInstancedBufferGeometry){const Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,vt=Math.min(Z.instanceCount,Ge);dt.renderInstances(tt,St,vt)}else dt.render(tt,St)};function ft(C,k,Z){C.transparent===!0&&C.side===Cn&&C.forceSinglePass===!1?(C.side=Xt,C.needsUpdate=!0,mr(C,k,Z),C.side=di,C.needsUpdate=!0,mr(C,k,Z),C.side=Cn):mr(C,k,Z)}this.compile=function(C,k,Z=null){Z===null&&(Z=C),p=De.get(Z),p.init(k),_.push(p),Z.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),C!==Z&&C.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Q=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const de=H.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Ne=de[Se];ft(Ne,Z,H),Q.add(Ne)}else ft(de,Z,H),Q.add(de)}),p=_.pop(),Q},this.compileAsync=function(C,k,Z=null){const Q=this.compile(C,k,Z);return new Promise(H=>{function de(){if(Q.forEach(function(Se){X.get(Se).currentProgram.isReady()&&Q.delete(Se)}),Q.size===0){H(C);return}setTimeout(de,10)}K.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let lt=null;function Fn(C){lt&&lt(C)}function Tn(){gi.stop()}function il(){gi.start()}const gi=new Uh;gi.setAnimationLoop(Fn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(C){lt=C,pe.setAnimationLoop(C),C===null?gi.stop():gi.start()},pe.addEventListener("sessionstart",Tn),pe.addEventListener("sessionend",il),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(k),k=pe.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,A),p=De.get(C,_.length),p.init(k),_.push(p),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ae.setFromProjectionMatrix(ne,Ln,k.reversedDepth),te=this.localClippingEnabled,Pe=me.init(this.clippingPlanes,te),m=ee.get(C,y.length),m.init(),y.push(m),pe.enabled===!0&&pe.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&Ao(de,k,-1/0,v.sortObjects)}Ao(C,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,ce),ze=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ze&&Ie.addToRenderList(m,C),this.info.render.frame++,Pe===!0&&me.beginShadows();const Z=p.state.shadowsArray;Ce.render(Z,C,k),Pe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const de=k.cameras;if(H.length>0)for(let Se=0,Ne=de.length;Se<Ne;Se++){const Re=de[Se];rl(Q,H,C,Re)}ze&&Ie.render(C);for(let Se=0,Ne=de.length;Se<Ne;Se++){const Re=de[Se];sl(m,C,Re,Re.viewport)}}else H.length>0&&rl(Q,H,C,k),ze&&Ie.render(C),sl(m,C,k);A!==null&&b===0&&(ie.updateMultisampleRenderTarget(A),ie.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(v,C,k),ye.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],Pe===!0&&me.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ao(C,k,Z,Q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ae.intersectsSprite(C)){Q&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ne);const Se=G.update(C),Ne=C.material;Ne.visible&&m.push(C,Se,Ne,Z,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ae.intersectsObject(C))){const Se=G.update(C),Ne=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),we.copy(Se.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(ne)),Array.isArray(Ne)){const Re=Se.groups;for(let Ve=0,qe=Re.length;Ve<qe;Ve++){const ke=Re[Ve],tt=Ne[ke.materialIndex];tt&&tt.visible&&m.push(C,Se,tt,Z,we.z,ke)}}else Ne.visible&&m.push(C,Se,Ne,Z,we.z,null)}}const de=C.children;for(let Se=0,Ne=de.length;Se<Ne;Se++)Ao(de[Se],k,Z,Q)}function sl(C,k,Z,Q){const H=C.opaque,de=C.transmissive,Se=C.transparent;p.setupLightsView(Z),Pe===!0&&me.setGlobalState(v.clippingPlanes,Z),Q&&F.viewport(L.copy(Q)),H.length>0&&pr(H,k,Z),de.length>0&&pr(de,k,Z),Se.length>0&&pr(Se,k,Z),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function rl(C,k,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Yt(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?rn:In,minFilter:Rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const de=p.state.transmissionRenderTarget[Q.id],Se=Q.viewport||L;de.setSize(Se.z*v.transmissionResolutionScale,Se.w*v.transmissionResolutionScale);const Ne=v.getRenderTarget(),Re=v.getActiveCubeFace(),Ve=v.getActiveMipmapLevel();v.setRenderTarget(de),v.getClearColor(B),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),ze&&Ie.render(Z);const qe=v.toneMapping;v.toneMapping=hi;const ke=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),Pe===!0&&me.setGlobalState(v.clippingPlanes,Q),pr(C,Z,Q),ie.updateMultisampleRenderTarget(de),ie.updateRenderTargetMipmap(de),K.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ht=0,St=k.length;ht<St;ht++){const mt=k[ht],dt=mt.object,Ge=mt.geometry,vt=mt.material,rt=mt.group;if(vt.side===Cn&&dt.layers.test(Q.layers)){const Qt=vt.side;vt.side=Xt,vt.needsUpdate=!0,ol(dt,Z,Q,Ge,vt,rt),vt.side=Qt,vt.needsUpdate=!0,tt=!0}}tt===!0&&(ie.updateMultisampleRenderTarget(de),ie.updateRenderTargetMipmap(de))}v.setRenderTarget(Ne,Re,Ve),v.setClearColor(B,q),ke!==void 0&&(Q.viewport=ke),v.toneMapping=qe}function pr(C,k,Z){const Q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,de=C.length;H<de;H++){const Se=C[H],Ne=Se.object,Re=Se.geometry,Ve=Se.group;let qe=Se.material;qe.allowOverride===!0&&Q!==null&&(qe=Q),Ne.layers.test(Z.layers)&&ol(Ne,k,Z,Re,qe,Ve)}}function ol(C,k,Z,Q,H,de){C.onBeforeRender(v,k,Z,Q,H,de),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(v,k,Z,Q,C,de),H.transparent===!0&&H.side===Cn&&H.forceSinglePass===!1?(H.side=Xt,H.needsUpdate=!0,v.renderBufferDirect(Z,k,Q,H,C,de),H.side=di,H.needsUpdate=!0,v.renderBufferDirect(Z,k,Q,H,C,de),H.side=Cn):v.renderBufferDirect(Z,k,Q,H,C,de),C.onAfterRender(v,k,Z,Q,H,de)}function mr(C,k,Z){k.isScene!==!0&&(k=Ee);const Q=X.get(C),H=p.state.lights,de=p.state.shadowsArray,Se=H.state.version,Ne=$.getParameters(C,H.state,de,k,Z),Re=$.getProgramCacheKey(Ne);let Ve=Q.programs;Q.environment=C.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(C.isMeshStandardMaterial?Te:Le).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",re),Ve=new Map,Q.programs=Ve);let qe=Ve.get(Re);if(qe!==void 0){if(Q.currentProgram===qe&&Q.lightsStateVersion===Se)return ll(C,Ne),qe}else Ne.uniforms=$.getUniforms(C),C.onBeforeCompile(Ne,v),qe=$.acquireProgram(Ne,Re),Ve.set(Re,qe),Q.uniforms=Ne.uniforms;const ke=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=me.uniform),ll(C,Ne),Q.needsLights=lu(C),Q.lightsStateVersion=Se,Q.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMap.value=H.state.directionalShadowMap,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotShadowMap.value=H.state.spotShadowMap,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMap.value=H.state.pointShadowMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),Q.currentProgram=qe,Q.uniformsList=null,qe}function al(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=to.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function ll(C,k){const Z=X.get(C);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function ou(C,k,Z,Q,H){k.isScene!==!0&&(k=Ee),ie.resetTextureUnits();const de=k.fog,Se=Q.isMeshStandardMaterial?k.environment:null,Ne=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:us,Re=(Q.isMeshStandardMaterial?Te:Le).get(Q.envMap||Se),Ve=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qe=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ke=!!Z.morphAttributes.position,tt=!!Z.morphAttributes.normal,ht=!!Z.morphAttributes.color;let St=hi;Q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(St=v.toneMapping);const mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,dt=mt!==void 0?mt.length:0,Ge=X.get(Q),vt=p.state.lights;if(Pe===!0&&(te===!0||C!==S)){const kt=C===S&&Q.id===M;me.setState(Q,C,kt)}let rt=!1;Q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==vt.state.version||Ge.outputColorSpace!==Ne||H.isBatchedMesh&&Ge.batching===!1||!H.isBatchedMesh&&Ge.batching===!0||H.isBatchedMesh&&Ge.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ge.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ge.instancing===!1||!H.isInstancedMesh&&Ge.instancing===!0||H.isSkinnedMesh&&Ge.skinning===!1||!H.isSkinnedMesh&&Ge.skinning===!0||H.isInstancedMesh&&Ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ge.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ge.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ge.instancingMorph===!1&&H.morphTexture!==null||Ge.envMap!==Re||Q.fog===!0&&Ge.fog!==de||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==me.numPlanes||Ge.numIntersection!==me.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==qe||Ge.morphTargets!==ke||Ge.morphNormals!==tt||Ge.morphColors!==ht||Ge.toneMapping!==St||Ge.morphTargetsCount!==dt)&&(rt=!0):(rt=!0,Ge.__version=Q.version);let Qt=Ge.currentProgram;rt===!0&&(Qt=mr(Q,k,H));let Fi=!1,$t=!1,As=!1;const xt=Qt.getUniforms(),an=Ge.uniforms;if(F.useProgram(Qt.program)&&(Fi=!0,$t=!0,As=!0),Q.id!==M&&(M=Q.id,$t=!0),Fi||S!==C){F.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xt.setValue(R,"projectionMatrix",C.projectionMatrix),xt.setValue(R,"viewMatrix",C.matrixWorldInverse);const jt=xt.map.cameraPosition;jt!==void 0&&jt.setValue(R,ve.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&xt.setValue(R,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xt.setValue(R,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,$t=!0,As=!0)}if(H.isSkinnedMesh){xt.setOptional(R,H,"bindMatrix"),xt.setOptional(R,H,"bindMatrixInverse");const kt=H.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),xt.setValue(R,"boneTexture",kt.boneTexture,ie))}H.isBatchedMesh&&(xt.setOptional(R,H,"batchingTexture"),xt.setValue(R,"batchingTexture",H._matricesTexture,ie),xt.setOptional(R,H,"batchingIdTexture"),xt.setValue(R,"batchingIdTexture",H._indirectTexture,ie),xt.setOptional(R,H,"batchingColorTexture"),H._colorsTexture!==null&&xt.setValue(R,"batchingColorTexture",H._colorsTexture,ie));const ln=Z.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&he.update(H,Z,Qt),($t||Ge.receiveShadow!==H.receiveShadow)&&(Ge.receiveShadow=H.receiveShadow,xt.setValue(R,"receiveShadow",H.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(an.envMap.value=Re,an.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),$t&&(xt.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&au(an,As),de&&Q.fog===!0&&ae.refreshFogUniforms(an,de),ae.refreshMaterialUniforms(an,Q,W,J,p.state.transmissionRenderTarget[C.id]),to.upload(R,al(Ge),an,ie)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(to.upload(R,al(Ge),an,ie),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xt.setValue(R,"center",H.center),xt.setValue(R,"modelViewMatrix",H.modelViewMatrix),xt.setValue(R,"normalMatrix",H.normalMatrix),xt.setValue(R,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const kt=Q.uniformsGroups;for(let jt=0,Co=kt.length;jt<Co;jt++){const vi=kt[jt];Je.update(vi,Qt),Je.bind(vi,Qt)}}return Qt}function au(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function lu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,k,Z){const Q=X.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),X.get(C.texture).__webglTexture=k,X.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const Z=X.get(C);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0};const cu=R.createFramebuffer();this.setRenderTarget=function(C,k=0,Z=0){A=C,E=k,b=Z;let Q=!0,H=null,de=!1,Se=!1;if(C){const Re=X.get(C);if(Re.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(R.FRAMEBUFFER,null),Q=!1;else if(Re.__webglFramebuffer===void 0)ie.setupRenderTarget(C);else if(Re.__hasExternalTextures)ie.rebindTextures(C,X.get(C.texture).__webglTexture,X.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ke=C.depthTexture;if(Re.__boundDepthTexture!==ke){if(ke!==null&&X.has(ke)&&(C.width!==ke.image.width||C.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Se=!0);const qe=X.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[k])?H=qe[k][Z]:H=qe[k],de=!0):C.samples>0&&ie.useMultisampledRTT(C)===!1?H=X.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?H=qe[Z]:H=qe,L.copy(C.viewport),I.copy(C.scissor),O=C.scissorTest}else L.copy(ge).multiplyScalar(W).floor(),I.copy(oe).multiplyScalar(W).floor(),O=fe;if(Z!==0&&(H=cu),F.bindFramebuffer(R.FRAMEBUFFER,H)&&Q&&F.drawBuffers(C,H),F.viewport(L),F.scissor(I),F.setScissorTest(O),de){const Re=X.get(C.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,Z)}else if(Se){const Re=k;for(let Ve=0;Ve<C.textures.length;Ve++){const qe=X.get(C.textures[Ve]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,Z,Re)}}else if(C!==null&&Z!==0){const Re=X.get(C.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Re.__webglTexture,Z)}M=-1},this.readRenderTargetPixels=function(C,k,Z,Q,H,de,Se,Ne=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=X.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){F.bindFramebuffer(R.FRAMEBUFFER,Re);try{const Ve=C.textures[Ne],qe=Ve.format,ke=Ve.type;if(!N.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Q&&Z>=0&&Z<=C.height-H&&(C.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ne),R.readPixels(k,Z,Q,H,Oe.convert(qe),Oe.convert(ke),de))}finally{const Ve=A!==null?X.get(A).__webglFramebuffer:null;F.bindFramebuffer(R.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,k,Z,Q,H,de,Se,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=X.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re)if(k>=0&&k<=C.width-Q&&Z>=0&&Z<=C.height-H){F.bindFramebuffer(R.FRAMEBUFFER,Re);const Ve=C.textures[Ne],qe=Ve.format,ke=Ve.type;if(!N.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,tt),R.bufferData(R.PIXEL_PACK_BUFFER,de.byteLength,R.STREAM_READ),C.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ne),R.readPixels(k,Z,Q,H,Oe.convert(qe),Oe.convert(ke),0);const ht=A!==null?X.get(A).__webglFramebuffer:null;F.bindFramebuffer(R.FRAMEBUFFER,ht);const St=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await wd(R,St,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,tt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,de),R.deleteBuffer(tt),R.deleteSync(St),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,Z=0){const Q=Math.pow(2,-Z),H=Math.floor(C.image.width*Q),de=Math.floor(C.image.height*Q),Se=k!==null?k.x:0,Ne=k!==null?k.y:0;ie.setTexture2D(C,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,Se,Ne,H,de),F.unbindTexture()};const hu=R.createFramebuffer(),uu=R.createFramebuffer();this.copyTextureToTexture=function(C,k,Z=null,Q=null,H=0,de=null){de===null&&(H!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=H,H=0):de=0);let Se,Ne,Re,Ve,qe,ke,tt,ht,St;const mt=C.isCompressedTexture?C.mipmaps[de]:C.image;if(Z!==null)Se=Z.max.x-Z.min.x,Ne=Z.max.y-Z.min.y,Re=Z.isBox3?Z.max.z-Z.min.z:1,Ve=Z.min.x,qe=Z.min.y,ke=Z.isBox3?Z.min.z:0;else{const ln=Math.pow(2,-H);Se=Math.floor(mt.width*ln),Ne=Math.floor(mt.height*ln),C.isDataArrayTexture?Re=mt.depth:C.isData3DTexture?Re=Math.floor(mt.depth*ln):Re=1,Ve=0,qe=0,ke=0}Q!==null?(tt=Q.x,ht=Q.y,St=Q.z):(tt=0,ht=0,St=0);const dt=Oe.convert(k.format),Ge=Oe.convert(k.type);let vt;k.isData3DTexture?(ie.setTexture3D(k,0),vt=R.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ie.setTexture2DArray(k,0),vt=R.TEXTURE_2D_ARRAY):(ie.setTexture2D(k,0),vt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,k.unpackAlignment);const rt=R.getParameter(R.UNPACK_ROW_LENGTH),Qt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Fi=R.getParameter(R.UNPACK_SKIP_PIXELS),$t=R.getParameter(R.UNPACK_SKIP_ROWS),As=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,mt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,mt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ke);const xt=C.isDataArrayTexture||C.isData3DTexture,an=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const ln=X.get(C),kt=X.get(k),jt=X.get(ln.__renderTarget),Co=X.get(kt.__renderTarget);F.bindFramebuffer(R.READ_FRAMEBUFFER,jt.__webglFramebuffer),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,Co.__webglFramebuffer);for(let vi=0;vi<Re;vi++)xt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,X.get(C).__webglTexture,H,ke+vi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,X.get(k).__webglTexture,de,St+vi)),R.blitFramebuffer(Ve,qe,Se,Ne,tt,ht,Se,Ne,R.DEPTH_BUFFER_BIT,R.NEAREST);F.bindFramebuffer(R.READ_FRAMEBUFFER,null),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||X.has(C)){const ln=X.get(C),kt=X.get(k);F.bindFramebuffer(R.READ_FRAMEBUFFER,hu),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,uu);for(let jt=0;jt<Re;jt++)xt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ln.__webglTexture,H,ke+jt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ln.__webglTexture,H),an?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,kt.__webglTexture,de,St+jt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,kt.__webglTexture,de),H!==0?R.blitFramebuffer(Ve,qe,Se,Ne,tt,ht,Se,Ne,R.COLOR_BUFFER_BIT,R.NEAREST):an?R.copyTexSubImage3D(vt,de,tt,ht,St+jt,Ve,qe,Se,Ne):R.copyTexSubImage2D(vt,de,tt,ht,Ve,qe,Se,Ne);F.bindFramebuffer(R.READ_FRAMEBUFFER,null),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else an?C.isDataTexture||C.isData3DTexture?R.texSubImage3D(vt,de,tt,ht,St,Se,Ne,Re,dt,Ge,mt.data):k.isCompressedArrayTexture?R.compressedTexSubImage3D(vt,de,tt,ht,St,Se,Ne,Re,dt,mt.data):R.texSubImage3D(vt,de,tt,ht,St,Se,Ne,Re,dt,Ge,mt):C.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,de,tt,ht,Se,Ne,dt,Ge,mt.data):C.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,de,tt,ht,mt.width,mt.height,dt,mt.data):R.texSubImage2D(R.TEXTURE_2D,de,tt,ht,Se,Ne,dt,Ge,mt);R.pixelStorei(R.UNPACK_ROW_LENGTH,rt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Fi),R.pixelStorei(R.UNPACK_SKIP_ROWS,$t),R.pixelStorei(R.UNPACK_SKIP_IMAGES,As),de===0&&k.generateMipmaps&&R.generateMipmap(vt),F.unbindTexture()},this.initRenderTarget=function(C){X.get(C).__webglFramebuffer===void 0&&ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ie.setTextureCube(C,0):C.isData3DTexture?ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ie.setTexture2DArray(C,0):ie.setTexture2D(C,0),F.unbindTexture()},this.resetState=function(){E=0,b=0,A=null,F.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const Fs=new P;function hn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Fs.copy(e),Fs[n]=0,Fs.normalize();const c=.5*o/(o+a),h=1-Fs.angleTo(i)/l;return Math.sign(Fs[t])===1?h*c:a/(o+a)+c+c*(1-h)}class K0 extends pn{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,g=d.length/6,x=new P,m=.5/o;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),u[y+0]=hn(x,c,"z","y",r,n),u[y+1]=1-hn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),u[y+0]=1-hn(x,c,"z","y",r,n),u[y+1]=1-hn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),u[y+0]=1-hn(x,c,"x","z",r,e),u[y+1]=hn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),u[y+0]=1-hn(x,c,"x","z",r,e),u[y+1]=1-hn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),u[y+0]=1-hn(x,c,"x","y",r,e),u[y+1]=1-hn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),u[y+0]=hn(x,c,"x","y",r,e),u[y+1]=1-hn(x,c,"y","x",r,t);break}}static fromJSON(e){return new K0(e.width,e.height,e.depth,e.segments,e.radius)}}const Os=at.clamp;function gs(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}class T3{constructor(e){this.anisotropy=e}cache=new Map;get(e,t=1){const n=`${e}:${t}`,s=this.cache.get(n);if(s)return s;const r=512,o=gs(t),a=document.createElement("canvas");a.width=a.height=r;const l=a.getContext("2d"),c=l.createImageData(r,r),h=new Uint8Array(r*r*4),d=new Uint8Array(r*r*4),f=Array.from({length:3},()=>({x:o(),y:o(),radius:.02+o()*.016})),u=Float32Array.from({length:289},()=>o()-.5);for(let _=0;_<r;_++)for(let v=0;v<r;v++){const w=v/r,E=_/r,b=o()-.5,A=(_*r+v)*4;let M=0,S=.5,L=100,I=100,O=100,B=.85;if(e==="oak"||e==="endgrain"){let J=E;for(const ce of f){const ge=(w-ce.x)*.6,oe=E-ce.y;J+=Math.exp(-(ge*ge+oe*oe)/.01)*Math.sin(oe*30)*.028}const W=e==="endgrain"?Math.hypot((w-.47)*1.2,E-.53)*210:J*370+Math.sin(w*16)*1.5+Math.sin(w*47+E*20)*.5,le=Math.sin(W)*.035+Math.sin(W*3.8)*.012;M=le+Math.sin(E*29+t)*.024+b*.028;for(const ce of f){const ge=Math.hypot((w-ce.x)*.52,E-ce.y);M-=Math.exp(-ge*ge/(ce.radius*ce.radius))*.3}L=83+M*130,I=53+M*105,O=32+M*75,S=.53+le*.65+b*.035,B=.83+Math.abs(le)*1.2}else if(e==="steel"||e==="iron"){const J=Math.sin(w*61+Math.sin(E*83)*3)*Math.sin(E*79+Math.cos(w*73)*4);M=b*.075+J*.012;const W=e==="steel"?148:46;L=W+M*95,I=W+5+M*105,O=W+8+M*110,S=.5+(e==="iron"?J*.045+b*.16:b*.025),B=e==="steel"?.52+b*.08:.83+J*.05}else if(e==="stone"){const J=w*16,W=E*16,le=Math.floor(J),ce=Math.floor(W),ge=J-le,oe=W-ce,fe=ge*ge*(3-2*ge),Ae=oe*oe*(3-2*oe),Pe=at.lerp(u[ce*17+le],u[ce*17+le+1],fe),te=at.lerp(u[(ce+1)*17+le],u[(ce+1)*17+le+1],fe);M=b*.1+at.lerp(Pe,te,Ae)*.14,L=107+M*100,I=90+M*90,O=73+M*75,S=.5+M*.6,B=.93}else M=Math.sin(w*140)*Math.sin(E*180)*.026+b*.08,L=64+M*60,I=33+M*55,O=23+M*45,S=.5+M,B=.88;c.data.set([Os(L,0,255),Os(I,0,255),Os(O,0,255),255],A);const q=Os(S*255,0,255),j=Os(B*255,0,255);h.set([q,q,q,255],A),d.set([j,j,j,255],A)}if(l.putImageData(c,0,0),e==="steel"||e==="iron")for(let _=0;_<(e==="steel"?150:45);_++){const v=o()*r,w=o()*r;l.strokeStyle=`rgba(${_%3?"225,227,218":"16,23,28"},${.03+o()*.13})`,l.lineWidth=.35+o()*.6,l.beginPath(),l.moveTo(v,w),l.lineTo(v+6+o()*80,w+(o()-.5)*15),l.stroke()}const g=new Li(a);g.colorSpace=Ut;const x=new ps(h,r,r),m=new ps(d,r,r);for(const _ of[g,x,m])_.wrapS=_.wrapT=hs,_.anisotropy=this.anisotropy,_.minFilter=Rn,_.magFilter=Jt,_.generateMipmaps=!0,_.needsUpdate=!0;const p=e==="iron"||e==="steel",y=new pt({map:g,bumpMap:x,roughnessMap:m,metalness:p?e==="steel"?.9:.72:0,roughness:e==="steel"?.64:.98,bumpScale:e==="stone"?.025:e==="iron"?.007:e==="steel"?.003:.012,envMapIntensity:e==="steel"?1.35:e==="iron"?.7:1});return this.cache.set(n,y),y}}function Ys(i,e,t,n=.025){return new K0(i,e,t,1,Math.min(n,i/3,e/3,t/3))}function A3(){const i=[[0,.69,.44],[.04,.72,.45],[.12,.7,.43],[.18,.56,.35],[.25,.44,.29],[.34,.35,.25],[.43,.32,.24],[.51,.35,.255],[.6,.44,.3],[.67,.57,.35],[.73,.69,.37],[.8,.73,.38],[.85,.73,.38]],e=32,t=[],n=[],s=[];for(const[o,a,l]of i){const c=Math.min(.09,l*.35);for(let h=0;h<e;h++){const d=Math.floor(h/8),f=d*Math.PI/2+h%8/7*Math.PI/2,u=d===0||d===3?a-c:-a+c,g=d<2?l-c:-l+c;t.push(u+Math.cos(f)*c,o,g+Math.sin(f)*c),n.push(h/e,o)}}for(let o=0;o<i.length-1;o++)for(let a=0;a<e;a++){const l=o*e+a,c=o*e+(a+1)%e;s.push(l,l+e,c,c,l+e,c+e)}const r=new yt;return r.setAttribute("position",new Ye(t,3)),r.setAttribute("uv",new Ye(n,2)),r.setIndex(s),r.computeVertexNormals(),r}function C3(){const i=[[-.68,.76,.29,.16],[-.81,.765,.265,.15],[-.96,.78,.225,.125],[-1.14,.8,.175,.096],[-1.31,.825,.115,.065],[-1.48,.847,.055,.033],[-1.57,.86,.009,.009]],e=24,t=[],n=[],s=[];i.forEach(([o,a,l,c],h)=>{for(let d=0;d<e;d++){const f=d/e*Math.PI*2;t.push(o,a+Math.cos(f)*c,Math.sin(f)*l),n.push(h/6,d/e)}});for(let o=0;o<i.length-1;o++)for(let a=0;a<e;a++){const l=o*e+a,c=o*e+(a+1)%e;s.push(l,l+e,c,c,l+e,c+e)}const r=new yt;return r.setAttribute("position",new Ye(t,3)),r.setAttribute("uv",new Ye(n,2)),r.setIndex(s),r.computeVertexNormals(),r}function yc(i=.075,e=.855){const t=new dn;t.moveTo(-.79,-.34),t.lineTo(.79,-.34),t.quadraticCurveTo(.84,-.34,.84,-.29),t.lineTo(.84,.29),t.quadraticCurveTo(.84,.34,.79,.34),t.lineTo(-.79,.34),t.quadraticCurveTo(-.84,.34,-.84,.29),t.lineTo(-.84,-.29),t.quadraticCurveTo(-.84,-.34,-.79,-.34);const n=new ir;n.moveTo(.56,.11),n.lineTo(.56,.23),n.lineTo(.68,.23),n.lineTo(.68,.11),n.closePath(),t.holes.push(n);const s=new ir;s.absarc(.72,-.17,.035,0,Math.PI*2,!0),t.holes.push(s);const r=new fn(t,{depth:i,bevelEnabled:!0,bevelThickness:.012,bevelSize:.015,bevelSegments:3,curveSegments:12,steps:1});r.rotateX(-Math.PI/2),r.translate(0,e,0);const o=r.getAttribute("position"),a=r.getAttribute("uv");for(const l of r.groups)if(l.materialIndex===0)for(let c=l.start;c<l.start+l.count;c++)a.setXY(c,(o.getX(c)+.735)/1.69,(o.getZ(c)+.355)/.71);return r}function R3(){const i=new dn;i.moveTo(-.43,-.15),i.lineTo(-.38,.18),i.lineTo(-.3,.22),i.lineTo(.32,.2),i.lineTo(.41,.14),i.lineTo(.39,-.16),i.lineTo(.3,-.21),i.lineTo(-.34,-.21),i.closePath();const e=new fn(i,{depth:.34,bevelEnabled:!0,bevelSize:.022,bevelThickness:.022,bevelSegments:3,steps:1});e.translate(0,0,-.17);const t=e.getAttribute("position"),n=e.getAttribute("uv");for(const s of e.groups)if(s.materialIndex===0)for(let r=s.start;r<s.start+s.count;r++)n.setXY(r,(t.getX(r)+.46)/.92,(t.getY(r)+.24)/.5);return e.computeVertexNormals(),e}const Sc=new Map;let no=null;function bc(i){no=i}function wc(i){const e=Sc.get(i);if(e)return e;const t=512,n=gs({steel:983,honed:431,brass:722,oxide:863,leather:411}[i]),s=document.createElement("canvas");s.width=s.height=t;const r=s.getContext("2d"),o=r.createImageData(t,t),a=new Float32Array(t*t),l=new Float32Array(t*t),c=Array.from({length:t},()=>n()-.5),h=i==="leather";for(let p=0;p<t;p++)for(let y=0;y<t;y++){const _=p*t+y,v=n()-.5,w=Math.sin(y*.023+p*.013)*Math.sin(p*.032-y*.007),E=c[p]*.7+c[(p+1)%t]*.3;a[_]=h?v*.38+Math.sin(y*.2+Math.sin(p*.035))*Math.sin(p*.17)*.18:E*(i==="honed"?.055:.15)*(1+Math.sin(y*.012+p*.014)*.15)+v*.014,l[_]=w*.055+E*.045}for(let p=0;p<(h?80:i==="honed"?95:290);p++){const y=Math.floor(n()*(t-45)),_=Math.floor(n()*t),v=12+Math.floor(n()*80),w=.07+n()*.08;for(let E=y;E<Math.min(t,y+v);E++){const b=Math.sin((E-y)/v*Math.PI),A=_*t+E;a[A]-=w*b,l[A]+=w*b}}const d=new Uint8Array(t*t*4),f=new Uint8Array(t*t*4);for(let p=0;p<t;p++)for(let y=0;y<t;y++){const _=p*t+y,v=_*4,w=n()-.5,E=h?176+w*25+a[_]*26:i==="oxide"?228+l[_]*14:249+w*2+l[_]*8;o.data.set([E,E,E,255],v);const b=a[p*t+(y+1)%t]-a[p*t+(y+t-1)%t],A=a[(p+1)%t*t+y]-a[(p+t-1)%t*t+y],M=-b*(h?2.2:1.3),S=-A*(h?2.2:1.3),L=Math.hypot(M,S,1);d.set([(M/L*.5+.5)*255,(S/L*.5+.5)*255,(.5/L+.5)*255,255],v);const I=at.clamp((h?.91:i==="oxide"?.93:.86)+l[_]+w*.025,0,1)*255;f.set([I,I,I,255],v)}r.putImageData(o,0,0);const u=new Li(s);u.colorSpace=Ut;const g=new ps(d,t,t),x=new ps(f,t,t);for(const p of[u,g,x])p.wrapS=p.wrapT=hs,p.minFilter=Rn,p.magFilter=Jt,p.generateMipmaps=!0,p.anisotropy=4,p.needsUpdate=!0;const m={map:u,normal:g,rough:x};return Sc.set(i,m),m}function J0(i){const e=(f,u,g="steel")=>{const x=wc(g);return new oi({color:f,map:x.map,normalMap:x.normal,normalScale:new se(g==="steel"||g==="honed"?.018:.15,g==="steel"||g==="honed"?.018:.15),roughnessMap:x.rough,roughness:u,metalness:1,envMap:no,envMapIntensity:g==="steel"||g==="honed"?1.65:1.25,anisotropy:g==="steel"||g==="honed"?.08:.22,anisotropyRotation:0})},t=e(i==="meteor"?12700112:i==="dragon"?13357268:13817303,.07),n=e(14278112,.038,"honed"),s=e(i==="meteor"?16049325:16702621,.12,"brass"),r=e(i==="genesis"?7634052:8884894,.13,"oxide");r.metalness=1,r.normalScale.set(.035,.035),r.anisotropy=.08;const o=wc("leather"),a=new pt({color:i==="meteor"?3157291:5849390,map:o.map,normalMap:o.normal,normalScale:new se(.65,.65),roughnessMap:o.rough,roughness:.89}),l=a.clone();l.color.multiplyScalar(.62);const c=i==="tyrant"?10354530:i==="runic"||i==="tempest"?9298943:i==="leviathan"?6934527:i==="dragon"?7710618:i==="meteor"?6790343:14134868,h=new oi({color:c,metalness:0,roughness:.12,ior:1.65,clearcoat:.5,clearcoatRoughness:.12,envMap:no,envMapIntensity:1,emissive:c,emissiveIntensity:.035}),d=new pt({color:c,metalness:.8,roughness:.32,envMap:no,envMapIntensity:1,emissive:c,emissiveIntensity:.035});for(const[f,u,g]of[[t,1,.985],[n,.85,.7],[s,.2,.91],[r,.7,.99],[a,0,.98],[l,0,.98]])f.userData.forgeHeat=u,f.userData.cosmosCoverage=g;return{body:t,edge:n,trim:s,dark:r,grip:a,wrap:l,gem:h,inlay:d}}class P3 extends B0{constructor(){super();const e=new pn;e.deleteAttribute("uv");const t=new pt({side:Xt}),n=new pt,s=new eo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Be(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new $r(e,n,6),a=new At;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Be(e,Qi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Be(e,Qi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Be(e,Qi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const d=new Be(e,Qi(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const f=new Be(e,Qi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const u=new Be(e,Qi(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Qi(i){return new L1({color:0,emissive:16777215,emissiveIntensity:i})}function L3(i){const e=new B0;e.background=new He(2435115);const t=document.createElement("canvas");t.width=t.height=64;const n=t.getContext("2d"),s=n.createImageData(64,64);for(let c=0;c<64;c++)for(let h=0;h<64;h++){const d=(h-31.5)/31.5,f=(c-31.5)/31.5,u=125+130*Math.exp(-d*d*.9-f*f*1.7);s.data.set([u,u,u,255],(c*64+h)*4)}n.putImageData(s,0,0);const r=new Li(t);r.colorSpace=Ut;const o=(c,h,d,f,u,g=!1)=>{const x=new Kt({color:new He(d).multiplyScalar(f),map:g?r:null,side:Cn,toneMapped:!1}),m=new Be(new ws(c,h),x);m.position.copy(u),m.lookAt(0,0,0),e.add(m)};o(6.4,3.2,15922943,3.4,new P(-.5,2.2,-3.8),!0),o(4.8,2.5,14937599,1.6,new P(1,4,1.8),!0),o(1.2,2.2,16757347,1.35,new P(-4.2,1.1,.8)),o(5.4,2.8,2826522,.85,new P(0,-2.2,1.5)),o(5.4,2,1513756,1,new P(.2,.2,4));for(const c of[-2.3,2.6])o(.24,4,1053720,1,new P(c,1.3,-3.7));const a=new po(i),l=a.fromScene(e,.025,.1,20);return a.dispose(),r.dispose(),e.traverse(c=>{c instanceof Be&&(c.geometry.dispose(),c.material.dispose())}),l}function yo(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new yt;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(t){let h=0;const d=[];for(let f=0;f<i.length;++f){const u=i[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Ec(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);const g=Ec(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ec(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Zt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<t;g++){const x=h.getComponent(f,g);a.setComponent(f+d,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const Tc=at.clamp;function mo(i,e){const t=Float32Array.from({length:(e+1)**2},()=>i());return(n,s)=>{const r=n*e,o=s*e,a=Math.floor(r),l=Math.floor(o),c=r-a,h=o-l,d=c*c*(3-2*c),f=h*h*(3-2*h),u=e+1;return at.lerp(at.lerp(t[l*u+a],t[l*u+a+1],d),at.lerp(t[(l+1)*u+a],t[(l+1)*u+a+1],d),f)}}function zh(i,e,t,n,s,r){const o=n.getContext("2d").getImageData(0,0,i,i).data,a=new Uint8Array(i*i*4);for(let d=0;d<i;d++)for(let f=0;f<i;f++){const u=(d*i+f)*4,g=(o[(d*i+Math.min(i-1,f+1))*4]-o[(d*i+Math.max(0,f-1))*4])/255*r,x=(o[(Math.min(i-1,d+1)*i+f)*4]-o[(Math.max(0,d-1)*i+f)*4])/255*r,m=Math.hypot(g,x,1);a.set([(1-g/m)*127.5,(1+x/m)*127.5,(1+1/m)*127.5,255],u)}const l=new Li(t);l.colorSpace=Ut;const c=new ps(a,i,i),h=new Li(s);for(const d of[l,c,h])d.wrapS=d.wrapT=hs,d.anisotropy=e,d.minFilter=Rn,d.magFilter=Jt,d.generateMipmaps=!0,d.needsUpdate=!0;return{map:l,normalMap:c,roughnessMap:h}}function os(i){const e=document.createElement("canvas");return e.width=e.height=i,e}function ua(i,e,t){const n=i==="face"?1024:512,s=gs(t),r=os(n),o=os(n),a=os(n),l=[r,o,a].map(m=>m.getContext("2d")),c=l.map(m=>m.createImageData(n,n)),h=mo(s,7),d=mo(s,39),f=i==="casting";for(let m=0;m<n;m++)for(let p=0;p<n;p++){const y=p/n,_=m/n,v=(m*n+p)*4,w=h(y,_),E=d(y,_),b=s()-.5,A=Math.min(y,1-y,_,1-_),S=(i==="face"?Math.exp(-((y-.52)**2/.18+(_-.51)**2/.035)):0)*(.5+w*.5),L=Tc((w-.42)*2+(A<.055?.2:0)-S*.28,0,1),O=(f?33:i==="hammer"?66:83)+w*(f?15:14)+E*9+S*24+b*5;c[0].data.set([O+L*5,O+2-L*2,O+4-L*6,255],v);const B=126+(E-.5)*(f?23:9)+b*(f?16:5);c[1].data.set([B,B,B,255],v);const q=Tc((f?.83:.63)+L*.18-S*.29+(E-.5)*.13,.28,.96)*255;c[2].data.set([q,q,q,255],v)}l.forEach((m,p)=>m.putImageData(c[p],0,0));const[u,g,x]=l;for(let m=0;m<(f?180:100);m++){const p=s()*n,y=s()*n,_=(f?1.3:2)+s()*(f?4:10),v=u.createRadialGradient(p,y,0,p,y,_);v.addColorStop(0,"rgba(160,150,130,.04)"),v.addColorStop(.72,"rgba(20,18,15,.04)"),v.addColorStop(1,"rgba(20,18,15,0)"),u.fillStyle=v,u.fillRect(p-_,y-_,_*2,_*2),g.fillStyle="rgba(60,60,60,.09)",g.beginPath(),g.ellipse(p,y,_,_*.65,s()*Math.PI,0,Math.PI*2),g.fill()}for(let m=0;m<(i==="face"?390:95);m++){const p=s()*n,y=s()*n,_=8+s()*n*.15,v=(s()-.5)*n*.08,w=.6+s()*1.1;for(const[E,b]of[[u,"rgba(190,180,157,.20)"],[g,"rgba(45,45,45,.28)"],[x,"rgba(220,220,220,.22)"]])E.lineWidth=w,E.strokeStyle=b,E.beginPath(),E.moveTo(p,y),E.lineTo(p+_,y+v),E.stroke()}return new pt({...zh(n,e,r,o,a,f?4:7),metalness:f?.78:.94,roughness:f?1:i==="hammer"?.72:.88,normalScale:new se(.65,.65),envMapIntensity:f?.45:i==="hammer"?1.15:.95})}function D3(i,e){const n=gs(e),s=mo(n,6),r=mo(n,35),o=os(512),a=os(512),l=os(512),c=[o,a,l].map(f=>f.getContext("2d")),h=c.map(f=>f.createImageData(512,512)),d={u:.2+n()*.6,v:.2+n()*.6};for(let f=0;f<512;f++)for(let u=0;u<512;u++){const g=u/512,x=f/512,m=(f*512+u)*4,p=Math.hypot((g-d.u)*.46,x-d.v),y=s(g,x),v=(x+Math.exp(-p*p/.025)*Math.sin((x-d.v)*14)*.065)*255+Math.sin(g*9)*2.2+y*5,w=Math.sin(v)*.035+Math.sin(v*3.7+r(g,x)*2)*.018,E=Math.exp(-p*p/6e-4),b=n()-.5,A=w+(y-.5)*.13-E*.32,M=Math.min(x,1-x),S=Math.exp(-((g-.55)**2/.13+(x-.48)**2/.06))*.18,L=55+A*90-S*30-(M<.018?9:0);h[0].data.set([L,35+A*65-S*22,22+A*45-S*14,255],m);const I=128+w*120+b*6-E*12;h[1].data.set([I,I,I,255],m);const O=(.82+Math.abs(w)*1.5+E*.1)*255;h[2].data.set([O,O,O,255],m)}c.forEach((f,u)=>f.putImageData(h[u],0,0));for(let f=0;f<35;f++){const u=n()*512,g=n()*512;c[0].strokeStyle="rgba(18,11,7,.23)",c[0].lineWidth=.4+n()*.6,c[0].beginPath(),c[0].moveTo(u,g),c[0].lineTo(u+12+n()*90,g+(n()-.5)*3),c[0].stroke()}return new pt({...zh(512,i,o,a,l,4),roughness:1,metalness:0,normalScale:new se(.45,.45)})}function I3(i){const e=ua("face",i,618),t=ua("casting",i,122),n=ua("hammer",i,94),s=n.clone();return s.color.set(9144706),s.envMapIntensity=.65,{face:e,casting:t,hammer:n,edge:s,wood:Array.from({length:5},(r,o)=>D3(i,231+o*31))}}function kh(i,e=.2,t=!1){const n=[],s=[],r=[],o=[-1,-(1-e),-.3,-.085,0,.085,.3,1-e,1],a=[],l=(h,d,f)=>{n.push(h,d,f),s.push(h/2.42,f/1.1+.5)};for(const h of i)for(const d of[1,-1])for(const f of o){const u=h.height??.095,g=h.center??0,x=f<0?h.left:h.right,m=Math.abs(f),p=1-e,y=m>=p?at.lerp(Math.min(.0016,u*.08),u*.61,(1-m)/(1-p)):m>.3?at.lerp(u*.61,u*.81,(p-m)/(p-.3)):m>.085?at.lerp(u*.81,u*(t?.62:.75),(.3-m)/.215):at.lerp(u*(t?.62:.75),u*(t?.6:1),(.085-m)/.085);l(h.x,d===1?y:-y*.38,g+f*x)}const c=o.length*2;for(let h=0;h<i.length-1;h++)for(const d of[0,1])for(let f=0;f<o.length-1;f++){const u=h*c+d*o.length+f,g=u+1,x=u+c,m=x+1,p=r.length;d===0?r.push(u,g,x,g,m,x):r.push(u,x,g,g,x,m),a.push({start:p,count:6,materialIndex:f===0||f===o.length-2?1:0,band:d*(o.length-1)+f})}for(let h=0;h<i.length-1;h++)for(const d of[0,o.length-1]){const f=h*c+d,u=f+c,g=f+o.length,x=u+o.length,m=r.length;d===0?r.push(f,u,g,u,x,g):r.push(f,g,u,u,g,x),a.push({start:m,count:6,materialIndex:1,band:2*(o.length-1)+(d===0?0:1)})}for(const h of[0,i.length-1])for(let d=0;d<o.length-1;d++){const f=h*c+d,u=f+1,g=f+o.length,x=g+1,m=r.length;h===0?r.push(f,g,u,u,g,x):r.push(f,u,g,u,x,g),a.push({start:m,count:6,materialIndex:0,band:2*o.length+(h===0?0:1)})}return Hh(n,s,r,a)}function Hh(i,e,t,n){const s=new yt,r=[],o=[],a=[],l=new Map;for(const c of[...new Set(n.map(h=>h.materialIndex))]){const h=a.length;for(const d of n)if(d.materialIndex===c)for(const f of t.slice(d.start,d.start+d.count)){const u=d.band+":"+f;let g=l.get(u);g===void 0&&(g=r.length/3,l.set(u,g),r.push(...i.slice(f*3,f*3+3)),o.push(...e.slice(f*2,f*2+2))),a.push(g)}s.addGroup(h,a.length-h,c)}return s.setAttribute("position",new Ye(r,3)),s.setAttribute("uv",new Ye(o,2)),s.setIndex(a),s.computeVertexNormals(),s.computeBoundingBox(),s}function Gh(i,e=.055){const t=[],n=[],s=[],r=[],o=Math.sign(i[0][1]);i.forEach(([c,h],d)=>{const f=d===i.length-1,u=f?c-.1:c,g=f?0:h-o*e;for(const[x,m,p]of[[c,.0016,h],[u,f?.026:.104,g],[u,f?-.006:-.022,g]])t.push(x,m,p),s.push(x/2.42,p/1.1+.5)});for(let c=0;c<i.length-1;c++)for(let h=0;h<3;h++){const d=c*3+h,f=c*3+(h+1)%3,u=d+3,g=f+3,x=n.length;o<0?n.push(d,f,u,f,g,u):n.push(d,u,f,f,u,g),r.push({start:x,count:6,materialIndex:0,band:h})}const a=n.length,l=(i.length-1)*3;return o<0?n.push(0,2,1,l,l+1,l+2):n.push(0,1,2,l,l+2,l+1),r.push({start:a,count:3,materialIndex:0,band:3},{start:a+3,count:3,materialIndex:0,band:4}),Hh(t,s,n,r)}function Vh(i,e=.055,t=.014){const n=new dn;i.forEach(([r,o],a)=>a?n.lineTo(r,-o):n.moveTo(r,-o)),n.closePath();const s=new fn(n,{depth:e,bevelEnabled:!0,bevelSize:t,bevelThickness:t*.6,bevelSegments:3,curveSegments:16});return s.rotateX(-Math.PI/2),s}function v0(i,e,t=.085,n=.016){const s=new dn;i.forEach(([o,a],l)=>l?s.lineTo(o,-a):s.moveTo(o,-a)),s.closePath();for(const o of e){const a=new ir;o.forEach(([l,c],h)=>h?a.lineTo(l,-c):a.moveTo(l,-c)),a.closePath(),s.holes.push(a)}const r=new fn(s,{depth:t,bevelEnabled:!0,bevelSize:n,bevelThickness:n*.6,bevelSegments:3,curveSegments:16});return r.rotateX(-Math.PI/2),r}function Z0(i,e=.009){const t=new ho(i.map(n=>new P(...n)));return new ar(t,Math.min(144,Math.max(12,i.length*7)),e,5,!1)}function U3(i,e=0,t){const n=new et,s=t||J0(i),r=new et;n.name="evolving-sword",n.userData.theme=i,s.body.color.set(i==="leviathan"?13358811:14081248),s.body.roughness=.065,s.body.envMapIntensity=.9,s.edge.color.set(15265521),s.edge.roughness=.032,s.edge.envMapIntensity=1.15,s.trim.envMapIntensity=.8,s.dark.color.set(1516330),s.grip.color.set(1646369),s.wrap.color.set(4209450);const o=i==="tyrant"?2686754:2341631;s.gem.color.set(o),s.gem.emissive.set(o),s.gem.emissiveIntensity=1.35,s.gem.roughness=.055,s.inlay.color.set(o),s.inlay.emissive.set(o),s.inlay.metalness=.2,s.inlay.roughness=.16,s.inlay.emissiveIntensity=1.7,s.inlay.userData.forgeHeat=0,s.gem.userData.forgeHeat=0;const a=s.inlay.clone();a.name="reference-aura",a.emissiveIntensity=1.9,a.transparent=!0,a.opacity=.78,a.depthWrite=!1;const l={rings:[],wisps:[],glow:a,intensity:a.emissiveIntensity};r.name="reference-magic",n.add(r);const c=(v,w,E=0,b=0,A=0,M="blade",S=n)=>{const L=new Be(v,w);return L.position.set(E,b,A),L.name=M,L.castShadow=S!==r,L.receiveShadow=S!==r,S.add(L),L},h=(v,w,E=.02,b="blade-detail",A=.06,M=.012)=>c(Vh(v,A,M),w,0,E,0,b),d=(v,w=s.trim,E=.007,b="blade-inlay",A=n)=>c(Z0(v,E),w,0,0,0,b,A),f=(v,w,E,b=.09)=>{const A=c(new Un(b,0),s.gem,v,w,E,"blade-gem");return A.scale.y=.8,A},u=(v,w,E,b=s.trim,A=n)=>{const M=c(new sn(E,.014,6,64),b,v,.13,w,"blade-orbit",A);return M.rotation.x=Math.PI/2,M},g=v=>c(kh(v,.22),[s.body,s.edge]),x=(v,w=.115,E=s.trim,b=.006)=>d(v.map(([A,M])=>[A,w,M]),E,b),m=v=>{for(const w of[-1,1])h([[-.13,w*.06],[-.2,w*.19],[-.3,w*v],[-.08,w*(v-.04)],[.055,w*.23],[.07,w*.11]],s.body,-.04,"guard",.12,.015),x([[-.13,w*.1],[-.27,w*(v-.025)],[-.08,w*(v-.065)],[.025,w*.21]],.107)},p=(v,w,E=.11)=>{d([[v-E/2,.121,w],[v+E/2,.121,w]],s.inlay,.005,"blade-rune");for(const[b,A]of[[-.03,1],[.023,-1]])d([[v+b-.022,.122,w+A*.029],[v+b,.122,w],[v+b+.022,.122,w+A*.025]],s.inlay,.004,"blade-rune")};if(i==="runic"){const v=[[.06,-.19],[.38,-.38],[.73,-.34],[1.8,-.25],[2.42,0],[1.8,.25],[.73,.34],[.38,.38],[.06,.19]],w=[[.33,-.038],[.67,-.105],[1.76,-.09],[2.18,0],[1.76,.09],[.67,.105],[.33,.038]],E=v.map(([M,S])=>[S===0?M-.1:M,S-Math.sign(S)*.047]);c(v0(E,[w],.085,.01),s.body,0,.018,0);for(const M of[-1,1]){const S=[[.06,M*.19],[.38,M*.38],[.73,M*.34],[1.8,M*.25],[2.42,0]];c(Gh(S,.047),s.edge,0,.005,0,"blade-edge"),x(S.slice(0,-1),.112,s.trim,.004),d([[.36,.126,M*.17],[.73,.127,M*.22],[1.65,.12,M*.17]],s.inlay,.005);for(let L=0;L<6+Math.min(e,5);L++)p(.52+L*.15,M*(.225-L*.007),.09)}m(.51),f(-.01,.13,0,.095),f(.57,.155,0,.115),u(.54,0,.28,s.edge);const b=u(.54,0,.26,a,r);l.rings.push(b);const A=u(.54,0,.3,s.trim);A.rotation.z=.25}else if(i==="tyrant"){g([{x:0,left:.29,right:.29},{x:.16,left:.46,right:.46},{x:1.97,left:.46,right:.46},{x:2.2,left:.32,right:.32},{x:2.42,left:.001,right:.001,height:.004}]),h([[.21,-.125],[1.99,-.125],[2.18,0],[1.99,.125],[.21,.125]],s.dark,.087,"blade-fuller",.006,.003);for(const v of[-1,1]){d([[.18,.122,v*.34],[1.95,.122,v*.34],[2.25,.06,v*.12]],s.inlay,.009),x([[.15,v*.44],[1.97,v*.44],[2.38,0]],.038,s.trim,.005);for(let b=0;b<9;b++){const A=.28+b*.185;h([[A-.06,v*.13],[A-.075,v*.22],[A-.01,v*.28],[A+.065,v*.22],[A+.055,v*.13]],b%2?s.body:s.edge,.111,"blade-tooth",.055,.005),h([[A-.08,v*.455],[A+.07,v*.48],[A+.14,v*.64],[A+.13,v*.45]],s.edge,0,"blade-spine-tooth",.06,.006)}for(let b=0;b<2;b++){const A=.28+b*.2;h([[A-.12,v*.42],[A-.08,v*.82],[A+.25,v*.49],[A+.1,v*.43]],s.trim,.03,"blade-basal-spike",.045,.006)}const w=[];for(let b=0;b<=36;b++){const A=.06+b/36*2.32;w.push([A,.22,v*(.67+Math.sin(b/36*Math.PI*5)*.035)])}const E=d(w,a,.009,"blade-green-wisp",r);l.wisps.push(E)}h([[-.16,-.6],[-.1,-.6],[-.055,.6],[-.12,.6]],s.trim,-.03,"guard",.12,.012),f(.025,.2,0,.15)}else if(i==="leviathan"){const v=[];for(let w=0;w<=32;w++){const E=w/32,b=E*2.42,A=E<.83?.3+.28*Math.sin(E*Math.PI*.84):.001+.42*(1-E)/.17;v.push({x:b,left:Math.max(.001,A),right:Math.max(.001,A*.64),center:.13*Math.sin(E*Math.PI*.76),height:w===32?.004:.098})}g(v),h([[.1,-.19],[.54,-.16],[1.25,-.26],[1.9,-.33],[2.28,-.1],[1.91,-.4],[1.23,-.34],[.54,-.28],[.1,-.29]],s.dark,.086,"blade-spine",.009,.003);for(let w=0;w<4;w++){const E=.24+w*.41,b=-(.35+.04*w),A=[[E-.085,b],[E-.1,b-.09],[E-.05,b-.21],[E+.015,b-.27],[E+.008,b-.14],[E+.15,b+.035],[E+.05,b+.04]];h(A,s.edge,-.012,"blade-horn",.072,.009),x(A.slice(0,5),.064,s.trim,.004)}d([[.13,.13,-.15],[.5,.13,-.13],[1.05,.135,-.19],[1.62,.13,-.23],[2.15,.1,-.04]],s.inlay,.004);for(let w=0;w<5;w++){const E=.45+w*.28;d([[E,.137,-.16],[E+.045,.139,-.12],[E+.075,.137,-.14],[E+.1,.139,-.07]],a,.003,"blade-lightning",r)}h([[-.13,-.4],[-.05,-.37],[.08,-.22],[.08,.26],[-.035,.47],[-.16,.49],[-.07,.35],[-.05,.13]],s.edge,-.04,"guard",.09,.014),x([[-.12,-.36],[.03,-.2],[.03,.25],[-.09,.43]],.064),f(.035,.14,0,.075)}else{g([{x:.88,left:.13,right:.13},{x:1.03,left:.28,right:.28},{x:1.19,left:.21,right:.21},{x:1.91,left:.16,right:.16},{x:2.42,left:.001,right:.001,height:.004}]);const v=[],w=[];for(let A=0;A<8;A++){const M=A/8*Math.PI*2;v.push([.48+Math.cos(M)*.64,Math.sin(M)*.57]),w.unshift([.48+Math.cos(M)*.49,Math.sin(M)*.43])}c(v0(v,[w],.11,.015),s.dark,0,-.005,0),x([...v,v[0]],.128,s.trim,.012),x([...w,w[0]],.126,s.edge,.008);const E=[];for(let A=0;A<=64;A++){const M=A/64*Math.PI*2;E.push([.48+Math.cos(M)*.435,.17,Math.sin(M)*.37])}const b=d(E,a,.006,"blade-electric-ring",r);l.rings.push(b),f(.48,.14,0,.15),d([[.48,.18,0],[.49,.18,-.045],[.53,.18,-.07],[.5,.18,-.1],[.55,.18,-.19],[.52,.18,-.23],[.58,.18,-.32]],a,.009,"blade-lightning",r),d([[.48,.18,0],[.41,.18,.06],[.46,.18,.12],[.35,.18,.18],[.39,.18,.25],[.3,.18,.32]],a,.007,"blade-lightning",r);for(const A of[-1,1]){h([[-.13,A*.12],[-.24,A*.32],[-.21,A*.46],[-.05,A*.43],[.03,A*.22]],s.trim,-.01,"guard",.095,.013),d([[1.15,.115,A*.105],[1.78,.105,A*.082],[2.19,.065,A*.03]],s.inlay,.005);for(let M=0;M<4+Math.min(e,7);M++)p(1.2+M*.085,A*.085,.055)}}const y=c(new En(.07,.078,.55,24),s.grip,-.41,.025,0,"grip");y.rotation.z=Math.PI/2;for(let v=0;v<11;v++){const w=c(new sn(.077,.006,5,20),s.trim,-.16-v*.05,.025,0,"grip-band");w.rotation.y=Math.PI/2}for(const v of[-.12,-.7]){const w=c(new En(.091,.091,.03,16),s.trim,v,.025,0,"grip-collar");w.rotation.z=Math.PI/2}c(new Un(.117,0),s.edge,-.79,.025,0,"pommel").scale.set(1.2,.85,1),i!=="leviathan"&&f(-.79,.1,0,.058);for(let v=0;v<Math.min(e,12);v++){const w=.28+v*.13;h([[w-.022,-.02],[w,-.037],[w+.022,-.02],[w,0]],s.trim,.12,"blade-progression-seal",.009,.003)}for(const v of l.rings)v.userData.restY=v.position.y;return n.userData.materials=s,n.userData.referenceFx=l,N3(n),n}function N3(i){i.updateMatrixWorld(!0);const e=new Map;for(const t of i.children)if(t instanceof Be&&!Array.isArray(t.material)&&!t.material.transparent){const n=e.get(t.material)||[];n.push(t),e.set(t.material,n)}for(const[t,n]of e){if(n.length<2)continue;const s=n.map(a=>(a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone()).applyMatrix4(a.matrix)),r=yo(s,!1);if(s.forEach(a=>a.dispose()),!r)continue;n.forEach(a=>{i.remove(a),a.geometry.dispose()});const o=new Be(r,t);o.name="blade-metal",o.castShadow=!0,o.receiveShadow=!0,i.add(o)}}function F3(i,e,t,n=!1){const s=i.userData.referenceFx;if(!s)return;const r=n?0:e;s.glow.emissiveIntensity=s.intensity*(t?.55:1)*(.92+.08*Math.sin(r*3.1)),s.wisps.forEach((o,a)=>{o.position.z=Math.sin(r*1.4+a*Math.PI)*.016,o.position.y=Math.sin(r*1.7+a)*.013}),s.rings.forEach((o,a)=>{o.position.y=o.userData.restY+Math.sin(r*1.3+a)*.012})}function O3(i,e=0,t=0,n){if(i==="runic"||i==="tyrant"||i==="leviathan"||i==="tempest")return U3(i,e,n);const s=new et,r=n||J0(i);s.name="evolving-sword",s.userData.theme=i;const o=(m,p,y=0,_=0,v=0,w="fitting")=>{const E=new Be(m,p);return E.position.set(y,_,v),E.castShadow=!0,E.receiveShadow=!0,E.name=w,s.add(E),E},a=(m,p,y=.03,_="fitting",v=.055,w=.014)=>o(Vh(m,v,w),p,0,y,0,_),l=(m,p=r.trim,y=.009,_="blade-inlay")=>o(Z0(m,y),p,0,0,0,_),c=(m,p,y,_,v=r.gem)=>{const w=o(new Un(_,1),v,m,p,y,"blade-jewel");return w.scale.set(1,.44,1),w},h=m=>o(kh(m,.2,i!=="genesis"),[r.body,r.edge],0,0,0,"blade"),d=e;if(i==="dragon"){h([{x:0,left:.27,right:.28},{x:.13,left:.39,right:.37},{x:.31,left:.4,right:.34},{x:.55,left:.34,right:.31},{x:.77,left:.36,right:.31},{x:1,left:.29,right:.3},{x:1.22,left:.31,right:.29},{x:1.48,left:.27,right:.3},{x:1.74,left:.28,right:.31},{x:1.94,left:.26,right:.31},{x:2.15,left:.18,right:.24,center:.035},{x:2.42,left:6e-4,right:6e-4,center:.13,height:.004}]),a([[.09,-.09],[.48,-.052],[1.66,-.042],[2.06,.015],[1.64,.042],[.48,.052],[.09,.09]],r.dark,.058,"blade-fuller",.008,.003);for(const m of[-1,1])l([[.16,.086,m*.1],[.59,.082,m*.07],[1.48,.078,m*.056],[2.05,.065,.012]],r.trim,.005),a([[-.11,m*.06],[-.3,m*.17],[-.36,m*.31],[-.3,m*.51],[-.1,m*.63],[.07,m*.57],[-.04,m*.47],[-.11,m*.31],[.07,m*.13]],r.trim,-.014,"guard",.1,.022),a([[-.13,m*.16],[-.25,m*.29],[-.2,m*.46],[-.07,m*.47],[-.14,m*.32]],r.dark,.082,"guard-inset",.012,.006),l([[-.14,.119,m*.19],[-.28,.118,m*.31],[-.21,.12,m*.48],[-.08,.117,m*.52]],r.edge,.012,"guard-engraving");for(let m=0;m<4+Math.min(d,6);m++){const p=.32+m*.14;a([[p-.08,0],[p-.01,-.051],[p+.081,0],[p-.01,.051]],m%2?r.trim:r.edge,.068,"blade-scale",.008,.003)}c(.07,.157,0,.09),da(s,r,o,i,d)}else if(i==="meteor"){h([{x:0,left:.23,right:.23},{x:.17,left:.42,right:.42},{x:.43,left:.34,right:.34},{x:.57,left:.41,right:.41},{x:.71,left:.32,right:.32},{x:1.55,left:.26,right:.26},{x:1.97,left:.23,right:.23},{x:2.42,left:6e-4,right:6e-4,height:.004}]),a([[.3,-.073],[1.79,-.036],[2.2,0],[1.79,.036],[.3,.073]],r.dark,.058,"blade-fuller",.008,.003);for(const p of[-1,1])a([[.13,p*.25],[.39,p*.3],[.52,p*.34],[.59,p*.18],[.23,p*.13]],r.trim,.074,"blade-shoulder",.011,.006),l([[.39,.084,p*.089],[1.02,.08,p*.065],[1.77,.077,p*.043],[2.2,.036,0]],r.inlay,.005),a([[-.12,p*.11],[-.3,p*.3],[-.28,p*.49],[-.05,p*.64],[.15,p*.57],[.03,p*.43],[-.08,p*.44],[-.16,p*.32],[.02,p*.14]],r.edge,-.01,"guard",.1,.017),l([[-.11,.13,p*.16],[-.23,.13,p*.31],[-.2,.13,p*.46],[-.04,.13,p*.56],[.08,.13,p*.51]],r.trim,.019,"guard-orbit");const m=o(new sn(.149,.027,7,40),r.trim,.11,.133,0,"blade-core-setting");m.rotation.x=Math.PI/2,c(.11,.142,0,.14);for(let p=0;p<3+Math.min(d,5);p++){const y=.48+p*.19;a([[y-.04,0],[y,-.026],[y+.04,0],[y,.026]],r.inlay,.068,"blade-star-seal",.008,.003);for(const _ of[-1,1])l([[y-.04,.082,_*.11],[y,.088,_*.14],[y+.04,.083,_*.11]],r.trim,.004)}da(s,r,o,i,d)}else{const p=[[[0,-.27],[.21,-.44],[.57,-.36],[1.72,-.33],[2.12,-.21]],[[0,-.28],[.18,-.44],[.42,-.4],[.75,-.28],[1.34,-.31],[1.7,-.43],[2.1,-.28]],[[0,-.24],[.2,-.4],[.38,-.33],[.57,-.43],[.73,-.34],[1.04,-.3],[1.22,-.39],[1.44,-.27],[1.74,-.28],[2.08,-.17]],[[0,-.32],[.23,-.46],[.51,-.3],[.76,-.33],[1.05,-.44],[1.43,-.36],[1.77,-.31],[2.1,-.25]],[[0,-.3],[.16,-.45],[.39,-.34],[.57,-.25],[.84,-.29],[1.18,-.44],[1.51,-.42],[1.75,-.32],[2.08,-.28]]][t],y=[...p,[2.42,0],...[...p].reverse().map(([b,A])=>[b,-A])],_=[[.43,-.1],[.73,-.115],[1.64,-.093],[1.99,0],[1.64,.093],[.73,.115],[.43,.1]],v=y.map(([b,A])=>[A===0?b-.12:b,A-Math.sign(A)*.052]);o(v0(v,[_],.086,.01),r.body,0,.003,0,"blade");for(const b of[-1,1])o(Gh([...p.map(([A,M])=>[A,-b*M]),[2.42,0]]),r.edge,0,0,0,"blade-cutting-edge"),l([[.3,.119,b*.235],[.67,.123,b*.202],[1.57,.124,b*.185],[1.99,.099,b*.095]],r.trim,.011),a([[-.13,b*.1],[-.24,b*.22],[-.31,b*.58],[-.13,b*.67],[.03,b*.6],[.08,b*.44],[-.03,b*.49],[-.08,b*.25],[.14,b*.13]],r.trim,-.02,"guard",.12,.023),a([[-.18,b*.34],[-.24,b*.54],[-.14,b*.59],[-.075,b*.54]],r.dark,.098,"guard-inset",.012,.006);a([[-.11,-.16],[.15,-.19],[.33,-.1],[.39,0],[.33,.1],[.15,.19],[-.11,.16]],r.dark,.087,"blade-core-mount",.044,.013);const w=o(new sn(.132,.021,8,40),r.trim,.14,.152,0,"blade-core-setting");w.rotation.x=Math.PI/2,c(.14,.161,0,.124);const E=[.55,1.1,1.65,.825,1.375,.6875,.9625,1.2375,1.5125,.6187,.7562,.8937,1.0312,1.1687,1.3062,1.4437,1.5812];for(let b=0;b<3+Math.min(d,14);b++){const A=E[b];a([[A-.025,-.145],[A+.025,-.145],[A+.034,.145],[A-.034,.145]],r.trim,.054,"blade-bridge",.025,.007);for(const M of[-1,1]){const S=o(new pn(.022,.006,.027),r.inlay,A,.113,M*.24,"blade-seal");S.rotation.y=Math.PI/4}}if(h([{x:1.72,left:.103,right:.103,height:.06},{x:2.11,left:.13,right:.13,height:.074},{x:2.42,left:6e-4,right:6e-4,height:.004}]),t>0)for(const b of[-1,1])a([[],[[-.2,.2],[-.39,.32],[-.42,.65],[-.32,.56],[-.26,.3]],[[-.13,.25],[-.29,.34],[-.2,.64],[-.04,.68],[-.11,.42]],[[-.17,.25],[-.35,.45],[-.2,.7],[-.09,.57],[.02,.68],[.06,.48]],[[-.12,.23],[-.29,.37],[-.24,.68],[-.11,.56],[.05,.63],[.13,.45]]][t].map(([M,S])=>[M,b*S]),t%2?r.edge:r.trim,.078,"guard-ascension",.04,.012);if(t>=2)for(const b of[-1,1])l([[.1,.155,b*.15],[.5,.134,b*.24],[1.06,.14,b*.26],[1.55,.14,b*.22]],r.inlay,.006);da(s,r,o,i,d)}const f=1+e*.0022;for(const m of s.children)m instanceof Be&&(m.geometry.scale(1,1,f),m.position.z*=f);r.body.roughness=Math.max(.045,r.body.roughness-e*.001),r.trim.roughness=Math.max(.075,r.trim.roughness-e*.001),s.updateMatrixWorld(!0);const u=new P,g=new P,x=new Ke;for(const m of s.children)if(m instanceof Be&&m.material!==r.grip&&m.material!==r.wrap){if(m.geometry.index){const v=m.geometry;m.geometry=v.toNonIndexed(),v.dispose()}const p=m.geometry.getAttribute("position"),y=m.geometry.getAttribute("normal"),_=new Float32Array(p.count*2);x.getNormalMatrix(m.matrix);for(let v=0;v<p.count;v+=3){g.set(0,0,0);for(let E=0;E<3;E++)g.add(u.fromBufferAttribute(y,v+E));g.applyMatrix3(x);const w=Math.abs(g.y)>=Math.max(Math.abs(g.x),Math.abs(g.z))?"y":Math.abs(g.x)>Math.abs(g.z)?"x":"z";for(let E=0;E<3;E++)u.fromBufferAttribute(p,v+E).applyMatrix4(m.matrix),_[(v+E)*2]=w==="x"?u.y/1.1:u.x/2.42,_[(v+E)*2+1]=(w==="z"?u.y:u.z)/1.1+.5}m.geometry.setAttribute("uv",new Zt(_,2))}return s.userData.materials=r,s.userData.ascension=t,B3(s),s}function B3(i){const e=new Map;i.updateMatrixWorld(!0);for(const t of i.children){if(!(t instanceof Be)||Array.isArray(t.material)||t.material.transparent)continue;const n=t.material.id+":"+(t.name.startsWith("blade")?"blade":"fitting"),s=e.get(n)||[];s.push(t),e.set(n,s)}for(const t of e.values()){if(t.length<2)continue;const n=t.map(o=>(o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrix)),s=yo(n,!1);if(n.forEach(o=>o.dispose()),!s)continue;const r=new Be(s,t[0].material);r.name=t[0].name.startsWith("blade")?"blade-details":"fittings",r.castShadow=!0,r.receiveShadow=!0,t.forEach(o=>{i.remove(o),o.geometry.dispose()}),i.add(r)}}function da(i,e,t,n,s){const r=t(new En(.077,.084,.54,24),e.grip,-.4,.026,0,"grip");r.rotation.z=Math.PI/2;const o=[];for(let c=0;c<=108;c++){const h=c/108*Math.PI*18;o.push([-.14-c/108*.53,.026+Math.cos(h)*.081,Math.sin(h)*.081])}t(Z0(o,.006),e.wrap,0,0,0,"grip-wrap");for(const c of[-.12,-.68]){const h=t(new En(.095,.095,.045,24),e.trim,c,.026,0,"grip-collar");h.rotation.z=Math.PI/2}if(t(new Dn(1,24,16),e.trim,-.79,.026,0,"pommel").scale.set(.129,.1,.117),t(new Un(.065,1),e.gem,-.79,.123,0,"pommel-gem").scale.set(1,.31,1),n==="genesis"){const c=t(new sn(.117,.014,6,32),e.edge,-.79,.026,0,"pommel-crown");c.rotation.x=Math.PI/2}for(let c=0;c<Math.min(s,9);c++){const h=t(Ys(.012,.01,.11,.003),e.trim,-.19-c*.049,.1,0,"grip-stitch");h.rotation.y=-.22}}function x0(i,e,t,n,s=!1,r){const o=Sn(e,t,s),a=new et;if(o.theme!=="legacy"){const oe=O3(o.theme,o.detail,o.ascension,r);return oe.userData.swordName=o.name,oe.userData.level=o.level,oe.userData.form=o.silhouette,oe}a.name="evolving-sword";const l=n==="bronze"?12491368:n==="cold"?11132133:12832727,c=o.crest>=5?15456176:o.crest>=2?13678459:11175504,h=new pt({color:c,metalness:.82,roughness:.31}),d=new pt({color:3423046,metalness:.76,roughness:.36}),f=new pt({color:l,metalness:.85,roughness:.27}),u=new pt({color:e==="great"?4598565:e==="short"?1583932:2636341,roughness:.8}),g=new pt({color:[4224906,3785883,6328298,10121439,15772752,15233152][o.crest%6],emissive:[863287,1203266,1847647,4203365,6898970,6299692][o.crest%6],emissiveIntensity:.35+.045*o.crest,metalness:.24,roughness:.2}),x=(oe,fe,Ae=0,Pe=0,te=0,ne="fitting")=>{const ve=new Be(oe,fe);return ve.position.set(Ae,Pe,te),ve.castShadow=!0,ve.receiveShadow=!0,ve.name=ne,a.add(ve),ve},m=(oe,fe,Ae,Pe,te,ne,ve,we="fitting")=>x(new pn(Pe,te,ne),ve,oe,fe,Ae,we),p=(oe,fe,Ae,Pe,te,ne,ve)=>{const we=x(new Dn(1,12,8),ve,oe,fe,Ae);return we.scale.set(Pe,te,ne),we},y=2.42,v=(e==="great"?.37:e==="short"?.245:.29)*o.span,E=[[1,.99,1.03,1.03,.98,.91,.58],[1,1.17,1.14,.99,.92,.88,.57],[1,1.06,1.19,1.12,1,.93,.57],[1,1.24,1.1,1.04,1.14,.97,.62],[1,1.06,.94,1.17,1.13,1.01,.67],[1,1.15,1.04,1.22,1.07,1.04,.71]][Math.min(o.silhouette,5)],A=[0,.1,.25,.46,.66,.8,.92,1].map((oe,fe)=>({x:y*oe,w:fe===7?0:v*E[fe],centerY:.125+Math.min(o.level,40)*35e-5})),M=[],S=[],L=(oe,fe,Ae)=>{for(const Pe of[oe,fe,Ae])M.push(Pe[0],Pe[1],Pe[2]),S.push(Pe[0]/y,Pe[2]/(v*2)+.5)};for(let oe=0;oe<A.length-1;oe++){const fe=A[oe],Ae=A[oe+1],Pe=ze=>[ze.x,0,-ze.w],te=ze=>[ze.x,0,ze.w],ne=ze=>[ze.x,ze.centerY,0];L(Pe(fe),ne(fe),Pe(Ae)),L(ne(fe),ne(Ae),Pe(Ae)),L(ne(fe),te(fe),ne(Ae)),L(te(fe),te(Ae),ne(Ae));const ve=ze=>[ze.x,-.035,-ze.w],we=ze=>[ze.x,-.035,ze.w],Ee=ze=>[ze.x,-.057,0];L(ve(fe),ve(Ae),Ee(fe)),L(Ee(fe),ve(Ae),Ee(Ae)),L(Ee(fe),Ee(Ae),we(fe)),L(we(fe),Ee(Ae),we(Ae)),L(Pe(fe),Pe(Ae),ve(fe)),L(ve(fe),Pe(Ae),ve(Ae)),L(te(fe),we(fe),te(Ae)),L(we(fe),we(Ae),te(Ae))}const I=new yt;if(I.setAttribute("position",new Ye(M,3)),I.setAttribute("uv",new Ye(S,2)),I.computeVertexNormals(),x(I,i,0,0,0,"blade"),o.level>=4){const oe=x(new pn(Math.min(1.25,.28+o.level*.026),.009,.018),d,.65,.131,0,"blade-detail");oe.rotation.y=(o.silhouette-2.5)*.012}if(o.level>=8){const oe=x(new pn(.3,.012,.025),h,1.38,.135,0,"blade-detail");oe.rotation.y=Math.PI/12}const O=o.runeCount;for(let oe=0;oe<O;oe++){const fe=.29+oe*.142,Ae=m(fe,.147,oe%2?-.045:.045,.035,.012,.034,oe%3===0?h:f,"blade-rune");Ae.rotation.y=Math.PI/4}if(o.crest>0){const oe=Math.min(o.crest,8);for(let fe=0;fe<oe;fe++){const Ae=.34+fe*.18,Pe=x(new Un(.029+fe%3*.006,0),g,Ae,.159,0,"blade-crest");Pe.scale.y=.42,Pe.rotation.y=Math.PI/4}}const B=(e==="great"?.5:e==="short"?.34:.4)+Math.min(o.level,99)*.0023,q=o.guardStyle%3*.044,j=o.guardStyle>=3?.075:0,J=new dn;J.moveTo(-.105,-B),J.lineTo(-.115-q,-B-j),J.quadraticCurveTo(-.19-q,-B*.85,-.085,-B*.66),J.lineTo(-.055,-.16),J.lineTo(.075,-.16),J.lineTo(.075,-B*.7),J.quadraticCurveTo(.17,-B*.87,.115+q,-B),J.lineTo(.075+q,-B*.53),J.lineTo(.09,-.12),J.lineTo(.09,.12),J.lineTo(.075+q,B*.53),J.lineTo(.115+q,B),J.quadraticCurveTo(.17,B*.87,.075,B*.7),J.lineTo(.075,.16),J.lineTo(-.055,.16),J.lineTo(-.085,B*.66),J.quadraticCurveTo(-.19-q,B*.85,-.115-q,B+j),J.lineTo(-.105,B),J.lineTo(-.105,-B);const W=new fn(J,{depth:.105,bevelEnabled:!0,bevelSize:.014,bevelThickness:.014,bevelSegments:2,curveSegments:8});W.rotateX(-Math.PI/2),x(W,h,-.06,-.063,0,"guard");const le=m(-.095,.015,0,.13,.16,.25,d);if(le.rotation.y=o.guardStyle*.07,o.level>=3){for(const oe of[-1,1])if(p(-.12,.058,oe*B*.74,.048,.06,.043,o.level>=16?g:h),o.level>=15){const fe=x(new _o(.052,.16,7),h,-.14,.041,oe*(B+.06));fe.rotation.x=oe*Math.PI/2}}if(o.level>=25)for(const oe of[-1,1])x(new Un(.061,0),g,-.024,.09,oe*.2).scale.set(.63,.45,.76);const ce=x(new En(.062,.071,.56,14),u,-.38,.02,0,"grip");ce.rotation.z=Math.PI/2;for(let oe=0;oe<9;oe++){const fe=x(new sn(.067,.007,4,14),oe%3===0&&o.level>=7?h:d,-.16-oe*.055,.02,0,"grip-band");fe.rotation.y=Math.PI/2}for(const oe of[-.12,-.66]){const fe=x(new En(.076,.076,.028,16),h,oe,.02,0);fe.rotation.z=Math.PI/2}const ge=p(-.73,.02,0,.11+o.crest*.003,.082,.091,h);if(o.level>=6&&(ge.rotation.x=Math.PI/8),p(-.746,.097,0,.048,.016,.048,g),o.level>=12&&(p(-.746,-.058,0,.039,.012,.039,g),m(-.38,.089,0,.12,.012,.025,h)),o.level>=35)for(const oe of[-1,1])p(-.73,.023,oe*.073,.029,.03,.014,g);return a.userData.swordName=o.name,a.userData.level=o.level,a.userData.form=o.silhouette,a}const z3=[[.14043,-.39809,-.56076],[-.04337,-.19698,-.62868],[.1971,-.17696,-.61136],[-.04337,-.19698,-.62868],[-.24184,-.27035,-.57724],[-.3376,-.04033,-.58874],[-.04337,-.19698,-.62868],[-.3376,-.04033,-.58874],[.01244,.03963,-.65433],[.01244,.03963,-.65433],[.1971,-.17696,-.61136],[-.04337,-.19698,-.62868],[.37837,.01909,-.57081],[.1971,-.17696,-.61136],[.01244,.03963,-.65433],[.01244,.03963,-.65433],[-.3376,-.04033,-.58874],[-.17506,.15492,-.62341],[.37837,.01909,-.57081],[.01244,.03963,-.65433],[.34063,.20263,-.56516],[.11665,.25145,-.61073],[.34063,.20263,-.56516],[.01244,.03963,-.65433],[.01244,.03963,-.65433],[-.17506,.15492,-.62341],[.11665,.25145,-.61073],[.11665,.25145,-.61073],[-.17506,.15492,-.62341],[-.08109,.37466,-.57348],[-.09468,-.48945,-.52003],[-.24184,-.27035,-.57724],[-.04337,-.19698,-.62868],[.14043,-.39809,-.56076],[-.09468,-.48945,-.52003],[-.04337,-.19698,-.62868],[-.24184,-.27035,-.57724],[-.43483,-.18227,-.51937],[-.3376,-.04033,-.58874],[.45132,-.23308,-.49897],[.1971,-.17696,-.61136],[.37837,.01909,-.57081],[-.17506,.15492,-.62341],[-.3376,-.04033,-.58874],[-.293,.29611,-.55637],[-.17506,.15492,-.62341],[-.293,.29611,-.55637],[-.08109,.37466,-.57348],[.34063,.20263,-.56516],[.11665,.25145,-.61073],[.15023,.45011,-.52716],[.15023,.45011,-.52716],[.11665,.25145,-.61073],[-.08109,.37466,-.57348],[-.09468,-.48945,-.52003],[-.31814,-.46909,-.46241],[-.24184,-.27035,-.57724],[.45132,-.23308,-.49897],[.14043,-.39809,-.56076],[.1971,-.17696,-.61136],[-.3376,-.04033,-.58874],[-.50278,.16534,-.48292],[-.293,.29611,-.55637],[-.31814,-.46909,-.46241],[-.43483,-.18227,-.51937],[-.24184,-.27035,-.57724],[-.43473,.36425,-.45531],[-.293,.29611,-.55637],[-.50278,.16534,-.48292],[.15023,.45011,-.52716],[.43332,.40082,-.44096],[.34063,.20263,-.56516],[-.293,.29611,-.55637],[-.13663,.5273,-.47841],[-.08109,.37466,-.57348],[.15023,.45011,-.52716],[-.08109,.37466,-.57348],[-.13663,.5273,-.47841],[-.09468,-.48945,-.52003],[.14043,-.39809,-.56076],[.17115,-.57036,-.4546],[.39252,-.48832,-.40183],[.17115,-.57036,-.4546],[.14043,-.39809,-.56076],[.39252,-.48832,-.40183],[.14043,-.39809,-.56076],[.45132,-.23308,-.49897],[-.31814,-.46909,-.46241],[-.53017,-.36652,-.37266],[-.43483,-.18227,-.51937],[.65024,-.04219,-.36385],[.45132,-.23308,-.49897],[.37837,.01909,-.57081],[-.3376,-.04033,-.58874],[-.43483,-.18227,-.51937],[-.58974,-.11605,-.41882],[-.3376,-.04033,-.58874],[-.58974,-.11605,-.41882],[-.50278,.16534,-.48292],[.65024,-.04219,-.36385],[.37837,.01909,-.57081],[.55396,.17589,-.43859],[.37837,.01909,-.57081],[.34063,.20263,-.56516],[.55396,.17589,-.43859],[.43332,.40082,-.44096],[.55396,.17589,-.43859],[.34063,.20263,-.56516],[-.37025,.54762,-.36657],[-.293,.29611,-.55637],[-.43473,.36425,-.45531],[-.37025,.54762,-.36657],[-.13663,.5273,-.47841],[-.293,.29611,-.55637],[-.31814,-.46909,-.46241],[-.09468,-.48945,-.52003],[-.13537,-.67292,-.37206],[-.58974,-.11605,-.41882],[-.43483,-.18227,-.51937],[-.53017,-.36652,-.37266],[.15023,.45011,-.52716],[.31352,.58276,-.36436],[.43332,.40082,-.44096],[.31352,.58276,-.36436],[.15023,.45011,-.52716],[.13784,.64412,-.36845],[.15023,.45011,-.52716],[-.13663,.5273,-.47841],[-.03463,.67654,-.34847],[.13784,.64412,-.36845],[.15023,.45011,-.52716],[-.03463,.67654,-.34847],[.17115,-.57036,-.4546],[-.13537,-.67292,-.37206],[-.09468,-.48945,-.52003],[.45132,-.23308,-.49897],[.54725,-.38205,-.33822],[.39252,-.48832,-.40183],[-.58974,-.11605,-.41882],[-.65981,.16199,-.32715],[-.50278,.16534,-.48292],[.17115,-.57036,-.4546],[.11914,-.72176,-.31787],[-.13537,-.67292,-.37206],[-.13537,-.67292,-.37206],[-.36031,-.62397,-.29143],[-.31814,-.46909,-.46241],[.45132,-.23308,-.49897],[.65317,-.27688,-.27338],[.54725,-.38205,-.33822],[.45132,-.23308,-.49897],[.65024,-.04219,-.36385],[.65317,-.27688,-.27338],[-.59114,.40336,-.28151],[-.50278,.16534,-.48292],[-.65981,.16199,-.32715],[-.50278,.16534,-.48292],[-.59114,.40336,-.28151],[-.43473,.36425,-.45531],[-.43473,.36425,-.45531],[-.59114,.40336,-.28151],[-.37025,.54762,-.36657],[-.25516,.66737,-.28765],[-.13663,.5273,-.47841],[-.37025,.54762,-.36657],[-.13663,.5273,-.47841],[-.25516,.66737,-.28765],[-.03463,.67654,-.34847],[.36567,-.61818,-.29474],[.11914,-.72176,-.31787],[.17115,-.57036,-.4546],[.17115,-.57036,-.4546],[.39252,-.48832,-.40183],[.36567,-.61818,-.29474],[-.36031,-.62397,-.29143],[-.53017,-.36652,-.37266],[-.31814,-.46909,-.46241],[-.68859,-.12183,-.29152],[-.65981,.16199,-.32715],[-.58974,-.11605,-.41882],[.65024,-.04219,-.36385],[.55396,.17589,-.43859],[.69693,.19333,-.25691],[.69693,.19333,-.25691],[.55396,.17589,-.43859],[.63073,.34061,-.26999],[.55396,.17589,-.43859],[.43332,.40082,-.44096],[.63073,.34061,-.26999],[-.36031,-.62397,-.29143],[-.13537,-.67292,-.37206],[-.14816,-.77168,-.22503],[-.36031,-.62397,-.29143],[-.48683,-.5643,-.21811],[-.53017,-.36652,-.37266],[-.68859,-.12183,-.29152],[-.58974,-.11605,-.41882],[-.53017,-.36652,-.37266],[.43332,.40082,-.44096],[.55059,.50328,-.21788],[.63073,.34061,-.26999],[.43332,.40082,-.44096],[.31352,.58276,-.36436],[.55059,.50328,-.21788],[.55059,.50328,-.21788],[.31352,.58276,-.36436],[.34549,.66821,-.21715],[.39252,-.48832,-.40183],[.54725,-.38205,-.33822],[.36567,-.61818,-.29474],[.65317,-.27688,-.27338],[.65024,-.04219,-.36385],[.74631,-.17378,-.1338],[-.37025,.54762,-.36657],[-.59114,.40336,-.28151],[-.56975,.52621,-.13354],[.31352,.58276,-.36436],[.13784,.64412,-.36845],[.34549,.66821,-.21715],[.11914,-.72176,-.31787],[-.14816,-.77168,-.22503],[-.13537,-.67292,-.37206],[.11914,-.72176,-.31787],[.36567,-.61818,-.29474],[.35278,-.70078,-.16954],[.54725,-.38205,-.33822],[.54598,-.53634,-.14176],[.36567,-.61818,-.29474],[-.68859,-.12183,-.29152],[-.53017,-.36652,-.37266],[-.72305,-.20966,-.16879],[-.68859,-.12183,-.29152],[-.76906,.07997,-.10782],[-.65981,.16199,-.32715],[.65024,-.04219,-.36385],[.69693,.19333,-.25691],[.74803,.08257,-.16959],[-.25516,.66737,-.28765],[-.37025,.54762,-.36657],[-.34861,.6849,-.15795],[-.03463,.67654,-.34847],[-.25516,.66737,-.28765],[-.11018,.76186,-.15889],[-.03463,.67654,-.34847],[.10096,.74988,-.194],[.13784,.64412,-.36845],[.34549,.66821,-.21715],[.13784,.64412,-.36845],[.10096,.74988,-.194],[.11914,-.72176,-.31787],[.11905,-.8104,-.13261],[-.14816,-.77168,-.22503],[.11914,-.72176,-.31787],[.35278,-.70078,-.16954],[.11905,-.8104,-.13261],[-.14816,-.77168,-.22503],[-.35483,-.72112,-.09595],[-.36031,-.62397,-.29143],[.35278,-.70078,-.16954],[.36567,-.61818,-.29474],[.54598,-.53634,-.14176],[-.6071,-.47827,-.08914],[-.53017,-.36652,-.37266],[-.48683,-.5643,-.21811],[.65317,-.27688,-.27338],[.54598,-.53634,-.14176],[.54725,-.38205,-.33822],[-.53017,-.36652,-.37266],[-.6071,-.47827,-.08914],[-.72305,-.20966,-.16879],[.74803,.08257,-.16959],[.74631,-.17378,-.1338],[.65024,-.04219,-.36385],[-.73436,.2086,-.14672],[-.65981,.16199,-.32715],[-.76906,.07997,-.10782],[-.73436,.2086,-.14672],[-.59114,.40336,-.28151],[-.65981,.16199,-.32715],[-.37025,.54762,-.36657],[-.56975,.52621,-.13354],[-.34861,.6849,-.15795],[-.03463,.67654,-.34847],[-.11018,.76186,-.15889],[.10096,.74988,-.194],[-.36031,-.62397,-.29143],[-.35483,-.72112,-.09595],[-.48683,-.5643,-.21811],[-.72305,-.20966,-.16879],[-.76906,.07997,-.10782],[-.68859,-.12183,-.29152],[.69693,.19333,-.25691],[.63073,.34061,-.26999],[.67158,.40618,-.05326],[.63073,.34061,-.26999],[.55059,.50328,-.21788],[.67158,.40618,-.05326],[.49494,.60725,-.07122],[.55059,.50328,-.21788],[.34549,.66821,-.21715],[-.25516,.66737,-.28765],[-.34861,.6849,-.15795],[-.11018,.76186,-.15889],[-.22448,-.79082,-.05884],[-.35483,-.72112,-.09595],[-.14816,-.77168,-.22503],[.6409,-.43114,-.02609],[.54598,-.53634,-.14176],[.65317,-.27688,-.27338],[.6409,-.43114,-.02609],[.65317,-.27688,-.27338],[.74631,-.17378,-.1338],[-.56975,.52621,-.13354],[-.59114,.40336,-.28151],[-.73436,.2086,-.14672],[-.48571,.62261,.0098],[-.34861,.6849,-.15795],[-.56975,.52621,-.13354],[.10096,.74988,-.194],[.0539,.79258,.01399],[.28764,.73248,-.05452],[.34549,.66821,-.21715],[.10096,.74988,-.194],[.28764,.73248,-.05452],[.10096,.74988,-.194],[-.11018,.76186,-.15889],[.0539,.79258,.01399],[-.14816,-.77168,-.22503],[-.07187,-.83142,.02133],[-.22448,-.79082,-.05884],[.11905,-.8104,-.13261],[-.07187,-.83142,.02133],[-.14816,-.77168,-.22503],[.35278,-.70078,-.16954],[.3657,-.72074,.01075],[.11905,-.8104,-.13261],[-.6071,-.47827,-.08914],[-.48683,-.5643,-.21811],[-.35483,-.72112,-.09595],[.35278,-.70078,-.16954],[.54598,-.53634,-.14176],[.3657,-.72074,.01075],[-.6071,-.47827,-.08914],[-.7512,-.19772,.00452],[-.72305,-.20966,-.16879],[.74803,.08257,-.16959],[.69693,.19333,-.25691],[.74119,.24392,.03058],[-.76906,.07997,-.10782],[-.69414,.36473,.0064],[-.73436,.2086,-.14672],[.69693,.19333,-.25691],[.67158,.40618,-.05326],[.74119,.24392,.03058],[-.73436,.2086,-.14672],[-.69414,.36473,.0064],[-.56975,.52621,-.13354],[.55059,.50328,-.21788],[.49494,.60725,-.07122],[.67158,.40618,-.05326],[-.72305,-.20966,-.16879],[-.7512,-.19772,.00452],[-.76906,.07997,-.10782],[.74631,-.17378,-.1338],[.74803,.08257,-.16959],[.77526,.04179,.04341],[.77526,.04179,.04341],[.74803,.08257,-.16959],[.74119,.24392,.03058],[.28764,.73248,-.05452],[.49494,.60725,-.07122],[.34549,.66821,-.21715],[-.34861,.6849,-.15795],[-.48571,.62261,.0098],[-.19742,.76365,.05505],[-.11018,.76186,-.15889],[-.34861,.6849,-.15795],[-.19742,.76365,.05505],[-.11018,.76186,-.15889],[-.19742,.76365,.05505],[.0539,.79258,.01399],[.11905,-.8104,-.13261],[.15268,-.80765,.08499],[-.07187,-.83142,.02133],[.11905,-.8104,-.13261],[.3657,-.72074,.01075],[.15268,-.80765,.08499],[.4822,.61197,.09343],[.49494,.60725,-.07122],[.28764,.73248,-.05452],[-.42396,-.66011,.10695],[-.6071,-.47827,-.08914],[-.35483,-.72112,-.09595],[.54598,-.53634,-.14176],[.52582,-.55363,.12107],[.3657,-.72074,.01075],[.54598,-.53634,-.14176],[.6409,-.43114,-.02609],[.52582,-.55363,.12107],[.6409,-.43114,-.02609],[.74631,-.17378,-.1338],[.72477,-.22279,.11947],[.74119,.24392,.03058],[.67158,.40618,-.05326],[.6503,.4095,.10281],[.28764,.73248,-.05452],[.0539,.79258,.01399],[.24894,.73429,.11721],[-.17191,-.79014,.12266],[-.22448,-.79082,-.05884],[-.07187,-.83142,.02133],[-.42396,-.66011,.10695],[-.35483,-.72112,-.09595],[-.22448,-.79082,-.05884],[-.42396,-.66011,.10695],[-.61443,-.42974,.14705],[-.6071,-.47827,-.08914],[-.7512,-.19772,.00452],[-.6071,-.47827,-.08914],[-.61443,-.42974,.14705],[.72477,-.22279,.11947],[.74631,-.17378,-.1338],[.77526,.04179,.04341],[-.7512,-.19772,.00452],[-.75323,-.05405,.12441],[-.76906,.07997,-.10782],[-.75323,-.05405,.12441],[-.73492,.21269,.10585],[-.76906,.07997,-.10782],[-.76906,.07997,-.10782],[-.73492,.21269,.10585],[-.69414,.36473,.0064],[-.48571,.62261,.0098],[-.56975,.52621,-.13354],[-.69414,.36473,.0064],[.4822,.61197,.09343],[.67158,.40618,-.05326],[.49494,.60725,-.07122],[-.19742,.76365,.05505],[-.48571,.62261,.0098],[-.31399,.70061,.14049],[.28764,.73248,-.05452],[.24894,.73429,.11721],[.4822,.61197,.09343],[-.22448,-.79082,-.05884],[-.17191,-.79014,.12266],[-.42396,-.66011,.10695],[.73659,.05585,.19592],[.72477,-.22279,.11947],[.77526,.04179,.04341],[.4822,.61197,.09343],[.6503,.4095,.10281],[.67158,.40618,-.05326],[.6409,-.43114,-.02609],[.6105,-.38374,.2132],[.52582,-.55363,.12107],[.6105,-.38374,.2132],[.6409,-.43114,-.02609],[.72477,-.22279,.11947],[-.69414,.36473,.0064],[-.56485,.45119,.24245],[-.48571,.62261,.0098],[.4822,.61197,.09343],[.24894,.73429,.11721],[.43168,.60397,.19603],[-.17191,-.79014,.12266],[-.07187,-.83142,.02133],[.01944,-.72977,.32363],[.15268,-.80765,.08499],[.01944,-.72977,.32363],[-.07187,-.83142,.02133],[.3657,-.72074,.01075],[.36773,-.61798,.29371],[.15268,-.80765,.08499],[.3657,-.72074,.01075],[.52582,-.55363,.12107],[.36773,-.61798,.29371],[-.61443,-.42974,.14705],[-.66302,-.25617,.23779],[-.7512,-.19772,.00452],[-.66302,-.25617,.23779],[-.75323,-.05405,.12441],[-.7512,-.19772,.00452],[-.75323,-.05405,.12441],[-.71371,.06299,.23363],[-.73492,.21269,.10585],[-.73492,.21269,.10585],[-.56485,.45119,.24245],[-.69414,.36473,.0064],[-.31399,.70061,.14049],[-.48571,.62261,.0098],[-.4325,.56014,.26964],[.24894,.73429,.11721],[.0539,.79258,.01399],[.13842,.70964,.24637],[.74119,.24392,.03058],[.73659,.05585,.19592],[.77526,.04179,.04341],[-.71371,.06299,.23363],[-.64966,.26355,.26374],[-.73492,.21269,.10585],[.73659,.05585,.19592],[.74119,.24392,.03058],[.60093,.35992,.27625],[-.64966,.26355,.26374],[-.56485,.45119,.24245],[-.73492,.21269,.10585],[.6503,.4095,.10281],[.60093,.35992,.27625],[.74119,.24392,.03058],[-.48571,.62261,.0098],[-.56485,.45119,.24245],[-.4325,.56014,.26964],[-.19742,.76365,.05505],[-.0276,.71045,.26548],[.0539,.79258,.01399],[-.0276,.71045,.26548],[.13842,.70964,.24637],[.0539,.79258,.01399],[.01944,-.72977,.32363],[-.13693,-.71288,.32237],[-.17191,-.79014,.12266],[-.28912,-.66407,.29887],[-.42396,-.66011,.10695],[-.17191,-.79014,.12266],[-.13693,-.71288,.32237],[-.28912,-.66407,.29887],[-.17191,-.79014,.12266],[.36773,-.61798,.29371],[.26574,-.6781,.29795],[.15268,-.80765,.08499],[-.42396,-.66011,.10695],[-.28912,-.66407,.29887],[-.4088,-.57591,.29514],[-.61443,-.42974,.14705],[-.42396,-.66011,.10695],[-.4088,-.57591,.29514],[.4822,.61197,.09343],[.60093,.35992,.27625],[.6503,.4095,.10281],[.60093,.35992,.27625],[.4822,.61197,.09343],[.43168,.60397,.19603],[-.31399,.70061,.14049],[-.0276,.71045,.26548],[-.19742,.76365,.05505],[.15268,-.80765,.08499],[.26574,-.6781,.29795],[.01944,-.72977,.32363],[-.4088,-.57591,.29514],[-.46476,-.42426,.37741],[-.61443,-.42974,.14705],[.52582,-.55363,.12107],[.6105,-.38374,.2132],[.36773,-.61798,.29371],[.60944,-.17954,.35739],[.6105,-.38374,.2132],[.72477,-.22279,.11947],[-.66302,-.25617,.23779],[-.71371,.06299,.23363],[-.75323,-.05405,.12441],[.72477,-.22279,.11947],[.73659,.05585,.19592],[.60944,-.17954,.35739],[.43168,.60397,.19603],[.24894,.73429,.11721],[.36749,.55352,.33141],[.36749,.55352,.33141],[.24894,.73429,.11721],[.13842,.70964,.24637],[-.66302,-.25617,.23779],[-.58514,-.18876,.37583],[-.71371,.06299,.23363],[.43168,.60397,.19603],[.36749,.55352,.33141],[.60093,.35992,.27625],[-.4325,.56014,.26964],[-.18311,.62117,.35615],[-.31399,.70061,.14049],[-.18311,.62117,.35615],[-.0276,.71045,.26548],[-.31399,.70061,.14049],[.01944,-.72977,.32363],[.26574,-.6781,.29795],[.15503,-.70378,.35908],[.36773,-.61798,.29371],[.6105,-.38374,.2132],[.46513,-.48235,.32667],[-.61443,-.42974,.14705],[-.46476,-.42426,.37741],[-.66302,-.25617,.23779],[.60944,-.17954,.35739],[.73659,.05585,.19592],[.59801,.05141,.39428],[-.59341,.06302,.39512],[-.64966,.26355,.26374],[-.71371,.06299,.23363],[.6105,-.38374,.2132],[.44523,-.36861,.41863],[.46513,-.48235,.32667],[-.66302,-.25617,.23779],[-.46476,-.42426,.37741],[-.58514,-.18876,.37583],[.60944,-.17954,.35739],[.44523,-.36861,.41863],[.6105,-.38374,.2132],[-.71371,.06299,.23363],[-.58514,-.18876,.37583],[-.59341,.06302,.39512],[.59801,.05141,.39428],[.73659,.05585,.19592],[.60093,.35992,.27625],[-.48176,.22976,.45593],[-.56485,.45119,.24245],[-.64966,.26355,.26374],[-.64966,.26355,.26374],[-.59341,.06302,.39512],[-.48176,.22976,.45593],[.40649,.37521,.44208],[.60093,.35992,.27625],[.36749,.55352,.33141],[.18863,.50787,.45215],[.36749,.55352,.33141],[.13842,.70964,.24637],[-.00391,.54831,.44725],[-.0276,.71045,.26548],[-.18311,.62117,.35615],[.13842,.70964,.24637],[-.0276,.71045,.26548],[-.00391,.54831,.44725],[.18863,.50787,.45215],[.13842,.70964,.24637],[-.00391,.54831,.44725],[-.46476,-.42426,.37741],[-.4088,-.57591,.29514],[-.40049,-.47304,.5814],[.40649,.37521,.44208],[.59801,.05141,.39428],[.60093,.35992,.27625],[-.56485,.45119,.24245],[-.48176,.22976,.45593],[-.29748,.46253,.44156],[-.56485,.45119,.24245],[-.29748,.46253,.44156],[-.4325,.56014,.26964],[-.18311,.62117,.35615],[-.4325,.56014,.26964],[-.29748,.46253,.44156],[-.28912,-.66407,.29887],[-.2188,-.65434,.57237],[-.33443,-.60172,.52584],[.26574,-.6781,.29795],[.3202,-.6167,.52594],[.15503,-.70378,.35908],[-.28912,-.66407,.29887],[-.33443,-.60172,.52584],[-.4088,-.57591,.29514],[.3202,-.6167,.52594],[.26574,-.6781,.29795],[.36773,-.61798,.29371],[.3202,-.6167,.52594],[.36773,-.61798,.29371],[.46513,-.48235,.32667],[.40488,-.47116,.57094],[.3202,-.6167,.52594],[.46513,-.48235,.32667],[.41369,.12041,.51475],[.59801,.05141,.39428],[.40649,.37521,.44208],[.40649,.37521,.44208],[.36749,.55352,.33141],[.18863,.50787,.45215],[.15503,-.70378,.35908],[.10956,-.69164,.53098],[.01944,-.72977,.32363],[-.2188,-.65434,.57237],[-.28912,-.66407,.29887],[-.13693,-.71288,.32237],[-.13693,-.71288,.32237],[.01944,-.72977,.32363],[-.2188,-.65434,.57237],[.3202,-.6167,.52594],[.10956,-.69164,.53098],[.15503,-.70378,.35908],[.46513,-.48235,.32667],[.44523,-.36861,.41863],[.40488,-.47116,.57094],[-.58514,-.18876,.37583],[-.46476,-.42426,.37741],[-.37364,-.29473,.51032],[.44523,-.36861,.41863],[.60944,-.17954,.35739],[.35229,-.05217,.57402],[-.00391,.54831,.44725],[-.18311,.62117,.35615],[-.29748,.46253,.44156],[-.40049,-.47304,.5814],[-.4088,-.57591,.29514],[-.33443,-.60172,.52584],[.35229,-.05217,.57402],[.34474,-.27869,.54919],[.44523,-.36861,.41863],[-.37364,-.29473,.51032],[-.37286,-.03391,.55027],[-.58514,-.18876,.37583],[-.37286,-.03391,.55027],[-.59341,.06302,.39512],[-.58514,-.18876,.37583],[.60944,-.17954,.35739],[.59801,.05141,.39428],[.35229,-.05217,.57402],[.59801,.05141,.39428],[.41369,.12041,.51475],[.35229,-.05217,.57402],[-.37286,-.03391,.55027],[-.48176,.22976,.45593],[-.59341,.06302,.39512],[-.48176,.22976,.45593],[-.18967,.3281,.54821],[-.29748,.46253,.44156],[-.00391,.54831,.44725],[-.29748,.46253,.44156],[-.18967,.3281,.54821],[.01944,-.72977,.32363],[-.05709,-.6569,.65743],[-.2188,-.65434,.57237],[.01944,-.72977,.32363],[.10956,-.69164,.53098],[-.05709,-.6569,.65743],[-.40049,-.47304,.5814],[-.37364,-.29473,.51032],[-.46476,-.42426,.37741],[.34474,-.27869,.54919],[.40488,-.47116,.57094],[.44523,-.36861,.41863],[-.37286,-.03391,.55027],[-.26317,.10299,.58809],[-.48176,.22976,.45593],[.40649,.37521,.44208],[.12757,.26479,.58135],[.41369,.12041,.51475],[.40649,.37521,.44208],[.18863,.50787,.45215],[.12757,.26479,.58135],[-.18967,.3281,.54821],[.12757,.26479,.58135],[-.00391,.54831,.44725],[-.00391,.54831,.44725],[.12757,.26479,.58135],[.18863,.50787,.45215],[-.48176,.22976,.45593],[-.26317,.10299,.58809],[-.18967,.3281,.54821],[-.40049,-.47304,.5814],[-.30683,-.28865,.62034],[-.37364,-.29473,.51032],[-.30683,-.28865,.62034],[-.37286,-.03391,.55027],[-.37364,-.29473,.51032],[-.37286,-.03391,.55027],[-.31521,-.041,.64376],[-.26317,.10299,.58809],[.31082,-.025,.63542],[.35229,-.05217,.57402],[.41369,.12041,.51475],[.31082,-.025,.63542],[.41369,.12041,.51475],[.23445,.07663,.60478],[.23445,.07663,.60478],[.41369,.12041,.51475],[.12757,.26479,.58135],[.23445,.07663,.60478],[.12757,.26479,.58135],[.02664,.1159,.61816],[.10956,-.69164,.53098],[.14664,-.61421,.69739],[-.05709,-.6569,.65743],[.10956,-.69164,.53098],[.3202,-.6167,.52594],[.14664,-.61421,.69739],[-.33443,-.60172,.52584],[-.2188,-.65434,.57237],[-.22372,-.55672,.72033],[-.40049,-.47304,.5814],[-.33443,-.60172,.52584],[-.22372,-.55672,.72033],[.29041,-.49488,.70983],[.3202,-.6167,.52594],[.40488,-.47116,.57094],[.35229,-.05217,.57402],[.30876,-.25959,.649],[.34474,-.27869,.54919],[-.30683,-.28865,.62034],[-.31521,-.041,.64376],[-.37286,-.03391,.55027],[-.31521,-.041,.64376],[-.22214,.03708,.66938],[-.26317,.10299,.58809],[.12757,.26479,.58135],[-.18967,.3281,.54821],[-.26317,.10299,.58809],[.02664,.1159,.61816],[.12757,.26479,.58135],[-.26317,.10299,.58809],[.3202,-.6167,.52594],[.29041,-.49488,.70983],[.14664,-.61421,.69739],[-.27663,-.45879,.72176],[-.40049,-.47304,.5814],[-.22372,-.55672,.72033],[.22516,-.35282,.74039],[.40488,-.47116,.57094],[.34474,-.27869,.54919],[.30876,-.25959,.649],[.35229,-.05217,.57402],[.31082,-.025,.63542],[.23396,.03461,.68759],[.31082,-.025,.63542],[.23445,.07663,.60478],[.02664,.1159,.61816],[-.26317,.10299,.58809],[-.22214,.03708,.66938],[.23396,.03461,.68759],[.02664,.1159,.61816],[-.22214,.03708,.66938],[.23445,.07663,.60478],[.02664,.1159,.61816],[.23396,.03461,.68759],[-.05709,-.6569,.65743],[-.22372,-.55672,.72033],[-.2188,-.65434,.57237],[.29041,-.49488,.70983],[.40488,-.47116,.57094],[.22516,-.35282,.74039],[-.27663,-.45879,.72176],[-.22514,-.35279,.74602],[-.30683,-.28865,.62034],[-.40049,-.47304,.5814],[-.27663,-.45879,.72176],[-.30683,-.28865,.62034],[.34474,-.27869,.54919],[.30876,-.25959,.649],[.22516,-.35282,.74039],[-.22214,.03708,.66938],[-.31521,-.041,.64376],[-.23883,.02124,.83452],[-.22372,-.55672,.72033],[-.05709,-.6569,.65743],[-.10058,-.50557,.79989],[.09576,-.50442,.80439],[-.10058,-.50557,.79989],[-.05709,-.6569,.65743],[.14664,-.61421,.69739],[.09576,-.50442,.80439],[-.05709,-.6569,.65743],[.14664,-.61421,.69739],[.29041,-.49488,.70983],[.09576,-.50442,.80439],[-.12158,-.37167,.78198],[-.22514,-.35279,.74602],[-.27663,-.45879,.72176],[.29041,-.49488,.70983],[.22516,-.35282,.74039],[.10424,-.35486,.791],[-.26161,-.28056,.88174],[-.30683,-.28865,.62034],[-.22514,-.35279,.74602],[-.30009,-.25432,.83723],[-.30683,-.28865,.62034],[-.26161,-.28056,.88174],[.22516,-.35282,.74039],[.30876,-.25959,.649],[.26138,-.28083,.88111],[-.30049,-.04834,.83824],[-.23883,.02124,.83452],[-.31521,-.041,.64376],[.31082,-.025,.63542],[.23396,.03461,.68759],[.30057,-.049,.83882],[-.10058,-.50557,.79989],[-.27663,-.45879,.72176],[-.22372,-.55672,.72033],[.29041,-.49488,.70983],[.10424,-.35486,.791],[.09576,-.50442,.80439],[-.12158,-.37167,.78198],[-.27663,-.45879,.72176],[-.10058,-.50557,.79989],[.30876,-.25959,.649],[.30021,-.25369,.83696],[.26138,-.28083,.88111],[-.30683,-.28865,.62034],[-.30009,-.25432,.83723],[-.31521,-.041,.64376],[.30876,-.25959,.649],[.31082,-.025,.63542],[.30021,-.25369,.83696],[-.31521,-.041,.64376],[-.30009,-.25432,.83723],[-.30049,-.04834,.83824],[.31082,-.025,.63542],[.30057,-.049,.83882],[.30021,-.25369,.83696],[.23396,.03461,.68759],[.23708,.02079,.83554],[.30057,-.049,.83882],[.23396,.03461,.68759],[-.22214,.03708,.66938],[-.23883,.02124,.83452],[.23396,.03461,.68759],[-.23883,.02124,.83452],[.23708,.02079,.83554],[.09576,-.50442,.80439],[-.12158,-.37167,.78198],[-.10058,-.50557,.79989],[.10424,-.35486,.791],[-.12158,-.37167,.78198],[.09576,-.50442,.80439],[-.22514,-.35279,.74602],[-.12158,-.37167,.78198],[.10424,-.35486,.791],[.10424,-.35486,.791],[-.26161,-.28056,.88174],[-.22514,-.35279,.74602],[.26138,-.28083,.88111],[.10424,-.35486,.791],[.22516,-.35282,.74039],[.10424,-.35486,.791],[.26138,-.28083,.88111],[-.26161,-.28056,.88174],[-.21905,-.05322,.89362],[-.30009,-.25432,.83723],[-.26161,-.28056,.88174],[-.30049,-.04834,.83824],[-.30009,-.25432,.83723],[-.21905,-.05322,.89362],[.30057,-.049,.83882],[.26138,-.28083,.88111],[.30021,-.25369,.83696],[.21754,-.05497,.89421],[.26138,-.28083,.88111],[.30057,-.049,.83882],[-.23883,.02124,.83452],[-.30049,-.04834,.83824],[-.21905,-.05322,.89362],[-.23883,.02124,.83452],[-.21905,-.05322,.89362],[.23708,.02079,.83554],[-.21905,-.05322,.89362],[.21754,-.05497,.89421],[.23708,.02079,.83554],[.30057,-.049,.83882],[.23708,.02079,.83554],[.21754,-.05497,.89421],[.21754,-.05497,.89421],[-.21905,-.05322,.89362],[-.26161,-.28056,.88174],[.26138,-.28083,.88111],[.21754,-.05497,.89421],[-.26161,-.28056,.88174]],k3=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959],Ac=[.07181,.63707,-.34657,-.07916,.5543,-.33103,-.04883,.73889,-.35594,-.04883,.73889,-.35594,.11541,.74427,-.34329,.07181,.63707,-.34657,.11541,.74427,-.34329,-.04883,.73889,-.35594,-.04902,.8544,-.33784,.07181,.63707,-.34657,.00305,.47744,-.30526,-.07916,.5543,-.33103,.14868,.5556,-.30741,.00305,.47744,-.30526,.07181,.63707,-.34657,.11541,.74427,-.34329,.14868,.5556,-.30741,.07181,.63707,-.34657,-.07916,.5543,-.33103,-.18828,.74934,-.31387,-.04883,.73889,-.35594,-.04902,.8544,-.33784,-.04883,.73889,-.35594,-.18828,.74934,-.31387,.11541,.74427,-.34329,-.04902,.8544,-.33784,.06807,.92498,-.30714,.06807,.92498,-.30714,.19448,.87179,-.28333,.11541,.74427,-.34329,.0866,.37447,-.23585,.00305,.47744,-.30526,.14868,.5556,-.30741,-.21042,.54067,-.26932,-.18828,.74934,-.31387,-.07916,.5543,-.33103,.26807,.67844,-.25699,.14868,.5556,-.30741,.11541,.74427,-.34329,.26807,.67844,-.25699,.11541,.74427,-.34329,.19448,.87179,-.28333,-.04902,.8544,-.33784,-.18828,.74934,-.31387,-.20485,.95674,-.23285,-.20485,.95674,-.23285,-.06313,1.01511,-.25995,-.04902,.8544,-.33784,.06807,.92498,-.30714,-.04902,.8544,-.33784,-.06313,1.01511,-.25995,-.01254,.30076,-.19524,.00305,.47744,-.30526,.0866,.37447,-.23585,-.01254,.30076,-.19524,-.13833,.32306,-.1771,-.07916,.5543,-.33103,-.13833,.32306,-.1771,-.21042,.54067,-.26932,-.07916,.5543,-.33103,-.01254,.30076,-.19524,-.07916,.5543,-.33103,.00305,.47744,-.30526,.1932,.4033,-.20272,.0866,.37447,-.23585,.14868,.5556,-.30741,.25719,.51093,-.21368,.1932,.4033,-.20272,.14868,.5556,-.30741,.25719,.51093,-.21368,.14868,.5556,-.30741,.26807,.67844,-.25699,-.21042,.54067,-.26932,-.3042,.62924,-.21381,-.18828,.74934,-.31387,-.3042,.62924,-.21381,-.27486,.83045,-.23119,-.18828,.74934,-.31387,-.18828,.74934,-.31387,-.27486,.83045,-.23119,-.20485,.95674,-.23285,-.06313,1.01511,-.25995,.08559,1.0634,-.21192,.06807,.92498,-.30714,.19448,.87179,-.28333,.06807,.92498,-.30714,.08559,1.0634,-.21192,.23103,.97392,-.19903,.19448,.87179,-.28333,.08559,1.0634,-.21192,-.13833,.32306,-.1771,-.24244,.40498,-.16103,-.21042,.54067,-.26932,-.3042,.62924,-.21381,-.21042,.54067,-.26932,-.24244,.40498,-.16103,.32978,.8302,-.16793,.26807,.67844,-.25699,.19448,.87179,-.28333,.23103,.97392,-.19903,.32978,.8302,-.16793,.19448,.87179,-.28333,-.1979,1.06616,-.13821,-.06313,1.01511,-.25995,-.20485,.95674,-.23285,-.08741,1.1119,-.15133,-.06313,1.01511,-.25995,-.1979,1.06616,-.13821,.25719,.51093,-.21368,.26807,.67844,-.25699,.33429,.56342,-.14218,.26807,.67844,-.25699,.36588,.7001,-.12682,.33429,.56342,-.14218,-.35466,.62895,-.13563,-.35068,.82146,-.13293,-.3042,.62924,-.21381,.26807,.67844,-.25699,.32978,.8302,-.16793,.36588,.7001,-.12682,-.3042,.62924,-.21381,-.35068,.82146,-.13293,-.27486,.83045,-.23119,-.27486,.83045,-.23119,-.35068,.82146,-.13293,-.30254,.93657,-.13639,-.27486,.83045,-.23119,-.30254,.93657,-.13639,-.20485,.95674,-.23285,-.08741,1.1119,-.15133,.08559,1.0634,-.21192,-.06313,1.01511,-.25995,.0866,.37447,-.23585,.16615,.23687,-.07383,-.01254,.30076,-.19524,.16615,.23687,-.07383,.0866,.37447,-.23585,.1932,.4033,-.20272,.25719,.51093,-.21368,.26171,.31962,-.06085,.1932,.4033,-.20272,.25719,.51093,-.21368,.33429,.56342,-.14218,.26171,.31962,-.06085,-.3042,.62924,-.21381,-.29299,.37931,-.07155,-.35466,.62895,-.13563,-.24244,.40498,-.16103,-.29299,.37931,-.07155,-.3042,.62924,-.21381,-.20485,.95674,-.23285,-.30254,.93657,-.13639,-.1979,1.06616,-.13821,.08559,1.0634,-.21192,.17695,1.09627,-.10552,.23103,.97392,-.19903,.28145,1.01023,-.09151,.23103,.97392,-.19903,.17695,1.09627,-.10552,.08559,1.0634,-.21192,-.08741,1.1119,-.15133,.04519,1.14679,-.10285,.17695,1.09627,-.10552,.08559,1.0634,-.21192,.04519,1.14679,-.10285,-.10714,.18487,-.04762,-.01254,.30076,-.19524,.05523,.19124,-.07671,-.01254,.30076,-.19524,-.10714,.18487,-.04762,-.13833,.32306,-.1771,.16615,.23687,-.07383,.05523,.19124,-.07671,-.01254,.30076,-.19524,-.13833,.32306,-.1771,-.23273,.25421,-.01574,-.24244,.40498,-.16103,.26171,.31962,-.06085,.16615,.23687,-.07383,.1932,.4033,-.20272,-.35466,.62895,-.13563,-.39538,.793,-.01643,-.35068,.82146,-.13293,.32978,.8302,-.16793,.36638,.87295,-.06056,.36588,.7001,-.12682,.36638,.87295,-.06056,.32978,.8302,-.16793,.28145,1.01023,-.09151,.32978,.8302,-.16793,.23103,.97392,-.19903,.28145,1.01023,-.09151,-.23273,.25421,-.01574,-.13833,.32306,-.1771,-.10714,.18487,-.04762,-.24244,.40498,-.16103,-.23273,.25421,-.01574,-.29299,.37931,-.07155,.34504,.42484,.01031,.26171,.31962,-.06085,.33429,.56342,-.14218,-.35466,.62895,-.13563,-.29299,.37931,-.07155,-.341,.39935,.02678,-.35466,.62895,-.13563,-.341,.39935,.02678,-.40363,.66078,.01307,.34504,.42484,.01031,.33429,.56342,-.14218,.39688,.65503,-.01682,-.39538,.793,-.01643,-.35466,.62895,-.13563,-.40363,.66078,.01307,.33429,.56342,-.14218,.36588,.7001,-.12682,.39688,.65503,-.01682,-.30254,.93657,-.13639,-.35068,.82146,-.13293,-.32651,.97486,-.03189,-.32651,.97486,-.03189,-.1979,1.06616,-.13821,-.30254,.93657,-.13639,-.1979,1.06616,-.13821,-.32651,.97486,-.03189,-.2235,1.10061,-.00208,-.12183,1.15404,-.02157,-.08741,1.1119,-.15133,-.1979,1.06616,-.13821,.04519,1.14679,-.10285,.12241,1.15655,-.01158,.17695,1.09627,-.10552,-.08741,1.1119,-.15133,-.12183,1.15404,-.02157,.01049,1.18227,58e-5,.04519,1.14679,-.10285,-.08741,1.1119,-.15133,.01049,1.18227,58e-5,.39688,.65503,-.01682,.36588,.7001,-.12682,.36638,.87295,-.06056,-.39538,.793,-.01643,-.32651,.97486,-.03189,-.35068,.82146,-.13293,.23783,1.09501,.04431,.28145,1.01023,-.09151,.17695,1.09627,-.10552,-.1979,1.06616,-.13821,-.2235,1.10061,-.00208,-.12183,1.15404,-.02157,.23783,1.09501,.04431,.17695,1.09627,-.10552,.12241,1.15655,-.01158,.01049,1.18227,58e-5,.12241,1.15655,-.01158,.04519,1.14679,-.10285,.05523,.19124,-.07671,.034,.05807,.13319,-.10714,.18487,-.04762,.034,.05807,.13319,.05523,.19124,-.07671,.17343,.09298,.16548,.05523,.19124,-.07671,.16615,.23687,-.07383,.17343,.09298,.16548,-.10714,.18487,-.04762,-.19493,.07553,.2248,-.23273,.25421,-.01574,.39688,.65503,-.01682,.36638,.87295,-.06056,.40163,.73571,.10363,.28145,1.01023,-.09151,.34234,.96582,.07418,.36638,.87295,-.06056,.34234,.96582,.07418,.28145,1.01023,-.09151,.23783,1.09501,.04431,.16615,.23687,-.07383,.26171,.31962,-.06085,.25308,.21277,.10172,-.29299,.37931,-.07155,-.23273,.25421,-.01574,-.341,.39935,.02678,.30997,.27245,.18295,.25308,.21277,.10172,.26171,.31962,-.06085,.26171,.31962,-.06085,.34504,.42484,.01031,.30997,.27245,.18295,.37241,.48556,.10687,.34504,.42484,.01031,.39688,.65503,-.01682,.40163,.73571,.10363,.36638,.87295,-.06056,.34234,.96582,.07418,-.39538,.793,-.01643,-.32255,.9912,.08037,-.32651,.97486,-.03189,-.32255,.9912,.08037,-.2235,1.10061,-.00208,-.32651,.97486,-.03189,-.12183,1.15404,-.02157,-.2235,1.10061,-.00208,-.09593,1.16796,.09752,.01049,1.18227,58e-5,-.12183,1.15404,-.02157,-.09593,1.16796,.09752,-.11827,.02816,.23515,-.19493,.07553,.2248,-.10714,.18487,-.04762,.16615,.23687,-.07383,.25308,.21277,.10172,.17343,.09298,.16548,-.341,.39935,.02678,-.37406,.51041,.1541,-.40363,.66078,.01307,.37241,.48556,.10687,.39688,.65503,-.01682,.40163,.73571,.10363,-.40363,.66078,.01307,-.3737,.85098,.13867,-.39538,.793,-.01643,-.39538,.793,-.01643,-.3737,.85098,.13867,-.32255,.9912,.08037,-.24236,1.07703,.11838,-.2235,1.10061,-.00208,-.32255,.9912,.08037,-.2235,1.10061,-.00208,-.24236,1.07703,.11838,-.09593,1.16796,.09752,.09762,1.16009,.1314,.23783,1.09501,.04431,.12241,1.15655,-.01158,.09762,1.16009,.1314,.12241,1.15655,-.01158,.01049,1.18227,58e-5,-.11827,.02816,.23515,-.10714,.18487,-.04762,.034,.05807,.13319,-.32385,.29704,.21924,-.341,.39935,.02678,-.23273,.25421,-.01574,.01049,1.18227,58e-5,-.09593,1.16796,.09752,.09762,1.16009,.1314,.17343,.09298,.16548,.08406,.0254,.22967,.034,.05807,.13319,-.19493,.07553,.2248,-.25954,.09093,.30598,-.23273,.25421,-.01574,.17343,.09298,.16548,.25308,.21277,.10172,.27483,.1072,.30121,.30997,.27245,.18295,.34504,.42484,.01031,.37241,.48556,.10687,-.37406,.51041,.1541,-.36296,.78597,.21247,-.40363,.66078,.01307,-.40363,.66078,.01307,-.36296,.78597,.21247,-.3737,.85098,.13867,.40163,.73571,.10363,.34234,.96582,.07418,.36763,.8045,.1961,-.28691,.97495,.21953,-.32255,.9912,.08037,-.3737,.85098,.13867,-.32255,.9912,.08037,-.28691,.97495,.21953,-.24236,1.07703,.11838,.27068,.99963,.2189,.34234,.96582,.07418,.23783,1.09501,.04431,.17259,1.0926,.20862,.27068,.99963,.2189,.23783,1.09501,.04431,-.24236,1.07703,.11838,-.1667,1.08908,.2229,-.09593,1.16796,.09752,.17259,1.0926,.20862,.23783,1.09501,.04431,.09762,1.16009,.1314,.09762,1.16009,.1314,-.09593,1.16796,.09752,-.04519,1.14679,.19285,.30997,.27245,.18295,.37241,.48556,.10687,.32879,.37043,.27993,-.341,.39935,.02678,-.32385,.29704,.21924,-.37406,.51041,.1541,.32879,.37043,.27993,.37241,.48556,.10687,.40163,.73571,.10363,.27068,.99963,.2189,.36763,.8045,.1961,.34234,.96582,.07418,-.24236,1.07703,.11838,-.28691,.97495,.21953,-.1667,1.08908,.2229,-.1667,1.08908,.2229,-.04519,1.14679,.19285,-.09593,1.16796,.09752,.09762,1.16009,.1314,-.04519,1.14679,.19285,.0079,1.11648,.25714,-.11827,.02816,.23515,.034,.05807,.13319,.08406,.0254,.22967,-.32385,.29704,.21924,-.23273,.25421,-.01574,-.32549,.16365,.36216,.27483,.1072,.30121,.25308,.21277,.10172,.30997,.27245,.18295,-.32385,.29704,.21924,-.32146,.39164,.3157,-.37406,.51041,.1541,.32879,.37043,.27993,.40163,.73571,.10363,.31477,.4387,.33717,-.32146,.39164,.3157,-.36296,.78597,.21247,-.37406,.51041,.1541,.31477,.4387,.33717,.40163,.73571,.10363,.36763,.8045,.1961,-.28691,.97495,.21953,-.3737,.85098,.13867,-.36296,.78597,.21247,.09762,1.16009,.1314,.0079,1.11648,.25714,.17259,1.0926,.20862,.08406,.0254,.22967,.17343,.09298,.16548,.18455,.02498,.33638,-.23273,.25421,-.01574,-.25954,.09093,.30598,-.32549,.16365,.36216,.31889,.84296,.26662,.36763,.8045,.1961,.27068,.99963,.2189,.27068,.99963,.2189,.17259,1.0926,.20862,.16553,1.02212,.29736,.0079,1.11648,.25714,-.04519,1.14679,.19285,-.1667,1.08908,.2229,-.19493,.07553,.2248,-.11827,.02816,.23515,-.22341,.02506,.4485,.17343,.09298,.16548,.27483,.1072,.30121,.18455,.02498,.33638,.34715,.17011,.44934,.27483,.1072,.30121,.30997,.27245,.18295,.31477,.4387,.33717,.36763,.8045,.1961,.31889,.84296,.26662,-.36296,.78597,.21247,-.27832,.50612,.38887,-.27038,.83141,.32442,-.28691,.97495,.21953,-.27038,.83141,.32442,-.19468,.92128,.35264,-.28691,.97495,.21953,-.36296,.78597,.21247,-.27038,.83141,.32442,.2594,.85234,.32735,.31889,.84296,.26662,.27068,.99963,.2189,-.19468,.92128,.35264,-.1667,1.08908,.2229,-.28691,.97495,.21953,-.19468,.92128,.35264,-.0806,1.0179,.34204,-.1667,1.08908,.2229,.06035,1.02573,.33998,.16553,1.02212,.29736,.17259,1.0926,.20862,.17259,1.0926,.20862,.0079,1.11648,.25714,.06035,1.02573,.33998,-.25954,.09093,.30598,-.19493,.07553,.2248,-.22341,.02506,.4485,-.36296,.78597,.21247,-.32146,.39164,.3157,-.27832,.50612,.38887,.2594,.85234,.32735,.27068,.99963,.2189,.15525,.90935,.3769,.27068,.99963,.2189,.16553,1.02212,.29736,.15525,.90935,.3769,.0079,1.11648,.25714,-.1667,1.08908,.2229,-.0806,1.0179,.34204,-.0806,1.0179,.34204,.06035,1.02573,.33998,.0079,1.11648,.25714,-.11827,.02816,.23515,.08406,.0254,.22967,-.22341,.02506,.4485,.18455,.02498,.33638,.27483,.1072,.30121,.22565,.02606,.46096,-.32549,.16365,.36216,-.35596,.22643,.49503,-.32385,.29704,.21924,.30997,.27245,.18295,.32879,.37043,.27993,.34715,.17011,.44934,-.35596,.22643,.49503,-.32146,.39164,.3157,-.32385,.29704,.21924,-.27832,.50612,.38887,-.32146,.39164,.3157,-.2863,.42836,.44284,.31889,.84296,.26662,.23773,.52769,.43417,.31477,.4387,.33717,.2594,.85234,.32735,.23773,.52769,.43417,.31889,.84296,.26662,-.17802,.55913,.47036,-.27038,.83141,.32442,-.27832,.50612,.38887,-.19468,.92128,.35264,-.10438,.91607,.39372,-.0806,1.0179,.34204,.15525,.90935,.3769,.16553,1.02212,.29736,.06035,1.02573,.33998,-.25954,.09093,.30598,-.22341,.02506,.4485,-.29752,.09414,.4538,.34715,.17011,.44934,.22565,.02606,.46096,.27483,.1072,.30121,-.29752,.09414,.4538,-.32549,.16365,.36216,-.25954,.09093,.30598,.34715,.17011,.44934,.32879,.37043,.27993,.35599,.23838,.48563,.31477,.4387,.33717,.23773,.52769,.43417,.26616,.4475,.46999,-.19468,.92128,.35264,-.27038,.83141,.32442,-.17802,.55913,.47036,.02084,.88981,.41544,-.0806,1.0179,.34204,-.10438,.91607,.39372,.06035,1.02573,.33998,-.0806,1.0179,.34204,.02084,.88981,.41544,.15525,.90935,.3769,.06035,1.02573,.33998,.02084,.88981,.41544,.08406,.0254,.22967,.1103,.02525,.66792,-.22341,.02506,.4485,.18455,.02498,.33638,.22565,.02606,.46096,.08406,.0254,.22967,.08406,.0254,.22967,.22565,.02606,.46096,.1103,.02525,.66792,-.32549,.16365,.36216,-.29752,.09414,.4538,-.35596,.22643,.49503,.32879,.37043,.27993,.31477,.4387,.33717,.26616,.4475,.46999,-.2863,.42836,.44284,-.20248,.46785,.55112,-.27832,.50612,.38887,-.18382,.51488,.50025,-.17802,.55913,.47036,-.27832,.50612,.38887,.23773,.52769,.43417,.2594,.85234,.32735,.15525,.90935,.3769,-.03642,.60785,.50484,-.10438,.91607,.39372,-.19468,.92128,.35264,.02084,.88981,.41544,-.10438,.91607,.39372,-.03642,.60785,.50484,.15525,.90935,.3769,.02084,.88981,.41544,.11223,.60671,.48361,-.35596,.22643,.49503,-.3077,.35457,.58447,-.32146,.39164,.3157,.35599,.23838,.48563,.32879,.37043,.27993,.30219,.36961,.56803,.32879,.37043,.27993,.26616,.4475,.46999,.30219,.36961,.56803,-.3077,.35457,.58447,-.2863,.42836,.44284,-.32146,.39164,.3157,-.27832,.50612,.38887,-.20248,.46785,.55112,-.18382,.51488,.50025,.23773,.52769,.43417,.15525,.90935,.3769,.11223,.60671,.48361,-.17802,.55913,.47036,-.03642,.60785,.50484,-.19468,.92128,.35264,.11223,.60671,.48361,.02084,.88981,.41544,-.03642,.60785,.50484,-.29752,.09414,.4538,-.22341,.02506,.4485,-.26608,.08958,.59996,.13101,.50737,.55336,.26616,.4475,.46999,.23773,.52769,.43417,.23773,.52769,.43417,.11223,.60671,.48361,.13101,.50737,.55336,-.22341,.02506,.4485,.1103,.02525,.66792,-.10138,.02523,.67457,.25835,.09116,.62347,.22565,.02606,.46096,.34715,.17011,.44934,-.31437,.16767,.603,-.29752,.09414,.4538,-.26608,.08958,.59996,-.31437,.16767,.603,-.35596,.22643,.49503,-.29752,.09414,.4538,-.03642,.60785,.50484,-.17802,.55913,.47036,-.01247,.52209,.57679,-.03642,.60785,.50484,.13101,.50737,.55336,.11223,.60671,.48361,-.01247,.52209,.57679,.13101,.50737,.55336,-.03642,.60785,.50484,.34715,.17011,.44934,.30425,.16879,.62805,.25835,.09116,.62347,.30425,.16879,.62805,.34715,.17011,.44934,.35599,.23838,.48563,.30425,.16879,.62805,.35599,.23838,.48563,.29729,.29116,.67073,-.28474,.27287,.69544,-.3077,.35457,.58447,-.35596,.22643,.49503,.35599,.23838,.48563,.30219,.36961,.56803,.29729,.29116,.67073,-.21108,.40055,.69218,-.2863,.42836,.44284,-.3077,.35457,.58447,-.20248,.46785,.55112,-.2863,.42836,.44284,-.21108,.40055,.69218,-.17802,.55913,.47036,-.18382,.51488,.50025,-.01247,.52209,.57679,-.10138,.02523,.67457,-.26608,.08958,.59996,-.22341,.02506,.4485,.22565,.02606,.46096,.25835,.09116,.62347,.1103,.02525,.66792,-.28474,.27287,.69544,-.35596,.22643,.49503,-.31437,.16767,.603,.26616,.4475,.46999,.18687,.40923,.70517,.30219,.36961,.56803,.13101,.50737,.55336,.18687,.40923,.70517,.26616,.4475,.46999,-.18382,.51488,.50025,-.20248,.46785,.55112,-.07581,.45752,.69879,-.10138,.02523,.67457,-.1909,.08108,.69362,-.26608,.08958,.59996,.30219,.36961,.56803,.18687,.40923,.70517,.29729,.29116,.67073,-.21108,.40055,.69218,-.07581,.45752,.69879,-.20248,.46785,.55112,-.01247,.52209,.57679,-.18382,.51488,.50025,-.07581,.45752,.69879,-.01247,.52209,.57679,-.07581,.45752,.69879,.05758,.45611,.70846,.13101,.50737,.55336,-.01247,.52209,.57679,.05758,.45611,.70846,.05758,.45611,.70846,.18687,.40923,.70517,.13101,.50737,.55336,.25835,.09116,.62347,.14636,.0809,.73091,.1103,.02525,.66792,-.26608,.08958,.59996,-.1909,.08108,.69362,-.24131,.16429,.72362,.25835,.09116,.62347,.30425,.16879,.62805,.24145,.16863,.72701,-.26608,.08958,.59996,-.24131,.16429,.72362,-.31437,.16767,.603,-.31437,.16767,.603,-.24131,.16429,.72362,-.28474,.27287,.69544,.29729,.29116,.67073,.24145,.16863,.72701,.30425,.16879,.62805,-.3077,.35457,.58447,-.28474,.27287,.69544,-.21108,.40055,.69218,-.1909,.08108,.69362,-.10138,.02523,.67457,-.09011,.10527,.78796,.02853,.08895,.7882,-.09011,.10527,.78796,-.10138,.02523,.67457,.1103,.02525,.66792,.02853,.08895,.7882,-.10138,.02523,.67457,.1103,.02525,.66792,.14636,.0809,.73091,.02853,.08895,.7882,.25835,.09116,.62347,.24145,.16863,.72701,.14636,.0809,.73091,.24145,.16863,.72701,.29729,.29116,.67073,.20116,.20321,.78381,-.24131,.16429,.72362,-.1909,.08108,.69362,-.17682,.17754,.78884,-.17682,.17754,.78884,-.1909,.08108,.69362,-.09011,.10527,.78796,.14636,.0809,.73091,.24145,.16863,.72701,.20116,.20321,.78381,-.24131,.16429,.72362,-.17682,.17754,.78884,-.28474,.27287,.69544,.16563,.31843,.7897,.20116,.20321,.78381,.29729,.29116,.67073,-.14775,.34827,.79014,-.21108,.40055,.69218,-.28474,.27287,.69544,.29729,.29116,.67073,.18687,.40923,.70517,.16563,.31843,.7897,-.21108,.40055,.69218,-.14775,.34827,.79014,-.07581,.45752,.69879,-.14775,.34827,.79014,.0482,.3961,.78763,-.07581,.45752,.69879,-.07581,.45752,.69879,.0482,.3961,.78763,.05758,.45611,.70846,.18687,.40923,.70517,.05758,.45611,.70846,.0482,.3961,.78763,.02853,.08895,.7882,.14636,.0809,.73091,.20116,.20321,.78381,.02853,.08895,.7882,.16563,.31843,.7897,-.09011,.10527,.78796,.20116,.20321,.78381,.16563,.31843,.7897,.02853,.08895,.7882,-.17682,.17754,.78884,-.14775,.34827,.79014,-.28474,.27287,.69544,-.09011,.10527,.78796,-.14775,.34827,.79014,-.17682,.17754,.78884,.16563,.31843,.7897,-.14775,.34827,.79014,-.09011,.10527,.78796,.16563,.31843,.7897,.0482,.3961,.78763,-.14775,.34827,.79014,.18687,.40923,.70517,.0482,.3961,.78763,.16563,.31843,.7897],Cc=[.5689,1.32398,-.18228,.56613,1.42284,-.2188,.64578,1.37201,-.22854,.73437,1.40348,-.22697,.64578,1.37201,-.22854,.68405,1.49854,-.24295,.64578,1.37201,-.22854,.56613,1.42284,-.2188,.68405,1.49854,-.24295,.68405,1.49854,-.24295,.56613,1.42284,-.2188,.55721,1.56903,-.19581,.81739,1.52819,-.17019,.73437,1.40348,-.22697,.68405,1.49854,-.24295,.68405,1.49854,-.24295,.55721,1.56903,-.19581,.62795,1.5858,-.21047,.73601,1.60805,-.18299,.68405,1.49854,-.24295,.62795,1.5858,-.21047,.71627,1.2747,-.15847,.62878,1.26363,-.15502,.64578,1.37201,-.22854,.64578,1.37201,-.22854,.62878,1.26363,-.15502,.5689,1.32398,-.18228,.64578,1.37201,-.22854,.73437,1.40348,-.22697,.71627,1.2747,-.15847,.84173,1.28751,-.11708,.71627,1.2747,-.15847,.73437,1.40348,-.22697,.48092,1.38951,-.14384,.56613,1.42284,-.2188,.5689,1.32398,-.18228,.8817,1.36329,-.11074,.73437,1.40348,-.22697,.81739,1.52819,-.17019,.48092,1.38951,-.14384,.47425,1.49545,-.14601,.56613,1.42284,-.2188,.56613,1.42284,-.2188,.47425,1.49545,-.14601,.55721,1.56903,-.19581,.68405,1.49854,-.24295,.73601,1.60805,-.18299,.81739,1.52819,-.17019,.5689,1.32398,-.18228,.62878,1.26363,-.15502,.58208,1.23916,-.09916,.5689,1.32398,-.18228,.50176,1.293,-.0912,.48092,1.38951,-.14384,.84173,1.28751,-.11708,.73437,1.40348,-.22697,.8817,1.36329,-.11074,.62795,1.5858,-.21047,.55721,1.56903,-.19581,.62562,1.69274,-.1073,.62562,1.69274,-.1073,.73601,1.60805,-.18299,.62795,1.5858,-.21047,.5689,1.32398,-.18228,.58208,1.23916,-.09916,.50176,1.293,-.0912,.81739,1.52819,-.17019,.92671,1.43156,-.05915,.8817,1.36329,-.11074,.47425,1.49545,-.14601,.51728,1.65294,-.07878,.55721,1.56903,-.19581,.81739,1.52819,-.17019,.73601,1.60805,-.18299,.82557,1.61629,-.08902,.82557,1.61629,-.08902,.73601,1.60805,-.18299,.73701,1.67797,-.10293,.55721,1.56903,-.19581,.51728,1.65294,-.07878,.62562,1.69274,-.1073,.62562,1.69274,-.1073,.73701,1.67797,-.10293,.73601,1.60805,-.18299,.45263,1.59189,-.02492,.51728,1.65294,-.07878,.47425,1.49545,-.14601,.58208,1.23916,-.09916,.62878,1.26363,-.15502,.87187,1.10821,.02959,.62878,1.26363,-.15502,.71627,1.2747,-.15847,.87187,1.10821,.02959,.87187,1.10821,.02959,.71627,1.2747,-.15847,.96237,1.15634,-3e-4,.84173,1.28751,-.11708,.96237,1.15634,-3e-4,.71627,1.2747,-.15847,.48092,1.38951,-.14384,.50176,1.293,-.0912,.44195,1.362,-.0233,.84173,1.28751,-.11708,.8817,1.36329,-.11074,1.00791,1.24203,-.01841,.48092,1.38951,-.14384,.44195,1.362,-.0233,.41932,1.43994,.01182,.48092,1.38951,-.14384,.41932,1.43994,.01182,.47425,1.49545,-.14601,.45263,1.59189,-.02492,.47425,1.49545,-.14601,.41932,1.43994,.01182,.94918,1.4898,.03121,.92671,1.43156,-.05915,.81739,1.52819,-.17019,.81739,1.52819,-.17019,.82557,1.61629,-.08902,.94918,1.4898,.03121,.82557,1.61629,-.08902,.73701,1.67797,-.10293,.798,1.67431,-.02408,.96237,1.15634,-3e-4,.84173,1.28751,-.11708,1.00791,1.24203,-.01841,.58208,1.23916,-.09916,.53204,1.23539,-28e-5,.50176,1.293,-.0912,1.04804,1.33294,.01909,1.00791,1.24203,-.01841,.8817,1.36329,-.11074,1.04804,1.33294,.01909,.8817,1.36329,-.11074,.92671,1.43156,-.05915,.62562,1.69274,-.1073,.69622,1.71885,-.00307,.73701,1.67797,-.10293,.69622,1.71885,-.00307,.798,1.67431,-.02408,.73701,1.67797,-.10293,.58208,1.23916,-.09916,.87187,1.10821,.02959,.82737,1.0751,.09595,.50176,1.293,-.0912,.53204,1.23539,-28e-5,.44195,1.362,-.0233,.82557,1.61629,-.08902,.798,1.67431,-.02408,.94918,1.4898,.03121,.62562,1.69274,-.1073,.51728,1.65294,-.07878,.61179,1.71642,.06422,.69622,1.71885,-.00307,.62562,1.69274,-.1073,.61179,1.71642,.06422,.58208,1.23916,-.09916,.69641,1.12913,.09553,.53204,1.23539,-28e-5,.44195,1.362,-.0233,.53204,1.23539,-28e-5,.47192,1.31583,.09357,.94918,1.4898,.03121,.798,1.67431,-.02408,.91479,1.54839,.09796,.527,1.66677,.09168,.51728,1.65294,-.07878,.45263,1.59189,-.02492,.51728,1.65294,-.07878,.527,1.66677,.09168,.61179,1.71642,.06422,.82737,1.0751,.09595,.69641,1.12913,.09553,.58208,1.23916,-.09916,.96237,1.15634,-3e-4,1.00791,1.24203,-.01841,1.08856,1.25326,.08454,1.00791,1.24203,-.01841,1.04804,1.33294,.01909,1.08856,1.25326,.08454,.47192,1.31583,.09357,.41932,1.43994,.01182,.44195,1.362,-.0233,1.04804,1.33294,.01909,.92671,1.43156,-.05915,1.10739,1.46101,.17023,.41932,1.43994,.01182,.4439,1.54358,.09076,.45263,1.59189,-.02492,.798,1.67431,-.02408,.75341,1.69627,.07868,.91479,1.54839,.09796,.69622,1.71885,-.00307,.75341,1.69627,.07868,.798,1.67431,-.02408,.69622,1.71885,-.00307,.61179,1.71642,.06422,.75341,1.69627,.07868,.87187,1.10821,.02959,.96237,1.15634,-3e-4,.97557,1.09036,.11834,.96237,1.15634,-3e-4,1.07743,1.18,.13516,.97557,1.09036,.11834,.53204,1.23539,-28e-5,.69641,1.12913,.09553,.62674,1.17475,.13825,.96237,1.15634,-3e-4,1.08856,1.25326,.08454,1.07743,1.18,.13516,1.10739,1.46101,.17023,.92671,1.43156,-.05915,.94918,1.4898,.03121,.527,1.66677,.09168,.45263,1.59189,-.02492,.4439,1.54358,.09076,.82737,1.0751,.09595,.87187,1.10821,.02959,.97557,1.09036,.11834,.59307,1.22843,.20035,.53204,1.23539,-28e-5,.62674,1.17475,.13825,.47192,1.31583,.09357,.53204,1.23539,-28e-5,.59307,1.22843,.20035,.47192,1.31583,.09357,.46303,1.42237,.16076,.41932,1.43994,.01182,.41932,1.43994,.01182,.46303,1.42237,.16076,.4439,1.54358,.09076,.8271,1.60383,.16983,.91479,1.54839,.09796,.75341,1.69627,.07868,1.08856,1.25326,.08454,1.04804,1.33294,.01909,1.17195,1.43228,.25221,1.10739,1.46101,.17023,1.17195,1.43228,.25221,1.04804,1.33294,.01909,.46303,1.42237,.16076,.49621,1.58218,.15848,.4439,1.54358,.09076,.8271,1.60383,.16983,.88695,1.58583,.19637,.91479,1.54839,.09796,.4439,1.54358,.09076,.49621,1.58218,.15848,.527,1.66677,.09168,.75341,1.69627,.07868,.61179,1.71642,.06422,.67756,1.66764,.17276,.97557,1.09036,.11834,.94817,1.0701,.1978,.82737,1.0751,.09595,.80392,1.06202,.23097,.69641,1.12913,.09553,.82737,1.0751,.09595,.69641,1.12913,.09553,.80392,1.06202,.23097,.62674,1.17475,.13825,.97557,1.09036,.11834,1.04568,1.12683,.20608,.94817,1.0701,.1978,1.04568,1.12683,.20608,.97557,1.09036,.11834,1.07743,1.18,.13516,1.17195,1.43228,.25221,1.18973,1.33846,.2885,1.08856,1.25326,.08454,.49621,1.58218,.15848,.58892,1.62616,.2012,.527,1.66677,.09168,.8271,1.60383,.16983,.75341,1.69627,.07868,.67756,1.66764,.17276,.527,1.66677,.09168,.58892,1.62616,.2012,.61179,1.71642,.06422,.67756,1.66764,.17276,.61179,1.71642,.06422,.58892,1.62616,.2012,.82737,1.0751,.09595,.94817,1.0701,.1978,.80392,1.06202,.23097,1.07743,1.18,.13516,1.08856,1.25326,.08454,1.18973,1.33846,.2885,1.10739,1.46101,.17023,.94918,1.4898,.03121,1.09858,1.54229,.26152,.46303,1.42237,.16076,.52489,1.5075,.22414,.49621,1.58218,.15848,.91479,1.54839,.09796,1.09858,1.54229,.26152,.94918,1.4898,.03121,.52489,1.5075,.22414,.58892,1.62616,.2012,.49621,1.58218,.15848,.72946,1.58773,.24243,.8271,1.60383,.16983,.67756,1.66764,.17276,.62674,1.17475,.13825,.80392,1.06202,.23097,.71928,1.12654,.31748,.62674,1.17475,.13825,.71928,1.12654,.31748,.59307,1.22843,.20035,.6118,1.28884,.28472,.46303,1.42237,.16076,.59307,1.22843,.20035,.59307,1.22843,.20035,.46303,1.42237,.16076,.47192,1.31583,.09357,.63136,1.37225,.31975,.52489,1.5075,.22414,.46303,1.42237,.16076,.52489,1.5075,.22414,.66653,1.50727,.29388,.58892,1.62616,.2012,1.01994,1.61315,.36203,.91479,1.54839,.09796,.88695,1.58583,.19637,1.09858,1.54229,.26152,.91479,1.54839,.09796,1.01994,1.61315,.36203,.76961,1.56993,.2865,.88695,1.58583,.19637,.8271,1.60383,.16983,.58892,1.62616,.2012,.72946,1.58773,.24243,.67756,1.66764,.17276,.76961,1.56993,.2865,.8271,1.60383,.16983,.72946,1.58773,.24243,1.04568,1.12683,.20608,1.07743,1.18,.13516,1.18071,1.27404,.39064,1.07743,1.18,.13516,1.18973,1.33846,.2885,1.18071,1.27404,.39064,.46303,1.42237,.16076,.6118,1.28884,.28472,.63136,1.37225,.31975,.63136,1.37225,.31975,.60614,1.45114,.28479,.52489,1.5075,.22414,.60614,1.45114,.28479,.66653,1.50727,.29388,.52489,1.5075,.22414,.72946,1.58773,.24243,.58892,1.62616,.2012,.66653,1.50727,.29388,.94817,1.0701,.1978,.92007,1.09358,.35206,.80392,1.06202,.23097,.94817,1.0701,.1978,1.00908,1.114,.33083,.92007,1.09358,.35206,1.04568,1.12683,.20608,1.00908,1.114,.33083,.94817,1.0701,.1978,1.04568,1.12683,.20608,1.13378,1.21724,.4065,1.00908,1.114,.33083,1.10739,1.46101,.17023,1.09858,1.54229,.26152,1.17195,1.43228,.25221,.76961,1.56993,.2865,.72946,1.58773,.24243,.66653,1.50727,.29388,.80392,1.06202,.23097,.79991,1.1138,.37446,.71928,1.12654,.31748,1.04568,1.12683,.20608,1.18071,1.27404,.39064,1.13378,1.21724,.4065,.59307,1.22843,.20035,.69262,1.25778,.4182,.6118,1.28884,.28472,1.18973,1.33846,.2885,1.17195,1.43228,.25221,1.21176,1.42122,.39395,.60614,1.45114,.28479,.63136,1.37225,.31975,.66653,1.50727,.29388,1.17195,1.43228,.25221,1.09858,1.54229,.26152,1.16959,1.5238,.40259,1.08901,1.58783,.38599,1.09858,1.54229,.26152,1.01994,1.61315,.36203,.80392,1.06202,.23097,.92007,1.09358,.35206,.79991,1.1138,.37446,.71928,1.12654,.31748,.69262,1.25778,.4182,.59307,1.22843,.20035,1.21176,1.42122,.39395,1.17195,1.43228,.25221,1.16959,1.5238,.40259,.76961,1.56993,.2865,.66653,1.50727,.29388,.70363,1.48297,.37134,1.08901,1.58783,.38599,1.16959,1.5238,.40259,1.09858,1.54229,.26152,.88695,1.58583,.19637,.76961,1.56993,.2865,.90101,1.6088,.46131,.88695,1.58583,.19637,.90101,1.6088,.46131,1.01994,1.61315,.36203,.66653,1.50727,.29388,.63136,1.37225,.31975,.70363,1.48297,.37134,.92007,1.09358,.35206,.96997,1.2236,.60668,.79991,1.1138,.37446,1.18071,1.27404,.39064,1.18973,1.33846,.2885,1.2011,1.3449,.48506,1.18973,1.33846,.2885,1.21176,1.42122,.39395,1.2011,1.3449,.48506,.71928,1.12654,.31748,.82386,1.26855,.58527,.69262,1.25778,.4182,.69262,1.25778,.4182,.7606,1.43493,.56183,.6118,1.28884,.28472,.6118,1.28884,.28472,.7606,1.43493,.56183,.63136,1.37225,.31975,1.16959,1.5238,.40259,1.18281,1.47541,.49436,1.21176,1.42122,.39395,.80146,1.54397,.50762,.76961,1.56993,.2865,.70363,1.48297,.37134,.90101,1.6088,.46131,.76961,1.56993,.2865,.80146,1.54397,.50762,1.00908,1.114,.33083,1.04793,1.20116,.53666,.92007,1.09358,.35206,1.00908,1.114,.33083,1.11738,1.23429,.52089,1.04793,1.20116,.53666,.79991,1.1138,.37446,.82386,1.26855,.58527,.71928,1.12654,.31748,1.00908,1.114,.33083,1.13378,1.21724,.4065,1.11738,1.23429,.52089,.63136,1.37225,.31975,.7606,1.43493,.56183,.70363,1.48297,.37134,1.08732,1.5588,.54216,1.16959,1.5238,.40259,1.08901,1.58783,.38599,1.00616,1.59302,.53274,1.08901,1.58783,.38599,1.01994,1.61315,.36203,.79991,1.1138,.37446,.96997,1.2236,.60668,.90958,1.2368,.60668,1.11738,1.23429,.52089,1.13378,1.21724,.4065,1.18071,1.27404,.39064,1.2011,1.3449,.48506,1.11738,1.23429,.52089,1.18071,1.27404,.39064,1.18281,1.47541,.49436,1.2011,1.3449,.48506,1.21176,1.42122,.39395,.7606,1.43493,.56183,.80146,1.54397,.50762,.70363,1.48297,.37134,1.08901,1.58783,.38599,1.00616,1.59302,.53274,1.08732,1.5588,.54216,1.01994,1.61315,.36203,.90101,1.6088,.46131,1.00616,1.59302,.53274,.92007,1.09358,.35206,1.04793,1.20116,.53666,.96997,1.2236,.60668,1.2011,1.3449,.48506,1.18281,1.47541,.49436,1.16141,1.37209,.57931,1.18281,1.47541,.49436,1.16959,1.5238,.40259,1.08732,1.5588,.54216,.79991,1.1138,.37446,.90958,1.2368,.60668,.82386,1.26855,.58527,1.11738,1.23429,.52089,1.2011,1.3449,.48506,1.10739,1.27684,.59243,1.12899,1.45669,.60563,1.16141,1.37209,.57931,1.18281,1.47541,.49436,1.18281,1.47541,.49436,1.08732,1.5588,.54216,1.12899,1.45669,.60563,.80146,1.54397,.50762,.90961,1.54727,.60627,.90101,1.6088,.46131,.90101,1.6088,.46131,.90961,1.54727,.60627,1.00616,1.59302,.53274,1.10739,1.27684,.59243,1.04793,1.20116,.53666,1.11738,1.23429,.52089,.82386,1.26855,.58527,.81323,1.36533,.63182,.69262,1.25778,.4182,1.10739,1.27684,.59243,1.2011,1.3449,.48506,1.16141,1.37209,.57931,.69262,1.25778,.4182,.81323,1.36533,.63182,.7606,1.43493,.56183,.80146,1.54397,.50762,.7606,1.43493,.56183,.83673,1.48595,.61743,.90961,1.54727,.60627,.80146,1.54397,.50762,.83673,1.48595,.61743,1.04793,1.20116,.53666,1.10739,1.27684,.59243,.96997,1.2236,.60668,.81323,1.36533,.63182,.83673,1.48595,.61743,.7606,1.43493,.56183,1.12899,1.45669,.60563,1.08732,1.5588,.54216,1.02736,1.50285,.64264,.90961,1.54727,.60627,1.02736,1.50285,.64264,1.00616,1.59302,.53274,1.00616,1.59302,.53274,1.02736,1.50285,.64264,1.08732,1.5588,.54216,.9355,1.31428,.6725,.82386,1.26855,.58527,.90958,1.2368,.60668,1.0643,1.35006,.66283,.96997,1.2236,.60668,1.10739,1.27684,.59243,.81323,1.36533,.63182,.82386,1.26855,.58527,.9355,1.31428,.6725,1.10739,1.27684,.59243,1.16141,1.37209,.57931,1.0643,1.35006,.66283,1.12899,1.45669,.60563,1.0643,1.35006,.66283,1.16141,1.37209,.57931,.96997,1.2236,.60668,.9355,1.31428,.6725,.90958,1.2368,.60668,.96997,1.2236,.60668,1.0643,1.35006,.66283,.9355,1.31428,.6725,.9355,1.31428,.6725,.90922,1.38905,.6823,.81323,1.36533,.63182,1.0643,1.35006,.66283,1.12899,1.45669,.60563,1.03085,1.42536,.67371,.90922,1.38905,.6823,.93119,1.45742,.67319,.81323,1.36533,.63182,.93119,1.45742,.67319,.83673,1.48595,.61743,.81323,1.36533,.63182,.83673,1.48595,.61743,.93119,1.45742,.67319,.90961,1.54727,.60627,1.12899,1.45669,.60563,1.02736,1.50285,.64264,1.03085,1.42536,.67371,1.02736,1.50285,.64264,.90961,1.54727,.60627,.93119,1.45742,.67319,1.0643,1.35006,.66283,.90922,1.38905,.6823,.9355,1.31428,.6725,1.0643,1.35006,.66283,1.03085,1.42536,.67371,.90922,1.38905,.6823,1.03085,1.42536,.67371,.93119,1.45742,.67319,.90922,1.38905,.6823,1.03085,1.42536,.67371,1.02736,1.50285,.64264,.93119,1.45742,.67319],H3=[.03109,-.10159,-.1871,-.0756,-.09562,-.18185,-.0168,-.03762,-.2036,.06741,-.03541,-.19754,.03109,-.10159,-.1871,-.0168,-.03762,-.2036,-.0756,-.09562,-.18185,-.11091,-.03463,-.18589,-.0168,-.03762,-.2036,-.0168,-.03762,-.2036,-.11091,-.03463,-.18589,-.05941,.06603,-.19522,.02165,.0395,-.20377,-.0168,-.03762,-.2036,-.05941,.06603,-.19522,.06741,-.03541,-.19754,-.0168,-.03762,-.2036,.02165,.0395,-.20377,.11923,.02066,-.18543,.06741,-.03541,-.19754,.02165,.0395,-.20377,.02165,.0395,-.20377,-.05941,.06603,-.19522,.03118,.12426,-.17842,.03109,-.10159,-.1871,-.04451,-.16159,-.15394,-.0756,-.09562,-.18185,.12227,-.08125,-.17,.03109,-.10159,-.1871,.06741,-.03541,-.19754,.12227,-.08125,-.17,.06741,-.03541,-.19754,.11923,.02066,-.18543,-.11091,-.03463,-.18589,-.14155,.06485,-.16824,-.05941,.06603,-.19522,.11923,.02066,-.18543,.02165,.0395,-.20377,.03118,.12426,-.17842,.11923,.02066,-.18543,.03118,.12426,-.17842,.12884,.10599,-.15845,.08803,-.1619,-.14242,-.04451,-.16159,-.15394,.03109,-.10159,-.1871,.03109,-.10159,-.1871,.12227,-.08125,-.17,.08803,-.1619,-.14242,-.11091,-.03463,-.18589,-.0756,-.09562,-.18185,-.16668,-.0991,-.13926,-.11091,-.03463,-.18589,-.16668,-.0991,-.13926,-.19529,-.00863,-.14185,.11923,.02066,-.18543,.18439,-.05611,-.14229,.12227,-.08125,-.17,.11923,.02066,-.18543,.164,.01788,-.16202,.18439,-.05611,-.14229,-.11091,-.03463,-.18589,-.19529,-.00863,-.14185,-.14155,.06485,-.16824,.11923,.02066,-.18543,.12884,.10599,-.15845,.164,.01788,-.16202,-.05941,.06603,-.19522,-.14155,.06485,-.16824,-.08855,.14912,-.15028,-.08855,.14912,-.15028,.03118,.12426,-.17842,-.05941,.06603,-.19522,.08803,-.1619,-.14242,.01705,-.20433,-.1157,-.04451,-.16159,-.15394,-.13322,-.17142,-.10837,-.16668,-.0991,-.13926,-.0756,-.09562,-.18185,-.04451,-.16159,-.15394,-.13322,-.17142,-.10837,-.0756,-.09562,-.18185,.18088,-.12743,-.10896,.08803,-.1619,-.14242,.12227,-.08125,-.17,.12227,-.08125,-.17,.18439,-.05611,-.14229,.18088,-.12743,-.10896,.21708,-.02984,-.11807,.18439,-.05611,-.14229,.164,.01788,-.16202,-.19529,-.00863,-.14185,-.18852,.09172,-.12466,-.14155,.06485,-.16824,.164,.01788,-.16202,.12884,.10599,-.15845,.18732,.09601,-.12506,.18732,.09601,-.12506,.21376,.03542,-.11995,.164,.01788,-.16202,.03118,.12426,-.17842,.06053,.17225,-.13999,.12884,.10599,-.15845,-.08855,.14912,-.15028,-.01404,.20769,-.11355,.03118,.12426,-.17842,.06053,.17225,-.13999,.03118,.12426,-.17842,-.01404,.20769,-.11355,.164,.01788,-.16202,.21376,.03542,-.11995,.21708,-.02984,-.11807,-.14155,.06485,-.16824,-.18852,.09172,-.12466,-.14109,.15668,-.11553,-.08855,.14912,-.15028,-.14155,.06485,-.16824,-.14109,.15668,-.11553,.12884,.10599,-.15845,.13994,.15712,-.11584,.18732,.09601,-.12506,.06053,.17225,-.13999,.13994,.15712,-.11584,.12884,.10599,-.15845,-.04451,-.16159,-.15394,.01705,-.20433,-.1157,-.05667,-.22115,-.08157,.01705,-.20433,-.1157,.08803,-.1619,-.14242,.08678,-.21425,-.07932,-.05667,-.22115,-.08157,-.13322,-.17142,-.10837,-.04451,-.16159,-.15394,.18088,-.12743,-.10896,.18439,-.05611,-.14229,.23863,-.07597,-.07121,-.22998,-.08002,-.08278,-.19529,-.00863,-.14185,-.16668,-.0991,-.13926,.18439,-.05611,-.14229,.21708,-.02984,-.11807,.23863,-.07597,-.07121,-.22998,-.08002,-.08278,-.24733,-.00625,-.07839,-.19529,-.00863,-.14185,-.24733,-.00625,-.07839,-.23089,.08307,-.07989,-.19529,-.00863,-.14185,-.18852,.09172,-.12466,-.19529,-.00863,-.14185,-.23089,.08307,-.07989,-.07756,.21396,-.08583,-.08855,.14912,-.15028,-.14109,.15668,-.11553,-.07756,.21396,-.08583,-.01404,.20769,-.11355,-.08855,.14912,-.15028,.13994,.15712,-.11584,.06053,.17225,-.13999,.07569,.21366,-.08568,.07569,.21366,-.08568,.06053,.17225,-.13999,-.01404,.20769,-.11355,.08678,-.21425,-.07932,.08803,-.1619,-.14242,.16237,-.17675,-.06978,.08803,-.1619,-.14242,.18088,-.12743,-.10896,.16237,-.17675,-.06978,-.16668,-.0991,-.13926,-.18349,-.15975,-.06714,-.22998,-.08002,-.08278,-.13322,-.17142,-.10837,-.18349,-.15975,-.06714,-.16668,-.0991,-.13926,-.14109,.15668,-.11553,-.18852,.09172,-.12466,-.17491,.16686,-.07001,.18732,.09601,-.12506,.13994,.15712,-.11584,.19995,.14856,-.05924,.19995,.14856,-.05924,.13994,.15712,-.11584,.15326,.18816,-.06137,-.14109,.15668,-.11553,-.17491,.16686,-.07001,-.07756,.21396,-.08583,.15326,.18816,-.06137,.13994,.15712,-.11584,.07569,.21366,-.08568,.01705,-.20433,-.1157,.03793,-.24345,-.03108,-.05667,-.22115,-.08157,.01705,-.20433,-.1157,.08678,-.21425,-.07932,.03793,-.24345,-.03108,.23863,-.07597,-.07121,.21708,-.02984,-.11807,.25942,-.00641,-.05014,.21708,-.02984,-.11807,.21376,.03542,-.11995,.25942,-.00641,-.05014,-.25304,.05495,-.04784,-.23089,.08307,-.07989,-.24733,-.00625,-.07839,.25942,-.00641,-.05014,.21376,.03542,-.11995,.25977,.0466,-.03574,.18732,.09601,-.12506,.25977,.0466,-.03574,.21376,.03542,-.11995,.23974,.09374,-.04607,.25977,.0466,-.03574,.18732,.09601,-.12506,.18732,.09601,-.12506,.19995,.14856,-.05924,.23974,.09374,-.04607,-.17491,.16686,-.07001,-.18852,.09172,-.12466,-.23089,.08307,-.07989,-.12249,-.21339,-.04373,-.13322,-.17142,-.10837,-.05667,-.22115,-.08157,.11115,-.22195,-.02814,.08678,-.21425,-.07932,.16237,-.17675,-.06978,-.13322,-.17142,-.10837,-.12249,-.21339,-.04373,-.18349,-.15975,-.06714,.16237,-.17675,-.06978,.18088,-.12743,-.10896,.21473,-.13423,-.04888,-.23432,-.11345,-.03052,-.22998,-.08002,-.08278,-.18349,-.15975,-.06714,.21473,-.13423,-.04888,.18088,-.12743,-.10896,.23863,-.07597,-.07121,-.07756,.21396,-.08583,-.17491,.16686,-.07001,-.10264,.22261,-.03954,.15326,.18816,-.06137,.07569,.21366,-.08568,.10271,.22336,-.0363,-.01404,.20769,-.11355,-.07756,.21396,-.08583,.00705,.24498,-.03117,.07569,.21366,-.08568,-.01404,.20769,-.11355,.00705,.24498,-.03117,-.05667,-.22115,-.08157,.03793,-.24345,-.03108,-.05842,-.24236,-.00379,-.24733,-.00625,-.07839,-.26715,.0143,-.00164,-.25304,.05495,-.04784,-.17491,.16686,-.07001,-.23089,.08307,-.07989,-.20984,.15769,-.01993,-.07756,.21396,-.08583,-.10264,.22261,-.03954,.00705,.24498,-.03117,.10271,.22336,-.0363,.07569,.21366,-.08568,.00705,.24498,-.03117,-.05667,-.22115,-.08157,-.05842,-.24236,-.00379,-.12249,-.21339,-.04373,.08678,-.21425,-.07932,.11115,-.22195,-.02814,.03793,-.24345,-.03108,.11115,-.22195,-.02814,.16237,-.17675,-.06978,.1786,-.18452,.00568,-.18349,-.15975,-.06714,-.12249,-.21339,-.04373,-.20902,-.15564,.00931,.21473,-.13423,-.04888,.1786,-.18452,.00568,.16237,-.17675,-.06978,.21358,-.14858,.00979,.1786,-.18452,.00568,.21473,-.13423,-.04888,-.23432,-.11345,-.03052,-.18349,-.15975,-.06714,-.20902,-.15564,.00931,-.23432,-.11345,-.03052,-.26043,-.05212,.02886,-.22998,-.08002,-.08278,-.22998,-.08002,-.08278,-.26043,-.05212,.02886,-.24733,-.00625,-.07839,-.26043,-.05212,.02886,-.26715,.0143,-.00164,-.24733,-.00625,-.07839,-.17491,.16686,-.07001,-.20984,.15769,-.01993,-.16288,.19799,-.00185,-.10264,.22261,-.03954,-.17491,.16686,-.07001,-.16288,.19799,-.00185,-.12249,-.21339,-.04373,-.05842,-.24236,-.00379,-.14444,-.2059,.02111,-.12249,-.21339,-.04373,-.14444,-.2059,.02111,-.20902,-.15564,.00931,.21358,-.14858,.00979,.21473,-.13423,-.04888,.26063,-.05726,.01712,.23863,-.07597,-.07121,.26063,-.05726,.01712,.21473,-.13423,-.04888,.26063,-.05726,.01712,.23863,-.07597,-.07121,.25942,-.00641,-.05014,-.24337,.11223,36e-5,-.23089,.08307,-.07989,-.25304,.05495,-.04784,-.23089,.08307,-.07989,-.24337,.11223,36e-5,-.20984,.15769,-.01993,.23974,.09374,-.04607,.19995,.14856,-.05924,.22778,.1261,.02483,.18282,.17927,.01436,.22778,.1261,.02483,.19995,.14856,-.05924,.18282,.17927,.01436,.19995,.14856,-.05924,.15326,.18816,-.06137,.10271,.22336,-.0363,.11581,.22182,.02334,.15326,.18816,-.06137,.11581,.22182,.02334,.18282,.17927,.01436,.15326,.18816,-.06137,-.10264,.22261,-.03954,-.16288,.19799,-.00185,-.06188,.24113,.00959,.00705,.24498,-.03117,-.10264,.22261,-.03954,-.06188,.24113,.00959,.11115,-.22195,-.02814,.1786,-.18452,.00568,.10375,-.22211,.0427,.25942,-.00641,-.05014,.25977,.0466,-.03574,.26063,-.05726,.01712,-.26715,.0143,-.00164,-.25316,.0769,.03519,-.25304,.05495,-.04784,-.25304,.05495,-.04784,-.25316,.0769,.03519,-.24337,.11223,36e-5,.25977,.0466,-.03574,.23974,.09374,-.04607,.22778,.1261,.02483,.10271,.22336,-.0363,.00705,.24498,-.03117,.11581,.22182,.02334,.03793,-.24345,-.03108,.0139,-.23776,.05552,-.05842,-.24236,-.00379,.11115,-.22195,-.02814,.10375,-.22211,.0427,.03793,-.24345,-.03108,-.26043,-.05212,.02886,-.23432,-.11345,-.03052,-.20902,-.15564,.00931,.26063,-.05726,.01712,.25977,.0466,-.03574,.2565,.04476,.04581,.25977,.0466,-.03574,.22778,.1261,.02483,.2565,.04476,.04581,-.25455,.15904,.04721,-.20984,.15769,-.01993,-.24337,.11223,36e-5,-.22741,.19658,.04403,-.20984,.15769,-.01993,-.25455,.15904,.04721,-.22741,.19658,.04403,-.16288,.19799,-.00185,-.20984,.15769,-.01993,-.16288,.19799,-.00185,-.22741,.19658,.04403,-.13812,.21026,.04156,-.16288,.19799,-.00185,-.13812,.21026,.04156,-.06188,.24113,.00959,.00705,.24498,-.03117,-.06188,.24113,.00959,.00604,.23906,.05357,.00705,.24498,-.03117,.00604,.23906,.05357,.11581,.22182,.02334,-.05842,-.24236,-.00379,.0139,-.23776,.05552,-.08112,-.22552,.05904,.03793,-.24345,-.03108,.10375,-.22211,.0427,.0139,-.23776,.05552,-.05842,-.24236,-.00379,-.08112,-.22552,.05904,-.14444,-.2059,.02111,.11581,.22182,.02334,.00604,.23906,.05357,.10368,.21106,.07337,.17233,-.16693,.07787,.10375,-.22211,.0427,.1786,-.18452,.00568,-.20902,-.15564,.00931,-.14444,-.2059,.02111,-.18991,-.15241,.07435,.1786,-.18452,.00568,.20668,-.13193,.0775,.17233,-.16693,.07787,.21358,-.14858,.00979,.20668,-.13193,.0775,.1786,-.18452,.00568,.21516,-.10478,.08692,.21358,-.14858,.00979,.26063,-.05726,.01712,-.20902,-.15564,.00931,-.21401,-.11263,.08309,-.26043,-.05212,.02886,.21516,-.10478,.08692,.26063,-.05726,.01712,.24256,-.0467,.07706,-.26043,-.05212,.02886,-.24593,.04679,.07945,-.26715,.0143,-.00164,-.24593,.04679,.07945,-.25316,.0769,.03519,-.26715,.0143,-.00164,-.24593,.04679,.07945,-.24337,.11223,36e-5,-.25316,.0769,.03519,.18282,.17927,.01436,.1886,.1394,.0927,.22778,.1261,.02483,.11581,.22182,.02334,.1886,.1394,.0927,.18282,.17927,.01436,-.13812,.21026,.04156,-.22741,.19658,.04403,-.18088,.21168,.07217,-.06188,.24113,.00959,-.13812,.21026,.04156,-.12009,.20511,.07564,-.06188,.24113,.00959,-.12009,.20511,.07564,.00604,.23906,.05357,-.14444,-.2059,.02111,-.08112,-.22552,.05904,-.15029,-.17798,.08415,-.07793,-.20641,.09955,-.15029,-.17798,.08415,-.08112,-.22552,.05904,.12237,-.18322,.10264,.10375,-.22211,.0427,.17233,-.16693,.07787,-.15029,-.17798,.08415,-.18991,-.15241,.07435,-.14444,-.2059,.02111,-.18991,-.15241,.07435,-.21401,-.11263,.08309,-.20902,-.15564,.00931,.20668,-.13193,.0775,.21358,-.14858,.00979,.21516,-.10478,.08692,.26063,-.05726,.01712,.2565,.04476,.04581,.24256,-.0467,.07706,.22778,.1261,.02483,.23805,.06601,.08047,.2565,.04476,.04581,.22778,.1261,.02483,.1886,.1394,.0927,.23805,.06601,.08047,.11581,.22182,.02334,.10368,.21106,.07337,.1886,.1394,.0927,.10375,-.22211,.0427,.07499,-.20753,.10067,.0139,-.23776,.05552,.10375,-.22211,.0427,.12237,-.18322,.10264,.07499,-.20753,.10067,-.21401,-.11263,.08309,-.21379,-.0729,.10903,-.26043,-.05212,.02886,-.24593,.04679,.07945,-.26043,-.05212,.02886,-.21379,-.0729,.10903,.24256,-.0467,.07706,.2565,.04476,.04581,.23805,.06601,.08047,-.24337,.11223,36e-5,-.27946,.12731,.11841,-.25455,.15904,.04721,-.22741,.19658,.04403,-.22068,.18835,.15421,-.18088,.21168,.07217,-.13812,.21026,.04156,-.18088,.21168,.07217,-.12009,.20511,.07564,.00604,.23906,.05357,-.12009,.20511,.07564,-.00761,.1966,.12657,-.00761,.1966,.12657,.07223,.19488,.11504,.00604,.23906,.05357,.00604,.23906,.05357,.07223,.19488,.11504,.10368,.21106,.07337,-.08112,-.22552,.05904,-.00384,-.2041,.11832,-.07793,-.20641,.09955,.0139,-.23776,.05552,-.00384,-.2041,.11832,-.08112,-.22552,.05904,.0139,-.23776,.05552,.07499,-.20753,.10067,-.00384,-.2041,.11832,-.21763,-.17995,.12301,-.15029,-.17798,.08415,-.17056,-.20368,.13542,.17233,-.16693,.07787,.1697,-.20405,.13652,.12237,-.18322,.10264,.1697,-.20405,.13652,.17233,-.16693,.07787,.21034,-.17096,.10578,-.15029,-.17798,.08415,-.21763,-.17995,.12301,-.18991,-.15241,.07435,-.23508,-.14201,.12282,-.18991,-.15241,.07435,-.21763,-.17995,.12301,.17233,-.16693,.07787,.20668,-.13193,.0775,.21034,-.17096,.10578,-.18991,-.15241,.07435,-.23508,-.14201,.12282,-.21401,-.11263,.08309,.24256,-.0467,.07706,.21077,-.05927,.11417,.21516,-.10478,.08692,-.21379,-.0729,.10903,-.21593,-.0028,.12762,-.24593,.04679,.07945,.24256,-.0467,.07706,.23805,.06601,.08047,.21959,.00136,.12054,-.24593,.04679,.07945,-.27629,.06264,.13387,-.24337,.11223,36e-5,.23805,.06601,.08047,.1886,.1394,.0927,.23879,.09225,.13312,.10368,.21106,.07337,.14684,.14649,.1247,.1886,.1394,.0927,-.15003,.19194,.11661,-.12009,.20511,.07564,-.18088,.21168,.07217,.07499,-.20753,.10067,.07477,-.21713,.14338,-.00384,-.2041,.11832,-.17056,-.20368,.13542,-.15029,-.17798,.08415,-.11692,-.18915,.14037,-.07793,-.20641,.09955,-.11692,-.18915,.14037,-.15029,-.17798,.08415,.1697,-.20405,.13652,.11752,-.18915,.14103,.12237,-.18322,.10264,.20668,-.13193,.0775,.23607,-.11896,.12498,.21034,-.17096,.10578,.20668,-.13193,.0775,.21516,-.10478,.08692,.23607,-.11896,.12498,-.22489,-.09014,.12599,-.21379,-.0729,.10903,-.21401,-.11263,.08309,.23607,-.11896,.12498,.21516,-.10478,.08692,.21727,-.0802,.12796,.21516,-.10478,.08692,.21077,-.05927,.11417,.21727,-.0802,.12796,-.21593,-.0028,.12762,-.21379,-.0729,.10903,-.18352,-.05174,.14951,.21959,.00136,.12054,.21077,-.05927,.11417,.24256,-.0467,.07706,-.24593,.04679,.07945,-.21593,-.0028,.12762,-.27629,.06264,.13387,-.27629,.06264,.13387,-.27946,.12731,.11841,-.24337,.11223,36e-5,.23879,.09225,.13312,.1886,.1394,.0927,.20088,.13188,.13817,.1886,.1394,.0927,.14684,.14649,.1247,.20088,.13188,.13817,.07223,.19488,.11504,.14684,.14649,.1247,.10368,.21106,.07337,-.12009,.20511,.07564,-.15003,.19194,.11661,-.10921,.17722,.11904,-.12009,.20511,.07564,-.10921,.17722,.11904,-.00761,.1966,.12657,-.07793,-.20641,.09955,-.00384,-.2041,.11832,-.07487,-.21707,.14432,-.00384,-.2041,.11832,.07477,-.21713,.14338,.03654,-.21563,.15082,-.07793,-.20641,.09955,-.07487,-.21707,.14432,-.11692,-.18915,.14037,.07477,-.21713,.14338,.07499,-.20753,.10067,.12237,-.18322,.10264,.11752,-.18915,.14103,.07477,-.21713,.14338,.12237,-.18322,.10264,.1697,-.20405,.13652,.21034,-.17096,.10578,.22745,-.16899,.13971,.21034,-.17096,.10578,.23607,-.11896,.12498,.22745,-.16899,.13971,-.21401,-.11263,.08309,-.23508,-.14201,.12282,-.22489,-.09014,.12599,-.22489,-.09014,.12599,-.18352,-.05174,.14951,-.21379,-.0729,.10903,.21077,-.05927,.11417,.21959,.00136,.12054,.18551,-.03645,.15209,.07223,.19488,.11504,.11708,.11744,.16248,.14684,.14649,.1247,-.18088,.21168,.07217,-.22068,.18835,.15421,-.1665,.17769,.17042,-.1665,.17769,.17042,-.15003,.19194,.11661,-.18088,.21168,.07217,-.00384,-.2041,.11832,-.03831,-.20752,.20114,-.07487,-.21707,.14432,.18445,-.04972,.1587,.21727,-.0802,.12796,.21077,-.05927,.11417,.18445,-.04972,.1587,.21077,-.05927,.11417,.18551,-.03645,.15209,-.18457,-.03697,.15369,-.21593,-.0028,.12762,-.18352,-.05174,.14951,.18551,-.03645,.15209,.21959,.00136,.12054,.23754,.00196,.19246,.21959,.00136,.12054,.23805,.06601,.08047,.23754,.00196,.19246,.23805,.06601,.08047,.23879,.09225,.13312,.23754,.00196,.19246,-.27629,.06264,.13387,-.31333,.09429,.19317,-.27946,.12731,.11841,-.1665,.17769,.17042,-.1072,.1122,.17708,-.10921,.17722,.11904,-.1072,.1122,.17708,-.04841,.13153,.1739,-.10921,.17722,.11904,.11708,.11744,.16248,.07223,.19488,.11504,.05458,.12747,.17689,-.25232,.17428,.21319,-.22741,.19658,.04403,-.25455,.15904,.04721,-.10921,.17722,.11904,-.15003,.19194,.11661,-.1665,.17769,.17042,-.00761,.1966,.12657,-.10921,.17722,.11904,-.04841,.13153,.1739,.05458,.12747,.17689,.07223,.19488,.11504,-.00761,.1966,.12657,-.22741,.19658,.04403,-.25232,.17428,.21319,-.22068,.18835,.15421,-.21763,-.17995,.12301,-.22397,-.16083,.21603,-.23508,-.14201,.12282,-.22397,-.16083,.21603,-.23772,-.11476,.20557,-.23508,-.14201,.12282,-.23508,-.14201,.12282,-.23772,-.11476,.20557,-.22489,-.09014,.12599,.23607,-.11896,.12498,.21727,-.0802,.12796,.23266,-.08559,.204,.21727,-.0802,.12796,.18445,-.04972,.1587,.23266,-.08559,.204,-.18352,-.05174,.14951,-.22489,-.09014,.12599,-.21836,-.06275,.19345,-.21593,-.0028,.12762,-.18457,-.03697,.15369,-.24643,-.00821,.20902,-.27629,.06264,.13387,-.24643,-.00821,.20902,-.29887,.03678,.20849,-.24643,-.00821,.20902,-.27629,.06264,.13387,-.21593,-.0028,.12762,-.31333,.09429,.19317,-.29316,.14784,.21651,-.27946,.12731,.11841,-.27946,.12731,.11841,-.29316,.14784,.21651,-.25455,.15904,.04721,-.04841,.13153,.1739,.05458,.12747,.17689,-.00761,.1966,.12657,.07621,-.20438,.21953,.03654,-.21563,.15082,.07477,-.21713,.14338,-.07487,-.21707,.14432,-.08547,-.19942,.219,-.11692,-.18915,.14037,-.00384,-.2041,.11832,-38e-5,-.18964,.21146,-.03831,-.20752,.20114,.03654,-.21563,.15082,-38e-5,-.18964,.21146,-.00384,-.2041,.11832,.07621,-.20438,.21953,.07477,-.21713,.14338,.11752,-.18915,.14103,-.17056,-.20368,.13542,-.22397,-.16083,.21603,-.21763,-.17995,.12301,-.17056,-.20368,.13542,-.11692,-.18915,.14037,-.16815,-.18846,.21849,-.11692,-.18915,.14037,-.11589,-.17824,.21127,-.16815,-.18846,.21849,.1697,-.20405,.13652,.11651,-.17786,.21239,.11752,-.18915,.14103,.22745,-.16899,.13971,.19788,-.18187,.23504,.1697,-.20405,.13652,-.22489,-.09014,.12599,-.23772,-.11476,.20557,-.21836,-.06275,.19345,-.18457,-.03697,.15369,-.18352,-.05174,.14951,-.21836,-.06275,.19345,.23754,.00196,.19246,.23879,.09225,.13312,.23332,.06039,.20921,-.31333,.09429,.19317,-.27629,.06264,.13387,-.29887,.03678,.20849,.18926,.09089,.23613,.23879,.09225,.13312,.20088,.13188,.13817,.00136,.08974,.20334,.05458,.12747,.17689,-.04841,.13153,.1739,-.25455,.15904,.04721,-.29316,.14784,.21651,-.25232,.17428,.21319,-.03831,-.20752,.20114,-.08547,-.19942,.219,-.07487,-.21707,.14432,.07621,-.20438,.21953,-38e-5,-.18964,.21146,.03654,-.21563,.15082,-.17056,-.20368,.13542,-.16815,-.18846,.21849,-.22397,-.16083,.21603,-.08547,-.19942,.219,-.11589,-.17824,.21127,-.11692,-.18915,.14037,.11752,-.18915,.14103,.11651,-.17786,.21239,.07621,-.20438,.21953,.1697,-.20405,.13652,.16114,-.18756,.22094,.11651,-.17786,.21239,.1697,-.20405,.13652,.19788,-.18187,.23504,.16114,-.18756,.22094,.22745,-.16899,.13971,.23349,-.14381,.21162,.19788,-.18187,.23504,.22745,-.16899,.13971,.23607,-.11896,.12498,.23349,-.14381,.21162,.23607,-.11896,.12498,.23266,-.08559,.204,.23349,-.14381,.21162,.23266,-.08559,.204,.18445,-.04972,.1587,.24842,-.04924,.24546,-.21836,-.06275,.19345,-.23915,-.04711,.22782,-.18457,-.03697,.15369,.18445,-.04972,.1587,.18551,-.03645,.15209,.24842,-.04924,.24546,-.23915,-.04711,.22782,-.24643,-.00821,.20902,-.18457,-.03697,.15369,.24842,-.04924,.24546,.18551,-.03645,.15209,.23754,.00196,.19246,.05458,.12747,.17689,.11007,.08078,.22776,.11708,.11744,.16248,-.04841,.13153,.1739,-.1072,.1122,.17708,-.05759,.09849,.23206,.00136,.08974,.20334,-.04841,.13153,.1739,-.05759,.09849,.23206,.20088,.13188,.13817,.14684,.14649,.1247,.18926,.09089,.23613,-.12679,.11751,.26251,-.1072,.1122,.17708,-.1665,.17769,.17042,-.29887,.03678,.20849,-.31046,.08059,.24031,-.31333,.09429,.19317,.23879,.09225,.13312,.18926,.09089,.23613,.23332,.06039,.20921,.11708,.11744,.16248,.11007,.08078,.22776,.14684,.14649,.1247,.18926,.09089,.23613,.14684,.14649,.1247,.11007,.08078,.22776,-.1665,.17769,.17042,-.19819,.17022,.24925,-.12679,.11751,.26251,-.19819,.17022,.24925,-.1665,.17769,.17042,-.22068,.18835,.15421,-.22397,-.16083,.21603,-.25266,-.11767,.27789,-.23772,-.11476,.20557,.25417,-.10927,.28308,.23349,-.14381,.21162,.23266,-.08559,.204,-.25266,-.11767,.27789,-.23915,-.04711,.22782,-.23772,-.11476,.20557,-.23915,-.04711,.22782,-.21836,-.06275,.19345,-.23772,-.11476,.20557,.23754,.00196,.19246,.25297,.00925,.26186,.24842,-.04924,.24546,-.29887,.03678,.20849,-.24643,-.00821,.20902,-.25824,.00777,.2558,.23754,.00196,.19246,.23332,.06039,.20921,.25297,.00925,.26186,-.31046,.08059,.24031,-.29678,.1253,.25647,-.31333,.09429,.19317,.00136,.08974,.20334,.05255,.09142,.24838,.05458,.12747,.17689,.05255,.09142,.24838,.11007,.08078,.22776,.05458,.12747,.17689,-.1072,.1122,.17708,-.12679,.11751,.26251,-.05759,.09849,.23206,-.29316,.14784,.21651,-.31333,.09429,.19317,-.29678,.1253,.25647,-.25232,.17428,.21319,-.19819,.17022,.24925,-.22068,.18835,.15421,-38e-5,-.18964,.21146,-.05037,-.20833,.29381,-.03831,-.20752,.20114,-2e-5,-.19458,.28229,-.05037,-.20833,.29381,-38e-5,-.18964,.21146,-38e-5,-.18964,.21146,.05053,-.2072,.29979,-2e-5,-.19458,.28229,-.11589,-.17824,.21127,-.1193,-.1842,.28377,-.16815,-.18846,.21849,-.1193,-.1842,.28377,-.11589,-.17824,.21127,-.08547,-.19942,.219,.07621,-.20438,.21953,.12039,-.17993,.30432,.08846,-.20166,.28184,.11651,-.17786,.21239,.12039,-.17993,.30432,.07621,-.20438,.21953,.23349,-.14381,.21162,.23809,-.15167,.28877,.19788,-.18187,.23504,-.22397,-.16083,.21603,-.23361,-.15602,.29158,-.25266,-.11767,.27789,.25417,-.10927,.28308,.23809,-.15167,.28877,.23349,-.14381,.21162,.24842,-.04924,.24546,.25417,-.10927,.28308,.23266,-.08559,.204,.25297,.00925,.26186,.23332,.06039,.20921,.2231,.05455,.29706,.05255,.09142,.24838,.00136,.08974,.20334,.05356,.07273,.31178,-.25636,.15406,.26845,-.29316,.14784,.21651,-.29678,.1253,.25647,-.25232,.17428,.21319,-.29316,.14784,.21651,-.25636,.15406,.26845,-.25232,.17428,.21319,-.25636,.15406,.26845,-.19819,.17022,.24925,-.08547,-.19942,.219,-.05037,-.20833,.29381,-.1193,-.1842,.28377,-.03831,-.20752,.20114,-.05037,-.20833,.29381,-.08547,-.19942,.219,.07621,-.20438,.21953,.05053,-.2072,.29979,-38e-5,-.18964,.21146,.07621,-.20438,.21953,.08846,-.20166,.28184,.05053,-.2072,.29979,-.16815,-.18846,.21849,-.18608,-.18882,.29153,-.22397,-.16083,.21603,-.16815,-.18846,.21849,-.1193,-.1842,.28377,-.18608,-.18882,.29153,.16114,-.18756,.22094,.15858,-.1876,.29916,.11651,-.17786,.21239,.11651,-.17786,.21239,.15858,-.1876,.29916,.12039,-.17993,.30432,.16114,-.18756,.22094,.19788,-.18187,.23504,.15858,-.1876,.29916,-.18608,-.18882,.29153,-.23361,-.15602,.29158,-.22397,-.16083,.21603,-.25266,-.11767,.27789,-.24643,-.00821,.20902,-.23915,-.04711,.22782,-.25824,.00777,.2558,-.28156,.06941,.28114,-.29887,.03678,.20849,-.31046,.08059,.24031,-.29887,.03678,.20849,-.28156,.06941,.28114,.00136,.08974,.20334,-.05759,.09849,.23206,29e-5,.06065,.30091,.00136,.08974,.20334,29e-5,.06065,.30091,.05356,.07273,.31178,.05255,.09142,.24838,.05356,.07273,.31178,.11007,.08078,.22776,.16715,.07188,.31303,.18926,.09089,.23613,.11007,.08078,.22776,.18926,.09089,.23613,.16715,.07188,.31303,.2231,.05455,.29706,.2231,.05455,.29706,.23332,.06039,.20921,.18926,.09089,.23613,-.12679,.11751,.26251,-.05307,.07786,.30122,-.05759,.09849,.23206,-.25266,-.11767,.27789,-.25824,.00777,.2558,-.24643,-.00821,.20902,-.25824,.00777,.2558,-.24963,.04067,.29177,-.28156,.06941,.28114,.25297,.00925,.26186,.2231,.05455,.29706,.24359,.01545,.29903,-.05307,.07786,.30122,29e-5,.06065,.30091,-.05759,.09849,.23206,.11007,.08078,.22776,.05356,.07273,.31178,.11055,.05563,.31102,.11007,.08078,.22776,.11055,.05563,.31102,.16715,.07188,.31303,-.28156,.06941,.28114,-.29678,.1253,.25647,-.31046,.08059,.24031,-.28156,.06941,.28114,-.25887,.11546,.29277,-.29678,.1253,.25647,-.29678,.1253,.25647,-.25887,.11546,.29277,-.25636,.15406,.26845,-.12679,.11751,.26251,-.19819,.17022,.24925,-.2079,.13232,.29345,-.25636,.15406,.26845,-.2079,.13232,.29345,-.19819,.17022,.24925,-.1193,-.1842,.28377,-.11874,-.16205,.32915,-.18608,-.18882,.29153,.19788,-.18187,.23504,.19955,-.1717,.31735,.15858,-.1876,.29916,.19788,-.18187,.23504,.23809,-.15167,.28877,.19955,-.1717,.31735,.25417,-.10927,.28308,.24842,-.04924,.24546,.24359,.01545,.29903,-.25266,-.11767,.27789,-.23695,-.02315,.31255,-.25824,.00777,.2558,.24842,-.04924,.24546,.25297,.00925,.26186,.24359,.01545,.29903,-.23695,-.02315,.31255,-.24963,.04067,.29177,-.25824,.00777,.2558,-.21963,.06605,.30903,-.28156,.06941,.28114,-.24963,.04067,.29177,-.25887,.11546,.29277,-.28156,.06941,.28114,-.21963,.06605,.30903,-.17212,.09638,.30395,-.05307,.07786,.30122,-.12679,.11751,.26251,-.12679,.11751,.26251,-.2079,.13232,.29345,-.17212,.09638,.30395,-.2079,.13232,.29345,-.25636,.15406,.26845,-.25887,.11546,.29277,-.08111,-.17904,.3353,-.1193,-.1842,.28377,-.05037,-.20833,.29381,-.11874,-.16205,.32915,-.15995,-.17058,.33036,-.18608,-.18882,.29153,-.1193,-.1842,.28377,-.08111,-.17904,.3353,-.11874,-.16205,.32915,-2e-5,-.19458,.28229,15e-5,-.17494,.32325,-.05037,-.20833,.29381,.05053,-.2072,.29979,15e-5,-.17494,.32325,-2e-5,-.19458,.28229,.08846,-.20166,.28184,.12039,-.17993,.30432,.05053,-.2072,.29979,-.25266,-.11767,.27789,-.23361,-.15602,.29158,-.23562,-.11069,.32615,-.25266,-.11767,.27789,-.23562,-.11069,.32615,-.23695,-.02315,.31255,-.23695,-.02315,.31255,-.21643,.01441,.33403,-.24963,.04067,.29177,-.21643,.01441,.33403,-.21963,.06605,.30903,-.24963,.04067,.29177,-.2079,.13232,.29345,-.25887,.11546,.29277,-.21963,.06605,.30903,-.17212,.09638,.30395,-.2079,.13232,.29345,-.21963,.06605,.30903,-.0462,-.16782,.34867,-.08111,-.17904,.3353,-.05037,-.20833,.29381,-.05037,-.20833,.29381,15e-5,-.17494,.32325,-.0462,-.16782,.34867,.05666,-.16994,.34958,15e-5,-.17494,.32325,.05053,-.2072,.29979,.12039,-.17993,.30432,.05666,-.16994,.34958,.05053,-.2072,.29979,-.18608,-.18882,.29153,-.20569,-.1343,.34829,-.23361,-.15602,.29158,-.15995,-.17058,.33036,-.20569,-.1343,.34829,-.18608,-.18882,.29153,.15858,-.1876,.29916,.15354,-.15291,.34487,.12039,-.17993,.30432,.19955,-.1717,.31735,.15354,-.15291,.34487,.15858,-.1876,.29916,.23809,-.15167,.28877,.21556,-.12015,.34618,.19955,-.1717,.31735,-.20569,-.1343,.34829,-.23562,-.11069,.32615,-.23361,-.15602,.29158,.21556,-.12015,.34618,.23809,-.15167,.28877,.25417,-.10927,.28308,.25417,-.10927,.28308,.24359,.01545,.29903,.21556,-.12015,.34618,.21556,-.12015,.34618,.24359,.01545,.29903,.20667,.01738,.34125,.24359,.01545,.29903,.2231,.05455,.29706,.20667,.01738,.34125,-.05066,.02427,.35054,65e-5,.02314,.33321,29e-5,.06065,.30091,65e-5,.02314,.33321,.05356,.07273,.31178,29e-5,.06065,.30091,.20667,.01738,.34125,.2231,.05455,.29706,.16715,.07188,.31303,-.21963,.06605,.30903,-.21643,.01441,.33403,-.17212,.09638,.30395,-.17212,.09638,.30395,-.21643,.01441,.33403,-.18447,.0211,.34712,-.05307,.07786,.30122,-.17212,.09638,.30395,-.10819,.03737,.33528,-.05066,.02427,.35054,-.05307,.07786,.30122,-.10819,.03737,.33528,29e-5,.06065,.30091,-.05307,.07786,.30122,-.05066,.02427,.35054,15e-5,-.17494,.32325,29e-5,-.13341,.34818,-.0462,-.16782,.34867,29e-5,-.13341,.34818,15e-5,-.17494,.32325,.05666,-.16994,.34958,-.15995,-.17058,.33036,-.11874,-.16205,.32915,-.16185,-.11763,.36411,.05666,-.16994,.34958,.12039,-.17993,.30432,.11262,-.11967,.34759,.15354,-.15291,.34487,.11262,-.11967,.34759,.12039,-.17993,.30432,.21556,-.12015,.34618,.15354,-.15291,.34487,.19955,-.1717,.31735,-.16185,-.11763,.36411,-.11874,-.16205,.32915,-.10823,-.11392,.34556,-.18447,.0211,.34712,-.23562,-.11069,.32615,-.20569,-.1343,.34829,-.18447,.0211,.34712,-.23695,-.02315,.31255,-.23562,-.11069,.32615,-.05425,-.12816,.36179,29e-5,-.13341,.34818,65e-5,.02314,.33321,-.23695,-.02315,.31255,-.18447,.0211,.34712,-.21643,.01441,.33403,.15572,.01252,.35024,.10451,.00249,.33757,.11262,-.11967,.34759,65e-5,.02314,.33321,-.05066,.02427,.35054,-.05425,-.12816,.36179,-.10823,-.11392,.34556,-.10819,.03737,.33528,-.15191,.01046,.34961,.10451,.00249,.33757,.11055,.05563,.31102,.05319,.01661,.35138,.15572,.01252,.35024,.11055,.05563,.31102,.10451,.00249,.33757,-.15191,.01046,.34961,-.17212,.09638,.30395,-.18447,.0211,.34712,-.10819,.03737,.33528,-.17212,.09638,.30395,-.15191,.01046,.34961,.05319,.01661,.35138,.05356,.07273,.31178,65e-5,.02314,.33321,.11055,.05563,.31102,.05356,.07273,.31178,.05319,.01661,.35138,.15572,.01252,.35024,.16715,.07188,.31303,.11055,.05563,.31102,.20667,.01738,.34125,.16715,.07188,.31303,.15572,.01252,.35024,-.20569,-.1343,.34829,-.15995,-.17058,.33036,-.16185,-.11763,.36411,-.11874,-.16205,.32915,-.08111,-.17904,.3353,-.05425,-.12816,.36179,-.0462,-.16782,.34867,-.05425,-.12816,.36179,-.08111,-.17904,.3353,-.0462,-.16782,.34867,29e-5,-.13341,.34818,-.05425,-.12816,.36179,.05666,-.16994,.34958,.05586,-.13092,.36306,29e-5,-.13341,.34818,.05666,-.16994,.34958,.11262,-.11967,.34759,.05586,-.13092,.36306,.16364,-.11037,.36313,.15354,-.15291,.34487,.21556,-.12015,.34618,-.05425,-.12816,.36179,-.10823,-.11392,.34556,-.11874,-.16205,.32915,.15354,-.15291,.34487,.16364,-.11037,.36313,.11262,-.11967,.34759,-.18447,.0211,.34712,-.20569,-.1343,.34829,-.16185,-.11763,.36411,-.10823,-.11392,.34556,-.15191,.01046,.34961,-.16185,-.11763,.36411,.05586,-.13092,.36306,.05319,.01661,.35138,29e-5,-.13341,.34818,.05319,.01661,.35138,65e-5,.02314,.33321,29e-5,-.13341,.34818,.10451,.00249,.33757,.05319,.01661,.35138,.05586,-.13092,.36306,.11262,-.11967,.34759,.10451,.00249,.33757,.05586,-.13092,.36306,.11262,-.11967,.34759,.16364,-.11037,.36313,.15572,.01252,.35024,-.16185,-.11763,.36411,-.15191,.01046,.34961,-.18447,.0211,.34712,-.05425,-.12816,.36179,-.05066,.02427,.35054,-.10819,.03737,.33528,-.10823,-.11392,.34556,-.05425,-.12816,.36179,-.10819,.03737,.33528,.20667,.01738,.34125,.15572,.01252,.35024,.16364,-.11037,.36313,.16364,-.11037,.36313,.21556,-.12015,.34618,.20667,.01738,.34125],G3=[[[-.6368,.15039],[-.56875,.29787],[-.48941,.38554],[-.35667,.46127],[-.22492,.36487],[-.21562,.2331],[-.45257,-.03001],[-.53701,-.0559],[-.61255,.02938],[-.64044,.07528]],[[.14727,.44568],[.31254,.45621],[.44715,.35021],[.5585,.19646],[.56841,.10544],[.56688,.0281],[.48259,-.04562],[.39392,-.04637],[.13859,.26476],[.11407,.34856]]],V3=[[-.18744,.02779],[-.069,.06753],[.08146,.06513],[.17426,.01372],[.18724,-.02182],[.16522,-.05106],[.09308,-.09779],[-.08242,-.10057],[-.12452,-.08165],[-.19134,-.02068]],W3=[[-.29874,.2673,.55597],[.26909,.27386,.56592]],Gr={targetY:1.42,pitch:.159,fov:18,phoneDepth:21};function X3(){const i=new et,e=new et,t=new et,n=new et,s=new et,r=new et;i.name="reference-sculpted-panda",i.add(e,s,r),e.add(t),t.add(n),e.scale.setScalar(.95);const o=new He(15855852),a=new He(1514012),l=R=>new P(R[0],R[1],R[2]),c=new oi({vertexColors:!0,flatShading:!0,roughness:.46,metalness:0,envMapIntensity:.3,specularIntensity:.7,fog:!1});c.onBeforeCompile=R=>{R.fragmentShader=R.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
   float pandaPale=step(.30,max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b)));
   roughnessFactor=mix(.46,.78,pandaPale);
  `).replace("#include <tonemapping_fragment>",`#include <tonemapping_fragment>
   if(pandaPale>.5){
    vec3 n=normalize(normal),key=normalize(mat3(viewMatrix)*vec3(-3.0,6.0,5.0)),fill=normalize(mat3(viewMatrix)*vec3(4.0,3.0,-3.0));
    float illumination=.62+.45*max(0.0,dot(n,key))+.13*max(0.0,dot(n,fill));
    gl_FragColor.rgb=diffuseColor.rgb*illumination;
   }
  `)},c.customProgramCacheKey=()=>"panda-reference-physical-fur-v10";const h=new pt({color:725016,roughness:.2,metalness:.08,envMapIntensity:1,fog:!1}),d=(R,V,K=.09)=>{const N=R.getAttribute("position"),F=[];for(let Y=0;Y<N.count;Y+=3){const X=(N.getX(Y)+N.getX(Y+1)+N.getX(Y+2))/3,ie=(N.getY(Y)+N.getY(Y+1)+N.getY(Y+2))/3,Le=(N.getZ(Y)+N.getZ(Y+1)+N.getZ(Y+2))/3,Te=(typeof V=="function"?V(X,ie,Le):V)?a:o,D=1-K*(.5+.5*Math.sin(X*37+ie*51+Le*17));for(let T=0;T<3;T++)F.push(Te.r*D,Te.g*D,Te.b*D)}return R.setAttribute("color",new Ye(F,3)),R.computeVertexNormals(),R},f=R=>{const V=new yt;return V.setAttribute("position",new Ye(R,3)),V},u=(R,V,K,N=!1)=>{const F=new Be(d(V,N),c);return F.name=R,K.add(F),F},g=(R,V,K,N,F=!1,Y=2)=>{const X=new fo(1,Y);X.rotateY(.19),X.rotateZ(.11);const ie=u(R,X,V,F);return ie.position.copy(l(K)),ie.scale.copy(l(N)),ie},x=new fo(1,4);x.rotateY(.17),x.rotateZ(.09);const m=x.getAttribute("position"),p=[],y=[],_=[],v=(R,V)=>{const K=[];for(let N=0;N<R.length;N++){const F=R[N],Y=R[(N+1)%R.length],X=V?F.d>=0:F.d<=0,ie=V?Y.d>=0:Y.d<=0;if(X&&K.push(F),X!==ie){const Le=F.d/(F.d-Y.d);K.push({v:F.v.clone().lerp(Y.v,Le),s:F.s.clone().lerp(Y.s,Le),d:0})}}return K};for(let R=0;R<m.count;R+=3){const V=[];for(let K=0;K<3;K++){const N=m.getX(R+K),F=m.getY(R+K),Y=m.getZ(R+K),X=F*.88+.5*Math.max(0,F)**2,ie=new P(N*.86*(F>0?1+.32*F:1+(.3+.4*Math.min(0,Y))*F),F*.88,Y*.65),Le=ie.clone();Le.y=X+.36*Math.max(0,-Y)*Math.max(0,1-Math.abs(F-.18)/.9);const Te=Y>0?.5+.08*Y-.12*Math.abs(N)-.32*N*N:.37-.11*Math.max(0,-Y)-.56*N*N;V.push({v:Le,s:ie,d:X-Te})}for(const K of[!1,!0]){const N=v(V,K),F=(K?a:o).clone().multiplyScalar(.94+.06*(.5+.5*Math.sin(R*1.21)));for(let Y=1;Y<N.length-1;Y++)for(const X of[0,Y,Y+1])p.push(...N[X].v.toArray()),y.push(...N[X].s.toArray()),_.push(F.r,F.g,F.b)}}x.dispose();const w=f(p);w.setAttribute("color",new Ye(_,3)),w.computeVertexNormals();const E=new Be(w,c);E.name="continuous-shoulders-belly-rump",s.add(E);const b=Array.from({length:w.getAttribute("position").count},(R,V)=>[p[V*3+1],y[V*3+1]]),A=[];for(const R of k3)A.push(...z3[R]);const M=d(f(A),!1,.2),S=M.getAttribute("position"),L=M.getAttribute("color"),I=[],O=[],B=[],q=[];n.position.set(0,-.34,.34);for(let R=0;R<S.count;R+=3){const V=(S.getX(R)+S.getX(R+1)+S.getX(R+2))/3,K=(S.getY(R)+S.getY(R+1)+S.getY(R+2))/3,N=(S.getZ(R)+S.getZ(R+1)+S.getZ(R+2))/3,F=K<-.34&&Math.abs(V)<.37&&N>.39;for(let Y=0;Y<3;Y++)(F?B:I).push(S.getX(R+Y),S.getY(R+Y)+(F?.34:0),S.getZ(R+Y)-(F?.34:0)),(F?q:O).push(L.getX(R+Y),L.getY(R+Y),L.getZ(R+Y))}const j=(R,V,K,N)=>{const F=f(V);F.setAttribute("color",new Ye(K,3)),F.computeVertexNormals();const Y=new Be(F,c);return Y.name=R,N.add(Y),Y};j("sculpted-cranium-and-muzzle",I,O,t),j("hinged-sculpted-chin",B,q,n);const J=(R,V)=>{const K=new N0(l([R,V,2]),l([0,0,-1])),N=new P;let F=0;for(let Y=0;Y<S.count;Y+=3){const X=new P().fromBufferAttribute(S,Y),ie=new P().fromBufferAttribute(S,Y+1),Le=new P().fromBufferAttribute(S,Y+2);K.intersectTriangle(X,ie,Le,!1,N)&&(F=Math.max(F,N.z))}return F};for(const R of[-1,1]){const V=g("rounded-ear-"+R,t,[R*.57,.59,-.08],[.235,.27,.18],!0,1);V.rotation.z=-R*.13}const W=[];for(const R of[-1,1]){const V=G3[R===-1?0:1],K=[],N=V.reduce((Le,Te,D)=>Le+Te[0]*V[(D+1)%V.length][1]-Te[1]*V[(D+1)%V.length][0],0),F=N>0?1:-1;for(let Le=0;Le<S.count;Le+=3){let Te=[0,1,2].map(D=>new P().fromBufferAttribute(S,Le+D));if(!Te.every(D=>D.z<=0)){for(let D=0;D<V.length&&Te.length;D++){const T=V[D],G=V[(D+1)%V.length],$=ee=>F*((G[0]-T[0])*(ee.y-T[1])-(G[1]-T[1])*(ee.x-T[0])),ae=[];for(let ee=0;ee<Te.length;ee++){const De=Te[ee],me=Te[(ee+1)%Te.length],Ce=$(De),Ie=$(me);Ce>=0&&ae.push(De),Ce>=0!=Ie>=0&&ae.push(De.clone().lerp(me,Ce/(Ce-Ie)))}Te=ae}for(let D=1;D<Te.length-1;D++)for(const T of[0,D,D+1])K.push(Te[T].x,Te[T].y,Te[T].z+.003)}}u("teardrop-eye-patch-"+R,f(K),t,!0);const Y=new et;Y.position.copy(l(W3[R===-1?0:1])),t.add(Y),W.push(Y);const X=new Be(new Dn(.069,20,14),h);X.scale.set(1,1.05,.76),Y.add(X);const ie=new Be(new Dn(.01,8,6),new Kt({color:15265266,fog:!1}));ie.position.set(-.021,.025,.047),Y.add(ie)}const le=V3.slice().reverse(),ce=[];for(let R=0;R<le.length;R++){const V=le[R],K=le[(R+1)%le.length],N=[V[0]*.85,V[1]*.84+.006,.045],F=[K[0]*.85,K[1]*.84+.006,.045];ce.push(V[0],V[1],0,K[0],K[1],0,...F,V[0],V[1],0,...F,...N,0,-.01,.066,...N,...F,0,0,-.055,K[0],K[1],0,V[0],V[1],0)}u("broad-sculpted-nose",f(ce),t,!0).position.set(0,-.105,J(0,-.105)+.012);const oe=new Be(new Dn(1,20,12),new Kt({color:5987416,fog:!1}));oe.position.set(0,-.355,.765),oe.scale.set(.245,.005,.04),t.add(oe);const fe=[],Ae=[],Pe=(R,V,K)=>{const N=[];for(let F=0;F<R.length;F+=9){const Y=V<0?[0,2,1]:[0,1,2];for(const X of Y){const ie=K(l(R.slice(F+X*3,F+X*3+3)));ie.x*=V,N.push(...ie.toArray())}}return N};for(const R of[-1,1]){const V=Pe(Cc,R,X=>{const ie=at.clamp((X.z+.05)/.6,0,1);return X.x-=.04*ie,X.y+=.14*ie,X}),K=Pe(Cc,R,X=>{const ie=at.clamp((X.z+.15)/.8,0,1);return X.x-=.1*(1-ie)+.53*ie,X.y-=.05*(1-ie)+1.12*ie,X.z+=.3*(1-ie)+.27*ie,X});fe.push({m:u("continuous-arm-"+R,f(V),i,!0),sit:V,stand:K});const N=new et;N.name="sculpted-curled-hand-"+R,i.add(N),Ae.push({side:R,group:N}),u("palm-fingers-thumb-"+R,f(Pe(H3,R,X=>X)),N,!0);const F=Pe(Ac,R,X=>{const ie=.22*(1-at.clamp((X.y-.2)/.5,0,1)),Le=X.x,Te=X.z-.22;return X.x=Le*Math.cos(ie)+Te*Math.sin(ie)+.8+.12*(1-at.clamp((X.y-.245)/.55,0,1)),X.z=-Le*Math.sin(ie)+Te*Math.cos(ie)+.22,X}),Y=Pe(Ac,R,X=>(X.x=X.x*1.04+.75,X.z=(X.z-.4*(1-at.clamp(X.y/.9,0,1)))*.78-.51,X.y*=1.16,X));fe.push({m:u("continuous-thigh-foot-"+R,f(F),i,!0),sit:F,stand:Y})}const te=u("pointed-white-tail",new Un(1,0),r);te.scale.set(.155,.22,.13),te.rotation.x=-.2;let ne=NaN,ve=NaN;const we=(R,V=0)=>{if(R===ne&&V===ve)return;const K=R!==ne;ne=R,ve=V;const N=at.clamp(R,0,1);if(e.position.set(-.09*(1-N)*(1-V),2.33-.1*N,.025+.48*N),e.rotation.x=-.22*(1-N)*(1-V)-.88*V+.08*N,e.rotation.y=-.21*(1-N)*(1-V),t.rotation.z=.294*(1-N)*(1-V),s.position.set(0,.86+.56*N,-.065-.17*N),s.rotation.x=.58*N,r.position.set(0,-.61-.26*N,-.53+.25*N).applyEuler(s.rotation).add(s.position),r.rotation.x=.2*N,K)for(const F of fe){const Y=F.m.geometry.getAttribute("position");for(let X=0;X<Y.count;X++)Y.setXYZ(X,at.lerp(F.sit[X*3],F.stand[X*3],N),at.lerp(F.sit[X*3+1],F.stand[X*3+1],N),at.lerp(F.sit[X*3+2],F.stand[X*3+2],N));Y.needsUpdate=!0,F.m.geometry.computeVertexNormals(),F.m.geometry.computeBoundingSphere()}if(K){const F=w.getAttribute("position");for(let Y=0;Y<F.count;Y++)F.setY(Y,at.lerp(b[Y][0],b[Y][1],N));F.needsUpdate=!0,w.computeVertexNormals(),w.computeBoundingSphere()}for(const{side:F,group:Y}of Ae)Y.position.set(F*(.96-.5*N),1.56-1.29*N,.55+.27*N),Y.rotation.set(-.1-1.12*N,0,-F*.56*(1-N));oe.scale.y=.005+.12*V,n.position.y=-.34-.055*V,i.userData.quadruped=N,i.userData.lookUp=V},Ee=l([0,-.34,.87]),ze=()=>i.localToWorld(r.position.clone().add(new P(0,-.09,-.1)));Object.assign(i.userData,{species:"giant-panda",style:"polygon-sculpture",limbStyle:"continuous-limbs-curled-fingers",reconstruction:"reference-calibrated-anatomy-v10",backAnatomy:"white-skull-black-shoulder-band-white-rump-pointed-tail",triangles:0}),i.traverse(R=>{R instanceof Be&&(R.castShadow=!0,i.userData.triangles+=(R.geometry.index?.count??R.geometry.getAttribute("position").count)/3)}),we(0),i.updateWorldMatrix(!0,!0);const ot=new Ct().setFromObject(i);return i.scale.setScalar(3/(ot.max.y-ot.min.y)),i.userData.volumeDepth=(ot.max.z-ot.min.z)*i.scale.z,M.dispose(),{root:i,head:e,jaw:n,belly:s,tail:r,eyes:W,mouth:Ee,ready:Promise.resolve(),pose:we,outlet:ze}}function q3(i){const e=Math.max(0,i),t=n=>(n=Math.max(0,Math.min(1,n)),n*n*(3-2*n));return{phase:e<1?"offering":e<2?"turning":e<3?"ejecting":"complete",swallow:t((e-.3)/.7),lookUp:e<1?t(e/.16):1-t((e-1)/.3),turn:t(e-1),stance:t((e-1.12)/.88),eject:Math.max(0,Math.min(1,e-2))}}class Y3{material;base=new He;hot=new He(16737562);glow=new He;decorated=new WeakSet;level=0;levelKey="";uniforms={forgeTime:{value:0},forgeFrenzy:{value:0},forgeCosmos:{value:0},forgeHeat:{value:0},forgeWorldToSword:{value:new st}};constructor(e){this.material=e.clone(),this.material.metalness=.78,this.material.roughness=.36,this.decorate(this.material),this.setLevel(0,"iron")}decorate(e){this.decorated.has(e)||(this.decorated.add(e),e.onBeforeCompile=t=>{Object.assign(t.uniforms,this.uniforms),t.uniforms.forgeHeatResponse={value:e.userData.forgeHeat??.25},t.uniforms.forgeCosmosCoverage={value:e.userData.cosmosCoverage??.985},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
#include <opaque_fragment>`)},e.customProgramCacheKey=()=>"whole-sword-pbr-rainbow-cosmos-v5",e.needsUpdate=!0)}setLevel(e,t){const n=e+":"+t;if(n===this.levelKey)return;this.levelKey=n,this.level=e;const r=[[0,t==="bronze"?14199912:t==="cold"?11069166:12964054],[3,11652804],[6,10731213],[10,12694478],[14,14273702],[15,11652048],[25,9216953],[29,14474440],[99,15066843]];let o=r[0],a=r[r.length-1];for(let l=1;l<r.length;l++)if(e<=r[l][0]){o=r[l-1],a=r[l];break}this.base.set(o[1]).lerp(new He(a[1]),at.clamp((e-o[0])/(a[0]-o[0]),0,1))}update(e,t,n,s=!1){this.uniforms.forgeTime.value=e,this.uniforms.forgeFrenzy.value=n?1:0,this.uniforms.forgeCosmos.value=s?1:0,this.uniforms.forgeHeat.value=t,this.material.color.copy(this.base).lerp(this.hot,t*.68),this.material.emissive.copy(this.base).multiplyScalar(0),this.material.emissive.add(this.glow.copy(this.hot).multiplyScalar(t*.85)),this.material.emissiveIntensity=1}setTransform(e){e.updateWorldMatrix(!0,!1),this.uniforms.forgeWorldToSword.value.copy(e.matrixWorld).invert()}get color(){return this.material.color.getHexString()}}const io={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ni{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const j3=new Y0(-1,1,1,-1,0,1);class K3 extends yt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}}const J3=new K3;class So{constructor(e){this._mesh=new Be(J3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,j3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wh extends Ni{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ui.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new So(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Rc extends Ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Z3 extends Ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Pc{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wh(io),this.copyPass.material.blending=Yn,this.clock=new H1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Rc!==void 0&&(o instanceof Rc?n=!0:o instanceof Z3&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Q3 extends Ni{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const $3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class vs extends Ni{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Yt(r,o,{type:rn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Yt(r,o,{type:rn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=$3;this.highPassUniforms=ui.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ui.clone(io.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,blending:Ta,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new Kt,this._fsQuad=new So(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=vs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=vs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}vs.BlurDirectionX=new se(1,0);vs.BlurDirectionY=new se(0,1);const Vr={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new se(1/1024,1/512)}},vertexShader:`

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

		}`},Wr={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new se(1/1024,1/512)}},vertexShader:`

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

		}`},fa={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new se(1/1024,1/512)}},vertexShader:`

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

		}`};class e5 extends Ni{constructor(){super(),this._edgesRT=new Yt(1,1,{depthBuffer:!1,type:rn}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Yt(1,1,{depthBuffer:!1,type:rn}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Pt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=Jt,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Pt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=qt,this._searchTexture.minFilter=qt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=ui.clone(Vr.uniforms),this._materialEdges=new Ft({defines:Object.assign({},Vr.defines),uniforms:this._uniformsEdges,vertexShader:Vr.vertexShader,fragmentShader:Vr.fragmentShader}),this._uniformsWeights=ui.clone(Wr.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Ft({defines:Object.assign({},Wr.defines),uniforms:this._uniformsWeights,vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader}),this._uniformsBlend=ui.clone(fa.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Ft({uniforms:this._uniformsBlend,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader}),this._fsQuad=new So(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const Xr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class t5 extends Ni{constructor(){super(),this.uniforms=ui.clone(Xr.uniforms),this.material=new P1({name:Xr.name,uniforms:this.uniforms,vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader}),this._fsQuad=new So(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===th?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===w0?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ih&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class n5{constructor(e,t,n){this.renderer=e;const s=e.getContext(),r=s.getInternalformatParameter(s.RENDERBUFFER,s.RGBA16F,s.SAMPLES);this.samples=Math.max(0,...Array.from(r).filter(a=>a<=4)),this.sceneTarget=new Yt(1,1,{type:rn,samples:this.samples}),this.sceneTarget.texture.name="SwordGlow.antialiased-scene",this.bloomComposer=new Pc(e),this.bloomComposer.renderToScreen=!1,this.bloomComposer.addPass(new Q3(t,n)),this.bloom=new vs(new se(256,256),.31,.22,1.3),this.bloomComposer.addPass(this.bloom),this.composer=new Pc(e,new Yt(1,1,{type:rn,depthBuffer:!1}));const o=new Wh({uniforms:{baseTexture:{value:null},bloomTexture:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D baseTexture;uniform sampler2D bloomTexture;varying vec2 vUv;void main(){gl_FragColor=texture2D(baseTexture,vUv)+texture2D(bloomTexture,vUv);}"});o.uniforms.baseTexture.value=this.sceneTarget.texture,o.uniforms.bloomTexture.value=this.bloom.renderTargetsHorizontal[0].texture,this.composer.addPass(o),this.samples===0&&this.composer.addPass(new e5),this.composer.addPass(new t5)}composer;bloomComposer;bloom;sceneTarget;black=new Kt({color:0});samples;resize(e,t){const n=this.renderer.getPixelRatio();this.sceneTarget.setSize(Math.round(e*n),Math.round(t*n)),this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.bloomComposer.setPixelRatio(1);const s=Math.min(1,512/Math.max(e,t));this.bloomComposer.setSize(Math.round(e*s),Math.round(t*s))}render(e,t,n,s,r,o=!0){if(this.renderer.info.reset(),!n||!r){this.renderer.render(e,t);return}const a=new Map,l=new Map,c=e.background,h=this.renderer.shadowMap.enabled,d=r.userData.materials;try{for(const u of e.children)u!==r&&(a.set(u,u.visible),u instanceof ur||(u.visible=!1));o||r.traverse(u=>{u instanceof Be&&u.material!==d?.inlay&&u.material!==d?.gem&&u.material!==r.userData.referenceFx?.glow&&(l.set(u,u.material),u.material=this.black)}),e.background=new He(0),this.renderer.shadowMap.enabled=!1,this.bloom.strength=s?.4:o?.31:.22,this.bloomComposer.render()}finally{a.forEach((u,g)=>g.visible=u),l.forEach((u,g)=>g.material=u),e.background=c,this.renderer.shadowMap.enabled=h}const f=this.renderer.getRenderTarget();try{this.renderer.setRenderTarget(this.sceneTarget),this.renderer.clear(),this.renderer.render(e,t)}finally{this.renderer.setRenderTarget(f)}this.composer.render()}dispose(){this.black.dispose(),this.sceneTarget.dispose();for(const e of[this.composer,this.bloomComposer]){for(const t of e.passes)t.dispose();e.dispose()}}}const pa=1024,ma=448,Bs=["#ff967f","#efc06e","#b9e3a0","#b4d9ec","#edb8de"],Lc=["破坏","损伤","维持","成功","大成功"],ga=i=>i>=1e12?i.toExponential(2):Math.floor(i).toLocaleString("zh-CN"),Dc=new WeakMap;function i5(i,e,t,n){const s=e.session,r=s?.phase==="forge"||s?.phase==="finished",o=!!s&&wn(s),a=!!s?.superGod,l=o?Math.max(0,(s.frenzyUntil-Date.now())/1e3).toFixed(1):"";i.setTransform(i.canvas.width/pa,0,0,i.canvas.height/ma,0,0),i.clearRect(0,0,pa,ma);let c=Dc.get(i.canvas);if(!c||c.width!==i.canvas.width||c.height!==i.canvas.height){c=document.createElement("canvas"),c.width=i.canvas.width,c.height=i.canvas.height;const f=i;i=c.getContext("2d"),i.setTransform(c.width/pa,0,0,c.height/ma,0,0);const u=i.createLinearGradient(0,0,1024,380);u.addColorStop(0,"#302721"),u.addColorStop(.16,"#493b30"),u.addColorStop(.27,"#6e5c4b"),u.addColorStop(.34,"#514236"),u.addColorStop(.53,"#302721"),u.addColorStop(.76,"#403329"),u.addColorStop(.9,"#514337"),u.addColorStop(1,"#29221e"),i.fillStyle=u,i.fillRect(0,0,1024,448);for(let x=0;x<340;x++){const m=x*31.73%448,p=x*197.31%1024;i.strokeStyle=x%3?"rgba(236,226,211,.045)":"rgba(12,9,7,.12)",i.lineWidth=.55,i.beginPath(),i.moveTo(p,m),i.lineTo(Math.min(1024,p+140+x%160),m),i.stroke()}const g=i.createLinearGradient(0,0,0,448);g.addColorStop(0,"rgba(249,234,213,.13)"),g.addColorStop(.2,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(13,8,5,.26)"),i.fillStyle=g,i.fillRect(0,0,1024,448),i.lineWidth=2,i.strokeStyle="rgba(227,204,174,.58)",i.beginPath(),i.moveTo(5,425),i.lineTo(5,23),i.lineTo(23,5),i.lineTo(1001,5),i.stroke(),i.strokeStyle="rgba(12,8,6,.85)",i.lineWidth=4,i.beginPath(),i.moveTo(1019,23),i.lineTo(1019,425),i.lineTo(1001,443),i.lineTo(23,443),i.stroke(),Dc.set(f.canvas,c),i=f}i.save(),i.setTransform(1,0,0,1,0,0),i.drawImage(c,0,0),i.restore();const h=(f,u,g,x,m="#f6eada",p=!1,y=940)=>{i.shadowBlur=0,i.fillStyle=m,i.font=`${p?"600 ":""}${x}px "Noto Sans CJK SC","Microsoft YaHei",sans-serif`,i.fillText(f,u,g,y)},d=(f,u,g,x,m=3)=>{i.fillStyle=x,i.shadowColor=x,i.shadowBlur=9,i.fillRect(f,u,g,m),i.shadowBlur=0};if(i.textAlign="left",h(s?Sn(s.blade,s.level,e.showLegacySwords).name:"锻造台",40,66,44,"#fff4e5",!0,775),i.textAlign="right",s&&h("+"+s.level,984,66,48,"#fff4e5",!0,160),i.textAlign="left",r){h("当前价值",40,142,26,"#ded1be"),i.textAlign="right",h(ga(n.value)+" G",984,154,62,"#fff0cf",!1,740),i.textAlign="left";const f=s?.strikes.at(-1),u=f?{break:0,damage:1,unchanged:2,success:3,great:4}[f.result]:3;let g="点台面落锤";if(f&&(g=f.superGod?"超神 +"+(f.after-f.before):Lc[u]+(f.after===f.before?"":` ${f.after>f.before?"+":""}${f.after-f.before}`)),h(g,40,207,32,a?"#b9d9ff":f?Bs[u]:"#ded1be",!0,480),f){const p=f.afterValue-f.beforeValue;h(`${p>=0?"+":"−"}${ga(Math.abs(p))} G  ·  ${f.valueMultiplier.toFixed(2).replace(/0$/,"")}倍`,40,246,26,"#f4e7d2",!1,500)}else h("随时收剑，保住价值",40,246,26,"#ded1be",!1,500);i.textAlign="right",h(a?"超神":o?`入神 ${l}s`:`入神蓄力 ${s?.frenzyCharge||0}/10`,984,207,27,a?"#b9d9ff":o?"#ffd5a1":"#ded1be",!1,430),i.textAlign="left";for(let p=0;p<10;p++){const y=a||o||p<(s?.frenzyCharge||0);i.fillStyle=y?a?"#bddeff":"#ffe7b7":"#55483b",i.shadowColor=a?"#719cff":"#ff9a43",i.shadowBlur=y?12:0,i.fillRect(568+p*42,232,27,12),i.shadowBlur=0}const x=[t.break,t.damage,t.unchanged,t.success,t.great];for(let p=0;p<5;p++){const y=40+p*192;d(y,280,172,Bs[p]),i.textAlign="center",h(Lc[p],y+86,325,30,Bs[p],!0,180),h((x[p]/100).toFixed(1)+"%",y+86,369,36,Bs[p],!1,180)}i.textAlign="left";let m=40;for(let p=0;p<5;p++){const y=944*x[p]/1e4;y>0&&d(m,410,y,Bs[p],5),m+=y}}else{h(n.cue,40,155,40,"#fff0cf",!0,944);const{min:f,max:u}=y0(e.furnaceLevel,e.relics.includes("ember"));h(s?.phase==="heat"?`炉火 ${Math.round(n.heat)}%`:"点炉子入炉 · 点铸剑台放剑",40,240,34,"#f3dcc0",!1,940),h(s?.phase==="heat"?`${f}%—${u}% 取剑最佳`:n.result||"准备好后，开始锻造",40,296,27,"#ded1be",!1,940),i.fillStyle="#785234",i.fillRect(40,374,944,6),s?.phase==="heat"&&d(40,374,944*Math.min(100,Math.max(0,n.heat))/100,"#ffc176",6)}return[n.cue,n.result,ga(n.value),a?"超神":o?"入神":"蓄力",l].join(" · ")}function s5(i){const e=new et;e.name="relic-"+i;const t=new oi({color:14268533,metalness:.86,roughness:.25,clearcoat:.35}),n=new pt({color:15982508,metalness:.82,roughness:.19}),s=new pt({color:5268856,metalness:.85,roughness:.25}),r=new pt({color:2504256,metalness:.68,roughness:.35}),o=new pt({color:6636600,roughness:.72}),a=new oi({color:5486500,metalness:.25,roughness:.19,clearcoat:1}),l=new oi({color:10192348,metalness:.35,roughness:.16,clearcoat:1}),c=new oi({color:16754510,emissive:16738341,emissiveIntensity:.32,metalness:.25,roughness:.18,clearcoat:1}),h=(_,v,w=0,E=0,b=0,A=e)=>{const M=new Be(_,v);return M.position.set(w,E,b),M.castShadow=!0,M.receiveShadow=!0,A.add(M),M},d=(_,v,w,E,b=0,A=0,M=0,S=e)=>h(Ys(_,v,w,Math.min(_,v,w)*.18),E,b,A,M,S),f=(_,v,w,E=0,b=0,A=0)=>h(new sn(_,v,10,40),w,E,b,A),u=(_,v,w=0,E=0,b=0)=>h(new Dn(_,24,16),v,w,E,b),g=(_,v,w=0,E=0,b=.1)=>{const A=h(new Un(_,0),v,w,E,b);return A.scale.z=.6,A},x=(_,v,w,E=0,b=0,A=0)=>{const M=h(new En(_,_,v,48),w,E,b,A);return M.rotation.x=Math.PI/2,M},m=(_,v,w,E)=>{const b=new dn;for(let A=0;A<v*2;A++){const M=A*Math.PI/v+Math.PI/2,S=A%2?_*.45:_;A?b.lineTo(Math.cos(M)*S,Math.sin(M)*S):b.moveTo(Math.cos(M)*S,Math.sin(M)*S)}return b.closePath(),h(new fn(b,{depth:.026,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2}),w,0,0,E)};if(i==="hammer"){const _=new et;e.add(_),_.rotation.z=-.28,d(.07,.5,.075,o,0,-.08,0,_);for(let v=0;v<6;v++)d(.087,.019,.09,t,0,-.28+v*.047,0,_);d(.52,.21,.22,s,0,.19,0,_);for(const v of[-.245,.245])d(.06,.24,.25,n,v,.19,0,_);d(.13,.24,.24,t,0,.19,0,_),d(.072,.085,.02,a,0,.19,.135,_)}else if(i==="anvil"){d(.53,.09,.28,r,0,-.25),d(.44,.06,.25,t,0,-.19),d(.19,.32,.2,s,0,-.015),d(.54,.11,.28,s,0,.17),d(.58,.045,.3,n,0,.24);for(const _ of[-.22,.22])d(.09,.11,.25,s,_,-.19),u(.018,t,_,-.23,.15);g(.072,a,0,-.015,.12)}else if(i==="ember"){const _=g(.29,c,0,.05,0);_.scale.set(.8,1.3,.7),_.rotation.y=.3,f(.17,.027,t,0,-.13,.04).rotation.x=1.05,d(.39,.065,.28,r,0,-.29),d(.33,.035,.24,t,0,-.245);for(const v of[-.14,.14]){const w=d(.035,.22,.04,t,v,-.14,.08);w.rotation.z=-v*2}}else if(i==="guard"){f(.235,.032,t,0,.03),f(.195,.012,n,0,.03,.025),u(.15,a,0,.025,.055).scale.set(1,.86,.5);for(const v of[-.105,.105]){const w=g(.071,t,v,.15,.04);w.rotation.z=v*2,u(.018,r,v*.55,.05,.14)}g(.075,l,0,-.235,.015),f(.044,.012,t,0,.32),u(.023,n,0,-.08,.13)}else if(i==="lucky"){const _=[new se(.15,-.19),new se(.18,-.15),new se(.13,-.05),new se(.12,.12),new se(.07,.21),new se(0,.23)];h(new V0(_,48),t),f(.17,.02,n,0,-.17).rotation.x=Math.PI/2,u(.043,s,0,-.24),f(.065,.02,t,0,.29),d(.014,.1,.012,r,0,-.13,.155);for(const v of[-.065,.065])g(.032,a,v,.02,.12)}else if(i==="stellar")u(.21,l).scale.set(1.08,.8,.62),f(.24,.025,t).scale.y=.78,f(.28,.009,n).rotation.z=.42,u(.095,a,0,0,.145).scale.set(.8,1,.45),d(.027,.12,.02,r,0,0,.195),u(.022,n,.04,.045,.2),m(.34,8,t,-.08);else if(i==="rhythm"){d(.42,.055,.22,r,0,-.26),d(.34,.025,.2,n,0,-.22);for(const v of[-.15,.15]){const w=d(.037,.44,.07,t,v,-.015);w.rotation.z=v*.55}const _=d(.028,.42,.05,s,0,.025,.06);_.rotation.z=-.25,g(.09,a,.035,.19,.07),f(.045,.014,n,0,-.17,.08),d(.31,.04,.08,t,0,.23),u(.025,n,0,-.17,.11)}else if(i==="coin"||i==="master"){x(.25,.07,t),f(.23,.017,n,0,0,.045),x(.2,.025,r,0,0,.05),i==="master"?(m(.185,6,t,.07),g(.074,l,0,0,.12)):(d(.12,.22,.035,t,0,0,.09),d(.21,.035,.035,t,0,0,.105),g(.055,a,0,0,.135));for(let _=0;_<16;_++){const v=_*Math.PI/8;u(.009,n,Math.cos(v)*.218,Math.sin(v)*.218,.062)}if(i==="master")for(const _ of[-.09,.09]){const v=d(.1,.2,.035,o,_,-.28,-.02);v.rotation.z=_*2}}else if(i==="steady"){f(.22,.064,s),f(.25,.014,n,0,0,.045),f(.18,.013,t,0,0,.06);for(let _=0;_<6;_++){const v=_*Math.PI/3;g(.038,a,Math.cos(v)*.22,Math.sin(v)*.22,.07)}d(.13,.1,.13,t,0,.22,.02),g(.06,l,0,.24,.1)}else if(i==="salvage"){u(.235,o,0,-.055).scale.set(1,1.05,.65),d(.26,.08,.2,o,0,.16),f(.105,.02,t,0,.17,.04).rotation.x=Math.PI/2;for(const w of[-.13,.13]){const E=d(.025,.33,.027,t,w,-.05,.14);E.rotation.z=w*.4}d(.19,.15,.028,r,0,-.03,.158),g(.06,a,0,-.03,.19);const v=d(.06,.19,.04,n,.05,.25);v.rotation.z=-.4}else if(i==="case"){d(.43,.5,.19,o),d(.37,.43,.025,r,0,0,.108);for(const _ of[-.21,.21])d(.035,.52,.22,t,_,0);for(const _ of[-.24,.24])d(.43,.038,.22,t,0,_);for(const _ of[-.105,0,.105])d(.023,.29,.025,n,_,.01,.13),d(.07,.025,.04,t,_,-.13,.145),d(.025,.08,.04,o,_,-.18,.13);g(.05,a,0,.22,.14)}e.rotation.y=-.16,e.rotation.x=.07,e.userData.art="sculpted-metal-gem-v1",e.updateMatrixWorld(!0);const p=e.matrixWorld.clone().invert(),y=new Map;e.traverse(_=>{if(_ instanceof Be){const v=_.material,w=y.get(v)||[];w.push(_),y.set(v,w)}});for(const[_,v]of y){if(v.length<2)continue;const w=v.map(A=>{const M=A.geometry.index?A.geometry.toNonIndexed():A.geometry.clone();return M.applyMatrix4(p.clone().multiply(A.matrixWorld)),M}),E=yo(w,!1);if(w.forEach(A=>A.dispose()),!E)continue;for(const A of v)A.removeFromParent(),A.geometry.dispose();const b=new Be(E,_);b.castShadow=!0,b.receiveShadow=!0,e.add(b)}for(const _ of[t,n,s,r,o,a,l,c])y.has(_)||_.dispose();return e}function Ic(i){return s5(i)}function r5(i,e,t){e.caseIds.map(s=>e.swords.find(r=>r.id===s&&r.disposal==="COLLECTED")).filter(s=>!!s).forEach((s,r)=>{const o=x0(t,s.blade,s.level,s.material,e.showLegacySwords);o.quaternion.setFromAxisAngle(new P(0,0,1),Math.PI/2).multiply(new fi().setFromAxisAngle(new P(1,0,0),Math.PI/2)),o.scale.setScalar(.8),o.position.set((r%3-1)*1.3,Math.floor(r/3)*3.4+.85,.29),o.name="collected-"+s.id,i.add(o),o.userData.collectionId=s.id})}function va(i){i.traverse(e=>{if(e instanceof Be){e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n instanceof Kt&&n.map?.dispose(),n.dispose()}}),i.clear()}const Uc=at.clamp;class o5{constructor(e){this.host=e,this.renderer=new E3({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.localClippingEnabled=!0,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setClearColor(1512207),this.renderer.outputColorSpace=Ut,this.renderer.info.autoReset=!1,this.renderer.toneMapping=w0,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$c,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.domElement.setAttribute("aria-label","3D锻造工坊：铁砧、熔炉、食铁兽、遗物机及神秘商人"),e.appendChild(this.renderer.domElement),this.surfaces=new T3(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.forgeMaterials=I3(Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.bladeMat.dispose(),this.bladeFinish=new Y3(this.surfaces.get("steel")),this.bladeMat=this.bladeFinish.material,this.uprightOak=this.surfaces.get("oak",9).clone();for(const l of["map","bumpMap","roughnessMap"]){const c=this.uprightOak[l].clone();c.center.set(.5,.5),c.rotation=Math.PI/2,this.uprightOak[l]=c}const t=new P3,n=new po(this.renderer);this.scene.environment=n.fromScene(t,.04).texture,this.scene.environmentIntensity=.72,t.dispose(),n.dispose(),this.swordEnvironment=L3(this.renderer),bc(this.swordEnvironment.texture),this.scene.fog=new O0(1643535,.028),this.roomAmbient=new U1(12241884,3547932,.38),this.scene.add(this.roomAmbient);const s=this.roomKey=new z1(16768956,1.45);s.position.set(-3,7,4),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-7,right:7,top:6,bottom:-4}),s.shadow.bias=-4e-4,s.shadow.normalBias=.018,this.scene.add(s);const r=this.roomFill=new eo(11786479,4,12);r.position.set(4,4,3),this.scene.add(r);const o=this.forgeKey=new F1(16768951,38,9,.52,.68,2);o.position.set(-.7,5.1,2.35),o.target.position.set(.1,1.25,.1),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.bias=-3e-4,o.shadow.normalBias=.014,this.scene.add(o,o.target),this.furnaceLight.position.set(-3.15,1.45,-1.2),this.scene.add(this.furnaceLight),this.buildRoom(),this.buildForge(),this.buildCat(),this.buildRelics(),this.buildCollection(),this.scene.add(this.wallRelics),this.sword=x0(this.bladeMat,"great",0,"iron"),this.enchantFittings(this.sword),this.bladeShapeKey="great:0:iron",this.scene.add(this.sword),this.swordGlow=new n5(this.renderer,this.scene,this.camera),this.host.dataset.swordName=Sn("great",0).name,this.host.dataset.swordShape=this.bladeShapeKey,this.batchStaticGeometry(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize();const a=this.cameraPose();this.target.copy(a.target),this.camera.position.copy(a.position),this.camera.fov=a.fov,this.camera.updateProjectionMatrix(),this.camera.lookAt(this.target),this.raf=requestAnimationFrame(this.tick),jr&&(window.__workshop=this),e.dataset.ready="true",e.dataset.station="forge",e.dataset.glContext="ready",this.renderer.domElement.addEventListener("webglcontextlost",()=>{e.dataset.glContext="lost"})}renderer;scene=new B0;camera=new Wt(46,1,.1,50);target=new P(0,1.45,-.3);view="forge";sword=new et;swordPlace="anvil";swordScale=1;bladeShapeKey="";heat=0;move=null;targets={furnace:{box:new Ct(new P(-4.05,0,-2.35),new P(-2.25,4.5,-.9)),anchor:new P(-3.15,2.55,-.96)},anvil:{box:new Ct(new P(-1.65,.8,-.7),new P(1.65,1.65,.9)),anchor:new P(0,1.55,.25)},cat:{box:new Ct(new P(2.85,1,-2.1),new P(5.25,4.35,.2)),anchor:new P(4.05,2.95,-.5)},relics:{box:new Ct(new P(4.75,0,-2.4),new P(6.75,3.3,-1.4)),anchor:new P(5.75,2.6,-1.4)}};hammer=new et;cat=new et;head=new et;jaw=new et;belly;tail;catEyes=[];catBlink=()=>{};catPose=()=>{};catOutlet=()=>new P;holdRear=!1;swallowPlane=new si(new P(0,1,0),1e3);tributeReflections=new Map;catMouth=new P(0,-.115,.52);bladeMat=new pt({color:11914449,metalness:.82,roughness:.3});bladeFinish;swordGlow;bladePhase="";bladeCoolingAt=-10;furnaceLight=new eo(16740390,20,8,2);board;boardInfo={cue:"把剑送入炉火",result:"",value:0,heat:0};setBoardInfo(e,t,n,s){this.boardInfo={cue:e,result:t,value:n,heat:s},this.state&&this.drawBoard(this.state,this.boardProb)}boardFrame=new et;forgeBenchBounds=new Ct;forgeHammerBounds=new Ct;boardProb;boardWide=!1;boardLayout={width:0,height:0,top:0,bottom:0};boardCanvas=document.createElement("canvas");lastBoard="";boardPaintAt=-1/0;boardSessionKey="";submittedBoardHits=0;submittedBladeFinish="metal";state=null;merchantRoot=new et;whip=new et;punishment=null;relicSlots=[];relicCabinet=new et;wallRelics=new et;collectionRoot=new et;collectionSwords=new et;displayKey="";metrics=new Au;targetFps=60;drawCost=0;fastFrames=0;targetsAt=-1/0;targetsPose=new st;targetsVersion="";swordCache=new Map;materialPool=new Map;sharedMaterials=new Set;warmup;sparkPool=[];sparkGeometry=new Dn(.025,4,3);sparkMaterials=[new Kt({color:16773037}),new Kt({color:16761944})];sideProofKey="";boardHidden=!1;setBoardHidden(e){this.boardHidden=e,this.host.dataset.boardHidden=String(e),this.forgeProofPending=!0}hitStart=-10;hitSpeed=1;hitResult="success";hitImpact=!1;onHitImpact=null;hitImpactAt=-10;hammerRest=new P(1.25,1.65,-.38);hammerRaised=new P(1.25,1.85,-.38);hammerContact=new P(1.2,1.75,.11);hammerBottomOffset=0;contactShapeKey="";tributeStart=-10;tributeElapsed=0;tributeDone=null;tributeCount=3;rewards=[];fx=[];flames=[];raf=0;prev=0;renderAt=0;poseAt=-1/0;poseCache=null;gpuFrame=null;submittedTribute=0;submittedStation="forge";submittedCameraReady=!1;destroyed=!1;completedFrames=0;renderedTribute=0;paused=!1;reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;observer;scratch=new P;surfaces;forgeMaterials;roomKey;roomFill;roomAmbient;forgeKey;swordEnvironment;uprightOak;forgeSwordY=1.5;forgeProofPending=!0;forgeProofState="";fitCamera=new Wt(46,1,.1,50);lastForgeOffset=-1;pendingForgeProof=null;pendingCatProof=null;pausedAt=0;clockOffset=0;clockNow(){return(this.paused?this.pausedAt:performance.now())/1e3-this.clockOffset}setPaused(e){this.destroyed||e===this.paused||(e?(this.pausedAt=performance.now(),this.paused=!0,cancelAnimationFrame(this.raf),this.raf=0):(this.clockOffset+=(performance.now()-this.pausedAt)/1e3,this.paused=!1,this.prev=0,this.raf=requestAnimationFrame(this.tick)))}material(e,t=0,n=.85){return new pt({color:e,metalness:t,roughness:n})}mesh(e,t,n,s=0,r=0,o=0){const a=new Be(e,t);return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}box(e,t,n,s,r,o=0,a=0,l=0){return this.mesh(Ys(e,t,n),s,r,o,a,l)}contact(e,t,n,s,r,o,a=.45){const l=document.createElement("canvas");l.width=l.height=128;const c=l.getContext("2d"),h=c.createRadialGradient(64,64,10,64,64,64);h.addColorStop(0,"rgba(8,5,3,.9)"),h.addColorStop(.55,"rgba(8,5,3,.45)"),h.addColorStop(1,"rgba(8,5,3,0)"),c.fillStyle=h,c.fillRect(0,0,128,128);const d=new Be(new ws(r,o),new Kt({map:new Li(l),transparent:!0,opacity:a,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));d.rotation.x=-Math.PI/2,d.position.set(t,n,s),e.add(d)}sphere(e,t,n,s,r,o,a,l){const c=this.mesh(new Dn(1,24,16),a,l,e,t,n);return c.scale.set(s,r,o),c}cylinder(e,t,n,s,r,o,a,l,c=16){return this.mesh(new En(e,t,n,c),s,r,o,a,l)}batchStaticGeometry(){this.scene.updateMatrixWorld(!0);const e=new Map;this.scene.traverse(t=>{if(!(t instanceof Be)||t instanceof $r||Array.isArray(t.material)||t.material.transparent)return;for(let r=t;r;r=r.parent)if(r===this.cat||r===this.hammer||r===this.sword||r===this.boardFrame||r===this.merchantRoot||r===this.wallRelics||r===this.collectionRoot||r===this.relicCabinet||this.relicSlots.includes(r))return;const n=[t.material.id,t.castShadow,t.receiveShadow].join(":"),s=e.get(n)||[];s.push(t),e.set(n,s)});for(const t of e.values()){if(t.length<2)continue;const n=t.map(o=>{const a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();return a.applyMatrix4(o.matrixWorld),a}),s=yo(n,!1);if(n.forEach(o=>o.dispose()),!s)continue;const r=new Be(s,t[0].material);r.castShadow=t[0].castShadow,r.receiveShadow=t[0].receiveShadow,t.forEach(o=>{o.removeFromParent(),o.geometry.dispose()}),s.computeBoundingSphere(),this.scene.add(r)}}buildRoom(){const e=this.surfaces.get("stone",14).clone();e.color.set(7827043),e.map=e.map.clone(),e.map.repeat.set(9,9),this.box(16,.15,32,e,this.scene,0,-.1,8);const t=this.material(2893087);this.box(15,12,.35,t,this.scene,0,5.8,-3.4);const n=this.surfaces.get("stone",7),s=Ys(.94,.47,.31,.028),r=new st,o=(l,c,h)=>{for(let d=0;d<l;d+=4)for(let f=0;f<c;f+=4){const u=Math.min(l,d+4),g=Math.min(c,f+4),x=new $r(s,n,(u-d)*(g-f));let m=0;for(let p=d;p<u;p++)for(let y=f;y<g;y++)h?(r.makeRotationY(Math.PI/2),r.setPosition(h*7.4,.12+p*.5,-3.1+y*.98+p%2*.35)):r.makeTranslation(-7.4+y*.98+p%2*.47,.12+p*.5,-3.15),x.setMatrixAt(m,r),x.setColorAt(m,new He().setHSL(.078,.1,.53+Math.sin((p*c+y)*12.3)*.07)),m++;x.receiveShadow=!0,x.computeBoundingSphere(),this.scene.add(x)}};o(24,16,0);for(const l of[-1,1])this.box(.35,18,30,t,this.scene,l*7.65,8.8,10),o(36,31,l);this.host.dataset.roomLayout="left-rack/front-forge/right-relics";const a=this.material(2564638);for(let l=0;l<11;l++)this.box(.016,.006,11,a,this.scene,-7+l*1.4,-.018,0);for(let l=0;l<9;l++)this.box(15,.006,.016,a,this.scene,0,-.018,-5+l*1.4)}makeBench(e,t,n,s,r=!1){const o=new et;o.position.set(n,0,s),this.scene.add(o);const a=r?this.forgeMaterials.wood[0]:this.surfaces.get("oak",2),l=r?this.forgeMaterials.casting:this.surfaces.get("iron"),c=this.material(r?7760215:9340788,.76,.48),h=e/2-.28,d=t/2-.22;for(let u=0;u<5;u++)this.box(e,.26,t/5-.013,r?this.forgeMaterials.wood[u]:this.surfaces.get("oak",2+u%2),o,0,.94,-t/2+t/5*(u+.5));const f=this.surfaces.get("endgrain");for(const u of[-1,1])this.box(.014,.238,t-.025,f,o,u*(e/2+.003),.94,0);for(const u of[-h,h])for(const g of[-d,d]){this.box(.31,.83,.31,this.uprightOak,o,u,.415,g),this.box(.33,.12,.33,l,o,u,.12,g),this.box(.34,.27,.035,l,o,u,.76,g+Math.sign(g)*.17);for(const x of[.68,.84])this.sphere(u,x,g+Math.sign(g)*.193,.025,.025,.015,c,o)}for(const u of[-d,d]){this.box(e-.38,.21,.16,a,o,0,.66,u),this.box(e-.5,.15,.17,a,o,0,.26,u);for(const g of[-1,1]){const x=this.box(.17,.7,.17,this.uprightOak,o,g*(h-.19),.48,u);x.rotation.z=g*-.55}}for(const u of[-h,h])this.box(.17,.15,t-.28,a,o,u,.26,0);for(const u of[-1,1]){this.box(e-.1,.095,.042,l,o,0,.865,u*(t/2+.021));for(let g=0;g<7;g++)this.sphere(-e/2+.19+g*(e-.38)/6,.865,u*(t/2+.048),.023,.023,.014,c,o)}return this.contact(o,0,-.016,0,e+.5,t+.65,.52),o}buildForge(){const e=this.forgeMaterials.wood[1],t=this.forgeMaterials.casting,n=this.forgeMaterials.face,s=this.material(2107952,.7,.57),r=this.material(10849108,.74,.4),o=new et;o.position.set(.15,0,.1),o.scale.set(1.55,1.6,2),o.name="forged-anvil",this.scene.add(o),this.box(1.67,.056,1.1,s,o,0,-.03,0),this.mesh(A3(),t,o);for(const b of[-1,1]){const A=C3(),M=A.getAttribute("position");for(let L=0;L<M.count;L++)M.setX(L,-.68+(M.getX(L)+.68)*.6);A.computeVertexNormals();const S=this.mesh(A,this.forgeMaterials.edge,o);b===1&&(S.rotation.y=Math.PI)}this.mesh(yc(.14,.675),t,o).scale.set(1.16,1,1.09),this.mesh(yc(.115,.815),[n,this.forgeMaterials.edge],o).scale.set(1.16,1,1.09);for(const b of[-.57,.57])for(const A of[-.36,.36])this.box(.38,.13,.26,t,o,b,.045,A),this.box(.11,.03,.16,this.forgeMaterials.edge,o,b,.12,A),this.cylinder(.038,.038,.027,this.forgeMaterials.hammer,o,b,.144,A,6);this.box(.115,.02,.115,s,o,.62*1.16,.76,-.17*1.09),this.cylinder(.033,.033,.02,s,o,.72*1.16,.76,.17*1.09,16);const c=new dn;c.moveTo(-.11,.08),c.lineTo(-.08,.14),c.lineTo(-.02,.1),c.quadraticCurveTo(0,.12,.02,.1),c.lineTo(.08,.14),c.lineTo(.11,.08),c.quadraticCurveTo(.14,-.1,0,-.13),c.quadraticCurveTo(-.14,-.1,-.11,.08);const h=new fn(c,{depth:.009,bevelEnabled:!0,bevelSize:.004,bevelThickness:.003,bevelSegments:2});this.mesh(h,this.material(7956554,.65,.62),o,0,.51,.262).scale.setScalar(.65);for(const b of[-.026,.026])this.sphere(b,.52,.275,.009,.006,.004,s,o);const f=new et;f.position.set(1.25,1.65,-.38),f.rotation.z=-.3,this.scene.add(f),this.hammer=f,this.cylinder(.062,.079,1.34,e,f,0,.28,0,24);const u=R3();this.mesh(u,[this.forgeMaterials.hammer,this.forgeMaterials.edge],f,0,1.1,0);const g=u.getAttribute("position");let x=1/0;for(let b=0;b<g.count;b++)x=Math.min(x,g.getX(b)*Math.sin(1.38)+(g.getY(b)+1.1)*Math.cos(1.38));this.hammerBottomOffset=x,this.hammerContact.y=this.forgeSwordY+.035-x;const m=this.box(.15,.026,.14,this.forgeMaterials.casting,f,0,1.331,0);m.rotation.y=.12,this.box(.035,.016,.105,this.forgeMaterials.edge,f,.018,1.349,0),this.cylinder(.078,.086,.52,this.surfaces.get("leather"),f,0,-.13,0,24);for(let b=0;b<9;b++){const A=this.mesh(new sn(.083,.011,6,24),this.surfaces.get("leather"),f,0,.1-b*.055,0);A.rotation.x=Math.PI/2}for(const b of[.16,-.41])this.cylinder(.088,.088,.045,r,f,0,b,0,24);f.updateMatrixWorld(!0),this.forgeHammerBounds.setFromObject(f),this.boardCanvas.width=1536,this.boardCanvas.height=768,this.board=new Li(this.boardCanvas),this.board.colorSpace=Ut,this.board.anisotropy=4;const p=this.boardFrame;p.position.set(0,3.55,-1.45),this.scene.add(p);const y=(b,A,M)=>{const S=new dn;S.moveTo(-b/2+M,-A/2);for(const[L,I]of[[b/2-M,-A/2],[b/2,-A/2+M],[b/2,A/2-M],[b/2-M,A/2],[-b/2+M,A/2],[-b/2,A/2-M],[-b/2,-A/2+M]])S.lineTo(L,I);return S.closePath(),S},_=new fn(y(5,1.67,.09),{depth:.1,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:2,steps:1});_.translate(0,0,-.06),this.mesh(_,new oi({color:5455923,metalness:.92,roughness:.27,clearcoat:.3,clearcoatRoughness:.22}),p);const v=new W0(y(4.94,1.61,.085)),w=v.getAttribute("uv"),E=v.getAttribute("position");for(let b=0;b<E.count;b++)w.setXY(b,(E.getX(b)+2.47)/4.94,(E.getY(b)+.805)/1.61);this.mesh(v,new Kt({map:this.board,toneMapped:!1}),p,0,0,.071);for(const b of[-2.44,2.44])for(const A of[-.75,.75])this.sphere(b,A,.082,.012,.012,.007,r,p);p.traverse(b=>{b instanceof Be&&(b.material=b.material.clone(),b.material.depthTest=!1,b.material.depthWrite=!1,b.renderOrder=100,b.castShadow=!1,b.receiveShadow=!1)}),this.contact(this.scene,.1,-.016,.1,4,2.3,.65),this.buildFurnace(),o.updateMatrixWorld(!0),this.forgeBenchBounds.setFromObject(o),this.targets.anvil.box.copy(this.forgeBenchBounds),this.targets.anvil.box.max.y=this.forgeSwordY+.25,this.host.dataset.anvilSupport="cast-iron",this.host.dataset.anvilSilhouette="symmetric-double-horn",this.host.dataset.anvilCenter=JSON.stringify(o.position.toArray());for(const b of[this.hammerRest,this.hammerRaised,this.hammerContact])b.x-=.4;f.position.copy(this.hammerRest),f.updateMatrixWorld(!0),this.forgeHammerBounds.setFromObject(f)}buildFurnace(){const e=this.surfaces.get("iron"),t=this.surfaces.get("stone",7),n=this.material(2169365),s=new pt({color:3612697,emissive:16731146,emissiveIntensity:1.7,roughness:1}),r=new et;r.position.set(-3.15,0,-1.72),this.scene.add(r),this.box(1.64,1.07,1.25,n,r,0,.55,0);for(let c=0;c<3;c++)for(let h=0;h<3;h++)this.box(.54,.34,.08,t,r,-.55+h*.55,.2+c*.35,.665);this.box(1.37,1.22,.3,n,r,0,1.69,-.39);for(const c of[-.74,.74])for(let h=0;h<4;h++)this.box(.29,.34,1.16,t,r,c,1.27+h*.35,0);for(let c=0;c<11;c++){const h=c/11*Math.PI+.025,d=(c+1)/11*Math.PI-.025,f=new dn;f.moveTo(Math.cos(h)*.61,2.06+Math.sin(h)*.61),f.lineTo(Math.cos(h)*.92,2.06+Math.sin(h)*.92),f.absarc(0,2.06,.92,h,d,!1),f.lineTo(Math.cos(d)*.61,2.06+Math.sin(d)*.61),f.absarc(0,2.06,.61,d,h,!0),f.closePath();const u=new fn(f,{depth:1.14,bevelEnabled:!0,bevelSize:.013,bevelThickness:.012,bevelSegments:2,curveSegments:5});u.translate(0,0,-.57),this.mesh(u,t,r)}this.box(1.79,.11,1.58,e,r,0,1.1,.1),this.box(.9,1.68,.6,t,r,0,3.46,-.3);for(const c of[2.98,3.42,3.86])this.box(.94,.07,.64,e,r,0,c,-.3);const o=gs(88);for(let c=0;c<14;c++){const h=this.mesh(new k0(.15+o()*.07,0),c%3?s:e,r,-.53+c%5*.255,1.23+Math.floor(c/5)*.08,0+o()*.3);h.scale.y=.7,h.rotation.set(o(),o(),o())}const a=this.cylinder(.62,.62,.01,new Kt({color:16737559}),r,0,1.17,.04,32);a.scale.z=.75;for(let c=0;c<7;c++){const h=this.sphere(-.46+c*.15,1.43+Math.sin(c)*.06,.05,.055,.22+o()*.1,.055,new Kt({color:c%2?16761691:16747045,transparent:!0,opacity:.8}),r);h.castShadow=!1,h.userData.height=h.scale.y,this.flames.push(h)}for(let c=0;c<6;c++)this.cylinder(.023,.023,.5,e,r,-.57+c*.23,1.39,.65,10);const l=this.cylinder(.034,.034,1.42,e,r,0,1.28,.675,12);l.rotation.z=Math.PI/2,this.contact(r,0,-.016,.05,2.3,1.9,.65)}buildForgeProps(e){this.surfaces.get("oak",2);const t=this.surfaces.get("iron"),n=this.surfaces.get("steel"),s=new et;e.add(s),s.position.set(-1.25,1.1,.1),s.rotation.y=-.38;for(const h of[-1,1]){const d=new ho([new P(h*.08,0,.37),new P(h*.045,.016,0),new P(h*.1,.022,-.2),new P(h*.13,.018,-.32)]);this.mesh(new ar(d,16,.018,6,!1),t,s)}this.cylinder(.029,.029,.02,n,s,0,.033,.03,12);const r=this.box(.065,.055,.35,n,e,1.43,1.1,.49);r.rotation.y=.5;const o=gs(12),a=this.material(2435370,.35,.85),l=new $r(new X0(.022),a,22),c=new st;for(let h=0;h<22;h++)c.compose(new P((o()-.5)*2.3,1.08,o()*.72-.05),new fi().setFromEuler(new on(o(),o(),o())),new P(1+o(),.23,1+o())),l.setMatrixAt(h,c);e.add(l)}makeSword(e=!1){const t=new et,n=e?this.bladeMat:this.surfaces.get("steel").clone(),s=this.material(12163683,.8,.3),r=this.surfaces.get("leather").clone(),o=new Float32Array([0,0,-.29,0,0,.29,0,.065,0,1.95,0,-.29,1.95,0,.29,1.95,.065,0,2.42,0,0]),a=new yt;a.setAttribute("position",new Zt(o,3)),a.setAttribute("uv",new Ye([0,0,0,1,0,.5,.81,0,.81,1,.81,.5,1,.5],2)),a.setIndex([0,2,3,2,5,3,2,1,5,1,4,5,3,5,6,5,4,6,0,3,1,1,3,4]);const l=a.toNonIndexed();l.computeVertexNormals(),a.dispose();const c=this.mesh(l,n,t);c.name="blade";const h=new dn;h.moveTo(-.045,-.41),h.quadraticCurveTo(-.18,-.39,-.13,-.28),h.lineTo(-.1,-.08),h.lineTo(-.1,.08),h.lineTo(-.13,.28),h.quadraticCurveTo(-.18,.39,-.045,.41),h.lineTo(.035,.37),h.lineTo(.018,.08),h.lineTo(.018,-.08),h.lineTo(.035,-.37),h.closePath();const d=new fn(h,{depth:.12,bevelEnabled:!0,bevelSize:.016,bevelThickness:.016,bevelSegments:3,curveSegments:10});d.rotateX(-Math.PI/2),this.mesh(d,s,t,-.06,-.02,0);const f=this.cylinder(.062,.062,.56,r,t,-.38,.04,0);f.rotation.z=Math.PI/2;for(let u=0;u<9;u++){const g=this.mesh(new sn(.064,.007,5,20),r,t,-.16-u*.054,.04,0);g.rotation.y=Math.PI/2}for(const u of[-.12,-.66]){const g=this.cylinder(.072,.072,.03,s,t,u,.04,0,24);g.rotation.z=Math.PI/2}return this.sphere(-.71,.04,0,.1,.085,.085,s,t),this.sphere(-.72,.108,0,.035,.017,.035,this.material(4352625,.4,.23),t),t}enchantFittings(e){const t=new Set;e.traverse(n=>{if(n instanceof Be){const s=Array.isArray(n.material)?n.material:[n.material];for(const r of s)r instanceof pt&&r!==this.bladeMat&&!t.has(r)&&(t.add(r),this.bladeFinish.decorate(r))}})}releaseSword(e){const t=new Set;e.traverse(n=>{if(n instanceof Be){n.geometry.dispose();for(const s of Array.isArray(n.material)?n.material:[n.material])s!==this.bladeMat&&!this.sharedMaterials.has(s)&&t.add(s)}}),t.forEach(n=>n.dispose())}cachedSword(e,t,n,s){const r=[e,t,n,s].join(":");let o=this.swordCache.get(r);if(o)return this.swordCache.delete(r),this.swordCache.set(r,o),o;const a=Sn(e,t,s).theme;let l;if(a!=="legacy"&&(l=this.materialPool.get(a),!l)){l=J0(a),this.materialPool.set(a,l);for(const c of Object.values(l))this.sharedMaterials.add(c),this.bladeFinish.decorate(c),c.clippingPlanes=[this.swallowPlane]}return o=x0(this.bladeMat,e,t,n,s,l),this.enchantFittings(o),o.traverse(c=>{if(c instanceof Be)for(const h of Array.isArray(c.material)?c.material:[c.material])h.clippingPlanes=[this.swallowPlane]}),this.swordCache.set(r,o),this.pruneSwordCache(),o}pruneSwordCache(){for(;this.swordCache.size>6;){const e=[...this.swordCache].find(([t])=>t!==this.bladeShapeKey);if(!e)break;this.swordCache.delete(e[0]),this.releaseSword(e[1])}}queueSwordWarmup(e,t,n,s){this.warmup!==void 0&&cancelIdleCallback(this.warmup),!(!("requestIdleCallback"in window)||t>=99)&&(this.warmup=requestIdleCallback(r=>{this.warmup=void 0,!(this.destroyed||this.view!=="forge"||this.move||this.tributeDone||this.hostHammerBusy()||r.timeRemaining()<8)&&this.cachedSword(e,Math.min(99,t+1),n,s)}))}evolveSword(e,t,n,s){const r=e+":"+t+":"+n+":"+s;if(r===this.bladeShapeKey)return;const o=this.swordCache.get(this.bladeShapeKey);if(o)for(const l of[...this.sword.children])o.add(l);else this.releaseSword(this.sword),this.sword.clear();const a=this.cachedSword(e,t,n,s);for(const l of[...a.children])this.sword.add(l);this.sword.userData=a.userData,this.bladeShapeKey=r,this.host.dataset.swordName=Sn(e,t,s).name,this.host.dataset.swordShape=r,this.host.dataset.swordTheme=String(a.userData.theme||"forged"),this.host.dataset.swordSteelRoughness=String(a.userData.materials?.body?.roughness??"legacy"),this.forgeProofPending=!0,this.renderer.shadowMap.needsUpdate=!0,this.pruneSwordCache(),this.queueSwordWarmup(e,t,n,s)}buildCat(){const e=X3();this.cat=e.root,this.head=e.head,this.jaw=e.jaw,this.belly=e.belly,this.tail=e.tail,this.catEyes=e.eyes,this.catMouth.copy(e.mouth),this.catPose=e.pose,this.catOutlet=e.outlet,this.cat.position.set(4.05,1.05,-1.32),this.scene.add(this.cat),this.host.dataset.catAsset="loading",this.host.dataset.characterSpecies="giant-panda",this.host.dataset.characterModel=String(e.root.userData.reconstruction),this.host.dataset.characterStyle="polygon-sculpture",this.host.dataset.characterLimbs=String(e.root.userData.limbStyle),this.host.dataset.characterTriangles=String(e.root.userData.triangles),this.renderer.shadowMap.needsUpdate=!0,e.ready.then(()=>{this.host.dataset.catAsset="ready",this.host.dataset.characterTriangles=String(e.root.userData.triangles),this.host.dataset.characterVolumeDepth=String(e.root.userData.volumeDepth),this.renderer.shadowMap.needsUpdate=!0}).catch(s=>{this.host.dataset.catAsset="failed",this.host.dataset.catError=String(s),console.error(s)}),this.whip.position.set(.91,1.38,.51),this.whip.visible=!1,this.cat.add(this.whip),this.cylinder(.045,.05,.48,this.material(5320738,.1,.8),this.whip,0,.2,0);const t=new ho([new P(0,.44,0),new P(.32,.9,.04),new P(.83,.93,.22),new P(1.12,.34,.63),new P(.62,-.44,1.5)]);this.mesh(new ar(t,32,.023,6,!1),this.material(3744535,0,.8),this.whip);const n=this.makeBench(2.55,1.8,4.05,-1.35);this.contact(n,0,1.075,0,1.85,1.5,.65),this.box(2.4,.12,.65,this.material(5858407,.7,.36),this.scene,4.05,1.12,.36)}buildRelics(){const e=this.relicCabinet;e.position.set(6.95,0,2.35),e.rotation.y=-Math.PI/2,this.scene.add(e);const t=this.surfaces.get("oak",9),n=this.material(12162390,.82,.26),s=this.material(1846320,.58,.37),r=this.material(3491916,.72,.29),o=this.material(14861707,.84,.23),a=new pt({color:11592661,emissive:8902844,emissiveIntensity:.65,roughness:.3}),l=(x,m,p,y,_,v,w)=>this.mesh(Ys(x,m,p,Math.min(.055,x*.15,m*.15,p*.15)),y,e,_,v,w);l(3.65,5.65,.63,s,0,2.88,0),l(3.32,5.2,.12,r,0,2.9,.35);for(const x of[.15,5.67])l(3.94,.15,.94,s,0,x,.08),l(3.82,.055,.92,n,0,x+.095,.08),l(3.6,.09,.78,t,0,x+.17,.08);for(const x of[-1.76,1.76]){l(.18,5.27,.58,s,x,2.95,.37),l(.045,5.2,.035,n,x,2.95,.68);for(const m of[.46,5.42])l(.27,.18,.64,n,x,m,.36),this.sphere(x,m,.7,.027,.027,.014,o,e);for(let m=0;m<3;m++)l(.022,4.64,.025,r,x+(m-1)*.045,2.96,.69)}l(3.14,.025,.04,a,0,5.42,.54);for(let x=0;x<3;x++){const m=.43+x*1.66,p=m+.78;l(3.28,.12,.76,s,0,m,.4),l(3.26,.035,.77,n,0,m+.068,.4),l(3,.018,.025,a,0,m+.105,.75),l(3.18,1.45,.025,this.material(1517355,.28,.48),0,p+.02,.43);const y=this.cylinder(.43,.48,.08,r,e,-.96,m+.15,.6,40);y.scale.z=.6;const _=this.cylinder(.44,.44,.023,n,e,-.96,m+.2,.6,40);_.scale.z=.61;const v=new et;v.position.set(-.96,p,.65),v.scale.setScalar(1.72),e.add(v),this.relicSlots.push(v);for(const w of[-1.49,1.49]){const E=l(.1,.28,.1,n,w,m-.08,.41);E.rotation.z=w<0?-.5:.5}}for(const x of[-1.55,1.55])l(.27,.22,.58,s,x,.02,.12);const c=new eo(12182745,8,6);c.position.set(-.6,3.7,1.8),e.add(c),this.contact(e,0,-.08,.15,4.3,1.5,.6),this.host.dataset.relicArt="sculpted-metal-gem-v1",e.scale.y=1.12,this.host.dataset.relicShelfCount="3",e.updateMatrixWorld(!0),this.targets.relics.box.setFromObject(e),this.targets.relics.anchor.copy(e.localToWorld(new P(0,2.6,.65))),this.host.dataset.relicYaw=String(-90);const h=this.merchantRoot;h.position.set(4.25,.09,-1.17),h.visible=!1,this.scene.add(h);const d=new pt({color:3164763,roughness:.8,transparent:!0,opacity:.88,emissive:792355,emissiveIntensity:.36}),f=this.material(3753547,.12,.79),u=new pt({color:11007454,emissive:5560250,emissiveIntensity:1.15,roughness:.22});this.mesh(new _o(.47,1.45,14),d,h,0,.78,0),this.sphere(0,1.51,0,.31,.39,.3,f,h),this.sphere(0,1.63,-.065,.43,.4,.36,d,h);for(const x of[-.13,.13])this.sphere(x,1.52,.276,.055,.062,.035,u,h);this.cylinder(.37,.4,.1,n,h,0,.11,0);const g=this.cylinder(.035,.04,1.62,n,h,-.47,.83,.25);g.rotation.z=-.13,this.sphere(-.56,1.65,.25,.12,.12,.12,u,h)}buildCollection(){const e=this.collectionRoot;e.position.set(-7,.15,2.4),e.rotation.y=Math.PI/2,this.scene.add(e),this.host.dataset.collectionYaw=String(90);const t=this.surfaces.get("oak",9),n=this.material(12162390,.75,.32);this.box(4.25,7.4,.16,t,e,0,3.55,0);for(const s of[-2.1,2.1])this.box(.1,7.44,.24,n,e,s,3.55,.08);for(const s of[.42,3.82,7.22])this.box(4.17,.1,.4,t,e,0,s,.16);for(let s=0;s<2;s++)for(let r=0;r<3;r++)for(const o of[-.21,.21]){const a=this.mesh(new sn(.08,.019,8,16,Math.PI),n,e,(r-1)*1.3+o,s*3.4+.95,.25);a.rotation.z=Math.PI}e.scale.set(1.2,1.2,1),e.add(this.collectionSwords)}syncDisplays(e){const t=JSON.stringify([e.relicOffers,e.relics,e.relicRanks,e.caseIds,e.showLegacySwords]);if(t!==this.displayKey){this.displayKey=t,this.relicSlots.forEach((n,s)=>{va(n);const r=e.relicOffers[s];r&&n.add(Ic(r))}),va(this.wallRelics),this.box(4.5,.57,.08,this.surfaces.get("iron").clone(),this.wallRelics,0,0,0),e.relics.forEach((n,s)=>{const r=Ic(n);r.scale.setScalar(.66),r.position.set((s-(e.relics.length-1)/2)*.51,-.025,.1),this.wallRelics.add(r),this.mesh(new sn(.04,.012,6,16),this.material(12162390,.7,.3),this.wallRelics,r.position.x,.2,.09)});for(const n of[-2.05,2.05]){this.box(.1,.76,.14,this.material(3226176,.8,.3),this.wallRelics,n,-.07,0);for(const s of[-.32,.22])this.sphere(n,s,.09,.045,.045,.025,this.material(12162390,.7,.3),this.wallRelics)}va(this.collectionSwords),r5(this.collectionSwords,e,this.bladeMat.clone()),this.host.dataset.wallRelics=JSON.stringify(e.relics),this.host.dataset.relicSlots=JSON.stringify(e.relicOffers),this.host.dataset.collectionIds=JSON.stringify(e.caseIds),this.renderer.shadowMap.needsUpdate=!0}}positionWallRelics(){const e=this.wallRelics;e.visible=!0,e.position.set(0,3.05,-2.88),e.rotation.set(0,0,0),e.scale.setScalar(1),e.updateMatrixWorld(!0),this.host.dataset.wallRelicMount="world-wall",this.host.dataset.wallRelicWorld=JSON.stringify({position:e.position.toArray(),quaternion:e.quaternion.toArray(),scale:e.scale.toArray(),depthTest:!0})}resize(){const e=this.host.clientWidth,t=this.host.clientHeight;if(!e||!t)return;const n=Math.max(1,Math.min(devicePixelRatio,2,Math.sqrt(2e6/(e*t))));this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.swordGlow?.resize(e,t),this.host.dataset.renderPixelRatio=String(n),this.host.dataset.renderWidth=String(this.renderer.domElement.width),this.host.dataset.renderHeight=String(this.renderer.domElement.height),this.host.dataset.swordAntialias=this.swordGlow.samples?`MSAA${this.swordGlow.samples}`:"SMAA",this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.forgeProofPending=!0}ledgerLayout(){const e=this.host.clientWidth,t=this.host.clientHeight,n=t<520,s=e>=700,r=n?Math.min(e*.54,460):s?Math.min(e*.5,640):e-28,o=r*(448/1024),a=n?92:s?130:146;return{width:r,height:o,left:(e-r)/2,top:a,bottom:a+o,wide:s}}cameraPose(){const e=this.camera.aspect<.8;if(this.view==="forge"){const t=this.state?.session?.phase;if(t!=="finished"&&t!=="broken"){const o=t==="forge",a=this.host.clientWidth,l=this.host.clientHeight,c=this.ledgerLayout(),h=new P(e&&!o?-1.05:0,2.1,.1),d=h.clone().add(new P(0,5.2,8.4)),f=42,u=this.fitCamera;u.aspect=this.camera.aspect,u.fov=f,u.clearViewOffset(),u.updateProjectionMatrix();const g=[],x=this.forgeBenchBounds;for(const L of[x.min.x,x.max.x])for(const I of[x.min.y,x.max.y])for(const O of[x.min.z,x.max.z])g.push(new P(L,I,O));const m=this.forgeHammerBounds;for(const L of[m.min.x,m.max.x])for(const I of[m.min.y,m.max.y])for(const O of[m.min.z,m.max.z])g.push(new P(L,I,O));if(e&&!o)for(const L of[-4.08,-2.22])for(const I of[0,4.3])g.push(new P(L,I,-1));const p=e?a*.93:Math.min(a*.52,680),y=this.host.closest(".game")?.querySelector(".control:not([hidden])")?.getBoundingClientRect(),_=this.host.getBoundingClientRect(),v=this.host.closest(".game")?.querySelector(".station-nav")?.getBoundingClientRect(),w=Math.min(o&&y?y.top-_.top-18:l-20,v?v.top-_.top-18:l-20),E=(this.boardHidden?146:c.bottom)+20,b=Math.max(90,w-E);for(let L=0;L<4;L++){u.position.copy(d),u.lookAt(h),u.updateMatrixWorld(!0);const I=g.map(W=>W.clone().project(u)),O=I.map(W=>W.x),B=I.map(W=>W.y),q=Math.max(...O.map(Math.abs))*a,j=(Math.max(...B)-Math.min(...B))*l/2,J=Math.max(q/p,j/b);if(Math.abs(J-1)<.002)break;d.sub(h).multiplyScalar(J).add(h)}u.position.copy(d),u.lookAt(h),u.updateMatrixWorld(!0);const A=Math.max(...g.slice(0,8).map(L=>(1-L.clone().project(u).y)*l/2)),M=g.map(L=>(1-L.clone().project(u).y)*l/2),S=e&&!o?(Math.min(...M)+Math.max(...M)-E-w)/2/l:(A-w)/l;return Math.abs(S-this.lastForgeOffset)>5e-4&&(this.lastForgeOffset=S,this.forgeProofPending=!0),{position:d,target:h,offset:S,fov:f}}const n=new P(e?0:.35,e?6.4:5.6,e?9:6.4),s=new P(e?0:.35,2.05,-.3);let r=e?.2:.17;if(e){const o=this.host.closest(".game")?.querySelector(".control:not([hidden])")?.getBoundingClientRect(),a=this.host.getBoundingClientRect();if(o&&o.top>a.top+160){this.fitCamera.aspect=this.camera.aspect,this.fitCamera.updateProjectionMatrix(),this.fitCamera.position.copy(n),this.fitCamera.lookAt(s),this.fitCamera.updateMatrixWorld(!0);const l=new P(0,this.forgeSwordY-.03,.61).project(this.fitCamera);r=Math.max(r,((1-l.y)*a.height/2-(o.top-a.top-22))/a.height)}}return Math.abs(r-this.lastForgeOffset)>5e-4&&(this.lastForgeOffset=r,this.forgeProofPending=!0),{position:n,target:s,offset:r,fov:e?46:40}}if(this.view==="cat"){const t=Gr.phoneDepth,n=new P(4.05,1.05+Gr.targetY,-1.22),s=new P(4.05,n.y+(t-.1)*Math.tan(Gr.pitch),t-1.32);let r=e?.13:.1,o=e?Gr.fov:15.5;return this.punishment&&(n.x+=.35,s.x+=.35,o*=1.35),{position:s,target:n,offset:r,fov:o}}return this.sideCameraPose()}sideCameraPose(){const e=this.view==="collection",t=e?this.collectionRoot:this.relicCabinet;t.updateMatrixWorld(!0);const n=e?new Ct().setFromObject(t):new Ct(new P(-1.98,-.09,-.5),new P(1.98,5.96,.85)).applyMatrix4(t.matrixWorld),s=n.getCenter(new P),r=this.host.clientWidth,o=this.host.clientHeight,a=this.host.getBoundingClientRect(),l=this.host.closest(".game")?.querySelector(".topbar")?.getBoundingClientRect(),c=this.host.closest(".game")?.querySelector(".station-nav")?.getBoundingClientRect(),h=Math.max(92,(l?.bottom??76)-a.top+8),d=Math.min(o-76,(c?.top??o)-a.top-(e?12:58)),f=Math.max(150,d-h),u=r*.96;let g=this.camera.aspect<.8?55:40;const x=Math.tan(at.degToRad(g/2)),m=n.getSize(new P),p=Math.max(m.y/(2*x)*o/f,m.z/(2*x*this.camera.aspect)*r/u)+m.x/2,y=Math.min(12.5,p);return y<p&&(g=at.radToDeg(2*Math.atan(x*(p-m.x/2)/(y-m.x/2)))),{position:s.clone().add(new P(e?y:-y,0,0)),target:s,offset:(o-h-d)/(2*o),fov:g}}setStation(e){e!=="cat"&&this.holdRear&&(this.holdRear=!1,this.catPose(0),this.cat.rotation.y=0),this.view=e,this.host.dataset.station=e,this.forgeProofPending=!0,this.poseAt=-1/0;const t=e==="forge";this.roomKey.intensity=t?1.45:2.7,this.roomFill.intensity=t?4:11,this.roomAmbient.intensity=t?.38:.65,this.forgeKey.intensity=t?38:0,this.scene.environmentIntensity=t?.72:1,this.renderer.shadowMap.needsUpdate=!0}projectCatBounds(e,t=this.host.clientWidth,n=this.host.clientHeight){this.cat.updateWorldMatrix(!0,!0);const s=new P;let r=1/0,o=-1/0,a=1/0,l=-1/0;const c=e.projectionMatrix.clone().multiply(e.matrixWorldInverse);return this.cat.traverse(h=>{if(!(h instanceof Be)||!h.visible)return;let d=h.geometry.userData.pandaVisibilityPositions;if(!d){const u=h.geometry.getAttribute("position"),g=new Set,x=[];for(let m=0;m<u.count;m++){const p=u.getX(m),y=u.getY(m),_=u.getZ(m),v=p+":"+y+":"+_;g.has(v)||(g.add(v),x.push(p,y,_))}d=new Float32Array(x),h.geometry.userData.pandaVisibilityPositions=d}const f=c.clone().multiply(h.matrixWorld);for(let u=0;u<d.length;u+=3){s.fromArray(d,u).applyMatrix4(f);const g=(s.x+1)*t/2,x=(1-s.y)*n/2;r=Math.min(r,g),o=Math.max(o,g),a=Math.min(a,x),l=Math.max(l,x)}}),{left:r,right:o,top:a,bottom:l}}recordCatVisibility(){const e=this.host.clientHeight,t=this.projectCatBounds(this.camera),n=this.head.localToWorld(this.catMouth.clone()),s=this.host.closest(".game")?.querySelector(".control:not([hidden])")?.getBoundingClientRect(),r=new P(1,0,0).applyQuaternion(this.sword.quaternion),o=new P(0,1,0).applyQuaternion(this.sword.quaternion);this.pendingCatProof=JSON.stringify({phase:this.host.dataset.tribute||"idle",navTop:s?s.top-this.host.getBoundingClientRect().top:e,elapsed:this.tributeElapsed,jawAngle:this.jaw.rotation.x,headPitch:this.head.rotation.x,stance:this.cat.userData.quadruped||0,backAnatomy:this.cat.userData.backAnatomy,tail:this.tail.getWorldPosition(new P).toArray(),outlet:this.catOutlet().toArray(),rewardCount:this.rewards.length,swordPosition:this.sword.position.toArray(),swordVisible:this.sword.visible,swordUp:r.toArray(),swordFace:o.toArray(),bodyDepth:this.belly.scale.z,eyeOpen:this.catEyes[0]?.scale.y??1,turn:this.cat.rotation.y,mouth:n.toArray(),bounds:t})}recordForgeVisibility(){const e=this.host.clientWidth,t=this.host.clientHeight,n=(b,A,M)=>this.sword.localToWorld(new P(b,A,M)),s=b=>(b.project(this.camera),{x:(b.x+1)*e/2,y:(1-b.y)*t/2}),r=new Ct().setFromObject(this.sword),o=[];for(const b of[r.min.x,r.max.x])for(const A of[r.min.y,r.max.y])for(const M of[r.min.z,r.max.z])o.push(new P(b,A,M));const a=o.map(s),l=s(n(1,0,.29)),c=s(n(1,0,-.29));let h=0,d=0;const f=[],u=[];for(const b of[.45,1.2,1.85])for(const A of[-.13,.13]){let M=n(b,.065*(1-Math.abs(A)/.29),A);for(const[O,B]of[[0,0],[0,-.04],[0,.04],[.06,0],[-.06,0],[0,-.1],[0,.1],[.12,0],[-.12,0]]){const j=new Ns(n(b+O,1,A+B),new P(0,-1,0),0,3).intersectObject(this.sword,!0).find(J=>J.object.name.startsWith("blade"));if(j){M=j.point.clone();break}}const S=M.clone().sub(this.camera.position);u.push(s(M.clone()));const L=new Ns(this.camera.position,S.clone().normalize(),0,S.length()+.025);L.camera=this.camera;const I=L.intersectObjects(this.scene.children,!0).find(O=>O.object instanceof Be?!(Array.isArray(O.object.material)?O.object.material[O.face?.materialIndex??0]:O.object.material).transparent:!1);f.push(I?.object.name||"none");for(let O=I?.object||null;O;O=O.parent)if(O===this.sword){h++,I?.object.name.startsWith("blade")&&d++;break}}const g=[n(-.23,.087,0),n(-.39,.087,0),n(-.56,.087,0),n(-.06,.064,-.32),n(-.06,.064,.32)].map(s),x=(this.host.closest(".game")?.querySelector(".control:not([hidden])")?.getBoundingClientRect().top||this.host.clientHeight)-this.host.getBoundingClientRect().top,m=this.boardLayout.top,p=this.forgeBenchBounds,y=[];for(const b of[p.min.x,p.max.x])for(const A of[p.min.y,p.max.y])for(const M of[p.min.z,p.max.z])y.push(new P(b,A,M));const _=y.map(s),v={left:Math.min(..._.map(b=>b.x)),right:Math.max(..._.map(b=>b.x)),top:Math.min(..._.map(b=>b.y)),bottom:Math.max(..._.map(b=>b.y))},w=this.ledgerLayout(),E={left:w.left,right:w.left+w.width,top:m,bottom:this.boardLayout.bottom};this.pendingForgeProof=JSON.stringify({phase:this.state?.session?.phase||"idle",navTop:x,boardVisible:this.boardFrame.visible,boardTop:m,ledger:E,benchBounds:v,bounds:{left:Math.min(...a.map(b=>b.x)),right:Math.max(...a.map(b=>b.x)),top:Math.min(...a.map(b=>b.y)),bottom:Math.max(...a.map(b=>b.y))},faceHeight:Math.abs(l.y-c.y),visibleSamples:h,bladeSamples:d,sampleSurfaces:f,totalSamples:6,samples:u,hiltSamples:g}),this.forgeProofPending=!1}sync(e,t){const n=!this.state;this.state=e,this.boardProb=t;const s=e.session;if(this.merchantRoot.visible=!1,this.syncDisplays(e),this.tributeDone)return;this.sword.visible=s?.phase!=="broken";const r=s?.level||0,o=s?.blade||"great";this.swordScale=o==="short"?.72:o==="great"?1:.9,this.evolveSword(o,r,s?.material||"iron",e.showLegacySwords),n&&(this.swordPlace=s?.phase==="heat"?"furnace":"anvil"),this.move||this.applySwordPose(this.swordPlace);const a=[s?.id,s?.phase,s?.level,s?.hits,s?.superGod,e.showLegacySwords,this.displayKey].join(":");a!==this.forgeProofState&&(this.forgeProofState=a,this.forgeProofPending=!0);const l=s?.phase||"idle";l!==this.bladePhase&&(l==="forge"&&(this.bladeCoolingAt=this.clockNow()),this.bladePhase=l),this.bladeFinish.setLevel(r,s?.material||"iron"),this.drawBoard(e,t)}swordPose(e){const t=this.swordScale*(e==="anvil"?1:.52);return{position:e==="furnace"?new P(-3.15,1.53,-.71):new P(-.805*t-.4,this.forgeSwordY,.11),rotation:new fi().setFromEuler(new on(0,e==="furnace"?Math.PI/2:e==="anvil"?-.09:0,0)),scale:new P(t,t,t)}}applySwordPose(e){const t=this.swordPose(e);if(this.sword.position.copy(t.position),this.sword.quaternion.copy(t.rotation),this.sword.scale.copy(t.scale),this.host.dataset.swordPlace=e,e==="anvil"&&this.contactShapeKey!==this.bladeShapeKey){this.sword.updateMatrixWorld(!0);const s=new Ns(new P(this.hammerContact.x,this.forgeSwordY+1,this.hammerContact.z),new P(0,-1,0),0,2).intersectObject(this.sword,!0).find(r=>r.object.name.startsWith("blade"));s&&(this.hammerContact.y=s.point.y+.003-this.hammerBottomOffset),this.contactShapeKey=this.bladeShapeKey}}transferTo(e,t){this.move={start:this.clockNow(),from:this.sword.position.clone(),rotation:this.sword.quaternion.clone(),scale:this.sword.scale.clone(),to:e,done:t},this.host.dataset.swordPlace="moving",this.renderer.shadowMap.needsUpdate=!0}setHeat(e){this.heat=e}pick(e,t){const n=this.host.getBoundingClientRect(),s=new Ns;if(s.setFromCamera(new se((e-n.left)/n.width*2-1,1-(t-n.top)/n.height*2),this.camera),this.view==="collection")return null;const r=this.view==="forge"?["furnace","anvil","cat","relics"]:this.view==="cat"?["cat"]:["relics"];let o=null,a=1/0;for(const l of r){const c=s.ray.intersectBox(this.targets[l].box,new P);if(c){const h=c.distanceTo(s.ray.origin);h<a&&(a=h,o=l)}}return o}pickRelic(e,t){if(this.view!=="relics"||!this.state)return null;const n=this.host.getBoundingClientRect(),s=new Ns;s.setFromCamera(new se((e-n.left)/n.width*2-1,1-(t-n.top)/n.height*2),this.camera);for(let r=0;r<this.relicSlots.length;r++){const o=this.relicSlots[r];o.updateWorldMatrix(!0,!0);const a=new Ct(new P(-.55,-.27,-.18),new P(.55,.28,.3)).applyMatrix4(o.matrixWorld);if(this.state.relicOffers[r]&&s.ray.intersectsBox(a))return this.state.relicOffers[r]}return null}positionTargets(){const e=performance.now();if(e-this.targetsAt<33)return;const t=[this.view,this.displayKey,this.boardHidden,this.host.clientWidth,this.host.clientHeight,this.camera.fov.toFixed(3),this.camera.view?.offsetY.toFixed(2)].join(":");if(!this.camera.matrixWorld.elements.some((l,c)=>Math.abs(l-this.targetsPose.elements[c])>1e-5)&&t===this.targetsVersion)return;this.targetsAt=e,this.targetsVersion=t,this.targetsPose.copy(this.camera.matrixWorld);const s={};for(const[l,c]of Object.entries(this.targets)){const h=c.anchor.clone().project(this.camera),d=(h.x+1)*this.host.clientWidth/2,f=(1-h.y)*this.host.clientHeight/2;s[l]={x:d,y:f};const u=document.getElementById("target-"+l);if(u){u.style.left=d+"px",u.style.top=(l==="furnace"?f-28:f)+"px";const g=104,x=32,m=this.ledgerLayout(),p=l==="furnace"?f-28:f,y=l==="furnace"&&!this.boardHidden&&d+g/2>m.left&&d-g/2<m.left+m.width&&p>m.top&&p-x<m.bottom;u.dataset.inView=String(!y&&d>g/2+6&&d<this.host.clientWidth-g/2-6&&f>120&&f<this.host.clientHeight-110)}}this.host.dataset.targets=JSON.stringify(s);const r=document.getElementById("relic-list");r&&(r.hidden=this.view!=="relics"),this.view==="relics"&&(this.host.dataset.relicPoints=JSON.stringify(this.relicSlots.map(l=>{const c=l.getWorldPosition(new P).project(this.camera);return{x:(c.x+1)*this.host.clientWidth/2,y:(1-c.y)*this.host.clientHeight/2}})),this.relicSlots.forEach((l,c)=>{const h=r?.children[c];if(!h)return;const d=(m,p)=>{const y=this.relicCabinet.localToWorld(new P(m,l.position.y+p,.72)).project(this.camera);return{x:(y.x+1)*this.host.clientWidth/2,y:(1-y.y)*this.host.clientHeight/2,z:y.z}},f=d(-.26,.69),u=d(1.48,-.69),g=Math.abs(u.x-f.x),x=Math.abs(u.y-f.y);h.style.left=Math.min(f.x,u.x)+"px",h.style.top=Math.min(f.y,u.y)+"px",h.style.width=g+"px",h.style.height=x+"px",h.style.fontSize=Math.max(9,Math.min(14,g/12))+"px",h.hidden=f.z<-1||f.z>1||g<24||this.camera.position.x>this.relicCabinet.position.x-1}));const o=document.getElementById("wall-relic-trigger");if(o&&(o.hidden=this.view!=="forge",!o.hidden)){const l=new Ct().setFromObject(this.wallRelics),c=l.getCenter(new P).project(this.camera),h=l.min.clone().project(this.camera),d=l.max.clone().project(this.camera),f=Math.abs(h.x-d.x)*this.host.clientWidth/2,u=Math.abs(h.y-d.y)*this.host.clientHeight/2;o.style.left=(c.x+1)*this.host.clientWidth/2-f/2+"px",o.style.top=(1-c.y)*this.host.clientHeight/2-u/2+"px",o.style.width=f+"px",o.style.height=Math.max(24,u)+"px";const g=(1-c.y)*this.host.clientHeight/2;o.hidden=g<100||g>this.host.clientHeight-100,this.host.dataset.wallRelicPoint=JSON.stringify({x:(c.x+1)*this.host.clientWidth/2,y:g})}const a=document.getElementById("collection-list");a&&(a.hidden=this.view!=="collection"),this.view==="collection"&&a&&(this.state?.caseIds.map(c=>this.state.swords.find(h=>h.id===c&&h.disposal==="COLLECTED")).filter(Boolean)||[]).forEach((c,h)=>{const d=a.querySelector('[data-sword-id="'+c.id+'"]');if(!d)return;const f=(_,v)=>this.collectionRoot.localToWorld(new P(_,v,.48)).project(this.camera),u=(h%3-1)*1.3,g=Math.floor(h/3)*3.4,x=f(u-.61,g+3.59),m=f(u+.61,g+2.94),p=Math.abs(m.x-x.x)*this.host.clientWidth/2,y=Math.abs(m.y-x.y)*this.host.clientHeight/2;d.style.left=(Math.min(x.x,m.x)+1)*this.host.clientWidth/2+"px",d.style.top=(1-Math.max(x.y,m.y))*this.host.clientHeight/2+"px",d.style.width=p+"px",d.style.minHeight=y+"px",d.style.fontSize=Math.max(9,Math.min(14,p/9))+"px",d.hidden=x.z<-1||x.z>1||p<20||this.camera.position.x<this.collectionRoot.position.x+1})}drawBoard(e,t){if(this.view!=="forge")return;const n=[e.session?.id,e.session?.phase,e.session?.hits].join(":"),s=performance.now();if(n===this.boardSessionKey&&s-this.boardPaintAt<100)return;const r=e.session,o=this.boardInfo,a=!!r?.superGod,l=!!r&&wn(r),c=l?Math.max(0,(r.frenzyUntil-Date.now())/1e3).toFixed(1):"",h=t||{success:6500,great:1e3,unchanged:1500,damage:1e3,break:0},d=[this.boardWide,e.showLegacySwords,r?.level,r?.hits,r?.phase,o.value,r?.frenzyCharge,a,c,o.cue,o.result,Math.round(o.heat),...Object.values(h)].join(",");d!==this.lastBoard&&(this.lastBoard=d,this.boardSessionKey=n,this.boardPaintAt=s,this.host.dataset.boardText=i5(this.boardCanvas.getContext("2d"),e,h,o),this.host.dataset.boardStyle="brushed-metal",this.host.dataset.boardFinish="dark-brown-metal",this.host.dataset.boardValue=String(o.value),this.board.needsUpdate=!0)}hostHammerBusy(){return this.host.dataset.hammerStage==="swing"||this.host.dataset.hammerStage==="impact"}strike(e,t=1){this.hitSpeed=t,this.hitStart=this.clockNow(),this.hitResult="success",this.hitImpact=!1,this.onHitImpact=e,this.hitImpactAt=-10,this.renderer.shadowMap.needsUpdate=!0,this.host.dataset.hammerStage="swing"}spawnFragments(){if(!this.reduced)for(let e=0;e<9&&this.fx.length<50;e++){const t=this.mesh(new pn(.07+Math.random()*.1,.035,.13+Math.random()*.12),this.bladeMat.clone(),this.scene);t.position.set(-.65+Math.random()*1.5,this.forgeSwordY+.05,.1+(Math.random()-.5)*.3),t.rotation.set(Math.random()*2,Math.random()*3,Math.random()),this.fx.push({mesh:t,v:new P((Math.random()-.5)*3,1+Math.random()*2,(Math.random()-.5)*2),life:.8})}}spawnSparks(e,t){if(!this.reduced)for(let n=0;n<e&&this.fx.length<50;n++){const s=this.sparkPool.pop()||new Be(this.sparkGeometry,this.sparkMaterials[n%2]);s.userData.pooledSpark=!0,s.castShadow=!1,s.receiveShadow=!1,s.scale.setScalar(1),this.scene.add(s),s.position.copy(t),this.fx.push({mesh:s,v:new P((Math.random()-.5)*4,1+Math.random()*3,(Math.random()-.5)*3),life:.5+Math.random()*.3})}}showTributeSword(e){this.evolveSword(e.blade,e.level,e.material,this.state?.showLegacySwords??!1)}async punish(e){if(this.punishment||this.tributeDone)throw new Error("食铁兽正在忙");return this.clearRewards(),this.setStation("cat"),this.sword.visible=!1,this.whip.visible=!0,this.host.dataset.tribute="punishing",this.host.dataset.whipHits="0",new Promise(t=>{this.punishment={start:this.clockNow(),done:t,onHit:e,hits:0}})}async tribute(e,t){if(this.tributeDone)throw new Error("食铁兽还在吃剑");return this.clearRewards(),this.setStation("cat"),this.tributeCount=e,this.holdRear=!1,this.catPose(0),this.sword.traverse(n=>{if(n instanceof Be)for(const s of Array.isArray(n.material)?n.material:[n.material])s instanceof pt&&!this.tributeReflections.has(s)&&(this.tributeReflections.set(s,s.envMapRotation.clone()),s.envMapRotation.y+=Math.PI)}),await this.renderer.compileAsync(this.scene,this.camera),this.renderer.shadowMap.needsUpdate=!1,this.tributeStart=this.clockNow(),this.tributeElapsed=0,this.host.dataset.tribute="offering",this.submittedTribute=0,this.renderedTribute=0,t("食铁兽仰头张嘴，吞下头顶的宝剑……"),new Promise(n=>{this.tributeDone=n,this.host.addEventListener("tribute-stage",(s=>t(s.detail)),{signal:this.stageAbort.signal})})}stageAbort=new AbortController;stage(e,t){this.host.dataset.tribute!==e&&(this.host.dataset.tribute=e,this.host.dispatchEvent(new CustomEvent("tribute-stage",{detail:t})))}tick=e=>{if(this.raf=0,this.paused||this.destroyed)return;const t=jr?performance.now():0,n=e/1e3-this.clockOffset,s=this.prev?Math.min(.2,n-this.prev):.016;this.prev=n,(!this.poseCache||e-this.poseAt>=200)&&(this.poseCache=this.cameraPose(),this.poseAt=e);const r=this.poseCache;this.camera.fov=at.lerp(this.camera.fov,r.fov,1-Math.exp(-s*5)),this.camera.setViewOffset(this.host.clientWidth,this.host.clientHeight,0,this.host.clientHeight*r.offset,this.host.clientWidth,this.host.clientHeight),this.camera.position.lerp(r.position,1-Math.exp(-s*5)),this.target.lerp(r.target,1-Math.exp(-s*5)),this.camera.lookAt(this.target),this.camera.updateMatrixWorld(!0),this.positionTargets();const o=!!this.move;if(this.move&&!this.tributeDone){const M=this.move,S=this.swordPose(M.to),L=Uc((n-M.start)/.7,0,1),I=L*L*(3-2*L);this.sword.position.lerpVectors(M.from,S.position,I),this.sword.position.y+=Math.sin(L*Math.PI)*.8,this.sword.quaternion.slerpQuaternions(M.rotation,S.rotation,I),this.sword.scale.lerpVectors(M.scale,S.scale,I),this.renderer.shadowMap.needsUpdate=!0,L>=1&&(this.swordPlace=M.to,this.move=null,this.applySwordPose(M.to),this.forgeProofPending=!0,M.done())}gr&&(this.host.dataset.swordPosition=JSON.stringify(this.sword.position.toArray())),this.boardFrame.visible=!this.boardHidden&&this.view==="forge"&&this.state?.session?.phase!=="finished"&&this.state?.session?.phase!=="broken",this.boardFrame.quaternion.copy(this.camera.quaternion);const a=this.ledgerLayout();this.boardLayout=a,this.boardWide!==a.wide&&(this.boardWide=a.wide,this.lastBoard="",this.state&&this.drawBoard(this.state,this.boardProb)),this.boardFrame.position.set(0,3.55,-1.45),this.boardFrame.scale.setScalar(1),this.boardFrame.updateMatrixWorld(!0);const l=this.boardFrame.position.clone().project(this.camera);l.x=2*(a.left+a.width/2)/this.host.clientWidth-1,l.y=1-(a.top+a.bottom)/this.host.clientHeight,this.boardFrame.position.copy(l.unproject(this.camera)),this.boardFrame.updateMatrixWorld(!0);const c=this.boardFrame.localToWorld(new P(-2.525,0,0)).project(this.camera),d=(this.boardFrame.localToWorld(new P(2.525,0,0)).project(this.camera).x-c.x)*this.host.clientWidth/2,f=a.width/d;this.boardFrame.scale.set(f,f*(a.height/a.width)/(1.72/5.05),f),this.boardFrame.updateMatrixWorld(!0),this.view==="forge"&&this.wallRelics.position.y!==3.05&&this.positionWallRelics(),this.furnaceLight.intensity=20+Math.sin(n*11)*1.5+Math.sin(n*23)*1.2,this.flames.forEach((M,S)=>{M.scale.y=M.userData.height*(.9+Math.sin(n*7+S*4)*.12),M.rotation.y=n+S});const u=(n-this.hitStart)/this.hitSpeed,g=this.onHitImpact&&u>=.18?.18:this.hitImpact?.18+(n-this.hitImpactAt)/this.hitSpeed:u,x=this.hammerRest,m=this.hammerRaised,p=this.hammerContact;let y=-.3;if(this.hammer.position.copy(x),g>=0&&g<.08){const M=g/.08;y=at.lerp(-.3,-.48,M),this.hammer.position.lerpVectors(x,m,M)}else if(g>=.08&&g<.18){const M=Math.pow((g-.08)/.1,2);y=at.lerp(-.48,1.38,M),this.hammer.position.lerpVectors(m,p,M)}else if(g>=.18&&g<.22)y=1.38,this.hammer.position.copy(p);else if(g>=.22&&g<.55){const M=(g-.22)/.33,S=1-Math.pow(1-M,3);y=at.lerp(1.38,-.3,S),this.hammer.position.lerpVectors(p,x,S)}this.hammer.rotation.z=y;const _=this.state?.session&&wn(this.state.session),v=this.bladePhase==="heat"?this.heat/100:this.bladePhase==="forge"?this.heat/100*Math.exp(-Math.max(0,n-this.bladeCoolingAt)*.7):0,w=!!this.state?.session?.superGod;if(this.bladeFinish.setTransform(this.sword),this.bladeFinish.update(n,v,!!_,w),F3(this.sword,n,!!_||w,this.reduced),this.host.dataset.bladeFinish=w?"cosmos":_?"rainbow":"metal",this.host.dataset.hiltFinish=this.host.dataset.bladeFinish,this.host.dataset.bladeColor=this.bladeFinish.color,u>=.18&&!this.hitImpact&&this.onHitImpact){this.hitImpact=!0,this.hitImpactAt=n;const M=this.onHitImpact;this.onHitImpact=null,this.hitResult=M(),this.host.dataset.hammerStage="impact",this.host.dataset.hammerImpacts=String(Number(this.host.dataset.hammerImpacts||0)+1),this.renderer.shadowMap.needsUpdate=!0,this.hitResult==="break"&&this.spawnFragments(),this.spawnSparks(this.hitResult==="break"?36:this.hitResult==="damage"?12:this.hitResult==="great"?40:this.hitResult==="unchanged"?6:22,new P(.12,this.forgeSwordY+.05,.11))}if(g>=.18&&g<.36&&this.hitResult!=="break"&&this.swordPlace==="anvil"&&!this.move&&(this.sword.position.y=this.forgeSwordY+Math.sin((g-.18)/.18*Math.PI)*.025),g>=.18&&g<.32&&!this.reduced){const M=(g-.18)/.14;this.camera.position.y+=Math.sin(M*Math.PI*4)*.018*(1-M)}if(g>=.55&&this.host.dataset.hammerStage!=="idle"){this.host.dataset.hammerStage="idle",this.renderer.shadowMap.needsUpdate=!0;const M=this.state?.session;M?.phase==="forge"&&this.queueSwordWarmup(M.blade,M.level,M.material,this.state.showLegacySwords)}!this.tributeDone&&!this.punishment&&(this.holdRear||(this.cat.rotation.y=0,this.catPose(0)),this.head.rotation.z=0,this.jaw.rotation.x=0,this.belly.scale.set(1,1,1));const E=n%6.7,b=this.tributeDone?1:E<.19?Math.max(.08,Math.abs(E-.095)/.095):1;if(this.catEyes.forEach(M=>M.scale.y=b),this.host.dataset.pandaEyeOpen=String(b),this.catBlink(b),this.tail.rotation.z=Math.sin(n*1.5)*(this.tributeDone?.1:.045),this.punishment){const M=this.punishment,S=n-M.start,L=Math.max(0,S-.6)/.72;this.whip.rotation.x=-.6+Math.sin(Math.min(3,L)*Math.PI*2)*1.1,this.whip.rotation.z=.25+Math.sin(Math.min(3,L)*Math.PI*2)*.65,this.head.rotation.z=Math.sin(S*9)*.045,this.renderer.shadowMap.needsUpdate=!0;const I=Math.min(3,Math.max(0,Math.floor((S-.9)/.72)+1));I>M.hits&&(M.hits=I,this.host.dataset.whipHits=String(I),M.onHit(I),this.host.dispatchEvent(new CustomEvent("whip-impact"))),S>3.2&&(this.whip.visible=!1,this.head.rotation.z=0,this.punishment=null,this.host.dataset.tribute="punished",M.done())}if(this.tributeDone){const M=this.tributeElapsed=n-this.tributeStart,S=q3(M);if(this.cat.rotation.y=-S.turn*Math.PI,this.catPose(S.stance,S.lookUp),this.jaw.rotation.x=M<1?.18*Math.sin(Math.min(1,M/.12)*Math.PI/2):0,M<1){const L=this.head.localToWorld(this.catMouth.clone()),I=.56;this.swallowPlane.constant=-L.y,this.sword.visible=!0,this.sword.quaternion.setFromRotationMatrix(new st().makeBasis(new P(0,-1,0),new P(0,0,1),new P(-1,0,0))),this.sword.scale.setScalar(I),this.sword.position.copy(L).add(new P(0,(2.42*I+.1)*(1-S.swallow)-.78*I*S.swallow,.06))}else if(this.sword.visible=!1,M<2)this.stage("turning","食铁兽转身，四只脚站稳……");else{this.stage("ejecting","噗！食铁兽拉出 "+this.tributeCount+" 把铁剑，掉进接剑盘");const L=.65/Math.max(1,this.tributeCount-1),I=Math.min(this.tributeCount,Math.floor((M-2)/L)+1),O=this.catOutlet();for(;this.rewards.length<I;){const B=this.makeSword();B.scale.setScalar(.27),this.scene.add(B),this.rewards.push(B)}this.rewards.forEach((B,q)=>{const j=Uc((M-2-q*L)/.35,0,1),J=j*j*(3-2*j);B.position.copy(O).add(new P((q-(this.tributeCount-1)/2)*.24*J,-.1*J+Math.sin(j*Math.PI)*.08,.08+.4*J));const W=new P((q-(this.tributeCount-1)/2)*.13,-.5,.86).normalize(),le=new P(0,0,1).addScaledVector(W,-W.z).normalize(),ce=new P().crossVectors(W,le);B.quaternion.setFromRotationMatrix(new st().makeBasis(W,le,ce)),B.scale.set(.27*Math.min(1,.03+j*4),.27,.27)})}if(M>=3){this.stage("complete","纳贡完成 · 获得 "+this.tributeCount+" 把铁剑"),this.sword.visible=!1,this.holdRear=!0,this.cat.rotation.y=-Math.PI,this.catPose(1),this.jaw.rotation.x=0,this.belly.scale.set(1,1,1),this.swallowPlane.constant=1e3,this.renderer.shadowMap.needsUpdate=!0;for(const[I,O]of this.tributeReflections)I.envMapRotation.copy(O);this.tributeReflections.clear();const L=this.tributeDone;this.tributeDone=null,this.stageAbort.abort(),this.stageAbort=new AbortController,L()}}for(let M=this.fx.length-1;M>=0;M--){const S=this.fx[M];S.life-=s,S.v.y-=s*8,S.mesh.position.addScaledVector(S.v,s),S.mesh.scale.setScalar(Math.max(.01,S.life)),S.life<=0&&(this.scene.remove(S.mesh),S.mesh.userData.pooledSpark?this.sparkPool.push(S.mesh):(S.mesh.geometry.dispose(),S.mesh.material.dispose()),this.fx.splice(M,1))}const A=1e3/this.targetFps;if(e-this.renderAt>=A-.5){const M=this.renderer.getContext();if(this.gpuFrame&&M.clientWaitSync(this.gpuFrame,0,0)!==M.TIMEOUT_EXPIRED&&(M.deleteSync(this.gpuFrame),this.gpuFrame=null,this.host.dataset.gpuCompletedFrames=String(++this.completedFrames),this.renderedTribute=this.submittedTribute,this.host.dataset.renderedStation=this.submittedStation,this.host.dataset.renderedCameraReady=String(this.submittedCameraReady),this.host.dataset.boardVisible=String(this.boardFrame.visible),this.host.dataset.boardRenderedHits=String(this.submittedBoardHits),this.host.dataset.bladeRenderedFinish=this.submittedBladeFinish,this.pendingForgeProof&&(this.host.dataset.forgeProof=this.pendingForgeProof,this.pendingForgeProof=null),this.pendingCatProof&&(this.host.dataset.catProof=this.pendingCatProof,this.pendingCatProof=null)),!this.gpuFrame){const S=performance.now();this.renderAt=e-(e-this.renderAt)%A,this.swordGlow.render(this.scene,this.camera,this.sword.visible&&(this.view==="forge"||!!this.tributeDone)&&(!!_||w||!!this.sword.userData.referenceFx),w,this.sword,!!_||w),this.submittedStation=this.view,this.submittedCameraReady=this.camera.position.distanceTo(r.position)<.03&&Math.abs(this.camera.fov-r.fov)<.05,this.submittedTribute=this.tributeDone?this.tributeElapsed:0,this.submittedBoardHits=this.state?.session?.hits||0,this.submittedBladeFinish=w?"cosmos":_?"rainbow":"metal";const L=performance.now()-S;if(this.drawCost=this.drawCost*.9+L*.1,this.drawCost>22?(this.targetFps=30,this.fastFrames=0):this.drawCost<10&&++this.fastFrames>120&&(this.targetFps=60),this.metrics.frame(e,jr?performance.now()-t:0,this.renderer,this.targetFps),this.gpuFrame=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0),M.flush(),this.host.dataset.renderCalls=String(this.renderer.info.render.calls),this.host.dataset.renderTriangles=String(this.renderer.info.render.triangles),gr&&this.view==="forge"&&this.forgeProofPending&&this.sword.visible&&this.swordPlace==="anvil"&&!o&&g>=.55&&this.camera.position.distanceTo(r.position)<.015&&Math.abs(this.camera.fov-r.fov)<.02&&this.recordForgeVisibility(),gr&&this.view==="cat"&&(this.tributeDone||this.camera.position.distanceTo(r.position)<.03)&&this.recordCatVisibility(),gr&&(this.view==="collection"||this.view==="relics")&&this.submittedCameraReady){const I=[this.view,this.displayKey,this.host.clientWidth,this.host.clientHeight].join(":");if(I!==this.sideProofKey){this.sideProofKey=I;const O=this.view==="collection"?this.collectionRoot:this.relicCabinet,B=new P;let q=1/0,j=-1/0,J=1/0,W=-1/0;O.updateMatrixWorld(!0),O.traverse(le=>{if(!(le instanceof Be))return;for(let ge=le;ge;ge=ge.parent)if(!ge.visible)return;const ce=le.geometry.getAttribute("position");for(let ge=0;ge<ce.count;ge++){B.fromBufferAttribute(ce,ge).applyMatrix4(le.matrixWorld).project(this.camera);const oe=(B.x+1)*this.host.clientWidth/2,fe=(1-B.y)*this.host.clientHeight/2;q=Math.min(q,oe),j=Math.max(j,oe),J=Math.min(J,fe),W=Math.max(W,fe)}}),this.host.dataset.sideDisplayProof=JSON.stringify({station:this.view,yaw:O.rotation.y*180/Math.PI,left:q,right:j,top:J,bottom:W})}}}}this.raf=requestAnimationFrame(this.tick)};clearRewards(){for(const e of this.rewards)this.scene.remove(e),e.traverse(t=>{t instanceof Be&&(t.geometry.dispose(),t.material.dispose())});this.rewards=[],this.holdRear=!1,this.cat.rotation.y=0,this.catPose(0),this.host.dataset.tribute=""}destroy(){if(!this.destroyed){this.destroyed=!0,this.warmup!==void 0&&cancelIdleCallback(this.warmup);for(const e of this.swordCache.values())this.releaseSword(e);this.swordCache.clear();for(const e of this.sharedMaterials)e.dispose();this.sharedMaterials.clear(),this.sparkGeometry.dispose(),this.sparkMaterials.forEach(e=>e.dispose()),this.sparkPool=[],cancelAnimationFrame(this.raf),this.gpuFrame&&this.renderer.getContext().deleteSync(this.gpuFrame),this.stageAbort.abort(),this.observer.disconnect(),this.scene.traverse(e=>{if(e instanceof Be){e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t){for(const s of Object.values(n))s instanceof Pt&&s.dispose();n.dispose()}}}),this.scene.environment?.dispose(),bc(null),this.swordEnvironment.dispose(),this.swordGlow.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove()}}}class a5{constructor(e,t){this.enabled=e,this.host=t,t.dataset.audioState="loading"}audio=null;master=null;buffers=[];fallback=null;decoding=null;recordingsReady=!1;sources=new Set;played=0;encoded=Promise.all(["forge-anvil.mp3","forge-clink.mp3"].map(async e=>{try{const t=await fetch(new URL(`audio/${e}`,document.baseURI));return t.ok?await t.arrayBuffer():null}catch{return null}}));unlock(){if(this.enabled())try{this.audio||(this.audio=new AudioContext,this.master=this.audio.createGain(),this.master.gain.value=.72,this.master.connect(this.audio.destination)),this.audio.state==="suspended"&&this.audio.resume(),this.decoding||(this.decoding=this.encoded.then(async e=>{const t=await Promise.all(e.map(async n=>{try{if(n)return{buffer:await this.audio.decodeAudioData(n),recording:!0}}catch{}return{buffer:this.makeFallback(),recording:!1}}));this.buffers=t.map(n=>n.buffer),this.recordingsReady=t.every(n=>n.recording),this.host.dataset.audioState=this.recordingsReady?"ready":"fallback"}))}catch{this.host.dataset.audioState="unavailable"}}setMuted(e){if(this.master&&this.audio&&this.master.gain.setValueAtTime(e?0:.72,this.audio.currentTime),e)for(const t of this.sources)try{t.stop()}catch{}else this.unlock()}suspend(){this.audio?.suspend().catch(()=>{})}resume(){this.enabled()&&this.audio?.state==="suspended"&&this.audio.resume().catch(()=>{})}makeFallback(){if(this.fallback)return this.fallback;const e=this.audio.sampleRate,t=this.audio.createBuffer(1,Math.ceil(e*.5),e),n=t.getChannelData(0),s=[[773,.12,.11],[1197,.16,.18],[1913,.1,.13],[2851,.07,.085],[4133,.04,.055]];for(let r=0;r<n.length;r++){const o=r/e;let a=(Math.random()*2-1)*.24*Math.exp(-o/.008);for(const[l,c,h]of s)a+=Math.sin(o*l*Math.PI*2)*c*Math.exp(-o/h);n[r]=a*Math.min(1,o/4e-4)}return this.fallback=t}play(e,t,n,s=0){if(!this.enabled()||!this.audio||this.audio.state!=="running"||!this.master)return;const r=this.audio.createBufferSource(),o=this.audio.createGain();r.buffer=e,r.playbackRate.value=t,o.gain.value=n,r.connect(o).connect(this.master),this.sources.add(r),r.onended=()=>{r.disconnect(),o.disconnect(),this.sources.delete(r)},r.start(this.audio.currentTime+s)}impact(e,t,n){if(!this.enabled()||!this.audio)return;const s=(t==="bronze"?.94:t==="cold"?1.05:1)*(.975+Math.random()*.05);if(this.play(this.buffers[0]||this.makeFallback(),s,n==="bold"?1:n==="precise"?.86:.78),e==="damage"||e==="break"){const r=this.buffers[1]||this.makeFallback();this.play(r,s*1.12,e==="break"?.65:.3,.045),e==="break"&&(this.play(r,s*.87,.38,.105),this.play(r,s*1.28,.24,.185))}e==="great"&&this.play(this.buffers[1]||this.makeFallback(),s*1.3,.35,.075),this.audio.state==="running"&&(this.host.dataset.audioPlayed=String(++this.played),this.host.dataset.audioType=this.recordingsReady?"recording":"metal-fallback")}}const Xh="yichuichengshenbing.tutorial.v1",js=["furnace","heat","hammer","cashout","tribute","relic"];function l5(i,e){if(i&&typeof i=="object"){const n=i;if(n.version===1&&(n.step==="done"||js.includes(n.step)))return{version:1,step:n.step,skipped:n.skipped===!0,replay:n.replay===!0,startTributes:Number.isFinite(n.startTributes)?Math.max(0,n.startTributes):e.catTributes}}return{version:1,step:e.formalCount>0||e.totalMade>0||e.catTributes>0||e.swords.length>0||e.relics.length>0?"done":"furnace",skipped:!1,replay:!1,startTributes:e.catTributes}}function c5(i){return{version:1,step:"furnace",skipped:!1,replay:!0,startTributes:i.catTributes}}function Q0(i,e=!1){return{...i,step:"done",skipped:e}}function h5(i,e){if(i.step==="done")return i;const t=e.session;let n=i.step;for(let s=0;s<6;s++){let r=n;if(n==="furnace"&&t?r="heat":n==="heat"&&t&&t.phase!=="heat"?r="hammer":n==="hammer"&&t&&(t.phase==="finished"||t.phase==="forge"&&t.hits>=2&&t.level>=2&&t.currentValue>=720)?r="cashout":n==="cashout"&&t?.phase==="finished"?r="tribute":n==="tribute"&&e.catTributes>i.startTributes?r="relic":n==="relic"&&!i.replay&&e.relicWelcomeUsed&&(r="done"),r===n)break;n=r}return n===i.step?i:{...i,step:n}}const u5="browser",d5="0.3.0";function qh(){return{getItem:i=>globalThis.localStorage.getItem(i),setItem:(i,e)=>globalThis.localStorage.setItem(i,e),removeItem:i=>globalThis.localStorage.removeItem(i)}}function f5(i=qh()){return{kind:"browser",storage:i,capabilities:{cloudSave:!1,vibration:!1,hostLifecycle:!1},subscribeLifecycle:()=>()=>{},vibrate:()=>{}}}async function p5(i){const e=qh();return f5(e)}const ai="yichuichengshenbing.v1",Nc=ai+".meta",Fc=ai+".cloud-base",Oc=ai+".cloud-attempt",xa=6e4,ts=i=>JSON.parse(JSON.stringify(i));let m5=0;const _n=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0,_a=i=>Array.isArray(i)&&i.every(e=>typeof e=="string"),Vn=i=>!!i&&typeof i=="object"&&!Array.isArray(i);function Yh(i){if(!Vn(i)||i.version!==1)return!1;for(const t of["coins","scraps","formalCount","totalMade","totalBroken","seed","hammerLevel","furnaceLevel","anvilLevel","showCaseLevel"])if(!_n(i[t]))return!1;if(!_a(i.ledger)||!_a(i.caseIds)||!Array.isArray(i.swords))return!1;const e=t=>Vn(t)&&typeof t.id=="string"&&["iron","bronze","cold"].includes(String(t.material))&&["straight","great","short"].includes(String(t.blade))&&_n(t.level)&&t.level<=99&&_n(t.value)&&_n(t.quality)&&typeof t.mark=="string"&&["NEW","SOLD","DELIVERED","COLLECTED","TRIBUTED"].includes(String(t.disposal));if(!i.swords.every(e)||i.relics!==void 0&&!_a(i.relics)||i.relicRanks!==void 0&&(!Vn(i.relicRanks)||!Object.values(i.relicRanks).every(_n))||i.sound!==void 0&&typeof i.sound!="boolean")return!1;if(i.session!==null){const t=i.session;if(!Vn(t)||typeof t.id!="string"||!["heat","forge","finished","broken","quench"].includes(String(t.phase))||!["iron","bronze","cold"].includes(String(t.material))||!["straight","great","short"].includes(String(t.blade)))return!1;for(const n of["level","hits","safeUsed","perfect","paid","seed"])if(!_n(t[n]))return!1;if(t.level>99||!Array.isArray(t.strikes)||!t.strikes.every(Vn))return!1;for(const n of["currentValue","frenzyCharge","frenzyUntil"])if(t[n]!==void 0&&!_n(t[n]))return!1;if(t.sword!==null&&!e(t.sword)||t.phase==="finished"&&t.sword===null)return!1;if(t.lastCheckpoint!==void 0){if(!Vn(t.lastCheckpoint))return!1;for(const n of["seed","level","hits","safeUsed","perfect","currentValue","frenzyCharge","frenzyUntil","strikesLength","totalBroken","scraps"])if(!_n(t.lastCheckpoint[n]))return!1}}return!0}function g5(i){return!Vn(i)||i.heat!==void 0&&(!Vn(i.heat)||typeof i.heat.sessionId!="string"||!_n(i.heat.percent)||i.heat.percent>100)?!1:["frenzyRemainingMs","checkpointFrenzyRemainingMs"].every(e=>i[e]===void 0||_n(i[e]))}function Ma(i){if(i.length>10*1024*1024)throw new Error("Save file too large");const e=JSON.parse(i);if(!Vn(e)||e.format!==1||typeof e.id!="string"||!e.id||!_n(e.savedAt)||!Yh(e.state)||!g5(e.runtime))throw new Error("Invalid save format");return e}function ya(i){let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return(e>>>0).toString(16)}function v5(i,e=Date.now()){const t=ts(i.state),n=ts(i.runtime);return t.session&&(n.frenzyRemainingMs!==void 0&&(t.session.frenzyUntil=n.frenzyRemainingMs>0?e+Math.min(4e3,n.frenzyRemainingMs):0),t.session.lastCheckpoint&&n.checkpointFrenzyRemainingMs!==void 0&&(t.session.lastCheckpoint.frenzyUntil=n.checkpointFrenzyRemainingMs>0?e+Math.min(4e3,n.checkpointFrenzyRemainingMs):0)),{state:t,runtime:n}}class x5{status="local";localAvailable=!0;requiresReload=!1;storage;cloud;now;makeId;schedule;cancel;timer;current=null;base=null;uploadAt=0;writesAllowed=!1;busy=!1;disposed=!1;listeners=new Set;constructor(e,t,n={}){this.storage=e,this.cloud=t,this.now=n.now||Date.now,this.makeId=n.id||(()=>typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${this.now().toString(36)}-${(m5++).toString(36)}-${Math.random().toString(36).slice(2)}`),this.schedule=n.schedule||((r,o)=>setTimeout(r,o)),this.cancel=n.cancel||(r=>clearTimeout(r)),this.base=this.read(Fc)||null;const s=Number(this.read(Oc)||0);this.uploadAt=Number.isFinite(s)?s:0}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}emit(e){this.status=e;for(const t of this.listeners)t()}read(e){try{return this.storage.getItem(e)}catch{return this.localAvailable=!1,null}}write(e,t){try{return this.storage.setItem(e,t),!0}catch{return this.localAvailable=!1,!1}}setBase(e){this.base=e,this.write(Fc,e||"")}writeLocal(e){const t=JSON.stringify(e.state),n=this.write(ai,t),{state:s,...r}=e,o=this.write(Nc,JSON.stringify({...r,stateHash:ya(t)}));this.localAvailable=n&&o}readLocal(){const e=this.read(ai);if(!e)return null;try{const t=JSON.parse(e);if(!Yh(t))throw new Error("Invalid local save");const n=this.read(Nc);if(n)try{const s=JSON.parse(n);if(s.stateHash===ya(e))return Ma(JSON.stringify({...s,state:t}))}catch{}return{format:1,id:`legacy-${ya(e)}`,savedAt:0,state:t,runtime:{}}}catch{return this.write(ai+".invalid-backup",e),null}}backup(e,t){this.write(ai+".backup."+e,JSON.stringify(t))}async load(e){return this.current=this.readLocal(),this.cloud&&await this.reconcile(e),this.current?v5(this.current,this.now()):null}async reconcile(e){if(!this.cloud)return"keep";this.writesAllowed=!1,this.emit("syncing");try{const t=await this.cloud.read(),n=t===null?null:Ma(t),s=this.current;if(!n)return this.setBase(null),this.writesAllowed=!0,this.emit(s?"pending":"local"),"keep";if(!s)return this.current=n,this.setBase(n.id),this.writeLocal(n),this.writesAllowed=!0,this.emit("synced"),"reload";if(n.id===s.id)return this.setBase(n.id),this.writesAllowed=!0,this.emit("synced"),"keep";if(n.id===this.base)return this.writesAllowed=!0,this.emit("pending"),"keep";if(s.id===this.base||JSON.stringify(n.state)===JSON.stringify(s.state))return this.backup("local",s),this.current=n,this.setBase(n.id),this.writeLocal(n),this.writesAllowed=!0,this.emit("synced"),"reload";this.backup("local",s),this.backup("cloud",n),this.emit("conflict");const r=await e(ts(s),ts(n));return r==="defer"?(this.emit("conflict"),"keep"):(this.setBase(n.id),this.writesAllowed=!0,r==="cloud"?(this.current=n,this.writeLocal(n),this.emit("synced"),"reload"):(this.emit("pending"),"keep"))}catch{return this.writesAllowed=!1,this.emit("unavailable"),"keep"}}save(e,t){if(this.requiresReload)return;const n=this.now(),s=e.session,r={};t&&s?.phase==="heat"&&t.sessionId===s.id&&(r.heat={...t}),s&&(r.frenzyRemainingMs=Math.max(0,Math.min(4e3,(s.frenzyUntil||0)-n)),s.lastCheckpoint&&(r.checkpointFrenzyRemainingMs=Math.max(0,Math.min(4e3,s.lastCheckpoint.frenzyUntil-n)))),this.current={format:1,id:this.makeId(),savedAt:n,state:ts(e),runtime:r},this.writeLocal(this.current),this.cloud?this.writesAllowed?(this.emit("pending"),this.queue()):this.emit(this.status==="conflict"?"conflict":"unavailable"):this.emit("local")}queue(){if(this.disposed||this.timer!==void 0||this.busy||!this.writesAllowed||!this.cloud||!this.current||this.current.id===this.base)return;const e=Math.max(0,xa-(this.now()-this.uploadAt));this.timer=this.schedule(()=>{this.timer=void 0,this.flush()},e)}async flush(){if(!(this.disposed||this.busy||!this.cloud||!this.writesAllowed||!this.current||this.current.id===this.base)){if(this.uploadAt&&this.now()-this.uploadAt<xa){this.queue();return}this.busy=!0,this.emit("syncing");try{const e=await this.cloud.read(),t=e===null?null:Ma(e);if(t?.id===this.current.id){this.setBase(t.id),this.emit("synced");return}if((t?.id||null)!==this.base){t&&this.backup("cloud",t),this.writesAllowed=!1,this.emit("conflict");return}const n=ts(this.current);this.uploadAt=this.now(),this.write(Oc,String(this.uploadAt)),await this.cloud.write(JSON.stringify(n)),this.setBase(n.id),this.emit(this.current.id===n.id?"synced":"pending")}catch{this.writesAllowed=!1,this.emit("unavailable")}finally{this.busy=!1,this.queue()}}}async syncNow(e){if(this.busy||!this.cloud)return{reload:!1,waitMs:0};this.timer!==void 0&&(this.cancel(this.timer),this.timer=void 0),this.busy=!0;let t;try{t=await this.reconcile(e)}finally{this.busy=!1}if(t==="reload")return this.requiresReload=!0,{reload:!0,waitMs:0};const n=this.current?.id!==this.base?Math.max(0,xa-(this.now()-this.uploadAt)):0;return this.writesAllowed&&(n?this.queue():await this.flush()),{reload:!1,waitMs:n}}dispose(){this.disposed=!0,this.timer!==void 0&&this.cancel(this.timer),this.listeners.clear()}}function _5(i,e){let t=!0;try{t=i.storage.getItem(ai+".vibration")!=="false"}catch{}return{resolveConflict:(s,r)=>new Promise(o=>{const a=document.createElement("dialog");a.id="save-conflict",a.className="save-dialog game-dialog",a.setAttribute("aria-labelledby","save-conflict-title");const l=document.createElement("h2");l.id="save-conflict-title",l.textContent="选择继续的进度";const c=document.createElement("p");c.className="save-note",c.textContent="本机与云端进度不同。两份进度均已留存副本，金币和物品不会叠加。",a.append(l,c);const h=m=>{const p=m.state;return`${m.savedAt?new Date(m.savedAt).toLocaleString("zh-CN"):"原有本地存档"}
纳贡日 ${(p.tributeDays??p.catTributes??0)+1} · 金币 ${Math.floor(p.coins).toLocaleString("zh-CN")}
收藏 ${p.caseIds.length} 把 · 遗物 ${p.relics?.length||0} 件`},d=document.createElement("div");d.className="save-versions game-dialog-scroll";for(const[m,p]of[["本机进度",s],["云端进度",r]]){const y=document.createElement("article"),_=document.createElement("b"),v=document.createElement("p");_.textContent=m,v.textContent=h(p),y.append(_,v),d.append(y)}a.append(d);let f=!1;const u=m=>{f||(f=!0,a.close(),a.remove(),e.set("save-conflict",!1),o(m))},g=document.createElement("div");g.className="save-actions game-dialog-actions";for(const[m,p]of[["继续本机","local"],["继续云端","cloud"]]){const y=document.createElement("button");y.className=p==="cloud"?"dialog-button primary":"dialog-button secondary",y.textContent=m,y.addEventListener("click",()=>u(p)),g.append(y)}const x=document.createElement("button");x.className="save-later dialog-button secondary",x.textContent="稍后选择，先玩本机进度",x.addEventListener("click",()=>u("defer")),a.append(g,x),a.addEventListener("cancel",m=>{m.preventDefault(),u("defer")}),document.body.append(a),e.set("save-conflict",!0),a.showModal()}),vibrationEnabled:t}}class M5{reasons=new Set;listeners=new Set;get paused(){return this.reasons.size>0}set(e,t){const n=this.paused;if(t?this.reasons.add(e):this.reasons.delete(e),n!==this.paused)for(const s of this.listeners)s(this.paused)}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}}const pi=document.querySelector(".game");pi.inert=!0;const dr=document.createElement("div");dr.id="platform-loading";dr.role="status";dr.textContent="正在读取存档…";document.body.append(dr);const bt=new M5,mi=await p5(),$0=new x5(mi.storage,mi.cloud),jh=_5(mi,bt),Ks=await $0.load(jh.resolveConflict);let Tt=Ks?.runtime.heat?.sessionId===Ks?.state.session?.id&&Ks?.runtime.heat?.percent||0;function xs(i){$0.save(i,i.session?.phase==="heat"?{sessionId:i.session.id,percent:Tt}:void 0)}const _e=new Tu(xs,Ks?.state);pi.dataset.channel=u5;pi.dataset.platform=mi.kind;pi.dataset.version=d5;let Bc=-1/0,Kh=null;try{Kh=JSON.parse(localStorage.getItem(Xh)||"null")}catch{}let Xe=l5(Kh,_e.state);function Ii(){try{localStorage.setItem(Xh,JSON.stringify(Xe))}catch{}}function bo(){return Xe.step!=="done"}function Kn(){return bo()&&!Xe.replay}Ii();const z=i=>document.getElementById(i);let nt=null;try{nt=new o5(z("scene3d"))}catch(i){z("scene-error").hidden=!1,console.error(i)}let $e="forge",Nt=!1,ns="",so=0,Ot=!1,Mt=!1;const Jh="yichuichengshenbing.heat",_s=new a5(()=>_e.state.sound,z("scene3d"));function Jn(i){if(!(bt.paused||Nt||Ot||Mt||Js)){if(Kn()){const e=Xe.step==="tribute"?"cat":Xe.step==="relic"?"relics":"forge";if(i!=="forge"&&i!==e){wt("请先按新手引导完成操作，或者点击跳过引导");return}}$e=i,Ms=performance.now(),nt?.setStation(i==="merchant"?"forge":i),gt()}}const y5=["heat","forge","finished","broken"];let wo="precise",fr=performance.now(),Eo=!1,Ms=0,qn=0,zc=0,kc=-1,Vt="",Hc=0,un=null,el="",Sa=!1,zs=null,Js=!1;const _0=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function S5(){const i=z("merchant-call"),e=is(_e.state),t=e!==Sa;if(e&&!Sa&&$e!=="forge"&&$e!=="merchant"){i.hidden=!0;return}t&&(Sa=e,zs?.cancel(),e?(i.hidden=!1,i.dataset.presence="entering",zs=i.animate([{transform:"translate(-180px,24px)",opacity:0},{transform:"translate(0,0)",opacity:1}],{duration:_0?1:950,easing:"cubic-bezier(.16,1,.3,1)"}),zs.finished.then(()=>{i.dataset.presence="present"}).catch(()=>{})):(i.dataset.presence="leaving",i.disabled=!0,zs=i.animate([{transform:"translate(0,0)",opacity:1},{transform:"translate(-180px,-28px)",opacity:0}],{duration:_0?1:800,easing:"ease-in"}),zs.finished.then(()=>{i.hidden=!0,i.dataset.presence="absent"}).catch(()=>{}))),i.setAttribute("aria-label","幽灵商人 · 纳贡日 "+_e.state.workshopDay+"，查看商品"),i.toggleAttribute("disabled",!e||Nt||Ot||Mt||Js)}async function tl(){if($e!=="merchant"||Js)return;Js=!0;const i=z("merchant-panel"),e=z("merchant-call"),t=i.getBoundingClientRect(),n=e.getBoundingClientRect();i.setAttribute("inert","");const s=i.animate([{transform:"translate(-50%,-50%) scale(1)",opacity:1},{transform:"translate(calc(-50% + "+(n.x+n.width/2-t.x-t.width/2)+"px),calc(-50% + "+(n.y+n.height/2-t.y-t.height/2)+"px)) scale(.04)",opacity:0}],{duration:_0?1:460,easing:"cubic-bezier(.4,0,.7,1)",fill:"forwards"});try{await s.finished}catch{}$e="forge",Js=!1,i.removeAttribute("inert"),s.cancel(),gt(),e.focus({preventScroll:!0})}function Zh(i,e,t,n="再看看"){const s=z("game-confirm");if(bt.paused||s.open)return Promise.resolve(!1);z("game-confirm-title").textContent=i,z("game-confirm-description").textContent=e,z("game-confirm-accept").textContent=t,z("game-confirm-cancel").textContent=n;const r=document.activeElement instanceof HTMLElement?document.activeElement:null;return new Promise(o=>{const a=z("game-confirm-accept"),l=z("game-confirm-cancel");let c=!1;const h=g=>{c||(c=!0,a.removeEventListener("click",d),l.removeEventListener("click",f),s.removeEventListener("cancel",u),s.close(),r?.isConnected&&r.focus({preventScroll:!0}),o(g))},d=()=>h(!0),f=()=>h(!1),u=g=>{g.preventDefault(),h(!1)};a.addEventListener("click",d),l.addEventListener("click",f),s.addEventListener("cancel",u),s.showModal()})}function Qh(i){const e=nn.find(s=>s.id===i);if(!e||!_e.state.relicOffers.includes(i))return;el=i;const t=_e.state,n=t.workshopDay===1&&!t.relicWelcomeUsed;z("relic-detail-name").textContent="确认购买「"+e.name+"」？",z("relic-detail-cost").textContent=t.session?"收剑并处理当前宝剑后可兑换":t.relics.length>=ro&&!t.relics.includes(i)?"墙上遗物已满，请先卸下一件":n?"首件遗物免费领取，不消耗铁剑":"购买将消耗 "+oo(t,i)+" 把铁剑 · 当前持有 "+t.ironBlanks+" 把",z("relic-exchange").toggleAttribute("disabled",!!t.session||t.relics.length>=ro&&!t.relics.includes(i)||!n&&t.ironBlanks<oo(t,i)||Nt),z("relic-detail").showModal(),nl()}function To(){el="",z("relic-detail").close(),nl()}function b5(){const i=z("owned-relic-list");i.replaceChildren();for(const e of _e.state.relics){const t=nn.find(o=>o.id===e);if(!t)continue;const n=document.createElement("article"),s=document.createElement("b"),r=document.createElement("p");s.textContent=t.name+(e==="ember"?" · "+Wn(_e.state,e)+"阶":""),r.textContent=e==="ember"?"炉火 Lv"+_e.state.furnaceLevel+"；"+cr(_e.state.furnaceLevel)/1e3+" 秒满热；好火候从 55% 起算":t.detail,n.append(s,r),i.append(n)}i.children.length||(i.textContent="暂未获得遗物，可前往遗物机兑换。"),z("owned-relics").showModal()}z("relic-detail").addEventListener("cancel",i=>{i.preventDefault(),To()});z("wall-relic-trigger").addEventListener("click",b5);z("owned-relic-close").addEventListener("click",()=>z("owned-relics").close());function li(i=440,e=.12){if(!(!_e.state.sound||bt.paused))try{const t=window.AudioContext;un=un||new t;const n=un.createOscillator(),s=un.createGain();n.type="triangle",n.frequency.setValueAtTime(i,un.currentTime),n.frequency.exponentialRampToValueAtTime(i*.6,un.currentTime+e),s.gain.setValueAtTime(.055,un.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,un.currentTime+e),n.connect(s).connect(un.destination),n.start(),n.stop(un.currentTime+e)}catch{}}function wt(i){const e=z("toast");e.textContent=i,e.classList.add("show"),window.clearTimeout(Hc),Hc=window.setTimeout(()=>e.classList.remove("show"),2400)}function mn(i){if(!bt.paused)try{i(),gt()}catch(e){wt(e instanceof Error?e.message:String(e))}}function Rt(i){return i>=1e12?i.toExponential(2):Math.floor(i).toLocaleString("zh-CN")}function Ts(){return _e.state.session?.phase||"choose"}function w5(i){for(const e of y5)z(e).hidden=e!==i||$e!=="forge";z("cat-panel").hidden=$e!=="cat",z("relic-panel").hidden=$e!=="relics",z("merchant-panel").hidden=$e!=="merchant",document.querySelector(".station-nav").hidden=!1,document.querySelector(".game").dataset.moving=String(Mt),$h()}function $h(){const i=Ts(),e=_e.state.furnaceLevel,{min:t,max:n}=y0(e,_e.state.relics.includes("ember")),s={choose:["把剑送入炉火","点击熔炉，直接开始锻造"],heat:["剑正在炉中加热",`炉火 Lv${e} · ${cr(e)/1e3} 秒满温 · ${t}%—${n}% 取剑最佳`],forge:["点台面，落锤锻造","继续锤可能涨价或损坏 · 随时收剑保住价值"],finished:["神兵已成","查看价值，出售继续、收藏或献给食铁兽"],broken:["剑胚断裂","这把剑的价值归零，可以再锻一把"]};i==="forge"&&_e.state.session.level>=bn&&(s.forge=["已经达到 +99","点击收剑，保住当前价值"]);const r=Mt?["正在移剑","等待宝剑放稳后再操作"]:$e==="cat"?["点食铁兽，上交宝剑","价值达标的宝剑可以换取铁剑"]:$e==="relics"?["遗物机","三格遗物 · 成功纳贡后补货"]:$e==="collection"?["","收藏的宝剑陈列在这里"]:$e==="merchant"?["幽灵商人的货架","每三天来访 · 限时金币交易"]:s[i];z("cue-title").textContent=r[0],z("cue-detail").textContent=r[1];const o=$e==="cat"?["cat"]:$e==="relics"?["relics"]:$e==="collection"?[]:i==="choose"?["furnace"]:i==="heat"?["anvil"]:i==="forge"&&_e.state.session.level<bn?["anvil"]:[];for(const a of["furnace","anvil","cat","relics"]){const l=z("target-"+a);l.classList.toggle("available",o.includes(a)&&!Mt&&!Ot),l.hidden=$e!=="forge"&&a!==$e||a==="anvil"&&i==="forge"}z("target-anvil").innerHTML=i==="forge"?"":"铸剑台 <small>放剑</small>",z("target-furnace").innerHTML="炉火 Lv"+_e.state.furnaceLevel+" <small>"+(i==="heat"?"加热中":i==="choose"?"入炉":"")+"</small>",z("scene3d").setAttribute("aria-label",r.join("，"))}function gt(){const i=h5(Xe,_e.state);i!==Xe&&(Xe=i,Ii());const e=_e.state,t=e.session,n=Ts();if(w5(n),document.querySelector(".game").dataset.phase=n,C5(),nt?.setBoardInfo(z("cue-title").textContent||"",Vt,t?Zs(t,lr()):0,Tt),nt?.sync(e),z("iron-blanks").textContent=String(e.ironBlanks),z("day-label").textContent="纳贡日 "+e.workshopDay,S5(),z("coin").textContent=Rt(e.coins),z("scrap").textContent=Rt(e.scraps),z("sound").textContent=e.sound?"🔊":"🔇",z("show-legacy-swords").checked=e.showLegacySwords,z("show-legacy-swords").toggleAttribute("disabled",Ot||Mt||Nt),$h(),document.querySelector(".game").dataset.striking=String(Ot),z("cashout").toggleAttribute("disabled",Ot||Mt||Kn()&&Xe.step==="hammer"),z("nav-collection").textContent="剑谱 "+e.swords.length+" · 展柜 "+e.caseIds.length+"/"+_e.caseCapacity(),z("foot-hint").textContent=t?"当前 "+(t.apprentice?"学徒代工":"正式锻造")+" · 已锤 "+t.hits+" 次":"巨剑纳贡 · 铁剑再锻 · 遗物成长",!t)Gc(0,"great"),$e==="forge"&&(z("cue-detail").textContent="默认大剑 · 铁胚 · 点击熔炉开始");else{if(Gc(t.level,t.blade),n==="heat"&&(z("heating-order").textContent="炉中加热 · Lv"+e.furnaceLevel+" · "+cr(e.furnaceLevel)/1e3+" 秒满温",z("heat-fill").style.width=Tt+"%",z("heat-text").textContent=Math.round(Tt)+"%"),n==="forge"){z("supply-actions").replaceChildren();for(const[a,l]of[["ward","猫爪护符"],["chalk","绯红粉笔"],["star","寒星碎片"],["clock","回溯发条"]]){const c=e.supplies[a];if(!c)continue;const h=document.createElement("button");h.className="secondary",h.textContent=l+" ×"+c,h.disabled=Ot||Mt||a==="ward"&&!!t.wardNext||a==="chalk"&&!!t.chalkNext||a==="clock"&&!t.lastCheckpoint,h.addEventListener("click",()=>mn(()=>{a==="clock"?_e.rewindLastStrike():_e.useSupply(a),wt(a==="clock"?"已恢复到上一锤之前":l+"已启用")})),z("supply-actions").append(h)}z("forge-level").textContent="+"+t.level,z("hit-count").textContent=String(t.hits);for(const a of["safe","precise","bold"])z(a).toggleAttribute("disabled",Ot||Mt),z(a).classList.toggle("active",a===wo);z("protection").textContent=t.protection?t.protectedUsed?"护符已消耗":"首次断剑会改为受损":"无护符保护",z("heat-tag").textContent=t.goodHeat?"好火候":"普通火候",z("value-now").textContent=Rt(Zs(t,lr()))+" 金",z("cashout").textContent=t.level>=bn?"已满级 · 收剑":"收剑",z("result").textContent=Vt;const s=z("mark"),r=s.value,o=Yc(e).filter(a=>!t.apprentice||a==="none");s.innerHTML=o.map(a=>'<option value="'+a+'">'+ul[a].name+" · "+ul[a].detail+"</option>").join(""),s.value=r&&o.includes(r)?r:"none",z("mark-row").hidden=o.length<2}if(n==="finished"&&t.sword){const s=t.sword;z("finished-level").textContent="+"+s.level,document.querySelector("#finished .section-title small").textContent=(t.specialBlank?"星纹·":"")+Sn(s.blade,s.level,_e.state.showLegacySwords).name,z("finished-quality").textContent="Q "+s.quality.toFixed(2),z("finished-value").textContent=Rt(s.value),z("finished-sell").textContent=Rt(_e.salePrice(s)),z("deliver").hidden=!t.apprentice,z("sell").hidden=t.apprentice,z("collect").hidden=t.apprentice,z("offer-cat").hidden=t.apprentice,z("collect").toggleAttribute("disabled",t.apprentice||e.caseIds.length>=_e.caseCapacity()||Kn()&&Xe.step==="tribute"),z("sell").toggleAttribute("disabled",t.apprentice||Kn()&&Xe.step==="tribute"),z("sell").toggleAttribute("disabled",t.apprentice),t.apprentice&&(z("deliver").textContent=t.hits>=2?"完成代工 · 获得60金币":"结束练习")}n==="broken"&&(z("broken-rewind").hidden=!e.supplies.clock||!t.lastCheckpoint),n==="broken"&&(z("broken-scrap").textContent=t.apprentice?"学徒练习不损失材料":e.relics.includes("salvage")&&!t.tutorial?"已回收绑定残料 "+Math.floor(ii[t.material].blank*.4):"当前剑价值归零 · 成长与遗物保留")}ru(),nl()}function Gc(i,e){z("sword-level-tag").textContent=Sn(e,i,_e.state.showLegacySwords).name+" · 强化 +"+i}function lr(){return z("mark").value||"none"}function eu(i){return z("forge-options").open?Kc(i-fr,_e.state.hammerLevel):"normal"}function go(i){if(qn=0,bt.paused)return;if(i-Bc<50){qn=requestAnimationFrame(go);return}Bc=i;const e=_e.state.session;if(nt?.setBoardInfo(z("cue-title").textContent||"",Vt,e?Zs(e,lr()):0,Tt),e?.phase==="forge"&&$e==="forge"){const t=((i-fr)%1500+1500)%1500,n=.27+Math.abs(750-t)/750*.77;z("forge-options").open&&(z("timing-ring").style.transform="translate(-50%,-50%) scale("+n.toFixed(3)+")");const s=eu(i),r=Zc(_e.state,wo,e.level,s);nt?.sync(_e.state,r),z("cashout").toggleAttribute("disabled",Ot||Mt||!!nt?.hostHammerBusy()||Kn()&&Xe.step==="hammer"),z("timing-indicator").textContent=s==="perfect"?"✦ 完美":s==="normal"?"普通":"偏离",z("timing-indicator").className="timing "+s,z("probability").textContent="成功 "+(r.success/100).toFixed(1)+"% · 大成功 "+(r.great/100).toFixed(1)+"% · 不变 "+(r.unchanged/100).toFixed(1)+"% · 受损 "+(r.damage/100).toFixed(1)+"%",z("fracture-risk").textContent=e.level>=bn?"封顶":(r.break/100).toFixed(1)+"%";const o=wn(e),a=e.frenzyCharge>=Ci;z("frenzy-label").textContent=e.superGod?"超神 · 每锤价值 +50%～100%":o?"入神 "+((e.frenzyUntil-Date.now())/1e3).toFixed(1)+"秒 · 不会断剑":a?"入神已就绪 · 下一锤开启":"入神蓄力 "+e.frenzyCharge+"/10",z("frenzy-meter").classList.toggle("active",o||a);const l=z("frenzy-cells").children;for(let c=0;c<l.length;c++)l[c].classList.toggle("filled",o||c<e.frenzyCharge);z("scene3d").dataset.frenzy=e.superGod?"super-god":o?"active":a?"ready":"charging",z("ring-progress").style.width=Math.round(t/1500*100)+"%"}Eo&&e?.phase==="heat"&&!Mt&&$e==="forge"&&!document.hidden&&(Tt=Math.min(100,Tt+mu(Math.max(0,i-Ms),_e.state.furnaceLevel)),Ms=i,z("heat-fill").style.width=Tt+"%",z("heat-text").textContent=Math.round(Tt)+"%",nt?.sync(_e.state),nt?.setHeat(Tt),z("scene3d").dataset.heat=Tt.toFixed(1),(i-zc>=1e3||Tt>=100&&kc<100)&&(xs(_e.state),zc=i,kc=Tt),z("cue-title").textContent=qc(Tt,_e.state.furnaceLevel,_e.state.relics.includes("ember"))?"好火候！点铸剑台取剑":Tt>=100?"火候已过，仍可取剑":"剑正在炉中加热"),iu(i),qn=requestAnimationFrame(go)}function tu(){if(Kn()&&Xe.step==="cashout"){wt("宝剑已达纳贡标准，请点击收剑");return}const i=_e.state.session,e=performance.now();if(bt.paused||i?.phase!=="forge"||$e!=="forge"||e<so||Ot||Mt||Nt||!nt||document.hidden||i.level>=bn||nt.hostHammerBusy())return;_s.unlock();const t=eu(e),n=wo,s=i.id+":hit:"+i.hits,r=i.material,o=i.superGod||wn(i)||i.frenzyCharge>=Ci?.65:1;Ot=!0,so=e+550*o,gt(),nt.strike(()=>{let a="success";return Ot=!1,so=performance.now()+370*o,mn(()=>{const l=_e.strike(n,t,s);a=l.result,jh.vibrationEnabled&&mi.vibrate(a==="break"||a==="great"?"heavy":a==="damage"?"medium":"light"),_s.impact(a,r,n),a==="success"||a==="great"?Vt=(a==="great"?"✦ 大成功！":"锻造成功")+" "+Sn(i.blade,l.after,_e.state.showLegacySwords).name+" · "+Rt(l.afterValue)+" 金":a==="unchanged"?Vt="本锤无变化 · 价值 "+Rt(l.afterValue)+" 金":a==="damage"?Vt=l.protected?"🛡️ 护符挡住断剑 · Lv"+l.after:"⚡ 锻造受损 Lv"+l.after:Vt="💥 宝剑断裂",l.superGod?Vt=(l.enteredSuperGod?"✦ 进入超神！":"✦ 超神锻造")+" · 价值 +"+Math.round((l.valueMultiplier-1)*100)+"% · "+Rt(l.afterValue)+" 金":wn(i)&&!l.frenzy&&(Vt="入神！4秒内不会断剑 · "+Vt),fr=performance.now()}),a},o)}function nu(i=!1){if(!(bt.paused||_e.state.session||Mt||!nt))try{nt.clearRewards(),Tt=0,_e.start("iron","great",i),Vt="",Tt=0,Mt=!0,gt(),nt.transferTo("furnace",()=>{Mt=!1,Eo=!0,Ms=performance.now(),gt()})}catch(e){wt(e instanceof Error?e.message:String(e))}}function E5(){bt.paused||Ts()!=="heat"||Mt||!nt||(Eo=!1,Mt=!0,gt(),nt.transferTo("anvil",()=>{Mt=!1,mn(()=>_e.heat(Tt)),fr=performance.now();try{sessionStorage.removeItem(Jh)}catch{}}))}function T5(){if(Kn()&&Xe.step==="hammer"){wt("先锤剑两次，达到首次纳贡要求");return}bt.paused||Ts()!=="forge"||Ot||Mt||nt?.hostHammerBusy()||mn(()=>{_e.cashout(lr()),Vt=""})}function A5(i){if(!i||Mt||Ot||Nt)return;if(i==="cat"){$e==="cat"?z("tribute").click():Jn("cat");return}if(i==="relics"){Jn("relics");return}if($e!=="forge")return;const e=Ts();i==="furnace"&&(e==="choose"?nu(_e.needsApprentice()):wt(e==="heat"?"剑已经在炉中加热，点铸剑台取出":"先把这把剑锻好，再入炉新剑")),i==="anvil"&&(e==="heat"?E5():e==="forge"?tu():e==="choose"&&wt("先点熔炉，把剑胚加热"))}for(const i of["safe","precise","bold"])z(i).addEventListener("click",()=>{wo=i,gt()});const M0=z("scene3d");M0.addEventListener("pointerdown",i=>{if(i.button!==0||!i.isPrimary||Mt||Ot||Nt)return;_s.unlock();const e=nt?.pickRelic(i.clientX,i.clientY);if(e){i.preventDefault(),Qh(e);return}const t=nt?.pick(i.clientX,i.clientY)||null;i.preventDefault(),A5(t)});M0.addEventListener("pointermove",i=>{M0.style.cursor=nt?.pick(i.clientX,i.clientY)?"pointer":"default"});document.addEventListener("keydown",i=>{if(!bt.paused&&!(z("game-confirm").open||z("owned-relics").open)){if(z("relic-detail").open){i.code==="Escape"&&(i.preventDefault(),To());return}if(i.code==="Escape"&&$e==="merchant"){i.preventDefault(),tl();return}if(i.code==="Escape"){z("forge-options").removeAttribute("open"),Jn("forge");return}i.code!=="Space"||i.repeat||i.ctrlKey||i.metaKey||i.altKey||i.target?.closest('button,select,input,textarea,a,[contenteditable="true"]')||Ts()==="forge"&&$e==="forge"&&(i.preventDefault(),tu())}});z("cashout").addEventListener("click",T5);z("mark").addEventListener("change",gt);for(const[i,e]of[["deliver","DELIVERED"],["collect","COLLECTED"]])z(i).addEventListener("click",()=>mn(()=>{const t=_e.dispose(e);wt(t>0?"获得金币 +"+Rt(t):"神兵已收入剑谱"),li(700,.25)}));z("sell").addEventListener("click",()=>{if(Kn()&&Xe.step==="tribute"){wt("第一把达标宝剑请先献给食铁兽");return}try{const i=_e.dispose("SOLD");wt("出售获得 "+Rt(i)+" 金 · 继续锻造"),li(700,.25),gt(),nu(_e.needsApprentice())}catch(i){wt(i instanceof Error?i.message:String(i)),gt()}});z("broken-next").addEventListener("click",()=>mn(()=>{_e.closeBroken(),Vt=""}));z("broken-rewind").addEventListener("click",()=>mn(()=>{_e.rewindLastStrike(),Vt="发条回溯 · 宝剑已修复",wt("宝剑已恢复到上一锤之前")}));z("nav-collection").addEventListener("click",()=>Jn("collection"));z("show-legacy-swords").addEventListener("change",()=>mn(()=>{_e.setShowLegacySwords(z("show-legacy-swords").checked),Vt="",wt(_e.state.showLegacySwords?"已恢复旧剑外观":"已隐藏旧剑外观 · 只展示独立剑型")}));z("sound").addEventListener("click",()=>{_e.state.sound=!_e.state.sound,_s.setMuted(!_e.state.sound),xs(_e.state),gt()});function C5(){const i=_e.state,e=i.session,t=e?.sword;for(const u of["forge","cat","relics","collection"]){const g=z("station-"+u);g.classList.toggle("active",$e===u),g.setAttribute("aria-pressed",String($e===u));const x=Xe.step==="tribute"?"cat":Xe.step==="relic"?"relics":"forge";g.toggleAttribute("disabled",Nt||Ot||Mt||Kn()&&u!=="forge"&&u!==x)}z("scene-name").textContent=$e==="forge"?"神兵锻造台":$e==="cat"?"食铁兽的纳贡台":$e==="relics"?"遗物机":$e==="collection"?"":"幽灵商人";const n=ks(i);t?.value??(e&&Zs(e,lr())),z("cat-demand-label").textContent="纳贡宝剑价值 ≥ "+Rt(n)+" 金",z("cat-count").textContent="已纳贡 "+i.catTributes+" 次";const s=_e.tributeCandidates(),r=s.filter(u=>u.value>=n);r.some(u=>u.id===ns)||(ns=r[0]?.id??"air");const o=z("tribute-choice");o.replaceChildren();for(const u of s){const g=document.createElement("option");g.value=u.id,g.disabled=u.value<n,g.textContent=(i.caseIds.includes(u.id)?"剑架 · ":"当前 · ")+(u.name||Sn(u.blade,u.level,i.showLegacySwords).name)+" · "+Rt(u.value)+" 金"+(g.disabled?"（未达标）":""),o.append(g)}if(!r.length){const u=document.createElement("option");u.value="air",u.textContent="上贡空气",o.append(u)}o.value=ns,o.disabled=Nt;const a=r.find(u=>u.id===ns),l=!!a;z("tribute").toggleAttribute("disabled",Nt),z("offer-cat").toggleAttribute("disabled",Nt||!l),z("tribute").textContent=Nt?"食铁兽正在处理纳贡……":a?"上交宝剑 · 换取 "+Jc(a.value,n)+" 把铁剑":"上贡空气 · 接受惩罚",z("cat-offer-info").textContent=a?"本次要求 "+Rt(n)+" 金 · 已选 "+Rt(a.value)+" 金":"没有达标宝剑。上贡空气会被抽打三下，并随机失去一件遗物；没有遗物则扣除等价金币（余额不足扣至 0）。",z("relic-rack-count").textContent=i.relics.length+"/"+ro+" · 第 "+i.workshopDay+" 日";const c=z("relic-list");c.replaceChildren();const h=i.workshopDay===1&&!i.relicWelcomeUsed;for(let u=0;u<3;u++){const g=i.relicOffers[u]||"";if(!g){const w=document.createElement("div");w.className="relic-row relic-empty",w.dataset.slot=String(u),w.textContent="售罄 · 纳贡后补货",c.append(w);continue}const x=nn.find(w=>w.id===g);if(!x)continue;const m=document.createElement("div");m.className="relic-row",m.dataset.slot=String(u);const p=document.createElement("div"),y=document.createElement("b"),_=document.createElement("small");y.textContent=x.name+(Wn(i,g)>0&&g==="ember"?" · 升阶":""),_.textContent=Eu(i,g),p.append(y,_);const v=document.createElement("button");v.className="secondary",v.textContent=h?"免费领取":oo(i,g)+" 铁剑 · 购买",v.setAttribute("aria-label","购买"+x.name),v.addEventListener("click",()=>Qh(x.id)),m.append(p,v),m.setAttribute("role","group"),m.setAttribute("aria-label",x.name),c.append(m)}const d=z("relic-equipped");if(d.replaceChildren(),!i.relics.length){const u=document.createElement("small");u.className="hint",u.textContent="遗物架尚为空",d.append(u)}for(const u of i.relics){const g=nn.find(_=>_.id===u);if(!g)continue;const x=document.createElement("div");x.className="relic-row";const m=document.createElement("div"),p=document.createElement("b");p.textContent="✦ "+g.name,m.append(p);const y=document.createElement("button");y.className="secondary",y.textContent="卸下",y.disabled=!!e,y.addEventListener("click",async()=>{await Zh("确认卸下「"+g.name+"」？",`已花费的铁剑不返还。
卸下后将失去该遗物加成。`,"确认卸下","再想想")&&mn(()=>_e.removeRelic(u))}),x.append(m,y),d.append(x)}R5(),z("merchant-note").textContent="纳贡日 "+i.workshopDay+" · "+(is(i)?"今日开摊，商品各限购一份":"商人暂时离开"),z("merchant-inventory").textContent="星纹剑胚 "+i.specialBlanks+" · 护符 "+i.supplies.ward+" · 粉笔 "+i.supplies.chalk+" · 星屑 "+i.supplies.star+" · 发条 "+i.supplies.clock;const f=z("merchant-list");f.replaceChildren();for(const u of i.merchantStock){const g=Ea.find(w=>w.id===u);if(!g)continue;const x=document.createElement("div");x.className="relic-row";const m=document.createElement("div"),p=document.createElement("b"),y=document.createElement("small");p.textContent=g.name,y.textContent=g.detail,m.append(p,y);const _=document.createElement("button");_.className="secondary";const v=i.merchantPurchased.includes(u);_.textContent=v?"已售罄":g.cost+" 金",_.disabled=v||!!e||i.coins<g.cost||Nt||!is(i),_.addEventListener("click",()=>mn(()=>{_e.buyMerchant(u),wt("商人交付 · "+g.name),li(760,.24)})),x.append(m,_),f.append(x)}}z("relic-look-again").addEventListener("click",To);z("relic-exchange").addEventListener("click",()=>{const i=el;i&&mn(()=>{_e.buyRelic(i),To(),wt("获得遗物 · "+nn.find(e=>e.id===i).name),li(820,.25)})});for(const i of["forge","cat","relics","collection"])z("station-"+i).addEventListener("click",()=>Jn(i));z("merchant-call").addEventListener("click",()=>Jn("merchant"));z("merchant-back").addEventListener("click",()=>void tl());document.querySelector("#merchant-panel .station-drawer-title").addEventListener("click",i=>{i.preventDefault(),tl()});z("offer-cat").addEventListener("click",()=>Jn("cat"));z("cat-back").addEventListener("click",()=>{nt?.clearRewards(),z("cat-back").hidden=!0,z("tribute-reward").textContent="",z("cat-speech").textContent="「交出你的巨剑！本大爷饿了，开饭！」",Jn("forge")});z("scene3d").addEventListener("whip-impact",()=>{const i=document.querySelector(".game");i.classList.remove("whip-impact"),i.offsetWidth,i.classList.add("whip-impact"),window.setTimeout(()=>i.classList.remove("whip-impact"),340)});z("tribute-choice").addEventListener("change",()=>{ns=z("tribute-choice").value,gt()});z("tribute").addEventListener("click",async()=>{if(!Nt){if(!nt){wt("3D场景尚未就绪，请刷新后重试");return}try{const i=_e.tributeCandidates().find(e=>e.id===ns);if(Nt=!0,nt.clearRewards(),i){const e={...i},t=_e.tribute(i.id);gt(),nt.showTributeSword(e),li(120,.3),await nt.tribute(t.blanks,n=>{z("cat-speech").textContent=n,n.startsWith("噗")&&li(90,.25)}),z("tribute-reward").textContent="获得 "+t.blanks+" 把铁剑 · 遗物机已补货",li(740,.3)}else{const e=_e.tributeAir();gt(),z("cat-speech").textContent="「竟敢拿空气糊弄本大爷！吃我三鞭！」",await nt.punish(n=>{z("cat-speech").textContent="啪！第 "+n+" 鞭",li(110,.12)});const t=nn.find(n=>n.id===e.relicId)?.name;z("cat-speech").textContent="「下次记得带上达标的宝剑！」",z("tribute-reward").textContent=t?"食铁兽拿走了「"+t+"」":"被扣除 "+Rt(e.coinsLost)+" 金（等价遗物 "+Rt(e.equivalent)+" 金）"}Nt=!1,z("cat-back").hidden=!1,gt()}catch(i){Nt=!1,wt(i instanceof Error?i.message:String(i)),gt()}}});function R5(){const i=_e.state.caseIds.map(t=>_e.state.swords.find(n=>n.id===t&&n.disposal==="COLLECTED")).filter(t=>!!t),e=z("collection-list");if(e.replaceChildren(),!i.length){const t=document.createElement("p");t.className="muted",t.textContent="剑架还空着。锻造后选择“收藏”，宝剑就会摆在这里。",e.append(t)}for(const[t,n]of i.entries()){const s=document.createElement("div");s.className="collection-row",s.dataset.swordId=n.id;const r=document.createElement("div"),o=document.createElement("b"),a=document.createElement("small");o.textContent=n.name||Sn(n.blade,n.level,_e.state.showLegacySwords).name,a.textContent=Rt(n.value)+" 金 · +"+n.level,r.append(o,a);const l=document.createElement("button");l.className="secondary",l.textContent="出售",l.setAttribute("aria-label","出售"+o.textContent+"，获得"+Rt(_e.salePrice(n))+"金"),l.disabled=!!_e.state.session,l.addEventListener("click",async()=>{await Zh("确认出售宝剑？",o.textContent+`
出售可获得 `+Rt(_e.salePrice(n))+" 金。出售后将从剑架移除。","确认出售")&&mn(()=>{_e.sellCollected(n.id),wt("宝剑已出售，剑架位置腾空")})}),s.append(r,l),e.append(s)}}const P5={furnace:{title:"开始第一把宝剑",detail:"点击火炉，把免费剑胚送入炉中。"},heat:{title:"掌握火候",detail:"观察温度，进入理想范围后点铸剑台取剑。"},hammer:{title:"锤出更值钱的宝剑",detail:"点击铸剑台，连续锤两次。首次教学剑保证成功。"},cashout:{title:"保住你的成果",detail:"剑已达纳贡标准！点击“收剑”，继续锤可能有风险。"},tribute:{title:"献给食铁兽",detail:"点击“纳贡”，上交达标宝剑，获得铁剑。"},relic:{title:"领取第一件遗物",detail:"点击“遗物”，免费选择一件，增强锻造能力。"}};let Vc=0;function nl(){const i=z("tutorial-layer"),e=Mt||Ot||Nt||!nt||z("relic-detail").open||z("owned-relics").open;if(i.hidden=!bo()||e,document.querySelector(".game").dataset.tutorial=Xe.step,i.hidden)return;const t=P5[Xe.step];z("tutorial-title").textContent=t.title;let n=t.detail;Xe.step==="tribute"&&$e==="cat"&&(n="选择达标宝剑，点击“上交宝剑”，观看食铁兽吞剑。"),Xe.step==="relic"&&$e==="relics"&&(n=Xe.replay&&_e.state.relicWelcomeUsed?"点击遗物并确认购买；旧存档不重复赠送免费遗物。":"点击任意在售遗物，选“确认购买”即可免费获得一件。"),Xe.replay&&Xe.step==="furnace"&&(n="复习模式不会重发免费剑胚；点击火炉按正常消耗锻造。"),z("tutorial-detail").textContent=n,z("tutorial-progress").textContent="新手引导 "+(js.indexOf(Xe.step)+1)+"/6"+(Xe.replay?" · 复习":""),z("tutorial-finish").hidden=!Xe.replay,z("tutorial-next").hidden=!Xe.replay,z("tutorial-next").textContent=Xe.step==="relic"?"完成复习":"下一步 ›",iu(performance.now(),!0)}function iu(i,e=!1){if(!e&&i-Vc<120||(Vc=i,z("tutorial-layer").hidden||!bo()))return;const n=z("scene3d"),r=document.querySelector(".game").getBoundingClientRect(),o=n.getBoundingClientRect(),a=z("tutorial-focus"),l=z("tutorial-tip");let c=null;const h=Xe.step==="furnace"?"furnace":Xe.step==="heat"||Xe.step==="hammer"?"anvil":null;if(h)try{const p=JSON.parse(n.dataset.targets||"{}")[h];p&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&(c={x:o.left-r.left+p.x,y:o.top-r.top+p.y,size:h==="furnace"?94:112})}catch{}if(!c){const p=Xe.step==="cashout"?"cashout":Xe.step==="tribute"?$e==="cat"?"tribute":"station-cat":Xe.step==="relic"?$e==="relics"?"relic-list":"station-relics":"station-forge";let y=z(p);p==="relic-list"&&(y=document.querySelector("#relic-list .relic-row button")||z("relic-list"));const _=y.getBoundingClientRect();c={x:_.left+_.width/2-r.left,y:_.top+_.height/2-r.top,size:Math.max(66,Math.min(124,Math.max(_.height,Math.min(_.width,100))+22))}}const{x:d,y:f,size:u}=c;a.style.left=Math.min(r.width-24,Math.max(24,d))+"px",a.style.top=Math.min(r.height-24,Math.max(24,f))+"px",a.style.width=u+"px",a.style.height=u+"px";const g=Math.max(110,(z("scene-cue").getBoundingClientRect().top-r.top>0,100)),x=l.offsetHeight||115;let m=f>r.height*.5?f-x-94:f+75;f>r.height*.5&&m<g&&(m=f+75),m=Math.max(g,Math.min(r.height-x-20,m)),l.style.top=m+"px"}z("tutorial-skip").addEventListener("click",()=>{Xe=Q0(Xe,!0),Ii(),gt()});z("tutorial-finish").addEventListener("click",()=>{Xe=Q0(Xe),Ii(),gt()});z("tutorial-next").addEventListener("click",()=>{if(!Xe.replay||!bo())return;const i=js.indexOf(Xe.step);if(i>=js.length-1){Xe=Q0(Xe),Ii(),Jn("forge"),gt();return}Xe={...Xe,step:js[i+1]},Ii();const e=Xe.step==="tribute"?"cat":Xe.step==="relic"?"relics":"forge";$e=e,nt?.setStation(e),gt()});z("tutorial-help").addEventListener("click",()=>{if(_e.state.session){wt("请先完成当前宝剑，再重新体验新手引导");return}Xe=c5(_e.state),Ii(),$e="forge",nt?.setStation("forge"),gt()});let ci=!1;try{ci=mi.storage.getItem("yichuichengshenbing.boardHidden")==="true"}catch{}function su(){nt?.setBoardHidden(ci),z("board-toggle").textContent=ci?"▼":"▲",z("board-toggle").setAttribute("aria-expanded",String(!ci)),z("board-toggle").setAttribute("aria-label",ci?"显示信息面板":"隐藏信息面板")}z("board-toggle").addEventListener("click",()=>{ci=!ci;try{mi.storage.setItem("yichuichengshenbing.boardHidden",String(ci))}catch{}su()});su();function ru(){const i=document.querySelector(".control:not([hidden])");document.querySelector(".game").style.setProperty("--panel-height",(i?.getBoundingClientRect().height||0)+"px")}const L5=new ResizeObserver(ru);for(const i of document.querySelectorAll(".control"))L5.observe(i);const Wc=_e.state.session;if(Wc?.phase==="heat"){if(!Ks?.runtime.heat)try{const i=JSON.parse(sessionStorage.getItem(Jh)||"null");Tt=i?.id===Wc.id?Math.min(100,Math.max(0,Number(i.percent)||0)):0}catch{}Eo=!0,Ms=performance.now(),nt?.setHeat(Tt)}z("workshop-upgrades").append(z("nav-collection"));let Xc=0,qr=0,Yr=[];bt.subscribe(i=>{if(pi.inert=i,pi.dataset.paused=String(i),i){Xc=performance.now(),qr=Date.now(),xs(_e.state),cancelAnimationFrame(qn),qn=0,nt?.setPaused(!0),un?.suspend().catch(()=>{}),_s.suspend(),Yr=document.getAnimations().filter(e=>e.playState==="running");for(const e of Yr)e.pause()}else{const e=performance.now()-Xc,t=Math.max(0,Date.now()-qr),n=_e.state.session;Ms+=e,fr+=e,so+=e,n&&(n.frenzyUntil>qr&&(n.frenzyUntil+=t),n.lastCheckpoint&&n.lastCheckpoint.frenzyUntil>qr&&(n.lastCheckpoint.frenzyUntil+=t));for(const s of Yr)s.playState==="paused"&&s.play();Yr=[],nt?.setPaused(!1),_e.state.sound&&(un?.resume().catch(()=>{}),_s.resume()),xs(_e.state),gt(),qn||(qn=requestAnimationFrame(go))}});const D5=mi.subscribeLifecycle(()=>bt.set("host",!0),()=>bt.set("host",!1));document.addEventListener("visibilitychange",()=>bt.set("document",document.hidden));window.addEventListener("pagehide",i=>{bt.set("page",!0),i.persisted||($0.dispose(),D5(),nt?.destroy())});window.addEventListener("pageshow",i=>{i.persisted&&(bt.set("page",!1),bt.set("document",document.hidden))});xs(_e.state);gt();dr.remove();pi.inert=bt.paused;pi.dataset.paused=String(bt.paused);bt.set("document",document.hidden);!bt.paused&&!qn&&(qn=requestAnimationFrame(go));
