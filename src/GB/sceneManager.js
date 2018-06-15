if (typeof GB === 'undefined' ) GB={};
GB.createSceneManager=function(){
    var self={};
    var ballNum=1;
    var scene=Laya.Loader.getRes(GB.res.scenePath);
    var camera=scene.getChildByName("Main Camera");
    var ball=scene.getChildByName("qius").getChildAt(ballNum);
    ball._update=update;
    var colliders=scene.getChildByName("colliders");
    var rewards=scene.getChildByName("reward");
    var keeper=scene.getChildByName("keeper");
    var keeperAnim=keeper.getComponentByType(Laya.Animator);
    keeperAnim.getClip("Idle").isLooping=true;
    var nets=scene.getChildByName("nets");
    var walls=scene.getChildByName("wall");
    var light=scene.getChildByName("d1");
    var wallCols=scene.getChildByName("wallcolliders");
    var shows=scene.getChildByName("show");
    var rewardScores=scene.getChildByName("rewards");
    //初始化光阴

    light.color = new Laya.Vector3(1, 1, 1);
    light.shadow=true;
    light.shadowDistance = 30;
    light.shadowResolution = 2048;
    light.shadowPSSMCount = 1;
    light.shadowPCFType = 3;
    ball.meshRender.castShadow=true;
    var fl=scene.getChildByName("scenes").getChildAt(2);
    fl.meshRender.receiveShadow=true;
    ///


    var theWall;
    //隐藏方块

    //出生点设置
    var shootPoints1=scene.getChildByName("ShootPoints1");
    var shootPoints2=scene.getChildByName("ShootPoints2");
    var shootPoints3=scene.getChildByName("ShootPoints3");
  //  var effect=scene.getChildByName("effects").getChildAt(ballNum);
     var ef= ball.getChildAt(0);

    setObjsDeactive(rewards);
    setObjsDeactive(walls);
    setObjsDeactive(colliders);
    setObjsDeactive(nets);
    setObjsDeactive(shows);
    setObjsDeactive(shootPoints1);
    setObjsDeactive(shootPoints2);
    setObjsDeactive(shootPoints3);
    var wave=0;
    var mode;
    function setObjsDeactive(obj){
        for(var i=0;i<obj.numChildren;i++){
            obj.getChildAt(i).active=false;
        }
    }
    function setObjsActive(obj){
        for(var i=0;i<obj.numChildren;i++){
            obj.getChildAt(i).active=true;
        }
    }

    //踢球的全部逻辑
    var arcH;
    var arcV;
    var gravity=GB.ballMovement.gravity;
    var speedX,speedY,speedZ;
    var shootVelocity;
    var shooting=false;
    var cameraCanMove=true;
    var changeTimes=0;
    var changeArc;
    var changeY;
    var hitted=false;
    var colled=false;
    var airForce=GB.ballMovement.airResis;

    function update(){
        
        if(shooting){
            if(changeTimes>0){
                changeTimes-=1;
                arcH-=changeArc;
                shootVelocity+=1.5*changeY;
                speedX=Math.sin(arcH)*shootVelocity;
                speedZ=Math.cos(arcH)*shootVelocity;
                speedY+=0.7*changeY*GB.ballMovement.ySens;
            }
            
            if(speedX>0) speedX+=airForce*Math.sin(arcH)/60;
           if(speedZ>0) speedZ+=airForce*Math.cos(arcH)/60;
            
            speedY+=gravity/60;
            if(ball.transform.position.y<0){
                speedY*=GB.ballMovement.bounceVelocityReduce;
                if(Math.abs(speedY)<0.001){
                    speedY=0;
                   
                }else{
                    
                }
               ball.transform.position=new Laya.Vector3(ball.transform.position.x,0.3,ball.transform.position.z);

            }
            ball.transform.translate(new Laya.Vector3(speedX/60,speedY/60,speedZ/60),false);
            ball.transform.rotate(new Laya.Vector3(speedX/60,speedY/60,speedZ/60),false);
            
            if(cameraCanMove==true){
                 camera.transform.translate(new Laya.Vector3(speedX/300,0.01,speedZ/800),false);
         //        camera.transform.lookAt(ball.transform.position,new Laya.Vector3(0,1,0));
            }
            var hitlist=[];
            if(hitted===false){
                for(var i=0;i<rewards.numChildren;i++){
                    var c=rewards.getChildAt(i);
                    if(GB.collide(c,ball.transform.position)){
                        hitlist.push(c);                        
                    }
                }

                if(hitlist.length>=1){
                    Laya.SoundManager.playSound('res/sound/cheer01.mp3');
                    hitted=true;
                    //获得积分
                    var maxScore=0;
                    var theCol;
                    for(var i=0;i<hitlist.length;i++){
                        var c=hitlist[i];
                        if(c.name==='moving'){
                          var mov;
                          if(wave>= GB.rules[mode].score80){
                            mov=80;
                          }else if(wave>= GB.rules[mode].score50){
                            mov=50;
                          }else{
                              mov=25;
                          }
                          if(mov>maxScore)maxScore=mov;
                         }else{
                             if(parseInt(c.name)>maxScore){
                                 maxScore=parseInt(c.name);
                                 theCol=c;
                             }
                         }
                    }
                    GB.battle.p1score+=maxScore;
                    GB.net.syncScore(GB.battle.p1score);
                    GB.battleui.ui.p1score.text= GB.battle.p1score;
                    //显示show.
                 //   c.active=true;
                   var index=-1;
                    if(maxScore==25 || maxScore==40)index=0;
                    if(maxScore==50 || maxScore==70)index=1;
                    if(maxScore==80 || maxScore==90)index=2;
                    if(index!=-1)
                        shows.getChildAt(index).active=true;
                    var index2=rewards._childs.indexOf(theCol);
                    console.log(index2);

                    if(index2<=4 && index2!=-1){
                        console.log(rewardScores)
                        rewardScores.getChildAt(index2).active=true;
                    }

                    Laya.timer.once(1000,null,function(){
                        setObjsDeactive(shows);
                        setObjsDeactive(rewardScores);
                        
                    })                   
                }
            }
            
            for(var i=0;i<colliders.numChildren;i++){
                var c=colliders.getChildAt(i);
                    if(GB.collide(c,ball.transform.position)&& colled===false ){
                        colled=true;
                        speedZ*=GB.ballMovement.bounceVelocityReduce;
                        speedX*=-1*GB.ballMovement.bounceVelocityReduce;
                        Laya.SoundManager.playSound('res/sound/hit.mp3');
                        arcH+=(Math.PI*3/2-arcH)*2;
                    }
            }
           
            
            for(var i=0;i<nets.numChildren;i++){
                var c=nets.getChildAt(i);
                    if(GB.collide(c,ball.transform.position)){
                        speedZ=0;
                        speedX=0;
                    }
            }             
        }       
    }
    
    function shoot(x,y){
       //预留守门员逻辑
        if(wave>= GB.rules[mode].keeper){
           // Laya.timer.once(300,null,function(){
                if(x>100){
                     keeperAnim.play("LAJump");
                }else if(x >0 && x<=100){
                    keeperAnim.play("LJump");
                }else if(x >-30 && x<=30){
                    keeperAnim.play("Jump");
                }else if(x>-100 && x<=-30){
                     keeperAnim.play("RJump");
                }else if(x<-100){
                     keeperAnim.play("RAJump");
                }  
        //    })
        }

         if(wave>= GB.rules[mode].wall){
            for(var i=0;i<theWall.numChildren;i++){
                var w=theWall.getChildAt(i).getComponentByType(Laya.Animator);
                     w.play("Jump");                  
            }
         }

        Laya.SoundManager.playSound('res/sound/kickball.mp3',1);
        Laya.timer.once(3000,null,nextWave);
        Laya.timer.once(1500,null,function(){
            cameraCanMove=false;
        });
        shooting=true;

        var d=GB.clamp(x,-160,160);
        var dd=Math.PI/12*d/160;
        arcH-=dd;
        if(wave>= GB.rules[mode].score80){
            shootVelocity=GB.ballMovement.range3Velocity;
        }else if(wave>= GB.rules[mode].score50){
            shootVelocity=GB.ballMovement.range2Velocity;
        }else{
            shootVelocity=GB.ballMovement.range1Velocity;
        }
             
        
        speedX=Math.sin(arcH)*shootVelocity;
        speedZ=Math.cos(arcH)*shootVelocity;
        
        var dy=GB.clamp(y,GB.ballMovement.shootMinMouseY,GB.ballMovement.shootMaxMouseY);
   
        speedY=GB.ballMovement.baseYVelocity+GB.ballMovement.extraYVelocity*dy/GB.ballMovement.shootMinMouseY;

        // var ef=effect.clone();

        // ef.transform.position=new Laya.Vector3(0,0,0);
        // ball.addChild(ef);
        
        ball.getChildAt(0).active=true;
         Laya.timer.once(1500,null,function(){
           ball.getChildAt(0).active=false;
         });
       // ball.getChildAt(0).active=true;
        //  Laya.timer.once(1500,null,function(){
        //     ball.removeChild(ef);
        //  });

    }
    function change(x,y){
        var d=GB.clamp(x,GB.ballMovement.minMouseX,GB.ballMovement.maxMouseX);
        var dd=Math.PI/9*d/GB.ballMovement.maxMouseX*GB.ballMovement.xSens;
        changeTimes=GB.ballMovement.turnFrames;
        changeArc=dd/GB.ballMovement.turnFrames;
        changeY= GB.clamp(y,GB.ballMovement.minMouseY,GB.ballMovement.maxMouseY)/400;

    }

    //监听鼠标事件
    var sx;
    var sy;
    function onMouse(e){
        if(e.type===Laya.Event.MOUSE_DOWN){
            sx=GB.stage.mouseX;
            sy=GB.stage.mouseY;
        }else if(e.type===Laya.Event.MOUSE_UP){
            var ddx=GB.stage.mouseX-sx;
            var ddy=GB.stage.mouseY-sy;
            if(Math.sqrt(ddx*ddx+ddy*ddy)<GB.ballMovement.shootMouseMoveRequire)return;
            if(shooting===true){
                change(ddx,ddy*-1);
            }else{
                shoot(ddx,ddy*-1);
            }
        }
    }

    //重置足球和相机的初始值
    function setBallPos(a){
        var i=Math.floor(Math.random()*a.numChildren);
        var c=a.getChildAt(i);
        GB.copyPos(ball,c);
        ball.getChildAt(0).active=false;
     //   ball.removeChild(ef);
        GB.copyPos(camera,c);
        var dx=c.transform.position.x-keeper.transform.position.x;
        var dz=c.transform.position.z-keeper.transform.position.z;
        var arc=Math.atan(dx/dz);
        var dis=3;
        ball.transform.translate(new Laya.Vector3(0,0.08,0),false);
        camera.transform.translate(new Laya.Vector3(dis*Math.sin(arc),1.3,dis*Math.cos(arc)),false);
        camera.transform.lookAt(keeper.transform.position,new Laya.Vector3(0,1,0));
        arcH=arc+Math.PI;
    }


    

    //重置足球，相机位置，判断是否出守门员，判断是否出人墙（随机人墙），判断移动分数（随机移动区域）
    var watchedAd=false;
    
    function beforeGameOver(){
        if(watchedAd==false){
            watchedAd=true;
            GB.battleui.beforeDead();
        }else{
            GB.battleui.getReward();
        }
    }

    self.getOneLife=function(){
        resetWave();
    }

    function nextWave(){
        if(hitted===false){
            GB.battle.life-=1; 
            GB.battleui.ui.life.text= GB.battle.life;
        }

         if(GB.battle.life==0){
                beforeGameOver();
            }else{
                 resetWave();
            }
    }

    var wallNum;
    function resetWave(){
        //设置球
        wave+=1;
        GB.battleui.ui.p1score.text= GB.battle.p1score;
        GB.battleui.ui.life.text= GB.battle.life;
       
        shooting=false;
        hitted=false;
        colled=false;
        cameraCanMove=true;
        if(wave>= GB.rules[mode].score80){
            setBallPos(shootPoints3);
        }else  if(wave>= GB.rules[mode].score50){
            setBallPos(shootPoints2);
        }else{
            setBallPos(shootPoints1);
        }

        if(wave>= GB.rules[mode].keeper){
            keeper.active=true;
            keeperAnim.play("Idle");
            
        }else{
            keeper.active=false;
        }//出现守门员
        if(wave>= GB.rules[mode].wall){
            wallNum=Math.floor(Math.random()*3);
             setObjsDeactive(walls);
             theWall= walls.getChildAt(wallNum)
            theWall.active=true;
            var bp=ball.transform.position;
            var kp=keeper.transform.position;
            theWall.transform.position=
            new Laya.Vector3(bp.x+(kp.x-bp.x)*2/3,0,bp.z+(kp.z-bp.z)*2/3);
            theWall.transform.lookAt(ball.transform.position,new Laya.Vector3(0,1,0))
        }else{
            setObjsDeactive(walls);
        }//出现门墙


       
        //预留守门员
        //预留人墙
        //预留移动积分
    }
    


////开始游戏
    self.restart=function(){
        wave=0;
        Laya.SoundManager.playSound('res/sound/whistling.mp3');
        resetWave();
        watchedAd=false;
        setObjsActive(rewardScores);
        Laya.timer.once(1000,null,function(){
            setObjsDeactive(rewardScores);
        });
    }

    function start(m){
        mode=m;
        GB.stage.addChild(scene);
        GB.stage.addChild(GB.battleui.ui);
        self.restart();
    }
    


    
    self.gameOver=function(){
        scene.removeSelf();
        GB.battleui.ui.removeSelf();
        
    }

    self.start=start;
    self.onMouse=onMouse;
    return self;
};