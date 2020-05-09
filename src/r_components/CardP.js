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
                        <p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                    </div>
                </div>  
            </div>
                        
        )
    }
    
}

export default CardP