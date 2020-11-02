var result;
var a = 10;
var b = 3;
result = a % b;
if(a % b == 0) result = 'Результат деления: ' + a/b;
else result = 'Остаток от деления ' + a + ' на ' + b + ' равен: ' + a % b;

document.getElementById('result').innerHTML = result;