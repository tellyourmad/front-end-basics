<?php
//永久转换的例子
$var='32k1aing';
var_dump($var);//string 3king
settype($var,'int');
var_dump($var);//int 3
echo '<hr/>';
$var=123;
/*
Warning(警告): settype(): Invalid(非法) type in C:\xampp\htdocs\server\day01\demo\20-settype.php on line 9
*/
settype($var,'king');
var_dump($var);//int 123
echo '<hr/>';
//gettype获取变量类型，但是检测变量类型的时候不要使用
$a=123;
echo gettype($a);//int

