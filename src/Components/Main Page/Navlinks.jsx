import React from "react";
import styled from "styled-components";
import Repeat from "./Repeat";
import red from "../../Assets/result.png";
import horse from "../../Assets/horse.jpg";
import Navigation from "./Navigation";
import clock from "../../Assets/clock.png";
import { motion } from "framer-motion";

const mainVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const slideRight = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function Navlinks() {
  return (
    <Section
      as={motion.section}
      variants={mainVariant}
      initial="hidden"
      animate="visible"
    >
      <Red>
        <ImgDiv as={motion.div} variants={slideRight}>
          <Clock src={clock} alt="clock" />
          <Img src={red} alt="horse" />
          <Navigation />
          <Repeat />
        </ImgDiv>
      </Red>
    </Section>
  );
}

const Section = styled.section`
  height: 500px;
  width: 100%;
`;

const Red = styled.div`
  background: url(${horse});
  background-size: cover;
  background-position: center;
  height: 500px;
  overflow: hidden;
  width: 100%;
`;

const ImgDiv = styled.div`
  height: 500px;
  position: relative;
  overflow: hidden;
  width: 400px;
  @media (min-width: 1000px) {
    width: 700px;
  }
`;

const Clock = styled.img`
  height: 120px;
  position: absolute;
  top: 50px;
  left: 30px;
  width: 120px;
  @media (min-width: 1000px) {
    height: 150px;
    left: 70px;
    width: 150px;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export default Navlinks;
