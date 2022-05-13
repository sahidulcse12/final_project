

$(document).ready(function () {
    $('#nav').onePageNav({
        currentClass: 'current'
    });

    $('.magnific-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    $('.counter-increment').counterUp({
        delay: 10,
        time: 1000
    });

    $('.testimonial').slick({
        slidesToShow: 3,
        prevArrow:
            '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow:
            '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        dots: true,
        infinite: true,
        loop: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    });

})

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 25) {
        $('.header-area').addClass('sticky');
    } else {
        $('.header-area').removeClass('sticky');
    }
})