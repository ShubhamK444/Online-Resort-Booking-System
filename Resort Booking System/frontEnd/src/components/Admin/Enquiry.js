import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../Api";

export default function Enquiry() {
  const navgate = useNavigate();
  var [data, setdata] = useState([]);
  const regNo = sessionStorage["regNo"];

  useEffect(() => {
    axios
      .get(api.URL + "/enquiry/getall", {})
      .then((result) => {
        console.log(result.data);
        setdata(result.data);
        // console.log(data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function deleted(e){
    console.log(e);
    axios
    .delete(api.URL+"/enquiry/delete/"+e)
    .then((result) => {
      toast.error("Enquiry canceled !", {
         position: toast.POSITION.TOP_CENTER,autoClose: 1000 
      });
      setTimeout(() => {
          
        window.location.reload();

      }, 1000);
     
    })
    .catch((err) => {
      console.log(err);
    });
  }
  function onSubmit() {
    setTimeout(() => {
          
     
      navgate("/ViewReservation");

    }, 1000);
    
  }
  var n=1;
  return (
    <div>
      <h2>Customer Enquiriess</h2>
      <h5 class="text-success">Room booking details:</h5>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email ID</th>
            <th>Message</th>
            <th>Contact Number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length >= 0 &&
            data.map((obj) => (
              <tr>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.message}</td>
                <td>{obj.mobileNo}</td>
                <td>{<Link to="#"  onClick={() => deleted(obj.Id)} class="btn btn-danger">
          Remove
        </Link>}</td>

                {/* <td>{obj.phoneNumber}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
