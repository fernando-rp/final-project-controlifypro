import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

const RegistroActividad = ()=>{
  const {store, actions}= useContext(Context);
  const history= useHistory();


  const [data,setData]=useState(null)
  const {usuarios, localidades} = store;

    const handleChangeProyecto = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      })
    }

    useEffect(()=>{
      actions.getUsuarios("/usuarios/jefe_proyectos")
      actions.getLocalidades("/localidades")
    },[])

    const confirmacion_saved = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Proyecto Creado',
            showConfirmButton: false,
            timer: 1300
          })
    }

    return(
        <div className="container mt-4">


          <div className="row justify-content-center">
            <div className="col-md-8 p-0 bg-dark text-white">
              <div className="pl-2"><h3>Agregar proyecto</h3></div>
            </div>
          </div>

            <form onSubmit={(e) => {            
                            e.preventDefault();
                            actions.addProyecto("/proyectos", data, history);    
                            
                        }}> 


            <div className="row justify-content-center">
              <div className="col-md-8 border border-dark">

                <div className="row mt-4 justify-content-center">
                  <div className="col-md-3">
                    <label htmlFor="name" className="form-label">Sigla</label>
                    <input 
                      type="text" 
                      name="sigla"
                      className="form-control" 
                      id="inputsigla"
                      onChange={handleChangeProyecto}
                    />
                  </div>
                  <div className="col-md-7">
                    <label htmlFor="name" className="form-label">Nombre Proyecto</label>
                    <input 
                      type="text" 
                      name="nombre"
                      className="form-control" 
                      id="inputname"
                      onChange={handleChangeProyecto}
                    />
                  </div>
                </div>

                <div className="row mt-3 justify-content-center">
                  <div className="col-md-10">
                    <label htmlFor="floatingTextarea">Descripción</label>
                    <textarea 
                      name="descripcion"
                      className="form-control" 
                      placeholder="" 
                      id="floatingTextarea" 
                      onChange={handleChangeProyecto}
                      >
                    </textarea>
                  </div>
                </div>

                <div className="row mt-3 justify-content-center">
                  <div className="col-md-5">
                    <label htmlFor="localidad_id" className="form-label">Localidad</label>
                    <select className="form-control" defaultValue={'DEFAULT'} name="localidad_id" onChange={handleChangeProyecto} >
                        <option value="DEFAULT" disabled>Seleccionar...</option>
                      {!!localidades &&
                        localidades.length>0 &&
                        localidades.map((localidad,index)=>{
                            return(
                              <option key={index} value={localidad.id}>{localidad.nombre}</option>
                            )
                        })
                      }
                    </select>
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="jefe_proyecto_id" className="form-label">Jefe Proyecto</label>
                    <select className="form-control" defaultValue={'DEFAULT'} name="jefe_proyecto_id" onChange={handleChangeProyecto} >
                      <option value="DEFAULT" disabled>Seleccionar...</option>
                      {!!usuarios &&
                        usuarios.length>0 &&
                        usuarios.map((usuario,index)=>{
                            return(
                              <option key={index} value={usuario.id}>{usuario.primer_nombre}</option>
                            )
                        })
                      }
                    </select>
                  </div>
                </div>

                <div className="row mt-3 justify-content-center">
                  <div className="col-md-5">
                    <label htmlFor="fecha_inicio" className="form-label">Fecha inicio</label>
                    <input type="date" className="form-control" name="fecha_inicio" onChange={handleChangeProyecto} />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="fecha_entrega" className="form-label">Fecha Fin</label>
                    <input type="date" className="form-control" name="fecha_entrega" onChange={handleChangeProyecto} />
                  </div>
                </div>

                <div className="row mt-3 justify-content-center">
                  <div className="col-md-3">
                    <label htmlFor="name" className="form-label">Horas Vendidas</label>
                    <input 
                      type="number" 
                      name="presupuesto"
                      className="form-control" 
                      id="inputavance"
                      onChange={handleChangeProyecto}
                    />
                  </div>

                  <div className="col-md-7">
                    <label className="form-check-label mb-2" htmlFor="inlineFormCheck">Estado</label>
                    <div className="form-check">
                      <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="estado" id="inlineRadioActive" value="1" onClick={(e)=>handleChangeProyecto(e)}/>
                          <label className="form-check-label pl-1 mr-4" htmlFor="inlineRadioActive" >Activo</label>
                      </div>
                      <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="estado" id="inlineRadioInactive" value="0" onClick={(e)=>handleChangeProyecto(e)}/>
                          <label className="form-check-label pl-1" htmlFor="inlineRadioInactive">Inactivo</label>
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
                </div>

                <div className="row my-4 justify-content-center">
                  <button type="submit" className="btn btn-success mx-2" onClick={()=>{confirmacion_saved()}}>Guardar</button>
                  <Link className="btn btn-outline-danger mx-2" to="/listado-proyectos">Cancelar</Link>
                </div>

              </div>
            </div>
  
            </form>
        </div>
    )
}

export default RegistroActividad ;