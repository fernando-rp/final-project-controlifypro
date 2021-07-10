import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useState, useEffect } from "react";

const ListadoProyectos = ()=>{

    const {store, actions}= useContext(Context);
    const {proyectos}=store;

    useEffect(()=>{
        actions.getProyectos()
    },[])



    return(
        <div className="container mt-4">
            <div className="row">
            <div className="col-4 fs-5 bg-primary text-light">Buscar proyectos</div>
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
                    <Link type="submit" className="btn btn-success" to="/listado-proyectos/registro-edicion-proyecto">Agregar Proyecto</Link>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-4 fs-5 bg-primary text-light">Mis Proyectos</div>
            </div>

            <table className="table">
            <thead>
                <tr>
                <th scope="col">Código</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">% Uso</th>
                <th scope="col">Presupuesto</th>
                <th scope="col">Fecha inicio</th>
                <th scope="col">Fecha fin</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>

                {!!proyectos &&
                proyectos.length>0 &&
                proyectos.map((proyecto,index)=>{
                    return (
                        <tr key={index}>
                            <th scope="row">{proyecto.sigla}</th>
                            <td>{proyecto.nombre}</td>
                            <td>{proyecto.descripcion}</td>
                            <td>{proyecto.porcentaje_avance}</td>
                            <td>{proyecto.presupuesto}</td>
                            <td>{proyecto.fecha_inicio}</td>
                            <td>{proyecto.fecha_entrega}</td>
                            <td>{proyecto.estado}</td>
                            <td>
                                <button className="edit-icon border-white bg-transparent text-primary"> <i class="fas fa-database"></i> </button>
                                <Link className="edit-icon border-white bg-transparent text-success" to="/"><i className="far fa-edit "></i> </Link>
                                <button className="trash-icon border-white bg-transparent text-danger"><i className="far fa-trash-alt "></i> </button>
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

export default ListadoProyectos ;