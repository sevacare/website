import React from "react";
import * as S from "./navigationBar.styled";
import logo from "../../assets/icons/logo.svg";

const NavigationBar = () => (
  <S.Wrapper>
    <S.LeftSide>
      <S.LogoContainer src={logo} />
    </S.LeftSide>
    <S.RightSide>
      <S.NavigationLink>Home</S.NavigationLink>
      <S.NavigationLink>Find a doctor</S.NavigationLink>
      <S.NavigationLink>Apps</S.NavigationLink>
      <S.NavigationLink>Testimonials</S.NavigationLink>
      <S.NavigationLink>About us</S.NavigationLink>
    </S.RightSide>
  </S.Wrapper>
);

export default NavigationBar;
