import React, { useState } from "react";
import styled from "styled-components";
import border from "../../../Assets/brushborder.png";
import Diesel from "./Diesel/Diesel";
import DutyFree from "./DutyFree/DutyFree";
import Askaneli from "../JobExp/Askaneli/Askaneli";

function Buttons() {
  const [diesel, setDiesel] = useState(true);
  const [atu, setAtu] = useState(false);
  const [askaneli, setAskaneli] = useState(false);

  return (
    <Section>
      <ButtonsDiv>
        <BtnDiv>
          <Button
            onClick={() => {
              setDiesel(true);
              setAtu(false);
              setAskaneli(false);
            }}
          >
            Diesel
          </Button>
        </BtnDiv>
        <BtnDiv>
          <Button
            onClick={() => {
              setDiesel(false);
              setAtu(true);
              setAskaneli(false);
            }}
          >
            Duty free
          </Button>
        </BtnDiv>
        <BtnDiv>
          <Button
            onClick={() => {
              setDiesel(false);
              setAtu(false);
              setAskaneli(true);
            }}
          >
            Askaneli
          </Button>
        </BtnDiv>
      </ButtonsDiv>
      <JobsContainer>
        {diesel && <Diesel />}
        {atu && <DutyFree />}
        {askaneli && <Askaneli />}
      </JobsContainer>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonsDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const JobsContainer = styled.div`
  width: 100%;
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #ddd;
  border: none;
  font: normal 1.5rem semplicitapro;
  height: 40px;
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
  height: 80px;
  margin: 10px;
  transition: 0.3s ease;
  width: 200px;
  &:hover {
    transform: translateX(20px);
    ${Button} {
      color: white;
      transform: translateX(15px);
    }
  }
`;

export default Buttons;
