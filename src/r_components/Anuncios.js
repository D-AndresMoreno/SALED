import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Instagram from "../r_components/Instagram"
import Evento from "../r_components/Evento"
import M from 'materialize-css'
import Corona from "../images/Corona2.jpg"
import Facebook from '../r_components/Facebook'
import team from '../images/TEAM.jpg'

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
            <div className = "anunciosMainbox">
                <div className = "row1C">  

                    <div className = "box1">
                        <img src = {Corona} className="imagenFlex" ></img>
                    </div>
                    <div className = "box2">
                        <div className = "eventContainerAnun">
                            <Evento imagen = "https://cameronscookware.com/wp-content/uploads/2019/12/1080-x-1080-supreme-beautiful-1080x1080-supreme-reverse-search-combination-of-1080-x-1080-supreme.jpg" tituloEvento = "Evento 1" fechaEvento = "19 Feb"></Evento>
                        </div>   
                    </div>

                    <div className = "box3">
                        <div className = "eventContainerAnun">
                            <Evento imagen = "https://wallpapercave.com/wp/wp3788129.jpg" tituloEvento = "Evento 2" fechaEvento = "25 May"></Evento>
                        </div> 
                    </div>
                </div>
                <div className = "row2C">
                    <div className = "box4">        
                        <p className = "redes">
                            Siguenos en nuestras redes!
                        </p>
                        <Instagram></Instagram>
                    </div>
                    <div className = "box5">
                        <Facebook></Facebook>
                    </div>

                    <div className = "box6">
                        <div className = "imageEquipoContainer" >
                            <img src= {team} className="imagenFlex"></img>
                        </div>
                    </div>
                </div> 
            </div> 
        )
    }
    
}

export default Anuncios