$(document).ready(function () {
    svg4everybody({});
    let portfolioSlider = function() {
    	$('.js-portfolio-slider').slick({
    		slidesToShow: 3,
    		prevArrow: '.slider-nav--prev',
    		nextArrow: '.slider-nav--next'
    	});
    };
    let tabs = function () {
        $('.tabs-item').click(function(){
            let tabName = $(this).attr('show-tab');
            $(this).addClass('tabs-item--active').siblings().removeClass('tabs-item--active ');
            $('.tabs-body .' + tabName).addClass('tab--active').siblings().removeClass('tab--active');
        });
    };
    let bigSlider = function() {
    	 $('.js-slider-big').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.js-slider-small'
		});
		$('.js-slider-small').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.js-slider-big',
		  vertical: true,
		  focusOnSelect: true,
		  arrows: false
		});	
    };
    portfolioSlider();
    tabs();
    bigSlider();
});