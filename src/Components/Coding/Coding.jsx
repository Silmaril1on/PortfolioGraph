import React from "react";
import styled from "styled-components";
import TopImage from "./TopImage";
import Content from "./Content";
import Footer from "../Footer/Footer";

function Coding() {
  return (
    <Main>
      <TopImage />
      <Content />
      <Footer />
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
