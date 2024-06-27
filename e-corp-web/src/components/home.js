import React from 'react'
import Navbar from './navbar'
import HeroVdo from './heroVdo'
import Overview from './overview'
import Clients from './clients'
import Services from './services'
import WhyUs from './whyUs'
import Contact from './contact'
import Footer from './footer'

function Home() {
  return (
    <div className="App">
      <Navbar />
      <HeroVdo />
      <Overview />
      <Services />
      <Clients />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
