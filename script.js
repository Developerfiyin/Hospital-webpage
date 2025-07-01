$(document).ready(function () {
  $("feedback-slider").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
    navText: [
      "<i class = 'fas fa-arrow-left'></i>, <i class = 'fas fa-arrow-right'></i>",
    ],
  });
});
