import { Link } from "react-router-dom";

const ListadoActividades = ()=>{

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
                <div className="col-4 fs-5 bg-primary text-light">Proyecto XXXXXX</div>
            </div>

            <table className="table">
            <thead>
                <tr>
                <th scope="col">Código</th>
                <th scope="col">Nombre</th>
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
                <tr>
                <th scope="row">X</th>
                <td>XXX</td>
                <td>XXX</td>
                <td>XXX</td>
                <td>XXX</td>
                <td>XXX</td>
                <td>XXX</td>
                <td>XXX</td>
                <td>
                    <button className="edit-icon border-white bg-transparent text-primary"> <i class="fas fa-database"></i> </button>
                    <button className="edit-icon border-white bg-transparent text-success"><i className="far fa-edit "></i> </button>
                    <button className="trash-icon border-white bg-transparent text-danger"><i className="far fa-trash-alt "></i> </button>
                </td>
                </tr>                
            </tbody>
            </table>

    </div>
        
    )
}

export default ListadoActividades ;