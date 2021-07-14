import React from "react";

import imagen2 from "../img/imagen2.jpg"




const Historia = () => {
	return (
        <div className="historia">
                <h1 className="text-center">¿Quienes Somos?</h1>
                <p>Controlify es una App que agrupa recursos para  personas y empresas, quienes como actores de la Industria  
                y dentro del marco de una visión compartida paras el logro de su misión, contribuyen con su acción e inversión en la relacion Horas-Colaborador con la intencion de aumentar su productividad, lograr el rendimiento efectivo de todos sus equipos de trabajo y
                gestionar con exito las horas de trabajo  de los  colaboradores en cada proyecto .</p>
                
                
                
                <div className=" mb-4-center max-width: 580px;">
                    <div className="row g-0">
                        
                        <div className="col-md-8">
                            <div className="card-body">
                                
                                <h1 className="text-justify">Historia</h1>
                                <p className="text-justfy"> Nuestra App, fue fundada por 4 emprendedores el 21 de mayo de 2021, liderado por Ernesto. Inicialmente la denominaron "la App para organizar el trabajo".   
                                Con el transcurrir del tiempo y durante el desarrollo de la app,  pasó a denominarse ControliFypro, hasta hoy día.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <img src= {imagen2} className="img-fluid rounded-start" alt="..."/> 
                        </div>                   
                    </div>
                </div>
            
            
                
                
                <div className=" mb-4-center max-width: 500px;">
                    <div className="row g-0">
                        <div className="col-md-3 ">
                            <img src= {imagen2} className="img-fluid rounded-start" alt="..."/> 
                        </div> 
                        <div className="col-md-9">
                            <div className="card-body text-justify">
                                
                            <h1 className="text-justify">Misión</h1>
                                <p className="text-justfy">La Misión de ControliFypro es apoyar en el desarrollo  sustentable de proyectos, mediante el fortalecimiento de los medios tecnologicos adecuandolos
                             a las necesidades de las empresas, a sus deberes,  y a sus canales de productividad.</p>
                            </div>
                        </div>
                                           
                    </div>
                </div>
            
                
                
                <div className="mb-4-center max-width: 580px;">
                    <div className="row g-0">
                        
                        <div className="col-md-9">
                            <div className="card-body text-justify">
                                
                            <h1 className="text-justify">Visión</h1>
                                <p className="text-justfy"> Para el desarrollo de nuestra misión se nos hemos propuesto profundizar nuestra acción como participantes y protagonistas activos de las transformaciones que requieren  las Industrias y empresas en el control de horas y ejecucion de proyectos. 
                             Es por ello que sus integrantes visualizan una Asociación que profundice su acción Participando activamente en la determinación de las reglas del juego que norman la participación de los integrantes de cada proyecto, ampliando y fortaleciendo los espacios de participación de sus integrantes, 
                             desarrollando fortalezas organizacionales crecientes proyectadas por cada empresa.</p>
                            </div>
                            
                        </div>
                        <div className="col-md-3 ">
                            <img src= {imagen2} className="img-fluid rounded-start" alt="..."/> 
                        </div>                    
                    </div>
                </div>
            </div>
		
	);
};

export default Historia;