import { Link } from "react-router-dom";
import Swal from "sweetalert2";



export function EdicionUsuario() {

  
  const confirmacion3 = () => {
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
        <div className="row">
          <caption>Edicion de Usuario</caption>
        </div>
        <div className="row border boder-primary">
          <div className="col-12">
            <form className="row g-3 mt-3">
              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Rut
                </label>
                <input
                  type="text"
                  className="form-contr ol"
                  id="inputname"
                  placeholder="Ingrese RUN Chileno"
                />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Primer Nombre
                </label>
                <input type="text" className="form-control" id="inputname" />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Segundo Nombre
                </label>
                <input type="text" className="form-control" id="inputname" />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Apellido Paterno
                </label>
                <input type="text" className="form-control" id="inputname" />
              </div>

              <div className="col-md-8 mx-auto">
                <label for="name" className="form-label">
                  Apellido Materno
                </label>
                <input type="text" className="form-control" id="inputname" />
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
                />
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
                onClick={() => confirmacion3()}
              >
                Guardar
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
}
