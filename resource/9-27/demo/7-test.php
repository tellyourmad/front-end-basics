<?php
//告诉浏览器以什么编码方式解析什么类型的文档
header('content-type:text/html;charset=utf-8');
$string='hello world';
echo $string;
echo '<hr/>';
$string1='你好';
echo $string1;
echo '<hr/>';
echo 'hello world','asdfsdfsf';
echo '<hr/>';
echo $string,$string1;
echo '<hr/>';

/*
PHP变量声明
注意：以$开始，后面跟上变量名称
变量名称以字母或者下划线开始，不要包含特殊字符
变量名称最好含义明确
变量名称最好遵循驼峰标记法或者下划线法
	驼峰：
		大驼峰：$UserEmail,$FirstName
		小驼峰：$userEmail,$firstName
	下划线法：
		$user_email
		$first_name
变量严格区分大小写
	$a
	$A
变量如果重名，会产生覆盖
PHP是弱类型语言，可以不用声明直接使用
*/
//$你好='king';
//echo $你好;

$a=123;
$A=546;
echo $a;
echo '<br/>';
echo $A;
echo '<hr/>';
$username='king';
$username='queen';
echo $username;
echo '<hr/>';
//Notice(通知，不是错误): Undefined variable: sdkfjlsdkfjlksdjflksdf in C:\xampp\htdocs\server\day01\demo\7-test.php on line 46
echo $sdkfjlsdkfjlksdjflksdf;//null
/*
去掉通知级别的错误，可以通过修改PHP的配置文件
php.ini,搜索error_reporting,在后面加上&~E_NOTICE
error_reporting=E_ALL & ~E_DEPRECATED & ~E_STRICT&~E_NOTICE

*/










