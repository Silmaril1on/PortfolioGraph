import React from "react";
import styled from "styled-components";
import cinema from "../Movies/cinemaData";
import { motion } from "framer-motion";

const mainVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const childVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.5,
    },
  },
};
const titleVariant = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

function Producers() {
  return (
    <Section
      as={motion.section}
      variants={mainVariant}
      initial="hidden"
      animate="visible"
    >
      {cinema.slice(1, 2).map((item, index) => {
        return (
          <div className="producers-container" key={index}>
            <motion.h1 variants={titleVariant} className="movie-headline">
              {item.name}
            </motion.h1>
            <motion.div variants={childVariant} className="row-container">
              {item.persons.map((person, index) => {
                return (
                  <div className="movie-card-container" key={index}>
                    <div className="movie-card-image-container">
                      <img src={person.image} alt="image" />
                    </div>
                    <div className="movie-card-content-container">
                      <h1>{person.name}</h1>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
`;

export default Producers;
