/*notice.js*/

$(function(){
    //메뉴
    $('nav .menu > li').mouseenter(function () {
        $(this).find('.sub-menu').stop().slideDown();
    });
    $('nav .menu > li').mouseleave(function () {
        $('.sub-menu').stop().slideUp();
    });
    
    
});
 $(document).ready(function(){
            //초기 설정 
            $('section ul li').slice(0,3).show();
            //slice(0,4) : 인덱스 0부터 4 이전까지 보여줘 >>0,1,2,3 
            $('.btn').on('click', function(e){
                e.preventDefault();
                $('section ul li:hidden').slice(0,1).slideDown();
                
                if($('section ul li:hidden').length === 0){
                    $('.btn').fadeOut();
                }
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 1500);
            });
            

        });
        