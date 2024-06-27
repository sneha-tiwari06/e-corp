$(document).ready(function() {
    "use strict";
    
    $(".scrollDown").click(function() {
        const scrollToElement = $(".scrollto");
        if (scrollToElement.length) {
            $('html,body').animate({
                scrollTop: scrollToElement.offset().top
            }, 100);
        }
    });

    $(".client-filter-btn").click(function(){
        $(".client-filter-btn.active").removeClass("active");
        $(this).addClass("active");

        $(".hm-clientele-filter-bigbox").hide();
        const targetElement = $("#hm-clientele-filter-bigbox-" + $(this).data("target"));
        if (targetElement.length) {
            targetElement.fadeIn(300);
        }
    });
    
    // $(".testimSlider").slick({
    //     arrows: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     autoplay: false,
    //     cssEase:'linear',
    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             cssEase:'linear',
    //           }
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             cssEase:'linear',
    //           }
    //         },
    //         {
    //           breakpoint: 426,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             cssEase:'linear',
    //           }
    //         }
    //         // You can unslick at a given breakpoint now by adding:
    //         // settings: "unslick"
    //         // instead of a settings object
    //     ]
    // });
});

$(window).scroll(function() {
    "use strict";
    var wScroll = $(window).scrollTop();

    // if(wScroll > $('.videoContainer').offset().top - ($(window).height() / 2)) {
    //     $("#homeVideo")[0].play();
    // } else{
    //     $("#homeVideo")[0].pause();
    // }

    /*if(wScroll > $('.animate-section1').offset().top - ($(window).height() / 1.5)) {
        $('.animate-section1 .animate').each(function(i){
            setTimeout(function(){
                $('.animate-section1 .animate').eq(i).addClass('doneTranslate');
            }, 150 * (i+1));
        });
    }*/

    function checkAndAnimate(containerId) {
        const container = $(containerId);
        if (container.length && wScroll > container.offset().top - ($(window).height() / 1.5)) {
            container.find('.animate').each(function(i) {
                setTimeout(() => {
                    $(this).addClass('doneTranslate');
                }, 150 * (i + 1));
            });
            setTimeout(() => {
                $(".doBeat").addClass('doneBeat');
            }, 1500);
        }
    }

    checkAndAnimate('#digi-mark-container');
    checkAndAnimate('#design-development-container');
    checkAndAnimate('#app-development-container');
    checkAndAnimate('#branding-container');
});
