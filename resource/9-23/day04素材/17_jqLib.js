//如果已经加载了jQuery对象
if(window.jQuery){
  jQuery.dong={/*namespace*/};
  jQuery.dong.sum=function(arr){
    return arr.reduce(
            function(prev,val){return prev+val}
           );
  }
  jQuery.dong.avg=function(arr){
    return this.sum(arr)/arr.length;
  }
}else{
  throw new Error("当前库依赖于jquery.js文件")
}