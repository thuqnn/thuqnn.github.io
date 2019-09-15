$(document).ready(function() {
    new WOW().init();
    $("i.far.fa-lightbulb").click(function() {
        $("body").toggleClass("onoff");
        $("section.slider").toggleClass("onoff");
        $("footer.footer-main").toggleClass("footerblack");
        $(".quick-search").toggleClass("borderwhite");
        $(".news-signup").toggleClass("borderwhite");
        $(".advanced-search").toggleClass("borderwhite");
        $(".menu-movies button").toggleClass("borderwhite");
        $(".list-button button").toggleClass("borderwhite");
        $(this).toggleClass("iconblue");
        $('section.copyright #logofooter').append('<img src="./img/logo_white.png"/>');
        $('section.copyright #logofooter a img').remove();
    });
    $("#onoffwatch").click(function() {
        $("body").toggleClass("onoff");
        $("section.slider").toggleClass("onoff");
        $("footer.footer-main").toggleClass("footerblack");
        $(".quick-search").toggleClass("borderwhite");
        $(".news-signup").toggleClass("borderwhite");
        $(".advanced-search").toggleClass("borderwhite");
        $(".menu-movies button").toggleClass("borderwhite");
        $(".list-button button").toggleClass("borderwhite");
        $(this).toggleClass("iconblue");
        $('section.copyright #logofooter').append('<img src="./img/logo_white.png"/>');
        $('section.copyright #logofooter a img').remove();
    });
    $(".list-button button").click(function() {
            $(".list-button button").removeClass("active");
            $(this).addClass("active");
        })
        // $('.navbar-nav li ').click(function() {
        //     $('.navbar-nav li ').removeClass("active");
        //     $(this).addClass("active");
        // });
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function() {
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
    $(function() {
        var navbar = $('.navbar');
        $(window).scroll(function() {
            if ($(window).scrollTop() <= 40) {
                navbar.removeClass('scrolled-nav');
            } else {
                navbar.addClass('scrolled-nav');
            }
        });
    });
    if ($('.carousel2-1 .carousel').length > 0) {
        $('.carousel2-1 .carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 1000,
            centerPadding: '70px',
            responsive: [{
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
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});