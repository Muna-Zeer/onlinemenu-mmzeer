import './App.css';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavigationHeader  from './components/navbar/navbar.components';
import Blog from './components/pages/blog.components'
import Price from './components/pages/price.components';
import Menu from './components/pages/menu.components';
import Reservation from './components/reservation/reservation.components';
import { useState, useEffect } from 'react';

import axios from "axios";
<<<<<<< HEAD
import Header from './components/Header/header.component';
import AddOrder from './components/addOrder/addOrder.components';
import Footer from './components/footer/footer.components';
import MenuList from './components/Menu/listMenu/listMenu';
import MenuGrid from './components/Menu/gridMenu/gridMenu';
import OrderOnline from './components/OrderOnline/orderOnline.component';
function App() {

  const [customers, setCustomers] = useState([])
  const [orders, setOrders] = useState([])
  useEffect(() => {
    async function getAllStudent() {
=======
import {Link } from 'react-router-dom';

function App() {
  // const [customers, setCustomer] = useState([]);


  // /*, {
  //           method: "GET", mode: 'no-cors', headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //           }} */
  // const fetchData = () => {
  //   fetch('http://127.0.0.1:8000/api/customers',{ method: "GET", mode: 'no-cors'})
  //     .then((response) => {
  //       console.log('response of json ', response.text());
  //       return response.text()
       
  //     })
  //     .then((data) => {
  //       console.log('return customer ', setCustomer(data));
  //       return setCustomer(data)
  //     })
  //     .catch((err) => { console.log('error ',err) })
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])
  const [customers, setCustomers] = useState([])
  useEffect(()=>{
    async function getAllStudent(){
>>>>>>> 774eba776732014cf6e6af9f1ddebe06b9d3eae6
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
<<<<<<< HEAD
  useEffect(() => {
    async function getAllImages() {
      try {
        const orders = await axios.get("http://127.0.0.1:8000/api/selectImg")
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


      {

        customers.length === 0 ? " " :
          customers?.map((customers, i) => {
            return (
              <h2 key={i}>{customers.firstName} {customers.lastName}</h2>
            )
          })
      }

      {
        orders.length === 0 ? " " :
          orders?.map((orders, i) => {
            return (
              <h2 key={i}>{orders.ItemImg}</h2>

            )
          })
      }
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddOrder" element={<AddOrder />} />
          <Route path="/OrderOnline" element={<OrderOnline />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/MenuList" element={<MenuList />} />
          <Route path="/MenuGrid" element={<MenuGrid />} />
        </Routes>
        <Footer />
      </BrowserRouter>
=======
  return (
    <div className="App">
  {

       customers.length ===0 ? " "  :
        customers?.map((customers, i)=>{
         return (
           <h2 key={i}>{customers.firstName} {customers.lastName}</h2>
         )
       })
     }
     {
      <Reservation/>
     }
>>>>>>> 774eba776732014cf6e6af9f1ddebe06b9d3eae6
    </div>
  );
}
export default App;