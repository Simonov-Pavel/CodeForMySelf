<?php

function strUp($str) {
	return $str = mb_strtoupper($str);
}

function firstLetterUp($str) {
	$firstLetter = mb_substr($str, 0, 1);
	$firstLetterUp = mb_strtoupper($firstLetter);
	return $str =  str_replace($firstLetter, $firstLetterUp, $str);
}