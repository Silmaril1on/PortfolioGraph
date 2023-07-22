import React from "react";
import styled from "styled-components";
import ug from "../../../Assets/ug.jpg";
import "../about.css";

function Alasania() {
  return (
    <Section>
      <Container>
        <ImgDiv>
          <Img src={ug} alt="uniposter" />
        </ImgDiv>
        <div className="iliauni-headers">
          <h1>years</h1>
          <h1>2009-2010</h1>
          <h1>faculty of Sciences and Art</h1>
        </div>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 20px;
  padding: 5px;
  position: relative;
  overflow: hidden;
  width: 100%;
  @media (min-width: 550px) {
    border: 2px solid black;
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  @media (min-width: 550px) {
    border: 2px solid black;
  }
`;

const ImgDiv = styled.div`
  border-radius: 25px;
  box-shadow: 0 0 15px black;
  height: 200px;
  margin: 20px;
  width: 350px;
`;

const Img = styled.img`
  border-radius: 25px;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.3);
  width: 100%;
`;

export default Alasania;
