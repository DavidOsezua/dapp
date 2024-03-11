// eslint-disable-next-line no-unused-vars
import React from "react";
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
  return (
    <>
      <Navbar />
      <section className="overflow-hidden">
        <Hero />
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
