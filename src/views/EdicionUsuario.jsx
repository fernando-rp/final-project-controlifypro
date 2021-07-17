import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export function EdicionUsuario(props) {
  const { store, actions } = useContext(Context);
  const { usuario } = store;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    actions.getUsuarioById("/usuarios", id);
  }, []);

  const confirmacion2 = () => {
    Swal.fire({
      icon: "success",
      title: "Se guardo correctamente",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <>
      <div className="container mt-4 ">
        <div className="row  caption-top m-0 ">
          <div className="col-4 fs-5 bg-primary text-light">
            Editar Colaborador ({id})
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            actions.updateUsuario("/usuarios", id, history);
          }}
        >
          <div className="row border boder-primary">
            <div className="col-12">
              <div className="row g-3 mt-3">

                <div className="col-md-8 mx-auto">
                  <label for="name" className="form-label">
                    Rut
                  </label>
                  <input
                    name="rut"
                    type="text"
                    className="form-control"
                    id="inputrut"
                    placeholder="Ingrese RUN Chileno"
                    value={!!usuario && usuario.rut}
                    onChange={actions.handleChangeUsuario}
                  />
                </div>

                <div className="col-md-8 mx-auto">
                  <label for="name" className="form-label">
                    Primer Nombre
                  </label>
                  <input
                    name="primer_nombre"
                    type="text"
                    className="form-control"
                    id="inputname"
                    value={!!usuario && usuario.primer_nombre}
                    onChange={actions.handleChangeUsuario}
                  />
                </div>

                <div className="col-md-8 mx-auto">
                  <label for="name" className="form-label">
                    Segundo Nombre
                  </label>
                  <input
                    name="segundo_nombre"
                    type="text"
                    className="form-control"
                    id="inputsecondname"
                    value={!!usuario && usuario.segundo_nombre}
                    onChange={actions.handleChangeUsuario}
                  />
                </div>

                <div className="col-md-8 mx-auto">
                  <label for="name" className="form-label">
                    Apellido Paterno
                  </label>
                  <input
                    name="apellido_paterno"
                    type="text"
                    className="form-control"
                    id="inputlastname_father"
                    value={!!usuario && usuario.apellido_paterno}
                    onChange={actions.handleChangeUsuario}
                  />
                </div>

                <div className="col-md-8 mx-auto">
                  <label for="name" className="form-label">
                    Apellido Materno
                  </label>
                  <input
                    name="apellido_materno"
                    type="text"
                    className="form-control"
                    id="inputlasname_mother"
                    value={!!usuario && usuario.apellido_materno}
                    onChange={actions.handleChangeUsuario}
                  />
                </div>

                <div className="col-md-8 mx-auto">
                  <label for="name" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="inputname"
                    placeholder="name@example.com"
                    value={!!usuario && usuario.email}
                    onChange={actions.handleChangeUsuario}
                  />
                </div>

                <div className="col-md-8 mx-auto">
                  <label for="inputPassword2" className="form-label">
                    Password
                  </label>
                  <div className="col-sm-12">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      value={!!usuario && usuario.password}
                      onChange={actions.handleChangeUsuario}
                    />
                  </div>
                </div>

                <div className="col-md-8 mx-auto">
                  <label
                    className="form-check-label mb-2"
                    for="inlineFormCheck"
                  >
                    Estado
                  </label>
                  <div className="form-check">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="estado"
                        id="inlineRadioActive"
                        value="1"
                        onClick={(e)=>actions.handleChangeUsuario(e)}
                      />
                      <label className="form-check-label" for="inlineRadioActive">
                        Activo
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadioInactive"
                        value="0"
                        onClick={(e)=>actions.handleChangeUsuario(e)}
                        
                      />
                      <label className="form-check-label" for="inlineRadioInactive">
                        Inactivo
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-10 d-flex justify-content-end mb-4">
          <div className="row g-3 mt-3">
            <div className="col-md-2 mx-auto">
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => confirmacion2()}
              >
                Guardar
              </button>
            </div>
            <div className="col-md-2 mx-auto">
              <Link
                type="submit"
                className="btn btn-danger"
                to="/lista-usuarios"
              >
                Cancelar
              </Link>
            </div>
            </div>
          </div>
        </form>


      </div>
    </>
  );
}
