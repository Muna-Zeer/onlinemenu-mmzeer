
import React from 'react';
import { Link } from "react-router-dom";
import { Handbag, PhoneCall } from 'phosphor-react';
import './navbar.component.css'
const NavigationHeader = () => {
    return (
        <div className='NavigationHeader'>

            <span className="logo">
                <i> Pizz</i>
                <i style={{ color: 'white' }}>on</i>
            </span>
            <nav className='nav'>
                <li className='Home'>
                    Home
                </li>
                <li className='Menu'>
                    Menu
                </li>
                <li className='Pages'>
                    Pages
                </li>
                <li className='Reservation'>
                    Reservation
                </li>
                <li className='PhoneCall'><PhoneCall size={32}  color={'#f6831b'}/> +91 123 456 789</li>
                <li className='PhoneCall'><Handbag size={32} color={'#f6831b'}/>0 items - $0.00</li>
                <li><button>ORDER ONLINE</button></li>
            </nav>
        </div>
    );
}
export default NavigationHeader;