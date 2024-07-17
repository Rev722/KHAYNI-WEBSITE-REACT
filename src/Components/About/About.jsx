import React from 'react'
import './About.css'
import about_img from '../../assets/about-us.jpg'

// About Section Elements

const About = () => {
  return (
    <div className='about'>

      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
      </div>
      <div className="about-right">
      <h2> What We Do </h2>
      <p> Khayni is driven by a firm belief that growth brings about unlimited dreams
         and high-quality performance. We are a training organization that produces
          the highest level of results that unleash full potential and unlock talents.
          The development of skills can contribute to structural transformation and
          economic growth by enhancing employability, labour productivity and
          helping our country become more competitive. 
        <p> Quality measures are taken
          from beginning to end where we focus on providing a high quality
          professional training service. We are a team of dynamic, goal-driven
          professionals who thrive on outstanding service delivery and who
          understand the value of providing personalized solutions to each client.
          We are constantly updating our processes and systems to ensure that we 
          are always on top of the changing face of industry and development in South Africa. 
          We look forward to collaborations that make a significant contribution 
          to our country’s development</p> 
          </p>
      </div>
    </div>
  )
}

export default About
