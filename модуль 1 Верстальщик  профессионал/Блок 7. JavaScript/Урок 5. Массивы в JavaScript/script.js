var table = new Array(4);
for(var i = 0; i < table.length; i++){
	table[i] = new Array(5);
}
for(var row = 0; row < table.length; row++){
	for(var col = 0; col < table[row].length; col++){
		table[row][col] = row*col;
	}
}
alert(table[3][4]);
