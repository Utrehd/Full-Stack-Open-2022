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
      <QueryField query={query} setQuery={setQuery}/>
      <h2>Add a New Person</h2>
      <AddPersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newMobile={newMobile} setNewMobile={setNewMobile}/>
      <h2>Found Persons</h2>
      <PersonsList persons={filterPersons(query, persons)}/>
    </div>
  )
}

export default App