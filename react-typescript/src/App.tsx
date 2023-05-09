import * as React from 'react'
import './App.css'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne"
  }

  const personList = [
    {
      firstName: "Clark",
      lastName: "Kint"
    },
    {
      firstName: "Princess",
      lastName: "Diana"
    },
    {
      firstName: "Arthur",
      lastName: "Curry"
    }
  ]

  return (
    <>
      <Greet name="Debarun" messageCount={12} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList nameList={personList} />
      <Status status={'loading'} />
      <Heading>Palceholder Texts</Heading>
    </>
  )
}

export default App
