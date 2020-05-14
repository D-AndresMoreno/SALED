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

import CardA from '../r_components/CardA'

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
                <div className = "sliderContainer">
                <Slider></Slider>
                </div>
            
                <div className="mentoria">
                    <div className="mentoria-title">
                        <h2 className = "mentoria-title-text">Apoyo Estudiantil</h2>
                    </div>
                    <div className="box-home-container" id="mentoria-box">
                        <div className = "eventContainerAnun">
                            <CardA imagen = {mentoria1} titulo = "Asesorate" descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"></CardA>
                        </div>   
                        <div className = "eventContainerAnun">
                            <CardA imagen = {mentoria2} titulo = "Comparte" descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"></CardA>
                        </div>  
                        <div className = "eventContainerAnun">
                            <CardA imagen = {mentoria3} titulo = "Consulta" descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"></CardA>
                        </div>  
                    </div>
                <div>
                    <button className="btnMent" href = "/ApoyoAcademico">Conoce más!</button>
                </div>
            </div>
            
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
                <button class="btnTienda" href = "/ApoyoAcademico">Compra ya!</button>
            </div>
          

            </div>
        )
    }
    
}

export default Home