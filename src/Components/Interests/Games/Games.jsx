import React from "react";
import styled from "styled-components";
import GameVideoComponent from "./GameVideoComponent";
import Trophy from "./Trophy";
import FavGames from "./FavGames";

function Games() {
  return (
    <Section>
      <GameVideoComponent />
      <Trophy />
      <FavGames />
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  color: white;
`;

export default Games;
