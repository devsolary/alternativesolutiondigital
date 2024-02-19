import "./Footer.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faEnvelope, faFacebook, faInstagram, faWhatsapp)

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return ( <>
    <div className="Footer">
    <h3>More About Us...</h3>
        <div className="linkCopy">
            <ul className="linkWrapper">
                <li>
                <a href="https://www.facebook.com/profile.php?id=61554658920995" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebook} /> &#160;Facebook &#160;</a>
                </li>
                <li>
                <a href="https://www.instagram.com/alternative_solutions_digital?igsh=MzNINGNkZWQ4Mg==" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} />&#160;  Instagram &#160;</a>
                </li>
                <li>
                <a href="https://wa.link.vr8a2j" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faWhatsapp} />&#160; Whatsapp &#160;</a>
                </li>
            </ul>
            <p>&copy; {currentYear} Alternative Solution Digital. All right reserved</p>
        </div>
    </div>
    </> );
}
 
export default Footer;