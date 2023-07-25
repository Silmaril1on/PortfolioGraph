import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navlinks = [
  {
    name: "story",
    path: "/story",
  },
  {
    name: "coding Exp.",
    path: "/coding",
  },
  {
    name: "interests",
    path: "/interest",
  },
  {
    name: "collectibles",
    path: "/collectibles",
  },
];

const slideLeft = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      delay: 1.2,
    },
  },
};

function Navigation() {
  const [pages] = useState(navlinks);

  return (
    <Section
      as={motion.section}
      variants={slideLeft}
      initial="hidden"
      animate="visible"
    >
      {pages.map((page, index) => {
        return (
          <Container key={index}>
            <Navs to={page.path}>{page.name}</Navs>
          </Container>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  bottom: 40px;
  height: auto;
  left: 25px;
  position: absolute;

  width: 250px;
  @media (min-width: 1000px) {
    left: 80px;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 4px;
  overflow: hidden;
  transform: rotate(-3deg);
  width: 400px;
`;

const Navs = styled(NavLink).attrs()`
  color: black;
  cursor: pointer;
  font: bold 2rem rdr;
  letter-spacing: 1px;
  transition: 0.3s ease;
  text-decoration: none;
  &:hover {
    color: white;
    transform: translateX(10px);
  }
  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`;

export default Navigation;
