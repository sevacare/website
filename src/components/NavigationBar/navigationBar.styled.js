import styled from "styled-components";

export const Wrapper = styled.div`
  top: 0;
  margin: 30px 100px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  cursor: pointer;
`;

export const NavigationLink = styled.div`
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
  color: #1f1534;
  opacity: 0.5;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    color: #000;
    opacity: 1;
    transition: color 0.3s;
  }
`;
export const LogoContainer = styled.img`
  width: 160px;
  height: 41px;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`;

export const RightSide = styled.div`
  display: none;
  @media (min-width: 868px) {
    display: flex;
    flex-direction: row;
  }
`;
