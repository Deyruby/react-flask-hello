import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate, useNavigate } from "react-router-dom";



export const Login = () => {


    const { actions } = useContext(Context)
    const Navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();


        const inputData = Object.fromEntries(new FormData(event.target));
        console.log(Object.fromEntries(new FormData(event.target)))
        const result = await actions.fetchLogin(inputData);

        if (!result) {
            Navigate("/")

        }
        else {
            Navigate("/single")
        }

    };



    return (

        <>

            <h1 className="text-center text-info pt-5">Login</h1>
            <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-auto">
                <form onSubmit={handleSubmit}>
                    <div className=" col-12 form-group">
                        <label className="col-12" for="exampleInputEmail1">Email address</label>
                        <input name="email" type="email" className="form-control" style={{ "width": "500px", "heigth": "5px" }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input name="password" type="password" className="form-control" style={{ "width": "500px", "heigth": "5px" }} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/demo">
                        <p className="text-primary">Don't you have an account? Create One</p>
                    </Link>
                </form>
                </div>
                </div>
                
            </div>
        </>
    )
};