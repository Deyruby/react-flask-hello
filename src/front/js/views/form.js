
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Form = () => {
  const { actions } = useContext(Context)
  const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const inputData = Object.fromEntries(new FormData(event.target));
    console.log(Object.fromEntries(new FormData(event.target)))
    actions.fetchRegister(inputData);
    console.log(inputData)
    Navigate("/")
  };

  return (
    <>
      <h1 className="text-center text-info pt-5">Register Form</h1>
      <div className="Container pt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input name="email" type="email" style={{ "width": "500px", "heigth": "5px" }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input name="password" type="password" style={{ "width": "500px", "heigth": "5px" }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-button pt-2">
              <input type="submit" className="form-submit bg-primary" value="Save" />
          </div>
        </form>
        </div>
        </div>
      </div> 
    </>
  )
};