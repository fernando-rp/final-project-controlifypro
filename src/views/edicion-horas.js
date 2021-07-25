import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import Calendar from 'react-calendar';




const EdicionHora= ()=>{
    const {store, actions}= useContext(Context);
    const {actividad,proyectos,hora,actividades_proyecto,usuarios} = store;
    const [data, setData] = useState(hora)

    const {id}=useParams();
    const history= useHistory();

    useEffect(()=>{

        actions.getProyectos('/proyectos')
        actions.getHoraById('/horas',id)
        actions.getUsuarios('/usuarios')
        actions.getActividades('/actividades')

        
    },[])

    
    const confirmacion_saved = () => {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Hora Editada',
            showConfirmButton: false,
            timer: 1300
          })
    }



    const actividadesProyecto=(e)=>{
        actions.getActividadesProyectos(`/actividades/${e.target.value}/proyectos`)
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }


    return(
        <div className="container mt-4">
            <div className="row">
            <div className="col-4 fs-5 bg-primary text-light">Editar Hora ({id})</div>
            </div>
            <form onSubmit={(e) => {
                            e.preventDefault();
                            actions.updateHora("/horas", id, history);
                        
                            
                        }}> 
            <div className="row border boder-primary">
                <div className="col-12">
                    <div className="row g-3 mt-3">
                            <div className="col-md-6 mx-auto mb-4">
                            <label for="name" className="form-label">Proyecto</label>
                            <br/>
                                <select class="form-select col-6" aria-label="" name="proyecto_id" onChange={(e)=>{actividadesProyecto(e)}}>
                                <option selected>Seleccionar proyecto</option>
                                    {!!proyectos &&
                                        proyectos.map((proyecto) => {
                                            return (
                                                <option value={proyecto.id}>{proyecto.sigla}-{proyecto.nombre}</option>)
                                        })
                                    }
                                </select>
                           </div>

                           <div className="col-md-6 mb-3">
                                <label for="actividad_id">Actividad</label> <br />
                                <select class="form-select col-6" aria-label="" name="actividad_id" onChange={actions.handleChangeHora}>
                                    <option selected>Seleccionar actividad</option>
                                    {!!actividades_proyecto &&
                                        actividades_proyecto.map((actividad) => {
                                            return (
                                                <option value={actividad.id}>{actividad.descripcion}</option>)
                                        })
                                    }
                                </select>
                            </div>

                        <div className="col-md-6 mx-auto mb-3">
                            <label for="name" className="form-label">Horas</label>
                            <input 
                            type="text" 
                            name="hh"
                            className="form-control col-10" 
                            value={!!hora && hora.hh}
                            onChange={actions.handleChangeHora}
                             />
                        </div>
                        <div className="col-md-6 mx-auto mb-3">
                            <label for="name" className="form-label">Horas Extras</label>
                            <input 
                            type="text" 
                            name="hh_extra"
                            className="form-control col-10" 
                            value={!!hora && hora.hh_extra}
                            onChange={actions.handleChangeHora}
                             />
                        </div>

                        <div class="col-md-6 mx-auto mb-3">
                            <label for="floatingTextarea">Descripción</label>
                            <textarea 
                            name="descripcion"
                            class="form-control col-10" 
                            placeholder="" 
                            value={!!hora && hora.descripcion}
                            onChange={actions.handleChangeHora}       
                            >
                            </textarea>
                        </div>

                        <div className="col-md-6 mx-auto mb-3 ">
                                <label for="fecha" className="form-label">Fecha</label>
                                <input 
                                type="date" 
                                className="form-control mb-3 col-8"
                                name="fecha"
                                value={!!hora && hora.fecha}
                                onChange ={actions.handleChangeHora}   
                                />
                            </div>
                        

                        <div className="col-md-6 mx-auto mb-3">
                                <label for="usuario" className="form-label">Colaborador</label><br/>
                                <select class="form-select col-6" aria-label="" name="usuario_id" onChange={actions.handleChangeHora}  >
                                    <option selected>Seleccionar colaborador</option>
                                    
                                    {!!usuarios &&
                                        usuarios.map((usuario) => {
                                            return (
                                                <option value={usuario.id} >{usuario.primer_nombre} {usuario.apellido_paterno}</option>)
                                        })
                                    }
                                </select>
                        </div>

                        <div className="col-md-6 mx-auto mb-3">
                        <label className="form-check-label mb-2" for="inlineFormCheck">Estado</label>
                            <div className="form-check">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="estado" id="inlineRadioActive" value="1" onClick={(e)=> actions.handleChangeHora(e)} />
                                    <label class="form-check-label" for="inlineRadioActive">Activo</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="estado" id="inlineRadioInactive" value="0" onClick={(e)=>actions.handleChangeHora(e)} />
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
                             <Link className="btn btn-danger" to="/lista-horas">Cancelar</Link>
                        </div>
                    </div>
            </div>      

            </form>
              

        </div>
        
    )
}

export default EdicionHora ;