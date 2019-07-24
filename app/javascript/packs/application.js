import "bootstrap";
import "slick-carousel";

$(".banner-carousel").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});

$(".cornerstone-carousel").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "<div class='left-arrow'></div>",
  nextArrow: "<div class='right-arrow'></div>",
  dots: false
});
