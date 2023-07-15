import React from "react";
import styled from "styled-components";
import TopContent from "./TopContent";
import { Helmet } from "react-helmet";
import FixedButtons from "./FixedButtons";

function About() {
  return (
    <Main>
      <Helmet>
        <title>Personal Information | Page</title>
      </Helmet>
      <TopContent />
      <FixedButtons />
    </Main>
  );
}

const Main = styled.main`
  align-items: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export default About;
