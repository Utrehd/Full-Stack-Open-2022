import React from 'react'

const Button = ({label, handler, value}) => {
  return (
      <button onClick = {handler} value={value}>
        {label}
      </button>
  )
}

export default Button