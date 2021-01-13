<?php

if(!empty($_POST)){
	put_message();
	header('Location: index.php');
	die;
}

function put_message() {
	$str = htmlspecialchars($_POST['name']) . "|" . htmlspecialchars($_POST['text']) . "|" . date('d.m.Y H:i') . "\n***\n";
	file_put_contents(FILE, $str, FILE_APPEND);
}

if(file_exists(FILE)) {
	$messages = file_get_contents(FILE);
	$messages = explode("\n***\n", $messages);
	array_pop($messages);
	$messages = array_reverse($messages);
}