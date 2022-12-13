
import './reservation.css'
import React from 'react';
// import Select from 'react-select';

const Hour = [{ value: 'Hour', label: 'Hour' }
    , { value: 'min', label: 'min' }, { value: 'second', label: 'second' }];
const numPeople = [{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }];
const Reservation = () => {
    return (
        <div>
            <h3 className="headerTitle">Make Online Reservation</h3>
            <h1 className="header-tag">BOOK A TABLE</h1>

            <form action="">
                <div className='divSelect'>


                    <select className='options' placeholder="Hour" data-placeholder="Hour" >
                    <option value="" >Hour</option>


                        {Hour.map(item => (

                            <option value={item.value} key={item.value}>{item.label}</option>

                        ))}


                    </select>

                    <select className='options' placeholder="Number Of People" data-placeholder="Number Of People"  >
                    <option value="" >Number Of People</option>


                        {numPeople.map(item => (

                            <option value={item.value} key={item.value}>{item.label}</option>

                        ))}
                    </select>

                </div>
                <div className='form-group1'>

                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Pick a Date" required />
                </div>


                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Phone Number " required />
                </div>
                </div>

                <div className='form-group2'>
                <div class="form-group">
                    <input type="text" class="form-control" id="name" placeholder="Name" required />
                </div>


                <div class="form-group">
                    <input type="text" class="form-control" id="email" placeholder="Email Address" required />
                </div>

</div>
                <div class="form-comments">
                    <input type="text" class="form-control" placeholder="Comments" required />

                </div>
                <div class="form-submit">
                    <input type="submit" name="submit" value="Book a table" class="table-book" />
                </div>
            </form>
        </div>
    )
}
export default Reservation;