$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
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

});