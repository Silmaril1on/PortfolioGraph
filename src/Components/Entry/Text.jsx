import React from "react";
import styled, { keyframes } from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";
import { motion } from "framer-motion";

const zoomInVariant = {
  hidden: {
    scale: 0.0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Text() {
  return (
    <AutoType
      as={motion.main}
      variants={zoomInVariant}
      initial="hidden"
      animate="visible"
    >
      <Title>
        <TypeWriterEffect
          cursorColor="green"
          text="Hello user..."
          startDelay={1500}
          typeSpeed={100}
        />
      </Title>
      <Title>
        <TypeWriterEffect
          text="The Matrix has you..."
          startDelay={4300}
          typeSpeed={50}
        />
      </Title>
      <Title>
        <TypeWriterEffect
          text="Follow the white button."
          startDelay={6500}
          typeSpeed={50}
        />
      </Title>
      <Title2>
        <TypeWriterEffect
          text="KNOCK, KNOCK, USER."
          startDelay={9000}
          typeSpeed={150}
        />
      </Title2>
    </AutoType>
  );
}

const AutoType = styled.main`
  background: linear-gradient(
    to top,
    #0000001f 5%,
    #000000 30%,
    #000000 70%,
    #0000002f 85%
  );
  padding: 20px;
  height: auto;
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  background: linear-gradient(180deg, #ffffff8d 5%, green 80%, #ffffffac 95%);
  background-clip: text;
  color: transparent;
  font: normal 0.7rem whiteRabbit;
  margin-bottom: 10px;
  padding: 5px;
  text-transform: capitalize;
  ::first-letter {
    font-size: 2rem;
  }
  -webkit-background-clip: text;
  @media (min-width: 650px) {
    font-size: 0.9rem;
    letter-spacing: 2px;
    ::first-letter {
      font-size: 3rem;
    }
  }
`;

const glowing = keyframes`
0%,18%,21%,35%,43%,57%,64%,76%,82%,91%,94% {
color: #17420e;
text-shadow: none;
}
18.1%,22.1%,30%,50%,61.2%,67.3%,75.4%,84%,91.1%,95%,100% {
  color: #18d118;
  text-shadow: 0 0 10px #6ab46a, 0 0 20px #6ab46a, 0 0 40px #6ab46a, 0 0 80px #6ab46a, 0 0 160px #6ab46a
}
`;

const Title2 = styled.h1`
  animation: ${glowing} 5s linear infinite;
  animation-delay: 11s;
  color: #17420e;
  font: normal 1.5rem whiteRabbit;
  letter-spacing: 5px;
  line-height: 50px;
  padding: 5px;
  margin-top: 40px;
  @media (min-width: 650px) {
    font-size: 1.9rem;
  }
`;

export default Text;
