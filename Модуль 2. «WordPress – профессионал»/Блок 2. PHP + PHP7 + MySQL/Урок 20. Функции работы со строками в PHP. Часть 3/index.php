<?php
error_reporting(-1);
require_once 'func.php';

$str = 'minsk';
echo strUp($str);
echo "<br>";

$str = 'минск';
echo firstLetterUp($str);
echo "<br>";

$str ='MINSK';
echo $str = str_replace(mb_substr($str, 1), strtolower(mb_substr($str, 1)), $str);
?>