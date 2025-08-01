<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>✅ Weather Explorer</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Nunito', sans-serif;
      margin: 0;
      padding: 0;
      background: #e0f7fa;
      color: #333;
      text-align: center;
    }
    h1 {
      font-size: 2.5rem;
      margin: 1rem 0 0.5rem;
    }
    p {
      margin: 0 0 1rem;
      font-size: 1.2rem;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 1rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }
    .button {
      padding: 1rem;
      background: #4dd0e1;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transition: background 0.3s;
    }
    .button:hover {
      background: #0097a7;
    }
    .card {
      background: #fff;
      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .weather-icon {
      font-size: 2rem;
    }
    .tip {
      color: #0277bd;
      font-style: italic;
      margin-top: 0.5rem;
    }
    .back {
      margin-top: 2rem;
      font-size: 1rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ Weather Explorer</h1>
    <p>Pick a city. Spot the weather pattern!</p>
    <div id="app"></div>
  </div>
  <script>
    const weatherData = {
      "New York": [
        { day: "Monday", icon: "☀️", temp: "29°", desc: "Sunny", tip: "Getting warmer!" },
        { day: "Tuesday", icon: "⛅", temp: "31°", desc: "Partly Cloudy" },
        { day: "Wednesday", icon: "🌦️", temp: "28°", desc: "Showers", tip: "Rain is coming!" },
        { day: "Thursday", icon: "🌧️", temp: "26°", desc: "Rain", tip: "Pack your umbrella!" },
        { day: "Friday", icon: "☁️", temp: "25°", desc: "Cloudy", tip: "Cooler temperatures now!" }
      ],
      "Miami": [
        { day: "Monday", icon: "☀️", temp: "32°", desc: "Hot & Sunny", tip: "Very warm week!" },
        { day: "Tuesday", icon: "☀️", temp: "33°", desc: "Sunny" },
        { day: "Wednesday", icon: "⛅", temp: "31°", desc: "Clouds building" },
        { day: "Thursday", icon: "🌦️", temp: "30°", desc: "Scattered Showers" },
        { day: "Friday", icon: "🌧️", temp: "29°", desc: "Rainy" }
      ],
      "San Francisco": [
        { day: "Monday", icon: "☁️", temp: "19°", desc: "Cloudy", tip: "Mild and cool week" },
        { day: "Tuesday", icon: "☀️", temp: "21°", desc: "Sunny" },
        { day: "Wednesday", icon: "🌫️", temp: "20°", desc: "Foggy" },
        { day: "Thursday", icon: "⛅", temp: "22°", desc: "Partly Cloudy" },
        { day: "Friday", icon: "☀️", temp: "23°", desc: "Clear skies" }
      ],
      "Paris": [
        { day: "Monday", icon: "🌧️", temp: "17°", desc: "Rain", tip: "A rainy start!" },
        { day: "Tuesday", icon: "🌦️", temp: "18°", desc: "Showers" },
        { day: "Wednesday", icon: "☁️", temp: "19°", desc: "Cloudy" },
        { day: "Thursday", icon: "⛅", temp: "21°", desc: "Partly Cloudy" },
        { day: "Friday", icon: "☀️", temp: "23°", desc: "Sunny", tip: "Warming up!" }
      ],
      "Tokyo": [
        { day: "Monday", icon: "☀️", temp: "29°", desc: "Sunny", tip: "Getting warmer!" },
        { day: "Tuesday", icon: "⛅", temp: "31°", desc: "Partly Cloudy" },
        { day: "Wednesday", icon: "🌦️", temp: "28°", desc: "Showers", tip: "Rain is coming!" },
        { day: "Thursday", icon: "🌧️", temp: "26°", desc: "Rain", tip: "Pack your umbrella!" },
        { day: "Friday", icon: "☁️", temp: "25°", desc: "Cloudy", tip: "Cooler temperatures now!" }
      ],
      "Mexico City": [
        { day: "Monday", icon: "🌧️", temp: "22°", desc: "Rain", tip: "A wet start!" },
        { day: "Tuesday", icon: "🌧️", temp: "21°", desc: "Rain" },
        { day: "Wednesday", icon: "⛅", temp: "23°", desc: "Partly Cloudy" },
        { day: "Thursday", icon: "☀️", temp: "24°", desc: "Sunny" },
        { day: "Friday", icon: "☀️", temp: "25°", desc: "Clear skies", tip: "Warming up again!" }
      ]
    };

    const app = document.getElementById("app");
    let selectedCity = null;

    function renderCitySelection() {
      app.innerHTML = '<div class="grid">' +
        Object.keys(weatherData).map(city => `<button class="button" onclick="selectCity('${city}')">${city}</button>`).join('') +
        '</div>';
    }

    function selectCity(city) {
      selectedCity = city;
      const forecast = weatherData[city];
      let cards = forecast.map(item => `
        <div class="card">
          <h3>${item.day}</h3>
          <div class="weather-icon">${item.icon}</div>
          <p>${item.temp} – ${item.desc}</p>
          ${item.tip ? `<p class="tip">${item.tip}</p>` : ""}
        </div>
      `).join('');

      app.innerHTML = `
        <h2>5-Day Forecast: ${city}</h2>
        <div class="grid">${cards}</div>
        <button class="button back" onclick="goBack()">🔙 Back to Cities</button>
      `;
    }

    function goBack() {
      selectedCity = null;
      renderCitySelection();
    }

    renderCitySelection();
  </script>
</body>
</html>
