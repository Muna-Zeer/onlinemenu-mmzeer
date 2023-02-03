
import React from 'react';
import './header.css';
import NavigationHeader from '../navbar/navbar.components';
import pizza from '../../assets/image/pizza3.jpg'
const
    Header = () => {
        return (
            <div className='header'>
                <div className='container-fluid' style={{ backgroundImage: `url(${pizza})` }} > <NavigationHeader /> </div>



            </div>
        );
    }
export default Header;