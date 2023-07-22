import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
import Information from "./Information";
import Works from "./Works";

function Content() {
  return (
    <Section>
      <Tab />
      <Headline>
        Microsoft Windows [Version 10.0.22621.1848] <br></br> (c) Microsoft
        Corporation. All rights reserved. <br></br>
        <br></br> C:\Users\graph\courses...{" "}
      </Headline>
      <Information />
      <Headline>C:\Users\myWork...</Headline>
      <Works />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px 3px;
  height: auto;
  width: auto;
`;

const Headline = styled.h3`
  color: #ccc;
  font: normal 1rem whiteRabbit;
  line-height: 20px;
  margin: 15px 10px;
  padding: 10px 10px;
`;

export default Content;
