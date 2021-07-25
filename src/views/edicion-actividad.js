import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

import moment from "moment";

const EdicionActividad = ()=>{
    const {store, actions}= useContext(Context);
    const {actividad,proyectos} = store;

    const {id}=useParams();
    const history= useHistory();

    useEffect(()=>{
      actions.getActividadById('/actividades',id)
      actions.getProyectos("/proyectos")
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

    const projectName = (e) => {
        actions.handleChangeActividad(e)
    }

    return(
      <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8 p-0 bg-dark text-white">
              <div className="pl-2"><h3>Editar Actividad ({id})</h3></div>
            </div>
          </div>
          <form onSubmit={(e) => {            
                          e.preventDefault();
                          actions.updateActividad("/actividades", id, history);
                      }}> 

          <div className="row justify-content-center">
            <div className="col-md-8 border border-dark">

              <div className="row mt-4 justify-content-center">
                <div className="col-md-5">
                  <label htmlFor="proyecto_id" className="form-label">Proyecto</label>
                  <select className="form-control" defaultValue={'DEFAULT'} name="proyecto_id" onChange={actions.handleChangeActividad} >
                      <option value={!!actividad && actividad.proyecto_id} disabled>Seleccionar...</option>
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
                  <input 
                    type="date" 
                    className="form-control" 
                    name="fecha_inicio"
                    value={!!actividad && actividad.fecha_inicio}
                    onChange={actions.handleChangeActividad} 
                    />
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
                    value={!!actividad && actividad.descripcion}
                    onChange={actions.handleChangeActividad}
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
                    value={!!actividad && actividad.presupuesto}
                    onChange={actions.handleChangeActividad}
                  />
                </div>
                <div className="col-md-7">
                    <label htmlFor="estado" className="form-check-label mb-2" htmlFor="inlineFormCheck">Estado</label>
                    <div className="form-check">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="estado"
                          id="inlineRadioActive"
                          value="1"
                          checked={!!actividad && actividad.estado == 1}
                          onChange={actions.handleChangeActividad}
                        />
                        <label className="form-check-label pl-1 mr-4" htmlFor="inlineRadioActive">Activo</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="estado"
                          id="inlineRadioInactive"
                          value="0"
                          checked={!!actividad && actividad.estado == 0}
                          onChange={actions.handleChangeActividad}
                        />
                        <label className="form-check-label pl-1" htmlFor="inlineRadioInactive">Inactivo</label>
                      </div>

                    </div>
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

export default EdicionActividad ;