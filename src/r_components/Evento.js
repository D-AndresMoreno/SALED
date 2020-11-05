import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'


class Evento extends React.Component{
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
                        <span className="card-title">{this.props.tituloEvento}</span>
                        <p className = "card-description">{this.props.descripcionEvento}</p>
                        <p className = "card-button"><a  href ={this.props.link} target = "_blank" >Más información</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Evento