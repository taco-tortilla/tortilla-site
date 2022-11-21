import React from "react";
import { BurgerMenu } from "./BurgerMenu";

import style from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={style.wrapper}>
      <h1>tortilla</h1>
      {/* <BurgerMenu /> */}
    </div>
  );
};
