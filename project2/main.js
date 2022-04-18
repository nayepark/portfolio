$(function(){

    
    // ww=$(window).width();
    iwidth=$(window).width();
  

    $(window).resize(function(){
        iwidth=$(window).width();
        
    });
    
    
    
    iheight=$(".item").height();
    icnt=$(".item").length;//3



    slcont_w=iwidth*icnt;

    console.log(icnt, slcont_w);

    $(".item").width(iwidth);
    $(".mone").height(iheight);
    $(".mcont").width(slcont_w).height(iheight);
    $(".mbox, .mone").width(iwidth);

    go=0;
    function mainmove (){
        $(window).resize(function(){
            iwidth=$(window).width();
            
        });
        
        if (go == icnt-1){
            $(".mcont").css({left:0});
            go=1;
            console.log(go);
        } else {
            go++;
            console.log(go);
        };

        $(".mcont").animate({left : -go*iwidth});
        if(go==3){
            $("section>.mbox>.mpage>a").eq(0).addClass("active").siblings().removeClass("active");
        };
        $("section>.mbox>.mpage>a").eq(go).addClass("active").siblings().removeClass("active");
    };

    maingo=setInterval(function(){mainmove()}, 2000);

    $("section>.mbox>.mpage>a").hover(function(){
        clearInterval(maingo);
        go=$("section>.mbox>.mpage>a").index($(this));
        $(".mcont").animate({left: -go*iwidth});

        $("section>.mbox>.mpage>a").eq(go).addClass("active").siblings().removeClass("active");
    }, function(){
        maingo=setInterval(function(){mainmove()}, 2000);
    });



    $(window).scroll(function(){
        if ($(this).scrollTop()>400){
            $("section>.art1>.art1_r").css({"opacity" : "1"});
        } else {
            // $("section>.art1>.art1_r").css({"opacity" : "0"});
        };
    });

    
    $(window).scroll(function(){
        if ($(this).scrollTop()>1000){
            $("section>.art2 .art2_r").css({"opacity" : "1"});
        } else {
            // $("section>.art1>.art1_r").css({"opacity" : "0"});
        };
    });

    $(window).scroll(function(){
        if ($(this).scrollTop()>1600){
            $("section>.art3>.art3_lw").css({"opacity" : "1"});
        } else {
            // $("section>.art1>.art1_r").css({"opacity" : "0"});
        };
    });

    $(window).scroll(function(){
        if ($(this).scrollTop()>2000){
            $("section>.art4>.art4_sw").css({"opacity" : "1"});
        } else {
            // $("section>.art1>.art1_r").css({"opacity" : "0"});
        };
    });


    
    $(".ve_img").mouseenter(function(){
       $(this).children().stop().animate({"right": "0px"}, 600);
    });

    $(".ve_img").mouseleave(function(){
        $(this).children().stop().animate({"right": "-600px"}, 600);
    });

    $(".veg_img").mouseenter(function(){
        $(this).children().stop().animate({"left": "0px"}, 600);
    });
    $(".veg_img").mouseleave(function(){
        $(this).children().stop().animate({"left": "-600px"}, 600);
    });

    
});