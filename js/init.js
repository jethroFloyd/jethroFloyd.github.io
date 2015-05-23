jQuery(document).ready(function($){
    "use strict"; 

        var winHeight = $(window).height();
        var winWidth = $(window).width();

        $('.homeoverlay').css('height', winHeight);
        $('.homeoverlay .home-part .item').css('height', winHeight);

        if(winHeight > 360){$('.homeoverlay .item .slider-part').css('height', winHeight/100*80);}

        else {$('.homeoverlay .item .slider-part').css('height', winHeight);}

        $(window).resize(function() {
            $('.homeoverlay').css('height', winHeight);
            $('.homeoverlay .home-part .item').css('height', winHeight);

            if(winHeight > 360){$('.homeoverlay .item .slider-part').css('height', winHeight/100*80);}

            else {$('.homeoverlay .item .slider-part').css('height', winHeight);}
        });

        $('#mobilenav .nav').height(winHeight-70);

// MENU FIXED START

var offset = winHeight;
var duration = 500;
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
        jQuery('.fixed-nav').addClass('fixed');
    } else {
        jQuery('.fixed-nav').removeClass('fixed');
    }
});

// MENU FIXED END


// MENU FOR MOBILE AND SMALL DEVICES START
    $('#mobile-nav-trigger').click (function(){
        $('#mobilenav').toggleClass('fixed-m-nav');
        $('#body-wrapper').toggleClass('body-wrapper-trigger');
    })

    $('#body-wrapper').click(function(){
        $('#mobilenav').removeClass('fixed-m-nav');
        $('#body-wrapper').removeClass('body-wrapper-trigger');
    })
// MENU FOR MOBILE AND SMALL DEVICES END

// TESTIMONIAL SLIDER START

$("#testimonial-carosel").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    startDragging : pauseOnDragging,
    slideSpeed  :  1000,
    paginationSpeed : 500,
    goToFirstSpeed : 2000,
    singleItem : true,
    responsive : true,
    // touchDrag : false,
    // mouseDrag : false,
    addClassActive : true,
    transitionStyle: 'fadeUp',
});

//PAUSE WHILE DRAGGING 
  function pauseOnDragging(){
      isPause = true;
  }

$('#testimonial .owl-page span').eq(0).html('<img src="../../assets/img/testimonial/01.png">');
$('#testimonial .owl-page span').eq(1).html('<img src="../../assets/img/testimonial/02.png">');
$('#testimonial .owl-page span').eq(2).html('<img src="../../assets/img/testimonial/03.png">');
$('#testimonial .owl-page span').eq(3).html('<img src="../../assets/img/testimonial/04.png">');

// TESTIMONIAL SLIDER END



// LAZYLOAD TRIGGER START
    $("img.lazy").lazyload({threshold : 200, effect : "fadeIn"});
// LAZYLOAD TRIGGER END


// MAGNEFICO POPUP START
        
        /* Popup Animation html attribute
            data-effect="mfp-zoom-in"
            data-effect="mfp-newspaper"
            data-effect="mfp-move-horizontal"
            data-effect="mfp-move-from-top"
            data-effect="mfp-3d-unfold"
            data-effect="mfp-zoom-out"
         */
        
    $('.magnifico-gallery').magnificPopup({
       delegate: 'a',
       type: 'image',
       fixedContentPos: false,
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 400, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function 
            }
        });


        $('.pop').magnificPopup({
            type:'image',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
             beforeOpen: function() {
             // just a hack that adds mfp-anim class to markup 
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
              }
            },
        }); //FOR IMAGE


        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });

// MAGNEFICO POPUP END

    
    // SMOTHSCROLL START

    var scrollOffset = function(){
        if($(window).width() > 992) { //offset value
            return 65;
        } else {
            return 0;
        }
    }

    $('.scroll').on('click',function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            'scrollTop': $($(this).attr('href')).offset().top - scrollOffset()
        }, 1500, 'easeInOutCirc', function () {});

        $('#mobilenav').removeClass('fixed-m-nav');
        $('#body-wrapper').removeClass('body-wrapper-trigger');
        $('section').removeClass('blur');
    });


    // jswing
    // def
    // easeInQuad
    // easeOutQuad
    // easeInOutQuad
    // easeInCubic
    // easeOutCubic
    // easeInOutCubic
    // easeInQuart
    // easeOutQuart
    // easeInOutQuart
    // easeInQuint
    // easeOutQuint
    // easeInOutQuint
    // easeInSine
    // easeOutSine
    // easeInOutSine
    // easeInExpo
    // easeOutExpo
    // easeInOutExpo
    // easeInCirc
    // easeOutCirc
    // easeInOutCirc
    // easeInElastic
    // easeOutElastic
    // easeInOutElastic
    // easeInBack
    // easeOutBack
    // easeInOutBack
    // easeInBounce
    // easeOutBounce
    // easeInOutBounce

