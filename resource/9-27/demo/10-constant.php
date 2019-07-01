<?php
//自定义常量的例子
//常量一经定义不能改变
//define(name,value):定义常量,常量名称一般大写，
//而且名称不带$,需要把名称写到引号之间
define('TEST','this is a test');
//如何使用常量:直接根据常量的名称得到他的值
echo TEST;
echo '<hr/>';
echo 'TEST';//TEST 
echo '<hr/>';
define('TEST',12343123123);
echo TEST;
echo '<hr/>';
define("USERNAME",'king');
define('ROOT','/home/www');
echo USERNAME,'<br/>';
echo '<hr/>';
//定义常量
//const 常量名称=值;
const TEST1='this is a test1';
echo TEST1;
const TEST1=123;
echo TEST1;
echo '<hr/>';
//系统常量
echo PHP_VERSION;
echo '<hr/>';
echo PHP_OS;
echo '<hr/>';
print_r(get_defined_constants());//得到所有已定义的系统常量和自定义常量













