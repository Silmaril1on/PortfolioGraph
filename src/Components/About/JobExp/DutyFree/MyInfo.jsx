import React, { useState } from "react";
import styled from "styled-components";
import sert from "../../../../Assets/sert.jpg";

function MyInfo() {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <Section>
      <PreTitle>
        Tbilisi International Airport Building, <Span>Tbilisi 0158</Span>
      </PreTitle>
      <PreTitle>workin years</PreTitle>
      <Title>
        <Span>from</Span>2014 <Span>to</Span>2019
      </Title>
      <PreTitle>positions and duty</PreTitle>
      <Title>
        sales manager <br></br> ATU DUTY FREE internal trainer <br></br> BASIC
        LTC training manager
      </Title>
      <Button onClick={handleClick}>Certificate</Button>
      {modal && (
        <ImgDiv>
          <Img src={sert} alt="document" />
        </ImgDiv>
      )}
    </Section>
  );
}

const Section = styled.section`
  background-color: #940c0c;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  width: auto;
`;

const PreTitle = styled.h2`
  font: normal 1rem semplicitapro;
  text-transform: capitalize;
`;

const Title = styled.h1`
  font: bold 1.3rem semplicitapro;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

const Span = styled.span`
  color: black;
  font: bold 1rem semplicitapro;
`;

const Button = styled.button`
  background-color: black;
  border: none;
  border-radius: 10px;
  color: #ccc;
  cursor: pointer;
  font: bold 1rem semplicitapro;
  letter-spacing: 2px;
  margin: 10px 10px;
  padding: 5px;
  transition: 0.3s;
  width: 200px;
  &:hover {
    color: white;
    transform: translateX(30px);
  }
`;

const ImgDiv = styled.div`
  height: auto;
  max-width: 500px;
  width: auto;
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export default MyInfo;
