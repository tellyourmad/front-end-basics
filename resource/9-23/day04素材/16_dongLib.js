//1. 在全局创建了一个对象
window.dongLib={/*namespace*/};
//2. 在专属的lib对象中添加sum方法
dongLib.sum=function(arr){
  return arr.reduce(
          function(prev,val){return prev+val}
         );
}