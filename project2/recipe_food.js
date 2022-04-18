$(function(){

    var pos

    $(".pop, section>.art2>.art2_f>.f_l>.f_l2, section>.art2>.art2_f>.f_r>.f_l2, section>.art3>.art3_f>.f_l>.f_l3, section>.art3>.art3_f>.f_r>.f_l2, section>.art4>.art4_f>.f_l>.f_l4 ").hide();

    $("section>.art2>.art2_f>.f_l>button").click(function(){

        pos = $(window).scrollTop();
        console.log(pos);


        $("html, body").addClass("not_scr");
        $(".sw, .fw").css("top", -pos);

        $(".pop").fadeIn();
        $("section>.art2>.art2_f>.f_l>.f_l2").fadeIn();
        $(".hw").removeClass("not_scr");
    });

    $("section>.art2>.art2_f>.f_l>.f_l2>.f_l2rignt>.x").click(function(){
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);

        
        $(".pop").fadeOut();
        $("section>.art2>.art2_f>.f_l>.f_l2").fadeOut();
    });


    $("section>.art2>.art2_f>.f_r>button").click(function(){
        
        pos = $(window).scrollTop();
        console.log(pos);

        $("html, body").addClass("not_scr");
        $(".sw, .fw").css("top", -pos);


        $(".pop").fadeIn();
        $("section>.art2>.art2_f>.f_r>.f_l2").fadeIn();
    });

    $("section>.art2>.art2_f>.f_r>.f_l2>.f_l2ri>.x").click(function(){
        
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);


        $(".pop").fadeOut();
        $("section>.art2>.art2_f>.f_r>.f_l2").fadeOut();
    });


    $("section>.art3>.art3_f>.f_l>button").click(function(){
        
        pos = $(window).scrollTop();
        console.log(pos);

        $("html, body").addClass("not_scr");
        $(".sw, .fw").css("top", -pos);


        $(".pop").fadeIn();
        $("section>.art3>.art3_f>.f_l>.f_l3").fadeIn();
    });

    $("section>.art3>.art3_f>.f_l>.f_l3>.fl3_t>.x").click(function(){
        
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);


        $(".pop").fadeOut();
        $("section>.art3>.art3_f>.f_l>.f_l3").fadeOut();
    });


    $("section>.art3>.art3_f>.f_r>button").click(function(){
        
        pos = $(window).scrollTop();
        console.log(pos);

        $("html, body").addClass("not_scr");
        $(".sw, .fw").css("top", -pos);


        $(".pop").fadeIn();
        $("section>.art3>.art3_f>.f_r>.f_l2").fadeIn();
    });

    $("section>.art3>.art3_f>.f_r>.f_l2>.fl2_t>.x").click(function(){
        
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);


        $(".pop").fadeOut();
        $("section>.art3>.art3_f>.f_r>.f_l2").fadeOut();
    });


    $("section>.art4>.art4_f>.f_l>button").click(function(){
        
        pos = $(window).scrollTop();
        console.log(pos);

        $("html, body").addClass("not_scr");
        $(".sw, .fw").css("top", -pos);


        $(".pop").fadeIn();
        $("section>.art4>.art4_f>.f_l>.f_l4").fadeIn();
    });

    $("section>.art4>.art4_f>.f_l>.f_l4>.x").click(function(){
        
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);


        $(".pop").fadeOut();
        $("section>.art4>.art4_f>.f_l>.f_l4").fadeOut();
    });


    $(".pop").click(function(){
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);

        $(".pop").fadeOut();

        $("section>.art2>.art2_f>.f_l>.f_l2").fadeOut();
        $("section>.art2>.art2_f>.f_r>.f_l2").fadeOut();
        $("section>.art3>.art3_f>.f_l>.f_l3").fadeOut();
        $("section>.art3>.art3_f>.f_r>.f_l2").fadeOut();
        $("section>.art4>.art4_f>.f_l>.f_l4").fadeOut();
    });
}); //function