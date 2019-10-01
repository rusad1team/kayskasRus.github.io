$(document).ready(function (e) {
	let width = (e) => {
		if ($(window).width() < 450) {
		let tab = () => {
			$('.sec2-item').on('click', function(){
	 		$(this).find('.tab-content').slideToggle();
	 		$(this).find('.transform').toggleClass('active');
	 	});
		}
	 	let sanwichToggle = () => {
	        $('.sandwich').click(function(){
	           $('.sandwich-line').toggleClass('sandwich--active');
	           $('.nav-top__wrapper').fadeToggle('slow'); 
	        });
    	};

    sanwichToggle();
    tab();
	}
	}
	width();
});

window.addEventListener('resize', function () { 
	if ($(window).width() < 450) {
    "use strict";
    window.location.reload(); 
}
});
