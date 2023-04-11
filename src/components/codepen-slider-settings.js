export const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "10px",
  slidesToShow: 3,
  speed: 500,
  responsive: [
    {
      breakpoint: 1331,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
  ],
};
