import React from "react";
import * as S from "../Header/header.styled";
import * as C from "../Services/services.styled";
import Button from "../Button/Button";
import leading_healthcare_illustration from "../../assets/img/leading_healthcare_illustration.svg";

const LeadingHealthcareSection = () => (
  <S.HeaderContainer>
    <S.HeaderImageContainer>
      <S.HeaderImage src={leading_healthcare_illustration} />
    </S.HeaderImageContainer>
    <S.HeaderDescription isRight>
      <S.HeaderTitle>Leading healthcare providers</S.HeaderTitle>
      <C.LimitingLine />
      <S.HeaderText>
        Sevacare provides progressive, and affordable healthcare, accessible on
        mobile and online for everyone. To us, it’s not just work. We take pride
        in the solutions we deliver
      </S.HeaderText>
      <S.ButtonContainer>
        <Button>Learn more</Button>
      </S.ButtonContainer>
    </S.HeaderDescription>
  </S.HeaderContainer>
);

export default LeadingHealthcareSection;
