import React from "react";
import styled from "styled-components";

function Paragraph() {
  return (
    <Section>
      <Desc>
        Greetings citizens. This is me, Levan. I am Junior Developer for now.
        After 9 month's of working and studying have to say that clicking on
        keyboard and making some cool staff is realy pleasant. I think, could be
        better if i didn't wasted time before but it's never late.
      </Desc>
      <Quote>
        ”All we have to decide is what to do with the time that is given us.”
      </Quote>
      <Desc>
        Betimes, this portfolio will be upgraded into adnvanced one, but for now
        it is enough to demonstrate skill and knowledge i have already acquired.
        In another word, im lovin it. Coding is kinda mess, but with some right
        attitude it is getting easily henceforth.
      </Desc>
    </Section>
  );
}

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  padding: 10px;
  width: auto;
`;

const Desc = styled.p`
  text-align: center;
  color: #151515;
  font: normal 1rem grande;
  line-height: 25px;
  max-width: 800px;
  padding: 5px 10px;
  &::first-letter {
    font-size: 2.5rem;
    color: #b82020;
  }
`;

const Quote = styled.h1`
  border: 2px solid black;
  color: black;
  font: normal 1.5rem grande;
  padding: 20px;
  outline-style: double;
  margin: 10px;
`;

export default Paragraph;
