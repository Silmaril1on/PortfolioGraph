import React from "react";
import styled from "styled-components";

const style = {
  fontSize: 35,
};

function GalleryHeader() {
  return (
    <Section>
      <Title>
        {" "}
        <Span>it is</Span> SELFIE-time{" "}
      </Title>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 20px;
  width: 100%;
`;

const Title = styled.h1`
  font: normal 2.3rem grande;
  color: black;
  margin: 30px 40px;
  text-shadow: 0 0 8px white;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.318));
  @media (min-width: 500px) {
    font-size: 3rem;
  }
`;

const Span = styled.span`
  font-size: 1.9rem;
`;

export default GalleryHeader;
