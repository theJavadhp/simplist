$("#slides").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  smartSpeed: 1500,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});


$('#team_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    smartSpeed: 2500,
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
$(window).scroll(function () {
  if ($(window).scrollTop() >= 150) {
    $("header").addClass("fix_style");
  } else {
    $("header").removeClass("fix_style");
  }
  if ($(window).scrollTop() >= 150) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});

function updateCount() {
  var count = $("#todos li:not(.done)").length;
  $("#countSpan").text(count);
}

updateCount();

$("#new-todo").keypress(function (event) {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode === 13) {
    console.log("pressed");
    if ($(this).val().length !== 0) {
      var toDoCount = $("#todos li").length + 1;
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
      updateCount();
    }
  }
});

$("#todos").on("click", "label", function () {
  $(this).closest("li").toggleClass("done");
  updateCount();
});
