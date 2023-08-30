import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../../Api";
import { signin } from "../../slices/authSlice"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify";


export default function Login() {
  const [massage, setmassage] = useState("");
  const [massage1, setmassage1] = useState("");
  
  let navigate=useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onsubmit = (event) => {
    // if("645674566652"==event.email){
    //   setmassage("wrong id")
    // }
    // else{
    //   setmassage1("password updated")
    // }
    // console.log(event.email);
    axios.post(api.URL+"/forgotPassword/reset",event).then((result)=>{
        if(result.data=="Password gets updated."){

          toast.success(result.data, {
             position: toast.POSITION.TOP_CENTER,autoClose: 1000 
          });
          navigate("/login")

        }else{toast.error(result.data, {
           position: toast.POSITION.TOP_CENTER,autoClose: 1000 
        });

        }
      }).catch((err)=>{
        toast.error("Invalid user id", {
           position: toast.POSITION.TOP_CENTER,autoClose: 1000 
        });
        console.log(err);
      });
      reset();
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
              />
            </div>
            <div className="col-xl-5" id="ll1">
              <h1 className="font-weight-bold py-3"> Welcome,Wabi-Sabi </h1>
              <h4> Set Your Password Again</h4>
              <form className="form-control" onSubmit={handleSubmit(onsubmit)}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Id"
                      className="form-control my-2 p-2"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    {errors.email?.type === "required" && (
                      <p role="alert" className="text-danger">
                       * required
                      </p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p role="alert" className="text-danger">
                       Invalid Email
                      </p>
                    )}
                    {errors.email?.type==="required" &&(
                        <p role="alert" className="text-danger"> Invalid Email</p>
                    )}
                    <span className="text-danger font-weight-bold "></span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="text"
                      name="idCardNumber"
                      className="form-control"
                      placeholder="Aadhar no : "
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
                </div>
                <div class="form-row">
                  <div className="col-lg-7">
                    <input
                      type="password"
                      name="password"
                      placeholder="Set New Password"
                      className="form-control my-2 p-2 "
                      {...register("password",{
                        required:true
                      })}
                    />
                    {errors.password?.type === "required" && (
                        <p role="alert" className="text-danger">Password is is required</p>
                    )}
                    <span className="text-danger font-weight-bold"></span>
                  </div>
                </div>
                <p className="text-danger">
                {massage}
              </p>
                <p className="text-success">
                {massage1}
              </p>
                <button className="btn btn-btn btn-success" >
                  Reset Password
                </button>
                <br/>
                 <Link  to="/login">
                      Login
                    </Link>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}