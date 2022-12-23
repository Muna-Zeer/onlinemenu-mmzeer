import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/home.components'

import Menu from './components/Menu/navbarMenu/Menu.component';
import Reservation from './components/reservation/reservation.components';
import { useState, useEffect } from 'react';

import axios from "axios";
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
      try {
        const customers = await axios.get("http://127.0.0.1:8000/api/customers")
        console.log(customers.data)
        setCustomers(customers.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStudent()
  }, [])
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
    </div>
  );
}
export default App;