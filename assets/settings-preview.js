/* Preview-built UI patch; no TypeScript sources are shipped in this repository. */
(()=>{
 if(document.getElementById('settings-open'))return;
 const root=document.querySelector('.game'),sound=document.getElementById('sound');
 if(!root||!sound)return;
 const gear="<button id=\"settings-open\" class=\"settings-trigger\" type=\"button\" aria-label=\"打开设置\" aria-haspopup=\"dialog\" aria-controls=\"settings-dialog\"><svg viewBox=\"0 0 24 24\" width=\"21\" height=\"21\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.5 2.8h3l.5 2.3c.5.2 1 .4 1.5.7l2.1-1.1 2.1 2.1-1.1 2.1c.3.5.5 1 .7 1.5l2.3.5v3l-2.3.5c-.2.5-.4 1-.7 1.5l1.1 2.1-2.1 2.1-2.1-1.1c-.5.3-1 .5-1.5.7l-.5 2.3h-3l-.5-2.3c-.5-.2-1-.4-1.5-.7l-2.1 1.1-2.1-2.1 1.1-2.1c-.3-.5-.5-1-.7-1.5l-2.3-.5v-3l2.3-.5c.2-.5.4-1 .7-1.5L4.3 6.8l2.1-2.1 2.1 1.1c.5-.3 1-.5 1.5-.7z\"/><circle cx=\"12\" cy=\"12\" r=\"3.3\"/></svg></button>";
 const dialogs="<dialog id=\"settings-dialog\" class=\"game-dialog settings-dialog\" aria-labelledby=\"settings-title\">\n <h2 id=\"settings-title\">设置</h2><div class=\"game-dialog-rule\"></div>\n <div class=\"settings-content\">\n  <div class=\"settings-row\"><div class=\"settings-row-text\"><strong>游戏声音</strong><small>锻打、纳贡及场景音效</small></div><button id=\"settings-sound\" class=\"sound-switch\" type=\"button\" role=\"switch\" aria-label=\"游戏声音\" aria-checked=\"true\"><span id=\"settings-sound-state\">开启</span><span class=\"sound-switch-track\" aria-hidden=\"true\"><span class=\"sound-switch-thumb\"></span></span></button></div>\n  <button id=\"settings-guide\" type=\"button\" class=\"settings-row settings-link\"><span class=\"settings-row-text\"><strong>新手教程</strong><small>完整了解锻造、纳贡与遗物玩法</small></span><span class=\"settings-chevron\" aria-hidden=\"true\">›</span></button>\n </div>\n <div class=\"game-dialog-actions single\"><button id=\"settings-close\" class=\"dialog-button primary\" type=\"button\">返回游戏</button></div>\n</dialog>\n<dialog id=\"guide-dialog\" class=\"game-dialog guide-dialog\" aria-labelledby=\"guide-heading\">\n <h2 id=\"guide-heading\">新手教程</h2><div class=\"game-dialog-rule\"></div>\n <div class=\"guide-content\" role=\"group\" aria-label=\"游戏玩法说明\" aria-live=\"polite\">\n  <small id=\"guide-progress\" class=\"guide-progress\">1 / 8</small>\n  <h3 id=\"guide-title\"></h3><p id=\"guide-description\"></p>\n  <ul id=\"guide-points\"></ul>\n </div>\n <div class=\"game-dialog-actions\"><button id=\"guide-prev\" class=\"dialog-button secondary\" type=\"button\">上一步</button><button id=\"guide-next\" class=\"dialog-button primary\" type=\"button\">下一步</button></div>\n <div class=\"game-dialog-actions single\"><button id=\"guide-replay\" class=\"dialog-button secondary\" type=\"button\">重新体验操作引导</button></div>\n <div class=\"game-dialog-actions single\"><button id=\"guide-close\" class=\"dialog-button secondary\" type=\"button\">返回设置</button></div>\n</dialog>\n";
 sound.insertAdjacentHTML('afterend',gear);
 document.body.insertAdjacentHTML('beforeend',dialogs);
 const $=id=>document.getElementById(id);
 const settings=$('settings-dialog'),guide=$('guide-dialog');
 const hasOtherDialog=()=>!!document.querySelector('dialog[open]');
 const soundEnabled=()=>sound.textContent.includes('🔊');
 const renderSound=()=>{const on=soundEnabled(),button=$('settings-sound');button.setAttribute('aria-checked',String(on));button.setAttribute('aria-label','游戏声音：'+(on?'已开启':'已关闭'));$('settings-sound-state').textContent=on?'开启':'关闭';};
 const pages=[
 {title:'锻剑、纳贡、再成长',description:'你的目标是打造价值越来越高的神兵，满足食铁兽的纳贡要求。',points:['工坊有「剑架、锻剑、纳贡、遗物」四个区域。','锻剑获得宝剑 → 纳贡换铁剑 → 购买遗物提高能力 → 继续锻造。']},
 {title:'第 1 步 · 熔炉加热',description:'在锻剑场景点击熔炉，将剑胚放入火中。',points:['加热到理想火候后点击铸剑台取剑；Lv1～Lv2 的好火候是 70%～90%。','Lv3 起理想范围可延伸到 100%；炉火最高 Lv9，升级效果来自遗物。','首次教学铸剑免费，后续需要铁剑或相应资源。']},
 {title:'第 2 步 · 点击锻打',description:'宝剑放上锻造台后，点击台面连续落锤。',points:['每锤可能成功、大成功、不变、受损或断裂；强化与价值随结果变化。','继续锤打可以获得更高价值，但也有受损、断剑风险。','观察当前价值和下一锤风险，决定何时停手收剑。']},
 {title:'入神与超神',description:'连锤积攒入神蓄力，进入短暂的特殊锻造状态。',points:['进入「入神」后宝剑呈流动彩虹光效，随后还有机会触发「超神」星空光效。','特殊状态能强化收益与锻造表现，结束后恢复普通锻造。','锤击速度加成主要由相应遗物提供，而不是入神后自动加速。']},
 {title:'第 3 步 · 收剑与剑架',description:'觉得价值合适就点击「收剑」，宝剑正式出炉。',points:['成剑可以「出售」换金币、「收藏」放入剑架，或「献给食铁兽」。','剑架中收藏的宝剑以后也可以选出来纳贡。','出售和收藏不会自动完成纳贡；价值达标的剑建议优先考虑纳贡。']},
 {title:'第 4 步 · 纳贡换铁剑',description:'选择价值达到顶部要求的宝剑，再点击「上交宝剑」。',points:['成功纳贡基础获得 3 把铁剑；价值达到要求的 2、4、8、16 倍等档位，每档再多 1 把。','每次纳贡后纳贡日推进，遗物机重新补货；点击熊猫本身不会上供。','如果没有达标宝剑而上供空气，食铁兽会惩罚并可能没收遗物、扣除金币。']},
 {title:'第 5 步 · 选择遗物',description:'打开右侧「遗物」区域，查看三件在售遗物。',points:['首次可免费领取一件，之后通常需要铁剑购买；已购遗物可装备、卸下。','遗物能影响锻造概率、火炉等能力；已购遗物可在墙上遗物架查看。','幽灵商人会在特定纳贡日来访，提供金币商品与特殊剑胚。']},
 {title:'资源与长期目标',description:'通过锻造、纳贡与收藏循环积累更强的神兵。',points:['金币可从售剑等渠道获取；铁剑主要来自成功纳贡，是继续锻造和交易的资源。','连续上供空气可能触发食铁兽怒火，连续成功纳贡可平息它。','游戏自动保存进度；设置里的声音开关也会保存。','随时可以从「设置 → 新手教程」重新阅读这些说明。']}
];
 let page=0;
 function renderPage(){
  const data=pages[page];
  $('guide-progress').textContent=(page+1)+' / '+pages.length;
  $('guide-title').textContent=data.title;
  $('guide-description').textContent=data.description;
  $('guide-points').replaceChildren(...data.points.map(point=>{const li=document.createElement('li');li.textContent=point;return li;}));
  $('guide-prev').disabled=page===0;
  $('guide-next').textContent=page===pages.length-1?'完成阅读':'下一步';
  const replay=$('guide-replay');replay.disabled=root.dataset.phase!=='choose';replay.title=replay.disabled?'请先完成当前宝剑，再重新体验操作引导':'重新体验新手引导';
 }
 function openSettings(){if(hasOtherDialog())return;renderSound();settings.showModal();}
 function closeSettings(){if(settings.open)settings.close();}
 function openGuide(){closeSettings();page=0;renderPage();guide.showModal();}
 function closeGuide(returnToSettings=true){if(guide.open)guide.close();if(returnToSettings){renderSound();settings.showModal();}}
 $('settings-open').addEventListener('click',openSettings);
 $('settings-close').addEventListener('click',closeSettings);
 $('settings-guide').addEventListener('click',openGuide);
 $('settings-sound').addEventListener('click',()=>{sound.click();renderSound();});
 $('guide-prev').addEventListener('click',()=>{page=Math.max(0,page-1);renderPage();});
 $('guide-next').addEventListener('click',()=>{if(page===pages.length-1)closeGuide();else{page++;renderPage();}});
 $('guide-close').addEventListener('click',()=>closeGuide());
 guide.addEventListener('cancel',e=>{e.preventDefault();closeGuide();});
 settings.addEventListener('cancel',e=>{e.preventDefault();closeSettings();});
 $('guide-replay').addEventListener('click',()=>{
  if(root.dataset.phase!=='choose')return;
  closeGuide(false);$('tutorial-help')?.click();
 });
 document.addEventListener('keydown',e=>{if((guide.open||settings.open)&&e.code==='Space'){e.stopImmediatePropagation();}},true);
 const title=document.querySelector('#collection-panel .station-drawer-title strong');if(title)title.textContent='剑谱（调试）';
})();