// SMOTHSCROLL END

    //MIXITUP TRIGGER START

    jQuery('#Grid').on('.filter', 'click', function(){
        var self = jQuery(this);
        var oldData = self.data('filter');
        alert(oldData)
        if(oldData != 'all') {
            self.data('temp', oldData);
            self.data('filter', 'all');
        } else {
            self.data('filter', self.data('temp'));
            self.removeData('temp');
        }
    }).mixitup();

    jQuery('#Grid img').removeAttr('height');
    jQuery('#Grid img').removeAttr('width');

    //MIXITUP TRIGGER END


    // CONTACT FORM START
    $('#contact').submit(function(){
        var fromData = $('#contact').serialize();
        $(document.body).on('click', '#closebtn', function(){
            $('#contact-confirm').remove();
        });

        $.ajax({
            type: "POST",
            url: "contact.php",
            data: fromData,
            success : function( data ) {
                alert('Your Message Sent successfully');
            },
            error   : function( xhr, err ) {
                alert(fromData);     
            }
        });

        return false;
    });
    // CONTACT FORM END
    

    // FEATURED CLIENTS SECTION START

    if(jQuery(window).width() <= 992){
            $('.more.first').hide();
            $('.more.second').show();
        } else {
            $('.more.second').hide();
            $('.more.first').show();
    }

    $('.more').on('click', function(){
        $('#clients .right').addClass('expand');
        // $('.more').hide();
        $('#less').show();
        $('#clients .left').css('margin-left','-300%');

        $('.container > .show-hide').delay('600').slideDown();

        var x = 800;
        $('#short').nextAll('.c-logo').each(function(){
            $(this).delay(x).fadeIn(600);
            x = x+20;
        });

        if(jQuery(window).width() <= 992){
            $('.more.first').hide();
            $('.more.second').hide();
        }
    });

    $('#less').click(function(){
        $('#clients .right').removeClass('expand');
        $('.more').show();
        $('#less').hide();
        $('#clients .left').css('margin-left','0');
        $('#short').nextAll('.c-logo').fadeOut(200);

        $('.container > .show-hide').slideUp('slow');

        $('.left > h3').css('display','block');
        $('.left > h4').css('display','block');

        if(jQuery(window).width() <= 992){
            $('.more.second').show();
            $('.more.first').hide();
        } else {
            $('.more.second').hide();
            $('.more.first').show();
        }
    });


    $('#short').nextAll('.c-logo').hide();
    

    // HAPPYNESS SECTION NUMBER ANIMATE START
    
    $('#happyness').waypoint(function() {
        $({countNum: $('#online').text()}).animate({countNum: $('#online').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#online').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#online').text(this.countNum);
            }
        });

        $({countNum: $('#clients-no').text()}).animate({countNum: $('#clients-no').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#clients-no').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#clients-no').text(this.countNum);
            }
        });

        $({countNum: $('#projects-no').text()}).animate({countNum: $('#projects-no').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#projects-no').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#projects-no').text(this.countNum);
            }
        });

        $({countNum: $('#traveled').text()}).animate({countNum: $('#traveled').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#traveled').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#traveled').text(this.countNum);
            }
        });
    }, { offset: winHeight});
    
    // HAPPYNESS SECTION NUMBER ANIMATE END


    // COLOR SWITCHER PANEL START

    $('#display-panel-settings').on('click', function(){
        $('.display-panel').toggleClass('dcp-show');
     });

    $('.swatch').on('click', function(){
        var link = 'style-'+$(this).attr('id')+'.css';
        $('#stylesheet').attr('href', link);
    });

    $('#male').click(function(){
        $('img[src="../../assets/img/slider/content-f-1.png"]').attr('src', '../../assets/img/slider/content-m-1.png');
        $('nav img[src="../../assets/img/logo-f.png"]').attr('src', '../../assets/img/logo-m.png');
        $('#slidename').html('Robert');
        $('#aboutname').html('Robert Smith');

        $('.logo div').html("I'm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Robert<span> Smith</span>");
        
        $('#footertext').html("<li>All works <span>&copy; Robert Smith</span> 2014. All rights Reserved</li>");
        
        $('#stylesheet').attr('href', 'style-peterriver.css');
    })

    $('#female').click(function(){
        $('img[src="../../assets/img/slider/content-m-1.png"]').attr('src', '../../assets/img/slider/content-f-1.png');
        $('nav img[src="../../assets/img/logo-m.png"]').attr('src', '../../assets/img/logo-f.png');
        $('#slidename').html('Janifer');
        $('#aboutname').html('Janifer Smith');

        $('.logo div').html("I'm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Janifer<span> Smith</span>");

        $('#footertext').html("<li>All works <span>&copy; Janifer Smith</span> 2014. All rights Reserved</li>");
        $('#stylesheet').attr('href', 'style-wisteria.css');
    })

    // COLOR SWITCHER PANEL END


}) // DOCUMENT.READY END


