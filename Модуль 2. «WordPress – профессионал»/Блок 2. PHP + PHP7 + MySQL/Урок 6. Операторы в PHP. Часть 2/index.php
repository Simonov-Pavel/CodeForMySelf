<?php
	error_reporting(-1);
	define('TITLE', 'Урок 6');
	define('TITLE_H', 'Операторы в PHP');
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
	<?php
		$min = 60;
		$hour = 60 * $min;
		$day = 24 * $hour;
		$week = 7 * $day;
		echo "В одном часе $hour секунд<br>В сутках $day секунд<br>В неделе $week секунд";

		$var = 1;
		$var += 12;
		$var -= 14;
		$var *= 5;
		$var /= 7;
		$var++;
		$var--;
	?>
</body>
</html>