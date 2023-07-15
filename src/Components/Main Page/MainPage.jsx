import React from "react";
import Navlinks from "./Navlinks";
import { Helmet } from "react-helmet";
import MidSection from "./MidSection";
import Headline from "./Headline";
import Footer from "../Footer/Footer";

function MainPage() {
  return (
    <>
      <Helmet>
        <title>Navigate | Page</title>
      </Helmet>
      <Navlinks />
      <Headline />
      <MidSection />
      <Footer />
    </>
  );
}

export default MainPage;
