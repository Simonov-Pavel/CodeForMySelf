<?php
error_reporting(-1);
header ("Content-Type: text/html; charset=utf-8");
define('TITLE','Урок 23');
define('TITLE_H','Методы GET и POST в PHP');
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo TITLE; ?></title>
</head>
<body style="text-align:center">
	<h1><?php echo TITLE_H; ?></h1>
	<?php
	empty($_POST['submit'])? require_once 'form.php': require_once 'active.php';
	 ?>
</body>
</html>