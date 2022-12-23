import './App.css';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Blog from './components/pages/blog.components'
import Price from './components/pages/price.components';
import Menu from './components/pages/menu.components';
import Reservation from './components/reservation/reservation.components';
import Home from './components/pages/home.components';
import NotFound from './components/NotFound/notfound.component'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from "axios";
import {Link } from 'react-router-dom';
import Header from './components/Header/header.component';
import AddOrder from './components/OrderOnline/add-order.components';

import ViewOrder from './components/OrderOnline/ViewOrder.components'
import EditOrder from './components/OrderOnline/edit.components';

import FilterMenu from './filter/filter-menu.components';
import FilterSize from './filter/filter-size.components';
import FilterCrust from './filter/filter-crust.components';
import FilterPrice from './filter/filter-price.components';
function App() {
  


  // /*, {
  //           method: "GET", mode: 'no-cors', headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //           }} */

  // }

  const [customers, setCustomers] = useState([])
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    async function getAllStudent(){
      try {
        const customers = await axios.get("http://127.0.0.1:8000/api/customers")
        console.log('customers.data found',customers.data)
        setCustomers(customers.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStudent()
  }, [])
  useEffect(()=>{
    async function getAllPP(){
      try {
        const products = await axios.get("http://127.0.0.1:8000/api/allOrder")
        console.log('products',products.data)
        setProducts(products.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllPP()
  }, [])
 

  // useEffect(()=>{
  //     fetchProducts()
  // },[])
  useEffect(()=>{
    async function getAllImages(){
      try {
        const orders = await axios.get("http://127.0.0.1:8000/api/allOrder")
        console.log(orders.data)
        setOrders(orders.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllImages()
  }, [])
  return (
    <div className="App">

  {/* {

       customers.length ===0 ? " "  :
        customers?.map((customers, i)=>{
         return (
           <h2 key={i}>{customers.firstName} {customers.lastName}</h2>
         )
       })
     }

{

products.length ===0 ? " "  :
 customers?.map((products, i)=>{
  return (
    <h2 key={i}>{products.Qty} {products.lastName}</h2>
  )
})
} */}
       {/* {

products.length ===0 ? " "  :
 products?.map((products, i)=>{
  return (
    <h2 key={i}><img width="50px" src={products.ItemImg} /></h2>
  )
})
} */}
     {/* {
      orders.length ===0 ? " "  :
      orders?.map((orders, i)=>{
       return (
         <h2 key={i}><img width="50px" src={`http://127.0.0.1:8000/api/allOrder/${orders.ItemImg}`} />
         </h2>
       
       )
     })
     } */}
     {
      
     }

    <BrowserRouter>
          <Header />
    <FilterMenu />
    <FilterSize/>
    <FilterCrust/>
    <FilterPrice/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/OrderOnline" element={<AddOrder />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Reservation" element={<Reservation  />} />
            <Route path="/ViewOrder" element={<ViewOrder />} />
            <Route path="/edit-order/:id" element={<EditOrder/>} />
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;