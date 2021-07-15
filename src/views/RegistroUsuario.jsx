import React, { useContext, useEffect, useState  } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";


export function RegistroUsuario(props) {

  const [data,setData]=useState(null)
  const history= useHistory();
  const { store, actions } = useContext(Context);


   const handleChangeUsuario= (e)=>{
    setData({
            ...data,
            [e.target.name]: e.target.value,
        })
}


  const confirmacion2 = () => {
    Swal.fire({
      icon: "success",
      title: "Colaborador Agregado",
      showConfirmButton: false,
      timer: 1200,
    });
  };

  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="col-4 fs-5 bg-primary text-light">Registrar Colaborador</div>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        actions.addUsuario("/usuarios", data, history);
      }}>
        <div className="row border boder-primary">

            <div className="col-md-8 mx-auto">
              <label for="name" className="form-label mt-4">
                RUT
              </label>
              <input
                name="rut"
                type="text"
                className="form-control"
                id="inputrut"
                onChange={handleChangeUsuario}
              />
            </div>

            <div className="col-md-8 mx-auto">
              <label for="name" className="form-label mt-4">
                Primer Nombre
              </label>
              <input
                name="primer_nombre"
                type="text"
                className="form-control"
                id="inputname"
                onChange={handleChangeUsuario}
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
                onChange={handleChangeUsuario}
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
                onChange={handleChangeUsuario}
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
                onChange={handleChangeUsuario}
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
                id="inputcorreo"
                placeholder="name@example.com"
                onChange={handleChangeUsuario}
              />
            </div>

            <div className="col-md-8 mx-auto">
              <label for="inputPassword2" class="form-label">
                Password
              </label>
              <div className="col-sm-12">
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  onChange={handleChangeUsuario}
                />
              </div>
            </div>

            <div className="col-md-8 mx-auto">
              <label className="form-check-label mb-2" for="inlineFormCheck"> Estado </label>
              <div className="form-check">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="estado"
                    id="inlineRadioActive"
                    value="1"
                    onClick={(e) =>handleChangeUsuario(e)}
                  />
                  <label class="form-check-label" for="inlineRadioActive">Activo </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadioInactive"
                    value="0"
                    onClick={(e) =>handleChangeUsuario(e)}

                  />
                  <label class="form-check-label" for="inlineRadioInactive"> Inactivo</label>
                </div>

                <div className="col-10 d-flex justify-content-end mb-4">
                  <div className="row g-3 mt-3">
                    <div className="col-md-2 mx-auto">
                      <button
                        type="submit"
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
                        to="/lista-usuarios"
                      >
                        Cancelar
                      </Link>
                    </div>
                  </div>
              </div>

            </div>
          </div>

        </div>

      </form>
    </div>
  )
}
