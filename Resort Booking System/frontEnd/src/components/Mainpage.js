import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Api";
import "../css/mainpage.css";
import { signin } from "../slices/authSlice";

export default function Mainpage() {

  const [interval, setInterval] = useState(3000);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:7090/myapp/api/enquiry/add", data)
      .then((result) => {
        toast.success(result.data, {
           position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
        });
      })
      .catch((err) => {
        // console.log(err.message);
      });
    reset();
  };

  return (
    <div>
      <div className="container ">
     
      <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval={interval}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <hr />
          <h1 id="head">WABI-SABI RESORT</h1>
          <hr />
          <img
            className="img-fluid fluid"
            src="\images\carousel\crw5.jpeg"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <hr />
          <h1 id="head">WABI-SABI RESORT</h1>
          <hr />
          <img
            className="img-fluid fluid"
            src="\images\carousel\crw6.jpeg"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <hr />
          <h1 id="head">WABI-SABI RESORT</h1>
          <hr />
          <img
            className="img-fluid fluid"
            src="\images\carousel\crw3.jpeg"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <hr />
          <h1 id="head">WABI-SABI RESORT</h1>
          <hr />
          <img
            className="img-fluid fluid"
            src="\images\carousel\crw6.jpeg"
            alt="..."
            height={"400px"}
          />
        </div>
      </div>
    </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <h2 class="desc_title relative">Weddings & Celebrations</h2>
            <hr class="relative"></hr>
            <p class="desc_text relative ">
              A wedding ceremony is all about celebrating the love and passion
              you share with your partner. From initial preparations to tying
              the knot, weddings involve planning and perfection. At The
              Wabi-Sabi Resort &amp; Club, we will make sure that everything is
              well thought-out for your dream wedding.{" "}
            </p>
            <Link to="/wedding">
              <img
                id="img"
                src="\images\carousel\wedding.webp"
                height={"400px"}
                width={"500px"}
              ></img>
            </Link>
          </div>
          <div className="col-xl-6">
            {/* <p class="desc_text relative ">Nature Inspired Celebrations</p> */}
            <Link to="/birthday">
              <img
                id="img"
                src="\images\carousel\birthday.jpeg"
                height={"400px"}
              ></img>
            </Link>
            <br></br>
            <br></br>
            <p class="desc_text relative ">
              From birthday parties to receptions, from celebration parties to
              anniversaries we are there to give you your perfect day.{" "}
            </p>
            <hr class="relative"></hr>
            <h2 class="desc_title relative">Intimate Gatherings</h2>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h2 class="desc_title relative">Rooms and Luxuries</h2>
          <hr class="relative"></hr>

          <div className="row">
            <div className="col-xl-3">
              <p align="center" class="desc_text relative room_type ">
                Tent Room
              </p>
              <Link to="/tentR">
                <img
                  id="img"
                  src="\images\room\tent.jpg"
                  height={"400px"}
                  width={"250px"}
                ></img>
              </Link>
            </div>

            <div className="col-xl-5">
              <p align="center" class="desc_text relative room_type">
                Superior Room
              </p>
              <Link to="/ClassicR">
                <img
                  id="img"
                  src="\images\room\exicutive.jpg"
                  height={"400px"}
                  width={"420px"}
                ></img>
              </Link>
            </div>

            <div className="col-xl-4">
              <p align="center" class="desc_text relative room_type">
                Executive Room
              </p>
              <Link to="/ExecutiveR">
                <img
                  id="img"
                  width={"410px"}
                  src="\images\room\room.jpg"
                  height={"400px"}
                ></img>
              </Link>
            </div>
          </div>
          {/* <div className="col">
              <h3>Membership</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              doloribus iusto doloremque ad cum nobis et quaerat rerum soluta
              rem pariatur eligendi inventore quos cumque a quibusdam, id quasi
              placeat!
            </div> */}
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h2 class="desc_title relative">Other Facilities</h2>
          <hr class="relative"></hr>
          <div className="col-xl-3">
            <p class="desc_text relative room_type"></p>
            <br></br>
            <br></br>
            <p className="faci">Convinient Facilities at your Wabi Sabi</p>
          </div>

          <div className="col-xl-3">
            <p class="desc_text relative room_type">SPA</p>
            <img
              id="img"
              src="\images\extra\spa.jpg"
              height={"400px"}
              width={"270px"}
            ></img>
          </div>
          <div className="col-xl-3">
            <p class="desc_text relative room_type">Mini Theater</p>
            <img
              id="img"
              src="\images\club\miniTheater.jpg"
              height={"400px"}
              width={"270px"}
            ></img>
          </div>
          <div className="col-xl-3">
            <p class="desc_text relative room_type">Kids Activity Room</p>
            <img
              id="img"
              src="\images\club\KidsActivityRoom.jpg"
              height={"400px"}
              width={"270px"}
            ></img>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <br />
          <br />
          <h2 class="desc_title relative"> Dining </h2>
          <hr class="relative"></hr>

          <div className="col-xl-4">
            <img
              id="img"
              src="\images\extra\menu1.jpg"
              height={"400px"}
              // width={"500px"}
            ></img>
          </div>
          <div className="col-xl-3">
            <img
              id="img"
              src="\images\extra\menu2.jpg"
              height={"400px"}
              // width={"500px"}
            ></img>
          </div>
          <div className="col-xl-3">
            <img
              id="img"
              src="\images\extra\menu3.jpg"
              height={"400px"}
              // width={"500px"}
            ></img>
          </div>
          <div className="col-xl-2">
            <p>
              The Wabi Sabi multi-cuisine pure veg restaurant is renowned for
              its exquisite spread of dishes and culinary treats, immaculate
              service and unwavering taste. Our specially curated four-course
              meals amidst the bounties of natural sweetness. It’s only fair to
              the whole essence of the trip that the food you eat is as green as
              the scenic layout before your eyes.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        {/* <h3 class="desc_title relative">Weddings and Celebrations</h3> */}

        <div className="row">
          <h2 class="desc_title relative">Nearby Destinations</h2>
          <hr class="relative"></hr>
          <div className="col-xl-3">
            <p class="desc_text relative ">
              <h2 align="center" className="dest">
                Trimbakeshwar
              </h2>
            </p>
            <img
              id="img"
              src="\images\extra\trambak.jpg"
              height={"300px"}
              width={"250px"}
            ></img>
          </div>
          <div className="col-xl-3">
            <p class="desc_text relative ">
              <h2 align="center" className="dest">
                Harihar Fort
              </h2>
            </p>
            <img
              id="img"
              src="\images\extra\harihar.jpg"
              height={"300px"}
              width={"250px"}
            ></img>
          </div>
          <div className="col-xl-3">
            <p class="desc_text relative dest">
              <h2 align="center" className="dest">
                Saptashrungi
              </h2>
            </p>
            <img
              id="img"
              src="\images\extra\saptshrungi.jpg"
              height={"300px"}
              width={"250px"}
            ></img>
          </div>
          <div className="col-xl-3">
            <p class="desc_text relative ">
              <h2 align="center" className="dest">
                Harishchandra Fort
              </h2>
            </p>
            <img
              id="img"
              src="\images\extra\nature.jpg"
              height={"300px"}
              width={"250px"}
            ></img>
          </div>
        </div>
        <hr></hr>
      </div>
      <br />
      <footer className="footer" />
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <h3 class="desc_title relative">Google Map</h3>
            <hr class="relative"></hr>
            <p class="desc_text relative ">
             Murambi, Igatpuri Nashik 416116 
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.698513922056!2d73.63650391418159!3d19.85270553225862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd8d3a9975f549%3A0x43e791e38e708b2!2sWabi-Sabi%20Resort!5e0!3m2!1sen!2sin!4v1677699801602!5m2!1sen!2sin"
              width={"500px"}
              height={"200px"}
              style={{ border: "10px" }}
              id="img"
              // style={{ }}
              allowFullScreen=""
              loading="lazy"
            />
            {/* </div> */}

            <br />
          </div>

          <div className="col-xl-6">
            {/* <br/>/ */}
            <h3 class="desc_title relative">Enquiry Now</h3>
            <hr class="relative"></hr>
            {/* <p class="desc_text relative ">Shivajinagar, Pune, Maharashtra 411053</p> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-xl-6">
                  <label for="name">Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Name"
                    id="img"
                    {...register("name", {
                      required: true,
                      pattern: /^[a-zA-Z ]+$/,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert" class="text-danger">
                      *required
                    </p>
                  )}
                  {errors.name?.type === "pattern" && (
                    <p role="alert" class="text-danger">
                      *required
                    </p>
                  )}

                  <br />
                  <label for="emailAddress">Email</label>
                  <br />
                  <input
                    id="img"
                    type=""
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p role="alert" class="text-danger">
                      *required
                    </p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p role="alert" class="text-danger">
                      Invalid Email
                    </p>
                  )}
                  <br />
                  <label for="mobileNo">Mobile Number</label>
                  <br />
                  <input
                    id="img"
                    type="text"
                    placeholder="+9100000000"
                    {...register("mobileNo", {
                      required: true,
                      pattern: /^[0-9+-]+$/,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />
                  {errors.mobileNo?.type === "required" && (
                    <p role="alert" class="text-danger">
                      *required
                    </p>
                  )}
                  {errors.mobileNo?.type === "pattern" && (
                    <p role="alert" class="text-danger">
                     Invalid Mobile Number
                    </p>
                  )}
                  {errors.mobileNo?.type === "minLength" && (
                    <li role="alert" class="text-danger">
                    Invalid Mobile Number
                    </li>
                  )}
                  {errors.mobileNo?.type === "maxLength" && (
                    <p role="alert" class="text-danger">
                    Invalid Mobile Number
                    </p>
                  )}
                </div>
                <div className="col-xl-4">
                 <label for="mobileNo">Message</label>
                  <textarea
                    name="message"
                    type="text"
                    className="form-controler"
                    id="img"
                    cols="25"
                    rows="4"
                    placeholder="Message"
                    {
                      ...register("message")
                      // , {
                      //   required: true,
                      //   pattern: /^[0-9+-]+$/,
                      //   minLength: 6,
                      //   maxLength: 12,
                    }
                  />
                  {errors.message?.type === "required" && (
                    <li role="alert" class="text-danger">
                      mobile number is not valid
                    </li>
                  )}
                </div>
              </div>
              <br />
              <button
                className="btn btn-btn btn-primary"
                id="img"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
