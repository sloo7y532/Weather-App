import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

function WeaatherApp() {
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [city, setCity] = useState("London");
  const [cityInput, setCityInput] = useState("London");
  const [wrongCity, setWrongCity] = useState(false);

  let api_key = "2a48a135e7cd751032c71ded3a64d571";

  // handle search
  async function handleSearch() {
    if (cityInput === "") {
    } else {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=Metric&appid=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();

      if (data.cod !== "404") {
        setTemp(Math.round(data.main.temp));
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        setCity(data.name);
        // handle weather icon
        switch (data.weather[0].main) {
          case "Clouds":
            setWeatherIcon(cloud_icon);
            break;
          case "Clear":
            setWeatherIcon(clear_icon);
            break;
          case "Wind":
            setWeatherIcon(wind_icon);
            break;
          case "Snow":
            setWeatherIcon(snow_icon);
            break;
          case "Drizzle":
            setWeatherIcon(drizzle_icon);
            break;
          case "Rain":
            setWeatherIcon(rain_icon);
            break;
          default:
        }
      } else {
        setWrongCity(true);
      }
    }
    setCityInput("");
  }

  // handle close snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWrongCity(false);
  };

  // handle key down enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // handle use effect
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <div className="page">
      <div className="container">
        <div className="topBar">
          <input
            type="text"
            value={cityInput}
            className="cityInput"
            placeholder="Search"
            onChange={(event) => {
              setCityInput(event.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <div className="searchIcon" onClick={handleSearch}>
            <img src={Search_icon} alt="search-icon" />
          </div>
        </div>
        <div className="body">
          <img src={weatherIcon} alt="cloud" />
          <h1>{temp}°C</h1>
          <h2>{city}</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <div>
              <img src={humidity_icon} alt="humidity_icon" />
            </div>
            <div className="left-right">
              <h2>{humidity} %</h2>
              <h3>Humidity</h3>
            </div>
          </div>
          <div className="right">
            <div className="right-left">
              <img src={wind_icon} alt="wind_icon" />
            </div>
            <div className="right-right">
              <h2>{windSpeed} km/h</h2>
              <h3>Wind Speed</h3>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={wrongCity} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          id="alert"
          onClose={handleClose}
          variant="filled"
          severity="error"
        >
          Wrong City — check it out!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default WeaatherApp;
