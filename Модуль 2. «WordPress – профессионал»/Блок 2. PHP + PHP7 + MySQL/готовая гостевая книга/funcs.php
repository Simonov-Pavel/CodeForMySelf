<?php

function clear(){
	global $db;
	foreach ($_POST as $key => $value) {
		$_POST[$key] = mysqli_real_escape_string($db, trim($value));
	}
}

function save_mess(){
	global $db;
	if(!isset($_SESSION['user']['name'])){
		$_SESSION['errors'] = 'Необходимо авторизоваться';
		return false;
	}
	// clear();
	// extract($_POST);
	$name = mysqli_real_escape_string($db, $_SESSION['user']['name']);
	$text = mysqli_real_escape_string($db, $_POST['text']);
	$query = "INSERT INTO gb (name, text) VALUES ('$name', '$text')";
	mysqli_query($db, $query);
}

function get_mess(){
	global $db;
	$query = "SELECT * FROM gb ORDER BY id DESC";
	$res = mysqli_query($db, $query);
	return mysqli_fetch_all($res, MYSQLI_ASSOC);
}

function print_arr($arr){
	echo '<pre>' . print_r($arr, true) . '</pre>';
}

function registration(){
	global $db;
	clear();
	extract($_POST);
	if(empty($login)){
		$_SESSION['errors'] = 'Выберите другое имя';
		return false;
	}
	$query = "SELECT login FROM user WHERE login = '$login'";
	$res = mysqli_query($db, $query);
	if(mysqli_num_rows($res)){
		$_SESSION['errors'] = 'Выберите другое имя';
		return false;
	}

	$password = password_hash($password, PASSWORD_DEFAULT);
	$query = "INSERT INTO user (login, password) VALUES ('$login', '$password')";
	$res = mysqli_query($db, $query);
	$_SESSION['success'] = 'Вы зарегистрировались. Авторизуйтесь, пожалуйста.';
	return true;
}

function login(){
	global $db;
	clear();
	extract($_POST);
	$query = "SELECT * FROM user WHERE login = '$login' LIMIT 1";
	$res = mysqli_query($db, $query);

	if(mysqli_num_rows($res)){
		$row = mysqli_fetch_assoc($res);
		if (!password_verify($password, $row['password'])){
			$_SESSION['errors'] = 'Ошибка авторизации';
			return false;
		}
	}else{
		$_SESSION['errors'] = 'Ошибка авторизации';
		return false;
	}

	$_SESSION['user']['name'] = $row['login'];
	return true;
}