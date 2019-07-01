<?php
/*
测试PHP支持的数据类型
*/
$username='king';
//string(4) "king"
var_dump($username);//打印变量的详细信息，可以打印一个，也可以打印多个
echo '<hr/>';
$age=22;
var_dump($age);//int(22)
echo '<hr/>';
$float=123.3;
$salary=2e3;//2000
$test=2e-2;//0.02
var_dump($float,$salary,$test);//float(123.3) float(2000)
echo '<hr/>';
$bool=true;
$bool=false;
$bool=FALSE;
$bool='false';
var_dump($bool);
echo '<hr/>';
$arr=['a','b',123,2.3,true];
var_dump($arr);
echo '<hr/>';
print_r($arr);//打印数组的
echo '<hr/>';
//实例化了一个stdClass，得到是一个对象object
$obj=new StdClass();
var_dump($obj);
echo '<hr/>';
//以读的方式打开一个文件，返回的是文件句柄，是一个资源，resource
$handle=fopen('8-test.php','r');
var_dump($handle);
echo '<hr/>';
//测试null
//第一种变量赋值为null
$var=null;
var_dump($var);
//未声明的变量直接使用，它的值为null
var_dump($lsdkjflskdjflksdfjl);
//通过unset函数注销的变量，它的值为null
$var=123;
var_dump($var);
unset($var);
var_dump($var);
var_dump($test111);


























