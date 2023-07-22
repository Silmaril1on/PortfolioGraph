import React from "react";
import styled from "styled-components";
import revolver from "../../Assets/revolver.png";

function Headline() {
  return (
    <Main>
      <Wrapper>
        <Title id="info">WARNING ! </Title>
        <PreTitleDiv>
          <IconDiv>
            <Img src={revolver} alt="revolver" />
          </IconDiv>
          <Title2>be it known</Title2>
          <IconDiv>
            <Img src={revolver} alt="revolver" />
          </IconDiv>
        </PreTitleDiv>
      </Wrapper>
    </Main>
  );
}

const Main = styled.main`
  height: auto;
  text-align: center;
  overflow: hidden;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: black;
  font: bold 3.6rem semplicitapro;
  letter-spacing: 4px;
  @media (min-width: 550px) {
    font-size: 5rem;
  }
  @media (min-width: 800px) {
    font-size: 7rem;
  }
`;

const PreTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  padding: 10px;
`;

const IconDiv = styled.div`
  height: 50px;
  width: 50px;
  &:nth-child(1) {
    transform: scaleX(-1);
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const Title2 = styled.h2`
  color: black;
  font: bold 2rem semplicitapro;
  padding: 5px;
`;

export default Headline;
