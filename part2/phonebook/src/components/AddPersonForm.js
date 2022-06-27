import React from 'react'
import InputField from './InputField'



const AddPersonForm = ({addPerson, newName, handleNameChange, newMobile, handleMobileChange}) => {

  return (
    <div>
      <form onSubmit={addPerson}>
        <InputField name={'Name'} value={newName} handler={handleNameChange} />
        <InputField name={'Mobile'} value={newMobile} handler={handleMobileChange}/> 
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddPersonForm