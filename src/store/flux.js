import { useReducer, useState } from "react";


const getState=({getStore, getActions, setStore})=>{

    return {
        store:{
            actividades:[
                {
                    "id":1,
                    "codigo": "C1234",
                    "proyecto": "Puerto Belize",
                    "descripcion": "Lorem impsum",
                    "fechainicio": "02/02/2020",
                    "fechafin": "31/12/2020",
                    "uso": "20HH",
                    "presupuesto": "500HH",
                    "estado": "activo"

                },
                {
                    "id":2,
                    "codigo": "C4526",
                    "proyecto": "Mejillones",
                    "descripcion": "Lorem impsum",
                    "fechainicio": "02/02/2020",
                    "fechafin": "31/12/2020",
                    "uso": "20HH",
                    "presupuesto": "500HH",
                    "estado": "activo"

                }
            ],
            usuarios:[],

            actividad:{
                "id":2,
                "codigo": "C4526",
                "proyecto": "Mejillones",
                "descripcion": "Lorem impsum",
                "fechainicio": "02/02/2020",
                "fechafin": "31/12/2020",
                "uso": "20HH",
                "presupuesto": "500HH",
                "estado": "activo"

            },

            proyectos:[],
            proyecto:null,
            error:null

        },
        actions:{
            getActividades: url => {
                fetch(url, {})
                    .then((response) => {
                        if (!response.ok) setStore({ error: response.error });
                        return response.json()
                    })
                    .then((data) => {
                        setStore({
                            actividades: data
                        })
                    })
                    .catch(() => {

                    })
            },
            getProyectos: url => {
                
                fetch(url)
                    .then((response) => {
                        if (!response.ok) setStore({ error: response.error });                      
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        setStore({
                            proyectos: data      
                        })
                        console.log(data)
                    })
                    .catch((error) => {
                        console.log(error)                        
                    })
            },
            getProyectById: (url, id) => {
                fetch(`${url}/${id}`, {})
                    .then((response) => {
                        if (!response.ok) setStore({ error: response.error });
                        return response.json()
                    })
                    .then((data) => {
                        setStore({
                            activity: data
                        })
                    })
                    .catch(() => {

                    })
            },
            getActivityById: (url, id) => {
                fetch(`${url}/${id}`, {})
                    .then((response) => {
                        if (!response.ok) setStore({ error: response.error });
                        return response.json()
                    })
                    .then((data) => {
                        setStore({
                            activity: data
                        })
                    })
                    .catch(() => {

                    })
            },
        }
    }
}

export default getState;