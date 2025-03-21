 async function getWeather() {
        let cityName = document.querySelector("#cityName");
        let location = document.querySelector("#location");
        let temperature = document.querySelector("#temperature");
        let condition = document.querySelector("#condition");
        let icon = document.querySelector("#icon");
        let weatherData = document.querySelector("#weatherData");
        let errorMessage = document.querySelector("#errorMessage");

        weatherData.classList.add("hidden");
        errorMessage.classList.add("hidden");

        try {
            // Fetch weather data from the API
            var response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=f8ada197a55a45999fb80437252103&q=${cityName.value}&aqi=no`
            );

            // Check if response is successful
            if (!response.ok) {
                throw new Error("City not found or there is an issue with the API");
            }

            var data = await response.json();

            // Display fetched weather data
            location.innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
            temperature.innerHTML = `${data.current.temp_c}°C`;
            condition.innerHTML = data.current.condition.text;
            icon.innerHTML = `<img src="https:${data.current.condition.icon}" alt="weather icon" class="mx-auto">`;

            // Show the weather data section
            weatherData.classList.remove("hidden");

        } catch (error) {
            // Handle any errors and display an error message
            console.error(error);
            errorMessage.classList.remove("hidden");
        }
    }
