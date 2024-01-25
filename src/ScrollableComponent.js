import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

function ScrollableComponent({ children }) {

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


  return (
    <div>
    <div ref={divRef}>
        {children}
    </div>
    <Navbar isNavbarVisible={isNavbarVisible} />
    </div>
    
  )
}

export default ScrollableComponent