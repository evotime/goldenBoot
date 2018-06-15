var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var battleUI=(function(_super){
		function battleUI(){
			
		    this.p1=null;
		    this.p1name=null;
		    this.p1score=null;
		    this.p2=null;
		    this.soloLife=null;
		    this.life=null;
		    this.pause=null;
		    this.timer=null;
		    this.soloDead=null;
		    this.reborn=null;
		    this.giveUp=null;
		    this.gainGold=null;
		    this.doubleGold=null;
		    this.singleGold=null;
		    this.goldReward=null;
		    this.multiResult=null;
		    this.multiTitle=null;
		    this.resultHead1=null;
		    this.p1Info=null;
		    this.resultHead2=null;
		    this.p2Info=null;
		    this.resultName1=null;
		    this.resultName2=null;
		    this.resultP1Score=null;
		    this.resultP2Score=null;
		    this.resultShare=null;
		    this.multiReplay=null;

			battleUI.__super.call(this);
		}

		CLASS$(battleUI,'ui.battleUI',_super);
		var __proto__=battleUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(battleUI.uiView);

		}

		battleUI.uiView={"type":"View","props":{"width":640,"height":1138},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"p1"},"child":[{"type":"Image","props":{"x":259,"skin":"comp/goldenfoot_ingameframe.png","scaleX":-1}},{"type":"Label","props":{"y":14,"x":70,"width":158,"var":"p1name","text":"无情的死胖子","height":47,"fontSize":26,"font":"Microsoft YaHei","color":"#e2e4e3","bold":true,"align":"center"}},{"type":"Label","props":{"y":66,"width":158,"var":"p1score","text":"22222","height":47,"fontSize":26,"font":"Microsoft YaHei","color":"#e2e4e3","bold":true,"align":"center"}},{"type":"Image","props":{"y":2,"x":2,"width":66,"skin":"comp/blank.png","height":62,"sizeGrid":"1,1,1,1"}}]},{"type":"Box","props":{"y":-2,"x":431,"var":"p2"},"child":[{"type":"Image","props":{"y":2,"x":-49,"skin":"comp/goldenfoot_ingameframe.png"}},{"type":"Label","props":{"y":14,"x":-12,"width":158,"text":"无情的死胖子","name":"p2name","height":47,"fontSize":26,"font":"Microsoft YaHei","color":"#e2e4e3","bold":true,"align":"center"}},{"type":"Label","props":{"y":66,"x":60,"width":158,"text":"22222","name":"p2score","height":47,"fontSize":26,"font":"Microsoft YaHei","color":"#e2e4e3","bold":true,"align":"center"}},{"type":"Image","props":{"y":4,"x":143,"width":66,"skin":"comp/blank.png","height":62,"sizeGrid":"1,1,1,1"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"soloLife"},"child":[{"type":"Image","props":{"y":13,"x":274,"skin":"comp/goldenfoot_ingame_icon_ball.png"}},{"type":"Label","props":{"y":8,"x":322,"width":46,"var":"life","text":"3","height":63,"fontSize":38,"font":"Microsoft YaHei","color":"#ff3200","bold":true}}]},{"type":"Image","props":{"y":1065,"x":556,"var":"pause","skin":"comp/goldenfoot_ingame_icon_frame.png"},"child":[{"type":"Image","props":{"y":15,"x":19,"skin":"comp/goldenfoot_ingame_icon_stop.png"}}]},{"type":"Image","props":{"y":17,"x":271,"visible":false,"var":"timer","skin":"comp/goldenfoot_ingame_timecircleBG.png"},"child":[{"type":"Image","props":{"y":9,"x":8,"skin":"comp/goldenfoot_ingame_timecircle.png"}},{"type":"Image","props":{"y":20,"x":36,"skin":"comp/goldenfoot_ingame_icon_time.png"}},{"type":"Label","props":{"y":56,"x":37,"text":"45","fontSize":24,"font":"Microsoft YaHei","color":"#f3f5f4","bold":true}}]},{"type":"Box","props":{"y":391,"x":154,"visible":false,"var":"soloDead"},"child":[{"type":"Label","props":{"x":50,"width":245,"text":"观看视频复活","height":114,"fontSize":40,"font":"Microsoft YaHei","color":"#f1ecec","bold":true,"align":"center"}},{"type":"Image","props":{"y":63,"width":336,"var":"reborn","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"}},{"type":"Image","props":{"y":177,"x":22,"width":292,"var":"giveUp","skin":"comp/goldenfoot_mainNbutton_9.png","height":94,"sizeGrid":"11,9,14,7"}},{"type":"Label","props":{"y":196,"x":48,"width":245,"text":"不 谢谢","height":114,"fontSize":40,"font":"Microsoft YaHei","color":"#f1ecec","bold":true,"align":"center"}},{"type":"Label","props":{"y":82,"x":119,"text":"免费机会","fontSize":40,"font":"Microsoft YaHei","color":"#252424","bold":true}},{"type":"Image","props":{"y":92,"x":70,"skin":"comp/goldenfoot_icon_video.png"}}]},{"type":"Box","props":{"y":268,"x":64,"visible":false,"var":"gainGold"},"child":[{"type":"Image","props":{"x":2,"width":506,"skin":"comp/goldenfoot_maintitlebg_9.png","height":67,"sizeGrid":"7,8,10,5"}},{"type":"Image","props":{"y":64,"x":1,"width":506,"skin":"comp/goldenfoot_blog1_9.png","height":232,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":296,"width":507,"skin":"comp/goldenfoot_blog3_9.png","height":309,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":373,"x":91,"width":326,"var":"doubleGold","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"}},{"type":"Label","props":{"y":392,"x":203,"text":"奖励翻倍","fontSize":40,"font":"Microsoft YaHei","color":"#212121","bold":true}},{"type":"Image","props":{"y":402,"x":153,"skin":"comp/goldenfoot_icon_video.png"}},{"type":"Image","props":{"y":483,"x":93,"width":324,"var":"singleGold","skin":"comp/goldenfoot_mainNbutton_9.png","height":94,"sizeGrid":"11,9,14,7"}},{"type":"Label","props":{"y":501,"x":181,"text":"直接领取","fontSize":40,"font":"Microsoft YaHei","color":"#e9ebea","bold":true,"align":"center"}},{"type":"Label","props":{"y":2,"x":209,"text":"恭喜！","fontSize":45,"font":"Microsoft YaHei","color":"#212121","bold":true}},{"type":"Label","props":{"y":312,"x":114,"text":"观看视频让奖励翻倍","fontSize":35,"font":"Microsoft YaHei","color":"#e9ebea","bold":true,"align":"center"}},{"type":"Label","props":{"y":88,"x":185,"text":"获得金币","fontSize":40,"font":"Microsoft YaHei","color":"#e9ebea","bold":true,"align":"center"}},{"type":"Image","props":{"y":175,"x":164,"skin":"comp/goldenfoot_coins.png"}},{"type":"Label","props":{"y":180,"x":244,"width":163,"var":"goldReward","text":"X500","height":79,"fontSize":40,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":297,"x":-3,"visible":false,"var":"multiResult"},"child":[{"type":"Image","props":{"y":42,"x":2,"width":643,"skin":"comp/goldenfoot_blog3_9.png","height":421,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":239,"x":0,"width":646,"skin":"comp/goldenfoot_blog1_9.png","height":110,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":5,"x":67,"width":510,"skin":"comp/goldenfoot_maintitlebg_9.png","height":67,"sizeGrid":"7,8,10,5"}},{"type":"Label","props":{"x":249,"var":"multiTitle","text":"你输了","fontSize":50,"font":"Microsoft YaHei","color":"#212121","bold":true}},{"type":"Image","props":{"y":72,"width":643,"skin":"comp/goldenfoot_blog2_9.png","height":171,"sizeGrid":"3,1,3,1"}},{"type":"Image","props":{"y":347,"x":3,"width":641,"skin":"comp/goldenfoot_blog2_9.png","height":88,"sizeGrid":"3,1,3,1"}},{"type":"Image","props":{"y":90,"x":97,"width":112,"var":"resultHead1","skin":"comp/blank.png","height":113,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":94,"x":178,"var":"p1Info","skin":"comp/goldenfoot_button_info.png"}},{"type":"Image","props":{"y":91,"x":437,"width":112,"var":"resultHead2","skin":"comp/blank.png","height":113,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":94,"x":514,"var":"p2Info","skin":"comp/goldenfoot_button_info.png"}},{"type":"Image","props":{"y":132,"x":275,"skin":"comp/goldenfoot_icon_VS.png"}},{"type":"Label","props":{"y":205,"x":74,"width":170,"var":"resultName1","text":"RuffGafit","height":37,"fontSize":25,"font":"Microsoft YaHei","color":"#eeefee","bold":true,"align":"center"}},{"type":"Label","props":{"y":205,"x":414,"width":170,"var":"resultName2","text":"RuffGafit","height":37,"fontSize":25,"font":"Microsoft YaHei","color":"#eeefee","bold":true,"align":"center"}},{"type":"Label","props":{"y":270,"x":286,"width":77,"text":"比分","height":33,"fontSize":40,"font":"Microsoft YaHei","color":"#f1e6e6","bold":true}},{"type":"Image","props":{"y":273,"x":78,"width":139,"skin":"comp/goldenfoot_blog4_9.png","height":51,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":273,"x":423,"width":139,"skin":"comp/goldenfoot_blog4_9.png","height":51,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":281,"x":61,"width":170,"var":"resultP1Score","text":"520","height":37,"fontSize":28,"font":"Microsoft YaHei","color":"#2a2c2a","bold":true,"align":"center"}},{"type":"Label","props":{"y":281,"x":409,"width":170,"var":"resultP2Score","text":"520","height":37,"fontSize":28,"font":"Microsoft YaHei","color":"#2a2c2a","bold":true,"align":"center"}},{"type":"Label","props":{"y":366,"x":232,"width":151,"text":"0  连胜","height":49,"fontSize":40,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"right"}},{"type":"Image","props":{"y":357,"x":403,"var":"resultShare","skin":"comp/goldenfoot_button_share.png"}},{"type":"Image","props":{"y":472,"x":159,"width":325,"var":"multiReplay","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"}},{"type":"Image","props":{"y":488,"x":231,"skin":"comp/goldenfoot_icon_qiuchang.png"}},{"type":"Label","props":{"y":489,"x":296,"width":170,"text":"再来！","height":37,"fontSize":40,"font":"Microsoft YaHei","color":"#2a2c2a","bold":true,"align":"center"}}]}]};
		return battleUI;
	})(View);
var buyItemUI=(function(_super){
		function buyItemUI(){
			
		    this.image=null;
		    this.name=null;
		    this.price=null;
		    this.description=null;
		    this.buy=null;

			buyItemUI.__super.call(this);
		}

		CLASS$(buyItemUI,'ui.buyItemUI',_super);
		var __proto__=buyItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(buyItemUI.uiView);

		}

		buyItemUI.uiView={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":156,"x":61,"width":518,"skin":"comp/goldenfoot_blog2_9.png","height":759,"sizeGrid":"3,1,3,1"}},{"type":"Image","props":{"y":167,"x":72,"width":496,"skin":"comp/goldenfoot_blog3_9.png","height":548,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":715,"x":71,"width":496,"skin":"comp/goldenfoot_blog1_9.png","height":84,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":345,"x":228,"var":"image","skin":"comp/goldenfoot_ball1.png"}},{"type":"Image","props":{"y":660,"x":213,"width":213,"skin":"comp/goldenfoot_blog4_9.png","height":55,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":666,"x":246,"width":149,"var":"name","text":"行云流水","height":43,"fontSize":32,"font":"Microsoft YaHei","color":"#232222","bold":true,"align":"center"}},{"type":"Label","props":{"y":729,"x":74,"width":318,"var":"price","text":"1000000000","height":57,"fontSize":46,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"right"}},{"type":"Image","props":{"y":728,"x":422,"skin":"comp/goldenfoot_coins.png"}},{"type":"TextArea","props":{"y":802,"x":73,"width":490,"var":"description","text":"简介：在球场之上自然流畅，不受约束，可使守门员拦球几率下降1%！","multiline":true,"height":108,"fontSize":26,"font":"Microsoft YaHei","editable":false,"color":"#eee3e2","bold":true}},{"type":"Image","props":{"y":945,"x":155,"width":326,"var":"buy","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"},"child":[{"type":"Label","props":{"y":29,"x":121,"width":149,"text":"购买","height":43,"fontSize":32,"font":"Microsoft YaHei","color":"#232222","bold":true,"align":"center"}},{"type":"Image","props":{"y":14,"x":72,"skin":"comp/goldenfoot_icon_shop.png"}}]},{"type":"Image","props":{"y":140,"x":533,"width":58,"skin":"comp/goldenfoot_blog3_9.png","height":56,"sizeGrid":"1,1,1,1"}},{"type":"Button","props":{"y":147,"x":543,"stateNum":1,"skin":"comp/goldenfoot_icon_X.png","name":"close"}}]};
		return buyItemUI;
	})(Dialog);
