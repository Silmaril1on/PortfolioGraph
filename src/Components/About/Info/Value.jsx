import React from "react";
import styled from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";

function Value() {
  return (
    <Section>
      <Div>
        <Title>
          <TypeWriterEffect
            text="west tbilisi"
            startDelay={1000}
            typeSpeed={50}
            cursorColor="transparent"
          />
        </Title>
        <Title>
          <TypeWriterEffect
            text="Elivagar"
            typeSpeed={50}
            cursorColor="transparent"
            startDelay={2500}
          />
        </Title>
        <Title>
          <TypeWriterEffect
            text="6.16 ft"
            typeSpeed={50}
            cursorColor="transparent"
            startDelay={4000}
          />
        </Title>
        <Title>
          <TypeWriterEffect
            text="136.68 lbs"
            typeSpeed={50}
            cursorColor="transparent"
            startDelay={5500}
          />
        </Title>
        <Title>
          <TypeWriterEffect
            text="dark brown"
            typeSpeed={50}
            cursorColor="transparent"
            startDelay={7000}
          />
        </Title>
        <Title>
          <TypeWriterEffect
            text="dark green"
            typeSpeed={50}
            cursorColor="transparent"
            startDelay={8500}
          />
        </Title>
        <Title>
          <TypeWriterEffect
            text="homo saphiens"
            typeSpeed={50}
            cursorColor="transparent"
            startDelay={10000}
          />
        </Title>
        <Title>
          <TypeWriterEffect
            text="virgo"
            typeSpeed={50}
            cursorColor="transparent"
            startDelay={11500}
          />
        </Title>
      </Div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2px;
  max-width: 300px;
  width: 65%;
`;

const Div = styled.div`
  margin: 5px;
`;

const Title = styled.h1`
  color: black;
  font: normal 1.3rem semplicitapro;
  letter-spacing: 1px;
  padding: 2.8px;
  text-transform: capitalize;
  text-shadow: 0 0 3px #252525;
`;

export default Value;
