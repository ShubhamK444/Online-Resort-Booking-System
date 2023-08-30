import React from "react";
import axios from "axios";
import api from "../Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export default function ShowProduct() {
  // const navgate=Navigate();
  var [data, setdata] = useState([]);
  var [event, setevent] = useState([]);
  const regNo = sessionStorage["regNo"];

  useEffect(() => {
    axios
      .get(api.URL + "/Book/getbooking/"+regNo)
      .then((result) => {
        // console.log(result);
       
        // alert('Booking Deleted');
      
        setdata(result.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(api.URL + "/event/getEvent/"+regNo)
      .then((result) => {
        console.log("succsed");
        console.log(result);
        setevent(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deletedR(e) {
    axios
    .delete(api.URL+"/Book/deletebooking/"+e)
    .then((result) => {
      console.log("deleted");
      toast.error("booking canceled !", {
         position: toast.POSITION.TOP_CENTER,autoClose: 1000 
      });
      setTimeout(() => {
        
        window.location.reload();
      }, 2000);
      
    })
    .catch((err) => {
      console.log(err);
    });
  }
 
  function deletedE(e) {
    axios
    .delete(api.URL+"/event/deleteEvent/"+e)
    .then((result) => {
      console.log("deleted event");
      console.log(result);
      toast.error("booking canceled !", {
         position: toast.POSITION.TOP_CENTER,autoClose: 1000 
      });
      setTimeout(() => {
        
        window.location.reload();
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <br />
      <h3>Room booking details:</h3>
      <br />
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Booking Date</th>
            <th scope="col">Ckeck in</th>
            <th scope="col">Check out</th>
            <th scope="col">Room Type</th>
            <th scope="col">Number of room</th>
            <th scope="col">Price</th>
            <th scope="col">Cancel Booking</th>

            {/* <th scope="col">Password</th> */}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length >= 0 &&
            data.map((obj) => {
              return (
                <tr>
                  <td>{obj.bookingDate}</td>
                  <td>{obj.inDate}</td>
                  <td>{obj.outDate}</td>
                  <td>{obj.roomtype}</td>
                  <td>{obj.roomCount}</td>
                  <td>{obj.price}</td>

                  <td>
                    <div className="row">
                      <div className="col-xl-4">
                        {
                          <Link
                            to="#"
                            onClick={() => deletedR(obj.Id)}
                            class="btn btn-danger"
                          >
                            Cancel
                          </Link>
                        }
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <br />
      </table>

      <h3>Event booking details:</h3>
      <br />
      <table class="table table-striped table-bordered">
        <thead>
          <br />
          <tr>
            <th scope="col">Event Date</th>
            <th scope="col">Event Name</th>
            <th scope="col">Number of days</th>
            <th scope="col">Number of Guests</th>
            <th scope="col">Price</th>
            <th scope="col">Cancel Booking</th>
          </tr>
        </thead>
        <tbody>
          {event &&
            event.length >= 0 &&
            event.map((obj) => {
              return (
                <tr>
                  <td>{obj.eventDate}</td>
                  <td>{obj.eventName}</td>
                  <td>{obj.noOfDays}</td>
                  <td>{obj.noOfGuests}</td>
                  <td>{obj.price}</td>
                  <td>
                    <div className="row">
                      <div className="col-xl-3">
                        {
                          <Link
                            to="#"
                            onClick={() => deletedE(obj.Id)}
                            class="btn btn-danger"
                          >
                            Cancel
                          </Link>
                        }
                      </div>

                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
