import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Menu from './components/Menu/Menu.component';

import { useState, useEffect } from 'react';
import axios from "axios";
import Header from './components/Header/header.component';
import AddOrder from './components/addOrder/addOrder.components';
function App() {
  // const [customers, setCustomer] = useState([]);


  // /*, {
  //           method: "GET", mode: 'no-cors', headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //           }} */

  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])
  const [customers, setCustomers] = useState([])
  const [orders, setOrders] = useState([])
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
  useEffect(()=>{
    async function getAllImages(){
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
      <Header/>
      {/* <Menu/> */}
      <AddOrder/>
  {

       customers.length ===0 ? " "  :
        customers?.map((customers, i)=>{
         return (
           <h2 key={i}>{customers.firstName} {customers.lastName}</h2>
         )
       })
     }
     
     {
      orders.length ===0 ? " "  :
      orders?.map((orders, i)=>{
       return (
         <h2 key={i}>{orders.ItemImg}</h2>
       
       )
     })
     }
     {/* {
      <Reservation/>

      
     }
     {
      <AddOrder/>
   
     } */}
     {
      //  <ViewStudent/>
     }
     {/* {
        <Item/> 
     } */}
    </div>
  );
}
export default App;