if (typeof GB === 'undefined' ) GB={};

/*battleManager管理战斗入口和总流程
    有一个sceneManager 底下管理Scene和UI
    gb.battle里面简单操作scene. 主要逻辑由scenemanager完成，包括一些UI

*/
GB.battle=(function(){
    var self={};
    var sceneManager;
    var receiveMouse=false;
    self.life=0;
    self.p1score=0;
    self.p2score=0;
    self.state="idle";
    
    self.syncScore=function(n){
        self.p2score=n;
        GB.battleui.syncScore(n);
    }


    function gameOver(){
        sceneManager.gameOver();
        GB.lobby.show();
        GB.lobby.showSoloScore(self.p1score);
    }

    self.goLobby=function(){
        sceneManager.gameOver();
        GB.lobby.show();
    }

    self.restart=function(){
        self.life=3;
        self.p1score=0;
        sceneManager.restart();
    }

    self.getOneLife=function(){
      self.life=1;
      sceneManager.getOneLife();
    }
    
     self.gameOver2=function (){
        sceneManager.gameOver();
        GB.lobby.show();
        if(self.mode==0){
            GB.lobby.globalMatch();
        }else{
            GB.lobby.playWithFriend();
        }
        
    }

    var time;
    function check(){
        time-=1;
        GB.battleui.ui.time.text=time;
        if(time==0){
            self.state="idle";
           GB.battleui.mulResult();
           Laya.timer.clear(null,check)
        }
        console.log("check")
    }
    

     start=function(mode){
        self.mode=mode;
        receiveMouse=true;
        
        if(mode===2){
            self.life=3;
            self.p1score=0;
            GB.battleui.ui.soloLife.visible=true;
            GB.battleui.ui.timer.visible=false;
            
        }else{
            self.state="play";
            time=45;
            self.life=999;
            Laya.timer.loop(1000,null,check);
            self.p1score=0;
            self.p2score=0;
            GB.battleui.ui.soloLife.visible=false;
            GB.battleui.ui.timer.visible=true;
        }
        GB.battleui.syncScore(0);
        sceneManager.start(mode);
    }

    function onMouse(e){
        if(receiveMouse===true){
            sceneManager.onMouse(e);
        }
    }

    function init(){
        sceneManager=GB.createSceneManager();
        GB.stage.on(Laya.Event.MOUSE_DOWN,null,onMouse);
        GB.stage.on(Laya.Event.MOUSE_UP,null,onMouse);
        GB.stage.on(Laya.Event.MOUSE_MOVE,null,onMouse);
    }

    self.gameOver=gameOver;
    self.start=start;
    self.init=init;
    return self;
})();