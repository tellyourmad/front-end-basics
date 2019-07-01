function toggle(t){
	var ulOutSide=t.parentElement.parentElement.children;
	for(var n=0,len=ulOutSide.length;n<len;n++){
		var l=ulOutSide[n];
		if(l.firstElementChild.getAttribute("class")=="open"){
			l.firstElementChild.setAttribute("class","closed");
			l.lastElementChild.setAttribute("class","hide");
			break;
		}
	}
	t.setAttribute("class","open");
	t.nextElementSibling.setAttribute("class","show");
}
