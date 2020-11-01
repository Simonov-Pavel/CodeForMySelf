var str = document.getElementById('header').innerHTML;
var result = str.replace(/\s/g,'+');
var result2 =str.split(' ');
document.getElementById('result').innerHTML = result + ' result';
document.getElementById('result2').innerHTML = result2 + ' result2';