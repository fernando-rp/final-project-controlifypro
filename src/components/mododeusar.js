import React from "react";

import imagen2 from '../img/imagen2.jpg'
import imagen3 from '../img/imagen3.jpg'
import imagen4 from '../img/imagen4.jpg'
import imagen5 from '../img/imagen5.jpg'

const mododeusar = () => {
	return (
        <div className="container text-center mb-4">
        <div>
            <h1 className="mx-auto p-d mb-4">¿Por qué ControlifyPro?</h1>
        </div>
        
        <div className="row row-cols-1 row-cols-md-4">
            <div className="col">
                <div className="card h-100">
                    <img src={imagen2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">1. Organiza los proyectos de tu empresa.</h5>
                        
                    </div>
                    
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={imagen3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">2. Aumenta la productividad de tu empresa.</h5>
                        
                    </div>
                    
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={imagen4} className="card-img-top img-circle" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">3. Gestiona las horas de tus colaboradores.</h5>
                        
                    </div>
                    
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={imagen5} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">4. Supervisa y gestiona la ejecución de tus proyectos.</h5>
                        
                    </div>
                    
                </div>
            </div>               
        </div>
    </div>





        );
};

export default mododeusar;