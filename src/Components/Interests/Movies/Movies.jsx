import React from "react";
import styled from "styled-components";
import VideoComponent from "./VideoComponent";
import Film from "./Film";

function Movies() {
  return (
    <Section>
      <VideoComponent />
      <Film />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
`;

export default Movies;
