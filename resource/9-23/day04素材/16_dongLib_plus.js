//如果window下的dongLib有效
if(window.dongLib){
  //大旭建立自己的子命名空间
  dongLib.xu={/*xu的命名空间*/};
  //基于dongLib原有的sum方法，扩展新的avg方法
  dongLib.xu.avg=function(arr){
    return dongLib.sum(arr)/arr.length;
  }
}else{
  throw new Error("dongLib_plus依赖于dongLib，必须提前引入dongLib")
}