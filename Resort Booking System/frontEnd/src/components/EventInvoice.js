import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../Api";
import '../css/Extra.css';
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { clear } from "../slices/authSlice";

export default function Extra() {
  const [invoice, setInvoice] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [noOfGuests, setNoOfGuests] = useState("");
  const [price, setPrice] = useState("");
  function reamovestatus(){
    clear();
    
  }


  const randomNumber = Math.floor(Math.random() * 10000);
  const Id = sessionStorage["Id"];

  useEffect(() => {
    axios
      .get(api.URL + "/event/getEventId/" + Id)
      .then((result) => {
        const data = result.data;
        setInvoice(data.invoiceNo);
        setEventName(data.eventName);
        setEventDate(data.eventDate);
        setNoOfDays(data.noOfDays);
        setPrice(data.price);
        setNoOfGuests(data.noOfGuests);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <h1>Your Bill</h1>
      <br />
      <br />
      <div className="invoice-box">
        <table>
          <tbody>
            <tr className="top">
              <td colSpan="2">
                <table>
                  <tbody>
                    <tr>
                      <td className="title"></td>
                      <td>
                        Invoice #: {invoice}
                        <br />
                        {/* Created: {new Date().toJSON().slice(0,10).replace(/-/g,'/')} */}
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="information">
              <td colSpan="2">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        A/P Murambi,
                        <br />
                        Tal: Igatpuri
                        <br />
                        Nashik, Maharashtra 416116.
                      </td>
                      <td>
                        Wabi Sabi Resorts
                        <br />
                        G7 Group
                        <br />
                        G7@gmail.com
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="heading">
              <td>Payment Method</td>
              <td>cash/online</td>
            </tr>
            <tr className="heading">
              <td>Details</td>
              <td>Data</td>
            </tr>
            <tr className="item">
              <td>Event</td>
              <td>{eventName}</td>
            </tr>
            <tr className="item">
              <td>Event date</td>
              <td>{eventDate}</td>
            </tr>
            <tr className="item">
              <td>Number of day</td>
              <td>{noOfDays}</td>
            </tr>
            <tr className="item">
              <td>Number of Guest</td>
              <td>{noOfGuests}</td>
            </tr>
            {/* <tr className="item last">
              <td>Event Charges</td>
              <td>{billDetails.eventCharges} .RS</td>
            </tr> */}
            <tr className="total">
              <td />
              <td>Total: {price} .RS</td>
            </tr>
          </tbody>
        </table>  
              <Link type="button" class="btn btn-primary" to='/history' onClick={reamovestatus}>
          Payment
        </Link>
      </div>
      <br/>
    </div>
  );
}
