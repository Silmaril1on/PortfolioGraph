import React from "react";
import styled from "styled-components";
import world from "../../../../Assets/world.png";
import pin from "../../../../Assets/pin.png";
import shop from "../../../../Assets/shop.png";

function Stores() {
  return (
    <Section>
      <Info>
        <Headline> ATU Journey</Headline>
        <Desc>
          ATU DUTY FREE began operations at the dawn of a new millennium as a
          joint venture between TAV Airports Holding and Gebr.
          Heinemann/Unifree. Today, almost two decades later ATU provides
          service through more than 120 duty-free stores at 20 airports in 7
          countries. Having come a long way from our humble beginnings in 2000,
          we are determined more than ever raise our brand image and further our
          mission to even greater heights in the years ahead.
        </Desc>
      </Info>
      <Icons>
        <IconDiv>
          <Img src={world} alt="world" />
          <Title>3 continents</Title>
        </IconDiv>
        <IconDiv>
          <Img src={shop} alt="shop" />
          <Title>7 countries</Title>
        </IconDiv>
        <IconDiv>
          <Img src={pin} alt="pin" />
          <Title> 110 stores</Title>
        </IconDiv>
      </Icons>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  max-width: 700px;
  overflow: hidden;
  width: 100%;
  @media (min-width: 1000px) {
    flex-direction: column;
    width: 30%;
  }
`;

const Info = styled.div`
  width: 100%;
`;

const Headline = styled.h1`
  color: white;
  font: bold 2.5rem semplicitapro;
  text-align: center;
  padding: 5px;
  word-spacing: 10px;
`;

const Desc = styled.p`
  color: #ddd;
  font: normal 1rem semplicitapro;
  padding: 10px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  @media (min-width: 1200px) {
    background-color: #353535;
  }
`;

const IconDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 130px;
  margin: 2px;
  width: 110px;
`;

const Title = styled.h1`
  color: white;
  font: bold 0.7rem semplicitapro;
  padding: 3px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 10px;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
`;

export default Stores;
