import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
// import { Select, Textbox, Textarea } from 'react-inputs-validation';
// import "react-inputs-validation/lib/react-inputs-validation.min.css";
// import React from 'react';
import { useForm } from "react-hook-form";
import "../css/style.css"

const ListaHoras = () => {
    const { store, actions } = useContext(Context);
    const { usuarios, actividades, proyectos, horas, actividades_proyecto } = store;
    const {register, handleSubmit, formState:{errors}}= useForm();
    // const { id } = useParams();
    // const history = useHistory();
    const [data, setData] = useState(null)

    useEffect(() => {
        actions.getHoras('/horas')
        actions.getProyectos('/proyectos')
        actions.getActividades('/actividades')
        actions.getUsuarios('/usuarios')
    }, [])

 
    const actividadesProyecto=(e)=>{
        actions.getActividadesProyectos(`/actividades/${e.target.value}/proyectos`)
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const confirmacion_saved = () => {

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Horas agregadas',
            showConfirmButton: false,
            timer: 1300
        })
    }

    const handleChangeHH = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

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
            actions.deleteHora(a_id)
            Swal.fire(
                'Eliminado',
                'Tus horas han sido eliminadas',
                'success'
              )
            }
          })
    }

    return (

      <div className="container mt-4">
        <div className="col-sm-4 p-0 bg-dark text-white">
          <div className="pl-2"><h3>Agregar Horas</h3></div>
        </div>

        <div className="col border border-dark">
          <form onSubmit={handleSubmit((e) => {
            actions.addHoras("/horas",data);
            confirmacion_saved();
            //console.log(e)
          })}>

            <div className="row m-2 mt-3 justify-content-center">
              <div className="col-md-4">
                  <label htmlFor="proyecto_id">Proyecto</label>
                  <select 
                    className="form-control" 
                    defaultValue={"DEFAULT"}
                    aria-label="" 
                    name="proyecto_id"
                  {...register("proyecto_id", {required:true})}
                  onChange={(e)=>{
                      actividadesProyecto(e)
                      }}>
                      <option value="DEFAULT" disabled>Seleccionar proyecto</option>
                      {!!proyectos &&
                          proyectos.map((proyecto, index) => {
                              return (
                                  <option key={index} value={proyecto.id} >{proyecto.id}- {proyecto.sigla}-{proyecto.nombre}</option>)
                          })
                      }
                  </select>
                  {errors.proyecto_id && <p className="errorAHH">Este campo es requerido</p>}
              </div>
              <div className="col-md-4">
                  <label htmlFor="actividad_id">Actividad</label> <br />
                  <select 
                    className="form-control" 
                    aria-label="" 
                    name="actividad_id" 
                    defaultValue={"DEFAULT"}
                    {...register("actividad_id", {required:true})}
                    onChange={(e)=>{
                        handleChangeHH(e)
                  }}
                  >
                      <option value="DEFAULT" disabled>Seleccionar actividad</option>
                      {!!actividades_proyecto &&
                          actividades_proyecto.map((actividad, index) => {
                              return (
                                  <option key={index} value={actividad.id}>{actividad.descripcion}</option>)
                          })
                      }
                  </select>
                  {errors.actividad_id && <p className="errorAHH">Este campo es requerido</p>}
              </div>

              <div className="col-md-4">
                  <label htmlFor="fecha" className="form-label">Fecha</label>
                  <input
                    {...register("fecha", {required:true})}
                    type="date" 
                    className="form-control"
                    name="fecha"
                    onChange ={handleChangeHH}   
                  />
                  {errors.fecha && <p className="errorAHH">Este campo es requerido</p>}
              </div>
            </div>

            <div className="row m-2 mt-3 justify-content-center">
              <div className="col-md-8">
                  <label htmlFor="descripcion">Descripción</label>
                  <textarea
                      {...register("descripcion", {required:true})}
                      rows="5"
                      name="descripcion"
                      className="form-control"
                      placeholder=""
                      onChange={handleChangeHH}
                  ></textarea>
                  {errors.descripcion && <p className="errorAHH">Este campo es requerido</p>}

                  
              </div>

              <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="hh">Horas</label>
                            <input {...register("hh", {required:true})} type="number" className="form-control col-12" name="hh" onChange={handleChangeHH}/>
                            {errors.hh && <p className="errorAHH">Este campo es requerido</p>}
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="hh_extra">Horas Extras</label>
                            <input {...register("hh_extra", {required:true})} type="number" name="hh_extra" className="form-control col-12" onChange={handleChangeHH}/>
                            {errors.hh_extra && <p className="errorAHH">Este campo es requerido</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="usuario_id" className="form-label mt-2">Colaborador</label><br/>
                            <select className="form-control" aria-label="" name="usuario_id" 
                            defaultValue={"DEFAULT"}
                            {...register("usuario_id", {required:true})}
                            onChange={(e)=>{
                                handleChangeHH(e)
                            }}>
                            <option value="DEFAULT" disabled>Seleccionar colaborador</option>
                            
                                {!!usuarios &&
                                    usuarios.map((usuario, index) => {
                                        return (
                                            <option key={index} value={usuario.id} >{usuario.primer_nombre} {usuario.apellido_paterno}</option>)
                                    })
                                }
                            </select>
                            {errors.usuario_id && <p className="errorAHH">Este campo es requerido</p>}
                        </div>
                    </div>
              </div>
            </div>
            
            <div className="row my-4 justify-content-center">
                <div className="row justify-content-end mt-4 m-1">
                    <button type="submit" className="btn btn-success mx-2">Agregar</button>
                </div>
                <div className="row justify-content-start mt-4 m-1">
                    <button className="btn btn-outline-danger mx-2" type="reset">Limpiar</button>
                </div>
            </div>

          </form>
        </div>

        <div className="row mt-4">      

        </div>

        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="thead-dark ">
                    <tr>
                        
                        <th className="text-center" scope="col">Proyecto</th>
                        <th className="text-center" scope="col">Actividad</th>
                        <th className="text-center" scope="col">Descripción</th>
                        <th className="text-center" scope="col">Fecha</th>
                        <th className="text-center" scope="col">Horas</th>
                        <th className="text-center" scope="col">Horas Extras</th>
                        <th className="text-center" scope="col">Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {!!horas &&
                        horas.length > 0 &&
                        horas.map((hora, index) => {
                            return (
                                <tr key={index}>

                                    {!!proyectos &&
                                        proyectos.map((proyecto, pro) => {
                                            if(proyecto.id==hora.proyecto_id)
                                            return (
                                                <td key={pro} className="text-center">{proyecto.sigla}-{proyecto.nombre}</td>
                                                )
                                        })
                                    }

                                    {!!actividades &&
                                        actividades.map((actividad, act) => {
                                            if(actividad.id==hora.actividad_id)
                                            return (
                                                <td key={act} className="text-center">{actividad.descripcion}</td>
                                                )
                                            
                                        })
                                    }
                                    
                                    {/* <td className="text-center">"Actividad"</td> */}
                                    <td className="text-center">{hora.descripcion}</td>
                                    <td className="text-center">{hora.fecha}</td>
                                    <td className="text-center">{hora.hh}</td>
                                    <td className="text-center">{hora.hh_extra}</td>
                                    <td className="text-center">
                                        {/* <button className="edit-icon border-0 bg-transparent text-primary mx-1"> <i className="fas fa-database"></i> </button> */}
                                        <Link className="edit-icon border-0 bg-transparent text-success mx-1" to={`/lista-horas/${hora.id}`}><i className="far fa-edit "></i></Link>
                                        <button className="trash-icon border-0 bg-transparent text-danger" onClick={() => { confirmacion(hora.id) }} ><i className="far fa-trash-alt "></i></button>
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

export default ListaHoras;