<?php
//告诉浏览器以什么编码方式解析什么类型的文档
header('content-type:text/html;charset=utf-8');
$username='king';
echo "我的名字是：$username";
echo '<hr/>';
echo '我的名字是：$username';
//单引号不解析变量
//双引号解析变量
echo '<hr/>';
echo "我的名字是{$username}";
//PHP支持的数据类型
//string integer float boolean
/*
8种主要数据类型
标量类型：
	整型：int|integer:整数，123,-12,存储范围-21亿~21亿，
	0~42亿
	浮点：float|double|real:浮点数,12.3,-123.456,2E3,2e-3
	字符串：string:内容需要写到定界符之间，'sfsdfsdf' "sdfsdfdsfdfs" 
	布尔：bool|boolean:布尔类型，true|TRUE,false|FALSE
复合类型：
	array:数组
	object:对象
特殊类型：
	resource:资源
	null|NULL:空
*/










