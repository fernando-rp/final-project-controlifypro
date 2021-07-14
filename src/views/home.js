import React from "react";



import imagen1 from '../img/1-500x600.jpg'
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


const Home = () => {

    return (
        
        <div className="body-home">
            <div className="container">
                
            
            
            
            
        
            
                
                
                
                
                
                
                
                
                
                
                <div className="container text-center">
                    <div>
                        <h1 className>Porque Usar?</h1>
                    </div>
                    
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src={imagen2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">ORGANIZA LOS PROYECTOS DE TU EMPRESA</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={imagen3} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">AUMENTA LA PRODUCTIVIDAD DE TU EMPRESA</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={imagen4} className="card-img-top img-circle" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">GESTIONA LAS HORAS DE TUS COLABORADORES</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src={imagen5} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">SUPERVISA Y GESTIONA LA EJECUCION DE TUS PROYECTOS</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>               
                    </div>
                </div>
            
            <div className="container bg-light">
                <Historia/>


            </div>
                

            <div className="container">
                <div>
                    <h1 className="text-center">Como Usar?</h1>
                </div>
                
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen6} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">1. REGISTRA TU EMPRESA</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen7} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">2.REGISTRA Y ORGANIZA TUS PROYECTOS</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen8} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 classname="card-title">3. CONTROLA Y GESTIONA LAS HORAS DE TRABAJO</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div classname="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen9} className="rounded-circle" alt="..."/>
                            <div className="card-body">
                                <h5 classname="card-title">4.SUPERVISA Y GESTIONA LA EJECUCION DE LOS PROYECTOS</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div classname="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
            
            
                
                <Tecnologias/>
              


            
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>

        <Equipo/>
        
        
        
        
        
    )
}

export default Home;