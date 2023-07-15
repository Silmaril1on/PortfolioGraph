import React from "react";
import styled from "styled-components";
import logo from "../../../../Assets/atu.png";

function AtuContent() {
  return (
    <Section>
      {" "}
      <LogoDiv>
        <Img src={logo} alt="atu" />
      </LogoDiv>
      <ContentDiv>
        <Info>
          ATU DUTY FREE is proudly ranked among the top 100 companies in Turkey
          as well as the top 15 travel retail companies worldwide. With our
          portfolio of outstanding duty and tax-free stores, exquisite brand
          boutiques, unique concept stores and subcontracted stores, we continue
          to expand to new horizons.
        </Info>
      </ContentDiv>
    </Section>
  );
}

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow: hidden;
  width: 100%;
`;

const LogoDiv = styled.div`
  border-radius: 15px;
  height: 200px;
  width: 200px;
`;

const Img = styled.img`
  border-radius: 15px;
  height: 100%;
  width: 100%;
`;

const ContentDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

const Info = styled.h1`
  color: white;
  font: normal 1rem semplicitapro;
  padding: 5px;
  max-width: 800px;
  text-align: justify;
`;

export default AtuContent;
