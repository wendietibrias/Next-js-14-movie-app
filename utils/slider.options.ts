export const movieSliderOptions = {
  dots: false,
  infinite: true,
  speed: 1200,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 6000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
  ],
};
