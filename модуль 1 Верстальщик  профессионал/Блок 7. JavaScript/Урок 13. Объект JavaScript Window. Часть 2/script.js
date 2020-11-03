var op = document.getElementById('openWindow');
var cl = document.getElementById('closeWindow');
var wind;
op.onclick = function(){
	wind = window.open(
			'https://google.com',
			'google.com',
			'width=300,height=300,resizable=no,scrollbars=no,status=no,left=300,top=300,menubar=no,toolbar '
		);
}
cl.onclick = function(){
	if(typeof wind == 'object'){
		wind.close();
	}
}
