$(document).ready(function () {
  $(".feedback-slider").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
    navText: [
      "<i class = 'fas fa-arrow-left'></i>, <i class = 'fas fa-arrow-right'></i>",
    ],
  });

  /*STOP ANIMATION ON RESIZE */
  let resignation;
  $(window).resize(function () {
    $(document.body).addClass("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      $(document.body).removeClass("resize-animation-stopper");
    }, 400);
  });
});
