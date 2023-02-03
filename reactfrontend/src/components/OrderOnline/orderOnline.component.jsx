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

                    <li className='liFilter'>Filter</li>
                    <li> <select name="Curst" id="Curst">

                        <option value="Curst">Curst </option>
                        <option value="Curst1">Curst 1</option>
                        <option value="Curst2">Curst 2</option>
                        <option value="Curst3">Curst 3</option>

                    </select></li>
                    <li> <select name="Price" id="Price" >
                        <option value="Price">Price</option>
                        <option value="20">$20</option>
                        <option value="15">$15</option>
                        <option value="30">$30</option>

                    </select></li>
                    <li> <select name="Size" id="Size">
                        <option value="Size">Size</option>
                        <option value="medium">Medium</option>
                        <option value="small">Small</option>
                        <option value="large">Large</option>

                    </select></li>
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