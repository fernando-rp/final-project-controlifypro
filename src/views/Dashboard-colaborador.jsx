import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import { Pie } from "react-chartjs-2";

const DashboardColaborador = () => {
  const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <div className="header">
              <h1 className="title">Pie Chart</h1>
              <div className="links">
                <a
                  className="btn btn-gh"
                  href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Pie.js"
                >
                  Github Source
                </a>
              </div>
            </div>
            <Pie data={data} />
          </div>
          <div className="col-6">
            <div className="header">
              <h1 className="title">Pie Chart</h1>
              <div className="links">
                <a
                  className="btn btn-gh"
                  href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Pie.js"
                >
                  Github Source
                </a>
              </div>
            </div>
            <Pie data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardColaborador;
