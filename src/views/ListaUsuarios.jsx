import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function ListaUsuarios({ props }) {

  const confirmacion = () => {

    Swal.fire({
      title: "Estas seguro de eliminar este Colaborador?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });

  }




  return (
    <>
      <div className="container mt-4">
        <caption className="row caption-top m-0">
          Lista de mis Colaboradores
        </caption>
        <table className="table caption-top m-0 border">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Primer Nombre</th>
              <th scope="col">Segundo Nombre</th>
              <th scope="col">Apellido Paterno</th>
              <th scope="col">Apellido Materno</th>
              <th scope="col">Correo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <FontAwesomeIcon icon={faUserTie} />
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>Thornton@gmail.com</td>
              <td>
                <Link to="/EdicionUsuario">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </td>
              <td>
                <Link onClick={()=>confirmacion()}>
                  <FontAwesomeIcon icon={faTrashAlt} 
                  
                  />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-md-flex justify-content-md-end">
          <Link className="btn  btn-success" to="/RegistroUsuario">
            Agregar Colaborador
          </Link>
        </div>
      </div>
    </>
  );
}
