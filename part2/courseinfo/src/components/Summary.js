import React from 'react'

const Summary = ({parts}) => {
    const sum = parts.reduce((currSum, part) => currSum + part.exercises, 0) 
    return (
        <div>
            <h4>Number of exercies {sum}</h4>
        </div>
    )
  }

  export default Summary