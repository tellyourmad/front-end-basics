<?php
//告诉浏览器以什么编码方式解析什么类型的文档
//把header写到文档的头部即可，在header不要有任何输出
header('content-type:text/html;charset=utf-8');
//单行注释var username='king';
# 注释内容
/*多行注释*/
//声明变量
$username='king';
$age=22;
$email='382771946@qq.com';
$salary=1234567.89;
$married=true;
//echo 输出一个或者多个字符串
echo $username;
echo '<br/>';
echo $age;
echo '<br/>';
//输出多个字符串的时候以,分隔
echo '用户名为：',$username,'<br/>','!';
echo '年龄：',$age,'<br/>';
echo '邮箱为：';
echo $email;




















