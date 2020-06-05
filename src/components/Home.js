import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import NavbarH from '../r_components/NavbarH'
import Anuncios from '../r_components/Anuncios'
import Footer from '../r_components/Footer'
import Slider from '../r_components/Slider'

import mentoria1 from '../images/bussiness.jpg'
import mentoria2 from '../images/happy-office.jpg'
import mentoria3 from '../images/work.jpg'

import apoyo1 from '../images/apoyo1.jpg'
import apoyo2 from '../images/apoyo5.jpg'
import apoyo3 from '../images/apoyo3.jpeg'

import CardA from '../r_components/CardA'

//Fotos Merch
import merc1 from "../images/merc1.png"
import merc2 from "../images/merc2.png"
import merc3 from "../images/merc3.jpg"
import merc4 from "../images/merc4.jpg"
import merc5 from "../images/merc5.png"
import merc6 from "../images/merc6.png"


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
            <div className = 'homeContainer'>
                <NavbarH></NavbarH>
                <h2 className = "tituloAnuncios">Anuncios</h2>
                <Anuncios></Anuncios>
                <div className = "sliderContainer">
                <Slider></Slider>
                </div>
            
                <div className="mentoria">
                    <div className="mentoria-title">
                        <h2 className = "mentoria-title-text">Apoyo Academico</h2>
                    </div>
                    <div className="box-home-container" id="mentoria-box">
                        <div className = "box1-mentoria">
                            <div className = "eventContainerMent">
                                <CardA imagen = {apoyo3} titulo = "Asesorate" descripcion = "Refuerzate utilizando el contenido de asesoria que han compartido tus compañeros"></CardA>
                            </div>  
                        </div>
                        <div className = "box2-mentoria">
                            <div className = "eventContainerMent">
                                <CardA imagen = {apoyo1} titulo = "Comparte" descripcion = "Publica en la plataforma contenido útil para el aprendizaje, y ayuda a tus compañeros"></CardA>
                            </div>  
                        </div>
                        <div className = "box3-mentoria">
                            <div className = "eventContainerMent">
                                <CardA imagen = {apoyo2} titulo = "Consulta" descripcion = "Revisa contenidos anteriores que se han documentado para refrescar tus conocimientos"></CardA>
                            </div>  
                        </div>
                    </div>
                
            </div>
            
            <div className = "homeTienda">            
                <h2 className = "tituloAnuncios">Tienda</h2>
                <div className = "carousel-container">
                    <div class="carousel">
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src={merc1}/></a>
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src={merc2}/></a>
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src={merc3}/></a>
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src= {merc4}/></a>
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src={merc5}/></a>
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src={merc6}/></a>
                    </div>   
                </div>

                <div className = "containerTienda">
                    <button class="btnTienda" href = "/ApoyoAcademico">Visita nuestra tienda!</button>
                </div>
            </div>
            <Footer></Footer>
            </div>
        )
    }
    
}

export default Home