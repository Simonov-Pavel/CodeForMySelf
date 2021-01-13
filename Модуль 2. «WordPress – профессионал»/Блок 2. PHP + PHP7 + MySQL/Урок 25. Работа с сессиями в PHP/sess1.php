<?php
error_reporting(-1);
session_start();
define('ADMIN', 'admin');
if(isset($_POST['login'])) {
	if($_POST['login'] === ADMIN) {
		$_SESSION['admin'] = ADMIN;
		$_SESSION['res'] = 'Вы успешно авторизовались!';
	}
	else{
		$_SESSION['res'] = 'Логин не верный!';
	} 
	header('Location: sess1.php');
	die;
}
?>

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
<hr>
<h3>Авторизация</h3>
<?php
if(isset($_SESSION['res'])){
	echo $_SESSION['res'];
	unset($_SESSION['res']);
}
?>
<form action="#" method='post'>
	<input type="text" name='login'>
	<input type="submit" value='login'>
</form>