(function($){
    "use strict";

    function navbarFixed() {
        var nav_offset_top = $('.header_top_bar').height() + 10;
        if ($('.fixed').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".fixed").addClass("navbar_fixed");
                    $('.header_top_bar').css({
                        "margin-top": "-53px"
                    });
                } else {
                    $(".fixed").removeClass("navbar_fixed");
                    $('.header_top_bar').css({
                        "margin-top": "0px"
                    });
                }
            });
        };
    };
    navbarFixed();


    function mainSlider() {
        var BasicSlider = $('.slider_active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.slider_item:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.slider_item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
            speed: 1000,
            arrows: false,
            cssEase: 'linear',
            // prevArrow:'<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
            // nextArrow:'<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
            responsive: [
                { breakpoint: 850, 
                    settings: { dots: true, arrows: false } 
                }
            ]
        });
    
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();




    $('select').niceSelect();
})(jQuery);