import React from "react";
import * as S from "./header.styled";
import Button from "../Button/Button";
import illustration from "../../assets/img/illustration.svg";
import element_dots from "../../assets/img/element_dots.svg";

const Header = () => (
  <div>
    <S.BackgroundSvg src={element_dots} />
    <S.HeaderContainer isHeader>
      <S.HeaderDescription isHeader isLeft>
        <S.HeaderTitle>Virtual Healthcare for you</S.HeaderTitle>
        <S.HeaderText>
          Sevacare provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </S.HeaderText>
        <S.ButtonContainer>
          <Button isBlue>Consult now</Button>
        </S.ButtonContainer>
      </S.HeaderDescription>
      <S.HeaderImageContainer>
        <S.HeaderImage src={illustration} />
      </S.HeaderImageContainer>
    </S.HeaderContainer>
  </div>
);

export default Header;
