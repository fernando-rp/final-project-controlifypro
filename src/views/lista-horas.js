import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import Calendar from 'react-calendar';


const ListaHoras = ()=>{
    const {store, actions}= useContext(Context);
    const {actividades,proyectos,actividad} = store;
    const [value, onChange] = useState(new Date());
    const {id}=useParams();
    const history= useHistory();

    const [data,setData]=useState(null)

    useEffect(()=>{

        actions.getActividadById('/actividades',id)
        
    },[])

    const formatDate = (date)=>{
        date=date.getFullYear()+"-"+(parseFloat(date.getMonth())+1)+"-"+date.getDate();
        setData({
            ...data,
            fecha_inicio: date
        })
    }
    
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
        console.log(e.target.value)
        console.log(e.target.name)
        actions.handleChangeActividad(e)
        
    }


    return(
        <div className="container mt-4">
            <div className="row">
            <div className="col-4 fs-5 bg-primary text-light">Agregar Horas</div>
            </div>
            <form onSubmit={(e) => {
                            e.preventDefault();
                            actions.updateActividad("/actividades", id, history);
                        
                            
                        }}> 
            <div className="row border boder-primary mb-4">
                <div className="col-12">
                    <div className="row g-3 mt-3">
                        <div className="col-md-6 mx-auto">
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

                           <div className="col-md-6 mx-auto">
                                <select class="form-select" aria-label="" name="proyecto_id" onChange={(e)=>{projectName(e)}}>
                                <option selected>Seleccionar actividad</option>
                                    {!!actividades &&
                                        actividades.map((actividad) => {
                                            return (
                                                <option value="">{actividad.descripcion}</option>)
                                        })
                                    }
                                </select>
                           </div>


                        <div class="col-md-8">
                            <label for="floatingTextarea">Descripción</label>
                            <textarea 
                            name="descripcion"
                            class="form-control" 
                            placeholder="" 
                            id="floatingTextarea" 
                            value={!!actividad && actividad.descripcion}
                            onChange={actions.handleChangeActividad}
                            
                            >

                            </textarea>
                        </div>
                        

                        {/* <div className="col-md-6 ">
                             <label for="presupuesto" className="form-label">Fecha Inicio</label>

                                <div className="col-md-8">
                                    <Calendar
                                        name="fecha_inicio"
                                        onChange={onChange}
                                        onClickDay={formatDate}
                                        value={value}
                                    />
                                </div>
                        </div> */}

                        {/* <div class="col-md-8 mx-auto">
                            <label for="floatingTextarea">Observación</label>
                            <textarea 
                            name="observacion"
                            class="form-control" 
                            placeholder="" 
                            id="floatingTextarea2" 
                            value={!!actividad && actividad.observacion}
                            onChange={actions.handleChangeActividad}
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
                            onChange={actions.handleChangeActividad}/>
                        </div> */}

                        {/* <div className="col-md-8 mx-auto">
                        <label className="form-check-label mb-2" for="inlineFormCheck">Estado</label>
                            <div className="form-check">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="estado" id="inlineRadioActive" value="1" onClick={(e)=> actions.handleChangeActividad(e)} />
                                    <label class="form-check-label" for="inlineRadioActive">Activo</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="estado" id="inlineRadioInactive" value="0" onClick={(e)=>actions.handleChangeActividad(e)} />
                                    <label class="form-check-label" for="inlineRadioInactive">Inactivo</label>
                                </div>      
                            </div>
                        </div> */}


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

export default ListaHoras ;