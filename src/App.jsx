import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Entry from "./Components/Entry/Entry";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Entry />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
