import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import pizza from '../../assets/image/pizzaitem2.jpg';
import './orderOnline.css'
 import AddOrder from './add-order.components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const OrderOnline = () => {
    const price = [{ value: '15', label: '15.0' }, { value: '20', label: '20.0' }, { value: '30', label: '30.0' }];
    const crust = [{ value: 'crust-1', label: 'crust-1' }, { value: 'crust-2', label: 'crust-2' }, { value: 'crust-3', label: 'crust-3' }];
    const size = [{ value: 'small', label: 'Small' }, { value: 'large', label: 'Large' }, { value: 'medium', label: 'Medium' }];
    const [filter, setFilter] = useState('');
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
 



    useEffect(() => {
        const getAllList = async () => {
          try {
            const response = await axios.get("http://127.0.0.1:8000/api/allOrder");

            console.log('products in axios before',products);
           setProducts(response.data.data);
           setLoading(false);
            console.log('products in axios after message',response.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        getAllList();
      }, []);

    const orderProduct = async (productId) => {
        const response = await fetch(`http://127.0.0.1:8000/api/Items/${productId}`);
        const productData = await response.json();
        // pass the product data as a prop to the AddOrder component
        return <AddOrder orders={products} setOrder={setProducts}/>
      }
    

   

    async function Crust(key) {

        try {
            const products = await axios.get('http://127.0.0.1:8000/api/filterCrust?crust=' + key)
            console.log(products.data.message)
            setProducts(products.data.message)

        } catch (error) {
            console.log(error)
        }
    }
    async function Size(key) {

        try {
            const products = await axios.get('http://127.0.0.1:8000/api/selectSize?size=' + key)
            console.log(products.data.message)
            setProducts(products.data.message)
        } catch (error) {
            console.log(error)
        }
    }


    // useEffect(() => {
    //     Size();
    // }, []);
    async function Price(key) {

        try {
            const products = await axios.get('http://127.0.0.1:8000/api/filterPrice?newPrice=' + key)
            console.log(products.data.message)
            setProducts(products.data.message)
        } catch (error) {
            console.log(error)
        }
    }
    // useEffect(() => {
    //     Price();
    // }, []);
    
    // useEffect(() => {
    //     Crust();
    // }, []);
    if (loading) {
        return <div>loading</div>
    }
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
                    <li className='liFilter' >Filter</li>
                    <li> <select name="Curst" id="Curst" value={filter.crust} onChange={(e) => Crust(e.target.value)}>

                        <option value="Curst">Curst </option>
                        {
                            crust.map(item => (
                                <option value={item.value} key={item.value} >{item.label}</option>))
                        }

                    </select></li>
                    <li> <select name="Price" id="Price" value={filter.newPrice} onChange={(e) => Price(e.target.value)}>
                        <option value="Price">Price</option>

                        {
                            price.map(item => (
                                <option value={item.value} key={item.value} >{item.label}</option>))
                        }

                    </select></li>
                    <li> <select name="Size" id="Size" value={filter.size} onChange={(e) => Size(e.target.value)}>
                        <option value="Price">Size</option>
                        {
                            size.map(item => (
                                <option value={item.value} key={item.value} >{item.label}</option>))
                        }

                    </select></li>
                    <li>Cheeze</li>
                    <li>Type</li>
                    <li>Flavour</li>
                    <li>Showing 1–12 of 28 Results</li>
                </ul>
            </div>
            <div class="OrderOnlineCard">
                {
                    
                   products && products.length > 0 && (
                  
                        products.map((products, key) => {
                            console.log('length',products.length );
                            console.log('products in map',products);
                            return (
                                <div class="OrderOnlineBox">
                                    <div class="OrderOnline-img"><Link className="nav-link" to="/AddOrder"><img src={products.ItemImg} width={250} height={200} alt="pizza" /></Link></div>
                                    <div class="OrderOnline-detail text-center">
                                        <Link id="title" className="nav-link" to="/AddOrder">{products.ItemName} </Link>

                                        <p class="OrderOnline-item">{products.Description}</p>
                                        <p style={{ color: '#fd9d3e' }}>{products.newPrice} ..oldPrice:{products.oldPrice}</p>
                                        <button className="btn-orderNow">
                                            <Link to={`/AddOrder/${products.id}`} className="OrderOnline-orderNow">Order Now</Link>
                                        </button>
                                    </div>


                                </div>
                            )
                        })
                    )}



            </div>



        </div>
    );


}
export default OrderOnline;