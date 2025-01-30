import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


import Navbar from './components/Navigation/Navbar'
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import Recommendations from './components/Recommendations/Recommendations'
import Offer from './components/Offer/Offer'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className=''>
      <Navbar />
      <Header />
      <Introduction />
      <Projects />
      <Offer />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
