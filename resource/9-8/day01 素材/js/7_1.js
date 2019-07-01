function toggle(span){
  //如果当前span的class为open
  if(span.className=="open"){
    //将span的class改为closed
    span.className="closed";
    //将span的下一个兄弟元素的class改为hide
    span.nextElementSibling.className="hide";
  }else{//否则
    //查找class为tree的元素下的class为open的span，保存在变量openSpan
    var openSpan=
      document.querySelector(".tree .open");
    if(openSpan){//如果openSpan找到
      //将openSpan的class改为closed
      openSpan.className="closed";
      //将openSpan的下一个兄弟元素的class改为hide
      openSpan.nextElementSibling
              .className="hide";
    }
    //将span的class改为open
    span.className="open";
    //将span的下一个兄弟元素的class改为show
    span.nextElementSibling.className="show";
  }
}