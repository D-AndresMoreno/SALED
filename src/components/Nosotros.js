import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import Navbar from '../r_components/Navbar'
import Footer from '../r_components/Footer'
import M from 'materialize-css'
import persona1 from  '../images/persona1.jpg'
import Tec from  '../images/instalacionesTecNP.jpg'

class Nosotros extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Navbar></Navbar>
                <div className="maincontainer">
                    <div class="top-container">
                        <div class="box-1">
                            <h1>Nuestro equipo</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, est veritatis? Itaque ipsa quo laudantium, quaerat recusandae nostrum eius, minus quidem esse eaque impedit sed eos porro neque. Commodi, neque.</p>
                        </div>
                            <div class="box-2">
                                <img src= {Tec} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div class="msg-container">
                        <h1>Conócenos</h1>
                    </div>

                    <div class="cards-container">
                        <div class="card-container">
                            <div class="card-L">
                                <div class="front-card">
                                    <img src={persona1} alt="Foto de Perfil"/>
                                    <h1>Esperancita Gómez</h1>
                                    <p>Software Developer</p>
                                </div>          
                                <div class="back-card">
                                    <img src={persona1} alt="Foto de Perfil"/><h1>Esperancita Gómez</h1>
                                    <p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                                </div>
                            </div>  
                        </div>
                        <div class="card-container">
                            <div class="card-L">
                                <div class="front-card">
                                    <img src={persona1} alt="Foto de Perfil"/>
                                    <h1>Esperancita Gómez</h1>
                                    <p class = "job-title">Software Developer</p>
                                </div>          
                                <div class="back-card">
                                    <img src={persona1} alt="Foto de Perfil"/><h1>Esperancita Gómez</h1>
                                    <p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                                </div>
                            </div>  
                        </div>
                        <div class="card-container">
                            <div class="card-L">
                                <div class="front-card">
                                    <img src={persona1} alt="Foto de Perfil"/>
                                    <h1>Esperancita Gómez</h1>
                                    <p class = "job-title">Software Developer</p>
                                </div>          
                                <div class="back-card">
                                    <img src={persona1} alt="Foto de Perfil"/><h1>Esperancita Gómez</h1>
                                    <p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
                                </div>
                            </div>  
                        </div>   
                    </div>
            </div>
        )
    }
    
}

export default Nosotros