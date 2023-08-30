import React from "react";
import { useState} from "react";
import "../../css/room.css";
import axios from "axios";
import api from "../../Api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Booking } from "../../slices/authSlice";
import { toast } from "react-toastify";


export default function Event_Conference() {
  const [eventName, setEventName] = useState();
  const [eventDate, setEventDate] = useState();
  const [noOfDays, setNoOfDays] = useState();
  const [noOfGuests, setNoOfGuests] = useState();
  const invoiceNo = Math.floor(Math.random() * 10000);
  const dispatch = useDispatch();




  // to get state send by the previous screen using useNavigate
  const navigate = useNavigate();
  const regNo = sessionStorage["regNo"];

  function proceedBooking() {
    let x = parseInt(noOfDays) * 30000 + parseInt(noOfGuests) * 200;
    const price = x;
    const body = {
      eventName,
      eventDate,
      noOfDays,
      noOfGuests,
      invoiceNo,
      price,
      dummyId:regNo,
      regNo,
    };
    console.log(body);

    axios
      .post(api.URL + `/event/book/${regNo}`, body, {
        headers: { Authorization: "Bearer " + sessionStorage["token"] },
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
          <h2>CONFERENCES</h2>

          <p>
            The Corinthians Resort and Club is one of the premier, much
            sought-after destinations for residential conferences, corporate
            events, team building activities and off-site day picnics. The
            diverse venues available here are designed to conduct business
            events in the most professional atmosphere alongside the best
            recreational activities such as football, cricket, swimming pool,
            and outdoor & . There are various venues to cater to large scale
            meetings as well as moderate to smaller group meets. At Corinthians,
            our dedicated professional team will assist you to plan and conduct
            events from start to finish, so you can easily concentrate on
            achieving the objectives of your conference.
          </p>
        </div>

        <div className="row">
          <div className="col-xl-6">
            <img
              style={{ height: "350px", width: "600px" }}
              src="images\event\other4.png"
              alt=""
              id="rr2"
            />
            <br />
            <br />
          </div>

          <div className="col-xl-6">
            <img
              style={{ height: "350px", width: "600PX" }}
              src="images\event\other.jpg"
              alt=""
              id="rr2"
            />
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
                <option value="Peace_conference">Peace conference</option>
                <option value="Press_or_news_conference">Press or news conference</option>
                <option value="Authors_conference">Authors_conference</option>
                <option value="other">other</option>
                value={eventName}
              </select>
            </div>

            <div className="col-xl-4">
              <label>Number of Guest</label>
              <input
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
    </div>
  );
}
