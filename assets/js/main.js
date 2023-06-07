$('#slides').owlCarousel({
  loop:true,
  margin:10,
  autoplay: true,
  smartSpeed: 1500,
  nav:false,
  dots: true, 
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

// Fix Header Js
$(window).scroll(function(){
    if ($(window).scrollTop() >= 250) {
        $('header').addClass('fix_style');
    }
    else {
        $('header').removeClass('fix_style');
    }
    if ($(window).scrollTop() >= 260) {
        $('header').addClass('fixed');
    }
    else {
        $('header').removeClass('fixed');
    }
  });
  