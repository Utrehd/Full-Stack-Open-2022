import React from 'react'
import Person from './Person'

const PersonsList = ({persons}) => {
  return (
    <ul>
        {persons.map((person) => (
          <Person key={person.name} person={person}/>
      ))}
    </ul>
  )
}

export default PersonsList