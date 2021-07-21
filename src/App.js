import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/style.css"

import Home from "./views/home";
import ListadoActividades from "./views/listado-actividades";
import ListadoProyectos from "./views/listado-proyectos";
import ListaHoras from "./views/lista-horas";
import EdicionHora from "./views/edicion-horas";

import EdicionActividad from './views/edicion-actividad'
import EdicionProyecto from './views/edicion-proyecto'
import RegistroActividad from "./views/registro-actividad"
import RegistroProyecto from "./views/registro-proyecto"


import Navbar from './components/navbar'
import NavbarJefe from './components/navbarjefe'
import Navbarproyect from './components/navbarproyecto'

import ListaUsuarios from "./views/ListaUsuarios";
import { RegistroUsuario } from "./views/RegistroUsuario";
import { EdicionUsuario } from "./views/EdicionUsuario";

import DashboardAdministrador from "./views/Dashboard-administrador";


import { Login } from "./views/Login";
import Error404 from "./views/error404";
import Contact from "./components/contact";

import injectContext from "./store/appContext";

const App = () => {

    return (
      <BrowserRouter>
        <Switch>
          {/* landingPage */}
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>

          {/* proyectos */}
          <Route exact path="/listado-proyectos">
            <NavbarJefe />
            <ListadoProyectos />
          </Route>
          <Route exact path="/registro-edicion-proyecto/:id">
            <NavbarJefe />
            <EdicionProyecto />
          </Route>
          <Route exact path="/registro-proyectos">
            <NavbarJefe />
            <RegistroProyecto />
          </Route>

          {/* actividades */}
          <Route exact path="/listado-actividades">
            <NavbarJefe />
            <ListadoActividades />
          </Route>
          <Route exact path="/registro-edicion-actividad/:id">
            <NavbarJefe />
            <EdicionActividad />
          </Route>
          <Route exact path="/registro-actividad">
            <NavbarJefe />
            <RegistroActividad />
          </Route>

          {/* Usuarios */}
          <Route exact path="/lista-usuarios">
            <NavbarJefe />
            <ListaUsuarios />
          </Route>
          <Route exact path="/EdicionUsuario/:id">
            <NavbarJefe />
            <EdicionUsuario />
          </Route>
          <Route exact path="/RegistroUsuario">
            <NavbarJefe />
            <RegistroUsuario />
          </Route>

          {/* Horas */}
          <Route exact path="/lista-horas">
            <NavbarJefe />
            <ListaHoras />
          </Route>
          <Route exact path="/lista-horas/:id">
            <NavbarJefe />
            <EdicionHora />
          </Route>

          {/* Dashboard */}
          <Route exact path="/Dashboard-administrador">
            <NavbarJefe />
            <DashboardAdministrador />
          </Route>

          {/* Otros */}
          <Route>
            <Error404 />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    )
}

export default injectContext(App);

