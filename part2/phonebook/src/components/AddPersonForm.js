import React from 'react'
import InputField from './InputField'



const AddPersonForm = ({persons, setPersons, newName, setNewName, newMobile, setNewMobile}) => {

  const addPerson = (event) => {
    event.preventDefault()
    const exists = Object.values(persons).some((person) => {
      return person.name === newName
    })
    if (exists)
    {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
        name: newName,
        mobile: newMobile
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewMobile('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleMobileChange = (event) => {
    console.log(event.target.value)
    setNewMobile(event.target.value)
  }

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