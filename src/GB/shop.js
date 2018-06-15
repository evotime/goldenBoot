if (typeof GB === 'undefined' ) GB={};
GB.shop=(function(){
    var self={};
    
    var buyItem;

    var data=[
        {
            name:"绿茵使者",
            image:"comp/goldenfoot_ball1.png",
            switch:{visible:true},
            state:{visible:true,text:"使用中"},
            buy:{visible:false},
            price:{visible:false,text:"系统默认"}
        },
         {
            name:"行云流水",
            image:"comp/goldenfoot_ball2.png",
            switch:{visible:false},
            state:{visible:false,text:"使用中"},
             buy:{visible:true},
             price:{text:"2000",visible:true}
        },
        {
            name:"暴雨梨花",
            image:"comp/goldenfoot_ball3.png",
            switch:{visible:false},
            state:{visible:false,text:"使用中"},
             buy:{visible:true},
             price:{text:"10000",visible:true}
        },
        {
            name:"飞鸿踏雪",
            image:"comp/goldenfoot_ball4.png",
            switch:{visible:false},
            state:{visible:false,text:"使用中"},
             buy:{visible:true},
             price:{text:"50000",visible:true}

        },
        {
            name:"蓝色妖姬",
            image:"comp/goldenfoot_ball5.png",
            switch:{visible:false},
            state:{visible:false,text:"使用中"},
             buy:{visible:true},
             price:{text:"100000",visible:true}
        },
        {
            name:"雷动九天",
            image:"comp/goldenfoot_ball6.png",
            switch:{visible:false},
            state:{visible:false,text:"使用中"},
             buy:{visible:true},
             price:{text:"500000",visible:true}
        },
        {
            name:"飞火流星",
            image:"comp/goldenfoot_ball7.png",
            switch:{visible:false},
            state:{visible:false,text:"使用中"},
             buy:{visible:true},
            price:{text:"1000000",visible:true}
        },
        {
            name:"死神飞弹",
            image:"comp/goldenfoot_ball8.png",
            switch:{visible:false},
            state:{visible:false,text:"使用中"},
             buy:{visible:true},
             price:{text:"5000000",visible:true}
        }


    ]
    var selectIndex;
    var description={
        "绿茵使者":"无",
        "行云流水":"在球场之上自然流畅，不受约束，可使守门员拦球几率下降1%！",
        "暴雨梨花":"每一射出，必定见血，可使守门员拦球几率下降3%！",
        "飞鸿踏雪":"似有似无，暗藏乾坤，可使守门员拦球几率下降5%！",
        "蓝色妖姬":"犹如鬼魅一般的存在，防不胜防，可使守门员拦球几率下降7%！",
        "雷动九天":"球过之处，如排山倒海，可使守门员拦球几率下降9%！",
        "飞火流星":"拥有流星般的速度，可使守门员拦球几率下降12%！",
        "死神飞弹":"闻所未闻，见所未见，可使守门员拦球几率下降15%！"
    }
        
    function popBall(name,i){
        buyItem.name.text=name;
        console.log(buyItem.price)
        buyItem.price.text=data[i].price.text;
        buyItem.image.skin=data[i].image;
        buyItem.description.text=description[name];
        buyItem.popup();
    }
   

    self.init=function(ui){
        ui=ui;
        ui.shopList.vScrollBarSkin ="";
        ui.shopList.dataSource=data;
        var count=0;
        ui.shopList.on(Laya.Event.RENDER,null,function(){
            count+=1;
            if(count==8){
            //    console.log(count)
                addFunction();
            }
        });
        function addFunction(){
            for(var i=0;i<ui.shopList.content._childs.length;i++){
            ui.shopList.content._childs[i].on(Laya.Event.CLICK,ui.shopList.content.getChildAt(i),function(){
                var n=this.getChildByName("name").text;
               var i= ui.shopList.content._childs.indexOf(this);
               popBall(n,i);
            });
        }
        }
        // console.log(ui.shopList._content._childs)
        
        buyItem=new buyItemUI();

    }

    return self;
}

)();