import 'react-datepicker/dist/react-datepicker.css';
import './footer.css';
import { FacebookLogo, TwitterLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';

const Footer = () => {
    return (
        <div className="footer">

            <div className="container">

                <div className="row">
                    <div className="col-md-4 ">
                        <div className="footer-logo">
                            <span className="logo">
                                <i> Pizz</i>
                                <i style={{ color: 'white' }}>on</i>
                            </span>
                            <p >20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK 69QJ+2F Alexandria, United Kingdom</p>
                            <ul className="phone-email">
                                <li>phone  - <a href="#">+91 123 456 789 0 </a></li>
                                <li>email  - <a href="#"><span className="__cf_email__" >[email&#160;protected]</span></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4  footer-box">
                        <div className="opening-hours">
                            <h2>Opening Hours</h2>
                            <ul>
                                <li>Mon - Tues :  <span>6.00 am - 10.00 pm</span></li>
                                <li>Wednes - Thurs : <span>6.00 am - 10.00 pm</span></li>
                                <li>Launch :  <span>Everyday</span></li>
                                <li>Sunday :  <span className="footer-close">Closed</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4  footer-box">
                        <div className="useful-links">
                            <h2>useful links</h2>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Order Tracking</a></li>
                                <li><a href="#">Warranty and Services</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Wishlist</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='social col-md-12 text-center'> <ul>
                        <hr />
                        <li><a href="#"><i class="facebook" > <FacebookLogo size={32} color="#fff" /></i></a></li>
                        <li><a href="#"><i class="twitter" > <TwitterLogo size={32} color="#fff" /></i></a></li>
                        <li><a href="#"><i class="linkedin" ><LinkedinLogo size={32} color="#fff" /></i></a></li>
                        <li><a href="#"><i class="instagram" > <InstagramLogo size={32} color="#fff" /></i></a></li>
                    </ul></div>
                </div>
            </div>
        

        </div>
    );
}
export default Footer;