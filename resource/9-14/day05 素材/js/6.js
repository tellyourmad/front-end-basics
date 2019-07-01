var game={
  PSIZE:0,//保存div的大小
  MAXTOP:0,MAXLEFT:0,//保存最大可用top和left
  pop:null,//保存主角div
  init:function(){
    //查找id为pop的div保存在pop属性中
    this.pop=document.getElementById("pop");
    //获取pop计算后的样式中的width，转为浮点数保存在PSIZE属性中
    this.PSIZE=parseFloat(
      getComputedStyle(this.pop).width  
    );
    //计算MAXTOP: 文档显示区的高-PSIZE
    this.MAXTOP=innerHeight-this.PSIZE;
    //计算MAXLEFT: 文档显示区的宽-PSIZE
    this.MAXLEFT=innerWidth-this.PSIZE;
    //在0~MAXTOP生成随机数,保存在变量rTop中
    var rTop=
      Math.floor(Math.random()*(this.MAXTOP+1));
    //在0~MAXLEFT生成随机数,保存在变量rLeft
    var rLeft=
      Math.floor(Math.random()*(this.MAXLEFT+1));
    //设置pop的top为rTop
    this.pop.style.top=rTop+"px";
    //设置pop的left为rLeft
    this.pop.style.left=rLeft+"px";
    //为pop绑定鼠标进入事件监听,函数为:
    this.pop.addEventListener("mouseover",
      function(e){//获得事件对象e
        while(true){//反复
         //在0~MAXTOP生成随机数,保存在变量rTop中
          var rTop=Math.floor(
            Math.random()*(this.MAXTOP+1));
         //在0~MAXLEFT生成随机数,保存在变量rLeft
          var rLeft=Math.floor(
            Math.random()*(this.MAXLEFT+1));
          //获得鼠标相对于文档显示区的x坐标
          var x=e.clientX;
          //获得鼠标相对于文档显示区的y坐标
          var y=e.clientY;
          //如果!(x>=rLeft&&x<=rLeft+PSIZE
                //&&y>=rTop&&y<=rTop+PSIZE)
          if(!(x>=rLeft&&x<=rLeft+this.PSIZE
                &&y>=rTop&&y<=rTop+this.PSIZE)){
            //设置pop的top为rTop
            this.pop.style.top=rTop+"px";
            //设置pop的left为rLeft
            this.pop.style.left=rLeft+"px";
            break;//退出循环
          }
        }
      }.bind(this)
    );
  }
}
game.init();