$(function() {

	$('.interior-slider').slick({
		infinite: true,
		slidesToShow: 3.1,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"><i class="zmdi zmdi-chevron-right"></i></div>',
		prevArrow: '<div class="arrow arrow_left"><i class="zmdi zmdi-chevron-left"></i></div>'
	});

	$('.news-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"><i class="zmdi zmdi-chevron-right"></i></div>',
		prevArrow: '<div class="arrow arrow_left"><i class="zmdi zmdi-chevron-left"></i></div>'
	});

}); // end jquery