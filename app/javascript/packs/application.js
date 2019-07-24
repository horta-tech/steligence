import "bootstrap";
import "slick-carousel";

$(".carousel").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  prevArrow: "<div class='left-arrow'></div>",
  nextArrow: "<div class='right-arrow'></div>",
  dots: true
});

