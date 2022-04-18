$(function(){

    $(".jo_header_wrap>.popu").hide();
    //$(".jo_header_wrap>.jo_header>.header_top>.mob>.mobile_ul").hide();

    var pos;

    $(".mob_but").on({click:function(){

        pos = $(window).scrollTop();
        console.log(pos);

        $("html, body").addClass("not_scr");
        $(".jo_header_wrap2, .jocan_section_wrap, .jo_footer_wrap").css("top", -pos);

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



    $(".jocan_section_wrap>.jocan_section2_mo>.candle1, .jocan_section_wrap>.jocan_section2_mo>.candle2, .jocan_section_wrap>.jocan_section2_mo>.candle3").hide();

    $(".but1").on({click:function(){
        $(".jocan_section_wrap>.jocan_section2_mo>.candle1").fadeIn().css({"display" : "block"});
        $(".but2, .but3").css({"border" : "1px solid #4c4b4b", "background-color": "transparent", "color": "#4c4b4b"});
        $(this).css({"background-color" : "#4c4b4b", "color": "#fff"});
        $(".jocan_section_wrap>.jocan_section2_mo>.candle2, .jocan_section_wrap>.jocan_section2_mo>.candle3").hide();
    }});
    $(".but2").on({click:function(){
        $(".jocan_section_wrap>.jocan_section2_mo>.candle2").fadeIn();
        $(".but1, .but3").css({"border" : "1px solid #4c4b4b", "background-color": "transparent", "color": "#4c4b4b"});
        $(this).css({"background-color" : "#4c4b4b", "color": "#fff"});
        $(".jocan_section_wrap>.jocan_section2_mo>.candle1, .jocan_section_wrap>.jocan_section2_mo>.candle3").hide();
    }});
    $(".but3").on({click:function(){
        $(".jocan_section_wrap>.jocan_section2_mo>.candle3").fadeIn().css({"display" : "block"});
        $(".but2, .but1").css({"border" : "1px solid #4c4b4b", "background-color": "transparent", "color": "#4c4b4b"});
        $(this).css({"background-color" : "#4c4b4b", "color": "#fff"});
        $(".jocan_section_wrap>.jocan_section2_mo>.candle1, .jocan_section_wrap>.jocan_section2_mo>.candle2").hide();
    }});

    $(".but1").trigger("click");
});