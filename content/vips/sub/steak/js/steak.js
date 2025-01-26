/*steak.js*/

$(function () {
    //메뉴
    $('nav .menu > li').mouseenter(function () {
        $(this).find('.sub-menu').stop().slideDown();
    });
    $('nav .menu > li').mouseleave(function () {
        $('.sub-menu').stop().slideUp();
    });



});


$(window).scroll(function () {
    //스크롤바 js

    // 현재 window의 스크롤바 위치
    var scTop = $(this).scrollTop();
    console.log('현재 스크롤위치: ' + scTop);



    if (scTop > 100) {
        $('.vips ul > .point1').fadeIn(700);
        $('.vips ul > .point2').delay(700).fadeIn(700);
        $('.vips ul > .point3').delay(1400).fadeIn(700);
        $('.vips ul > .point4').delay(2100).fadeIn(700);
    }


});

$(document).ready(function () {
    /*에이징 시즈닝 소스 js*/
    
    $('.btn li a').click(function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        console.log(idx);
        
        $(this).parent().addClass('on').siblings().removeClass('on');
        
        $('.slide ul li').css({
            display : 'none'
        });
        
        $('.slide ul li').eq(idx).fadeIn();
    });

});