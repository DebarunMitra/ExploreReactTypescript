import * as React from 'react'
import './App.css'
import { Button } from './components/Button'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Input } from './components/Input'
import { Oscar } from './components/Oscar'
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
      <Greet name="Debarun" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList nameList={personList} />
      <Status status={'loading'} />
      <Heading>Palceholder Texts</Heading>
      <Oscar>
        <Heading>Oscar Goes To Natu Natu Song</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }} /> 
      <Input 
        value='' 
        handleChange={event => 
          console.log(event)
        } 
      />
    </>
  )
}

export default App
