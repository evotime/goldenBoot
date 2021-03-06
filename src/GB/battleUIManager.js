if (typeof GB === 'undefined' ) GB={};
GB.battleui=(function(){
    var self={};
    var ui;
    var pause;
    var beforDead;
    var reward;
    var mulResult;
    var life;
    function setMode(m){
        if(m==2){
            pause.visible=true;
        }else{
            pause.visible=false;
        }
    }



    function init(){
        pause=new pauseUI();

        self.ui=new battleUI();
        ui=self.ui;
        life=ui.life;
        ui.pause.on(Laya.Event.CLICK,null,function(){
            pause.popup();
        });
        //初始化暂停面板
        pause.restart.on(Laya.Event.CLICK,null,function(){
             pause.close();
             GB.battle.restart();
        });
        pause.goLobby.on(Laya.Event.CLICK,null,function(){
            pause.close();
            GB.battle.goLobby();   
        });
 
        //初始化死亡面板
        beforDead=new soloDeadUI();      
        beforDead.yes.on(Laya.Event.CLICK,null,function(){
            beforDead.close();
            GB.battle.getOneLife();
        })
        beforDead.no.on(Laya.Event.CLICK,null,function(){
             beforDead.close();
             self.getReward();
        })
        //初始化单机奖励面板
        reward=new soloRewardUI(); 
         reward.yes.on(Laya.Event.CLICK,null,function(){
             reward.close();
             GB.battle.p1score*=2;
             GB.battle.gameOver();
        })
        reward.no.on(Laya.Event.CLICK,null,function(){
              reward.close();
              GB.battle.gameOver();
        })

        //初始化联机结果面板
        mulResult=new mulResultUI();
        mulResult.playAgain.on(Laya.Event.CLICK,null,function(){
              mulResult.close();
              GB.battle.gameOver2();
        })

    }

    self.beforeDead=function(){
        beforDead.popup();
    }

    self.getReward=function(){
        reward.popup();
    }

    self.syncScore=function(n){
        ui.p2score.text=n;
    }

    self.mulResult=function(){
        mulResult.p1score.text=GB.battle.p1score;
        mulResult.p2score.text=GB.battle.p2score;
        
        if(GB.battle.p1score>=GB.battle.p2score){
            mulResult.title.text="你赢了"
        }else if(GB.battle.p1score<GB.battle.p2score){
            mulResult.title.text="你输了"
        }
    
        mulResult.popup();
    }

    self.init=init;
    return self;
})();