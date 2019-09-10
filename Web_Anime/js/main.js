
   var $container = $('.portfolioContainer');
   $container.isotope({
       filter: '*',
       animationOptions: {
           duration: 750,
           easing: 'linear',
           queue: false
       }
   });

   $('.portfolioFilter a').click(function(){
       $('.portfolioFilter .current').removeClass('current');
       $(this).addClass('current');

       var selector = $(this).attr('data-filter');
       $container.isotope({
           filter: selector,
           animationOptions: {
               duration: 750,
               easing: 'linear',
               queue: false
           }
        });
        return false;
   }); 

if($('.carousel2-1 .carousel').length>0) {
   $('.carousel2-1 .carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 1000,
      centerPadding: '70px',
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               centerPadding: '160px',
               slidesToShow: 1
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               centerPadding: '30px',
               slidesToShow: 1
            }
         }
      ]
   });
}

 $(function(){
	var navbar = $('.navbar');
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('scrolled-nav');
		} else {
			navbar.addClass('scrolled-nav');
		}
	});
});
new WOW().init();