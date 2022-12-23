import React from 'react';
import { Link } from "react-router-dom";
import pizza from '../../assets/image/pizzaitem2.jpg';
import './orderOnline.css'
const OrderOnline = () => {
    return (

        <div class="container">
            <div className='OrderOnlineImage'>
                <p>
                    <span style={{ color: '#fff' }}>PIZZA CRUST &</span><span style={{ color: '#fd9d3e' }}> TORTILLAS</span>
                </p>
                <p>
                    HIS CREATION SET OFF A HEATED DEBATE OVER WHETHER PINEAPPLE BELONGS ON PIZZA</p>

            </div>
            <div className='filter'>
                <ul>

                    <li>Filter</li>
                    <li>Curst</li>
                    <li>Price</li>
                    <li>Size</li>
                    <li>Cheeze</li>
                    <li>Type</li>
                    <li>Flavour</li>
                    <li>Showing 1–12 of 28 Results</li>
                </ul>
            </div>
            <div class="OrderOnlineCard">
                <div class="OrderOnlineBox">
                    <div class="OrderOnline-img text-center"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={150} height={150} alt="pizza" /></Link></div>
                    <div class="OrderOnline-detail text-center">
                        <Link id="title" className="nav-link" to='/AddOrder'>Barbecue Pizza </Link>

                        <p class="OrderOnline-item">Lorem Ipsum is simply dummy text of the</p>
                        <p style={{ color: '#fd9d3e' }}>$50.50</p>
                        <button className="btn-orderNow" >

                            <Link className="OrderOnline-orderNow" to="/AddOrder">order now</Link>
                        </button>
                    </div>


                </div>
                <div class="OrderOnlineBox">
                    <div class="OrderOnline-img text-center"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={150} height={150} alt="pizza" /></Link></div>
                    <div class="OrderOnline-detail text-center">
                        <Link id="title" className="nav-link" to='/AddOrder'>Barbecue Pizza </Link>

                        <p class="OrderOnline-item">Lorem Ipsum is simply dummy text of the</p>
                        <p style={{ color: '#fd9d3e' }}>$50.50</p>
                        <button className="btn-orderNow" >

                            <Link className="OrderOnline-orderNow" to="/AddOrder">order now</Link>
                        </button>
                    </div>


                </div>
                <div class="OrderOnlineBox">
                    <div class="OrderOnline-img text-center"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={150} height={150} alt="pizza" /></Link></div>
                    <div class="OrderOnline-detail text-center">
                        <Link id="title" className="nav-link" to='/AddOrder'>Barbecue Pizza </Link>

                        <p class="OrderOnline-item">Lorem Ipsum is simply dummy text of the</p>
                        <p style={{ color: '#fd9d3e' }}>$50.50</p>
                        <button className="btn-orderNow" >

                            <Link className="OrderOnline-orderNow" to="/AddOrder">order now</Link>
                        </button>
                    </div>


                </div>
                <div class="OrderOnlineBox">
                    <div class="OrderOnline-img text-center"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={150} height={150} alt="pizza" /></Link></div>
                    <div class="OrderOnline-detail text-center">
                        <Link id="title" className="nav-link" to='/AddOrder'>Barbecue Pizza </Link>

                        <p class="OrderOnline-item">Lorem Ipsum is simply dummy text of the</p>
                        <p style={{ color: '#fd9d3e' }}>$50.50</p>
                        <button className="btn-orderNow" >

                            <Link className="OrderOnline-orderNow" to="/AddOrder">order now</Link>
                        </button>
                    </div>


                </div>
                <div class="OrderOnlineBox">
                    <div class="OrderOnline-img text-center"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={150} height={150} alt="pizza" /></Link></div>
                    <div class="OrderOnline-detail text-center">
                        <Link id="title" className="nav-link" to='/AddOrder'>Barbecue Pizza </Link>

                        <p class="OrderOnline-item">Lorem Ipsum is simply dummy text of the</p>
                        <p style={{ color: '#fd9d3e' }}>$50.50</p>
                        <button className="btn-orderNow" >

                            <Link className="OrderOnline-orderNow" to="/AddOrder">order now</Link>
                        </button>
                    </div>


                </div>
                <div class="OrderOnlineBox">

                    <div class="OrderOnline-img text-center"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={150} height={150} alt="pizza" /></Link></div>
                    <div class="OrderOnline-detail text-center">

                        <Link id="title" className="nav-link" to='/AddOrder'>Barbecue Pizza </Link>

                        <p class="OrderOnline-item">Lorem Ipsum is simply dummy text of the</p>
                        <p style={{ color: '#fd9d3e' }}>$50.50</p>
                        <button className="btn-orderNow" >

                            <Link className="OrderOnline-orderNow" to="/AddOrder">order now</Link>
                        </button>
                    </div>


                </div>

            </div>
        </div>
    );


}
export default OrderOnline;