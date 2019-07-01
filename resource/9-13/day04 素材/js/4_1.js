//Step1: 定义任务函数，计算now到end的时间差
function task(){
  //定义目标时间end: 2016/9/13 12:00
  var end=new Date("2016/9/13 12:00");
  var now=new Date();//获得当前时间now
  //获得时间差(s): end-now /1000
  var s=Math.round((end-now)/1000);
  if(s>0){//如果s>0
    var h=Math.floor(s/3600);//求小时(h): 
    h<10&&(h="0"+h);//如果h<10,就改为0+h
    var m=Math.floor(s%3600/60);//求分钟(m):
    m<10&&(m="0"+m);//如果m<10,就改为0+m
    s%=60;//求秒(s):
    s<10&&(s="0"+s);//如果s<10,就改为0+s
    //找到id为time的span，设置其内容为h:m:s
    document.getElementById("time")
            .innerHTML=h+":"+m+":"+s;
  }else{
    //停止定时器
    clearInterval(timer);
    timer=null;
    document.getElementById("time")
            .innerHTML="下课了！";
  }
}
//Step2: 启动定时器: 
task();
var timer=setInterval(task,1000);
//Step3: 停止定时器:
function stop(btn){
  //如果btn的内容为||
  if(btn.innerHTML=="||"){
    clearInterval(timer);//停止定时器
    timer=null;
    btn.innerHTML="|>";//修改btn的内容为|>
  }else{//否则
    timer=setInterval(task,1000);//启动定时器
    btn.innerHTML="||";//修改btn的内容为||
  }
}