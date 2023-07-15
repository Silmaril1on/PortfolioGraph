import React from "react";
import styled from "styled-components";
import image from "../../Assets/levan6-min.jpg";

function TopImage() {
  return (
    <Section>
      <ImgDiv>
        <Img src={image} alt="photo" />
      </ImgDiv>
    </Section>
  );
}

const Section = styled.section`
  height: auto;
  width: 100%;
`;

const ImgDiv = styled.div`
  height: 600px;
  width: 100%;
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export default TopImage;
