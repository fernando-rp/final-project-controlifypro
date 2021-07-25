import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Bar } from "react-chartjs-2";

const DashboardJefe = () => {
  const { store, actions } = useContext(Context);
  const { horasPorActividad }= store;

  const [data, setData]=useState({})

  useEffect(() => {
    actions.getHoras('/horas')
    actions.getHorasPorActividad('/HorasPorActividad')

}, [])

  // grafico horizontal superior de proyectos
  const proyectos = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {

        label: "HH",
        data: [12, 19, 3, 5, 2, 3],
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

  const options = {
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
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

        text: "Horas por Proyectos",
      },
    },
  };


  // grafico de pie lateral derecho
  const proyectos1 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "HH",
        data: [12, 19, 3, 5, 2, 3],
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

  // grafico horizontal inferior de actividades
  const actividades = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {

        label: "HH",
        data: [12, 19, 3, 5, 2, 3],
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

  const options2 = {
    indexAxis: "y",
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

        text: "Horas por proyectos",
      },
    },
  };

// grafico vertical inferior de horas de colaboradores

const values = (e) => {
  e.preventDefault();

  
  let arrHH = !!horasPorActividad && horasPorActividad.map((con) => con.hh)
  let arrNombre = !!horasPorActividad && horasPorActividad.map((con) => con.descripcion)

  setData({
    ['labels']: arrHH,
    ['midata']: arrNombre,
  })

  // console.log(arrNombre)
}



const colaboradores = {
  
  labels: data.midata,
  datasets: [
    {
      label: "Horas",
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

const options3 = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

  return (
    <>
      <button type="button" className="btn btn-outline-primary" onClick={(e) => values(e)}> sdasd </button>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-5">
              <div className="header">
                <h3 className="title">Proyectos</h3>
                <div className="links">
                </div>
              </div>
               <Bar data={proyectos1} options={options2} /> 

              


            </div>
            <div className="col-4">
              <div className="header">
                <h3 className="title">Pie Chart</h3>
                <div className="links">
 
                </div>
              </div>
              <Bar data={colaboradores} options={options3} />
            </div>
          </div>
          <div className="row justify-content-md-center border boder-primary mb-5">
            <div className="col">
              <div className="header">

                <h1 className="title">Horizontal Bar Chart</h1>
              </div>
              <Bar data={proyectos} options={options2} />
            </div>
            <div className="col">
              <div className="header">
                <h1 className="title">Vertical Bar Chart</h1>
              </div>
              <Bar data={actividades} options={options} />
            </div>
          </div>
        </div>
   
    </>
  );
};
export default DashboardJefe;
