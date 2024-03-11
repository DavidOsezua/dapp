import React from "react";
import styles from "./Hero.module.css";
import "../App.css";
import { heroImg, connectBtn, sync } from "../assets";
import NavMenu from "./NavMenu";
const Hero = ({ toggle, toogleHandler }) => {
  return (
    <section className={`${styles.heroSection}`}>
      <div className={`${styles.heroImage}`}>
        <img src={heroImg} className={`${styles.img}`} />
      </div>
      <div className={`${styles.heroContainer}`}>
        <div className={`${styles.check}  ${toggle && styles.showMenu}`}>
          <NavMenu />
        </div>

        <div className={`${styles.firstCol}`}>
          <h1 className={`${styles.title}`}>
            Validate, Synchronize, and Rectify your assests and wallets
          </h1>
          <p>
            Open, Secure, and Decentralized Protocol for syncing and
            rectification of
          </p>
          <div className="mt-[2rem] flex gap-[1rem]">
            <button>
              <img src={connectBtn} />
            </button>
            <button>
              <img src={sync} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
