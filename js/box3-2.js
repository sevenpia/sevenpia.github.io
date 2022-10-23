/*$(document).ready(function(){*/
$(function(){        
    //$("section.con1").css("background-color","#f00");
    $("section.con1").stop().animate({top:0, opacity:1}, 300);    
    $("section.con2").stop().animate({"top":"0", "opacity":"1"}, 500); 
    $("section.con3").stop().animate({"top":"0", "opacity":"1"}, 700); 
    $("footer").stop().animate({"top":"0", "opacity":"1"}, 900);
}) /*ready end*/