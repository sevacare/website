import React from "react";
import * as S from "./services.styled";
import vector_left from "../../assets/img/vector_left.svg";
import ServicesCard from "../Cards/ServicesCard/ServicesCard";
import Button from "../Button/Button";
import { servicesCards } from "./cardsData";
import element_dots from "../../assets/img/element_dots.svg";

const Services = () => (
  <div>
    <S.DecorationBackground src={vector_left} alt="Vector Left" />
    <S.DecorationBackgroundDots src={element_dots} alt="Element Dots" />
    <S.Wrapper>
      <S.ServicesTitle>Our services</S.ServicesTitle>
      <S.LimitingLine isServices />
      <S.ServicesDescription>
        We provide to you the best choices for you. Adjust it to your health
        needs and make sure you undergo treatment with our highly qualified
        doctors. You can consult with us to determine which type of service is suitable for your health.
      </S.ServicesDescription>
      <S.CardsContainer>
        {servicesCards.map((card) => (
          <ServicesCard
            key={card.id}
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </S.CardsContainer>
      <S.ButtonContainer>
        <Button>Learn more</Button>
      </S.ButtonContainer>
    </S.Wrapper>
  </div>
);

export default Services;
