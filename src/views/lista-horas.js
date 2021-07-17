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
                            <div className="col-md-6 mb-3">

                                <label for="floatingTextarea">Proyecto</label> <br/>
                                <select class="form-select" aria-label="" name="proyecto_id" onChange={(e) => { projectName(e) }}>
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
                           <label for="floatingTextarea">Actividad</label> <br/>
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

                        <div className="col-md-6 mb-3 ">
                             <label for="presupuesto" className="form-label">Fecha</label>

                                <div className="col-md-8">
                                    <Calendar
                                        name="fecha_inicio"
                                        onChange={onChange}
                                        onClickDay={formatDate}
                                        value={value}
                                    />
                                </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label for="floatingTextarea" >Descripción</label>
                            <textarea
                            rows="4"                         
                            name="descripcion"
                            className="form-control mb-3 col-8" 
                            placeholder="" 
                            id="floatingTextarea"         
                            >
                            </textarea>

                                <div className="row">
                                    <div className="col-4">
                                        <label for="floatingTextarea">Horas</label>
                                        <input
                                            name="hh"
                                            type="text"
                                            className="form-control mb-3 col-12"
                                            id="inputhh"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <label for="floatingTextarea">Horas Extras</label>
                                        <input
                                            name="hh_extra"
                                            type="text"
                                            className="form-control mb-3 col-12"
                                            id="inputhhe"
                                        />
                                    </div>

                                </div>

                            <label for="usuario" className="form-label">Usuario</label>
                            <input 
                            name="usuario_id"
                            type="text" 
                            className="form-control col-5" 
                            id="inputusuario" 
                            />
                        </div>

                        <div className="col-md-12 mx-auto">
                        <label className="form-check-label mb-3" for="inlineFormCheck">Estado</label>
                            <div className="form-check">
                                <div class="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="estado" id="inlineRadioActive" value="1" onClick={(e)=> actions.handleChangeActividad(e)} />
                                    <label className="form-check-label p-0" for="inlineRadioActive">Activo</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="estado" id="inlineRadioInactive" value="0" onClick={(e)=>actions.handleChangeActividad(e)} />
                                    <label className="form-check-label p-0" for="inlineRadioInactive">Inactivo</label>
                                </div>      
                            </div>
                        </div>
                    </div>
                    
                </div> 

                <div className="col-11 d-flex justify-content-end mb-4">
                        <div className="row g-3 mt-3">
                            <div className="col-md-2 mx-auto">
                                <button type="submit" className="btn btn-success mb-2" onClick={() => { confirmacion_saved() }}>Agregar</button>
                            </div>
                            <div className="col-md-2 mx-auto">
                                <button className="btn btn-info" type="reset">Limpiar</button>
                            </div>
                        </div>
                    </div>
                   


            </div>  

               

            </form>
              

        </div>
        
    )
}

export default ListaHoras ;