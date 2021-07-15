import React from "react";
import { Link } from "react-router-dom";

const Navbarjefe = () => {
	return (
		<nav className="navbar navbar-dark bg-dark text-white">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-2 fs-3">Controlify Pro</span>
				</Link>
					<div className="ml-auto"> 
				<Link to="/listado-proyectos">
					<span className="navbar-brand mb- fs-5">Proyectos</span>
				</Link>
				<Link to= "/listado-actividades">				
					<span className="navbar-brand mb-2 fs-5">Actividades</span>
				</Link>         
				<Link to= "/lista-usuarios">				
					<span className="navbar-brand mb-2 fs-5">Usuarios</span>
				</Link>     
				<Link to= "/lista-horas">				
					<span className="navbar-brand mb-2 fs-5">Horas</span>
				</Link>  
                </div> 
			</div>
		</nav>

		
	);
};

export default Navbarjefe;