import React from "react";
import styled from "styled-components";
import GameVideoComponent from "./GameVideoComponent";
import Trophy from "./Trophy";
import FavGames from "./FavGames";
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

function Games() {
  return (
    <Section
      as={motion.section}
      variants={mainVariant}
      initial="hidden"
      animate="visible"
    >
      <GameVideoComponent />
      <Trophy />
      <FavGames />
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  color: white;
`;

export default Games;
