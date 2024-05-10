import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketHome from "./marketing/MarketHome";
import MarketAbout from "./marketing/MarketAbout";
import MarketContact from "./marketing/MarketContact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketHome />} />
        <Route path="/MarketAbout" element={<MarketAbout />} />
        <Route path="/MarketContact" element={<MarketContact />} />

      </Routes>
    </Router>
  );
}

export default App;
