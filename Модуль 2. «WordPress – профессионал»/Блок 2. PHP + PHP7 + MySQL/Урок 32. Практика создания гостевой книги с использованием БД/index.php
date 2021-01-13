<?php
session_start();
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
require_once 'conect.php';
require_once 'func.php';
$messages = get_mess();
if (isset($_GET['do']) && $_GET['do'] == 'exit') {
	setcookie('name', '$_COOKIE["name"]', time() - 3600, '/');
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel='stylesheet' href='style.css'>
	<title>Guest Book Mysqli</title>
</head>

<body>
	<h1>Гостевая книга</h1>
	<?php if (isset($_COOKIE['name']))
		echo '<h3>Добро пожаловать ' . $_COOKIE['name'] . '</h3><br><a href="index.php?do=exit">Выход</a>';
	else { ?>
		<div class='user'>
			<input type="radio" name='check' id='reg' checked>
			<label for="reg">
				<h3>Регистрация</h3>
			</label>
			<span>
				<h3>&frasl;</h3>
			</span>
			<input type="radio" name='check' id='auth'>
			<label for="auth">
				<h3>Авторизация</h3>
			</label>
			<div class="reg">
				<p class="error">
					<?php
					if (isset($_SESSION['error_reg'])) {
						echo $_SESSION['error_reg'];
						unset($_SESSION['error_reg']);
					}
					?>
				</p>
				<form action="index.php" method='post' name='reg'>
					<p>
						<label for="name">Ваше имя<span class='red'>*</span>:</label><br>
						<input type="text" name='name' id='name' required>
					</p>
					<p>
						<label for="email">Ваше email:</label><br>
						<input type="email" name='email' id='email'>
					</p>
					<p>
						<label for="password">Пароль<span class='red'>*</span>:</label><br>
						<input type="password" name='password' id='password' required>
					</p>
					<input type="submit" name='submit_reg' value='Зарегистрироваться'>
				</form>
			</div>
			<div class="auth">
				<p class="error">
					<?php
					if (isset($_SESSION['error_auth'])) {
						echo $_SESSION['error_auth'];
						unset($_SESSION['error_auth']);
					}
					?>
				</p>
				<form action="index.php" method='post' name='auth'>
					<p>
						<label for="name">Ваше имя<span class='red'>*</span>:</label><br>
						<input type="text" name='name' id='name' required>
					</p>
					<p>
						<label for="password">Пароль<span class='red'>*</span>:</label><br>
						<input type="password" name='password' id='password' required>
					</p>
					<input type="submit" name='submit_auth' value='Войти'>
				</form>
			</div>
		</div>
	<?php } ?>
	<form action="index.php" method='post' name='guestbook'>
		<p class="error">
			<?php
			if (isset($_SESSION['str'])) {
				echo $_SESSION['str'];
				unset($_SESSION['str']);
			}
			?>
		</p>
		<p>
			<label for="text">Сообщение<span class=red>*</span>:</label><br>
			<textarea name="text" id="text" cols="50" rows="10" required></textarea>
		</p>
		<input type="submit" name='submit_text' value='Добавить'>
	</form>
	<p>
		<span class=red>*</span> - Обязательно для заполнения
	</p>

	<?php if (!empty($messages)) { ?>
		<hr>
		<div class="messages">
			<?php foreach ($messages as $message) { ?>
				<div class="message">
					<p class='message__author'><?= mb_convert_case($message['name'], MB_CASE_TITLE, 'UTF-8') ?></p><br>
					<p class='message__text'><?= nl2br(htmlspecialchars($message['text'])) ?><br><span><?= $message['time'] ?></span></p>
				</div>
			<?php } ?>
		</div>
	<?php } ?>
</body>

</html>