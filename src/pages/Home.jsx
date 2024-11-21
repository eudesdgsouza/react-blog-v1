import React from "react";
import Posts from "../components/Posts";
import Hero from "../components/Hero";
import Weather from "../components/weather/Weather";
import TopHero from "../components/TopHero";
import Loader from "../components/loader/LoaderMain/Loader";
import WeatherMobile from "../components/weather/WeatherMobile ";
import { useDataContext } from "../context/DataContext";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const { loading } = useDataContext();
  return (
    <>
      <ScrollToTop />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <TopHero />
          <WeatherMobile />
          <div className="container" style={{ display: "flex" }}>
            <div>
              <Hero />
              <Posts />
            </div>
            <Weather />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
