import React from "react";
import styled, { keyframes } from "styled-components";
import banner from "../../Assets/bk2.jpg";
import Text from "./Text";
import WhiteButton from "./WhiteButton";
import EntryAudio from "../Entry/EntryAudio";

function Entry() {
  return (
    <Background>
      <Blur>
        <EntryAudio />
        <Text />
        <WhiteButton />
      </Blur>
    </Background>
  );
}

const move = keyframes`
  0% {
    background-position: top 0 bottom 25px;
  }
  50% {
    background-position: left 0 bottom 40px;
  }
  100% {
    background-position: left 0 bottom 90px;
  }
`;

const Background = styled.main`
  animation: ${move} 140s ease infinite;
  background: url(${banner});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Blur = styled.div`
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export default Entry;
