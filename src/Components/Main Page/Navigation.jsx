import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const navlinks = [
  {
    name: "story",
    path: "/story",
  },
  {
    name: "coding Exp.",
    path: "/coding",
  },
  {
    name: "interests",
    path: "/interest",
  },
  {
    name: "achievements",
    path: "/achievements",
  },
];

function Navigation() {
  const [pages] = useState(navlinks);

  return (
    <Section>
      {pages.map((page, index) => {
        return (
          <Container key={index}>
            <Navs to={page.path}>{page.name}</Navs>
          </Container>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  bottom: 40px;
  height: auto;
  left: 25px;
  position: absolute;
  transform: rotate(-3deg);
  width: 250px;
  @media (min-width: 1000px) {
    left: 80px;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 4px;
  overflow: hidden;
  width: 400px;
`;

const Navs = styled(NavLink).attrs()`
  color: black;
  cursor: pointer;
  font: bold 2rem rdr;
  letter-spacing: 1px;
  transition: 0.3s ease;
  text-decoration: none;
  &:hover {
    color: white;
    transform: translateX(10px);
  }
  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`;

export default Navigation;
