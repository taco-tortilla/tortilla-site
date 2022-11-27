import React from "react";
import BgImage from "../images/bg_water.jpg";

// components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// mui
import { Grid } from "@mui/material";

// Libraries
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

// style
import style from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <div className={style.menu}>
          <TypeAnimation
            sequence={[
              1000,
              "Hello!! ",
              1000,
              "Hello!! Welcome to tortilla site :)",
            ]}
            wrapper="h2"
            repeat={0}
            speed={50}
            deletionSpeed={1}
            cursor={false}
          />
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/tortilla.page/profile"
              >
                <TypeAnimation
                  sequence={[
                    3500,
                    "PROFILE",
                    4000,
                    "pRoFiLe",
                    4000,
                    "PrOfIlE",
                    4000,
                    "profile",
                    4000,
                  ]}
                  wrapper="p"
                  repeat={Infinity}
                  speed={1}
                  deletionSpeed={1}
                  className={style.text}
                />
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/tortilla.page/works"
              >
                {" "}
                <TypeAnimation
                  sequence={[
                    4000,
                    "WORKS",
                    5000,
                    "wOrKs",
                    5000,
                    "WoRkS",
                    5000,
                    "works",
                    5000,
                  ]}
                  wrapper="p"
                  repeat={Infinity}
                  speed={1}
                  deletionSpeed={1}
                  className={style.text}
                />
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/tortilla.page/gallery"
              >
                <TypeAnimation
                  sequence={[
                    4500,
                    "GALLERY",
                    6000,
                    "gAlLeRy",
                    6000,
                    "GaLlErY",
                    6000,
                    "gallery",
                    6000,
                  ]}
                  wrapper="p"
                  repeat={Infinity}
                  speed={1}
                  deletionSpeed={1}
                  className={style.text}
                />
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/tortilla.page/blog">
                {" "}
                <TypeAnimation
                  sequence={[
                    5000,
                    "BLOG",
                    4000,
                    "bLoG",
                    4000,
                    "BlOg",
                    4000,
                    "blog",
                    4000,
                  ]}
                  wrapper="p"
                  repeat={Infinity}
                  speed={1}
                  deletionSpeed={1}
                  className={style.text}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.image_container}>
          <img src={BgImage} alt="bacground" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
