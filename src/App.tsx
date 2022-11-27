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
        <Route path={homeURL} element={<Home />} />
        <Route path={homeURL + "/profile"} element={<Profile />} />
        <Route path={homeURL + "/works"} element={<Works />} />
        <Route path={homeURL + "/gallery"} element={<Gallery />} />
        <Route path={homeURL + "/blog"} element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
