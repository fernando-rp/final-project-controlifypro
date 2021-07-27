import React from"react"
import imagen10 from '../img/imagen10.jpg'
import imagen11 from '../img/imagen11.jpg'
import imagen12 from '../img/imagen12.jpg'
import imagen13 from '../img/imagen13.jpg'


const Equipo = () => {
	return (
           
           
           
           <div className="container mt-4">
        
                <div>
                    <h1 className="text-center mb-4 p-4">Nuestro Equipo</h1>
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

    );
};

export default Equipo;  