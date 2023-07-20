import React from "react";
import styled from "styled-components";
import cinema from "../../Assets/video-camera.png";
import game from "../../Assets/game.png";
import { motion } from "framer-motion";

const mainVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const leftVariant = {
  hidden: {
    x: 1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};
const rightVariant = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

function Headline() {
  return (
    <Section
      as={motion.section}
      variants={mainVariant}
      initial="hidden"
      animate="visible"
    >
      <Wrapper as={motion.div} variants={rightVariant}>
        <Title>
          "Reading books are better than watchig movies" - for me it's{" "}
          <Span>contrary</Span>. I am proud and exceedingly happy of being lived
          in era of movies and games. Gaming and watching movies is like a cure
          for me, the best remedy to break off from this world !{" "}
          <Span>i am addicted to...</Span>
        </Title>
        <Icons>
          <Img src={cinema} alt="cinema" />
        </Icons>
      </Wrapper>
      <Wrapper as={motion.div} variants={leftVariant}>
        <Icons>
          <Img src={game} alt="cinema" />
        </Icons>
        <Title>
          <Span>Addicted ??</Span> - Yes, i am totally addicted to them, and
          partly, i will show you this addiction of mine on gaming as well.
          Story begins from my childhood and continues still.. This is my
          indispensable hobby. I was playing, i am playing and i will play{" "}
          <Span>forever and ever</Span>, and ever ever and ever
        </Title>
      </Wrapper>
    </Section>
  );
}

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-family: semplicitapro;
  margin-top: 30px;
  overflow: hidden;
  width: 100%;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Wrapper = styled.div`
  border: 1px solid #cccccc50;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #35353596;
  height: auto;
  margin: 5px;
  max-width: 450px;
  &:hover {
    border: 1px solid #ccc;
  }
`;

const Title = styled.h1`
  font-size: 0.7rem;
  height: 100%;
  line-height: 27px;
  margin: 5px;
  padding: 5px;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 1rem;
  }
`;

const Span = styled.span`
  background: linear-gradient(to right, #d1840f 60%, #d4b70f);
  background-clip: text;
  font-size: 1.1rem;
  color: transparent;
  letter-spacing: 3px;
  margin-left: 5px;
  text-transform: uppercase;
  -webkit-background-clip: text;
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Icons = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Img = styled.img`
  height: 70px;
  margin: 15px;
  width: 70px;
  @media (min-width: 900px) {
    height: 90px;
    width: 90px;
  }
`;

export default Headline;
