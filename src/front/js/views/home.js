import React, { useContext, useEffect } from "react";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";




export const Home = ({token})   => {

    const {actions } = useContext(Context)
    const navigate = useNavigate()


    useEffect(() => {
        if (!token) {
            return navigate("/")

        }

    }, [])

    useEffect(() => {
        actions.fetchValidateToken().then((response) => {
            if (response == false) {
                navigate("/")
            }

        })
    }, [])


  



    

    return (
        <>
            <Navbar />
            <h1 className="d-flex justify-content-center pt-5">Welcome</h1>
        </>
    )
}