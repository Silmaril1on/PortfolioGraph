import React from "react";
import "./interests.css";
import styled from "styled-components";
import ubisoft from "../../Assets/ubisoft-min.jpg";
import marvel from "../../Assets/marvel-logo-min.jpg";
import newline from "../../Assets/newline-min.png";
import wb from "../../Assets/wb-min.jpg";
import xbox from "../../Assets/xbox-min.jpg";
import universal from "../../Assets/universal-logo-min.jpg";
import fox from "../../Assets/20fox-min.jpg";
import dc from "../../Assets/dc-min.jpg";
import disney from "../../Assets/disney-min.jpg";
import netflix from "../../Assets/netflix-logo-min.jpg";
import hbo from "../../Assets/hbo-min.png";
import paramount from "../../Assets/paramount-min.jpg";
import ps from "../../Assets/ps-min.jpg";
import prime from "../../Assets/prime-min.jpg";
import santamonica from "../../Assets/santamonica-min.jpg";
import rockstar from "../../Assets/Rockstar-Games-min.jpg";
import naugthydog from "../../Assets/naughtydog-min.jpg";
import metro from "../../Assets/metro-goldwyn-mayer-min.jpg";
import ea from "../../Assets/eagames.jpg";
import activision from "../../Assets/activision.jpg";
import valve from "../../Assets/valve.jpg";
import lionsgate from "../../Assets/lionsgate.jpg";
import sony from "../../Assets/sony.jpg";
import n2k from "../../Assets/n2k.png";
import { motion } from "framer-motion";

const parentVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const fromLeftVariant = {
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
const fromRightVariant = {
  hidden: {
    x: 1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const fromTopVariant = {
  hidden: {
    y: -1000,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const fromBottomVariant = {
  hidden: {
    y: 1000,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function TopContainer() {
  return (
    <Section
      as={motion.section}
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      <Gallery>
        <GridOne as={motion.div} variants={fromLeftVariant}>
          <Img src={ubisoft} alt="" />
          <Img src={fox} alt="" />
          <Img src={prime} alt="" />
          <Img src={ps} alt="" />
        </GridOne>
        <GridTwo as={motion.div} variants={fromTopVariant}>
          <Img src={marvel} alt="" />
          <Img src={naugthydog} alt="" />
          <Img src={netflix} alt="" />
        </GridTwo>
        <GridThree as={motion.div} variants={fromBottomVariant}>
          <Img src={newline} alt="" />
          <Img src={disney} alt="" />
        </GridThree>

        <GridFour as={motion.div} variants={fromTopVariant}>
          <Img src={paramount} alt="" />
          <Img src={metro} alt="" />
          <Img src={universal} alt="" />
        </GridFour>
        <GridSix>
          <Img src={activision} alt="" />
          <Img src={ea} alt="" />
          <Img src={valve} alt="" />
          <Img src={n2k} alt="" />
          <Img src={sony} alt="" />
          <Img src={lionsgate} alt="" />
        </GridSix>
        <GridFive as={motion.div} variants={fromRightVariant}>
          <Img src={xbox} alt="" />
          <Img src={santamonica} alt="" />
        </GridFive>
        <GridOne as={motion.div} variants={fromRightVariant}>
          <Img src={wb} alt="" />
          <Img src={rockstar} alt="" />
          <Img src={dc} alt="" />
          <Img src={hbo} alt="" />
        </GridOne>
      </Gallery>
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const Gallery = styled.div`
  background-color: #151515;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));
  grid-auto-rows: 25px;
  grid-auto-flow: dense;
  height: 360px;
  padding: 3px;
  width: 100%;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
    grid-auto-rows: 40px;
    height: 540px;
  }
`;

const GridOne = styled.div`
  grid-row: span 3;
  grid-column: span 2;
  @media (min-width: 1200px) {
    grid-row: span 3;
    grid-column: span 1;
  }
`;
const GridTwo = styled.div`
  grid-row: span 4;
  grid-column: span 4;
`;
const GridThree = styled.div`
  display: none;
  grid-column: span 2;
  grid-row: span 6;
  @media (min-width: 750px) {
    display: block;
  }
`;

const GridFour = styled.div`
  display: none;
  grid-row: span 2;
  grid-column: span 2;
  @media (min-width: 1200px) {
    display: block;
    grid-row: span 4;
  }
`;
const GridFive = styled.div`
  display: none;
  grid-row: span 2;
  @media (min-width: 1200px) {
    display: block;
    grid-row: span 6;
    grid-column: span 2;
  }
`;
const GridSix = styled.div`
  grid-row: span 2;
  display: none;
  @media (min-width: 1200px) {
    display: block;
    grid-row: span 2;
    grid-column: span 1;
  }
`;

const Img = styled.img`
  height: 100%;
  filter: brightness(0.5);
  object-fit: cover;
  transition: 0.3s;
  width: 100%;
  &:hover {
    filter: brightness(1);
  }
`;

export default TopContainer;
