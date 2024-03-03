import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import { Home } from "./views/home";
import { Form } from "./views/form";
import { Login } from "./views/login";
import { Toaster } from "sonner";
import injectContext, { Context } from "./store/appContext";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;
   const {store} = useContext(Context)

    return (
        <div>
           <Toaster/> 
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Login />} path="/" />
                        <Route element={<Form />} path="/demo" />
                        <Route element={<Home  token={store.token}/>} path="/single" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
