import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import Navbar from '../r_components/Navbar'
import Footer from '../r_components/Footer'
import M from 'materialize-css'
import persona1 from  '../images/persona1.jpg'

class Nosotros extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <Navbar>
                <div className="maincontainer">
                    
                    <div className="thecard">
                        <div className="thefront">
                            <img src={persona1} alt="Foto de Perfil"/>
                            <h1>Esperancita Gómez</h1>
                            <p className = "job-title">Software Developer</p>
                        </div>
                        <div className="theback">
                            <img src= {persona1} alt="Foto de Perfil"/><h1>Esperancita Gómez</h1>
                            <p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                        </div>
                    </div>

                </div>
            </Navbar>
        )
    }
    
}

export default Nosotros