import React, { useRef } from 'react'
import "./About.css"
import { useState, useEffect } from 'react'
import Navbar from './Navbar';

function About() {

    const [isSlideIn, setSlideIn] = useState(false);

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
    <div className='About' ref={divRef}>
        <div className='aboutUs'>
            <header className={isSlideIn ? "slide-inheader" : ""}>
            <h1>ABOUT US</h1>
            <p>ASD (Alternative Solutions Digital) Marketing is a full-service digital marketing, ads and SEO expert company for your business marketing needs. "For SMEs, startups and businesses alike that need to grow their businesses through digital marketing, ASD Marketing is here for you.

              <ul>
                <li>Welcome to ASD Marketing, where innovation meets expertise in the ever-evolving landscape of digital marketing. Our journey began with a vision to revolutionize the way businesses connect with their audiences in the digital sphere. Comprising a team of passionate and skilled professionals, we are dedicated to driving tangible results for our clients through strategic, data-driven digital marketing solutions.</li>
                <li>At ASD Marketing, we believe in the power of creativity, technology, and collaboration. Our approach is centered on understanding the unique DNA of each brand we work with, allowing us to craft bespoke strategies that resonate with their target audience. Whether it's leveraging the latest trends in social media, harnessing the potential of SEO, or creating compelling content, we are committed to staying ahead of the curve and delivering measurable impact.</li>
                <li>Transparency and integrity are at the core of our ethos. We strive to build lasting partnerships with our clients, based on trust, open communication, and a shared drive for success. By immersing ourselves in our clients' goals and challenges, we become an extension of their team, working tirelessly to unlock their digital potential.</li>
                <li>Beyond our dedication to our clients, we are also passionate about giving back to the community and nurturing the next generation of digital marketers. Through mentorship programs and pro-bono initiatives, we aim to contribute to a thriving and inclusive digital ecosystem.</li>
                <li>Join us in reshaping the digital frontier. Together, let's elevate your brand and create digital experiences that leave a lasting impact. Welcome to ASD Marketing, where your digital success story begins."</li>
              </ul>
            </p>
            </header>
            <h3>Services We Offer</h3>
            <div className={`services ${isSlideIn ? "slide-inservices" : ""}`}>
                
                <div className="service" style={{backgroundColor: "black"}}>
                    <h2>Content Marketing</h2>
                    <p>Content marketing builds brand authority, engages audience, and drives organic traffic.
                      <br />
                        We create and manage high-quality content that helps you grow and retain customers by providing information and entertainment.</p>
                </div>
                <div className="service"  style={{backgroundColor: "rgb(41, 38, 38)"}}>
                    <h2>E-mail Marketing</h2>
                    <p>E-mail marketing nurtures leads, fosters customer relationships, and drives repeat business.
                      <br />
                        We market your business to existing and potential customers through consistent emails and other forms of email marketing techniques.</p>
                </div>
                <div className="service" style={{backgroundColor: "  rgb(68, 55, 55)"}}>
                    <h2>SEO (Search Engine Optimization)</h2>
                    <p>SEO improves website visibility, boosts organic traffic, and enhances user experience.
                    <br />
                        Research shows 68% of an online journey starts with a search engine." "We aid your business by using the most effective and modern SEO techniques, thereby producing wonderful results.</p>
                </div>
                <div className="service" style={{backgroundColor: "rgb(106, 99, 99)"}}> 
                    <h2> Paid Advertising</h2>
                    <p>Paid advertising targets specific audiences, delivers quick results, and increases brand visibility.
                      <br />
                        At ASD Marketing, we use the most cost effective advertising methods to get your business to the next level.</p>
                </div>
                <div className="service" style={{backgroundColor: "rgb(106, 99, 99)"}}> 
                    <h2>E-commerce management</h2>
                    <p>We at ASD Marketing have the expertise to effectively manage your E-commerce business or website,
                      bringing about great value and exponential growth to your business<br />
                        .</p>
                </div>
            </div>
        </div>

    </div>
    <Navbar isNavbarVisible={isNavbarVisible} />
    </>
  )
}
export default About