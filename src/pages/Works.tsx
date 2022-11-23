import React from "react";
import SplitBill from "../images/work_splitbill.png";
// Components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Style
import style from "./Works.module.scss";

export const Works = () => {
  return (
    <div className={style.wrapper}>
      <header>
        <Header />
      </header>
      <div className={style.container}>
        <ul>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
          <li>
            <a>
              <img src={SplitBill} alt="Custom split the bill" />
              <div className={style.works_desc}>
                <h2>Custom split the bill</h2>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
