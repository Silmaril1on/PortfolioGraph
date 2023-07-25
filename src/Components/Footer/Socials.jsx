import React from "react";
import styled from "styled-components";
import socialData from "./socialsData";
import { Link } from "react-router-dom";

const style = {
  alignItems: "center",
  color: "white",
  display: "flex",
  justifyContent: "center",
  letterSpacing: 1,
  paddingLeft: 5,
  textTransform: "Capitalize",
  textDecoration: "none",
};

function Socials() {
  const [socialIcons] = React.useState(socialData);

  return (
    <Section>
      <Title>Social Media</Title>
      <RowContainer>
        {socialIcons.map((icons, index) => {
          return (
            <Div key={index}>
              <Link style={style} target="_blank" to={icons.link}>
                <ImgDiv>
                  <Img src={icons.Icon} alt="icon" />
                </ImgDiv>
              </Link>
            </Div>
          );
        })}
      </RowContainer>
    </Section>
  );
}

const Section = styled.section`
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: rdr;
  height: auto;
  letter-spacing: 2px;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  font-size: 1.2rem;
  padding: 10px;
  margin: 5px 5px;
  text-align: center;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  margin: 5px 15px;
  transition: 0.5s ease;
  width: 40px;
  &:hover {
    transform: scale(1.2);
  }
`;

const ImgDiv = styled.div`
  height: 30px;
  width: 30px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export default Socials;
