$(document).ready(function () {
//скролл
$('.linkScroll').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })
//tabs
let tabSlider = function () {
    $('.tabs-nav').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    appendDots: '.navig-dots2',
    customPaging: function(slider,i) {
        return '<div class="navig-dot2"></div>';
},
    responsive: [
        {
            breakpoint: 801,
            settings: "unslick",
            slidesToShow: 3,
            arrows: false,
        },
         {
            breakpoint: 400,
            slidesToShow: 1,
            arrows: false,
        }
    ]
});
}


let sliderForAndNav = function () {
	//slick for and nav
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  lazyLoad: 'ondemand',
	  fade: true,
	  dots: true,
	  asNavFor: '.slider-nav',
	  appendDots: '.navig-dots1',
    		customPaging: function(slider,i) {
        return '<div class="navig-dot1"></div>';
	},
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  lazyLoad: 'ondemand',
	  arrows: false,
	  asNavFor: '.slider-for',
	  centerMode: true,
	  focusOnSelect: true,
	  responsive: [
    {
      breakpoint: 480,
      settings: {
        settings: "unslick",
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
}



//audio
let player = function () {
	//modal audio
	$('.image-modal').each(function(){
	        $(this).magnificPopup({
	            type:'inline',
	            fixedContentPos: true,
	            removalDelay: 100,
	            closeBtnInside: true,
	            preloader: true,
	            mainClass: 'mfp-fade',
	        });
	    });
	    $(document).on('click', '.popup-modal-dismiss', function (e) {
	        e.preventDefault();
	        $.magnificPopup.close();
	    });


	new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_2",
        cssSelectorAncestor: "#jp_container_2"
    }, [
        {
            title:"Чесный аудио-отзыв #1",
            mp3:"audio/1.mp3"
        },
        {
            title:"Чесный аудио-отзыв #2",
            mp3:"audio/2.mp3"
        },
        {
            title:"Чесный аудио-отзыв #3",
            mp3:"audio/3.mp3"
        },
        {
            title:"Чесный аудио-отзыв #4",
            mp3:"audio/4.mp3"
        }
    ], {
        swfPath: "jplayer",
        supplied: "oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true
    });
};




let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach( item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach( item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');

        tabName = this.getAttribute('data-tab-name');

        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');
        })
    }
};


let popupForm = function() {
	// mask
        $(".mask").mask("+7 (999) 999-99-99");
    
    

    // показать скрыть popup
        $('body').on('click', '.popup-view', function(){
            $('.callme-popup .form-hide .popup-form__title').text($(this).data('title'));
            $('.callme-popup .form-hide .popup-form__desc').text($(this).data('desc'));
            if ($(this).data('file') == 'Да'){
                $('.callme-popup .form-hide .popup-form__file').show();
            } else {
                $('.callme-popup .form-hide .popup-form__file').hide();
            }
            $('.callme-popup .form-metka').val($(this).data('metka'));
            $('.callme-popup .form-button').text($(this).data('button'));
            $('.callme-popup').fadeIn(300);
                $('.popup-form').animate({
                opacity: 1
            }, 300, 'linear');
            var metrika = $('btn-' + $(this).data('id'));
            //yaCounter47342694.reachGoal(metrika);
            //dataLayer.push({'event': 'order_site'});
            return false;
        });
        $('.callme-popup').on('click', '.popup-close, .popup-close--2', function(){
            $('.popup-form').animate({
            opacity: 0
        }, 300, 'linear');
            setTimeout(function(){
               $('.callme-popup').fadeOut(300);
            },200);
        });
    // форма заявки общая
    $('.form-js').each(function(){
        var cur_form = '#' + $(this).attr('id');
        var cur_form_file = $(this).attr('id');
        $(this).on('click', '.form-button', function(){
            if ($(cur_form + ' .validate').val() == ''){
                $(cur_form + ' .validate').css({'border-color':'#de2827'});
                setTimeout(function(){
                    $('.validate').removeAttr('style');
                },500);
                return false;
            } else {
                if ($(cur_form + ' .confidencial__checked input').prop('checked')){
                    $(cur_form).closest('.form-hide').hide();
                    $(cur_form).closest('.form-hide').siblings('.form-ok').fadeIn(100);
                    setTimeout(function(){
                        var ev = new Event("submit");
                        document.getElementById(cur_form_file).dispatchEvent(ev);
                    }, 500);
                    document.getElementById(cur_form_file).addEventListener('submit', function(evt){
                        var http = new XMLHttpRequest(), f = this;
                        evt.preventDefault();
                        http.open("POST", "/js/contacts.php", true);
                        http.onerror = function(){
                            console.log("Данные не были переданы");
                        }
                        http.send(new FormData(f)); 
                    }, false);
                    console.log("Отправили");
                    //yaCounter47342694.reachGoal('popup_form');
                    //dataLayer.push({'event': 'order_site'});
                } else {
                    $(cur_form + ' .confidencial__checked').css('color','#de2827');
                    setTimeout(function(){
                        $('.confidencial__checked').removeAttr('style');
                    },500);
                    return false;
                };
            }
        });
    });
}



sliderForAndNav();
tab();
tabSlider();
popupForm();
player();

});

