<?php
	error_reporting(-1);
	echo "<select>";
	for($i = 1900; $i <= 2020; $i++) {
		echo "<option>$i</option>";		
	}
	echo "</select>";


	echo "<table>";
	for($i = 1; $i < 10; $i++){
		echo "<tr>";
		for($j = 1; $j < 10; $j++){
			echo "<td style='border: 1px solid #000'>". $j *$i ."</td>";
		}
		echo "</tr>";
	}
	echo "</table>";

