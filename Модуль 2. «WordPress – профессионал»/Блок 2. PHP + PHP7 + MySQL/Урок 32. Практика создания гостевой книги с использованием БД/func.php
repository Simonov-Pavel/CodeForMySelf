<?php

function escape()
{
	global $db;
	foreach ($_POST as $key => $value) {
		$_POST[$key] = mysqli_real_escape_string($db, $value);
	}
}
if (isset($_POST['submit_text'])) {
	if (!isset($_COOKIE['name'])) {
		$_SESSION['str'] = 'Вы не авторизованны';
	} else {
		global $db;
		escape();
		extract($_POST);
		$name = mb_convert_case($_COOKIE['name'], MB_CASE_TITLE);
		//$name = mysqli_real_escape_string($db, $_POST['name']);
		//$text = mysqli_real_escape_string($db, $_POST['text']);
		$query = "INSERT INTO `db` (name, text) VALUES ('$name', '$text')";
		$res = mysqli_query($db, $query);
		$_SESSION['str'] = 'Сообщение успешно добавленно';
		header('Location: index.php');
		die;
	}
}

if (isset($_POST['submit_reg'])) {
	global $db;
	escape();
	extract($_POST);
	$sel = "SELECT `name` FROM `user` WHERE name='$name'";
	$res = mysqli_query($db, $sel);
	if (mysqli_num_rows($res) == 0) {
		$query = "INSERT INTO `user` (name, email, password) VALUES ('$name', '$email', '$password')";
		mysqli_query($db, $query);
		if ($query) {
			$_SESSION['error_reg'] = 'Вы зарегистрированны и можете авторизоваться';
		} else $_SESSION['error_reg'] = 'НЕ ИЗВЕСТНАЯ ОШИБКА<br>попробуйте позже';
	} else $_SESSION['error_reg'] = 'Имя занято';
	header('Location: index.php');
	die();
}


if (isset($_POST['submit_auth'])) {
	global $db;
	escape();
	extract($_POST);
	$sel = "SELECT * FROM `user` WHERE name='$name' AND password='$password'";
	$res = mysqli_query($db, $sel);
	if (mysqli_num_rows($res) == 1) {
		setcookie('name', mb_convert_case($name, MB_CASE_TITLE, 'UTF-8'), time() + 3600, '/');
		$_SESSION['error_auth'] = 'Вы успешно авторизовались';
	} else $_SESSION['error_auth'] = 'Не верно введен логин и/или пароль<br>проверьте данные или зарегистрируйтесь';
	header('Location: index.php');
	die();
}


function get_mess()
{
	global $db;
	$query = "SELECT * FROM `db` ORDER BY `id` DESC";
	$res = mysqli_query($db, $query);
	return mysqli_fetch_all($res, MYSQLI_ASSOC);
}
