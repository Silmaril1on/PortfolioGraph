import React from "react";
import styled from "styled-components";
import Property from "./Property";
import Value from "./Value";

function AboutContent() {
  return (
    <Section>
      <Row>
        <Property />
        <Value />
      </Row>
    </Section>
  );
}

const Section = styled.section`
  backdrop-filter: blur(3px);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`;

export default AboutContent;
