// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { buttonLinks } from "../data/data";
import styles from "./Navbar.module.css";
import Button from "./Button";
import { Logo, ham } from "../assets";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.navContainer}`}>
        {/**************** LOGO   ********************/}
        <div className={`${styles.logoContainer}`}>
          <img src={Logo} className={`${styles.logo}`} />
          <p>Home - All Interconnect</p>
        </div>

        {/**************** BUTTON LINKS  ********************/}
        <ul className={`${styles.navMenu} ${toggle && styles.showMenu} `}>
          <button
            className={`bg-[#631b94] px-[0.6rem] py-[0.5rem] rounded-md  text-[#fff]`}
          >
            All
          </button>

          {buttonLinks.map((buttonLink) => (
            <Button key={buttonLink.link} toggleHandler={toggleHandler}>
              {buttonLink.link}
            </Button>
          ))}

          <NavLink to="wallet">
            {" "}
            <button
              className={`bg-[#631b94] px-[0.6rem] py-[0.5rem] rounded-md w-full text-[#fff]`}
            >
              CONNECT WALLET
            </button>
          </NavLink>
        </ul>

        <button className={`${styles.ham}`} onClick={toggleHandler}>
          <img src={ham} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
