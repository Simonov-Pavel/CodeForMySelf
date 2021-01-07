<?php
	const TITLE = 'Урок 9';
	const TITLE_H = 'Массивы в PHP';
	error_reporting(-1);
	$goods = [
		[
			'title' => 'Nokia',
			'price' => '$100',
			'description' => 'Description'
		],
		[
			'title' => 'Savsung',
			'price' => '$200',
			'description' => 'Description...description'
		],
		[
			'title' => 'iPad',
			'price' => '$400',
			'description' => 'Description description description description'
		]
	];
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel='stylesheet' href='style.css'>
	<title><?php echo TITLE;?></title>
</head>
<body>
	<h1><?php  echo TITLE_H; ?></h1>
	<section id='goods'>

	<?php
		$i = 0;
		while ($i < 3) {
			echo "<div class='goods'><h3>" . $goods[$i]['title'] . "</h3>";
			echo "<p class='price'>" . $goods[$i]['price'] . "</p>";
			echo "<p class='description'>" . $goods[$i]['description'] . "</p></div>";
			$i++;
		}
	?>
	</section>
	
</body>
</html>