var gainGoldUI=(function(_super){
		function gainGoldUI(){
			
		    this.solo=null;

			gainGoldUI.__super.call(this);
		}

		CLASS$(gainGoldUI,'ui.gainGoldUI',_super);
		var __proto__=gainGoldUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gainGoldUI.uiView);

		}

		gainGoldUI.uiView={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":352,"x":64,"width":510,"skin":"comp/goldenfoot_maintitlebg_9.png","height":67,"sizeGrid":"7,8,10,5"}},{"type":"Label","props":{"y":357,"x":242,"text":"获取金币","fontSize":40,"font":"Microsoft YaHei","color":"#242625","bold":true}},{"type":"Image","props":{"y":417,"x":63,"width":512,"skin":"comp/goldenfoot_blog1_9.png","height":155,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":447,"x":155,"width":325,"var":"solo","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"}},{"type":"Label","props":{"y":467,"x":250,"text":"单人奖金赛","fontSize":40,"font":"Microsoft YaHei","color":"#242625","bold":true}},{"type":"Image","props":{"y":467,"x":187,"skin":"comp/goldenfoot_coins.png"}},{"type":"Image","props":{"y":354,"x":510,"width":62,"skin":"comp/goldenfoot_blog3_9.png","height":62,"alpha":1,"sizeGrid":"1,1,1,1"}},{"type":"Button","props":{"y":366,"x":522,"stateNum":1,"skin":"comp/goldenfoot_icon_X.png","name":"close"}}]};
		return gainGoldUI;
	})(Dialog);
