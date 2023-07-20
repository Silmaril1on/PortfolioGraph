import React, { useState } from "react";
import styled from "styled-components";
import Lotr from "./Lotr";
import cinema from "../Movies/cinemaData";
import Producers from "../Movies/Producers";
import TvSeries from "./TvSeries";
import Actors from "./Actors";

function Film() {
  const [movies, setMovies] = useState(false);
  const [producers, setProducers] = useState(false);
  const [tvShows, setTvShows] = useState(false);
  const [actors, setActors] = useState(false);

  return (
    <Section>
      <Container>
        {cinema.slice(0, 1).map((item, index) => {
          return (
            <Div key={index}>
              <Title
                onClick={() => {
                  setMovies(!movies);
                }}
              >
                {item.name}
                {movies ? "-" : "+"}
              </Title>
            </Div>
          );
        })}
        {movies && <Lotr />}
      </Container>
      <Container>
        {cinema.slice(1, 2).map((item, index) => {
          return (
            <Div key={index}>
              <Title
                onClick={() => {
                  setProducers(!producers);
                }}
              >
                {item.name}
                {producers ? "-" : "+"}
              </Title>
            </Div>
          );
        })}
        {producers && <Producers />}
      </Container>
      <Container>
        {cinema.slice(2, 3).map((item, index) => {
          return (
            <Div key={index}>
              <Title
                onClick={() => {
                  setTvShows(!tvShows);
                }}
              >
                {item.name}
                {tvShows ? "-" : "+"}
              </Title>
            </Div>
          );
        })}
        {tvShows && <TvSeries />}
      </Container>
      <Container>
        {cinema.slice(3, 4).map((item, index) => {
          return (
            <Div key={index}>
              <Title
                onClick={() => {
                  setActors(!actors);
                }}
              >
                {item.name}
                {actors ? "-" : "+"}
              </Title>
            </Div>
          );
        })}
        {actors && <Actors />}
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 2px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  background-color: #151515;
  margin: 5px;
  &:hover {
    background-color: #353535;
  }
`;

const Title = styled.h1`
  cursor: pointer;
  font: bold 2rem semplicitapro;
  letter-spacing: 7px;
  padding: 5px;
  text-transform: uppercase;
  transition: 0.3s;
  width: 200px;
  &:hover {
    letter-spacing: 10px;
  }
`;

export default Film;
