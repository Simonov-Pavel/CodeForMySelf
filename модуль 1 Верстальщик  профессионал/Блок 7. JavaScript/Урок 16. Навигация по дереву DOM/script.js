var arr = document.querySelectorAll('a');

for(i=0; i<arr.length; i++){
	console.log(document.links[i].className = 'links'+i);
	console.log(document.querySelector('.links'+i).parentNode);
}
