import React, { useContext } from "react";
import "./collectibles.css";
import styled from "styled-components";
import { CollectiblesContent } from "../Collectibles";

function CollectiblesDesc() {
  const { renderData } = useContext(CollectiblesContent);
  const { name, desc, type, image, quote } = renderData;

  return (
    <Main>
      <div className="collectibles-data-card-container">
        <div className="collectibles-data-image-div">
          <img src={image} alt="image" />
        </div>
        <div className="collectibles-content-container">
          <h1>{name}</h1>
          <h2>{type}</h2>
          <h4>{desc}</h4>
          <h6>{quote}</h6>
        </div>
      </div>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default CollectiblesDesc;
