$(document).ready(function () {

	const menuBtn = document.querySelector('.menu__btn');
	const body = document.querySelector('body');

	menuBtn.addEventListener('click', function (event) {
		event.stopPropagation();
		this.classList.toggle('menu__btn--active');
	});

	body.addEventListener('click', function (event) {
		menuBtn.classList.remove('menu__btn--active');
	});

});