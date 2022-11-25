import React, { useState } from "react";

// Components
import { BurgerMenu } from "./BurgerMenu";

// libraries
import { Link } from "react-router-dom";

// Style
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <Link style={{ textDecoration: "none" }} to="/tortilla-site/">
        <h1>tortilla</h1>
      </Link>
      <BurgerMenu />
    </div>
  );
};
