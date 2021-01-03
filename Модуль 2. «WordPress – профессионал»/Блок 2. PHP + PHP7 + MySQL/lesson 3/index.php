<?php
	error_reporting(-1);

	$text = 'Какой то текст'; // объявление переменной
	define('TITLE', 'lesson 3'); //Объявление константы
	const TITLE_H = 'PHP переменные и константы'; //Объявление константы(версия PHP выше 5.3 и обязательно вверху)
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo TITLE; ?></title>
</head>
<body>
	<h1 style='text-align:center'><?php echo TITLE_H; ?></h1>
	<p><?php echo "{$text}str"; ?></p>
</body>
</html>