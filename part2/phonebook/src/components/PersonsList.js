import React from 'react'

const PersonsList = ({persons, handlerRemove, label}) => {
  console.log('person bei handler', persons)
  return (
    <ul>
        {persons.map((person) => (
        <li key={person.name}>
          {person.name} {person.mobile}
          <button onClick={()=>{handlerRemove(person.id)}}> {label}</button>
        </li>
      ))}
    </ul>
  )
}

export default PersonsList