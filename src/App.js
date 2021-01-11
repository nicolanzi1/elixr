import React from 'react'
import Navbar from './components/Navbar/Navbar'
import GlobalStyle from './globalStyles'
import Hero from './components/Hero/Hero'
import { SliderData } from './data/SliderData'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </>
  )
}

export default App
