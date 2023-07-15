import React from "react";
import styled from "styled-components";
import diesel from "../../../../Assets/dieselimg.webp";

function Commercial() {
  return (
    <Section>
      <LogoDiv></LogoDiv>
    </Section>
  );
}

const Section = styled.div`
  background: url(${diesel});
  background-position: center;
  background-size: cover;
  display: none;
  @media (min-width: 900px) {
    display: block;
    height: 50%;
  }
`;

const LogoDiv = styled.div`
  height: 150px;
  width: 150px;
`;

const Img = styled.img`
  background: transparent;
  height: 100%;
  width: 100%;
`;

export default Commercial;
