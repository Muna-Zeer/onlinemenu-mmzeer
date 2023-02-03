import './add-order.css'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import NotFound from '../NotFound/notfound.component';
import pizza from '../../assets/image/pizzaitem.jpeg'
import { Handbag, EnvelopeSimple, HeartStraight, CellSignalFull, FacebookLogo, TwitterLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import 'react-datepicker/dist/react-datepicker.css';

import { useParams } from 'react-router-dom';
function AddOrder(products) {
    const { name, price, image, Description } = products;
    const [orders, setOrders] = useState({
        ItemImg: '',
        ItemName: '',
        Description: '',
        newPrice: '',
        oldPrice: '',
        name: '',
        size: '',
        crust: '',
        Qty: '',
        date: new Date(),
    });
    const [loading, setLoading] = useState(true);
    let { id } = useParams();
    let navigate = useNavigate();



    const handleSubmit = (event) => {
        // event.preventDefault();
        const itemDetails = {
            ItemName: orders.ItemName,
            Description: orders.Description,
            newPrice: orders.newPrice,
            ItemImg: orders.ItemImg,
            oldPrice: orders.oldPrice
        };

        axios.post('http://127.0.0.1:8000/api/create_order', itemDetails)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log('handle', res.data);
            })
            .catch(error => {
                console.log(error);
            });
    };


    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/Items/${id}`);

            const productData = await response.json();
            setOrders(productData);
            setLoading(false);

        }
        fetchProduct();
    }, [id]);




    // useEffect(() => {
    async function getAllOrder() {
        try {
            const orders = await axios.get("http://127.0.0.1:8000/api/allOrder", {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            },)
            console.log(orders.data)
            setOrders(orders.data)
        } catch (error) {
            console.log(error)
        }
    }
    //     getAllOrder()
    // }, [])



    const [orderInput, setOrder] = useState({
        name: '',
        size: '',
        crust: '',
        Qty: '',
        date: new Date(),
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setOrders({ ...orders, [e.target.name]: e.target.value })
    }


    const saveProduct = (e) => {
        e.preventDefault();

        const data = {
            ItemName: orders.ItemName,
            ItemImg: orders.ItemImg,
            Description: orders.Description,
            newPrice: orders.newPrice,
            oldPrice: orders.oldPrice,
            name: orders.name,
            Qty: orders.Qty,
            size: orders.size,
            crust: orders.crust,


        }

        axios.post(`http://127.0.0.1:8000/api/create_order`, data).then(res => {

            if (res.data.status === 200) {
                swal("Success!", res.data.message, "success");

                setOrder({
                    ItemImg: '',
                    ItemName: '',
                    Description: '',
                    newPrice: '',
                    oldPrice: '',
                    name: '',
                    size: '',
                    crust: '',
                    Qty: '',
                    error_list: [],
                });
                console.log('save', res.data);
                <NotFound />
            }
            else if (res.data.status === 422) {
                setOrder({ ...orders, error_list: res.data.validate_err });
            }
        });

    }



    return (
        <div>
            <div className="container ">
                <div className="row justify-content-center mt-5 ">
                    <div className="col-sm-4 "> <img src={orders.ItemImg} alt={orders.ItemName} height={400} /></div>
                    <div className="col-sm-8 text-start ps-5  ">


                        <h3 >
                            {orders.ItemName}
                        </h3>
                        <span className='pe-5 text-muted '></span><span className='text-warning'>${orders.newPrice}</span>
                        <p className=' text-muted '>{orders.Description}</p>

                        {/* <button onClick={handleSubmit}>Submit</button> */}
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            saveProduct(event);
                            // if (success) handleSubmit(event);
                        }}>
                            <h5 >CHOOSE YOUR CRUST</h5>
                            <ul className='text-muted'>
                                <li>
                                    <label>
                                        <input type="radio" value="Classic Hand Tossed" name='crust'
                                            checked={orderInput.crust === "Classic Hand Tossed"} onChange={handleInput} />
                                        <span>Classic Hand Tossed</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" value="Wheat Thin Crust" name='crust'
                                            checked={orderInput.crust === "Wheat Thin Crust"} onChange={handleInput} />
                                        <span>Wheat Thin Crust</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" value="Classic Hand Tossed" name='crust'
                                            checked={orderInput.crust === "Classic Hand Tossed"} onChange={handleInput} />
                                        <span>Classic Hand Tossed</span>
                                    </label>
                                </li>

                            </ul>

                            <h6 >SIZE OF CRUST</h6>
                            <ul className='text-muted'>
                                <li>
                                    <label>
                                        <input type="radio" value="small" name='size' checked={orderInput.size === "small"}
                                            onChange={handleInput} />
                                        <span>small</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" value="large" name='size' checked={orderInput.size === "large"}
                                            onChange={handleInput} />
                                        <span>large</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" value="medium" name='size' checked={orderInput.size === "medium"}
                                            onChange={handleInput} />
                                        <span>medium</span>
                                    </label>
                                </li>

                            </ul>


                            <div className="form-group mb-3">
                                <label>Qty</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    name='Qty'
                                    value={orders.Qty}
                                    onChange={handleInput}
                                />
                                <button type="submit" className="btn ">
                                    <Link className="nav-link" to="/ViewOrder" />
                                    <Handbag className='Handbag' size={32} color={'#000'} hover={'#000'} />ADD TO CART
                                    {/* </Link> */}
                                </button>

                                <button className="btn" onClick={() => { navigate("/ViewOrder") }}>view order </button>
                                {/* <button type="submit" className="btn ">
                                <Link className="nav-link" to="/ViewOrder"> 
                                <Handbag className='Handbag' size={32} color={'#000'} hover={'#000'} />View CART 
                                </Link>
                                </button> */}
                            </div>
                        </form>

                        <div className='share'>
                            <ul >
                                <li>

                                    <a href="#">

                                        <span> <HeartStraight size={32} color="#080808" />Wishlist</span>
                                    </a>
                                </li>
                                <li>

                                    <a href="#">

                                        <span><CellSignalFull size={32} color="#080808" />Compare</span>
                                    </a>
                                </li>
                                <li>

                                    <a href="#">

                                        <span><EnvelopeSimple size={32} color="#080808" />Email to Friends</span>
                                    </a>
                                </li>

                                <li class="share-title ms-5" >Share This :</li>
                                <li><a href="https://www.facebook.com/"><i class="facebook" > <FacebookLogo size={32} color="#080808" /></i></a></li>
                                <li><a href="https://twitter.com/"><i class="twitter" > <TwitterLogo size={32} color="#080808" /></i></a></li>
                                <li><a href="https://il.linkedin.com/"><i class="linkedin" ><LinkedinLogo size={32} color="#080808" /></i></a></li>
                                <li><a href="https://www.instagram.com/"><i class="instagram" > <InstagramLogo size={32} color="#080808" /></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );

}

export default AddOrder;