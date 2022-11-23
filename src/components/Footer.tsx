import React from "react";

// styles
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <p>© 2022 tortilla </p>
      </div>
    </div>
  );
};
