import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Instagram from "../r_components/Instagram"
import Evento from "../r_components/Evento"
import M from 'materialize-css'
import Corona from "../images/Coronavirus.jpg"
import Facebook from '../r_components/Facebook'

class Anuncios extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = "anunciosMainbox">
                <div className = "row1C">  

                    <div className = "box1">
                        <img src = {Corona} className="imagenFlex"></img>
                    </div>
                    <div className = "box2">
                        <div className = "eventContainerAnun">
                            <Evento tituloEvento = "Evento 1" fechaEvento = "19 Feb"></Evento>
                        </div>   
                    </div>

                    <div className = "box3">
                        <div className = "eventContainerAnun">
                            <Evento tituloEvento = "Evento 2" fechaEvento = "25 May"></Evento>
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
                        <img src = {Corona} className="imagenFlex"></img>
                    </div>
                </div> 
            </div> 
        )
    }
    
}

export default Anuncios