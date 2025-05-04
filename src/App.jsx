import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import profileImage from './assets/OIP.jpg';
import Header from './Templates/Header';
import Fouter from './Templates/Fouter';

export const myContext=createContext()

function App() {
  const [count, setCount] = useState(0)

  const user={
    userId:1234,
    fullName:"priyanka s Bagde",
    age:32,
    emailId:"priyankabagde@gmail.com",
    contactNo:7385664900,
    username:"priyanka@123",
    password:"priyanka@123",
    profileImg:profileImage
  }

  return (
    <>
      <h1>Context Api</h1>
      
      <myContext.Provider value={user}>
        <Header></Header>
        
        <Fouter></Fouter>
      </myContext.Provider>
      

    </>
  )
}

export default App
