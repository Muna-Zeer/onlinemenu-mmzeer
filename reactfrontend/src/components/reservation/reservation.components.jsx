import './reservation.css'
import React from 'react';
import { useNavigate,} from 'react-router-dom';
import DatePicker from "react-datepicker";
import { useState } from 'react';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Reservation = () => {
    const Hour = [{ value: 'Hour', label: 'Hour' }
    , { value: 'min', label: 'min' }, { value: 'second', label: 'second' }];
const numPeople = [{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }];
// const history = useNavigate();
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [comments, setComments] = useState("");
const [date, setDate] = useState(new Date());
const [email, setEmail] = useState("");
const [selectedHour, setSelectedHour] = useState(Hour[0]);
const [selectedPeople, setSelectedPeople] = useState(numPeople[0]);
const [errors, setErrors] = useState("");
const[loading,setLoading]=useState(false);
const [text, setText] = useState("");
const todoOrder = {
    name:name, phone:phone, comments:comments,
    date:new Date(), email:email, selectedHour, selectedPeople};
function handleSubmit(e) {
  
 
   
  
    console.log('stat',todoOrder );
    fetch('http://127.0.0.1:8000/api/create_Table', {
        method: 'POST',
      mode:'no-cors',
        headers: {
            "Content-Type": "application/json"
           
        },
        body: JSON.stringify({'todoOrder':todoOrder})
     
    }).then( response => {
        return response.json();
        console.log('response',response.json());
        console.log('todo after',todoOrder);
    
    }).then(res=>{
        console.log('res',res);
        if (!res.ok) {
            const validation =  res.json();
            setErrors(validation.errors);
            console.log(validation.errors);
        } else {
            // history('/')
        }
    })
}
// const handleSubmit =async (e)=>{

//     if(name===''||phone===''||email===''||comments===''){
//         setErrors(true);
//         setText('fill all fields')
//     }
//     else{
//         setErrors(false);
// setLoading(true);
// let  query=await axios.post('http://127.0.0.1:8000/api/create_Table',{
//     name,
//     email,
//     phone,
//     comments,
//     Hour,numPeople
// }).then().catch((error)=>console.log(error))
// console.log('query',query);
//     }
// }
    return (
        <div>

            <h3 className="header">Make Online Reservation</h3>
            <h1 className="header-tag">BOOK A TABLE</h1>
          

                <div className='formSelect'>

                    <select
                    name='Hour'
                        value={selectedHour}
                        onChange={e => setSelectedHour(e.target.value)}>
                        {Hour.map((value,index) => (
                            <option value={value.value} key={index}>
                                {value.label}
                            </option>
                        ))}
                    </select>

                </div>

                <div className='formSelect'>
                    <select
                        value={selectedPeople} 
                        name="numPeople"
                        onChange={e => setSelectedPeople(e.target.value)}>
                        {numPeople.map((num,index) => (
                            <option value={num.value} key={index}>
                                {num.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    {/* <input type="text" className="form-control" placeholder="Pick a Date" value={date} onChange={date => setDateChose(date)} required /> */}
                    <DatePicker selected={date} onChange={date => setDate(date)} name="date" />
                </div>


                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone Number " name='phone'
                        value={todoOrder.phone} onChange={(e) => {
                            setPhone(e.target.value)
                        }} required />
                        
                </div>


                <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Name" name='Name'
                        value={todoOrder.name} onChange={(e) => {
                            setName(e.target.value)
                        }} required />
                </div>


                <div className="form-group">
                    <input type="text" className="form-control" id="email" placeholder="Email Address" name='email'
                        value={todoOrder.email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} required />
                </div>


                <div className="form-comments">
                    <input type="text" className="form-control" name='comments' placeholder="Comments" 
                        value={todoOrder.comments} onChange={(e) => {
                            setComments(e.target.value)
                        }} required />

                </div>
                <div className="form-submit">
                    <input type="submit" name="submit" value="Book a table"className="table-book" onClick={handleSubmit}/>
                </div>
           
        </div>
    )
}
export default Reservation;
