function urlArg(){
	var args = {};
	var url = 'http://google.com/index.php?param1=sometext&m2=sometext2 ';
	var query = url.split('?');
	query = query[1];
	var parts = query.split('&');
	for(var i = 0; i<parts.length; i++){
		var pos = parts[i].indexOf('=');
		if(pos == -1){ continue;}
		var name = parts[i].substring(0,pos);
		var value = parts[i].substring(pos+1);
		args[name] = value;
	} 
	return args;
}
var obj = urlArg();
console.log(obj);
