import React from "react";
import styled from "styled-components";
import Stars from "./Stars";
import Name from "./Name";
import DeadOrAlive from "./DeadOrAlive";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

function NameSection() {
  return (
    <Section
      as={motion.section}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <Stars />
      <Name />
      <DeadOrAlive />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: 800px) {
    width: 65%;
  }
`;

export default NameSection;
