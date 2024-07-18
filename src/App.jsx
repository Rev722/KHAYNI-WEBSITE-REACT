import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import OurServices from './Components/Our-Services/OurServices'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Partners from './Components/Partners/Partners'
import CSI from './Components/CSI/CSI'

const App = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      <div className="container">
      <Title subTitle='Our Services' title='What We Offer'/>
      <Contact />
      <CSI/>
      <Partners/>
      <Footer/>
      </div>

    </div>

  )
}

export default App
