import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

import apoyo1 from '../images/apoyo1.jpeg'
import apoyo2 from '../images/apoyo2.jpg'

class ApoyoEstudiantil extends React.Component{
    constructor(props){
        super(props);  

    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems);
          });
    }


    render(){
        return(
            <div>
               
                <div className="apoyo-estudiantil-title">
                    <h1>Apoyo Estudiantil</h1>  
                </div>
                <div className="apoyo-estudiantil-container">
                    <div className="apoyo-e-box1">
                        <div className="slider">
                            <ul className="slides">
                            <li>
                                <a href={"https://docs.google.com/forms/d/e/1FAIpQLSeReZFLdMaN7YmfHU3h_d3hFEFnNDVvdKfhiVmZNPriBbcSsw/viewform?usp=sf_link"} target = "_blank">
                                    <img src= {apoyo1} className= "imagenSlider" style = {{cursor:"pointer"}}/> 
                                </a>
                                <div class="caption center-align">
                                    <h3>Asesorate con un mentor</h3>
                                    <h5 class="light grey-text text-lighten-3">Cuentanos lo que necesites y te conseguiremos el mentor más adecuado para ti.</h5>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="apoyo-e-box2">
                        <div className="slider">
                            <ul className="slides">
                            <li>
                                <a href={"https://docs.google.com/forms/d/e/1FAIpQLSduLyossG8o9g5aLsG9CfQOuAIr0JPT1eVdeZNqaawl9TsUlQ/viewform?usp=sf_link"} target = "_blank">
                                    <img src= {apoyo2} className= "imagenSlider" style = {{cursor:"pointer"}}/> 
                                </a>
                                <div class="caption center-align">
                                    <h3>Postulate como mentor</h3>
                                    <h5 class="light grey-text text-lighten-3">Elige tu area de expertis y trasciende tu conocimiento.</h5>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
          
            </div>
        )
    }
    
}



export default ApoyoEstudiantil