//为页面中第一个form绑定提交事件监听:
document.forms[0].addEventListener("submit",
  function(){//this->form
  //获得当前form中name为userName的文本框的内容
    var username=this.userName.value;
    var pwd=this.userPwd.value;
    //查找name属性为noLoginPeriod的状态为checked的元素,保存在rad中
    var rad=document.querySelector(
      "[name='noLoginPeriod']:checked");
    if(rad!=null){//如果用户选中了一个radio
      //获取rad的内容，转为整数保存在变量days中
      var days=parseInt(rad.value);
      var now=new Date();//获得当前时间now
      //将当前时间加days天
      now.setDate(now.getDate()+days);
      //添加cookie: 变量名为userName,变量值为username
      setCookie("userName",username,now);
      setCookie("pwd",pwd,now);
    }
});
function setCookie(cookieName,value,date){
  document.cookie=cookieName+"="+value+
                 ";expires="+date.toGMTString();
}