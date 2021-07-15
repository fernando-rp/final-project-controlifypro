import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

const EdicionProyecto = ()=>{

    const {store, actions}= useContext(Context);
    const {actividad,proyectos} = store;
    const [value, onChange] = useState(new Date());

    const {id}=useParams();
    const history= useHistory();

    useEffect(()=>{

        actions.getActividadById('/actividades',id)
        
    },[])

    
    const confirmacion_saved = () => {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Actividad Editada',
            showConfirmButton: false,
            timer: 1300
          })
    }

    const projectName= (e)=>{

        actions.handleChangeProyecto(e)
        
    }


    return(
        <div className="container mt-4">
            <div className="row">
            <div className="col-4 fs-5 bg-primary text-light">Editar Proyecto ({id})</div>
            </div>
            <form onSubmit={(e) => {
                            e.preventDefault();
                            actions.updateActividad("/actividades", id, history);
                        
                            
                        }}> 
            <div className="row border boder-primary">
                <div className="col-12">
                    <div className="row g-3 mt-3">
                        <div className="col-md-8 mx-auto">
                                <select class="form-select" aria-label="" name="proyecto_id" onChange={(e)=>{projectName(e)}}>
                                <option selected>Seleccionar proyecto</option>
                                    {!!proyectos &&
                                        proyectos.map((proyecto) => {
                                            return (
                                                <option value={proyecto.id}>{proyecto.sigla}-{proyecto.nombre}</option>)
                                        })
                                    }
                                </select>
                           </div>

                        <div className="col-md-8 mx-auto">
                            <label for="name" className="form-label">Sigla Proyecto</label>
                            <input 
                            type="text" 
                            name="sigla"
                            className="form-control" 
                            id="inputavance"
                            value={!!proyecto && proyecto.sigla}
                            onChange={proyecto.handleChangeProyecto}
                             />
                        </div>   

                        <div className="col-md-8 mx-auto">
                            <label for="name" className="form-label">Nombre</label>
                            <input 
                            type="text" 
                            name="porcentaje_avance"
                            className="form-control" 
                            id="inputavance"
                            value={!!actividad && actividad.porcentaje_avance}
                            onChange={actions.handleChangeProyecto}
                             />
                        </div>   

                        <div className="col-md-8 mx-auto">
                            <label for="name" className="form-label">Porcentaje Avance</label>
                            <input 
                            type="text" 
                            name="porcentaje_avance"
                            className="form-control" 
                            id="inputavance"
                            value={!!actividad && actividad.porcentaje_avance}
                            onChange={actions.handleChangeProyecto}
                             />
                        </div>

                        <div class="col-md-8 mx-auto">
                            <label for="floatingTextarea">Descripción</label>
                            <textarea 
                            name="descripcion"
                            class="form-control" 
                            placeholder="" 
                            id="floatingTextarea" 
                            value={!!actividad && actividad.descripcion}
                            onChange={actions.handleChangeProyecto}
                            
                            >

                            </textarea>
                        </div>
                        

                        <div className="col-md-8 mx-auto">
                           
                            <label for="presupuesto" className="form-label">Fecha Inicio (dd-mm-aa)</label>
                            <input type="text" 
                            name="fecha_inicio"
                            className="form-control col-2" 
                            id="inputfechainicio" 
                            value={!!actividad && actividad.fecha_inicio}
                            onChange={actions.handleChangeProyecto}
                            />


                            {/* <div className="col-md-6 bg-info">
                            
                             <Calendar
                             
                             name="fecha_inicio"
                             onChange={onChange}
                               value={value}
                             />
                           
                           </div> */}
                            

                        </div>

                        <div class="col-md-8 mx-auto">
                            <label for="floatingTextarea">Observación</label>
                            <textarea 
                            name="observacion"
                            class="form-control" 
                            placeholder="" 
                            id="floatingTextarea2" 
                            value={!!actividad && actividad.observacion}
                            onChange={actions.handleChangeProyecto}
                            ></textarea>
                        </div>

                        <div className="col-md-8 mx-auto">
                            <label for="inputfechafin" className="form-label">Usuario</label>
                            <input 
                            name="usuario_id"
                            type="text" 
                            className="form-control" 
                            id="inputusuario" 
                            value={!!actividad && actividad.usuario_id}
                            onChange={actions.handleChangeProyecto}/>
                        </div>

                        <div className="col-md-8 mx-auto">
                        <label className="form-check-label mb-2" for="inlineFormCheck">Estado</label>
                            <div className="form-check">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="estado" id="inlineRadioActive" value="1" onClick={(e)=> actions.handleChangeProyecto(e)} />
                                    <label class="form-check-label" for="inlineRadioActive">Activo</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="estado" id="inlineRadioInactive" value="0" onClick={(e)=>actions.handleChangeProyecto(e)} />
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

export default EdicionProyecto ;