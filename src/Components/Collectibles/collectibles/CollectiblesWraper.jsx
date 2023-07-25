import React from "react";
import styled from "styled-components";
import CollectiblesBtn from "./CollectiblesBtn";
import CollectiblesDesc from "./CollectiblesDesc";
import video from "../../../Assets/smoke.mp4";

function CollectiblesWraper() {
  return (
    <CollectiblesContainer>
      <Video muted autoPlay={true} loop={true}>
        <source src={video} type="video/mp4" />
      </Video>
      <CollectiblesDiv>
        <CollectiblesBtn />
        <CollectiblesDesc />
      </CollectiblesDiv>
    </CollectiblesContainer>
  );
}

const CollectiblesContainer = styled.section`
  height: 740px;
  position: relative;
  width: 100%;
`;

const Video = styled.video`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const CollectiblesDiv = styled.div`
  background: linear-gradient(
    to top,
    #000000a9,
    #000000a9,
    #000000a9,
    #000000a9
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  height: inherit;
  width: 100%;
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export default CollectiblesWraper;
