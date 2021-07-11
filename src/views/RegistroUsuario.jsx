import { event } from "jquery";
import React, { useContext  } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";


export function RegistroUsuario(props) {


  const { store, actions } = useContext(Context);
  const { usuario } = store;

  const { id } = useParams();

  // useEffect(()=>{
  //     actions.getActivityById("",id)
  // },[])



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
      <div className="container mt-4">
        <caption className="row  caption-top m-0 ">
          Registro/Edicion de Usuario ({id})
        </caption>
        <div className="row border boder-primary">
          <div className="col-12">
            <form className="row g-3 mt-3">
              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Rut
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  placeholder="Ingrese RUN Chileno"
                  value={!!usuario && usuario.Rut}
                />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Primer Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  value={!!usuario && usuario.primer_nombre}
                />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Segundo Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  value={!!usuario && usuario.segundo_nombre}
                />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Apellido Paterno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  value={!!usuario && usuario.apellido_paterno}
                />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Apellido Materno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  value={!!usuario && usuario.apellido_materno}
                />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputname"
                  placeholder="name@example.com"
                  value={!!usuario && usuario.email}
                />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="inputPassword2" class="form-label">
                  Password
                </label>
                <div className="col-sm-12">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    value={!!usuario && usuario.password}
                  />
                </div>
              </div>

              <div className="col-md-8 mx-auto">
                <label className="form-check-label mb-2" for="inlineFormCheck">
                  Estado
                </label>
                <div className="form-check">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadioActive"
                      value="Activo"
                    />
                    <label class="form-check-label" for="inlineRadioActive">
                      Activo
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadioInactive"
                      value="Inactivo"
                      value={!!usuario && usuario.estado}
                    />
                    <label class="form-check-label" for="inlineRadioInactive">
                      Inactivo
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-10 d-flex justify-content-end mb-4">
          <form className="row g-3 mt-3">
            <div className="col-md-2 mx-auto">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => confirmacion2()}
              >
                Agregar
              </button>
            </div>
            <div className="col-md-2 mx-auto">
              <Link
                type="submit"
                className="btn btn-danger"
                to="/listaUsuarios"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
