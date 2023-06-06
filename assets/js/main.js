$('#slides').owlCarousel({
  loop:true,
  margin:10,
  autoplay: false,
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