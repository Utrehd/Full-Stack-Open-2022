import React from 'react'
import Text from './Text'
import List from './List'
import CountrySpecification from './CountrySpecification'

const CountryDisplay = ({countries}) => {
  let len = (countries.length)
  if (len == 1){
    console.log('country', countries[0])
    return (<CountrySpecification country={countries[0]}/>)
  }

  if (len <= 10){
    return(<List items={countries} path={['name', 'common']}/>)
  }

  if (len > 10){
    return(<Text text='Too many matches, be more specific'/>)
  } 
}

export default CountryDisplay