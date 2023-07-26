import React from "react";
import styled from "styled-components";
import cutlery from "../../Assets/uc-logo.png";
import noble from "../../Assets/noble-min.jpg";
import weta from "../../Assets/wetalogo-min.png";

function Brands() {
  return (
    <Main>
      <Section>
        <Img src={cutlery} alt="logo" />
        <Img src={noble} alt="logo" />
        <Img src={weta} alt="logo" />
      </Section>
      <Headline>
        <Title>Collectibles 27% </Title>
        <Div>
          <Div></Div>
        </Div>
      </Headline>
    </Main>
  );
}

const Main = styled.main`
  height: auto;
  font-family: semplicitapro;
  margin: 10px 0;
  width: 100%;
`;

const Section = styled.section`
  align-items: center;
  background: linear-gradient(to top, #0b76b473, #00000034 40%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  width: auto;
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    height: 150px;
  }
`;

const Img = styled.img`
  height: 50px;
  filter: brightness(0.7);
  margin: 10px;
  transition: 0.5s;
  width: 150px;
  &:hover {
    filter: brightness(1);
  }
`;

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  letter-spacing: 2px;
  padding-bottom: 10px;
`;

const Div = styled.div`
  border-radius: 10px;
  height: 7px;
  width: 265px;
  background: goldenrod;
  &:nth-child(1) {
    background-color: white;
    box-shadow: 0 0 10px white;
    height: 7px;
    width: 60px;
  }
`;

export default Brands;
