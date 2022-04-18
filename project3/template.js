$(function(){

(function($) { "use strict";
        
//Page cursors

document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", 
    t.style.top = n.clientY + "px", 
    e.style.left = n.clientX + "px", 
    e.style.top = n.clientY + "px", 
    i.style.left = n.clientX + "px", 
    i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}



$(document).ready(function() {	
    
    /* Hero Case study images */			
    
    $('.slide-buttons li:nth-child(1)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(1)').addClass("show");
        $('.slide-buttons li:nth-child(1)').addClass('active');
    })
    $('.slide-buttons li:nth-child(2)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(2)').addClass("show");
        $('.slide-buttons li:nth-child(2)').addClass('active');
    })
    $('.slide-buttons li:nth-child(3)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(3)').addClass("show");
        $('.slide-buttons li:nth-child(3)').addClass('active');
    })
    $('.slide-buttons li:nth-child(4)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(4)').addClass("show");
        $('.slide-buttons li:nth-child(4)').addClass('active');
    })
    $('.slide-buttons li:nth-child(5)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(5)').addClass("show");
        $('.slide-buttons li:nth-child(5)').addClass('active');
    })
    $('.slide-buttons li:nth-child(6)').on('mouseenter', function() {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass("show");
        $('.hero-center-section:nth-child(6)').addClass("show");
        $('.slide-buttons li:nth-child(6)').addClass('active');
    })
    $('.slide-buttons li:nth-child(1)').trigger('mouseenter')   
    
});


 //Navigation
    
 var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.slide-buttons li');
        applyListeners();
    };
    var applyListeners = function applyListeners() {
        menu.addEventListener('click', function () {
            return toggleClass(body, 'nav-active');
        });
    };
    var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
    };
    init();
}();



})(jQuery); 


});