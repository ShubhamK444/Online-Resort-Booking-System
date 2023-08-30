import React from 'react'
import axios from 'axios'
import api from '../Api'
import { useState, useEffect } from 'react'

export default function ShowProduct() {
var [data,setdata]=useState([]);
const regNo = sessionStorage["regNo"];

useEffect(()=>{
  axios
  .get(api.URL + `Book/getBooking/1/${regNo}`, {
    headers: { Authorization: "Bearer " + sessionStorage["token"] },
  })
 .then((result)=>{
    setdata(result.data)
  }).catch((err)=>{
  })
},[])
  return (
    <div>
      <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">EmailID</th>
      {/* <th scope="col">Password</th> */}
    </tr>
  </thead>
  <tbody>
   
   {
    data  && data.length >0 && data.map(obj=>
    <tr>
      <td>{obj.customer_id}</td>
      <td>{obj.email_id}</td>
      <td>{obj.first_name}</td>
      <td>{obj.last_name}</td>
    </tr>
    )
   }
  </tbody>
</table>
    </div>
  )
}


 