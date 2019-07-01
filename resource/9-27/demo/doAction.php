<?php
header('content-type:text/html;charset=utf-8');
//接收表单发送过来的数据
//$username=$_POST['username'];
//$password=$_POST['password'];
//$email=$_POST['email'];
//echo '用户名为：',$username,'<br/>';
//echo '密码为：',$password,'<br/>';
//echo '邮箱为：',$email,'<br/>';
/*
http://localhost/server/day01/demo/doAction.php
?username=king&password=123&email=456%40qq.com
以?号形式传递的数据，通过$_GET['名称']来接收
*/
//$username=$_GET['username'];
//$password=$_GET['password'];
//$email=$_GET['email'];
//echo $username,'--',$password,'--',$email;

//$_REQUEST:$_GET+$_POST+$_COOKIE
$username=$_REQUEST['username'];
$password=$_REQUEST['password'];
$email=$_REQUEST['email'];
echo $username,'-',$password,'-',$email;
//书写注册页面，通过post形式接收数据
//$_POST,$_GET,$_REQUEST




