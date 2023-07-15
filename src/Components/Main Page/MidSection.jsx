import React from "react";
import styled from "styled-components";
import Hello from "./Hello";
import banner from "../../Assets/rdbk.jpg";

function MidSection() {
  return (
    <Section>
      <Hello />
    </Section>
  );
}

const Section = styled.section`
  height: auto;
  background: linear-gradient(to right, black 30%, #00000026), url(${banner});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  width: 100%;
`;

export default MidSection;
