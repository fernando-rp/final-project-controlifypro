import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
import { Line } from "react-chartjs-2";



const DashboardAdministrador = ()=> {

return (
  <>
    <div className="card mt-3" data-background="color" data-color="orange">
      <div className="card-body card-just-text">
        <div className="author">
          <a href="javascript:;">
            <img
              src="../../../assets/img/faces/erik-lucatero-2.jpg"
              alt="..."
              class="avatar img-raised"
            />
            <span>Erik Johnson</span>
          </a>
        </div>
        <span className="category-social pull-right">
          <i className="fa fa-quote-right"></i>
        </span>
        <div className="clearfix"></div>
        <p className="card-description">
          "Less, but better – because it concentrates on the essential aspects,
          and the products are not burdened with non-essentials. Back to purity,
          back to simplicity. At best, it is self-explanatory."
        </p>
      </div>
    </div>
  </>
);
}
export default DashboardAdministrador;

