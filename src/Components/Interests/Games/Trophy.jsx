import React, { useState } from "react";
import styled from "styled-components";
import TrophyList from "./TrophyList";

function Trophy() {
  const [gameTrophy, setGameTrophy] = useState(false);

  return (
    <Section>
      <Title
        onClick={() => {
          setGameTrophy(!gameTrophy);
        }}
      >
        i emphesize my eagerness {gameTrophy ? "-" : "+"}
      </Title>
      {gameTrophy && <TrophyList />}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  background-color: #353535;
  cursor: pointer;
  color: white;
  letter-spacing: 2px;
  text-transform: capitalize;
  margin: 5px;
  padding: 5px;
  &:hover {
    color: black;
    background-color: #ddd;
  }
`;

export default Trophy;
