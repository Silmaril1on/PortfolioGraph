import React from "react";
import styled from "styled-components";
import gameData from "../Games/gameData";
import banner from "../../../Assets/trophiesback-min.jpg";

function TrophyList() {
  return (
    <Section>
      {gameData.slice(0, 1).map((item, index) => {
        return (
          <div key={index}>
            <Title>{item.name}</Title>
            <TrophyDiv>
              {item.trophy.map((cup, index) => {
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
    </Section>
  );
}

const Section = styled.section`
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
  background: linear-gradient(90deg, #000000be, #a5170476), url(${banner});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
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

export default TrophyList;
