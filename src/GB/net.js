if (typeof GB === 'undefined' ) GB={};
GB.net=(function(){
    var self={};
    var host="192.168.31.215"
    var port=8080;
    var socket=new Laya.Socket();
    socket.on(Laya.Event.OPEN, null, openHandler);
    socket.on(Laya.Event.MESSAGE, null, receiveHandler);
    socket.on(Laya.Event.CLOSE, null, closeHandler);
    socket.on(Laya.Event.ERROR, null, errorHandler);

    function openHandler(){
        console.log('connected')     
    }
    function receiveHandler(m){
        var msg=JSON.parse(m);
        if(msg.type==='success'){
            if(GB.match.matching===true)
                 GB.match.matched();
        }
        if(msg.type==='syncScore'){
            if(GB.battle.state=="play")
                 GB.battle.syncScore(msg.score);
        }

    }
    function closeHandler(){

    }
    function errorHandler(){

    }

    self.sendMatch=function(n){
        var msg={type:"match"};
        self.sendMsg(msg);
    }

    self.syncScore=function(n){
        var msg={type:"syncScore",score:n};
        self.sendMsg(msg);
    }
    self.sendCancle=function(){
        var msg={type:"cancle"};
        self.sendMsg(msg);
    }





    self.sendMsg=function(msg){
         socket.send(JSON.stringify(msg));
    }


    self.init=function(){
        socket.connect(host,port);
    }
    self.s=socket;
    return self;
}
)();