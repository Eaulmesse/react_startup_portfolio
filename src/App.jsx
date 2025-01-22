import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import Navbar from './components/Navigation/Navbar'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Recommendations from './components/Recommendations/Recommendations'
import Offer from './components/Offer/Offer'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Recommendations />
      <Offer />
    </div>
  )
}

export default App
