import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Pie, Bar } from "react-chartjs-2";

const DashboardJefe = () => {
  const { store, actions } = useContext(Context);
  const {horasProyectos, proyectos,horasporProyecto,usuarios,horasporColaborador}=store;

  const [data, setData]=useState({})
  const [hhcolaborador, setHHCol]=useState({})
  const [idP, setid]=useState({})

  useEffect(() => {
    actions.getProyectos('/proyectos')
    actions.getHorasPorActividad('/HorasPorActividad')
    actions.getHorasProyectos("/HorasPorProyecto")
    actions.getUsuarios("/usuarios");
    
}, [])

  const values = (e) => {
    e.preventDefault();
    let arrHHPro = !!horasProyectos && horasProyectos.map((con) => con.hh)
    let arrNombrePro = !!horasProyectos && horasProyectos.map((con) => con.nombre_proyecto)
    let arrHHProPre = !!proyectos && proyectos.map((con) => con.presupuesto)
    let arrNombreProPre = !!proyectos && proyectos.map((con) => con.nombre)

    setData({ ...data,
      ['labels2']: arrHHPro,
      ['midata2']: arrNombrePro,
      ['labels3']: arrHHProPre,
      ['midata3']: arrNombreProPre,
    })
  }


  const handldeProyecto= (e)=>{
    const id=e.target.value
    actions.getHorasSProyecto("/HorasActividadSegunProyecto",id)

    let arrHH = !!horasporProyecto && horasporProyecto.map((con) => con.hh)
    let arrNombre = !!horasporProyecto && horasporProyecto.map((con) => con.descripcion)

    setData({...data,
        ['labels']: arrHH,
        ['midata']: arrNombre,
      })   
  }


  const handldeidProyecto= (e)=>{
    setid({ 
      ['id_p']: e.target.value,
    })
  }

  const handleColaborador= (e)=>{

    const id=e.target.value
    actions.getHorasPorActProyColaborador("/HorasUsuarioSegunProyecto",idP.id_p,id)

    let arrHH = !!horasporColaborador && horasporColaborador.map((con) => con.hh)
    let arrNombre = !!horasporColaborador && horasporColaborador.map((con) => con.actividad)

    setHHCol({
        ['labels']: arrHH,
        ['midata']: arrNombre,
      })   

  }

// CONFIGURACIÓN COLORES/FORMATO DE GRÁFICOS

  const hhutilizadas = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Horas por proyectos Utilizadas",
      },
    },
  };

  const hhpresupuestadas = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Horas por proyectos Presupuestadas",
      },
    },
  };

  const hhutilizadasActividades = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

// DATA PARA LOS GRÁFICOS


const proyectosu = {
    labels: data.midata2,
    datasets: [
      {
        label: "HH",
        data: data.labels2,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const proyectosp = {
    labels: data.midata3,
    datasets: [
      {
        label: "HH",
        data: data.labels3,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


const colaboradores = {
  
  labels: data.midata,
  datasets: [
    {
      label: "HH",
      data: data.labels,

      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      
      borderWidth: 1,
    },
  ],

};


const colaboradoreshh = {
  
  labels: hhcolaborador.midata,
  datasets: [
    {
      label: "HH",
      data: hhcolaborador.labels,

      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      
      borderWidth: 1,
    },
  ],

};

  return (
    <>

        <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="pl-4">¡Buen día!</h1>
            <div className="row p-4">
              <div className="col-8"><h4>Para ver actualizada la información de tus proyectos, sólo debes hacer click en el siguiente botón:</h4></div>
              <div className="col-4"><button type="button" className="btn btn-outline-white bg-success mx-auto mt-4" onClick={(e) => values(e)}> Actualizar Gráficos </button> </div>
            </div>
          </div>
        </div>
        
          <div className="row justify-content-md-center">
            <div className="col-5">
              <div className="header">
                <h3 className="title">Proyectos</h3>
                <div className="links">
                </div>
              </div>
               <Bar data={proyectosp} options={hhpresupuestadas} /> 
            </div>

            <div className="col-5">
              <div className="header">
                <h3 className="title"></h3>
              </div>
              <Bar data={proyectosu} options={hhutilizadas} />
            </div>
          </div>

          <br/>

          <div className="row justify-content-md-center mb-4">
            <div className="col-6">     
              <div className="header">
                <h3 className="title">Horas de actividades por proyecto</h3>

                <div className="col-md-6 mb-4">
                    <label htmlFor="proyecto_id" className="form-label">Proyecto: </label>
                    <select className="form-control" defaultValue={'DEFAULT'} name="proyecto_id" onChange={handldeProyecto} >
                        <option selected>Seleccionar...</option>
                      {!!proyectos &&
                        proyectos.length>0 &&
                        proyectos.map((proyecto,index)=>{
                            return(
                              <option key={index} value={proyecto.id}>{proyecto.nombre}</option>
                            )
                        })
                      }
                    </select>
                </div>

              </div>
               <Bar data={colaboradores} options={hhutilizadasActividades} /> 
            </div>
          </div>
        
          <div className="row justify-content-md-center mb-4">
            <div className="col-6">     
              <div className="header">
                <h3 className="title">Horas por colaborador y proyecto</h3>

                <div className="col-md-6 mb-2">
                    <label htmlFor="proyecto_id" className="form-label">Proyecto: </label>
                    <select className="form-control" defaultValue={'DEFAULT'} name="proyecto_id" onChange={handldeidProyecto} >
                        <option selected >Seleccionar...</option>
                      {!!proyectos &&
                        proyectos.length>0 &&
                        proyectos.map((proyecto,index)=>{
                            return(
                              <option key={index} value={proyecto.id}>{proyecto.nombre}</option>
                            )})
                      }
                    </select>
                </div>

                <div className="col-md-6 mb-4">
                    <label htmlFor="proyecto_id" className="form-label">Colaborador: </label>
                    <select className="form-control" defaultValue={'DEFAULT'} name="proyecto_id" onChange={handleColaborador} >
                        <option selected>Seleccionar...</option>
                      {!!usuarios &&
                        usuarios.length>0 &&
                        usuarios.map((usuario,index)=>{
                            return(
                              <option key={index} value={usuario.id}>{usuario.primer_nombre} {usuario.apellido_paterno}</option>
                            )})
                      }
                    </select>
                </div>
                <button type="button" className="btn btn-outline-white bg-success mx-auto mt-4" onClick={handleColaborador}> Actualizar </button>

              </div>
               <Bar data={colaboradoreshh} className="mb-4" options={hhutilizadasActividades} /> 
            </div>
          </div>



        </div>
   
    </>
  );
};
export default DashboardJefe;
