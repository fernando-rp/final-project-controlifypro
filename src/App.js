import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Home from './views/home'
import Error404 from './views/error404'
import { ListaUsuarios } from './views/ListaUsuarios'
import { RegistroUsuario } from './views/RegistroUsuario'

const App= ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/ListaUsuarios">
                    <ListaUsuarios />
                </Route>
                <Route exact path="/RegistroUsuario">
                    <RegistroUsuario />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;