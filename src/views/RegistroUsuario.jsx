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
      <div className="row justify-content-center">
        <div className="col-md-8 p-0 bg-dark text-white">
          <div className="pl-2">
            <h3>Registrar Colaborador</h3>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          actions.addUsuario("/usuarios", data, history);
        }}
      >
        <div className="row justify-content-center">
          <div className="col-md-8 border border-dark">
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
              <label for="inputPassword2" className="form-label">
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
              <label className="form-check-label mb-2" for="inlineFormCheck">
                {" "}
                Estado{" "}
              </label>
              <div className="form-check">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="estado"
                    id="inlineRadioActive"
                    value="1"
                    onClick={(e) => handleChangeUsuario(e)}
                  />
                  <label className="form-check-label" for="inlineRadioActive">
                    Activo{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadioInactive"
                    value="0"
                    onClick={(e) => handleChangeUsuario(e)}
                  />
                  <label className="form-check-label" for="inlineRadioInactive">
                    {" "}
                    Inactivo
                  </label>
                </div>

                <div className="row my-4 justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success mx-2"
                    onClick={() => confirmacion2()}
                  >
                    Agregar
                  </button>
                  <Link
                    className="btn btn-outline-danger mx-2"
                    to="/lista-usuarios"
                  >
                    Cancelar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
