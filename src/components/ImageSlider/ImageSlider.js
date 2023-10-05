import Slider from "react-slick";
import React from "react";
import Slide from "./Slide";
import * as S from "./slide.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import right_arrow from "../../assets/icons/right_arrow.svg";
import left_arrow from "../../assets/icons/left_arrow.svg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <img src={right_arrow} />,
    prevArrow: <img src={left_arrow} />,
  };
  return (
    <S.Container>
      <Slider {...settings}>
        <div>
          <Slide />
        </div>
        <div>
          <Slide />
        </div>
        <div>
          <Slide />
        </div>
        <div>
          <Slide />
        </div>
      </Slider>
    </S.Container>
  );
};

export default ImageSlider;
