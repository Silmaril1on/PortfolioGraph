import React, { useState } from "react";
import styled from "styled-components";
import gameData from "../Games/gameData";
import banner from "../../../Assets/trophiesback-min.jpg";
import { motion } from "framer-motion";

const childvariant = {
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

function TrophyList() {
  const [visible, setVisible] = useState(10);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  return (
    <Section>
      {gameData.slice(0, 1).map((item, index) => {
        return (
          <div key={index}>
            <Title>{item.name}</Title>
            <TrophyDiv as={motion.section} variants={childvariant}>
              {item.trophy.slice(0, visible).map((cup, index) => {
                return (
                  <div key={index}>
                    <ImgDiv>
                      <Img src={cup.image} alt="trophy" />
                    </ImgDiv>
                  </div>
                );
              })}
            </TrophyDiv>
          </div>
        );
      })}
      <Button onClick={showMore}>Show More</Button>
    </Section>
  );
}

const Section = styled.section`
  align-items: center;
  background: linear-gradient(90deg, #000000be, #a5170476), url(${banner});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  font: bold 1.5rem semplicitapro;
  letter-spacing: 2px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

const TrophyDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 0;
  width: 100%;
  @media (min-width: 720px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ImgDiv = styled.div`
  border-radius: 15px;
  height: auto;
  margin: 5px;
  overflow: hidden;

  width: 345px;
`;

const Img = styled.img`
  border-radius: 15px;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: #151515;
  border: none;
  box-shadow: 0 0 3px #ddd;
  color: #ccc;
  cursor: pointer;
  font: bold 1rem semplicitapro;
  height: 40px;
  letter-spacing: 1px;
  margin: 20px;
  transition: 0.3s;
  width: 150px;
  &:hover {
    background-color: black;
    box-shadow: 0 0 6px #ddd;
    color: white;
    transform: scale(1.1);
  }
`;

export default TrophyList;
