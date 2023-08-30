import React from "react";
import { Link } from "react-router-dom";

export default function ExecutiveRoom() {
  return (
    <div>
      <body>
        {/* <!-- head image starts --> */}
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <h1 style={{ align: "center" }}>Executive Room</h1>
            </div>
          </div>
        </div>

        {/* <!--  --> */}
        <br />
        <div class="container">
          <div class="row">
            <div class="col-xl-8">
              <img
                class="img-fluid"
                src="images\room\exicutive.jpg"
                style={{ height: "86%", width: "100%" }}
                id="rr2"
                alt=""
              />
            </div>

            <div class="col-xl-4">
              <table>
                <tr>
                  <img
                    class="img-fluid"
                    src="images\room\exicutive2.jpg"
                    id="rr2"
                    alt=""
                  />
                </tr>
                <tr>
                  <br />
                  <img
                    class="img-fluid"
                    src="images\room\exicutive1.jpg"
                    alt=""
                    id="rr2"
                  />
                </tr>
              </table>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xl-8">
                  <br />
                  <h2> EXECUTIVE ROOM </h2>
                  <p>
                    Designed with wooden interiors and subtle hues, the
                    Executive Suites at The Corinthians Resort & Club exude
                    luxury. With no compromise on offering you utmost comfort,
                    we’ve made sure that you get to experience contemporary
                    amenities. Whether you’re here for a vacation with the
                    family or your partner, we’ll serve you with all the
                    necessary services and our team is always at your beck and
                    call to make sure you experience nothing but perfection.
                    Inclusions: Buffet Breakfast, Wi-Fi, 15% on SPA, 50% on
                    SALON, Fruits Platter, Handmade exotic chocolates, Cheese
                    Straws, Assorted macroons.
                  </p>
                  <Link href="#" class="btn btn-primary"  to="booking">
                    Book Now
                  </Link>
                  <br />
                </div>
                <div class="col-xl-12">
                  <h2>Other rooms</h2>
                </div>
                <div class="col-xl-6">
                  <img
                    class="img-fluid"
                    id="rr1"
                    src="images\room\classic1.jpg"
                    alt=""
                  />
                  <h4 style={{ align: "center" }}> Superior Room</h4>
                  <Link href="#" class="btn btn-primary"  to="booking">
                    Book Now
                  </Link>
                </div>
                <div class="col-xl-6">
                  <img
                    class="img-fluid"
                    src="images\room\tent1.png"
                    id="rr1"
                    alt=""
                  />
                  <h4 style={{ align: "center" }}> Tent Room</h4>
                  <Link href="#" class="btn btn-primary"  to="booking">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <br />
      <br />
      <br />
    </div>
  );
}
