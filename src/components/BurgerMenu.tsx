import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const BurgerMenu = () => {
  return (
    <>
      {/* <h1>aa</h1> */}
      <Menu right>
        <Link style={{ textDecoration: "none" }} to="./profile">
          <TypeAnimation
            sequence={["PROFILE", 4000]}
            style={{ fontSize: "2em" }}
            wrapper="p"
            repeat={Infinity}
            speed={1}
            deletionSpeed={1}
          />
        </Link>
      </Menu>
    </>
  );
};
