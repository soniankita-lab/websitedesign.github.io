/************fadeout preloader************/

$(window).on('load', function () {
    /***make sure that whole website is fully loaded**/
    $('#status').fadeOut(); /****yellow portion****/
    $('#preloader').delay(200).fadeOut('slow');

});

/******************** responsive navigation **********/

function responsive_menu(){
    var e = document.getElementById('menu-small');
    if(e.className === 'menu-list'){
        e.className+= " responsive";
    }
    else{
        e.className = 'menu-list';
    }
}





/******* show and hide white navigation ********/

$(window).scroll(function(){
   // alert("hello!");//
    
    if($(window).scrollTop() >50){
        
       // white bar //
        //alert("your scroll is greater than 50px, your scroll is= " +$(window).scrollTop());
        $("nav").addClass("white-nav-top");
        
        //show back-to-top button//
        $("#back-to-top").fadeIn();
       }
    else{
        //hide white bar//
     //alert("your scroll is less than 50px, your scroll is= " +$(window).scrollTop());
         $("nav").removeClass("white-nav-top");
      
    // hide back-to-top button//
    $("#back-to-top").fadeOut();
         }
});

/********** scroll-spy for menu ****************/



/**************** menu button *******************/

$(function(){
    
    // show mobile nav //
    
    $("#mobile-nav-open-btn").click(function(){
      $("#mobile-nav").css("height","100%");
    });
    
    // hide mobile nav //
    
    $("#mobile-nav-close-btn,#mobile-nav a").click(function(){
      $("#mobile-nav").css("height","0%");
    });
});





/*************** progress bar *******************/

$('#progress-elements').waypoint(function () {


    $('.skill-per').each(function () {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
    });

}, {
    offset: 'bottom-in-view'
});


/************** portfolio filter ****************/

$(window).on('load', function () {

    $('.filtering').isotope({
            
    });
    
    // filter items on button click //

    $('#filter-btn').on('click', 'button', function () {

        // get filter value //

        var filterValue = $(this).attr('data-filter');

        // filter portfolio //

        $('.filtering').isotope({
            filter: filterValue
        });
        
        // active button //
        
        $('#filter-btn').find('.active').removeClass('active');
          $(this).addClass('active');

    });

});


/******* portfolio magnific-popup *******/

$('#portfolio-wrappers').magnificPopup({
  delegate: 'a',             // child items selector, by clicking on it popup will open
  type: 'image',
     gallery: {
      enabled: true
    }

});

/************** responsive-tabs***********************/

$('#services-tabs').responsiveTabs({
    startCollapsed: 'accordion'
});


/*********** testimonial slider **********************/

var owl = $('#testimonial-slider .owl-carousel');
owl.owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1500])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})



/********** stats section for counting no. ***********/

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

/************** client section image-slider **********/

var owl = $('#client-list .owl-carousel');
owl.owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1500])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

/********** team section image-slider *************/

var owl = $('.wrappers .owl-carousel');
owl.owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }

});

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1500])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})


//********* Animate at Scroll ********//

$(function(){
    new WOW().init();
});

//********** home animation on page load *******//

$(window).on('load', function () {
    $("#home-heading h1").addClass("animate__fadeInDownBig");
    $("#home-heading h2").addClass("animate__fadeInLeft");
    $("#home-text p").addClass("animate__zoomIn");
    $("#home-btn").addClass("animate__zoomIn");
    $("#arrow-down i").addClass("animate__fadeInDown animate__infinite");    
});

