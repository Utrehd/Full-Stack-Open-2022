import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', mobile: '040-123456', id: 1 },
    { name: 'Ada Lovelace', mobile: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', mobile: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', mobile: '39-23-6423122', id: 4 }
  ])
  const [filteredPersons, setFilteredPersons] = useState('')
  const [newName, setNewName] = useState('')
  const [newMobile, setNewMobile] = useState('')
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  function filterPersons(query, per){
    if (query === ''){
      console.log('persons', per)
      return per
    }
    
    let newPersons = []
    per.map(person => {
      console.log('Query', query)
      console.log('Person', person)
      console.log('Includes', person.name.includes(query))
      if (person.name.toLowerCase().includes(query.toLowerCase())){
          const newPerson = {
            name: person.name,
            mobile: person.mobile
        }
        console.log(newPerson)
        newPersons = newPersons.concat(newPerson)
        console.log('New Persons', newPersons)
      }
    })
    return newPersons
  }

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
      search:
      <input 
        value = {search}
        onChange = {handleSearch}
      />
      <h2>Add a New Person</h2>
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
      {filterPersons(search, persons).map(person =>
        <div key = {person.name}>
          <p>{person.name} {person.mobile}</p>
        </div>
      )}
    </div>
  )
}

export default App