import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import Navbar from './components/Navigation/Navbar'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Projects />
        
    </>
  )
}

export default App
