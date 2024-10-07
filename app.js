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

  weatherEmoji.textContent = getWeatherEmoji(id);
  descDisplay.textContent = description
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "); // To make the first letters of the Strings into uppercase
  cityDisplay.textContent = city;
  tempHumidityDisplay.innerHTML = `<p class="temp-humidity-display">
  <i class="bx bxs-thermometer"></i>Temp: ${(temp - 273.15).toFixed(1)}°C 
  <span class="humidity"
    ><i class="bx bx-wind"></i>Humidity: ${humidity}%</span
  ></p>`; // The temp - 273.15 and .toFixed method makes the temperature appear in celcius that being rounded in 1 decimal places

  weatherEmoji.classList.add("weather-emoji");
  descDisplay.classList.add("description-display"); // This set of methods access the css styles of each element
  cityDisplay.classList.add("weather-card");
  tempHumidityDisplay.classList.add("p");

  weatherCard.appendChild(descDisplay);
  weatherCard.appendChild(weatherEmoji);

  weatherCard.appendChild(cityDisplay);
  weatherCard.appendChild(tempHumidityDisplay);

  document.getElementById("blank-msg").textContent = "";
  // This set of methods allowing to modify the structure of an HTML document
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

// This set of functions is for Showing the Modal when 'Add New Task' is clicked
const addNewTask = document.getElementById("add-new-task");
const closeModal = document.querySelector(".close");
const openModal = document.getElementById("myModal");

addNewTask.addEventListener("click", (e) => {
  e.preventDefault;
  openModal.style.display = "block";
}); // This function will trigger and set the display to appear in the page

closeModal.onclick = function () {
  openModal.style.display = "none";
}; // This function will trigger and set the display of modal in none

window.onclick = function (event) {
  if (event.target === openModal) {
    openModal.style.display = "none";
  } // This function will trigger to close the Modal if clicked outside the main modal window
};

// Date Today and Time today

// Create new elements for date and time
const dateContainer = document.createElement("h4");
const timeContainer = document.createElement("span");
const timeHeading = document.createElement("h1");

// Get current date and time
const now = new Date();

// Format the date parts
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formattedDateParts = now
  .toLocaleDateString(undefined, options)
  .split(","); // Returns ["Monday", " September 5, 2024"]
const day = formattedDateParts[0]; // Day like "Monday"
const date = formattedDateParts.slice(1).join(",").trim(); // Date like "September 5, 2024"

// Use template literals to create the date string with the " | " separator
const formattedDate = `${day} | ${date}`;

// Format the time as "09:48PM"
const formattedTime = now.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

// Set text content of the created elements
dateContainer.textContent = formattedDate;
timeHeading.textContent = formattedTime;

// Add class names using classList
dateContainer.classList.add("current-date");
timeContainer.classList.add("current-time");

// Append the time heading to the time container (for structure)
timeContainer.appendChild(timeHeading);

// Append the date and time containers to the .date-time div
document.querySelector(".date-time").appendChild(dateContainer);
document.querySelector(".date-time").appendChild(timeContainer);

// Adding new Task

const titleInput = document.getElementById("title-input");
const descInput = document.getElementById("desc-input");
const taskLists = document.getElementById("tasks-list");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const taskTitle = titleInput.value.trim();

  if (taskTitle) {
    const newTask = document.createElement("li");
    const inputTitle = document.createElement("h4");
    const timeSubmit = document.createElement("p");
    const tapToEdit = document.createElement("p");

    newTask.innerHTML = `<input type="checkbox" id="added-task" />
              <h4 class="input-title">${taskTitle.toUpperCase()}</h4>
              <span class="time-submit"
                ><p><i>created:</i> ${date}</p></span
              >
              <span class="tap-to-edit"
                ><p><i>tap to edit</i></p></span
              >`;

    newTask.classList.add("task-details");
    inputTitle.classList.add("input-title");
    timeSubmit.classList.add("time-submit");
    tapToEdit.classList.add("tap-to-edit");

    taskLists.appendChild(newTask);

    titleInput.value = "";
    descInput.value = "";

    openModal.style.display = "none";
  } else {
    alert("Please enter both a title and a description");
  }
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Window 1 buttons functionality
const editProfile = document.getElementById("edit-profile");
const seeUpcomingTask = document.getElementById("upcoming-task");
const seeCompletedTask = document.getElementById("completed-task");
const signOutBtn = document.getElementById("sign-out");
const profilePic = document.getElementById("profile-pic");

// editProfile.addEventListener("click", () => {
//   const featureMsg = document.createElement("h1");

//   featureMsg.innerHTML = "This feature will be updated soon";
//   featureMsg.classList.add("upcoming-feature-msg");
//   document.getElementById("menu-window-3").appendChild(featureMsg);

//   setTimeout(() => {
//     featureMsg.remove();
//   }, 3000);
// });

function showFeatureMsg(button, msg, containerId) {
  button.addEventListener("click", () => {
    const featureMsg = document.createElement("h1");
    const msgContainer = document.getElementById(containerId);
    const existingMsg = msgContainer.querySelector(".upcoming-feature-msg");

    if (existingMsg) {
      existingMsg.remove();
    }

    featureMsg.innerHTML = msg;
    featureMsg.classList.add("upcoming-feature-msg");
    msgContainer.appendChild(featureMsg);

    setTimeout(() => {
      featureMsg.remove();
    }, 3000);
  });
}
showFeatureMsg(
  editProfile,
  "This Feature Will Be Updated Soon",
  "menu-window-3"
);
showFeatureMsg(
  seeUpcomingTask,
  "This Feature Will Be Updated Soon",
  "menu-window-3"
);
showFeatureMsg(
  seeCompletedTask,
  "This Feature Will Be Updated Soon",
  "menu-window-3"
);
showFeatureMsg(
  signOutBtn,
  "This Feature Will Be Updated Soon",
  "menu-window-3"
);
showFeatureMsg(
  profilePic,
  "This Feature Will Be Updated Soon",
  "menu-window-3"
);
