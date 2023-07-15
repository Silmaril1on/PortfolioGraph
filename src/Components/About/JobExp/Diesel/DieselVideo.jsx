import React from "react";
import styled from "styled-components";
import video from "../../../../Assets/dieselClip.mp4";

function DieselVideo() {
  return (
    <Section>
      <Video autoPlay={true} muted loop={true}>
        <source src={video} type="video/mp4" />
      </Video>
    </Section>
  );
}

const Section = styled.section`
  height: auto;
  position: relative;
  width: 100%;
  @media (min-width: 900px) {
    height: 50%;
  }
`;

const Video = styled.video`
  height: 100%;
  object-fit: cover;
  vertical-align: top;
  width: 100%;
`;

export default DieselVideo;
