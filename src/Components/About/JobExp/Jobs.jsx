import React from "react";
import styled from "styled-components";
import HeadLine from "./HeadLine";
import Buttons from "./Buttons";

function Jobs() {
  return (
    <Main>
      <HeadLine />
      <Buttons />
    </Main>
  );
}

const Main = styled.main`
  margin-top: 10%;
  width: 100%;
`;

export default Jobs;
