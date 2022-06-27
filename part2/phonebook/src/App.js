import { useState } from 'react'
import PersonsList from './components/PersonsList'
import AddPersonForm from './components/AddPersonForm'
import QueryField from './components/QueryField'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', mobile: '040-123456', id: 1 },
    { name: 'Ada Lovelace', mobile: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', mobile: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', mobile: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newMobile, setNewMobile] = useState('')
  const [query, setQuery] = useState('')

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

  const handleQuery = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  function filterPersons(query, per){
    if (query === ''){
      return per
    }
    
    let newPersons = []
    per.map(person => {
      if (person.name.toLowerCase().includes(query.toLowerCase())){
          const newPerson = {
            name: person.name,
            mobile: person.mobile
        }
        newPersons = newPersons.concat(newPerson) 
      }
      return newPersons
    })
    return newPersons
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <QueryField query={query} handleQuery={handleQuery}/>
      <h2>Add a New Person</h2>
      <AddPersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newMobile={newMobile} 
        handleMobileChange={handleMobileChange}
      />
      <h2>Found Persons</h2>
      <PersonsList persons={filterPersons(query, persons)}/>
    </div>
  )
}

export default App