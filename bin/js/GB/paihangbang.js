if (typeof GB === 'undefined' ) GB={};
GB.ph=(function(){
    var self={};
    var data1=[
        {
            background:"comp/goldenfoot_blog1_9.png",
            rank:1,
            name:"bbbbbb",
            scoreGlobal:{visible:true,text:"99999"},
            scorePersonal:{visible:false,text:"1111"}
        },
        {
            background:"comp/goldenfoot_blog2_9.png",
            rank:2,
            name:"ccccccc",
            scoreGlobal:{visible:true,text:"666666"},
            scorePersonal:{visible:false,text:"1111"}
        }

    ];
    var data2=[
        {
            background:"comp/goldenfoot_blog1_9.png",
            rank:1,
            name:"ddddd",
            scoreGlobal:{visible:false,text:"99999"},
            scorePersonal:{visible:true,text:"22222"}
        },
        {
            background:"comp/goldenfoot_blog2_9.png",
            rank:2,
            name:"fffff",
            scoreGlobal:{visible:false,text:"666666"},
            scorePersonal:{visible:true,text:"1111"}
        }
    ]

    function select(o){
        o.getChildByName("selected").visible=true;
        o.getChildByName("unselected").visible=false;
    }
    function unselect(o){
        o.getChildByName("selected").visible=false;
        o.getChildByName("unselected").visible=true;
    }

    ui.rankList

    self.init=function(ui){
       
        ui.btmGlobalRank.on(Laya.Event.CLICK,null,function(){
            select(ui.btmGlobalRank);
            unselect(ui.btnPersonalRank);
            ui.rankList.dataSource=data1;
            ui.rankTypeText="奖金总计"
        });
         ui.btnPersonalRank.on(Laya.Event.CLICK,null,function(){
            unselect(ui.btmGlobalRank);
            select(ui.btnPersonalRank);
            ui.rankList.dataSource=data2;
            ui.rankTypeText="分数"
        });

        select(ui.btmGlobalRank);
        unselect(ui.btnPersonalRank);
        ui.rankList.dataSource=data1;

    }

    return self;
})();