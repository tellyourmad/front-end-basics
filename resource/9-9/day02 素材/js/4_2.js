//获得sheet
var sheet=document.styleSheets[1];
//获得cssRule
var ruleS=sheet.cssRules[4];
var ruleM=sheet.cssRules[5];
var ruleH=sheet.cssRules[6];
//获得每个rule的起始帧和结束帧
var ruleS_start=ruleS.cssRules[0];
var ruleS_end=ruleS.cssRules[1];
var ruleM_start=ruleM.cssRules[0];
var ruleM_end=ruleM.cssRules[1];
var ruleH_start=ruleH.cssRules[0];
var ruleH_end=ruleH.cssRules[1];
//计算sDeg,mDeg,hDeg:
//获得当前时间now
var now=new Date();
//获得s,m,h
var s=now.getSeconds();
var m=now.getMinutes();
var h=now.getHours();
//计算sDeg: s/60*360
var sDeg=s/60*360;
//计算mDeg:?
var mDeg=(m*60+s)/3600*360;
h>=12&&(h-=12);//如果h>=12,要-12
//计算hDeg:
var hDeg=(h*3600+m*60+s)/(3600*12)*360;
//修改每个帧的transform
ruleS_start.style.transform=
                      "rotate("+sDeg+"deg)";
ruleS_end.style.transform=
                  "rotate("+(sDeg+360)+"deg)";
ruleM_start.style.transform=
                      "rotate("+mDeg+"deg)";
ruleM_end.style.transform=
                  "rotate("+(mDeg+360)+"deg)";
ruleH_start.style.transform=
                      "rotate("+hDeg+"deg)";
ruleH_end.style.transform=
                  "rotate("+(hDeg+360)+"deg)";
