import React, { useState } from "react";
import styled from "styled-components";
import AtuContent from "./AtuContent";
import AtuVideo from "./AtuVideo";
import Stores from "./Stores";
import MyInfo from "./MyInfo";

function DutyFree() {
  const [myInfo, setMyInfo] = useState(false);

  return (
    <Section>
      <AtuContent />
      <RowDiv>
        <AtuVideo />
        <Stores />
      </RowDiv>
      <SeeMore>
        <Click
          onClick={() => {
            setMyInfo(!myInfo);
          }}
        >
          {myInfo ? `show less` : `show more`}
        </Click>
        {myInfo && <MyInfo />}
      </SeeMore>
    </Section>
  );
}

const Section = styled.section`
  align-items: center;
  background-color: #d63232;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
`;

const RowDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const SeeMore = styled.div`
  margin: 10px;
  overflow: hidden;
  width: 100%;
`;

const Click = styled.h1`
  cursor: pointer;
  color: #ccc;
  font: bold 1rem semplicitapro;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  transition: 0.3s ease;
  &:hover {
    color: white;
    letter-spacing: 3px;
    text-decoration: underline;
    transform: scale(1.1);
  }
`;

export default DutyFree;
