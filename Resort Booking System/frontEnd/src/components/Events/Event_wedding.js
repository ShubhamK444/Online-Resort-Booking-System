import React from "react";
import { useState } from "react";
import "../../css/room.css";
import axios from "axios";
import api from "../../Api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Booking } from "../../slices/authSlice";
import { toast } from "react-toastify";

export default function Event_wedding() {
  const [eventName, setEventName] = useState();
  const [eventDate, setEventDate] = useState();
  const [noOfDays, setNoOfDays] = useState();
  const [noOfGuests, setNoOfGuests] = useState();

  // to get state send by the previous screen using useNavigate
  const navigate = useNavigate();
  const regNo = sessionStorage["regNo"];
  const invoiceNo = Math.floor(Math.random() * 10000);
  const dispatch = useDispatch();

  function proceedBooking() {
    let x = parseInt(noOfDays) * 100000 + parseInt(noOfGuests) * 220;
    const price = x;
    const body = {
      eventName,
      eventDate,
      noOfDays,
      noOfGuests,
      invoiceNo,
      price,
      dummyId: regNo,
      regNo,
    };
    console.log(api.URL + "/event/book/" + regNo);

    axios
      .post(api.URL + "/event/book/" + regNo, body, {})

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
        setTimeout(() => {
          toast.error("please login", {
             position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
          });
          
        }, 1000);
        console.log(`error ${error}`);
      });
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <h2>Wedding</h2>

            <p>
              Perched up a hillock & spread over 25 acres of lush green terrain,
              The Corinthians Resort & Club offers the discerning “destination
              wedding seeker”, a plu-perfect setting both indoors and outdoors,
              to accommodate around 250 to 3500 guests. <br />
              Nothing beats the Corinthians Resort for sheer pageantry glamour
              of ambience, making it one of the loveliest wedding venues in the
              world! <br />
              Whether it is a wedding, conference, or a banquet, this five star
              resort in South Pune has the capability to turn any event into a
              successful affair for the host and a pleasurable experience for
              the guests. Come and witness a delightful evening away from the
              hustle and bustle, a sprawling garden with flora and fauna spread
              across the property. <br />
              It’s a private sanctuary, in the south of the city, a place where
              you can unwind in the natural environment. It has an ambience
              where you feel totally relaxed. We have a dedicated team who
              arranges for interactions with other vendors such as local
              designers, wedding planners, mehendi artists and band organizers.
              At Corinthians resort, we try to give them an experience rather
              than just a comfortable stay. <br />
              The terrace, gardens and lawns of this prestigious resort can be
              easily adapted as per the requirements of the host for theme
              wedding celebrations. <br />
              Nuances of the finest selection of Rajasthani, Gujarati, North
              Indian, South Indian, Chinese and Continental cuisines are
              available for catering to special events.
              <br />
              Plan an elegant, intimate and memorable wedding in the serene
              environs of Corinthians away from the chaos of everyday life.{" "}
              <br />
            </p>
          </div>
          <div className="col-xl-7">
            <div className="row">
              <div className="container">
                <img
                  style={{ height: "400px", width: "100%" }}
                  src="images\event\wedding.jpg"
                  alt=""
                  id="rr2"
                />
              </div>
            </div>
            <div className="row">
              <div className="container">
                <br />
                <img
                  style={{ height: "480px", width: "100%" }}
                  src="images\event\wedding2.jpg"
                  alt=""
                  id="rr2"
                />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <img
                style={{ height: "650px", width: "100%" }}
                 src="https://www.thecorinthianspune.com/new-img/wedding-gallery-3.jpg"
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
                <option value="Wedding">Wedding</option>
                <option value="Mehandi">Mehandi</option>
                <option value="Sangeet">Sangeet</option>
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
              <label>Number of days </label>
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
