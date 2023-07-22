import React from "react";
import styled from "styled-components";

function DieselInfo() {
  return (
    <Section>
      <ContentDiv>
        <Headline>
          {" "}
          <Span>diesel</Span> georgia{" "}
        </Headline>
        <Address>50 Ilia Chavchavadze Avenue, Tbilisi 0179</Address>
        <Address>1 Petre Kavtaradze St, Tbilisi 0186</Address>
      </ContentDiv>
    </Section>
  );
}

const Section = styled.section`
  height: 700px;
  position: relative;
  width: 100%;
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
  font: normal 1.8rem semplicitapro;
  padding: 5px;
  text-shadow: 0 0 9px black;
`;

const Span = styled.span`
  font: normal 2.5rem semplicitapro;
  letter-spacing: 2px;
  color: red;
`;

const Address = styled.h3`
  color: #ddd;
  font: normal 1rem whiteRabbit;
  text-shadow: 0 0 9px black;
  padding: 5px;
`;

export default DieselInfo;
