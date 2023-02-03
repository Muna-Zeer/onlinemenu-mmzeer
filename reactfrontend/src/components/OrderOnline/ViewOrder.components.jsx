import './viewOrder.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Trash, Pencil } from 'phosphor-react';

const ViewOrder = (props) => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(5);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/allOrder?page=${props.pcurrentPage}`)
            .then(response => response.json())
            .then(data => setProducts(data.data));
        setLoading(false);
    }, [currentPage]);



    const getAllProduct = async () => {
        try {
            const products = await axios.get("http://127.0.0.1:8000/api/allOrder")
            console.log('products.data.data', products.data.data)
            setProducts(products.data.data)
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllProduct()
    }, [])


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
            getAllProduct();
        }).catch(({ response: { data } }) => {
            Swal.fire({
                text: data.message,
                icon: "error"
            })
        })
    }
    if (loading) {
        return <div>loading</div>
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
                                        <th>Quantity</th>
                                        <th>Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products && products.length > 0 && (
                                            products.map((products) => (
                                                <tr key={products.id}>
                                                    <td>{products.id}</td>
                                                    <td>
                                                        <img width="50px" src={products.ItemImg} />
                                                    </td>
                                                    <td>{products.ItemName}</td>
                                                    <td>{products.newPrice}</td>

                                                    <td>{products.Qty}</td>

                                                    <td>
                                                        <Button className='buttonEdit'  >
                                                            <Link to={`edit-order/${products.id}`} className=" btn-sm" style={{ color: "#fff" }} ><Pencil size={32} /></Link>
                                                        </Button>
                                                        <Button className='buttonEdit' onClick={() => deleteProduct(products.id)}>
                                                            <Trash size={32} />
                                                        </Button>
                                                    </td>



                                                </tr>
                                            ))
                                        )
                                    }
                                    <button className='btnPrevious   ' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                                    <span className='spanCurrentPage'>{currentPage}</span>
                                    <button className='btnNext ' disabled={products.length < itemPerPage} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
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
