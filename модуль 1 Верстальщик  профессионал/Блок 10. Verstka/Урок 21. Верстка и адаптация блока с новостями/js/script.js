$(document).ready(function () {
	$('.slider .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		navText: [],
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false
			},
			480: {
				items: 1
			}
		}
	});

	$('.carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
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
			},
			1024: {
				items: 4
			}
		}
	});

	$('.carousel2').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
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
			},
		}
	});

	$('.carousel3').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		navText: [],
		responsive: {
			0: {
				items: 1
			},
			580: {
				items: 2
			}
		}
	});


});