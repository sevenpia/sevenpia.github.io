$(document).ready(function () {

    // 네이게이션 
    /*    $("nav ul.gnb > li").hover(function(){
            $("ul.sub").stop().slideDown();
        },function(){
            $("ul.sub").stop().slideUp();
        });*/


    // 네이게이션 자신의 서브메뉴만  
    // hover사용하다. 모바일에서는 click 의 형태로 표현된다. 

    /*$("nav ul.gnb > li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });*/


    /*
        네이게이션 자신의 서브메뉴만: 
        mouseenter (hover와 같은 역할) 
        mousedown(click과 같은 역할) 사용할 수도 있다. 
        모바일에서는 hover, mouseenter 모두 click  의 형태로 표현된다. 
        떠날 때는 mouseleave 사용
    */

    $("nav ul.gnb > li").mouseenter(function () {
        $(this).find("ul.sub").stop().slideDown();
    }).mouseleave(function () {
        $(this).find("ul.sub").stop().slideUp();
    });


    $(".ham").click(function(){
        $(this).toggleClass("active");
        $("nav").toggleClass("active");
    });
    
    
    /*이미지 슬라이더*/

    $(".slider ul.slider_all li").eq(0).siblings().css("top", "-300px");

    var slideI = 0;

    setInterval(function () {
        if (slideI < 2) {
            slideI++;
        } else {
            slideI = 0;
        }
        //        console.log(slideI);

        $(".slider_all li").eq(slideI).siblings().animate({
            "top": "-300px"
        }, 500);
        $(".slider_all li").eq(slideI).animate({
            "top": "0"
        }, 500);
    }, 2000);


    
//    탭메뉴
    
    $(".contents section.con1 h2").click(function(){
        $(".contents section.con1 h2,.contents section.con1 ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    
    
    


}) /*ready end*/
