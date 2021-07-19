import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import Calendar from 'react-calendar';


const ListaHoras = () => {
    const { store, actions } = useContext(Context);
    const { actividades, proyectos, horas } = store;
    const { id } = useParams();
    const history = useHistory();

    const [data, setData] = useState(null)

    useEffect(() => {

        actions.getHoras('/horas')
        actions.getProyectos('/proyectos')
        actions.getActividades('/actividades')

    }, [])

    const formatDate = (date) => {
        date = date.getFullYear() + "-" + (parseFloat(date.getMonth()) + 1) + "-" + date.getDate();
        setData({
            ...data,
            fecha_inicio: date
        })
    }

    const confirmacion_saved = () => {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Horas agregadas',
            showConfirmButton: false,
            timer: 1300
        })
    }

    const projectName = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        actions.handleChangeActividad(e)

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
                'Tus horas han sido eliminadas',
                'success'
              )
            }
          })
    }


    return (
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-4 fs-5 bg-primary text-light">Agregar Horas</div>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                // actions.updateActividad("/horas", id, history);


            }}>
                <div className="row border boder-primary mb-4">
                    <div className="col-12">
                        <div className="row g-3 mt-3">
                            <div className="col-md-6 mb-3">

                                <label for="floatingTextarea">Proyecto</label> <br />
                                <select className="form-select" aria-label="" name="proyecto_id" >
                                    <option selected>Seleccionar proyecto</option>
                                    {!!proyectos &&
                                        proyectos.map((proyecto) => {
                                            return (
                                                <option >{proyecto.id}- {proyecto.sigla}-{proyecto.nombre}</option>)
                                        })
                                    }
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label for="floatingTextarea">Actividad</label> <br />
                                <select class="form-select" aria-label="" name="proyecto_id" >
                                    <option selected>Seleccionar actividad</option>
                                    {!!actividades &&
                                        actividades.map((actividad) => {
                                            return (
                                                <option value="">{actividad.descripcion}</option>)
                                        })
                                    }
                                </select>
                            </div>

                            <div className="col-md-6 mb-3 ">
                                <label for="presupuesto" className="form-label">Fecha</label>
                                <input type="date" className="form-control mb-3 col-8"/>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label for="floatingTextarea" >Descripción</label>
                                <textarea
                                    rows="4"
                                    name="descripcion"
                                    className="form-control mb-3 col-8"
                                    placeholder=""
                                    id="floatingTextarea"
                                >
                                </textarea>

                                <div className="row">
                                    <div className="col-4">
                                        <label for="floatingTextarea">Horas</label>
                                        <input
                                            name="hh"
                                            type="text"
                                            className="form-control mb-3 col-12"
                                            id="inputhh"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <label for="floatingTextarea">Horas Extras</label>
                                        <input
                                            name="hh_extra"
                                            type="text"
                                            className="form-control mb-3 col-12"
                                            id="inputhhe"
                                        />
                                    </div>
                                </div>
                                <label for="usuario" className="form-label">Usuario</label>
                                <input
                                    name="usuario_id"
                                    type="text"
                                    className="form-control col-5"
                                    id="inputusuario"
                                />
                            </div>

                            {/* <div className="col-md-12 mx-auto">
                        <label className="form-check-label mb-3" for="inlineFormCheck">Estado</label>
                            <div className="form-check">
                                <div class="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="estado" id="inlineRadioActive" value="1" onClick={(e)=> actions.handleChangeActividad(e)} />
                                    <label className="form-check-label p-0" for="inlineRadioActive">Activo</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="estado" id="inlineRadioInactive" value="0" onClick={(e)=>actions.handleChangeActividad(e)} />
                                    <label className="form-check-label p-0" for="inlineRadioInactive">Inactivo</label>
                                </div>      
                            </div>
                        </div> */}
                        </div>
                    </div>

                    <div className="col-11 d-flex justify-content-end mb-4">
                        <div className="row g-3 mt-3">
                            <div className="col-md-2 mx-auto">
                                <button type="submit" className="btn btn-success mb-2" onClick={() => { confirmacion_saved() }}>Agregar</button>
                            </div>
                            <div className="col-md-2 mx-auto">
                                <button className="btn btn-info" type="reset">Limpiar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

            <div className="container">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="thead-dark ">
                                <tr>
                                    
                                    <th className="text-center" scope="col">Proyecto</th>
                                    <th className="text-center" scope="col">Actividad</th>
                                    <th className="text-center" scope="col">Descripción</th>
                                    <th className="text-center" scope="col">Fecha</th>
                                    <th className="text-center" scope="col">Horas</th>
                                    <th className="text-center" scope="col">Horas Extras</th>
                                    <th className="text-center" scope="col">Acciones</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {!!horas &&
                                    horas.length > 0 &&
                                    horas.map((horas, index) => {
                                        return (
                                            <tr key={index}>
                                                {!!proyectos &&
                                                    proyectos.map((proyecto) => {
                                                        if(proyecto.id==horas.proyecto_id)
                                                        return (
                                                            <td className="text-center">{proyecto.sigla}-{proyecto.nombre}</td>
                                                            )
                                                    })
                                                }
                                                {!!actividades &&
                                                    actividades.map((actividad) => {
                                                        if(actividad.proyecto_id==horas.actividad_id)
                                                        return (
                                                            <td className="text-center">{actividad.descripcion}</td>
                                                            )
                                                    })
                                                }
                                                
                                                {/* <td className="text-center">"Actividad"</td> */}
                                                <td className="text-center">{horas.descripcion}</td>
                                                <td className="text-center">{horas.fecha}</td>
                                                <td className="text-center">{horas.hh}</td>
                                                <td className="text-center">{horas.hh_extra}</td>
                                                <td className="text-center">
                                                    {/* <button className="edit-icon border-0 bg-transparent text-primary mx-1"> <i className="fas fa-database"></i> </button> */}
                                                    <Link className="edit-icon border-0 bg-transparent text-success mx-1" to={`/registro-edicion-proyecto/${horas.id}`}><i className="far fa-edit "></i></Link>
                                                    <button className="trash-icon border-0 bg-transparent text-danger" onClick={() => { confirmacion(horas.id) }} ><i className="far fa-trash-alt "></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        </>

    )
}

export default ListaHoras ;