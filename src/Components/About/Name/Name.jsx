import React from "react";
import styled from "styled-components";

function Name() {
  return (
    <>
      <UserName>levan graph</UserName>
      <UserName>chikovani</UserName>
      <Data>september 19 1990</Data>
    </>
  );
}

const UserName = styled.h1`
  color: black;
  font: bold 1.7rem semplicitapro;
  letter-spacing: 1px;
  text-align: center;
  &:nth-child(3) {
    font-size: 3.3rem;
    letter-spacing: 3px;
    @media (min-width: 800px) {
      font-size: 4.5rem;
    }
  }
  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;

const Data = styled.h1`
  font: normal 1.3rem semplicitapro;
  letter-spacing: 1px;
  text-align: center;
`;

export default Name;
