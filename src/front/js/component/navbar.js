import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	
	
	const handleLogout = () => {
		sessionStorage.setItem("Token", "token")
		sessionStorage.removeItem("Token")
	}



	return (
		
		<nav className="navbar fw-bold bg-body-light ">
			<div className="container-fluid bg-info d-flex justify-content-end">
				<Link to="/">
					<a onClick={handleLogout} className="navbar-brand" href="#">Cerrar Sesión</a>
				</Link>
			</div>
		</nav>
	);
};
