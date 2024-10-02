// WEATHER AND SEARCH CITY FUNCTIONALITY

const weatherForm = document.querySelector(".weather-form");
const cityInput = document.getElementById("city-input");
const weatherCard = document.getElementById("weather-card");
const apiKey = "0a2242363e2834a882cd99fb569de8d9";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // to prevent unnecessary page reloading

  const city = cityInput.value; // Catching value from the input element

  if (city) {
    try {
      const weatherData = await getWeatherData(city); // This function waits for weather data
      displayWeatherInfo(weatherData); // When weather data appear, call this function
    } catch (error) {
      console.error(error);
      alert("There's an error fetching your data");
    }
  } else {
    alert("Please input a valid city");
  }
}); // This whole function catches and store inputted value to an element
// and in order to get the weather data

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; // The actual fetching happen

  const response = await fetch(apiUrl); // Wait for the data to be recognized
  console.log(response); // Test to see if the city input has a 'OK' status

  if (!response.ok) {
    throw new Error("The input city is not recognized, Please try again.");
  }
  return await response.json(); // This returns await response and converted to a json string format
} // This function fetches the weather data

function displayWeatherInfo(data) {
  console.log(data);

  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data; // This variable consists of object data fetched from apiKey and apiUrl

  weatherCard.textContent = ""; // This will clear the input element when reloaded or catches an error
  weatherCard.style.display = "block"; // This is optional for revealing the hidden form element from HTML file

  //   These set of variables recreating the H1 and p Elements that commented in the main HTML
  const cityDisplay = document.createElement("h1");
  const tempHumidityDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");
  const descDisplay = document.createElement("p");

  cityDisplay.textContent = city;
  tempHumidityDisplay.innerHTML = `<p class="temp-humidity-display">
  <i class="bx bxs-thermometer"></i>Temp: ${(temp - 273.15).toFixed(1)}°C 
  <span class="humidity"
    ><i class="bx bx-wind"></i>Humidity: ${humidity}%</span
  ></p>`; // The temp - 273.15 and .toFixed method makes the temperature appear in celcius that being rounded in 1 decimal places
  weatherEmoji.textContent = getWeatherEmoji(id);
  descDisplay.textContent = description;

  cityDisplay.classList.add("weather-card");
  tempHumidityDisplay.classList.add("p");
  weatherEmoji.classList.add("weather-emoji");
  descDisplay.classList.add("description-display"); // This set of methods access the css styles of each element

  weatherCard.appendChild(cityDisplay);
  weatherCard.appendChild(tempHumidityDisplay);
  weatherCard.appendChild(weatherEmoji);
  weatherCard.appendChild(descDisplay); // This set of methods allowing to modify the structure of an HTML document
  // Also this called and vastly part of 'DOM' manipulation technique in Javascript
} // This function displays the weather info and necessary description for the page

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌧️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
    case weatherId === 800:
      return "🌞";
    case weatherId >= 801 && weatherId < 810:
      return "☁️";
    default:
      return "❓";
  }
}
