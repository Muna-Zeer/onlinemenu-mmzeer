import '../addOrder/addOrder.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { Handbag } from 'phosphor-react';


const EditOrder = (props) => {


  // const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [orderInput, setOrder] = useState({
    name: '',
    size: '',
    crust: '',
    Qty: '',

  });
  const [errorInput, setError] = useState([]);
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")

  let { id } = useParams();

  useEffect(() => {
    fetchProduct()
  }, [])
  const fetchProduct = async () => {
    await axios.get(`http://127.0.0.1:8000/api/edit-order/${id}`).then(res => {
      if (res.data.status === 200) {
        setOrders(res.data.orders);
        setLoading(false);
      }
      else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        // history.push('/students');
      }
    });
  }



  const handleInput = (e) => {
    e.persist();
    setOrder({ ...orderInput, [e.target.name]: e.target.value });
  }

  const updateorder = async (e) => {
    e.preventDefault();

    // const id = props.match.params.id;

    const data = {
      Qty: orderInput.Qty,
      size: orderInput.size,
      crust: orderInput.crust

    }


    await axios.put(` http://localhost:8000/api/update-order/${id}`, data).then(res => {
      console.log('oo', res.json);
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        setError([]);

      }
      else if (res.data.status === 422) {
        swal("All fields are mandatory", "", "error");
        setError(res.data.validationErrors);
      }
      else if (res.data.status === 404) {
        swal("Error", res.data.message, "error  find the errors");
        // history.push('/orders');
      }
    });
  }

  if (loading) {

    return <h4>Loading Edit order Data...</h4>
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card cardViewOrder m-5 ">
              <div className="card-header">
                <h4>Edit orders
                  <Link to={'/ViewOrder'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                </h4>
              </div>
              <div className="card-body">

                <form onSubmit={updateorder} >
                  <div className='text-start'>

                    <h5 >CHOOSE YOUR CRUST</h5>
                    <ul className='text-muted'>
                      <li>
                        <label>
                          <input type="radio" value="Classic Hand Tossed" name='crust'
                            checked={orderInput.crust === "Classic Hand Tossed"} onChange={handleInput} />
                          <span>Classic Hand Tossed</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" value="Wheat Thin Crust" name='crust'
                            checked={orderInput.crust === "Wheat Thin Crust"} onChange={handleInput} />
                          <span>Wheat Thin Crust</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" value="Classic Hand Tossed" name='crust'
                            checked={orderInput.crust === "Classic Hand Tossed"} onChange={handleInput} />
                          <span>Classic Hand Tossed</span>
                        </label>
                      </li>

                    </ul>
                    <h6 >SIZE OF CRUST</h6>
                    <ul className='text-muted'>
                      <li>
                        <label>
                          <input type="radio" value="small" name='size' checked={orderInput.size === "small"}
                            onChange={handleInput} />
                          <span>small</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" value="large" name='size' checked={orderInput.size === "large"}
                            onChange={handleInput} />
                          <span>large</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" value="medium" name='size' checked={orderInput.size === "medium"}
                            onChange={handleInput} />
                          <span>medium</span>
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div className="form-Qty ">
                    <label>Qty</label>
                    <input type="number" placeholder='1' name="Qty" min='1' max='10' onChange={handleInput} value={orderInput.Qty} className="Qty" />
                    <button type="submit" className="btn mb-3">
                      {/* <Link className="nav-link" to="/ViewOrder"> */}
                        <Handbag className='Handbag' size={32} color={'#000'} hover={'#000'} />Update
                      {/* </Link> */}
                    </button>

                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default EditOrder;