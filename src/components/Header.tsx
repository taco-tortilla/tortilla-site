import React from "react";

// libraries
import { BurgerMenu } from "./BurgerMenu";
import { Link } from "react-router-dom";

import style from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={style.wrapper}>
      <Link style={{ textDecoration: "none" }} to="/tortilla-site/">
        <h1>tortilla</h1>
      </Link>
      {/* <BurgerMenu /> */}
    </div>
  );
};
