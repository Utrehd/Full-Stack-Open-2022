import { useState, useEffect } from 'react'
import PersonsList from './components/PersonsList'
import AddPersonForm from './components/AddPersonForm'
import QueryField from './components/QueryField'
import axios from 'axios'
import PersonService from './service/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newMobile, setNewMobile] = useState('')
  const [query, setQuery] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    const oldPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (oldPerson)
    {
      const question = window.confirm(`${newName} is already added to phonebook, do you want to replace his phone number?`)
      if(question){
        
        const changedPerson = { ...oldPerson, mobile: newMobile}
        console.log('the person change', changedPerson)
        PersonService
        .update(oldPerson.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== oldPerson.id ? person : returnedPerson))
          setMessageType('notification')
          setNotificationMessage(`The phone number of ${changedPerson.name} was updated with ${changedPerson.mobile}`)
          setNewName('')
          setNewMobile('')
        }).catch(error =>{        
          setMessageType('error')
          setNotificationMessage(`The Person '${changedPerson.name}' was already deleted from server`)})
      }
      return
    }
    const newPerson = {name: newName, mobile: newMobile}
    PersonService
      .create(newPerson)
      .then(returnedNote => {
        setPersons(persons.concat(returnedNote))
        setMessageType('notification')
        setNotificationMessage(`${newPerson.name} was added with the number: ${newPerson.mobile}` )
        setNewName('')
        setNewMobile('')
      })
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
    if (query === ''){return per}
    
    let newPersons = []
    per.map(person => {
      if (person.name.toLowerCase().includes(query.toLowerCase())){
          const newPerson = {...person}
        newPersons = newPersons.concat(newPerson) 
      }
      return newPersons
    })
    console.log('Persons after filter', persons)
    return newPersons
  }


  const removePerson = (id) => {
    console.log(`Try delete person with ${id}.`)
    const person = persons.find(n => n.id === id)


    PersonService
      .remove(id)
      .then(returnedNote => {console.log(returnedNote)
        setMessageType('Notification')
        setNotificationMessage(`${person.name} was removed` )
        setPersons(persons.filter(n => n.id !== id))
      }).catch(error => {
        setMessageType('error')
        setNotificationMessage(`The Person '${person.content}' was already deleted from server`)
    })
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} setMessage={setNotificationMessage} messageType={messageType}/>
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
      <PersonsList persons={filterPersons(query, persons)} handlerRemove={removePerson} label={'Delete'}/>
    </div>
  )
}

export default App