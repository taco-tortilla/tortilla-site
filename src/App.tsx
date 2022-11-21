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
        <Route path="/tortilla-site/" element={<Home />} />
        <Route path="/tortilla-site/profile" element={<Profile />} />
        <Route path="/tortilla-site/works" element={<Works />} />
        <Route path="/tortilla-site/galley" element={<Galley />} />
        <Route path="/tortilla-site/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
