import { Link } from "react-router-dom";


const RegistroEdicionActividad = ()=>{

    return(
        <div className="container mt-4">
            <div className="row">
            <div className="col-4 fs-5 bg-primary text-light">Registrar/Editar Actividad</div>
            </div>
            <div className="row border boder-primary">
                <div className="col-12">
                    <form className="row g-3 mt-3">
                        <div className="col-md-8 mx-auto">
                            <label for="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="inputname" />
                        </div>
                        <div className="col-md-8 mx-auto">
                            <label for="inputSite" className="form-label">Site</label>
                            <select id="inputSite" className="form-select">
                                <option selected>Select...</option>
                                <option>...</option>
                            </select>
                        </div>

                        <div class="col-md-8 mx-auto">
                            <label for="floatingTextarea">Descripción</label>
                            <textarea class="form-control" placeholder="" id="floatingTextarea"></textarea>
                        </div>

                        <div className="col-md-8 mx-auto">
                            <label for="presupuesto" className="form-label">Presupuesto (HH)</label>
                            <input type="text" className="form-control col-2" id="inputpresupuesto" />
                        </div>

                        <div class="col-md-8 mx-auto">
                            <label for="floatingTextarea">Descripción</label>
                            <textarea class="form-control" placeholder="" id="floatingTextarea"></textarea>
                        </div>
                        <div className="col-md-8 mx-auto">
                            <label for="inputfechainicio" className="form-label">Fecha inicio</label>
                            <input type="text" className="form-control" id="inputfechainicio" />
                        </div>

                        <div className="col-md-8 mx-auto">
                            <label for="inputfechafin" className="form-label">Fecha fin</label>
                            <input type="text" className="form-control" id="inputfechafin" />
                        </div>

                        <div className="col-md-8 mx-auto">
                        <label className="form-check-label mb-2" for="inlineFormCheck">Estado</label>
                            <div className="form-check">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioActive" value="Activo" />
                                    <label class="form-check-label" for="inlineRadioActive">Activo</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioInactive" value="Inactivo" />
                                    <label class="form-check-label" for="inlineRadioInactive">Inactivo</label>
                                </div>      
                            </div>
                        </div>
                    </form>
                </div> 
            </div>  

            <div className="col-10 d-flex justify-content-end mb-4">
                    <form className="row g-3 mt-3">
                        <div className="col-md-2 mx-auto">
                            <button type="submit" className="btn btn-success">Agregar</button>
                        </div>
                        <div className="col-md-2 mx-auto">
                             <Link type="submit" className="btn btn-danger" to="/listado-actividades">Cancelar</Link>
                        </div>
                    </form>
            </div>            

        </div>
        
    )
}

export default RegistroEdicionActividad ;