$(document).ready(function() {
    "use strict";
    
    $("#menuBtn").click(function() {
        $('.logo').fadeOut(300);
        $('.menuContainer').stop().fadeIn(250).toggleClass('active');
        $('body').addClass('overflow-hidden');
    });
    $(".closemenu").click(function() {
        $('.logo').fadeIn(300);
        $('.menuContainer').stop().fadeOut(250).toggleClass('active');
        $('body').removeClass('overflow-hidden');
    });
    $("#sayhello").click(function() {
        $('.helloContainer').addClass('active');
        $('body').addClass('overflow-hidden');
    });
    $(".helloClose").click(function() {
        $('.helloContainer').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });
    
    $(".button-top").click(function(){
       $("html,body").animate({scrollTop:'0px'},100);
    });
    
    $('[data-magnify]').magnify({
        headToolbar: ['close'],
        initMaximized: true
    });
});

$(window).scroll(function(){
    "use strict";
    
    var wScroll = $(this).scrollTop();
    
    if (wScroll > 50) {
        $(".header, .menuBtn, .button-top").addClass("fixed");
    } else {
        $(".header, .menuBtn, .button-top").removeClass("fixed");
    }
	

// document.addEventListener('page:load', function() {
//     initializePlugins();
// });


// window.addEventListener("storage", (event) => {
//     location.reload();
// });
});

