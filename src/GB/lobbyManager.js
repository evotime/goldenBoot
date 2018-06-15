if (typeof GB === 'undefined' ) GB={};
GB.lobby=(function(){
    var self={};
    var ui;
    var gainGold;
    var setting;
    var waiting;
    var refused;
    var playerInfo;
    var buyItem;

    function selectTab(n){
        function setTrue(o){
            o.getChildByName("state").visible=true;
            o.getChildByName("m").visible=false;
        }
        function setFalse(o){
            o.getChildByName("state").visible=false;
            o.getChildByName("m").visible=true;
        }

        if(n==1){
            setFalse(ui.goShop);
            setFalse(ui.goRank);
            setTrue(ui.goPlay);
            ui.play.visible=true;
            ui.shop.visible=false;
            ui.soloScore.visible=false;
            ui.playWithFriendPanel.visible=false;
            ui.rank.visible=false;
            ui.globalSelector.visible=false;
        }else if(n==2){
            setFalse(ui.goPlay);
            setFalse(ui.goRank);
            setTrue(ui.goShop);
             ui.play.visible=false;
            ui.shop.visible=true;
            ui.soloScore.visible=false;
             ui.playWithFriendPanel.visible=false;
            ui.rank.visible=false;
            ui.globalSelector.visible=false;  
        }else if(n==3){
            setFalse(ui.goPlay);
            setFalse(ui.goShop);
            setTrue(ui.goRank);
             ui.play.visible=false;
            ui.shop.visible=false;
            ui.soloScore.visible=false;
            ui.playWithFriendPanel.visible=false;
            ui.rank.visible=true;
            ui.globalSelector.visible=false;
        }else{
            setFalse(ui.goPlay);
            setFalse(ui.goShop);
            setFalse(ui.goRank);
            ui.shop.visible=false;
            ui.play.visible=false;
            ui.soloScore.visible=false;
            ui.playWithFriendPanel.visible=false;
            ui.rank.visible=false;
            ui.globalSelector.visible=false;
        }
    }

    function goSolo(){
        ui.removeSelf();
        GB.battle.start(2);
    }
    self.goGlobal=function(){
        ui.removeSelf();
        GB.battle.start(0);
    }

    function playWithFriend(){
        ui.play.visible=false;
        ui.playWithFriendPanel.visible=true;
    }
    self.playWithFriend=playWithFriend;
    function globalMatch(){
        ui.play.visible=false;
        ui.globalSelector.visible=true;
    }
    self.globalMatch=globalMatch;

    self.init=function(){
          ui=new lobbyUI();
          GB.waiting=new waitingUI();

          GB.stage.addChild(ui);
          //页签初始化
          selectTab(1);         
          ui.goPlay.on(Laya.Event.CLICK,null,function(){selectTab(1)});
          ui.goShop.on(Laya.Event.CLICK,null,function(){selectTab(2)});
          ui.goRank.on(Laya.Event.CLICK,null,function(){selectTab(3)});  

          //游戏页签初始化
          ui.solo.on(Laya.Event.CLICK,null,function(){goSolo()});
          ui.playWithFriend.on(Laya.Event.CLICK,null,function(){playWithFriend()});
          ui.globalMatch.on(Laya.Event.CLICK,null,function(){globalMatch()});




          //单机结算按钮初始化
          ui.playAgain.on(Laya.Event.CLICK,null,function(){
              ui.soloScore.visible=false;
              goSolo();
          }); 

          //小按钮初始化
          gainGold=new gainGoldUI();
          gainGold.solo.on(Laya.Event.CLICK,null,function(){
            gainGold.close();
            goSolo();
          });
          ui.gainGold.on(Laya.Event.CLICK,null,function(){
            gainGold.popup();
          });


        //排行榜设置
        
    //    ui.rankList.addItem();

   

        //初始化商店
        GB.shop.init(ui);
        //全球匹配初始化
        GB.match.init(ui);
        //初始化排行榜
        GB.ph.init(ui);
        
        self.ui=ui;
    }
    self.show=function(){
         GB.stage.addChild(ui);
         selectTab(1);
    }

    self.showSoloScore=function(score){
        selectTab(-1);
        ui.score.text=score;
        ui.soloScore.visible=true;
    }
    

    
    self.goSolo=goSolo;
    return self;
})();