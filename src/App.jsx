import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import crewImage from './img/cremates.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome to the Crewmate Creator!</h1>
      <p>Create your very own set of crewmates!</p>
      <img src={crewImage}></img>
    </div>
  )
}

export default App
