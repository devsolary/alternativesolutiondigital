import { useEffect, useRef, useState } from 'react'
import "./Home.css"
import Footer from './Footer';
import Navbar from './Navbar';
import { addDoc, collection} from "firebase/firestore"; 
import { db } from './firebase';
import img1 from "./imgs/Homeimg1.jpg"
import img2 from "./imgs/Homeimg2.jpg"
import logo from "./imgs/asd-logo.jpg"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faEnvelope, faFacebook, faInstagram, faWhatsapp)


function Home() {

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
    };

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener("scroll", handleScroll);
      }
    }
  },[])


  const [showText, setShowText] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);



    return () => {
      clearTimeout(timer)
    }
  },[]);

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


  return (
    <>
 
    <div className='Home' ref={divRef}>
      <div className="homeContent"><div className='content'>

         <h2 className={showText ? "slide-inh2" : ""}>Alternative Solutions Digital</h2>
        <p className={showText ? "slide-inp" : ""}>An alternative you can trust</p></div> 
        <img src={logo} alt="" className={`logo ${showText ? "slide-inlogo" : ""}`}/>
     
      </div>
      <div className="aboutUs">
            <header  className={showText ? "slide-inheader" : ""}>
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
            <div className="services">
                
                <div className="service" style={{backgroundColor: "black"}}>
                    <h2>Content Marketing</h2>
                    <p>Content marketing builds brand authority, engages audience, and drives organic traffic.
                      <br />
                      We create and manage high-quality content that helps you grow and retain customers by providing information and entertainment.</p>
                </div>
                <div className="service"  style={{backgroundColor: "rgb(41, 38, 38)"}}>
                    <h2>E-mail Marketing</h2>
                    <p> E-mail marketing nurtures leads, fosters customer relationships, and drives repeat business.
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
                <div className="service" style={{backgroundColor: "rgb(68, 55, 55)"}}> 
                    <h2>E-commerce management</h2>
                    <p>We at ASD Marketing have the expertise to effectively manage your E-commerce business or website,
                      bringing about great value and exponential growth to your business<br />
                        .</p>
                </div>
            </div>
        </div>
        <div className="contactUs">
          <div>
          <h2>Contact us</h2>
            <p>Email <FontAwesomeIcon icon={faEnvelope} />: alternativesolutiondigital@gmail.com</p>
            <p>Facebook <FontAwesomeIcon icon={faFacebook} />: @ASD Marketing</p>
            <p>Instagram <FontAwesomeIcon icon={faInstagram} />: @alternative_solution_digital</p>
            <p>Whatsapp <FontAwesomeIcon icon={faWhatsapp} />: +234 8160645981</p>
          </div>
            
            <img src={img1} alt="" className='img1' />
        </div>
        <div className='formSec'>
          <img src={img2} alt="" className='img2'/>
          <div className="subForm">
            <h3>Subscribe to our newsletter <br /> and get a free digital marketing pdf</h3>
            <form onSubmit={handleAdd}>
                <input type="text" placeholder='Your Name' value={name} className='name' onChange={(e) => setName(e.target.value)}/>
                <input type="tel" placeholder='Your phone Number' value={phoneNo} className='number' onChange={(e)=> setPhoneNo(e.target.value)}/>
                <br />
                <input type="email" placeholder='Your Email Address' value={email} className='email' onChange={(e)=> setEmail(e.target.value)}/>
                <br />
                
                <button type='submit'> Submit</button> <br />
                {submitStatus && <span style={{color: "white"}}>Thank you we have receive your informations</span> }
            </form>
            </div>
            <img src="" alt="" />
        </div>
        <div className="price">
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
        <div className="supportCont">
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
      <footer>
        <Footer />
      </footer>
    </div>
    <Navbar isNavbarVisible={isNavbarVisible} />
    </>

  )
}

export default Home