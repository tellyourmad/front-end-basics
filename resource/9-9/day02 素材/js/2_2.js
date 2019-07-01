var unselCts=[],selCts=[];
//将unsel元素中的所有国家名称填充到unselCts中
unselCts=//unsel的内容去掉开头和结尾的空字符，再掐头去尾，按?切割
  unsel.innerHTML
       .replace(/^\s+|\s+$/g,"")
       .slice(8,-9)
       .split(/<\/option>\s*<option>/);

function move(btn){
  switch(btn.innerHTML){//判断btn的内容:
    case "&gt;&gt;"://是>>，就将unselCts拼接到selCts结尾，再保存回selCts中
      selCts=selCts.concat(unselCts);
      unselCts=[];//将unselCts清空
      break;
    case "&lt;&lt;"://是<<，就将selCts拼接到unselCts结尾，再保存回unselCts中
      unselCts=unselCts.concat(selCts);
      selCts=[];//将selCts清空
      break;
    case "&gt;"://是>, 
      //查找id为unsel下的所有option，保存在变量opts中
      var opts=document.querySelectorAll(
        "#unsel>option"
      );
      //反向遍历opts中每个opt
      for(var i=opts.length-1;i>=0;i--){
        //如果当前opt的selected为true
        if(opts[i].selected){
          //删除unselCts数组中当前位置的元素，再将删除的元素拼接到selCts中
          selCts.push(unselCts.splice(i,1)[0]);
        }
      }
      break;
    case "&lt;"://是<,就查找id为sel下的所有option，保存在变量opts中
      var opts=document.querySelectorAll(
        "#sel>option"  
      );
      //反向遍历opts中每个opt
      for(var i=opts.length-1;i>=0;i--){
        //如果当前opt的selected为true
        if(opts[i].selected){
          //删除selCts数组中当前位置的元素，再将删除的元素拼接到unselCts中
          unselCts.push(selCts.splice(i,1)[0]);
        }
      }
  }
  unselCts.sort();//将unselCts按国家名称升序排列
  selCts.sort();//将selCts按国家名称升序排序
  //查找id为unsel的元素，保存在unsel中
  var unsel=document.getElementById("unsel");
  //将unselCts数组的内容更新到unsel元素中
  updateSel(unselCts,unsel);
  //查找id为sel的元素，保存在sel中
  var sel=document.getElementById("sel");
  //将selCts数组的内容更新到sel元素中
  updateSel(selCts,sel);
}
function updateSel(arr,sel){
  //设置sel的内容为:arr按?拼接，补上开头和结尾
  sel.innerHTML=arr.length>0?("<option>"+
    arr.join("</option><option>")
    +"</option>"):"";
}