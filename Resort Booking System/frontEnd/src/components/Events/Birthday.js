import React from "react";
import { useState } from "react";

import "../../css/room.css";
import axios from "axios";
import api from "../../Api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Booking } from "../../slices/authSlice";
import { toast } from "react-toastify";

export default function () {
  const [eventName, setEventName] = useState();
  const [eventDate, setEventDate] = useState();
  const [noOfDays, setNoOfDays] = useState();
  const [noOfGuests, setNoOfGuests] = useState();
  const dispatch = useDispatch();

  // to get state send by the previous screen using useNavigate
  const navigate = useNavigate();
  const regNo = sessionStorage["regNo"];
  console.log("ggg=" + regNo);
  const invoiceNo = Math.floor(Math.random() * 10000);

  function proceedBooking() {
    let x = parseInt(noOfDays) * 50000 + parseInt(noOfGuests) * 200;
    const price = x;
    const body = {
      eventName,
      eventDate,
      noOfDays,
      invoiceNo,
      noOfGuests,
      price,
      dummyId:regNo,
      regNo,
    };
    console.log(api.URL + "/event/book/" + regNo);

    axios
      .post(api.URL + "/event/book/" + regNo, body, {
        headers: sessionStorage["token"],
      })

      .then((response) => {
        const result = response.data;

        toast.success("Booking Done Successfully", {
           position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
        });
        setTimeout(() => {
          dispatch(Booking(result));
          navigate("/EventInvoice");
        }, 1000);
      })
      .catch((error) => {
        toast.error("please login", {
           position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
        });
        console.log(`error ${error}`);
      });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <h2>Other Events</h2>

            <p>
              The Wabi Sabi is one of the premier, much sought-after
              destinations for Birthday parties, corporate event and off-site
              day picnics. The diverse venues available here are designed to
              conduct birthday events in the most funny atmosphere alongside the
              best recreational activities such as football, cricket, swimming
              pool, and outdoor & . There are various venues to cater to large
              scale meetings as well as moderate to smaller group meets. At
              Anonymous, our dedicated professional team will assist you to plan
              and conduct events from start to finish.
            </p>
          </div>
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-6">
                <div className="container">
                  <img
                    style={{ height: "400px", width: "100%" }}
                    src="images\event\other.jpg"
                    alt=""
                    id="rr2"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="container">
                  <img
                    style={{ height: "400px", width: "100%" }}
                    src="images\event\other2.jpg"
                    alt=""
                    id="rr2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <img
                style={{ height: "450px", width: "100%" }}
                src="images\event\other1.jpg"
                alt=""
                id="rr2"
              />
            </div>
            <br />
            <hr />
          </div>
        </div>
        {/* <!-- Arstical start --> */}
        <h3 className="text-center my-5">
          What kind of event do you want to host ?
        </h3>
        <div>
          <div className="row">
            <div className="col-xl-4">
              <label>Select an event</label>
              <select
                id=""
                type="text"
                name="eventName"
                className="form-control"
                placeholder="Name"
                onChange={(event) => {
                  setEventName(event.target.value);
                }}
              >
                <option value="">Select an event</option>
                <option value="Birthday">Birthday</option>
                <option value="New year">New year</option>
                <option value="Sceenings">Sceenings</option>
                <option value="other">other</option>
                value={eventName}
              </select>
            </div>

            <div className="col-xl-4">
              <label>Number of Guest</label>
              <input
              placeholder="maximum 200"
                onChange={(event) => {
                  setNoOfGuests(event.target.value);
                }}
                className="form-control"
                type="number"
              />
            </div>
            <div className="col-xl-4">
              <label>Number of days</label>
              <input
                onChange={(event) => {
                  setNoOfDays(event.target.value);
                }}
                className="form-control"
                type="number"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <br />
              <label>Event day</label>
              <input
                onChange={(event) => {
                  setEventDate(event.target.value);
                }}
                className="form-control"
                type="date"
              />
            </div>

            <div className="col-xl-6">
              <br />
              <br />
              <button className="btn btn-success" onClick={proceedBooking}>
                Complete
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
