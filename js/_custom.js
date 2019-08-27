$(document).ready(function () {

    $('.topnav__dropdown-content').hover( function() {
        $('.topnav__dropbtn').addClass('active')
    }, function() {
        $('.topnav__dropbtn').removeClass('active')
    } )
    $('.burger').on('click', function(){
        $(this).toggleClass('change')
        $(".topnav__links").toggleClass('responsive');
    })
    $('.slider').slick({
        prevArrow: $('.slider-btn-prev'),
        nextArrow: $('.slider-btn-next'),
        dots: true,
    })
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });
});
