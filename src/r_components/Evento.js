import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Evento extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="containerEvento">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://i1.wp.com/erizos.mx/wp-content/uploads/2020/03/kemonito.jpg?resize=1080%2C1080&ssl=1"/>
                            <a href="/Eventos" className="btn-floating btn-large halfway-fab waves-effect waves-light red">{this.props.fechaEvento}</a>
                        </div>
                        <div className="card-content">
                        <span className="card-title">{this.props.tituloEvento}</span>
                        <p>{this.props.descripcionEvento}</p>
                        <p><a href="/Eventos">Más Información</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Evento