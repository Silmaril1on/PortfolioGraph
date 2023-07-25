import React from "react";
import styled from "styled-components";
import TopContainer from "./TopContainer";
import { Helmet } from "react-helmet";
import Headline from "./Headline";
import Buttons from "./Buttons";
import Footer from "../Footer/Footer";
import ReButton from "../ReButton";
import { useNavigate } from "react-router-dom";

function Interests() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/welcome");
  };

  return (
    <Main>
      <Helmet>
        <title>Interests</title>
      </Helmet>
      <TopContainer />
      <Headline />
      <Buttons />
      <ReButton onClick={goBack} />
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
  width: 100%;
`;

export default Interests;
