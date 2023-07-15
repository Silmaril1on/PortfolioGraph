import React from "react";
import styled from "styled-components";
import photo1 from "../../../Assets/uni1.jpg";
import photo2 from "../../../Assets/uni2.jpg";
import photo3 from "../../../Assets/uni3.jpg";

function IliaPhotos() {
  return (
    <Section>
      <ImgDiv>
        <Img src={photo1} alt="photo" />
      </ImgDiv>
      <ImgDiv>
        <Img src={photo2} alt="photo" />
      </ImgDiv>
      <ImgDiv>
        <Img src={photo3} alt="photo" />
      </ImgDiv>
    </Section>
  );
}

const Section = styled.section`
  display: none;
  position: absolute;
  height: 100%;
  top: 0;
  width: 100%;
  @media (min-width: 950px) {
    display: block;
  }
`;

const ImgDiv = styled.div`
  height: auto;
  position: absolute;
  width: 160px;
  &:nth-child(1) {
    top: 215px;
    left: 95px;
    z-index: 1;
  }
  &:nth-child(2) {
    top: 45px;
    left: 35px;
  }
  &:nth-child(3) {
    top: 84px;
    right: 45px;
  }
`;

const Img = styled.img`
  border-radius: 20px;
  box-shadow: 0 0 15px black;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.3);
  width: 100%;
`;

export default IliaPhotos;
