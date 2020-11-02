var week = {
	0 : 'Воскресенье',
	1 : 'Понедельник',
	2 : 'Вторник',
	3 : 'Среда',
	4 : 'Четверг',
	5 : 'Пятница',
	6 : 'Суббота'
}
var date = new Date();
var day = date.getDay();
var result = week[day];
document.getElementById('result').innerHTML = 'Сегодня ' + result;
