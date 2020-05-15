import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import navbar from '../r_components/Navbar'
import Footer from '../r_components/Footer'
import M from 'materialize-css'


import mentoria1 from '../images/bussiness.jpg'

import mentoria4 from '../images/mentoria4.jpeg'
import mentoria2 from '../images/happy-office.jpg'
import mentoria3 from '../images/work.jpg'


class Slider extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems);
          });
    }
    
    render(){
        return(
            <div className="slider">
                <ul className="slides">
                <li>
                    <a href = "/ApoyoEstudiantil">
                        <img src= {mentoria2} className= "imagenSlider" style = {{cursor:"pointer"}}/> 
                    </a>
                    <div class="caption center-align">
                    <h3>Conoce el apoyo estudiantil</h3>
                    <h5 class="light grey-text text-lighten-3">Un espacio de mentoría especial para ti.</h5>
                    </div>
                </li>
                <li>
                    <a href = "/ApoyoEstudiantil">
                        <img src= {mentoria1} style = {{cursor:"pointer"}}/> 
                    </a>
                    <div class="caption left-align">
                    <h3>Haz que tu conocimiento trascienda</h3>
                    <h5 class="light grey-text text-lighten-3">Postulate como mentor en apoyo estudiantil</h5>
                    </div>
                </li>
               
                </ul>
            </div>
      
        )
    }
    
}

export default Slider;