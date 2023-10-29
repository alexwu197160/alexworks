$(document).ready(function() {
    $('.animate-h3').hide(0).delay(500).show(1);
    $('.animate__animated').addClass('animate__bounceInUp');
});
$(document).ready(function() {
    $('.iconMoving').hide();
    $(window).on("scroll", function() {
        $('.iconMoving').fadeIn(2000);
    });
    $('.resumeList').hide();
    $(window).on("scroll", function() {
        $('.resumeList').delay(1000).fadeIn(1000);
    });
    $('.gallery').hide();
    $(window).on("scroll", function() {
        $('.gallery').delay(3000).slideDown(2000);
    });
});
$(document).ready(function() {
    $('.iconService').hide();
    $('.iconService').delay(800).fadeIn(1000);
});