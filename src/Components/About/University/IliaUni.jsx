import React from "react";
import styled from "styled-components";
import iliauni from "../../../Assets/iliauni-min.jpg";
import "../about.css";
import IliaPhotos from "./IliaPhotos";

function IliaUni() {
  return (
    <Section>
      <Container>
        <ImgDiv>
          <Img src={iliauni} alt="uniposter" />
        </ImgDiv>
        <div className="iliauni-headers">
          <h1>years</h1>
          <h1>2010-2013</h1>
          <h1>faculty of Sciences and Art</h1>
        </div>
        <IliaPhotos />
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

export default IliaUni;
