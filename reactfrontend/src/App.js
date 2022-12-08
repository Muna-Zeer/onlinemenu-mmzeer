import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavigationHeader  from './components/navbar/navbar.components';
import Blog from './components/pages/blog.components'
import Price from './components/pages/price.components';
import Menu from './components/pages/menu.components';
import Reservation from './components/pages/reservation.components';
import Home from './components/pages/home.components';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from "axios";
import {Link } from 'react-router-dom'
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
  return (
    <div className="App">
      
       
   <h1>Welcome in react</h1>
      {/* {
        customers.map((customer, i) => {
          return (
            <h2 key={i}>{customer.firstName} {customer.lastName}</h2>
          )
        })
      } */}
  {
       customers.map((customers, i)=>{
         return (
           <h2 key={i}>{customers.firstName} {customers.lastName}</h2>
         )
       })
     }
    </div>
  );
}
export default App;