<?php
header('content-type:text/html;charset=utf-8');
$username=$_POST['username'];
$pwd=$_POST['pwd'];
$email=$_POST['email'];
echo '用户名为：',$username,'<br/>';
echo '密码：',$pwd,'<br/>';
echo '邮箱：',$email,'<br/>';