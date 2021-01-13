<?php

header("Content-type: text/html; charset=utf-8");
error_reporting(-1);
session_start();
require_once 'connect.php';
require_once 'funcs.php';

if(isset($_GET['do']) && $_GET['do'] == 'exit'){
	unset($_SESSION['user']);
	header("Location: {$_SERVER['PHP_SELF']}");
	exit;
}

if(isset($_POST['register'])){
	registration();
	header("Location: {$_SERVER['PHP_SELF']}");
	exit;
}

if(isset($_POST['auth'])){
	login();
	header("Location: {$_SERVER['PHP_SELF']}");
	exit;
}

if(isset($_POST['add'])){
	save_mess();	
	header("Location: {$_SERVER['PHP_SELF']}");
	exit;
}

$messages = get_mess();

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Гостевая книга</title>


	<style>
	
	.message{
		border: 1px solid #ccc;
		padding: 10px;
		margin-bottom: 20px;
	}

</style>

</head>
<body>

	<?php if(isset($_SESSION['errors'])): ?>
		<div style="border: 1px solid red; padding: 10px;">
			<?php echo $_SESSION['errors']; unset($_SESSION['errors']); ?>
		</div>
	<?php endif; ?>

	<?php if(isset($_SESSION['success'])): ?>
		<div style="border: 1px solid green; padding: 10px;">
			<?php echo $_SESSION['success']; unset($_SESSION['success']); ?>
		</div>
	<?php endif; ?>

	<?php if(empty($_SESSION['user']['name'])): ?>
		<h2>Регистрация</h2>
		<form action="index.php" method="post">
			<p>
				<label for="name">Имя:</label><br>
				<input type="text" name="login" id="name">
			</p>
			<p>
				<label for="password">Пароль:</label><br>
				<input type="password" name="password" id="password">
			</p>
			<button type="submit" name="register">Зарегистрироваться</button>
		</form>

		<h2>Авторизация</h2>
		<form action="index.php" method="post">
			<p>
				<label for="name">Имя:</label><br>
				<input type="text" name="login" id="name">
			</p>
			<p>
				<label for="password">Пароль:</label><br>
				<input type="password" name="password" id="password">
			</p>
			<button type="submit" name="auth">Авторизоваться</button>
		</form>

		<?php else: ?>
			<?php echo "Hello, " . htmlspecialchars($_SESSION['user']['name']) . " <a href='?do=exit'>Logout</a>" ?>
			<form action="index.php" method="post">
				<p>
					<label for="text">Текст:</label><br>
					<textarea name="text" id="text"></textarea>
				</p>
				<button type="submit" name="add">Написать</button>
			</form>
		<?php endif; ?>

		<hr>

		<?php if(!empty($messages)): ?>
			<?php foreach($messages as $message): ?>
				<div class="message">
					<p>Автор: <?=htmlspecialchars($message['name'])?> | Дата: <?=$message['date']?></p>
					<div><?=nl2br(htmlspecialchars($message['text']))?></div>
				</div>
			<?php endforeach; ?>
		<?php endif; ?>

	</body>
	</html>