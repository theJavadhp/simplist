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
  


  $("#new-todo").keypress(function (event) {
	var keycode = event.keyCode ? event.keyCode : event.which;
	if (keycode == "13") {
		console.log("pressed");

		if ($(this).val().length !== 0) {
			var toDoCount = $("span.box").length + 1;

			$("#todos").prepend(
				'<li><input id="checkbox-' +
					toDoCount +
					'" type="checkbox"><label for="checkbox-' +
					toDoCount +
					'">' +
					$(this).val() +
					'<span class="box"></span></label></li>'
			);
			$(this).val("");
		}
	}
});


$("#todos").on("click", "label", function () {
	$(this).closest("li").toggleClass("done");
});

gsap.registerPlugin(EasePack);

const tl = gsap.timeline();
var master = new TimelineMax();

