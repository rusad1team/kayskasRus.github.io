$(document).ready(function () {
    svg4everybody({});

    let sliderRev = () => {
    	$('.js-slider-reviews').slick({
    		slidesToShow: 3,
    		slidesToScoll: 1,
    		prevArrow: '.navigation--prev',
    		nextArrow: '.navigation--next',
    		responsive: [
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
    	});
    }
    sliderRev();
    
});