<?php
error_reporting(-1);
session_start();
if(isset($_GET['do']) && $_GET['do'] == 'exit'){
	unset($_SESSION['admin']);
}
if(!isset($_SESSION['admin'])) die("Вы не авторизованны!<a href='sess1.php'>Авторизоваться?</a>");

echo "<h3>Добро пожаловать {$_SESSION['admin']}</h3>";

?>
<p><a href="secret.php?do=exit" title='Выход'>Logaut</a></p>
<ul></ul>
	<li>
		<a href="sess1.php">sess1</a>
	</li>
	<li>
		<a href="sess2.php">sess2</a>
	</li>
	<li>
		<a href="secret.php">secret</a>
	</li>
</ul>