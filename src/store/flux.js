import { useReducer, useState } from "react";


const getState=({getStore, getActions, setStore})=>{

    return {
        store:{
            actividades:null,
            usuarios:[],
            actividad:null,
            proyectos:null,
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