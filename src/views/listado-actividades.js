import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'

const ListadoActividades = ()=>{

    const {store}= useContext(Context);
    const {actividades}=store;

    // useEffect(()=>{
    //     actions.getActivityById("",id)
    // },[])

    const confirmacion = () => {
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
                'Tu actividad ha sido eliminada',
                'success'
              )
            }
          })
    }

    return(
        <div className="container mt-4">
            <div className="row">
            <div className="col-4 fs-5 bg-primary text-light">Buscar actividades</div>
            </div>
            <div className="row border boder-primary">
                <div className="col-8">
                    <form className="row g-3 mt-3">
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
                </div>

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
                    <Link type="submit" className="btn btn-success" to="/listado-actividades/registro-edicion-actividad">Agregar Actividad</Link>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-4 fs-5 bg-primary text-light">Mis Actividades</div>
            </div>

            <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Código</th>
                <th scope="col">Proyecto</th>
                <th scope="col">Descripción</th>
                <th scope="col">Fecha inicio</th>
                <th scope="col">Fecha fin</th>
                <th scope="col">% Uso</th>
                <th scope="col">HH presupuesto</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>

                {!!actividades &&
                    actividades.length>0 &&
                    actividades.map((actividad,index)=>{
                        return(
                            <tr key={index}>
                                <th scope="row">{actividad.id}</th>
                                <td>{actividad.codigo}</td>
                                <td>{actividad.proyecto}</td>
                                <td>{actividad.descripcion}</td>
                                <td>{actividad.fechainicio}</td>
                                <td>{actividad.fechafin}</td>
                                <td>{actividad.uso}</td>
                                <td>{actividad.presupuesto}</td>
                                <td>{actividad.estado}</td>
                                <td>
                                    <button className="edit-icon border-white bg-transparent text-primary"> <i className="fas fa-database"></i> </button>
                                    <Link className="edit-icon border-white bg-transparent text-success" to={`/${actividad.id}/registro-edicion-actividad`}><i className="far fa-edit "></i> </Link>
                                    <button className="trash-icon border-white bg-transparent text-danger" onClick={()=>{confirmacion()}}><i className="far fa-trash-alt "></i> </button>
                                    
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