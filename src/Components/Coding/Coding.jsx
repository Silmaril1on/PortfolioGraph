import React from "react";
import styled from "styled-components";
import TopImage from "./TopImage";
import Content from "./Content";

function Coding() {
  return (
    <Main>
      <TopImage />
      <Content />
    </Main>
  );
}

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
  width: 100%;
`;

export default Coding;
