if (typeof GB === 'undefined' ) GB={};
//复制一个目标的位置到第一个参数
GB.clamp=function(a,b,c){
    return Math.max(Math.min(a,c),b);
}
GB.copyPos=function(a,b){
    a.transform.position=new Laya.Vector3(b.transform.position.x,b.transform.position.y,b.transform.position.z)

}
//判断物体和一个点是否碰撞
GB.collide=function(a,p){
    var ap=a.transform.position;
    var as=a.transform.scale; 
    return (
        p.x > (ap.x-as.x/2) &&
        p.x < (ap.x+as.x/2) &&
        p.y > (ap.y-as.y/2) &&
        p.y < (ap.y+as.y/2) &&
        p.z > (ap.z-as.z/2) &&
        p.z < (ap.z+as.z/2) 
    )
};