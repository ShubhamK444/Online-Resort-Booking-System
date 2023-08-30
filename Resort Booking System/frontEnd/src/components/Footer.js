import React from 'react'
import { Link } from 'react-router-dom';
import '../css/footer.css'

function Footer() {
    return (<div>

    
<div class="footer-area bg-f">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6">
                <h3>About Us</h3>
                <p>We have started our new hotel services.You will satisfy it is our gurranty.Thank You!!</p>
            </div>
            <div class="col-lg-3 col-md-6">
                <h3>Opening hours</h3>
                <p><span class="text-color">Tue-Wed :</span> 9:Am - 10PM</p>
                <p><span class="text-color">Thu-Fri :</span> 9:Am - 10PM</p>
                <p><span class="text-color">Sat-Sun :</span> 7:AM - 1PM</p>
            </div>
            <div class="col-lg-3 col-md-6">
                <h3>Address</h3>
                <p class="lead">Gat 853 At Murambi, Post Wadiware, Tal. Igatpuri, Dist Nashik , Nashik, India, Maharashtra</p>
              
            </div>
            <div class="col-lg-3 col-md-6">
        
            <h3>Contact Us</h3>
                <p ><a href="#">+919767096657</a></p>
                <p><a href="#">resortwabisabi@gmail.com</a></p>
               
                <ul class="list-inline f-social">
                    <li class="list-inline-item"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            
            <div class="col-xl-2 n" ><Link className='n'>Pay Now</Link></div>
            <div class="col-xl-2 n"><Link  className='n'>Privacy Policy</Link></div>  
            <div class="col-xl-2 n"><Link className='n'>Terms & condition</Link></div>
              <div class="col-xl-2 n"><Link className='n'>Disclaimer</Link></div>
              <div class="col-xl-2 n"><Link to="FAQ" className='n'>FAQ</Link></div>
            <div class="col-xl-2 n"><Link to="Careers" className='n'>Careers</Link></div>
          </div>
    </div>
    
    
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="company-name">All Rights Reserved. &copy; 2023  Designed By : Group-G7 </p>
                
                </div>
            </div>
        </div>
    </div>
    
</div>
  </div>

);
}
export default Footer;