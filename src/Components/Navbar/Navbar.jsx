import React, {useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/khayni-logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

// Navbar Elements

const Navbar = () => {

  // Disappearing Navbar Function

  const [sticky, setSticky] = useState(false);

    useEffect(()=> {
      window.addEventListener('scroll', ()=>{
        window.scrollY > 150 ? setSticky(true) : setSticky(false);
      })
    },[]);

    // Menu Toggle Function

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <div>
      <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}> 
            <li><Link to='hero' smooth={true} offset={0} duration={500}> Home </Link></li>
            <li><Link to='services' smooth={true} offset={-260} duration={500}> Our Services </Link></li>
            {/* <li><Link to='hero' smooth={true} offset={0} duration={500}> CSI </Link></li> */}
            <li><Link to='contact' smooth={true} offset={500} duration={500} className='btn'> Our Contacts </Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
      </nav>

    </div>
  )
}

export default Navbar
