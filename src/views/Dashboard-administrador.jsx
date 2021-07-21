import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import { Line } from "react-chartjs-2";



const DashboardAdministrador = ()=> {

return (
  <>
    <div className="container p-2 m-2">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <div
            className="card-big-shadow p-3"
            data-background="color"
            data-color="orange"
          >
            <div className="card card-just-text">
              <div className="author m-2">
                <span>Colaboradores</span>
              </div>
              <span className="category-social pull-right">
                <h1 className="fas fa-handshake m-2"></h1>
              </span>
              <div className="clearfix">
                <h1>2.900</h1>
              </div>
              <p className="card-description m-2">
                "Se encuentran reguistrando horas en la aplicacion."
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
                <span>Colaboradores</span>
              </div>
              <span className="category-social pull-right">
                <h1 className="fas fa-handshake m-2"></h1>
              </span>
              <div className="clearfix">
                <h1>2.900</h1>
              </div>
              <p className="card-description m-2">
                "Se encuentran reguistrando horas en la aplicacion."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div
            className="card-big-shadow p-3"
            data-background="color"
            data-color="orange"
          >
            <div className="card card-just-text">
              <div className="author m-2">
                <span>Colaboradores</span>
              </div>
              <span className="category-social pull-right">
                <h1 className="fas fa-handshake m-2"></h1>
              </span>
              <div className="clearfix">
                <h1>2.900</h1>
              </div>
              <p className="card-description m-2">
                "Se encuentran reguistrando horas en la aplicacion."
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

