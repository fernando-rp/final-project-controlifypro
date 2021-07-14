import React from "react";


// import Contact from '../components/contact'
import imagen1 from '../img/imagen1.jpg'
import imagen2 from '../img/imagen2.jpg'
import imagen3 from '../img/imagen3.jpg'
import imagen4 from '../img/imagen4.jpg'
import imagen5 from '../img/imagen5.jpg'
import imagen6 from '../img/imagen6.jpg'
import imagen7 from '../img/imagen7.jpg'
import imagen8 from '../img/imagen8.jpg'
import imagen9 from '../img/imagen9.jpg'


import Tecnologias from "../components/tecnologias";
import Equipo from "../components/equipo"
import Historia from "../components/historia.js"

import Carrusel from "../components/carrusel";
import History from "../components/history";
import Tecnologias from "../components/tecnologias";


const Home = () => {

    return (
        <>
       
                <Carrusel />
            
            
            
        
            
                
                
                
                
                
                
                
                
                
                
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
            
            <div className="container-fluid text-center bg-light ">
                {/* <div class="card text-center"> */}
                    <h1 className>...</h1>
                    
                    <h1 className>¿Quienes Somos?</h1>
                    <p>Controlify es una App que agrupa recursos para  personas y empresas, quienes como actores de la Industria  
                                y dentro del marco de una visión compartida paras el logro de su misión, contribuyen con su acción e inversión en la relacion Horas-Colaborador con la intencion de aumentar su productividad, lograr el rendimiento efectivo de todos sus equipos de trabajo y
                                gestionar con exito las horas de trabajo  de los  colaboradores en cada proyecto .</p>
                {/* </div> */}
                <div className="card-body text-justify">
                             
                             
                    <History />
                            
                    
                </div>
            </div>
                
               

            <div className="container ">
                <div>
                <h1 className="text-center">.....</h1>
                    <h1 className="text-center">Como se usar ControlifyPro!</h1>
                </div>
                
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen6} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">1. REGISTRA TU EMPRESA</h5>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen7} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">2.REGISTRA Y ORGANIZA TUS PROYECTOS</h5>
                                
                            </div>
                           
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen8} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 classname="card-title">3. CONTROLA Y GESTIONA LAS HORAS DE TRABAJO</h5>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen9} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 classname="card-title">4.SUPERVISA Y GESTIONA LA EJECUCION DE LOS PROYECTOS</h5>
                                
                            </div>
                            
                        </div>
                    </div>               
                </div>
            </div>



            <div className="card-body text-center bg-light">
                <h1 className>...</h1>
                             
                             
                <Tecnologias />
                
                                     
                             
            </div>




            
            
            <div className="container">
                <div>
                <h1 className="text-center">.....</h1>
                    <h1 className="text-center">Nuestro Equipo</h1>
                </div>
                
                <Tecnologias/>
              


            
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         </div> 
        
        
        
        </>
        
    )
}

export default Home;