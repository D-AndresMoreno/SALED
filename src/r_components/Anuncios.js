import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Instagram from "../r_components/Instagram"
import Evento from "../r_components/Evento"
import M from 'materialize-css'

class Anuncios extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = "anunciosMainbox">                
                <div className="row1">
                    <div className="column1">
                        hola
                    </div>
                        <div className="column2"> 
                            <div className="evento1">
                                <Evento tituloEvento = "Evento 1" fechaEvento = "19 Feb"></Evento>
                            </div>
                            <div className = "evento2">
                                <Evento tituloEvento = "Evento 2" fechaEvento = "25 Feb"></Evento>
                            </div>
                        </div>
                    
                </div>
                <div className="row2">
                    <div className="column3">
                        
                    </div>
                    <div className="column4">hola</div>
                </div>
            </div> 
        )
    }
    
}

export default Anuncios