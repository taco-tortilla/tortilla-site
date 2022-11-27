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
              to="/tortilla.page/"
              className="link"
              style={
                location.pathname === "/tortilla.page/"
                  ? { color: "#5a739b", fontWeight: "bolde" }
                  : { color: "#ccc" }
              }
            >
              Top
            </Link>
          </li>
          <li>
            <Link
              to="/tortilla.page/profile"
              className="link"
              style={
                location.pathname === "/tortilla.page/profile"
                  ? { color: "#5a739b", fontWeight: "bold" }
                  : { color: "#ccc" }
              }
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/tortilla.page/works"
              className="link"
              style={
                location.pathname === "/tortilla.page/works"
                  ? { color: "#5a739b", fontWeight: "bold" }
                  : { color: "#ccc" }
              }
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/tortilla.page/galley"
              className="link"
              style={
                location.pathname === "/tortilla.page/gallery"
                  ? { color: "#5a739b", fontWeight: "bold" }
                  : { color: "#ccc" }
              }
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/tortilla.page/blog"
              className="link"
              style={
                location.pathname === "/tortilla.page/blog"
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
