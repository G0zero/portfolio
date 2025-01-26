/*delivery.js*/

$(function () {
    //메뉴
    $('nav .menu > li').mouseenter(function () {
        $(this).find('.sub-menu').stop().slideDown();
    });
    $('nav .menu > li').mouseleave(function () {
        $('.sub-menu').stop().slideUp();
    });


});




