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
            
            handleChangeActividad: e => {
                const { actividad } = getStore();
                actividad[e.target.name] = e.target.value;
                setStore({
                    actividad: actividad
                })
            },
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
                            proyecto: data
                        })
                    })
                    .catch(() => {

                    })
            },
            getActividadById: (url, id) => {
                fetch(`${url}/${id}`, {})
                    .then((response) => {
                        if (!response.ok) setStore({ error: response.error });
                        return response.json()
                    })
                    .then((data) => {
                        setStore({
                            actividad: data
                        })
                    })
                    .catch(() => {

                    })
            },
            deleteActividad:(id)=>{
    
                    fetch(`actividades/${id}`, {
                        method: 'DELETE'
                    })
                        .then((response) => {
                            if (!response.ok) setStore({ error: response.error });
                            return response.json()
                        })
                        .then((data) => {
                            getActions().getActividades("/actividades")
                        })
                        .catch((error) => {
                            console.log(error)
                        })
            },

            updateActividad: (url, id,history) => {
                const { actividad } = getStore()
                fetch(`${url}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(actividad),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => {
                        if (!response.ok) setStore({ error: response.error });
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        getActions().getActividades("/actividades")
                        console.log(history)
                        history.push('/listado-actividades')

                    })
                    .catch(() => {

                    })
            },
            addActividad: ( url,nactividad,history) => {
                fetch(`${url}`, {
                    method: 'POST',
                    body: JSON.stringify(nactividad),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => {
                        if (!response.ok) setStore({ error: response.error });
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        getActions().getActividades("/actividades")
                        history.push('/listado-actividades')
                    })
                    .catch(() => {

                    })
            },
        }
    }
}

export default getState;