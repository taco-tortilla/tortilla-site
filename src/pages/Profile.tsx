import React from "react";

// Components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Libraries
import { TypeAnimation } from "react-type-animation";

// Style
import style from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={style.wrapper}>
      <header>
        <Header />
      </header>
      <div className={style.container}>
        <h2>Profile</h2>
        <div>
          <ul>
            <li>
              <TypeAnimation
                sequence={[1000, "Name "]}
                wrapper="p"
                repeat={0}
                speed={1}
                cursor={false}
              />
              <ul>
                <li>
                  <TypeAnimation
                    sequence={[
                      2000,
                      "↳　",
                      500,
                      "↳　Taisei Hasegawa (tortilla) ",
                    ]}
                    repeat={0}
                    speed={60}
                    cursor={false}
                  />
                </li>
              </ul>
            </li>
            <li>
              <TypeAnimation
                sequence={[1000, "Age "]}
                wrapper="p"
                repeat={0}
                speed={1}
                cursor={false}
              />
              <ul>
                <li>
                  <TypeAnimation
                    sequence={[2000, "↳　", 500, "↳　22 (2000) "]}
                    repeat={0}
                    speed={60}
                    cursor={false}
                  />
                </li>
              </ul>
            </li>
            <li>
              <TypeAnimation
                sequence={[1000, "Skills "]}
                wrapper="p"
                repeat={0}
                speed={1}
                cursor={false}
              />
              <ul>
                <li>
                  <TypeAnimation
                    sequence={[
                      2000,
                      "↳　",
                      500,
                      "↳　JavaScript (React) ---> Used in business",
                    ]}
                    repeat={0}
                    speed={60}
                    cursor={false}
                  />
                </li>
                <li>
                  <TypeAnimation
                    sequence={[
                      2000,
                      "↳　",
                      500,
                      "↳　Java (Spring boot), Vue.js ---> Used in personal dev",
                    ]}
                    repeat={0}
                    speed={60}
                    cursor={false}
                  />
                </li>
              </ul>
            </li>
            <li>
              <TypeAnimation
                sequence={[1000, "Fave "]}
                wrapper="p"
                repeat={0}
                speed={1}
                cursor={false}
              />
              <ul>
                <li>
                  <TypeAnimation
                    sequence={[2000, "↳　", 500, "↳　Movies "]}
                    repeat={0}
                    speed={60}
                    cursor={false}
                  />
                </li>
                <li>
                  <TypeAnimation
                    sequence={[2000, "↳　", 500, "↳　Plants "]}
                    repeat={0}
                    speed={60}
                    cursor={false}
                  />
                  <ul>
                    <li>
                      <TypeAnimation
                        sequence={[
                          3500,
                          "↳　",
                          500,
                          "↳　Currently growing --> Monstera, Dieffenbachia, Pachira, Chlorophytum comosum, Hakonechloa macra, Hedera",
                        ]}
                        repeat={0}
                        speed={60}
                        cursor={false}
                      />
                    </li>
                  </ul>
                </li>
              </ul>
              <li>
                <TypeAnimation
                  sequence={[1000, "SNS "]}
                  wrapper="p"
                  repeat={0}
                  speed={1}
                  cursor={false}
                />
                <ul>
                  <li style={{ width: "fit-content" }}>
                    <a href="https://www.instagram.com/_taisei.1">
                      <TypeAnimation
                        sequence={[2000, "↳ ", 500, "↳　Instagram"]}
                        repeat={0}
                        speed={60}
                        cursor={false}
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
