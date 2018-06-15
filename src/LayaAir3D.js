(function(){
        //初始化微信小游戏
        Laya.MiniAdpter.init(true);
        //初始化引擎
        Laya3D.init(640, 1136, true);

        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;

        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;

        GB.game.init();   
        
       
})();

