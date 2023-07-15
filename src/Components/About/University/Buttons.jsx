import React, { useState } from "react";
import styled from "styled-components";
import IliaUni from "./IliaUni";
import Alasania from "./Alasania";
import border from "../../../Assets/brushborder.png";

function Buttons() {
  const [ilia, setIlia] = useState(true);
  const [alasania, setAlasania] = useState(false);

  return (
    <Section>
      <ButtonRow>
        <BtnDiv>
          <Button
            onClick={() => {
              setIlia(true);
              setAlasania(false);
            }}
          >
            ilia state university
          </Button>
        </BtnDiv>
        <BtnDiv>
          <Button
            onClick={() => {
              setIlia(false);
              setAlasania(true);
            }}
          >
            University of georgia
          </Button>
        </BtnDiv>
      </ButtonRow>
      {ilia && <IliaUni />}
      {alasania && <Alasania />}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  @media (min-width: 700px) {
    align-items: center;
    justify-content: center;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #ddd;
  border: none;
  font: normal 1rem grande;
  height: 35px;
  letter-spacing: 2px;
  transition: 0.3s ease;
`;

const BtnDiv = styled.div`
  align-items: center;
  background: url(${border});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin: 5px;
  padding: 20px;
  transition: 0.3s ease;
  width: 200px;
  &:hover {
    transform: scale(1.1);
    ${Button} {
      color: white;
      transform: scale(1.1);
    }
  }
`;

export default Buttons;
