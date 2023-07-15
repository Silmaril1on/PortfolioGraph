import React from "react";
import styled from "styled-components";
import back from "../../../../Assets/diesel.jpg";
import DieselVideo from "./DieselVideo";
import DieselInfo from "./DieselInfo";
import Commercial from "./Commercial";

function Diesel() {
  return (
    <Container>
      <Section>
        <DieselInfo />
      </Section>
      <ColumnContainer>
        <DieselVideo />
        <Commercial />
      </ColumnContainer>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const Section = styled.section`
  background: url(${back});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  @media (min-width: 900px) {
    width: 70%;
  }
`;

const ColumnContainer = styled.div`
  width: 100%;
  @media (min-width: 900px) {
    width: 50%;
  }
`;

export default Diesel;
