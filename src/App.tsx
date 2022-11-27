import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Works } from "./pages/Works";
import { Blog } from "./pages/Blog";

const homeURL = process.env.PUBLIC_URL;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/works" element={<Works />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
