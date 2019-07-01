<?php
//魔术常量
//__LINE__:得到当前的行号
//__FILE__:得到当前文件所在的绝对路径包含文件名
//__DIR__:得到当前文件所在的绝对路径









echo __LINE__;
echo '<hr/>';
echo __FILE__;
echo '<hr/>';
echo __DIR__;
//定义一个ROOT常量，值为C:\xampp\htdocs\server\day01\demo
echo '<hr/>';

echo __DIR__;
echo '<hr/>';
echo __FILE__;
echo '<hr/>';
echo __LINE__;
echo '<hr/>';
define('ROOT',__DIR__);
const ROOT1='__DIR__';
echo ROOT;
echo '<hr/>';
echo ROOT1;









