/*index.js*/


$(document).ready(function () {
    //메뉴
    $('nav .menu > li').mouseenter(function () {
        $(this).children('.sub-menu').stop().slideDown();
    });
    $('nav .menu > li').mouseleave(function () {
        $('.sub-menu').stop().slideUp();
    });


    //슬라이드 구현 

    /*var sideSlide = function (c) {
        $('.view').animate({
            left: '-100%'
        }, 600, function () {
            $(this).append($('.view li').first()).css({
                left: 0
            });
        });

    };

    var intcall_side;
    var autoCallSide = function () {
        intcall_side = setInterval(function () {
            sideSlide(0);
        }, 4000);
    };

    autoCallSide();
*/
});



$(function () {
    //메인 슬라이드 구현 
    var liWidth = $('.main_txt').width();
    console.log(liWidth);
    var idx = $('.m_box > ul > li').index();
    console.log('현재페이지 :' + idx);


    $('a.rbtn').click(function (e) {
        e.preventDefault();
        $('.m_box > ul').animate({
            marginLeft: -liWidth
        }, 800, function () {
            var idx = $('.m_box > ul > li').index();
            console.log(idx);
            if (idx = 1) {
                $('.mainpage > a').eq(idx).addClass('on').siblings().removeClass('on');
            }
        });

    });

    $('a.lbtn').click(function (e) {
        e.preventDefault();
        $('.m_box > ul').animate({
            marginLeft: 0
        }, 800, function () {
            var idx = $('.m_box > ul > li').index();
            console.log(idx);

            if (idx = 1) {
                $('.mainpage > a').eq(0).addClass('on').siblings().removeClass('on');
            }
        });
    });


    $('.mainpage > a').click(function (e) {
        e.preventDefault();

        var num = $(this).index();
        console.log(num);

        if (num === 0) {
            $('.m_box > ul').animate({
                marginLeft: 0
            }, 800);
        } else if (num === 1) {
            $('.m_box > ul').animate({
                marginLeft: -liWidth
            }, 800);
        }

        $(this).addClass('on').siblings().removeClass('on');

    });


});

function initSet() {

    $('#page2 article').hide();

    $('#page3 article').hide();

    $('#page4 article').hide();

}

function pageAction() {

    if (pno === 0) {
        $('header').css({
            backgroundColor: 'rgba(0,0,0,0.4)'
        });


    } else if (pno === 1) {

        $('#page2 article').stop().fadeIn(800);
        $('header').css({
            backgroundColor: 'black'
        });

    } else if (pno === 2) {

        $('#page3 article').stop().fadeIn(800);

    } else if (pno === 3) {

        $('#page4 article').stop().fadeIn(800);

    }

}



/*스크롤 이벤트*/

var pno = 0; //현재 페이지 번호 (첫 페이지 0)
const totcnt = 5; //전체 페이지 수
var prot = 0; //광스크롤막기 (0-허용, 1-막기)


$(function () {

    //각 페이지 초기세팅 함수 호출
    initSet();

    //페이지 액션 호출
    pageAction();

    $(document).on('mousewheel DOMMouseScroll', function (e) {

        if (prot === 1) return false;
        prot = 1;

        var evt = window.event || e;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        console.log('마우스휠 델타값: ' + delta);

        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.orginalEvent.detail;
        }

        if (delta > 0) {
            //양수 - 윗방향(이전페이지)
            pno--;
            if (pno === -1) pno = 0;
        } else {
            //음수 - 아랫방향(다음페이지)
            pno++;
            if (pno === totcnt) pno = totcnt - 1;
        }

        /*섹션을 기준으로 eq선택자를 사용하면 footer는 페이지에 포함되지 못해요. 그래서 footer부분이 안 넘어갔던 거예요
        footer까지 페이지에 포함되도록 section과 footer에 .page라는 공통의 클래스를 줘서 .page를 기준으로 인덱스를 찾게 하는게 필요해요
        
        html 문서에 클래스 추가해뒀으니 확인하세요
        */

        //var pagepos = $('section').eq(pno).offset().top;
        var pagepos = $('.page').eq(pno).offset().top;
        console.log('페이지 이동거리 : ' + pagepos);

        //페이지 이동 애니메이션
        $('html,body').animate({
            scrollTop: pagepos + 'px'
        }, 800, 'easeInOutQuint', function () {
            initSet();
            pageAction();

            prot = 0; //스크롤 막기 해제
        });


    });



});

$(function () {
    $('.img_page > a').click(function () {
        goSlide(1);
    });
});

function goSlide(bang) {

    //광클 금지 설정!
    if (prot === 1) return false;
    prot = 1;


    //1. 대상선정: .gbox
    var tg = document.querySelector('.view');
    /*querySelector는 클래스중에 그하나만 고를수 있는거임 근데 getElementByClass는 클래스 전체를 고르는 거라서 다름 */
    var tg2 = tg.querySelectorAll('.view > li');
    /*이거는 내가 ()안에 넣어놓은 것을 모두 찾아와라는 뜻임 내가이미지의 집합을 가지고 와 라는 뜻임 */
    console.log('이미지 갯수 : ' + tg2.length);

    if (bang === 1) {

        //맨뒤의 이미지를 맨 앞으로 이동함
        //insertBefore (넣을요소, 넣을 요소 전요소)
        tg.insertBefore(tg2.item(tg2.length - 1), tg2.item(0));
    }

    //변경된 순서의 이미지를 다시 읽어와!
    tg2 = tg.querySelectorAll('.view > li');

    //변경된 이미지의 class를 다시 설정해줘!
    for (var i = 0; i < tg2.length; i++) {
        tg2[i].setAttribute('class', 'i' + (i + 1));
    }

    //광클금지 상태값 변경
    setTimeout(function () {
        prot = 0;
    }, 400);


}

/*$(function(){
    $('.on2').click(function(){
        $(this).animate({
            transform : scale(0.5)
        }).animate({
            $('.on2').animate({
            transform : scale(1)
        });
    });
});*/