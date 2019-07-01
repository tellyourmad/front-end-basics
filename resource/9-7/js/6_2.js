
function calc(t){
	var func=t.innerHTML;
	t=t.parentElement.getElementsByTagName("span")[0];
	var num=Number(t.innerHTML);
	if(func=="+")
		t.innerHTML=++num;
	else if(num!=0&&func=="-")
		t.innerHTML=--num;
	countTotal();
}

function countTotal(){
	for(var n=0,len=document.getElementById("data").getElementsByTagName("tbody")[0].children.length;n<len*2;n+=2){
		var bt=document.getElementsByTagName("button")[n].parentElement;
		bt.nextElementSibling.innerHTML="&yen;"+
										Number(bt.getElementsByTagName("span")[0].innerHTML)*
										Number(bt.previousElementSibling.innerHTML.slice(1));
	}
	var tds=document.querySelectorAll("#data tbody tr td:last-child");
	for(var i=0,sum=0;i<tds.length;i++){
		sum+=Number(tds[i].innerHTML.slice(1));
	}
	document.querySelector("#data tfoot tr td:last-child").innerHTML="&yen;"+sum;
}
