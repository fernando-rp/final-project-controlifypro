import { useReducer, useState } from "react";


const getState=({getStore, getActions, setStore})=>{

    return {
      store: {
        actividades: [
          {
            id: 1,
            codigo: "C1234",
            proyecto: "Puerto Belize",
            descripcion: "Lorem impsum",
            fechainicio: "02/02/2020",
            fechafin: "31/12/2020",
            uso: "20HH",
            presupuesto: "500HH",
            estado: "activo",
          },
          {
            id: 2,
            codigo: "C4526",
            proyecto: "Mejillones",
            descripcion: "Lorem impsum",
            fechainicio: "02/02/2020",
            fechafin: "31/12/2020",
            uso: "20HH",
            presupuesto: "500HH",
            estado: "activo",
          },
        ],
        usuarios: [
          {
            id: 123,
            rut: "267194378",
            primer_nombre: "Anthonny",
            segundo_nombre: "De Jesus",
            apellido_paterno: "Tineo",
            apellido_materno: "Ruiz",
            password: 12344,
            email: "anthonnytineo@gmail.com",
            estado: "activo",
            avatar: "null",
            comuna_id: "null",
            rol_id: "Colaborador",
          },
        ],

        actividad: {
          id: 2,
          codigo: "C4526",
          proyecto: "Mejillones",
          descripcion: "Lorem impsum",
          fechainicio: "02/02/2020",
          fechafin: "31/12/2020",
          uso: "20HH",
          presupuesto: "500HH",
          estado: "activo",
        },

        proyectos: [],
        proyecto: null,
        error: null,
      },
      actions: {
        getActividades: (url) => {
          fetch(url, {})
            .then((response) => {
              if (!response.ok) setStore({ error: response.error });
              return response.json();
            })
            .then((data) => {
              setStore({
                actividades: data,
              });
            })
            .catch(() => {});
        },
        getProyectos: (url) => {
          fetch(url, {
            method: "GET",
            mode: "no-cors",

            // headers: {
            //     'Content-Type': 'application/json'}
          })
            .then((response) => {
              if (!response.ok) setStore({ error: response.error });
              return response.json();
            })
            .then((data) => {
              console.log(data);
              setStore({
                proyectos: data,
              });
            })
            .catch((error) => {});
        },
        getActivityById: (url, id) => {
          fetch(`${url}/${id}`, {})
            .then((response) => {
              if (!response.ok) setStore({ error: response.error });
              return response.json();
            })
            .then((data) => {
              setStore({
                activity: data,
              });
            })
            .catch(() => {});
        },
      },
    };
}

export default getState;