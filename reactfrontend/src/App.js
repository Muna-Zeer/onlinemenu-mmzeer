import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/home.components'

import Menu from './components/Menu/navbarMenu/Menu.component';
import Reservation from './components/reservation/reservation.components';
import { useState, useEffect } from 'react';

import axios from "axios";
import Header from './components/Header/header.component';
import AddOrder from './components/OrderOnline/add-order.components';
import Footer from './components/footer/footer.components';
import MenuList from './components/Menu/listMenu/listMenu';
import MenuGrid from './components/Menu/gridMenu/gridMenu';
import OrderOnline from './components/OrderOnline/orderonline.component';
import ViewOrder from './components/OrderOnline/ViewOrder.components';
import EditOrder from './components/OrderOnline/edit.components';
import MenuFilter from './components/Menu/menuFilter/menuFilter';

function App() {

  const [customers, setCustomers] = useState([])
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
<<<<<<< HEAD
    async function getAllStudent() {
=======
    async function getAllCustomer() {
>>>>>>> 86b16a43deb07ee0afc08b1bc3a537654dc44421
      try {
        const customers = await axios.get("http://127.0.0.1:8000/api/customers")
        console.log(customers.data)
        setCustomers(customers.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllCustomer()
  }, [])
<<<<<<< HEAD
=======

>>>>>>> 86b16a43deb07ee0afc08b1bc3a537654dc44421
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
    <div className="App">


   

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddOrder/:id" element={<AddOrder />} />
          <Route path="/OrderOnline" element={<OrderOnline />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/MenuList" element={<MenuList />} />
          <Route path="/MenuGrid" element={<MenuGrid />} />
          <Route path="/ViewOrder" element={<ViewOrder/>} />
          <Route path="/MenuFilter" element={<MenuFilter/>} />
          <Route path="/ViewOrder/edit-order/:id" element={<EditOrder/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
