import React from "react";
import styled from "styled-components";
import gollum from "../../Assets/gollum-min.png";

function Headline() {
  return (
    <Main>
      <Row>
        <ImgDiv>
          <Img src={gollum} alt="gollum" />
        </ImgDiv>
        <Content>
          <Title>
            My precious <Span>COLLECTION</Span>{" "}
          </Title>
        </Content>
      </Row>
    </Main>
  );
}

const Main = styled.main`
  background: linear-gradient(to top, #00000034 40%, #0b76b473);
  font-family: semplicitapro;
  height: auto;
  width: 100%;
  @media (min-width: 900px) {
    height: 250px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const ImgDiv = styled.div`
  height: 150px;
  width: auto;
  @media (min-width: 900px) {
    height: 250px;
  }
`;

const Img = styled.img`
  height: 100%;
  filter: brightness(0.8);
  transition: 0.3s;
  width: 100%;
  &:hover {
    filter: brightness(1);
    transform: translateX(20px) translateY(-10px);
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50%;
`;

const Title = styled.h1`
  color: #ccc;
  padding: 5px;
  text-align: center;
  width: auto;
  @media (min-width: 800px) {
    font-size: 3rem;
  }
`;

const Span = styled.span`
  color: goldenrod;
  padding: 5px;
  @media (min-width: 800px) {
    letter-spacing: 5px;
  }
`;

export default Headline;
