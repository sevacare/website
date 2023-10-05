import React from "react";
import * as S from "../ServicesCard/servicesCard.styled";
import PropTypes from "prop-types";

const ServicesCard = ({ image, title, text }) => (
  <S.ServicesCardContainer>
    <S.ServicesCardImage>
      <img src={image} alt={`${title} card`} /> {/* Updated alt attribute */}
    </S.ServicesCardImage>
    <S.ServicesCardTitle>{title}</S.ServicesCardTitle>
    <S.ServicesCardDescription>{text}</S.ServicesCardDescription>
  </S.ServicesCardContainer>
);

ServicesCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServicesCard;
