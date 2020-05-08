import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import Navbar from './Navbar';
import logo from '../images/LogoSaled.png'

class NavbarH extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});
        });
    }

    render(){
        return(

            <div className = "navbarHMainBox">
                    <nav className="nav">
                        <ul style={{marginTop:100}}>
                            <li><a href="/Nosotros" className = "cool-link">Home</a></li>
                            <li><a href="/Eventos" className = "cool-link">Eventos</a></li>
                            <li><a href="/Anuncios" className = "cool-link">Anuncios</a></li>
                            <li><a href="/Nosotros" className = "cool-link">Nosotros</a></li>
                            <li><a href="/ApoyoAcademico" className = "cool-link">Apoyo Academico</a></li>
                            <li><a href="/ApoyoEstudiantil" className = "cool-link">Apoyo Estudiantil</a></li>
                        </ul>
                    </nav>
                    <div className = "imgContainer">
                        <img src={logo} className="logoSaled"></img>
                    </div>

                    
            </div>
        )
    }
    
}

export default NavbarH