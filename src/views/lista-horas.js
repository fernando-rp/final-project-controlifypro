import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";


const ListaHoras = () => {
    const { store, actions } = useContext(Context);
    const { actividades, proyectos, horas, actividades_proyecto,usuarios } = store;
    // const { id } = useParams();
    // const history = useHistory();
    const [data, setData] = useState(null)


    useEffect(() => {

        actions.getHoras('/horas')
        actions.getProyectos('/proyectos')
        actions.getActividades('/actividades')
        actions.getUsuarios('/usuarios')

    }, [])

 
    const actividadesProyecto=(e)=>{
        actions.getActividadesProyectos(`/actividades/${e.target.value}/proyectos`)
        setData({
            ...data,
            [e.target.name]: e.target.value,
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

    const handleChangeHH = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
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
            actions.deleteHora(a_id)
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
                actions.addHoras("/horas",data);


            }}>
                <div className="row border boder-primary mb-4">
                    <div className="col-12">
                        <div className="row g-3 mt-3">
                            <div className="col-md-6 mb-3">

                                <label for="floatingTextarea">Proyecto</label> <br />
                                <select className="form-select" aria-label="" name="proyecto_id" onChange={(e)=>{actividadesProyecto(e)}}>
                                    <option selected>Seleccionar proyecto</option>
                                    {!!proyectos &&
                                        proyectos.map((proyecto) => {
                                            return (
                                                <option value={proyecto.id} >{proyecto.id}- {proyecto.sigla}-{proyecto.nombre}</option>)
                                        })
                                    }
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label for="actividad_id">Actividad</label> <br />
                                <select class="form-select" aria-label="" name="actividad_id" onChange={handleChangeHH}>
                                    <option selected>Seleccionar actividad</option>
                                    {!!actividades_proyecto &&
                                        actividades_proyecto.map((actividad) => {
                                            return (
                                                <option value={actividad.id}>{actividad.descripcion}</option>)
                                        })
                                    }
                                </select>
                            </div>

                            <div className="col-md-6 mb-3 ">
                                <label for="fecha" className="form-label">Fecha</label>
                                <input 
                                type="date" 
                                className="form-control mb-3 col-8"
                                name="fecha"
                                onChange ={handleChangeHH}   
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label for="floatingTextarea" >Descripción</label>
                                <textarea
                                    rows="4"
                                    name="descripcion"
                                    className="form-control mb-3 col-8"
                                    placeholder=""
                                    id="floatingTextarea"
                                    onChange={handleChangeHH}
                                >
                                </textarea>

                                <div className="row">
                                    <div className="col-4">
                                        <label for="floatingTextarea">Horas</label>
                                        <input
                                            name="hh"
                                            type="number"
                                            className="form-control mb-3 col-12"
                                            id="inputhh"
                                            onChange={handleChangeHH}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <label for="floatingTextarea">Horas Extras</label>
                                        <input
                                            name="hh_extra"
                                            type="number"
                                            className="form-control mb-3 col-12"
                                            id="inputhhe"
                                            onChange={handleChangeHH}
                                        />
                                    </div>
                                </div>
                                <label for="usuario" className="form-label">Colaborador</label><br/>
                                <select class="form-select" aria-label="" name="usuario_id" onChange={(e)=>{handleChangeHH(e)}}  >
                                    <option selected>Seleccionar colaborador</option>
                                    
                                    {!!usuarios &&
                                        usuarios.map((usuario) => {
                                            return (
                                                <option value={usuario.id} >{usuario.primer_nombre} {usuario.apellido_paterno}</option>)
                                        })
                                    }
                                </select>
                            </div>
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
                                                        if(actividad.id==horas.actividad_id)
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
                                                    <Link className="edit-icon border-0 bg-transparent text-success mx-1" to={`/lista-horas/${horas.id}`}><i className="far fa-edit "></i></Link>
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