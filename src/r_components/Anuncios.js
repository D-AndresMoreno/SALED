import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Evento from "../r_components/Evento"
import M from 'materialize-css'
import FotoHome from  '../images/SALEDlogo.png'
import Titulo from  '../images/Titulo.png'
import LegislaTec from  '../images/LegislaTec.png'


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
                            <Evento link = "https://www.instagram.com/saledmty/" imagen = {Titulo} tituloEvento = "Semana de conferencias" fechaEvento = "19 Oct"></Evento>
                        </div>  
                    </div>
                    <div className="grid-anuncios2">
                        <div className = "eventContainerAnun">
                            <Evento link = "https://www.instagram.com/legisla.tec/" imagen = {LegislaTec} tituloEvento = "LegislaTec" fechaEvento = "24 Oct"></Evento>
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