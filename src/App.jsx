import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
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
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Introduction />
              <Projects />
              <Offer />
              <Contact />
            </>
          } />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
