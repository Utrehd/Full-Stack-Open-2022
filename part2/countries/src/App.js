import { useState, useEffect } from 'react'
import QueryField from './components/QueryField'
import CountryDisplay from './components/CountryDisplay'
import axios from 'axios'



const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')
  console.log('render', countries)


  const handleQuery = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  function filterCountries(query, countries){
    if (query === ''){
      return countries
    }
    
    let filteredCountries = []
    countries.map(country => {
      if (country.name.common.toLowerCase().includes(query.toLowerCase())){
          filteredCountries = filteredCountries.concat(country) 
      }
      return filteredCountries
    })
    return filteredCountries
  }


  return (
    <div>
      <h2>Find Countries</h2>
      <QueryField query={query} handleQuery={handleQuery}/>
      <h2>Found Countries</h2>
      <CountryDisplay countries={filterCountries(query, countries)} handlerButton={handleQuery}/>
    </div>
  )
}

export default App