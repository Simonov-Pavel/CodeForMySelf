$(document).ready(function () {
	$('.carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		navText: [],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			680: {
				items: 3
			}
		}
	});

	$('.carousel2').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		navText: [],
		responsive: {
			0: {
				items: 2
			},
			480: {
				items: 4
			}
		}
	});

	var btnUp = document.querySelector('.btn-up');


	btnUp.addEventListener('click', backToTop);
	window.addEventListener('scroll', scrollDown);

	function scrollDown() {
		var scrol = window.pageYOffset;
		var coordinat = document.documentElement.clientHeight;

		if (scrol > coordinat) btnUp.classList.add('btnUp-show');
		if (scrol < coordinat) btnUp.classList.remove('btnUp-show');
	}

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -40);
			setTimeout(backToTop, 0);
		}
	}

});