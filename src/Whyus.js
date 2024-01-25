import React, { useRef } from 'react'
import "./Whyus.css"
import { useState, useEffect } from 'react'
import Navbar from './Navbar'

function Whyus() {

  const [isSlideIn, setSlideIn] = useState(false)

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
    <div className='Pricing' ref={divRef}>
        <div className={`price ${isSlideIn ? "slide-inprice" : ""}`}>
            <h1>Here's why you should choose us for your digital marketing needs:</h1>
            <p>
            <ul>
                <li>
                    <b>Proven Track Record : </b> <br />
                        We have a proven track record of delivering results for our clients. Our portfolio showcases successful campaigns across various industries, demonstrating our ability to drive growth and achieve business objectives through digital marketing.
                </li>
                <li>
                    <b>Customized Strategies : </b> <br />
                    We understand that every business is unique, which is why we tailor our strategies to meet the specific needs and goals of each client. Whether you're looking to increase brand awareness, drive website traffic, or boost conversions, we develop customized plans to help you achieve success.

                </li>
                <li>
                    <b>Expert Team : </b> <br />
                    Our team consists of experienced digital marketing experts who are dedicated to staying ahead of industry trends and best practices. From SEO and email marketing to paid advertising and content marketing, our team has the knowledge and skills to elevate your online presence.
                </li>
                <li>
                    <b>Transparency and Communication : </b> <br />
                    We believe in transparent communication with our clients every step of the way. You can expect regular updates, detailed reports, and open dialogue to ensure that you're always informed about the progress of your digital marketing campaigns.
                </li>
                <li>
                    <b>Client-Centric Approach : </b> <br />
                    At ASD Marketing, our clients are at the center of everything we do. We take the time to understand your business, goals, and challenges, allowing us to provide personalized solutions that drive real, measurable results.
                </li>
                <li>
                    <b>Innovative Solutions : </b> <br />
                    The digital landscape is constantly evolving, and we pride ourselves on being at the forefront of innovation. We are always exploring new technologies and strategies to keep our clients ahead of the curve and maximize their online presence.
                </li>
                <li>
                    <b>Customer Satisfaction : </b> <br />
                    Our ultimate goal is the satisfaction of our clients. We measure our success by the success of our clients, and we are committed to exceeding your expectations and delivering exceptional value.

                    When you choose ASD Marketing for your digital marketing needs, you're partnering with a team that is dedicated to your success. Let's take your digital presence to the next level together!

                    Feel free to customize and expand upon these points to best reflect the unique strengths and offerings of your digital marketing services.
                </li>
                <li>
                    <b>Customer Consideration : </b> <br />
                    Most small and medium sized businesses do not have access to the tools and methods that big and established businesses have but we at ASD Marketing can bridge the gap of access for our SME customers.
                </li>
            </ul>
            </p>
        </div>
    </div>
    <Navbar isNavbarVisible={isNavbarVisible } />
    </>
  )
}

export default Whyus