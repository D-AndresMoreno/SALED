import React from 'react';

class CardP extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(      
            <div class="card-container">
                <div class="card-L">
                    <div class="front-card">
                        <img src={this.props.imagen} alt="Foto de Perfil"/>
                        <h1>{this.props.nombre}</h1>
                        <p>{this.props.puesto}</p>
                    </div>          
                    <div class="back-card">
                        <img src={this.props.imagen} alt="Foto de Perfil"/><h1>{this.props.nombre}</h1>
                        <h4>Contacto</h4>
                        <p>{this.props.contacto}</p>
                    </div>
                </div>  
            </div>
                        
        )
    }
    
}

export default CardP