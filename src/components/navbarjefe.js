import React from "react";
import { Link } from "react-router-dom";

import logo from '../img/controlifypro.png'


const Navbarjefe = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-danger">

            {/* <div class="container">
              <a class="navbar-brand" href="javascript:;">Navbar with notification</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
                <span class="navbar-toggler-bar"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="javascript:;">
                      Discover
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="javascript:;">
                      Wishlist
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="btn btn-just-icon btn-warning  " data-toggle="dropdown" aria-expanded="false">
                      <i class="nc-icon nc-sound-wave"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right dropdown-notification">
                      <li class="no-notification">
                        You're all clear!
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link navbar-brand" data-toggle="dropdown" width="30" height="30" aria-expanded="false">
                      <div class="profile-photo-small">
                        <img src="./assets/img/faces/erik-lucatero-2.jpg" alt="Circle Image" class="img-circle img-responsive img-no-padding">
                      </div>
                    </a>
                    
                      <div class="dropdown-header">Dropdown header</div>
                      <a class="dropdown-item" href="javascript:;">Action</a>
                      <a class="dropdown-item" href="javascript:;">Another action</a>
                      <a class="dropdown-item" href="javascript:;">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="javascript:;">Separated link</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="javascript:;">Another separated link</a>
                    </ul>
                  </li>
                </ul>
              </div>
            </div> */}

			
			<div className="container">
        <img src={logo} className="d-block"  height="25" alt="..."/>

				{/* <Link to="/">
					<span className="navbar-brand mb-2 fs-3">Controlify Pro</span>
				</Link> */}

        <div className="ml-auto">
          <Link to="/Dashboard-jefe">
            <span className="navbar-brand mb- fs-5">Inicio</span>
          </Link>
          <Link to="/listado-proyectos">
            <span className="navbar-brand mb- fs-5">Proyectos</span>
          </Link>
          <Link to="/listado-actividades">
            <span className="navbar-brand mb-2 fs-5">Actividades</span>
          </Link>
          <Link to="/lista-usuarios">
            <span className="navbar-brand mb-2 fs-5">Colaboradores</span>
          </Link>
          <Link to="/lista-horas">
            <span className="navbar-brand mb-2 fs-5">Horas</span>
          </Link>
          <Link to="/">
            <span className="navbar-brand mb-2 fs-5">Cerrar Sesión</span>
          </Link>
        </div>
			</div>
		</nav>

		
	);
};

export default Navbarjefe;