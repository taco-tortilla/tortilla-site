import React, { useState } from "react";
import logo from "../images/logo.svg";

// Components
import { BurgerMenu } from "./BurgerMenu";

// libraries
import { Link } from "react-router-dom";

// Style
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <Link style={{ textDecoration: "none" }} to="/" className={style.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <BurgerMenu />
    </div>
  );
};
