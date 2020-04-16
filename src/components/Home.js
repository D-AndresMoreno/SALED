import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import Navbar from '../r_components/Navbar'
import Footer from '../r_components/Footer'
import LogoSaled from  '../images/LogoSaled.png'
import persona1 from  '../images/persona1.jpg'

class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            
            <div className = "homeContactBox">
                    <nav className="nav">
                        <ul style={{marginTop:100}}>
                            <li><a href="/Nosotros">Home</a></li>
                            <li><a href="/Eventos">Eventos</a></li>
                            <li><a href="/Anuncios">Anuncios</a></li>
                            <li><a href="/Nosotros">Nosotros</a></li>
                            <li><a href="/ApoyoAcademico">Apoyo Academico</a></li>
                            <li><a href="/ApoyoEstudianitl">Apoyo Estudiantil</a></li>
                        </ul>
                     </nav>
                     

            </div>
            
        )
    }
    
}

export default Home