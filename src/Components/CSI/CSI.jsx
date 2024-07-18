import React from 'react'
import './CSI.css'
import banner from '../../assets/SOSS-banner.png'
import s_img1 from '../../assets/soss-img-1.jpg'
import s_img2 from '../../assets/soss-img-2.jpg'
import white_arrow from '../../assets/white-arrow.png'

const CSI = () => {
  return (
    <div className='csi'>
      <div className="gallery">
        <img src={banner} alt="" />
        <img src={s_img1} alt="" />
        <img src={s_img2} alt="" />
      </div>
      <a href="https://www.sossouthafrica.org.za/">
      <button className='btn'> See More Here <img src={white_arrow} alt="" /></button>
      </a>
      <div className="gallery-header">
        <h2> Khayni Cares, We support SOS Children's Villages </h2>
      </div>
    </div>
  )
}

export default CSI
