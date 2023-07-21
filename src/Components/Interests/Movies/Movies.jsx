import React from "react";
import styled from "styled-components";
import VideoComponent from "./VideoComponent";
import Film from "./Film";
import { motion } from "framer-motion";

const mainVariant = {
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

function Movies() {
  return (
    <Section
      as={motion.section}
      variants={mainVariant}
      initial="hidden"
      animate="visible"
    >
      <VideoComponent />
      <Film />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
`;

export default Movies;
