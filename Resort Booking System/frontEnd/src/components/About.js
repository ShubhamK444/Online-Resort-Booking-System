import React from "react";
import "../css/About.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faGoogle  } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 

export default function About() {
  return (
    <div>
      <div class="bg-light">
    <div class="container py-5">
        <div ><img src="\images\extra\about1.png" width={"2000px"} alt="" class="img-fluid"/></div>
      <div class="row h-100 align-items-center py-5">
        <div class="col-lg-6">
          <h3>We believe in contributing an unforgettable experience to you and aim every moment to give the best of our service.</h3>
          <p class="lead text-muted mb-0">The Wabi-Sabi Resort, of Nashik, is known to be one of the finest luxury Resort across Igatpuri. The resort stands apart from others due to its unique structure and spacious rooms attached with large balcony setting offering an astonishing lake view. The visitors get a taste of mouth-watering culinary delight by staying in well-furnished suites that offer a memorable experience.
          Our unique property and service offer spacious accommodations and are dedicated to creating fond memories for our precious guests by focusing on their desires and necessities throughout their stay with us. </p>
        </div>
        <div class="col-lg-6">
            <h1>Explore us and enjoy the unforgettable moment with us!</h1>       
        </div>
      </div>
    </div>
  </div>
  
  <div class="bg-white py-5">
    <div class="container py-5">
      <div class="row align-items-center mb-5">
        <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
          <h2 class="font-weight-light">All Facilities</h2>
          <p class="font-italic text-muted mb-4">A named collection from IHCL, SeleQtions encapsulates hotels with a distinct character that celebrate a legacy of time, a sense of place or a specific theme.</p>
        </div>
        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="\images\extra\about2.png"  alt="" class="img-fluid mb-4 mb-lg-0"/></div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-5 px-5 mx-auto"><img src="\images\g6.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
        <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
          <h2 class="font-weight-light">Best In Market</h2>
          <p class="font-italic text-muted mb-4">BEST RATE GUARANTEE Make your bookings directly with us for the most seamless experience and the best value. With compelling exclusive offers, Taj InnerCircle reward points, and the best rates guaranteed experience our sincere care even before you check in.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="bg-light py-5">
    <div class="container py-5">
      <div class="row mb-4">
        <div class="col-lg-5">
          <h2 class="display-4 font-weight-light">Our team</h2>
          <p class="font-italic text-muted">“Talent win games, but teamwork and intelligence win championships"”</p>
        </div>
      </div>
  
      <div class="row text-center">
    
        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 class="mb-0">Mrunali Salve</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
            <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faTwitter}  /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faGoogle}  /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faLinkedin}  /></a></li>
            </ul>
          </div>
        </div>
   
        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 class="mb-0">Nirmal Jain</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
            <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faTwitter}  /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faGoogle}  /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faLinkedin}  /></a></li>
            </ul>
          </div>
        </div>
        
        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 class="mb-0">Dilip Patil</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faTwitter}  /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faGoogle}  /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faLinkedin}  /></a></li>
             
            </ul>
          </div>
        </div>
        
        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 class="mb-0">Azhar Jalgaonkar</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
            <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faTwitter}  /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faGoogle}  /></a></li>
              <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faLinkedin}  /></a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  </div>
      </div>
  );
}
