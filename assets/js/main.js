(function($){
    "use strict";

    // function slickFeature(){
    //     $('.feature_wrap_slide').slick({
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         arrows: true,
    //         dots: false,
    //         centerMode: true,
    //         centerPadding: '0px',
    //         // cssEase: 'linear',
    //         pauseOnHover: false,
    //         // loop: true,
    //         infinite: true,
    //         autoplay: false,
    //         speed: 4000,
    //         autoplaySpeed: 2000,
    //         prevArrow:'<button type="button" class="slick-prev"><i class="lnr lnr-chevron-left"></i></button>',
    //         nextArrow:'<button type="button" class="slick-next"><i class="lnr lnr-chevron-right"></i></button>',
    //         responsive: [
    //             {
    //               breakpoint: 1024,
    //               settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //               }
    //             },
    //             {
    //               breakpoint: 600,
    //               settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //               }
    //             },
    //             {
    //               breakpoint: 480,
    //               settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //               }
    //             }
    //           ]
    //       });
    
    // }
    // slickFeature();


  /*-------------------------------------
    WOW
    -------------------------------------*/
    // var wow = new WOW({
    //     boxClass: "wow",
    //     animateClass: "animated",
    //     offset: 0,
    //     mobile: false,
    //     live: true,
    //     scrollContainer: null,
    //   });
    






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



// preloader
    function Preloaderslide() {
        $("#preloader").delay(2000).fadeOut("slow");
    }
    Preloaderslide();

    // $(window).on('load', function() {
       
    //   });



    //   $(".nav a").on("click", function(){
    //     $(".nav").find(".active").removeClass("active");
    //     $(this).parent().addClass("active");
    //  });


    $('select').niceSelect();


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 45,
        nav:true,
        items:3,
        center:false,
        autoplay: true,
        autoplaySpeed: 2500,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                margin: 0,
            },
            480:{
                items:1,
            },
            767:{
                items:2,
                margin: 30,
            },
            992:{
                items:3,
            },
            1366:{
                items:3
            }
        }
    })
    

 /*-------------------------------------
    TweenMax Mouse Effect
    -------------------------------------*/
    $(".motion-effects-wrap").mousemove(function (e) {
        parallaxIt(e, ".motion-effects1", -100);
        parallaxIt(e, ".motion-effects2", -200);
        parallaxIt(e, ".motion-effects3", 100);
        parallaxIt(e, ".motion-effects4", 200);
        parallaxIt(e, ".motion-effects5", -50);
        parallaxIt(e, ".motion-effects6", 50);
      });
    
      function parallaxIt(e, target_class, movement) {
        var $wrap = $(e.target).parents(".motion-effects-wrap");
        if (!$wrap.length) return;
        var $target = $wrap.find(target_class);
        var relX = e.pageX - $wrap.offset().left;
        var relY = e.pageY - $wrap.offset().top;
    
        TweenMax.to($target, 1, {
          x: ((relX - $wrap.width() / 2) / $wrap.width()) * movement,
          y: ((relY - $wrap.height() / 2) / $wrap.height()) * movement,
        });
      }

      function videoPopup() {
        if ($('.popup-youtube').length) {
          $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
          });
          $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
          });
        }
      }
      videoPopup();
  



      function filTeTiSotOp() {
        var $grid = $('.msnary-grid');
        if( $grid.length ){
            $grid.imagesLoaded( function() {
                $grid.isotope({
                    itemSelector: '.msnary-item',
                    horizontalOrder: true,
                    percentPosition: true,
                    layoutMode: 'masonry',
                    animationOptions :{
                        duration:1000
                    },
                    stagger: 0,
                    transitionDuration: '0.9s',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        columnWidth: 1,
                        columnWidth: '.grid-sizer',
                        gutter: 30,
                        // horizontalOrder: false
                    }
                });
            });
        }
    }
    filTeTiSotOp();


    function custommagnificpopup(){
        $('.image-link').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom animated animate__fadeInDown',
            gallery:{
              enabled:true
            }
          });
    }
    custommagnificpopup();


})(jQuery);