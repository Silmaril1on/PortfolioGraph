import React from "react";
import styled from "styled-components";
import Navlinks from "./Navlinks";
import { Helmet } from "react-helmet";
import MidSection from "./MidSection";
import Headline from "./Headline";
import Footer from "../Footer/Footer";

function MainPage() {
  return (
    <Section>
      <Helmet>
        <title>Navigate | Page</title>
      </Helmet>
      <Navlinks />
      <Headline />
      <MidSection />
      <Footer />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export default MainPage;
