import React from "react";
import styled from "styled-components";
import AskaneliVideo from "./AskaneliVideo";
import AskaneliInfo from "./AskaneliInfo";

function Askaneli() {
  return (
    <Section>
      <AskaneliVideo />
      <AskaneliInfo />
    </Section>
  );
}

const Section = styled.section`
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export default Askaneli;
