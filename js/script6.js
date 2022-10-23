$(document).ready(function(){
    
//    상단메뉴 나오게
 /*   $("header nav ul.gnb > li").hover(function(){
        $("ul.sub").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
    });*/
    
//    상단메뉴 본인만 나오게

    $("header nav ul.gnb > li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });

    
//    메인이미지 슬라이딩
    
/*
    $(".slider ul.slider_all li").eq(0).siblings().css("left","-1200px");
*/
    
/*    var slideI=0;
    setInterval(function(){
        
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        $(".slider ul.slider_all li").eq(slideI).siblings().animate({"left":"-1200px"},500);
        $(".slider ul.slider_all li").eq(slideI).animate({"left":"0"},500);
        
    },3000);*/
    
    /*3초마다 반복되는 애니메이션*/
    
   
    
     $("ul.slider_all li").eq(0).siblings().hide();
    slideI = 0;
    setInterval(function () {
        if (slideI < 2) {
            slideI++;
        } else {
            slideI = 0;
        }
        $("ul.slider_all li").eq(slideI).siblings().fadeOut("slow");
        $("ul.slider_all li").eq(slideI).fadeIn("slow");
    }, 3000);
    
    
//    탭메뉴
    $(".contents section.con1 h2").click(function(){
        
        $(".contents section.con1 h2,.contents section.con1 ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    

//    모달창
    
    $("section.con1 ul.notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    
    $(".modal .modal_inner button").click(function(){
        $(".modal").fadeOut();
    });
    
    
}); /*ready end*/