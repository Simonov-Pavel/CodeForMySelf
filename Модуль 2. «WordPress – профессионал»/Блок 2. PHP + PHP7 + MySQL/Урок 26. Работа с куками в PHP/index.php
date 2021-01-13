<?php
setcookie('test', 'My Cookie', time()+3600*24, '/');
setcookie('test2', 'Cookie Test', time()+3600*24, '/');
setcookie('test3', 'Cookie');
setcookie('test2', '', time()-3600, '/');

isset($_COOKIE['counter'])? setcookie('counter', ++$_COOKIE['counter'], time()+3600, '/'): setcookie('counter', 1, time()+3600, '/');
echo isset($_COOKIE['counter']) ? $_COOKIE['counter'] : 1;
echo "<br>";

echo $_COOKIE['test'];

echo "<br>";

echo $_COOKIE['test2'];

echo "<br>";

echo $_COOKIE['test3'];
?>