/**************
我的jQuery对象扩展函数库
***************/
if(window.jQuery){//验证是否引入了jQuery
  //向查找结果对象的原型对象中添加avg方法
  jQuery.fn.avg=function(){//this->查找结果的集合对象
    //遍历当前结果中每个元素，同时声明空变量sum=0
    for(var i=0,sum=0;i<this.length;i++){
      //将当前对象的内容转为浮点数后累加到sum中
      sum+=parseFloat(this[i].innerHTML);
    }//(遍历结束)
    //返回sum/当前结果的元素个数
    return sum/this.length;
  }
}

