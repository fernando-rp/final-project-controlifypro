import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/controlifypro.png'



const navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark text-white" id="navbar">
			<div className="container">

				
				<Link to="/">
				<img src={logo} className="d-block"  height="25" alt="..."/>
				</Link>
				<div className="ml-auto"> 
				<Link to="/Login">
					<span className="navbar-brand mb-0 fs-4">Iniciar Sesión</span>
				</Link>
				<Link to= "/contact">				
					<span className="navbar-brand mb-0 fs-2">Contáctanos</span>
				</Link>
				              
				</div> 
			</div>
		</nav>
	);
};

export default navbar;