import React from "react";

// Components
import { Header } from "../components/Header";

// Style
import style from "./Blog.module.scss";

export const Galley = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <h2>Galley</h2>
        <h3>I'm getting ready!! :D</h3>
      </div>
    </div>
  );
};
