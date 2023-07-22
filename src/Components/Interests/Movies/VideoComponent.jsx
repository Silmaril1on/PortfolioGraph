import React from "react";
import styled from "styled-components";
import intro from "../../../Assets/intro.mp4";

function VideoComponent() {
  return (
    <Section>
      <Video muted loop={true} autoPlay={true}>
        <source src={intro} type="video/mp4" />
      </Video>
      <Text>
        <Title>
          my selection of <Gold>cinematography</Gold>...{" "}
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
  flex-direction: column;
  width: 100%;
  @media (min-width: 700px) {
    font-size: 2rem;
    width: 50%;
  }
  @media (min-width: 1200px) {
    font-size: 3.5rem;
    width: 50%;
  }
`;

const Title = styled.h1`
  color: white;
  font: bold 1.5rem semplicitapro;
  padding: 10px 40px;
  text-transform: capitalize;
  @media (min-width: 700px) {
    font-size: 2rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const Gold = styled.span`
  background: linear-gradient(to right, #d1840f 60%, #d4b70f);
  background-clip: text;
  color: transparent;
  letter-spacing: 2px;
  font-size: 2rem;
  -webkit-background-clip: text;
  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
`;

export default VideoComponent;
