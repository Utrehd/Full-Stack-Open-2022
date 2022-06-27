import React from 'react'

const Person = ({person}) => {
  return (
    <div key = {person.name}>
      <p>{person.name} {person.mobile}</p>
    </div>
  )
}

export default Person