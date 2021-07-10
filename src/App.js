import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Home from './views/home'
import ListadoActividades from './views/listado-actividades'
import ListadoProyectos from './views/listado-proyectos'

import RegistroEdicionActividad from './views/registro-edicion-actividad'
import RegistroEdicionProyecto from './views/registro-edicion-proyecto'

import Navbar from './components/navbar'
import Footer from './components/footer'

import Error404 from './views/error404'

import { ListaUsuarios } from './views/ListaUsuarios'
import { RegistroUsuario } from './views/RegistroUsuario'
import { EdicionUsuario } from "./views/EdicionUsuario";
import { Login } from "./views/Login";
import injectContext from './store/appContext'



const App= ()=>{
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/listado-actividades">
                    <ListadoActividades />
                </Route>
                <Route exact path="/listado-proyectos">
                    <ListadoProyectos />
                </Route>
                <Route exact path="/:id/registro-edicion-actividad">
                    <RegistroEdicionActividad />
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
                <Route>
                    <Error404 />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(App);