import { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




const RegistroActividad = ()=>{
    const {store, actions}= useContext(Context);
    const {proyectos}= store;
    const history= useHistory();
    const [value, onChange] = useState(new Date());


    const [data,setData]=useState(null)

    const formatDate = (date)=>{
        date=date.getFullYear()+"-"+(parseFloat(date.getMonth())+1)+"-"+date.getDate();
        setData({
            ...data,
            fecha_inicio: date
        })
    }

    const handleChangeActividad= (e)=>{
        setData({
                ...data,
                [e.target.name]: e.target.value,
            })
    }

    
    const projectName= (e)=>{
        setData({
            ...data,
            ["proyecto_id"]: e.target.value,
        })
    }


    const confirmacion_saved = () => {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Actividad creada',
            showConfirmButton: false,
            timer: 1300
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
                            <label for="proyecto" className="form-label">Proyecto</label>
                                <select class="form-select" aria-label="" onChange={(e)=>{projectName(e)}}>
                                <option name="proyecto_id">Selecciona Proyecto</option>
                                    {!!proyectos &&
                                        proyectos.map((proyecto) => {
                                            return (
                                                <option name="proyecto_id" value={proyecto.id} >{proyecto.sigla}-{proyecto.nombre}</option>)
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

                                <div className="col-md-8">
                                    <Calendar
                                        name="fecha_inicio"
                                        onChange={onChange}
                                        onClickDay={formatDate}
                                        value={value}
                                    />
                                </div>
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


                        <div className="col-md-8 mx-auto">
                            <label className="form-check-label mb-2" for="inlineFormCheck">Estado</label>
                            <div className="form-check">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="estado" id="inlineRadioActive" value="1" onClick={(e)=>handleChangeActividad(e)}/>
                                    <label class="form-check-label" for="inlineRadioActive" >Activo</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="estado" id="inlineRadioInactive" value="0" onClick={(e)=>handleChangeActividad(e)}/>
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