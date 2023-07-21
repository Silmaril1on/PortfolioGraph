import React, { useState } from "react";
import styled from "styled-components";
import "./interests.css";
import Movies from "../Interests/Movies/Movies";
import Games from "./Games/Games";

function Buttons() {
  const [moviesPage, setMoviesPage] = useState(true);
  const [gamesPage, setGamesPage] = useState(false);

  return (
    <Main>
      <Title>take a look </Title>\
      <Row>
        <button
          className="int-buttons"
          onClick={() => {
            setMoviesPage(true);
            setGamesPage(false);
          }}
        >
          movies
        </button>
        <button
          className="int-buttons"
          onClick={() => {
            setMoviesPage(false);
            setGamesPage(true);
          }}
        >
          games
        </button>
      </Row>
      {moviesPage && <Movies />}
      {gamesPage && <Games />}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  font-family: semplicitapro;
  justify-content: center;
  margin: 50px 5px;
  width: auto;
`;

const Title = styled.h1`
  border-bottom: 2px solid white;
  color: white;
  font-size: 2rem;
  margin: 5px;
  text-transform: uppercase;
  text-align: center;
  width: 230px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: 800px) {
    justify-content: space-around;
  }
`;

export default Buttons;
