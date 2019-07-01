//Step1: 定义任务
function task(){
  var now=new Date();//获得当前时间now
  var h=now.getHours();//获得h
  h>=12&&(h-=12);//如果h>=12，就h-12
  var m=now.getMinutes();//获得m
  var s=now.getSeconds();//获得s
  var sDeg=s/60*360;//计算sDeg
  var mDeg=(m*60+s)/3600*360;//计算mDeg
  //计算hDeg
  var hDeg=(h*3600+m*60+s)/(3600*12)*360;
  //查找id为h的div，设置其transform属性为:rotate(hDegdeg)
  document.getElementById("h")
          .style
          .transform="rotate("+hDeg+"deg)";
  //查找id为m的div，设置其transform属性为:rotate(mDegdeg)
  document.getElementById("m")
          .style
          .transform="rotate("+mDeg+"deg)";
  //查找id为s的div，设置其transform属性为:rotate(sDegdeg)
  document.getElementById("s")
          .style
          .transform="rotate("+sDeg+"deg)";
}
//Step2: 启动定时器:
task();
setInterval(task,1000);