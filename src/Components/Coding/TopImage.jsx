import React from "react";
import styled from "styled-components";
import avatar from "../../Assets/ddd-min.png";
import Windows from "./Windows";

function TopImage() {
  return (
    <Section>
      <ImgDiv>
        <Title>
          <Span>our</Span> <br></br> <Bold>democracy</Bold>{" "}
          <Span>has been </Span> <br></br> hacked
        </Title>
        <Img src={avatar} alt="photo" />
      </ImgDiv>
      <Windows />
    </Section>
  );
}

const Section = styled.section`
  height: auto;
  width: 100%;
`;

const ImgDiv = styled.div`
  height: 600px;
  position: relative;
  overflow: hidden;
  width: 100%;
  @media (min-width: 420px) {
    display: none;
  }
`;

const Title = styled.h1`
  backdrop-filter: blur(3px);
  font: bold 5.2rem semplicitapro;
  height: 600px;
  line-height: 140px;
  position: absolute;
  text-transform: uppercase;
  text-align: center;
  z-index: 22;
  width: 100%;
`;

const Img = styled.img`
  filter: brightness(0.5);
  height: 100%;
  object-fit: cover;
  transform: scale(1.3) translateX(10px);
  width: 100%;
`;

const Bold = styled.span`
  font: bold 3.2rem semplicitapro;
`;

const Span = styled.span`
  color: white;
  font: normal 2.3rem semplicitapro;
  letter-spacing: 10px;
`;

export default TopImage;
