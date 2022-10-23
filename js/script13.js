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


    //모바일 버튼
    $(".ham").click(function (ev) {
        ev.preventDefault();
//      $("header nav").stop().slideToggle();
        $("header nav").toggleClass("visible");
        $(this).toggleClass("click");
    });

}); /*ready end */
