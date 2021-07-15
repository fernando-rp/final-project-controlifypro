import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";


const ListaUsuarios = () => {
  const { store, actions } = useContext(Context);
  const { usuarios } = store;

  useEffect(() => {
    actions.getUsuarios("/usuarios");
  }, []);

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

        Swal.fire("Eliminado", "El colaboarador ha sido eliminada", "success");
      }
    });
  };

  return (
      <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4 fs-5 bg-info text-light">Buscar Colaborador</div>
        </div>
        <div className="row border boder-info">
          <div className="col-8">
            <form className="row g-3 mt-3">
              <div className="col-md-4">
                <label for="code" className="form-label">
                  Código
                </label>
                <input type="text" className="form-control" id="inputcode" />
              </div>
              <div className="col-md-4">
                <label for="inputName" className="form-label">
                  Nombre
                </label>
                <input type="text" className="form-control" id="inputname" />
              </div>
              <div className="col-md-4">
                <label for="inputSite" className="form-label">
                  Site
                </label>
                <select id="inputSite" className="form-select">
                  <option selected>Select...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-4">
                <label for="inputfechainicio" className="form-label">
                  Fecha inicio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputfechainicio"
                />
              </div>
              <div className="col-md-4">
                <label for="inputfechafin" className="form-label">
                  Fecha fin
                </label>
                <input type="text" className="form-control" id="inputfechafin" />
              </div>
              <div className="col-md-4 mb-4">
                <label for="inputstate" className="form-label">
                  Estado
                </label>
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
                <button type="submit" className="btn btn-success">
                  Buscar
                </button>
              </div>
              <div className="col-md-2 mx-auto">
                <button type="submit" className="btn btn-light">
                  Limpiar
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 d-flex justify-content-end">
            <Link type="submit" className="btn btn-success" to="/RegistroUsuario">
              Agregar Colaborador
            </Link>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-4 fs-5 bg-info text-light">Mis Colaboradores</div>
        </div>

        <table className="table">
          <thead>
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
                    <td className="text-center"> {usuario.primer_nombre}</td>
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
                      <button className="trash-icon border-0 bg-transparent text-danger"
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
    </>
  );
};
export default ListaUsuarios;
