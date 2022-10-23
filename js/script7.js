$(document).ready(function(){
    /*상단메뉴*/
    
/*    $("nav ul.gnb > li").hover(function(){
        $("nav ul.gnb > li ul.sub").stop().slideDown();
        
    }, function(){
        $("nav ul.gnb > li ul.sub").stop().slideUp();
    });
    */
    
    /*상단메뉴 자신의 서브만 나오도록*/
    $("nav ul.gnb > li").hover(function(){
    $(this).find("ul.sub").stop().slideDown();
        
    }, function(){
       $(this).find("ul.sub").stop().slideUp();
    });
    
    
    /*메인이미지 롤링 - 상단으로 롤링*/
    
/*
    $(".slider .slider_all li").eq(0).siblings().css("top","-300px");
    
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }

        console.log(slideI);
        $(".slider .slider_all li").eq(slideI).siblings().animate({"top":"-300px"},500);
        $(".slider .slider_all li").eq(slideI).animate({"top":"0"},500);
        
    },3000);
*/

    /*메인이미지-왼쪽으로 롤링*/
    
    /*$(".slider .slider_all li").eq(0).siblings().css("left","-1200px");
    
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }

        console.log(slideI);
        $(".slider .slider_all li").eq(slideI).siblings().animate({"left":"-1200px"},500);
        $(".slider .slider_all li").eq(slideI).animate({"left":"0"},500);
        
    },3000);*/
    
    
    /* 메인이미지 페이드 인으로 롤링*/

    $(".slider .slider_all li").eq(0).siblings().hide();
    
    var slideI=0;
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        console.log(slideI);

        $(".slider .slider_all li").eq(slideI).siblings().fadeOut("slow");
        $(".slider .slider_all li").eq(slideI).fadeIn("slow");
        
    },3000);
    
    
    /*탭메뉴*/
    $("section.con1 h2").click(function(){
        $("section.con1 h2, section.con1 ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
        
    });
    
    /*모달창*/
    $("section.con1 ul.notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".modal .modal_inner button").click(function(){
        $(".modal").fadeOut();
    });
    
    
    $("footer h3").click(function(){
         $(".modal").fadeIn();
    });
    
    
    $("footer ul.sns li span.bt1").click(function(){
        $(".modal").fadeIn();
    });
    
    
    $("section.con3 ul.baro li").click(function(){
        $(".modal").fadeIn();
    });
    
}); /*ready end*/