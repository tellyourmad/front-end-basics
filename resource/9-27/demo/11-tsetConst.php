<?php
//define() const
//两种方式定义常量，分别对应的值为123和king
//输出这两个常量
define('USERNAME','king');
const TEST=123;
echo USERNAME,'<hr/>';
echo TEST,'<br/>';
echo '<hr/>';
$var=TEST;
echo $var;//123 echo TEST
echo '<hr/>';
$username='king';
$var1=$username;
echo $var1;
