import React from "react";
import styled from "styled-components";
import minus from "../../Assets/minus.png";
import square from "../../Assets/square.png";
import close from "../../Assets/close.png";
import cmd from "../../Assets/command.png";

function Tab() {
  return (
    <Section>
      <Bar>
        <Cmd src={cmd} alt="cmd" />
        <Text>C:\WINDOWS\system32\cmd.</Text>
      </Bar>
      <IconsDiv>
        <IconWrapper>
          <Img src={minus} alt="minus" />
        </IconWrapper>
        <IconWrapper>
          <Img src={square} alt="square" />
        </IconWrapper>
        <IconWrapper>
          <Img src={close} alt="close" />
        </IconWrapper>
      </IconsDiv>
    </Section>
  );
}

const Section = styled.section`
  background-color: #252525;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;

const Bar = styled.div`
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  height: 35px;
  background-color: black;
  margin: 5px 5px;
  width: 230px;
`;

const Cmd = styled.img`
  height: 15px;
  width: 15px;
`;

const Text = styled.h3`
  color: white;
  font: normal 0.7rem semplicitapro;
  margin-left: 10px;
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: auto;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  transition: 0.3s ease;
  width: 35px;
  &:hover {
    background-color: #353535;
  }
  &:nth-child(3) {
    border-top-right-radius: 10px;
  }
  &:hover:nth-child(3) {
    background-color: red;
  }
`;

const Img = styled.img`
  margin-top: 10px;
  height: 20px;
  width: 20px;
`;

export default Tab;
