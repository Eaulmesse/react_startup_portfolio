import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

import Navbar from './components/Navigation/Navbar'
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import Offer from './components/Offer/Offer'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Introduction />
        <Projects />
        <Offer />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App
