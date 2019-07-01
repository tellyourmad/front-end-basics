var game={
  PSIZE:300,//弹出窗口大小(不包含文档显示区上方)
  OFFSET:56,//文档显示区上方的剩余空间
  MAXTOP:0,//保存弹出窗口最大可用top
  MAXLEFT:0,//保存弹出窗口最大可用left
  pop:null,//保存弹出窗口的window对象
  init:function(){
    //计算MAXTOP: 屏幕可用高-PSIZE-OFFSET
    this.MAXTOP=
      screen.availHeight-this.PSIZE-this.OFFSET;
    //计算MAXLEFT: 屏幕可用宽-PSIZE
    this.MAXLEFT=screen.availWidth-this.PSIZE;
    //在0~MAXTOP之间生成一个随机的top值rTop
    var rTop=
      Math.floor(Math.random()*(this.MAXTOP+1));
    //在0~MAXLEFT之间生成一个随机的left值rLeft
    var rLeft=
     Math.floor(Math.random()*(this.MAXLEFT+1));
    //定义配置字符串config: 
    var config="top="+rTop+
               ",left="+rLeft+
               ",width="+this.PSIZE+
               ",height="+this.PSIZE;
    //打开新窗口，url为about:blank,配置字符串为config，将返回的新窗口对象保存在pop属性中
    this.pop=
      open("about:blank","_blank",config);
    var img=new Image();//创建img元素
    //设置img元素的src为D://xiaoxin.gif
    img.src="D://xiaoxin.gif";
    //设置img元素的width为
    img.style.width=this.PSIZE-20+"px";
    //为img元素绑定单击事件: 弹出提示:"约么"
    img.onclick=function(){alert("约么");}
    //将img追加到pop窗口的页面的body下
    this.pop.document.body.appendChild(img);
    //为pop窗口绑定鼠标进入事件: 
    this.pop.onmouseover=function(e){
      //反复:
      while(true){
       //在0~MAXTOP之间生成一个随机的top值rTop
       var rTop=Math.floor(
                 Math.random()*(this.MAXTOP+1));
       //在0~MAXLEFT之间生成一个随机的left值rLeft
       var rLeft=Math.floor(
                Math.random()*(this.MAXLEFT+1));
       //获得鼠标相对于屏幕的x坐标
       var x=e.screenX;
       //获得鼠标相对于屏幕的y坐标
       var y=e.screenY;
       //如果!(x>=rLeft&&x<=rLeft+PSIZE
           //&&y>=rTop&&y<=rTop+OFFSET+PSIZE)
       if(!(x>=rLeft&&x<=rLeft+this.PSIZE
            &&y>=rTop
              &&y<=rTop+this.OFFSET+this.PSIZE)
       ){
        //将pop移动到rLeft,rTop的位置
        this.pop.moveTo(rLeft,rTop);
        break;//退出循环
       }
      }
    }.bind(this);
  }
}
game.init();