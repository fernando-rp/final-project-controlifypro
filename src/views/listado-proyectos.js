import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'

const ListadoProyectos = () => {

  const {store,actions}= useContext(Context);
  const {proyectos, localidades} = store;

  const [datos, setDatos] = useState({})

  useEffect(()=>{
      actions.getProyectos("/proyectos")
      actions.getLocalidades("/localidades")
  },[])

  const buscar_proyectos = () => {
    // console.log(datos);
    actions.srcProyectos("/proyectos/buscar", datos)
  }


  const handleInputChange = (event) => {
    setDatos({
        ...datos,
        [e.target.name] : e.target.value
    })
  }

  const limpiar = () => {
    setDatos({})
  }

  const confirmacion = (a_id) => {
      Swal.fire({
          title: '¿Estás seguro?',
          text: "La información se eliminará",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Sí, borrar!'
        }).then((result) => {
          if (result.isConfirmed) {

            Swal.fire(
              'Eliminado',
              'Tu proyecto ha sido eliminado',
              'success'
            )
          }
        })
  }

  return(
    <>
      <div className="container mt-4">
          
          <div className="col-sm-4 p-0 bg-dark text-white">
            <div className="pl-2"><h3>Buscar proyectos</h3></div>
          </div>

          <div className="col border border-dark">
            <form onSubmit={(e) => {            
                            e.preventDefault();
                            buscar_proyectos();
                          }}>
              <div className="row m-2 mt-3">
                <div className="col-md-4">
                    <label htmlFor="sigla" className="form-label">Código</label>
                    <input type="text" className="form-control" name="sigla" autoComplete="off" onChange={handleInputChange}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" autoComplete="off" onChange={handleInputChange}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="localidad_id" className="form-label">Localidad</label>
                    <select className="form-control" defaultValue={'DEFAULT'} name="localidad_id" onChange={handleInputChange} >
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
              </div>

              <div className="row m-2">
                <div className="col-md-4">
                    <label htmlFor="fecha_inicio" className="form-label">Fecha inicio</label>
                    <input type="date" className="form-control" name="fecha_inicio" onChange={handleInputChange} />
                    {/* <input type="text" className="form-control" id="inputfechainicio" /> */}
                </div>
                <div className="col-md-4">
                    <label htmlFor="fecha_entrega" className="form-label">Fecha fin</label>
                    <input type="date" className="form-control" name="fecha_entrega" onChange={handleInputChange} />
                </div>
                <div className="col-md-4 mb-4">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <select name="estado" className="form-control" defaultValue={'DEFAULT'} onChange={handleInputChange} >
                        <option value="DEFAULT" disabled>Seleccionar...</option>
                        <option value="1">Activos</option>
                        <option value="0">Inactivos</option>
                    </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mx-auto">
                    <button 
                      className="btn btn-success btn-round mb-3 mx-2"
                      type="submit"
                    >Buscar</button>
                    <button 
                      className="btn btn-outline-primary btn-round mb-3 mx-2"
                      type="reset"
                      onClick={()=>{limpiar()}}
                    >Limpiar</button>
                </div>
              </div>
            </form>
          </div>    
          

          <div className="row mt-4">
              <div className="col-md-12 d-flex justify-content-end">
                  <Link className="btn btn-success" to="/registro-proyectos">Agregar Proyecto</Link>
              </div>
          </div>

          {/* <div className="row mt-4">
              <div className="col-4 fs-5 bg-info text-light">Mis Proyectos</div>
          </div> */}

          <table className="table table-hover table-responsive">
            <thead className="thead-dark text-">
                <tr>
                  <th className="text-center" scope="col">Código</th>
                  <th className="text-center" scope="col">Nombre</th>
                  <th className="text-center" scope="col">Descripción</th>
                  <th className="text-center" scope="col">Fecha Inicio</th>
                  <th className="text-center" scope="col">Fecha Término</th>
                  <th className="text-center" scope="col">% Uso HH</th>
                  <th className="text-center" scope="col">Presupuesto HH</th>
                  <th className="text-center" scope="col">Estado</th>
                  <th className="text-center" scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>

                {!!proyectos &&
                    proyectos.length>0 &&
                    proyectos.map((proyecto,index)=>{
                        return(
                            <tr key={index}>
                              <td className="text-center">{proyecto.sigla}</td>    
                              <td className="">{proyecto.nombre}</td>
                              <td className="">{proyecto.descripcion}</td>
                              <td className="text-center">{proyecto.fecha_inicio}</td>
                              <td className="text-center">{proyecto.fecha_entrega}</td>
                              <td className="text-center">{proyecto.porcentaje_avance} %</td>
                              <td className="text-center">{proyecto.presupuesto}</td>
                              <td className="text-center align-items-center">
                                <span className={proyecto.estado===1?"tag badge badge-success":"tag badge badge-danger"}>{proyecto.estado===1?"Activo":"Inactivo"}</span>
                              </td>
                              <td className="text-center">
                                  <button className="edit-icon border-0 bg-transparent text-primary mx-1"> <i className="fas fa-database"></i> </button>
                                  <Link className="edit-icon border-0 bg-transparent text-success mx-1" to={`/registro-edicion-proyecto/${proyecto.id}`}><i className="far fa-edit "></i></Link>
                                  <button className="trash-icon border-0 bg-transparent text-danger" onClick={()=>{confirmacion(proyecto.id)}} ><i className="far fa-trash-alt "></i></button>
                                  
                              </td>
                            </tr>
                        )
                    })
                }
            </tbody>
          </table>
      </div>
    </>
  )
}

export default ListadoProyectos;
