import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

// import Moment from "react-moment";
import moment from "moment";
import Moment from "react-moment";

const EdicionProyecto = () => {

  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const { usuarios, localidades, proyecto } = store;

  const [datos, setDatos] = useState({})

  const history = useHistory();

  useEffect(() => {
    actions.getProyectById('/proyectos', id);
    actions.getUsuarios("/usuarios/jefe_proyectos");
    actions.getLocalidades("/localidades");
  }, [])


  // console.log(proyecto) 
  const confirmacion_saved = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Actividad Editada',
      showConfirmButton: false,
      timer: 1300
    })
  }

  const handleInputChange = (e) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className="container mt-4">

      <div className="row justify-content-center">
        <div className="col-md-8 p-0 bg-dark text-white">
          <div className="pl-2"><h3>Editar proyecto ({id})</h3></div>
        </div>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        actions.updateProyecto("/proyectos", id, history);
      }}>

        <div className="row justify-content-center">
          <div className="col-md-8 border border-dark">

            <div className="row mt-4 justify-content-center">
              <div className="col-md-3">
                <label htmlFor="name" className="form-label">Sigla</label>
                <input
                  type="text"
                  name="sigla"
                  className="form-control"
                  id="inputsigla"
                  value={!!proyecto && proyecto.sigla}
                  onChange={actions.handleChangeProyecto}
                />
              </div>
              <div className="col-md-7">
                <label htmlFor="name" className="form-label">Nombre Proyecto</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  id="inputname"
                  value={!!proyecto && proyecto.nombre}
                  onChange={actions.handleChangeProyecto}
                />
              </div>
            </div>

            <div className="row mt-3 justify-content-center">
              <div className="col-md-10">
                <label htmlFor="floatingTextarea">Descripción</label>
                <textarea
                  name="descripcion"
                  className="form-control"
                  placeholder=""
                  id="floatingTextarea"
                  value={!!proyecto && proyecto.descripcion}
                  onChange={actions.handleChangeProyecto}
                >
                </textarea>
              </div>
            </div>

            <div className="row mt-3 justify-content-center">
              <div className="col-md-5">
                <label htmlFor="localidad_id" className="form-label">Localidad</label>
                <select className="form-control" defaultValue={'DEFAULT'} name="localidad_id" onChange={actions.handleChangeProyecto} >
                  <option value={!!proyecto && proyecto.localidad_id} disabled>Seleccionar...</option>
                  {!!localidades &&
                    localidades.length > 0 &&
                    localidades.map((localidad, index) => {
                      return (
                        <option key={index} value={localidad.id}>{localidad.nombre}</option>
                      )
                    })
                  }
                </select>
              </div>

              <div className="col-md-5">
                <label htmlFor="jefe_proyecto_id" className="form-label">Jefe Proyecto</label>
                <select className="form-control" defaultValue={'DEFAULT'} name="jefe_proyecto_id" onChange={actions.handleChangeProyecto} >
                  <option value={!!proyecto && proyecto.jefe_proyecto_id} disabled>Seleccionar...</option>
                  {!!usuarios &&
                    usuarios.length > 0 &&
                    usuarios.map((usuario, index) => {
                      return (
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
                <input
                  type="date"
                  className="form-control"
                  name="fecha_inicio"
                  value={!!proyecto && moment(proyecto.fecha_inicio, "DD-MM-YYYY").format("YYYY-MM-DD")}
                  onChange={actions.handleChangeProyecto}
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="fecha_entrega" className="form-label">Fecha Entrega</label>
                <input
                  type="date"
                  className="form-control"
                  name="fecha_entrega"
                  value={!!proyecto && moment(proyecto.fecha_entrega, "DD-MM-YYYY").format("YYYY-MM-DD")}
                  onChange={actions.handleChangeProyecto}
                />
              </div>
            </div>

            <div className="row mt-3 justify-content-center">
              <div className="col-md-3">
                <label htmlFor="presupuesto" className="form-label">Horas Vendidas</label>
                <input
                  type="number"
                  name="presupuesto"
                  className="form-control"
                  id="inputavance"
                  value={!!proyecto && proyecto.presupuesto}
                  onChange={actions.handleChangeProyecto}
                />
              </div>

              <div className="col-md-7">
                <label htmlFor="estado" className="form-check-label mb-2" htmlFor="inlineFormCheck">Estado</label>
                <div className="form-check">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="estado"
                      id="inlineRadioActive"
                      value="1"
                      checked={!!proyecto && proyecto.estado === 1}
                      onClick={(e) => actions.handleChangeProyecto(e)}
                    />
                    <label className="form-check-label pl-1 mr-4" htmlFor="inlineRadioActive">Activo</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="estado"
                      id="inlineRadioInactive"
                      value="0"
                      checked={!!proyecto && proyecto.estado === 0}
                      onClick={(e) => actions.handleChangeProyecto(e)}
                    />
                    <label className="form-check-label pl-1" htmlFor="inlineRadioInactive">Inactivo</label>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-10 d-flex justify-content-end mb-4">
              <div className="row g-3 mt-3">
                <div className="col-md-2 mx-auto">
                  <button type="submit" className="btn btn-success" onClick={() => { confirmacion_saved() }}>Guardar</button>
                </div>
                <div className="col-md-2 mx-auto">
                  <Link className="btn btn-danger" to="/listado-proyectos">Cancelar</Link>
                </div>

              </div>
            </div>
          </div>

        </div>

      </form>
    </div >
  )
}

export default EdicionProyecto ;