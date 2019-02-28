$(document).ready(function () {
    svg4everybody({});

    let locationChoose = function () {
        $(document).on('click','.location-question__btn', function() {
            let answer = $(this).data('location');
            $(this).closest('.location-question').hide(); 
            if(answer === 'no') {
                $(this).closest('.location-body').addClass('is-location-choose');
            } 
        });
        $(document).on('click','.location-choose__item', function() {
            $(this).closest('.location-body').removeClass('is-location-choose');
        });
        $(document).on('click','.location-header', function() {
            $(this).siblings('.location-body').addClass('is-location-choose');
        });
    };

    let searchToggle = function() {
        $('.search-icon').click(function(){
           $('.search-body').fadeToggle(); 
        });
        $('.search-clear').click(function(){
           $('.search-input').val(''); 
        });
    };
    let sanwichToggle = function() {
        $('.sandwich').click(function(){
           $('.sandwich-line').toggleClass('sandwich--active');
           $('.nav-wrapper').fadeToggle('slow'); 
        });
    };
    let bannerSlider = function() {
    	$('.js-slider-banner').slick({
    		slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '.banner-navigation--prev',
            nextArrow: '.banner-navigation--next',
            dots: true,
            appendDots: '.slider-dots',
                customPaging: function(slider,i) {
                    return '<div class="slider-dot"></div>';
            },
            responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
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
    };
    let tabs = function () {
        $('.tabs-navigation__item').click(function(){
            let tabName = $(this).attr('show-tab');
            $(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
            $('.tabs-body .' + tabName).addClass('tab--active').siblings().removeClass('tab--active');
            if('.tabs-body .' + tabName + ' .js-ourPortfolio-slider') {
                $('.js-ourPortfolio-slider2').each(function () {
                    $(this).slick('refresh');
                });
                $('.js-ourPortfolio-slider3').each(function () {
                    $(this).slick('refresh');
                });
                $('.js-ourPortfolio-slider4').each(function () {
                    $(this).slick('refresh');
                });
            }
        });
    };
    // let ourPortfolioSlider = function () {
    //     $('.js-ourPortfolio-slider').each(function (idx) {
    //         let jsOurPortfolioSlider = "js-ourPortfolio-slider" + idx;
    //         this.closest('.tab').id = jsOurPortfolioSlider;
    //         $(this).slick({
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             prevArrow: '.ourPortfolio-navigation--prev',
    //             nextArrow: '.ourPortfolio-navigation--next',
    //             responsive: [
    //             {
    //               breakpoint: 800,
    //               settings: {
    //                 slidesToShow: 1,
    //               }
    //             },
    //           ]
    //         });
    //     });
    // }; 
    $('.js-ourPortfolio-slider').slick({
            slidesToShow: 2,
            prevArrow: '.ourPortfolio-navigation--prev',
            nextArrow: '.ourPortfolio-navigation--next',
            responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
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
    $('.js-ourPortfolio-slider2').slick({
            slidesToShow: 2,
            prevArrow: '.ourPortfolio-navigation--prev1',
            nextArrow: '.ourPortfolio-navigation--next1',
            responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
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
    $('.js-ourPortfolio-slider3').slick({
            slidesToShow: 2,
            prevArrow: '.ourPortfolio-navigation--prev2',
            nextArrow: '.ourPortfolio-navigation--next2',
            responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
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
    $('.js-ourPortfolio-slider4').slick({
            slidesToShow: 2,
            prevArrow: '.ourPortfolio-navigation--prev3',
            nextArrow: '.ourPortfolio-navigation--next3',
            responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
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
    let reviewsSlider = function() {
        $('.js-reviews-slider').slick({
            slidesToShow: 1,
            prevArrow: '.reviews-navigation--prev',
            nextArrow: '.reviews-navigation--next',
            dots: true,
            appendDots: '.sliderReviews-dots',
                customPaging: function(slider,i) {
                    return '<div class="sliderReviews-dot"></div>';
            },
        });
    };
    let ourMastersSlider = function() {
        $('.js-ourMasters-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.ourMasters-navigation--prev',
            nextArrow: '.ourMasters-navigation--next',
            dots: true,
            appendDots: '.ourMasterSlider-dots',
                customPaging: function(slider,i) {
                    return '<div class="ourMasterSlider-dot"></div>';
            },
             responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    autoplay: true,
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    autoplay: true,
                  }
                },
              ]
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

    // let formValidate = function () {
    //     $('form').each(function () {
    //        $(this).on('submit', function () {
    //         $(this).validate({
    //             rules: {
    //                 name: 'required',
    //                 phone: 'required',
    //                 email: 'required',
    //                 password: 'required'
    //             },
    //             messages: {
    //                 name: 'Введите корректное имя',
    //                 phone: 'Введите корректный номер',
    //                 email: 'Введите корректный email',
    //                 password: 'Введите корректный пароль'
    //             },
    //             errorPlacement: function (error, element) {
    //                 element.attr('placeholder', error[0].outerText);
    //             }
    //         });
    //             if ($(this).valid()) {
    //                 let wrap = $(this)[0].closest('.hide-on-success');
    //                 if(wrap) {
    //                     $(wrap).siblings('.show-on-success').show();
    //                     $(wrap).hide();
    //                 }
    //             }
    //             return false;
    //        })   
    //     });
    // };
    let popupLink = function () {
        $('.js-popap-link').magnificPopup({
            showCloseBtn: false
        });
        $(document).on('click','.popup-close', function(){
            $.magnificPopup.close();
        });
    }
    let navDropDown = function() {
    if( window.innerWidth <= 800 ){
        $('.nav-link__dropDown').click(function(){
           $('.nav-dropDown').slideToggle();        
       });
        }else {  
        };
    };
    $('.form-js').each(function() {
    let cur_form = '$' + $(this).attr('id');
    $(this).on('click','.form-button', function() {
        if($(cur_form + ' .validate').val() == '') {
            $(cur_form + ' .validate').css({'border-color' : '#de2827'});
            setTimeout(function(){
                $('.validate').removeAttr('style');
            },500);
            return false;   
        } else {
            if($(cur_form + ' .confidencial__checked input').prop('checked')) {
                $(cur_form).closest('.form-hide').hide();
                $(cur_form).closest('.form-hide').siblings('.form-ok').fadeIn(100);
                m_data = $(cur_form).serializeArray();
                $.ajax({
                    type: 'POST',
                    dataType: 'text',
                    data: m_data,
                    url: 'contacts.php'
                });
            } else {
                $(cur_form + ' .confidencial__checked').css('color','#de2827');
                setTimeout(function(){
                    $('.confidencial__checked').removeAttr('style');
                },500);
                return false;
                };
            } 
         })
    });
    locationChoose();
    searchToggle();
    sanwichToggle();
    bannerSlider();
    tabs();
    reviewsSlider();
    ourMastersSlider();
    scrollTotop();
    // formValidate();
    popupLink();
    navDropDown();
});