import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import firebase from '../initiliazer/initializer'

class CardA extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="containerEvento" id="containerCardA">
                <div className="col s12 m6">
                    <div className="card" id="cardA">
                        <div className="card-image" id="cardA-image">
                            <img src={this.props.imagen}/>
                        </div>
                        <div className="card-content" id="cardA-content">
                        <span className="card-title" id="cardA-title">{this.props.titulo}</span>
                        <p className = "card-description" id="cardA-description">{this.props.descripcion}</p>
                        <p className = "card-button" id="cardA-button"><a  href = "/ApoyoEstudiantil">Más información ></a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default CardA