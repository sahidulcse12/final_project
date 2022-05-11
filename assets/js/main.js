

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

})

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 25) {
        $('.header-area').addClass('sticky');
    } else {
        $('.header-area').removeClass('sticky');
    }
})