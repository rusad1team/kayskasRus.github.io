$(document).ready(function () {
//скролл
$('.nav-link').click(function (){
var elementClick = $(this).attr("href");
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});


let waterWill = function() {
	var carousel = $("#waterwheel-carousel").waterwheelCarousel({
	    flankingItems: 3,
	    separation:  250,
	  });

	  $('#prev').bind('click', function () {
	    carousel.prev();
	    return false
	  });

	  $('#next').bind('click', function () {
	    carousel.next();
	    return false;
	  });
}


//rev slider
let revSlider = function() {
	$('.js-rev-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.prev',
    nextArrow: '.next',
    focusOnSelect: true,
    centerMode: true,
    centerPadding: 0,
     responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

}
  
//youtube bg 

$('[data-youtube]').youtube_background({
	'play-button': true,
	'autoplay': false
});


//sandwich
let sanwichToggle = function() {
        $('.sandwich').click(function(){
           $('.sandwich-line').toggleClass('sandwich--active');
           $('.nav-wrapper').fadeToggle('slow'); 
        });
         $('.nav-link').click(function(){
           $('.sandwich-line').toggleClass('sandwich--active');
           $('.nav-wrapper').fadeToggle('slow'); 
        });
    };

 if( window.innerWidth <= 800 ){
      sanwichToggle();
 } else {
      //не выполнять
 } 

waterWill();
revSlider();

});


/* jquery.youtube-background v1.0.7 | Nikola Stamatovic <@stamat> | MIT */



