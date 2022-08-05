import './App.css';
import { useState } from 'react';

function App() {
  const [WeatherNow, setWeatherNow] = useState({})
  const [city, setCity] = useState('')
  const apiKey = '7e15390217c02d9b811484dc0dcf04fc'

  const handleChange = event => {
    setCity(event.target.value)

  }
  const handleClick = () => {
    setCity(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`)
      .then(response => response.json())
      .then((data) => {
        setWeatherNow(data)
        console.log(data)

      })
      .catch(err => { console.log(err.message) }
      )

  }


  return (
    <div className='container'><div className="App">
      <h2>Welcome to Weather App</h2>
      <input className='input' type="text" placeholder='City...' onChange={handleChange} value={city} />
      <button onClick={handleClick}>Search</button>
      {WeatherNow.name ? <div className='weather-data'>
        <p>Weather in {WeatherNow.name}, {WeatherNow.sys.country} City</p>
        {WeatherNow.main ? <p>Temperature: {WeatherNow.main.temp} &#176;C</p> : null}
        {WeatherNow.weather ? <p>Weather:{WeatherNow.weather[0].main}, {WeatherNow.weather[0].description} </p> : null}
        {WeatherNow.wind ? <p>Wind Speed: {WeatherNow.wind.speed} KPH</p> : null}

      </div> : <p>Please enter your city</p>}


    </div></div>)

};

export default App;
