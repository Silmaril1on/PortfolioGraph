import React, { useState } from "react";
import styled from "styled-components";
import myPrecious from "../Collectibles/collectibles/collectiblesData";
import CollectiblesWrapper from "../Collectibles/collectibles/CollectiblesWraper";
import Headline from "./Headline";
import ReButton from "../../Components/ReButton";
import { useNavigate } from "react-router-dom";
import Brands from "./Brands";
import Footer from "../Footer/Footer";

export const CollectiblesContent = React.createContext();

function Collectibles() {
  const [product] = useState(myPrecious);
  const [renderData, setRenderData] = useState(myPrecious[0]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/welcome");
  };

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
        <Brands />
        <CollectiblesWrapper />
        <ReButton onClick={goBack} />
        <Footer />
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
