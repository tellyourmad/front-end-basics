<?php
header('content-type:text/html;charset=utf-8');
//自动转换的例子
echo 1+true;//2 true->1
echo '<br/>';
echo 1+false;//1 false->0
echo '<br/>';
echo 1+1.2;//2.2
echo '<br/>';
echo 1+'31k1ing';//13king 
//exit;//终止程序执行 
echo '<br/>';
echo 1+'sdflkjlskdfjlksdfjlkdsfj';//
echo '<br/>';
echo 1+'a3b4';//1
echo '<br/>';
echo 1+null;//null->0
echo '<hr/>';
//其他类型转换成字符串型
echo 123;
echo '<br/>';
echo 12.3;
echo '<br/>';
echo true;//true->字符串的1
echo '<br/>';
echo 'A'.false.'B';//false->空字符串
echo '<br/>';
echo 'C',null,'D';//null->空字符串
echo '<br/>';
echo '#',$sadklfjsdlkfjslkdf,'#';
echo '<hr/>';
//测试其他类型转换成布尔类型
$var=true;
//找出转换成布尔类型假的有?,其他都会转换成布尔类型的true
$var=123;
$var=0;//0->false
$var=-0.3;
$var=0.0;//0.0->false
$var='false';
$var='';//''->false
$var=' ';
$var='0';//'0'->false
$var='0.0';
//字符串中只要有内容，并且内容不为0的话，转换为true，'' '0'->false
$var=null;//null->false
$var=array();//空数组->false
$var=[0,false];
if($var){
	echo '真的<br/>';
}else{
	echo '假的<br/>';
}


echo '<hr/>';
$var='假';
$var="";
$var=array();//空数组
if($var){
	echo 'aa<br/>';
}else{
	echo 'bb<br/>';
}







