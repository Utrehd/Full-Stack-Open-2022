import React from 'react'
import List from './List'

const CountrySpecification = ({country}) => {
  return (
    <div>
      <div>Name: {country.name.common}</div>
      <div>Capital: {country.capital}</div>
      <div>Area: {country.area}</div>
      <div>Population: {country.population}</div>
      <List items={country.languages} path={[]}/>
      <div><img alt="Country Flag" src={country.flags.png}/></div>
    </div>
  )
}

export default CountrySpecification