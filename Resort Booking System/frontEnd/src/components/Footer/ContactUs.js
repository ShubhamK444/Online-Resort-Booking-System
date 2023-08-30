import React from "react";

export default function ContactUs() {
  return (
    <div>
      {" "}
      <div className="container"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h3>Have A Query? Contact Us Here</h3>
          </div>
          <div className="container">
            <div className="row">
              <p>(*) Required Fields</p>
              <div className="col-xl-6">
                <form action="">
                  <label for="">Name* :</label>
                  <input type="text" />
                  <br />
                  <br />
                  <label for="">Email Adrress* :</label>
                  <input type="email" name="from" id="" />
                  <br />
                  <br />
                  <label for="">Contact Number</label>
                  <input type="text" />
                  <br />
                  <br />
                  <button className="btn-btn-primary">Submit</button>
                </form>
              </div>
              <div className="col-xl-6">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        The Annonymus Resort
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Adgaon, Nashik - 422 003 <br />
                        Tel: xxx-xxxxxxx <br />
                        Reservations Mobile No: +91-xxxxxxxxxxx +91- xxxxxxxxxxx{" "}
                        <br />
                        Email:{" "}
                        <a href="reservations@theannonymusresort.com">
                          reservations@theannonymusresort.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        The Annonymus Resort Membership Sales
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Email:{" "}
                        <a href="sales@theannonymusresort.com">
                          sales@theannonymusresort.com
                        </a>
                        <br />
                        xxx-xxxxxxxx ( Corporate Sales ) <br />
                        xxx-xxxxxxxx ( Social or Banquet Sales )
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        CAREERS
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Looking for an exciting career in the hospitality
                        industry? <br />
                        Email your resume to:{" "}
                        <a href="hr@theannonymusresort.com">
                          hr@theannonymusresort.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
