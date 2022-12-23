import React from 'react';
import { Link } from "react-router-dom";
import pizza from '../../assets/image/pizzaitem2.jpg';
import './orderOnline.css'
const OrderOnline = () => {
    return (

        <div class="container">

            <div class="OrderOnlineCard">
                <div class="OrderOnlineBox">
                    <div class="OrderOnline-img"><Link className="nav-link" to="/OrderOnline"><img src={pizza} width={250} height={200} alt="pizza" /></Link></div>
                    <div class="OrderOnline-detail text-center">
                        <Link id="title" className="nav-link" to="/OrderOnline">Barbecue Pizza </Link>
                      
                        <p class="OrderOnline-item">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                      <p style={{ color: '#fd9d3e' }}>$50.50</p>
                      <button className="btn-orderNow" >

                        <Link className="OrderOnline-orderNow" to="/OrderOnline">order now</Link>
                      </button>
</div>


                    </div>

                </div>
            </div>
            );


}
            export default OrderOnline;