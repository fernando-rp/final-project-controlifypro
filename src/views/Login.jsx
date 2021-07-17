import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const history = useHistory();




  const confirmacion = (a_id) => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "La información se eliminará",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, borrar!'
      }).then((result) => {
        if (result.isConfirmed) {
            // actions.deleteProyecto(a_id)

          Swal.fire(
            'Eliminado',
            'Tu proyecto ha sido eliminado',
            'success'
          )
        }
      })
  }

  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <div className="filter"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto">
                <div className="card card-register">
                  <h3 className="card-title">Bienvenido</h3>
                    <form 
                      className="register-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        actions.Login(email, password, history);
                      }}>
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control no-border"
                        id="inputname"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control no-border"
                        id="inputPassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button 
                      className="btn btn-danger btn-block btn-round"
                      >Ingresar</button>
                    </form>
                  {/* <div className="forgot">
                    <a href="#paper-kit" className="btn btn-link btn-danger">Forgot password?</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="demo-footer text-center">
              <h6>&copy; <script>
                </script> Controlify PRO 2021</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
