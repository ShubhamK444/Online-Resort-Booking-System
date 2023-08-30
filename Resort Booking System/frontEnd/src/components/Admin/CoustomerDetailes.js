import React from "react";
import axios from "axios";
import api from "../../Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ShowProduct() {
  var [data, setdata] = useState([]);
  var [event, setevent] = useState([]);
  var [Price, setPrice] = useState();
  const regNo = sessionStorage["regNo"];
  console.log(regNo);
  console.log(sessionStorage["token"]);
  useEffect(() => {
    axios
      .get(api.URL + "/user/getalluser")
      .then((result) => {
        console.log(result.data);
        setdata(result.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3>Room booking details:</h3>
      <br />
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email Id in</th>
            <th scope="col">Coustomer Name</th>
            <th scope="col">Aadhar No</th>
            <th scope="col">Mobile Number</th>

            {/* <th scope="col">Password</th> */}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length >= 0 &&
            data.map((obj) => {
              return (
                <tr>
                  <td>{obj.Id}</td>
                  <td>{obj.email}</td>
                  <td>{obj.fname +" "+ obj.lname}</td>
                  <td>{obj.idCardNumber}</td>
                  <td>{obj.phoneNumber}</td>
                </tr>
              );
            })}
        </tbody>
        <br />
      </table>
    </div>
  );
}
