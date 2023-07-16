import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import yahoo from "../../Assets/yahoo.png";
import gmail from "../../Assets/gmail.png";

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
            <Img src={yahoo} alt="yahoo" />
          </Link>
        </Div1>
        <Div1>
          <Link style={style} to="mailto:graphlev1@gmail.com">
            <Img src={gmail} alt="gmail" />
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

const Img = styled.img`
  height: 35px;
  width: 35px;
`;

export default Contact;
