import 'react-datepicker/dist/react-datepicker.css';
import './gridMenu.css';
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';

import axios from 'axios';

import NavbarMenu from '../navbarMenu/Menu.component';

const MenuGrid = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function getAllList() {
            try {
                const products = await axios.get("http://127.0.0.1:8000/api/allOrder")
                console.log(products.data)
                setProducts(products.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllList()
    }, [])
    return (

        <div class="container">
            <NavbarMenu />
            <div class="MenuCard">
                {products.length > 0 && (
                    products.map((products, key) => {
                        return (
                            <div class="menuBox">
                                <div class="list-img"><Link className="nav-link" to="/AddOrder"><img src={products.ItemImg} width={350} alt="pizza" /></Link></div>
                                <div class="menu-detail text-center">
                                    <Link id="title" className="nav-link" to="/AddOrder">{products.ItemName} </Link>
                                    <ul>
                                        <li>Chicken</li>
                                        <li>Olive Oil</li>
                                        <li>Salt</li>
                                    </ul>
                                    <p class="item-desc">{products.Description}</p>
                                    <Link className="orderNow" to="/AddOrder">order now</Link>
                                </div>


                            </div>
                        )
                    })
                )}


            </div>
        </div>
    );


}
export default MenuGrid;