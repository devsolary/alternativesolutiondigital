import React, { useRef } from 'react'
import "./Contact.css"
import Footer from "./Footer"
import { useState, useEffect } from 'react'
import { addDoc, collection} from "firebase/firestore"; 
import { db } from './firebase';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Navbar';
library.add(faEnvelope, faFacebook, faInstagram, faWhatsapp)

function Contact() {

  const [isSlideIn, setSlideIn] = useState(false)
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);


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

  const handleAdd = async(e) => {
    e.preventDefault();

    try {
      const res = await addDoc(collection(db, "subscribers"), {
        email,
        phoneNo,
        name
      });

      setEmail("");
      setName("");
      setPhoneNo("");
      setSubmitStatus(true);
    }catch(err){
      console.log(err)
    }
 

  }

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
    <div className='Contact' ref={divRef}>
      <div className='contactWrapper'>
        <div className={`contactUs ${isSlideIn ? "slide-incontactUs" : ""}`}>
            <h2>Contact us</h2>
            <p>Email <FontAwesomeIcon icon={faEnvelope} />: alternativesolutiondigital@gmail.com</p>
            <p>Facebook <FontAwesomeIcon icon={faFacebook} />: @ASD Marketting</p>
            <p>Instagram <FontAwesomeIcon icon={faInstagram} />: @alternative_solution_digital</p>
            <p>Whatsapp <FontAwesomeIcon icon={faWhatsapp} />: +234 8160645981</p>
        </div>
        <div className={`subForm ${isSlideIn ? "slide-insubForm" : ""}`}>
            <h3>Subscribe to our newsletter</h3>
            <form onSubmit={handleAdd}>
                <input type="text" placeholder='Name' value={name} className='name' onChange={(e) => setName(e.target.value)}/>
                <input type="tel" placeholder='Your phone Number' value={phoneNo} className='number' onChange={(e)=> setPhoneNo(e.target.value)}/>
                <br />
                <input type="email" placeholder='Your Email Address' value={email} className='email' onChange={(e)=> setEmail(e.target.value)}/>
                <br />
                <button type='submit'> Submit</button> <br />
                {submitStatus && <span style={{color: "white"}}>Thank you we have receive your informations</span> }
            </form>
        </div>
        </div>
        <footer>
          <Footer />
        </footer>
    </div>
    <Navbar isNavbarVisible={isNavbarVisible} />
    </>
  )
}

export default Contact