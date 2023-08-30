import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../Api";

export default function ViewReservation() {
  const navigate = useNavigate();
  function submit() {
    navigate("/Enquiry");
  }
  var [data, setdata] = useState([]);
  var [event, setevent] = useState([]);
  const regNo = sessionStorage["regNo"];
  console.log(regNo);
  console.log(sessionStorage["token"]);
  useEffect(() => {
    axios
      .get(api.URL + `/Book/getallbooking`, {
        headers: { Authorization: "Bearer " + sessionStorage["token"] },
      })
      .then((result) => {
        console.log(result.data);
        setdata(result.data);
        // console.log(data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(api.URL + `/event/getAllEvent`, {
        headers: { Authorization: "Bearer " + sessionStorage["token"] },
      })
      .then((result) => {
        console.log(result.data);
        setevent(result.data);
        // console.log(data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div class="container-fluid mt-3">
        <br />
        <h2>View Reservations</h2>
        <h5 class="text-success">Room booking details:</h5>
        <table class="table table-striped table-bordered">
          <thead>
            <br />
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Invoice No</th>
              <th scope="col">Booking Date</th>
              <th scope="col">Ckeck in</th>
              <th scope="col">Check out</th>
              <th scope="col">Contact no</th>
              <th scope="col">Email Id</th>
              <th scope="col">Room Type</th>
              <th scope="col">Number of room</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length >= 0 &&
              data.map((obj) => (
                <tr>
                  <td>{obj.regNo.fname}</td>
                  <td>{obj.invoiceNo}</td>
                  <td>{obj.bookingDate}</td>
                  <td>{obj.inDate}</td>
                  <td>{obj.outDate}</td>
                  <td>{obj.regNo.phoneNumber}</td>
                  <td>{obj.regNo.email}</td>
                  <td>{obj.roomtype}</td>
                  <td>{obj.roomCount}</td>
                  <td>{obj.price}</td>
                  {/* <td>{}</td> */}

                  {/* <td>{obj.phoneNumber}</td> */}
                </tr>
              ))}
          </tbody>
        </table>
        <br />
        <h5 class="text-success">Event booking details:</h5>
        <table class="table table-striped table-bordered">
          <thead>
            <br />
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Invoice No</th>
              <th scope="col">Email Id</th>
              <th scope="col">Event Date</th>
              <th scope="col">Event Name</th>
              <th scope="col">Number of days</th>
              <th scope="col">Number of Guests</th>
              <th scope="col">Price</th>

              {/* <th scope="col">Password</th> */}
            </tr>
          </thead>
          <tbody>
            {event &&
              event.length >= 0 &&
              event.map((obj) => (
                <tr>
                  <td>{obj.regNo.fname}</td>
                  <td>{obj.invoiceNo}</td>
                  <td>{obj.regNo.email}</td>
                  <td>{obj.eventDate}</td>
                  <td>{obj.eventName}</td>
                  <td>{obj.noOfDays}</td>
                  <td>{obj.noOfGuests}</td>
                  <td>{obj.price}</td>
                  {/* <td>{obj.phoneNumber}</td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
