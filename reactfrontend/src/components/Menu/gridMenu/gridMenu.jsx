import 'react-datepicker/dist/react-datepicker.css';
import './gridMenu.css';
import pizza from '../../../assets/image/pizza1.jpg';
import { Link } from 'react-router-dom';

import NavbarMenu from '../navbarMenu/Menu.component';
const MenuGrid = () => {
    return (

        <div class="container">
            <NavbarMenu />
            <div class="MenuCard">
                <div class="menuBox">
                    <div class="list-img"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={350} alt="pizza" /></Link></div>
                    <div class="menu-detail text-center">
                        <Link id="title" className="nav-link" to="/AddOrder">Barbecue Pizza </Link>
                        <ul>
                            <li>Chicken</li>
                            <li>Olive Oil</li>
                            <li>Salt</li>
                        </ul>
                        <p class="item-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        <Link className="orderNow" to="/AddOrder">order now</Link>
                    </div>
                </div>
                <div class="menuBox">
                    <div class="list-img"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={350} alt="pizza" /></Link></div>
                    <div class="menu-detail text-center">
                        <Link id="title" className="nav-link" to="/AddOrder">Barbecue Pizza </Link>
                        <ul>
                            <li>Chicken</li>
                            <li>Olive Oil</li>
                            <li>Salt</li>
                        </ul>
                        <p class="item-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        <Link className="orderNow" to="/AddOrder">order now</Link>
                    </div>
                </div>   <div class="menuBox">
                    <div class="list-img"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={350} alt="pizza" /></Link></div>
                    <div class="menu-detail text-center">
                        <Link id="title" className="nav-link" to="/AddOrder">Barbecue Pizza </Link>
                        <ul>
                            <li>Chicken</li>
                            <li>Olive Oil</li>
                            <li>Salt</li>
                        </ul>
                        <p class="item-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        <Link className="orderNow" to="/AddOrder">order now</Link>
                    </div>
                </div>   <div class="menuBox">
                    <div class="list-img"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={350} alt="pizza" /></Link></div>
                    <div class="menu-detail text-center">
                        <Link id="title" className="nav-link" to="/AddOrder">Barbecue Pizza </Link>
                        <ul>
                            <li>Chicken</li>
                            <li>Olive Oil</li>
                            <li>Salt</li>
                        </ul>
                        <p class="item-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        <Link className="orderNow" to="/AddOrder">order now</Link>
                    </div>
                </div>   <div class="menuBox">
                    <div class="list-img"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={350} alt="pizza" /></Link></div>
                    <div class="menu-detail text-center">
                        <Link id="title" className="nav-link" to="/AddOrder">Barbecue Pizza </Link>
                        <ul>
                            <li>Chicken</li>
                            <li>Olive Oil</li>
                            <li>Salt</li>
                        </ul>
                        <p class="item-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        <Link className="orderNow" to="/AddOrder">order now</Link>
                    </div>
                </div>   <div class="menuBox">
                    <div class="list-img"><Link className="nav-link" to="/AddOrder"><img src={pizza} width={350} alt="pizza" /></Link></div>
                    <div class="menu-detail text-center">
                        <Link id="title" className="nav-link" to="/AddOrder">Barbecue Pizza </Link>
                        <ul>
                            <li>Chicken</li>
                            <li>Olive Oil</li>
                            <li>Salt</li>
                        </ul>
                        <p class="item-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        <Link className="orderNow" to="/AddOrder">order now</Link>

                    </div>
                </div>
            </div>
        </div>
    );


}
export default MenuGrid;