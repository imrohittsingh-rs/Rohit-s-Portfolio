import React from 'react'
import Navbar from "./components/Navbar"
import Intro from './components/Intro'
import Skills from './components/Skills'
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className='app bg-gray-900 w-full min-h-screen text-white'>
      <Navbar />
      <Intro />
      <Skills />
      <Contact />
    </div>
  )
}

export default App