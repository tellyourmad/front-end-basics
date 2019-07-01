<?php
//预定义变量的例子
/*
$_GET:HTTP GET接收地址栏以?形式传递的参数
$_POST:HTTP POST, 接收表单以post方式发送的数据
$_REQUEST:$_GET+$_POST+$_COOKIE
*/
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>注册页面</h1>
	<form action="doAction.php" method='get'>
		<table border='1' cellpadding='0' cellspacing='0' bgcolor='#ABCDEF' width='80%'>
			<tr>
				<td>用户名</td>
				<td><input type="text" name="username" placeholder='请输入合法用户名' id=""></td>
			</tr>
			<tr>
				<td>密码</td>
				<td><input type="password" name="password" id="" placeholder='请输入密码'></td>
			</tr>
			<tr>
				<td>邮箱</td>
				<td><input type="email" name="email" id="" placeholder='请输入合法邮箱'></td>
			</tr>
			<tr>
				<td colspan='2'><input type="submit" value="注册"></td>
			</tr>
		</table>
	</form>
</body>
</html>