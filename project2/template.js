$(function(){


    var pos

    $(".hw>.popu").hide();
    $(".hw>header>.mob_but").click(function(){
        pos = $(window).scrollTop();
        console.log(pos);

        $("html, body").addClass("not_scr");
        $(".sw, .fw").css("top", -pos);
      

        $(".hw>header>.mognb").animate({"left": "0px",} ,500);
        $(".hw>.popu").fadeIn();
    });

    $(".hw>header>.mognb>.mob_x").click(function(){
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);
        
        $(".hw>header>.mognb").animate({"left": "-70%",} ,500);
        $(".hw>.popu").fadeOut();
    });

    $(".hw>.popu").click(function(){
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);
        
        $(".hw>header>.mognb").animate({"left": "-70%",} ,500);
        $(".hw>.popu").fadeOut();
    });




    $(".sub").hide();
    $(".hw>header>.gnb>li").hover(function(){
        $(".sub",this).stop().prepend("<div class='sam'></div>").slideDown();
    }, function(){
        $(".sub",this).stop().slideUp();
    });

    $(".hw>header>.gnb>li>.sub>li").hover(function(){
        $(this).children().animate({"color": "#565654", "background-color" : "#bed6c1"}, 200);
    }, function(){
        $(this).children().animate({"color": "#85857d", "background-color" : "#e6ebe2"}, 200);
    });

    $(window).scroll(function(){
        if ($(this).scrollTop()>300){
            $(".gotop ").fadeIn();
        } else {
            $(".gotop ").fadeOut();
        };
    });


    // $(window).scroll(function(){
    //     if ($(this).scrollTop()>300){
    //         $(".hw ").slideUp();
    //     } else {
    //         $(".hw ").slideDown();
    //     };
    // });

    $(".gotop").click(function(){
        $('html, body').animate({scrollTop :0}, 300);
        return false;
    });

    $(".mp3").html("<i class='fas fa-caret-down'></i>");

    $(".su").click(function(){
        $(".hw>header>.mognb>li>.sub").slideUp();
        $(this).children().slideDown();

        $(".mp3").html("<i class='fas fa-caret-down'></i>");
        $(this).find("span").replaceWith("<span class='mp3'><i class='fas fa-caret-left'></i></span>");
    });

    $("footer>.fl a").click(function(e){
        e.preventDefault();
    });
});//function