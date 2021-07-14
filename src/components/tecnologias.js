import React from "react";

import imghtml from "../img/imghtml.jpg"
import imgjs from "../img/imgjs.jpg"
import imgreact from "../img/imgreact.jpg"
import imgpython from "../img/imgpython.jpg"
import imgbootstrap from "../img/imgbootstrap.jpg"
import imgflask from "../img/imgflask.jpg"
import imgfawe from "../img/imgfawe.jpg"
import imgnode from "../img/imgnode.jpg"

const Tecnologias  = () => {
    
    return (
        <div className="container">
            <div>
                <h1 className="text-center">......</h1>
            </div>
            <div>
                <h1 className="text-center">Tecnologias</h1>
            </div>
            <div className="row row-cols-2 row-cols-md-4 g-2">
                <div className="col">
                    
                    <img src={imghtml} className="card-img-top" alt="..."/>
                    
                </div>
                <div class="col">
                    
                    <img src={imgjs} className="card-img-top" alt="..."/>
                    
                </div>
                <div class="col">
                    
                    <img src={imgreact} className="card-img-top" alt="..."/>
                    
                </div>
                <div class="col">
                    
                    <img src={imgpython} class="card-img-top" alt="..."/>
                    
                </div>
                <div class="col">
                    
                    <img src={imgbootstrap} class="card-img-top" alt="..."/>
                    
                </div>
                <div class="col">
                    
                    <img src={imgfawe} class="card-img-top" alt="..."/>
                    
                </div>
                <div class="col">
                    
                    <img src={imgnode} class="card-img-top" alt="..."/>
                    
                </div>
                <div class="col">
                    
                    <img src={imgflask} class="card-img-top" alt="..."/>
                    
                </div>
            
            
            
            </div>
        </div>
        




    );
};






    

    export default Tecnologias;