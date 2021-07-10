import React from "react";


import Contact from '../components/contact'
import imagen1 from '../img/1-500x600.jpg'
import imagen2 from '../img/imagen2.jpg'
import imagen3 from '../img/imagen3.jpg'
import imagen4 from '../img/imagen4.jpg'
import imagen5 from '../img/imagen5.jpg'
import imagen6 from '../img/imagen6.jpg'
import imagen7 from '../img/imagen7.jpg'
import imagen8 from '../img/imagen8.jpg'
import imagen9 from '../img/imagen9.jpg'
import imagen10 from '../img/imagen10.jpg'
import imagen11 from '../img/imagen11.jpg'
import imagen12 from '../img/imagen12.jpg'
import imagen13 from '../img/imagen13.jpg'


const Home = () => {

    return (
        <>
        <div className="body-home">
            <div className="container">
                <h1 className="text-center">Controlify Pro</h1>
                <div className="card mb-4-center max-width: 500px;">
                    <div className="row g-0">
                        <div className="col-md-9">
                            <div className="card-body text-justify">
                                
                                <h3 className="card-text">Aumenta la productividad de tu empresa.</h3>
                                <h3 className="card-text">Gestiona las horas de tus proyectos.</h3>
                                <h3 className="card-text">Aumenta el rendimiento de tu equipo.</h3>
                            </div>
                        </div>
                        <div className="col-md-3 ">
                            <img src= {imagen1} className="img-fluid  rounded-circle" alt="..."/> 
                        </div>                    
                    </div>
                </div>
            </div>
            
            
        
            
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
            
            <div className="container mb-4">
                <div class="card text-center">
                    <h1 className>Quienes Somos?</h1>
                        <div className="card-body text-justify">
                            
                            <p>Controlify es una App que agrupa recursos para  personas y empresas, quienes como actores de la Industria  
                            y dentro del marco de una visión compartida paras el logro de su misión, contribuyen con su acción e inversión en la relacion Horas-Colaborador con la intencion de aumentar su productividad, lograr el rendimiento efectivo de todos sus equipos de trabajo y
                             gestionar con exito las horas de trabajo  de los  colaboradores en cada proyecto .</p>
                            <h5 className="card-history">Historia</h5>
                            <p> Nuestra App, fue fundada por 4 emprendedores el 21 de mayo de 2021, liderado por Ernesto. Inicialmente la denominaron "la App para organizar el trabajo".   
                            Con el transcurrir del tiempo y durante el desarrollo de la app,  pasó a denominarse ControliFypro, hasta hoy día.</p>
                            <h5 className="card-mision">Mision</h5>
                            <p>La Misión de ControliFypro es apoyar en el desarrollo  sustentable de proyectos, mediante el fortalecimiento de los medios tecnologicos adecuandolos
                             a las necesidades de las empresas, a sus deberes,  y a sus canales de productividad.</p>
                             <h5 className="card-vision">Vision</h5>
                            <p>Para el desarrollo de nuestra misión se nos hemos propuesto profundizar nuestra acción como participantes y protagonistas activos de las transformaciones que requieren  las Industrias y empresas en el control de horas y ejecucion de proyectos. 
                             Es por ello que sus integrantes visualizan una Asociación que profundice su acción Participando activamente en la determinación de las reglas del juego que norman la participación de los integrantes de cada proyecto, ampliando y fortaleciendo los espacios de participación de sus integrantes, 
                             desarrollando fortalezas organizacionales crecientes proyectadas por cada empresa.</p>


                        </div>
                    </div>
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
            <div className="container">
                <div>
                    <h1 className="text-center">Nuestro Equipo</h1>
                </div>
                
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen10} className="rounded-circle" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Neymar Jr</h5>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen11} className="rounded-circle" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Leo Messi</h5>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen12} className="rounded-circle" alt="..."/>
                            <div className="card-body">
                                <h5 classname="card-title">Cristiano Ronaldo</h5>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={imagen13} className="rounded-circle" alt="..."/>
                            <div className="card-body">
                                <h5 classname="card-title">Alexis Sanchez</h5>
                                
                            </div>
                            
                        </div>
                    </div>               
                </div>
            </div>   
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        
        
        <Contact/>
        </>
        
    )
}

export default Home;