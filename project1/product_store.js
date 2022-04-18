$(document).ready(function(){

     //$(".mob_x").hide();
     $(".jo_header_wrap>.popu").hide();
     //$(".jo_header_wrap>.jo_header>.header_top>.mob>.mobile_ul").hide();
 
     var pos;
 
     $(".mob_but").on({click:function(){
 
         pos = $(window).scrollTop();
         console.log(pos);
 
         $("html, body").addClass("not_scr");
         $(".jo_header_wrap2, .jo_section_wrap,  .jo_side_mo, .jo_footer_wrap").css("top", -pos);
 
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


     $(".jo_section_wrap>.fa-angle-right").on({click:function(){
        $(".side_mo").animate({"left": "0px"});
        $(this).hide();
     }});
     $(".side_mo>.fa-angle-left").on({click:function(){
        $(".side_mo").animate({"left": "-150px"});
        $(".jo_section_wrap>.fa-angle-right").show();
     }});
     
 
    $(".ibox").hide();
    $(".mbot_img").hover(function(){
        $(".ibox").fadeIn("linear");
    }, function(){
        $(".ibox").fadeOut();
    });
});