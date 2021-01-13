<?php
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
define('FILE', 'guestbook.txt');
require_once 'func.php';
?>

<!DOCTYPE html>
<html lang='en'>

<head>
	<meta charset='UTF-8'>
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
	<link rel='stylesheet' href='style.css'>
	<title>Guest Book</title>
</head>

<body>
	<h1>Гостевая книга</h1>
	<form action="index.php" method='post' name='guestbook'>
		<p>
			<label for="name">Ваше имя<span class=red>*</span>:</label><br>
			<input type="text" id='name' name='name' required>
		</p>
		<p>
			<label for="text">Сообщение<span class=red>*</span>:</label><br>
			<textarea name="text" id="text" cols="50" rows="10" required></textarea>
		</p>
		<input type="submit" name='submit' value='Добавить'>
	</form>
	<p>
		<span class=red>*</span> - Обязательно для заполнения
	</p>

	<?php if (!empty($messages)) { ?>
		<hr>
		<div class="messages">
			<?php foreach ($messages as $message) { ?>
				<?php $message = explode('|', $message); ?>
				<div class="message">
					<p class='message__author'><?= mb_convert_case($message[0], MB_CASE_TITLE, 'UTF-8') ?></p><br>
					<p class='message__text'><?= nl2br($message[1]) ?><br><span><?= $message[2] ?></span></p>
				</div>
			<?php } ?>
		</div>
	<?php } ?>
</body>

</html>