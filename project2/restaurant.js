$(function(){
    $("section>.res>.res1>.res_small>li").hover(function(){
        $(this).children().find("h3").fadeOut();
        $(this).children().find("p").fadeIn(1000);
    }, function(){
        $(this).children().find("h3").fadeIn();
        $(this).children().find("p").fadeOut();
        
    });


    $("section>.res>.res2>.res_small2>li").hover(function(){
        $(this).children().next().stop().animate({"top": "0px"},600);
    }, function(){
        $(this).children().next().stop().animate({"top": "245px"},600);
    });
});//function