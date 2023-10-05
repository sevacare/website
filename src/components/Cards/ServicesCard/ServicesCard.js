import React from "react";
import * as S from "../ServicesCard/servicesCard.styled";
import PropTypes from "prop-types";

const ServicesCard = ({ image, title, text }) => (
  <S.ServicesCardContainer>
    <S.ServicesCardImage>
      <img src={image} alt="Card image" />
    </S.ServicesCardImage>
    <S.ServicesCardTitle>{title}</S.ServicesCardTitle>
    <S.ServicesCardDescription>{text}</S.ServicesCardDescription>
  </S.ServicesCardContainer>
);

ServicesCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServicesCard;
