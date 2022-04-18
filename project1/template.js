//template

$(function(){
    //$(".mob_x").hide();
    $(".jo_header_wrap>.popu").hide();
    //$(".jo_header_wrap>.jo_header>.header_top>.mob>.mobile_ul").hide();

    var pos;

    $(".mob_but").on({click:function(){

        pos = $(window).scrollTop();
        console.log(pos);

        $("html, body").addClass("not_scr");
        $(".jo_header_wrap2, .jo_section_wrap, .jo_section, .jo_footer_wrap").css("top", -pos);

        $(".jo_header_wrap>.jo_header>.header_top>.mob>.mobile_ul").animate({"right": "0px",} ,500);
        $(".jo_header_wrap>.popu").show();
        $(".mob_but").hide();
        //$(".mob_x").animate({"right" : "-70%"});
    }});


    $(".mob_x").on({click:function(){
        $(".jo_header_wrap>.jo_header>.header_top>.mob>.mobile_ul").animate({"right" : "-70%"});
        $(".jo_header_wrap>.popu").hide();
        
        $(".mob_but").fadeIn(500);
        //$(".mob_x").hide();

        
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);
    }});


    $(".popu").on({click:function(){
        $(".jo_header_wrap>.jo_header>.header_top>.mob>.mobile_ul").animate({"right" : "-70%"});
        $(".jo_header_wrap>.popu").hide();
        
        $(".mob_but").fadeIn(500);
        //$(".mob_x").hide();
        $("html, body").removeClass("not_scr");
        pos = $(window).scrollTop(pos);
    }});

    


}); //function