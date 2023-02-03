import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

const ViewOrder = () => {

    const [products, setProducts] = useState([])

    // const [orders, setOrders] = useState([])
    useEffect(() => {
        async function getAllProduct() {
            try {
                const products = await axios.get("http://127.0.0.1:8000/api/allOrder")
                console.log(products.data)
                setProducts(products.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllProduct()
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        await axios.get(`http://127.0.0.1:8000/api/order`).then(({ data }) => {
            setProducts(data)
        })
    }

    const deleteProduct = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            return result.isConfirmed
        });

        if (!isConfirm) {
            return;
        }

        await axios.delete(`http://localhost:8000/api/delete-order/${id}`).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            fetchProducts()
        }).catch(({ response: { data } }) => {
            Swal.fire({
                text: data.message,
                icon: "error"
            })
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className='col-12'>

                </div>
                <div className="col-12">
                    <div className="card card-body">
                        <div className="table-responsive">

                            <Link className="nav-link btn btn-primary mb-2 float-end" to="/OrderOnline">
                                <h2>  Create Product</h2>
                            </Link>

                            <table className="table table-bordered mb-0 text-center">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Product</th>
                                        <th>Product Name</th>
                                        <th>price</th>
                                        <th>Quentity</th>
                                        <th>SubTotal</th>
                                        <th>Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.length > 0 && (
                                            products.map((products) => (
                                                <tr key={products.id}>
                                                    <td>{products.id}</td>
                                                    <td>
                                                        <img width="50px" src={products.ItemImg} />
                                                    </td>
                                                    <td>{products.newPrice}</td>
                                                    <td></td>
                                                    <td>{products.Qty}</td>
                                                    <td>{products.oldPrice}</td>
                                                    <td>     <Button variant="danger"
                                                    // onClick={() => deleteProduct(products.id)}
                                                    >
                                                        {/* <Link className="nav-link" to="/OrderOnline">
                                                        Edit
                                                        </Link> */}
                                                        <Link to={`edit-order/${products.id}`} className="btn btn-success btn-sm">Edit</Link>

                                                    </Button>
                                                        <Button variant="danger" onClick={() => deleteProduct(products.id)}>
                                                            Delete
                                                        </Button>
                                                    </td>



                                                </tr>
                                            ))
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewOrder;