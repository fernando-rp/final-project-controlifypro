import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";




const RegistroEdicionActividad = ()=>{
    const {store, actions}= useContext(Context);
    const {actividad} = store;

    const {id}=useParams();

    useEffect(()=>{
        
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
            <div className="col-4 fs-5 bg-primary text-light">Registrar/Editar Actividad ({id})</div>
            </div>
            <div className="row border boder-primary">
                <div className="col-12">
                    <form className="row g-3 mt-3">
                        <div className="col-md-8 mx-auto">
                            <label for="name" className="form-label">Proyecto</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="inputname"
                            value={!!actividad && actividad.proyecto}
                             />
                        </div>

                        <div className="col-md-8 mx-auto">
                            <label for="name" className="form-label">Código</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="inputcode"
                            value={!!actividad && actividad.codigo}
                             />
                        </div>

                        <div class="col-md-8 mx-auto">
                            <label for="floatingTextarea">Descripción</label>
                            <textarea class="form-control" placeholder="" id="floatingTextarea" value={!!actividad && actividad.descripcion}></textarea>
                        </div>

                        <div className="col-md-8 mx-auto">
                            <label for="presupuesto" className="form-label">Presupuesto (HH)</label>
                            <input type="text" className="form-control col-2" id="inputpresupuesto" value={!!actividad && actividad.presupuesto}/>
                        </div>

                        <div className="col-md-8 mx-auto">
                            <label for="inputfechainicio" className="form-label">Fecha inicio</label>
                            <input type="text" className="form-control" id="inputfechainicio" value={!!actividad && actividad.fechainicio}/>
                        </div>

                        <div className="col-md-8 mx-auto">
                            <label for="inputfechafin" className="form-label">Fecha fin</label>
                            <input type="text" className="form-control" id="inputfechafin" value={!!actividad && actividad.fechafin}/>
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
                    <form className="row g-3 mt-3">
                        <div className="col-md-2 mx-auto">
                            <button type="button" className="btn btn-success" onClick={()=>{confirmacion_saved()}}>Agregar</button>
                        </div>
                        <div className="col-md-2 mx-auto">
                             <Link className="btn btn-danger" to="/listado-actividades">Cancelar</Link>
                        </div>
                    </form>
            </div>            

        </div>
        
    )
}

export default RegistroEdicionActividad ;