import React from 'react'
import Button from './Button'

function navigate (item, path){ 
  return path.reduce((value, entry) => value[entry], item)
}

const CountryList = ({items, path, handlerButton}) => {
  if (! Array.isArray(items)){
    items = Object.values(items)
    console.log('Items', items)
  }

  return (
    <ul>
      {items.map((item) => {
        const name = navigate(item, path)
        
        return (
        <li key={name}>
            <p>
              {name + ' '}
              <Button label='show' handler={handlerButton} value={name}/>
            </p>
        </li>
        )
      })}
    </ul>
  )
}

export default CountryList