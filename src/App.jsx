import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Entry from "./Components/Entry/Entry";
import MainPage from "./Components/Main Page/MainPage";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Entry />} />
          <Route path="/welcome" element={<MainPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
