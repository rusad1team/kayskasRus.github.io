$(document).ready(function () {

$('.js-sert-slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
        {
          breakpoint: 480,
          settings: {
            adaptiveHeight: true,
          }
        }
      ]
});

let sanwichToggle = function() {
    $('.sandwich').click(function(){
       $('.sandwich-line').toggleClass('sandwich--active');
       $('.nav-wrapper').fadeToggle('slow'); 
    });
};
sanwichToggle();
});

