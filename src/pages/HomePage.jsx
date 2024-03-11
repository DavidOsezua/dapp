// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  FeaturesComponent,
  Hero,
  InstructionComponent,
  Navbar,
  CTA,
  NewsLetter,
  Footer1,
  Footer2,
} from "../components";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <Navbar toggleHandler={toggleHandler} />
      <section className="overflow-hidden">
        <Hero toggle={toggle} toggleHandler={toggleHandler} />
        <InstructionComponent />
        <FeaturesComponent />
        <CTA />
        <NewsLetter />
        <Footer1 />
        <Footer2 />
      </section>
    </>
  );
};

export default HomePage;
