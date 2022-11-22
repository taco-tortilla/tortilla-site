import React from "react";

// Components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Style
import style from "./Blog.module.scss";

export const Works = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <h2>Works</h2>
        <h3>I'm getting ready!! :D</h3>
      </div>
      <Footer />
    </div>
  );
};
