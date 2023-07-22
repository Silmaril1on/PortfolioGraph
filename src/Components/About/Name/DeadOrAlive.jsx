import React from "react";
import styled from "styled-components";
import underline from "../../../Assets/underline.png";

function DeadOrAlive() {
  return (
    <Section>
      <ImgDiv>
        <Img src={underline} alt="underline" />
      </ImgDiv>
      <Title>
        wanted dead <Span>or</Span> alive
      </Title>
      <Price> $ 5000 </Price>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ImgDiv = styled.div`
  height: 60px;
  width: 100%;
`;

const Img = styled.img`
  background-color: transparent;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  font: normal 1.9rem semplicitapro;
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 5px;
  @media (min-width: 800px) {
    font-size: 2.4rem;
  }
`;

const Span = styled.div`
  transform: rotate(-15deg);
  font-size: 1rem;
  margin: 6px 5px 0 5px;
  height: 20px;
  width: 20px;
`;

const Dollar = styled.span`
  font: normal 5.2rem docktrin;
`;

const Price = styled.h1`
  font: normal 5rem semplicitapro;
  text-shadow: 0 0 15px #ddd;
`;

export default DeadOrAlive;
