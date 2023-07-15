import React from "react";
import styled from "styled-components";
import video from "../../../../Assets/atuclip.mp4";

function AtuVideo() {
  return (
    <Section>
      <Video autoPlay={true} loop={true} muted>
        <source src={video} type="video/mp4" />
      </Video>
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
  @media (min-width: 1000px) {
    width: 70%;
  }
`;

const Video = styled.video`
  height: auto;
  vertical-align: top;
  width: 100%;
`;

export default AtuVideo;
