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
                    <label htmlFor="sigla" className="form-label">Sigla</label>
                    <input 
                      type="text" 
                      name="sigla"
                      className="form-control" 
                      id="sigla"
                      autoComplete="off"
                      onChange={handleChangeProyecto}
                    />
                  </div>
                  <div className="col-md-7">
                    <label htmlFor="nombre" className="form-label">Nombre Proyecto</label>
                    <input 
                      type="text" 
                      name="nombre"
                      className="form-control" 
                      id="nombre"
                      autoComplete="off"
                      onChange={handleChangeProyecto}
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
                    <label htmlFor="presupuesto" className="form-label">Horas Vendidas</label>
                    <input 
                      type="number" 
                      name="presupuesto"
                      className="form-control" 
                      id="presupuesto"
                      autoComplete="off"
                      onChange={handleChangeProyecto}
                    />
                  </div>

                      <div class="col-md-7 mt-3">

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