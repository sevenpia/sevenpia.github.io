$(document).ready(function () {
    /*메인메뉴 슬라이드 */
    /*    $("header nav ul.gnb > li").hover(function(){
            $("ul.sub").stop().slideDown();
            
        }, function(){
            $("ul.sub").stop().slideUp();
        });*/
    /*본인자신의 서브메뉴만 나오게 */
    $("header nav ul.gnb > li").hover(function () {
        $(this).find("ul.sub").stop().slideDown();
    }, function () {
        $(this).find("ul.sub").stop().slideUp();
    });
    
    
    /*슬라이더*/
    
    $(".slider ul.slider_all li").eq(0).siblings().css("top","-300px");
    
    var slideI=0;
    setInterval(function(){
        
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
//        console.log(slideI);
        
        $(".slider ul.slider_all li").eq(slideI).siblings().animate({"top":"-300px"},500);
        $(".slider ul.slider_all li").eq(slideI).animate({"top":"0"},500);
    },3000);      /*3초마다 반복되는 애니메이션 완성 */
    
    
    /*탭메뉴*/
    $(".contents section.con1 h2").click(function(){
        
        $(".contents section.con1 h2, .contents section.con1 ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    })
    
    /*모달창*/
    
    $(".contents section.con1 ul.notice li").eq(0).click(function(){
        $(".modal").fadeIn();        
    });
    
    $(".modal .modal_inner button").click(function(){
        $(".modal").fadeOut();
    });
    
}); /*ready end */