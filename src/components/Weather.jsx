import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  // State to hold weather data, any error messages, city, input value, and loading status
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "96f5d997d186ec1aa783c2d13fc21b19"; // API key for OpenWeather

  // Function to fetch weather data based on input city
  const fetchWeatherByCity = async (cityName) => {
    setLoading(true); // Set loading status to true when fetching data
    setError(null); // Clear any previous errors

    try {
      // Make API request to OpenWeather
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeatherData(res.data); // Store the API response in weatherData
    } catch (error) {
      // Set error message if request fails
      setError("Could not fetch weather data, Please try again");
    } finally {
      setLoading(false); // Stop loading once request completes
    }
  };

  // Code snippet for fetching weather data based on user's geolocation
  // This is commented out, but shows an alternative fetch method using latitude and longitude
  // const fetchWeatherGeolocation = async (lat, lon) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const res = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  //     );
  //     setWeatherData(res.data);
  //   } catch (error) {
  //     setError("Could not fetch weather data using Geolocation");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Function to handle search form submission for city-based weather
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form's default submission behavior
    if (inputCity.trim()) {
      // Check if input is not empty
      fetchWeatherByCity(inputCity); // Call function to fetch weather for input city
      setCity(inputCity); // Update city name for display
      setInputCity(""); // Clear input field after search
    } else {
      setError("Error occurred, please try again"); // Display error for empty input
    }
  };

  // Code snippet to fetch weather based on user's geolocation when component mounts
  // This is currently commented out
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         console.log("Geolocation successful:", position);
  //         fetchWeatherGeolocation(
  //           position.coords.latitude,
  //           position.coords.longitude
  //         );
  //       },
  //       (error) => {
  //         setError("Location can't be found, Please try again");
  //       }
  //     );
  //   }
  // }, []);

  return (
    <div className="text-center backdrop-blur-sm w-2/4 gap-4 border-2 rounded-md m-2 p-10 border-t-teal-200 border-r-teal-200">
      {/* Form for entering city name */}
      <form onSubmit={handleSearch} className="text-center">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)} // Update inputCity state with user input
          placeholder="Enter City"
          className="px-2 border focus:outline-none bg-indigo-900/40 text-white backdrop-blur-sm rounded-l-md placeholder-ml-1"
        />
        <button
          type="submit"
          className="border px-2 bg-indigo-700 rounded-r-md text-white"
        >
          Search
        </button>
      </form>

      {/* Display error message if error occurs */}
      {error && <p>{error}</p>}

      {/* Display loading message while fetching data */}
      {loading && (
        <p className="text-center text-white pt-10">
          Loading... Please Wait {":)"}
        </p>
      )}

      {/* Display weather data if available and loading is complete */}
      {weatherData && !loading && (
        <div className="w-full mt-5">
          <div className="m-2 bg-gray-900/70 p-2 rounded-md border border-slate-300">
            <h2 className="text-[50px] text-white text-center pb-2">
              Weather in {city || weatherData.name}
            </h2>
            {/* Display various weather details */}
            <p className="text-white text-[25px] flex justify-between px-5">
              Temperature:{" "}
              <span className="italic">{weatherData.main.temp}°C</span>
            </p>
            <p className="text-white text-[25px] flex justify-between px-5">
              Feels Like:{" "}
              <span className="italic">{weatherData.main.feels_like}°C</span>
            </p>
            <p className="text-white text-[25px] flex justify-between px-5">
              Humidity:{" "}
              <span className="italic">{weatherData.main.humidity}%</span>
            </p>
            <p className="text-white text-[25px] flex justify-between px-5">
              Weather:{" "}
              <span className="italic">
                {weatherData.weather[0].description}
              </span>
            </p>
            <p className="text-white text-[25px] flex justify-between px-5">
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
