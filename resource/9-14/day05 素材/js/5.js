function getFocus(txt){
	txt.className="txt_focus";
	txt.parentNode //td
		.parentNode //tr
		.querySelector("div")
			.className="";
}
function valiName(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\w{1,10}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}
function valiPwd(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\d{6}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}
//为页面中第一个form绑定提交事件监听,函数为valiAll
document.forms[0].addEventListener(
  "submit",valiAll);
function valiAll(e){
  //获得页面中第一个form对象保存在form中
  var form=document.forms[0];
  //获得form中name为username的文本框，保存在txtName中
  var txtName=form.username;
  //调用valiName,传入txtName作为参数,将验证结果保存在rName中
  var rName=valiName(txtName);
  //获得form中的name为pwd的文本框，保存在txtPwd中
  var txtPwd=form.pwd;
  //调用valiPwd,传入txtPwd作为参数,将验证结果保存在rPwd中
  var rPwd=valiPwd(txtPwd);
  //如果rName和rPwd不都为true,就取消事件
  !(rName&&rPwd)&&(e.preventDefault());
}