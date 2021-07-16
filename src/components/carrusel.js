import React from "react";


import Carrusel1 from '../img/carrusel1.jpg'
import Carrusel2 from '../img/carrusel2.jpg'
import Carrusel3 from '../img/carrusel3.jpg'


const carrusel = () => (
    
            
          <div id="carouselExampleCaptions" className="carousel slide mb-4" data-bs-ride="carousel">
               <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Carrusel1} className="d-block w-100"  height="850" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="text-dark">Aumenta La productividad de tu Empersa!</h1>
                             
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Carrusel2} className="d-block w-100" height="850"  alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1 >Gestiona las horas de tus proyectos!</h1>
                                
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Carrusel3} className="d-block w-100" height="850" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <h1 >Aumenta el rendimiento de tu equipo!</h1>
                                
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>     
        
      
    

);  

    export default carrusel;