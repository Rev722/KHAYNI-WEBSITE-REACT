import React from 'react'
import './OurServices.css'
import service_1 from '../../assets/training-solutions.jpg'
import service_2 from '../../assets/it-solutions.jpg'
import service_3 from '../../assets/health-safety.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'


  // Service Section Elements

const OurServices = () => {
  return (
    <div className='services'>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <a href="https://rev722.github.io/TRAINING-KHAYNI/">
          <img src={program_icon_1} alt="" />
          <p> Training Solutions </p>
          </a>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt="" />
        <div className="caption">
          <a href="https://online.fliphtml5.com/sguyq/tkcc/#p=1">
          <img src={program_icon_2} alt="" />
          <p> IT Solutions </p>
          </a>
        </div>
      </div>
      <div className="service">
        <img src={service_3} alt="" />
        <div className="caption">
        <a href="https://rev722.github.io/HEALTH-SAFTEY-KHAYNI/">
          <img src={program_icon_3} alt="" />
          <p> Health and Safety </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default OurServices
