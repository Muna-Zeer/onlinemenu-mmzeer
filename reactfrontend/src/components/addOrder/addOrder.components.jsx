import './addOrder.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import NotFound from '../NotFound/notfound.component';
import pizza from '../../assets/image/pizzaitem2.jpg'
import { Handbag} from 'phosphor-react';

function AddOrder() {

    const [orders, setOrders] = useState([])

    const [img, setImg] = useState();
    const imageUrl = "http://127.0.0.1:8000/api/addOrder";
    const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    useEffect(() => {
        fetchImage();
    }, []);
    useEffect(() => {
        async function getAllOrder() {
            try {
                const orders = await axios.get("http://127.0.0.1:8000/api/addOrder", {
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
        getAllOrder()
    }, [])



    const [studentInput, setStudent] = useState({
        name: '',
        size: '',
        crust: '',
        Qty: '',


        date: new Date(),
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setStudent({ ...studentInput, [e.target.name]: e.target.value })
    }


    const saveStudent = (e) => {
        e.preventDefault();

        const data = {
            name: studentInput.name,

            Qty: studentInput.Qty,
            size: studentInput.size,
            crust: studentInput.crust,


        }

        axios.post(`http://127.0.0.1:8000/api/create_order`, data).then(res => {

            if (res.data.status === 200) {
                swal("Success!", res.data.message, "success");
                setStudent({
                    name: '',
                    size: '',
                    crust: '',
                    Qty: '',


                    error_list: [],
                });
                // history.push('/students');
                <NotFound />
            }
            else if (res.data.status === 422) {
                setStudent({ ...studentInput, error_list: res.data.validate_err });
            }
        });
    }

    return (
        <div>
            <div className="container ">
                <div className="row justify-content-center mt-5 ">
                    <div className="col-sm-4 "> <img src={pizza} alt="" height={400} /></div>
                    <div className="col-sm-8 text-start ps-5  ">


                        <h3 >PANEER MAKHANI PIZZA

                        </h3>
                        <span className='pe-5 text-muted '><del>$ 30.50 </del></span><span className='text-warning'>$ 20.50</span>
                        <p className=' text-muted '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                            suscipit delectus. Corrupti, suscipit! Nobis deleniti placeat suscipit provident, dolore aut esse
                            libero totam, consequuntur ratione enim ducimus. Nemo, asperiores porro!</p>


                        <form onSubmit={saveStudent}>
                            <h5 >CHOOSE YOUR CRUST</h5>
                            <ul className='text-muted'>
                                <li>
                                    <label>
                                        <input type="radio" value="Classic Hand Tossed" name='crust'
                                            checked={studentInput.crust === "Classic Hand Tossed"} onChange={handleInput} />
                                        <span>Classic Hand Tossed</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" value="Wheat Thin Crust" name='crust'
                                            checked={studentInput.crust === "Wheat Thin Crust"} onChange={handleInput} />
                                        <span>Wheat Thin Crust</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" value="Classic Hand Tossed" name='crust'
                                            checked={studentInput.crust === "Classic Hand Tossed"} onChange={handleInput} />
                                        <span>Classic Hand Tossed</span>
                                    </label>
                                </li>

                            </ul>

                            <h6 >SIZE OF CRUST</h6>
                            <ul className='text-muted'>
                                <li>
                                    <label>
                                        <input type="radio" value="small" name='size' checked={studentInput.size === "small"}
                                            onChange={handleInput} />
                                        <span>small</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" value="large" name='size' checked={studentInput.size === "large"}
                                            onChange={handleInput} />
                                        <span>large</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" value="medium" name='size' checked={studentInput.size === "medium"}
                                            onChange={handleInput} />
                                        <span>medium</span>
                                    </label>
                                </li>

                            </ul>


                            <div className="form-group mb-3">
                                <label>Qty</label>
                                <input type="text" placeholder='1' name="Qty" onChange={handleInput} value={studentInput.Qty} className="Qty" />
                                <button type="submit" className="btn "> <Handbag className='Handbag' size={32} color={'#000'} hover={'#000'}/>ADD TO CART</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>

            {/* {

  orders.length ===0 ? " " :
  orders?.map((orders, i)=>{
  return (
  <h2 key={i}>{orders.newPrice} {orders.oldPrice} {orders.Description}
    <img src={orders.ItemImg} alt="no photo"></img>
    <img src={orders.ItemImg} alt="icons" />

  </h2>

  )
  {
  console.log('image',orders.ItemImg);
  }
  })
  } */}
        </div>

    );

}

export default AddOrder;