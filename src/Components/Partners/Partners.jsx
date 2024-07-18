import React, { useRef } from 'react'
import './Partners.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import huawei_logo from '../../assets/Huawei-Logo.wine.png'
import fd_logo from '../../assets/first-distribution logo.png'
import dheat_logo from '../../assets/DHEAT_logo.svg.png'
import nyda_logo from '../../assets/nyda.png'
import qcto_logo from '../../assets/qcto.png'



// Partners Section Elements
const Partners = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}


  return (
    <div className='partner'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="partner-header">
        <h1> Our Partners: </h1>
      </div>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={huawei_logo} alt="" />
                        <div>
                            <h3> Huawei </h3>
                        </div>
                    </div>
                    <p> An Official Affiliate </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={fd_logo} alt="" />
                        <div>
                            <h3> First Distribution </h3>
                        </div>
                    </div>
                    <p> An Official Affiliate </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={qcto_logo} alt="" />
                        <div>
                            <h3> QCTO </h3>
                        </div>
                    </div>
                    <p>An Official Affiliate</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={dheat_logo} alt="" />
                        <div>
                            <h3> Department of Higher Education and Training </h3>
                        </div>
                    </div>
                    <p> An Official Affiliate </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={nyda_logo} alt="" />
                        <div>
                            <h3> NYDA </h3>
                        </div>
                    </div>
                    <p>An Official Affiliate</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src="" alt="" />
                        <div>
                            <h3> Jabulani Safe Hub </h3>
                        </div>
                    </div>
                    <p> An Official Affiliate </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Partners
