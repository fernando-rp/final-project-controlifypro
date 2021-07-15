import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/home'
import "./css/style.css"


import ListadoActividades from './views/listado-actividades'
import ListadoProyectos from './views/listado-proyectos'

import RegistroEdicionActividad from './views/registro-edicion-actividad'
import RegistroEdicionProyecto from './views/registro-edicion-proyecto'
import RegistroActividad from "./views/registro-actividad"

import Navbar from './components/navbar'
import Navbarusuaruios from './components/navbarjefe'
import Navbarproyect from './components/navbarproyecto'

import Footer from './components/footer'
import Contact from './components/contact'

import Error404 from './views/error404'

import { ListaUsuarios } from './views/ListaUsuarios'
import { RegistroUsuario } from './views/RegistroUsuario'
import { EdicionUsuario } from "./views/EdicionUsuario";

import { Login } from "./views/Login";
import injectContext from './store/appContext'


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                   
                    <Home />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/listado-actividades">
                    <ListadoActividades />
                </Route>
                <Route exact path="/listado-proyectos">
                    
                    <ListadoProyectos />
                </Route>
                <Route exact path="/registro-edicion-actividad/:id">
                    <RegistroEdicionActividad />
                </Route>
                <Route exact path="/listado-actividades/registro-actividad">
                    <RegistroActividad />
                </Route>
                <Route exact path="/listado-proyectos/registro-edicion-proyecto">
                    <RegistroEdicionProyecto />
                </Route>
                <Route exact path="/ListaUsuarios">
                   
                    <ListaUsuarios />
                </Route>
                <Route exact path="/RegistroUsuario">
                    <RegistroUsuario />
                </Route>
                <Route exact path="/EdicionUsuario">
                    <EdicionUsuario />
                </Route>
                <Route exact path="/Login">
                    <Login />
                </Route>

                <Route exact path="/Contact">
                    <Contact />

                </Route>
                <Route exact path="/RegistroUsuario">
                    <RegistroUsuario />
                </Route>
                <Route exact path="/EdicionUsuario">
                    <EdicionUsuario />
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