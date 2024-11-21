import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../Api";
import cloudIcon from "../assets/weather_icons/cloud.svg";
import clearIcon from "../assets/weather_icons/clear.svg";
import hazeIcon from "../assets/weather_icons/haze.svg";
import rainIcon from "../assets/weather_icons/rain.svg";
import snowIcon from "../assets/weather_icons/snow.svg";
import stormIcon from "../assets/weather_icons/storm.svg";

const WeatherContext = createContext();

const WeatherDataContextProvider = ({ children }) => {
  const localStorageWeatherData = JSON.parse(
    localStorage.getItem("weatherData")
  );
  const [data, setData] = useState(
    localStorageWeatherData ? localStorageWeatherData : []
  );
  const [loading, setLoading] = useState(false);
  const [weatherImage, setWeatherImage] = useState(cloudIcon);

  const handleWeatherUpdate = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchData(latitude, longitude);
    });
  };

  const fetchData = useCallback(async (lat, lon) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${WEATHER_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${WEATHER_API_KEY}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getWeatherIcon = (id) => {
    if (id === 800) return clearIcon;
    if (id >= 200 && id <= 232) return stormIcon;
    if (id >= 600 && id <= 622) return snowIcon;
    if (id >= 701 && id <= 781) return hazeIcon;
    if (id >= 801 && id <= 804) return cloudIcon;
    if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) return rainIcon;
    return cloudIcon;
  };

  const wDataAvailable = Object.keys(data).length !== 0;

  useEffect(() => {
    setWeatherImage(getWeatherIcon(wDataAvailable && data.weather[0].id));
    localStorage.setItem("weatherData", JSON.stringify(data));
  }, [data]);

  return (
    <WeatherContext.Provider
      value={{
        fetchData,
        data,
        loading,
        handleWeatherUpdate,
        weatherImage,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherDataContextProvider;
export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("context must use within a provider");
  }
  return context;
}
