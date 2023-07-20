import React from "react";
import styled from "styled-components";
import wallpaper from "../../Assets/wallpaper.jpg";

function Windows() {
  return <Main>Windows</Main>;
}

const Main = styled.main`
  background: url(${wallpaper});
  background-position: center;
  background-size: cover;
  display: none;
  height: 600px;
  width: 100%;
  @media (min-width: 420px) {
    display: flex;
  }
`;

export default Windows;
