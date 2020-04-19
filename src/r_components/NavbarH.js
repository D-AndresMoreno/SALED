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
                            <li><a href="/Nosotros">Home</a></li>
                            <li><a href="/Eventos">Eventos</a></li>
                            <li><a href="/Anuncios">Anuncios</a></li>
                            <li><a href="/Nosotros">Nosotros</a></li>
                            <li><a href="/ApoyoAcademico">Apoyo Academico</a></li>
                            <li><a href="/ApoyoEstudianitl">Apoyo Estudiantil</a></li>
                        </ul>
                    </nav>
                    <div className = "imgContainer">
                        <img src={logo} className="logoSaled"></img>
                    </div>

                    
            </div>
            /*Parallax Failed
            <div class="parallax-container">
                <div className="parallax"><img src="https://www.elsetge.cat/myimg/f/0-5243_pubg-wallpaper-hd.png" alt="" />
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
            </div>
            */
        )
    }
    
}

export default NavbarH