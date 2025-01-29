import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cards } from './Card/Card'
import { NativeCard } from './Card/NativeCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NativeCard/>
    </>
  )
}

export default App
