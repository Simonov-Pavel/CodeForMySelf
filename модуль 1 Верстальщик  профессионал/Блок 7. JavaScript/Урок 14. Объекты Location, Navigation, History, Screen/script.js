window.onload = function(){
	window.location = 'http://google.com/index.php?param1=sometext&m2=sometext2 ';
	function urlArgum(){
		var args={};
		var query = window.location.search.substring(1);
		alert(query);
	}
	urlArgum();
}