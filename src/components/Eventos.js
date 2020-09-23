import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Evento from '../r_components/Evento'


class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                
                <div className="headerEventos">
                    <h4>Calendario de Eventos</h4>
                </div>
                <div className = "boxDescripcionEvento">
                    <p className = "descripcionEvento">
                        ¡Conoce nuestro itinerario de eventos!
                    </p>
                </div>

                <div className = "eventosMainBox">
                        <div className = "boxevento1">
                            <div className = "eventContainerEvent">
                                <Evento tituloEvento = "Evento 1" imagen = "https://i1.wp.com/erizos.mx/wp-content/uploads/2020/03/kemonito.jpg?resize=1080%2C1080&ssl=1" fechaEvento = "15 Jun" descripcionEvento = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"></Evento>
                            </div> 
                        </div>
                        <div className = "boxevento2">
                            <div className = "eventContainerEvent">
                                <Evento tituloEvento = "Evento 2" imagen = "https://cameronscookware.com/wp-content/uploads/2019/12/1080-x-1080-supreme-beautiful-1080x1080-supreme-reverse-search-combination-of-1080-x-1080-supreme.jpg" fechaEvento = "16 Jun" descripcionEvento = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"></Evento>
                            </div>   
                        </div>

                        <div className = "boxevento3">
                            <div className = "eventContainerEvent">
                                <Evento tituloEvento = "Evento 3" imagen = "https://wallpaperaccess.com/full/327366.jpg" fechaEvento = "20 Jul" descripcionEvento = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"></Evento>
                            </div> 
                        </div>
                        <div className = "boxevento4">
                            <div className = "eventContainerEvent">
                                <Evento tituloEvento = "Evento 4" imagen = "https://wallpapercave.com/wp/wp3788129.jpg" fechaEvento = "25 Jul" descripcionEvento = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"></Evento>
                            </div> 
                        </div>
                </div>
                
            </div>
            
        )
    }
    
}

export default Home