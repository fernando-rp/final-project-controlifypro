import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faUserTie} from '@fortawesome/free-solid-svg-icons';
import { RegistroUsuario } from "./RegistroUsuario";
import { Link } from "react-router-dom";

export function ListaUsuarios({props}){
  

  return (
    <>
    <div className="container m-2 p-0 border">
      <table className="table caption-top m- border">
        <caption>Lista de mis Colaboradores</caption>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Primer Nombre</th>
            <th scope="col">Segundo Nombre</th>
            <th scope="col">APELLIDO Paterno</th>
            <th scope="col">Apellido Materno</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><FontAwesomeIcon icon={faUserTie}/></th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Thornton@gmail.com</td>
            <td><button><FontAwesomeIcon icon={faEdit}/></button></td>
            <td><button><FontAwesomeIcon icon={faTrashAlt}/></button></td>
          </tr>        
        </tbody>
      </table>
      <div className="d-md-flex justify-content-md-end">
        <Link className="btn  btn-success" to='/RegistroUsuario'>
          Agregar trabajador
        </Link>
      </div>
    </div>
    </>
)

}