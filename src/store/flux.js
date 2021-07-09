import { useReducer, useState } from "react";


const getState=({getStore, getActions, setStore})=>{

    return {
        store:{
            actividades:[
                {
                    "id":1,
                    "proyecto": "C222",
                    "descripcion": "Lorem impsum",
                    "fechainicio": "02/02/2020",
                    "fechafin": "31/12/2020",
                    "uso": "20HH",
                    "presupuesto": "500HH",
                    "estado": "activo"

                },
                {
                    "id":1,
                    "proyecto": "C222",
                    "descripcion": "Lorem impsum",
                    "fechainicio": "02/02/2020",
                    "fechafin": "31/12/2020",
                    "uso": "20HH",
                    "presupuesto": "500HH",
                    "estado": "activo"

                }
            ]

        },
        actions:{
            // add_activity: e =>{
            //     const {actividades}= getStore ();
                
            // }
        }
    }
}

export default getState;