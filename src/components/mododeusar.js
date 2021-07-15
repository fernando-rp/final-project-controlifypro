import React from "react";

import imagen2 from '../img/imagen2.jpg'
import imagen3 from '../img/imagen3.jpg'
import imagen4 from '../img/imagen4.jpg'
import imagen5 from '../img/imagen5.jpg'

const mododeusar = () => {
	return (
        <div className="container text-center">
        <div>
            <h1 className>.....</h1>
            <h1 className>Porque Usar ControlifyPro?</h1>
        </div>
        
        <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src={imagen2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">1. ORGANIZA LOS PROYECTOS DE TU EMPRESA</h5>
                        
                    </div>
                    
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={imagen3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">2. AUMENTA LA PRODUCTIVIDAD DE TU EMPRESA</h5>
                        
                    </div>
                    
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={imagen4} className="card-img-top img-circle" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">3. GESTIONA LAS HORAS DE TUS COLABORADORES</h5>
                        
                    </div>
                    
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={imagen5} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">4. SUPERVISA Y GESTIONA LA EJECUCION DE TUS PROYECTOS</h5>
                        
                    </div>
                    
                </div>
            </div>               
        </div>
    </div>





        );
};

export default mododeusar;