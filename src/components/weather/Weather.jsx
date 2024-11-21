import React from "react";
import Spinner from "../loader/LoaderWeather/Spinner";
import { useWeatherContext } from "../../context/WeatherDataContext";

const Weather = () => {
  const { data, loading, weatherImage, handleWeatherUpdate } =
    useWeatherContext();

  const wDataAvailable = Object.keys(data).length !== 0;

  return (
    <>
      <div className="weather">
        <div className="refresh">
          {loading ? (
            <Spinner />
          ) : (
            <span
              onClick={() => {
                handleWeatherUpdate();
              }}
            >
              <i className="bx bx-refresh"></i>
            </span>
          )}
        </div>

        <div className="weather_data">
          <div className="top_data">
            <img src={weatherImage} alt="weather mobile" />
            <div className="temp_main">
              {wDataAvailable ? data.main.temp.toFixed(1) : "13"}°C
            </div>
            <div className="weather_main">
              {wDataAvailable ? data.weather[0].main : "Broken Clouds"}
            </div>
            <div className="location">
              <i className="bx bx-map"></i>
              <span>{wDataAvailable ? data.name : "kolkata"}</span>
            </div>
          </div>
          <div className="bottom_data">
            <div className="column feels">
              <i className="bx bxs-thermometer"></i>
              <div className="details">
                <span>
                  {wDataAvailable ? data.main.feels_like.toFixed(1) : "17"}°C
                </span>
                <p>Temperatura</p>
              </div>
            </div>
            <div className="column humidity">
              <i className="bx bxs-droplet-half"></i>
              <div className="details">
                <span>{wDataAvailable ? data.main.humidity : "80"}%</span>
                <p>Umidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
