var show = document.getElementById('show');
var over = document.getElementById('overflow');
var close = document.getElementById('popup__close');
var tIn, tOut;
show.onclick = popup;
close.onclick = popupClose;
function popup(){
	over.style.display = 'flex';
	popupIn(1);
}
function popupClose(){
	popupOut(0);
}
function popupIn(x){
	var op = (over.style.opacity) ? parseFloat(over.style.opacity) : 0;
	if(op < x){
		clearInterval(tOut);
		op += 0.05;
		over.style.opacity = op;
		tIn = setTimeout(function(){
			popupIn(x);
		},100);
	}
}
function popupOut(x){
	var op = (over.style.opacity) ? parseFloat(over.style.opacity) : 1;
	if(op > x){
		clearInterval(tIn);
		op -= 0.05;
		over.style.opacity = op;
		tOut = setTimeout(function(){
			popupOut(x);
		},100);
	}
	if(over.style.opacity == 0){
		over.style.display = 'none'
	}
}

