import React from "react";
import styled from "styled-components";
import { VscTerminalCmd } from "react-icons/Vsc";
import { AiOutlineMinus, AiOutlineClose } from "react-icons/Ai";
import { BsSquare } from "react-icons/Bs";

const style = {
  fontSize: 30,
  marginTop: 5,
  padding: 3,
};

const small = {
  fontSize: 25,
  marginTop: 7,
  padding: 3,
};

const left = {
  marginLeft: 10,
};

function Tab() {
  return (
    <Section>
      <Bar>
        <VscTerminalCmd />
        <Text>C:\WINDOWS\system32\cmd.</Text>
        <AiOutlineClose style={left} />
      </Bar>
      <IconsDiv>
        <IconWrapper>
          <AiOutlineMinus style={style} />
        </IconWrapper>
        <IconWrapper>
          <BsSquare style={small} />
        </IconWrapper>
        <IconWrapper>
          <AiOutlineClose style={style} />
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

export default Tab;
