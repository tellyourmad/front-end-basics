//遍历指定父节点下的所有子节点
//function getChildren1(parent){
////console.log(parent.nodeType!=3?
//  //parent.nodeName:parent.nodeValue);
//var children=parent.children;
//                 //.childNodes;
//for(var i=0,len=children.length;i<len;i++){
//  //对每个直接子节点应用和父节点相同的操作
//  getChildren1(children[i]);
//}
//}
function getChildren2(parent){
//创建节点迭代器:
var iterator=document.createNodeIterator(
    parent,NodeFilter.SHOW_ALL,null,false  
);
//反复调用迭代器的nextNode()方法
var curr=null;
while((curr=iterator.nextNode())!=null){
    console.log(curr.nodeType!=3?
      curr.nodeName:curr.nodeValue);
}
}
getChildren2(document.body);

//console.time("getChildren1");
//for(var i=0;i<10000;i++)getChildren1(document);
//console.timeEnd("getChildren1");
//console.time("getChildren2");
//for(var i=0;i<10000;i++)getChildren2(document);
//console.timeEnd("getChildren2");


//创建TreeWalker
//var walker=document.createTreeWalker(
//document,NodeFilter.SHOW_ELEMENT,null,false
//);
//console.log(
//walker.lastChild(),//html
//walker.lastChild(),//body
//walker.firstChild()//span
////walker.nextSibling()//ul
//);
