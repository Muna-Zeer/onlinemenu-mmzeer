import 'react-datepicker/dist/react-datepicker.css';
import './listMenu.css';
import pizza from '../../../assets/image/pizzaitem.jpg';
import NavbarMenu from '../navbarMenu/Menu.component';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import AddOrder from '../../OrderOnline/add-order.components';
const MenuList = (props) => {
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  useEffect(() => {
    const getAllList = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/allOrder?page=${currentPage}`);
        setProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllList();
  }, [currentPage]);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const orderProduct = async (productId) => {
    const response = await fetch(`http://127.0.0.1:8000/api/Items/${productId}`);
    const productData = await response.json();
    // pass the product data as a prop to the AddOrder component
    return <AddOrder orders={products} setOrder={setProducts} />
  }

  return (
    <div className="container">
      <NavbarMenu products={products} setProducts={setProducts} />
      <div className="MenuList">
        <div className=" menuListCard ">
          {
            products.length > 0 && (
              products.map((products, key) => {
                return (
                  <div className="menuListBox">
                    <div className="listImg">
                      <Link className='nav-link' to='/AddOrder'><img src={products.ItemImg} alt="pizza" /></Link>
                    </div>
                    <div className="menuListDetail">
                      <div className="ListTitle">
                        <Link className='nav-link' to={`/AddOrder/${products.id}`}>{products.ItemName}</Link>
                        <span className="listPrice">{products.newPrice}</span>
                      </div>
                      <hr />
                      <p className="listItem">{products.Description}</p>
                    </div>


                  </div>
                )
              })
            )}



        </div>
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={prevPage}>Prev</button>
          <button disabled={products.length < perPage} onClick={nextPage}>Next</button>
        </div>
      </div>

    </div>
  );


}
export default MenuList;