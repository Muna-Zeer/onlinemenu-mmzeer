import { useState } from "react";
import React from 'react';
const FilterCrust=()=>{
    const[filter,setFilter]=useState('');
    
    const search=(key)=>{
console.log('key');
fetch('http://127.0.0.1:8000/api/filterCrust?crust='+key).then((data)=>{
    data.json.then((res)=>{
        console.warn('res',res);
    })
})
    }
    return(
        <div>
            <input type='text' onChange={(e)=>search(e.target.value)}/>
        </div>
    )
}
 export default FilterCrust;