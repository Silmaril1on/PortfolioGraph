import React from "react";
import styled from "styled-components";
import askaneli from "../../../../Assets/askaneli.mp4";

function AskaneliVideo() {
  return (
    <Section>
      <Video autoPlay={true} loop={true} muted>
        <source src={askaneli} type="video/mp4" />
      </Video>
    </Section>
  );
}

const Section = styled.section`
  width: auto;
  @media (min-width: 900px) {
    height: 100%;
    width: 70%;
  }
`;

const Video = styled.video`
  vertical-align: top;
  object-fit: cover;
  width: 100%;
`;

export default AskaneliVideo;
