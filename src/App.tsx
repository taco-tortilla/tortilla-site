import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Galley } from "./pages/Galley";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Works } from "./pages/Works";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/works" element={<Works />} />
        <Route path="/galley" element={<Galley />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
