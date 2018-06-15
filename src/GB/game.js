if (typeof GB === 'undefined' ) GB={};
GB.game=(function(){
    var self={};


    function start(){
        GB.net.init();
        GB.stage=Laya.stage;
    //    Laya.SoundManager.playSound('res/sound/cheer01.mp3',1);
        GB.battle.init();
        GB.lobby.init();
        GB.battleui.init();
    //   var p=new gainGoldUI() ;
    //     p.popup();
    }

    

    self.init=function(){
        GB.res.loadAll(start);
    }
    return self;
})();