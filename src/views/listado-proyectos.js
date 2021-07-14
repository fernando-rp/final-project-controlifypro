import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import {  useEffect } from "react";

const ListadoProyectos = ()=>{

    const {store, actions}= useContext(Context);
    const {proyectos}=store;

    useEffect(()=>{
        actions.getProyectos("/proyectos")
    },[])



    return(
<>
</>
  )
}


export default ListadoProyectos;
