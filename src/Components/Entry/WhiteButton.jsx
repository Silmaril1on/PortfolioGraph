import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./entry.css";

const containerVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1],
  },
};

const slideVariants = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 3,
      delay: 13,
    },
  },
};

const childVariants = {
  hidden: {
    x: 1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 3,
      delay: 13,
    },
  },
};

function WhiteButton() {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/welcome");
  };

  return (
    <Container>
      <Inner
        onClick={nextPage}
        as={motion.div}
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Div as={motion.div} variants={slideVariants}></Div>
        <Div as={motion.div} variants={childVariants}></Div>
        <Div as={motion.div} variants={slideVariants}></Div>
      </Inner>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  height: auto;
  justify-content: center;
  margin-top: 20px;
  padding: 5px;
  width: 100%;
  @media (min-width: 1200px) {
    margin-top: 100px;
  }
`;

const Inner = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
`;

const Div = styled.div`
  background-color: #dddddd;
  border-radius: 20px;
  border: none;
  height: 20px;
  margin: 5px;
  width: 100px;
`;

export default WhiteButton;
