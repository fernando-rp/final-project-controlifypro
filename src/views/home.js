import React from "react";
// import Contact from '../components/contact'

import imagen6 from '../img/imagen6.jpg'
import imagen7 from '../img/imagen7.jpg'
import imagen8 from '../img/imagen8.jpg'
import imagen9 from '../img/imagen9.jpg'

import Tecnologias from "../components/tecnologias";
import Equipo from "../components/equipo"

import Carrusel from "../components/carrusel";
import History from "../components/history";
import Mododeusar from "../components/mododeusar";
import Porqueusar from "../components/porqueusar";
import Footer from "../components/footer";

const Home = () => {

    return (
        <>            
            <Carrusel />
            <Mododeusar/>
            <History />
            <Porqueusar/>
            {/* <Tecnologias /> */}
            {/* <Equipo/>  */}
            <Footer/>
        </>  
        
        
        
    )
}

export default Home;