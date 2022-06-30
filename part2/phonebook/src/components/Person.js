import React from 'react'

const Person = ({person}) => {
  return (
    <li>
      <p>{person.name} {person.mobile}</p>
    </li>
  )
}

export default Person