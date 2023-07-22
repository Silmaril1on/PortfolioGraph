import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

function Hello() {
  return (
    <Section>
      <Title>
        Hello, my name is <br></br>
        <Red>
          <Typewriter
            words={["arthur morgan", "levan chikovani,"]}
            delaySpeed={1500}
            typeSpeed={100}
          />
        </Red>
      </Title>
      <Title>
        a <Red>React</Red>
        developer
        <Gold>for now</Gold>
      </Title>
      <Title>
        living in <Gold>Tbilisi, GEO</Gold>{" "}
      </Title>
      <Info1>pre-order now</Info1>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  width: auto;
  :nth-child(3) {
    margin: 10px 0;
  }
`;

const Title = styled.h1`
  color: #ccc;
  font: bold 1.3rem rdr;
  @media (min-width: 750px) {
    font-size: 2rem;
  }
`;

const Red = styled.span`
  font: normal 2.5rem rdr;
  color: #d31414;
  padding: 5px;
  @media (min-width: 750px) {
    font-size: 4rem;
  }
`;

const Gold = styled.span`
  color: goldenrod;
  font: normal 1.5rem rdr;
  padding: 5px;
`;

const Info = styled.p`
  background-color: #dddddd5e;
  backdrop-filter: blur(5px);
  color: black;
  font: normal 1rem rdr;
  max-width: 700px;
  padding: 5px;
  @media (min-width: 750px) {
    font-size: 1.3rem;
  }
`;

const Null = styled.span`
  color: #252525;
`;

const Info1 = styled.h2`
  color: #fff;
  font: bold 2rem rdr;
  letter-spacing: 2px;
  padding: 10px;
  text-align: center;
  @media (min-width: 750px) {
    font-size: 3rem;
  }
`;

export default Hello;
