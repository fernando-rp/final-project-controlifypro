import React from "react";
import { Link } from "react-router-dom";
// import { ingresa } from "./ingresa";
// import { registrate } from "./registrate";

const navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark text-white mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Controlify Pro</span>
				</Link>
				{/* <div className="ml-auto"> */}
				{/* ingresa /> */} 
                {/* registrate /> */} 
				{/* </div> */}
			</div>
		</nav>
	);
};

export default navbar;