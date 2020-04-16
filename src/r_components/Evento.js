import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Evento extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="row">
                <div className="col s12 m6">
                    <div className="card" style={{height:"10"}}>
                        <div className="card-image">
                            <img src="https://lh3.googleusercontent.com/proxy/ThD0R6OQgOvCyj3802MRNvFF8qRSGyny-QjtdSaO0z8r1RRQ-ALjsy8QD3X67Os7DoFO_XmFUv0H0TfZ9TNdo6QsCJVQOV_G_EO-B22g2KrqGxrSzQ"/>
                            <a className="btn-floating btn-large halfway-fab waves-effect waves-light red">19 Feb<img src="https://cdn.clipart.email/5b5bf909fadc5887f85ed1eaa274517d_small-red-apple-clip-art-at-clkercom-vector-clip-art-online-_576-595.png"/></a>
                        </div>
                        <div className="card-content">
                        <span className="card-title">Vergasos</span>
                        <p>Que onda perras, se arma en el establo para agarrarnos a putasos el barrio 46 vs los discipulos del patron. No gatos $200 de cover</p>
                        <p><a href="#">Más Información</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Evento