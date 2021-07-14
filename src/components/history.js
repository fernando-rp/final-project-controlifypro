import React from "react";
import imghistoria from '../img/imghistoria.jpg'
import imgmision from '../img/imgmision.jpg'
import imgvision from '../img/imgvision.jpg'

const History = () => {

    return (
        <>
            <div className="body-home">
                
                    
                    {/* <div className="card mb-4-center max-width: 540px;"> */}
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="card-body text-justify">
                                    <h1 className="text-center">Historia</h1>
                                    
                                <p> Nuestra App, fue fundada por 4 emprendedores el 21 de mayo de 2021, liderado por Ernesto. Inicialmente la denominaron "la App para organizar el trabajo".   
                                Con el transcurrir del tiempo y durante el desarrollo de la app,  pasó a denominarse ControliFypro, hasta hoy día.</p>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <img src= {imghistoria} className="img-fluid rounded-star" alt="..."/> 
                            </div>                    
                        </div>
                    {/* </div> */}
                
                
                
                    
                    {/* <div className="card mb-4-center max-width: 540px;"> */}
                        <div className="row g-0">
                            <div className="col-md-6 ">
                                <img src= {imgmision} className="img-fluid rounded-star" alt="..."/> 
                            </div> 
                                                      
                            <div className="col-md-6">
                               
                                <div className="card-body text-justify">
                                    <h1 className="text-center">Misión</h1>
                                    <p>La Misión de ControliFypro es apoyar en el desarrollo  sustentable de proyectos, mediante el fortalecimiento de los medios tecnologicos adecuandolos
                                a las necesidades de las empresas, a sus deberes,  y a sus canales de productividad.</p>
                                </div>
                            </div>
                                               
                        </div>
                    {/* </div> */}
                
                 
                    
                    {/* <div className="card mb-4-center max-width: 540px;"> */}
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="card-body text-justify">
                                    <h1 className="text-center">Visión</h1>
                                    <p>Para el desarrollo de nuestra misión se nos hemos propuesto profundizar nuestra acción como participantes y protagonistas activos de las transformaciones que requieren  las Industrias y empresas en el control de horas y ejecucion de proyectos. 
                                Es por ello que sus integrantes visualizan una Asociación que profundice su acción Participando activamente en la determinación de las reglas del juego que norman la participación de los integrantes de cada proyecto, ampliando y fortaleciendo los espacios de participación de sus integrantes, 
                                desarrollando fortalezas organizacionales crecientes proyectadas por cada empresa.</p>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <img src= {imgvision} className="img-fluid rounded-star" alt="..."/> 
                            </div>                    
                        </div>
                    {/* </div> */}
                
            </div>    
        </>
    );
};  


export default History;