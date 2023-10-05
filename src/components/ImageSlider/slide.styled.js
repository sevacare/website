import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 10%;
`;

export const SliderPage = styled.div`
  max-height: 425px;
  background: linear-gradient(208.18deg, #67c3f3 9.05%, #5a98f2 76.74%);
  border-radius: 24px;
  color: #fff;
  text-align: center;
  padding: 70px 80px 80px 0;
`;

export const SlideTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  color: #ffffff;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 8%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const FounderInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ImageContainer = styled.img`
  flex: 1;
  width: 100px;
  height: 100px;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid white;
  background-color: #fff;
  margin-left: 120px;
`;

export const FounderText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const FounderName = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 22px;
  line-height: 48px;
  color: #ffffff;
`;
export const FounderDescription = styled.div`
  font-family: "Mulish";
  font-weight: normal;
  font-size: 18px;
  line-height: 48px;
  color: rgba(255, 255, 255, 0.85);
`;

export const DescriptionContainer = styled.div`
  padding-left: 10%;
  text-align: left;
  flex: 1;
  font-family: "Mulish";
  font-weight: normal;
  font-size: 19px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.9);
`;

export const Container = styled.div`
  .slick-prev {
    left: 40%;
    position: absolute;
    top: 108%;
  }
  .slick-next {
    right: 40%;
    position: absolute;
    top: 108%;
  }
  .slick-prev,
  .slick-next {
    width: 28px;
    color: #000;
  }
  .slick-dots li button:before {
    top: 20px;
    color: #5b9bf3;
    opacity: 0.3;
  }
  .slick-dots li.slick-active button:before {
    color: #5b9bf3;
  }
`;
