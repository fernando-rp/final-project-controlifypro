import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

import moment from "moment";

const ListaUsuarios = () => {
  const { store, actions } = useContext(Context);
  const { usuarios, localidades } = store;

  const [datos, setDatos] = useState({});

  useEffect(() => {
    actions.getUsuarios("/usuarios");
    actions.getLocalidades("/localidades");
  }, []);

  const buscar_usuarios = () => {
    //console.log(datos);
    actions.srcUsuarios("/usuarios/buscar", datos);
  };

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const limpiar = () => {
    setDatos({});
  };

  const confirmacion = (a_id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "La información se eliminará",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        actions.deleteUsuario(a_id);
        Swal.fire("Desactivado", "Tu usuario ha sido desactivado", "success");
      }
    });
  };

  return (
    <div className="container mt-4">
      <div className="col-sm-4 p-0 bg-dark text-white">
        <div className="pl-2">
          <h3>Buscar Colaborador</h3>
        </div>
      </div>

      <div className="col border border-dark">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            buscar_usuarios();
          }}
        >
          <div className="row m-2 mt-3">
            <div className="col-md-4">
              <label htmlFor="sigla" className="form-label">
                Código
              </label>
              <input
                type="text"
                className="form-control"
                name="sigla"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="localidad_id" className="form-label">
                Localidad
              </label>
              <select
                className="form-control"
                defaultValue={"DEFAULT"}
                name="localidad_id"
                onChange={handleInputChange}
              >
                <option value="DEFAULT" disabled>
                  Seleccionar...
                </option>
                {!!localidades &&
                  localidades.length > 0 &&
                  localidades.map((localidad, index) => {
                    return (
                      <option key={index} value={localidad.id}>
                        {localidad.nombre}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div className="row m-2">
            <div className="col-md-4">
              <label htmlFor="fecha_inicio" className="form-label">
                Fecha inicio
              </label>
              <input
                type="date"
                className="form-control"
                name="fecha_inicio"
                onChange={handleInputChange}
              />
              {/* <input type="text" className="form-control" id="inputfechainicio" /> */}
            </div>
            <div className="col-md-4">
              <label htmlFor="fecha_entrega" className="form-label">
                Fecha fin
              </label>
              <input
                type="date"
                className="form-control"
                name="fecha_entrega"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4 mb-4">
              <label htmlFor="estado" className="form-label">
                Estado
              </label>
              <select
                name="estado"
                className="form-control"
                defaultValue={"DEFAULT"}
                onChange={handleInputChange}
              >
                <option value="DEFAULT" disabled>
                  Seleccionar...
                </option>
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
              >
                Buscar
              </button>
              <button
                className="btn btn-outline-primary btn-round mb-3 mx-2"
                type="reset"
                onClick={() => {
                  limpiar();
                }}
              >
                Limpiar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="row mt-4">
        <div className="col-md-12 d-flex justify-content-end">
          <Link className="btn btn-success" to="/RegistroUsuario">
            <i className="fas fa-plus-circle mr-2"></i> Agregar Colaborador
          </Link>
        </div>
      </div>

      {/* <div className="row mt-4">
              <div className="col-4 fs-5 bg-info text-light">Mis Proyectos</div>
          </div> */}

      <div className="table-responsive">
        <table className="table table-hover ">
          <thead className="thead-dark">
            <tr>
              <th className="text-center" scope="col">
                Primer Nombre
              </th>
              <th className="text-center" scope="col">
                Segundo Nombre
              </th>
              <th className="text-center" scope="col">
                Apellido Paterno
              </th>
              <th className="text-center" scope="col">
                Apellido Materno
              </th>
              <th className="text-center" scope="col">
                Correo
              </th>
              <th className="text-center" scope="col">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {!!usuarios &&
              usuarios.length > 0 &&
              usuarios.map((usuario, index) => {
                return (
                  <tr key={index}>

                    <td className="text-center">{usuario.primer_nombre}</td>
                    <td className="text-center">{usuario.segundo_nombre}</td>
                    <td className="text-center">{usuario.apellido_paterno}</td>
                    <td className="text-center">{usuario.apellido_materno}</td>
                    <td className="text-center">{usuario.email}</td>

                    <td className="text-center">
                      <Link
                        className="edit-icon border-0 bg-transparent text-success mx-1"
                        to={`/EdicionUsuario/${usuario.id}`}
                      >
                        <i className="far fa-edit "></i>
                      </Link>
                      <button
                        className="trash-icon border-0 bg-transparent text-danger"
                        onClick={() => {
                          confirmacion(usuario.id);
                        }}
                      >
                        <i className="far fa-trash-alt "></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaUsuarios;
