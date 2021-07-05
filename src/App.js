import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Home from './views/home'
import ListadoActividades from './views/listado-actividades'
import RegistroEdicionActividad from './views/registro-edicion-actividad'
import Navbar from './components/navbar'
import Footer from './components/footer'

import Error404 from './views/error404'

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
                <Route exact path="/listado-actividades/registro-edicion-actividad">
                    <RegistroEdicionActividad />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;