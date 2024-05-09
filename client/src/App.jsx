import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketHome from "./marketing/MarketHome";
import MarketAbout from "./marketing/MarketAbout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketHome />} />
        <Route path="/MarketAbout" element={<MarketAbout />} />
      </Routes>
    </Router>
  );
}

export default App;
