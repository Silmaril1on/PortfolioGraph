import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import slideImages from "./imageData";
import { motion } from "framer-motion";

function Carousel() {
  const [images] = useState(slideImages);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <Section as={motion.section} ref={carousel}>
      <CarouselDiv
        as={motion.div}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {images.map((item, index) => {
          const { image, city, state, longitude, latitude } = item;
          return (
            <Container as={motion.div} key={index}>
              <ImgDiv>
                <Img src={image} alt="image" />
              </ImgDiv>
              <ContentDiv>
                <Title>{state}</Title>
                <Title>{city}</Title>
                <Title>{longitude}</Title>
                <Title>{latitude}</Title>
              </ContentDiv>
            </Container>
          );
        })}
      </CarouselDiv>
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(
    rgba(0, 0, 0, 0.04) 5%,
    rgba(0, 0, 0, 0.88) 20%,
    rgba(0, 0, 0, 0.88) 80%,
    rgba(0, 0, 0, 0.04) 95%
  );
  cursor: pointer;
  mask-image: linear-gradient(
    to right,
    transparent 5%,
    black,
    black,
    transparent 90%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black,
    black,
    transparent 100%
  );
  padding: 5px;
  overflow: hidden;
  width: 100%;
`;

const CarouselDiv = styled.div`
  display: flex;
  min-width: 1450px;
`;

const Container = styled.div`
  height: auto;
  margin: 5px 10px;
  min-width: 280px;
  position: relative;
  width: 200px;
`;

const ImgDiv = styled.div`
  height: auto;
  margin: 5px 10px;
  min-width: 280px;
  width: 200px;
`;

const Img = styled.img`
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 100%;
  pointer-events: none;
  width: 100%;
`;

const ContentDiv = styled.div`
  bottom: 45px;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  height: auto;
  position: absolute;
  right: 10px;
  text-align: right;
  width: auto;
`;

const Title = styled.h1`
  color: black;
  font: normal 1rem semplicitapro;
  letter-spacing: 1px;
  text-shadow: 0 0 4px goldenrod;
`;

export default Carousel;
