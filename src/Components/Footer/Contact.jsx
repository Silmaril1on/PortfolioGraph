import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const style = {
  fontSize: 30,
  color: "#ddd",
  margin: 15,
};

function Contact() {
  return (
    <Section>
      <Title>Connect</Title>
      <Div>
        <Div1>
          <Link style={style} to="mailto:graphchiqovani@yahoo.com">
            <h1>hello</h1>
          </Link>
        </Div1>
        <Div1>
          <Link style={style} to="mailto:graphlev1@gmail.com">
            <h1>hello</h1>
          </Link>
        </Div1>
      </Div>
    </Section>
  );
}

const Section = styled.section`
  align-items: center;
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: rdr;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: 100%;
`;

const Div1 = styled.div`
  margin: 15px 10px;
  transition: 0.3s ease;
  &:hover {
    transform: translateX(-15px);
  }
`;

const Title = styled.h1`
  color: white;
  margin-top: 20px;
  letter-spacing: 2px;
  text-align: center;
`;

export default Contact;
