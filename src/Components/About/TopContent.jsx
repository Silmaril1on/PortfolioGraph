import React from "react";
import styled from "styled-components";
import ImageContent from "./ImageContent";
import AboutContent from "./Info/AboutContent";
import Headline from "./Headline";
import NameSection from "./Name/NameSection";
import Gallery from "./Carousel/Gallery";
import University from "./University/University";
import Jobs from "../About/JobExp/Jobs";
import Footer from "../Footer/Footer";
import paper from "../../Assets/paper-min.jpg";

function TopContent() {
  return (
    <Section>
      <Headline />
      <ResponsiveContainer>
        <ImageContent />
        <NameSection />
      </ResponsiveContainer>
      <AboutContent />
      <Gallery />
      <University />
      <Jobs />
      <Footer />
    </Section>
  );
}

const Section = styled.section`
  align-items: center;
  display: flex;
  background: linear-gradient(#00000034, #00000034), url(${paper});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  flex-direction: column;
  height: 100%;
  padding: 5px;
  text-transform: capitalize;
  width: 100%;
`;

const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export default TopContent;
