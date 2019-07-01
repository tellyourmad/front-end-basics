<?php
//运算符的例子
//算术运算符
$num1=3;
$num2=8;
echo $num1+$num2,'<br/>';
echo $num1-$num2,'<br/>';
echo $num1*$num2,'<br/>';
echo $num1/$num2,'<br/>';
echo 3%8,'<br/>';//3
echo 3%-8,'<br/>';//3
echo -3%8,'<br/>';//-3
echo -3%-8,'<br/>';//-3
echo '<hr/>';
//前缀和后缀
//前缀：先加减1，在执行
//后缀：先执行，在加减1
$var=1;
echo ++$var;//2
echo '<br/>';
$var=1;
echo $var++;//1
echo $var,'<br/>';//2
echo '<hr/>';
$var=2;
echo $var--;//2
echo '<br/>';
echo $var;//1
echo '<hr color="red"/>';
//字符连接符：拼接字符串.
echo 'a'.'b';//ab
echo '<br/>';
$var='hello';
$var1='world';
echo $var.$var1.'!!!'.$var.'slkdjflksdf';
echo '<hr/>';


$str1='a';
$str2='b';
echo $str1,$str2;//ab
echo '<br/>';
echo $str1.$str2;//ab
echo '<hr/>';
$str3=$str1.$str2.'!'.$str1.'sdlkfjlksdf';
echo $str3;

echo '<hr/>';
//赋值运算符的例子
$a=12;
$a+=3;//$a=$a+3;
echo $a;//15
echo '<hr/>';
$b=5;
$b-=7;//$b=$b-7;
echo $b;//-2
echo '<hr/>';


$str1='a';
$str2='b';
$str2.=$str1;//$str2=$str2.$str1
echo $str2;//
echo '<hr/>';


$string='a';
$string.='b';//$string=$string.'b'; ab
$string.='c';//$string=$string.'c'; abc
echo $string;//

/*
定义两个变量 值3 和5
通过算术运算符计算相应的值 + - * / % 
实验++ -- ，分为前缀后缀
字符连接符 拼接两个字符串'hello' 'world'赋值给变量
赋值运算符+= -= *= /= .=
*/













































