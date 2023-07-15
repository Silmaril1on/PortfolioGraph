import React from "react";
import styled from "styled-components";
import "../about.css";

function Property() {
  return (
    <Section>
      <div className="property-cascade">
        <h1>origin</h1>
        <h1>alias</h1>
        <h1>height</h1>
        <h1>weight</h1>
        <h1>hair</h1>
        <h1>eyes</h1>
        <h1>race</h1>
        <h1>zodiac</h1>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2px;
  max-width: 250px;
  overflow: hidden;
  text-align: center;
  width: 35%;
`;

export default Property;
