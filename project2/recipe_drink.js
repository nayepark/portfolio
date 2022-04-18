$(function(){
    var pos

    $(".pop, section .art_text>.art_click").hide();

    $("button").click(function(){
        pos = $(window).scrollTop();
        console.log(pos);

        $("html, body").addClass("not_scr");
        $(".sw, .fw").css("top", -pos);


        $(".pop").fadeIn();
        $(this).next().fadeIn();
    });

    $(".x").click(function(){
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);

        $(".pop").fadeOut();
        $(this).parent().fadeOut();
    });

    $(".pop").click(function(){
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);

        $(".pop").fadeOut();
        $(".art_click").fadeOut();
    });
});//function