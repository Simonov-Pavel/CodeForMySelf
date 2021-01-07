<?php
	function maxInt($x, $y){
		if(is_int($x) && is_int($y)){
			switch($x){
				case ($x < $y): return $y; break;
				case ($x > $y): return $x; break;
				default: return "Числа $x и $y равны"; break;
			}
		}
		else return "Один из параметров не число, проверьте введеные данные";
	}

	function month($x) {
		$arr = [1 =>'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'фвгуст', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
		if($x > 0 && $x <= 12 && is_int($x)) return $arr[$x];
		else return "Проверьте правильность введеных данных";
	}
?>