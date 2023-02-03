import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import NotFound from '../NotFound/notfound.component';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './reservation.css'
import 'react-datepicker/dist/react-datepicker.css';
const Reservation = () => {
    const Hour = [{ value: 'Hour', label: 'Hour' }
        , { value: 'min', label: 'min' }, { value: 'second', label: 'second' }];
    const numPeople = [{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }];

    const [date, setDate] = useState(new Date());
    const handleChange = date => setDate(date);

    const [orderInput, setOrder] = useState({
        name: '',
        comments: '',
        email: '',
        phone: '',
        Hour: '',
        numPeople: '',
        date: new Date(),
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setOrder({ ...orderInput, [e.target.name]: e.target.value })
    }

    const saveOrder = (e) => {
        e.preventDefault();

        const data = {
            name: orderInput.name,
            comments: orderInput.comments,
            email: orderInput.email,
            phone: orderInput.phone,
            date: orderInput.date,
            Hour: orderInput.Hour,
            numPeople: orderInput.numPeople,
        }

        axios.post(`http://127.0.0.1:8000/api/create_Table`, data).then(res => {

            if (res.data.status === 200) {
                swal("Success!", res.data.message, "success");
                setOrder({
                    name: '',
                    comments: '',
                    email: '',
                    phone: '',
                    date: '',
                    Hour: '',
                    numPeople: '',
                    error_list: [],
                });
                // history.push('/students');
                <NotFound />
            }
            else if (res.data.status === 422) {
                setOrder({ ...orderInput, error_list: res.data.validate_err });
            }
        });
    }
    return (
        <div>
            <h3 className="headerTitle">Make Online Reservation</h3>
            <h1 className="header-tag">BOOK A TABLE</h1>

            <form onSubmit={saveOrder}>
                <div className='divSelect'>


                    <select className='options' name="Hour" placeholder="Hour" value={orderInput.Hour} onChange={handleInput}  >
                        <option value="" >Hour</option>


                        {
                            Hour.map(item => (
                                <option
                                    value={item.value}
                                    key={item.value}
                                >{item.label}</option>
                            ))
                        }


                    </select>

                    <select className='options' name="numPeople" placeholder="1" value={orderInput.numPeople} onChange={handleInput}  >
                        {
                            numPeople.map(item => (
                                <option value={item.value} key={item.value} >{item.label}</option>))
                        }
                    </select>




                </div>




                <div className='form-group1'>

                    <div class="form-group">
                        <DatePicker minDate={new Date()} selected={date} onChange={(date) => setDate(date)} showTimeSelect dateFormat="MMMM d yyyy , hh:mm:ss aa " />
                    </div>


                    <div class="form-group">
                        <input type="text" class="form-control" name="phone" onChange={handleInput} value={orderInput.phone} placeholder="Phone Number " required />

                    </div>
                </div>

                <div className='form-group2'>
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" onChange={handleInput} value={orderInput.name} placeholder="Name" required />

                    </div>


                    <div class="form-group">
                        <input type="text" class="form-control" id="email" name="email" onChange={handleInput} value={orderInput.email} className="form-control" placeholder="Email Address" required />

                    </div>

                </div>
                <div class="form-comments">
                    <input type="text" class="form-control" name="comments" onChange={handleInput} value={orderInput.comments} placeholder="Comments" required />


                </div>
                <div class="form-submit">

                    <input type="submit" name="submit" value="Book a table" class="table-book" />
                </div>
            </form>
        </div>
    )
}
export default Reservation;