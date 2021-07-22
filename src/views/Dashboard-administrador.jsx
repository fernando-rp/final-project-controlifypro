import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import { Line } from "react-chartjs-2";



const DashboardAdministrador = ()=> {

return (
  <>
    <div className="container mx-auto p-2 m-2">
      <div className="row  caption-top mt-5 ">
        <div className="col-4 fs-5 bg-primary text-light">
          Dashboard Colaborador
        </div>
      </div>
      <div className="row border boder-primary mb-5">
        <div className="col-6">
          <div
            className="card-big-shadow p-3"
            data-background="color"
            data-color="orange"
          >
            <div className="card card-just-text">
              <div className="author m-2">
                <span>Usuarios</span>
              </div>
              <span className="category-social pull-right">
                <h1 className="fas fa-handshake m-2"></h1>
              </span>
              <div className="clearfix p-2">
                <h1>2.900</h1>
              </div>
              <p className="card-description m-2">
                "Se encuentran registrando horas en la aplicacion."
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="card-big-shadow p-3"
            data-background="color"
            data-color="orange"
          >
            <div className="card card-just-text">
              <div className="author m-2">
                <span>Proyectos</span>
              </div>
              <span className="category-social pull-right">
                <h1 className="fas fa-project-diagram m-2"></h1>
              </span>
              <div className="clearfix p-2">
                <h1>1.020</h1>
              </div>
              <p className="card-description m-2">
                "Se encuentran en ejecución."
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="card-big-shadow p-3"
            data-background="color"
            data-color="orange"
          >
            <div className="card card-just-text">
              <div className="author m-2">
                <span>Actividades</span>
              </div>
              <span className="category-social pull-right">
                <h1 className="fas fa-chart-line m-2"></h1>
              </span>
              <div className="clearfix p-2">
                <h1>5.930</h1>
              </div>
              <p className="card-description m-2">
                "Se encuentran en ejecución en los proyectos."
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="card-big-shadow p-3"
            data-background="color"
            data-color="orange"
          >
            <div className="card card-just-text">
              <div className="author m-2">
                <span>Horas </span>
              </div>
              <span className="category-social pull-right">
                <h1 className="fas fa-stopwatch m-2"></h1>
              </span>
              <div className="clearfix p-2">
                <h1>107.930</h1>
              </div>
              <p className="card-description m-2">
                "Horas registradas en la aplicación."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
export default DashboardAdministrador;

