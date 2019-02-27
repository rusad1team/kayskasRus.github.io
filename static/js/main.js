$(document).ready(function () {
    svg4everybody({});
    let portfolioSlider = function() {
    	$('.js-portfolio-slider').slick({
    		slidesToShow: 3,
    		prevArrow: '.slider-nav--prev',
    		nextArrow: '.slider-nav--next',
            responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    autoplay: true,
                     centerMode: true
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    centerMode: true
                  }
                },
              ]
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
		  asNavFor: '.js-slider-small',
            responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    asNavFor: false,
                    autoplay: true
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                  }
                },
              ]
		});
		$('.js-slider-small').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.js-slider-big',
		  vertical: true,
		  focusOnSelect: true,
		  arrows: false,
		});	
    };

    let sandwich = function() {
        $('.sandwich').on('click', function(){
            $(this).toggleClass('sandwich--active');
            $('.nav ').slideToggle();
        });
    };
    let scrollTotop = function() {
         $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        }else {
            $('.scrollToTop').fadeOut();
        }
     });
        $('.scrollToTop').click(function(){
        $('html,body').animate({scrollTop: 0});
    });
    };
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    portfolioSlider();
    tabs();
    scrollTotop();
    bigSlider();
    sandwich();
});