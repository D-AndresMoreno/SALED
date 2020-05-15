import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import firebase from '../initiliazer/initializer'

class CardA extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="containerEvento">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.imagen}/>
                        </div>
                        <div className="card-content">
                        <span className="card-title">{this.props.titulo}</span>
                        <p>{this.props.descripcion}</p>
                        <p><a  href = "/ApoyoEstudiantil">Conoce más!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default CardA