if (typeof GB === 'undefined' ) GB={};

GB.res = GB.res || {};
(function(root){
    var base="";
    root.scenePath=base+'res/3d/T.ls';
    var resources=[
      base+'res/atlas/comp.atlas',
         root.scenePath
         
    ];
    var final;
    var total=resources.length;
    var count=0;
    function onLoadProcess(){
        count+=1; 
        if(count===total){
            final();
        }
    }

    root.loadAll=function(f){
        for(var i=0;i<resources.length;i++){
            Laya.loader.create(resources[i],Laya.Handler.create(null,onLoadProcess));
        }
        final=f;
    }
})(GB.res);