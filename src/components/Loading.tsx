import React from "react";

// Libraries
import { TypeAnimation } from "react-type-animation";

import style from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={style.wrapper}>
      <TypeAnimation
        sequence={[
          "LOADING...",
          1000,
          "lOaDiNg...",
          1000,
          "LoAdInG...",
          1000,
          "loading...",
        ]}
        wrapper="h2"
        repeat={Infinity}
        speed={50}
        deletionSpeed={1}
      />
    </div>
  );
};
