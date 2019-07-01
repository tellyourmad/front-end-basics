//如果jQuery对象无效,就报错: 依赖于jquery.js
if(!window.jQuery){
  throw new Error("依赖于jquery.js");
}
//下拉菜单插件:
//为jquery的原型对象添加dropdown方法
jQuery.fn.dropdown=function(){
  //this->当前找到的父元素的jquery对象
  //获得当前父元素下的直接子元素a,为期绑定单击事件
  this.children("a").click(function(e){
    e.preventDefault();//阻止默认行为
    //this->a
    //获得当前a元素的下一个元素，切换slide
    $(this).next().slideToggle();
  })
}

//标签页插件:
//为jQuery的原型对象添加tabs方法
jQuery.fn.tabs=function(){
  //this->找到的父元素的jquery对象(不用再封装)
  //在当前父元素下找后代元素ul>li>a绑定单击事件
  this.find("ul").on("click","li>a",function(e){
    e.preventDefault();//阻止默认行为
    var $target=$(e.target);//获得目标元素
    //切换标签显示: 找到当前a的父元素为其添加active类,再找兄弟中class为active的，移除其active类
    $target.parent().addClass("active")
                    .siblings(".active")
                    .removeClass("active");
    //切换内容显示: 用当前a的href属性作为选择器查找对应的内容div,为其添加active类，再找其兄弟中class为active的，移除其active
    $($target.attr("href")).addClass("active")
                           .siblings(".active")
                           .removeClass("active");
  })
}

//手风琴插件
//在jquery的原型对象中定义accordion方法
jQuery.fn.accordion=function(){
  //this->当前找到的父元素的jquery对象
  //为当前元素下的直接子元素h4绑定单击事件
  this.on("click","h4",function(e){
    var $target=$(e.target);//获得目标元素
    //为当前h4的下一个兄弟添加active类,再找兄弟中class为.active的，移除其class
    $target.next().addClass("active")
                  .siblings(".active")
                  .removeClass("active");
  })
}

//按钮组: 
//在jquery的原型对象中添加btnGroup方法
jQuery.fn.btnGroup=function(){
  //this->$(.btnGroup)
  //为this设置单击事件代理，仅允许button元素触发
  this.on("click","button",function(e){
    //获得目标元素，封装为jquery对象$target
    var $target=$(e.target);
    //为目标元素添加active类，再查找其兄弟元素中class为.active的，移除其active类
    $target.addClass("active")
           .siblings(".active")
           .removeClass("active");
  })
}