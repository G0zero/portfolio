/*vips.js*/

$(function () {
    //메뉴
    $('nav .menu > li').mouseenter(function () {
        $(this).find('.sub-menu').stop().slideDown();
    });
    $('nav .menu > li').mouseleave(function () {
        $('.sub-menu').stop().slideUp();
    });


});

/*function initSet(){
    $('.con1','.con2','.con3','.con4','.con5','.con6').css({
        opacity : 0
    });
    
    
}*/

var scrollAction = function (n) {
    $('.wrap').find('.con' + n).animate({
        opacity: 1
    }, 800);

    /* n++;
        
         $('.wrap').find('.con'+n).delay(500).animate({
            opacity: 1
        }, 800);
*/
};


$(window).scroll(function () {
    /* initSet();*/

    // 현재 window의 스크롤바 위치
    var scTop = $(this).scrollTop();
    console.log('현재 스크롤위치: ' + scTop);

    if (scTop > 350 && scTop <900) {
        $('.wrap').find('.con1').animate({
            opacity: 1
        }, 800);
        $('.wrap').find('.con2').delay(500).animate({
            opacity: 1
        }, 800);



    } else if (900 < scTop && scTop <1450) {

        $('.wrap').find('.con4').animate({
            opacity: 1
        }, 800);
         $('.wrap').find('.con3').delay(500).animate({
            opacity: 1
        }, 800);

    } else if (1450 < scTop && scTop < 1900) {

        $('.wrap').find('.con5').animate({
            opacity: 1
        }, 800);
        $('.wrap').find('.con6').delay(500).animate({
            opacity: 1
        }, 800);


    }


});