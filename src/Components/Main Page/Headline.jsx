import React from "react";
import styled from "styled-components";

function Headline() {
  return (
    <Section>
      <Title>quick info about</Title>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 50px;
  padding: 10px;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  font: normal 3rem rdr;
  letter-spacing: 2px;
  padding: 10px;
  @media (min-width: 800px) {
    font-size: 4.5rem;
  }
`;

export default Headline;
