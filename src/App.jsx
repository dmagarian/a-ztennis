import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <main className="app-container">
      <Navigation />
      <Hero />
      <Services />
      <Location />
      <Footer />
    </main>
  )
}

export default App
