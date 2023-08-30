import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Booking } from "../../slices/authSlice";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

// Add this in your component file

// window.React2 = require('react')

const BookRoom = () => {
  const [roomCategory, setRoomCategory] = useState("null");
  const [bookingDate, setBookingDate] = useState();
  const [roomCount, setRoomCount] = useState();
  const [inDate, setInDate] = useState();
  const [outDate, setOutDate] = useState();
  const [roomP, setRoomP] = useState();
  const [roomtype, setRoomtype] = useState("");
  const [massage, setmassage] = useState();
  const [Error, setError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const current = new Date();
    const today = `${current.getFullYear()}-${(current.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${current.getDate().toString().padStart(2, "0")}`;
    setBookingDate(today);
  }, []);
  const { reset } = useForm();

  // to get state send by the previous screen using useNavigate
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const regNo = sessionStorage["regNo"];

  const date1 = new Date(inDate);
  const date2 = new Date(outDate);

  const diffInMs = Math.abs(date2 - date1);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const invoiceNo = Math.floor(Math.random() * 10000);

  // grab the roomType,roomCost
  function proceedBooking() {
    if (isNaN(bookingDate.length)) {
      toast.error("Enter the Booking Date", {
         position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
      });
    } else if (isNaN(inDate.length)) {
      toast.error("Enter the In Date", {
         position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
      });
    } else if (isNaN(outDate.length)) {
      toast.error("Enter the Out Date", {
         position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
      });
    } else if (roomCount.length === 0) {
      toast.error("Enter the Room Count", {
         position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
      });
    } else if (date1 >= date2) {
      toast.error("Please enter a valid check-in and check-out date!", {
         position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
      });
    }else if(roomCount>=5){toast.error("You can book maximum 5 room at time", {
      position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
   });

    } else {
      // make an api call to perform booking
      var price = parseInt(roomP) * parseInt(roomCount) * parseInt(diffInDays);
      var body = {
        bookingDate,
        inDate,
        outDate,
        roomCount,
        regNo,
        roomtype,
        price,
        invoiceNo,
        dummy: regNo,
        roomCategory: {
          roomCategory: roomCategory,
        },
      };
      reset();
      Math.abs(inDate - outDate);
      axios
        .post(api.URL + "/Book/" + regNo + "/", body)

        .then((response) => {
          toast.success("Successfully booked !", {
             position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
          });
          const result = response.data;

          setTimeout(() => {
            dispatch(Booking(result));
            navigate("/invoice");
          }, 1000);
        })
        .catch((error) => {
          toast.error("please login", {
             position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
          });
          console.log(`error ${error}`);
        });
    }
  }

  return (
    <>
      <div id="registerForm">
        <br></br>
        <div className="container">
          <h1 className="text-primary  text-center">Book a Room </h1>
          <br />
          <br />
          <div className="row">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://www.kayak.com/rimg/himg/96/eb/54/hotelsdotcom-1120794912-8ef947ab_w-184511.jpg?width=1366&height=768&xhint=1000&yhint=779&crop=true"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Tent Room</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.stjameshotelandclub.com/fileadmin/_processed_/b/1/csm_hotels_with_terraces_london_2_9e19d85a73.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Superior Room</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/12/2016/02/09120423/Pullman-Executive-Room-King-Bed-1.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Executive Room</h5>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center my-5">Enter booking details !!!</h3>
        <div>
          <div className="row">
            <div className="col-xl-4">
              <label>Check-In Date:</label>
              <input
                onChange={(event) => {
                  setInDate(event.target.value);
                }}
                className="form-control"
                type="date"
              />
            </div>

            <div className="col-xl-4">
              <label>Check-Out Date:</label>
              <input
                onChange={(event) => {
                  setOutDate(event.target.value);
                }}
                className="form-control"
                type="date"
              />
            </div>
            <div className="col-xl-4">
              <label>Number of Rooms</label>
              <input
              placeholder="maximum 5 room book at time"
                onChange={(event) => {
                  setRoomCount(event.target.value);
                }}
                className="form-control"
                type="number"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <br />
              <label> Room Type: </label>
              <select
                className="form-select"
                id="room-type"
                name="roomtype"
                onChange={(event) => {
                  setRoomtype(event.target.value);
                  if (event.target.value == "TENT_ROOM") {
                    setRoomCategory(1001);
                    setRoomP(5000);
                  } else if (event.target.value == "SUPERIOR_ROOM") {
                    setRoomCategory(1002);
                    setRoomP(7000);
                  } else if (event.target.value == "EXECUTIVE_ROOM") {
                    setRoomCategory(1003);
                    setRoomP(10000);
                  }
                }}
                value={roomtype}
              >
                <option hidden value="null">
                  Select type
                </option>
                <option value="TENT_ROOM">Tent Room</option>
                <option value="SUPERIOR_ROOM">Superior Room</option>
                <option value="EXECUTIVE_ROOM">Executive Room</option>
              </select>
            </div>

            <div className="col-xl-6">
              <br />
              <br />
              <button className="btn btn-success" onClick={proceedBooking}>
                Complete
              </button>
              <br />
              <p className="text-danger">{massage}</p>
              <p className="text-danger">{Error}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookRoom;
