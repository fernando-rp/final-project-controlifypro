import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

const EdicionHora= ()=>{
    const {store, actions}= useContext(Context);
    const {proyectos,hora,actividades_proyecto} = store;
    const [data, setData] = useState(hora)

    const {id}=useParams();
    const history= useHistory();

    useEffect(()=>{
        actions.getHoraById('/horas',id)
        actions.getProyectos('/proyectos')
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

          <div className="col-sm-4 p-0 bg-dark text-white">
            <div className="pl-2"><h3>Editar Hora ({id})</h3></div>
          </div>

          <div className="col border border-dark">
            <form onSubmit={(e) => {
                                e.preventDefault();
                                actions.updateHora("/horas", id, history);
                            }}> 

              <div className="row m-2 mt-3 justify-content-center">
                <div className="col-md-4">
                    <label htmlFor="proyecto_id" className="form-label">Proyecto</label>
                    <select className="form-control" name="proyecto_id" defaultValue={!!hora && hora.proyecto_id} onChange={(e)=>{actividadesProyecto(e)}}>
                    <option value="DEFAULT" disable="true">Seleccionar...</option>
                      {!!proyectos &&
                        proyectos.length>0 &&
                        proyectos.map((proyectos, index)=>{
                            return(
                              <option key={index} value={proyectos.id}>{proyectos.nombre}</option>
                            )
                        })
                      }
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="actividad_id">Actividad</label>
                    <select className="form-control" aria-label="" name="actividad_id" defaultValue={"DEFAULT"} onChange={actions.handleChangeHora}>
                    <option value={!!hora && hora.actividad_id} disabled>Seleccionar...</option>
                        {!!actividades_proyecto &&
                            actividades_proyecto.map((actividad, index) => {
                                return (
                                    <option key={index}  value={actividad.id}>{actividad.descripcion}</option>)
                            })
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="fecha" className="form-label">Fecha</label>
                    <input 
                      type="date" 
                      className="form-control"
                      name="fecha"
                      value={!!hora && hora.fecha}
                      onChange ={actions.handleChangeHora}
                    />
                </div>
              </div>

              <div className="row m-2 mt-3 justify-content-center">
                <div className="col-md-8">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea 
                      name="descripcion"
                      rows="4"
                      className="form-control" 
                      placeholder="" 
                      value={!!hora && hora.descripcion}
                      onChange={actions.handleChangeHora}
                    >
                    </textarea>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="hh" className="form-label">Horas</label>
                            <input 
                              type="text" 
                              name="hh"
                              className="form-control" 
                              value={!!hora && hora.hh}
                              onChange={actions.handleChangeHora}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="hh_extra" className="form-label">Horas Extras</label>
                            <input 
                              type="text" 
                              name="hh_extra"
                              className="form-control" 
                              value={!!hora && hora.hh_extra}
                              onChange={actions.handleChangeHora}
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <label htmlFor="estado" className="form-check-label mb-2" htmlFor="inlineFormCheck">Estado</label>
                              <div className="form-check">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="estado"
                                    id="inlineRadioActive"
                                    value="1"
                                    checked={!!hora && hora.estado == 1}
                                    onChange={actions.handleChangeHora}
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
                                    checked={!!hora && hora.estado == 0}
                                    onChange={actions.handleChangeHora}
                                  />
                                  <label className="form-check-label pl-1" htmlFor="inlineRadioInactive">Inactivo</label>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
              </div>

              <div className="row my-4 justify-content-center">
                  <button type="submit" className="btn btn-success mx-2" onClick={()=>{confirmacion_saved()}}>Guardar</button>
                  <Link className="btn btn-outline-danger mx-2" to="/lista-horas">Cancelar</Link>
              </div>    

            </form>

          </div>
        </div>
        
    )
}

export default EdicionHora ;