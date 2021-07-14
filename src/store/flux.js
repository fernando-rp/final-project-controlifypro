import { useReducer, useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
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
      usuarios: null,

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
      // usuarios: [],
      usuario: null,
    },
    actions: {
      Login: (email, password, history) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        fetch("/token", opts)
          .then((resp) => {
            if (resp.status === 200) return resp.json();
            else alert("Aqui hay un error");
          })
          .then((data) => {
            sessionStorage.setItem("token", data.access_token);
            history.push("/")
          })
          .catch((error) => {
            console.log("Aqui hay un error mas grande", error);
          });
      },

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
      getUsuarios: (url) => {
        fetch(url, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              usuarios: data,
            });
          })
          .catch(() => {});
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
      getUsuarioById: (url, id) => {
        fetch(`${url}/${id}`, {})
          .then((response) => {
            if (!response.ok) setStore({ usuario: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              usuario: data,
            });
          })
          .catch(() => {});
      },
    },
  };
};

export default getState;