var lobbyUI=(function(_super){
		function lobbyUI(){
			
		    this.head=null;
		    this.gainGold=null;
		    this.gold=null;
		    this.play=null;
		    this.globalMatch=null;
		    this.playWithFriend=null;
		    this.solo=null;
		    this.goPlay=null;
		    this.goShop=null;
		    this.goRank=null;
		    this.soloScore=null;
		    this.score=null;
		    this.userName=null;
		    this.playAgain=null;
		    this.shop=null;
		    this.shopList=null;
		    this.playWithFriendPanel=null;
		    this.records=null;
		    this.shareFriend=null;
		    this.rank=null;
		    this.btnPersonalRank=null;
		    this.btmGlobalRank=null;
		    this.rankTypeText=null;
		    this.rankList=null;
		    this.globalSelector=null;

			lobbyUI.__super.call(this);
		}

		CLASS$(lobbyUI,'ui.lobbyUI',_super);
		var __proto__=lobbyUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(lobbyUI.uiView);

		}

		lobbyUI.uiView={"type":"View","props":{"width":640,"height":1138},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/goldenfoot_mainbackground_9.jpg"},"child":[{"type":"Image","props":{"y":88,"x":0,"skin":"comp/goldenfoot_logo.png"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"head"},"child":[{"type":"Image","props":{"y":0,"x":640,"width":640,"skin":"comp/goldenfoot_main_headline_9.png","sizeGrid":"5,0,5,0","scaleX":-1,"height":83}},{"type":"Image","props":{"y":449,"x":479,"width":10,"height":10},"child":[{"type":"Image","props":{"y":-438,"x":-381,"width":201,"skin":"comp/goldenfoot_coins_numberbg_9.png","height":61,"sizeGrid":"7,14,7,11"}},{"type":"Image","props":{"y":-439,"x":-392,"skin":"comp/goldenfoot_coins.png"}},{"type":"Button","props":{"y":-433,"x":-463,"stateNum":1,"skin":"comp/button_main_setup.png","name":"setting"}},{"type":"Button","props":{"y":-399,"x":-359,"var":"gainGold","stateNum":1,"skin":"comp/goldenfoot_button_plus.png"}}]},{"type":"Label","props":{"y":25,"x":147,"width":135,"var":"gold","text":"123456","height":42,"fontSize":30,"color":"#f4dda5","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":88,"x":0,"var":"play"},"child":[{"type":"Button","props":{"y":446,"x":71,"width":507,"var":"globalMatch","stateNum":1,"skin":"comp/button_main_button.png","labelSize":35,"labelFont":"Helvetica","labelColors":"#000000","labelBold":true,"label":"全球锦标赛","height":136}},{"type":"Button","props":{"y":599,"x":71,"width":507,"var":"playWithFriend","stateNum":1,"skin":"comp/button_main_button.png","labelSize":35,"labelFont":"Helvetica","labelColors":"#000000","labelBold":true,"label":"好友挑战赛","height":136}},{"type":"Button","props":{"y":753,"x":71,"width":507,"var":"solo","stateNum":1,"skin":"comp/button_main_button.png","labelSize":35,"labelFont":"Helvetica","labelColors":"#000000","labelBold":true,"label":"单人奖金赛","height":136}}]},{"type":"Button","props":{"y":1039,"x":0,"width":211,"var":"goPlay","stateNum":1,"skin":"comp/goldenfoot_menubar_9.png","height":99,"sizeGrid":"6,1,1,1"},"child":[{"type":"Image","props":{"y":11,"x":70,"skin":"comp/goldenfoot_icon_main.png"}},{"type":"Image","props":{"y":-11,"x":4,"width":206,"skin":"comp/goldenfoot_blog5_9.png","name":"state","height":7,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":0,"x":0,"width":211,"skin":"comp/goldenfoot_unselectedshadow_9.png","sizeGrid":"1,1,1,1","name":"m","height":99}}]},{"type":"Button","props":{"y":1039,"x":215,"width":211,"var":"goShop","stateNum":1,"skin":"comp/goldenfoot_menubar_9.png","height":99,"sizeGrid":"6,1,1,1"},"child":[{"type":"Image","props":{"y":11,"x":70,"skin":"comp/goldenfoot_icon_shop.png"}},{"type":"Image","props":{"y":-11,"x":4,"width":206,"skin":"comp/goldenfoot_blog5_9.png","name":"state","height":7,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":0,"x":0,"width":211,"skin":"comp/goldenfoot_unselectedshadow_9.png","name":"m","height":99,"sizeGrid":"1,1,1,1"}}]},{"type":"Button","props":{"y":1039,"x":430,"width":211,"var":"goRank","stateNum":1,"skin":"comp/goldenfoot_menubar_9.png","height":99,"sizeGrid":"6,1,1,1"},"child":[{"type":"Image","props":{"y":11,"x":70,"skin":"comp/goldenfoot_icon_rank.png"}},{"type":"Image","props":{"y":-11,"x":4,"width":206,"skin":"comp/goldenfoot_blog5_9.png","name":"state","height":7,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":0,"x":0,"width":211,"skin":"comp/goldenfoot_unselectedshadow_9.png","sizeGrid":"1,1,1,1","name":"m","height":99}}]},{"type":"Box","props":{"y":382,"x":0,"visible":false,"var":"soloScore"},"child":[{"type":"Image","props":{"y":3,"x":0,"width":640,"skin":"comp/goldenfoot_blog3_9.png","height":595,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":274,"width":642,"skin":"comp/goldenfoot_blog2_9.png","sizeGrid":"3,1,3,1","height":52}},{"type":"Label","props":{"y":272,"x":195,"width":90,"text":"得分","height":39,"fontSize":38,"font":"Microsoft YaHei","color":"#f4dda5","bold":true}},{"type":"Image","props":{"y":275,"x":367,"width":139,"skin":"comp/goldenfoot_blog4_9.png","sizeGrid":"1,1,1,1","height":49}},{"type":"Label","props":{"y":275,"x":363,"width":144,"var":"score","text":"500","height":49,"fontSize":38,"font":"Microsoft YaHei","color":"#24282b","bold":true,"align":"center"}},{"type":"Box","props":{"y":396,"x":341,"width":184,"pivotY":40,"pivotX":93,"height":74},"child":[{"type":"Image","props":{"y":-6,"x":-248,"width":640,"skin":"comp/goldenfoot_blog1_9.png","sizeGrid":"5,1,5,1","height":89}},{"type":"Image","props":{"x":110,"skin":"comp/goldenfoot_button_share.png"}},{"type":"Label","props":{"y":12,"width":90,"text":"分享","height":39,"fontSize":38,"font":"Microsoft YaHei","color":"#f4dda5","bold":true}}]},{"type":"Image","props":{"y":71,"width":640,"skin":"comp/goldenfoot_blog1_9.png","sizeGrid":"5,1,5,1","height":175}},{"type":"Image","props":{"y":91,"x":262,"width":110,"skin":"comp/blank.png","sizeGrid":"1,1,1,1","height":113}},{"type":"Image","props":{"y":95,"x":340,"skin":"comp/goldenfoot_button_info.png"}},{"type":"Image","props":{"y":6,"x":63,"width":512,"skin":"comp/goldenfoot_maintitlebg_9.png","sizeGrid":"7,8,10,5","height":67}},{"type":"Label","props":{"y":204,"x":210,"width":218,"var":"userName","text":"无情死胖子","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#e2e4e3","bold":true,"align":"center"}},{"type":"Label","props":{"x":167,"width":306,"text":"比赛结束","height":115,"fontSize":50,"font":"Microsoft YaHei","color":"#24282b","bold":true,"align":"center"}},{"type":"Image","props":{"y":473,"x":156,"width":324,"var":"playAgain","skin":"comp/goldenfoot_mainYbutton_9.png","sizeGrid":"5,26,2,23","mouseEnabled":true,"height":94}},{"type":"Label","props":{"y":495,"x":265,"width":218,"text":"再来！","height":72,"fontSize":38,"font":"Microsoft YaHei","color":"#24282b","bold":true,"align":"center"}},{"type":"Image","props":{"y":489,"x":229,"skin":"comp/goldenfoot_icon_qiuchang.png"}}]},{"type":"Box","props":{"y":102,"x":17,"visible":false,"var":"shop"},"child":[{"type":"Image","props":{"y":-20,"x":-16,"width":640,"skin":"comp/goldenfoot_blog3_9.png","height":78,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":79,"x":-15,"width":640,"skin":"comp/goldenfoot_blog_shadow_alpha_9.png","height":835,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":-21,"x":44,"width":510,"skin":"comp/goldenfoot_maintitlebg_9.png","sizeGrid":"7,7,10,5","height":67}},{"type":"Label","props":{"y":-14,"x":224,"text":"足球商城","fontSize":40,"font":"Microsoft YaHei","color":"#24282b","bold":true,"align":"center"}},{"type":"List","props":{"y":62,"x":-4,"width":596,"var":"shopList","spaceY":20,"spaceX":20,"repeatY":4,"repeatX":2,"height":836},"child":[{"type":"Box","props":{"width":292,"name":"render","height":368},"child":[{"type":"Image","props":{"x":75,"width":142,"skin":"comp/goldenfoot_blog2_9.png","sizeGrid":"3,1,3,1","height":40}},{"type":"Label","props":{"y":-1,"x":92,"width":96,"text":"绿茵使者","name":"name","height":28,"fontSize":28,"font":"Microsoft YaHei","color":"#f4dda5","bold":true}},{"type":"Rect","props":{"width":288,"lineWidth":1,"height":289,"fillColor":"#232323"}},{"type":"Rect","props":{"y":290,"x":1,"width":288,"lineWidth":1,"lineColor":"#6a8d47","height":78,"fillColor":"#6a8d47"}},{"type":"Image","props":{"y":52,"x":50,"skin":"comp/goldenfoot_ball1.png","name":"image"}},{"type":"Image","props":{"y":306,"x":36,"width":231,"visible":true,"skin":"comp/goldenfoot_blog4_9.png","name":"switch","height":45,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":309,"x":104,"width":90,"text":"使用中","name":"state","height":33,"fontSize":30,"font":"Microsoft YaHei","color":"#242824","bold":true}},{"type":"Box","props":{"y":299,"x":19,"visible":false,"name":"buy"},"child":[{"type":"Image","props":{"y":4,"width":59,"skin":"comp/goldenfoot_icon_shop.png","height":55}},{"type":"Image","props":{"x":195,"skin":"comp/goldenfoot_coins.png"}}]},{"type":"Label","props":{"y":312,"x":85,"width":125,"text":"5000","name":"price","height":39,"fontSize":28,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"right"}}]}]}]},{"type":"Box","props":{"y":77,"x":0,"visible":false,"var":"playWithFriendPanel"},"child":[{"type":"Image","props":{"x":141,"width":356,"skin":"comp/button_main_button.png","height":96},"child":[{"type":"Label","props":{"y":23,"x":80,"text":"好友挑战赛","fontSize":40,"font":"Microsoft YaHei","color":"#24282b","bold":true,"align":"center"}},{"type":"Image","props":{"y":91,"x":-140,"width":640,"skin":"comp/goldenfoot_blog4_9.png","height":70,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":104,"x":-79,"width":516,"text":"玩家              最近挑战日期         输赢","height":48,"fontSize":30,"font":"Microsoft YaHei","color":"#24282b","bold":true,"align":"left"}}]},{"type":"Panel","props":{"y":163,"width":641,"var":"records","height":657},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog1_9.png","height":85,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":3,"x":10,"width":75,"skin":"comp/blank.png","name":"photo","height":75,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":17,"x":100,"width":129,"text":"zajksda","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":19,"x":292,"width":129,"text":"2018.6.9","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":15,"x":524,"width":129,"text":"胜","name":"win","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":86,"x":0},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog2_9.png","height":85,"sizeGrid":"3,1,3,1"}},{"type":"Image","props":{"y":3,"x":10,"width":75,"skin":"comp/blank.png","name":"photo","height":75,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":17,"x":100,"width":129,"text":"zajksda","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":19,"x":292,"width":129,"text":"2018.6.9","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":15,"x":524,"width":129,"text":"胜","name":"win","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":170,"x":0},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog1_9.png","height":85,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":3,"x":10,"width":75,"skin":"comp/blank.png","name":"photo","height":75,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":17,"x":100,"width":129,"text":"zajksda","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":19,"x":292,"width":129,"text":"2018.6.9","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":15,"x":524,"width":129,"text":"胜","name":"win","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":256,"x":0},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog2_9.png","height":85,"sizeGrid":"3,1,3,1"}},{"type":"Image","props":{"y":3,"x":10,"width":75,"skin":"comp/blank.png","name":"photo","height":75,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":17,"x":100,"width":129,"text":"zajksda","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":19,"x":292,"width":129,"text":"2018.6.9","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":15,"x":524,"width":129,"text":"胜","name":"win","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":342,"x":0},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog1_9.png","height":85,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":3,"x":10,"width":75,"skin":"comp/blank.png","name":"photo","height":75,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":17,"x":100,"width":129,"text":"zajksda","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":19,"x":292,"width":129,"text":"2018.6.9","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":15,"x":524,"width":129,"text":"胜","name":"win","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":428,"x":0},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog2_9.png","height":85,"sizeGrid":"3,1,3,1"}},{"type":"Image","props":{"y":3,"x":10,"width":75,"skin":"comp/blank.png","name":"photo","height":75,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":17,"x":100,"width":129,"text":"zajksda","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":19,"x":292,"width":129,"text":"2018.6.9","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":15,"x":524,"width":129,"text":"胜","name":"win","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":512,"x":0},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog1_9.png","height":85,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":3,"x":10,"width":75,"skin":"comp/blank.png","name":"photo","height":75,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":17,"x":100,"width":129,"text":"zajksda","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":19,"x":292,"width":129,"text":"2018.6.9","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":15,"x":524,"width":129,"text":"胜","name":"win","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":598,"x":0},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog2_9.png","height":85,"sizeGrid":"3,1,3,1"}},{"type":"Image","props":{"y":3,"x":10,"width":75,"skin":"comp/blank.png","name":"photo","height":75,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":17,"x":100,"width":129,"text":"zajksda","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":19,"x":292,"width":129,"text":"2018.6.9","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":15,"x":524,"width":129,"text":"胜","name":"win","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":684,"x":0},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog1_9.png","height":85,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":3,"x":10,"width":75,"skin":"comp/blank.png","name":"photo","height":75,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":17,"x":100,"width":129,"text":"zajksda","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":19,"x":292,"width":129,"text":"2018.6.9","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":15,"x":524,"width":129,"text":"胜","name":"win","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":770,"x":0},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog2_9.png","height":85,"sizeGrid":"3,1,3,1"}},{"type":"Image","props":{"y":3,"x":10,"width":75,"skin":"comp/blank.png","name":"photo","height":75,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":17,"x":100,"width":129,"text":"zajksda","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":19,"x":292,"width":129,"text":"2018.6.9","name":"name","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}},{"type":"Label","props":{"y":15,"x":524,"width":129,"text":"胜","name":"win","height":48,"fontSize":28,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"left"}}]}]},{"type":"Image","props":{"y":839,"x":155,"width":325,"var":"shareFriend","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"},"child":[{"type":"Label","props":{"y":20,"x":153,"text":"邀请","fontSize":40,"font":"Microsoft YaHei","color":"#24282b","bold":true,"align":"center"}},{"type":"Image","props":{"y":19,"x":98,"skin":"comp/goldenfoot_icon_friends.png"}}]}]},{"type":"Box","props":{"y":80,"x":-23,"visible":false,"var":"rank"},"child":[{"type":"Box","props":{"y":16,"x":390,"var":"btnPersonalRank"},"child":[{"type":"Image","props":{"y":-16,"x":-47,"width":320,"skin":"comp/goldenfoot_blog1_9.png","name":"selected","height":76,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":-16,"x":-47,"width":320,"skin":"comp/goldenfoot_blog2_9.png","name":"unselected","height":76,"sizeGrid":"3,1,3,1"}},{"type":"Label","props":{"width":238,"text":"个人挑战赛排行","height":47,"fontSize":32,"font":"Microsoft YaHei","color":"#ecedec","bold":true}}]},{"type":"Box","props":{"y":15,"x":66,"var":"btmGlobalRank"},"child":[{"type":"Image","props":{"y":-15,"x":-43,"width":320,"skin":"comp/goldenfoot_blog1_9.png","name":"selected","height":76,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":-15,"x":-43,"width":320,"skin":"comp/goldenfoot_blog2_9.png","name":"unselected","height":76,"sizeGrid":"3,1,3,1"}},{"type":"Label","props":{"width":238,"text":"全球挑战赛排行","height":47,"fontSize":32,"font":"Microsoft YaHei","color":"#ecedec","bold":true}}]},{"type":"Image","props":{"y":76,"x":23,"width":640,"skin":"comp/goldenfoot_blog4_9.png","height":46,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":77,"x":31,"width":74,"text":"排名","height":47,"fontSize":32,"font":"Microsoft YaHei","color":"#262826","bold":true,"align":"center"}},{"type":"Label","props":{"y":77,"x":242,"width":74,"text":"姓名","height":47,"fontSize":32,"font":"Microsoft YaHei","color":"#262826","bold":true,"align":"center"}},{"type":"Label","props":{"y":76,"x":494,"width":138,"var":"rankTypeText","text":"分数","height":47,"fontSize":32,"font":"Microsoft YaHei","color":"#262826","bold":true,"align":"center"}},{"type":"List","props":{"y":121,"x":0,"width":733,"visible":true,"var":"rankList","selectEnable":false,"repeatY":50,"repeatX":1,"height":819},"child":[{"type":"Box","props":{"name":"render"},"child":[{"type":"Image","props":{"x":23,"width":640,"skin":"comp/goldenfoot_blog1_9.png","name":"background","height":85,"sizeGrid":"5,1,5,1"}},{"type":"Label","props":{"y":21,"width":138,"text":"1","name":"rank","height":47,"fontSize":32,"font":"Microsoft YaHei","color":"#ecefed","bold":true,"align":"center"}},{"type":"Label","props":{"y":15,"x":192,"width":238,"text":"我是一个饼","name":"name","height":47,"fontSize":32,"font":"Microsoft YaHei","color":"#ecefed","bold":true,"align":"center"}},{"type":"Label","props":{"y":21,"x":408,"width":238,"text":"10000","name":"scorePersonal","height":47,"fontSize":32,"font":"Microsoft YaHei","color":"#ecefed","bold":true,"align":"right"}},{"type":"Image","props":{"y":5,"x":122,"width":74,"skin":"comp/blank.png","name":"photo","height":74,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":20,"x":363,"width":238,"visible":false,"text":"10000","name":"scoreGlobal","height":47,"fontSize":32,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"right"},"child":[{"type":"Image","props":{"y":14,"x":258,"width":41,"skin":"comp/goldenfoot_coins.png","pivotY":13,"pivotX":14,"height":41}}]}]}]}]},{"type":"Box","props":{"y":486,"x":0,"visible":false,"var":"globalSelector"},"child":[{"type":"Image","props":{"width":640,"skin":"comp/goldenfoot_blog3_9.png","height":536,"sizeGrid":"1,1,1,1"},"child":[{"type":"Image","props":{"y":-45,"x":143,"width":356,"skin":"comp/button_main_button.png","height":96}},{"type":"Label","props":{"y":-25,"x":202,"width":235,"text":"全球锦标赛","height":64,"fontSize":40,"font":"Microsoft YaHei","color":"#252222","bold":true,"align":"center"}}]},{"type":"List","props":{"y":62,"x":73,"width":566,"selectEnable":false,"repeatY":1,"repeatX":7,"height":458},"child":[{"type":"Box","props":{"name":"render"},"child":[{"type":"Image","props":{"y":4,"x":33,"skin":"comp/blank.png","name":"image","sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":3,"x":130,"width":225,"skin":"comp/goldenfoot_blog4_9.png","height":42,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"x":125,"width":235,"text":"中国","name":"name","height":64,"fontSize":32,"font":"Microsoft YaHei","color":"#252222","bold":true,"align":"center"}},{"type":"Image","props":{"y":250,"x":30,"width":423,"skin":"comp/goldenfoot_blog1_9.png","height":46,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":300,"x":30,"width":423,"skin":"comp/goldenfoot_blog1_9.png","height":46,"sizeGrid":"5,1,5,1"}},{"type":"Label","props":{"y":248,"x":2,"width":235,"text":"参赛费","height":64,"fontSize":32,"font":"Microsoft YaHei","color":"#eceeed","bold":true,"align":"center"}},{"type":"Label","props":{"y":298,"width":235,"text":"奖励","height":64,"fontSize":32,"font":"Microsoft YaHei","color":"#eceeed","bold":true,"align":"center"}},{"type":"Label","props":{"y":297,"x":149,"width":235,"text":"1000","name":"reward","height":64,"fontSize":32,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"right"}},{"type":"Label","props":{"y":252,"x":153,"width":235,"text":"500","name":"cost","height":64,"fontSize":32,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"right"}},{"type":"Image","props":{"y":276,"x":425,"width":40,"skin":"comp/goldenfoot_coins.png","pivotY":22,"pivotX":28,"height":40}},{"type":"Image","props":{"y":325,"x":426,"width":40,"skin":"comp/goldenfoot_coins.png","pivotY":22,"pivotX":28,"height":40}},{"type":"Image","props":{"y":364,"x":62,"width":358,"skin":"comp/goldenfoot_mainYbutton_9.png","name":"join","height":94,"sizeGrid":"5,26,2,23"},"child":[{"type":"Label","props":{"y":19,"x":89,"width":235,"text":"参赛","height":64,"fontSize":36,"font":"Microsoft YaHei","color":"#252222","bold":true,"align":"center"}},{"type":"Image","props":{"y":15,"x":62,"skin":"comp/goldenfoot_icon_qiuchang.png"}}]}]}]}]}]};
		return lobbyUI;
	})(View);
