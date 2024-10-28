import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  // Setting all initial state to hold weather data, error, city, input value and loading status
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "96f5d997d186ec1aa783c2d13fc21b19"; // Weather API Key

  // Fetch weather data for an input city
  const fetchWeatherByCity = async (cityName) => {
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeatherData(res.data);
    } catch (error) {
      setError("Could not fetch weather data, Please try again");
    } finally {
      setLoading(false);
    }
  }; // Full code for fetching Weather Data using Try, Catch method

  // Fetch weather data based on the user's geolocation
  //   const fetchWeatherGeolocation = async (lat, lon) => {
  //     setLoading(true);
  //     setError(null);

  //     try {
  //       const res = await axios.get(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  //       );
  //       setWeatherData(res.data);
  //     } catch (error) {
  //       setError("Could not fetch weather data using Geolocation");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }; // Full code for fetching Weather Data in Geolocation using Try, Catch Method

  // Setting functions to handle form submission for searching weather by city
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      fetchWeatherByCity(inputCity);
      setCity(inputCity); // Updating city based on the input and displaying it
      setInputCity(""); // After submitting the form, this will clear the input field
    } else {
      setError("Error occured, please try again");
    }
  };

  // When component mounts, get the user's current geolocation using useEffect
  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           console.log("Geolocation successful:", position);
  //           fetchWeatherGeolocation(
  //             position.coords.latitude,
  //             position.coords.longitude
  //           );
  //         },
  //         (error) => {
  //           setError("Location can't find, Please try again");
  //         }
  //       );
  //     }
  //   }, []); // This effect will occur if fetching the data of geolocation is successful

  return (
    <div className="backdrop-blur-sm w-2/4 gap-4 border-2 rounded-md m-10 p-10 border-t-teal-200 border-r-teal-200">
      <form onSubmit={handleSearch} className="text-center">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter City"
          className="px-2 border focus:outline-none bg-indigo-900/40 text-white backdrop-blur-sm rounded-l-md placeholder-ml-1"
        />
        {/*  // Updating the inputCity based on the input  */}
        <button
          type="submit"
          className="border px-2 bg-indigo-700 rounded-r-md text-white"
        >
          Search
        </button>
      </form>
      {/* // Display Error if one occured */}
      {error && <p>{error}</p>}
      {/* // Display Loading indicator while Fetching Data */}
      {loading && <p>Loading... Please Wait {":)"}</p>}
      {/* // Rendering weather data if Available */}
      {weatherData && !loading && (
        <div className="w-full">
          <h2 className="text-[50px] text-white text-center">
            Weather in {city || weatherData.name}
          </h2>
          <div className="bg-gray-900/70 p-2 rounded-md border border-slate-300">
            <p className="text-white text-[25px] flex justify-between">
              Temperature:{" "}
              <span className="italic">{weatherData.main.temp}°C</span>
            </p>
            <p className="text-white text-[25px] flex justify-between">
              Feels Like:{" "}
              <span className="italic">{weatherData.main.feels_like}°C</span>
            </p>
            <p className="text-white text-[25px] flex justify-between">
              Humidity:{" "}
              <span className="italic">{weatherData.main.humidity}%</span>
            </p>
            <p className="text-white text-[25px] flex justify-between">
              Weather:{" "}
              <span className="italic">
                {weatherData.weather[0].description}
              </span>
            </p>
            <p className="text-white text-[25px] flex justify-between">
              Wind Speed:{" "}
              <span className="italic">{weatherData.wind.speed}m/s</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
