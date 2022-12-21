import './navbar.css'

import React from 'react';
import { Link } from "react-router-dom";
import { Handbag, PhoneCall } from 'phosphor-react';

const NavigationHeader = () => {
    return (
        <div className='NavigationHeader'>

            <span className="logo">
                <i> Pizz</i>
                <i style={{ color: 'white' }}>on</i>
            </span>
            <nav className='nav'>
                <li className='Home'>

                    <Link className="nav-link" to="/Home"> Home </Link>
                </li>
                <li className='Menu'>
                    <div class="dropdown">
                        <span>Menu</span>
                        <div class="dropdown-content">
                            <ul>
                                <li>

                                    <Link className="nav-link" to="/MenuList" style={{ color: '#000' }}> Menu List </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/MenuGrid" style={{ color: '#000' }}> Menu Grid </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </li>
                <li className='Pages'>
                    <Link className="nav-link" to="/Pages"> Pages </Link>
                </li>
                <li className='Reservation'>
                    <Link className="nav-link" to="/Reservation"> Reservation </Link>
                </li>
                <li className='PhoneCall'><PhoneCall size={32} color={'#f6831b'} /> +91 123 456 789</li>
                <li className='PhoneCall'><Handbag size={32} color={'#f6831b'} />0 items - $0.00</li>
                <li><button><Link className="nav-link" to="/OrderOnline"> ORDER ONLINE </Link></button></li>
            </nav>
        </div>
    );
}
export default NavigationHeader;