var pauseUI=(function(_super){
		function pauseUI(){
			
		    this.restart=null;
		    this.goLobby=null;

			pauseUI.__super.call(this);
		}

		CLASS$(pauseUI,'ui.pauseUI',_super);
		var __proto__=pauseUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(pauseUI.uiView);

		}

		pauseUI.uiView={"type":"Dialog","props":{"width":640,"height":1138},"child":[{"type":"Image","props":{"y":369,"x":64,"width":510,"skin":"comp/goldenfoot_blog3_9.png","height":394,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":304,"x":64,"width":511,"skin":"comp/goldenfoot_maintitlebg_9.png","height":67,"sizeGrid":"7,8,10,5"}},{"type":"Label","props":{"y":301,"x":221,"text":"游戏暂停","fontSize":50,"font":"Microsoft YaHei","color":"#1e1c1c","bold":true}},{"type":"Image","props":{"y":416,"x":156,"width":323,"skin":"comp/goldenfoot_mainYbutton_9.png","name":"close","mouseEnabled":true,"height":91,"sizeGrid":"5,26,2,23"},"child":[{"type":"Label","props":{"y":18,"x":83,"text":"继续游戏","fontSize":40,"font":"Microsoft YaHei","color":"#1e1c1c","bold":true}}]},{"type":"Image","props":{"y":522,"x":158,"width":324,"var":"restart","skin":"comp/goldenfoot_mainNbutton_9.png","mouseEnabled":true,"height":101,"sizeGrid":"11,9,14,7"},"child":[{"type":"Label","props":{"y":20,"x":86,"text":"重新开始","fontSize":40,"font":"Microsoft YaHei","color":"#e8e9e9","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":632,"x":158,"width":324,"var":"goLobby","skin":"comp/goldenfoot_mainNbutton_9.png","mouseEnabled":true,"height":101,"sizeGrid":"11,9,14,7"},"child":[{"type":"Label","props":{"y":20,"x":86,"text":"返回大厅","fontSize":40,"font":"Microsoft YaHei","color":"#e8e9e9","bold":true,"align":"center"}}]}]};
		return pauseUI;
	})(Dialog);
var playerInfoUI=(function(_super){
		function playerInfoUI(){
			
		    this.photo=null;
		    this.name=null;
		    this.gold=null;
		    this.level=null;
		    this.match=null;
		    this.firend=null;
		    this.rate=null;
		    this.continualWinCount=null;
		    this.maxPoint=null;

			playerInfoUI.__super.call(this);
		}

		CLASS$(playerInfoUI,'ui.playerInfoUI',_super);
		var __proto__=playerInfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(playerInfoUI.uiView);

		}

		playerInfoUI.uiView={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":286,"x":66,"width":509,"skin":"comp/goldenfoot_maintitlebg_9.png","height":67,"sizeGrid":"7,8,10,5"},"child":[{"type":"Label","props":{"y":5,"x":175,"width":202,"text":"球员信息","height":53,"fontSize":40,"font":"Microsoft YaHei","color":"#2c2b2b","bold":true}},{"type":"Image","props":{"y":2,"x":442,"width":62,"skin":"comp/goldenfoot_blog3_9.png","height":63,"sizeGrid":"1,1,1,1"}},{"type":"Button","props":{"y":13,"x":456,"stateNum":1,"skin":"comp/goldenfoot_icon_X.png","name":"close"}}]},{"type":"Image","props":{"y":354,"x":65,"width":510,"skin":"comp/goldenfoot_blog4_9.png","height":153,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":415,"x":145,"width":431,"skin":"comp/goldenfoot_blog3_9.png","height":76,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":369,"x":89,"skin":"comp/goldenfoot_icon_circle.png"}},{"type":"Image","props":{"y":373,"x":96,"width":113,"var":"photo","skin":"comp/blank.png","height":114,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":376,"x":220,"width":299,"var":"name","text":"名称    无情死胖子","height":53,"fontSize":26,"font":"Microsoft YaHei","color":"#2c2b2b","bold":true,"align":"left"}},{"type":"Image","props":{"y":424,"x":502,"width":55,"skin":"comp/goldenfoot_coins.png","height":55}},{"type":"Label","props":{"y":433,"x":220,"width":202,"text":"对决赛总奖金","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true}},{"type":"Label","props":{"y":435,"x":288,"width":202,"var":"gold","text":"323112","height":53,"fontSize":24,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"right"}},{"type":"Image","props":{"y":507,"x":65,"width":510,"skin":"comp/goldenfoot_blog2_9.png","height":301,"sizeGrid":"3,1,3,1"}},{"type":"Image","props":{"y":571,"x":65,"width":510,"skin":"comp/goldenfoot_blog1_9.png","height":57,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":690,"x":65,"width":510,"skin":"comp/goldenfoot_blog1_9.png","height":57,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":807,"x":65,"width":510,"skin":"comp/goldenfoot_blog1_9.png","height":57,"sizeGrid":"5,1,5,1"}},{"type":"Label","props":{"y":521,"x":95,"width":202,"text":"总场次","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true},"child":[{"type":"Label","props":{"y":56,"x":0,"width":202,"text":"对决赛统计","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true}},{"type":"Label","props":{"y":117,"x":2,"width":202,"text":"对局赛获胜","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true}},{"type":"Label","props":{"y":175,"x":1,"width":202,"text":"胜率","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true}},{"type":"Label","props":{"y":233,"x":2,"width":202,"text":"连胜(当前/最高）","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true}},{"type":"Label","props":{"y":294,"x":1,"width":202,"text":"单场最高分","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true}}]},{"type":"Label","props":{"y":519,"x":447,"width":131,"var":"level","text":"1","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true,"align":"center"}},{"type":"Label","props":{"y":579,"x":447,"width":131,"var":"match","text":"1","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true,"align":"center"}},{"type":"Label","props":{"y":638,"x":447,"width":131,"var":"firend","text":"1","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true,"align":"center"}},{"type":"Label","props":{"y":698,"x":445,"width":131,"var":"rate","text":"100%","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true,"align":"center"}},{"type":"Label","props":{"y":757,"x":446,"width":131,"var":"continualWinCount","text":"1/1","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true,"align":"center"}},{"type":"Label","props":{"y":815,"x":444,"width":131,"var":"maxPoint","text":"12322","height":53,"fontSize":27,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true,"align":"center"}}]};
		return playerInfoUI;
	})(Dialog);
var refusedUI=(function(_super){
		function refusedUI(){
			

			refusedUI.__super.call(this);
		}

		CLASS$(refusedUI,'ui.refusedUI',_super);
		var __proto__=refusedUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(refusedUI.uiView);

		}

		refusedUI.uiView={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":351,"x":65,"width":509,"skin":"comp/goldenfoot_maintitlebg_9.png","height":67,"sizeGrid":"7,8,10,5"}},{"type":"Label","props":{"y":356,"x":216,"text":"邀请被拒绝","fontSize":42,"font":"Microsoft YaHei","color":"#242625","bold":true}},{"type":"Label","props":{"y":461,"x":102,"width":202,"text":"你的好友拒绝了你的挑战","height":53,"fontSize":40,"font":"Microsoft YaHei","color":"#f1f3f2","bold":true}},{"type":"Image","props":{"y":355,"x":509,"width":62,"skin":"comp/goldenfoot_blog3_9.png","height":62,"sizeGrid":"1,1,1,1"}},{"type":"Button","props":{"y":367,"x":521,"stateNum":1,"skin":"comp/goldenfoot_icon_X.png","name":"close"}}]};
		return refusedUI;
	})(Dialog);
var settingUI=(function(_super){
		function settingUI(){
			
		    this.mute=null;
		    this.muteLabel=null;
		    this.muteImg=null;
		    this.tuto=null;

			settingUI.__super.call(this);
		}

		CLASS$(settingUI,'ui.settingUI',_super);
		var __proto__=settingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(settingUI.uiView);

		}

		settingUI.uiView={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":352,"x":64,"width":510,"skin":"comp/goldenfoot_maintitlebg_9.png","height":67,"sizeGrid":"7,8,10,5"}},{"type":"Label","props":{"y":359,"x":267,"text":"设置","fontSize":40,"font":"Microsoft YaHei","color":"#242625","bold":true}},{"type":"Image","props":{"y":417,"x":63,"width":512,"skin":"comp/goldenfoot_blog1_9.png","height":293,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":447,"x":155,"width":325,"var":"mute","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"},"child":[{"type":"Label","props":{"y":18,"x":175,"var":"muteLabel","text":"静音","fontSize":40,"font":"Microsoft YaHei","color":"#242625","bold":true}},{"type":"Image","props":{"y":16,"x":48,"skin":"comp/goldenfoot_icon_sound.png"}},{"type":"Image","props":{"y":30,"x":92,"var":"muteImg","skin":"comp/goldenfoot_icon_X2.png"}}]},{"type":"Image","props":{"y":354,"x":510,"width":62,"skin":"comp/goldenfoot_blog3_9.png","height":62,"sizeGrid":"1,1,1,1"}},{"type":"Button","props":{"y":366,"x":522,"stateNum":1,"skin":"comp/goldenfoot_icon_X.png","name":"close"}},{"type":"Image","props":{"y":557,"x":155,"width":325,"var":"tuto","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"},"child":[{"type":"Label","props":{"y":19,"x":177,"text":"教程","fontSize":40,"font":"Microsoft YaHei","color":"#242625","bold":true}},{"type":"Image","props":{"y":14,"x":46,"skin":"comp/goldenfoot_icon_jc.png"}}]}]};
		return settingUI;
	})(Dialog);
var soloDeadUI=(function(_super){
		function soloDeadUI(){
			
		    this.yes=null;
		    this.no=null;

			soloDeadUI.__super.call(this);
		}

		CLASS$(soloDeadUI,'ui.soloDeadUI',_super);
		var __proto__=soloDeadUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(soloDeadUI.uiView);

		}

		soloDeadUI.uiView={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Box","props":{"y":401,"x":164,"visible":true},"child":[{"type":"Label","props":{"x":50,"width":245,"text":"观看视频复活","height":114,"fontSize":40,"font":"Microsoft YaHei","color":"#f1ecec","bold":true,"align":"center"}},{"type":"Image","props":{"y":63,"width":336,"var":"yes","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"}},{"type":"Image","props":{"y":177,"x":22,"width":292,"var":"no","skin":"comp/goldenfoot_mainNbutton_9.png","height":94,"sizeGrid":"11,9,14,7"}},{"type":"Label","props":{"y":196,"x":48,"width":245,"text":"不 谢谢","height":114,"fontSize":40,"font":"Microsoft YaHei","color":"#f1ecec","bold":true,"align":"center"}},{"type":"Label","props":{"y":82,"x":119,"text":"免费机会","fontSize":40,"font":"Microsoft YaHei","color":"#252424","bold":true}},{"type":"Image","props":{"y":92,"x":70,"skin":"comp/goldenfoot_icon_video.png"}}]}]};
		return soloDeadUI;
	})(Dialog);
var soloRewardUI=(function(_super){
		function soloRewardUI(){
			
		    this.yes=null;
		    this.no=null;
		    this.gold=null;

			soloRewardUI.__super.call(this);
		}

		CLASS$(soloRewardUI,'ui.soloRewardUI',_super);
		var __proto__=soloRewardUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(soloRewardUI.uiView);

		}

		soloRewardUI.uiView={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Box","props":{"y":278,"x":74,"visible":true},"child":[{"type":"Image","props":{"x":2,"width":506,"skin":"comp/goldenfoot_maintitlebg_9.png","height":67,"sizeGrid":"7,8,10,5"}},{"type":"Image","props":{"y":64,"x":1,"width":506,"skin":"comp/goldenfoot_blog1_9.png","height":232,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":296,"width":507,"skin":"comp/goldenfoot_blog3_9.png","height":309,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":373,"x":91,"width":326,"var":"yes","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"}},{"type":"Label","props":{"y":392,"x":203,"text":"奖励翻倍","fontSize":40,"font":"Microsoft YaHei","color":"#212121","bold":true}},{"type":"Image","props":{"y":402,"x":153,"skin":"comp/goldenfoot_icon_video.png"}},{"type":"Image","props":{"y":483,"x":93,"width":324,"var":"no","skin":"comp/goldenfoot_mainNbutton_9.png","height":94,"sizeGrid":"11,9,14,7"}},{"type":"Label","props":{"y":501,"x":181,"text":"直接领取","fontSize":40,"font":"Microsoft YaHei","color":"#e9ebea","bold":true,"align":"center"}},{"type":"Label","props":{"y":2,"x":209,"text":"恭喜！","fontSize":45,"font":"Microsoft YaHei","color":"#212121","bold":true}},{"type":"Label","props":{"y":312,"x":114,"text":"观看视频让奖励翻倍","fontSize":35,"font":"Microsoft YaHei","color":"#e9ebea","bold":true,"align":"center"}},{"type":"Label","props":{"y":88,"x":185,"text":"获得金币","fontSize":40,"font":"Microsoft YaHei","color":"#e9ebea","bold":true,"align":"center"}},{"type":"Image","props":{"y":175,"x":164,"skin":"comp/goldenfoot_coins.png"}},{"type":"Label","props":{"y":180,"x":244,"width":163,"var":"gold","text":"X500","height":79,"fontSize":40,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"left"}}]}]};
		return soloRewardUI;
	})(Dialog);
var waitingUI=(function(_super){
		function waitingUI(){
			
		    this.p1Photo=null;
		    this.p2Photo=null;
		    this.p1Name=null;
		    this.p2Name=null;
		    this.time=null;
		    this.message=null;
		    this.accept=null;
		    this.refuse=null;
		    this.cancle=null;
		    this.matched=null;
		    this.p1Gold=null;
		    this.p2Gold=null;
		    this.totalGold=null;

			waitingUI.__super.call(this);
		}

		CLASS$(waitingUI,'ui.waitingUI',_super);
		var __proto__=waitingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(waitingUI.uiView);

		}

		waitingUI.uiView={"type":"Dialog","props":{"width":640,"height":1138},"child":[{"type":"Image","props":{"y":351,"x":65,"width":508,"skin":"comp/goldenfoot_maintitlebg_9.png","height":67,"sizeGrid":"7,8,10,5"}},{"type":"Image","props":{"y":423,"x":0,"width":640,"skin":"comp/goldenfoot_blog2_9.png","height":171,"sizeGrid":"3,1,3,1"}},{"type":"Label","props":{"y":347,"x":222,"text":"接受挑战","fontSize":50,"font":"Microsoft YaHei","color":"#24282b","bold":true,"align":"center"}},{"type":"Image","props":{"y":438,"x":94,"width":110,"var":"p1Photo","skin":"comp/blank.png","height":110,"sizeGrid":"1,1,1,1"}},{"type":"Image","props":{"y":438,"x":434,"width":110,"var":"p2Photo","skin":"comp/blank.png","height":110,"sizeGrid":"1,1,1,1"}},{"type":"Label","props":{"y":550,"x":55,"width":193,"var":"p1Name","text":"无情死胖子","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"center"}},{"type":"Label","props":{"y":550,"x":395,"width":193,"var":"p2Name","text":"无情死胖子","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"center"}},{"type":"Image","props":{"y":478,"x":271,"skin":"comp/goldenfoot_icon_VS.png"}},{"type":"Label","props":{"y":617,"x":247,"width":193,"var":"time","text":"00:30","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"center"},"child":[{"type":"Image","props":{"y":-8,"x":-6,"skin":"comp/goldenfoot_icon_time.png"}},{"type":"Label","props":{"y":45,"x":-57,"width":193,"var":"message","text":"你的好友向你发起挑战","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":741,"x":154,"width":327,"var":"accept","skin":"comp/goldenfoot_mainYbutton_9.png","height":94,"sizeGrid":"5,26,2,23"},"child":[{"type":"Label","props":{"y":23,"x":107,"width":114,"text":"接受","height":56,"fontSize":36,"font":"Microsoft YaHei","color":"#24282b","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":853,"x":154,"width":328,"var":"refuse","skin":"comp/goldenfoot_mainNbutton_9.png","height":94,"sizeGrid":"11,9,14,7"},"child":[{"type":"Label","props":{"y":20,"x":70,"width":193,"text":"取消","height":39,"fontSize":36,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":793,"x":154,"width":328,"visible":false,"var":"cancle","skin":"comp/goldenfoot_mainNbutton_9.png","height":94,"sizeGrid":"11,9,14,7"},"child":[{"type":"Label","props":{"y":20,"x":70,"width":193,"text":"取消","height":39,"fontSize":36,"font":"Microsoft YaHei","color":"#eaeceb","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":625,"x":-3,"visible":false,"var":"matched"},"child":[{"type":"Image","props":{"y":81,"x":3,"width":640,"skin":"comp/goldenfoot_blog1_9.png","height":135,"sizeGrid":"5,1,5,1"}},{"type":"Image","props":{"y":100,"x":3,"width":640,"skin":"comp/goldenfoot_blog2_9.png","height":95,"sizeGrid":"3,1,3,1"}},{"type":"Box","props":{},"child":[{"type":"Image","props":{"x":66,"width":178,"skin":"comp/goldenfoot_blog1_9.png","height":52,"sizeGrid":"5,1,5,1"}},{"type":"Label","props":{"y":7,"width":193,"var":"p1Gold","text":"5000000","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"right"}},{"type":"Image","props":{"y":37,"x":226,"width":47,"skin":"comp/goldenfoot_coins.png","pivotY":36,"pivotX":31,"height":47}}]},{"type":"Box","props":{"x":339},"child":[{"type":"Image","props":{"x":66,"width":178,"skin":"comp/goldenfoot_blog1_9.png","height":52,"sizeGrid":"5,1,5,1"}},{"type":"Label","props":{"y":7,"width":193,"var":"p2Gold","text":"5000000","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"right"}},{"type":"Image","props":{"y":37,"x":226,"width":47,"skin":"comp/goldenfoot_coins.png","pivotY":36,"pivotX":31,"height":47}}]},{"type":"Label","props":{"y":114,"x":101,"text":"奖励","fontSize":50,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"center"}},{"type":"Label","props":{"y":115,"x":287,"var":"totalGold","text":"1000000","fontSize":50,"font":"Microsoft YaHei","color":"#f4dda5","bold":true,"align":"right"}},{"type":"Image","props":{"y":158,"x":545,"width":59,"skin":"comp/goldenfoot_coins.png","pivotY":36,"pivotX":31,"height":59}}]}]};
		return waitingUI;
	})(Dialog);