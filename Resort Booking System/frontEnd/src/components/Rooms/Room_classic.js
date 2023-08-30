import React from "react";
import { Link } from "react-router-dom";

export default function Room_classic() {
  return (
    <div>
      <body>
        {/* <!-- head image starts --> */}

        {/* <!-- head image ends -->
    <!-- Room starts --> */}
        <br />
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <h1 style={{ align: "center" }}>SUPERIOR ROOM</h1>
            </div>
          </div>
        </div>

        {/* <!--  --> */}
        <br />
        <div class="container">
          <div class="row">
          <div class="row" style={{height:"700px"}}>
            <div class="col-xl-8">
              <img
                class="img-fluid"
                src="images\room\classic3.jpg"
                style={{ height: "72%", width: "100%" }}
                id="rr2"
                alt=""
              />
            </div>

            <div class="col-xl-4">
              <table>
                <tr>
                  <img
                    class="img-fluid"
                    src="images\room\classic2.jpg"
                    id="rr2"
                    alt=""
                  />
                </tr>
                <tr>
                <br/>
                  <img
                    class="img-fluid"
                    src="images\room\classic1.jpg"
                    alt=""
                    id="rr2"
                  />
                </tr>
              </table>
            </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xl-8">
                  <br />
                  <h2>Superior Room</h2>
                  <p>
                    The Superior Room offer State Of The Art modern amenities.
                    These luxurious furnished rooms have an attached bathroom
                    with a separate shower cubicle. Each of these
                    air-conditioned rooms are available in hardwood LVT flooring
                    providing great elegance and grace to the rooms.
                    <strong>
                      Inclusions:Buffet Breakfast, Wi-Fi, Cut Fruits Platter
                      served on request.
                    </strong>
                  </p>
                  <Link class="btn btn-primary" to="booking">
                    Book Now
                  </Link>
                  <br />
                  <br />
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              Room Features
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse "
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <div class="row">
                                <div class="col-xl-4">
                                  <h5>Beds and Beddings</h5>
                                  <ul>
                                    <li>Maximum Occupancy: 2+1</li>
                                    <li>Double or Twin Bed</li>
                                    <li>
                                      Mattress available (as per availability)
                                    </li>
                                    <li>
                                      Crib For Infant (as per availability)
                                    </li>
                                    <li>
                                      Pillowtop Mattress, Spring Bed and Duvet
                                    </li>
                                  </ul>
                                </div>
                                <div class="col-xl-4">
                                  <h5>Room Features</h5>
                                  <ul>
                                    <li>
                                      Smoking / Non-Smoking Rooms available
                                    </li>
                                    <li>Air-conditioned</li>
                                    <li>Remote Control Fan</li>
                                    <li>
                                      Connecting rooms available (as per
                                      availability)
                                    </li>
                                    <li>Wardrobe</li>
                                    <li>Safety Locker</li>
                                    <li>Free High-Speed Wi-Fi</li>
                                    <li>32” LCD TV</li>
                                    <li>Shower Cubical</li>
                                    <li>
                                      2 Bottled Water, Complimentary per day
                                    </li>
                                    <li>Complimentary Tea/Coffee Maker</li>
                                    <li>Mini Bar</li>
                                  </ul>
                                </div>
                                <div class="col-xl-4">
                                  <h5>Resort Services & Amenities</h5>
                                  <ul>
                                    <li>24 Hour Room Service</li>
                                    <li>Evening Turndown Servic</li>
                                    <li>Housekeeping service daily</li>
                                    <li>
                                      Newspaper Delivered To Room On Request
                                    </li>
                                    <li>Wakeup Calls</li>
                                    <li>Laundry Services</li>
                                    <li>
                                      Use of our Gymnasium with guidance and
                                      supervision of our fitness instructor
                                    </li>
                                    <li>Use of Business center</li>
                                    <li>Complimentary Valet Parking</li>
                                    <li>
                                      Pickup and Drop services ( fee as per
                                      actual)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingTwo">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Resort Policies
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <strong>CHECK IN – CHECK OUT POLICY:</strong>{" "}
                              Check-in time is 2:00 pm and Check-out time is 12
                              noon. Early check-in and late check-out will be
                              subject to availability and additional charges
                              will apply. <br />
                              <strong>
                                IDENTIFICATION (ID) : REGISTRATION POLICY:{" "}
                              </strong>
                              According to government regulations, a valid Photo
                              ID has to be carried by every person above the age
                              of 18 staying at the hotel. The identification
                              proofs accepted are Driver’s License, Voters Card,
                              Passport, Ration Card, Aadhar Card, PAN Card.
                              Without valid ID the guest will not be allowed to
                              check in. <br />
                              <strong>ADVANCE & DEPOSIT POLICY:</strong>
                              The hotel will collect 100% advance amount of the
                              proposed number of room night stays upon check in.
                              The Hotel also reserves the right, to charge a
                              “Pre Authorization” on the Credit Card towards
                              extras. 50% of the total amount may be charged any
                              time after booking. Any change in taxes and/or any
                              other levies/charges/ fees will be chargeable
                              extra, as prevalent during the stay. All
                              reservations, either on a Regular or a Restricted
                              Rate must be guaranteed by a valid credit card.{" "}
                              <br />
                              <strong>CHILDREN POLICY:</strong> A child up to 6
                              years stays free in parent's room when using
                              existing bed(s) in room. A child aged 6 years and
                              older is fully charged as an extra adult. <br />
                              <strong>EXTRA BED POLICY:</strong>
                              Requirement of an extra bed will be treated as a
                              third occupancy. BREAKFAST BUFFET POLICY: Timing:
                              7.30 am to 10.30 am. The breakfast buffet will be
                              removed at 10.30 am sharp. Kindly ensure you are
                              in time to avoid disappointment. Breakfast ordered
                              after 10.30am will be charged as per order. <br />
                              <strong>
                                BILLS SETTLEMENT AND PAYMENT POLICY:
                              </strong>{" "}
                              Bills must be settled upon presentation by cash or
                              credit card. Personal cheques are not accepted.{" "}
                              <br />
                              <strong>CANCELLATION POLICY: </strong> <br /> •
                              Room bookings made by the Resort’s Reservation can
                              be cancelled or modified up to 48HRS before of
                              arrival, no fee will be charged. If cancelled or
                              modified later or in case of no slow 100%
                              retention will be charged. <br /> • The attrition
                              and cancellation policy for Weddings/ Social
                              Events will be applicable for Volume / Bulk room
                              bookings confirmed with advance, vide the Banquet
                              Sales Department. <br />
                              <strong>MID STAY CANCELLATION:</strong> In case
                              you decide to shorten your stay post the check-in
                              date, no refund is applicable on the booking.{" "}
                              <br />
                              <strong>VISITORS POLICY:</strong>
                              Visitors are not permitted into the Room zones
                              and/or rooms after 20.00 Hrs. If any visitor has
                              come to meet room guest, the meeting should be
                              done in the public areas such as coffee shop /
                              restaurant / Lobby etc. <br />
                              <strong>MANAGEMENT RIGHTS:</strong>
                              Should any action by a guest be deemed
                              inappropriate by the hotel, or if any
                              inappropriate behavior is brought to the attention
                              of the hotel, the hotel reserves the right, after
                              the allegations have been investigated, to take
                              action against the guest. <br />
                              <strong>DAMAGE TO PROPERTY:</strong> Guests will
                              be held responsible for any loss or damage to the
                              hotel property caused by themselves, their friends
                              or visitors or for any person for whom they are
                              responsible. The Hotel also reserves the right to
                              call the Local Police Station in case of guests
                              refusing to pay for the damage. Guests shall keep
                              the Hotel room in a good condition and maintain
                              hygiene and cleanliness. <br />
                              <strong>SECURITY POLICY:</strong> The Hotel
                              reserves the right to pass on guest information to
                              Police and or any other Investigating Parties. All
                              guests are to allow their baggage to be checked by
                              guards/scanner machines at check in - check out
                              time. The Hotel also reserves the right to check
                              guest luggage at any point of time during the
                              stay. Firearms, Explosives, Suspicious Material,
                              Hazardous Agents and Chemicals are not permitted.
                              Licensed Firearms are to be declared to the hotel.{" "}
                              <br />
                              <strong>OUTSIDE FOOD:</strong> While dining within
                              the restaurants or in the room, outside food and
                              beverages are not allowed to be consumed. Guests
                              creating a disturbance to the operations, shall be
                              asked to vacate the premises. <br />
                              <strong>SWIMMING POOL POLICY: </strong>
                              Timings: 7 am to 8 pm only. Children under 16 yrs
                              must be supervised by an adult in and around the
                              pool area at all times. Children under 16 are not
                              permitted in the swimming pool by themselves.
                              Swimming is at Visitor/Guest’s own risk and Hotel
                              does not accept any liability for any mishap. All
                              patrons within the Pool Area must be attired in
                              swimming apparel. No street clothes are allowed in
                              the pool. For Women: a one-piece swimsuit, For
                              Men: swimming shorts, tight-fitting swimming
                              trunks, preferable without pockets or cuffs, For
                              children up to 4 years old: waterproof diapers,
                              for older children: an appropriate swimsuit.{" "}
                              <br />
                              <strong>GUESTS BELONGINGS:</strong> Guests are
                              requested to lock the doors of their room securely
                              when going out or when going to bed. The Hotel
                              will not, in any way, whatsoever, be responsible
                              for the loss of visitor’s goods or any other
                              property not entrusted to the management or for
                              damage including the theft or pilferage. For the
                              convenience of guests, Safety lockers are
                              available in all rooms to ensure the safety of any
                              valuables. <br />
                              <strong>RIGHTS OF ADMISSION RESERVED:</strong>
                              The Management reserves to itself, the absolute
                              “Rights of Admission” to any person in the hotel
                              premises. The Management, can ask any guest to
                              vacate/leave the premises on ground of disturbance
                              or posing a threat to the Employees/ Other Guests
                              or violating any policies/terms of the Hotel.{" "}
                              <br />
                              <strong>SMOKING POLICY:</strong> Effective 2nd
                              October 2008, the government has introduced
                              “No-Smoking” legislation for hotels, restaurants
                              and all public places. As a consequence, smoking
                              is prohibited in all parts of the hotel except in
                              designated bedrooms and smoking zone where smoking
                              is permitted. The hotel has dedicated smoking
                              guest bedrooms. Should you desire a smoking
                              bedroom, please let us know. We shall endeavor to
                              reserve a smoking bedroom for you, subject to
                              availability. Smoking includes only cigarettes.
                              Smoking in any other form (Beedis, Cigars,
                              Hookahs, Sheeshas etc) are not permitted within
                              the hotel / hotel room premises. <br />
                              <strong>ALCOHOL POLICY:</strong> Alcoholic
                              beverage service is restricted to those 21 years
                              or older with valid identification. <br />
                              <strong>LOST AND FOUND:</strong> Any items, left
                              behind by the guest, should be informed to the
                              Front desk immediately via email. In case the
                              guest does not contact the hotel, the hotel
                              reserves the right to dispose of the same without
                              any liability on the hotel. <br />
                              <strong> PET POLICY:</strong> Pets are not allowed
                              in the hotel premises. <br />
                              <strong>AMMENDMENT OF RULES:</strong> The
                              Management reserves the right itself to add, or
                              alter or amend any of the above terms, conditions
                              and rules.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div class="col-xl-12">
                  <h2>Other rooms</h2>
                </div>
                <div class="col-xl-6">
                  <img
                    class="img-fluid"
                    id="rr1"
                    src="images\room\exicutive1.jpg"
                    alt=""
                  />
                  <h4 style={{ align: "center" }}>Executive Room</h4>
                  <Link href="#" class="btn btn-primary" to="booking">
                    Book Now
                  </Link>
                </div>
                <div class="col-xl-6">
                  <img
                    class="img-fluid"
                    id="rr1"
                    src="images\room\tent1.png"
                    alt=""
                  />
                  <h4 style={{ align: "center" }}>Tent Room</h4>
                  <Link href="#" class="btn btn-primary" to="booking">
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
    </div>
  );
}
