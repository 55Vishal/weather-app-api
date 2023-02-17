import "./App.css";

import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [addresss,setAddresss]=useState({})
  const apiKey = "f56f24967aaf51182d1d4df628297c6d"

  async function searchLocation() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location} &appid=${apiKey}`);
    const city = await res.json();
    console.log(city.main.temp)
    setData(city.main);
    console.log(data)
    setAddresss(city)
    setLocation("")
  }

  function handleCapture(e) {
    setLocation(e.target.value);
  }
  return (
    <div className="App">
    <nav className="navbar">
    ⛅ Weather
    </nav>
    
      <input
        className="search"
        type="text"
        placeholder="Enter Location"
        onChange={handleCapture}
        onClick={searchLocation}
        value={location}
      />
      <div>
      <button onClick={searchLocation}>search</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{addresss.name}</p>
          </div>
          <div className="temp">
            <h1>{data.temp}°F</h1>
          </div>
          <div className="description">
            <p>{data.icon}</p>
          </div>
        </div>
        <div className="right">
          <div className="feels">
            <p>{data.temp_max}°F</p>
          </div>
          <div className="humidity">
            <p>{data.temp_min-11.3}°F</p>
          </div>
          <div className="wind">{data.wind} 2.3 mph</div>
        </div>
      </div>
    </div>
  );
}

export default App;