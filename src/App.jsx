import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Entry from "./Components/Entry/Entry";
import MainPage from "./Components/Main Page/MainPage";
import Coding from "./Components/Coding/Coding";
import About from "./Components/About/About";
import Interests from "./Components/Interests/Interests";
import Collectibles from "./Components/Collectibles/Collectibles";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Entry />} />
          <Route path="/welcome" element={<MainPage />} />
          <Route path="/story" element={<About />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/interest" element={<Interests />} />
          <Route path="/collectibles" element={<Collectibles />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
