import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";




const RegistroEdicionActividad = ()=>{
    const {store, actions}= useContext(Context);
    const {actividad} = store;

    const {id}=useParams();

    useEffect(()=>{

        actions.getActividadById('/actividades',id)
        
    },[])

    
    const confirmacion_saved = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 15000
          })
    }

    return(
        <div className="container mt-4">
            <div className="row">
            <div className="col-4 fs-5 bg-primary text-light">Editar Actividad ({id})</div>
            </div>
            <form onSubmit={(e) => {
                            e.preventDefault();
                            actions.updateActividad("/actividad", id)
                        }}> 
            <div className="row border boder-primary">
                <div className="col-12">
                    <form className="row g-3 mt-3">
                        <div className="col-md-8 mx-auto">
                            <label for="name" className="form-label">Id Proyecto</label>
                            <input 
                            type="text" 
                            name="proyecto_id"
                            className="form-control" 
                            id="inputname"
                            value={!!actividad && actividad.proyecto_id}
                            onChange={actions.handleChangeActividad}
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
                            onChange={actions.handleChangeActividad}
                             />
                        </div>

                        <div class="col-md-8 mx-auto">
                            <label for="floatingTextarea">Descripción</label>
                            <textarea class="form-control" placeholder="" id="floatingTextarea" value={!!actividad && actividad.descripcion}></textarea>
                        </div>

                        <div className="col-md-8 mx-auto">
                            <label for="presupuesto" className="form-label">Fecha Inicio</label>
                            <input type="text" className="form-control col-2" id="inputfechainicio" value={!!actividad && actividad.fecha_inicio}/>
                        </div>

                        <div class="col-md-8 mx-auto">
                            <label for="floatingTextarea">Observación</label>
                            <textarea class="form-control" placeholder="" id="floatingTextarea2" value={!!actividad && actividad.observación}></textarea>
                        </div>

                        <div className="col-md-8 mx-auto">
                            <label for="inputfechafin" className="form-label">Usuario</label>
                            <input type="text" className="form-control" id="inputusuario" value={!!actividad && actividad.usuario_id}/>
                        </div>

                        <div className="col-md-8 mx-auto">
                        <label className="form-check-label mb-2" for="inlineFormCheck">Estado</label>
                            <div className="form-check">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioActive" value={!!actividad && actividad.estado} />
                                    <label class="form-check-label" for="inlineRadioActive">Activo</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioInactive" value={!!actividad && actividad.estado} />
                                    <label class="form-check-label" for="inlineRadioInactive">Inactivo</label>
                                </div>      
                            </div>
                        </div>
                    </form>
                </div> 
            </div>  

            <div className="col-10 d-flex justify-content-end mb-4">
                    <div className="row g-3 mt-3">
                        <div className="col-md-2 mx-auto">
                            <button type="button" className="btn btn-success" onClick={()=>{confirmacion_saved()}}>Guardar</button>
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

export default RegistroEdicionActividad ;