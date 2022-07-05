import React from 'react'
import List from './List'
import axios from 'axios'
import {useState, useEffect} from 'react'

const CountrySpecification = ({country}) => {
  const weather_api_key = process.env.REACT_APP_API_KEY
  console.log('Weather API Key : ', weather_api_key)

  const [weather, setWeather] = useState({});
  console.log('weather state', weather)
  useEffect(() => {
    console.log('effect weather')
    axios
      .get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital}&limit=1&appid=${weather_api_key}`)
      .then(response => {
        console.log('promise fulfilled geo', response.data)
        console.log('promise fulfilled lat', response.data[0].lat)
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${weather_api_key}&units=metric`)
        .then(response => {
          console.log('promise fulfilled weather', response.data)
          setWeather(response.data)
        })
      })
  }, [])

  let elements = (<div>No data found</div>)

  if(Object.keys(weather).length > 0){
    elements = (
      <div>
        <h2>Weather in Helsinki</h2>
        <div>Temperature: {weather.main.temp}</div>
        <div><img alt="Weather Icon" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/></div>
        <div>Wind: {weather.wind.speed} m/s</div>
      </div>
    )
  }

  return (
    <div>
      <div>Name: {country.name.common}</div>
      <div>Capital: {country.capital}</div>
      <div>Area: {country.area}</div>
      <div>Population: {country.population}</div>
      <List items={country.languages} path={[]}/>
      <div><img alt="Country Flag" src={country.flags.png}/></div>
      {elements}
    </div>
  )
}

export default CountrySpecification