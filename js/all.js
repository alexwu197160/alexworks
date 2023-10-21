$(document).ready(function() {
    $('.iconMoving').hide();
    $(window).on("scroll", function() {
        $('.iconMoving').delay(3000).fadeIn(4000);
    });
    $('.resumeList').hide();
    $(window).on("scroll", function() {
        $('.resumeList').delay(6000).fadeIn(4000);
    });
    $('.gallery').hide();
    $(window).on("scroll", function() {
        $('.gallery').delay(9000).slideDown(4000);
    });
});
$(document).ready(function() {
    $('.iconService').hide();
    $('.iconService').delay(3000).fadeIn(4000);
});