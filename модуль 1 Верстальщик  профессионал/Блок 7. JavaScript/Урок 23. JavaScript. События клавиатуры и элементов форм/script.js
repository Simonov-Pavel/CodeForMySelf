var form = document.getElementById('firstForm');

addEvent(form, 'keypress', func);

function addEvent(target, type, func){
	if(target.addEventListener) target.addEventListener(type, func, true);
	else if(target.attachEvent) targen.attachEvent('on'+type, func);
}

function func(e){
	e = e || window.event;
	if(e.keyCode == 13 || e.witch == 13){
		if(e.preventDefault) e.preventDefault();
		else if(e.returnValue) e.returnValue = false;
		else return false;
	}
}



/*<form method="post" onkeypress="if(event.keyCode == 13) return false;">
<input type="text"/>
<input type="submit"/>
</form>





<form method="post">
<input type="text"/>
<input type="submit"/>
</form>
<script type="text/javascript">
document.forms[0].onkeypress = function (a) {
    a = a || window.event;
    if (a.keyCode == 13 || a.which == 13)
    a.preventDefault ? a.preventDefault() : a.returnValue = false
};
</script>



form.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
       event.preventDefault();
    }
 });*/