import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import { Bar } from "react-chartjs-2";





const DashboardColaborador = () => {


  const { store, actions } = useContext(Context);
  const { horasPorActividad } = store;

  useEffect(() => {
    actions.getHorasPorActividad("/HorasPorActividad");
  }, []);  

  const color = () => {
    const n = Math.floor(Math.random(205,255) * 10) + 1;
    const n1 = Math.floor(Math.random(55, 205) * 10) + 1;
    const n2 = Math.floor(Math.random(105, 155) * 10) + 1;
    const n3 = Math.floor(Math.random(155, 205) * 10) + 1;
    const n4 = Math.floor(Math.random(205, 255) * 10) + 1;
    const n5 = Math.floor(Math.random(0, 55) * 10) + 1;
      return (
        console.log("rgba("+n+","+n1+","+n2+","+n3+","+n4+","+n5+")")
      )
  }

const proyectos = {
  labels: [
    "Puerto Balize 2",
    "Puerto Mejillones",
    "Costanera Sur",
    "Aeropuerto AMB",
    "Vespucio Norte",
    "Pnamericana Sur",
  ],
  datasets: [
    {
      label: "Horas Cargadas a Proyecto",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        { color },
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


const actividades = {
  labels: [
    "Pilar Principal",
    "Subterraneo Tres",
    "Puente Amarillo",
    "Puente Rojo",
    "Seccion Temporal",
    "Planimetrias",
    "Desarrollo ingenieria básica",
    "Elaboración de carta gantt",
  ],
  datasets: [
    {
      label: "Horas Cargadas a Actividades",
      data: [12, 19, 3, 5, 2, 7, 18, 15],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(258, 159, 64, 0.2)",
        "rgba(128, 159, 64, 0.2)",
        "rgba(74, 99, 99, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(74, 99, 99, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
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
      <div className="container mx-auto">
        <div className="row  caption-top mt-5 ">
          <div className="col-4 fs-5 bg-primary text-light">
            Dashboard Colaborador
          </div>
        </div>
        <div className="row d-flex flex-column border boder-primary mb-5">
          <div className="col">
            <div className="header">
              <h2 className="title">Proyectos</h2>
              <div className="links"></div>
            </div>
            <Bar data={proyectos} options={options2} />
          </div>
          <div className="col">
            <div className="header">
              <h2 className="title">Actividades</h2>
              <div className="links"></div>
            </div>
            <Bar data={actividades} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardColaborador;
