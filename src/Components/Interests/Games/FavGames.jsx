import React, { useState } from "react";
import styled from "styled-components";
import GameList from "./GameList";

function FavGames() {
  const [game, setGame] = useState(true);

  return (
    <Section>
      <Title
        onClick={() => {
          setGame(!game);
        }}
      >
        My Game Selection {game ? "-" : "+"}
      </Title>
      {game && <GameList />}
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

export default FavGames;
