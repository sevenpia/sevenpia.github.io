$(document).ready(function () {
    /*    서브 전체가 나온다. */
    /*
        $("header nav ul.gnb > li").hover(function(){
            $("header nav ul.gnb ul.sub").stop().slideDown();
        },function(){
            $("header nav ul.gnb ul.sub").stop().slideUp();
        });
    */
    /*선택한 대메뉴의 자신의 서브메뉴만 나온다. */
    $("header nav ul.gnb > li").hover(function () {
        $(this).find("ul.sub").stop().slideDown();
    }, function () {
        $(this).find("ul.sub").stop().slideUp();
    });
    
    
    /*메인슬라이드 */
    
    $(".slider_wrap ul.slider li").eq(0).siblings().css("top","-300px");
    
    var slideI=0; 
    
    setInterval(function(){
        
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
    
        $(".slider_wrap ul.slider li").eq(slideI).siblings().animate({"top":"-350px"},500);
        $(".slider_wrap ul.slider li").eq(slideI).animate({"top":"0"},500);
        
        console.log(slideI);
        
    },3000);
    
    
    /*탭메뉴*/
    
    $(".contents_wrap section.con1 h2").click(function(){
        
        $(".con1 h2, .con1 ul").removeClass("on");
         $(this).addClass("on");
        $(this).next("ul").addClass("on");
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}) /*ready end */