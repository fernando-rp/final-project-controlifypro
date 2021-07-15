import { useReducer, useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      actividades: null,
      usuarios: [],
      usuario: null,
      actividad: null,
      proyectos: null,
      proyecto: null,
      error: null,
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
        fetch("/login", opts)
          .then((resp) => {
            if (resp.status === 200) return resp.json();
            else alert("Aqui hay un error");
          })
          .then((data) => {
            sessionStorage.setItem("token", data.access_token);
            history.push("/");
          })
          .catch((error) => {
            console.log("Aqui hay un error mas grande", error);
          });
      },
      handleChangeActividad: (e) => {
        const { actividad } = getStore();
        actividad[e.target.name] = e.target.value;
        setStore({
          actividad: actividad,
        });
      },
      handleChangeProyecto: (e) => {
        const { proyecto } = getStore();
        proyecto[e.target.name] = e.target.value;
        setStore({
          proyecto: proyecto,
        });
      },
      handleChangeUsuario: (e) => {
        const { usuario } = getStore();
        usuario[e.target.name] = e.target.value;
        setStore({
          usuario: usuario,
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
        fetch(url)
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              proyectos: data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getProyectById: (url, id) => {
        fetch(`${url}/${id}`, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              proyecto: data,
            });
          })
          .catch(() => {});
      },
      getActividadById: (url, id) => {
        fetch(`${url}/${id}`, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              actividad: data,
            });
          })
          .catch(() => {});
      },
      deleteActividad: (id) => {
        fetch(`actividades/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            getActions().getActividades("/actividades");
          })
          .catch((error) => {
            console.log(error);
          });
      },
      deleteProyecto: (id) => {
        fetch(`proyectos/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            console.log("proyecto eliminado");
            getActions().getActividades("/proyectos");
          })
          .catch((error) => {
            console.log(error);
          });
      },

      updateActividad: (url, id, history) => {
        const { actividad } = getStore();
        fetch(`${url}/${id}`, {
          method: "PUT",
          body: JSON.stringify(actividad),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            getActions().getActividades("/actividades");

            history.push("/listado-actividades");
          })
          .catch(() => {});
      },
      updateProyecto: (url, id, history) => {
        const { proyecto } = getStore();
        fetch(`${url}/${id}`, {
          method: "PUT",
          body: JSON.stringify(proyecto),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            getActions().getActividades("/proyectos");

            history.push("/listado-proyectos");
          })
          .catch(() => {});
      },
      updateUsuario: (url, id, history) => {
        const { usuario } = getStore();
        fetch(`${url}/${id}`, {
          method: "PUT",
          body: JSON.stringify(usuario),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            getActions().getUsuarios("/usuario");

            history.push("/lista-usuario");
          })
          .catch(() => {});
      },

      addActividad: (url, nactividad, history) => {
        fetch(`${url}`, {
          method: "POST",
          body: JSON.stringify(nactividad),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            getActions().getActividades("/actividades");
            history.push("/listado-actividades");
          })
          .catch(() => {});
      },
      addProyecto: (url, nproyecto, history) => {
        fetch(`${url}`, {
          method: "POST",
          body: JSON.stringify(nproyecto),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            getActions().getProyectos("/proyectos");
            history.push("/listado-proyectos");
          })
          .catch(() => {});
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
