$(function(){
    $("section>.cafe_cont>.cafe_small>li").click(function(){
        $("section>.cafe_cont>.cafe_small>li>h3").css({"color" : "#85857d"});
        $(this).find("h3").css({"color" : "#50a38f"});

        tit = $(this).find("h3").text();
        $(".big_name").text(tit);


        sul = $(this).find("p").text();
        $(".big_cont").html(sul.replace(/\n/g, '<br/>'));

        imgsrc = $(this).children().find("img").attr("src");
        $(".cafe_img").attr("src", imgsrc);

        
    });
});