<?php
$var='23abc';
var_dump($var);//string(5) '23abc'
//临时转换成整型 int integer
echo '<hr/>';
$res=(int)$var;
var_dump($res);//int 23
echo '<br/>';
var_dump($var);
echo '<hr/>';


$var='false';
$res=(bool)$var;
var_dump($res);
echo '<hr/>';

$var='true';
$res=(integer)$var;
var_dump($res);
echo '<hr/>';
//函数的形式

$var='3king';
$res=intval($var);
var_dump($res);
//floatval($var) doubleval() 
$var='3abc';
/*
Fatal error(致命错误,程序终止执行): Call to undefined function realval() in C:\xampp\htdocs\server\day01\demo\19-tmpType.php on line 32
*/
var_dump(
floatval($var),
doubleval($var)

);
echo 'asdfjsdlkfjds';
echo '<hr/>';
$var=true;
var_dump(strval($var));//
echo '<hr/>';
$var=0;
var_dump(boolval($var));







