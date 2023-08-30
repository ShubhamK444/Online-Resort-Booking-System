import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../../Api";
import { signin } from "../../slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onsubmit = (event) => {
    axios
      .post(api.URL + "/user/signIn", event)
      .then((result) => {
        console.log(result.data);
        dispatch(signin(result.data));
        toast.success("Login Successfull !", {
           position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        toast.error("Invalid Id/Password", {
           position: toast.POSITION.TOP_CENTER,autoClose: 1000 ,
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
              <h4> Sign into your account </h4>
              <form className="form-control" onSubmit={handleSubmit(onsubmit)}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="text"
                      name="email"
                      placeholder="Username"
                      className="form-control my-2 p-2"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {errors.email?.type === "required" && (
                      <p role="alert" className="text-danger">
                        name is required
                      </p>
                    )}
                    <span className="text-danger font-weight-bold "></span>
                  </div>
                </div>
                <div class="form-row">
                  <div className="col-lg-7">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control my-2 p-2 "
                      {...register("password", {
                        required: true,
                      })}
                    />
                    {errors.password?.type === "required" && (
                      <p role="alert" className="text-danger">
                        Password is is required
                      </p>
                    )}
                    <span className="text-danger font-weight-bold"></span>
                  </div>
                </div>
                <button className="btn btn-btn btn-success">Login</button>
                <br />
                <br />
               
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
         
    </div>
  );
}
