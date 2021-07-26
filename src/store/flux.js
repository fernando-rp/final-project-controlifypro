import Swal from 'sweetalert2'
import moment from "moment";

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
      localidades: null,
      horas: null,
      horasPorActividad: null,
      horasporProyecto:null,
      horasporColaborador:null,

      horasProyectos: null,
      hora:null,
      actividades_proyecto:null,
      usuario_id: '',
      access_token: '',
      rol_id: '',

      arrHH: null,
      arrNombre: null,

      nombres:[],

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
            if (resp.status === 200) {
              return resp.json();
            } else if (resp.status === 204) {
              Swal.fire({
                icon: "warning",
                title: "Su usuario se encuentra desactivado del sistema",
                text: "Contactese con su administrador del sistema",
              });
            } else {
              Swal.fire("Error", "Usuario o contraseña incorrecto", "error");
            }
          })
          .then((data) => {

            setStore({ 
              usuario_id: data.usuario_id,
              access_token: data.access_token,
              rol_id: data.rol_id
            })

            switch (data.rol_id) {
              case 1:
                // código para redireccionar al administrador
                sessionStorage.setItem("token", data.access_token);

                history.push("/listado-proyectos");
                break;
              case 2:

                  // código para redireccionar al jefe
                  history.push("/listado-proyectos");

                break;
              case 3:
                // código para redireccionar al Colaborador
                sessionStorage.setItem("token", data.access_token);

                history.push("/listado-proyectos");
                break;
              default:
                Swal.fire({
                  icon: "error",
                  text: "Usuario sin rol asignado",
                });
                break;
            }

            //sessionStorage.setItem("token", data.access_token);

            // history.push("/listado-proyectos");
          })
          .catch((error) => {
            console.log("Error Login", error);
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
        // //realiza set de la fecha para que lo reconozca el input type=date
        // if(e.target.name == "fecha_inicio" || e.target.name == "fecha_entrega"){
        //   // console.log(e.target.name +' : '+moment(e.target.value, "YYYY-MM-DD").format("DD-MM-YYYY"))
        //   proyecto[e.target.name] = moment(e.target.value, "YYYY-MM-DD").format("DD-MM-YYYY");
        // } else {
        //   proyecto[e.target.name] = e.target.value;
        // }
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


      
      getHorasPorActividad: (url) => {
        fetch(url, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              horasPorActividad: data
            });
          })
          .catch(() => {});
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

            // console.log(data)
            setStore({  proyecto: data })
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
            // console.log(data)
            setStore({
              actividad: data,
            });
          })
          .catch(() => {});
      },
      getActividadesProyectos: (url) => {
        fetch(url, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              actividades_proyecto: data,
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
            getActions().getProyectos("/proyectos");
          })
          .catch((error) => {
            console.log(error);
          });
      },
      deleteUsuario: (id) => {
        fetch(` usuarios/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            getActions().getUsuarios("/usuarios");
          })
          .catch((error) => {
            console.log(error);
          });
      },


      /****** Horas ******/
      getHoraById: (url, id) => {
        fetch(`${url}/${id}`, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              hora: data,
            });
          })
          .catch(() => {});
      },
      
      handleChangeHora: (e) => {
        const { hora } = getStore();
        hora[e.target.name] = e.target.value;
        setStore({
          hora: hora,
        });
      },
      getHoras: (url) => {
        fetch(url, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              horas: data,
            });
          })
          .catch(() => {});
      },
      addHoras: (url, nhoras) => {
        fetch(`${url}`, {
          method: "POST",
          body: JSON.stringify(nhoras),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            getActions().getHoras("/horas");
            setStore({
              horas: data,
            });

          })
          .catch(() => {});
      },
      deleteHora: (id) => {
        fetch(` horas/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            
            getActions().getHoras("/horas");
          })
          .catch((error) => {
            console.log(error);
          });
      },
      updateHora: (url, id, history) => {
        const { hora } = getStore();
        fetch(`${url}/${id}`, {
          method: "PUT",
          body: JSON.stringify(hora),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            getActions().getHoras("/horas");
            history.push("/lista-horas");
          })
          .catch(() => {});
      },

      /****** Gráficos ******/

      getHorasPorActividad: (url) => {
        fetch(url, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              horasPorActividad: data,
              
            });
          })
          .catch(() => {});
      },
      getHorasSProyecto: (url, id) => {
        fetch(`${url}/${id}`, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              horasporProyecto: data,
            });
          })
          .catch(() => {});
      },
      getHorasPorActProyColaborador: (url, id1, id2) => {
        fetch(`${url}/${id1}/${id2}`, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              horasporColaborador: data,
            });
          })
          .catch(() => {});
      },
      getHorasProyectos: (url) => {
        fetch(url, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              horasProyectos: data,
            });
          })
          .catch(() => {});
      },
      
      /****** Actividad ******/

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

      srcActividades: (url, datos) => {
        fetch(`${url}`, {
          method: "POST",
          body: JSON.stringify(datos),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.status === 200) {
              return resp.json();
            } else {
              Swal.fire(
                "Atención",
                "Datos del formulario no arrojan resultados.",
                "warning"
              );
            }
          })
          .then((data) => {
            console.log(data);
            setStore({
              actividades: data,
            });
          })
          .catch(() => {});
      },

      /****** Usuarios ******/

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
            getActions().getUsuarios("/usuarios");
            history.push("/lista-usuarios");
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
      addUsuario: (url, nusuario, history) => {
        fetch(`${url}`, {
          method: "POST",
          body: JSON.stringify(nusuario),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            getActions().getProyectos("/usuarios");
            history.push("/lista-usuarios");
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

      /****** Proyectos ******/

      srcProyectos: (url, datos) => {
        fetch(`${url}`, {
          method: "POST",
          body: JSON.stringify(datos),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.status === 200) {
              return resp.json();
            } else {
              Swal.fire(
                "Atención",
                "Datos del formulario no arrojan resultados.",
                "warning"
              );
            }
          })
          .then((data) => {
            console.log(data);
            setStore({
              proyectos: data,
            });
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

      /****** Localidades ******/
      getLocalidades: (url) => {
        fetch(url, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({
              localidades: data,
            });
          })
          .catch(() => {});
      },
    },
  };
};

export default getState;
