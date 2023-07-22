import React from "react";
import styled from "styled-components";

function HeadLine() {
  return (
    <Section>
      <Title id="university">University</Title>
      <Title>Education</Title>
    </Section>
  );
}

const Section = styled.section`
  padding: 10px;
  width: 100%;
`;

const Title = styled.h1`
  font: normal 3rem semplicitapro;
  color: black;
  letter-spacing: 2px;
  line-height: 25px;
  margin: 5px 20px;
  &:nth-child(2) {
    font-size: 1.5rem;
    margin: 1px 25px;
  }
  @media (min-width: 900px) {
    font-size: 5rem;
    line-height: 40px;
  }
`;

export default HeadLine;
