//template

$(function(){
    //$(".mob_x").hide();
    $(".main_header_wrap>.popu").hide();
    //$(".jo_header_wrap>.jo_header>.header_top>.mob>.mobile_ul").hide();

    var pos;

    $(".mob_but").on({click:function(){

        pos = $(window).scrollTop();

        $("html, body").addClass("not_scr");
        $(".mase, .jo_footer_wrap").css("top", -pos);

        $(".main_header_wrap>.main_header>.mob>.mobile_ul").animate({"right": "0px",} ,500);
        $(".main_header_wrap>.popu").show();
        $(".mob_but").hide();
        //$(".mob_x").animate({"right" : "-70%"});

    }});



    $(".mob_x").on({click:function(){
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);

        $(".main_header_wrap>.main_header>.mob>.mobile_ul").animate({"right" : "-70%"});
        $(".main_header_wrap>.popu").hide();
        
        $(".mob_but").fadeIn(500);
        //$(".mob_x").hide();

        
    }});



    $(".popu").on({click:function(){
        $(".main_header_wrap>.main_header>.mob>.mobile_ul").animate({"right" : "-70%"});
        $(".main_header_wrap>.popu").hide();
        
        $(".mob_but").fadeIn(500);

        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);
        //$(".mob_x").hide();
    }});

    


}); //function