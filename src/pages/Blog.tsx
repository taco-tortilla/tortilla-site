import React from "react";

// Components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Libraries
import { TypeAnimation } from "react-type-animation";

// Style
import style from "./Blog.module.scss";

export const Blog = () => {
  return (
    <div className={style.wrapper}>
      <header>
        <Header />
      </header>
      <div className={style.container}>
        {/* <h2>Blog</h2> */}
        <h3>Sorry, I'm getting ready!! :D</h3>
      </div>
      <Footer />
    </div>
  );
};
