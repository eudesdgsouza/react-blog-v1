import React from "react";
import Banner from "../assets/images/banner1.jpg";

const TopHero = () => {
  return (
    <section className="hero__banner container">
      <div className="banner__overlay"></div>
      <img src={Banner} alt="banner-top" />
    </section>
  );
};

export default TopHero;
