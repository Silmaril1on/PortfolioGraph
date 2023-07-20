import React from "react";
import styled from "styled-components";
import gaming from "./gameData";
import "../interests.css";

function GameList() {
  return (
    <section className="game-list-container">
      {gaming.slice(1, 2).map((item, index) => {
        return (
          <div className="game-list-inner-container" key={index}>
            <h1>{item.name}</h1>
            <div className="wrap-container">
              {item.games.map((game, index) => {
                const { image, name, dev, year, info } = game;
                return (
                  <div className="game-card" key={index}>
                    <div className="front">
                      <img src={image} alt="image" />
                    </div>
                    <div className="back">
                      <h1>{name}</h1>
                      <h2>{dev}</h2>
                      <h2>{year}</h2>
                      <h4>{info}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default GameList;
