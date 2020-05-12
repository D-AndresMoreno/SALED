import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import NavbarH from '../r_components/NavbarH'
import Anuncios from '../r_components/Anuncios'
import Footer from '../r_components/Footer'

import mentoria1 from '../images/bussiness.jpg'
import mentoria2 from '../images/happy-office.jpg'
import mentoria3 from '../images/work.jpg'

//Fotos Merch
import merc1 from "../images/merc1.png"
import merc2 from "../images/merc2.png"
import merc3 from "../images/merc3.jpg"
import merc4 from "../images/merc4.jpg"
import merc5 from "../images/merc5.png"
import merc6 from "../images/merc6.png"


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
                        <h2 className = "mentoria-title-text">Apoyo Estudiantil</h2>
                    </div>
                    <div class="box-home-container" id="mentoria-box">
                        <div class="box-mentoria">
                            <img src={mentoria2} alt="Foto de Perfil"/>
                            <p>Description 1</p>
                        </div>
                        <div class="box-mentoria">
                            <img src={mentoria1} alt="Foto de Perfil"/>
                            <p>Description 2</p>
                        </div>
                        <div class="box-mentoria" id="bottom-box-mentoria">
                            <img src={mentoria3} alt="Foto de Perfil"/>
                            <p>Description 3</p>
                        </div>
                    </div>
                <div>
                    <button class="btnMent" href = "/ApoyoAcademico">Conoce más!</button>
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
            
            <h2 className = "tituloAnuncios">Tienda</h2>
            <div className = "carousel-container">
                <div class="carousel">
                    <a class="carousel-item" href="/shopify"><img src={merc1}/></a>
                    <a class="carousel-item" href="#Two!"><img src={merc2}/></a>
                    <a class="carousel-item" href="#Three!"><img src={merc3}/></a>
                    <a class="carousel-item" href="#Four!"><img src= {merc4}/></a>
                    <a class="carousel-item" href="#Five!"><img src={merc5}/></a>
                    <a class="carousel-item" href="#Six!"><img src={merc6}/></a>
                </div>   
            </div>

            <div className = "containerTienda">
                <button class="btnTienda" href = "/ApoyoAcademico">Compra ya!</button>
            </div>
          

            </div>
        )
    }
    
}

export default Home