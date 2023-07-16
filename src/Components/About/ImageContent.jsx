import React from "react";
import styled from "styled-components";
import graph from "../../Assets/levan4-min-min.png";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: {
    x: -500,
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      duration: 1,
      delay: 1,
    },
  },
};

function ImageContent() {
  return (
    <Section>
      <ImgDiv
        as={motion.div}
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <Img src={graph} alt="me" />
      </ImgDiv>
    </Section>
  );
}

const Section = styled.section`
  align-items: center;
  display: flex;
  height: 400px;
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
  width: 100%;
  @media (min-width: 800px) {
    width: 35%;
  }
`;

const ImgDiv = styled.div`
  height: 320px;
  width: 200px;
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
  filter: saturate(0.4);
  transition: 0.4s ease;
  width: 100%;
  &:hover {
    filter: saturate(1);
    transform: scale(1.1);
  }
`;

export default ImageContent;
