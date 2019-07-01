var game={
  RN:4,CN:4,//总行数和总列数
  data:null,//保存游戏格子数据的二维数组
  /*强调: 1. 方法中只要使用对象的属性都要加this.
          2. 每个属性和方法之间必须用,号分割
  */
  start:function(){//游戏启动
    //初始化二维数组
    this.data=[];//创建空数组保存在data属性中
    //r从0开始，到<RN结束
    for(var r=0;r<this.RN;r++){
      //创建一个空数组保存在data中r行
      this.data[r]=[];
      for(var c=0;//c从0开始，到<CN结束
          c<this.CN;//设置data中r行c列的值为0
          this.data[r][c]=0,c++);   
    }
    //在二维数组中生成两个随机数:
    this.randomNum();
    this.randomNum();
    this.updateView();//更新页面
    //为页面绑定键盘按下事件
    document.onkeydown=function(e){
      //事件处理函数中,this默认指事件绑定到的对象
      switch(e.keyCode){
        case 37: this.moveLeft();break;
        case 38: this.moveUp();break;
        case 39: this.moveRight();break;
        case 40: this.moveDown();break;
      }
    }.bind(/*start方法的*/this);
  },
  moveLeft:function(){//左移所有行
    //将data转为String，保存在before中
    var before=String(this.data);
    //遍历data中每一行
    for(var r=0;r<this.RN;r++){
      //调用moveLeftInRow方法，传入r
      this.moveLeftInRow(r);
    }
    //将data转为String，保存在after中
    var after=String(this.data);
    //如果before不等于after
    if(before!=after){
      this.randomNum();//随机生成一个数
      this.updateView();//更新页面
    }
  },
  moveLeftInRow:function(r){//左移第r行
    //c从0开始，到<CN-1结束
    for(var c=0;c<this.CN-1;c++){
      //调用getNextInRow方法,传入参数r,c, 将返回值保存在变量nextc中
      var nextc=this.getNextInRow(r,c);
      //如果nextc是-1,退出循环
      if(nextc==-1){break;}
      else{//否则
        //如果r行c位置的值是0
        if(this.data[r][c]==0){
          //就将r行c位置的值替换为nextc位置的值
          this.data[r][c]=this.data[r][nextc];
          //将nextc位置的值置为0
          this.data[r][nextc]=0;
          c--;//c留在原地
        }else if(this.data[r][c]
                  ==this.data[r][nextc]){
          //否则,如果r行c位置的值等于r行nextc位置的值
          //将r行c位置的值*2
          this.data[r][c]*=2;
          //将nextc位置的值置为0
          this.data[r][nextc]=0;
        }
      }
    }
  },
  //获得r行c列右侧下一个不为0的位置
  getNextInRow:function(r,c){
    c++;//c+1
    for(;c<this.CN;c++){//c<CN结束,c++
      if(this.data[r][c]!=0){//如果r行c位置不是0
        return c;//返回c
      }
    }//(遍历结束)
    return -1;//返回-1
  },
  //将数组中每个元素更新到页面的div中
  updateView:function(){
    //遍历data中每个元素
    for(var r=0;r<this.RN;r++){
      for(var c=0;c<this.CN;c++){
        var div=//找到页面上id为"c"+r+c的div
          document.getElementById("c"+r+c);
        //在网页中 获得 id为 "c"+r+c 的元素
        //如果当前元素不是0
        if(this.data[r][c]!=0){
         //设置div的内容为当前元素值
         div.innerHTML=this.data[r][c];
         //设置div的className为"cell n"+当前元素
         div.className="cell n"+this.data[r][c];
        }else{//否则
          div.innerHTML="";//设置div的内容为""
          //设置div的className为"cell"
          div.className="cell";
        }
      }
    }
  },
  //在一个随机位置生成一个2或4
  randomNum:function(){
    while(true){//反复: 
      //在0~RN-1之间生成一个随机整数r
      var r=Math.floor(Math.random()*(this.RN));
      //在0~CN-1之间生成一个随机整数c
      var c=Math.floor(Math.random()*(this.CN));
      //如果data中r行c列的值是0
      if(this.data[r][c]==0){
        //设置data中r行c列的值为:
          //随机生成一个0~1的小数,如果<0.5,就赋值为2，否则赋值为4
        this.data[r][c]=Math.random()<0.5?2:4;
        break;//退出循环
      }
    }
  }
}
game.start();//启动游戏