$(document).ready(function () {
    $(".mobtn").click(function () {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("visible");
    });
}); /*ready end */
