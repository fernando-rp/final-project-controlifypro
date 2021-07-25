import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

const RegistroActividad = ()=>{
    const {store, actions}= useContext(Context);
    const history= useHistory();
    
    const [data,setData]=useState(null)
    const {proyectos, usuario_id}= store;

    const handleChangeActividad = (e) => {
      console.log(e.target.value)
      setData({
        ...data,
        ['usuario_id']: usuario_id,
        [e.target.name]: e.target.value,
      })

      
    }

    useEffect(()=>{
      actions.getProyectos("/proyectos")
    },[])

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
            <div className="row justify-content-center">
              <div className="col-md-8 p-0 bg-dark text-white">
                <div className="pl-2"><h3>Agregar Actividad</h3></div>
              </div>
            </div>
            <form onSubmit={(e) => {            
                            e.preventDefault();
                            actions.addActividad("/actividades", data, history);
                        }}> 

            <div className="row justify-content-center">
              <div className="col-md-8 border border-dark">

                <div className="row mt-4 justify-content-center">
                  <div className="col-md-5">
                    <label htmlFor="proyecto_id" className="form-label">Proyecto</label>
                    <select className="form-control" defaultValue={'DEFAULT'} name="proyecto_id" onChange={handleChangeActividad} >
                        <option value="DEFAULT" disabled>Seleccionar...</option>
                      {!!proyectos &&
                        proyectos.length>0 &&
                        proyectos.map((proyectos,index)=>{
                            return(
                              <option key={index} value={proyectos.id}>{proyectos.nombre}</option>
                            )
                        })
                      }
                    </select>
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="fecha_inicio" className="form-label">Fecha inicio</label>
                    <input type="date" className="form-control" name="fecha_inicio" onChange={handleChangeActividad} />
                  </div>
                </div>

                <div className="row mt-3 justify-content-center">
                  <div className="col-md-10">
                    <label htmlFor="desripcion">Descripción</label>
                    <textarea 
                      name="descripcion"
                      className="form-control" 
                      placeholder="" 
                      id="desripcion" 
                      autoComplete="off"
                      onChange={handleChangeActividad}
                      >
                    </textarea>
                  </div>
                </div>

                <div className="row mt-3 justify-content-center">
                  <div className="col-md-3">
                    <label htmlFor="presupuesto" className="form-label">Horas Destinadas</label>
                    <input 
                      type="number" 
                      name="presupuesto"
                      className="form-control" 
                      id="presupuesto"
                      autoComplete="off"
                      onChange={handleChangeActividad}
                    />
                  </div>

                      <div className="col-md-7 mt-3">

                      </div>
                </div>

                <div className="row my-4 justify-content-center">
                  <button type="submit" className="btn btn-success mx-2" onClick={()=>{confirmacion_saved()}}>Guardar</button>
                  <Link className="btn btn-outline-danger mx-2" to="/listado-actividades">Cancelar</Link>
                </div>

              </div>
            </div>
          </form>     

        </div>
    )
}

export default RegistroActividad ;