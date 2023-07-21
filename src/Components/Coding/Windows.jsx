import React from "react";
import styled from "styled-components";
import video from "../../Assets/hologramvideo.mp4";
import languages from "../../Assets/languages.jpg";

function Windows() {
  return (
    <Main>
      <VideoDiv>
        <Video muted autoPlay={true} loop={true}>
          <source src={video} type="video/mp4" />
        </Video>
      </VideoDiv>
      <ContentDiv></ContentDiv>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: row;
  display: none;
  height: 300px;
  width: 100%;
  @media (min-width: 420px) {
    display: flex;
  }
`;

const VideoDiv = styled.div`
  height: 100%;
  width: 50%;
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
`;

const ContentDiv = styled.div`
  background: url(${languages});
  background-position: center;
  background-size: cover;
  width: 50%;
`;

export default Windows;
