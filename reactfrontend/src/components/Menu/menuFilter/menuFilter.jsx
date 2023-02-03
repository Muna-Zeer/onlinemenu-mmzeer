
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';import NavbarMenu from "../navbarMenu/Menu.component";
const MenuFilter = () => {
    const [filter, setFilter] = useState('');

    const getMenu = (key) => {
        console.log('key');
        fetch('http://127.0.0.1:8000/api/selectItem?menuID=' + key).then((data) => {
            data.json.then((res) => {
                console.log(filter.data)
                setFilter(filter.data)
                console.warn('res', res);
            })
        })
    }

    useEffect(() => {
        getMenu();
    }, []);

    const getAll = () => {
        console.log('key');
        fetch('http://127.0.0.1:8000/api/allOrder').then((data) => {
            data.json.then((res) => {
                console.warn('res', res);
            })
        })
    }
    useEffect(() => {
        getAll();
    }, []);

    return (
        <div className="container">
            <NavbarMenu />
            <div className="MenuList">
                <div className=" menuListCard ">
                    {
                        filter.length > 0 && (
                            filter.map((filter) => {
                                return (
                                    <div className="menuListBox" id={filter.menuID}>
                                        <div className="listImg">
                                            <Link className='nav-link' to='/AddOrder'><img src={filter.ItemImg} alt="pizza" /></Link>
                                        </div>
                                        <div className="menuListDetail">
                                            <div className="ListTitle">
                                                {/* <Link className='nav-link' to='/AddOrder'>{filter.ItemName}</Link> */}
                                                <span className="listPrice">{filter.newPrice}</span>
                                            </div>
                                            <hr />
                                            <p className="listItem">{filter.Description}</p>
                                        </div>


                                    </div>
                                )
                            })
                        )}



                </div>
            </div>

        </div>
    );


}
export default MenuFilter;