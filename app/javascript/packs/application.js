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

$(".differential-carousel").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: "<div class='left-arrow' style='left: -30px;'></div>",
  nextArrow: "<div class='right-arrow' style='right: -30px;'></div>",
  dots: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false
      }
    }
  ]
});

$(".testimonial-carousel").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});


$(".fundacao-carousel").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});

$(".piso-carousel").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});

$(".estrutura-carousel").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});

$(".laje-carousel").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});

$(".vedacao-carousel").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});

$(".envelope-carousel").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});
