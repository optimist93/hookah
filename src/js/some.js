$(function() {

	$('.interior-slider').slick({
		infinite: true,
		slidesToShow: 3.1,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"><i class="zmdi zmdi-chevron-right"></i></div>',
		prevArrow: '<div class="arrow arrow_left"><i class="zmdi zmdi-chevron-left"></i></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2.1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1.1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.news-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"><i class="zmdi zmdi-chevron-right"></i></div>',
		prevArrow: '<div class="arrow arrow_left"><i class="zmdi zmdi-chevron-left"></i></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1.1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Флаг включённости слайдера
var slickSliderActive = false;
var tabBtn = $('.menu-header__item');
//console.log(tabBtn[0]);

// Включение или выключение слайдера (в зависимости от ширины)
function checkSlider(){    
  
  // Если вьюпорт уже чем 768 
  if($(window).width() < 768 - getScroll()){
    
    // Если флаг включённости опущен, то включим и поднимем флаг
    if(slickSliderActive == false){
      $('.menu-tabcontent__list').slick({
        dots: false,
        slidesToShow: 2.1,
				slidesToScroll: 1,
				nextArrow: '<div class="arrow arrow_right"><i class="zmdi zmdi-chevron-right"></i></div>',
		prevArrow: '<div class="arrow arrow_left"><i class="zmdi zmdi-chevron-left"></i></div>',
				responsive: [
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1.1,
							slidesToScroll: 1
						}
					}
				]
			});
			$('.menu-header__item').on('click', function(){
				console.log('click');
				if($('.menu-tabcontent').is(':visible')){
					setTimeout(function(){
						$('.menu-tabcontent__list').slick('setOption');
						$(window).resize();
					},0);
					console.log('done');
				}
			});
      slickSliderActive = true;
    }
  // Иначе (вьюпорт НЕ уже чем 768)
  } else {
    
    // Если флаг включённости поднят, выключаем и опускаем флаг
    if(slickSliderActive){
      $('.menu-tabcontent__list').slick('unslick');
      slickSliderActive = false;
    }
    
  }
}
// По готовности DOM...
// $(document).ready(function(){
  checkSlider();
// });

// По любому изменению размера вьюпорта...
$(window).on('resize', function(){
   checkSlider();
});

function getScroll(){
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollWidth;
}

}); // end jquery