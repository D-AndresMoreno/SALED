import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Instagram from "../r_components/Instagram"
import Evento from "../r_components/Evento"
import M from 'materialize-css'
import FotoHome from  '../images/Artboard 1.svg'

import Noticias from "../images/Noticias.jpg"
import Nosotros from "../images/Nosotros.jpg"


import Facebook from '../r_components/Facebook'
import team from '../images/TEAM.jpg'
import Slider from '../r_components/Slider'

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
                            <Evento imagen = "https://cameronscookware.com/wp-content/uploads/2019/12/1080-x-1080-supreme-beautiful-1080x1080-supreme-reverse-search-combination-of-1080-x-1080-supreme.jpg" tituloEvento = "Evento 1" fechaEvento = "19 Feb"></Evento>
                        </div>  
                    </div>
                    <div className="grid-anuncios2">
                        <div className = "eventContainerAnun">
                            <Evento imagen = "https://wallpapercave.com/wp/wp3788129.jpg" tituloEvento = "Evento 2" fechaEvento = "25 May"></Evento>
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