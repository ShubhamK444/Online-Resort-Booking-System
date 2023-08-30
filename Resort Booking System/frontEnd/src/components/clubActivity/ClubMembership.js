import React from "react";
import { Link } from "react-router-dom";

export default function ClubMembership() {
  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width" />
        <title>My web page</title>
        {/* <!-- External Css layout link --> */}
        <link rel="stylesheet" href="layout.css" />
      </head>
      <body />
      {/* <!-- Slider/Corousel start --> */}
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="img-fluid"
                src="\images\club\club4.jpg"
                height={"100%"}
                width={"100%"}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                className="img-fluid"
                src="\images\club\club2.jpg"
                alt="..."
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="carousel-item">
              <img
                className="img-fluid"
                src="\images\club\club1.jpg"
                alt="..."
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="carousel-item">
              <img
                className="img-fluid"
                src="\images\club\club5.jpg"
                alt="..."
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
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
            data-bs-target="#carouselExampleControls"
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
      {/* <!-- Slider/Corousel End  -->

 <!-- Club membership starts --> */}
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h1 style={{ align: "center" }}>Club Membership</h1>
            Being one of the most prestigious resort in Igatpuri, Wabi Sabi appeals
            equally to corporate organizations and businesses as they do to
            individuals, in providing a sophisticated and lavish ambience. At
            our Club, we offer a range of Premium Membership options for
            individuals, couples and family units. We even have a specially
            curated membership for senior citizens at attractive prices. Our
            club members enjoy access to luxury rooms, restaurants, various
            indoor and outdoor activities and privileges. They are also entitled
            to several facilities that form the part of our corporate and MICE
            offerings throughout the year.
          </div>
        </div>
      </div>
      {/* <!-- club membership ends --> */}

      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <img
              className="img-fluid"
              src="https://cdn.utopiahotels.com/assets/images/pages/010familyfitnessstudiomodal-lg.jpg"
              alt=""
            />
          </div>
          <div className="col-xl-6">
            <div style={{ align: "center", padding: "50px" }}>
              <h2>Discover Wabi Sabi Membership Privileges</h2>
              <p>
                At Wabi Sabi we believe that holidays are the investments with
                best returns - happiness, togetherness and discoveries. Our
                membership is such an investment. Sign up to enjoy our
                privileges everytime you holiday with us.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Cards --> */}
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h3 className="card-title">INDOOR GAMES</h3>
                At Wabi Sabi, we have envisaged a space wherein families can knit an unbreakable bond with each other that would resonate throughout their lives. And what better than a competitive chess game or a nail-biting table tennis match. If it’s raining in the monsoons, or sunny out in the day or even too dark late in the night and you can’t step out, we have a great selection of 15+ indoor games that you can enjoy with loved ones.
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h3 className="card-title">OUTDOOR GAMES</h3>
                At Wabi Sabi, we recognize your needs and encourage your desires to enjoy the outdoor and engage in recreational sports. We have open spaces for you to indulge in physical activities by the mountains. At Bliss, we have more than a dozen outdoor activities ensuring that you spend maximum time soaking in the beautiful Mountain View location. Cricket, Football, Basketball, Turn Bal, Volley Bal and more.
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h3 className="card-title">DAY OUTING</h3>
                Wabi-Sabi is a 9-acre landscaped property surrounded by beautiful mountains. At Bliss, we believe in tailoring our offerings as per what our guests demand. We have a influx of guests want to enjoy the delightful weather in Igatpuri within a pleasant and secure environment where they can comfortably spend hours and enjoy delicious food. Our Day Outing package lets you enjoy all the activities at Bliss without booking a room.
                
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h3 className="card-title">MOUNTAIN CAMP</h3>
                Adventures provide a sense of fulfilment and an opportunity to open up. At Touchwood Bliss, we have designed for you an experience of soul Camping for minimum group of 10 campers. Join in and spend your day 2000 ft. above sea level amidst the Igatpuri mountains. You will be engaged and entertained with planned activities and unplanned surprises. We welcome you to be a part of an exciting retreat.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Cards --> */}
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <h5>Important Note :</h5>
            <p>
              *Annual subscription fees to be paid over and above the membership
              fee. *Club reserves the right to modify the membership fee without
              any prior notice.
            </p>
          </div>
        </div>
      </div>
      {/* <!--  --> */}
      {/* </body> */}
    </div>
  );
}
