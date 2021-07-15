
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/style.css"
import Home from "./views/home";
import ListadoActividades from "./views/listado-actividades";
import ListadoProyectos from "./views/listado-proyectos";



import EdicionActividad from './views/edicion-actividad'
import EdicionProyecto from './views/edicion-proyecto'
import RegistroActividad from "./views/registro-actividad"


import Navbar from './components/navbar'
import Navbarusuaruios from './components/navbarjefe'
import Navbarproyect from './components/navbarproyecto'

import Footer from './components/footer'
import Contact from './components/contact'

import Error404 from './views/error404'

import { ListaUsuarios } from './views/ListaUsuarios'
import { RegistroUsuario } from './views/RegistroUsuario'

import { Login } from "./views/Login";

import injectContext from './store/appContext'


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
              
             <Route exact path="/contact">
                    <Contact />
               </Route>
              <Route exact path="/">
                    <Navbar />
                    <Home/>

                </Route>
                <Route exact path="/listado-actividades">
                    <ListadoActividades />
                </Route>
                <Route exact path="/listado-proyectos">
                    
                    <ListadoProyectos />
                </Route>
                <Route exact path="/registro-edicion-actividad/:id">
                    <EdicionActividad />
                </Route>
                <Route exact path="/listado-actividades/registro-actividad">
                    <RegistroActividad />
                </Route>
                <Route exact path="/registro-edicion-proyecto/:id">
                    <EdicionProyecto />
                </Route>
                <Route exact path="/ListaUsuarios">
                  <ListaUsuarios />
                </Route>
          <Route exact path="/RegistroUsuario">
            <RegistroUsuario />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(App);

