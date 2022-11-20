
import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios";
function App() {
  const[customers,setCustomer]=useState([]);
  useEffect(()=>{
async function getAllCustomer(){
  try {
    const customers=await axios.get("http://127.0.0.1:8000/api/getAddAddress");
    console.log(customers.data);
    setCustomer(customers.data);
  } catch (error) {
    console.log(error);
  }
}
getAllCustomer();
  },[])
  return (
    <div className="App">
     <h1>connect react js with laravel</h1>
     {
      customers.map((customer,i)=>{
        return (
          <h2 key={i}>{customer.firstName} {customer.lastName}</h2>
        )
      })
    }
    </div>
  );
}

export default App;
