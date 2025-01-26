/*menu steak.js*/

$(document).ready(function () {
    //메뉴
    $('nav .menu > li').mouseenter(function () {
        $(this).children('.sub-menu').stop().slideDown();
    });
    $('nav .menu > li').mouseleave(function () {
        $('.sub-menu').stop().slideUp();
    });




    $('.prem ul li > a').click(function () {
        var imgsrc = $(this).find('img').attr('src');
        var num = $(this).parent('li').index();
        console.log(num);

        $('.black').css({
            display: 'block'
        })

        $('.modal img').attr('src', imgsrc);

        if(num===0) {
            $('.modal .modal_txt h2').text('골든 프리미어 토마호크');
            $('.modal .modal_txt h2 span').text('(쇠고기 : 미국산 600~1,000g)');
            $('.modal .modal_txt .story').text('탄성을 자아내는 두툼함과 압도적인 풍미가 돋보이는 프리미어 스테이크');
            $('.modal .modal_txt .price').text('19,000원');
        }else if (num === 1) {
            $('.modal .modal_txt h2').text('골든 프리미어 포터하우스');
            $('.modal .modal_txt h2 span').text('(쇠고기 : 미국산 700~800g)');
            $('.modal .modal_txt .story').text('담백하고 부드러운 안심과 마블링의 리치하고 고소한 맛의 등심 두가지를 맛볼 수 있는 프리미어 스테이크');
            $('.modal .modal_txt .price').text('17,000원');

        } else if (num === 2) {
            $('.modal .modal_txt h2').text('골든 프리미어 엘본');
            $('.modal .modal_txt h2 span').text('(쇠고기 : 미국산 600~850g)');
            $('.modal .modal_txt .story').text('등심특유의 고소한 풍미와 극대화된 감칠맛을 즐길 수 있는 스테이크');
            $('.modal .modal_txt .price').text('15,000원');
        };
        /*$('.modal .modal_txt').text();*/

    });


    $('.black .modal a.close').click(function () {
        $('.black').css({
            display: 'none'
        })
    });
});