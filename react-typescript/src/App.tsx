import * as React from 'react'
import './App.css'
import { Button } from './components/Button'
import { Container } from './components/Container'
import { Box } from './components/Context/Box'
import { ThemeContextprovider } from './components/Context/ThemeContext'
import { User } from './components/Context/User'
import { UserContextprovider } from './components/Context/UserContext'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Input } from './components/Input'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { DomRef } from './components/Ref/DomRef'
import { MutableRef } from './components/Ref/MutableRef'
import { Counter } from './components/State/Counter'
import { Status } from './components/Status'
import { CounterClass } from './components/Class/CounterClass'
import { Private } from './components/Auth/Private'
import { Profile } from './components/Auth/Profile'
import { List } from './components/Generics/List'
import { RandomNumber } from './components/Restriction/RandomNumber'
import { Toast } from './components/TemplateLiterals/Toast'
import { CustomButton } from './components/HTML/Button'
import { Text } from './components/Polymorphic/Text'

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
      {/* <Greet name="Debarun" isLoggedIn={true} />
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
      <Container
        styles={{border: '1px solid white', padding: '1rem'}}
      />
      <Counter />
      <ThemeContextprovider>
        <Box />
      </ThemeContextprovider> */}
      {/* <UserContextprovider>
        <User />
      </UserContextprovider> */}
      {/* <DomRef />
      <MutableRef /> */}

      {/* <CounterClass message={'The COunter value Is '} /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* <List
        items={['Batman', 'Superman', 'Wonder Women']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <List
        items={[{
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
        }]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <RandomNumber value={10} isPositive={true} />
      <RandomNumber value={-10} isNegative={true} />
      <RandomNumber value={0} isZero={true} /> */}

      {/* <Toast position='left-top' />
      <Toast position='center' /> */}

      {/* HTML tag with restriction as string */}
      {/* <CustomButton variant='primary' onClick={() => console.log('Clicked')}>Primary Button</CustomButton>     */}
      {/* <CustomButton variant='primary' onClick={() => console.log('Clicked')}><div>Primary Button</div></CustomButton> */}

      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </>
  )
}

export default App
