import './navbar.css'
import React from 'react';
import { Link } from "react-router-dom";
import { Handbag, PhoneCall } from 'phosphor-react';
import 'react-datepicker/dist/react-datepicker.css';
const NavigationHeader = () => {
    return (
        <div className='NavigationHeader container-fluid '>
            <div className='container col-sm-2 '>

                <span className="logo ">
                    <i> Pizz</i>
                    <i style={{ color: 'white' }}>on</i>
                </span>
            </div>
            <nav className=' navHeader container col-sm-10'>
                <li className='Home col-sm-1'>

                    <Link className="nav-link" to="/Home"> Home </Link>
                </li>
                <li className='Menu col-sm-1'>
                    <div class="dropdown">
                        <span>Menu</span>
                        <div class="dropdown-content ">
                            <ul>
                                <li>

                                    <Link className="MenuLink" to="/MenuList" > Menu List </Link>
                                </li>
                                <li>
                                    <Link className="MenuLink" to="/MenuGrid" > Menu Grid </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </li>
                <li className='Pages col-sm-1'>
                    <Link className="nav-link" to="/Pages"> Pages </Link>
                </li>
                <li className='Reservation col-sm-2'>
                    <Link className="nav-link" to="/Reservation"> Reservation </Link>
                </li>
                <li className='PhoneCall col-sm-3'><PhoneCall size={25} color={'#f6831b'} /> +91 123 456 789</li>
                <li className='PhoneCall col-sm-2'><Handbag size={25} color={'#f6831b'} />0 items - $0.00</li>
                <li className='col-sm-1'><button><Link className="nav-link" to="/OrderOnline"> ORDER ONLINE </Link></button></li>
            </nav>
        </div>
    );
}
export default NavigationHeader;