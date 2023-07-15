import React from "react";
import styled from "styled-components";
import me from "../../../../Assets/we-min.jpg";

function DieselInfo() {
  return (
    <Section>
      <ImgDiv>
        <Img src={me} alt="photo" />
      </ImgDiv>
      <ContentDiv>
        <Headline>
          {" "}
          <Span>diesel</Span> georgia{" "}
        </Headline>
        <Address>50 Ilia Chavchavadze Avenue, Tbilisi 0179</Address>
        <Address>1 Petre Kavtaradze St, Tbilisi 0186</Address>
        <Desc>
          Edgy fashion chain for men, women & kids, known for its high-end denim
          collections.
        </Desc>
      </ContentDiv>
    </Section>
  );
}

const Section = styled.section`
  height: 700px;
  position: relative;
  width: 100%;
`;

const ImgDiv = styled.div`
  height: 220px;
  position: absolute;
  top: 35px;
  right: 25px;
  width: 300px;
`;

const Img = styled.img`
  border: 1px solid #ddd;
  border-bottom-left-radius: 120px;
  border-top-right-radius: 130px;
  filter: saturate(0.1);
  height: 100%;
  opacity: 0.2;
  width: 100%;
  &:hover {
    opacity: 1;
  }
`;

const ContentDiv = styled.div`
  backdrop-filter: blur(8px);
  bottom: 50px;
  height: 300px;
  position: absolute;
  left: 25px;
  width: 320px;
  @media (min-width: 1100px) {
    height: auto;
    width: 500px;
  }
`;

const Headline = styled.h1`
  color: #ddd;
  font: normal 1.8rem grande;
  padding: 5px;
  text-shadow: 0 0 9px black;
`;

const Span = styled.span`
  font: normal 2.5rem grande;
  letter-spacing: 2px;
  color: red;
`;

const Address = styled.h3`
  color: #ddd;
  font: normal 1rem whiteRabbit;
  text-shadow: 0 0 9px black;
  padding: 5px;
`;

const Desc = styled.h2`
  color: #757575;
  font: bold 1.3rem whiteRabbit;
  line-height: 25px;
  padding: 5px;
  text-transform: uppercase;
  width: 350px;
`;

export default DieselInfo;
