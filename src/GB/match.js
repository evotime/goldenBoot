if (typeof GB === 'undefined' ) GB={};
GB.match=(function(){
    var self={};
    var data=[
    {
        image:"res/jpgs/goldenfoot_qc_zg.png",
        name:"中国",
        reward:"400",
        cost:"200",
    },
    {
        image:'res/jpgs/goldenfoot_qc_rb.png',
        name:"日本",
        reward:"1000",
        cost:"500",
    },
    {
        image:'res/jpgs/goldenfoot_qc_mg.png',
        name:"美国",
        reward:"2000",
        cost:"1000",
    },
    {
        image:'res/jpgs/goldenfoot_qc_qty.png',
        name:"葡萄牙",
        reward:"5000",
        cost:"2500",
    },
    {
        image:'res/jpgs/goldenfoot_qc_agt.png',
        name:"阿根廷",
        reward:"10000",
        cost:"5000",
    },
    {
        image:'res/jpgs/goldenfoot_qc_bx.png',
        name:"巴西",
        reward:"20000",
        cost:"10000",
    },
    {
        image:'res/jpgs/goldenfoot_qc_ydl.png',
        name:"意大利",
        reward:"50000",
        cost:"25000",
    },
    {
        image:'res/jpgs/goldenfoot_qc_dg.png',
        name:"德国",
        reward:"100000",
        cost:"50000",
    },
    {
        image:'res/jpgs/goldenfoot_qc_xby.png',
        name:"西班牙",
        reward:"200000",
        cost:"100000",
    }
    ];

    self.matching=false;

    function cancle(){
         self.matching=false;
        GB.waiting.close();
        GB.net.sendCancle();
    }

    self.matched=function(){
        GB.waiting.close();
        Laya.timer.clear(null,reduceTime);
        GB.lobby.goGlobal();
    }

    var time=30;
    function reduceTime(){
        time-=1;
        GB.waiting.time.text="00:"+time;
        if(time==0){
             Laya.timer.clear(null,reduceTime);
             cancle();
        }
    }

    function startMatch(n){
        self.matching=true;
        GB.net.sendMatch(n);
       GB.waiting.time.text="00:30";
       time=30;
       GB.waiting.accept.visible=false;
       GB.waiting.refuse.visible=false;
       GB.waiting.cancle.visible=true;
       GB.waiting.matched.visible=false;
       GB.waiting.p1Gold.text=data[n].cost;
       GB.waiting.p2Gold.text=data[n].cost;
       GB.waiting.totalGold.text=data[n].reward;  
       GB.waiting.message.text="等待匹配中......";  
       GB.waiting.popup();
       Laya.timer.loop(1000,null,reduceTime);
    }

    self.init=function(ui){
        GB.waiting.cancle.on(Laya.Event.CLICK,null,cancle);
        ui.areaList.dataSource=data;
        ui.areaList.hScrollBarSkin="";
        ui.areaList.scrollBar.elasticDistance=200;
        ui.areaList.scrollBar.max+=2000;
        
        console.log(ui.areaList.scrollBar)
        var count=0;
          ui.areaList.on(Laya.Event.RENDER,null,function(e){
             count++;
             if(count==17){
                 for(var i=0;i<ui.areaList.content._childs.length;i++){
                  ui.areaList.content._childs[i].getChildByName("join").on(Laya.Event.CLICK,ui.areaList.content.getChildAt(i),function(){
                  var n= ui.areaList.content._childs.indexOf(this);
                   startMatch(n);
                });
                 }
             }
        });
    }

    return self;
})();