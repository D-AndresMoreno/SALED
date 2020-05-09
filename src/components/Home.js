import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import NavbarH from '../r_components/NavbarH'
import Anuncios from '../r_components/Anuncios'
import Footer from '../r_components/Footer'

import mentoria1 from '../images/mentoria1.png'
import mentoria2 from '../images/mentoria2.jpeg'
import mentoria3 from '../images/mentoria3.jpeg'

import apoyo from "../images/apoyoa.jpeg"

class Home extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems);
          });
    }

    render(){
        return(
            <div>
                <NavbarH></NavbarH>
                <h2 className = "tituloAnuncios">Anuncios</h2>
                <Anuncios></Anuncios>
                <div class="mentoria">
                <div class="mentoria-title">
                <h1>Mentoría</h1>
                </div>
                <div class="box-home-container" id="mentoria-box">
                    <div class="box-mentoria">
                        <img src={mentoria1} alt="Foto de Perfil"/>
                        <p>Description 1</p>
                    </div>
                    <div class="box-mentoria">
                        <img src={mentoria2} alt="Foto de Perfil"/>
                        <p>Description 2</p>
                    </div>
                    <div class="box-mentoria" id="bottom-box-mentoria">
                        <img src={mentoria3} alt="Foto de Perfil"/>
                        <p>Description 3</p>
                    </div>
                </div>
                <div>
                    <button class="button-home" ><h3>¡Conoce más!</h3></button>
                </div>
            </div>
            
            <div class="apoyo">
                <div class= "apoyo-title">
                    <h1>Apoyo Académico</h1>
                </div>
                <div class="box-home-container">
                    <div class="box-apoyo" id="box-text">
                        <h3>¿Qué es apoyo académico?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maxime atque dolor odio ab magnam, consequatur </p>
                        <h3>¿Cómo puedo colaborar?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed totam molestias numquam laudantium laboriosam autem </p>
                    </div>
                    <div class="box-apoyo">
                        <img src={apoyo} alt="Foto de Perfil"/>
                    </div>
                </div>
                <div>
                    <button class="button-home" ><h3>¡Conócelo!</h3></button>
                </div>
            </div>   
            </div>
        )
    }
    
}

export default Home