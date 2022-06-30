import React from 'react'

const InputField = ({name, value, handler}) => {
  return (
    <div>
      {name}
      <input 
        value = {value}
        onChange = {handler}
      />
    </div>
  )
}

export default InputField