$('.slider-line').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    dots: true,
});

$('.features__slider').slick({
    centerMode: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 15000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          dots: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });
  $('.service__slider').slick({
    centerMode: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });