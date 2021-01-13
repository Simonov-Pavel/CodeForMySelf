<?php
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
const TITLE = 'Урок 24';
const TITLE_H = 'Загрузка файлов в PHP';
if(!empty($_FILES)) {
	move_uploaded_file($_FILES['file']['tmp_name'], 'upload/'.$_FILES['file']['name']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo TITLE; ?></title>
</head>
<body>
	<h1><?php echo TITLE_H; ?></h1>
	<form action="#" method='post' enctype='multipart/form-data'>
		<p>Name:
			<input type="text" name='name'>
		</p>
		<p>
			<input type="file" name='file'>
		</p>
		<p>
			<input type="submit" name='submit'>
		</p>
	</form>
</body>
</html>