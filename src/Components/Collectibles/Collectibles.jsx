import React, { useState } from "react";
import styled from "styled-components";
import myPrecious from "../Collectibles/collectibles/collectiblesData";
import CollectiblesWrapper from "../Collectibles/collectibles/CollectiblesWraper";
import Headline from "./Headline";
import ReButton from "../../Components/ReButton";

export const CollectiblesContent = React.createContext();

function Collectibles() {
  const [product] = useState(myPrecious);
  const [renderData, setRenderData] = useState(myPrecious[0]);

  const changeProduct = (index) => {
    const renderData = myPrecious[index];
    setRenderData(renderData);
  };

  return (
    <CollectiblesContent.Provider
      value={{ product, renderData, changeProduct }}
    >
      <Main>
        <Headline />
        <CollectiblesWrapper />
        <ReButton />
      </Main>
    </CollectiblesContent.Provider>
  );
}

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export default Collectibles;
