import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import cinema from "../Movies/cinemaData";
import "../interests.css";

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

function TvSeries() {
  return (
    <Section
      as={motion.section}
      variants={mainVariant}
      initial="hidden"
      animate="visible"
    >
      {cinema.slice(2, 3).map((item, index) => {
        return (
          <div key={index}>
            <motion.h1 variants={titleVariant} className="movie-headline">
              {item.name}
            </motion.h1>
            <motion.div variants={childVariant} className="row-container">
              {item.tvSeries.map((series, index) => {
                const { image, name, year, producer, desc } = series;
                return (
                  <div className="movie-card-container" key={index}>
                    <div className="movie-card-image-container">
                      <img src={image} alt="image" />
                    </div>
                    <div className="movie-card-content-container">
                      <h1>{name}</h1>
                      <h4>{year}</h4>
                      <h4>{producer}</h4>
                      <h3>{desc}</h3>
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

export default TvSeries;
