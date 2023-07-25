import React from "react";
import styled from "styled-components";

function ReButton(props) {
  const { onClick } = props;
  return <Button onClick={onClick}> Go BACK</Button>;
}

const Button = styled.button`
  background-color: #0000004c;
  border-radius: 10px;
  border: 2px solid goldenrod;
  bottom: 10px;
  color: white;
  cursor: pointer;
  height: 35px;
  font: bold 0.8rem semplicitapro;
  letter-spacing: 2px;
  position: fixed;
  opacity: 0.5;
  right: 10px;
  transition: 0.3s;
  z-index: 222;
  width: 100px;
  &:hover {
    background-color: #000000c8;
    opacity: 1;
    transform: translateX(-15px);
  }
`;

export default ReButton;
