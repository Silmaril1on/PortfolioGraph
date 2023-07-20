import React from "react";
import cinema from "./cinemaData";
import "../interests.css";
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

function Lotr() {
  return (
    <motion.main
      variants={mainVariant}
      initial="hidden"
      animate="visible"
      className="section-main-container"
    >
      {" "}
      {cinema.slice(0, 1).map((item, index) => {
        return (
          <div key={index}>
            {item.movie.map((it, index) => {
              return (
                <div key={index}>
                  <motion.h1 variants={titleVariant} className="movie-headline">
                    {it.film}
                  </motion.h1>
                  <motion.div variants={childVariant} className="row-container">
                    {it.chapters.map((film, index) => {
                      const { image, chapter, year, producer, desc, oscars } =
                        film;
                      return (
                        <div className="movie-card-container" key={index}>
                          <div className="movie-card-image-container">
                            <img src={image} alt="" />
                          </div>
                          <div className="movie-card-content-container">
                            <h1>{chapter}</h1>
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
          </div>
        );
      })}
    </motion.main>
  );
}

export default Lotr;
