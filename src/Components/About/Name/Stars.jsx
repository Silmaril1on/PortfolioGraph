import React from "react";
import styled from "styled-components";
import star from "../../../Assets/star.png";

function Stars() {
  return (
    <StarDiv>
      <Img src={star} alt="star" />
      <Img src={star} alt="star" />
      <Img src={star} alt="star" />
      <Img src={star} alt="star" />
      <Img src={star} alt="star" />
    </StarDiv>
  );
}

const StarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
  padding: 5px;
`;

const Img = styled.img`
  height: 30px;
  width: 30px;
`;

export default Stars;
