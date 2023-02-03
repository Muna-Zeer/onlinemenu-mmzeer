import './Menu.component.css'


import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import MenuFilter from '../menuFilter/menuFilter';

const NavbarMenu = (props) => {
  const [filters, setFilter] = useState('');
  async function getMenu(key) {
    try {
      const filter = await axios.get('http://127.0.0.1:8000/api/selectItem?menuID=' + key)
      console.log(filter.data);
     
      props.setProducts(filter.data.message);
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(() => {
  //   getMenu()
  // }, [])
  useEffect(() => {
    getAllList()
  }, [])
  async function getAllList() {
    try {
      const filter = await axios.get("http://127.0.0.1:8000/api/allOrder")
      console.log('filter.data.data',filter.data.data)
      setFilter(filter.data.data)
    } catch (error) {
      console.log(error)
    }
  }
 

  
  return (
    <div className="Menu">
      <nav className='navMenu'>
        <div><button className='All' onClick={(e) => getAllList(e.target.value)}  > All</button></div>
        <div><button className='DRINKS' value='2' onClick={(e) => getMenu(e.target.value)}> Drinks


        </button>


        </div>

        <div><button className='SALADS' value='3' onClick={(e) => getMenu(e.target.value)}>SALADS  </button></div>
        <div><button className='PASTA' value='5' onClick={(e) => getMenu(e.target.value)}>PASTA</button>


        </div>
        <div><button className='BURGERS' value='4' onClick={(e) => getMenu(e.target.value)}>BURGERS</button></div>
        <div><button className='DESERTS' value='6' onClick={(e) => getMenu(e.target.value)}>DESERTS</button></div>
        <div><button className='PIZZAS' value='1' onClick={(e) => getMenu(e.target.value)}>PIZZAS</button></div>



      </nav>



    </div >);
}
export default NavbarMenu;
