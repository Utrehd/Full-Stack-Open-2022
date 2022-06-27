import React from 'react'
import Person from './Person'

const PersonsList = ({persons}) => {
  return (
    <div>
        {persons.map((person) => (
        <div>
          <Person person={person}/>
        </div>
      ))}
    </div>
  )
}

export default PersonsList