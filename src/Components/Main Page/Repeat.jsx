import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import close from "../../Assets/close.png";

function Repeat() {
  const navigate = useNavigate();

  const backToEntry = () => {
    navigate("/");
  };

  return (
    <Section>
      <Div onClick={backToEntry}>
        <Title>back</Title>
        <Img src={close} alt="close" />
      </Div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5px;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 100px;
`;

const Div = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  opacity: 0.6;
  transition: 0.2s linear;
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h1`
  color: #ddd;
  font: normal 1rem rdr;
  letter-spacing: 2px;
`;

const Img = styled.img`
  height: 15px;
  width: 15px;
`;

export default Repeat;
