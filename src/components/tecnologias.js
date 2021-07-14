import React from "react";
import imghtml5css3 from '../img/imghtml5css3.jpg'
import imgjs from '../img/imgjs.jpg'
import imgreact from '../img/imgreact.jpg'
import imgpython from '../img/imgpython.jpg'
import imgbootstrap from '../img/imgbootstrap.jpg'
import imgnode from '../img/imgnode.jpg'
import imgflask from '../img/imgflask.jpg'
import imgmysql from '../img/imgmysql.jpg'
import imgfawe from '../img/imgfawe.jpg'

const Tecnologias = () => {

    return (
                 
        <div className="tittle text-black-50 text-center bg-light"><h1>Tecnologias</h1>
            <div class="row row-cols-1 row-cols-md-3 ">
                <div class="col">
                    <img src={imghtml5css3} className="img-fluid rounded-star" alt="..."/>
                </div>
                <div class="col">
                    <img src={imgjs} className="img-fluid rounded-star" alt="..."/>
                    </div>
                <div class="col">   
                    <img src={imgpython} className="img-fluid rounded-star" alt="..."/>
                </div>
                <div class="col">   
                    <img src={imgnode} className="img-fluid rounded-star" alt="..."/>
                </div>
                <div class="col">    
                    <img src={imgreact} className="img-fluid rounded-star" alt="..."/>
                </div>
                <div class="col">   
                    <img src={imgflask} className="img-fluid rounded-star" alt="..."/>
                </div>
                <div class="col">    
                    <img src={imgmysql} className="img-fluid rounded-star" alt="..."/>
                </div>
                <div class="col">    
                    <img src={imgfawe} className="img-fluid rounded-star" alt="..."/>
                </div>
                <div class="col">    
                    <img src={imgbootstrap} className="img-fluid rounded-star" alt="..."/>
                </div>
            </div>
        </div>   
    );
};

export default Tecnologias;
