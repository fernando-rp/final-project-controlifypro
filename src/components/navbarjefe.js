import React from "react";
import { Link } from "react-router-dom";

const Navbarjefe = () => {
	return (
		<nav className="navbar navbar-dark bg-dark text-white">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 fs-2">Controlify Pro</span>
				</Link>
					<div className="ml-auto"> 
				<Link to="/listado-proyectos">
					<span className="navbar-brand mb-0 fs-2">Proyectos</span>
				</Link>
				<Link to= "/listado-actividades">				
					<span className="navbar-brand mb-0 fs-2">Actividades</span>
				</Link>         
				<Link to= "/lista-usuarios">				
					<span className="navbar-brand mb-0 fs-2">Usuarios</span>
				</Link>     
				<Link to= "/lista-horas">				
					<span className="navbar-brand mb-0 fs-2">Horas</span>
				</Link>  
                </div> 
			</div>
		</nav>
	);
};

export default Navbarjefe;