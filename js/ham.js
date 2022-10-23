$(document).ready(function() {
    $(".ham_btn").click(function (ev) {
        ev.preventDefault();
        $(this).toggleClass("active");
    });

}); /*ready_end*/
