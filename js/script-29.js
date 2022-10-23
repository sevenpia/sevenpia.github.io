$(document).ready(function () {
    /*메뉴내비게이션*/
 /*   $("header nav ul.gnb> li").hover(function () {
        $("ul.sub").stop().slideDown();
    }, function () {
        $("ul.sub").stop().slideUp();
    });
    */
     
    $("header nav ul.gnb> li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });
    
    
    /*메인 슬라이드*/
    
    $("ul.slider_all li").eq(0).siblings().css("top","-300px");
    
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        console.log(slideI);
        
    $("ul.slider_all li").eq(slideI).siblings().animate({"top":"-300px"},500);
    $("ul.slider_all li").eq(slideI).animate({"top":"0px"},500);;
    }, 3000);

    
    /*탭메뉴*/
    $(".contents section.con1 h2").click(function(){
       $(".contents section.con1 h2, .contents section.con1 ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    
    
    /*모달창 */
    $(".contents section.con1 ul.notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $(".modal .modal_inner button").click(function(){
       $(".modal").fadeOut();
    });
    

    
    
    
}); /*ready end */