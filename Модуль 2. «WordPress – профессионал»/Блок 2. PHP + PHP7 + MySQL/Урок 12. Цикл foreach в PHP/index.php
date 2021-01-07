<?php
	error_reporting(-1);

	//1. Имеется массив $arr с последовательностью от 1 до 10:
	//Подсчитайте сумму всех чисел последовательности. Попробуйте решить задачу двумя способами, с использованием цикла и без него.
	$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	$sum = 0;
	for($i = 0; $i < count($arr); $i++) {
		$sum += $arr[$i];
	}
	echo $sum . "<br>";

	echo array_sum($arr) . "<br>";


	//2.
	$arr = [

		'ru'=>['голубой', 'красный', 'зеленый'],

		'en'=>['blue', 'red', 'green'],

	];

	
	foreach($arr as $k => $v){
		$color = '';
		foreach($v as $colors){
			$color .= $colors . ",";
		}
		$color = rtrim($color, ",\t\n");
		echo "Цвета с кодом $k: $color<br>";
	}
