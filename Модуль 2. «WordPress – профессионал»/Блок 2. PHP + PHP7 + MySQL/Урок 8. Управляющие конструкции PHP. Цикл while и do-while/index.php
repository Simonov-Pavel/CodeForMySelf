<?php
	error_reporting(-1);
	define('TITLE', 'Урок 7');
	define('TITLE_H', 'Управляющие конструкции PHP. Условия');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel='stylesheet' href='style.css'>
	<title><?php echo TITLE;  ?></title>
</head>
<body>
	<h1><?php echo TITLE_H; ?></h1>
	<table>
	<?php
		$row = 1;
		while($row < 10) {
			echo "<tr>";
			$col = 1;
			while($col < 10) {
				echo "<td>".$row * $col."</td>";
				$col++;
			}
			echo "</tr>";
			$row++;
		}
	?>
	</table>
</body>
</html>