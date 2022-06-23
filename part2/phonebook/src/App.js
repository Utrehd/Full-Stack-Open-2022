import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas', 
      mobile: '040-23023'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newMobile, setNewMobile] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleMobileChange = (event) => {
    console.log(event.target.value)
    setNewMobile(event.target.value)
  }

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value = {newName}
            onChange = {handleNameChange}
          />
        </div>
        <div>
          Mobile: 
          <input 
            value = {newMobile}
            onChange = {handleMobileChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <div key = {person.name}>
          <p>{person.name} {person.mobile}</p>
        </div>
      )}
    </div>
  )
}

export default App