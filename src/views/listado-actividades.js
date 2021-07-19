import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'

const ListadoActividades = ()=>{

    const {store,actions}= useContext(Context);
    const {actividades,proyectos}=store;

    useEffect(()=>{
        actions.getActividades("/actividades")
    },[])

    const buscar_actividades = () => {
      // console.log(datos);
      //actions.srcProyectos("/proyectos/buscar", datos)
    }

    const confirmacion = (a_id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "El proyecto quedará desactivado en el sistema",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí!'
          }).then((result) => {
            if (result.isConfirmed) {
              actions.deleteActividad(a_id)
              Swal.fire(
                'Eliminado',
                'Tu actividad ha sido eliminada',
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

        <div className="col border boder-info">
          <form onSubmit={(e) => {            
                            e.preventDefault();
                            buscar_actividades();
                          }}>
                <div className="col-md-4">
                    <label for="code" className="form-label">Código</label>
                    <input type="text" className="form-control" id="inputcode" />
                </div>
                <div className="col-md-4">
                    <label for="inputName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputname" />
                </div>
                <div className="col-md-4">
                    <label for="inputSite" className="form-label">Site</label>
                    <select id="inputSite" className="form-select">
                        <option selected>Select...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="inputfechainicio" className="form-label">Fecha inicio</label>
                    <input type="text" className="form-control" id="inputfechainicio" />
                </div>
                <div className="col-md-4">
                    <label for="inputfechafin" className="form-label">Fecha fin</label>
                    <input type="text" className="form-control" id="inputfechafin" />
                </div>
                <div className="col-md-4 mb-4">
                    <label for="inputstate" className="form-label">Estado</label>
                    <select id="inputstate" className="form-select">
                        <option selected>Select...</option>
                        <option>...</option>
                    </select>
                </div>
            </form>
          

          <div className="col-4 d-flex justify-content-left align-items-center">
              <form className="row g-3 mt-3">
                  <div className="col-md-2 mx-auto">
                      <button type="submit" className="btn btn-success">Buscar</button>
                  </div>
                  <div className="col-md-2 mx-auto">
                      <button type="submit" className="btn btn-light">Limpiar</button>
                  </div>

              </form>
          </div>
        </div>    

        <div className="row mt-4">
            <div className="col-md-12 d-flex justify-content-end">
                <Link type="submit" className="btn btn-success" to="/listado-actividades/registro-actividad">Agregar Actividad</Link>
            </div>
        </div>

        <div className="row mt-4">
            <div className="col-4 fs-5 bg-info text-light">Mis Actividades</div>
        </div>

        <table className="table">
          <thead>
              <tr>
              <th className="text-center" scope="col">Proyecto</th>
              <th className="text-center" scope="col">Descripción</th>
              <th className="text-center" scope="col">Fecha Inicio</th>
              <th className="text-center" scope="col">Porcentaje Avance</th>
              <th className="text-center" scope="col">Observación</th>
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
                              <td className="text-center"> {actividad.descripcion}</td>
                              <td className="text-center">{actividad.fecha_inicio}</td>
                              <td className="text-center">{actividad.porcentaje_avance} %</td>
                              <td className="text-center">{actividad.observacion}</td>
                              <td className="text-center">{actividad.estado===1?"Activo":"Inactivo"}</td>

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
    )
}

export default ListadoActividades ;