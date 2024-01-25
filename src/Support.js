import React, { useRef } from 'react'
import "./Support.css"
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faEnvelope, faFacebook, faInstagram, faWhatsapp)


function Support() {
  const divRef = useRef(null)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if(divRef.current) {
        const scrollY = divRef.current.scrollTop;
        console.log(scrollY)

        if (scrollY > 100) {
          setIsNavbarVisible(false)
        } else {
          setIsNavbarVisible(true)
        }
      }
    }


    if (divRef.current) {
      divRef.current.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener("scroll", handleScroll);
      }
    }
  },[])



  const [isSlideIn, setSlideIn] = useState(false)

  useEffect(() => {
      const timer = setTimeout(() => {
          setSlideIn(true)
      }, 500);

      return () => {
          clearTimeout(timer)
      }
  },[]);
  return (
    <>
    <div className='Support' ref={divRef}>
      <div className={`supportCont ${isSlideIn ? "slide-insupportCont" : ""}`}>
        <h2>Need help ?</h2>
        <p>send us an email  <FontAwesomeIcon icon={faEnvelope} /> : alternativesolutiondigital@gmail.com <br /> or follow us on our social media platforms to know how to get it resolved</p>
        <div className='links'>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61554658920995" target='_blank' rel='noopener noreferrer'>Facebook &#160;<FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://www.instagram.com/alternative_solutions_digital?igsh=MzNINGNkZWQ4Mg==" target='_blank' rel='noopener noreferrer'>Instagram &#160;<FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://wa.link.vr8a2j" target='_blank' rel='noopener noreferrer'>Whatsapp &#160;<FontAwesomeIcon icon={faWhatsapp} /></a></li>
          </ul>
        </div>
      </div>
    </div>
    <Navbar isNavbarVisible={isNavbarVisible} />
    </>
  )
}

export default Support