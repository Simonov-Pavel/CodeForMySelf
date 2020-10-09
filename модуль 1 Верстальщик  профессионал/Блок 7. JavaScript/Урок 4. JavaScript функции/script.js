function fact(x){
	if(x<=1) return 1;
	return x * fact(x-1);
}
var x = 4;
document.write('Факториал числа '+x+' равен '+ fact(x));	
