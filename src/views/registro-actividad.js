import { useContext, useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";


const RegistroActividad = ()=>{
    const {store, actions}= useContext(Context);
    const {proyectos}= store;
    const history= useHistory();

    const [data,setData]=useState(null)

    const handleChangeActividad= (e)=>{
        setData({
                ...data,
                [e.target.name]: e.target.value,
            })
    }

    const isActive= (e)=>{
        console.log("funcionando")
        setData({
                ...data,
                [e.target.name]: "1",
            })
            console.log(e)
    }

    const isInactive= (e)=>{
        setData({
                ...data,
                [e.target.name]: 0,
            })
    }

    
    const confirmacion_saved = () => {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 15000
          })
    }

    return(
        <div className="container mt-4">
            <div className="row">
            <div className="col-4 fs-5 bg-primary text-light">Agregar Actividad</div>
            </div>
            <form onSubmit={(e) => {            
                            e.preventDefault();
                            actions.addActividad("/actividades", data, history);    
                            
                        }}> 
            <div className="row border boder-primary">
                <div className="col-12">
                    <div className="row g-3 mt-3">
                            <div className="col-md-8 mx-auto">
                                <select class="form-select" aria-label="">
                                    {!!proyectos &&
                                        proyectos.map((proyecto) => {
                                            return (
                                                <option name="proyecto_id" selected>{proyecto.sigla}-{proyecto.nombre}</option>)
                                        })
                                    }
                                </select>
                            </div>


                        <div className="col-md-8 mx-auto">
                            <label for="name" className="form-label">Porcentaje Avance</label>
                            <input 
                            type="text" 
                            name="porcentaje_avance"
                            className="form-control" 
                            id="inputavance"
                            onChange={handleChangeActividad}
                             />
                        </div>

                        <div class="col-md-8 mx-auto">
                            <label for="floatingTextarea">Descripción</label>
                            <textarea 
                            name="descripcion"
                            class="form-control" 
                            placeholder="" 
                            id="floatingTextarea" 
                            onChange={handleChangeActividad}
                            
                            >

                            </textarea>
                        </div>

                        <div className="col-md-8 mx-auto">
                            <label for="presupuesto" className="form-label">Fecha Inicio</label>
                            <input type="text" 
                            name="fecha_inicio"
                            className="form-control col-2" 
                            id="inputfechainicio" 
                            onChange={handleChangeActividad}
                            />
                        </div>

                        <div class="col-md-8 mx-auto">
                            <label for="floatingTextarea">Observación</label>
                            <textarea 
                            name="observacion"
                            class="form-control" 
                            placeholder="" 
                            id="floatingTextarea2" 
                            onChange={handleChangeActividad}
                            ></textarea>
                        </div>

                        {/* <div className="col-md-8 mx-auto">
                            <label for="inputfechafin" className="form-label">Usuario</label>
                            <input 
                            name="usuario_id"
                            type="text" 
                            className="form-control" 
                            id="inputusuario" 
                            onChange={handleChangeActividad}/>
                        </div> */}

                        <div className="col-md-8 mx-auto">
                        <label className="form-check-label mb-2" for="inlineFormCheck">Estado</label>
                            <div className="form-check">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="estado" id="inlineRadioActive" onClick={(e)=>isActive(e)}/>
                                    <label class="form-check-label" for="inlineRadioActive" >Activo</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="estado" id="inlineRadioInactive"  onClick={()=>isInactive}/>
                                    <label class="form-check-label" for="inlineRadioInactive">Inactivo</label>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div> 
            </div>  

            <div className="col-10 d-flex justify-content-end mb-4">
                    <div className="row g-3 mt-3">
                        <div className="col-md-2 mx-auto">
                            <button type="submit" className="btn btn-success" onClick={()=>{confirmacion_saved()}}>Guardar</button>
                        </div>
                        <div className="col-md-2 mx-auto">
                             <Link className="btn btn-danger" to="/listado-actividades">Cancelar</Link>
                        </div>
                    </div>
            </div>      

            </form>
              

        </div>
        
    )
}

export default RegistroActividad ;