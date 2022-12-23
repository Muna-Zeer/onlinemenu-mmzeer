import 'react-datepicker/dist/react-datepicker.css';
import './listMenu.css';
import pizza from '../../../assets/image/pizzaitem.jpg';
import NavbarMenu from '../navbarMenu/Menu.component';
import { Link } from 'react-router-dom';

const MenuList = () => {
    return (
        <div className="container">
<NavbarMenu/>
            <div className="MenuList">
                <div className=" menuListCard ">
                    <div className="menuListBox">
                        <div className="listImg">
                            <Link className='nav-link' to='/AddOrder'><img src={pizza} alt="pizza" /></Link>
                        </div>
                        <div className="menuListDetail">
                            <div className="ListTitle">
                                <Link className='nav-link' to='/AddOrder' >BARBECUE PIZZA</Link>
                                <span className="listPrice">$20.00</span>
                            </div>
                            <hr />
                            <p className="listItem">There are many variations of passages of  Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        </div>

                    </div>
                    <div className="menuListBox">
                        <div className="listImg">
                            <Link className='nav-link' to='/AddOrder'><img src={pizza} alt="pizza" /></Link>
                        </div>
                        <div className="menuListDetail">
                            <div className="ListTitle">
                                <Link className='nav-link' to='/AddOrder' >BARBECUE PIZZA</Link>
                                <span className="listPrice">$20.00</span>
                            </div>
                            <hr />
                            <p className="listItem">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        </div>

                    </div> <div className="menuListBox">
                        <div className="listImg">
                            <Link className='nav-link' to='/AddOrder'><img src={pizza} alt="pizza" /></Link>
                        </div>
                        <div className="menuListDetail">
                            <div className="ListTitle">
                                <Link className='nav-link' to='/AddOrder' >BARBECUE PIZZA</Link>
                                <span className="listPrice">$20.00</span>
                            </div>
                            <hr />
                            <p className="listItem">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        </div>

                    </div> <div className="menuListBox">
                        <div className="listImg">
                            <Link className='nav-link' to='/AddOrder'><img src={pizza} alt="pizza" /></Link>
                        </div>
                        <div className="menuListDetail">
                            <div className="ListTitle">
                                <Link className='nav-link' to='/AddOrder' >BARBECUE PIZZA</Link>
                                <span className="listPrice">$20.00</span>
                            </div>
                            <hr />
                            <p className="listItem"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );


}
export default MenuList;