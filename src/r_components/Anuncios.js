import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Evento from "../r_components/Evento"
import M from 'materialize-css'
import FotoHome from  '../images/SALEDlogo.png'
import Titulo from  '../images/Titulo.png'
import Concurso from  '../images/Concurso.png'


class Anuncios extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        
    document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems);
        });

    }

    render(){
        return(
            <div className="anuncios">
                <div className="grid-container">
                    
                    <div className="grid-anuncios1">
                        <div className = "eventContainerAnun">
                            <Evento link = "https://www.instagram.com/saledmty/" imagen = {Titulo} tituloEvento = "Semana de conferencias"></Evento>
                        </div>  
                    </div>
                    <div className="grid-anuncios2">
                        <div className = "eventContainerAnun">
                            <Evento link = "https://www.instagram.com/cnjo.tec/" imagen = {Concurso} tituloEvento ="Competencia Interinstitucional"></Evento>
                        </div> 
                    </div>
                   
                    <div className="grid-nosotros">
                        <a href="/Nosotros">
                            <img src = {FotoHome} alt=''></img>
                            <p>Conoce nuestro equipo</p>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}





export default Anuncios