// chart for skill section start (working)

if ($('#skills').length) {

    var inView = false;

    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }

    var cplusplus    =   [{value : 90, color : "#aed57c"}, {value : 10, color : "#eff7e5"}];
    var c            =   [{value : 90, color : "#aed57c"}, {value : 10, color : "#eff7e5"}];
    var php          =   [{value : 25, color : "#aed57c"}, {value : 75, color : "#eff7e5"}];
    var sql          =   [{value : 50, color : "#aed57c"}, {value : 50, color : "#eff7e5"}];
    var octave	     =   [{value : 50, color : "#aed57c"}, {value : 50, color : "#eff7e5"}];
    var html          =   [{value : 85, color : "#aed57c"}, {value : 15, color : "#eff7e5"}];
    var javascript       =   [{value : 40, color : "#aed57c"}, {value : 60, color : "#eff7e5"}];
    var css       =   [{value : 60, color : "#aed57c"}, {value : 40, color : "#eff7e5"}];
    
    var java           =   [{value : 25, color : "#aed57c"}, {value : 75, color : "#eff7e5"}];
    var uml         =   [{value : 80, color : "#aed57c"}, {value : 20, color : "#eff7e5"}];
    var bouml      =   [{value : 80, color : "#aed57c"}, {value : 20, color : "#eff7e5"}];
    var netbeans  =   [{value : 50, color : "#aed57c"}, {value : 50, color : "#eff7e5"}];
    var eclipse       =   [{value : 60, color : "#aed57c"}, {value : 40, color : "#eff7e5"}];
    var solidworks   =   [{value : 40, color : "#aed57c"}, {value : 60, color : "#eff7e5"}];
    //var bigcommerce  =   [{value : 80, color : "#aed57c"}, {value : 20, color : "#eff7e5"}];

    $(window).scroll(function() {
        if (isScrolledIntoView('#skills')) {
            if (inView) { return; }
            inView = true;
            new Chart(document.getElementById("cplusplus").getContext("2d")).Doughnut(cplusplus);
            new Chart(document.getElementById("c").getContext("2d")).Doughnut(c);
            new Chart(document.getElementById("php").getContext("2d")).Doughnut(php);
            new Chart(document.getElementById("sql").getContext("2d")).Doughnut(sql);
            new Chart(document.getElementById("octave").getContext("2d")).Doughnut(octave);
            new Chart(document.getElementById("html").getContext("2d")).Doughnut(html);
            new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(javascript);
            new Chart(document.getElementById("css").getContext("2d")).Doughnut(css);
           
            new Chart(document.getElementById("java").getContext("2d")).Doughnut(java);
            new Chart(document.getElementById("uml").getContext("2d")).Doughnut(uml);
            new Chart(document.getElementById("bouml").getContext("2d")).Doughnut(bouml);
            new Chart(document.getElementById("netbeans").getContext("2d")).Doughnut(netbeans);
            new Chart(document.getElementById("eclipse").getContext("2d")).Doughnut(eclipse);
            new Chart(document.getElementById("solidworks").getContext("2d")).Doughnut(solidworks);
           // new Chart(document.getElementById("bigcommerce").getContext("2d")).Doughnut(bigcommerce);
        } else {
            if ($(window).width() >=1024) {;
                inView = false;  
            }
        }
    });
}

// chart for skill section end


// CSS3 AMINATION TRIGGER FOR SLIDER START

$('#home-slider').bind('slide.bs.carousel', function (e) {
  $('#home-slider .slideInLeftTrigger').removeClass('slideInLeft');
  $('#home-slider .fadeInRightBigTrigger').removeClass('fadeInRightBig');
})

$('#home-slider').bind('slid.bs.carousel', function (e) {
  $('#home-slider .slideInLeftTrigger').addClass('slideInLeft');
  $('#home-slider .fadeInRightBigTrigger').addClass('fadeInRightBig');

})

// CSS3 AMINATION TRIGGER FOR SLIDER END