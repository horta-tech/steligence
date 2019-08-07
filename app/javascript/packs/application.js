import "bootstrap";
import "slick-carousel";

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         console.log('wooo')
//         let yCoordinate = document.querySelector(this.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
//         let yOffset = -80;

//         window.scrollTo({
//             behavior: 'smooth',
//             top: yCoordinate + yOffset
//         });
//     });
// });

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    console.log('jquery wooo')
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 500);
});


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
  prevArrow: "<div class='left-arrow' style='left: -30px;'></div>",
  nextArrow: "<div class='right-arrow' style='right: -30px;'></div>",
  dots: false
});

$(".differential-carousel").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: "<div class='left-arrow' style='left: -100px;'></div>",
  nextArrow: "<div class='right-arrow' style='right: -30px;'></div>",
  dots: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        prevArrow: "<div class='left-arrow' style='left: -25px;'></div>",
        nextArrow: "<div class='right-arrow' style='right: -15px;'></div>",
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
