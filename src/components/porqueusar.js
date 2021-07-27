import React from "react";

import imagen6 from '../img/imagen6.jpg'
import imagen7 from '../img/imagen7.jpg'
import imagen8 from '../img/imagen8.jpg'
import imagen9 from '../img/imagen9.jpg'




const porqueusar = () => {
	return (
        <div className="container mb-4">
        <div className="mx-auto p-4">
        
            <h1 className="text-center mb-4">¿Cómo usar ControlifyPro?</h1>
        </div>
        
        <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src={imagen6} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">1. Contáctanos y registra tu empresa.</h5>
                        
                    </div>
                    
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={imagen7} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">2.Registra tus proyectos, actividades y colaboradores.</h5>
                        
                    </div>
                   
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={imagen9} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 classname="card-title">3. Ingresa las horas utilizadas de tus actividades.</h5>
                        
                    </div>
                    
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={imagen8} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 classname="card-title">4. Supervisa y gestiona la ejecución de los proyectos.</h5>
                        
                    </div>
                    
                </div>
            </div>               
        </div>
    </div>
		
	);
};

export default porqueusar;