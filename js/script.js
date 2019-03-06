

var owl = $('.owl-carousel');
owl.owlCarousel({

    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
          responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        920:{
            items:2,
            nav:true
        },
        1760:{
            items:3,
            nav:true,
            loop:true
        }
    }
  
});



$(".next_button").click(function() {
    owl.trigger("owl.next");
  });
  $(".prev_button").click(function() {
    owl.trigger("owl.prev");
  });



$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('header').addClass("glide");
    }
    else{
    $('header').removeClass("glide");
    }
    });
    


    