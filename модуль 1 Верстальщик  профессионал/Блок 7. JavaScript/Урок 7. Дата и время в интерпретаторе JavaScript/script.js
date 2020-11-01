
function displayTime(){
	var now = new Date();
	var clock = document.getElementById('clock');
	clock.innerHTML = now.toLocaleTimeString();
	setTimeout(displayTime,1000);
}
function NewYear(){
	var now = new Date();
	var newYear = new Date();
	newYear.setMonth(11,31);
	newYear.setHours(0,0,0,0);
	var year = now.getFullYear();
	var div = document.getElementById('NewYear');
	var timer = newYear.getTime() - now.getTime();
	var days = parseInt(timer/(24*60*60*1000));
	var hours = parseInt(timer/(60*60*1000))%24;
	if(hours<10) hours = '0'+ hours;
	var min = parseInt(timer/(60*1000))%60;
	if(min<10) min = '0'+ min;
	var sec = parseInt(timer/1000)%60;
	if(sec<10) sec = '0'+ sec;
	div.innerHTML ='Новый ' + year + ' год через ' + days +' дней '+ hours +' : ' + min + ' : ' + sec;
	setTimeout(NewYear,1000);
}
function Mode(){
	var now = new Date();
	var open = new Date();
	open.setHours(8,0,0,0);
	var close = new Date();
	close.setHours(20,0,0,0);
	var midNight = new Date();
	midNight.setHours(0,0,0,0);
	var mode = document.getElementById('mode');
	if(now.getTime()<open.getTime()||now.getTime()>close.getTime()){
		if(now.getTime()<midNight.getTime())
			var timer = (midNight.getTime() - now.getTime()) + open.getTime();
			else var timer = open.getTime() - now.getTime();

		var hours = parseInt(timer/(60*60*1000));
		if(hours<10) hours = '0'+ hours;
		var min = parseInt(timer/(60*1000))%60;
		if(min<10) min = '0'+ min;
		var sec = parseInt(timer/1000)%60;
		if(sec<10) sec = '0'+ sec;
		mode.innerHTML = 'До открытия ' + hours + ' : ' + min + ' : ' + sec;
	}
	else  var timer = close.getTime() - now.getTime();
	var hours = parseInt(timer/(60*60*1000));
	if(hours<10) hours = '0'+ hours;
	var min = parseInt(timer/(60*1000))%60;
	if(min<10) min = '0'+ min;
	var sec = parseInt(timer/1000)%60;
	if(sec<10) sec = '0'+ sec;
	mode.innerHTML = 'До закрытия ' + hours + ' : ' + min + ' : ' + sec;
	setTimeout(Mode,1000);
}
window.onload = displayTime();
window.onload = NewYear();
window.onload = Mode();