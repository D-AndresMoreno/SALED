import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import Navbar from '../r_components/Navbar'
import Footer from '../r_components/Footer'
import LogoSaled from  '../images/LogoSaled.png'

class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            
            <div className = "homeContactBox">
                
                    <nav className="nav">
                        <ul>
                            <li><a href="/Nosotros">Home</a></li>
                            <li><a href="/Contacto">Eventos</a></li>
                            <li><a href="/Anuncios">Anuncios</a></li>
                            <li><a href="/Nosotros">Nosotros</a></li>
                            <li><a href="/Contacto">Apoyo Academico</a></li>
                            <li><a href="/Anuncios">Apoyo Estudiantil</a></li>
                        </ul>
                     </nav>
            
            </div>
            
        )
    }
    
}

export default Home