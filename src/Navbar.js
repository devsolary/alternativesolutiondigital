import React from 'react';
import "./Navbar.css";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faBars, faX)

function Navbar({ isNavbarVisible }) {  
  const [isNarbarOpen, setIsNarbarOpen] = useState(true)

  const navBarOpenAndClose = () => {
    setIsNarbarOpen(!isNarbarOpen)
  }



  return (
    <div className={isNavbarVisible ? "Navbar" : "hidden"}>
        <div className="logo">
            <img src="" alt="" />
            <h3>Alternative Solutions Digital</h3>
        </div>
        {isNarbarOpen ? (<button className='openBar' onClick={navBarOpenAndClose}><FontAwesomeIcon icon={faBars} /></button>) : (<div>
        <button className='closeBar' onClick={navBarOpenAndClose}><FontAwesomeIcon icon={faX} /></button>
        <div className="navMobile">
            <ul>
               <li><Link to="/" className='link'>Home</Link></li>
               <li><Link to="/About" className='link'>About us</Link></li>
               <li><Link to="/Contact" className='link'>Contact</Link></li>
               <li><Link to="/Whyus" className='link'>Why us</Link></li>
               <li><Link to="/Support" className='link'>Support</Link></li>
            </ul>
        </div>
        </div>
        
        )}

<div className="nav">
            <ul>
               <li><Link to="/" className='link'>Home</Link></li>
               <li><Link to="/About" className='link'>About us</Link></li>
               <li><Link to="/Contact" className='link'>Contact</Link></li>
               <li><Link to="/Whyus" className='link'>Why us</Link></li>
               <li><Link to="/Support" className='link'>Support</Link></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar