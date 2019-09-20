$(document).ready(function() {
    new WOW().init();
    $("#register-form").on("submit", function() {
        var idValid = true;
        if ($("#name").val().trim() == '') {
            $('#name').next('small').text('Vui lòng nhập tên!');
            idValid = false;
        } else {
            $('#name').next('small').text('');
        }
        if ($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
            $("#email").next('small').text("Vui lòng nhập email !");
            idValid = false;
        } else {
            $("#email").next('small').text('');
        }
        if ($("#phone").val().match(/^([\(]{1}[0-9]{3}[\)]{1}[\.| |\-]{0,1}|^[0-9]{3}[\.|\-| ]?)?[0-9]{3}(\.|\-| )?[0-9]{4}$/) == null) {
            $("#phone").next('small').text("Vui lòng nhập số điện thoại !");
            idValid = false;
        } else {
            $("#phone").next('small').text('');
        }
        if ($("#message").val().trim() == '') {
            $("#message").next('small').text("Vui lòng nhập nội dung tin nhắn !");
            idValid = false;
        } else {
            $("#message").next('small').text('');
        }
        return idValid;
    })
    let uri = document.URL;
    let urinew = uri.split('?')[0];
    let uri_dec = decodeURIComponent(uri);
    let content = uri_dec.replace(/[&?]/g, '<br/>').replace(/[+]/g, ' ').replace(/[=]/g, ': ').replace('signup: Sign Up', '').replace(urinew, '');
    let splitStr = content.split('<br/>');
    let totalStr = "";
    for (let i = 0; i < splitStr.length; i++) {
        totalStr += "<br/>" + splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1).toLowerCase();
    }
    $("#username").html(totalStr);
    $("i.far.fa-lightbulb").click(function() {
        $("body").toggleClass("onoff");
        $("section.slider").toggleClass("onoff");
        $("footer.footer-main").toggleClass("footerblack");
        $(".quick-search").toggleClass("borderwhite");
        $(".news-signup").toggleClass("borderwhite");
        $(".advanced-search").toggleClass("borderwhite");
        $(".menu-movies button").toggleClass("borderwhite");
        $(".list-button button").toggleClass("borderwhite");
        $(".card.h-100").toggleClass("dark-card");
        $(".card.hvr-glow").toggleClass("darkmovies-card");
        $(".text-dark").toggleClass("text-white");
        $(".icon-votes span").toggleClass("icon-votes-white");
        $(".icon-votes a").toggleClass("icon-votes-whitea");
        $("select#exampleFormControlSelect1").toggleClass("inputblack");
        $('section.copyright #logofooter').append('<img src="./img/logo_white.png"/>');
        $('section.copyright #logofooter a img').remove();
        $("i.fas.fa-history.fa-lightbulb").toggleClass("iconblue");
        $(this).toggleClass("iconblue");
    });
    $("#onoffwatch").click(function() {
        $("body").toggleClass("onoff");
        $("section.slider").toggleClass("onoff");
        $("footer.footer-main").toggleClass("footerblack");
        $(".quick-search").toggleClass("borderwhite");
        $(".news-signup").toggleClass("borderwhite");
        $(".advanced-search").toggleClass("borderwhite");
        $("i.fas.fa-history.fa-lightbulb").toggleClass("iconblue");
        $('section.copyright #logofooter').append('<img src="./img/logo_white.png"/>');
        $('section.copyright #logofooter a img').remove();
    });

    $('.view-more').click(function() {
        $('.content-more').toggle();
    });
    $(".list-button button").click(function() {
        $(".list-button button").removeClass("active");
        $(this).addClass("active");
    })
    $(".menu-movies button").click(function() {
            $(".menu-movies button").removeClass("active");
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
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
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