$(function () {

    /*메인메뉴 */
    /*
        $("header nav ul.gnb >li").hover(function () {
            $("ul.sub").stop().slideDown();
        }, function () {
            $("ul.sub").stop().slideUp();
        });
    */

    /*자기 자신의 서브메뉴(ul.sub)만 나오게 한다. */
    $("header nav ul.gnb >li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });

    /*슬라이드 */
    $(".slider ul.slider_all li").eq(0).siblings().css("top","-300px");
    
    slideI=0; 
    
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
/*  console.log(slideI);*/
$(".slider ul.slider_all li").eq(slideI).siblings().animate({"top":"-300px"},500);
$(".slider ul.slider_all li").eq(slideI).animate({"top":"0"},500);
    },3000);  /*3초마다 바뀌는 모습*/

    
    

    //모바일 버튼
    $(".ham").click(function (ev) {
        ev.preventDefault();
//      $("header nav").stop().slideToggle();
        $("header nav").toggleClass("visible");
        $(this).toggleClass("click");
    });
    
    /*탭메뉴*/
    
    $(".contents section.con1 h2").click(function(){
        $(".contents section.con1 h2, .contents section.con1 ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
        
    });
    
    /*모달창*/
    
    $("ul.notice li:nth-child(1)").click(function(){
        $(".modal").fadeIn();
    });
    
    $("button.modal_btn").click(function(){
        $(".modal").fadeOut();
    });
    
    
    
    $("ul.baro li a, footer h3").click(function(ev){
        ev.preventDefault();
    });

    
    
    
    

}); /*ready end */
