import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../views/Login";
import { Contact} from "../components/contact"



const navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark text-white mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Controlify Pro</span>
				</Link>
				<div className="ml-auto"> 
				<Link to="/Login">
					<span className="navbar-brand mb-0 h1">Log In</span>
				</Link>
				<Link to="/Contact">
					<span className="navbar-brand mb-0 h1">Contact Us</span>
				</Link>
			
				
                
				</div> 
			</div>
		</nav>
	);
};

export default navbar;