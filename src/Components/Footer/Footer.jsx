import React from "react";
import styled from "styled-components";
import Socials from "./Socials";
import Contact from "./Contact";

function Footer() {
  return (
    <Div>
      <Socials />
      <Contact />
    </Div>
  );
}

const Div = styled.div`
  background: #00000084;
  display: flex;
  flex-direction: column;
  height: auto;
  margin-top: 5px;
  overflow: hidden;
  width: 100%;
`;

export default Footer;
