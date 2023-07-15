import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import GalleryHeader from "../Carousel/GalleryHeader";

function Gallery() {
  return (
    <Main>
      <GalleryHeader />
      <Carousel />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Gallery;
