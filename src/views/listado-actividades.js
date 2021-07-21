import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'

const ListadoActividades = ()=>{

  const {store, actions} = useContext(Context);
  const {actividades, proyectos, localidades} = store;
  
  const [datos, setDatos] = useState({})

  useEffect(()=>{
    actions.getActividades("/actividades")
    actions.getProyectos("/proyectos")
  },[])

  const buscar_actividades = () => {
    // console.log(datos);
    actions.srcActividades("/actividades/buscar", datos)
  }

  const handleInputChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const limpiar = () => {
    // console.log('click')
    setDatos({})
  }

  const confirmacion = (a_id) => {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Se desactivará la actividad",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí!'
      }).then((result) => {
        if (result.isConfirmed) {
          actions.deleteActividad(a_id)
          Swal.fire(
            'Desactivado',
            'Tu actividad ha sido desactivada',
            'success'
          )
        }
      })
  }

  return(
    <div className="container mt-4">

      <div className="col-sm-4 p-0 bg-dark text-white">
        <div className="pl-2"><h3>Buscar Actividades</h3></div>
      </div>

      <div className="col border boder-dark">
        <form onSubmit={(e) => {            
                        e.preventDefault();
                        buscar_actividades();
                      }}>
              <div className="row m-2 mt-3 justify-content-center">

                <div className="col-md-4">
                    <label htmlFor="proyecto_id" className="form-label">Proyecto</label>
                    <select className="form-control" defaultValue={'DEFAULT'} name="proyecto_id" onChange={handleInputChange} >
                        <option value="DEFAULT" disabled>Seleccionar...</option>
                      {!!proyectos &&
                        proyectos.length>0 &&
                        proyectos.map((proyecto,index)=>{
                            return(
                              <option key={index} value={proyecto.id}>{proyecto.nombre}</option>
                            )
                        })
                      }
                    </select>
                </div>

                <div className="col-md-4">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input type="text" className="form-control" name="descripcion" autoComplete="off" onChange={handleInputChange}/>
                </div>

              </div>

              <div className="row m-2 justify-content-center">
                <div className="col-md-4">
                    <label htmlFor="fecha_inicio" className="form-label">Fecha inicio</label>
                    <input type="date" className="form-control" name="fecha_inicio" onChange={handleInputChange} />
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
            <div className="col-md-4 mx-auto text-center">
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
              <Link type="submit" className="btn btn-success" to="/registro-actividad"><i className="fas fa-plus-circle mr-2"></i> Agregar Actividad</Link>
          </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover ">
        <thead className="thead-dark">
              <tr>
              <th className="text-center" scope="col">Proyecto</th>
              <th className="text-center" scope="col">Descripción</th>
              <th className="text-center" scope="col">Fecha Inicio</th>
              <th className="text-center" scope="col">% Uso HH</th>
              <th className="text-center" scope="col">Presupuesto HH</th>
              <th className="text-center" scope="col">Estado</th>
              <th className="text-center" scope="col">Acciones</th>
              </tr>
          </thead>
          <tbody>

              {!!actividades &&
                actividades.length>0 &&
                actividades.map((actividad,index)=>{
                  return(
                    <tr key={index}>
                        <th className="text-center" scope="row">{!!proyectos &&
                            proyectos.map((proyecto)=>{
                                if (proyecto.id===actividad.proyecto_id){
                                    return(`${proyecto.sigla}-${proyecto.nombre}`)
                                }
                            })}</th>
                        <td className="text-center">{actividad.descripcion}</td>
                        <td className="text-center">{actividad.fecha_inicio}</td>
                        <td className="text-center">{actividad.porcentaje_avance} %</td>
                        <td className="text-center">{actividad.presupuesto}</td>
                        <td className="text-center align-items-center">
                          <span className={actividad.estado===1?"tag badge badge-success":"tag badge badge-danger"}>{actividad.estado===1?"Activo":"Inactivo"}</span>
                        </td>
                        <td className="text-center">
                            <button className="edit-icon border-0 bg-transparent text-primary mx-1"> <i className="fas fa-database"></i> </button>
                            <Link className="edit-icon border-0 bg-transparent text-success mx-1" to={`/registro-edicion-actividad/${actividad.id}`}><i className="far fa-edit "></i></Link>
                            <button className="trash-icon border-0 bg-transparent text-danger" onClick={()=>{confirmacion(actividad.id)}}><i className="far fa-trash-alt "></i></button>
                        </td>
                    </tr>
                  )
                })
              }
                
          </tbody>
        </table>
      </div> 
    </div>   
  )
}

export default ListadoActividades ;