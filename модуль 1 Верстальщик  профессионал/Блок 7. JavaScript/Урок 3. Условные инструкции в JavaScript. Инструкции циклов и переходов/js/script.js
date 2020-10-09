var str = '<table>';
for(var i=1; i<10; i++){
	str += '<tr>';
	for(var j=1; j<10; j++){
		str += '<td>'+ i*j +'</td>';
	}
	str += '</tr>';
}
str += '</table>';
document.write(str);

var table = '<table class="tab">';
var i = 1;
var j = 1;
while(i<4){
	table += '<tr>';
	for(j=1; j<5; j++){
		table += '<td>' + '<br>'+i*j+'<br>' +'</td>';
	} 
	table += '</tr>';
	i++;
}
table += '</table>';
document.write(table);
