import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../Api";
import '../css/Extra.css';
import { toast } from "react-toastify";

export default function Extra() {
  const [invoice, setInvoice] = useState("");
  const [roomtype, setRoomtype] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [price, setPrice] = useState("");

  const randomNumber = Math.floor(Math.random() * 10000);
  const Id = sessionStorage["Id"];

  useEffect(() => {
    // axios
    //   .get(api.URL + "/Book/getDetailByBookingId/" + Id)
    //   .then((result) => {
    //     console.log(result.data);
    //     const data = result.data;
    //     setInvoice(data.invoiceNo);
    //     setRoomtype(data.roomtype);
    //     setCheckin(data.inDate);
    //     setCheckout(data.outDate);
    //     setPrice(data.price);
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT
    });

    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.BOTTOM_CENTER
    });

    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar'
    });
  
  };

  return (
    <div>
      <h1>Your Bill</h1>
      <br />
      <br />
      <div class="invoice-box">
        <table>
          <tbody>
            <tr class="top">
              <td colspan="2">
                <table>
                  <tbody>
                    <tr>
                      <td class="title"></td>
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
            <tr class="information">
              <td colspan="2">
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
            <tr class="heading">
              <td>Payment Method</td>
              <td>cash/online</td>
            </tr>
            <tr class="heading">
              <td>Details</td>
              <td>Data</td>
            </tr>
            <tr class="item">
              <td>Room Type</td>
              <td>{roomtype}</td>
            </tr>
            <tr class="item">
              <td>Check-in date</td>
              <td>{checkin}</td>
            </tr>
            <tr class="item">
              <td>Check-out date</td>
              <td>{checkout}</td>
            </tr>
            {/* <tr class="item last">
                    <td>Event Charges</td>
                    {/* <td>{billDetails.eventCharges} .RS</td> */}
            {/* </tr> */}
            <tr class="total">
              <td />
              <td>Total: {price} .RS</td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn btn-primary" onClick={notify}>
          Payment
        </button>
       
      </div>
      <br/>
    </div>
  );
}
