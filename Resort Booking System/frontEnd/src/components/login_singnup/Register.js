import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../../Api";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onsubmit = (event) => {
    // setIsSubmitted(true);
    axios
      .post(api.URL + "/user/signup", event)
      .then((result) => {
        if(result.data=="Registration succsefully completed!"){
          toast.success(result.data , {
             position: toast.POSITION.TOP_CENTER,autoClose: 1000 
          });
          // reset()
          setTimeout(() => {
            
            navigate("login")
            
          }, 1000);
        }else{
          toast.error(result.data , {
             position: toast.POSITION.TOP_CENTER,autoClose: 1000 
          });
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
   
  };

  return (
    <div>
      <div className="Form my-5 mx- 3 ">
        <div className="container ">
          <div className="row" style={{ padding: "10px" }}>
            <div className="col-xl-5">
              <img
                id="ll2"
                src="https://wallpapershome.com/images/pages/pic_v/4628.jpg"
                alt="Image Cylinder"
                style={{height:"670px"}}
              />
            </div>
            <div className="col-lg px-5" id="ll1">
              <h1 className="font-weight-bold py-3"> Welcome,Wabi-Sabi </h1>
              <h4> Sign into your account </h4>
              <form onSubmit={handleSubmit(onsubmit)}>
                <br />
               <div className="row">

                  <br></br>
                  <div className="col-xl-6">
                    <label> Email : </label>
                    <input
                      type=""
                      name="email"
                      className="form-control"
                      placeholder="email"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      })}
                    />
                    {errors.email?.type === "required" && (
                      <p role="alert" className="text-danger">
                        Email is is required
                      </p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p role="alert" className="text-danger">
                        please write in proper format
                      </p>
                    )}
                  </div>
                  <br></br>
                  <div className="col-xl-6">
                    <label>First Name: </label>
                    <input
                      type="text"
                      name="First Name"
                      className="form-control"
                      placeholder="Name"
                      {...register("fname", { required: true })}
                    />
                    {errors.fname?.type === "required" && (
                      <p role="alert" className="text-danger">
                        first name is required
                      </p>
                    )}
                  </div>
               </div>
               <br></br>
                      <div className="row">
                  <div className="col-xl-6">
                    <label>Last Name: </label>
                    <input
                      type="text"
                      name="Last Name"
                      className="form-control"
                      placeholder="lname"
                      {...register("lname", { required: true })}
                    />
                    {errors.lname?.type === "required" && (
                      <p role="alert" className="text-danger">
                        last name is required
                      </p>
                    )}
                  </div>

                  
                  <div className="col-xl-6">
                    <label> Password : </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                      {...register("password", {
                        required: true,
                        pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                      })}
                    />
                    {errors.password?.type === "required" && (
                      <p role="alert" className="text-danger">
                        Password is is required
                      </p>
                    )}

                    {errors.password?.type === "pattern" && (
                      <li role="alert" className="text-danger">
                        Passwords must be atleast 8 characters long,contain
                        atleast 1 smallcap letter,largecap letter,special
                        characters and number.
                      </li>
                    )}
                  </div>
                  </div>
                
               
                <br></br>
                <div className="row">
                  <div className="col-xl-6">
                    <label> Aadhar no : </label>
                    <input
                      type="text"
                      name="idCardNumber"
                      className="form-control"
                      placeholder="xxxx-xxxx-xxxx"
                      {...register("idCardNumber", {
                        required: true,
                        minLength: 12,
                        maxLength: 12,
                      })}
                    />
                    {errors.idCardNumber?.type === "required" && (
                      <p role="alert" className="text-danger">
                        Aadhar number is is required
                      </p>
                    )}
                    {errors.idCardNumber?.type === "minLength" && (
                      <li role="alert" className="text-danger">
                        Aadhar Must Be 12 digit
                      </li>
                    )}
                    {errors.idCardNumber?.type === "maxLength" && (
                      <li role="alert" className="text-danger">
                        Aadhar Must Be 12 digit
                      </li>
                    )}
                  </div>
                  <br></br>

                  <div className="col-xl-6">
                    <label> Contact Number : </label>
                    <input
                      type=""
                      name="phoneNumber"
                      className="form-control"
                      placeholder="contact"
                      {...register("phoneNumber", {
                        required: true,
                        pattern: /^[0-9+-]+$/,
                        minLength: 10,
                        maxLength: 13,
                      })}
                    />
                    {errors.phoneNumber?.type === "required" && (
                      <p role="alert" className="text-danger">
                        Mobile Number is is required
                      </p>
                    )}
                    {errors.phoneNumber?.type === "pattern" && (
                      <li role="alert" className="text-danger">
                        Mobile number is invalid
                      </li>
                    )}
                    {errors.phoneNumber?.type === "minLength" && (
                      <li role="alert" className="text-danger">
                        Mobile number is invalid
                      </li>
                    )}
                    {errors.phoneNumber?.type === "maxLength" && (
                      <li role="alert" className="text-danger">
                        Mobile number is invalid
                      </li>
                    )}
                  </div>
                </div>
                <br />
               
                 

                <br />
                {/* <div className="form-group">
                  <label> Address: </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="address"
                    {...register("address", { required: true })}
                  />
                  {errors.address?.type === "required" && (
                    <p role="alert" className="text-danger">
                      Address is is required
                    </p>
                  )}
                </div> */}
                <br></br>
                {/* {isSubmitted && (
                  <p className="text-success">
                    Thank you for submitting the form!
                  </p>
                )} */}
                <br></br>
                <br></br>
                <button className="btn btn-btn btn-success" type="submit">
                  Sign Up
                </button>
                <div class="_9bq4">
                  <Link to="/login" class="_9bq5">
                    Already have an account?
                  </Link>
                </div>
                <br></br>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
