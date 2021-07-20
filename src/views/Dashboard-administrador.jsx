import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import { Line } from "react-chartjs-2";



const DashboardAdministrador = ()=> {

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
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
    <div className="header">
      <h1 className="title">Line Chart</h1>
      <div className="links">
        <a
          className="btn btn-gh"
        >
          Github Source
        </a>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);
}
export default DashboardAdministrador;

