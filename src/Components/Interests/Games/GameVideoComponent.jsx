import React from "react";
import styled from "styled-components";
import gamevideo from "../../../Assets/gamevideo.mp4";
import scorpion from "../../../Assets/scorpion.png";
import blood from "../../../Assets/blood.png";

function GameVideoComponent() {
  return (
    <Section>
      <Video muted loop={true} autoPlay={true}>
        <source src={gamevideo} type="video/mp4" />
      </Video>
      <Text>
        <ImgDiv>
          <Img src={scorpion} alt="image" />
        </ImgDiv>
        <Title>
          <Span>Get Over Here </Span>
        </Title>
      </Text>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5px;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const Video = styled.video`
  height: auto;
  vertical-align: top;
  width: 100%;
  @media (min-width: 700px) {
    width: 50%;
  }
`;

const Text = styled.div`
  background: linear-gradient(90deg, black, #701e1e86);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  position: relative;
  width: 100%;
  @media (min-width: 700px) {
    height: auto;
    width: 50%;
  }
  @media (min-width: 1200px) {
    font-size: 3.5rem;
    width: 50%;
  }
`;

const Title = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
  height: auto;
  letter-spacing: 1px;
  text-align: center;
  width: 100%;
  @media (min-width: 700px) {
    width: 25%;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const Span = styled.span`
  align-items: center;
  background: url(${blood});
  background-position: center;
  background-size: cover;
  color: goldenrod;
  display: flex;
  height: 100%;
  font-size: 1.1rem;
  justify-content: center;
  text-shadow: 0 0 15px white;
  width: 100%;
  @media (min-width: 700px) {
    height: 50%;
  }
`;

const ImgDiv = styled.div`
  height: auto;
  width: 100%;
  z-index: 11;
  @media (min-width: 700px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 75%;
  }
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
  width: 100%;
  &:hover {
    transform: translatex(20px);
  }
`;

export default GameVideoComponent;
