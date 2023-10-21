$(document).ready(function() {
    $('.iconMoving').hide();
    $(window).on("scroll", function() {
        $('.iconMoving').delay(1000).fadeIn(4000);
    });
    $('.resumeList').hide();
    $(window).on("scroll", function() {
        $('.resumeList').delay(3000).fadeIn(4000);
    });
    $('.gallery').hide();
    $(window).on("scroll", function() {
        $('.gallery').delay(6000).slideDown(4000);
    });
});
$(document).ready(function() {
    $('.iconService').hide();
    $('.iconService').delay(4000).fadeIn(4000);
});