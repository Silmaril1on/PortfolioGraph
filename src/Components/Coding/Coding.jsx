import React from "react";
import styled from "styled-components";
import TopImage from "./TopImage";
import Content from "./Content";
import Footer from "../Footer/Footer";
import ReButton from "../ReButton";
import { useNavigate } from "react-router-dom";

function Coding() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/welcome");
  };

  return (
    <Main>
      <TopImage />
      <Content />
      <ReButton onClick={goBack} />
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
  position: relative;
  width: 100%;
`;

export default Coding;
