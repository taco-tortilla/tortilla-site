import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// import style from "./BurgerMenu.module.scss";
import "./BurgerMenu.css";

type currentMenu = () => string;
export const BurgerMenu = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [useLocation]);

  return (
    <div className="hamburger-menu">
      <input type="checkbox" id="menu-btn-check" />
      <label htmlFor="menu-btn-check" className="menu-btn">
        <span></span>
      </label>
      <div className="menu-content">
        <ul>
          <li>
            <Link
              to="/tortilla-site/"
              className="link"
              style={
                location.pathname === "/tortilla-site/"
                  ? { color: "#5a739b", fontWeight: "bolde" }
                  : { color: "#ccc" }
              }
            >
              Top
            </Link>
          </li>
          <li>
            <Link
              to="/tortilla-site/profile"
              className="link"
              style={
                location.pathname === "/tortilla-site/profile"
                  ? { color: "#5a739b", fontWeight: "bold" }
                  : { color: "#ccc" }
              }
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/tortilla-site/works"
              className="link"
              style={
                location.pathname === "/tortilla-site/works"
                  ? { color: "#5a739b", fontWeight: "bold" }
                  : { color: "#ccc" }
              }
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/tortilla-site/galley"
              className="link"
              style={
                location.pathname === "/tortilla-site/gallery"
                  ? { color: "#5a739b", fontWeight: "bold" }
                  : { color: "#ccc" }
              }
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/tortilla-site/blog"
              className="link"
              style={
                location.pathname === "/tortilla-site/blog"
                  ? { color: "#5a739b", fontWeight: "bold" }
                  : { color: "#ccc" }
              }
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
